angular.module('Playground').config(
  ['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $routeProvider
      .when('/', {
       templateUrl: '/components/login/login.view.html',
      })
      .when('/logout', {
      templateUrl: '/components/main/main.view.html',
      controller: 'Godesk_LogoutController'
      })
      .when('/main', {
        templateUrl: '/components/main/main.view.html',
      })
      .when('/subcribers', {
      templateUrl: '/components/subcribers/subcriber.view.html',
      controller: 'Godesk_SubcriberController'
      })          
      // Otherwise
      .otherwise({
        redirectTo: '/'
      });
    }
  ]
);