import _ from '../src/_';
import curry from '../src/curry';

describe('TyFun - curry', (): void => {
  test('Basic Usage - Length 0', (): void => {
    const now = curry(Date.now);
    expect(now).toBeInstanceOf(Function);
    expect(typeof now()).toBe('number');
  });

  test('Basic Usage - Length 1', (): void => {
    const abs = curry(Math.abs);
    expect(abs).toBeInstanceOf(Function);
    expect(abs(_)).toBeInstanceOf(Function);
    expect(abs(-5566)).toBe(5566);
  });

  test('Basic Usage - Length N', (): void => {
    const logDefault = curry(Array.from);
    const logExactlyThree = curry(Array.from, 3);
    // const abs = curry(Math.abs);
    expect(logDefault).toBeInstanceOf(Function);
    expect(logExactlyThree).toBeInstanceOf(Function);

    expect(logDefault(3)).toEqual([3]);
    expect(logExactlyThree(3)).toBeInstanceOf(Function);
    expect(logExactlyThree(3)(4)(5)).toEqual([3, 4, 5]);
    expect(logExactlyThree(_)(_, 4)(5, _, 2)(3)).toEqual([5, 4, 3, 2]); // not sure
  });
});
