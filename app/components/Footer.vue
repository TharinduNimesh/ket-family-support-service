<template>
  <footer>
    <!-- Main Footer with Background Image -->
    <div class="relative py-20 overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img 
          src="/images/footer-bg.jpg" 
          alt="Footer Background" 
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/90"></div>
      </div>

      <!-- Footer Content -->
      <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <!-- About Section -->
          <div>
            <h3 class="text-white font-recoleta text-2xl font-bold mb-6">About Us</h3>
            <p class="text-white/80 mb-6">
              KET Family Support Service provides comprehensive NDIS support to help people with disabilities live their best lives.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-white hover:text-white/80 transition-colors duration-300">
                <Icon name="fa6-brands-facebook-f" class="w-5 h-5" />
              </a>
              <a href="#" class="text-white hover:text-white/80 transition-colors duration-300">
                <Icon name="fa6-brands-twitter" class="w-5 h-5" />
              </a>
              <a href="#" class="text-white hover:text-white/80 transition-colors duration-300">
                <Icon name="fa6-brands-instagram" class="w-5 h-5" />
              </a>
              <a href="#" class="text-white hover:text-white/80 transition-colors duration-300">
                <Icon name="fa6-brands-linkedin-in" class="w-5 h-5" />
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-white font-recoleta text-2xl font-bold mb-6">Quick Links</h3>
            <ul class="space-y-4">
              <li>
                <NuxtLink to="/about" class="text-white/80 hover:text-white transition-colors duration-300">About Us</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services" class="text-white/80 hover:text-white transition-colors duration-300">Our Services</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact" class="text-white/80 hover:text-white transition-colors duration-300">Contact Us</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/privacy" class="text-white/80 hover:text-white transition-colors duration-300">Privacy Policy</NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Services -->
          <div>
            <h3 class="text-white font-recoleta text-2xl font-bold mb-6">Our Services</h3>
            <ul class="space-y-4">
              <li>
                <NuxtLink to="/services#support" class="text-white/80 hover:text-white transition-colors duration-300">Support Coordination</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services#plan" class="text-white/80 hover:text-white transition-colors duration-300">Plan Management</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services#recovery" class="text-white/80 hover:text-white transition-colors duration-300">Recovery Coaching</NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Get in Touch -->
          <div>
            <h3 class="text-white font-recoleta text-2xl font-bold mb-6">Get in Touch</h3>
            <ul class="space-y-4">
              <li class="flex items-start space-x-3">
                <Icon name="heroicons:map-pin" class="w-5 h-5 text-white mt-1" />
                <span class="text-white/80">123 Main Street, Sydney NSW 2000, Australia</span>
              </li>
              <li class="flex items-center space-x-3">
                <Icon name="heroicons:phone" class="w-5 h-5 text-white" />
                <a href="tel:1300123456" class="text-white/80 hover:text-white transition-colors duration-300">1300 123 456</a>
              </li>
              <li class="flex items-center space-x-3">
                <Icon name="heroicons:envelope" class="w-5 h-5 text-white" />
                <a href="mailto:info@ketfamily.com.au" class="text-white/80 hover:text-white transition-colors duration-300">info@ketfamily.com.au</a>
              </li>
              <li class="flex items-center space-x-3">
                <Icon name="heroicons:clock" class="w-5 h-5 text-white" />
                <span class="text-white/80">Mon - Fri: 9:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright Bar -->
    <div class="bg-primary py-4">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-center text-white/80 text-sm">
          <p>© {{ new Date().getFullYear() }} KET Family Support Service. All rights reserved.</p>
          <p class="mt-2 md:mt-0">
            <NuxtLink to="/terms" class="hover:text-white transition-colors duration-300">Terms of Service</NuxtLink>
            <span class="mx-2">|</span>
            <NuxtLink to="/privacy" class="hover:text-white transition-colors duration-300">Privacy Policy</NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
::selection {
  background-color: rgba(255, 255, 255, 0.3); /* Light background with opacity */
  color: #ffffff; /* White text */
}

::-moz-selection {
  background-color: rgba(255, 255, 255, 0.3); /* Light background with opacity */
  color: #ffffff; /* White text */
}
</style>