<template>
  <div class="flex flex-wrap justify-center gap-4 mb-8">
    <button
      v-for="(category, index) in categories"
      :key="index"
      @click="$emit('update:modelValue', index)"
      :class="[
        'px-6 py-3 rounded-full text-sm font-medium transition-all duration-300',
        modelValue === index
          ? 'bg-primary text-white shadow-lg'
          : 'bg-primary/5 text-primary hover:bg-primary/10'
      ]"
    >
      {{ category.name }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  categories: {
    type: Array,
    required: true
  },
  modelValue: {
    type: Number,
    required: true
  }
})

defineEmits(['update:modelValue'])
</script>
