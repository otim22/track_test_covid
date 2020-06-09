<template>
  <div>
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12">
        <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand to="/">COVIDOMETER</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/symptoms">Symptoms</b-nav-item>
            <b-nav-item to="/transfer">Transfer</b-nav-item>
            <b-nav-item to="/test">Test</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/about">About</b-nav-item>
            <b-nav-item to="/contact">Contact</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
        </b-navbar>
      </div>
    </div>
  </div>
</template>
