<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold mb-4 text-center">Welcome</h1>
      <div class="space-y-4">
        <div>
          <input v-model="username" placeholder="Username" class="border p-2 w-full rounded" />
        </div>
        <div>
          <input v-model="password" type="password" placeholder="Password" class="border p-2 w-full rounded" />
        </div>
        <div>
          <button @click="login" class="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-700">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:3000/login', {
          username: this.username,
          password: this.password
        });
        const token = response.data.access_token;
        localStorage.setItem('token', token);
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'Welcome to the Dashboard!',
          timer: 2000,
          showConfirmButton: false
        });
        this.$router.push('/dashboard');
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Invalid username or password.',
        });
      }
    }
  }
};
</script>

<style>
html, body, #app {
  height: 100%;
}
</style>
