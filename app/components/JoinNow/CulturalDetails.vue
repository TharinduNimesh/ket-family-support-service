<template>
  <div>
    <h3 class="text-2xl font-recoleta font-bold text-gray-900 mb-6">Cultural Details</h3>
    <UInput
      id="country-of-birth"
      label="Participant Country of Birth"
      v-model="modelValue.countryOfBirth"
      required
      :error="errors.countryOfBirth"
    />
    <USelect
      id="needs-interpreter"
      label="Does the participant require an interpreter?"
      v-model="modelValue.needsInterpreter"
      :options="yesNoOptions"
      required
      :error="errors.needsInterpreter"
    />
    <UInput
      id="cultural-considerations"
      label="Relevant Culture or Religious Considerations"
      v-model="modelValue.culturalConsiderations"
      :error="errors.culturalConsiderations"
      hint="Optional"
    />
    <USelect
      id="is-indigenous"
      label="Does the participant identify as an Aboriginal or Torres Strait Islander?"
      v-model="modelValue.isIndigenous"
      :options="yesNoOptions"
      required
      :error="errors.isIndigenous"
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

const yesNoOptions = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' }
]
</script>
