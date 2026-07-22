<script setup lang="ts">
const icons = [
  {
    alt: "React",
    src: "hero/react.svg",
    class: "top-[7%] left-[26%] hidden md:block",
    delay: "-1.5s",
    size: 64,
  },
  {
    alt: "Node.js",
    src: "hero/nodejs.svg",
    class: "top-[17%] left-[10%] hidden lg:block",
    delay: "-3s",
    size: 64,
  },
  {
    alt: "Python",
    src: "hero/python.svg",
    class: "top-[27%] left-[20%] hidden lg:block",
    delay: "-4s",
    size: 64,
  },
  {
    alt: "Docker",
    src: "hero/docker.svg",
    class: "top-[47%] left-[15%] hidden xl:block",
    delay: "-2s",
    size: 64,
  },
  {
    alt: "GraphQL",
    src: "hero/graphql.svg",
    class: "top-[7%] right-[26%] hidden md:block",
    delay: "-0.5s",
    size: 64,
  },
  {
    alt: "Vercel / Next.js",
    src: "hero/next.svg",
    class: "top-[17%] right-[10%] hidden lg:block",
    delay: "-2.5s",
    size: 68,
  },
  {
    alt: "TypeScript",
    src: "hero/laravel.svg",
    class: "top-[27%] right-[20%] hidden lg:block",
    delay: "-3.5s",
    size: 64,
  },
  {
    alt: "Rust",
    src: "hero/rust.svg",
    class: "top-[47%] right-[15%] hidden xl:block",
    delay: "-1s",
    size: 74,
  },
].map((icon) => ({
  ...icon,
  url: useLandingImage(icon.src),
}));
</script>

<template>
  <div
    v-for="icon in icons"
    :key="icon.alt"
    class="pointer-events-none absolute select-none"
    :class="icon.class"
    aria-hidden="true"
  >
    <div class="animate-float" :style="{ animationDelay: icon.delay }">
      <img
        :src="icon.url"
        :alt="icon.alt"
        :width="icon.size"
        :height="icon.size"
        loading="lazy"
        decoding="async"
      />
    </div>
  </div>
</template>
