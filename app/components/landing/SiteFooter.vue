<script setup lang="ts">
import { ArrowUpRight, CodeXml, MessageCircle } from '@lucide/vue';

const indexLinks = [
  { label: 'واژنامه', href: '#glossary' },
  { label: 'بلاگ', href: '#blog' },
]

const socialLinks = [
  { label: 'ایمیل من', icon: MessageCircle, href: 'mailto:aminhadei@gmail.com' },
  { label: 'گیت‌هاب پروژه', icon: CodeXml, href: 'https://github.com/AminHadei/MoTDex', external: true },
]
</script>

<template>
  <footer class="w-full border-t-2 border-b-2 border-foreground bg-background">
    <div class="mx-auto w-full max-w-[1152px]">
      <div class="grid grid-cols-1 items-stretch gap-0 md:grid-cols-3">
        <div class="flex flex-col justify-start border-b-2 border-foreground p-10 md:border-e-2 md:border-b-0 md:pr-10! md:p-14 lg:p-20">
          <h1 class="mb-8 font-head text-4xl font-bold tracking-wide lg:text-5xl">
            MoTDex
          </h1>
          <div class="mb-8 h-2 w-44 bg-primary" />
          <div class="flex items-stretch gap-4">
            <div class="w-0.75 shrink-0 bg-foreground" />
            <p class="font-sans text-lg leading-relaxed font-medium lg:text-xl font-lalezar">
              فضای یادگیری و اطلس غیررسمی مدیریت فناوری و نوآوری
            </p>
          </div>
        </div>

        <div class="flex flex-col justify-start border-b-2 border-foreground p-10 md:border-e-2 md:border-b-0 md:p-14 lg:p-20">
          <h5 class="mb-10 inline-block w-max bg-foreground px-4 py-1 font-head text-xl font-normal text-black uppercase">
            Index
          </h5>
          <div class="flex flex-col">
            <a
              v-for="link in indexLinks"
              :key="link.href"
              :href="link.href"
              class="group flex items-center justify-between border-b-2 border-foreground py-5 text-xl font-bold tracking-wider transition-colors hover:text-white"
            >
              <p class="font-sans text-lg font-lalezar">
                {{ link.label }}
              </p>
              <ArrowUpRight class="size-6 -scale-x-100 transition-all group-hover:-translate-y-1 group-hover:-translate-x-1" />
            </a>
          </div>
        </div>

        <div class="flex flex-col justify-start p-10 md:p-14 lg:p-20 md:pl-10!">
          <h5 class="mb-10 inline-block w-max bg-foreground px-4 py-1 font-head text-xl font-normal text-black uppercase">
            Social
          </h5>
          <div class="flex flex-col gap-6 lg:gap-8">
            <a
              v-for="item in socialLinks"
              :key="item.label"
              :href="item.href"
              :target="item.external ? '_blank' : undefined"
              :rel="item.external ? 'noopener noreferrer' : undefined"
              class="flex items-center gap-4 text-xl font-medium transition-colors hover:text-white"
            >
              <component :is="item.icon" class="size-6" />
              <p class="font-sans text-lg font-lalezar">
                {{ item.label }}
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full items-center justify-center border-t-2 border-foreground" dir="ltr">
      <div class="mx-auto flex flex-col md:flex-row w-full max-w-[1152px] items-center justify-between p-6 text-sm font-medium tracking-widest uppercase lg:px-8 lg:py-6 lg:text-base">
        <p class="font-sans text-base">
          © 2026 MoTDex, ALL RIGHTS RESERVED
        </p>
        <p class="font-sans text-base">
          MIT LICENSE
        </p>
      </div>
    </div>
  </footer>
</template>
