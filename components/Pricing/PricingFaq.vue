<template>
  <div class="pricing_faq mt-[190px]">
    <div class="container dynamic_container ">
      <div class="text-center">
        <h2 class="text-[36px] font-bold text-[#343f52] mb-[15px]">
         Pricing FAQ
        </h2>
        <p class="text-[18px] px-[35px] mb-[50px] md:px-[100px] font-medium">If you don't see an answer to your question, you can send us an email from our contact form.</p>
      </div>

      <div class="grid  grid-cols-12">
        <div class=" px-[15px]  col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6">
          <div v-for="(item, index) in collapse " :key="index" class="card_collapsible px-[26px] py-[18px] mb-[25px]">
            <div ref="title" class=" collapsible text-[#343f52] text-[17px] cursor-pointer  font-bold hover:text-[#3f78e0]" @click="toggle(index)">
      
               <svg  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="svg-inline--fa fa-caret-down fa-w-10 w-[12px] mt-[-5px] mr-[5px] inline-block text-[#3f78e0]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg>
              {{item.title}}
            </div>
            
            <div class="content_faq" ref="content">
              <p class="text-[#343f52] font-medium leading-[1.7] text-[16px] mt-[20px]">{{item.content}}</p>
                
            </div>
            
         </div>
        </div>


        <div class=" px-[15px]  col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6">
              <div v-for="(item, index) in collapse1 " :key="index" class="card_collapsible px-[26px] py-[18px] mb-[25px]" >
            <div ref="title2" class=" collapsible text-[#343f52] cursor-pointer text-[17px]  font-bold hover:text-[#3f78e0] focus:text-[#3f78e0]" @click="toggle1(index)">
             <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="svg-inline--fa fa-caret-down fa-w-10 w-[12px] mt-[-5px] mr-[5px] inline-block text-[#3f78e0]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg>
              {{item.title}}
            </div>
            
            <div class="content_faq" ref="content2">
              <p  class="text-[#343f52] font-medium leading-[1.7] text-[16px] a mt-[20px]">{{item.content}}</p>
                
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
          title:'Can I cancel my subscription?',
          content:'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.'
        },
  
        {
          title:'Which payment methods do you accept?',
          content:'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.'
        },
    
        {
          title:'How can I manage my Account?',
          content:'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.'
        },
         {
          title:'Is my credit card information secure?',
          content:'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.'
        },
  
      ],
      collapse1:[
        {
          title:'How do I get my subscription receipt?',
          content:'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.'
        },
        {
          title:'Are there any discounts for people in need?',
          content:'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.'
        },
        {
          title:'Do you offer a free trial edit?',
          content:'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.'
        },
        {
          title:'How do I reset my Account password?',
          content:'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.'
        },
    
      ]
    }
  },
 

  
  methods: {
    toggle(index) {
      setTimeout(()=>{
        let _this = this
    
        if(this.$refs.content[index].offsetHeight == 0){
          // var x, i;
          // x =  this.$refs.content;
          // for (i = 0; i < x.length; i++) {  
          //   x[i].style.height = '0px';
          // }
          this.$refs.title[index].style.color = "#3f78e0"
          this.$refs.content[index].style.height = this.$refs.content[index].scrollHeight + "px"
       
     
          
        }else{
          this.$refs.content[index].style.height = '0px'
          this.$refs.title[index].style.color = "#343f52"
        }
      },10)
    },

     toggle1(index) {
      setTimeout(()=>{
       
        if(this.$refs.content2[index].offsetHeight == 0){
          // var x, i;
          // x =  this.$refs.content;
          // for (i = 0; i < x.length; i++) {  
          //   x[i].style.height = '0px';
          // }
          this.$refs.content2[index].style.height = this.$refs.content2[index].scrollHeight + "px"
          this.$refs.title2[index].style.color = "#3f78e0"
         
        }else{
          this.$refs.content2[index].style.height = '0px'
          this.$refs.title2[index].style.color = "#343f52"
        }
      },10)
    },
  },
}
</script>

<style>
.pricing_faq .card_collapsible {
    box-shadow: 0 0 0 0.05rem rgb(8 60 130 / 6%), 0 0 2.25rem rgb(30 34 40 / 4%);

}

.pricing_faq .content_faq {
  padding: 0 18px;
  height: 0;
  overflow: hidden;
  transition: height 0.3s ease-out;
  
}
.pricing_faq .collapsible:hover{
  color:#3f78e0 !important
}

@media screen and (min-width: 1536px) {
  .pricing_faq .dynamic_container{
    max-width: 1320px;
    margin: 0 auto;
  }
}

</style>