<script setup>
import { onMounted } from 'vue'
import { initializeTheme } from './init.js'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import VideoSkills from './components/VideoSkills.vue'
import Counter from './components/Counter.vue'
import Portfolio from './components/Portfolio.vue'
import Testimonials from './components/Testimonials.vue'
import Pricing from './components/Pricing.vue'
import Blog from './components/Blog.vue'
import Contact from './components/Contact.vue'
import Partner from './components/Partner.vue'
import Footer from './components/Footer.vue'

onMounted(() => {
  // Give a small delay to ensure DOM is fully ready and external scripts are loaded
  setTimeout(() => {
    initializeTheme()
  }, 100)
})
</script>

<template>
  <Header />
  <main class="main">
    <Hero />
    <About />
    <Services />
    <VideoSkills />
    <Counter />
    <Portfolio />
    <Testimonials />
    <Pricing />
    <Blog />
    <Contact />
    <Partner />
  </main>
  <div class="clearfix"></div>
  <Footer />
</template>

<style>
/* Global styles can go here or in style.css */
</style>
