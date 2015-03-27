'use strict';

describe('Service: groupNames', function () {

  // load the service's module
  beforeEach(module('seekerUiApp'));

  // instantiate service
  var groupNames;
  beforeEach(inject(function (_groupNames_) {
    groupNames = _groupNames_;
  }));

  it('should do something', function () {
    expect(!!groupNames).toBe(true);
  });

});
