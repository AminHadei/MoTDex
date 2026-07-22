<script setup lang="ts">
const posts = useBlogPosts()

useSeoMeta({
  title: 'بلاگ | MoTDex',
  description: 'پست‌های بلاگ MoTDex — نوشته‌شده درباره مدیریت فناوری و نوآوری',
})
</script>

<template>
  <section class="w-full px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-28">
    <div class="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4">
      <h1 class="mb-16 text-center font-lalezar text-3xl font-bold uppercase lg:text-4xl">
        بلاگ اطلس غیر رسمی مدیریت فناوری
        <span class="mt-2 block text-4xl text-accent-2 lg:text-5xl">نوشته شده با عشق</span>
      </h1>

      <div class="grid w-full auto-rows-fr grid-cols-1 place-items-center gap-8 lg:grid-cols-3 lg:gap-10">
        <div
          v-for="post in posts"
          :key="post.slug"
          class="flex w-full justify-center"
        >
          <BlogPostCard :post="post" />
        </div>
      </div>
    </div>
  </section>
</template>
