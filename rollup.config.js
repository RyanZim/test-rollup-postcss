import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';

import postcssPkg from 'postcss/package.json'
const stubs = Object.keys(postcssPkg.browser)

export default {
  input: 'src/main.js',
  plugins: [
    resolve({
      extensions: [ '.js', '.es6' ]
    }),
    commonjs(),
    builtins(),
    globals(),
  ],
  external: stubs,
  output: {
    file: 'bundle.js',
    format: 'iife',
    globals: stubs.reduce((obj, mod) => {
      obj[mod] = 'window'
      return obj
    }, {}),
  },
};
