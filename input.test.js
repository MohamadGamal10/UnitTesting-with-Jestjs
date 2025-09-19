const theFilter = require("./input");

describe("validate the input field", () => {
  test("check if name is empty", () => {
    expect(theFilter()).toBe("unknown");
  });

  test("check for spaces (start and end)", () => {
      expect(theFilter(" osama ")).toBe("osama");
  });

  test("check if length name is more than 10", () => {
      expect(theFilter("mohamed_gamal")).toBe("mohamed_ga");
  });

  test("check if name starts with underscore", () => {
      expect(theFilter("_mohamed")).toBe("mohamed");
  });
});
