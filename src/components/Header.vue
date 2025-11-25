<template>
  <header class="header">
    <div class="main-navigation">
      <nav id="navbar_top" class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="index.html">
            <img src="/assets/img/logo/logo.png" class="logo-display" alt="Itsol">
            <img src="/assets/img/logo/logo-dark.png" class="logo-scrolled" alt="Itsol">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"><i class="ti-menu-alt"></i></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="main_nav">
            <ul id="top-menu" class="navbar-nav v-card-menu">
              <li class="nav-item">
                <a class="nav-link smooth-menu" href="#home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link smooth-menu" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link smooth-menu" href="#service">
                  Service
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link smooth-menu" href="#work">
                  Portfolio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link smooth-menu" href="#blog">
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link smooth-menu" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div> <!-- navbar-collapse.// -->
          <div class="side-menu">
            <div class="menu-tab">
              <div id="one"></div>
              <div id="two"></div>
              <div id="three"></div>
            </div>
            <div class="menu-hide">
              <div class="side-about">
                <img src="/assets/img/01_koyta_img/blog/blog1.jpg" alt="thumb">
                <h5 class="about-sub-title mt-30">
                  about Us
                </h5>
                <p class=" mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa architecto, debitis fugiat ut laborum accusamus, tempora autem excepturi aspernatur quod temporibus perferendis, consectetur a odit fugit facilis sapiente, eum!
                </p>
              </div>
              <div class="side-social-content mt-30">
                <div class="side-address mb-30">
                  <div class="side-addr-box">
                    <div class="side-addr-icon">
                      <i class="fas fa-phone"></i>
                    </div>
                    <div class="side-addr-desc">
                      <span>+435-64773728</span>
                    </div>
                  </div>
                  <div class="side-addr-box">
                    <div class="side-addr-icon">
                      <i class="fas fa-envelope"></i>
                    </div>
                    <div class="contact-addr-desc">
                      <span>Apoyoxo@gmail.com</span>
                    </div>
                  </div>
                  <div class="side-addr-box">
                    <div class="side-addr-icon">
                      <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div class="side-addr-desc">
                      <span>FA - 154 Careon Street</span>
                    </div>
                  </div>
                </div>
                <ul class="side-social">
                  <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i class="fab fa-behance"></i></a></li>
                  <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                </ul>
              </div>
            </div>
          </div><!-- Side Menu -->
        </div> <!-- container -->
      </nav>
    </div>
  </header>
</template>

<script setup>
// Header logic if needed
</script>
