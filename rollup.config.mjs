import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'

export default [
	{
		input: 'src/index.ts',
		output: {
			file: 'dist/index.esm.js',
			format: 'esm',
			sourcemap: true,
		},
		plugins: [
			typescript({
				tsconfig: './tsconfig.json',
				declaration: false,
			}),
		],
	},

	{
		input: 'src/index.ts',
		output: {
			file: 'dist/index.cjs.js',
			format: 'cjs',
			sourcemap: true,
			exports: 'named',
		},
		external: ['crypto'],
		plugins: [
			json(),
			resolve({
				preferBuiltins: true,
			}),
			commonjs(),
			typescript({
				tsconfig: './tsconfig.json',
				declaration: false,
			}),
			terser(),
		],
	},
]
