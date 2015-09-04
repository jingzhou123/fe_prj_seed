require.ensure(['angular'], function() {
  require('angular');
  angular.module('app', [])
  .controller('AppCtrl', ['$scope', function($scope) {
    $scope.greetings = 'hello';
  } ]);
  angular.bootstrap(document, ['app']);

});
