<template>
  <div class="home_section4 bg-light angled upper-start lower-start">
    <div class="container_home dynamic_container pt-[90px]  md:pt-[140px]">
      <div class="grid grid-cols-12 mb-[90px] md:mb-[160px]">
        <div class="md:px-[35px] px-[15px] col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 2xl:mt-[60px]" >
          <h2 class="text-[#aab0bc] font-bold mb-[15px]">OUR STRATEGY</h2> 
          <h3 class="md:text-[38px] text-[33px] mb-[25px] leading-[1.15] text-[#343f52]  font-bold">Here are 3 working steps to organize our business projects.</h3>
           <p class="text-[17px] font-medium leading-[1.7] mb-[20px] text-[#60697b] ">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
              Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis.</p>
          <p class="text-[17px] font-medium leading-[1.7] mb-[30px] text-[#60697b] ">Nullam id dolor id nibh ultricies vehicula ut id elit.
             Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur.</p>
          <button class="bg-[#fab758] px-[24px] text-[17px] py-[14px] text-white font-bold rounded-full  animation_button ">
            Learn More </button>
        </div>

        <div class="md:px-[35px] px-[15px]  col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 mt-[30px]" >
          <div class="mb-[10px] lg:mb-[0]" v-for="(item, index) in steps" :key="index">
            <div :class="[`step_${item.id}`]" class="bg-white shadow-lg rounded-[10px]  p-[30px]">
              <div class="flex ">
                <div >
                  <div class="w-[60px] h-[60px] bg-[#fef3e4] mr-[20px] rounded-full flex justify-center items-center font-bold text-[#fab758]">
                    <strong class="text-[20px]">{{item.step}}</strong>
                  </div>
                </div>
                  
                <div>
                    <h4 class="font-bold text-[20px] mb-[5px]">{{item.title}}</h4>
                  <p class="text-[17px] font-medium">{{item.textContent}}</p>
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
      steps:[
        {
          id:1,
          step:'01',
          title:'Collect Ideas',
          textContent:'Nulla vitae elit libero pharetra augue dapibus.'
        },
         {
          id:2,
          step:'02',
          title:'Data Analysis',
          textContent:'Vivamus sagittis lacus vel augue laoreet.'
        },
         {
           id:3,
          step:'03',
          title:'Finalize Product',
          textContent:'Cras mattis consectetur purus sit amet.'
        },
       
      ]
    }
  }
}
</script>

<style>
@media screen and (min-width: 1536px) {
  .home_section4 .dynamic_container{
    max-width: 1360px;
    margin: 0 auto;
  }
}
</style>