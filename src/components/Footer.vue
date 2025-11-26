<template>
  <footer>
    <div class="footer-widget">
      <div class="container">
        <div class="copyright">
          <div class="row align-items-center">
            <div class="col-xl-4">
              <p>{{ settings?.copyright_text }}</p>
            </div>
            <div class="col-xl-4">
              <ul class="footer-menu">
                <li>
                  <a href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-xl-4">
              <ul class="footer-social">
                <li v-for="social in socials" :key="social.id">
                  <a :href="social.url"><i :class="social.icon"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <!-- Start Scroll top
  ============================================= -->
  <a href="#bdy" id="scrtop" class="smooth-menu"><i class="ti-arrow-up"></i></a>
  <!-- End Scroll top-->
</template>

<script setup>
defineProps({
  settings: Object,
  socials: Array
})
</script>
