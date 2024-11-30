<template>
  <div>
    <NuxtLayout name="web">
      <Landing
        background-image="/images/about-us-bg.jpg"
        heading="About Us"
        description="Learn more about our organization and our commitment to supporting individuals with disabilities."
        :show-cta="false"
      />
      
      <!-- Welcome Section -->
      <section class="py-20 bg-gradient-to-b from-white to-gray-50">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto text-center relative">
            <!-- Decorative elements -->
            <div class="absolute -top-8 -left-8 w-16 h-16 bg-primary/5 rounded-full animate-pulse"></div>
            <div class="absolute -bottom-8 -right-8 w-20 h-20 bg-primary/10 rounded-full animate-pulse delay-150"></div>
            
            <span class="inline-block px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-medium mb-6 transform hover:scale-105 transition-transform">Our Story</span>
            <h2 class="text-4xl md:text-5xl font-recoleta font-bold text-gray-900 mb-8 leading-tight">
              Welcome to <span class="text-primary">KET Family</span> Support Services
            </h2>
            <div class="space-y-6 text-lg text-gray-600 max-w-3xl mx-auto">
              <p class="mb-6 leading-relaxed">
                With over four years of dedicated experience in family support services, we pride ourselves on being a compassionate, understanding, and reliable partner for families in need. Our mission is to provide first-class, individualised care that is both punctual and honest, ensuring that every family receives the highest quality of support with their own choices.
              </p>
              <p class="mb-6 leading-relaxed">
                At KET Family Support we understand the importance of personalised attention. Our experienced team offers one-on-one support tailored to the unique needs of each family, fostering an environment of trust and comfort. We are family-oriented and committed to building lasting relationships through our caring and loving approach.
              </p>
            </div>
            
            <!-- Stats Section -->
            <div class="grid md:grid-cols-3 gap-8 mt-16">
              <div class="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div class="text-4xl font-bold text-primary mb-2">4+</div>
                <div class="text-gray-600">Years of Experience</div>
              </div>
              <div class="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div class="text-4xl font-bold text-primary mb-2">100%</div>
                <div class="text-gray-600">Client Satisfaction</div>
              </div>
              <div class="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div class="text-4xl font-bold text-primary mb-2">24/7</div>
                <div class="text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Our Values Section -->
      <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="max-w-6xl mx-auto">
            <div class="grid md:grid-cols-2 gap-16 items-center">
              <div class="relative">
                <div class="absolute -top-4 -left-4 w-24 h-24 bg-primary/5 rounded-full"></div>
                <div class="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full"></div>
                <img
                  src="https://wp.xpressbuddy.com/sunnyaid/wp-content/uploads/2024/08/about-img02.png"
                  alt="Our Values"
                  class="rounded-2xl shadow-xl w-full h-[500px] object-cover relative z-10 transform hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div>
                <span class="inline-block px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-medium mb-6">Our Core Values</span>
                <h2 class="text-4xl font-recoleta font-bold text-gray-900 mb-8 leading-tight">
                  Our Values & <span class="text-primary">Commitment</span>
                </h2>
                <div class="space-y-8">
                  <div class="flex items-start gap-6 group">
                    <div class="flex-shrink-0">
                      <div class="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <Icon name="heroicons:heart" class="w-8 h-8 text-primary group-hover:text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 class="text-xl font-semibold text-gray-900 mb-3">
                        Compassionate Care
                      </h3>
                      <p class="text-gray-600 leading-relaxed">
                        We provide loving, understanding support that puts your family's needs first, ensuring a nurturing environment for growth and well-being.
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start gap-6 group">
                    <div class="flex-shrink-0">
                      <div class="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <Icon name="heroicons:user-group" class="w-8 h-8 text-primary group-hover:text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 class="text-xl font-semibold text-gray-900 mb-3">
                        Personalized Approach
                      </h3>
                      <p class="text-gray-600 leading-relaxed">
                        Every family is unique, and our support is tailored to your specific needs, ensuring the best possible care experience.
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start gap-6 group">
                    <div class="flex-shrink-0">
                      <div class="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <Icon name="heroicons:clock" class="w-8 h-8 text-primary group-hover:text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 class="text-xl font-semibold text-gray-900 mb-3">
                        Reliability
                      </h3>
                      <p class="text-gray-600 leading-relaxed">
                        Count on us for punctual, consistent, and professional support services that you can depend on day after day.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Our Services Section -->
      <section class="py-20 bg-white relative overflow-hidden">
        <!-- Decorative Elements -->
        <div class="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
        
        <div class="container mx-auto px-4 relative z-10">
          <div class="max-w-3xl mx-auto text-center">
            <span class="inline-block px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-medium mb-6">Our Services</span>
            <h2 class="text-4xl font-recoleta font-bold text-gray-900 mb-8 leading-tight">
              Supporting Your <span class="text-primary">Journey</span>
            </h2>
            <div class="space-y-6 text-lg text-gray-600 max-w-3xl mx-auto">
              <p class="mb-8 leading-relaxed">
                Our services are designed to help families navigate life's challenges with ease and confidence. By choosing KET Family Support Services, you are selecting a team that is passionate about making a positive difference, providing the kind of compassionate and experienced care that you and your loved ones deserve.
              </p>
              <p class="mb-12 leading-relaxed">
                We look forward to supporting your family with the highest standard of service and dedication.
              </p>
            </div>
            <div class="mt-12 space-y-6">
              <NuxtLink
                to="/join-now"
                class="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>Start Your Journey With Us</span>
                <Icon name="heroicons:arrow-right" class="w-5 h-5 ml-2" />
              </NuxtLink>
              <p class="text-sm text-gray-500">No obligations, just a conversation about how we can help</p>
            </div>
          </div>
        </div>
      </section>
    </NuxtLayout>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'About Us - KET Family Support Service',
  description: 'Learn about KET Family Support Services and our commitment to providing compassionate, personalized care for families in need.',
});
</script>