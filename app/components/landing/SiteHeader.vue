<script setup lang="ts">
import AppLogo from '@/components/AppLogo.vue'
</script>

<template>
  <header class="w-full border-b-2 border-foreground bg-transparent text-[#F9F4DA]">
    <div class="flex h-[66px] items-stretch max-w-[1152px] mx-auto">
      <NuxtLink
        to="/"
        class="flex shrink-0 items-center gap-3 border-s-2 border-e-2 border-foreground bg-accent text-accent-foreground hover:text-accent-foreground-hover px-6"
      >
        <AppLogo size="xs" alt="MoTDex" />
      </NuxtLink>

      <nav class="flex min-w-0 flex-1 items-stretch justify-end font-lalezar">
        <NuxtLink
          to="/blog"
          class="flex items-center border-s-2 border-foreground px-8 text-lg font-bold tracking-[0.12em] uppercase transition-colors bg-primary hover:bg-primary-hover text-primary-foreground"
        >
          بلاگ
        </NuxtLink>
        <NuxtLink
          to="/#glossary"
          class="flex items-center border-s-2 border-foreground bg-secondary px-8 text-lg font-bold text-secondary-foreground uppercase transition-colors hover:bg-[#00bfc2]"
        >
          واژنامه
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
