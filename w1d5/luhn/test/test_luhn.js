var assert = require("chai").assert;
var isLuhn = require("../lib/luhn");

describe("Luhns", function() {
  it("should return true if a num is a luhn", function() {
    var num = "4754600197";
    var result = isLuhn(num);
    assert.isTrue(result);
  });

  it("should return false if a num is NOT a luhn", function() {
    var num = "2134562345";
    assert.isFalse(isLuhn(num));
  });

  it("should return true if a num is a luhn", function() {
    var num = "2774184705";
    assert.isTrue(isLuhn(num));
  });

  it("should return false if a num is NOT a luhn", function() {
    var num = "7456792567"
    assert.isFalse(isLuhn(num));
  });
});
