<template>
  <div>
    <NuxtLayout name="web">
      <Landing
        background-image="/images/join-now-bg.webp"
        heading="Join KET Family Support"
        description="Complete the form below to begin your NDIS journey with us"
        :show-cta="false"
      />
      <div class="py-16 bg-gray-50">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl mx-auto">

            <!-- Progress Bar -->
            <div class="mb-12">
              <div class="relative">
                <div
                  class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary/20"
                >
                  <div
                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary transition-all duration-500"
                    :style="{ width: `${(currentStep / totalSteps) * 100}%` }"
                  ></div>
                </div>
                <div class="flex justify-between text-sm text-gray-600">
                  <span>Step {{ currentStep }} of {{ totalSteps }}</span>
                  <span>{{ stepTitles[currentStep - 1] }}</span>
                </div>
              </div>
            </div>

            <!-- Form Content -->
            <div class="bg-white rounded-2xl shadow-lg p-8">
              <form @submit.prevent="handleSubmit">
                <!-- Step 1: Get Started -->
                <div v-show="currentStep === 1">
                  <JoinNowGetStarted
                    v-model="formData.getStarted"
                    :errors="errors.getStarted || {}"
                  />
                </div>

                <!-- Step 2: Participant Details -->
                <div v-show="currentStep === 2">
                  <JoinNowParticipantDetails
                    v-model="formData.participantDetails"
                    :errors="errors.participantDetails || {}"
                  />
                </div>

                <!-- Step 3: Cultural Details -->
                <div v-show="currentStep === 3">
                  <JoinNowCulturalDetails
                    v-model="formData.culturalDetails"
                    :errors="errors.culturalDetails || {}"
                  />
                </div>

                <!-- Step 4: Service Request -->
                <div v-show="currentStep === 4">
                  <JoinNowServiceRequest
                    v-model="formData.serviceRequest"
                    :errors="errors.serviceRequest || {}"
                  />
                </div>

                <!-- Step 5: Booking Details -->
                <div v-show="currentStep === 5">
                  <JoinNowBookingDetails
                    v-model="formData.bookingDetails"
                    :errors="errors.bookingDetails || {}"
                  />
                </div>

                <!-- Step 6: NDIS Information -->
                <div v-show="currentStep === 6">
                  <JoinNowNDISInfo
                    v-model="formData.ndisInfo"
                    :errors="errors.ndisInfo || {}"
                  />
                </div>

                <!-- Navigation Buttons -->
                <div class="flex justify-between mt-8">
                  <button
                    v-if="currentStep > 1"
                    type="button"
                    @click="prevStep"
                    class="px-6 py-3 text-primary border border-primary rounded-full hover:bg-primary/5 transition-colors duration-200"
                  >
                    Previous
                  </button>
                  <div v-else class="w-[104px]"></div>

                  <button
                    type="button"
                    v-if="currentStep < totalSteps"
                    @click="nextStep"
                    class="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors duration-200"
                  >
                    Continue
                  </button>
                  <button
                    type="submit"
                    v-else
                    class="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors duration-200"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const currentStep = ref(1);
const totalSteps = 6;
const stepTitles = [
  "Getting Started",
  "Participant Details",
  "Cultural Details",
  "Service Request",
  "Booking Details",
  "NDIS Information",
];

const formData = reactive({
  getStarted: {
    completingFor: "",
  },
  participantDetails: {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    phone: "",
    email: "",
    hasGuardian: "",
  },
  culturalDetails: {
    countryOfBirth: "",
    needsInterpreter: "",
    culturalConsiderations: "",
    isIndigenous: "",
  },
  serviceRequest: {
    primaryService: "",
    secondaryService: "",
    additionalService: "",
    conditions: "",
    specialAssessments: "",
    extraInfo: "",
    practitionerNotes: "",
  },
  bookingDetails: {
    consultationTypes: [],
    contactPerson: "",
    receptionNotes: "",
  },
  ndisInfo: {
    planType: "",
  },
});

const errors = reactive({});

const validateStep = (step) => {
  errors.value = {};
  let isValid = true;

  // Add validation logic here based on the current step
  // Return true if valid, false otherwise

  return isValid;
};

const nextStep = () => {
  if (validateStep(currentStep.value)) {
    currentStep.value++;
  }
};

const prevStep = () => {
  currentStep.value--;
};

const handleSubmit = async () => {
  if (validateStep(currentStep.value)) {
    try {
      // Add form submission logic here
      console.log("Form submitted:", formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }
};
</script>
