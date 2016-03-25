'use strict';

describe('Service: movieDb', function () {

  // load the service's module
  beforeEach(module('moviesApp'));

  // instantiate service
  var movieDb;
  beforeEach(inject(function (_movieDb_) {
    movieDb = _movieDb_;
  }));

  it('should do something', function () {
    expect(!!movieDb).toBe(true);
  });

});
