<template>
  <div class="mb-4">
    <label :for="id" class="block text-sm font-medium text-gray-700 mb-1">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    <div class="relative" v-click-outside="closeDropdown">
      <button
        type="button"
        :id="id"
        class="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 outline-none text-left flex items-center justify-between"
        :class="[
          error ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' : '',
          isOpen ? 'border-primary ring-2 ring-primary/20' : '',
          'placeholder:text-gray-400'
        ]"
        @click="toggleDropdown"
      >
        <span :class="{ 'text-gray-400': !modelValue }">
          {{ selectedLabel || placeholder || 'Select an option' }}
        </span>
        <Icon 
          :name="error ? 'heroicons:exclamation-circle' : 'heroicons:chevron-down'" 
          :class="[
            'w-5 h-5 transition-transform duration-200',
            error ? 'text-red-500' : 'text-gray-400',
            { 'rotate-180': isOpen }
          ]"
        />
      </button>

      <Transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <div
          v-if="isOpen"
          class="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg py-1 max-h-60 overflow-auto custom-scrollbar"
        >
          <div
            v-for="option in options"
            :key="option.value"
            class="px-4 py-2.5 hover:bg-gray-50 cursor-pointer transition-colors duration-150 flex items-center group"
            :class="{ 'bg-primary/5': modelValue === option.value }"
            @click="selectOption(option)"
          >
            <div 
              class="w-5 h-5 mr-2 flex items-center justify-center text-primary"
              :class="{ 'opacity-0 group-hover:opacity-100': modelValue !== option.value }"
            >
              <Icon 
                name="heroicons:check" 
                class="w-5 h-5"
                :class="{ 'opacity-50': modelValue !== option.value }"
              />
            </div>
            <span :class="{ 'text-primary font-medium': modelValue === option.value }">
              {{ option.label }}
            </span>
          </div>
        </div>
      </Transition>
    </div>
    <p v-if="error" class="mt-1 text-sm text-red-500 flex items-center gap-1">
      <Icon name="heroicons:exclamation-triangle" class="w-4 h-4" />
      {{ error }}
    </p>
    <p v-if="hint && !error" class="mt-1 text-sm text-gray-500">{{ hint }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
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
  options: {
    type: Array,
    required: true
  },
  placeholder: {
    type: String,
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

const emit = defineEmits(['update:modelValue'])
const isOpen = ref(false)

const selectedLabel = computed(() => {
  const option = props.options.find(opt => opt.value === props.modelValue)
  return option ? option.label : ''
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const closeDropdown = () => {
  isOpen.value = false
}

const selectOption = (option) => {
  emit('update:modelValue', option.value)
  isOpen.value = false
}
</script>

<style scoped>
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: theme('colors.gray.300') theme('colors.gray.100');
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: theme('colors.gray.100');
  border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: theme('colors.gray.300');
  border-radius: 3px;
}
</style>
