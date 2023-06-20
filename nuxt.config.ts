// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //devtools: { enabled: true },
  runtimeConfig: {
    apiURL: process.env.API_URL,
  },
  app: {
    head: {
      title: "Géo Move",
      htmlAttrs: {
        lang: "fr"
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  modules: ['@nuxtjs/tailwindcss', "nuxt-swiper"],
})