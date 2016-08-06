(function (window) {
  'use strict';

  var applicationModuleName = 'mean';

  var service = {
    applicationModuleName: applicationModuleName,
    applicationModuleVendorDependencies: [
    'angular-loading-bar',
		'ngResource',
    'ngMessages',
    'angularFileUpload',
    'leaflet-directive',
		'ngRoute',
		'ngLocale',
		'ngTouch',
		'ngCookies',
		'ngAnimate',
		'ngSanitize',
		'angular.filter',
		'ui.router',
		'ui.select',
		'ui.bootstrap',
		'pascalprecht.translate',
		'tmh.dynamicLocale',
		'growlNotifications',
		'duScroll',
		'td.easySocialShare',
		'ngSocial',
		'ngAria'
  ],
    registerModule: registerModule
  };

  window.ApplicationConfiguration = service;

  // Add a new vertical module
  function registerModule(moduleName, dependencies) {
    // Create angular module
    angular.module(moduleName, dependencies || []);

    // Add the module to the AngularJS configuration file
    angular.module(applicationModuleName).requires.push(moduleName);
  }
}(window));
