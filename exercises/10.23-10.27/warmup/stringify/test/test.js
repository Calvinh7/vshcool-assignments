const chai = require("chai");
const assert = chai.assert;

const stringify = require("../main")

describe("query string generator", => {

    it("should return a query string", => {
        assert.equal(stringify())
    })
})
