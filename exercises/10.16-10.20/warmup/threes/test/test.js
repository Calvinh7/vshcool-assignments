const chai = require("chai")
const assert = chai.assert
const game = require("../threes.js")

describe("Mathmatical rule of 3")

    it("should add one to be divisable by 3", function(){
         assert.equal(game.threes(2, 5, 8), 3, 6, 9)
    });
    it("should subtract one to be divisable by 3", function(){
         assert.equal(game.threes(4, 7, 10), 3, 6 ,9)
    });
    it("should be divisable by 3", function(){
         assert.euqal(game.threes(3, 6, 9), 3, 6, 9)
    })
