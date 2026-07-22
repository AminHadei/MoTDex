<script setup lang="ts">
import { BarChart3, Brain, CircleAlert, LayoutGrid, RefreshCw, Rocket } from "@lucide/vue";

const sectionRef = shallowRef<Element | null>(null);
const visible = useReveal(sectionRef);
const howItWorksImage = useLandingImage("how-it-works.svg");

const steps = [
  {
    step: "مرحله ۰۱",
    title: "شناسایی مسئله یا خطا",
    subtitle: "Detecting a Problem",
    description:
      "فرد یا سازمان متوجه می‌شود که بین نتیجه مطلوب و نتیجه واقعی فاصله وجود دارد. مثال: کاهش فروش، افت بهره‌وری، نارضایتی مشتری.",
    icon: CircleAlert,
    color: "bg-secondary",
  },
  {
    step: "مرحله ۰۲",
    title: "واکنش و اصلاح اولیه",
    subtitle: "Single-Loop Response",
    description:
      "در ابتدا معمولاً تلاش می‌شود با تغییر اقدامات یا رفتارها، مشکل برطرف شود؛ بدون اینکه فرض‌های بنیادی زیر سؤال برود. مثال: افزایش تبلیغات برای جبران کاهش فروش.",
    icon: RefreshCw,
    color: "bg-primary",
  },
  {
    step: "مرحله ۰۳",
    title: "بازاندیشی درباره فرض‌ها و مدل‌های ذهنی",
    subtitle: "Questioning Assumptions",
    description:
      "در این مرحله می‌پرسیم: چرا این مشکل رخ داده است؟ چه باورها، سیاست‌ها یا فرض‌هایی باعث این وضعیت شده‌اند؟ آیا اهداف، استراتژی‌ها یا روش‌های فعلی هنوز معتبرند؟ اینجا تفاوت اصلی با یادگیری تک‌حلقه‌ای شکل می‌گیرد.",
    icon: Brain,
    color: "bg-accent-2",
  },
  {
    step: "مرحله ۰۴",
    title: "اصلاح چارچوب‌ها و سیاست‌ها",
    subtitle: "Reframing / Changing Governing Variables",
    description:
      "فرض‌ها، ارزش‌ها، قواعد و سیاست‌های حاکم بازطراحی یا اصلاح می‌شوند. مثال: به‌جای فقط افزایش تبلیغات، شرکت متوجه می‌شود که مدل ارزش پیشنهادی محصول دیگر با نیاز بازار همخوان نیست و باید استراتژی محصول تغییر کند.",
    icon: LayoutGrid,
    color: "bg-accent-3",
  },
  {
    step: "مرحله ۰۵",
    title: "اجرای رویکرد جدید",
    subtitle: "Implementing New Actions",
    description:
      "بر اساس چارچوب جدید، اقدامات و تصمیمات تازه اجرا می‌شوند. مثال: بازطراحی محصول، تغییر استراتژی بازار، یا تغییر ساختار سازمانی.",
    icon: Rocket,
    color: "bg-accent",
  },
  {
    step: "مرحله ۰۶",
    title: "ارزیابی و یادگیری مستمر",
    subtitle: "Evaluation and Continuous Learning",
    description:
      "نتایج اقدامات جدید ارزیابی می‌شود و سازمان دوباره از تجربه‌ها یاد می‌گیرد. این چرخه به یادگیری عمیق و تحول سازمانی منجر می‌شود.",
    icon: BarChart3,
    color: "bg-accent-4",
  },
];
</script>

<template>
  <section class="w-full px-4 py-16 lg:px-12 lg:py-28">
    <div class="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4">
      <h1 class="text-center text-3xl font-bold uppercase lg:text-4xl font-lalezar">
        می‌خواهیم چگونه <br />
        <span class="text-primary mt-2 block text-4xl lg:text-5xl">یاد بگیریم؟</span>
      </h1>
      <p
        class="mx-auto mb-16 max-w-lg text-start font-vazir text-base leading-relaxed text-muted-foreground"
      >
        متدولوژی یادگیری ما چیست؟ در اینجا ما به دنبال یادگیری دو حلقه هستیم
      </p>

      <div
        ref="sectionRef"
        class="grid w-full grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8"
        :class="visible ? 'reveal-visible' : 'reveal-hidden'"
      >
        <div
          v-for="(item, index) in steps"
          :key="item.step"
          class="relative z-10 mx-auto flex w-full max-w-118.75 gap-6 lg:col-start-1 lg:mx-0 lg:gap-8"
          :class="visible ? 'reveal-step-visible' : 'reveal-step-hidden'"
          :style="{
            gridRow: index + 1,
            transitionDelay: `${index * 150}ms`,
          }"
        >
          <div
            v-if="index < steps.length - 1"
            class="absolute top-18 -bottom-12 inset-s-8 hidden w-0.5 bg-foreground/20 lg:block"
          />
          <div
            class="relative mt-1 flex size-16 shrink-0 items-center justify-center border-2 border-black shadow-lg"
            :class="item.color"
          >
            <component :is="item.icon" class="size-7 text-black" stroke-width="2.5" />
          </div>
          <div class="pt-2">
            <p class="mb-2 font-vazir text-xs font-bold tracking-wide text-secondary">
              {{ item.step }}
            </p>
            <h4 class="mb-1 font-lalezar text-xl font-bold">
              {{ item.title }}
            </h4>
            <p class="mb-3 font-sans text-xs tracking-wide text-muted-foreground uppercase">
              {{ item.subtitle }}
            </p>
            <p class="font-vazir text-base leading-relaxed text-muted-foreground">
              {{ item.description }}
            </p>
          </div>
        </div>

        <div class="hidden lg:col-start-2 lg:row-span-6 lg:row-start-1 lg:flex lg:justify-start">
          <img
            :src="howItWorksImage"
            alt="تصویر پلکان رنگی یادگیری دوحلقه‌ای"
            width="500"
            height="500"
            class="sticky top-24 h-auto w-full max-w-md self-start object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      <div class="flex justify-center mt-8 lg:hidden">
        <img
          :src="howItWorksImage"
          alt="تصویر پلکان رنگی یادگیری دوحلقه‌ای"
          width="500"
          height="500"
          class="h-auto w-full max-w-xs object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  </section>
</template>
