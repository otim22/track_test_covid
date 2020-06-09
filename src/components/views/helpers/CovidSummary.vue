<template>
  <div class="row mb-5">
      <template v-for="(item, index) in covidUpdates">
        <div :key="index" class="col-sm-12 col-md-4 col-lg-4 text-center">
           <covid-live-updates
            :title="item.title"
            :count="item.number"
            :css-class="item.cssClass"
          />
        </div>
      </template>
  </div>
</template>

<script>
import status from '@/components/views/helpers/status'
import CovidLiveUpdates from '@/components/views/helpers/CovidLiveUpdates'

export default {
  name: 'CovidSummary',
  components: {
      CovidLiveUpdates
  },
  props: {
      country: {
        type: Object,
        required: true
    }
  },
  data () {
    return {
        status
    }
  },
  computed: {
    covidUpdates () {
      const { warning, danger, primary } = this.status
      return [
        {
          title: 'Confirmed Cases',
          cssClass: warning,
          number: this.country.TotalConfirmed
        },
        {
          title: 'Total Recoveries',
          cssClass: primary,
          number: this.country.TotalRecovered
        },
        {
          title: 'Total Deaths',
          cssClass: danger,
          number: this.country.TotalDeaths
        },
      ]
    },
  }
}
</script>

<style lang="scss" scoped>
</style>
