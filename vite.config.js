import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/wikipedia-article-template/',
  plugins: [vue()],
})
