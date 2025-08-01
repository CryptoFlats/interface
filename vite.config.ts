import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: 'localhost',
    allowedHosts: ['surface-ryan-employed-mostly.trycloudflare.com']
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      buffer: 'buffer',
    },
  },
  define: {
    'process.env': {},
    global: 'window',
    Buffer: ['buffer', 'Buffer'],
  },
})
