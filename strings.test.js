test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);  // "team" مفيهاش الحرف الكبير I
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/); // Christoph فيها "stop"
});

test('Christoph is 9 characters long', () => {
  expect('Christoph').toHaveLength(9); // Christoph فيها 9 حروف
});
