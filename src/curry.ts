// @ts-ignore
import { Curry } from './internal/internal.d.ts';
// @ts-ignore
import curryN from './internal/curryN.ts';

export default function curry(fn: Curry.Callback, length = fn.length): Curry.Curried {
  return curryN(length, [], fn);
}
