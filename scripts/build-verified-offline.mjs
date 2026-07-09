import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = process.cwd();
const distDir = path.join(root, 'dist');
const assetsDir = path.join(distDir, 'assets');
const downloadDir = path.join(root, 'download');
const htmlPath = path.join(distDir, 'index.html');
const outputHtml = path.join(downloadDir, 'accademia-italiana-offline.html');
const outputZip = path.join(downloadDir, 'accademia-italiana-offline-html.zip');

const mimeByExt = new Map([
  ['.avif', 'image/avif'],
  ['.css', 'text/css'],
  ['.gif', 'image/gif'],
  ['.jpeg', 'image/jpeg'],
  ['.jpg', 'image/jpeg'],
  ['.js', 'text/javascript'],
  ['.json', 'application/json'],
  ['.png', 'image/png'],
  ['.svg', 'image/svg+xml'],
  ['.webp', 'image/webp'],
  ['.woff', 'font/woff'],
  ['.woff2', 'font/woff2'],
]);

function assertFile(filePath, message) {
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    throw new Error(message);
  }
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function dataUri(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const mime = mimeByExt.get(ext);
  if (!mime) {
    throw new Error(`Unsupported asset type for offline HTML: ${filePath}`);
  }

  return `data:${mime};base64,${fs.readFileSync(filePath).toString('base64')}`;
}

function textDataUri(content, mime) {
  return `data:${mime};base64,${Buffer.from(content, 'utf8').toString('base64')}`;
}

function replaceAssetReferences(source, assetDataUris) {
  let result = source;

  for (const [fileName, uri] of assetDataUris) {
    const escapedName = escapeRegExp(fileName);
    const patterns = [
      new RegExp(`\\.\\/assets\\/${escapedName}`, 'g'),
      new RegExp(`\\.\\/${escapedName}`, 'g'),
      new RegExp(`assets\\/${escapedName}`, 'g'),
      new RegExp(`\\/assets\\/${escapedName}`, 'g'),
      new RegExp(escapedName, 'g'),
    ];

    for (const pattern of patterns) {
      result = result.replace(pattern, uri);
    }
  }

  return result;
}

function createScriptDataUris(mediaAssetDataUris) {
  const scriptSources = new Map(
    fs.readdirSync(assetsDir)
      .filter((fileName) => path.extname(fileName).toLowerCase() === '.js')
      .map((fileName) => {
        const sourcePath = path.join(assetsDir, fileName);
        const source = replaceAssetReferences(fs.readFileSync(sourcePath, 'utf8'), mediaAssetDataUris);
        return [fileName, source];
      }),
  );

  let scriptDataUris = new Map(
    [...scriptSources].map(([fileName, source]) => [fileName, textDataUri(source, 'text/javascript')]),
  );

  for (let pass = 0; pass < 3; pass += 1) {
    const nextScriptDataUris = new Map();

    for (const [fileName, source] of scriptSources) {
      const rewrittenSource = replaceAssetReferences(source, scriptDataUris);
      nextScriptDataUris.set(fileName, textDataUri(rewrittenSource, 'text/javascript'));
    }

    scriptDataUris = nextScriptDataUris;
  }

  return scriptDataUris;
}

function inlineStyles(html, assetDataUris) {
  return html.replace(
    /<link\s+rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/g,
    (_match, href) => {
      const filePath = path.join(distDir, href.replace(/^\.\//, ''));
      assertFile(filePath, `Missing stylesheet referenced by dist/index.html: ${href}`);
      const css = replaceAssetReferences(fs.readFileSync(filePath, 'utf8'), assetDataUris);
      return `<style data-offline-source="${path.basename(filePath)}">\n${css}\n</style>`;
    },
  );
}

function inlineScripts(html, mediaAssetDataUris, scriptDataUris) {
  return html.replace(
    /<script\s+type="module"[^>]*src="([^"]+)"[^>]*><\/script>/g,
    (_match, src) => {
      const filePath = path.join(distDir, src.replace(/^\.\//, ''));
      assertFile(filePath, `Missing script referenced by dist/index.html: ${src}`);
      const jsWithMedia = replaceAssetReferences(fs.readFileSync(filePath, 'utf8'), mediaAssetDataUris);
      const js = replaceAssetReferences(jsWithMedia, scriptDataUris);
      return `<script type="module" data-offline-source="${path.basename(filePath)}">\n${js}\n</script>`;
    },
  );
}

function createZip() {
  if (fs.existsSync(outputZip)) {
    fs.rmSync(outputZip, { force: true });
  }

  if (process.platform === 'win32') {
    try {
      execFileSync('powershell.exe', [
        '-NoProfile',
        '-ExecutionPolicy',
        'Bypass',
        '-Command',
        `Compress-Archive -LiteralPath ${JSON.stringify(outputHtml)} -DestinationPath ${JSON.stringify(outputZip)} -Force`,
      ], { stdio: 'inherit' });
      return;
    } catch (error) {
      throw new Error(`Could not create offline ZIP package with PowerShell: ${error.message}`);
    }
  }

  try {
    execFileSync('zip', ['-q', outputZip, path.basename(outputHtml)], {
      cwd: downloadDir,
      stdio: 'inherit',
    });
  } catch (error) {
    throw new Error(`Could not create offline ZIP package with zip: ${error.message}`);
  }
}

assertFile(htmlPath, 'Run `npm run build` before building the offline HTML.');
if (!fs.existsSync(assetsDir) || !fs.statSync(assetsDir).isDirectory()) {
  throw new Error('Missing dist/assets. Run `npm run build` before building the offline HTML.');
}

fs.mkdirSync(downloadDir, { recursive: true });

const assetDataUris = fs.readdirSync(assetsDir)
  .filter((fileName) => {
    const ext = path.extname(fileName).toLowerCase();
    return mimeByExt.has(ext) && !['.js', '.css', '.json'].includes(ext);
  })
  .map((fileName) => [fileName, dataUri(path.join(assetsDir, fileName))]);
assetDataUris.push(
  ...fs.readdirSync(distDir)
    .filter((fileName) => {
      const filePath = path.join(distDir, fileName);
      const ext = path.extname(fileName).toLowerCase();
      return fs.statSync(filePath).isFile() && mimeByExt.has(ext) && !['.js', '.css', '.json'].includes(ext);
    })
    .map((fileName) => [fileName, dataUri(path.join(distDir, fileName))]),
);
const scriptDataUris = createScriptDataUris(assetDataUris);

let html = fs.readFileSync(htmlPath, 'utf8');
html = inlineStyles(html, assetDataUris);
html = html.replace(/<link\s+rel="modulepreload"[^>]*>/g, '');
html = inlineScripts(html, assetDataUris, scriptDataUris);
html = replaceAssetReferences(html, assetDataUris);

html = html.replace(
  '</head>',
  '  <meta name="offline-build" content="Accademia Italiana Ascoli single-file React preview">\n</head>',
);

fs.writeFileSync(outputHtml, html, 'utf8');
createZip();

console.log(`Wrote ${outputHtml}`);
console.log(`Wrote ${outputZip}`);
console.log(`Embedded ${assetDataUris.length} build assets into the offline HTML.`);
