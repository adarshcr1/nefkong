/**
 * This file contains all necessary Angular service definitions for 'frontend.core.layout' module.
 *
 * Note that this file should only contain services and nothing else.
 */
(function() {
  'use strict';

  // Generic service to return all available menu items for main level navigation.
  angular.module('frontend.core.layout')
    .factory('HeaderNavigationItems', [
      'AccessLevels','AuthService','$rootScope','UserService',
      function factory(AccessLevels,AuthService,$rootScope,UserService) {
        return [
          {
            state: 'dashboard',
            show : function() {
              return AuthService.isAuthenticated() && UserService.user().node
            },
            title: 'Dashboard',
            access: AccessLevels.user
          },
          {
            state: 'info',
            show : function() {
              return AuthService.isAuthenticated() && UserService.user().node
            },
            title: 'Node info',
            access: AccessLevels.user
          },
          {
            state: 'apis',
            show : function() {
              return AuthService.isAuthenticated() && UserService.user().node
            },
            title: 'APIs',
            access: AccessLevels.user
          },
          {
            state: 'consumers',
            show : function() {
              return AuthService.isAuthenticated() && UserService.user().node
            },
            title: 'Consumers',
            access: AccessLevels.user
          },
          {
            state: 'plugins',
            show : function() {
              return AuthService.isAuthenticated() && UserService.user().node
            },
            title: 'Plugins',
            access: AccessLevels.anon
          },
          {
            state: 'upstreams',
            show : function() {
              return AuthService.isAuthenticated() && UserService.user().node && $rootScope.Gateway && $rootScope.Gateway.version.indexOf("0.10.") > -1
            },
            title: 'Upstreams',
            access: AccessLevels.anon
          }
        ];
      }
    ])
  ;
}());