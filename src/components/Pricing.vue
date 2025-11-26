<template>
  <div id="pricing" class="item-area bg de-padding">
    <div class="container">
      <div class="row">
        <div class="col-xl-8 offset-xl-2">
          <div class="site-title mb-60 text-center">
            <h5 class="about-sub-title">
              Pricing Table
            </h5>
            <h2 class="mb-0">
              Easy Pricing Process
            </h2>
          </div>
        </div>
      </div>
      <div class="price-wpr">
        <div class="row g-5">
          <div v-for="plan in pricing" :key="plan.id" class="col-xl-4 col-md-6">
            <div class="price-content wow fadeInLeft" data-wow-duration="2s" data-wow-delay=".2s">
              <div class="price-icon">
                <i>
                  <img src="/assets/img/01_koyta_img/icon/p1.png" alt="thumb">
                </i>
              </div>
              <div class="price-box">
                <div class="price-head">
                  <div class="price-rib">
                    <span class="price-ribbon-title">{{ plan.name }}</span>
                  </div>
                </div>
                <div class="price-info">
                  <ul>
                    <li v-for="(feature, index) in plan.features" :key="index">
                      <i class="fas fa-check"></i>
                      <span v-if="feature.active">{{ feature.text }}</span>
                      <del v-else>{{ feature.text }}</del>
                    </li>
                  </ul>
                </div>
                <div class="price-bottom">
                  <a :href="plan.button_link || '#'" :class="`tm-btn-4 ${plan.is_recommended ? 'price-active' : ''}`">
                    {{ plan.currency }}{{ plan.price }} {{ plan.button_text }}
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
  pricing: Array
})
</script>

