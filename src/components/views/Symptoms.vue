<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-sm-12 col-md-10 col-lg-10 offset-1">
        <h2>{{ symptomsJson.title }}</h2>
        <div v-for="(summary, index) in symptomsJson.summary" :key="index">
          <p>{{ summary }}</p>
        </div>
      </div>

      <div v-for="(symptoms, index) in symptomsJson.symptoms" 
          :key="index" 
          class="col-sm-12 col-md-5 col-lg-5 offset-1">
        <h4 class="mt-4">{{ symptoms.type }}</h4>
        <ul v-for="(symptom, index) in symptoms.data" 
            :key="index" 
            class="main-ul">
          <li>
            <font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>{{ symptom }}
          </li>
        </ul>
      </div>
    </div>

    <div class="row p-3">
      <div  v-for="(conditions, index) in symptomsJson.conditions" 
            :key="index" 
            class="col-sm-12 col-md-10 col-lg-10 offset-1">
        <h2>{{ conditions.type }}</h2>
        <ul v-for="(condition, index) in conditions.data" 
            :key="index" 
            class="main-ul">
          <li>
            <font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>{{ condition }}
          </li>
        </ul>
      </div>
    </div>
    
    <div class="row p-3">
      <div v-for="(preventions, index) in symptomsJson.preventions" 
          :key="index"
          class="col-sm-12 col-md-10 col-lg-10 offset-1">
        <h2>{{ preventions.type }}</h2>
        <ul v-for="(prevention, index) in preventions.data" 
            :key="index"
            class="main-ul">
          <li>
            <font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>{{ prevention }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import json from '@/json/symptoms.json'

export default {
  name: 'symptoms',
  data() {
    return{
      symptomsJson: json
    }
  }
}
</script>

<style lang="scss" scoped>
.main-ul {
  list-style-type: none;
}

ul li {
  margin: 1px 10px 10px -40px;
}
</style>