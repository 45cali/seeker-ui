'use strict';

describe('Controller: SopsCtrl', function () {

  // load the controller's module
  beforeEach(module('seekerUiApp'));

  var SopsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SopsCtrl = $controller('SopsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
