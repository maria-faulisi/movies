'use strict';

describe('Service: getActor', function () {

  // load the service's module
  beforeEach(module('moviesApp'));

  // instantiate service
  var getActor;
  beforeEach(inject(function (_getActor_) {
    getActor = _getActor_;
  }));

  it('should do something', function () {
    expect(!!getActor).toBe(true);
  });

});
