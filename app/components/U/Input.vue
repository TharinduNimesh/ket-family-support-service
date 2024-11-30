<template>
  <div class="mb-4">
    <label :for="id" class="block text-sm font-medium text-gray-700 mb-1">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    <div class="relative">
      <input
        :id="id"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 outline-none"
        :class="[
          error ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' : '',
          'placeholder:text-gray-400'
        ]"
        v-bind="$attrs"
      />
      <div v-if="error" class="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
        <Icon name="heroicons:exclamation-circle" class="w-5 h-5" />
      </div>
    </div>
    <p v-if="error" class="mt-1 text-sm text-red-500 flex items-center gap-1">
      <Icon name="heroicons:exclamation-triangle" class="w-4 h-4" />
      {{ error }}
    </p>
    <p v-if="hint && !error" class="mt-1 text-sm text-gray-500">{{ hint }}</p>
  </div>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  modelValue: {
    type: [String, Number],
    default: ''
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

defineEmits(['update:modelValue'])
</script>
