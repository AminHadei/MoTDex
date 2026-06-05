<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const textVariants = cva('font-head', {
  variants: {
    as: {
      p: 'font-sans text-base',
      li: 'font-sans text-base',
      a: 'font-sans text-base underline-offset-2 decoration-primary hover:underline',
      h1: 'text-4xl font-bold uppercase tracking-tight lg:text-6xl',
      h2: 'text-3xl font-bold uppercase tracking-tight lg:text-5xl',
      h3: 'text-xl font-bold uppercase tracking-wide lg:text-2xl',
      h4: 'text-lg font-semibold uppercase',
      h5: 'text-base font-semibold uppercase',
      h6: 'text-sm font-semibold uppercase',
    },
  },
  defaultVariants: {
    as: 'p',
  },
})

type TextVariants = VariantProps<typeof textVariants>

const props = withDefaults(defineProps<{
  as?: NonNullable<TextVariants['as']>
  class?: HTMLAttributes['class']
}>(), {
  as: 'p',
})
</script>

<template>
  <component :is="as" :class="cn(textVariants({ as }), props.class)">
    <slot />
  </component>
</template>
