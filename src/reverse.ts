/**
 * @sig [a] -> [a]
 * @sig String -> String
 *
 * @param {Array|String} list
 * @return {Array|String}
 */
export default function reverse(list: any[] | string): string | any[] {
  return typeof list === 'string'
    ? list.split('').reverse().join('')
    : list.reverse();
}
