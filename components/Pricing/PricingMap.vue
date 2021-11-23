<template>
  <div class="pricing__map mb-[80px]">
    <div class="container dynamic_container py-[9rem] bg_pricing__map">
        <div class="grid  grid-cols-12 ">
          <div class=" px-[35px] col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-4 text-center">
            <h1 class=" mb-[15px] text-[36px] text-[#343f52] font-bold">Join Our Community</h1>
            <p class="md:px-[90px] lg:px-[40px] leading-[28px] text-[18px] mb-[25px] text-[#60697b] font-medium">We are trusted by over 5000+ clients. Join them by using our services and grow your business.</p>

            <button class="bg-[#3f78e0] px-[24px] text-[16px] py-[12px] text-white font-bold rounded-full  animation_button ">
            Join Us </button>
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
.bg_pricing__map{
  background-image: url(~/static/images/map.png);
  background-size: auto;
  background-size: auto;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: scroll
}

@media screen and (min-width: 1536px) {
  .pricing__map .dynamic_container{
    max-width: 1320px;
    margin: 0 auto;
  }
}
</style>