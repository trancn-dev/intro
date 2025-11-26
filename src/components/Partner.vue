<template>
  <div class="partner-area de-padding">
    <div class="container">
      <div class="partner-wpr partner-sldr owl-carousel owl-theme">
        <img v-for="partner in partners" :key="partner.id" :src="partner.logo" alt="thumb">
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  partners: Array
})
</script>
