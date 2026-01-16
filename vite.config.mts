import { crx } from '@crxjs/vite-plugin'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import zip from 'vite-plugin-zip-pack'
import manifest from './manifest.config.js'
import { name, version } from './package.json'
import { r } from './scripts/utils'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${r('src')}/`,
    },
  },
  plugins: [
    Vue(),
    crx({ manifest }),
    AutoImport({
      imports: ['vue', '@vueuse/core'],
      dirs: [r('src/composables')],
      resolvers: [ElementPlusResolver()],
      vueTemplate: true,
      dts: r('types/auto-imports.d.ts'),
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: r('types/components.d.ts'),
    }),
    UnoCSS({ inspector: false }),
    zip({ outDir: 'release', outFileName: `${name}-${version}.zip` }),
  ],
  server: {
    cors: {
      origin: [
        /chrome-extension:\/\//,
      ],
    },
  },
})
