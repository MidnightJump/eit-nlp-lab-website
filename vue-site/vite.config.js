import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: '/sys/',
  server: {
    port: 3000
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router'],
          element: ['element-plus']
        },
        assetFileNames: (assetInfo) => {
          // 保持图片文件的原始路径结构
          if (assetInfo.name && /\.(png|jpe?g|svg|gif|webp)$/i.test(assetInfo.name)) {
            return 'src/assets/images/[name].[ext]'
          }
          return 'assets/[name]-[hash].[ext]'
        }
      }
    }
  }
})