'use strict';

describe('Controller: CreateTemplateCtrl', function () {

  // load the controller's module
  beforeEach(module('seekerUiApp'));

  var CreateTemplateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateTemplateCtrl = $controller('CreateTemplateCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
