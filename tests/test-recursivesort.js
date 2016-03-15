// testrecursivesort.js
var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var rs = require('./../recursivesort');

describe('recursivesort', function() {
  it('split() should split an array [1,2] into 2 arrays [1], and [2]', function() {
    expect(rs.split([1,2])).to.deep.equal([[1],[2]]);
  });

  it('split() should split an array [1,2,3] into 2 arrays [1], and [2, 3]', function() {
    expect(rs.split([1,2,3])).to.deep.equal([[1],[2,3]]);
  });

  it('split() should split an array [1,2,3,4,5,6] into 2 arrays [1,2,3], and [4,5,6]', function() {
    expect(rs.split([1,2,3,4,5,6])).to.deep.equal([[1,2,3],[4,5,6]]);
  });
});

describe('themergefunctiontest', function() {
	it('merge should combine [1] and [2] into [1,2]', function() {
		expect(rs.merge([1],[2])).to.deep.equal([1,2]);
	});
    it('merge should combine [2] and [3] into [2,3]', function() {
		expect(rs.merge([2],[3])).to.deep.equal([2,3]);
	});
	it('merge should combine [1,2] and [3] into [1,2,3]', function() {
		expect(rs.merge([1,2],[3])).to.deep.equal([1,2,3]);
	});
	it('merge should combine [1] and [2,3] into [1,2,3]', function() {
		expect(rs.merge([1],[2,3])).to.deep.equal([1,2,3]);
	});
});

describe('sortarray', function() {
	it('sortarray() should sort an array [1,2] to be an array [1,2]', function () {
		expect(rs.sortarray([1,2])).to.deep.equals([1,2]);
	});
	it('sortarray() should sort an array [7,4,2,8,9] to be an array [2,4,7,8,9]', function () {
		expect(rs.sortarray([7,4,2,8,9])).to.deep.equals([2,4,7,8,9]);
	});

})