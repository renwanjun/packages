const assert = require("assert");
const { sum } = require("../index");

describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe("index模块", () => {
  describe("sum(a,b)", () => {
    it("should return 5 when the parameters are 1 and 4", () => {
      assert.equal(sum(1, 4), 5);
    });
  });
});
