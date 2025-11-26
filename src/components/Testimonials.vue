<template>
  <div class="feed-area bg de-padding">
    <div class="container">
      <div class="row">
        <div class="col-xl-8 offset-xl-2">
          <div class="site-title mb-60 text-center">
            <h5 class="about-sub-title wh def">
              Client
            </h5>
            <h2 class="mb-0">
              What Our Client Say?
            </h2>
          </div>
        </div>
      </div>
      <div class="feed-wpr feed-sldr owl-carousel owl-theme">
        <div v-for="item in testimonials" :key="item.id" class="feed-box">
          <p>
            {{ item.content }}
          </p>
          <div class="feed-bio">
            <img :src="item.avatar" alt="thumb">
            <div class="feed-name">
              <h5>{{ item.name }}</h5>
              <span>{{ item.role }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  testimonials: Array
})
</script>
