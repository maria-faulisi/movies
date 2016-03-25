'use strict';

describe('Service: getTopRatedMovies', function () {

  // load the service's module
  beforeEach(module('moviesApp'));

  // instantiate service
  var getTopRatedMovies;
  beforeEach(inject(function (_getTopRatedMovies_) {
    getTopRatedMovies = _getTopRatedMovies_;
  }));

  it('should do something', function () {
    expect(!!getTopRatedMovies).toBe(true);
  });

});
