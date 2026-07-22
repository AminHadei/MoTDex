import tailwindcss from "@tailwindcss/vite";

const baseURL = process.env.NUXT_APP_BASE_URL || "/MoTDex/";

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
    baseURL,
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
        // Nuxt does not auto-prefix head link hrefs with baseURL — required for GitHub Pages.
        { rel: "icon", type: "image/x-icon", href: `${baseURL}favicon.ico` },
        { rel: "icon", type: "image/png", sizes: "1024x1024", href: `${baseURL}logo-icon.png` },
        { rel: "apple-touch-icon", href: `${baseURL}apple-touch-icon.png` },
      ],
    },
  },
});
