import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Served from https://aadharbindal.github.io/Portfolio/
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
})
