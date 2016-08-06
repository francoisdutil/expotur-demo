'use strict';

/* eslint comma-dangle:[0, "only-multiline"] */

module.exports = {
  client: {
    lib: {
      css: [
        // bower:css
        'public/lib/bootstrap/dist/css/bootstrap.css',
        'public/lib/bootstrap/dist/css/bootstrap-theme.css',
        'public/lib/ng-dialog/css/ngDialog.css',
        'public/lib/ng-dialog/css/ngDialog-theme-default.css',
        'public/lib/angular-ui-select/dist/select.css',
        'public/lib/animate.css/animate.css',
        'public/lib/angular-loading-bar/build/loading-bar.css',
        'public/lib/angular-social/angular-social.css',
        'public/lib/angular-material/angular-material.css',
        'public/lib/bootstrap-datepicker/dist/css/bootstrap-datepicker3.css',
        'public/lib/leaflet/dist/leaflet.css',
        'public/lib/leaflet.markercluster/dist/MarkerCluster.css',
        'public/lib/leaflet.markercluster/dist/MarkerCluster.Default.css',
        'public/lib/Leaflet.awesome-markers/dist/leaflet.awesome-markers.css',
        // endbower
      ],
      js: [
        // bower:js
        'public/lib/angular/angular.js',
        'public/lib/angular-animate/angular-animate.js',
        'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
        'public/lib/angular-file-upload/dist/angular-file-upload.min.js',
        'public/lib/angular-messages/angular-messages.js',
        'public/lib/angular-touch/angular-touch.js',
        'public/lib/angular-mocks/angular-mocks.js',
        'public/lib/angular-resource/angular-resource.js',
        'public/lib/angular-ui-router/release/angular-ui-router.js',
        'public/lib/owasp-password-strength-test/owasp-password-strength-test.js',
        'public/lib/json3/lib/json3.js',
        'public/lib/angular-translate/angular-translate.js',
        'public/lib/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
        'public/lib/angular-cookies/angular-cookies.js',
        'public/lib/angular-translate-storage-cookie/angular-translate-storage-cookie.js',
        'public/lib/messageformat/messageformat.js',
        'public/lib/angular-translate-interpolation-messageformat/angular-translate-interpolation-messageformat.js',
        'public/lib/angular-translate-handler-log/angular-translate-handler-log.js',
        'public/lib/angular-translate-storage-local/angular-translate-storage-local.js',
        'public/lib/angular-dynamic-locale/src/tmhDynamicLocale.js',
        'public/lib/ng-dialog/js/ngDialog.js',
        'public/lib/ngSelect/ngSelect.js',
        'public/lib/angular-ui-select/dist/select.js',
        'public/lib/angular-growl-notifications/dist/angular-growl-notifications.js',
        'public/lib/angular-filter/dist/angular-filter.js',
        'public/lib/ng-droplet/dist/ng-droplet.min.js',
        'public/lib/ui-scroll/dist/ui-scroll.js',
        'public/lib/angular-scroll/angular-scroll.js',
        'public/lib/angular-loading-bar/build/loading-bar.js',
        'public/lib/angular-easy-social-share/easy-social-share.js',
        'public/lib/angular-social/angular-social.js',
        'public/lib/jquery-ui/jquery-ui.js',
        'public/lib/angular-ui-sortable/sortable.js',
        'public/lib/angular-aria/angular-aria.js',
        'public/lib/angular-material/angular-material.js',
        'public/lib/angular-strap/dist/angular-strap.js',
        'public/lib/angular-strap/dist/angular-strap.tpl.js',
        'public/lib/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js',
        'public/lib/leaflet/dist/leaflet-src.js',
        'public/lib/angular-leaflet-directive/dist/angular-leaflet-directive.js',
        'public/lib/leaflet.markercluster/dist/leaflet.markercluster-src.js',
        'public/lib/Leaflet.awesome-markers/dist/leaflet.awesome-markers.js',
        'public/lib/angular-route/angular-route.js',
        'public/lib/angular-sanitize/angular-sanitize.js',
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
