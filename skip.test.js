// skip.test.js

test('this test will run normally', () => {
  console.log('✅ This test is running');
  expect(2 * 3).toBe(6);
});

test.skip('this test is skipped', () => {
  console.log('❌ You should NOT see this');
  expect(5 + 5).toBe(10);
});

test('this test will also run', () => {
  console.log('✅ Another normal test');
  expect('Jest').toMatch(/Jest/);
});
