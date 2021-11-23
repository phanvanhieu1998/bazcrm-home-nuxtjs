<template>
  <div class="home__section1">
    <div class="container_home dynamic_container">
      <div class=" grid  pt-[90px] grid-cols-12">
        <div class="px-[15px] m-auto col-span-10 md:px-[35px] col-start-2 lg:col-span-7">
          <img class="h-auto max-w-full object-cover " src="~/static/images/concept.png">
        </div> 

        <div class=" px-[15px] pt-[40px] text-center  m-auto col-span-12 md:px-[35px] md:col-span-8 md:col-start-3 lg:col-span-5 lg:pt-[0px] lg:text-left">  
          <h1 class="text-[#343f52]  font-bold text-[40px] mb-[25px]  lg:text-[50px] leading-[1.15]">Grow Your Business with Our Solutions.</h1>
          <p class="text-[22px] font-medium leading-[1.55] mb-[35px]">We help our clients to increase their website traffic, rankings and visibility in search results.</p>
          <button style="border:2" class="bg-[#fab758] px-[24px] text-[17px]  py-[14px] text-white font-bold rounded-full  animation_button ">
            Try It For Free </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
@media screen and (min-width: 1536px) {
  .home__section1 .dynamic_container{
    max-width: 1360px;
    margin: 0 auto;
  }
}

</style>