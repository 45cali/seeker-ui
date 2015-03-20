'use strict';

describe('Directive: onenter', function () {

  // load the directive's module
  beforeEach(module('seekerUiApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<onenter></onenter>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the onenter directive');
  }));
});
