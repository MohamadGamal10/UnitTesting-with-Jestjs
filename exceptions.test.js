function compileAndroidCode() {
  throw new Error("you are using the wrong JDK!");
}

test("compiling android goes as expected", () => {
  // ✅ تتأكد إن فيه خطأ حصل
  expect(() => compileAndroidCode()).toThrow();

  // ✅ تتأكد إن الخطأ من النوع Error
  expect(() => compileAndroidCode()).toThrow(Error);

  // ✅ تتأكد من الرسالة فيها نص معين
  expect(() => compileAndroidCode()).toThrow("you are using the wrong JDK");

  // ✅ باستخدام regex (بيشوف الكلمة موجودة)
  expect(() => compileAndroidCode()).toThrow(/JDK/);

  // ❌ ده هيفشل (لأن الرسالة ناقصة !)
  //   expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/);

  // ✅ ده هينجح (الرسالة كاملة ومع الـ !)
  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/);
});

test("Expect Any & Anything", () => {
  // any
  expect("ali").toEqual(expect.any(String));

  // anything => expect anything without null or undefined
  let x;
  expect("ali").toEqual(expect.anything());
  expect(1).toEqual(expect.anything());
  expect([1, 2, 3]).toEqual(expect.anything());
  // expect(x).toEqual(expect.anything()); // x is undefined
  // expect(x).toEqual(expect.anything()); // x is undefined
});


// array containing
test("array containing", () => {
  expect([1, 2, 3]).toEqual(expect.arrayContaining([2, 3]));
});
