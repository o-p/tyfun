/**
 * @sig (((a, b, ..., n) -> o), (o -> p), (p -> q)..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z))
 * @param {...Function} functions
 * @return {Function}
 */
export default function pipe(...functions: Function[]): Function {
  const [first, ...rest] = functions;

  return (...args: any[]) => rest.reduce(
    (res: any, func: Function) => func(res), first(...args)
  );
}
