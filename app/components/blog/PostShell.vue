<script setup lang="ts">
const props = defineProps<{
  slug: string
}>()

const post = useBlogPost(props.slug)

if (!post) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}

useSeoMeta({
  title: `${post.title} | MoTDex`,
  description: post.summary,
})

const authorsLabel = formatBlogAuthors(post.authors)
</script>

<template>
  <article class="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-28">
    <NuxtLink
      to="/blog"
      class="mb-10 inline-block font-lalezar text-lg text-accent-2 transition-colors hover:text-primary"
    >
      بازگشت به بلاگ
    </NuxtLink>

    <header class="mb-12 space-y-4 border-b-2 border-foreground pb-8">
      <h1 class="font-lalezar text-3xl font-bold leading-relaxed lg:text-5xl">
        {{ post.title }}
      </h1>
      <p class="font-vazir text-lg leading-relaxed text-foreground/80">
        {{ post.summary }}
      </p>
      <p class="font-vazir text-base tracking-wide">
        {{ authorsLabel }}
      </p>
    </header>

    <div class="prose-blog font-vazir text-lg leading-relaxed">
      <slot />
    </div>
  </article>
</template>

<style scoped>
.prose-blog :deep(> * + *) {
  margin-block-start: 1.25rem;
}

.prose-blog :deep(h2) {
  margin-block-start: 2.75rem;
  margin-block-end: 1rem;
  font-family: var(--font-lalezar, Lalezar, sans-serif);
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.6;
}

.prose-blog :deep(h3) {
  margin-block-start: 2rem;
  margin-block-end: 0.75rem;
  font-family: var(--font-lalezar, Lalezar, sans-serif);
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.6;
}

.prose-blog :deep(p) {
  margin-block: 0;
}

.prose-blog :deep(ul),
.prose-blog :deep(ol) {
  margin-block: 0.5rem;
  padding-inline-start: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.prose-blog :deep(li) {
  padding-inline-start: 0.25rem;
}

.prose-blog :deep(strong) {
  font-weight: 700;
}

.prose-blog :deep(table) {
  width: 100%;
  border-collapse: collapse;
  font-size: 1rem;
  margin-block: 1.5rem;
}

.prose-blog :deep(th),
.prose-blog :deep(td) {
  border: 2px solid var(--color-foreground, currentColor);
  padding: 0.75rem 1rem;
  text-align: start;
  vertical-align: top;
}

.prose-blog :deep(th) {
  background: var(--color-foreground, #f9f4da);
  color: var(--color-background, #000);
  font-weight: 700;
}

.prose-blog :deep(.table-wrap) {
  overflow-x: auto;
  margin-block: 1.5rem;
}
</style>
