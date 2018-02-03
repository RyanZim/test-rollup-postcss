import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';

export default {
  input: 'src/main.js',
  plugins: [
    resolve({
      extensions: [ '.js', '.es6' ],
      browser: true,
    }),
    commonjs(),
    builtins(),
    globals(),
  ],
  output: {
    file: 'bundle.js',
    format: 'iife',
  },
};
