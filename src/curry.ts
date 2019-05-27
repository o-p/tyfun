import { Curry } from './internal/internal';
import curryN from './internal/curryN';

export default function curry(fn: Curry.Callback, length = fn.length): Curry.Curried {
  return curryN(length, [], fn);
}
