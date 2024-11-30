<template>
  <div class="mb-4">
    <label class="block text-sm font-medium text-gray-700 mb-3">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    <div class="space-y-3">
      <div v-for="option in options" :key="option.value" class="relative flex items-start group">
        <div class="flex items-center h-5">
          <div class="relative">
            <input
              :id="option.value"
              type="checkbox"
              :value="option.value"
              :checked="isChecked(option.value)"
              @change="toggleOption(option.value)"
              class="sr-only peer"
            />
            <div
              class="h-5 w-5 border-2 rounded transition-all duration-200 flex items-center justify-center cursor-pointer"
              :class="[
                isChecked(option.value)
                  ? 'bg-primary border-primary'
                  : 'border-gray-300 group-hover:border-primary/50',
                error ? 'border-red-500 group-hover:border-red-500' : ''
              ]"
              @click="toggleOption(option.value)"
            >
              <Icon
                v-if="isChecked(option.value)"
                name="heroicons:check"
                class="w-3.5 h-3.5 text-white"
              />
            </div>
          </div>
        </div>
        <label
          :for="option.value"
          class="ml-3 block text-sm text-gray-700 cursor-pointer select-none group-hover:text-gray-900"
        >
          {{ option.label }}
        </label>
      </div>
    </div>
    <p v-if="error" class="mt-2 text-sm text-red-500 flex items-center gap-1">
      <Icon name="heroicons:exclamation-triangle" class="w-4 h-4" />
      {{ error }}
    </p>
    <p v-if="hint && !error" class="mt-2 text-sm text-gray-500">{{ hint }}</p>
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
