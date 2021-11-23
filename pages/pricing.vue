<template>
  <div id="pricing">
    <PricingSection1/>
    <PricingChoosePlan/>
    <PricingContent/>
    <PricingFaq/>
    <PricingCustomer/>
    <PricingMap/>
  </div>
    
</template>

<script>
import PricingSection1 from "~/components/Pricing/PricingSection1.vue"
import PricingChoosePlan from "~/components/Pricing/PricingChoosePlan.vue"
import PricingContent from "~/components/Pricing/PricingContent.vue"
import PricingFaq from "~/components/Pricing/PricingFaq.vue"
import PricingCustomer from "~/components/Pricing/PricingCustomer.vue"
import PricingMap from "~/components/Pricing/PricingMap.vue"
export default {
  data(){
    return{
      
    }
  },

  components:{
    PricingSection1,
    PricingChoosePlan,
    PricingContent,
    PricingFaq,
    PricingCustomer,
    PricingMap
  }
}
</script>
<style>
#pricing{
  font-family: Manrope, sans-serif;
}
</style>
