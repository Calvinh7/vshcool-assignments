const chai = require("chai");
const assert = chai.assert;

const firstThree = require("../first")

describe("first three", () => {
    it("should print first 3 char n times", () => {
        assert.equal(firstThree("hello", 2), "helhel");
        assert.equal(firstThree("goodbye", 3), "googoogoo");
    })
    it("should return the string if length is < 3", () => {
        assert.equal(firstThree("hi", 2), "hihi");
        assert.equal(firstThree("by", 3), "bybyby");
    })
})
