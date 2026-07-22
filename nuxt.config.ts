import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  css: ["~/assets/css/tailwind.css"],

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["@lucide/vue", "@vueuse/core", "clsx", "tailwind-merge"],
    },
  },

  modules: ["shadcn-nuxt"],

  shadcn: {
    prefix: "",
    componentDir: "@/components/ui",
  },

  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },

  app: {
    baseURL: "/MoTDex/",
    head: {
      htmlAttrs: {
        dir: "rtl",
        lang: "fa",
      },
      title: "MoTDex",
      meta: [
        {
          name: "description",
          content:
            "An Open-Source Persian Knowledge & Terminology Index for Management of Technology",
        },
        { name: "theme-color", content: "#000000" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Grotesk:wght@400;500;600;700&display=swap",
        },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "icon", type: "image/png", sizes: "1024x1024", href: "/logo-icon.png" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      ],
    },
  },
});
