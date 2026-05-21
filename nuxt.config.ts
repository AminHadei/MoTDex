// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/MoTDex/',
    head: {
      title: 'MoTDex',
      meta: [
        {
          name: 'description',
          content: 'An Open-Source Persian Knowledge & Terminology Index for Management of Technology',
        },
        { name: 'theme-color', content: '#000000' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '1024x1024', href: '/logo-icon.png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
    },
  },

  nitro: {
    preset: process.env.NITRO_PRESET || undefined,
  },
})
