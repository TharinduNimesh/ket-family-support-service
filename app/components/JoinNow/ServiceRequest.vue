<template>
  <div>
    <h3 class="text-2xl font-recoleta font-bold text-gray-900 mb-6">Service Request</h3>
    <USelect
      id="primary-service"
      label="Type of Primary Service Required"
      v-model="modelValue.primaryService"
      :options="serviceOptions"
      required
      :error="errors.primaryService"
    />
    <USelect
      id="secondary-service"
      label="Type of Secondary Service Required"
      v-model="modelValue.secondaryService"
      :options="serviceOptions"
      :error="errors.secondaryService"
      hint="Optional"
    />
    <USelect
      id="additional-service"
      label="Additional Service Required"
      v-model="modelValue.additionalService"
      :options="serviceOptions"
      :error="errors.additionalService"
      hint="Optional"
    />
    <UTextarea
      id="conditions"
      label="Participant's Relevant Conditions/Disabilities"
      v-model="modelValue.conditions"
      required
      :error="errors.conditions"
    />
    <UTextarea
      id="special-assessments"
      label="Special Assessments or Therapies Required"
      v-model="modelValue.specialAssessments"
      :error="errors.specialAssessments"
      hint="Optional"
    />
    <UTextarea
      id="extra-info"
      label="Extra Information for Initial Appointment Preparation"
      v-model="modelValue.extraInfo"
      :error="errors.extraInfo"
      hint="Optional"
    />
    <UTextarea
      id="practitioner-notes"
      label="Notes for Practitioners"
      v-model="modelValue.practitionerNotes"
      :error="errors.practitionerNotes"
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

const serviceOptions = [
  { value: 'physiotherapy', label: 'Physiotherapy' },
  { value: 'occupational-therapy', label: 'Occupational Therapy' },
  { value: 'speech-therapy', label: 'Speech Therapy' },
  { value: 'psychology', label: 'Psychology' },
  { value: 'behavior-support', label: 'Behavior Support' },
  { value: 'social-work', label: 'Social Work' },
  { value: 'exercise-physiology', label: 'Exercise Physiology' }
]
</script>
