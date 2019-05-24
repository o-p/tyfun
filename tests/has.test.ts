import has from '../src/has';

describe('TyFun - has', () => {
  test('Object', () => {
    const world = {
      wondful: null,
    };

    expect(has('wondful')(world)).toBeTruthy();
    expect(has('hello')(world)).toBeFalsy();
  });


  test('Non Object', () => {
    const hasLength = has('length');

    expect(hasLength(['Array'])).toBeTruthy();
    expect(hasLength('String')).toBeTruthy();
    expect(hasLength(Symbol.for('Symbol'))).toBeFalsy();
  });
});
