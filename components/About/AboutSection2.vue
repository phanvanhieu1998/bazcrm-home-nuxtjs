<template>
  <div class="about_section2 bg-light angled upper-start lower-start">
    <div class="container_home dynamic_container pt-[90px]  md:pt-[140px]">

      <div class="grid px-[15px] md:px-[40px]  mb-[50px] grid-cols-12">
        <div class="text-center col-span-12 lg:col-start-2 lg:col-span-10 md:px-[50px] 2xl:col-span-6 2xl:col-start-4 2xl:px-[0]" >
          <h2 class="text-[33px] lg:text-[38px] leading-[43px] mt-[15px] text-[#343f52] font-bold">
            Here are 3 working steps to organize our business projects.
          </h2>
        </div>
      </div>

      <div class="grid grid-cols-12 mb-[90px] md:mb-[160px]">
        <div class="md:px-[35px] px-[15px] col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 2xl:mt-[60px]" >
          <h2 class="text-[#343f52] text-[28px] font-bold mb-[15px]">How It Works?</h2> 
          <p class="md:text-[22px] text-[33px] mb-[25px] leading-[1.25]  font-medium">
            Find out everything you need to know and more about how we create our business process models.
          </p>
           <p class="text-[17px] font-medium leading-[1.7] mb-[20px] text-[#60697b] ">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
              Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis.</p>
          <p class="text-[17px] font-medium leading-[1.7] mb-[30px] text-[#60697b] ">
            Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur. 
            Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis.
          </p>
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
  .about_section2 .dynamic_container{
    max-width: 1360px;
    margin: 0 auto;
  }
}
</style>