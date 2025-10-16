// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  //$production: {
  //  extends: [["github:bebejane/kt-nuxt-datocms"]],
  ///},
  //$development: {
  extends: ["/Users/bebejane/Projects/kt-nuxt-datocms"],
  //},
  css: ["~/assets/styles/index.scss"],
  app: {
    head: {
      title: "Nuxt Fem",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "desc..." },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  modules: [
    "@nuxt/eslint",
    "reka-ui/nuxt",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
  ],
  i18n: {
    defaultLocale: "en",
    strategy: "prefix_except_default",
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "sv", name: "Svenska", file: "sv.json" },
    ],
    customRoutes: "config", // disable custom route with page components
    pages: {
      about: {
        en: "/about", // -> accessible at /about-us (no prefix since it's the default locale)
        sv: "/om-oss", // -> accessible at /om-oss
      },
      form: {
        en: "/form", // -> accessible at /form
        sv: "/form", // -> accessible at /form
      },
      index: {
        en: "/", // -> accessible at /
        sv: "/", // -> accessible at /
      },
      "posts-post": {
        en: "/posts/[post]", // -> accessible at /posts/my-post
        sv: "/poster/[post]", // -> accessible at /projekt/mitt-projekt
      },
      test: {
        en: "/test", // -> accessible at /test
        sv: "/test", // -> accessible at /test
      },
    },
  },
});
