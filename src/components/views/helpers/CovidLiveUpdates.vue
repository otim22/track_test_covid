<template>
  <b-card :title="title">
    <b-card-text
        :class="{ [cssClass]: showClass }"
        class="font-set ">
    {{ count | addCommas }}
    </b-card-text>
  </b-card>
</template>

<script>
import dataMixin from '@/mixins'

export default {
  name: 'CovidLiveUpdates',
  mixins: [dataMixin],
  props: {
    title: {
        type: String,
        required: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>