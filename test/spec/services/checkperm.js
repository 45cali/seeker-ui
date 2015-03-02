'use strict';

describe('Service: checkPerm', function () {

  // load the service's module
  beforeEach(module('seekerUiApp'));

  // instantiate service
  var checkPerm;
  beforeEach(inject(function (_checkPerm_) {
    checkPerm = _checkPerm_;
  }));

  it('should do something', function () {
    expect(!!checkPerm).toBe(true);
  });

});
