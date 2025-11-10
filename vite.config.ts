import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // When using a custom domain with GitHub Pages, the base path should be '/'.
  // If deploying to the default github.io URL, it should be '/<repository-name>/'.
  base: '/', 
});