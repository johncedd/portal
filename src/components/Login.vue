<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="min-h-screen flex items-center justify-center bg-pastel-blue">
    <div class="bg-pastel-white rounded-2xl shadow-xl p-8 w-full max-w-sm text-center">
      <h1 class="text-2xl font-bold mb-6 text-pastel-dark">Student Portal</h1>
      <form @submit.prevent="login">
        <input
          v-model="username"
          placeholder="Username"
          required
          class="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-purple"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          required
          class="w-full px-4 py-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-purple"
        />
        <button
          type="submit"
          class="w-full bg-pastel-purple text-white py-2 rounded-lg hover:bg-pastel-dark-purple transition"
        >
          Login
        </button>
        <p v-if="error" class="text-red-600 mt-4">{{ error }}</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

function login() {
  if ((username.value === 'alice' || username.value === 'bob') && password.value === 'password') {
    localStorage.setItem('user', username.value)
    router.push('/app')
  } else {
    error.value = 'Invalid username or password'
  }
}
</script>
