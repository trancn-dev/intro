<template>
  <div id="work" class="project-area de-padding wow fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
    <div class="container-fluid cmm">
      <div class="row">
        <div class="col-xl-8 offset-xl-2">
          <div class="site-title mb-60 text-center">
            <h5 class="about-sub-title def">
              Gallery
            </h5>
            <h2 class="mb-0">
              Our Gallery Projects
            </h2>
          </div>
        </div>
      </div>
      <div class="project-wpr">
        <div id="filters" class="toolbar text-center mb-40">
          <button class="btn fil-cat filter active"  data-filter="all">
               All
          </button>
          <!-- Note: Dynamic filters would require extracting unique categories from portfolios -->
          <button class="btn fil-cat filter" data-rel="web" data-filter=".web">
            UI Design
          </button>
          <button class="btn fil-cat filter" data-rel="flyers" data-filter=".flyers">
            Web Development
          </button>
          <button class="btn fil-cat filter" data-rel="graphic" data-filter=".graphic">
            Graphic Design
          </button>
          <button class="btn fil-cat filter" data-rel="wordpress" data-filter=".wordpress">
            Wordpress
          </button>
          <button class="btn fil-cat filter" data-rel="illus" data-filter=".illus">
            Illustration
          </button>
        </div>
        <div id="portfolio" class="magnific-mix-gallery">
          <div class="row g-5">
            <div v-for="item in portfolios" :key="item.id" :class="`col-xl-3 col-md-6 col-lg-6 mix ${item.category}`">
              <div class="project-box tile scale-anm" >
                <div class="port-pic">
                  <img :src="item.image" alt="thumb">
                  <div class="port-overlay">
                    <div class="port-content">
                      <h5>{{ item.title }}</h5>
                      <span>{{ item.category }}</span>
                      <a :href="item.image" class="item popup-link">
                        <i class="fas fa-eye"></i>
                      </a>
                    </div>
                  </div>
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
  portfolios: Array
})
</script>
