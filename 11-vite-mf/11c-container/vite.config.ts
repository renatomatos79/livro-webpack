import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      react(),
      federation({
        name: 'container',
        filename: 'remoteEntry.js',
        remotes: {
          auth: 'http://localhost:3000/assets/remoteEntry.js',
          dashboard: 'http://localhost:3001/assets/remoteEntry.js',
        }
      })
  ],
  server: {
    port: 3002,
    host: '0.0.0.0',
    open: true
  },
  preview: {
    port: 3002,
  },
  build: {
    target: 'esnext',
  }
})
