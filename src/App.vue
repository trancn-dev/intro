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

const componentsMap = {
  Hero,
  About,
  Services,
  VideoSkills,
  Counter,
  Portfolio,
  Testimonials,
  Pricing,
  Blog,
  Contact,
  Partner
}

const getComponentProps = (name) => {
  if (!introData.value) return {}
  switch (name) {
    case 'Hero': return { data: introData.value.sections.hero, socials: introData.value.socials }
    case 'About': return { data: introData.value.sections.about }
    case 'Services': return { services: introData.value.services }
    case 'VideoSkills': return { data: introData.value.sections.video_skills, skills: introData.value.skills }
    case 'Counter': return { counters: introData.value.counters }
    case 'Portfolio': return { portfolios: introData.value.portfolios }
    case 'Testimonials': return { testimonials: introData.value.testimonials }
    case 'Pricing': return { pricing: introData.value.pricing }
    case 'Blog': return { blogs: introData.value.blogs }
    case 'Contact': return { settings: introData.value.settings }
    case 'Partner': return { partners: introData.value.partners }
    default: return {}
  }
}

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
      <template v-for="template in introData.templates" :key="template.id">
        <component
          :is="componentsMap[template.component_name]"
          v-bind="getComponentProps(template.component_name)"
          v-if="componentsMap[template.component_name]"
        />
      </template>
    </main>
    <div class="clearfix"></div>
    <Footer :settings="introData.settings" :socials="introData.socials" />
  </div>
</template>

<style>
/* Global styles can go here or in style.css */
</style>
