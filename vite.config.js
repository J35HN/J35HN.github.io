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
        projects: resolve(__dirname, 'projects/index.html'),
        volunteering: resolve(__dirname, 'volunteering/index.html'),
        experiences: resolve(__dirname, 'experiences/index.html'),
        photography: resolve(__dirname, 'photography/index.html'),
        industry: resolve(__dirname, 'industry/index.html')
      },
    },
  },
})
