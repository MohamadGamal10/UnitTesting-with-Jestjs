// only.test.js

test('this test will NOT run', () => {
  console.log('❌ This test should NOT appear');
  expect(true).toBe(true);
});

test.only('this is the ONLY test that will run', () => {
  console.log('✅ Running ONLY test');
  expect(1 + 1).toBe(2);
});

test('this test will also NOT run', () => {
  console.log('❌ This test should NOT appear either');
  expect('Hello').toBe('Hello');
});
