<template>
  <div id="contact" class="contact-area de-pt wow fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
    <div class="container">
      <div class="row">
        <div class="col-xl-8 offset-xl-2">
          <div class="site-title mb-60 text-center">
            <h5 class="about-sub-title def">
              Contact
            </h5>
            <h2 class="mb-0">
              Contact Us
            </h2>
          </div>
        </div>
      </div>
      <div class="contact-wpr">
        <div class="contact-content">
          <div class="contact-lpm mb-100">
            <div class="row g-5">
              <div class="col-xl-4 col-md-6 col-lg-6">
                <div class="contact-addr-box">
                  <div class="contact-addr-icon">
                    <i class="fas fa-phone"></i>
                  </div>
                  <div class="contact-addr-desc">
                    <h4>Phone Number</h4>
                    <span>{{ settings?.contact_phone }}</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-6 col-lg-6">
                <div class="contact-addr-box">
                  <div class="contact-addr-icon">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div class="contact-addr-desc">
                    <h4>Mail Address</h4>
                    <span>{{ settings?.contact_email }}</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-6 col-lg-6">
                <div class="contact-addr-box">
                  <div class="contact-addr-icon">
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <div class="contact-addr-desc">
                    <h4>Office Address</h4>
                    <span>{{ settings?.contact_address }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form class="contact-form" id="contact-form" action="php/contact.php" method="POST">
            <h4 class="contact-tl">Send Message</h4>
            <div class="row g-4">
              <div class="col-md-6 wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".3s">
                <input type="text" name="name" class="form-control input-style-2" placeholder="Your Full Name*">
              </div>
              <div class="col-md-6 wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".4s">
                <input type="email" name="email" class="form-control input-style-2" placeholder="Your Email Address*">
              </div>
              <div class="col-md-12 wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".2s">
                <input type="text" name="subject" class="form-control input-style-2" placeholder="Subject...">
              </div>
              <div class="col-md-12 wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".5s">
                <textarea class="form-control input-style-2" name="message" placeholder="Your Message..."></textarea>
              </div>
              <div class="col-md-12 mt-50 contact-sub-btn text-center wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".6s">
                <button type="submit" id="submit" class="tm-btn-2">
                  Submit Message
                  <i class="fas fa-chevron-right"></i>
                </button>
              </div>
              <div class="col-md-12 mt-20">
                <p class="form-message"></p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  settings: Object
})
</script>
