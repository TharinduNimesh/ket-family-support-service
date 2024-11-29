<template>
  <div class="mb-6">
    <label class="block text-sm font-medium text-gray-700 mb-3">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    <div class="space-y-3">
      <div v-for="option in options" :key="option.value" class="flex items-center">
        <input
          :id="option.value"
          type="checkbox"
          :value="option.value"
          :checked="isChecked(option.value)"
          @change="toggleOption(option.value)"
          class="h-5 w-5 text-primary border-gray-300 rounded focus:ring-primary transition-colors duration-200"
        />
        <label :for="option.value" class="ml-3 text-sm text-gray-700">
          {{ option.label }}
        </label>
      </div>
    </div>
    <p v-if="error" class="mt-1 text-sm text-red-500">{{ error }}</p>
    <p v-if="hint" class="mt-1 text-sm text-gray-500">{{ hint }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  modelValue: {
    type: Array,
    default: () => []
  },
  options: {
    type: Array,
    required: true
  },
  required: {
    type: Boolean,
    default: false
  },
  error: {
    type: String,
    default: ''
  },
  hint: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const isChecked = (value) => props.modelValue.includes(value)

const toggleOption = (value) => {
  const selected = [...props.modelValue]
  const index = selected.indexOf(value)
  
  if (index === -1) {
    selected.push(value)
  } else {
    selected.splice(index, 1)
  }
  
  emit('update:modelValue', selected)
}
</script>

<style scoped>
input[type="checkbox"] {
  @apply rounded border-gray-300 text-primary focus:ring-primary;
}
</style>
