<template>
  <div id="home" class="hero-section v-card-section">
    <div class="hero-single" :style="`background-image: url(${data?.image || '/assets/img/01_koyta_img/slider01.jpg'})`">
      <div class="container">
        <div class="row">
          <div class="col-xl-10 offset-xl-1">
            <div class="hero-content">
              <h5 class="hero-sub-title wow fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
                {{ data?.subtitle }}
              </h5>
              <h2 class="hero-title wow fadeInDown" data-wow-duration="2s" data-wow-delay=".2s">
                <!-- {{ data?.title }} -->
                <span v-html="data.title"></span>
                <span class="typed-strings">
                  <span v-for="(str, index) in data?.extras?.typed_strings" :key="index" class="type_color">{{ str }}</span>
                </span>
                <span class="typed"></span>
              </h2>
              <p>
                {{ data?.description }}
              </p>
              <div class="hero-btn text-center">
                <a :href="data?.extras?.button_link || '#'" target="_blank" class="tm-btn-1">
                  {{ data?.extras?.button_text }} <i class="fas fa-chevron-right"></i>
                </a>
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
  data: Object,
  socials: Array
})
</script>
