<?php
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
        echo "\n<!-- Accademia Ascoli theme debug: " . esc_html($message) . " -->\n";
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
        if (is_array($entry) && !empty($entry['file']) && preg_match('/\.js$/', $entry['file'])) {
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
            if (!is_array($manifest_item) || empty($manifest_item['file']) || !preg_match('/\.css$/', $manifest_item['file'])) {
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
    echo '<link rel="icon" type="image/png" href="' . esc_url(get_template_directory_uri() . '/favicon.png') . '">' . "\n";
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
<meta
      name="description"
      content="Accademia Italiana is a boutique Italian language school in Ascoli Piceno, Italy, offering small-group, extensive, individual, cultural and tailor-made Italian courses for adult international learners."
    />
    <meta name="robots" content="index, follow" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Accademia Italiana Ascoli Piceno" />
    <meta
      property="og:description"
      content="Study Italian in Ascoli Piceno through small classes, local culture and everyday life in the region Le Marche."
    />
    <meta property="og:image" content="<?php echo esc_url(get_template_directory_uri() . '/og-accademia.jpg'); ?>" />
    <meta property="og:locale" content="en_GB" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="canonical" href="<?php echo esc_url(home_url('/')); ?>">
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Accademia Italiana",
        "alternateName": "Accademia Internazionale",
        "url": "<?php echo esc_url(home_url('/')); ?>",
        "email": "info@accademia-italiana.com",
        "telephone": "+39 0736 257735",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Corso Vittorio Emanuele, 27",
          "addressLocality": "Ascoli Piceno",
          "addressRegion": "AP",
          "postalCode": "63100",
          "addressCountry": "IT"
        },
        "sameAs": [
          "https://www.accademia-internazionale.com/landing/"
        ]
      }
    </script>
    <?php
}
add_action('wp_head', 'accademia_ascoli_head_meta', 1);

function accademia_ascoli_render_app() {
    include get_template_directory() . '/react-shell.php';
}
