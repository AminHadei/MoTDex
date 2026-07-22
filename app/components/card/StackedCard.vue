<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
  shadowColor: string;
  shadowOffset?: string;
  shadowHover?: string;
  midOffset?: string;
  midHover?: string;
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div
    class="group relative flex h-full w-full max-w-none transform-gpu transition-transform duration-250 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
  >
    <div
      class="pointer-events-none absolute inset-0 z-0 border-2 border-black transform-gpu transition-transform duration-250 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
      :class="[shadowOffset, shadowHover]"
      :style="{ backgroundColor: shadowColor }"
    />
    <div
      class="pointer-events-none absolute inset-0 z-10 border-2 border-black bg-foreground transform-gpu transition-transform duration-250 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
      :class="[midOffset, midHover]"
    />
    <div
      :class="
        cn(
          'relative z-20 block h-full w-full rounded border-2 border-black bg-background p-0 shadow-none transform-gpu transition-transform duration-250 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:shadow-none',
          props.class,
        )
      "
    >
      <slot />
    </div>
  </div>
</template>
