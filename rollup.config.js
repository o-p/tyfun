const typescript = require('rollup-plugin-typescript');

const version = process.env.CIRCLE_TAG || require('./package.json').version;

const banner = `
/*!
 * TyFun v${version}
 * (c) 2019-${ new Date().getFullYear() } Chris Chu
 * Released under the MIT License.
 */
`
module.exports = {
  input: 'src/index.ts',
  output: {
    banner,
    file: 'build/dist/tyfun.js',
    format: 'iife',
    name: 'TyFun',
  },
  plugins: [
    typescript({ target: 'es5' }),
  ],
};
