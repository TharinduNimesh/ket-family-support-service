<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
    <!-- Name Input -->
    <div class="col-span-1 md:col-span-2">
      <UInput
        id="contact-name"
        label="Your Name"
        v-model="formData.name"
        required
        :error="formErrors.name"
      />
    </div>
    <!-- Email Input -->
    <div class="col-span-1 md:col-span-2 xl:col-span-1">
      <UInput
        id="contact-email"
        label="Your Email"
        v-model="formData.email"
        required
        :error="formErrors.email"
      />
    </div>
    <!-- Phone Input -->
    <div class="col-span-1 md:col-span-2 xl:col-span-1">
      <UInput
        id="contact-phone"
        label="Your Phone"
        v-model="formData.phone"
        required
        :error="formErrors.phone"
      />
    </div>
    <!-- Message Input -->
    <div class="col-span-1 md:col-span-2">
      <UTextarea
        id="contact-message"
        label="Message"
        v-model="formData.message"
        required
        :error="formErrors.message"
      />
    </div>
    <!-- Submit Button -->
    <button
      type="button"
      @click="handleSubmit"
      class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 hover:bg-blue-600"
    >
      Send Message →
    </button>
  </div>
</template>

<script setup>
import { reactive, watch } from "vue";
import { defineProps, defineEmits } from "vue";

// Define props
const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
    default: () => ({
      name: "",
      email: "",
      phone: "",
      message: "",
    }),
  },
  errors: {
    type: Object,
    default: () => ({}),
  },
});

// Emit
const emit = defineEmits(["update:modelValue"]);

// Reactive Variables
const formData = reactive({ ...props.modelValue });
const formErrors = reactive({ ...props.errors });

// Sync Changes to Parent
watch(formData, (newVal) => {
  emit("update:modelValue", newVal);
});

// Validation Functions
const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
};

const validateForm = () => {
  // Clear previous errors
  Object.keys(formErrors).forEach((key) => (formErrors[key] = null));

  // Validation checks
  if (!formData.name) formErrors.name = "Name is required";
  if (!formData.email) {
    formErrors.email = "Email is required";
  } else if (!validateEmail(formData.email)) {
    formErrors.email = "Invalid email address";
  }
  if (!formData.phone) {
    formErrors.phone = "Phone is required";
  }
  if (!formData.message) formErrors.message = "Message is required";

  // Return validation status
  return Object.keys(formErrors).every((key) => !formErrors[key]);
};

// Handle Form Submission
const handleSubmit = async () => {
  console.log("Form Data:", formData);
  if (validateForm()) {
    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        console.log("Form submitted successfully:", data);
        window.location.href = "/submission-success";
      } else {
        console.error("Form submission failed:", data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }
};
</script>
