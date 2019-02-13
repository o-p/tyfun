import reverse from '../src/reverse';

test('[REVERSE] String', () => {
  expect(reverse('Hello, world!')).toBe('!dlrow ,olleH');
});

test('[REVERSE] Array', () => {
  expect(reverse(['Sense', 8])).toEqual([8, 'Sense']);
});
