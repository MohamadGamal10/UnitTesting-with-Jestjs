const sum = require("./sum");

describe("check the numbers sum totals", () => {
  describe("if no number or only one number", () => {
    test("no number", () => {
      expect(sum()).toBe(0);
    });

    test("return the number", () => {
      expect(sum(1)).toBe(1);
    });
  });

  describe("if more than one number", () => {
    test("adds 1 + 2 to equal 3", () => {
      expect(sum(1, 2)).toBe(3);
    });

    test("adds 1 + 2 + 3 to equal 6", () => {
      expect(sum(1, 2, 3)).toBe(6);
    });

    test("adds 1 + 2 + 3 + 4 to equal 10", () => {
      expect(sum(1, 2, 3, 4)).toBe(10);
    });

    // not
    test("adds 1 + 2 to equal 3", () => {
      expect(sum(1, 2)).not.toBe(5);
    });
  });
});
