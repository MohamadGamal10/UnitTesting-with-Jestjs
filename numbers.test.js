

test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);         // 4 > 3 ✅
  expect(value).toBeGreaterThanOrEqual(3.5);// 4 >= 3.5 ✅
  expect(value).toBeLessThan(5);            // 4 < 5 ✅
  expect(value).toBeLessThanOrEqual(4.5);   // 4 <= 4.5 ✅

  // toBe و toEqual نفس النتيجة مع الأرقام
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  // expect(value).toBe(0.3); ❌ هتفشل بسبب مشكلة التقريب
  expect(value).toBeCloseTo(0.3); // ✅ الحل الصح بسبب التقريب
});
