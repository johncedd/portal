<template>
  <div class="min-h-screen flex items-center justify-center bg-pastel-blue">
    <h1 class="text-3xl text-pastel-dark font-bold">Welcome, {{ user }}!</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const user = ref(localStorage.getItem('user') || 'Guest')
</script>
