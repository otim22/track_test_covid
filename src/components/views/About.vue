<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-sm-12 col-md-10 col-lg-10 offset-1">
      <h2>About covidometer</h2>
        <p>
          Covidometer is an application to get coronavirus (Covid-19) live updates, To read symptoms of the disease, it's transmission, and current available tests. 
        </p>
        <p>
          This applicaion was develped in colaboration with Otim fredrick and Abok Isaac, all are Software Developers based in Uganda, Africa. Both with backgrounds in Bachelors of Science in Software Engineering.
        </p>
        <p>
          Fredrick over the years has worked on a number of projects ranging from fin-tech, agric-tech, pharmaceutical and ecommerce and love to build creative things on the web with deep fascinations of the modern javascript and its great features.
          <a target="_blank" class="archor-me ml-2" href="https://otimfredrick.com/about">More details<font-awesome-icon :icon="['fas', 'chevron-right']" class="ml-2"/></a>
        </p>
        <p>
          And Isaac is a senior developer at SafeBoda and has extensive knowledge in web application development.
          <a target="_blank" class="archor-me ml-2" href="https://www.linkedin.com/in/iabok/">More details<font-awesome-icon :icon="['fas', 'chevron-right']" class="ml-2"/></a>
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