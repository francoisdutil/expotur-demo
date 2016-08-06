'use strict';

/* eslint comma-dangle:[0, "only-multiline"] */

module.exports = {
  client: {
    lib: {
      css: [
        // bower:css
        'public/lib/bootstrap/dist/css/bootstrap.css',
        'public/lib/bootstrap/dist/css/bootstrap-theme.css',
        'public/lib/angular-loading-bar/build/loading-bar.css',
				'http://necolas.github.io/normalize.css/2.1.1/normalize.css',
				'public/lib/ngDialog/css/ngDialog.css',
				//'public/lib/ngDialog/css/ngDialog-theme-plain.css',
				'public/lib/font-awesome/css/font-awesome.css',
				'public/lib/angular-ui-select/dist/select.css',
				'public/lib/animate.css/animate.css',
				'public/lib/angular-social/angular-social.css',
				'public/lib/malhar-angular-dashboard/dist/angular-ui-dashboard.css',
				'public/lib/angular-material/angular-material.css',
				'public/lib/flexslider/flexslider.css',
				'public/lib/leaflet/dist/leaflet.css',
				'public/lib/leaflet.markercluster/dist/MarkerCluster.css',
				'public/lib/Leaflet.label/dist/leaflet.label.css',
				'public/lib/Leaflet.awesome-markers/dist/leaflet.awesome-markers.css',
				'public/lib/leaflet.markercluster/dist/MarkerCluster.Default.css',
        // endbower
      ],
      js: [
        // bower:js
        'public/lib/angular/angular.js',
        'public/lib/angular-animate/angular-animate.js',
        'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
        'public/lib/angular-file-upload/dist/angular-file-upload.min.js',
        'public/lib/angular-messages/angular-messages.js',
        'public/lib/angular-mocks/angular-mocks.js',
        'public/lib/angular-resource/angular-resource.js',
        'public/lib/angular-ui-router/release/angular-ui-router.js',
        'public/lib/owasp-password-strength-test/owasp-password-strength-test.js','public/lib/jquery/dist/jquery.min.js',
				'public/lib/es5-shim/es5-shim.min.js',
				'public/lib/angular-loading-bar/build/loading-bar.min.js',
				'public/lib/angular-touch/angular-touch.js',
				'public/lib/angular-filter/dist/angular-filter.js',
				'public/lib/angular-resource/angular-resource.js',
				'public/lib/angular-animate/angular-animate.js',
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-select/dist/select.js',
				'public/lib/angular-ui-sortable/sortable.js',
				'public/lib/json3/lib/json3.min.js',
				'public/lib/angular-route/angular-route.min.js',
				'public/lib/angular-cookies/angular-cookies.min.js',
				'public/lib/angular-sanitize/angular-sanitize.min.js',
				'public/lib/angular-aria/angular-aria.js',
				'public/lib/messageformat/messageformat.js',
				'public/lib/angular-translate/angular-translate.min.js',
				'public/lib/angular-translate-interpolation-messageformat/angular-translate-interpolation-messageformat.min.js',
				'public/lib/angular-translate-storage-cookie/angular-translate-storage-cookie.min.js',
				'public/lib/angular-translate-storage-local/angular-translate-storage-local.min.js',
				'public/lib/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js',
				'public/lib/angular-translate-handler-log/angular-translate-handler-log.js',
				'public/lib/angular-dynamic-locale/src/tmhDynamicLocale.js',
				'public/lib/ngDialog/js/ngDialog.js',
				'public/lib/angularytics/dist/angularytics.min.js',
				'public/assets/js/bootstrap-colorpicker-module.js',
				'public/lib/PreloadJS/lib/preloadjs-0.4.1.min.js',
				'public/lib/angular-growl-notifications/dist/angular-growl-notifications.js',
				'public/lib/ng-droplet/dist/ng-droplet.js',
				'public/lib/angular-scroll/angular-scroll.js',
				'public/lib/angular-easy-social-share/easy-social-share.js',
				'public/lib/angular-social/angular-social.js',
				'public/lib/horizonal/dist/horizonal.min.js',
				'public/lib/json-edit/js/directives.js',
				'public/lib/malhar-angular-dashboard/dist/angular-ui-dashboard.js',
				'public/lib/angular-material/angular-material.js',
				'public/lib/leaflet/dist/leaflet.js',
				'public/lib/angular-flexslider/angular-flexslider.js',
				'public/lib/angular-leaflet-directive/dist/angular-leaflet-directive.js',
				'public/lib/leaflet.markercluster/dist/leaflet.markercluster.js',
        // endbower
      ],
      tests: ['public/lib/angular-mocks/angular-mocks.js']
    },
    css: [
      'modules/*/client/css/*.css'
    ],
    less: [
      'modules/*/client/less/*.less'
    ],
    sass: [
      'modules/*/client/scss/*.scss'
    ],
    js: [
      'modules/core/client/app/config.js',
      'modules/core/client/app/init.js',
      'modules/*/client/*.js',
      'modules/*/client/**/*.js'
    ],
    img: [
      'modules/**/*/img/**/*.jpg',
      'modules/**/*/img/**/*.png',
      'modules/**/*/img/**/*.gif',
      'modules/**/*/img/**/*.svg'
    ],
    views: ['modules/*/client/views/**/*.html'],
    templates: ['build/templates.js']
  },
  server: {
    gruntConfig: ['gruntfile.js'],
    gulpConfig: ['gulpfile.js'],
    allJS: ['server.js', 'config/**/*.js', 'modules/*/server/**/*.js'],
    models: 'modules/*/server/models/**/*.js',
    routes: ['modules/!(core)/server/routes/**/*.js', 'modules/core/server/routes/**/*.js'],
    sockets: 'modules/*/server/sockets/**/*.js',
    config: ['modules/*/server/config/*.js'],
    policies: 'modules/*/server/policies/*.js',
    views: ['modules/*/server/views/*.html']
  }
};
