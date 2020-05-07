<template>
  <div class="container">
    <h2 class="mt-5 mb-4">Global Coronavirus status live update</h2>
    <div class="row mb-5">
      <div class="col-sm-12 col-md-4 col-lg-4">
        <b-card title="Confirmed Cases">
          <b-card-text>
            {{ summary['Global']['TotalConfirmed'] }}
          </b-card-text>
        </b-card>
      </div>
      <div class="col-sm-12 col-md-4 col-lg-4">
        <b-card title="Total Recoveries">
          <b-card-text>
            {{ summary['Global']['TotalRecovered'] }}
          </b-card-text>
        </b-card>
      </div>
      <div class="col-sm-12 col-md-4 col-lg-4">
        <b-card title="Total Deaths">
          <b-card-text>
            {{ summary['Global']['TotalDeaths'] }}
          </b-card-text>
        </b-card>
      </div>
    </div>

    <div>
      <b-row>
        <b-col sm="4 mb-4" md="4 mb-4" class="perPageStyle">
          <b-form-group
            label="Per page"
            label-cols-sm="6"
            label-cols-md="4"
            label-cols-lg="3"
            label-align-sm="right"
            label-size="sm"
            label-for="perPageSelect"
            class="mb-0"
          >
            <b-form-select
              v-model="perPage"
              id="perPageSelect"
              size="sm"
              :options="pageOptions"
            ></b-form-select>
          </b-form-group>
        </b-col>
        <b-col sm="12" lg="8" class="searchClass">
          <b-form-group
            label="Filter"
            label-cols-sm="3"
            label-align-sm="right"
            label-size="sm"
            label-for="filterInput"
            class="mb-0"
          >
            <b-input-group size="sm">
              <b-form-input
                v-model="filter"
                type="search"
                id="filterInput"
                placeholder="Type to Search"
              ></b-form-input>
              <b-input-group-append>
                <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>
      </b-row>
      <b-table
        sticky-header="800px"
        no-border-collapse
        responsive
        hover
        caption-top
        head-variant="light"
        :items="countries"
        :fields="fields"
        :current-page="currentPage"
        :per-page="perPage"
        @filtered="onFiltered"
        :filter="filter"
        :filterIncludedFields="filterOn"
      >
        <template v-slot:cell(Country)="data">
          <router-link :to="{ path: 'countries', query: { country: data.value } }">
            {{ data.value }}
          </router-link>
        </template>
        <template v-slot:cell(NewConfirmed)="data">
          <span :class="data.value >= 1 ? 'text-warning' : ''">{{ data.value }}</span>
        </template>
        <template v-slot:cell(TotalDeaths)="data">
          <span :class="data.value >= 1 ? 'text-danger' : ''">{{ data.value }}</span>
        </template>
      </b-table>
      <b-row>
        <b-col sm="12" md="8 offset-2 mt-4" class="paginationStyle">
          <b-pagination
            v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            align="fill"
            size="sm"
            class="my-0"
          ></b-pagination>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import CovidService from '@/services/CovidService.js'

export default {
  name: 'countries',
  data() {
    return {
      summary: [],
      countries: [],
      fields: [
        { key: 'Country', label: 'Country', sortable: true, sortByFormatted: true, filterByFormatted: true },
        { key: 'NewConfirmed', label: 'New Cases', sortable: true },
        { key: 'TotalConfirmed', label: 'Total Cases', sortable: true },
        { key: 'NewDeaths', label: 'New Deaths', sortable: true },
        { key: 'TotalDeaths', label: 'Total Deaths', sortable: true },
        { key: 'NewRecovered', label: 'New Recovered', sortable: true },
        { key: 'TotalRecovered', label: 'Total Recovered', sortable: true }
      ],
      items: [],
      totalRows: 1,
      currentPage: 1,
      perPage: 50,
      pageOptions: [50, 100, 248],
      filter: null,
      filterOn: [],
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
      this.items = this.countries
      this.totalRows = this.countries.length
    }  
  }, 
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key }
        })
    }
  },
  methods: {
    onFiltered() {
      // Trigger pagination to update the number of buttons/pages due to filtering
      if(this.countries.length > 1) {
        this.totalRows = this.countries.length
      }
      
      this.currentPage = 1
    }
  }
}
</script>

<style lang="scss" scoped>
</style>