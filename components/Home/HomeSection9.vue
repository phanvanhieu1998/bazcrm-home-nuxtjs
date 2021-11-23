<template>
  <div class="home_section9 bg-light angled upper-end lower-end">
    <div class="container dynamic_container">
      <div class=" grid py-[20px] pt-[90px] grid-cols-12">
        <div class="px-[15px] pb-[20px]  col-span-12 md:col-span-10 md:col-start-2  lg:col-span-4 lg:pb-[0]"> 
          <h2 class="text-[#aab0bc] mt-[180px] text-[16px] font-bold mb-[15px]">OUR PRICING</h2> 
          <h3 class="text-[38px] mb-[15px] leading-[1.25] text-[#343f52]  font-bold">We offer great and premium prices.</h3>
          <p class="text-[17px]  font-medium leading-[1.55] mb-[20px] text-[#60697b] ">Enjoy a 
            <span class="text-[#fab758]">free 30-day trial </span>and experience the full service. No credit card required!</p>
           <button class="bg-[#fab758] px-[24px] text-[17px] mt-[15px] py-[12px] text-white font-bold rounded-full  animation_button ">
            See All Prices </button>
        </div>

        <div class="px-[15px] col-span-12   md:col-span-10 md:col-start-2 lg:col-span-7 lg:col-start-6 ">
          <p class="flex md:justify-start text-[17px]   lg:justify-end font-semibold">Monthly
            <label class="switch mx-[15px]">
              <input type="checkbox">
              <span @click="b()" class="slider round"></span>
            </label>
            <span class="text-[#e2626b] text-[17px]">Yearly (Save 30%)</span>
          </p>

          <div class=" grid  grid-cols-12">
            <div  class="col-span-12  sm:px-[15px] sm:col-span-6 lg:col-span-6">
                <div class="bg-white px-[20px] shadow-lg rounded-[10px] mt-[20px] lg:mt-[50px] py-[70px] sm:px-[40px] m-auto lg:px-[50px]">
           
                <div class="text-center">
                  <div class="inline-block">
                          <div :class="[{'price-show':package_term},{'price-hide':package_term == false}]" class="relative w-[162px]"><span class="text-[25px] top-[17px] absolute font-light ">$</span><strong class="text-[57px] text-[#343f52] font-light ml-[20px]">19</strong>/ month</div>
                    <div :class="[{'price-show':package_term  == false},{'price-hide':package_term}]"  class="relative w-[162px] "><span class="font-light  text-[25px] top-[17px] absolute ">$</span><strong class="text-[57px] text-[#343f52] font-light ml-[20px]">199</strong>/ year</div>
                    <h4 class="text-[20px] mb-[30px] text-left text-[black] leading-[2rem] font-bold">Premium Plan</h4>
                    <ul>
                      <li class="flex mt-[10px]">
                        <div>
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="inline-block svg-inline--fa fa-check fa-w-16 w-[13px] mr-[5px] h-[20px] text-[#fab758]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                        </div> 
                        <span  class=" ml-[5px] text-[17px]"><strong>5 </strong>Projects</span>
                      </li>

                      <li class="flex mt-[10px]">
                        <div>
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="inline-block svg-inline--fa fa-check fa-w-16 w-[13px] mr-[5px] h-[20px] text-[#fab758]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                        </div>
                        <span class="ml-[5px]  text-[17px]" ><strong>100K </strong>API Access</span >
                      </li>

                      <li class="flex mt-[10px]">
                        <div>
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="inline-block svg-inline--fa fa-check fa-w-16 w-[13px] mr-[5px] h-[20px] text-[#fab758]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                        </div>
                        <span class="ml-[5px]  text-[17px]" ><strong>200MB </strong>Storage</span >
                      </li>

                      <li class="flex mt-[10px]">
                        <div>
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="inline-block svg-inline--fa fa-check fa-w-16 w-[13px] mr-[5px] h-[20px] text-[#fab758]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                        </div>
                        <span class="ml-[5px]  text-[17px]" >Weekly<strong> Reports</strong></span >
                      </li>

                      <li class="flex mt-[10px]">
                        <div>
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="inline-block svg-inline--fa fa-check fa-w-16 w-[13px] mr-[5px] h-[20px] text-[#fab758]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                        </div>
                        <span class=" ml-[5px]  text-[17px]">7/24<strong> Support</strong></span >
                      </li>
                    </ul>
                    <button class="bg-[#fab758] px-[24px] text-[1rem] mt-[40px] py-[12px] text-white font-bold rounded-full  animation_button ">
                     Choose Plan 
                    </button>
                  </div>
                
                </div>
              </div>
            </div>

            <div  class="col-span-12  sm:px-[15px] sm:col-span-6 lg:col-span-6">
              <div class="bg-white px-[20px] shadow-lg rounded-[10px] mt-[20px] py-[70px] lg:py-[100px] sm:px-[40px] m-auto lg:px-[50px]">
                <div class="text-center">
                  <div class="inline-block">
                    <div :class="[{'price-show':package_term},{'price-hide':package_term == false}]" class="relative w-[165px] "><span class="text-[25px] top-[17px] absolute font-light ">$</span><strong class="text-[57px] text-[#343f52] font-light ml-[20px]">49</strong>/ month</div>
                    <div :class="[{'price-show':package_term  == false},{'price-hide':package_term}]"  class="relative w-[165px]"><span class="font-light  text-[25px] top-[17px] absolute ">$</span><strong class="text-[57px] text-[#343f52] font-light ml-[20px]">499</strong>/ year</div>
                    <h4 class="text-[20px] mb-[30px] text-left text-[black] leading-[2rem] font-bold">Corporate Plan</h4>
                    <ul>
                      <li class="flex mt-[10px]">
                        <div>
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="inline-block svg-inline--fa fa-check fa-w-16 w-[13px] mr-[5px] h-[20px] text-[#fab758]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                        </div> 
                        <span  class=" ml-[5px]  text-[17px]"><strong>5 </strong>Projects</span>
                      </li>

                      <li class="flex mt-[10px]">
                        <div>
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="inline-block svg-inline--fa fa-check fa-w-16 w-[13px] mr-[5px] h-[20px] text-[#fab758]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                        </div>
                        <span class="ml-[5px]  text-[17px]" ><strong>100K </strong>API Access</span >
                      </li>

                      <li class="flex mt-[10px]">
                        <div>
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="inline-block svg-inline--fa fa-check fa-w-16 w-[13px] mr-[5px] h-[20px] text-[#fab758]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                        </div>
                        <span class="ml-[5px]  text-[17px]" ><strong>200MB </strong>Storage</span >
                      </li>

                      <li class="flex mt-[10px]">
                        <div>
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="inline-block svg-inline--fa fa-check fa-w-16 w-[13px] mr-[5px] h-[20px] text-[#fab758]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                        </div>
                        <span class="ml-[5px]  text-[17px]" >Weekly<strong> Reports</strong></span >
                      </li>

                      <li class="flex mt-[10px]">
                        <div>
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="inline-block svg-inline--fa fa-check fa-w-16 w-[13px] mr-[5px] h-[20px] text-[#fab758]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                        </div>
                        <span class=" ml-[5px]  text-[17px]">7/24<strong> Support</strong></span >
                      </li>
                    </ul>
                     <button class="bg-[#fab758] px-[24px] text-[1rem] mt-[40px] py-[12px] text-white font-bold rounded-full  animation_button ">
                     Choose Plan 
                    </button>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>


export default {
 data(){
   return{
     package_term:true,

   }
 },

 methods:{
   b(){
     this.package_term = !this.package_term
     console.log(this.a)
   }
 }


}
</script>

<style>
@media screen and (min-width: 1536px) {
  .home_section9 .dynamic_container{
    max-width: 1320px;
    margin: 0 auto;
  }
}
</style>