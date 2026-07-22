<script setup lang="ts">
withDefaults(
  defineProps<{
    label?: string;
    href?: string;
  }>(),
  {
    label: "",
  },
);
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :type="href ? undefined : 'button'"
    class="flex h-14 cursor-pointer items-center rounded border-2 border-foreground bg-transparent px-6 py-2 font-lalezar text-lg! font-bold tracking-widest text-foreground no-underline shadow-none transition duration-200 outline-hidden hover:-translate-y-1 hover:shadow-md active:translate-x-0 active:translate-y-0 active:shadow-none lg:px-8 lg:py-3 lg:text-lg"
  >
    {{ label }}
  </component>
</template>
