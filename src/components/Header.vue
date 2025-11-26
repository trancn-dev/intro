<template>
  <header class="header">
    <div class="main-navigation">
      <nav id="navbar_top" class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="index.html">
            <img
              :src="settings?.logo || '/assets/img/logo/logo.png'"
              class="logo-display"
              alt="Itsol"
            />
            <img
              :src="settings?.logo_dark || '/assets/img/logo/logo-dark.png'"
              class="logo-scrolled"
              alt="Itsol"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main_nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"><i class="ti-menu-alt"></i></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-center"
            id="main_nav"
          >
            <ul id="top-menu" class="navbar-nav v-card-menu">
              <li class="nav-item">
                <a class="nav-link smooth-menu" href="#home"> Home </a>
              </li>
              <li class="nav-item">
                <a class="nav-link smooth-menu" href="#about"> About </a>
              </li>
              <li class="nav-item">
                <a class="nav-link smooth-menu" href="#service"> Service </a>
              </li>
              <li class="nav-item">
                <a class="nav-link smooth-menu" href="#work"> Portfolio </a>
              </li>
              <li class="nav-item">
                <a class="nav-link smooth-menu" href="#blog"> Blog </a>
              </li>
              <li class="nav-item">
                <a class="nav-link smooth-menu" href="#contact"> Contact </a>
              </li>
            </ul>
          </div>
          <!-- navbar-collapse.// -->
          <div class="side-menu">
            <div class="menu-tab">
              <div id="one"></div>
              <div id="two"></div>
              <div id="three"></div>
            </div>
            <div class="menu-hide">
              <div class="side-about">
                <img
                  src="/assets/img/01_koyta_img/blog/blog1.jpg"
                  alt="thumb"
                />
                <h5 class="about-sub-title mt-30">about Us</h5>
                <p class="mb-0">
                  {{ settings?.description }}
                </p>
              </div>
              <div class="side-social-content mt-30">
                <div class="side-address mb-30">
                  <div class="side-addr-box">
                    <div class="side-addr-icon">
                      <i class="fas fa-phone"></i>
                    </div>
                    <div class="side-addr-desc">
                      <span>{{ settings?.contact_phone }}</span>
                    </div>
                  </div>
                  <div class="side-addr-box">
                    <div class="side-addr-icon">
                      <i class="fas fa-envelope"></i>
                    </div>
                    <div class="contact-addr-desc">
                      <span>{{ settings?.contact_email }}</span>
                    </div>
                  </div>
                  <div class="side-addr-box">
                    <div class="side-addr-icon">
                      <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div class="side-addr-desc">
                      <span>{{ settings?.contact_address }}</span>
                    </div>
                  </div>
                </div>
                                <ul class="side-social">
                  <li v-for="social in socials" :key="social.id">
                    <a :href="social.url"><i :class="social.icon"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Side Menu -->
        </div>
        <!-- container -->
      </nav>
    </div>
  </header>
</template>

<script setup>
defineProps({
  settings: Object,
  socials: Array
})
</script>
