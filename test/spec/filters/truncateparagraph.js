'use strict';

describe('Filter: truncateParagraph', function () {

  // load the filter's module
  beforeEach(module('moviesApp'));

  // initialize a new instance of the filter before each test
  var truncateParagraph;
  beforeEach(inject(function ($filter) {
    truncateParagraph = $filter('truncateParagraph');
  }));

  it('should return the input prefixed with "truncateParagraph filter:"', function () {
    var text = 'angularjs';
    expect(truncateParagraph(text)).toBe('truncateParagraph filter: ' + text);
  });

});
