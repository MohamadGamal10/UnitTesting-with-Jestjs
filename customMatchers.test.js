expect.extend({
  toBeLargerThan(received, argument) {
    const pass = received > argument;
    if (pass) {
      return {
        message: () => `expected ${received} to be larger than ${argument}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `Error: expected ${received} to be larger than ${argument}`,
        pass: false,
      };
    }
  },
});

test("custom matcher", () => {
  expect(10).toBeLargerThan(5);
});

//////////////////////////////////////////////////

expect.extend({
  toBeBetween(received, min, max) {
    const pass = received > min && received < max;
    if (pass) {
      return {
        message: () => `expected ${received} to be between ${min} and ${max}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `Error: expected ${received} to be between ${min} and ${max}`,
        pass: false,
      };
    }
  },
});

test("custom matcher", () => {
  expect(10).toBeBetween(5, 15);
});
