<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12">
        <h2 class="mt-5 mb-5">Country: {{ countryName }} <span class="back"><router-link to="/">World <font-awesome-icon :icon="['fas', 'chevron-right']" class="ml-1"/></router-link></span></h2>
      </div>
    </div>
    <covid-summary v-if="hasCountryData" :country="country" />
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12">
        <template v-for="(value, index ) in countrySummary">
          <h5 :key="index" :class="value.cssClass">{{ value.message }}</h5>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import dataMixin from '@/mixins'
import CovidSummary from '@/components/views/helpers/CovidSummary'

export default {
  name: 'country',
  components: {
    CovidSummary
  },
  data() {
    return {
      country: {},
      countrySummary: []
    }
  },
  mixins: [dataMixin],
  computed: {
    hasCountryData () {
      return Object.keys(this.country).length > 0
    },
    countryName () {
      return this.$route.query.country
    }
  },
  created () {
    this.country = this.setCountryData()
  },
  watch: {
    countries () {
      this.country = this.setCountryData()
    },
    country () {
      this.countrySummary = this.setSummaryData()
    }
  },
  methods: {
    setCountryData () {
      return this.countries.filter((value) => {
        return value.Country === this.countryName
      })[0]
    },
    setSummaryData () {
      return [
        {
          message: `New Cases: ${this.country.NewConfirmed}`,
          cssClass: 'mt-5'
        },
        {
          message: `Total confirmed cases: ${this.country.TotalConfirmed}`,
          cssClass: 'mt-3'
        },
        {
          message: `New Deaths: ${this.country.NewDeaths}`,
          cssClass: 'mt-3'
        },
        {
          message: `Total Deaths: ${this.country.TotalDeaths}`,
          cssClass: 'mt-3'
        },
        {
          message: `New Recoveries: ${this.country.NewRecovered}`,
          cssClass: 'mt-3'
        },
        {
          message: `Total Recoveries: ${this.country.TotalRecovered}`,
          cssClass: 'mt-3'
        }
      ]
    }
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