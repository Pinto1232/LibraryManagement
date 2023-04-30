<script setup lang="ts">

</script>

import { defineComponent } from 'vue';

<template>
  <div>
    <MuiButton variant="contained" color="primary" @click="handleClick">Click me</MuiButton>
    <MuiTextField v-model="name" label="Name" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
