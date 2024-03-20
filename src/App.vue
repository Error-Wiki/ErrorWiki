<template>
  <Guider class="sticky top-0"/>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import Guider from './widgets/Guider.vue'
</script>