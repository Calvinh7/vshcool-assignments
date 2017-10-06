var chai = require("chai");
var assert = chai.assert;

const maps = require("../map")

describe("Map exercise 1", () => {

    it("should return an array of doubles", () => {
        assert.deepEqual(maps.doubleNums([5], [10]))
        assert.deepEqual(maps.doubleNums([-5], [-10]))
    })

    it("should return an empty array if given an empty array", () => {
        assert.deepEqual(maps.doubleNums([], []))
    })
})

describe("Map exercise 2", () => {
    it("should turn array of numbers into array of strings", () => {
        assert.deepEqual(maps.stringItUp([5], ['5']))
        assert.deepEqual(maps.stringItUp([-5], ['-5']))
        assert.deepEqual(maps.stringItUp([5, 7], ['5', '7']))
    })
    it("should return an empty array if given an empty array", () => {
        assert.deepEqual(maps.stringItUp([], []))
})
