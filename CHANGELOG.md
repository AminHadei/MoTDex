# MoTDex

## 0.10.0

### Minor Changes

- Add `HowItWorksSection` with double-loop learning steps, scroll-reveal animation, and sticky illustration

## 0.9.0

### Minor Changes

- Add `RecentBlogPostsSection` with stacked cards for latest blog posts

## 0.8.0

### Minor Changes

- Add `ContributeSection` with ways visitors can help via feedback, sources, and glossary contributions

## 0.7.0

### Minor Changes

- Add `LearningPathSection` with stacked cards for smoothing the learning journey

## 0.6.0

### Minor Changes

- Add `HeroSection` with Persian headline, CTA buttons, and site stats

## 0.5.1

### Patch Changes

- Add `HeroFloatingIcons` with animated tech icons around the hero section

## 0.5.0

### Minor Changes

- Add `SiteHeader` with MoTDex logo and Persian navigation links to glossary and blog sections

## 0.4.1

### Patch Changes

- Add `useReveal` composable for scroll-triggered fade-in animations via Intersection Observer

## 0.4.0

### Minor Changes

- Add landing SVG assets under `app/assets/images/landing/` (hero icons, CTA shapes, how-it-works illustration)
- Add `useLandingImage` composable to resolve bundled asset URLs at build time

## 0.3.0

### Minor Changes

- Add `Card` primitives (`CardHeader`, `CardContent`, `CardTitle`, `CardDescription`)
- Add `StackedCard` with configurable layered shadow for landing feature blocks

## 0.2.0

### Minor Changes

- Add `LayeredButton` with three-layer brutalist CTA styling and optional link support
- Add `OutlineButton` for secondary call-to-action links
- Move shadcn `Button` and variants into `components/button/`

## 0.1.2

### Patch Changes

- Add `Badge` component with outline, solid, and surface variants

## 0.1.1

### Patch Changes

- Add `Text` typography component with heading and body variants via `as` prop

## 0.1.0

### Minor Changes

- Add brutalist dark theme with accent palette, hard shadows, and zero border radius
- Add layered-button, float, and scroll-reveal animation utilities in Tailwind CSS
- Set site-wide RTL (`dir="rtl"`, `lang="fa"`) and harden GitHub Pages `baseURL`
- Add Vite `optimizeDeps` for landing page dependencies

## 0.0.1

### Patch Changes

- Add self-hosted Lalezar and Vazirmatn fonts for Persian typography
- Load Space Grotesk and Archivo Black from Google Fonts for headings
- Update `logo-icon.png` and add size variants to `AppLogo`
- Remove unused `logo-source.png`

## 0.0.0

### Minor Changes

- Bootstrap Nuxt 4 workspace with GitHub Pages deploy workflow, favicons, and initial landing page
- Add agent infrastructure (`AGENTS.md`, skills, Cursor rules, and review guidelines)
- Add Tailwind CSS v4 and shadcn-vue component setup
