<template>
  <div>
    <h3 class="text-2xl font-recoleta font-bold text-gray-900 mb-6">Participant Details</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <UInput
        id="first-name"
        label="First Name"
        v-model="modelValue.firstName"
        required
        :error="errors.firstName"
      />
      <UInput
        id="last-name"
        label="Last Name"
        v-model="modelValue.lastName"
        required
        :error="errors.lastName"
      />
      <UInput
        id="date-of-birth"
        label="Date of Birth"
        type="date"
        v-model="modelValue.dateOfBirth"
        required
        :error="errors.dateOfBirth"
      />
      <USelect
        id="gender"
        label="Gender"
        v-model="modelValue.gender"
        :options="genderOptions"
        required
        :error="errors.gender"
      />
    </div>
    <UInput
      id="address"
      label="Home Address"
      v-model="modelValue.address"
      required
      :error="errors.address"
    />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <UInput
        id="phone"
        label="Participant Phone Number"
        type="tel"
        v-model="modelValue.phone"
        required
        :error="errors.phone"
      />
      <UInput
        id="email"
        label="Participant Email Address"
        type="email"
        v-model="modelValue.email"
        required
        :error="errors.email"
      />
    </div>
    <USelect
      id="has-guardian"
      label="Does the participant have a legal guardian/nominee?"
      v-model="modelValue.hasGuardian"
      :options="yesNoOptions"
      required
      :error="errors.hasGuardian"
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

const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'non-binary', label: 'Non-Binary' },
  { value: 'other', label: 'Other' }
]

const yesNoOptions = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' }
]
</script>
