// @ts-ignore
import isPlaceholder from './isPlaceholder.ts';
// @ts-ignore
import { Curry, Placeholder } from './internal.d.ts';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CarriedArgument = Placeholder | any;

export default function curryN(
  length: number,
  carried: CarriedArgument[],
  fn: Curry.Callback
): Curry.Curried {
  return (...args: Curry.Curried.Arguments): Curry.Curried | Curry.Callback.Result => {
    let argIndex = 0;

    // replace placeholders in carried list
    const combined = carried.map((existedItem): CarriedArgument => {
      if (isPlaceholder(existedItem) && args.length > argIndex) {
        const inputItem = args[argIndex];
        argIndex += 1;
        return inputItem;
      }
      return existedItem;
    })
      .concat(args.slice(argIndex));

    if (combined.length >= length
      && combined.slice(0, length).filter(isPlaceholder).length === 0
    ) {
      return fn(...combined);
    }
    return curryN(length, combined, fn);
  };
}
