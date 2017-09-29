var chai = require("chai");
var assert = chai.assert;
var calc = require("../calc.js");
var last = require("../lastNums.js")

describe("A calculator", function(){

    it("should add two numbers", function(){
        assert.equal(calc.add(1, 2), 3);
        assert.equal(calc.add(-1, -2), -3);
    });
    it("should subtract two numbers", function() {
        assert.equal(calc.sub(1,2), -1);
        assert.equal(calc.sub(-1,-2), 1);
    });
    it("should multiply two numbers", function() {
        assert.equal(calc.multi(1,2), 2);
        assert.equal(calc.multi(-1,-2), 2);
    });
    it("should divide two numbers", function() {
        assert.equal(calc.div(4,2), 2);
        assert.equal(calc.div(-4,-2), 2);
    });
});

describe("The last digit" , function(){
    
})
