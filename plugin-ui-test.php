<?php
/**
 * Plugin Name: Plugin UI Test
 * Description: Demo plugin showing @wedevs/plugin-ui with multiple themes on same page.
 * Version: 1.0.0
 * Author: weDevs
 */

add_action( 'admin_menu', function() {
    add_menu_page(
        'Plugin UI Test',
        'UI Test',
        'manage_options',
        'plugin-ui-test',
        function() {
            ?>
            <div class="wrap" style="display: flex; flex-direction: column; gap: 20px; padding: 20px;">
                <!-- Plugin A: Dokan Theme (Purple) -->
                <div id="plugin-dokan-app" style="flex: 1;"></div>
                
                <!-- Plugin B: WeMail Theme (Blue) -->
                <div id="plugin-wemail-app" style="flex: 1;"></div>
                <div id="plugin-ui-demo-app" style="flex: 1;"></div>

            </div>
            <?php
        },
        'dashicons-layout',
        100
    );
} );

add_action( 'admin_enqueue_scripts', function( $hook ) {
    $labels = [
        'toplevel_page_plugin-ui-test',
        'toplevel_page_plugin-ui-demo',
    ];

    if ( ! in_array($hook,$labels ) ) {
        return;
    }

    $asset_file = include plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

    wp_enqueue_script(
        'plugin-ui-test-script',
        plugin_dir_url( __FILE__ ) . 'build/index.js',
        $asset_file['dependencies'],
        $asset_file['version'],
        true
    );

    wp_enqueue_style(
        'plugin-ui-test-style',
        plugin_dir_url( __FILE__ ) . 'build/style-index.css',
        [],
        $asset_file['version']
    );

    wp_enqueue_media();
} );
