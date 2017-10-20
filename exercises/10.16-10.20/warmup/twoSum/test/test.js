const chai = require("chai")
const assert = chai.assert
const twoSum = require("../twoSum.js")

const tests = {
    case0: {
        arr: [
            1, 2, 3
        ],
        target: 4
    }
}

describe("Two integers added", function() {

    it("should equal a target number", function(){
        assert.deepEqual(twoSum(tests.case0.arr, tests.case0.target), [0, 2])
    });
});
