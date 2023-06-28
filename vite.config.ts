import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import laravel from 'laravel-vite-plugin';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      laravel({
          input: ['resources/js/main.ts'],
          refresh: true
      }),   
      quasar({
        sassVariables: 'resources/sass/quasar-variables.sass',
        extras: [
          'fontawesome-v6'
        ]
      }),
  ],
  resolve: {
    alias: {
      '@': '/resources/js',
    },
  },
})
