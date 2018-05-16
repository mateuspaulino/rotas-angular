// Criação do módulo principal da aplicação
var app = angular.module('app', ['ngRoute']);

app.config(["$routeProvider", function($routeProvider,$locationProvider) {
    $routeProvider.
      when('templates/usuario', {
        templateUrl: 'usuario.html',
        controller: 'usuarioController',
      })
      // .otherwise({
      //     redirectTo: '/'
      // });
      $locationProvider.html5Mode(true);
}]);

