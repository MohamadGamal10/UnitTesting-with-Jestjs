test('null', () => {
  const n = null;
  expect(n).toBeNull();         // القيمة null بالضبط
  expect(n).toBeDefined();      // null مش undefined
  expect(n).not.toBeUndefined();// null ≠ undefined
  expect(n).not.toBeTruthy();   // null مش true في if
  expect(n).toBeFalsy();        // null تعتبر false
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();     // 0 مش null
  expect(z).toBeDefined();      // 0 قيمة موجودة
  expect(z).not.toBeUndefined();// 0 مش undefined
  expect(z).not.toBeTruthy();   // 0 مش true في if
  expect(z).toBeFalsy();        // 0 تعتبر false
});
