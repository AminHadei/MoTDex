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
    class="group/post block h-full w-full max-w-100 text-inherit no-underline"
  >
    <StackedCard
      :shadow-color="post.color"
      shadow-offset="-translate-x-3 translate-y-3"
      shadow-hover="group-hover/post:-translate-x-4.5 group-hover/post:translate-y-4.5 group-active/post:-translate-x-1 group-active/post:translate-y-1"
      mid-offset="-translate-x-1.5 translate-y-1.5"
      mid-hover="group-hover/post:-translate-x-2.5 group-hover/post:translate-y-2.5 group-active/post:-translate-x-1 group-active/post:translate-y-1"
      class="h-full w-full group-hover/post:translate-x-0.5 group-hover/post:-translate-y-0.5 group-active/post:translate-x-0 group-active/post:translate-y-0"
    >
      <div class="flex h-85 flex-col p-6 lg:p-7">
        <div class="flex h-full flex-col space-y-6">
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
