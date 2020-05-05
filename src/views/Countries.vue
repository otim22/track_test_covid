<template>
  <div class="container">
    <h2>Countries</h2>
    <li v-for="country in countries" :key="country.id">{{ country }}</li>
  </div>
</template>

<script>
import CovidService from '@/services/CovidService.js'

export default {
  name: 'countries',
  data() {
    return {
      countries: []
    }
  },
  created(){
    CovidService.getCountries()
          .then(response => {
            this.countries = response.data
          })
          .catch(error => {
            console.log('There was an error:', error.response)
          })
  }
}
</script>