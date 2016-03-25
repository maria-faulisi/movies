'use strict';

describe('Service: getActorsMovies', function () {

  // load the service's module
  beforeEach(module('moviesApp'));

  // instantiate service
  var getActorsMovies;
  beforeEach(inject(function (_getActorsMovies_) {
    getActorsMovies = _getActorsMovies_;
  }));

  it('should do something', function () {
    expect(!!getActorsMovies).toBe(true);
  });

});
