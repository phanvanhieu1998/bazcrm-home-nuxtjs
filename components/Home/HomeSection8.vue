<template>
  <div class="home_section8 bg-light angled upper-start lower-start">
    <div class="container_home dynamic_container">
      <div class="grid grid-cols-12 pb-[100px]  ">
        <div class="px-[15px] md:px-[35px] col-span-12 md:col-span-10 md:col-start-2 lg:col-span-7 " >
          <div class="grid grid-cols-12">
            <div class="col-span-12 p-[12px]  sm:col-span-6" v-for="(item, index) in steps" :key="index" :class="[{'lg:col-start-2':item.id == 3},{'lg:col-span-6': item.id % 2 == 0},{'lg:col-span-5': item.id % 2 != 0}]">
              <div :class="[`community_${item.id}`]" class="bg-white shadow-lg rounded-[10px] mt-[20px] px-[36px] py-[40px]">
                <div class="absolute">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-right" class="svg-inline--fa fa-quote-right fa-w-16 w-[50px] h-[50px] text-[#f5f5f6] " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path></svg>
                </div>

                <div class="relative">
                  <p class="text-[18px] mb-[20px] font-medium leading-[2rem]">{{item.textContent}}</p>
                  <h4 class="font-bold text-[19px] text-[#343F52] mb-[5px] ">{{item.title}}</h4>
                  <p class="text-[17px] font-medium"> {{item.position}}</p>
                </div>
             
              </div>
            </div>
          </div>
        </div>

        <div class="px-[15px] md:px-[35px] col-span-12 m-auto md:col-span-10 md:col-start-2 lg:col-span-5 " >
          <h2 class="text-[#aab0bc] text-[16px] lg:mt-[0] mt-[40px] font-bold mb-[20px]">OUR COMMUNITY</h2> 
          <h3 class="text-[38px] leading-[1.25] text-[#343f52] mb-[25px] font-bold">Don't take our word for it. See what customers are saying about us.</h3>
          
          <p class="text-[17px] leading-[1.7] mb-[20px] text-[#60697b] font-medium">Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, 
            a pharetra augue. Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod.
          </p>
          <button class="bg-[#fab758] px-[24px] text-[1rem] py-[12px] mt-[15px] text-white font-bold rounded-full  animation_button ">
            All Testimonials </button>
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
          textContent:'“Cum sociis natoque penatibus et magnis dis parturient montes.”',
          title:'Coriss Ambady',
          position:'Financial Analyst',
          
        },
           {
          id:2,
          textContent:'“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod.”',
          title:'Cory Zamora',
          position:'Marketing Specialist',
          
        },
           {
          id:3,
          textContent:'“Donec id elit non porta gravida at eget metus. Duis mollis est luctus commodo nisi erat.”',
          title:'Barclay Widerski',
          position:'Sales Specialist',
          
        },
           {
          id:4,
          textContent:'“Nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo pellentesque.”',
          title:'Jackie Sanders',
          position:'Investment Planner',
          
        },
        
       
      ]
    }
  }
}
</script>

<style>
@media screen and (min-width: 1536px) {
  .home_section8 .dynamic_container{
    max-width: 1360px;
    margin: 0 auto;
  }
}
</style>