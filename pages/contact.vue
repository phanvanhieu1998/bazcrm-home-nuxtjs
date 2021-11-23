<template>
  <div class="contact-page-wapper">
    <ContactSection1/>
    <ContactInfo/>
    <ContactForm/>
</div>

</template>

<script>

import ContactSection1 from '~/components/Contact/ContactSection1.vue'
import ContactInfo from '~/components/Contact/ContactInfo.vue'
import ContactForm from '~/components/Contact/ContactForm.vue'
export default {
  data(){
    return{
    
    }
  },
  components:{
    ContactSection1,
    ContactInfo,
    ContactForm
  },


}
</script>
<style>
.contact-page-wapper{
  font-family: Manrope, sans-serif;
}
</style>
