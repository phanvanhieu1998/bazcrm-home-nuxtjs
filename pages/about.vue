<template>
  <div class="about-page-wapper pb-[90px]">
    <AboutCompany/>
    <AboutSection2/>
    <AboutSection3/>
    <AboutSection4/>
    <AboutSection5/>
  </div>
</template>

<script>
import AboutCompany from '~/components/About/AboutCompany.vue'
import AboutSection2 from '~/components/About/AboutSection2.vue'
import AboutSection3 from '~/components/About/AboutSection3.vue'
import AboutSection4 from '~/components/About/AboutSection4.vue'
import AboutSection5 from '~/components/About/AboutSection5.vue'
export default {  
  data(){
    return{

    }
  },

  components:{
    AboutCompany,
    AboutSection2,
    AboutSection3,
    AboutSection4,
    AboutSection5
  }
}
</script>
<style>
.about-page-wapper{
  font-family: Manrope, sans-serif;
}
</style>
