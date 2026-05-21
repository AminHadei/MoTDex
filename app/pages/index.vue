<template>
  <div class="page">
    <main class="main">
      <AppLogo />
      <h1>MoTDex</h1>
      <p class="description">
        An Open-Source Persian Knowledge & Terminology Index for Management of Technology.
      </p>
    </main>
  </div>
</template>

<style scoped>
.page {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
  font-family: system-ui, -apple-system, 'Segoe UI', Tahoma, sans-serif;
  color: #111;
  background: #fff;
  text-align: center;
}

.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  padding: 1.25rem 1.5rem;
}

.tagline {
  margin: 0;
  font-size: 0.8125rem;
  color: #555;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 28rem;
}

.main h1 {
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.description {
  margin: 0;
  line-height: 1.7;
  color: #444;
  font-size: 1rem;
}
</style>
