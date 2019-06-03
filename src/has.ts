// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyArray = any[];
type Objectable = object | string | number | boolean | symbol | Function | AnyArray;

type HasProperty<T extends Objectable> = (target: T) => boolean;

/**
 * @sig s -> { s: x } -> Boolean
 * @param {string} key
 * @return {Function}
 */
function has<T extends Objectable>(key: string): HasProperty<T> {
  return (target: T): boolean => Object.prototype.hasOwnProperty.call(
    target,
    key
  );
}

export default has;
