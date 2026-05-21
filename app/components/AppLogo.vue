<script setup lang="ts">
const base = useRuntimeConfig().app.baseURL

withDefaults(
  defineProps<{
    alt?: string
  }>(),
  {
    alt: 'MoTDex Logo',
  },
)
</script>

<template>
  <img
    :src="`${base}logo-icon.png`"
    :alt="alt"
    class="motdex-logo"
  >
</template>

<style scoped>
.motdex-logo {
  display: block;
  height: 2.5rem;
  width: 2.5rem;
}
</style>
