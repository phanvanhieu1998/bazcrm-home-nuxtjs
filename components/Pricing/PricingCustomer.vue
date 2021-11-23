<template>
  <div class="pricing_customer mt-[200px] mb-[120px]">
    <div class="container dynamic_container px-[20px]">
      <div class="text-center">
        <h2 class="text-[36px] font-bold text-[#343f52] mb-[15px]">
         Happy Customers
        </h2>
        <p class="text-[18px] font-medium  px-[35px] mb-[30px] md:px-[100px]">Customer satisfaction is our major goal. See what our customers are saying about us.</p>
      </div>

      <div>
        <VueSlickCarousel :arrows="true" :dots="true " v-bind="settings"  >
          <div class="px-[15px] py-[15px]"  v-for="(item, index) in customers" :key="index">
            <div class="cursor-pointer   card_customers px-[40px] py-[40px]">
              <div class="absolute">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-right" class="svg-inline--fa fa-quote-right fa-w-16 w-[50px] h-[50px] text-[#f5f5f6] " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path></svg>
              </div>
              <div class="mb-[20px] text-[17px] font-medium leading-[1.7] relative">
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
</template>

<script>
 import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  data(){
    return{
              settings:{
  "dots": true,
  "infinite": false,
  "speed": 500,
  "slidesToShow": 3,
  "slidesToScroll": 1,
  "initialSlide": 0,
  "responsive": [
    {
      "breakpoint": 1024,
      "settings": {
        "slidesToShow": 2,
        "slidesToScroll": 1,
        "infinite": true,
        "dots": true
      }
    },
    {
      "breakpoint": 600,
      "settings": {
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "initialSlide": 2
      }
    },
    {
      "breakpoint": 480,
      "settings": {
        "slidesToShow": 1,
        "slidesToScroll": 1
      }
    }
  ]
},
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
    }
  },
  components: { VueSlickCarousel },
}
</script>

<style>
 .pricing_customer .card_customers {
    /* box-shadow: 0 0 0 0.05rem rgb(8 60 130 / 6%), 0 0 2.25rem rgb(30 34 40 / 4%); */
  border: 1px solid 	#DCDCDC;
  border-radius: 5px;
  box-shadow: 5px 6px 17px -9px #888888;
}

@media screen and (min-width: 1536px) {
  .pricing_customer .dynamic_container{
    max-width: 1320px;
    margin: 0 auto;
  }
}
</style>