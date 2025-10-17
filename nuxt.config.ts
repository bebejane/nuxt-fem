// https://nuxt.com/docs/api/configuration/nuxt-config

const localLayersDir = "/Users/bebejane/Projects/kt-nuxt-datocms";

export default defineNuxtConfig({
  $production: {
    extends: [
      ["github:bebejane/kt-nuxt-datocms/packages/i18n"],
      ["github:bebejane/kt-nuxt-datocms/packages/base"],
    ],
  },
  $development: {
    extends: [
      `${localLayersDir}/packages/i18n`,
      `${localLayersDir}/packages/base`,
      `${localLayersDir}/packages/dev`,
    ],
  },
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
  modules: ["@nuxt/eslint", "reka-ui/nuxt", "@pinia/nuxt", "@vueuse/nuxt"],
  i18n: {
    baseUrl: "http://localhost:3000",
    defaultLocale: "en",
    strategy: "prefix_except_default",
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "sv", name: "Svenska", file: "sv.json" },
    ],
    autoDeclare: true,
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
      "posts/[post]": {
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
