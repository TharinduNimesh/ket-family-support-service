<template>
  <div class="bg-white rounded-2xl shadow-xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300 group">
    <div class="flex flex-col items-center text-center">
      <!-- Icon Container -->
      <div 
        class="w-24 h-24 mb-8 rounded-2xl p-5 flex items-center justify-center transition-all duration-300"
        :class="[
          isHovered ? 'bg-primary shadow-lg scale-110' : 'bg-secondary',
          'group-hover:bg-primary'
        ]"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
      >
        <img 
          :src="imagePath" 
          :alt="title" 
          class="w-full h-full object-contain transition-all duration-300"
          :class="isHovered || 'group-hover:filter-white' ? 'brightness-0 invert' : ''"
        />
      </div>
      
      <!-- Title -->
      <h3 class="text-2xl font-recoleta font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
        {{ title }}
      </h3>

      <!-- Description -->
      <p class="text-gray-600 leading-relaxed mb-6">
        {{ description }}
      </p>

      <!-- Learn More Link -->
      <NuxtLink 
        :to="link"
        class="inline-flex items-center text-primary font-medium group-hover:text-primary/80 transition-colors duration-300"
      >
        Learn More
        <Icon 
          name="heroicons:arrow-right" 
          class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  imagePath: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    default: '/services'
  }
})

const isHovered = ref(false)
</script>
