<template>
  <div class="container">
    <div class="row mt-4 p-3">
      <div class="col-sm-12 col-md-10 col-lg-10 offset-1">
        <h2>COVID-19 symptoms</h2>
        <p>
          COVID-19 is a respiratory condition caused by a coronavirus. There are various symptoms in people with COVID-19 ranging from mild to intensive illness. These symptoms surfaces after 2-14 days of exposure to the virus.
          Some people can get infected but never notice any symptoms. And some will get better from mild symptoms own their own.
        </p>
        <P>
          The possibility of more serious symptoms are higher if you’re older or have some other health conditions like diabetes, hypertension, lung, Heart, or kidney disease. Isolate yourself incase of any of these symptoms your loved ones inclusive and keep 
          in one room for as long as it takes. Call a doctor as you keep a isolating.
        </P>
      </div>
      <div class="col-sm-12 col-md-5 col-lg-5 offset-1">
          <h4 class="mt-4">Common symptoms</h4>
          <ul class="main-ul">
            <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Fever (99%)</li>
            <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Fatigue (70%)</li>
            <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>A dry cough (59%)</li>
            <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Loss of appetite (40%)</li>
            <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Body aches (35%)</li>
            <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Shortness of breath (31%)</li>
            <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Mucus or phlegm (27%)</li>
          </ul>
        </div>
        <div class="col-sm-12 col-md-5 col-lg-5 offset-1 mt-4">
          <h5>Others, include</h5>
          <ul class="main-ul">
            <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Sore throat</li>
            <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Headache</li>
            <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Chills, sometimes with shaking</li>
            <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Loss of smell or taste</li>
            <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Stuffy nose</li>
            <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Nausea or vomiting</li>
            <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Diarrhea</li>
          </ul>
        </div>
        <div class="col-sm-12 col-md-10 col-lg-10 offset-1 mt-4">
          <h4 class="mt-4">Acute symptoms</h4>
          <ul class="main-ul">
            <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Trouble breathing</li>
            <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Constant pain or pressure in your chest</li>
            <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Bluish lips or face</li>
            <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Sudden confusion</li>
          </ul>
        </div>
    </div>
    <div class="row p-3">
      <div class="col-sm-12 col-md-10 col-lg-10 offset-1">
        <h2>Pre-existing conditions</h2>
        <ul class="main-ul">
            <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Cardiovascular disease</li>
            <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Diabetes</li>
            <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Chronic respiratory disease</li>
            <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Hypertension</li>
            <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Lung, Heart, or Kidney disease</li>
          </ul>
      </div>
    </div>
    <div class="row p-3">
      <div class="col-sm-12 col-md-10 col-lg-10 offset-1">
        <h2>Protection mechanisms</h2>
        <ul class="main-ul">
          <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Wash your hands often, for at least 20 seconds each time, with soap and water.</li>
          <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Use an alcohol-based sanitizer with at least 60% alcohol if you don't have to soap and water handy.</li>
          <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Avoid people who are sick.</li>
          <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Don’t touch your eyes, nose, or mouth unless you’ve just washed your hands.</li>
          <li><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Regularly clean and disinfect surfaces that you touch a lot.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'symptoms',
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