<template>
  <div>
    <NuxtLayout name="web">
      <!-- Main About Section -->
      <section class="about-section bg-white container mx-auto px-4 py-16 space-y-16">

        <!-- Section 1: Trusted Service -->
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <!-- Image -->
          <div class="relative">
            <img src="https://wp.xpressbuddy.com/sunnyaid/wp-content/uploads/2024/08/about-img02.png"
              alt="Inclusive Support" class="rounded-lg w-full" />
            <div class="thought-bubble absolute top-0 left-10 bg-white p-3 shadow-lg rounded-lg">
              <p class="text-primary font-medium">Inclusive Support</p>
            </div>
          </div>
          <!-- Content -->
          <div class="space-y-6">
            <h1 class="text-4xl md:text-5xl font-bold text-primary-900">
              A Trusted NDIS Disability Service Provider For Over All 26 Years
            </h1>
            <p class="text-gray-600 text-lg">
              Our organization has been a trusted NDIS disability service provider, individuals
              with disabilities. We offer personalized, high-quality support to enhance
              independence and quality of life.
            </p>
            <div class="grid md:grid-cols-2 gap-8 pt-8">
              <div class="stat-box">
                <h3 class="text-primary-600 font-medium mb-2">OUR OVERALL PATIENTS</h3>
                <p class="text-5xl font-bold text-primary-900">50k+</p>
              </div>
              <div class="stat-box">
                <h3 class="text-primary-600 font-medium mb-2">OUR SUCCESS RATE</h3>
                <p class="text-5xl font-bold text-primary-900">99%</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Section 2: Services -->
        <div class="services bg-gray-50 py-8 rounded-lg shadow-lg flex justify-around items-center">
          <div class="service text-center">
            <div class="icon mb-2">
              <i class="fa fa-home text-primary-600 text-4xl"></i>
            </div>
            <p class="text-primary-900 font-semibold">We’re Home Care</p>
          </div>
          <div class="service text-center">
            <div class="icon mb-2">
              <i class="fa fa-chart-line text-primary-600 text-4xl"></i>
            </div>
            <p class="text-primary-900 font-semibold">Personal Care & Growth</p>
          </div>
          <div class="service text-center">
            <div class="icon mb-2">
              <i class="fa fa-headphones text-primary-600 text-4xl"></i>
            </div>
            <p class="text-primary-900 font-semibold">Support Coordinators</p>
          </div>
        </div>

        <!-- Section 3: Values -->
        <div class="our-values bg-primary-900 text-white rounded-lg p-12 space-y-12">
          <h2 class="text-3xl font-bold text-center">Our Values</h2>
          <p class="text-lg text-center max-w-3xl mx-auto">
            At Sunnyaid, we live and breathe our values, of Collaboration, Empowerment, Dignity and Respect while
            delivering the highest quality of care. We have an open-minded approach, embrace cultural diversity and
            provide services that are comprehensive and culturally appropriate.
          </p>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="value-box bg-white text-primary-900 p-6 rounded-lg shadow-lg">
              <h3 class="font-semibold text-xl mb-4">Our Vision</h3>
              <p>
                To empower people with disabilities and their families lead a meaningful life of their choice,
                experience
                personal health and growth.
              </p>
            </div>
            <div class="value-box bg-white text-primary-900 p-6 rounded-lg shadow-lg">
              <h3 class="font-semibold text-xl mb-4">Our Mission</h3>
              <p>
                Our mission is to provide innovative high-quality support services to people with disabilities that
                enhance their lifestyle to enjoy fulfilled lives.
              </p>
            </div>
            <div class="value-box bg-white text-primary-900 p-6 rounded-lg shadow-lg">
              <h3 class="font-semibold text-xl mb-4">Our Commitment</h3>
              <p>
                Dedicated to respecting and empowering all individuals while maintaining high-quality, culturally
                appropriate services.
              </p>
            </div>
          </div>
        </div>
        <!-- Section 4: Getting Started -->
        <div class="getting-started-section bg-white container mx-auto px-4 py-16 space-y-16"> <!-- Header -->
          <h2 class="text-3xl font-bold text-center text-primary-900">Getting Started with Sunnyaid</h2>
          <p class="text-lg text-center text-gray-600 max-w-3xl mx-auto"> We make it easy for you to begin your journey
            with us. Follow these simple steps to start experiencing our exceptional care and support. </p>
          <!-- Steps -->
          <div class="grid md:grid-cols-3 gap-8 pt-8"> <!-- Step 1 -->
            <div class="step-box bg-gray-50 p-6 rounded-lg shadow-lg text-center relative">
              <div class="icon mb-4"> <i class="fa fa-phone text-primary-600 text-4xl"></i> </div>
              <h3 class="font-semibold text-xl text-primary-900 mb-2">Make An Enquiry</h3>
              <p class="text-gray-600"> Feel free to reach out and make an enquiry. We're here to assist you. </p> <img
                src="https://via.placeholder.com/150" alt="Enquiry" class="mx-auto mt-4" />
              <div class="line absolute top-1/2 left-0 h-1 w-full bg-primary-600 transform -translate-x-full"></div>
            </div> <!-- Step 2 -->
            <div class="step-box bg-gray-50 p-6 rounded-lg shadow-lg text-center relative">
              <div class="icon mb-4"> <i class="fa fa-clipboard text-primary-600 text-4xl"></i> </div>
              <h3 class="font-semibold text-xl text-primary-900 mb-2">Create A NDIS Plan</h3>
              <p class="text-gray-600"> Let's craft a personalized NDIS plan to address your specific needs. </p> <img
                src="https://via.placeholder.com/150" alt="NDIS Plan" class="mx-auto mt-4" />
              <div class="line absolute top-1/2 left-0 h-1 w-full bg-primary-600 transform -translate-x-full"></div>
            </div> <!-- Step 3 -->
            <div class="step-box bg-gray-50 p-6 rounded-lg shadow-lg text-center relative">
              <div class="icon mb-4"> <i class="fa fa-heart text-primary-600 text-4xl"></i> </div>
              <h3 class="font-semibold text-xl text-primary-900 mb-2">Start Exceptional Care</h3>
              <p class="text-gray-600"> Start your journey with us, where we prioritize your exceptional care. </p> <img
                src="https://via.placeholder.com/150" alt="Exceptional Care" class="mx-auto mt-4" />
            </div>
          </div>
        </div>
      </section>
    </NuxtLayout>
  </div>
</template>

<style scoped>
.about-section {
  @apply bg-white;
}

.thought-bubble::before {
  content: '';
  @apply absolute -bottom-2 right-4 w-4 h-4 bg-white transform rotate-45;
}

.stat-box {
  @apply p-6 rounded-lg bg-gray-50 transition-transform hover:transform hover:scale-105;
}

.text-primary-600 {
  @apply text-[#0B4D5C];
}

.text-primary-900 {
  @apply text-[#0B4D5C];
}

.our-values {
  @apply text-center;
}

.getting-started-section {
  @apply bg-white;
}

.step-box {
  @apply p-6 rounded-lg bg-gray-50 transition-transform hover:transform hover:scale-105 text-center relative;
}

.icon {
  @apply mb-4;
}

.icon .fa {
  @apply text-primary-600 text-4xl;
}

.text-primary-600 {
  @apply text-[#0B4D5C];
}

.text-primary-900 {
  @apply text-[#0B4D5C];
}

</style>
