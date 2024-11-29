<template>
  <section class="relative h-screen w-full overflow-hidden">
    <!-- Background Video -->
    <div class="absolute inset-0 w-full h-full">
      <video 
        autoplay 
        loop 
        muted 
        playsinline
        class="object-cover w-full h-full"
      >
        <source src="/videos/background-video.mp4" type="video/mp4">
      </video>
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/50"></div>
    </div>

    <!-- Content -->
    <div class="relative h-full flex items-center justify-center">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-recoleta font-bold text-white mb-6">
          Supporting Your NDIS Journey <br class="hidden sm:block" />
          Every Step of the Way
        </h1>
        <p class="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 font-roboto">
          KET Family Support Service provides comprehensive NDIS support at no cost, 
          ensuring every person with disability has access to the care and services they deserve.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <NuxtLink 
            to="/contact" 
            class="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-roboto font-medium transition-colors duration-300"
          >
            Start Your NDIS Journey
          </NuxtLink>
          <NuxtLink 
            to="/services" 
            class="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-roboto font-medium transition-colors duration-300 backdrop-blur-sm"
          >
            Our Support Services
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
::selection {
  background-color: rgba(255, 255, 255, 0.3); /* Light background with opacity */
  color: #ffffff; /* White text */
}

::-moz-selection {
  background-color: rgba(255, 255, 255, 0.3); /* Light background with opacity */
  color: #ffffff; /* White text */
}
</style>