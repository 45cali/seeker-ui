'use strict';

describe('Service: checkJwt', function () {

  // load the service's module
  beforeEach(module('seekerUiApp'));

  // instantiate service
  var checkJwt;
  beforeEach(inject(function (_checkJwt_) {
    checkJwt = _checkJwt_;
  }));

  it('should do something', function () {
    expect(!!checkJwt).toBe(true);
  });

});
