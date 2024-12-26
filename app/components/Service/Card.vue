<template>
  <div class="bg-white rounded-2xl shadow-xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 group ">
    <div
      class="bg-secondary p-6 h-full flex flex-col"
    >
      <div class="flex flex-col items-center text-center flex-grow">
        <!-- Icon Container -->
        <div
          class="bg-primary w-20 h-20 mb-6 rounded-2xl p-4 flex items-center justify-center transition-all duration-300"
          @mouseenter="isHovered = true"
          @mouseleave="isHovered = false"
        >
          <img
            :src="imagePath"
            :alt="title"
            class="w-full h-full object-contain transition-all duration-300"
            :class="[
              isHovered || 'group-hover:filter-white' ? 'brightness-0 invert' : 'brightness-0',
            ]"
          />
        </div>

        <!-- Title -->
        <h3
          class="text-xl font-recoleta font-bold text-white mb-3 group-hover:text-white/90 transition-colors duration-300"
        >
          {{ title }}
        </h3>

        <!-- Description -->
        <p class="text-white/80 leading-relaxed text-sm mb-4">
          {{ description }}
        </p>

        <!-- Learn More Section -->
        <div class="w-full">
          <div
            class="overflow-hidden transition-all duration-300"
            :class="{ 'max-h-0': !isExpanded, 'max-h-[500px]': isExpanded }"
          >
            <p class="text-white/70 leading-relaxed text-sm mt-4 px-2">
              {{ longDescription }}
            </p>
          </div>
        </div>
      </div>

      <!-- Learn More Button -->
      <div class="mx-auto pt-4">
        <NuxtLink
          :to="link"
          class="inline-flex items-center text-white font-medium group-hover:text-white/80 transition-colors duration-300"
        >
          <button
            @click="isExpanded = !isExpanded"
            class="inline-flex items-center text-white font-medium group-hover:text-white/80 transition-colors duration-300"
          >
            {{ isExpanded ? "Show Less" : "Learn More" }}
            <Icon
              :name="
                isExpanded ? 'heroicons:chevron-up' : 'heroicons:chevron-down'
              "
              class="w-5 h-5 ml-2 transition-transform duration-300"
            />
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  longDescription: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    default: "/services",
  },
});

const isHovered = ref(false);
const isExpanded = ref(false);
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