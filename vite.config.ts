import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import sass from 'vite-plugin-sass';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sass()]
})
