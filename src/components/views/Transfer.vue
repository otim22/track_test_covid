<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-sm-12 col-md-10 col-lg-10 offset-1">
        <h2 class="mt-3">The Following are possible infection ways</h2>
        COVID-19 is a new kind of disease that's of still under studying it <a target="_blank" href="https://www.cdc.gov/widgets/micrositeCollectionViewerMed/index.html?chost=www.nih.gov&cpath=/health-information/coronavirus&csearch=fbclid%3DIwAR2Yhq8hp1zXbTRWmT35UEnnOW6H7UFWGb9ncsBgX677BMqlS0zX65RJA_4&chash=!%2Fdetail%2F403327&ctitle=Coronavirus%20(COVID-19)%20%7C%20National%20Institutes%20of%20Health%20(NIH)&wn=micrositeCollectionViewerMed&wf=/widgets/micrositeCollectionViewerMed/&wid=micrositeCollectionViewerMed1&mMode=widget&mPage=&mChannel=&cdcCollectionid=403305&cdcTheme=theme1&cdcGeotag=%7B%27continent%27:%20%276255149%27,%20%27country%27:%20%276252001%27,%20%27state%27:%20%27%27,%20%27region%27:%20%27%27%20%7D&cdcDataid=404908&chashOptMode=out#!/detail/403327">Reference</a>
        <ul class="main-ul mt-3">
          <li><h4><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Direct or Indirect contact.</h4></li>

          Between people who are in close contact with one another (within about 6 feet)
          <li><h4 class="mt-3"><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Respiratory droplet spray in short distance transmission.</h4></li>
          Through respiratory droplets produced when an infected person coughs, sneezes or talks"
          <li><h4 class="mt-3"><font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>Aerosol in long-range transmission (airborne transmission)</h4></li>
          <h5>Air Currents.</h5>
          <p>Larger respiratory droplets (>5 μm) remain in the air for only a short time and travel only short distances, generally less than 1 m (less than 3.3 feet) <a href="https://wwwnc.cdc.gov/eid/article/26/7/20-0764_article">Reference</a> </p>
          <p>Virus-laden small (less than 5 μm) aerosolized droplets can remain in the air and travel long distances, > 1 m (more than 3.3 feet) <a href="https://wwwnc.cdc.gov/eid/article/26/7/20-0764_article">Reference</a></p>
          <h5 class="mt-3">Humidity (best if between 50% and 80%)</h5>
          <p>
            "It is assumed that temperature and humidity modulate the viability of viruses by affecting the properties of viral surface proteins and lipid membrane" 
            <a target="_blank" href="https://www.annualreviews.org/doi/pdf/10.1146/annurev-virology-012420-022445">Reaference</a>
          </p>
          <p>
            Relative humidity (RH, or Saturation Ratio: the state of vapor equilibrium in room air) affects all infectious droplets with respiratory viruses, independent of their source (respiratory tract or aerosolized from any fluid) and location (in air or settled on surfaces). Relative humidity therefore affects all transmission ways but has the most pronounced effect on airborne transmission.
            <a target="_blank" href="https://www.annualreviews.org/doi/pdf/10.1146/annurev-virology-012420-022445">Reaference</a>
          </p>
          <p>
            "Measurements of indoor humidities in 40 residential apartments in New York (19) and in 6 high-quality commercial buildings in the Midwest (20) showed indoor vapor pressure of below 10 mb or indoor RH of below 24% in the winter"
            <a target="_blank" href="https://www.annualreviews.org/doi/pdf/10.1146/annurev-virology-012420-022445"></a>
          </p>
          <h5 class="mt-3">Airborne Transmission.</h5>
          <p>
            The WHO states that, "Respiratory infections can be transmitted through droplets of different sizes: when the droplet particles are >5-10 μm in diameter they are referred to as respiratory droplets, and when they are less than 5μm in diameter, they are referred to as droplet nuclei. According to current evidence, COVID-19 virus is primarily transmitted between people through respiratory droplets and contact routes"
            <a target="_blank" href="https://www.who.int/news-room/commentaries/detail/modes-of-transmission-of-virus-causing-covid-19-implications-for-ipc-precaution-recommendations">Reference</a>
          </p>
          <h5 class="mt-3">Air Distance: up to 4 meters (13 feet) might be possible (in hospitals)</h5>
          <p>
            "The maximum transmission distance of SARS-CoV-2 aerosol might be 4 m" (13.1 feet), according to a study published on April 10 on Emerging Infectious Diseases, a journal of the US CDC which also found that "SARS-CoV-2 was widely distributed in the air and on object surfaces in both the ICU and general ward (GW), implying a potentially high infection risk for medical staff and other close contacts"
            <a target="_blank" href="https://wwwnc.cdc.gov/eid/article/26/7/20-0885_article">Reference</a>
          </p>
          <h5 class="mt-3">Objects and Surfaces.</h5>
          <p>The virus could spread by touching an object or surface with virus present from an infected person, and then touching the mouth, nose or eyes.</p>
          <p>Surface contamination as observed in the study cited above
            <a target="_blank" href="https://wwwnc.cdc.gov/eid/article/26/7/20-0885_article">Reference</a>
          </p>
          <ul>
            <li>Computer mouse</li>
            <li>Trash cans</li>
            <li>Sickbed handrails </li>
            <li>Doorknobs</li>
            <li>Exercise equipment</li>
            <li>Medical equipment (spirometer, pulse oximeter, nasal cannula)</li>
            <li>PC and iPads</li>
            <li>Reading glasses</li>
            <li>Cellular phones</li>
            <li>Remote controls</li>
            <li>Toilets</li>
            <li>Room surfaces </li>
            <li>Bedside tables and bed rails</li>
            <li>Window ledges</li>
          </ul>
          <h5 class="mt-3">Duration of contamination on objects and surfaces 
            <a target="_blank" href="https://wwwnc.cdc.gov/eid/article/26/7/20-0885_article">Reference</a>
          </h5>
          <ul>
            <li>Plastic: up to 2-3 days</li>
            <li>Stainless Steel: up to 2-3 days</li>
            <li>Cardboard: up to 1 day</li>
            <li>Copper: up to 4 hours</li>
          </ul>
          <h5 class="mt-3">Floor</h5>
          <p>"The rate of positivity was relatively high for floor swab samples (ICU 7/10, 70%; GW 2/13, 15.4%), perhaps because of gravity and air flow causing most virus droplets to float to the ground.</p>
          <p>In addition, as medical staff walk around the ward, the virus can be tracked all over the floor, as indicated by the 100% rate of positivity from the floor in the pharmacy, where there were no patients.</p>
          <p>Furthermore, half of the samples from the soles of the ICU medical staff shoes tested positive. Therefore, the soles of medical staff shoes might function as carriers. The 3 weak positive results from the floor of dressing room 4 might also arise from these carriers. We highly recommend that persons disinfect shoe soles before walking out of wards containing COVID-19 patients."
            <a href="https://wwwnc.cdc.gov/eid/article/26/7/20-0885_article">Reference</a>
          </p>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'transfer',
}
</script>

<style lang="scss" scoped>
.main-ul {
  list-style-type: none;
}

ul li {
  margin: 1px 10px 10px -20px;
}
</style>