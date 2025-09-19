// lifecycleHooks.test.js

/**
 *  Jest Lifecycle Hooks:
 *  -----------------------
 *  beforeAll(fn, timeout)   → بيتنفذ مرة واحدة قبل كل التستات
 *  beforeEach(fn, timeout)  → بيتنفذ قبل كل تست
 *  afterEach(fn, timeout)   → بيتنفذ بعد كل تست
 *  afterAll(fn, timeout)    → بيتنفذ مرة واحدة بعد كل التستات
 */

beforeAll(() => {
  console.log("🔥 beforeAll → Run once before ALL tests");
});

beforeEach(() => {
  console.log("🌀 beforeEach → Run before EACH test");
});

afterEach(() => {
  console.log("🧹 afterEach → Run after EACH test");
});

afterAll(() => {
  console.log("✅ afterAll → Run once after ALL tests");
});

test("test 1", () => {
  console.log("👉 Running test 1");
  expect(1 + 1).toBe(2);
});

test("test 2", () => {
  console.log("👉 Running test 2");
  expect("Hello").toMatch(/Hell/);
});

// results:
// 🔥 beforeAll → Run once before ALL tests
// 🌀 beforeEach → Run before EACH test
// 👉 Running test 1
// 🧹 afterEach → Run after EACH test
// 🌀 beforeEach → Run before EACH test
// 👉 Running test 2
// 🧹 afterEach → Run after EACH test
// ✅ afterAll → Run once after ALL tests

