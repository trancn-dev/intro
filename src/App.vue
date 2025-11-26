<script setup>
import { onMounted, computed } from 'vue'
import { initializeTheme } from './init.js'
import { useIntroStore } from './stores/intro'
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

const store = useIntroStore()
const introData = computed(() => store.data)
const loading = computed(() => store.loading)

onMounted(async () => {
  await store.fetchIntroData()

  // Give a small delay to ensure DOM is fully ready and external scripts are loaded
  setTimeout(() => {
    initializeTheme()
  }, 100)
})
</script>

<template>
  <div v-if="loading" class="preloader">Loading...</div>
  <div v-else-if="introData">
    <Header :settings="introData.settings" :socials="introData.socials" />
    <main class="main">
      <Hero :data="introData.sections.hero" :socials="introData.socials" />
      <About :data="introData.sections.about" />
      <Services :services="introData.services" />
      <VideoSkills :data="introData.sections.video_skills" :skills="introData.skills" />
      <Counter :counters="introData.counters" />
      <Portfolio :portfolios="introData.portfolios" />
      <Testimonials :testimonials="introData.testimonials" />
      <Pricing :pricing="introData.pricing" />
      <Blog :blogs="introData.blogs" />
      <Contact :settings="introData.settings" />
      <Partner :partners="introData.partners" />
    </main>
    <div class="clearfix"></div>
    <Footer :settings="introData.settings" :socials="introData.socials" />
  </div>
</template>

<style>
/* Global styles can go here or in style.css */
</style>
