describe('Unit Test. Scaffold Playground', function() {

  beforeEach(function() {
    module('Playground');
  });

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  it('should behave playground module', function() {
    expect(module).not.toBe(null);
  });

  describe('Unit Test. controllers exists', function() {
    it('should behave controller.Alfa', function() {
      var $scope = {};
      var controller = $controller('Alfa.Controller', { $scope: $scope });      
      expect(controller).not.toBe(null);
    });

    it('should behave controller.Bravo', function() {
      var $scope = {};
      var controller = $controller('Bravo.Controller', { $scope: $scope });      
      expect(controller).not.toBe(null);
    });    
  });
  
});