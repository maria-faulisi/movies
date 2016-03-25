'use strict';

describe('Service: getSingleMovie', function () {

  // load the service's module
  beforeEach(module('moviesApp'));

  // instantiate service
  var getSingleMovie;
  beforeEach(inject(function (_getSingleMovie_) {
    getSingleMovie = _getSingleMovie_;
  }));

  it('should do something', function () {
    expect(!!getSingleMovie).toBe(true);
  });

});
