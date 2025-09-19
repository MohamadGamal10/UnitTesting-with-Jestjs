const mocker = require("./mock");

test("mock", () => {
  const mocker = jest.fn((name) => `Hello ${name}`);
  expect(mocker("Osama")).toBe("Hello Osama");
  expect(mocker("ali")).toBe("Hello ali");
  expect(mocker("ahmed")).toBe("Hello ahmed");
  expect(mocker).toHaveBeenCalledTimes(3);
  expect(mocker).toHaveBeenCalledWith("Osama");
  expect(mocker).toHaveBeenCalledWith("ali");
  expect(mocker).toHaveBeenCalledWith("ahmed");
  expect(mocker).toHaveBeenLastCalledWith("ahmed");
});
