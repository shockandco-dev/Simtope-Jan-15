import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    base: './',
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          // This will remove all console.log statements from the production build.
          drop_console: true,
        },
      },
    },
    // This will prevent the WebSocket code from being included in the production build.
    define: {
      'process.env.NODE_ENV': `"${mode}"`,
    },
  }
})