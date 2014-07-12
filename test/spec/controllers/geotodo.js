'use strict';

describe('Controller: GeotodoCtrl', function () {

  // load the controller's module
  beforeEach(module('noBackendApp'));

  var GeotodoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GeotodoCtrl = $controller('GeotodoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
