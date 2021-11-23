<template>
  <div class="contact_form my-[90px]">
    <div class="container">
      <div class="text-center">
        <h2 class="text-[36px] text-[#343f52] font-bold mb-[15px]">Drop Us a Line</h2>
        <p class="text-[18px] mb-[50px] font-medium">Reach out to us from our contact form and we will get back to you shortly.</p>
      </div>

      <div class=" grid grid-cols-12">
        <div class="col-span-12 md:col-span-8 md:col-start-3">
          <div class="grid grid-cols-12">
            <div class=" col-span-12 lg:col-span-6 px-[10px] mb-[20px] relative">
                <input :class="[{'error-first-name':firstName.error},
                {'no-error-first-name':firstName.noError}
                ]" @keyup="b('firstName')" v-model="firstName.content" class=" bg-[#fff] border p-[10px] w-full
                    focus:outline-none focus:ring-1 focus:ring-[#3f78e0] focus:border-transparent leading-[28px] 
                   " type="url" placeholder="First Name*" >
                   <div v-if="firstName.noError" class="absolute top-[16px] right-[16px]">
                     <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check fa-w-16 text-[#198754] w-[20px] h-[20px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                   </div>
                   <div  v-if="firstName.error" class="absolute top-[16px] right-[16px]">
                     
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-circle" class="svg-inline--fa fa-exclamation-circle fa-w-16 text-[#dc3545] w-[20px] h-[20px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>
                   </div>
                  <span class="text-[#dc3545] text-[14px]"> {{firstName.error}}</span>
                  <span class="text-[#198754] text-[14px]"> {{firstName.noError}}</span>
            </div>
           <div class="col-span-12 lg:col-span-6 px-[10px] mb-[20px]  relative">
                <input :class="[{'error-last-name':lastName.error},
                {'no-error-last-name':lastName.noError}
                ]" @keyup="b('lastName')" v-model="lastName.content" class=" bg-[#fff] border p-[10px] w-full
                    focus:outline-none focus:ring-1 focus:ring-[#3f78e0] focus:border-transparent leading-[28px] 
                   " type="url" placeholder="Last Name*" >
                    <div v-if="lastName.noError" class="absolute top-[16px] right-[16px]">
                     <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check fa-w-16 text-[#198754] w-[20px] h-[20px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                   </div>
                      <div  v-if="lastName.error" class="absolute top-[16px] right-[16px]">
                     
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-circle" class="svg-inline--fa fa-exclamation-circle fa-w-16 text-[#dc3545] w-[20px] h-[20px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>
                   </div>
                      <span  class="text-[#dc3545] text-[14px]"> {{lastName.error}}</span>
                  <span class="text-[#198754] text-[14px]"> {{lastName.noError}}</span>
            </div>

            <div class="col-span-12 lg:col-span-6 px-[10px] mb-[20px]  relative">
                <input :class="[{'error-email':email.error},
                {'no-error-email':email.noError}]"  @keyup="b('email')" v-model="email.content" class=" bg-[#fff] border p-[10px] w-full
                    focus:outline-none focus:ring-1 focus:ring-[#3f78e0] focus:border-transparent leading-[28px] 
                   " type="url" placeholder="Email*" >
                    <div v-if="email.noError" class="absolute top-[16px] right-[16px]">
                     <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check fa-w-16 text-[#198754] w-[20px] h-[20px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                   </div>
                      <div  v-if="email.error" class="absolute top-[16px] right-[16px]">
                     
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-circle" class="svg-inline--fa fa-exclamation-circle fa-w-16 text-[#dc3545] w-[20px] h-[20px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>
                   </div>
                      <span class="text-[#dc3545] text-[14px]"> {{email.error}}</span>
                  <span class="text-[#198754] text-[14px]"> {{email.noError}}</span>
            </div>

            <div class="col-span-12 lg:col-span-6 px-[10px] mb-[20px]  relative">
                <input :class="[{'error-company':company.error},
                {'no-error-company':company.noError}]" @keyup="b('company')" v-model="company.content" class=" bg-[#fff] border p-[10px] w-full
                    focus:outline-none focus:ring-1 focus:ring-[#3f78e0] focus:border-transparent leading-[28px] 
                   " type="url" placeholder="Company*" >
                    <div v-if="company.noError" class="absolute top-[16px] right-[16px]">
                     <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check fa-w-16 text-[#198754] w-[20px] h-[20px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                   </div>
                      <div  v-if="company.error" class="absolute top-[16px] right-[16px]">
                     
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-circle" class="svg-inline--fa fa-exclamation-circle fa-w-16 text-[#dc3545] w-[20px] h-[20px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>
                   </div>
                      <span  class="text-[#dc3545] text-[14px]"> {{company.error}}</span>
                  <span class="text-[#198754] text-[14px]"> {{company.noError}}</span>
            </div>
         
            <div class="col-span-12 px-[10px] mb-[20px]  relative">
           
              <textarea :class="[{'error-text-area':textArea.error},
                {'no-error-text-area':textArea.noError}
                ]" @keyup="b('textArea')" placeholder="Message *" v-model="textArea.content" rows="5"  class="border w-full mt-[20px] pl-[10px] pt-[10px] focus:outline-none focus:ring-1 focus:ring-[#3f78e0]" >
                
              </textarea>
                  <div v-if="textArea.noError" class="absolute top-[26px] right-[16px]">
                     <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check fa-w-16 text-[#198754] w-[20px] h-[20px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                   </div>
                      <div  v-if="textArea.error" class="absolute top-[26px] right-[16px]">
                     
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-circle" class="svg-inline--fa fa-exclamation-circle fa-w-16 text-[#dc3545] w-[20px] h-[20px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>
                   </div>
                <span class="text-[#dc3545] text-[14px]"> {{textArea.error}}</span>
                  <span class="text-[#198754] text-[14px]"> {{textArea.noError}}</span>
            </div>

            <div class="col-span-12 px-[10px]  mt-[20px]  text-center">
             
              <button style="border:2" @click="a" class="bg-[#3f78e0] px-[24px] text-[17px]  py-[14px] text-white font-bold rounded-full  animation_button ">
                 Send message
              </button>
              <p class="mt-[20px] ">* These fields are required.</p>
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
      email:{
        content:'',
        error:'',
        noError:'',
      },
      firstName:{
        content:'',
        error:'',
        noError:'',
      },
      lastName:{
        content:'',
        error:'',
        noError:'',
      },
      company:{
        content:'',
        error:'',
        noError:'',
      },
      textArea:{
         content:'',
        error:'',
        noError:'',
      }

    }
  },

    methods:{
      b(field){

        if(field == 'email'){
          this.validateEmail()
          return
        }
        if(this[field].content == ''){
          this[field].noError = ''
          this[field].error = 'Required fields.'
        }else{
          this[field].error = ''
          this[field].noError = 'Looks good!'
      }
     },

      a(){
     
      if(this.email.content == ''){
        this.email.error = 'Please provide a valid email address.'
      }else{
         this.validateEmail()
      }

      if(this.firstName.content == ''){
        this.firstName.error = 'Please enter your first name.'
      }else{
        this.firstName.error = ''
         this.firstName.noError = 'Looks good!'
      }
      if(this.lastName.content == ''){
        this.lastName.error = 'Please enter your last name.'
      }else{
        this.lastName.error = ''
         this.lastName.noError = 'Looks good!'
      }
      if(this.company.content == ''){
        this.company.error = 'Please enter your company.'
      }else{
        this.company.error = ''
         this.company.noError = 'Looks good!'
      }
      if(this.textArea.content == ''){
        this.textArea.error = 'Please enter your company.'
      }else{
        this.textArea.error = ''
         this.textArea.noError = 'Looks good!'
      }
    },
     validateEmail() {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email.content)) {
            this.email.noError = 'Looks good!'
            this.email.error = ''
        } else {
             this.email.error = 'Please provide a valid email address.'
            this.email.noError = ''
        }
    }
  }
}
</script>

<style>
.contact_form input{
  border-radius: 10px  ;
}
.contact_form textarea{
    border-radius: 10px  ;
}
.contact_form .error-email,
.contact_form .error-last-name,
.contact_form .error-first-name,
.contact_form .error-company,
.contact_form .error-text-area
{
  border: 1px solid #dc3545;
}

.contact_form .no-error-first-name,
.contact_form .no-error-last-name,
.contact_form .no-error-email,
.contact_form .no-error-company,
.contact_form .no-error-text-area
{
   border: 1px solid #198754;
}

</style>