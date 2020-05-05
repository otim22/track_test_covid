<template>
  <div id="app" class="container">
    <Navbar />
    <router-view :key="$route.fullPath"/>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>