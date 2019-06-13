// @ts-ignore
import { AnyInput, Unary, UserFunction } from './internal.d.ts';

export default function unary<T>(fn: UserFunction<T>): Unary {
  return (a: AnyInput): T => fn(a);
}
