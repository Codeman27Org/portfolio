import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // deploy.yml syncs ./build to S3
  build: { outDir: 'build' },
})
