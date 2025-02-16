import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      federation({
        name: 'dashboard',
        filename: 'remoteEntry.js',
        exposes: {
          './DashboardApp': './src/App.ts'
        }
      })
  ],
  resolve: {
    alias: {
      '@': path.resolve('./src')
    }
  },
  server: {
    port: 3001,
    host: '0.0.0.0',
    open: true
  },
  preview: {
    port: 3001
  }
})
