import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'atoria/index.ts', // Entry point of your library
  output: [
    {
      file: 'dist/atoria.umd.js', // UMD bundle file
      format: 'umd', // Universal Module Definition (UMD) format
      name: 'YourLibrary', // Global variable name for UMD bundle
      sourcemap: false,
    },
    {
      file: 'dist/atoria.esm.js', // ES module file
      format: 'es', // ES module format
      sourcemap: false,
    },
    {
      file: 'dist/atoria.cjs.js', // CommonJS module file
      format: 'cjs', // CommonJS module format
      sourcemap: false,
    },
  ],
  plugins: [typescript(), commonjs(), resolve(), terser()],
  external: ['twilio','nodemailer'], // Add any external dependencies that shouldn't be bundled
};
