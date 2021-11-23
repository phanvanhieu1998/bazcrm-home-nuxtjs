<template>
  
  <div class="home__section3 pb-[120px] md:pb-[160px]">
    <div class="container_home dynamic_container">
      <div class=" grid  pt-[160px] grid-cols-12 mb-[40px]">
        <div class="md:px-[35px] px-[15px] pb-[20px]  m-auto col-span-12 md:col-span-10 md:col-start-2 lg:col-span-5 lg:pb-[0]"> 
          <h2 class="text-[#aab0bc] font-bold md:mb-[15px] lg:mb-[20px]">ANALYZE NOW</h2> 
          <h3 class="text-[29px] md:text-[33px] mb-[25px] leading-[1.15] text-[#343f52] lg:text-[38px]  font-bold">Wonder how much faster your website can go? Easily check your SEO Score now.</h3>
          <p class="text-[17px] leading-[1.55] mb-[35px] text-[#60697b] font-medium">Cum sociis natoque penatibus et magnis dis parturient montes,
             nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
             egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
          <div class="grid grid-cols-12">
            <div class="col-span-12 lg:col-span-9">
              <form>
                <div class="w-full flex">
                  <input class=" bg-[#fff] border p-[10px] w-full
                    focus:outline-none focus:ring-1 focus:ring-[#fab758] focus:border-transparent leading-[28px] 
                    rounded-tl-[10px] rounded-bl-[10px]" type="url" placeholder="Enter Website URL" >
                  <button class="bg-[#fab758] hover:shadow-lg text-[#fff] font-bold px-[25px] py-[13px] ml-[-4px] rounded-br-[10px] rounded-tr-[10px]">
                    Check
                  </button>
                </div>
             </form>
            </div>
          </div>
         
               
        </div>


        <div class="md:px-[35px] px-[15px] col-span-12 m-auto md:col-span-10 md:mt-[30px] lg:mt-[0] md:col-start-2  lg:col-span-7">
          <img class="h-auto max-w-full object-cover" src="~/static/images/concept3.png">
        </div> 

     
      </div>
    </div>
  </div>
</template>

<script>


export default {
 data(){
   return{

   }
 }


}
</script>

<style>
@media screen and (min-width: 1536px) {
  .home__section3 .dynamic_container{
    max-width: 1360px;
    margin: 0 auto;
  }
}
</style>