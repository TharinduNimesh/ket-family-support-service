<template>
  <div>
    <h3 class="text-2xl font-recoleta font-bold text-gray-900 mb-6">Ready to Get Started?</h3>
    <USelect
      id="completing-for"
      label="I am completing this for"
      v-model="modelValue.completingFor"
      :options="completingForOptions"
      required
      :error="errors.completingFor"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  },
  errors: {
    type: Object,
    default: () => ({})
  }
})

const completingForOptions = [
  { value: 'self', label: 'Self' },
  { value: 'parent-guardian', label: 'Parent/Guardian' },
  { value: 'advocate', label: 'Advocate' },
  { value: 'service-provider', label: 'Service Provider' }
]
</script>
