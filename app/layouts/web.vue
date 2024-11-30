<template>
  <div class="w-full min-h-screen bg-accent overflow-x-hidden">
    <Header />
    <main class="w-full mt-20">
      <slot />
      <CallToAction />
    </main>
    <Footer />
  </div>
</template>
