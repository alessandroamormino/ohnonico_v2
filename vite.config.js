import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
	server: {
		port: 3000,
	},
	preview: {
		port: 3000,
	},
	resolve: {
		alias: [{find: "@", replacement: path.resolve(__dirname, "src")}],
	}
})
