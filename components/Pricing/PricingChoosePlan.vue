<template>
  
 <div class="pricing_chooose">
    <div class="container_pricing_1360">
          <div class="md:px-[35px] px-[15px] col-span-12">
          <p class="text-center text-[16px] font-medium mb-[20px]">Monthly
            <label class="switch mx-[20px]">
              <input type="checkbox">
              <span @click="b()" class="slider round"></span>
            </label>
            <span class="text-[16px]" >Yearly</span>
          </p>

          <div class=" grid  grid-cols-12">
    
             <div class="col-span-12  sm:px-[15px] sm:col-span-6 md:col-span-6  lg:col-span-3">
               <div class="bg-white px-[20px] text-center shadow-lg rounded-[10px] mt-[20px] py-[40px] sm:px-[40px] m-auto lg:px-[20px]">
                 <div class="text-left inline-block ">
                   <div class="w-[50px] h-[50px] block m-auto text-center ">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 412.9"><path class="svg-fill text-[#3f78e0]" d="M453.8 238.1l-9.6 76.3H67.8l-9.6-76.3z"/><circle class="svg-fill  " cx="178.1" cy="149.9" r="35.1"/><circle class="svg-fill" cx="333.9" cy="149.9" r="35.1"/><path class="svg-stroke" d="M498.6 136.5h-60.2c-7.4-.2-13.6 5.7-13.8 13.1-.2 7.4 5.7 13.6 13.1 13.8h11.8l-7.5 61.3H70.1l-7.5-61.3h68.9c7.4 25.7 34.3 40.6 60 33.1 16-4.6 28.5-17.1 33.1-33.1h62.6c7.4 25.7 34.3 40.6 60 33.2 25.7-7.4 40.6-34.3 33.2-60-4.9-17.1-18.9-30.1-36.3-33.9l-39-94.2c-2.8-6.9-10.7-10.1-17.6-7.3s-10.1 10.7-7.3 17.6l35.7 86.2c-14 5.5-24.6 17.2-28.8 31.6h-62.6c-4.2-14.4-14.8-26.1-28.8-31.7l35.7-86.2c2.8-6.9-.4-14.7-7.3-17.6s-14.7.4-17.6 7.3l-39.1 94.2c-17.4 3.8-31.3 16.9-36.2 33.9H13.4C6 136.7.1 142.9.3 150.3c.2 7.1 5.9 12.9 13.1 13.1h22.1l29.8 237.8c.9 6.7 6.6 11.8 13.3 11.8h354.8c6.8 0 12.5-5 13.3-11.8l29.8-237.8h22c7.4-.2 13.3-6.4 13.1-13.8-.2-7.2-5.9-12.9-13-13.1zm-165-8.2c.4 0 .9.1 1.3.1h.7c11.9.9 20.8 11.3 19.9 23.2-.9 11.9-11.3 20.8-23.2 19.9-11.9-.9-20.8-11.3-19.9-23.2.8-11.1 10-19.7 21.2-20zm-157.1.1h.7c.4 0 .9-.1 1.3-.1 11.9.2 21.4 10 21.3 22-.2 11.9-10 21.4-22 21.3-11.9-.2-21.4-10-21.3-22 .2-11.2 8.9-20.4 20-21.2zm-103 123.1h365.1l-6.3 49.5H79.7l-6.2-49.5zM90.4 386L83 327.9h345.9l-7.4 58.1H90.4z"/></svg>
                   </div>
                  <h4 class="text-[17px] text-[black] leading-[2rem] text-center font-bold">Basic Plan</h4>

                  <div :class="[{'price-show':package_term},{'price-hide':package_term == false}]" class="relative w-[172px]"><span class=" font-light text-[25px] top-[17px] absolute ">$</span><span class="text-[3.6rem] font-light  ml-[20px]">9</span>/ month</div>
                  <div :class="[{'price-show':package_term  == false},{'price-hide':package_term}]"  class="relative w-[172px]"><span class=" font-light text-[25px] top-[17px] absolute ">$</span><span class="text-[3.6rem] font-light ml-[20px]">99</span>/ year</div>
                  
                  <ul>
                    <li class="flex mt-[10px]">
                      <div class="w-[20px] h-[20px] rounded-full bg-[#dce7f9] flex justify-center ">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="inline-block svg-inline--fa fa-check fa-w-16 w-[10px]  h-[20px] text-[#3f78e0]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                      </div> 
                      
                      <span  class="font-medium ml-[10px]"><strong>1</strong> Project</span>
                    </li>

                    <li class="flex mt-[10px]">
                      <div class="w-[20px] h-[20px] rounded-full bg-[#dce7f9] flex justify-center ">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="inline-block svg-inline--fa fa-check fa-w-16 w-[10px]  h-[20px] text-[#3f78e0]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                      </div>
                      <span class="font-medium ml-[10px]" ><strong>100k </strong>API Access</span >
                    </li>

                    <li class="flex mt-[10px]">
                      <div class="w-[20px] h-[20px] rounded-full bg-[#dce7f9] flex justify-center ">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="inline-block svg-inline--fa fa-check fa-w-16 w-[10px]  h-[20px] text-[#3f78e0]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                      </div>
                      <span class="font-medium ml-[10px]" ><strong>100MB </strong>Storage</span>
                    </li>

                    <li class="flex mt-[10px]">
                      <div class="w-[20px] h-[20px] rounded-full bg-[#fae3e4] flex justify-center ">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11 w-[10px]  h-[20px] text-[#e2626b]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
                      </div>
                      <span class="font-medium ml-[10px]" >Weekly <strong>Reports </strong></span >
                    </li>

                    <li class="flex mt-[10px]">
                      <div class="w-[20px] h-[20px] rounded-full bg-[#fae3e4]  flex justify-center ">
                       <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11 w-[10px]  h-[20px] text-[#e2626b]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
                      </div>
                      <span class="font-medium ml-[10px]">7/24 <strong>Support</strong> </span >
                    </li>
                  </ul>
                 </div>
               </div>
             </div>

            <div class="col-span-12  sm:px-[15px] sm:col-span-6 md:col-span-6  lg:col-span-3">
               <div class="bg-white px-[20px] text-center shadow-lg rounded-[10px] mt-[20px] py-[40px] sm:px-[40px] m-auto lg:px-[20px]">
                 <div class="text-left inline-block ">
                    <div class="w-[50px] h-[50px] block m-auto text-center ">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 479.8 512"><path class="svg-stroke t-[#3f78e0]" d="M308 512H61.9c-8 0-14.4-6.5-14.4-14.4V227.2c0-4.3 2-8.4 5.4-11.2l178-143.7c5.3-4.3 12.8-4.3 18.1 0L427 216c3.4 2.7 5.4 6.9 5.4 11.2v269.6c-.2 8-6.8 14.3-14.8 14-7.7-.2-13.8-6.4-14-14V234.1L239.9 102 76.3 234.1v249.1H308c8 .2 14.3 6.8 14 14.8-.2 7.6-6.3 13.8-14 14z"/><path class="svg-stroke" d="M465.4 209.8c-3.3 0-6.4-1.1-9-3.2L239.9 32.9 23.5 206.7c-6.2 5-15.3 4-20.3-2.2s-4-15.3 2.2-20.3l225.5-181c5.3-4.2 12.8-4.2 18.1 0l225.5 181c6.2 5 7.2 14.1 2.2 20.3-2.8 3.3-6.9 5.3-11.3 5.3z"/><ellipse transform="rotate(-80.781 239.904 207.686)" class="svg-fill" cx="239.9" cy="207.7" rx="42.9" ry="43"/><path class="svg-stroke" d="M239.9 265.1c-31.7 0-57.4-25.7-57.4-57.4s25.7-57.4 57.4-57.4 57.4 25.7 57.4 57.4c-.1 31.7-25.7 57.3-57.4 57.4zm0-85.9c-15.8 0-28.5 12.8-28.5 28.5s12.8 28.5 28.5 28.5 28.5-12.8 28.5-28.5c0-15.8-12.8-28.5-28.5-28.5z"/><path class="svg-fill" d="M171.8 325.7h136.1v171.9H171.8z"/><path class="svg-stroke" d="M308 512H171.8c-8 0-14.4-6.5-14.4-14.4V325.7c0-8 6.5-14.4 14.4-14.4H308c8 0 14.4 6.5 14.4 14.4v171.9c0 7.9-6.4 14.4-14.4 14.4zm-121.8-28.9h107.3v-143H186.2v143zm234.2-317.7c-7.9 0-14.4-6.5-14.4-14.4V73.3h-28.6c-8 0-14.4-6.5-14.4-14.4s6.5-14.4 14.4-14.4h43c8 0 14.4 6.5 14.4 14.4v92c0 8-6.4 14.4-14.4 14.5 0-.1 0 0 0 0z"/></svg>
                   </div>
                  <h4 class="text-[17px] text-center text-[black] leading-[2rem] font-bold">Premium Plan</h4>

                  <div :class="[{'price-show':package_term},{'price-hide':package_term == false}]" class="relative w-[172px]"><span class="font-light text-[25px] top-[17px] absolute ">$</span><span class="text-[3.6rem] font-light ml-[20px]">19</span>/ month</div>
                  <div :class="[{'price-show':package_term  == false},{'price-hide':package_term}]"  class="relative w-[172px]"><span class="font-light  text-[25px] top-[17px] absolute ">$</span><span class="text-[3.6rem] font-light ml-[20px]">199</span>/ year</div>
                  
                  <ul>
                    <li class="flex mt-[10px]">
                      <div class="w-[20px] h-[20px] rounded-full bg-[#dce7f9] flex justify-center ">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="inline-block svg-inline--fa fa-check fa-w-16 w-[10px]  h-[20px] text-[#3f78e0]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                      </div> 
                      
                      <span  class="font-medium ml-[10px]"><strong>1</strong> Project</span>
                    </li>

                    <li class="flex mt-[10px]">
                      <div class="w-[20px] h-[20px] rounded-full bg-[#dce7f9] flex justify-center ">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="inline-block svg-inline--fa fa-check fa-w-16 w-[10px]  h-[20px] text-[#3f78e0]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                      </div>
                      <span class="font-medium ml-[10px]" ><strong>100k </strong>API Access</span >
                    </li>

                    <li class="flex mt-[10px]">
                      <div class="w-[20px] h-[20px] rounded-full bg-[#dce7f9] flex justify-center ">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="inline-block svg-inline--fa fa-check fa-w-16 w-[10px]  h-[20px] text-[#3f78e0]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                      </div>
                      <span class="font-medium ml-[10px]" ><strong>100MB </strong>Storage</span>
                    </li>

                    <li class="flex mt-[10px]">
                      <div class="w-[20px] h-[20px] rounded-full bg-[#dce7f9] flex justify-center ">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="inline-block svg-inline--fa fa-check fa-w-16 w-[10px]  h-[20px] text-[#3f78e0]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                      </div>
                      <span class="font-medium ml-[10px]" >Weekly <strong>Reports </strong></span >
                    </li>

                    <li class="flex mt-[10px]">
                      <div class="w-[20px] h-[20px] rounded-full bg-[#fae3e4]  flex justify-center ">
                       <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11 w-[10px]  h-[20px] text-[#e2626b]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
                      </div>
                      <span class="font-medium ml-[10px]">7/24 <strong>Support</strong> </span >
                    </li>
                  </ul>
                 </div>
               </div>
             </div>

                          <div class="col-span-12  sm:px-[15px] sm:col-span-6 md:col-span-6  lg:col-span-3">
               <div class="bg-white px-[20px] text-center shadow-lg rounded-[10px] mt-[20px] py-[40px] sm:px-[40px] m-auto lg:px-[20px]">
                 <div class="text-left inline-block ">
                    <div class="w-[50px] h-[50px] block m-auto text-center ">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 412.9"><path class="svg-fill text-[#3f78e0]" d="M453.8 238.1l-9.6 76.3H67.8l-9.6-76.3z"/><circle class="svg-fill  " cx="178.1" cy="149.9" r="35.1"/><circle class="svg-fill" cx="333.9" cy="149.9" r="35.1"/><path class="svg-stroke" d="M498.6 136.5h-60.2c-7.4-.2-13.6 5.7-13.8 13.1-.2 7.4 5.7 13.6 13.1 13.8h11.8l-7.5 61.3H70.1l-7.5-61.3h68.9c7.4 25.7 34.3 40.6 60 33.1 16-4.6 28.5-17.1 33.1-33.1h62.6c7.4 25.7 34.3 40.6 60 33.2 25.7-7.4 40.6-34.3 33.2-60-4.9-17.1-18.9-30.1-36.3-33.9l-39-94.2c-2.8-6.9-10.7-10.1-17.6-7.3s-10.1 10.7-7.3 17.6l35.7 86.2c-14 5.5-24.6 17.2-28.8 31.6h-62.6c-4.2-14.4-14.8-26.1-28.8-31.7l35.7-86.2c2.8-6.9-.4-14.7-7.3-17.6s-14.7.4-17.6 7.3l-39.1 94.2c-17.4 3.8-31.3 16.9-36.2 33.9H13.4C6 136.7.1 142.9.3 150.3c.2 7.1 5.9 12.9 13.1 13.1h22.1l29.8 237.8c.9 6.7 6.6 11.8 13.3 11.8h354.8c6.8 0 12.5-5 13.3-11.8l29.8-237.8h22c7.4-.2 13.3-6.4 13.1-13.8-.2-7.2-5.9-12.9-13-13.1zm-165-8.2c.4 0 .9.1 1.3.1h.7c11.9.9 20.8 11.3 19.9 23.2-.9 11.9-11.3 20.8-23.2 19.9-11.9-.9-20.8-11.3-19.9-23.2.8-11.1 10-19.7 21.2-20zm-157.1.1h.7c.4 0 .9-.1 1.3-.1 11.9.2 21.4 10 21.3 22-.2 11.9-10 21.4-22 21.3-11.9-.2-21.4-10-21.3-22 .2-11.2 8.9-20.4 20-21.2zm-103 123.1h365.1l-6.3 49.5H79.7l-6.2-49.5zM90.4 386L83 327.9h345.9l-7.4 58.1H90.4z"/></svg>
                   </div>
                  <h4 class="text-[17px] text-center text-[black] leading-[2rem] font-bold">Corporate Plan</h4>

                  <div :class="[{'price-show':package_term},{'price-hide':package_term == false}]" class="relative w-[172px]"><span class="font-light text-[25px] top-[17px] absolute ">$</span><span class="text-[3.6rem] font-light ml-[20px]">49</span>/ month</div>
                  <div :class="[{'price-show':package_term  == false},{'price-hide':package_term}]"  class="relative w-[172px]"><span class="font-light  text-[25px] top-[17px] absolute ">$</span><span class="text-[3.6rem] font-light ml-[20px]">499</span>/ year</div>
                  
                  <ul>
                    <li class="flex mt-[10px]">
                      <div class="w-[20px] h-[20px] rounded-full bg-[#dce7f9] flex justify-center ">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="inline-block svg-inline--fa fa-check fa-w-16 w-[10px]  h-[20px] text-[#3f78e0]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                      </div> 
                      
                      <span  class="font-medium ml-[10px]"><strong>1</strong> Project</span>
                    </li>

                    <li class="flex mt-[10px]">
                      <div class="w-[20px] h-[20px] rounded-full bg-[#dce7f9] flex justify-center ">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="inline-block svg-inline--fa fa-check fa-w-16 w-[10px]  h-[20px] text-[#3f78e0]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                      </div>
                      <span class="font-medium ml-[10px]" ><strong>100k </strong>API Access</span >
                    </li>

                    <li class="flex mt-[10px]">
                      <div class="w-[20px] h-[20px] rounded-full bg-[#dce7f9] flex justify-center ">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="inline-block svg-inline--fa fa-check fa-w-16 w-[10px]  h-[20px] text-[#3f78e0]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                      </div>
                      <span class="font-medium ml-[10px]" ><strong>100MB </strong>Storage</span>
                    </li>

                    <li class="flex mt-[10px]">
                      <div class="w-[20px] h-[20px] rounded-full bg-[#dce7f9] flex justify-center ">
                         <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="inline-block svg-inline--fa fa-check fa-w-16 w-[10px]  h-[20px] text-[#3f78e0]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                      </div>
                      <span class="font-medium ml-[10px]" >Weekly <strong>Reports </strong></span >
                    </li>

                    <li class="flex mt-[10px]">
                      <div class="w-[20px] h-[20px] rounded-full bg-[#fae3e4]  flex justify-center ">
                       <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11 w-[10px]  h-[20px] text-[#e2626b]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
                      </div>
                      <span class="font-medium ml-[10px]">7/24 <strong>Support</strong> </span >
                    </li>
                  </ul>
                 </div>
               </div>
             </div>

              <div class="col-span-12  sm:px-[15px] sm:col-span-6 md:col-span-6  lg:col-span-3">
               <div class="bg-white px-[20px] text-center shadow-lg rounded-[10px] mt-[20px] py-[40px] sm:px-[40px] m-auto lg:px-[20px]">
                 <div class="text-left inline-block ">
                    <div class="w-[50px] h-[50px] block m-auto text-center ">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 412.9"><path class="svg-fill text-[#3f78e0]" d="M453.8 238.1l-9.6 76.3H67.8l-9.6-76.3z"/><circle class="svg-fill  " cx="178.1" cy="149.9" r="35.1"/><circle class="svg-fill" cx="333.9" cy="149.9" r="35.1"/><path class="svg-stroke" d="M498.6 136.5h-60.2c-7.4-.2-13.6 5.7-13.8 13.1-.2 7.4 5.7 13.6 13.1 13.8h11.8l-7.5 61.3H70.1l-7.5-61.3h68.9c7.4 25.7 34.3 40.6 60 33.1 16-4.6 28.5-17.1 33.1-33.1h62.6c7.4 25.7 34.3 40.6 60 33.2 25.7-7.4 40.6-34.3 33.2-60-4.9-17.1-18.9-30.1-36.3-33.9l-39-94.2c-2.8-6.9-10.7-10.1-17.6-7.3s-10.1 10.7-7.3 17.6l35.7 86.2c-14 5.5-24.6 17.2-28.8 31.6h-62.6c-4.2-14.4-14.8-26.1-28.8-31.7l35.7-86.2c2.8-6.9-.4-14.7-7.3-17.6s-14.7.4-17.6 7.3l-39.1 94.2c-17.4 3.8-31.3 16.9-36.2 33.9H13.4C6 136.7.1 142.9.3 150.3c.2 7.1 5.9 12.9 13.1 13.1h22.1l29.8 237.8c.9 6.7 6.6 11.8 13.3 11.8h354.8c6.8 0 12.5-5 13.3-11.8l29.8-237.8h22c7.4-.2 13.3-6.4 13.1-13.8-.2-7.2-5.9-12.9-13-13.1zm-165-8.2c.4 0 .9.1 1.3.1h.7c11.9.9 20.8 11.3 19.9 23.2-.9 11.9-11.3 20.8-23.2 19.9-11.9-.9-20.8-11.3-19.9-23.2.8-11.1 10-19.7 21.2-20zm-157.1.1h.7c.4 0 .9-.1 1.3-.1 11.9.2 21.4 10 21.3 22-.2 11.9-10 21.4-22 21.3-11.9-.2-21.4-10-21.3-22 .2-11.2 8.9-20.4 20-21.2zm-103 123.1h365.1l-6.3 49.5H79.7l-6.2-49.5zM90.4 386L83 327.9h345.9l-7.4 58.1H90.4z"/></svg>
                   </div>
                  <h4 class="text-[17px] text-center text-[black] leading-[2rem] font-bold">Corporate Plan</h4>

                  <div :class="[{'price-show':package_term},{'price-hide':package_term == false}]" class="relative w-[172px] "><span class="font-light text-[25px] top-[17px] absolute ">$</span><span class="text-[3.6rem] font-light ml-[20px]">199</span>/ month</div>
                  <div :class="[{'price-show':package_term  == false},{'price-hide':package_term}]"  class="relative w-[172px]"><span class="font-light  text-[25px] top-[17px] absolute ">$</span><span class="text-[3.6rem] font-light ml-[20px]">999</span>/ year</div>
                  
                  <ul>
                    <li class="flex mt-[10px]">
                      <div class="w-[20px] h-[20px] rounded-full bg-[#dce7f9] flex justify-center ">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="inline-block svg-inline--fa fa-check fa-w-16 w-[10px]  h-[20px] text-[#3f78e0]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                      </div> 
                      
                      <span  class="font-medium ml-[10px]"><strong>1</strong> Project</span>
                    </li>

                    <li class="flex mt-[10px]">
                      <div class="w-[20px] h-[20px] rounded-full bg-[#dce7f9] flex justify-center ">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="inline-block svg-inline--fa fa-check fa-w-16 w-[10px]  h-[20px] text-[#3f78e0]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                      </div>
                      <span class="font-medium ml-[10px]" ><strong>100k </strong>API Access</span >
                    </li>

                    <li class="flex mt-[10px]">
                      <div class="w-[20px] h-[20px] rounded-full bg-[#dce7f9] flex justify-center ">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="inline-block svg-inline--fa fa-check fa-w-16 w-[10px]  h-[20px] text-[#3f78e0]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                      </div>
                      <span class="font-medium ml-[10px]" ><strong>100MB </strong>Storage</span>
                    </li>

                    <li class="flex mt-[10px]">
                      <div class="w-[20px] h-[20px] rounded-full bg-[#dce7f9] flex justify-center ">
                         <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="inline-block svg-inline--fa fa-check fa-w-16 w-[10px]  h-[20px] text-[#3f78e0]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                      </div>
                      <span class="font-medium ml-[10px]" >Weekly <strong>Reports </strong></span >
                    </li>

                    <li class="flex mt-[10px]">
                      <div class="w-[20px] h-[20px] rounded-full bg-[#dce7f9]  flex justify-center ">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="inline-block svg-inline--fa fa-check fa-w-16 w-[10px]  h-[20px] text-[#3f78e0]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                      </div>
                      <span class="font-medium ml-[10px]">7/24 <strong>Support</strong> </span >
                    </li>
                  </ul>
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
           package_term:true,
     pricing:[
       {
         price:'19',
         priceYear:'199',
         title:'Premium Plan',
         projects:'5 Projects',
         access:'100k API Access',
         storage:'200MB Storage',
         reports:'Reports Weekly',
         support:'Support 7/24',
       },
           {
         price:'49',
         priceYear:'499',
         title:'Corporate Plan',
          projects:'5 Projects',
         access:'100k API Access',
         storage:'200MB Storage',
         reports:'Reports Weekly',
         support:'Support 7/24',
       },
              {
         price:'49',
         priceYear:'499',
         title:'Corporate Plan',
          projects:'5 Projects',
         access:'100k API Access',
         storage:'200MB Storage',
         reports:'Reports Weekly',
         support:'Support 7/24',
       },
                {
         price:'49',
         priceYear:'499',
         title:'Corporate Plan',
          projects:'5 Projects',
         access:'100k API Access',
         storage:'200MB Storage',
         reports:'Reports Weekly',
         support:'Support 7/24',
       },
     ]
    }
  },

   methods:{
   b(){
     this.package_term = !this.package_term
     console.log(this.a)
   }
 }
}
</script>

<style>
.pricing_chooose{
  position: relative;
  top: -12rem;
}
</style>