'use strict';

describe('Service: sop', function () {

  // load the service's module
  beforeEach(module('seekerUiApp'));

  // instantiate service
  var sop;
  beforeEach(inject(function (_sop_) {
    sop = _sop_;
  }));

  it('should do something', function () {
    expect(!!sop).toBe(true);
  });

});
