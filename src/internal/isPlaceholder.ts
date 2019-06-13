// @ts-ignore
import placeholder from './placeholder.ts';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ToTestItem = any;

function isPlaceholder(input: ToTestItem): boolean {
  return input === placeholder;
}

export default isPlaceholder;
