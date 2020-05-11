<template>
    <div class="container">
      <div class="row mt-5">
        <h1>Oops!</h1>
      </div>
      <div class="row">
        <h3>The {{ resource }} you're looking for is not here.</h3>
      </div>
      <div class="row">
        <router-link :to="{ name: 'home' }">Back to the home page</router-link>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      required: true
    }
  }
}
</script>
