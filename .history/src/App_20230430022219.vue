<template>
  <div>
    <MuiButton variant="contained" color="primary" @click="handleClick">Click me</MuiButton>
    <MuiTextField v-model="name" label="Name" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      name: '',
    };
  },
  methods: {
    handleClick() {
      console.log(`Hello, ${this.name}!`);
    },
  },
});
</script>
