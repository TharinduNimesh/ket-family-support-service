<template>
  <div>
    <NuxtLayout name="web">
      <Landing
        background-image="/images/ndis-support-worker.png"
        heading="Our Services"
        description="Comprehensive NDIS support services tailored to your needs"
        :show-cta="false"
      />

      <!-- Services Section -->
      <section class="py-16 relative overflow-hidden">
        <!-- Decorative Elements -->
        <div class="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <!-- Section Header -->
          <div class="text-center max-w-3xl mx-auto mb-16">
            <span class="inline-block px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-medium mb-6">Our Services</span>
            <h2 class="text-4xl font-recoleta font-bold text-gray-900 mb-8 leading-tight">
              Empowering Your <span class="text-primary">Independence</span>
            </h2>
            <p class="text-gray-600 leading-relaxed">
              We offer a comprehensive range of NDIS support services designed to enhance your daily life and promote independence.
            </p>
          </div>

          <!-- Service Categories -->
          <div class="mb-12">
            <ServiceTabNavigation
              v-model="activeTab"
              :categories="categories"
            />
          </div>

          <!-- Service Cards -->
          <ServiceCategorySection
            :services="categories[activeTab].services"
          />

          <!-- CTA Section -->
          <div class="text-center mt-16">
            <NuxtLink
              to="/join-now"
              class="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </NuxtLink>
          </div>
        </div>
      </section>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref(0)

const categories = [
  {
    name: "Personal Support",
    services: [
      {
        title: "High Intensity Daily Personal Activities",
        description: "Specialized support for complex personal care needs and daily activities.",
        imagePath: "/images/services/daily-personal-activity.png"
      },
      {
        title: "Daily Personal Care",
        description: "Dignified assistance with personal care and hygiene needs.",
        imagePath: "/images/services/daily-personal-care.png"
      },
      {
        title: "Companionship",
        description: "Friendly companionship and emotional support services.",
        imagePath: "/images/services/companionship.png"
      }
    ]
  },
  {
    name: "Daily Living Assistance",
    services: [
      {
        title: "Assistance with Daily Living",
        description: "Support with everyday tasks to maintain independence and quality of life.",
        imagePath: "/images/services/assistance-with-daily-living.png"
      },
      {
        title: "Development of Daily Living Skills",
        description: "Building essential life skills for greater independence and confidence.",
        imagePath: "/images/services/development-of-daily-living-skills.png"
      },
      {
        title: "Assistance with Household Tasks",
        description: "Help with maintaining a clean and organized living environment.",
        imagePath: "/images/services/assistance-with-household-tasks.png"
      }
    ]
  },
  {
    name: "Community & Social",
    services: [
      {
        title: "Community Participation",
        description: "Support to engage in social, community, and civic activities.",
        imagePath: "/images/services/community-participation.png"
      },
      {
        title: "Social and Recreation Activities",
        description: "Organizing and supporting participation in recreational activities.",
        imagePath: "/images/services/social-and-recreation-activities.png"
      },
      {
        title: "Travel and Transport Assistance",
        description: "Safe and reliable transportation support for your mobility needs.",
        imagePath: "/images/services/travel-and-transport-assistance.png"
      }
    ]
  },
  {
    name: "Home & Support Services",
    services: [
      {
        title: "Cleaning and Gardening",
        description: "Professional domestic cleaning and garden maintenance services.",
        imagePath: "/images/services/cleaning-and-gardening.png"
      },
      {
        title: "Support Coordination",
        description: "Expert assistance in coordinating and managing your NDIS supports.",
        imagePath: "/images/services/support-coordination.png"
      }
    ]
  }
]
</script>