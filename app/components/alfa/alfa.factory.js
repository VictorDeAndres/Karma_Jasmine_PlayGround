angular.module('Playground').factory('Alfa.Factory',[
   function(){

        var factoryAlfa = {};

        var _alfa = {
            zulu: 'A',
            yankee: 'B'
        };

        factoryAlfa.getAlfa = function(){
            return _alfa;
        };

        return factoryAlfa;
   }
]);