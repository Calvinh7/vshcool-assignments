var chai = require("chai")
var assert = chai.assert;
var isPalindrome = require("./main.js")

describe("checks plaindrome", function(){
    it("should have the same characters forward and backwards", function(){
        assert.equal(isPalindrome("racecar"), true);
    })
    it("should not be case sensitive", function() {
        assert.equal(isPalindrome(""))
    })
})
