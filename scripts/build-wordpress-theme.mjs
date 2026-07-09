import { copyFile, mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
const themeRoot = path.join(root, 'wordpress-theme');
const themeDir = path.join(themeRoot, 'accademia-italiana-ascoli');
const assetsDir = path.join(themeDir, 'assets');
const flatAssetsDir = themeDir;

async function copyDir(source, target) {
  await mkdir(target, { recursive: true });
  const entries = await readdir(source, { withFileTypes: true });
  for (const entry of entries) {
    const sourcePath = path.join(source, entry.name);
    const targetPath = path.join(target, entry.name);
    if (entry.isDirectory()) {
      await copyDir(sourcePath, targetPath);
    } else {
      await copyFile(sourcePath, targetPath);
    }
  }
}

function extractHeadMarkup(html) {
  const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
  if (!headMatch) {
    return '';
  }

  return headMatch[1]
    .replace(/<script[^>]*src="\.\/assets\/index-[^"]+\.js"[^>]*><\/script>\s*/gi, '')
    .replace(/<link[^>]*href="\.\/assets\/index-[^"]+\.css"[^>]*>\s*/gi, '')
    .replace(/<link rel="icon"[^>]*>\s*/gi, '')
    .replace(/<meta name="viewport"[^>]*>\s*/gi, '')
    .replace(/<meta charset="UTF-8"\s*\/?>\s*/gi, '')
    .replace(/<title>[\s\S]*?<\/title>\s*/gi, '')
    .replace(
      /<link rel="canonical" href="https:\/\/www\.accademia-italiana\.com\/"\s*\/?>/gi,
      `<link rel="canonical" href="<?php echo esc_url(home_url('/')); ?>">`,
    )
    .replace(
      /"url":\s*"https:\/\/www\.accademia-italiana\.com\/"/gi,
      `"url": "<?php echo esc_url(home_url('/')); ?>"`,
    )
    .replace(/content="\.\/og-accademia\.jpg"/gi, `content="<?php echo esc_url(get_template_directory_uri() . '/og-accademia.jpg'); ?>"`)
    .trim();
}

if (!existsSync(distDir)) {
  throw new Error('dist folder is missing. Run npm run build first.');
}

const indexHtml = await readFile(path.join(distDir, 'index.html'), 'utf8');
const extraHead = extractHeadMarkup(indexHtml);

await rm(themeDir, { recursive: true, force: true });
await mkdir(themeDir, { recursive: true });
await copyDir(path.join(distDir, 'assets'), assetsDir);

const builtAssets = await readdir(path.join(distDir, 'assets'));
for (const fileName of builtAssets) {
  await copyFile(path.join(distDir, 'assets', fileName), path.join(flatAssetsDir, fileName));
}

const manifestPath = path.join(distDir, 'manifest.json');
if (existsSync(manifestPath)) {
  await copyFile(manifestPath, path.join(themeDir, 'manifest.json'));
  await copyFile(manifestPath, path.join(assetsDir, 'manifest.json'));
}

for (const fileName of ['favicon.png', 'og-accademia.jpg']) {
  const source = path.join(distDir, fileName);
  if (existsSync(source)) {
    await copyFile(source, path.join(themeDir, fileName));
  }
}

if (existsSync(path.join(distDir, 'og-accademia.jpg'))) {
  await copyFile(path.join(distDir, 'og-accademia.jpg'), path.join(themeDir, 'screenshot.jpg'));
}

await writeFile(
  path.join(themeDir, 'style.css'),
  `/*
Theme Name: Accademia Italiana Ascoli
Theme URI: https://github.com/manofhonour/ascoli
Author: Accademia Italiana / Codex
Description: Boutique React-powered WordPress theme for Accademia Italiana in Ascoli Piceno. Built for preview, staging, and controlled activation.
Version: 0.1.1
Requires at least: 6.0
Tested up to: 6.6
Requires PHP: 7.4
Text Domain: accademia-italiana-ascoli
*/
`,
);

await writeFile(
  path.join(themeDir, 'functions.php'),
  `<?php
if (!defined('ABSPATH')) {
    exit;
}

function accademia_ascoli_asset_file($pattern) {
    $theme_dir = get_template_directory();
    $files = glob($theme_dir . '/' . $pattern);
    if (!$files) {
        $files = glob($theme_dir . '/assets/' . $pattern);
    }

    if (!$files) {
        return null;
    }

    sort($files);
    return str_replace($theme_dir . '/', '', $files[0]);
}

function accademia_ascoli_theme_file_path($relative_path) {
    return get_template_directory() . '/' . ltrim((string) $relative_path, '/');
}

function accademia_ascoli_theme_file_uri($relative_path) {
    return get_template_directory_uri() . '/' . ltrim((string) $relative_path, '/');
}

function accademia_ascoli_debug_message($message) {
    global $accademia_ascoli_debug_messages;

    if (!isset($accademia_ascoli_debug_messages) || !is_array($accademia_ascoli_debug_messages)) {
        $accademia_ascoli_debug_messages = array();
    }

    $accademia_ascoli_debug_messages[] = $message;
}

function accademia_ascoli_footer_debug_messages() {
    if (!current_user_can('manage_options')) {
        return;
    }

    global $accademia_ascoli_debug_messages;

    if (empty($accademia_ascoli_debug_messages) || !is_array($accademia_ascoli_debug_messages)) {
        return;
    }

    foreach (array_unique($accademia_ascoli_debug_messages) as $message) {
        echo "\\n<!-- Accademia Ascoli theme debug: " . esc_html($message) . " -->\\n";
    }
}
add_action('wp_footer', 'accademia_ascoli_footer_debug_messages', 99);

function accademia_ascoli_find_manifest_path() {
    $candidates = array('manifest.json', 'assets/manifest.json');

    foreach ($candidates as $candidate) {
        if (file_exists(accademia_ascoli_theme_file_path($candidate))) {
            return $candidate;
        }
    }

    return null;
}

function accademia_ascoli_read_manifest() {
    $manifest_path = accademia_ascoli_find_manifest_path();

    if (!$manifest_path) {
        accademia_ascoli_debug_message('manifest.json not found in the theme root or assets folder.');
        return null;
    }

    $contents = file_get_contents(accademia_ascoli_theme_file_path($manifest_path));
    if (!$contents) {
        accademia_ascoli_debug_message('manifest.json exists but could not be read.');
        return null;
    }

    $manifest = json_decode($contents, true);
    if (!is_array($manifest)) {
        accademia_ascoli_debug_message('manifest.json is not valid JSON.');
        return null;
    }

    return $manifest;
}

function accademia_ascoli_manifest_entry($manifest) {
    if (isset($manifest['index.html']) && is_array($manifest['index.html'])) {
        return $manifest['index.html'];
    }

    foreach ($manifest as $entry) {
        if (is_array($entry) && !empty($entry['isEntry'])) {
            return $entry;
        }
    }

    foreach ($manifest as $entry) {
        if (is_array($entry) && !empty($entry['file']) && preg_match('/\\.js$/', $entry['file'])) {
            return $entry;
        }
    }

    return null;
}

function accademia_ascoli_resolve_asset_path($relative_path) {
    $relative_path = ltrim((string) $relative_path, '/');
    $basename = basename($relative_path);
    $candidates = array($relative_path, $basename, 'assets/' . $basename);

    foreach (array_unique($candidates) as $candidate) {
        if (file_exists(accademia_ascoli_theme_file_path($candidate))) {
            return $candidate;
        }
    }

    return null;
}

function accademia_ascoli_manifest_assets() {
    static $assets = null;

    if ($assets !== null) {
        return $assets;
    }

    $assets = array(
        'css' => array(),
        'js' => null,
    );

    $manifest = accademia_ascoli_read_manifest();
    if (!$manifest) {
        return $assets;
    }

    $entry = accademia_ascoli_manifest_entry($manifest);
    if (!$entry) {
        accademia_ascoli_debug_message('No entry file was found in manifest.json.');
        return $assets;
    }

    if (!empty($entry['css']) && is_array($entry['css'])) {
        foreach ($entry['css'] as $css_file) {
            $resolved_css = accademia_ascoli_resolve_asset_path($css_file);
            if ($resolved_css) {
                $assets['css'][] = $resolved_css;
            } else {
                accademia_ascoli_debug_message('CSS file from manifest not found: ' . $css_file);
            }
        }
    }

    if (empty($assets['css'])) {
        foreach ($manifest as $manifest_item) {
            if (!is_array($manifest_item) || empty($manifest_item['file']) || !preg_match('/\\.css$/', $manifest_item['file'])) {
                continue;
            }

            $resolved_css = accademia_ascoli_resolve_asset_path($manifest_item['file']);
            if ($resolved_css) {
                $assets['css'][] = $resolved_css;
            }
        }
    }

    if (!empty($entry['file'])) {
        $resolved_js = accademia_ascoli_resolve_asset_path($entry['file']);
        if ($resolved_js) {
            $assets['js'] = $resolved_js;
        } else {
            accademia_ascoli_debug_message('JS file from manifest not found: ' . $entry['file']);
        }
    }

    if (!$assets['js']) {
        accademia_ascoli_debug_message('No main JS file was found in manifest.json.');
    }

    return $assets;
}

add_theme_support('title-tag');

function accademia_ascoli_document_title($title) {
    return 'Accademia Italiana | Boutique Italian Language School in Ascoli Piceno';
}
add_filter('pre_get_document_title', 'accademia_ascoli_document_title');

function accademia_ascoli_favicon() {
    echo '<link rel="icon" type="image/png" href="' . esc_url(get_template_directory_uri() . '/favicon.png') . '">' . "\\n";
}
add_action('wp_head', 'accademia_ascoli_favicon', 2);

function accademia_ascoli_enqueue_assets() {
    $assets = accademia_ascoli_manifest_assets();

    foreach ($assets['css'] as $index => $css) {
        wp_enqueue_style(
            'accademia-ascoli-app-' . $index,
            accademia_ascoli_theme_file_uri($css),
            array(),
            filemtime(accademia_ascoli_theme_file_path($css))
        );
    }

    if ($assets['js']) {
        $js = $assets['js'];
        $version = filemtime(accademia_ascoli_theme_file_path($js));

        if (function_exists('wp_enqueue_script_module')) {
            wp_enqueue_script_module(
                'accademia-ascoli-app',
                accademia_ascoli_theme_file_uri($js),
                array(),
                $version
            );
        } else {
        wp_enqueue_script(
            'accademia-ascoli-app',
                accademia_ascoli_theme_file_uri($js),
            array(),
                $version,
            true
        );
        }
    }
}
add_action('wp_enqueue_scripts', 'accademia_ascoli_enqueue_assets');

function accademia_ascoli_module_script_loader_tag($tag, $handle, $src) {
    if ($handle !== 'accademia-ascoli-app' || strpos($tag, ' type=') !== false) {
        return $tag;
    }

    return str_replace('<script ', '<script type="module" ', $tag);
}
add_filter('script_loader_tag', 'accademia_ascoli_module_script_loader_tag', 10, 3);

function accademia_ascoli_head_meta() {
    ?>
${extraHead}
    <?php
}
add_action('wp_head', 'accademia_ascoli_head_meta', 1);

function accademia_ascoli_render_app() {
    include get_template_directory() . '/react-shell.php';
}
`,
);

await writeFile(
  path.join(themeDir, 'react-shell.php'),
  `<?php
if (!defined('ABSPATH')) {
    exit;
}
?><!doctype html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
  </head>
  <body <?php body_class('accademia-react-theme'); ?>>
    <?php wp_body_open(); ?>
    <div id="root"></div>
    <?php wp_footer(); ?>
  </body>
</html>
`,
);

await writeFile(
  path.join(themeDir, 'front-page.php'),
  `<?php
if (!defined('ABSPATH')) {
    exit;
}

accademia_ascoli_render_app();
`,
);

await writeFile(
  path.join(themeDir, 'index.php'),
  `<?php
if (!defined('ABSPATH')) {
    exit;
}

accademia_ascoli_render_app();
`,
);

await writeFile(
  path.join(themeDir, 'page-accademia-react-preview.php'),
  `<?php
/**
 * Template Name: Accademia React Preview
 * Template Post Type: page
 */
if (!defined('ABSPATH')) {
    exit;
}

accademia_ascoli_render_app();
`,
);

await writeFile(
  path.join(themeDir, 'README.md'),
  `# Accademia Italiana Ascoli WordPress Theme

This folder is generated from the React/Vite project.

## Use

1. Run \`npm run build:wordpress\`.
2. Zip the \`accademia-italiana-ascoli\` folder.
3. Upload the zip in WordPress under Appearance -> Themes -> Add New -> Upload Theme.
4. Use Live Preview first. Do not activate on a production site until the school has approved the preview.

The theme also includes a page template named **Accademia React Preview** for controlled review on a WordPress page after activation in a staging environment.
`,
);

await mkdir(themeRoot, { recursive: true });
console.log(`WordPress theme generated: ${themeDir}`);
