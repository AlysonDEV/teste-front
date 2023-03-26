import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import sass from 'vite-plugin-sass';

import reactRefresh from '@vitejs/plugin-react-refresh';



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sass(), reactRefresh()],
  optimizeDeps: {
    include: [
      'react-toastify',
    ],
  }
})
