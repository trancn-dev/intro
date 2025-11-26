<template>
  <div class="video-area de-padding" :style="`background-image: url(${data?.image || '/assets/img/01_koyta_img/video.jpg'})`">
    <div class="container">
      <div class="video-wpr">
        <div class="row">
          <div class="col-xl-4 col-lg-4">
            <div class="my-service">
              <h5>{{ data?.subtitle }}</h5>
              <h4>
                {{ data?.title }}
              </h4>
              <p class="mb-0">
                {{ data?.description }}
              </p>
            </div>
          </div>
          <div class="col-xl-2 col-lg-2">
            <div class="video-box fl-wrap pl">
              <a class="video-box-btn color-bg popup-vimeo image-popup item popup-youtube" :href="data?.extras?.video_url || 'https://www.youtube.com/watch?v=SMKPKGW083c'">
                <i class="fas fa-play play-bt"></i>
              </a>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="skills-section">
              <!-- Progress Bar Start -->
              <div v-for="skill in skills" :key="skill.id" class="progress-box">
                <h5>{{ skill.name }} <span class="pull-right">{{ skill.percent }}%</span></h5>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" :data-width="skill.percent" :style="`width: ${skill.percent}%`"></div>
                </div>
              </div>
              <!-- End Progressbar -->
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
  skills: Array
})
</script>
