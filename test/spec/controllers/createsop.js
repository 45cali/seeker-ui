'use strict';

describe('Controller: CreateSopCtrl', function () {

  // load the controller's module
  beforeEach(module('seekerUiApp'));

  var CreateSopCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateSopCtrl = $controller('CreateSopCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
