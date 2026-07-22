<script setup lang="ts">
import { ArrowRight } from "@lucide/vue";

withDefaults(
  defineProps<{
    label?: string;
    showArrow?: boolean;
    href?: string;
  }>(),
  {
    label: "",
    showArrow: true,
  },
);
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :type="href ? undefined : 'button'"
    class="layered-btn group relative block w-max cursor-pointer outline-none font-lalezar"
  >
    <div class="layered-btn__wrapper relative mb-3 me-3">
      <span
        class="layered-btn__layer layered-btn__layer--bottom absolute inset-0 border-2 border-black bg-secondary"
      />
      <span
        class="layered-btn__layer layered-btn__layer--middle absolute inset-0 border-2 border-black bg-primary"
      />
      <span
        class="layered-btn__layer layered-btn__layer--top relative flex items-center justify-center gap-3 border-2 border-black bg-foreground px-8 py-3.5 text-lg font-bold tracking-widest text-background"
      >
        {{ label }}
        <ArrowRight v-if="showArrow" class="size-4 rtl:rotate-180" aria-hidden="true" />
      </span>
    </div>
  </component>
</template>
