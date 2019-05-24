const chai = require('chai');
const assert = chai.assert;

const NameFormatter = require('../nameFormatter');

describe('invert name', function() {

  let nameFormatter;
  beforeEach(function() {
    nameFormatter = new NameFormatter();
  });

  function assertNameGetsInverted(inputName, expectedOutput) {
    assert.equal(nameFormatter.invertName(inputName), expectedOutput);
  }

  it("should return an empty string when passed an empty string", function() {
    const inputName = "";
    const expectedOutput = "";
    assertNameGetsInverted(inputName, expectedOutput);
  });

  context("when passed a single name", function() {

    let expectedOutput;
    beforeEach(function() {
      expectedOutput = "name"
    });

    it("should return a single name", function() {
      const inputName = "name";
      assertNameGetsInverted(inputName, expectedOutput);
    });

    context("with extra spaces", function() {

      it("should return a single name", function() {
        const inputName = " name ";
        assertNameGetsInverted(inputName, expectedOutput);
      });

    });

  });

  context("when passed a first and last-name", function() {

    let expectedOutput;
    beforeEach(function() {
      expectedOutput = "last, first";
    })

    it("should return a last-name, first-name", function() {
      const inputName = "first last";
      assertNameGetsInverted(inputName, expectedOutput);
    });

    context("with extra spaces around the names", function() {

      it("should return a last-name, first-name", function() {
        const inputName = " first last";
        assertNameGetsInverted(inputName, expectedOutput);
      });

    });

  });

  it("should return an empty string when passed a single honorific", function() {
    const inputName = "Dr. "
    const expectedOutput = ""
    assertNameGetsInverted(inputName, expectedOutput);
  });

  it("should return honorific first-name when passed honorific first-name", function() {
    const inputName = "Dr. first";
    const expectedOutput = "Dr. first";
    assertNameGetsInverted(inputName, expectedOutput);
  });

  context("when passed honorific first-name last-name", function() {

    let expectedOutput;
    beforeEach(function() {
      expectedOutput = "Dr. last-name, first-name";
    })

    it("should return a honorific last-name, first-name", function() {
      const inputName = "Dr. first-name last-name";
      assertNameGetsInverted(inputName, expectedOutput);
    });

    context("with extra spaces around the words", function() {

      it("should return a honorific last-name, first-name", function() {
        const inputName = " Dr. first-name last-name ";
        assertNameGetsInverted(inputName, expectedOutput);
      });

    });

  });

  it("should throw an error when name is undefined", function() {
    assert.throw(NameFormatter, Error);
  });

});
