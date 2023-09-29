import { defineConfig, presetAttributify, presetWind, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetWind(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Montserrat',
      },
    }),
  ],
})
