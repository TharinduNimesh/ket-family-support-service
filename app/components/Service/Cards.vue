<template>
  <section class="relative mt-10 md:-mt-24 z-10">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center">
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
    title: 'Personalized and Professional Personal Care',
    description: 'Enhancing Quality of Life by providing personalized and professional personal care',
    longDescription: 'By receiving personalized and professional personal care, NDIS participants experience an improved quality of life. Assistance with hygiene, grooming, exceptional attention and medication management ensures their health and well-being are maintained at optimal levels, which is our key performance indicator of all our services provided',
    imagePath: '/images/services/daily-personal-care.png',
    link: '/services#personal-care'
  },
  {
    title: 'Top-notch Quality of Work',
    description: 'We at KET, we ensure top-notch quality of the support work we provide. Our target is always to be served with quality over quantity',
    longDescription: 'Our team is trained frequently goes above and beyond to ensure work meets the highest standards. Demonstrates mastery and expertise in the field, always dedicated to producing exceptional support services. We deliver top-notch work consistently, exceeding expectations with exceptional attention to detail and accuracy.',
    imagePath: '/images/services/top-quality.png',
    link: '/services#quality'
  },
  {
    title: 'Focused on Teamwork',
    description: 'We collaborate as a team with participants and their families to ensure a comfortable environment for those with disabilities.',
    longDescription: 'We work as part of a team that includes the participant, nominee and all stakeholders. Continually share information, knowledge and skills with the participant and their nominated representative. Allocate the participant one main person to work with throughout the service, to maintain clear and consistent communication.',
    imagePath: '/images/services/companionship.png',
    link: '/services#teamwork'
  },
  {
    title: 'Tailor supports to help you meet your goals',
    description: 'We believe understanding the needs and tailoring services accordingly supports achieving goals',
    longDescription: 'Participants have the rights to choose a service provider who can tailor their supports to your specific needs, who will listen to you and understand your goals, and will work with you to help you achieve those goals and we are at KET happy to offer tailor made services to make your life easier and much productive.',
    imagePath: '/images/services/support-coordination.png',
    link: '/services#tailored-support'
  }
]
</script>
