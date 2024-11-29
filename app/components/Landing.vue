<template>
  <section 
    class="relative h-[70vh] flex items-center justify-center overflow-hidden"
    :style="{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }"
  >
    <!-- Overlay -->
    <div 
      class="absolute inset-0"
      :style="{
        backgroundColor: overlayColor,
        opacity: overlayOpacity
      }"
    ></div>

    <!-- Content Container -->
    <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="max-w-3xl mx-auto">
        <!-- Heading -->
        <h1 
          class="text-4xl sm:text-5xl lg:text-6xl font-recoleta font-bold mb-6"
          :class="headingColor"
        >
          {{ heading }}
        </h1>

        <!-- Description -->
        <p 
          class="text-lg sm:text-xl lg:text-2xl mb-8"
          :class="descriptionColor"
        >
          {{ description }}
        </p>

        <!-- Optional CTA Button -->
        <div v-if="showCta" class="flex justify-center gap-4">
          <NuxtLink
            v-if="primaryCta"
            :to="primaryCta.link"
            class="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors duration-200 font-medium"
          >
            {{ primaryCta.text }}
          </NuxtLink>
          <NuxtLink
            v-if="secondaryCta"
            :to="secondaryCta.link"
            class="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors duration-200 font-medium"
          >
            {{ secondaryCta.text }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  // Background
  backgroundImage: {
    type: String,
    required: true
  },
  overlayColor: {
    type: String,
    default: '#000000'
  },
  overlayOpacity: {
    type: Number,
    default: 0.5
  },

  // Content
  heading: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  headingColor: {
    type: String,
    default: 'text-white'
  },
  descriptionColor: {
    type: String,
    default: 'text-white/90'
  },

  // Call to Action
  showCta: {
    type: Boolean,
    default: false
  },
  primaryCta: {
    type: Object,
    default: null
  },
  secondaryCta: {
    type: Object,
    default: null
  }
})
</script>

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