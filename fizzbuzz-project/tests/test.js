'use strict'

var chai = require('chai');
var expect = chai.expect;

var myApp = require('../app/mainApp.js');

describe("Fizz Buzz tests ", function() {

  it("should return `Fizz` for number divisible by 3", function() {
    expect(myApp.fizzBuzz(3)).to.equal('Fizz');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    expect(myApp.fizzBuzz(5)).to.equal('Buzz');
  });

  it("should return `FizzBuzz` for 15", function() {
    expect(myApp.fizzBuzz(15)).to.equal('FizzBuzz');
  });

  it("should return `FizzBuzz` for 45", function() {
    expect(myApp.fizzBuzz(45)).to.equal('FizzBuzz');
  });

  it("should return `FizzBuzz` for 90", function() {
    expect(myApp.fizzBuzz(90)).to.equal('FizzBuzz');
  });

  it("should return `Fizz` for 63", function() {
    expect(myApp.fizzBuzz(63)).to.equal('Fizz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    expect(myApp.fizzBuzz(7)).to.equal(7);
  });

  it("should return 101 since its indivisible by 3 and 5", function() {
    expect(myApp.fizzBuzz(101)).to.equal(101);
  })

})