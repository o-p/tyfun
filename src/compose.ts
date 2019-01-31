import pipe from './pipe';
import reverse from './reverse';

/**
 * @sig ((y -> z), (x -> y), ..., (p -> q), (a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
 * @param {Function} first
 * @param {...Function} functions
 * @return {Function}
 */
export default function compose(...funcs: Function[]): Function {
  return pipe(...reverse(funcs));
}
