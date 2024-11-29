<template>
  <div>
    <h3 class="text-2xl font-recoleta font-bold text-gray-900 mb-6">NDIS Information</h3>
    <USelect
      id="plan-type"
      label="Participant's NDIS Plan Type"
      v-model="modelValue.planType"
      :options="planTypeOptions"
      required
      :error="errors.planType"
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

const planTypeOptions = [
  { value: 'self-managed', label: 'Self-Managed' },
  { value: 'plan-managed', label: 'Plan-Managed' },
  { value: 'ndia-managed', label: 'NDIA-Managed' }
]
</script>
