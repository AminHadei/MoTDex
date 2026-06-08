<script setup lang="ts">
import StackedCard from '@/components/card/StackedCard.vue'

const recentPosts = [
  {
    id: 'blog-1',
    quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    title: 'Lorem ipsum dolor',
    name: 'sit amet consectetur',
    color: '#ffcc00',
  },
  {
    id: 'blog-2',
    quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    title: 'Lorem ipsum dolor',
    name: 'sit amet consectetur',
    color: '#38bdf8',
  },
  {
    id: 'blog-3',
    quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    title: 'Lorem ipsum dolor',
    name: 'sit amet consectetur',
    color: '#e63946',
  },
]
</script>

<template>
  <section id="blog" class="w-full px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-28">
    <div class="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4">
      <h1 class="mb-16 text-center font-lalezar text-3xl font-bold uppercase lg:text-4xl">
        پست‌های اخیر بلاگ<br>
        <span class="mt-2 block text-4xl text-accent-2 lg:text-5xl">نوشته شده با عشق</span>
      </h1>

      <div class="grid w-full auto-rows-fr grid-cols-1 place-items-center gap-8 lg:grid-cols-3 lg:gap-10">
        <div
          v-for="post in recentPosts"
          :key="post.id"
          class="w-full max-w-[400px]"
        >
          <StackedCard
            :shadow-color="post.color"
            shadow-offset="-translate-x-4.5 translate-y-4.5"
            mid-offset="-translate-x-2 translate-y-2"
            class="h-full w-full"
          >
            <div class="flex h-full flex-col p-6 lg:p-7">
              <div class="space-y-6">
                <span class="mb-4 block flex-1 font-lalezar text-xl leading-relaxed">
                  {{ post.title }}
                </span>
                <p class="flex-1 font-vazir text-lg leading-relaxed">
                  "{{ post.quote }}"
                </p>
                <div>
                  <h5 class="font-vazir text-base font-normal tracking-wide">
                    - {{ post.name }}
                  </h5>
                </div>
              </div>
            </div>
          </StackedCard>
        </div>
      </div>
    </div>
  </section>
</template>
