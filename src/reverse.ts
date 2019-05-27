// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ReversableArray = any[];
type ReversableString = string;
type Reversable = ReversableArray | ReversableString;

/** @sig [a] -> [a] */
function reverse(origin: ReversableArray): ReversableArray;
/** @sig String -> String */
function reverse(origin: ReversableString): ReversableString;

/**
 * @sig [a] -> [a]
 * @sig String -> String
 *
 * @param {Array|String} list
 * @return {Array|String}
 */
function reverse(origin: Reversable): Reversable {
  return typeof origin === 'string'
    ? origin.split('').reverse().join('')
    : origin.reverse();
}

export default reverse;
