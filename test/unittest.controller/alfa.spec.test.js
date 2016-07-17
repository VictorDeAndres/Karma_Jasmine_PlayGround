describe('Unit Test. Alfa.Controller', function() {

  beforeEach(function() {
    module('Playground');
  });

  var $controller,
    $scope = {};

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
    controller = $controller('Alfa.Controller', { $scope: $scope });          
  }));

  it('should behave InitValue variable', function() {
    expect($scope.InitValue).toBeUndefined();
  });

});