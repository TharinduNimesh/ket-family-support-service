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
          <div
            class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12"
          >
            <div class="md:w-1/2 text-center md:text-left relative">
              <!-- Decorative elements -->
              <div
                class="absolute -top-8 -left-8 w-16 h-16 bg-primary/5 rounded-full animate-pulse"
              ></div>
              <div
                class="absolute -bottom-8 -right-8 w-20 h-20 bg-primary/10 rounded-full animate-pulse delay-150"
              ></div>

              <span
                class="inline-block px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-medium mb-6 transform hover:scale-105 transition-transform"
                >Our Story</span
              >
              <h2
                class="text-4xl md:text-5xl font-recoleta font-bold text-gray-900 mb-8 leading-tight"
              >
                Welcome to <span class="text-primary">KET Family</span> Support
                Services
              </h2>
              <div class="space-y-6 text-lg text-gray-600">
                <p class="mb-6 leading-relaxed">
                  With over four years of dedicated experience in family support
                  services, we pride ourselves on being a compassionate,
                  understanding, and reliable partner for families in need. Our
                  mission is to provide first-class, individualised care that is
                  both punctual and honest, ensuring that every family receives
                  the highest quality of support with their own choices.
                </p>
                <p class="mb-6 leading-relaxed">
                  At KET Family Support we understand the importance of
                  personalised attention. Our experienced team offers one-on-one
                  support tailored to the unique needs of each family, fostering
                  an environment of trust and comfort. We are family-oriented
                  and committed to building lasting relationships through our
                  caring and loving approach.
                </p>
              </div>

              <!-- Stats Section -->
              <div class="grid grid-cols-3 gap-4 mt-8">
                <div
                  class="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div class="text-3xl font-bold text-primary mb-1">4+</div>
                  <div class="text-sm text-gray-600">Years of Experience</div>
                </div>
                <div
                  class="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div class="text-3xl font-bold text-primary mb-1">100%</div>
                  <div class="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div
                  class="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div class="text-3xl font-bold text-primary mb-1">24/7</div>
                  <div class="text-sm text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
            <div class="md:w-1/2 relative">
              <div
                class="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full"
              ></div>
              <div
                class="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full"
              ></div>
              <img
                src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg"
                alt="KET Family Support Services"
                class="rounded-2xl shadow-xl w-full h-auto object-cover relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Vision and Mission Section -->
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="grid md:grid-cols-2 gap-12 items-stretch">
            <!-- Vision Column -->
            <div
              class="bg-primary/5 rounded-xl p-8 flex flex-col justify-center transform hover:scale-105 transition-transform duration-300"
            >
              <div class="flex items-center mb-6">
                <Icon name="mdi:eye" class="text-primary w-10 h-10 mr-4" />
                <h3 class="text-3xl font-recoleta font-bold text-primary">
                  Our Vision
                </h3>
              </div>
              <p class="text-lg text-gray-700 leading-relaxed">
                "To be the leading provider of NDIS services and care support
                services in Australia"
              </p>
            </div>
            <!-- Mission Column -->
            <div
              class="bg-secondary/5 rounded-xl p-8 flex flex-col justify-center transform hover:scale-105 transition-transform duration-300"
            >
              <div class="flex items-center mb-6">
                <Icon name="mdi:flag" class="text-secondary w-10 h-10 mr-4" />
                <h3 class="text-3xl font-recoleta font-bold text-secondary">
                  Our Mission
                </h3>
              </div>
              <p class="text-lg text-gray-700 leading-relaxed">
                "Your trusted partner for personalized and tailored care support
                services, assuring top-notch quality by treating you with
                dignity, respect, and compassion"
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Our Values Section -->
      <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
              <span
                class="inline-block px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-medium mb-6"
                >Our Core Values</span
              >
              <h2
                class="text-4xl font-recoleta font-bold text-gray-900 mb-8 leading-tight"
              >
                Our Values & <span class="text-primary">Commitment</span>
              </h2>
            </div>

            <div class="w-full">
              <img 
                src="/images/charts/our-core-values-mobile.avif"
                alt="Our Values"
                class="w-full md:hidden h-auto object-cover"
              />

              <img 
                src="/images/charts/our-core-values-desktop.avif"
                alt="Our Values"
                class="w-full hidden md:block h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Our Team Section -->
      <section class="py-20 bg-white relative overflow-hidden">
        <!-- Decorative Elements -->
        <div
          class="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"
        ></div>
        <div
          class="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2"
        ></div>

        <div class="container mx-auto px-4 relative z-10">
          <div class="max-w-6xl mx-auto">
            <!-- Section Header -->
            <div class="text-center mb-16">
              <span
                class="inline-block px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-medium mb-6"
                >Our Team</span
              >
              <h2
                class="text-4xl font-recoleta font-bold text-gray-900 mb-8 leading-tight"
              >
                Meet Our <span class="text-primary">Dedicated</span> Team
              </h2>
              <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                Our experienced team is committed to providing exceptional
                support and care to help you achieve your goals and enhance your
                quality of life.
              </p>
            </div>

            <!-- Team Members Grid -->
            <div
              class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
            >
              <TeamMemberCard
                name="Tharindu Nimesh"
                position="Support Coordinator"
                image="/images/team/tharindu-nimesh.png"
                linkedin="https://linkedin.com"
                email="sarah@ketfamily.com.au"
              />
              <TeamMemberCard
                name="Chathura Sudaraka"
                position="Care Manager"
                image="/images/team/chathura-sudaraka.png"
                linkedin="https://linkedin.com"
                email="michael@ketfamily.com.au"
              />
              <TeamMemberCard
                name="Sachith Prasan"
                position="Client Relations Manager"
                image="/images/team/sachith-prasan.png"
                linkedin="https://linkedin.com"
                email="emma@ketfamily.com.au"
              />
            </div>
          </div>
        </div>
      </section>
    </NuxtLayout>
  </div>
</template>

<script setup>
definePageMeta({
  title: "About Us - KET Family Support Service",
  description:
    "Learn about KET Family Support Services and our commitment to providing compassionate, personalized care for families in need.",
});
</script>

<style scoped>
.value-card {
  @apply bg-white p-8 text-center relative overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1;
}

.value-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    var(--tw-color-primary-50) 0%,
    var(--tw-color-primary-100) 100%
  );
  opacity: 0.1;
  z-index: 0;
  clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
  transition: opacity 0.3s ease;
}

.value-card:hover::before {
  opacity: 0.2;
}

.icon-wrapper {
  @apply mb-4 p-3 rounded-full bg-primary/5 inline-flex items-center justify-center relative z-10;
}

@screen md {
  .values-grid {
    @apply gap-8;
  }
}

@screen lg {
  .values-grid {
    @apply gap-10;
  }
}
</style>
