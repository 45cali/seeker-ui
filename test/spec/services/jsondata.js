'use strict';

describe('Service: jsonData', function () {

  // load the service's module
  beforeEach(module('seekerUiApp'));

  // instantiate service
  var jsonData;
  beforeEach(inject(function (_jsonData_) {
    jsonData = _jsonData_;
  }));

  it('should do something', function () {
    expect(!!jsonData).toBe(true);
  });

});
