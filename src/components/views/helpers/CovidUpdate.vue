<template>
  <span :class="{ [cssClass]: showClass }">
    {{ count | addCommas }}
  </span>
</template>

<script>
import dataMixin from '@/mixins/'

export default {
  name: 'CovidUpdate',
  mixins: [dataMixin]
}
</script>

<style lang="scss" scoped>
</style>