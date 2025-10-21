import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@mui/styled-engine',
        replacement: '@mui/styled-engine-sc',
      },
    ],
  },
})
