<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-sm-12 col-md-10 col-lg-10 offset-1">
      <h2>About covidometer</h2>
        <p>
          Covidometer is an application to get coronavirus (COVID-19) live updates, To read symptoms of the disease, it's transmission, and current available tests. 
        </p>
        <p>
          This applicaion was develped by Otim fredrick a software developer based in Uganda, Africa. With a background of bachelors of science in software engineering, over the years I have worked on a number of projects ranging from fin-tech, agric-tech, pharmaceutical and ecommerce. I love to build creative things on the web with deep fascinations of the modern javascript and its great features.
          <a target="_blank" class="archor-me ml-2" href="https://otimfredrick.com/about">More details<font-awesome-icon :icon="['fas', 'chevron-right']" class="ml-2"/></a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'about',
}
</script>

<style lang="scss" scoped>
.archor-me a, a:hover {
  text-decoration: none;
}
</style>