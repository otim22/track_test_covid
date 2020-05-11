<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-sm-12 col-md-10 col-lg-10 offset-1">
        <h3>Who Gets Tested?</h3>
        <p>
          Apparently testing isn't enough for everyone, and medical personel decides who gets tested.
        </p>
        <p>
          CDC recommends a priority system to setup for who should get tested.
        </p>
        <p>
          People who have the coronavirus symptoms and who are more likely to get seriously ill because of other health conditions such as diabetes, cancer, Heart, lung, or kidney disease
        </p>
        <h3 class="mt-4">How To Be Tested?</h3>
        <p>You call your nearest health facility. And you should be ready to answer the following;</p>
        <ul class="main-ul">
            <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Do you have a fever or cough?</li>
            <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Do you have shortness of breath?</li>
            <ul>
              <li>Tightness in your chest</li>
              <li>Can’t catch your breath</li>
              <li>Can’t get enough air into your lungs</li>
              <li>Can’t breathe deeply</li>
              <li>Are smothering, drowning, or suffocating</li>
              <li>Have to work harder than usual to breathe in or out</li>
              <li>Need to breathe in before you’re done breathing out</li>
            </ul>
            <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Have you been in close contact (within 6 feet) with someone who has COVID-19?</li>
            <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Has someone with COVID-19 coughed or sneezed on you?</li>
            <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Have you traveled recently?</li>
            <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Did a health official tell you that you’ve come into contact with COVID-19?</li>
          </ul>
        <p>

        </p>
        <h4>Types of Coronavirus Testing</h4>
        <p>
          CDC recommends COVID-19 to be tested by a method called nasopharyngeal swab where 
          technical people will put a special 6-inch cotton swab up both sides of your nose and move it around for about 15 seconds. It might be uncomfortableIt but won't hurt. Then send the swab to a lab to test the material from inside your nose.
        </p>
        <h5>Other tests include</h5>
        <ul class="main-ul">
          <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Mouth and throat (oropharyngeal)</li>
          <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Middle of your nostrils (nasal mid-turbinate)</li>
          <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Front of your nostrils (anterior nares)</li>
          <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Can’t breathe deeply</li>
        </ul>
        <h5>COVID-19 tests spot two types of antibodies</h5>
        <ul class="main-ul">
          <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>IgM, which your body makes for about 2 weeks before the levels drop</li>
          <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>IgG, which your body makes more slowly (within about 4 weeks) but which usually last longer</li>
        </ul>
        <p>It takes a lab about 24 hours to run a test and a few days for you to get your results.</p>
        <h3 class="mt-4">Steps to avoid spreading the virus</h3>
        <p>
          Having a positive COVID-19 test means you apparently have or recently had the virus.
        </p>
        <ul class="main-ul">
          <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Stay home, apart from getting medical care.</li>
          <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Isolate yourself from other people at home.</li>
          <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Don’t share dishes, cups, eating utensils, or linens with others.</li>
          <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Cover your coughs and sneezes. Wash your hands often with soap.</li>
          <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Clean and disinfect common surfaces like phones, doorknobs, or counters regularly.</li>
        </ul>
      </div>
   </div>
  </div>
</template>

<script>

export default {
  name: 'test',
}
</script>

<style lang="scss" scoped>
.main-ul {
  list-style-type: none;
}

ul li {
  margin: 1px 10px 10px -40px;
}
</style>