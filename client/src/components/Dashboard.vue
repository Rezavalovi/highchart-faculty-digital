<template>
  <div>
    <nav class="bg-gray-800 p-4">
      <div class="container mx-auto">
        <div class="flex justify-between items-center">
          <div class="text-white text-lg font-semibold">Dashboard</div>
          <button @click="confirmLogout" class="bg-red-500 text-white p-2 rounded hover:bg-red-700">
            Logout
          </button>
        </div>
      </div>
    </nav>
    <div class="p-8">
      <div>
        <h1 class="text-2xl font-bold mb-4">Faculty Digital</h1>
      </div>
      <highcharts :options="chartOptions"></highcharts>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Highcharts from 'highcharts';
import HighchartsVue from 'highcharts-vue';
import Swal from 'sweetalert2';

export default {
  components: {
    highcharts: HighchartsVue.component
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: 'column' 
        },
        title: {
          text: 'Company Revenue/Profit'
        },
        xAxis: {
          categories: [],
          title: {
            text: 'Year'
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Amount'
          }
        },
        series: [{
          name: 'Revenue',
          data: []
        }, {
          name: 'Profit',
          data: []
        }]
      }
    };
  },
  async mounted() {
    Swal.fire({
      icon: 'success',
      title: 'Welcome!',
      text: 'Welcome to the Dashboard!',
      timer: 2000,
      showConfirmButton: false
    });
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:3000/data', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const categories = response.data.map(item => `Year ${item.year}`);
      const revenueData = response.data.map(item => item.revenue);
      const profitData = response.data.map(item => item.profit);

      this.chartOptions.xAxis.categories = categories;
      this.chartOptions.series[0].data = revenueData;
      this.chartOptions.series[1].data = profitData;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
  methods: {
    confirmLogout() {
      Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to logout?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, logout!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.logout();
        }
      });
    },
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/login');
      Swal.fire({
        icon: 'success',
        title: 'Logged out',
        text: 'You have been logged out successfully.',
        timer: 2000,
        showConfirmButton: false
      });
    }
  }
};
</script>

<style>
html, body, #app {
  height: 100%;
}
</style>
