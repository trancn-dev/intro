<template>
  <div id="service" class="service-area bg de-padding v-card-section wow fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
    <div class="container">
      <div class="row">
        <div class="col-xl-8 offset-xl-2">
          <div class="site-title mb-60 text-center">
            <h5 class="about-sub-title wh">
              My Services
            </h5>
            <h2 class="mb-0">
              Why Choose My Services
            </h2>
          </div>
        </div>
      </div>
      <div class="service-wpr">
        <div class="row g-5">
          <div v-for="service in services" :key="service.id" class="col-xl-4 col-md-6">
            <div class="service-box">
              <div class="service-icon">
                <i>
                  <img :src="service.icon" alt="thumb">
                </i>
              </div>
              <div class="service-content">
                <h4>{{ service.title }}</h4>
                <p>
                  {{ service.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  services: Array
})
</script>
