<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-sm-12 col-md-10 col-lg-10 offset-1 mb-3">
        <h2>Contact us</h2>
      </div>
      <div class="col-sm-12 col-md-5 col-lg-5 offset-1" style="font-size: 20px">
        <p>Hello, Thanks for checking out covidometer.</p>
        <p>Please, get in touch with me from here!! </p>
        <p>In case you have any discussion point or probably have a project to bring to life.</p>
      </div>
      <div class="col-sm-12 col-md-5 col-lg-5 offset-1" style="font-size: 20px">
        <p><font-awesome-icon :icon="['fas', 'envelope']" class="mr-2"/> fredrickot@gmail.com</p>
        <p><font-awesome-icon :icon="['fas', 'phone-alt']" class="mr-2"/> (+256) 706 248225</p>
        <a target="_blank" href="https://web.facebook.com/fredrickot/"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" class="mr-3 facebook" /></a>
        <a target="_blank" href="https://twitter.com/home"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" class="mr-3 twitter" /></a>
        <a target="_blank" href="https://www.linkedin.com/in/otim-fredrick-29730a86/"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin-in' }" class="mr-3 linkedin-in" /></a>
        <a target="_blank" href="https://github.com/otim22"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'github' }" class="mr-3 github" /></a>
        <a target="_blank" href="https://medium.com/@otimfredrick"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'medium' }" class="medium" /></a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'contact',
}
</script>

<style lang="scss" scoped>
.footer-text {
  color: #747676;
}

.facebook {
  color: #1638f5;
}

.twitter {
  color: #6cdefa;
}

.linkedin-in {
  color: #127b95;
}

.github {
  color: #0b0b0c;
}

.medium {
  color: #0f3f14;
}
</style>