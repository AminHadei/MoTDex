<script setup lang="ts">
import StackedCard from "@/components/card/StackedCard.vue";
import { ChartColumn, CircleAlert, LayoutDashboard, Workflow } from "@lucide/vue";

const rowMobileHover = "max-sm:hover:translate-x-4.5 max-sm:hover:-translate-y-4.5";
const rowMobileShadowHover =
  "max-sm:group-hover:-translate-x-4.5 max-sm:group-hover:translate-y-4.5";
const rowMobileMidHover = "max-sm:group-hover:-translate-x-2 max-sm:group-hover:translate-y-2";

const rowLgHover = "lg:hover:translate-x-4.5 lg:hover:-translate-y-4.5";
const rowLgShadowHover = "lg:group-hover:-translate-x-4.5 lg:group-hover:translate-y-4.5";
const rowLgMidHover = "lg:group-hover:-translate-x-2 lg:group-hover:translate-y-2";

const learningGoals = [
  {
    title: "آزمون و خطا کنیم",
    desc: "معتقدم بی‌عیب نیستم ولی برخی از ایرادات خودم را هم رفع کرده‌ام. اینجا هستیم تا مجدد آزمون و خطا کنیم.",
    color: "#ff3344",
    icon: CircleAlert,
    wrapperHover: "sm:hover:translate-x-4.5 sm:hover:-translate-y-4.5",
    shadowHover: "sm:group-hover:-translate-x-4.5 sm:group-hover:translate-y-4.5",
    midHover: "sm:group-hover:-translate-x-2 sm:group-hover:translate-y-2",
  },
  {
    title: "آموخته‌هایمان را بسنجیم",
    desc: "برخی از مطالب رو نزد اساتید حوزه فناوری ارائه داده‌ام و بازخورد منفی و یا مثبت گرفته‌ام. شما هم بیایید تا با بازخورد دادن به پیشرفت هم کمک کنید",
    color: "#22c55e",
    icon: ChartColumn,
    wrapperHover: "sm:hover:-translate-x-4.5 sm:hover:-translate-y-4.5",
    shadowHover: "sm:group-hover:translate-x-4.5 sm:group-hover:translate-y-4.5",
    midHover: "sm:group-hover:translate-x-2 sm:group-hover:translate-y-2",
  },
  {
    title: "به هم خط فکری بدهیم",
    desc: "شروع یادگیری از یک نقطه آغاز می‌شود و تا بینهایت ادامه می‌یابد. اینجاییم تا نقطه شروع خود را نشان یکدیگر بدهیم",
    color: "#a855f7",
    icon: LayoutDashboard,
    wrapperHover: "sm:hover:translate-x-4.5 sm:hover:translate-y-4.5",
    shadowHover: "sm:group-hover:-translate-x-4.5 sm:group-hover:-translate-y-4.5",
    midHover: "sm:group-hover:-translate-x-2 sm:group-hover:-translate-y-2",
  },
  {
    title: "به اشتراک بگذاریم",
    desc: "یادگیری زمان‌بر است. اشتراک یادگیری مسیر را برای دیگران سریع‌تر و آسان‌تر می‌کند. پس یادگیری‌هایمان را به اشتراک بگذاریم",
    color: "#38bdf8",
    icon: Workflow,
    wrapperHover: "sm:hover:-translate-x-4.5 sm:hover:translate-y-4.5",
    shadowHover: "sm:group-hover:translate-x-4.5 sm:group-hover:-translate-y-4.5",
    midHover: "sm:group-hover:translate-x-2 sm:group-hover:-translate-y-2",
  },
];

const cardGridClass =
  "mx-auto flex w-full max-w-75 flex-col items-stretch -space-y-0.5 overflow-visible sm:max-w-150 sm:flex-row sm:flex-wrap sm:-space-y-0.5 sm:-space-x-0.5 lg:max-w-6xl lg:flex-nowrap lg:justify-center lg:-space-x-0.5";
const cardItemClass = "flex w-full max-w-75 self-stretch sm:w-1/2 lg:w-auto lg:max-w-75 lg:flex-1";
</script>

<template>
  <section id="glossary" class="w-full px-4 py-16 lg:px-12 lg:py-28">
    <div class="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4">
      <h1 class="text-center font-lalezar text-3xl font-bold uppercase lg:text-4xl">
        هدف از این سایت چیست؟<br />
        <span class="text-secondary mt-2 block text-4xl lg:text-5xl">هموار سازی مسیر یادگیری</span>
      </h1>
      <p class="max-w-sm text-center font-vazir text-lg leading-relaxed text-muted-foreground">
        آموخته‌های هر فردی برداشت وی از مطالب است با این وجود اشتراک آموخته‌ها خالی از لطف نیست
      </p>
    </div>

    <div :class="[cardGridClass, 'mt-16']">
      <div
        v-for="goal in learningGoals"
        :key="goal.title"
        :class="[
          cardItemClass,
          'transition-transform duration-300 ease-in-out sm:hover:z-10',
          rowMobileHover,
          rowLgHover,
          goal.wrapperHover,
        ]"
      >
        <StackedCard
          :shadow-color="goal.color"
          :shadow-hover="`${rowMobileShadowHover} ${rowLgShadowHover} ${goal.shadowHover}`"
          :mid-hover="`${rowMobileMidHover} ${rowLgMidHover} ${goal.midHover}`"
          class="h-full w-full"
        >
          <div class="flex h-full flex-col p-6 lg:p-7">
            <div
              class="mb-4 flex size-10 items-center justify-center border-2 border-black lg:mb-8 lg:size-14"
              :style="{ backgroundColor: goal.color }"
            >
              <component :is="goal.icon" class="size-6 text-black" :stroke-width="2.5" />
            </div>
            <h3 class="mb-2 font-lalezar text-lg font-bold wrap-break-word uppercase">
              {{ goal.title }}
            </h3>
            <p
              class="text-sm font-vazir leading-relaxed wrap-break-word whitespace-pre-line text-foreground"
            >
              {{ goal.desc }}
            </p>
          </div>
        </StackedCard>
      </div>
    </div>
  </section>
</template>
