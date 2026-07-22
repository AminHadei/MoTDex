<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div
    :class="
      cn(
        'inline-block rounded-none border-2 border-border bg-card text-card-foreground shadow-md transition-all hover:shadow-none',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
