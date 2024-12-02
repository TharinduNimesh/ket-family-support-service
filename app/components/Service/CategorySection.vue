<template>
  <div class="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
    <div class="w-[380px]" v-for="(service, index) in services" :key="index">
      <ServiceCard
        :title="service.title"
        :description="service.description"
        :image-path="service.imagePath"
        :link="`/services#${service.title.toLowerCase().replace(/ /g, '-')}`"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  services: {
    type: Array,
    required: true
  }
})
</script>
