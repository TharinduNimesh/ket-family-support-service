<template>
  <header class="fixed top-0 left-0 right-0 z-50">
    <!-- Top Contact Bar -->
    <div
      class="bg-secondary text-white transition-all duration-300"
      :class="[
        showTopBar ? 'h-12 opacity-100' : 'h-0 opacity-0',
        'overflow-hidden',
      ]"
    >
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div class="flex justify-between items-center h-full">
          <!-- Contact Info -->
          <div class="flex items-center space-x-6">
            <a
              href="mailto:info@ketfamilysupport.com"
              class="flex items-center hover:text-accent/90 transition-colors"
            >
              <Icon
                name="heroicons-envelope-solid"
                class="text-lg sm:text-xl mr-2"
              />
              <span class="hidden sm:inline">info@ketfamilysupport.com</span>
              <span class="sm:hidden">Email Us</span>
            </a>
            <a
              href="tel:+61123456789"
              class="flex items-center hover:text-accent/90 transition-colors"
            >
              <Icon
                name="heroicons-phone-solid"
                class="text-lg sm:text-xl mr-2"
              />
              <span class="hidden sm:inline">+61 123 456 789</span>
              <span class="sm:hidden">Call Us</span>
            </a>
          </div>
          <!-- Social Media Links -->
          <div class="flex items-center space-x-4">
            <a
              href="#"
              class="hover:text-accent/90 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                name="fa6-brands-square-facebook"
                class="text-lg sm:text-xl"
              />
            </a>
            <a
              href="#"
              class="hover:text-accent/90 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                name="fa6-brands-square-instagram"
                class="text-lg sm:text-xl"
              />
            </a>
            <a
              href="#"
              class="hover:text-accent/90 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                name="fa6-brands-linkedin"
                class="text-lg sm:text-xl"
              />
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Bar Start -->
    <div class="w-full bg-white shadow-md transition-all duration-300" :class="{ 'mt-0': !showTopBar }">
      <nav
        class="container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300"
      >
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <NuxtLink
              to="/"
              class="text-2xl font-recoleta font-bold text-primary"
            >
              KET Family Support
            </NuxtLink>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden lg:flex items-center space-x-8">
            <NuxtLink
              v-for="(link, index) in navigationLinks"
              :key="index"
              :to="link.path"
              class="text-gray-700 hover:text-primary px-3 py-2 rounded-md uppercase text-sm font-roboto font-medium transition-colors duration-200"
              active-class="text-primary font-semibold"
            >
              {{ link.name }}
            </NuxtLink>
            <NuxtLink
              to="/join-now"
              class="bg-primary !text-white px-6 py-2 rounded-full uppercase text-sm font-roboto font-medium hover:bg-primary/90 transition-colors duration-200"
            >
              Join Now
            </NuxtLink>
          </div>

          <!-- Mobile menu button -->
          <div class="lg:hidden">
            <button
              @click="isOpen = !isOpen"
              class="inline-flex items-center justify-center p-2 rounded-md text-secondary hover:text-primary hover:bg-accent/80 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              :aria-expanded="isOpen"
            >
              <span class="sr-only">Open main menu</span>
              <!-- Icon when menu is closed -->
              <Icon
                v-if="!isOpen"
                name="material-symbols-menu"
                class="block h-6 w-6"
              />
              <!-- Icon when menu is open -->
              <Icon
                v-else
                name="material-symbols-close"
                class="block h-6 w-6"
              />
            </button>
          </div>
        </div>

        <!-- Mobile Navigation -->
        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <div v-if="isOpen" class="lg:hidden">
            <div class="pt-2 pb-3 space-y-1 sm:px-3">
              <NuxtLink
                v-for="(link, index) in navigationLinks"
                :key="index"
                :to="link.path"
                class="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-lg font-roboto font-medium transition-colors duration-200"
                active-class="text-primary font-semibold"
                @click="isOpen = false"
              >
                {{ link.name }}
              </NuxtLink>
              <NuxtLink
                to="/join-now"
                class="bg-primary !text-white px-4 py-2 rounded-full text-lg font-roboto font-medium hover:bg-primary/90 transition-colors duration-200 block text-center mt-4"
                @click="isOpen = false"
              >
                Join Now
              </NuxtLink>
            </div>
          </div>
        </transition>
      </nav>
    </div>
    <!-- Navigation Bar End -->
  </header>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useScroll } from "@vueuse/core";

const isOpen = ref(false);
const lastScrollY = ref(0);
const showTopBar = ref(true);

const { y } = useScroll(window);

// Watch scroll position to show/hide top bar
watch(y, (newY) => {
  // Show top bar when scrolling up, hide when scrolling down
  if (newY > lastScrollY.value && newY > 100) {
    showTopBar.value = false;
  } else {
    showTopBar.value = true;
  }
  lastScrollY.value = newY;
});

const navigationLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];
</script>

<style scoped>
.router-link-active {
  @apply text-primary font-semibold;
}
</style>
