<template>
  <div>
    <h3 class="text-2xl font-recoleta font-bold text-gray-900 mb-6">Booking Details</h3>
    <UCheckbox
      label="Preferred Consultation Types"
      v-model="modelValue.consultationTypes"
      :options="consultationOptions"
      required
      :error="errors.consultationTypes"
    />
    <USelect
      id="contact-person"
      label="Who Should We Contact to Make an Appointment?"
      v-model="modelValue.contactPerson"
      :options="contactOptions"
      required
      :error="errors.contactPerson"
    />
    <UTextarea
      id="reception-notes"
      label="Notes for Reception Staff"
      v-model="modelValue.receptionNotes"
      :error="errors.receptionNotes"
      hint="Optional"
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

const consultationOptions = [
  { value: 'in-clinic', label: 'In Clinic' },
  { value: 'in-home', label: 'In Home Service' },
  { value: 'telehealth', label: 'Telehealth' },
  { value: 'community', label: 'Community' }
]

const contactOptions = [
  { value: 'participant', label: 'Participant' },
  { value: 'guardian', label: 'Guardian' },
  { value: 'other', label: 'Other' }
]
</script>
