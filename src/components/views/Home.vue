<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12">
        <h2 class="mt-5 mb-5">Global Coronavirus status live update</h2>
      </div>
    </div>
    <covid-summary v-if="!loading" :country="summary" />
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
            <covid-update :count="data.value" />
        </template>
        <template v-slot:cell(TotalConfirmed)="data">
          <covid-update
            :count="data.value"
            :css-class="status.warning"
          />
        </template>
        <template v-slot:cell(NewDeaths)="data">
          <covid-update
            :count="data.value"
          />
        </template>
        <template v-slot:cell(TotalDeaths)="data">
          <covid-update
            :count="data.value"
            :css-class="status.danger"
          />
        </template>
        <template v-slot:cell(NewRecovered)="data">
          <covid-update
            :count="data.value"
          />
        </template>
        <template v-slot:cell(TotalRecovered)="data">
          <covid-update
            :count="data.value"
            :css-class="status.primary"
          />
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
import CovidSummary from '@/components/views/helpers/CovidSummary'
import CovidUpdate from '@/components/views/helpers/CovidUpdate'
import status from '@/components/views/helpers/status'
import dataMixin from '@/mixins'

export default {
  name: 'Home',
  components: {
    CovidSummary,
    CovidUpdate
  },
  mixins: [dataMixin],
  data () {
    return {
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
      status
    }
  },
  watch: {
    countries () {
      this.totalRows = this.items = this.countries.length
    }
  },
  created () {
    this.totalRows = this.countries.length
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
    },
  }
}
</script>

<style lang="scss">
  .font-set {
    font-size: 22px;
  }
</style>