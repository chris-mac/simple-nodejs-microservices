var expect = require("chai").expect;
var multiplier = require("../../exampleunittest.js");

describe("Multiplies a number by five", function(){
  it("multiplies passed number by 5", function(){
    var x = multiplier.timesfive(5);
    expect(x).to.equal(25);
  });
});
