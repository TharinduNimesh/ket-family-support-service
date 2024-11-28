<template>
  <section class="py-20 bg-accent">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Image Column -->
        <div class="relative">
          <img
            src="/images/why-choose-us.png"
            alt="Supporting NDIS Participants"
            class="rounded-2xl shadow-xl w-full h-[600px] object-cover"
          />
          <div
            class="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-lg hidden lg:block"
          >
            <div class="text-center">
              <div class="text-4xl font-bold mb-2">5+</div>
              <div class="text-sm">Years of Experience</div>
            </div>
          </div>
        </div>

        <!-- Content Column -->
        <div class="space-y-8">
          <div>
            <h2 class="text-4xl font-recoleta font-bold text-gray-900 mb-4">
              Why Choose KET Family Support?
            </h2>
            <p class="text-gray-600 text-lg mb-8">
              We're committed to providing exceptional NDIS support services
              that make a real difference in people's lives.
            </p>
          </div>

          <!-- Stats and Features Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <!-- Participants Supported -->
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-white p-3 rounded-lg shadow-md flex items-center justify-center">
                  <Icon name="heroicons-users" class="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <div class="font-bold text-2xl text-gray-900 mb-1">500+</div>
                <div class="text-gray-600">Participants Supported</div>
              </div>
            </div>

            <!-- Success Rate -->
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-white p-3 rounded-lg shadow-md flex items-center justify-center">
                  <Icon name="heroicons-chart-bar" class="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <div class="font-bold text-2xl text-gray-900 mb-1">98%</div>
                <div class="text-gray-600">Success Rate</div>
              </div>
            </div>

            <!-- Key Features List -->
            <div class="sm:col-span-2 space-y-6">
              <!-- Professional Team -->
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-white p-3 rounded-lg shadow-md flex items-center justify-center">
                    <Icon name="heroicons-academic-cap" class="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 mb-1">
                    Expert Support Team
                  </h3>
                  <p class="text-gray-600">
                    Qualified professionals dedicated to your success
                  </p>
                </div>
              </div>

              <!-- Personalized Support -->
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-white p-3 rounded-lg shadow-md flex items-center justify-center">
                    <Icon name="heroicons-heart" class="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 mb-1">
                    Personalized Care
                  </h3>
                  <p class="text-gray-600">
                    Tailored support plans for your unique needs
                  </p>
                </div>
              </div>

              <!-- 24/7 Support -->
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-white p-3 rounded-lg shadow-md flex items-center justify-center">
                    <Icon name="heroicons-phone" class="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 mb-1">24/7 Support</h3>
                  <p class="text-gray-600">Always here when you need us</p>
                </div>
              </div>
            </div>
          </div>
          <!-- Action Buttons -->
          <div class="flex flex-col-reverse justify-end sm:flex-row gap-4 pt-6">
            <NuxtLink
              to="/about"
              class="bg-white hover:bg-gray-50 text-primary px-8 py-3 rounded-full font-roboto font-medium transition-colors duration-300 border-2 border-primary text-center"
            >
              Learn More
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-roboto font-medium transition-colors duration-300 text-center"
            >
              Join Now
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Icons are imported automatically by @nuxt/icon module
</script>
