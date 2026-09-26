import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/Fatima_Elkhadiri_Portfolio/',
  server: {
    port: 3000,
    open: false
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        projects: resolve(__dirname, 'projects.html'),
        skills: resolve(__dirname, 'skills.html'),
        experience: resolve(__dirname, 'experience.html'),
        contact: resolve(__dirname, 'contact.html')
      }
    }
  }
});
