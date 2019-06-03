import has from '../src/has';

describe('TyFun - has', (): void => {
  test('Object', (): void => {
    const world = {
      wondful: null,
    };

    expect(has('wondful')(world)).toBeTruthy();
    expect(has('hello')(world)).toBeFalsy();
  });


  test('Non Object', (): void => {
    const hasLength = has('length');

    expect(hasLength(['Array'])).toBeTruthy();
    expect(hasLength('String')).toBeTruthy();
    expect(hasLength(Symbol.for('Symbol'))).toBeFalsy();
  });
});
