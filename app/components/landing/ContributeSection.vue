<script setup lang="ts">
import StackedCard from "@/components/card/StackedCard.vue";
import { GitBranch, MessageSquareMore, Plug, ShieldCheck } from "@lucide/vue";

const rowMobileHover = "max-sm:hover:translate-x-4.5 max-sm:hover:-translate-y-4.5";
const rowMobileShadowHover =
  "max-sm:group-hover:-translate-x-4.5 max-sm:group-hover:translate-y-4.5";
const rowMobileMidHover = "max-sm:group-hover:-translate-x-2 max-sm:group-hover:translate-y-2";

const waysToContribute = [
  {
    title: "به هم بازخورد بدهیم",
    desc: "در footer سایت آدرس ایمیل من هست. در خصوص پست‌های بلاگ یا در خصوص واژه‌های واژنامه به من بازخورد دهید",
    color: "#FCBA28",
    icon: MessageSquareMore,
    wrapperHover: "sm:hover:translate-x-4.5 sm:hover:-translate-y-4.5",
    shadowHover: "sm:group-hover:-translate-x-4.5 sm:group-hover:translate-y-4.5",
    midHover: "sm:group-hover:-translate-x-2 sm:group-hover:translate-y-2",
  },
  {
    title: "به من منبع بدهید",
    desc: "اگر بر روی موضوعی در حوزه مدیریت فناوری و نوآوری کارکرده‌اید؟ به من ایمیل بزنید تا با مشارکت هم در این باره پست بلاگ بنویسیم",
    color: "#FCBA28",
    icon: ShieldCheck,
    wrapperHover: "sm:hover:-translate-x-4.5 sm:hover:-translate-y-4.5",
    shadowHover: "sm:group-hover:translate-x-4.5 sm:group-hover:translate-y-4.5",
    midHover: "sm:group-hover:translate-x-2 sm:group-hover:translate-y-2",
  },
  {
    title: "در واژنامه مشارکت کنید",
    desc: "واژه‌ای در این حوزه وجود دارد که در واژنامه ذکر نشده؟ به من ایمیل بزنید تا با ذکر نام شما به واژنامه اضافه کنیم",
    color: "#FCBA28",
    icon: Plug,
    wrapperHover: "sm:hover:translate-x-4.5 sm:hover:translate-y-4.5",
    shadowHover: "sm:group-hover:-translate-x-4.5 sm:group-hover:-translate-y-4.5",
    midHover: "sm:group-hover:-translate-x-2 sm:group-hover:-translate-y-2",
  },
  {
    title: "شیوه‌ی دیگری به ذهنتان می‌رسد؟",
    desc: "اگر ایده‌ای دارید تا سایت را بهبود دهید و در راستای آموزش مفیدتر باشیم، به من ایمیل بزنید تا با هم این قابلیت و ویژگی رو به سایت اضافه کنیم",
    color: "#FCBA28",
    icon: GitBranch,
    wrapperHover: "sm:hover:-translate-x-4.5 sm:hover:translate-y-4.5",
    shadowHover: "sm:group-hover:translate-x-4.5 sm:group-hover:-translate-y-4.5",
    midHover: "sm:group-hover:translate-x-2 sm:group-hover:-translate-y-2",
  },
];

const cardGridClass =
  "mx-auto flex w-full max-w-75 flex-col items-stretch -space-y-0.5 overflow-visible sm:max-w-150 sm:flex-row sm:flex-wrap sm:-space-y-0.5 sm:-space-x-0.5";
const cardItemClass = "flex w-full max-w-75 self-stretch sm:w-1/2";
</script>

<template>
  <section class="w-full px-4 py-16 lg:px-12 lg:py-28">
    <div class="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4">
      <h1 class="text-center font-lalezar text-3xl font-bold uppercase lg:text-4xl">
        چگونه به هم کمک کنیم؟<br />
        <span class="text-accent-3 mt-2 block text-4xl lg:text-5xl">به هر طریقی که می‌توانیم</span>
      </h1>
      <p class="max-w-sm text-center font-vazir text-lg leading-relaxed text-muted-foreground">
        هدف من از اینجا کسب درآمد نیست، برای پول درآوردن وقت هست اینجا تمرکز بر چیز دیگری است
      </p>
    </div>

    <div :class="[cardGridClass, 'mt-16']">
      <div
        v-for="way in waysToContribute"
        :key="way.title"
        :class="[
          cardItemClass,
          'transition-transform duration-300 ease-in-out sm:hover:z-10',
          rowMobileHover,
          way.wrapperHover,
        ]"
      >
        <StackedCard
          :shadow-color="way.color"
          :shadow-hover="`${rowMobileShadowHover} ${way.shadowHover}`"
          :mid-hover="`${rowMobileMidHover} ${way.midHover}`"
          class="h-full w-full"
        >
          <div class="flex h-full flex-col p-6 lg:p-7">
            <div
              class="mb-4 flex size-10 items-center justify-center border-2 border-black lg:mb-8 lg:size-14"
              :style="{ backgroundColor: way.color }"
            >
              <component :is="way.icon" class="size-6 text-black" :stroke-width="2.5" />
            </div>
            <h3 class="mb-2 font-lalezar text-lg font-bold wrap-break-word uppercase">
              {{ way.title }}
            </h3>
            <p
              class="text-sm font-vazir leading-relaxed wrap-break-word whitespace-pre-line text-foreground"
            >
              {{ way.desc }}
            </p>
          </div>
        </StackedCard>
      </div>
    </div>
  </section>
</template>
