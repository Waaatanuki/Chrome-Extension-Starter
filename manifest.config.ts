import { defineManifest } from '@crxjs/vite-plugin'
import pkg from './package.json'

export default defineManifest({
  manifest_version: 3,
  name: pkg.name,
  version: pkg.version,
  description: pkg.description,
  icons: {
    16: 'public/logo.png',
    48: 'public/logo.png',
    128: 'public/logo.png',
  },

  action: {
    default_icon: {
      16: 'public/logo.png',
      48: 'public/logo.png',
      128: 'public/logo.png',
    },
    default_title: 'vite-vue3-chrome-extension-starter',
    default_popup: 'src/views/popup/main.html',
  },
  content_scripts: [
    {
      matches: ['<all_urls>'],
      js: ['src/contentScripts/index.ts'],
    },
    {
      matches: ['<all_urls>'],
      js: ['src/contentScripts/inject.ts'],
      world: 'MAIN',
    },
  ],
  background: {
    service_worker: 'src/background/index.ts',
    type: 'module',
  },
  permissions: [
    'contextMenus',
    'clipboardWrite',
    'storage',
    'unlimitedStorage',
    'activeTab',
    'scripting',
    'tabs',
    'webRequest',
    'sidePanel',
    'notifications',
  ],
  host_permissions: [
    '<all_urls>',
  ],
  options_page: 'src/views/options/main.html',
  devtools_page: 'src/views/devtools/main.html',
  side_panel: {
    default_path: 'src/views/sidepanel/main.html',
  },
})
