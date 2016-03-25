'use strict';

describe('Service: getCast', function () {

  // load the service's module
  beforeEach(module('moviesApp'));

  // instantiate service
  var getCast;
  beforeEach(inject(function (_getCast_) {
    getCast = _getCast_;
  }));

  it('should do something', function () {
    expect(!!getCast).toBe(true);
  });

});
