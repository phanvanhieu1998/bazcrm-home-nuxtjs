<template>
  <div class="about_company">
    <div class="container_home dynamic_container">
      <div class=" grid  pt-[90px] grid-cols-12">
    

        <div class=" px-[15px] pt-[40px] text-center  m-auto col-span-12 md:px-[35px]">  
          <h1 class="text-[#343f52]  font-bold text-[40px] mb-[20px]  lg:text-[50px] leading-[1.15]">Hello! This is Sandbox</h1>
          <p class="text-[22px] font-medium leading-[1.55] mb-[35px]">A company turning ideas into beautiful things.</p>
      
        </div>
      </div>

      <div class=" grid  grid-cols-12">
        <div class="px-[15px] md:px-[20px] pb-[20px]  m-auto col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 lg:pb-[0]"> 
          <h2 class="text-[#343f52] text-[36px] font-bold mb-[15px] lg:mt-[0]">Who Are We?</h2> 
          <p  style="word-spacing:2px" class="md:text-[21px] leading-[1.6]  mb-[25px] font-medium">
            We are a digital and branding company that believes in the power of creative strategy and along with great design.
          </p>
          <p class="text-[17px] font-medium leading-[1.7] mb-[30px] text-[#60697b] ">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio,
             dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
        
          <div class="grid grid-cols-12">

            <div class="col-span-12 xl:col-span-6  ">
              <div class="mb-[20px]" v-for="(item, index) in solution" :key="index">
                <div class="inline-block w-[20px] mt-[3px] h-[20px] rounded-full bg-[#dce7f9] absolute">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="m-auto svg-inline--fa fa-check fa-w-16 w-[10px] h-[20px] text-[#3f7ae2]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                </div>
                <div class="pl-[30px] text-[17px] leading-[1.7] font-medium">
                  {{item.text}}
                </div>
              </div>
            </div>

            <div class=" col-span-12 xl:col-span-6 ">
              <div class="mb-[20px]" v-for="(item, index) in solution2" :key="index">
                <div class="inline-block w-[20px] mt-[3px] h-[20px] rounded-full bg-[#dce7f9] absolute">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="m-auto svg-inline--fa fa-check fa-w-16 w-[10px] h-[20px] text-[#3f7ae2]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                </div>
                <div class="pl-[30px] text-[17px] leading-[1.7] font-medium">
                  {{item.text}}
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="px-[35px] col-span-12 m-auto md:col-span-10 md:col-start-2 lg:col-span-6 lg:flex lg:flex-wrap lg:relative">
            <div class="w-full md:mt-[0] mb-[20px] md:w-[70%] md:ml-[30%]">
              <img class="h-auto max-w-full object-cover w-[100%] rounded-lg" src="~/static/images/about2.jpg">
            </div>

            <div class="w-full md:w-[55%] md:mt-[-45%]">
              <img class="h-auto max-w-full object-cover w-[100%] rounded-lg"  src="~/static/images/about3.jpg">
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
         solution:[
       {
         text:'Aenean eu leo quam ornare curabitur blandit tempus.',
       },
       {
         text:'Nullam quis risus eget urna mollis ornare donec elit.'
       }
     ],
      solution2:[
       {
         text:'Etiam porta sem malesuada magna mollis euismod.',
       },
       {
         text:'Fermentum massa vivamus faucibus amet euismod.'
       }
     ],
    }
  }
}
</script>

<style>
@media screen and (min-width: 1536px) {
  .about_company .dynamic_container{
    max-width: 1360px;
    margin: 0 auto;
  }
}

</style>