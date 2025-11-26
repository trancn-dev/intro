<template>
  <div class="counter-area counter-bg-1 de-padding">
    <div class="container">
      <div class="counter-vidz">
        <div class="counter-wpr grid-3">
          <div v-for="counter in counters" :key="counter.id" class="fun-fact">
            <div class="fun-fact-icon">
              <img :src="counter.icon" alt="thumb">
            </div>
            <div class="fun-desc">
              <span class="medium">
                {{ counter.title }}
              </span>
              <p class="timer" data-count="+" :data-to="counter.number" data-speed="3000">{{ counter.number }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  counters: Array
})
</script>
