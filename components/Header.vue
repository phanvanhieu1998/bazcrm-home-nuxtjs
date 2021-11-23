<template>
  <div class="bg-[#fff8ef]">
    <div class="navbar-container">
      <div class="header-menu" data-sticky="top">
        <div  id="header" class="container">
         
            <div class="logo">
              <h1>LOGO</h1>
            </div>

            <div class="menu">
               <div ><MainMenu/></div>
            </div>

               <div class="hide_show">
                 <MainMenuMobile/>
               </div>
            
          
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import MainMenu from '~/components/common/MainMenu.vue'
import MainMenuMobile from '~/components/common/MainMenuMobile.vue'
// import Logo from '~/components/Logo.vue'

export default {
  data() {
    return {
      
    }
  },

  components: {
    MainMenu,
    MainMenuMobile
  }
}
</script>
<style>
#header{
  display: flex;
  justify-content: space-between;
}
/* #header div:nth-of-type(1) {flex-grow: 1;}
#header div:nth-of-type(2) {flex-grow: 2;}
#header div:nth-of-type(3) {flex-grow: 1;} */
.nav_right{
  position: relative;
}
</style>