<template>
  <div id="about" class="about-area de-padding v-card-section">
    <div class="container">
      <div class="about-wpr">
        <div class="row">
          <div class="col-xl-6">
            <div class="about-left wow fadeInLeft" data-wow-duration="2s" data-wow-delay=".2s">
              <div class="about-pic">
                <img :src="data?.image || '/assets/img/01_koyta_img/about-me.png'" alt="thumb">
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="about-right wow fadeInRight" data-wow-duration="2s" data-wow-delay=".2s">
              <div class="about-right-content">
                <h5 class="about-sub-title">
                  {{ data?.subtitle }}
                </h5>
                <h2 class="about-title">
                  {{ data?.title }}
                </h2>
                <h5 class="about-title-3">
                  {{ data?.extras?.sub_title_3 }}
                </h5>
                <div class="about-txt mb-30">
                  <p>
                    {{ data?.description }}
                  </p>
                </div>
                <div class="about-btns">
                  <a :href="data?.extras?.cv_link || '#'" class="tm-btn-2">
                    Download CV
                    <i class="fas fa-arrow-down"></i>
                  </a>
                  <a :href="data?.extras?.print_cv_link || '#'" class="tm-btn-3">
                    <i class="fas fa-print"></i>
                    Print Cv
                  </a>
                </div>
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
  data: Object
})
</script>
