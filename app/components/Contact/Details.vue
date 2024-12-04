<template>
  <form @submit.prevent="submitForm" class="space-y-4">
    <!-- Name Fields -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <UInput
        id="firstName"
        v-model="formData.firstName"
        label="First Name"
        required
        :error="errors.firstName"
      />

      <UInput
        id="lastName"
        v-model="formData.lastName"
        label="Last Name"
        required
        :error="errors.lastName"
      />
    </div>

    <!-- Contact Fields -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <UInput
        id="email"
        v-model="formData.email"
        label="Email Address"
        type="email"
        required
        :error="errors.email"
      />

      <UInput
        id="phone"
        v-model="formData.phone"
        label="Phone Number"
        type="tel"
        required
        :error="errors.phone"
      />
    </div>

    <!-- Message Field -->
    <UTextarea
      id="message"
      v-model="formData.message"
      label="Message"
      required
      :error="errors.message"
      rows="5"
    />

    <!-- Submit Button -->
    <div class="flex justify-center">
      <button
        type="submit"
        class="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        :disabled="isSubmitting"
      >
        <span v-if="!isSubmitting">Send Message</span>
        <div v-else class="flex items-center">
          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Sending...
        </div>
      </button>
    </div>
  </form>
</template>

<script setup>
const formData = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: ''
})

const errors = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: ''
})

const isSubmitting = ref(false)

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const validatePhone = (phone) => {
  // Remove all spaces, dashes, and brackets
  const cleanPhone = phone.replace(/[\s\-\(\)]/g, '')
  
  // Check if it's a mobile number
  if (cleanPhone.startsWith('04') || cleanPhone.startsWith('4')) {
    // Australian mobile format: 04XX XXX XXX or 4XX XXX XXX
    const mobileRegex = /^(0?4\d{8})$/
    if (mobileRegex.test(cleanPhone)) return true
  }
  
  // Check if it's an international format mobile
  if (cleanPhone.startsWith('+614')) {
    // International mobile format: +614XX XXX XXX
    const intMobileRegex = /^\+614\d{8}$/
    if (intMobileRegex.test(cleanPhone)) return true
  }
  
  // Check if it's a landline number
  if (cleanPhone.startsWith('0')) {
    // Australian landline format: 0X XXXX XXXX
    const landlineRegex = /^(0[2378]\d{8})$/
    if (landlineRegex.test(cleanPhone)) return true
  }
  
  // Check international landline format
  if (cleanPhone.startsWith('+61')) {
    // International landline format: +61 X XXXX XXXX
    const intLandlineRegex = /^\+61[2378]\d{8}$/
    if (intLandlineRegex.test(cleanPhone)) return true
  }
  
  return false
}

const validateForm = () => {
  let isValid = true
  
  // Reset errors
  Object.keys(errors).forEach(key => errors[key] = '')

  // First Name validation
  if (!formData.firstName.trim()) {
    errors.firstName = 'First name is required'
    isValid = false
  }

  // Last Name validation
  if (!formData.lastName.trim()) {
    errors.lastName = 'Last name is required'
    isValid = false
  }

  // Email validation
  if (!formData.email.trim()) {
    errors.email = 'Email is required'
    isValid = false
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address'
    isValid = false
  }

  // Phone validation
  if (!formData.phone.trim()) {
    errors.phone = 'Phone number is required'
    isValid = false
  } else if (!validatePhone(formData.phone)) {
    errors.phone = 'Please enter a valid Australian phone number (e.g., 04XX XXX XXX or 02 XXXX XXXX)'
    isValid = false
  }

  // Message validation
  if (!formData.message.trim()) {
    errors.message = 'Message is required'
    isValid = false
  } else if (formData.message.length < 10) {
    errors.message = 'Message must be at least 10 characters long'
    isValid = false
  }

  return isValid
}

const submitForm = async () => {
  if (!validateForm()) {
    return
  }
  
  try {
    isSubmitting.value = true
    
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'Failed to send message')
    }
    
    // Reset form after successful submission
    Object.keys(formData).forEach(key => formData[key] = '')
    
    // Show success notification
    alert('Message sent successfully! You will receive a copy of your message via email.')
    
  } catch (error) {
    console.error('Form submission error:', error)
    alert(error.message || 'Failed to send message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
</script>