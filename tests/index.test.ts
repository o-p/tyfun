import * as TyFun from '../src';

describe('TyFun - index', (): void => {
  test('All exports', (): void => {
    const PUBLIC_FUNCTIONS = [
      '_',
      'compose',
      'curry',
      'has',
      'pipe',
      'reverse',
    ];

    PUBLIC_FUNCTIONS.map(lib => expect(typeof TyFun[lib]).toBe('function'));
  });
});
