<template>
  <div class="container">
    <div class="row mt-5">
      <div v-for="(tests, index) in testJson.test" 
          :key="index"
          class="col-sm-12 col-md-10 col-lg-10 offset-1">
        <h3>{{ tests.title }}</h3>
        <p>{{ tests.test_types }}</p>
        <div v-for="(desc, index) in tests.description" :key="index">
          <p>{{ desc }}</p>
        </div>
        <p>
          {{ tests.steps_to_summary }}
        </p>
        <div v-for="(test, index) in tests.data" :key="index">
          <p><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>{{ test }}</p>
        </div>
        <p>{{ tests.more }}</p>
        <p>
          {{ tests.how_to_summary }}
        </p>
        
        <div v-for="(sign, index) in tests.signs" :key="index">
          <ul class="main-ul">
            <li><p><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/> {{ sign.type }}</p></li>
            <div v-for="(sub, index) in sign.data" :key="index">
              <ul>
                <li>{{ sub }}</li>
              </ul> 
            </div>
          </ul>
        </div>
      </div>
   </div>
  </div>
</template>

<script>
import json from '@/json/test.json'

export default {
  name: 'test',
  data() {
    return{
      testJson: json
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