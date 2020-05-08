<template>
  <div class="container">
    <div class="row mt-5">
      <h2>Country: {{ country['Country'] }}</h2>
      <p class="mt-5">
        {{ country['NewConfirmed'] }}<br>
        {{ country['TotalConfirmed'] }}<br>
        {{ country['NewDeaths'] }}<br>
        {{ country['TotalDeaths'] }}<br>
        {{ country['NewRecovered'] }}<br>
        {{ country['TotalRecovered'] }}<br>
        {{ country['Date'] }}
      </p>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      country: '',
      counts: []
    }
  },
  name: 'country',
  created() {
    const summary = JSON.parse(this.$localStorage.get('summary'))
    
    if(summary) {
      this.counts = summary['Countries']
    } 
  },
  mounted() {
    let queryCountry = this.$route.query.country

    this.country = this.counts.filter((count) => {
      return count.Country === queryCountry
    })

    this.country = this.country[0]
     
  }
}
</script>