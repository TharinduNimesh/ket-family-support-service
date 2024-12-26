<template>
  <div>
    <NuxtLayout name="web">
      <HeroSection />
      <ServiceCards />
      <!-- <WhyChooseUs /> -->
      <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
              <span
                class="inline-block px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-medium mb-6"
                >Why Choose Us</span
              >
              <h2
                class="text-4xl font-recoleta font-bold text-gray-900 mb-8 leading-tight"
              >
                Why Choose <span class="text-primary">KET Family Support</span>
              </h2>
            </div>

            <div class="w-full">
              <img
                src="/images/charts/why-choose-us-mobile.avif"
                alt="Our Values"
                class="w-full md:hidden h-auto object-cover"
              />

              <img
                src="/images/charts/why-choose-us-desktop.avif"
                alt="Our Values"
                class="w-full hidden md:block h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <TestimonialsSlider />
    </NuxtLayout>
  </div>
</template>
