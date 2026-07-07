import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        projects: resolve(__dirname, 'i/projects/index.html'),
        volunteering: resolve(__dirname, 'i/volunteering/index.html'),
        experiences: resolve(__dirname, 'i/experiences/index.html'),
        photography: resolve(__dirname, 'i/photography/index.html'),
        industry: resolve(__dirname, 'i/industry/index.html')
      },
    },
  },
})
