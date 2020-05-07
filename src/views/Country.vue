<template>
  <div class="container">
    <h2>Country</h2>
  </div>
</template>

<script>

export default {
  name: 'country',
  props: {
    parentData: Object,
    stringProp: String,
    title: String
  }
}
</script>