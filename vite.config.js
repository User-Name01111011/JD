import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/common.scss";'
      }
    }
  },
  resolve: {
    alias: [{
      find: '@',
      replacement: path.resolve(__dirname, 'src')
    }, {
      find: 'components',
      replacement: path.resolve(__dirname, 'src/components')
    }]
  },
  server: {
    open: true
  },
  plugins: [vue()]
})
