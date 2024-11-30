<template>
  <NuxtLayout name="web">
    <div class="min-h-[80vh] flex items-center justify-center bg-gray-50">
      <div class="container mx-auto px-4 py-16">
        <div class="max-w-2xl mx-auto text-center">
          <!-- Success Image -->
          <div class="mb-8">
            <img 
              src="/images/submission-success.png" 
              alt="Success" 
              class="w-44 h-44 mx-auto object-contain"
            />
          </div>

          <!-- Success Message -->
          <h1 class="text-4xl font-bold text-gray-900 mb-4">
            Thank You for Your Submission!
          </h1>
          <p class="text-lg text-gray-600 mb-8">
            We have received your enquiry and will get back to you shortly.
          </p>

          <!-- Next Steps Card -->
          <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-6">
              What Happens Next?
            </h2>
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                    <Icon 
                      name="heroicons:envelope" 
                      class="w-5 h-5 text-primary"
                    />
                  </div>
                </div>
                <div class="ml-4 text-left">
                  <h3 class="text-lg font-medium text-gray-900">
                    Email Confirmation
                  </h3>
                  <p class="mt-1 text-gray-600">
                    You will receive a confirmation email with your submission details.
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                    <Icon 
                      name="heroicons:phone" 
                      class="w-5 h-5 text-primary"
                    />
                  </div>
                </div>
                <div class="ml-4 text-left">
                  <h3 class="text-lg font-medium text-gray-900">
                    Our Response
                  </h3>
                  <p class="mt-1 text-gray-600">
                    Our team will review your enquiry and contact you within 1-2 business days.
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                    <Icon 
                      name="heroicons:calendar" 
                      class="w-5 h-5 text-primary"
                    />
                  </div>
                </div>
                <div class="ml-4 text-left">
                  <h3 class="text-lg font-medium text-gray-900">
                    Initial Consultation
                  </h3>
                  <p class="mt-1 text-gray-600">
                    We'll schedule an initial consultation to discuss your needs in detail.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <NuxtLink
              to="/"
              class="w-full sm:w-auto px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors duration-200 text-center"
            >
              Return Home
            </NuxtLink>
            <a
              href="tel:+61123456789"
              class="w-full sm:w-auto px-8 py-3 border border-primary text-primary rounded-full hover:bg-primary/5 transition-colors duration-200 text-center"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  title: 'Submission Success - KET Family Support Service',
  description: 'Thank you for submitting your enquiry. We will get back to you shortly.',
  robots: {
    index: false,
    follow: false,
  },
});
</script>