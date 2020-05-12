<template>
  <div class="container">
    <div class="row mb-5">
      <div class="col-sm-12 col-md-12 col-lg-12">
        <h2 class="mt-5 mb-5">Global Coronavirus status live update</h2>
      </div>
      <div class="col-sm-12 col-md-4 col-lg-4 text-center">
        <b-card title="Confirmed Cases">
          <b-card-text v-if="!loading"
                      :class="summary.Global.TotalConfirmed >= 1 ? 'text-warning' : ''"
                      class="font-set">
            {{ addCommas(summary.Global.TotalConfirmed) }}
          </b-card-text>
        </b-card>
      </div>
      <div class="col-sm-12 col-md-4 col-lg-4 text-center">
        <b-card title="Total Recoveries">
          <b-card-text v-if="!loading"
                      :class="summary.Global.TotalRecovered >= 1 ? 'text-primary' : ''"
                      class="font-set">
            {{ addCommas(summary.Global.TotalRecovered) }}
          </b-card-text>
        </b-card>
      </div>
      <div class="col-sm-12 col-md-4 col-lg-4 text-center">
        <b-card title="Total Deaths">
          <b-card-text v-if="!loading"
                      :class="summary.Global.TotalDeaths >= 1 ? 'text-danger' : ''"
                      class="font-set">
            {{ addCommas(summary.Global.TotalDeaths) }}
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
          <span>
            {{ addCommas(data.value) }}</span>
        </template>
        <template v-slot:cell(TotalConfirmed)="data">
          <span :class="data.value >= 1 ? 'text-warning' : ''">{{ addCommas(data.value) }}</span>
        </template>
        <template v-slot:cell(NewDeaths)="data">
          <span>{{ addCommas(data.value) }}</span>
        </template>
        <template v-slot:cell(TotalDeaths)="data">
          <span :class="data.value >= 1 ? 'text-danger' : ''">
            {{ addCommas(data.value) }}</span>
        </template>
        <template v-slot:cell(NewRecovered)="data">
          <span>{{ addCommas(data.value) }}</span>
        </template>
        <template v-slot:cell(TotalRecovered)="data">
          <span :class="data.value >= 1 ? 'text-primary' : ''">{{ addCommas(data.value) }}</span>
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
import numberWithCommas from '@/util/separator.js'

export default {
  name: 'home',
  data() {
    return {
      summary: '',
      countries: [],
      loading: false,
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
  created() {
    this.getDataFromApi()
  },
  mounted() {
    const summaryData = JSON.parse(this.$localStorage.get('summary'))
    
    if(summaryData) {
      this.summary = summaryData
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
    addCommas: numberWithCommas,
    onFiltered() {
      // Trigger pagination to update the number of buttons/pages due to filtering
      if(this.countries.length > 1) {
        this.totalRows = this.countries.length
      }
      
      this.currentPage = 1
    },
    getDataFromApi() {
      this.loading = true;
      
      if (typeof(Storage) !== "undefined") {
        CovidService.getSummary()
            .then(response => {
              this.summary = response.data
              this.$localStorage.set('summary', JSON.stringify(this.summary))
              this.loading = false
            })
            .catch(error => {
              console.log('There was an error:', error.response)
            })
      }
    }
  }
}
</script>

<style lang="scss">
  .font-set {
    font-size: 22px;
  }
</style>