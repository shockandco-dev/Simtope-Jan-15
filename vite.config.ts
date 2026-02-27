import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
  },
  server: {
    port: 5173,
    strictPort: true,
    open: true
  }
});