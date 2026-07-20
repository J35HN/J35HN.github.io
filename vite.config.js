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
        projects: resolve(__dirname, 'route/projects/index.html'),
        volunteering: resolve(__dirname, 'route/volunteering/index.html'),
        experiences: resolve(__dirname, 'route/experiences/index.html'),
        photography: resolve(__dirname, 'route/photography/index.html'),
        industry: resolve(__dirname, 'route/industry/index.html')
      },
    },
  },
})
