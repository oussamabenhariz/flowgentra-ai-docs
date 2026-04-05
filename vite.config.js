import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/flowgentra-ai-docs/',
  plugins: [react(), tailwindcss()],
})
