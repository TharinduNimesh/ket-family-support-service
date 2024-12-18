<template>
  <div class="group relative overflow-hidden rounded-2xl">
    <!-- Image Container -->
    <div class="aspect-[3/4] overflow-hidden">
      <img 
        :src="image" 
        :alt="name"
        class="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
      />
    </div>
    
    <!-- Overlay with Info -->
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
      <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <h3 class="text-2xl font-recoleta font-bold text-white mb-2">
          {{ name }}
        </h3>
        <p class="text-white/80 text-sm mb-4">{{ position }}</p>
        
        <!-- Social Links -->
        <div class="flex gap-4">
          <a 
            v-if="linkedin"
            :href="linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white/70 hover:text-white transition-colors duration-300"
          >
            <Icon name="fa6-brands:linkedin" class="w-5 h-5" />
          </a>
          <a 
            v-if="email"
            :href="`mailto:${email}`"
            class="text-white/70 hover:text-white transition-colors duration-300"
          >
            <Icon name="heroicons:envelope" class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  linkedin: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  }
})
</script>
