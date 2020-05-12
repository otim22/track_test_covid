<template>
  <div class="container">
    <div class="row mt-5 footer-top center">
      <div class="col-sm-12 col-md-4 col-lg-4">
        <h3>COVIDOMETER</h3>
        
        <p>Hand wash to sanitise, <br>
          Keep the social distance <br>
          Stay home if a must and Stay safe.</p>        
      </div>
      <div class="col-sm-12 col-md-4 col-lg-4">
        <h5 class="mb-3">Site Links</h5>  
        <ul>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
          <li><router-link to="/">Home</router-link> </li>
        </ul>
      </div>
      <div class="col-sm-12 col-md-4 col-lg-4">
        <h5 class="mb-3">Follow me</h5>   
        <a target="_blank" href="https://web.facebook.com/fredrickot/"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" class="mr-3 facebook" /></a>
        <a target="_blank" href="https://twitter.com/home"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" class="mr-3 twitter" /></a>
        <a target="_blank" href="https://www.linkedin.com/in/otim-fredrick-29730a86/"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin-in' }" class="mr-3 linkedin-in" /></a>
        <a target="_blank" href="https://github.com/otim22"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'github' }" class="mr-3 github" /></a>
        <a target="_blank" href="https://medium.com/@otimfredrick"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'medium' }" class="medium" /></a>
      </div>
    </div>
    <div class="row footer">
      <div class="col-sm-12 col-md-12 col-lg-12 text-center">
        <p class="footer-text">Copyright &copy; {{ new Date().getFullYear() }} Track test covid. Developed by Otim Fredrick a Ugandan based Software Dev.</p>        
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-top {
  background-color: #DDDDE4;
  padding-top: 25px;
}

.footer {
  background-color: #AAABAB;
  padding-top: 13px;
}

.footer a, a:hover {
  text-decoration: none;
}

ul {
  list-style-type: none;
}

ul li {
  margin: 1px 10px 10px -40px;
}

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