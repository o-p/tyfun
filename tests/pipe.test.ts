import pipe from '../src/pipe';

test('PIPE', () => {
  const formula = pipe(Math.max, Math.abs, Math.sqrt);
  expect(formula(-5566, -100, -999, -99999)).toBe(10);
});
