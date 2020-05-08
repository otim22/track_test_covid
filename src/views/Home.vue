<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col-sm-12 col-md-12 col-lg-12">
        <h2>Home</h2>
        <div class="row mb-5">
          <div class="col-sm-12 col-md-4 col-lg-4">
            <b-card title="Confirmed Cases">
              <b-card-text>
                {{ addCommas(summary['Global']['TotalConfirmed']) }}
              </b-card-text>
            </b-card>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-4">
            <b-card title="Total Recoveries">
              <b-card-text>
                {{ addCommas(summary['Global']['TotalRecovered']) }}
              </b-card-text>
            </b-card>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-4">
            <b-card title="Total Deaths">
              <b-card-text>
                {{ addCommas(summary['Global']['TotalDeaths']) }}
              </b-card-text>
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CovidService from '@/services/CovidService.js'
import numberWithCommas from '@/util/separator.js'

export default {
  name: 'home',
  data() {
    return {
      summary: [],
      countries: []
    }
  },
  created(){
    CovidService.getSummary()
          .then(response => {
            this.summary = response.data
            this.$localStorage.set('summary', JSON.stringify(this.summary))
          })
          .catch(error => {
            console.log('There was an error:', error.response)
          })
  },
  mounted() {
    const summary = JSON.parse(this.$localStorage.get('summary'))
    
    if(summary) {
      this.summary = summary
      this.countries = this.summary['Countries']
    }  
  },
  methods: {
    addCommas: numberWithCommas
  }
}
</script>
