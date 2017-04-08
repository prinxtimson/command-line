var jasmine = require('jasmine');
var expect = jasmine.expect;

var myApp = require('../app/primes.js');

describe("get the prime numbers between nth number", function(){

	describe("Test Case for constant value", function(){

		it("should return empty array if 0 is pass to the function", function() {
       	 	expect(myApp.getPrimes(0)).to.deep.equal([ ]);
      	});

		it("should return empty array if 2 is pass to the function", function() {
        	expect(myApp.getPrimes(2)).to.deepEqual([ ]);
        	
      	});
	});

	describe("Test case for invalid input", function(){

		it("should return invalid input if negative input is pass to the function", function() {
        	expect(myApp.getPrimes(-2)).to.equal('Invalid input');
      	});
	});

	describe("Test case for actual value", function(){

		it("should return [ 3, 5, 7, 11, 13, 17, 19 ] for 20", function() {
        	expect(myApp.getPrimes(10)).to.deep.equal('[ 3, 5, 7 ]');
      	});

		it("should return [3, 5, 7, 11, 13, 17, 19, 23, 29] for 30", function() {
        	expect(myApp.getPrimes(30)).to.deep.equal([ 3, 5, 7, 11, 13, 17, 19, 23, 29 ]);
      	});

		it("should return [3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53] for 53", function() {
        	expect(myApp.getPrimes(53)).to.deep.equal([ 3, 5, 7,  11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53 ]);
      	});

		it("should return [3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79] for 79", function() {
        	expect(myApp.getPrimes(79)).to.deep.equal([ 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79 ]);
      	});

	});
})