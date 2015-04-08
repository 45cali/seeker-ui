'use strict';

describe('Service: backendHost', function () {

  // load the service's module
  beforeEach(module('seekerUiApp'));

  // instantiate service
  var backendHost;
  beforeEach(inject(function (_backendHost_) {
    backendHost = _backendHost_;
  }));

  it('should do something', function () {
    expect(!!backendHost).toBe(true);
  });

});
