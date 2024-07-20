import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/vueapp/',
  // base: 'https://hoochicken.github.io/vueapp/',
  server: {
    cors: true,
    port: 8090
  },
  plugins: [
      vue(),
      /*, Components({dts: true,})*/
  ],
  resolve: {
    extensions: ['*', '.js', '.vue', '.json'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
