import { defineConfig, presetAttributify, presetWind, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetWind(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: ['Montserrat', 'Montserrat:100-900'],
      },
    }),
  ],
  theme: {
    colors: {
      'brand-dark': '#000000',
      'brand-light': '#EFF5FF',
      'brand-accent': '#888F63',
    }
  }
})
