import { Pipe } from './internal/internal';

/**
 * @sig (((a, b, ..., n) -> o), (o -> p), (p -> q)..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z))
 * @param {...Function} functions
 * @return {Function}
 */
export default function pipe<Result, C>(
  head: Pipe.HeadFunction<C>,
  ...pipes: Pipe.BodyFunctions
): Pipe.PipedFunction<Result, C> {
  return (...args: Pipe.HeadFunction.Arguments<C>): Result => pipes.reduce(
    (
      prev: Pipe.BodyFunction.Result,
      fn: Pipe.BodyFunction
    ): Result | Pipe.BodyFunction.Result => fn(prev),
    head(...args)
  );
}
