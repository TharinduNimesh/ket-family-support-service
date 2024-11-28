<template>
  <section class="py-16 bg-primary/5">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center">
        <!-- Heading -->
        <h2 class="text-4xl md:text-5xl font-recoleta font-bold text-gray-900 mb-4">
          Join Us Today!
        </h2>
        
        <!-- Description -->
        <p class="text-xl text-gray-600 mb-8">
          Book a free 30-minute teleconsultation and discover how we can support your NDIS journey.
        </p>

        <!-- CTA Button -->
        <NuxtLink 
          to="/contact"
          class="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-roboto font-medium transition-colors duration-300 text-lg group"
        >
          Learn More
          <Icon 
            name="heroicons-arrow-right" 
            class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
