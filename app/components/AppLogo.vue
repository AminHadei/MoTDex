<script setup lang="ts">
const base = useRuntimeConfig().app.baseURL

withDefaults(
  defineProps<{
    alt?: string
    size?: 'xs' | 'sm' | 'md' | 'lg'
  }>(),
  {
    alt: 'MoTDex Logo',
    size: 'md',
  },
)
</script>

<template>
  <img
    :src="`${base}logo-icon.png`"
    :alt="alt"
    :class="`motdex-logo motdex-logo--${size}`"
  >
</template>

<style scoped>
.motdex-logo {
  display: block;
}

.motdex-logo--xs {
  height: 2rem;
  width: 2rem;
}

.motdex-logo--sm {
  height: 1.25rem;
  width: 1.25rem;
}

.motdex-logo--md {
  height: 2.5rem;
  width: 2.5rem;
}

.motdex-logo--lg {
  height: 3.5rem;
  width: 3.5rem;
}
</style>
