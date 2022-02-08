import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import stdLibBrowser from 'node-stdlib-browser';
import inject from '@rollup/plugin-inject';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: stdLibBrowser,
	},
	optimizeDeps: {
		include: ['buffer', 'process'],
	},
	plugins: [
		react(),
		{
			...inject({
				global: [
					require.resolve('node-stdlib-browser/helpers/esbuild/shim'),
					'global',
				],
				process: [
					require.resolve('node-stdlib-browser/helpers/esbuild/shim'),
					'process',
				],
				Buffer: [
					require.resolve('node-stdlib-browser/helpers/esbuild/shim'),
					'Buffer',
				],
			}),
			enforce: 'post',
		},
	],
});
