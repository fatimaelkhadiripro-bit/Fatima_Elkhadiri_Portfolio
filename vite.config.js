import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Fatima_Elkhadiri_Portfolio/',
  server: {
    port: 3000,
    open: false
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});
