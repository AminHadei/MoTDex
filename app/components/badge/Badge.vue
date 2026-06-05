<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva('inline-flex items-center rounded-none font-semibold', {
  variants: {
    variant: {
      default: 'bg-muted text-muted-foreground',
      outline: 'border-2 border-foreground text-foreground',
      solid: 'bg-foreground text-background',
      surface: 'border-2 border-border bg-primary text-primary-foreground',
      success: 'border-2 border-accent-2 text-accent-2',
    },
    size: {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-2.5 py-1 text-sm',
      lg: 'px-3 py-1.5 text-base',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})

type BadgeVariants = VariantProps<typeof badgeVariants>

const props = withDefaults(defineProps<{
  variant?: BadgeVariants['variant']
  size?: BadgeVariants['size']
  class?: HTMLAttributes['class']
}>(), {
  variant: 'default',
  size: 'md',
})
</script>

<template>
  <span :class="cn(badgeVariants({ variant, size }), props.class)">
    <slot />
  </span>
</template>
