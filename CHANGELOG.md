# MoTDex

## 1.1.0

### Minor Changes

- 42a9cb8: Add shared `default` layout with site header and footer for all pages
- 0bc68d4: Add blog post types, `useBlog` composable, `PostCard`, and `PostShell`
- 4360f08: Add `/blog` index page and wire header, footer, and landing cards to blog routes
- 857c7e5: Add technology acquisition management guide blog post
- 06eab94: Add redefining innovation beyond R&D blog post
- 8f0feb8: Add innovation paradox and capabilities escalator blog post
- e5fea05: Add Frascati Manual blog post
- e11fcf6: Add WIPI 2025 intangible assets and IP indicators blog post
- 71c6f4c: Add local-design global-scale innovation policy blog post
- 11d63d3: Add intellectual capital measurement blog post

## 1.0.0

### Major Changes

- ae95676: Replace placeholder homepage with full Persian RTL landing page composing all landing sections

## 0.12.0

### Minor Changes

- 67ecf93: Add `SiteFooter` with MoTDex branding, index links, and social contact links

## 0.11.0

### Minor Changes

- c2010aa: Add `CtaSection` with glossary and blog call-to-action buttons and decorative side shapes

## 0.10.0

### Minor Changes

- 66c4fda: Add `HowItWorksSection` with double-loop learning steps, scroll-reveal animation, and sticky illustration

## 0.9.0

### Minor Changes

- 8c834aa: Add `RecentBlogPostsSection` with stacked cards for latest blog posts

## 0.8.0

### Minor Changes

- 3de0122: Add `ContributeSection` with ways visitors can help via feedback, sources, and glossary contributions

## 0.7.0

### Minor Changes

- 9a4193e: Add `LearningPathSection` with stacked cards for smoothing the learning journey

## 0.6.0

### Minor Changes

- 7f24c8f: Add `HeroSection` with Persian headline, CTA buttons, and site stats

## 0.5.1

### Patch Changes

- c74dda5: Add `HeroFloatingIcons` with animated tech icons around the hero section

## 0.5.0

### Minor Changes

- 3e358a1: Add `SiteHeader` with MoTDex logo and Persian navigation links to glossary and blog sections

## 0.4.1

### Patch Changes

- 739b15d: Add `useReveal` composable for scroll-triggered fade-in animations via Intersection Observer

## 0.4.0

### Minor Changes

- 84cc650: Add landing SVG assets under `app/assets/images/landing/` (hero icons, CTA shapes, how-it-works illustration)
- 84cc650: Add `useLandingImage` composable to resolve bundled asset URLs at build time

## 0.3.0

### Minor Changes

- 496ab00: Add `Card` primitives (`CardHeader`, `CardContent`, `CardTitle`, `CardDescription`)
- 496ab00: Add `StackedCard` with configurable layered shadow for landing feature blocks

## 0.2.0

### Minor Changes

- e39b0d6: Add `LayeredButton` with three-layer brutalist CTA styling and optional link support
- e39b0d6: Add `OutlineButton` for secondary call-to-action links
- e39b0d6: Move shadcn `Button` and variants into `components/button/`

## 0.1.2

### Patch Changes

- cffecfe: Add `Badge` component with outline, solid, and surface variants

## 0.1.1

### Patch Changes

- ec9818a: Add `Text` typography component with heading and body variants via `as` prop

## 0.1.0

### Minor Changes

- 1eb0bc3: Add brutalist dark theme with accent palette, hard shadows, and zero border radius
- 1eb0bc3: Add layered-button, float, and scroll-reveal animation utilities in Tailwind CSS
- 1eb0bc3: Set site-wide RTL (`dir="rtl"`, `lang="fa"`) and harden GitHub Pages `baseURL`
- 1eb0bc3: Add Vite `optimizeDeps` for landing page dependencies

## 0.0.1

### Patch Changes

- 88da2f3: Add self-hosted Lalezar and Vazirmatn fonts for Persian typography
- 88da2f3: Load Space Grotesk and Archivo Black from Google Fonts for headings
- 88da2f3: Update `logo-icon.png` and add size variants to `AppLogo`
- 88da2f3: Remove unused `logo-source.png`

## 0.0.0

### Minor Changes

- 155b8f1: Bootstrap Nuxt 4 workspace with GitHub Pages deploy workflow, favicons, and initial landing page
- 27fb9b3: Add agent infrastructure (`AGENTS.md`, skills, Cursor rules, and review guidelines)
- dfac11c: Add Tailwind CSS v4 and shadcn-vue component setup
