import reverse from '../src/reverse';

test('[REVERSE] String', (): void => {
  expect(reverse('Hello, world!')).toBe('!dlrow ,olleH');
});

test('[REVERSE] Array', (): void => {
  expect(reverse(['Sense', 8])).toEqual([8, 'Sense']);
});
