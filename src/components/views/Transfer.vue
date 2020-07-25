<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-sm-12 col-md-10 col-lg-10 offset-1">
        <h2>{{ transferJson.title }}</h2>
        <p> {{ transferJson.summary }}</p>
        <ul v-for="(details, index) in transferJson.detail" :key="index" class="main-ul mt-3">
          <li>
            <h4 class="mt-3"><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>{{ details.type }}</h4>
            <div v-for="(detail, index) in details.data" :key="index">
              <p>{{ detail }}</p>
            </div>
            <div v-for="(detailData, index) in details.sub" :key="index">
              <h5>{{ detailData.type }}</h5>
              <div v-for="(sub, index) in detailData.data" :key="index">
                <p>{{ sub }}</p>
              </div>
              <div v-for="(sub_two, index) in detailData.sub_one" :key="index">
                <p>{{ sub_two.type }}</p>
                <div v-for="(sub_three, index) in sub_two.data" :key="index">
                  <ul> <li>{{ sub_three }}</li></ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import json from '@/json/transfer.json'

export default {
  name: 'transfer',
  data() {
    return{
      transferJson: json
    }
  }
}
</script>

<style lang="scss" scoped>
.main-ul {
  list-style-type: none;
}
ul li {
  margin: 20px 10px 10px -40px;
}
ul li h4, h5 {
  color:#4e5052;
}

</style>