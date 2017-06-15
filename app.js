(function(){
  'use strict';
  angular.module('myFirstApp',[])
  .controller('myFirstController',function($scope){
$scope.name="priyabrat";
$scope.sayHello=function(){
  return "hello coursera";
};
  });
})();
