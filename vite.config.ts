import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
 base: "/Portfolio_files",
 build: {
  outDir: 'dist',
  emptyOutDir: true
 }
});
