<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12">
        <h2 class="mt-5 mb-5">Country: {{ country['Country'] }} <span class="back"><router-link to="/">World <font-awesome-icon :icon="['fas', 'chevron-right']" class="ml-1"/></router-link></span></h2>
      </div>
      <div class="col-sm-12 col-md-4 col-lg-4 text-center">
        <b-card title="Confirmed Cases">
          <b-card-text v-if="!loading"
                      :class="country.NewConfirmed >= 1 ? 'text-warning' : ''"
                      class="font-set">
            {{ addCommas(country.TotalConfirmed) }}
          </b-card-text>
        </b-card>
      </div>
      <div class="col-sm-12 col-md-4 col-lg-4 text-center">
        <b-card title="Total Recoveries">
          <b-card-text v-if="!loading"
                      :class="country.TotalRecovered >= 1 ? 'text-primary' : ''"
                      class="font-set">
            {{ addCommas(country.TotalRecovered) }}
          </b-card-text>
        </b-card>
      </div>
      <div class="col-sm-12 col-md-4 col-lg-4 text-center">
        <b-card title="Total Deaths">
          <b-card-text v-if="!loading"
                      :class="country.TotalDeaths >= 1 ? 'text-danger' : ''"
                      class="font-set">
            {{ addCommas(country.TotalDeaths) }}
          </b-card-text>
        </b-card>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-12">
        <h5 class="mt-5">New Cases: {{ country['NewConfirmed'] }}</h5>
        <h5 class="mt-3">Total confirmed cases: {{ country['TotalConfirmed'] }}</h5>
        <h5 class="mt-3">New Deaths: {{ country['NewDeaths'] }}</h5>
        <h5 class="mt-3">Total Deaths: {{ country['TotalDeaths'] }}</h5>
        <h5 class="mt-3">New Recoveries: {{ country['NewRecovered'] }}</h5>
        <h5 class="mt-3">Total Recoveries: {{ country['TotalRecovered'] }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import numberWithCommas from '@/util/separator.js'

export default {
  data() {
    return {
      country: '',
      counts: [],
      loading: false
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
  },
  methods: {
    addCommas: numberWithCommas,
  }
}
</script>

<style lang="scss" scoped>
.back a, a:hover {
  text-decoration: none;
}
.back {
  font-size: 30px;
  float: right;
}
</style>