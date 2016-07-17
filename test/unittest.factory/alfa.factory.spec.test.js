
describe('Unit Test. Alfa.Factory', function() {
  // Load Module
  beforeEach(function() {
    module('Playground');
  });

  var factory, object, 
    array = [];

  beforeEach(inject(function($injector){
    factory = $injector.get('Alfa.Factory');
    object = factory.getAlfa();
    for (var propertyName in object) {
      array.push(propertyName);
    }    
  }));

  describe('propierties object alfa.factory', function() {

    it('should behave zulu propierties', function() {
      expect(array).toContain('zulu');
    });

    it('should behave yankee propierties', function() {
      expect(array).toContain('yankee');
    });
    
  });
});
