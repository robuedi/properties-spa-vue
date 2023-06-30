import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import laravel from 'laravel-vite-plugin';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue({
        template: { transformAssetUrls }
      }),
      laravel({
          input: ['resources/js/app.js'],
          refresh: true
      }),   
      quasar({
        sassVariables: 'resources/sass/quasar-variables.sass'
      }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname + "/resources/js/"),
      "store": path.resolve(__dirname + "/resources/js/store/"),
      "~": path.resolve(__dirname + "/resources/js/"),
    },
  },
})
