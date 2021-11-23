<template>
  <div class="about_section3 bg-[#f1f5fd] bg-light angled upper-start lower-start pb-[40px] lg:pb-[0] pt-[50px]">
    <div class="container_home dynamic_container ">
      <div class="grid grid-cols-12 mb-[90px] ">
        <div class="md:px-[35px] ml-[100px] hidden lg:block  px-[15px] col-span-12 md:col-span-10 md:col-start-2 lg:col-span-5 2xl:mt-[60px]" >
     
          <img class="h-auto max-w-full object-cover" src="~/static/images/co1.png">
        
        </div>

        <div class="md:px-[35px] px-[15px]  col-span-12 md:col-span-10 md:col-start-2 lg:col-span-7 lg:mt-[50px] xl:mt-[130px] mt-[30px]" >
            <VueSlickCarousel v-bind="settings">
              <div class="px-[15px] py-[15px]"  v-for="(item, index) in customers" :key="index">
                <div class="cursor-pointer   card_customers px-[40px] ">
                  <div class="absolute">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-right" class="svg-inline--fa fa-quote-right fa-w-16 w-[50px] h-[50px] text-[#e8ecf4] " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path></svg>
                  </div>
                  <div class="mb-[20px] text-[20px] font-medium leading-[1.7] relative">
                    {{item.content}}
                  </div>

                  <div class="flex">
                    <div >
                      <div class="w-[70px] h-[70px]" >
                        <img class="w-[70px] h-[70px] rounded-[50%]" :src="require(`~/static/images/${item.img}`)">
                      </div>
                    </div>

                    <div class="pl-[20px] leading-[35px]">
                      <h5 class="font-bold text-[18px] "> {{item.info}}</h5>
                      <p class="text-[16px] font-medium"> {{item.info1}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </VueSlickCarousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  data(){
    return{
          customers:[
              {
          img:'te1.jpg',
          content:'“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.”',
          info:'Coriss Ambady',
          info1:'Financial Analyst',
          
        },
         {
          img:'te2.jpg',
           content:'“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.”',
          info:'Coriss Ambady',
          info1:'Financial Analyst',
        },
         {
          img:'te3.jpg',
            content:'“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.”',
          info:'Coriss Ambady',
          info1:'Financial Analyst',
        },
         {
          img:'te4.jpg',
            content:'“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.”',
          info:'Coriss Ambady',
          info1:'Financial Analyst',
        },
      ],
      settings:{
        "dots": true,
        "dotsClass": "slick-dots custom-dot-class",
        "edgeFriction": 0.35,
        "infinite": false,
        "speed": 500,
        "slidesToShow": 1,
        "slidesToScroll": 1
      }
    }
  },

  components: { VueSlickCarousel },
}
</script>

<style>
@media screen and (min-width: 1536px) {
  .about_section3 .dynamic_container{
    max-width: 1360px;
    margin: 0 auto;
  }
}

.about_section3 .slick-arrow{
  display: none !important;
}
.about_section3 .slick-dots {
    position: absolute;
    bottom: -25px;
    display: block;
    width: 50% !important;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: unset !important;
    left: 44px;
}
</style>