<template>
  <div>
    <NuxtLayout name="web">
      <Landing
        background-image="/images/contact-us-bg.jpg"
        heading="Contact Us"
        description="Get in touch with us for any queries, feedback, or support. We are here to help you."
        :show-cta="false"
      />
      <section class="py-16 relative overflow-hidden">
        <!-- Decorative Elements -->
        <div
          class="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"
        ></div>
        <div
          class="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2"
        ></div>

        <!-- Header Section -->
        <div class="text-center max-w-3xl mx-auto mb-16 px-4">
          <span
            class="inline-block px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-medium mb-6"
            >Get in Touch</span
          >
          <h2
            class="text-4xl font-recoleta font-bold text-gray-900 mb-8 leading-tight"
          >
            We're Here to <span class="text-primary">Connect With You</span>
          </h2>
          <p class="text-gray-600 leading-relaxed">
            Have questions, feedback, or need assistance? Reach out to us, and
            we'll ensure your concerns are addressed promptly.
          </p>
        </div>

        <!-- Cards Section -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-8"
        >
          <div class="bg-white rounded-lg shadow-lg p-6 text-center">
            <div class="flex justify-center items-center mb-4">
              <div
                class="bg-gray-100 p-3 w-16 h-16 flex justify-center items-center rounded-full"
              >
                <Icon
                  name="heroicons:map-pin-16-solid"
                  class="text-3xl text-primary"
                />
              </div>
            </div>
            <h3 class="text-2xl font-recoleta font-semibold text-gray-900 mb-2">
              Our Location
            </h3>
            <p class="text-gray-600">
              Sunshine Business Park<br />Sector-94, Poland
            </p>
          </div>
          <div class="bg-white rounded-lg shadow-lg p-6 text-center">
            <div class="flex justify-center items-center mb-4">
              <div
                class="bg-gray-100 p-3 w-16 h-16 flex justify-center items-center rounded-full"
              >
                <Icon
                  name="heroicons:phone-16-solid"
                  class="text-3xl text-primary"
                />
              </div>
            </div>

            <h3 class="text-2xl font-recoleta font-semibold text-gray-900 mb-2">
              Contact Number
            </h3>
            <p class="text-gray-600">+88(0) 555-0108<br />+88(0) 555-0117</p>
          </div>
          <div class="bg-white rounded-lg shadow-lg p-6 text-center">
            <div class="flex justify-center items-center mb-4">
              <div
                class="bg-gray-100 p-3 w-16 h-16 flex justify-center items-center rounded-full"
              >
                <Icon
                  name="heroicons:envelope-16-solid"
                  class="text-3xl text-primary"
                />
              </div>
            </div>
            <h3 class="text-2xl font-recoleta font-semibold text-gray-900 mb-2">
              Our Email
            </h3>
            <p class="text-gray-600">
              example@example.com<br />contact@sunnyaid.com
            </p>
          </div>
          <div class="bg-white rounded-lg shadow-lg p-6 text-center">
            <div class="flex justify-center items-center mb-4">
              <div
                class="bg-gray-100 p-3 w-16 h-16 flex justify-center items-center rounded-full"
              >
                <Icon
                  name="heroicons:calendar-date-range-16-solid"
                  class="text-3xl text-primary"
                />
              </div>
            </div>
            <h3 class="text-2xl font-recoleta font-semibold text-gray-900 mb-2">
              Visit Between
            </h3>
            <p class="text-gray-600">
              Mon - Sat: 8.00-5.00<br />Sunday: Closed
            </p>
          </div>
        </div>

        <!-- Contact Form and Map -->
        <div class="mt-16 px-4 md:px-8">
          <div
            class="container mx-auto grid grid-cols-1 lg:grid-cols-2 rounded-lg shadow-lg border border-gray-200 overflow-hidden"
          >
            <!-- Form Section -->
            <div class="bg-white p-8">
              <h2 class="text-4xl font-recoleta font-bold mb-4 text-primary">
                Send Us A Message
              </h2>
              <p class="text-gray-600 mb-6">
                Give us a chance to serve and bring magic to your brand.
              </p>
              <ContactDetails />
            </div>

            <!-- Map Section -->
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.178507646!2d-0.24168189104901736!3d51.52855822182017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cbf1aa022db%3A0x2e03cb3a798f0323!2sLondon!5e0!3m2!1sen!2suk!4v1670055434392!5m2!1sen!2suk"
                class="w-full h-64 md:h-full rounded-r-lg border-t lg:border-l border-gray-200"
                allowfullscreen="true"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </NuxtLayout>
  </div>
</template>
