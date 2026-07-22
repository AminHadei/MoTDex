<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";
import Text from "@/components/typography/Text.vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <Text as="h3" :class="cn('mb-2', props.class)">
    <slot />
  </Text>
</template>
