// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  alias: {
    'buffer/': 'buffer/',
    'string_decoder/': 'string_decoder/',
    'process/': 'process/',
    'pino-pretty': 'unenv/runtime/mock/proxy'
  },
  nitro: {
    preset: 'cloudflare-pages'
  }
})
