<script setup lang="ts">
import StackedCard from "@/components/card/StackedCard.vue";
import type { BlogPost } from "~/types/blog";

const props = defineProps<{
  post: BlogPost;
}>();

const authorsLabel = computed(() => formatBlogAuthors(props.post.authors));
</script>

<template>
  <NuxtLink
    :to="`/blog/${post.slug}`"
    class="block h-full w-full max-w-100 text-inherit no-underline"
  >
    <StackedCard
      :shadow-color="post.color"
      shadow-offset="-translate-x-4.5 translate-y-4.5"
      mid-offset="-translate-x-2 translate-y-2"
      class="h-full w-full"
    >
      <div class="flex flex-col p-6 lg:p-7 h-85">
        <div class="space-y-6 h-full flex flex-col">
          <span class="mb-4 block font-lalezar text-xl leading-relaxed">
            {{ post.title }}
          </span>
          <p class="flex-1 font-vazir text-lg leading-relaxed">
            {{ post.shortSummary }}
          </p>
          <h5 class="font-vazir text-base font-normal tracking-wide">- {{ authorsLabel }}</h5>
        </div>
      </div>
    </StackedCard>
  </NuxtLink>
</template>
