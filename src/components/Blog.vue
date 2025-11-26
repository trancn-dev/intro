<template>
  <div id="blog" class="blog-area de-padding blog-bg">
    <div class="container">
      <div class="row">
        <div class="col-xl-8 offset-xl-2">
          <div class="site-title mb-60 text-center">
            <h5 class="about-sub-title wh def">
              Recent News
            </h5>
            <h2 class="mb-0">
              Get Update From Blog
            </h2>
          </div>
        </div>
      </div>
      <div class="blog-wpr blog-sldr owl-carousel owl-theme">
        <a v-for="blog in blogs" :key="blog.id" :href="blog.link || '#'" target="_blank">
          <div class="blog-box wow fadeInLeft" data-wow-duration="2s" data-wow-delay=".2s">
            <div class="blog-pic">
              <img :src="blog.image" alt="thumb">
              <div class="blog-date">
                <span>{{ blog.published_at }}</span>
              </div>
            </div>
            <div class="blog-desc">
              <h5>
                {{ blog.title }}
              </h5>
              <p class="mb-0">
                {{ blog.description }}
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  blogs: Array
})
</script>
