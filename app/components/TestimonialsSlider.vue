<template>
  <section class="py-20 bg-secondary overflow-hidden">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Heading -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-recoleta font-bold text-white">
          What Our Participants Say
        </h2>
      </div>

      <div class="max-w-4xl mx-auto">
        <!-- Quote Icon -->
        <div class="flex justify-center mb-12">
          <Icon 
            name="bx-bxs-quote-left" 
            class="w-20 h-20 text-white/10 mx-auto"
          />
        </div>

        <!-- Testimonials -->
        <div class="relative min-h-[200px]">
          <Transition name="fade" mode="out-in">
            <div 
              :key="currentSlide"
              class="text-center"
            >
              <p class="text-white text-2xl md:text-3xl leading-relaxed font-light mb-8 px-6">
                "{{ testimonials[currentSlide].text }}"
              </p>
            </div>
          </Transition>

          <!-- Navigation Dots -->
          <div class="flex justify-center gap-3 mt-12">
            <button
              v-for="(_, index) in testimonials"
              :key="index"
              @click="setSlide(index)"
              class="w-2.5 h-2.5 rounded-full transition-all duration-300"
              :class="currentSlide === index ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'"
              aria-label="Go to slide"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'
import { useIntervalFn } from '@vueuse/core'

const testimonials = [
  {
    id: 1,
    text: "The support I've received has been life-changing. The team truly understands my needs and has helped me achieve independence in ways I never thought possible."
  },
  {
    id: 2,
    text: "I'm amazed by how personalized the service is. They take the time to understand my goals and create a plan that works perfectly for my situation."
  },
  {
    id: 3,
    text: "The dedication and professionalism of the support team is outstanding. They're always there when I need them, making my NDIS journey smooth and stress-free."
  },
  {
    id: 4,
    text: "From day one, they've made the entire NDIS process simple to understand. Their guidance has been invaluable in helping me make the most of my plan."
  }
]

const currentSlide = ref(0)

const setSlide = (index) => {
  currentSlide.value = index
  pause()
  resume()
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % testimonials.length
}

const { pause, resume } = useIntervalFn(nextSlide, 5000, { immediate: true })

onUnmounted(() => {
  pause()
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>