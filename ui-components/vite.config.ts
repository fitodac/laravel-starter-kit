import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	root: __dirname,
	base: '/ui/',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '../resources/js'),
		},
		dedupe: ['react', 'react-dom'],
	},
	build: {
		outDir: '../public/ui',
		emptyOutDir: true,
	},
	server: {
		fs: {
			allow: [path.resolve(__dirname, '..')],
		},
	},
})
