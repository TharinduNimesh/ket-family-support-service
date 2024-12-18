<template>
  <div class="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group max-w-sm">
    <div class="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-4">
      <Icon :name="icon" class="w-8 h-8 text-primary group-hover:text-white" />
    </div>
    <h3 class="text-xl font-semibold text-gray-900 mb-3 text-center">
      {{ title }}
    </h3>
    <p class="text-gray-600 leading-relaxed text-center">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>
