'use strict';

describe('Service: convertToMoment', function () {

  // load the service's module
  beforeEach(module('moviesApp'));

  // instantiate service
  var convertToMoment;
  beforeEach(inject(function (_convertToMoment_) {
    convertToMoment = _convertToMoment_;
  }));

  it('should do something', function () {
    expect(!!convertToMoment).toBe(true);
  });

});
