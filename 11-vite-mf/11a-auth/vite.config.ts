import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  mode: 'development',
  plugins: [
      react(),
      federation({
        name: 'auth',
        filename: 'remoteEntry.js',
        exposes: {
             './AuthApp': './src/App.tsx'
        }
      })
  ],
  server: {
    port: 3000,
    host: '0.0.0.0',
    open: true
  }
})
