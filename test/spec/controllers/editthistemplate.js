'use strict';

describe('Controller: EditThisTemplateCtrl', function () {

  // load the controller's module
  beforeEach(module('seekerUiApp'));

  var EditThisTemplateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditThisTemplateCtrl = $controller('EditThisTemplateCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
