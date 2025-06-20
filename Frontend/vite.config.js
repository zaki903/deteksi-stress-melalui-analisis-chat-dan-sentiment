// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3002,
    proxy: {
      '/predict': {
        target: 'https://web-production-1151.up.railway.app',
        changeOrigin: true,
        secure: false,
      }
    }
  }
});