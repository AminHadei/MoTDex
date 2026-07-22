<template>
  <section class="w-full bg-background px-4 pb-16 pt-4 sm:pt-8 lg:px-12 lg:py-28!">
    <div class="mx-auto min-h-80 max-w-6xl lg:h-140">
      <div class="relative flex h-full overflow-hidden border-2 border-foreground">
        <div class="hidden h-full w-36 border-e-2 border-foreground lg:grid lg:grid-rows-4">
          <div
            v-for="shape in ctaShapes"
            :key="shape.alt"
            class="flex items-center justify-center border-b-2 border-foreground last:border-b-0"
          >
            <img
              :src="shape.url"
              :alt="shape.alt"
              class="size-17 object-cover"
              loading="lazy"
            >
          </div>
        </div>

        <div class="flex flex-1 flex-col items-center justify-center gap-8 p-8 text-center lg:p-12">
          <h1 class="text-3xl font-bold uppercase lg:text-4xl font-lalezar">
            برای یادگیری<br>
            <span class="text-accent mt-2 block text-4xl lg:text-5xl">آماده هستی؟</span>
          </h1>
          <div class="flex flex-col items-center gap-4 sm:flex-row">
            <LayeredButton label="برو به واژنامه" href="#glossary" />
            <OutlineButton label="مطالعه کنیم" href="#blog" />
          </div>
        </div>

        <div class="hidden h-full w-36 border-s-2 border-foreground lg:grid lg:grid-rows-4">
          <div
            v-for="shape in ctaShapes"
            :key="`right-${shape.alt}`"
            class="flex items-center justify-center border-b-2 border-foreground last:border-b-0"
          >
            <img
              :src="shape.url"
              :alt="shape.alt"
              class="size-17 object-cover"
              loading="lazy"
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import LayeredButton from '@/components/button/LayeredButton.vue'
import OutlineButton from '@/components/button/OutlineButton.vue'

const ctaShapes = [
  { alt: 'David avatar', src: 'cta/shape-01.svg' },
  { alt: 'Michael avatar', src: 'cta/shape-02.svg' },
  { alt: 'Sarah avatar', src: 'cta/shape-03.svg' },
  { alt: 'Dashboard preview', src: 'cta/shape-04.svg' },
].map(shape => ({
  ...shape,
  url: useLandingImage(shape.src),
}))
</script>
