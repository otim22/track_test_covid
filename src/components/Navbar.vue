<template>
  <div>
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12">
        <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="/">COVIDOMETER</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="symptoms">Symptoms</b-nav-item>
            <b-nav-item href="transfer">Transfer</b-nav-item>
            <b-nav-item href="test">Test</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="about">About</b-nav-item>
            <b-nav-item href="contact">Contact</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
        </b-navbar>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
