<template>
  <section class="relative max-w-[1152px] mx-auto w-full overflow-hidden bg-background pt-16 pb-24 lg:pt-28">
    <LandingHeroFloatingIcons />

    <div class="relative z-10 flex flex-col items-center px-4 text-center">
      <div class="mb-9 space-y-4">
        <h1 class="text-4xl leading-[1.1] font-bold tracking-tight lg:text-7xl font-lalezar">
          اطلس <span class="text-accent">غیررسمی</span><br>
          مدیریت فناوری
        </h1>
        <p class="mx-auto max-w-[336px] sm:max-w-none text-center text-sm leading-relaxed text-muted-foreground md:text-lg font-vazir">
          مطالب این سایت به زبان غیررسمی و برداشت بنده از مفاهیم<br class="hidden sm:block" />
          و نیز ترجمه واژگان در واژنامه ترجمه شخصی بنده می‌باشند مگر با ذکر منبع
        </p>
      </div>

      <div class="mb-20 flex flex-col items-center gap-4 sm:flex-row">
        <LayeredButton label="برو به واژنامه" href="#glossary" />
        <OutlineButton label="مطالعه کنیم" href="#blog" />
      </div>

      <div class="flex flex-col sm:flex-row justify-center divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-foreground border-2 border-foreground">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="px-5 py-3 text-center md:px-8 font-lalezar"
        >
          <p class="text-xl font-black tracking-wide md:text-2xl">
            {{ stat.value }}
          </p>
          <p class="mt-1 text-xs tracking-widest text-muted-foreground uppercase md:text-sm">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import LayeredButton from '@/components/button/LayeredButton.vue'
import OutlineButton from '@/components/button/OutlineButton.vue'

const stats = [
  { value: '99', label: 'پست منتشر شده' },
  { value: '12K', label: 'واژه‌ی ترجمه شده' },
  { value: '+10K', label: 'بازدیدگر تا امروز' },
  { value: '+1K', label: 'نظر و پیشنهاد' },
]
</script>
