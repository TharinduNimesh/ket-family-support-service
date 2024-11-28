<template>
  <section class="relative mt-10 md:-mt-24 z-10">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        <ServiceCard
          v-for="service in services"
          :key="service.title"
          v-bind="service"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'Support Coordination',
    description: 'Expert guidance to help you understand and make the most of your NDIS plan, connecting you with the right service providers.',
    imagePath: '/images/support-coordination.png',
    link: '/services#support'
  },
  {
    title: 'Plan Management',
    description: 'Professional management of your NDIS funding, handling all financial aspects while giving you choice and control.',
    imagePath: '/images/plan-management.png',
    link: '/services#plan'
  },
  {
    title: 'Recovery Coaching',
    description: 'Personalized support to help you achieve your goals, build confidence, and live more independently.',
    imagePath: '/images/recovery-coaching.png',
    link: '/services#recovery'
  }
]
</script>
