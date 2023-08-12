import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import laravel from 'laravel-vite-plugin'
import path from "path"
import checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      checker({ 
        // typescript: true, 
        vueTsc: true }),
      laravel({
          input: ['resources/js/main.ts'],
          refresh: true
      }),
  ],
  server: {
    hmr: {
        host: 'localhost',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname + "/resources/js/"),
      "store": path.resolve(__dirname + "/resources/js/store/"),
      "~": path.resolve(__dirname + "/resources/js/"),
    },
  },
})