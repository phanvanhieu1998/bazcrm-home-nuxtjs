<template>
  <div class="home__section5 ">
    <div class="container_home dynamic_container">
      <div class=" grid  grid-cols-12 mb-[150px]">
        <div class="px-[15px] md:px-[35px] m-auto col-span-10 col-start-2 lg:col-span-7">
          <img class="h-auto max-w-full object-cover" src="~/static/images/concept6.png">
        </div> 

        <div class="px-[15px] md:px-[35px] pt-[40px] mt-[50px] col-span-12 md:col-span-10 md:col-start-2 lg:col-span-5 lg:pt-[0px] lg:text-left">  
          <h3 class="text-[#aab0bc] text-[16px mb-[15px] font-bold  leading-[1.15]">WHY CHOOSE US?</h3>
          <h3 class="md:text-[38px] text-[29px] font-bold text-[#343f52] leading-[1.25]   mb-[35px]">We bring solutions to make life easier for our clients.</h3>

          <div  v-for="(item, index) in collapse" :key="index">
             <svg  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="svg-inline--fa fa-caret-down fa-w-10 w-[12px] mt-[-5px] mr-[5px] inline-block text-[#fab758]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg>
            <button class="collapsible text-[#343f52] text-[18px] pb-[16px] font-bold hover:text-[#fab758]" @click="toggle(index)">{{item.title}}</button>
            
            <div class="content" ref="content">
              <p class="text-[#343f52] mb-[20px] text-[17px]">{{item.content}}</p>
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
      collapse:[
        {
          title:'Professional Design',
          content:'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.'
        },
           {
          title:'Top-Notch Support',
          content:'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.'
        },
           {
          title:'Header and Slide Option',
          content:'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.'
        },
      ]
    }
  },

  methods: {
    toggle(index) {
      setTimeout(()=>{
        console.log(this.$refs.content)
        if(this.$refs.content[index].offsetHeight == 0){
          var x, i;
          x =  this.$refs.content;
          for (i = 0; i < x.length; i++) {  
            x[i].style.height = '0px';
          }
          this.$refs.content[index].style.height = this.$refs.content[index].scrollHeight + "px"
        }else{
          this.$refs.content[index].style.height = '0px'
        }
      },10)
    },
  },
}
</script>

<style>

.content {
  padding-left: 22px;
  height: 0;
  overflow: hidden;
  transition: height 0.2s ease-out;
 
  
}
@media screen and (min-width: 1536px) {
  .home__section5 .dynamic_container{
    max-width: 1360px;
    margin: 0 auto;
  }
}

</style>