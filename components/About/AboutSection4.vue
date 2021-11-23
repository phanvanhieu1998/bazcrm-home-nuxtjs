<template>
  <div class="about_section4 mt-[100px] mb-[120px]">
    <div class="container dynamic_container px-[20px]">
      <div class="grid px-[15px] md:px-[40px]  mb-[50px] grid-cols-12">
        <div class="text-center col-span-12 lg:col-start-2 lg:col-span-10 md:px-[50px] 2xl:col-span-6 2xl:col-start-4 2xl:px-[0]" >
          <h2 class="text-[33px] lg:text-[38px] leading-[43px] mt-[15px] text-[#343f52] font-bold">
            Here are 3 working steps to organize our business projects.
          </h2>
        </div>
      </div>

      <div>
        <VueSlickCarousel :arrows="true" :dots="true " v-bind="settings"  >
          <div v-for="(item, index) in positions" :key="index" class="col-span-12 md:col-span-6 xl:col-span-3 xl:pt-[0] pb-[30px] px-[15px]" >
            <div class="bg-white shadow rounded px-[40px] py-[40px] ">
              
              <img class="w-[100px] h-[100px]  mb-[20px] rounded-[50%]" :src="require(`~/static/images/${item.img}`)">

              <h4 class="text-[20px] font-bold mb-[5px] text-[#343f52]">{{item.title}}</h4>

              <div class="text-[#aab0bc] font-bold text-[14px]  mb-[10px] ">
                {{item.position}}
              </div>

              <p class="text-[#60697b] text-[17px] font-medium leading-[30px] mb-[20px]">{{item.textContent}}</p>

              <div class="flex">
                <svg aria-hidden="true" focusable="false"  data-prefix="fab" data-icon="twitter" class="svg-inline--fa fa-twitter fa-w-16 mr-[15px] text-[#5daed5] w-[17px] h-[17px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" class="svg-inline--fa fa-facebook-f fa-w-10  mr-[15px] text-[#4470cf] w-[17px] h-[17px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="basketball-ball" class="svg-inline--fa fa-basketball-ball fa-w-16 text-[#d07ead] w-[17px] h-[17px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M212.3 10.3c-43.8 6.3-86.2 24.1-122.2 53.8l77.4 77.4c27.8-35.8 43.3-81.2 44.8-131.2zM248 222L405.9 64.1c-42.4-35-93.6-53.5-145.5-56.1-1.2 63.9-21.5 122.3-58.7 167.7L248 222zM56.1 98.1c-29.7 36-47.5 78.4-53.8 122.2 50-1.5 95.5-17 131.2-44.8L56.1 98.1zm272.2 204.2c45.3-37.1 103.7-57.4 167.7-58.7-2.6-51.9-21.1-103.1-56.1-145.5L282 256l46.3 46.3zM248 290L90.1 447.9c42.4 34.9 93.6 53.5 145.5 56.1 1.3-64 21.6-122.4 58.7-167.7L248 290zm191.9 123.9c29.7-36 47.5-78.4 53.8-122.2-50.1 1.6-95.5 17.1-131.2 44.8l77.4 77.4zM167.7 209.7C122.3 246.9 63.9 267.3 0 268.4c2.6 51.9 21.1 103.1 56.1 145.5L214 256l-46.3-46.3zm116 292c43.8-6.3 86.2-24.1 122.2-53.8l-77.4-77.4c-27.7 35.7-43.2 81.2-44.8 131.2z"></path></svg>
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
      positions:[
        {
          img:'te1.jpg',
          title:'Coriss Ambady',
          position:'FINANCIAL ANALYST',
          textContent:'Fermentum massa justo sit amet risus morbi leo.',
          
        },
         {
          img:'te2.jpg',
          title:'Cory Zamora',
          textContent:'Fermentum massa justo sit amet risus morbi leo.',
          position:'MARKETING SPECIALIST',
          class:'red'
        },
         {
          img:'te3.jpg',
          title:'Nikolas Brooten',
          textContent:'Fermentum massa justo sit amet risus morbi leo.',
          position:'MARKETING SPECIALIST',
          class:'green'
        },
         {
          img:'te4.jpg',
          title:'Jackie Sanders',
          position:'INVESTMENT PLANNER',
          textContent:'Fermentum massa justo sit amet risus morbi leo.',
          
          class:'blue'
        },
      ]
    }
  },
  components: { VueSlickCarousel },
}
</script>

<style>
 .about_section4 .card_customers {
    /* box-shadow: 0 0 0 0.05rem rgb(8 60 130 / 6%), 0 0 2.25rem rgb(30 34 40 / 4%); */
  border: 1px solid 	#DCDCDC;
  border-radius: 5px;
  box-shadow: 5px 6px 17px -9px #888888;
}

@media screen and (min-width: 1536px) {
  .about_section4 .dynamic_container{
    max-width: 1320px;
    margin: 0 auto;
  }
}
</style>