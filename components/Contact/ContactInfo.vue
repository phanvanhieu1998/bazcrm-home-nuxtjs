<template>
  <div class="contact_info bg-light angled upper-end lower-end pt-[120px]">
    <div class="container_home dynamic_container">
      <div class="grid grid-cols-12">
        <div class="col-span-12 lg:col-span-7 px-[15px] mb-[40px] md:px-[35px]">
          <div class="grid grid-cols-12">
            <div class="col-span-12 md:mb-[0] mb-[25px] md:col-span-6">
              <div class="md:px-[12.5px]">
                <img class="h-auto w-full object-cover rounded-md " src="~/static/images/g5.jpg">
              </div> 
            </div>

            <div class="col-span-12 md:col-span-6 md:px-[12.5px] md:mt-[-50px]  ">
              <div class=" rounded-md m-auto  md:mr-[40px] bg-[#e0e9fa]">
                <div class="py-[60px] px-[30px] text-center">
                  <countTo class="text-[40px] text-[#343f52] font-bold" :startVal='startVal' :endVal='endVal' :duration='2000'></countTo>
                  <span  class="text-[40px] text-[#343f52] font-bold">+</span>
                 
                   <p class="text-[16px]">Satisfied Customers</p>
                </div>
              </div>

               <div class="mt-[25px]">
                <img class="h-auto w-full object-cover rounded-md " src="~/static/images/g6.jpg">
              </div> 
            </div>
          </div>
        </div>

        <div class="col-span-12 lg:col-span-5 px-[15px] md:px-[35px] ">
            <h2 class="lg:text-[36px] md:text-[30px] leading-[1.3] text-[#343f52] font-bold mb-[40px]">Convinced yet? Let's make something great together.</h2>
            <div class="flex mb-[20px]">
              <div>
                <div class="mr-[30px] mt-[5px]">
                   <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12 w-[20px] h-[20px] text-[#3f78e0]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                  
                </div>
              </div>

              <div class="lg:w-[235px]">
                  <h5 class="text-[#343f52] font-bold text-[18px] mb-[5px]">Address</h5>
                  <span class="text-[16px] text-[#3f78e5]">Moonshine St. 14/05 Light City,
                London, United Kingdom </span>
              </div>
            </div>

            <div class="flex mb-[20px]">
              <div>
                <div class="mr-[30px] mt-[5px]">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-alt" class="svg-inline--fa fa-phone-alt fa-w-16 w-[20px] h-[20px] text-[#3f78e0]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
                </div>
              </div>

              <div class="lg:w-[235px]">
                  <h5 class="text-[#343f52] font-bold text-[18px] mb-[5px]">Phone</h5>
                  <span class="text-[16px] text-[#3f78e5]">00 (123) 456 78 90</span>
              </div>
            </div>

            <div class="flex mb-[20px]">
              <div>
                <div class="mr-[30px] mt-[5px]">
                 <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" class="svg-inline--fa fa-envelope fa-w-16  w-[20px] h-[20px] text-[#3f78e0]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>
                </div>
              </div>

              <div class="lg:w-[235px]">
                  <h5 class="text-[#343f52] font-bold text-[18px] mb-[5px]">E-mail</h5>
                  <span class="text-[16px] text-[#3f78e5]">sandbox@email.com </span>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import countTo from 'vue-count-to';
export default {
  data(){
    return{
        startVal: 250,
        endVal: 5000
    }
  },

  methods:{
 
  },
  components: { countTo },

}
</script>

<style>
@media screen and (min-width: 1536px) {
  .contact_info .dynamic_container{
    max-width: 1360px;
    margin: 0 auto;
  }
}
</style>