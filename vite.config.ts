import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import postcssPresetMantine from 'postcss-preset-mantine'
import postcssSimpleVars from 'postcss-simple-vars'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [ react(), tsconfigPaths() ],
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        postcssPresetMantine(),
        postcssSimpleVars({
          variables: {
            'mantine-breakpoint-xs': '36em',
            'mantine-breakpoint-sm': '48em',
            'mantine-breakpoint-md': '62em',
            'mantine-breakpoint-lg': '75em',
            'mantine-breakpoint-xl': '88em'
          }
        }) 
      ]
    } 
  }
})
