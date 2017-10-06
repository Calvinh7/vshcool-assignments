var chai = require("chai");
var assert = chai.assert;
var isIp = require("./main.js");

describe("Checks if the input is a valid IP address", function(){
    it("should meet the standard requirements of an IP address format", function(){
        assert.isTure(isIp("24.0.243.76"));
    });
})
