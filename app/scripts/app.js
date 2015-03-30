(function(){
	'use strict';
	var $ = require('jquery');
	require('angular');
	require('angular-route');
	require('angular-ui-router');
	require('angular-jwt');
	require('angular-inflector');
	require('angular-restmod');
	require('angular-animate');
	require('angular-aria');
	require('moment');
	require('angular-moment');
	
	require('../modules/Login/Login.module');
	require('../modules/PasswordReset/PasswordReset.module');
	require('../modules/UserApplication/UserApplication.module');

	var app = angular.module('App', [
		'ui.router',
		'angular-jwt',
		'angularUtils.directives.dirPagination',
		'restmod',
		'ngAnimate',
		'ngAria',
		'ngMaterial'
	])
	
})();
