
// toEqual recursively checks every field of an object or array.
test("object assignment", () => {
    const data = {one: 1};
    data["two"] = 2;
    expect(data).toEqual({one: 1, two: 2});
});

test("object assignment", () => {
    const data = {one: 1};
    expect(data).toHaveProperty("one", 1);
});
