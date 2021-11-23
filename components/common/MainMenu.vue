<template>
  <div class="navbar-container">
    <div id="mainNav" class="nav-brand">
      <div class="main-nav ">
        <ul class="flex py-[30px] justify-center">
          <li class="text-[17px] font-bold text-[#343f52] hover:text-[#f79e1c] "
            :class="link.custom_class" 
            v-for="link in menu_links" 
            :key="link.slug">
            <NuxtLink class="p-[1rem]" :to="link.slug" v-if="link.router">{{link.name}}</NuxtLink>
            <a  class=" p-[1rem] font-bold text-[#343f52] hover:text-[#f79e1c]" :href="link.slug" target="_blank" v-else>
          
              {{link.name}}
            </a>
          </li>
        </ul> 
      </div>
    </div>
      
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage:'Home',
      menu_links: [
        {slug: '/', name: 'Home', custom_class: '', router: true},
        {slug: 'about', name: 'About', custom_class: '', router: true},
        {slug: 'pricing', name: 'Pricing', custom_class: '', router: true},
        {slug: 'contact', name: 'Contact', custom_class: '', router: true},
        {slug: 'https://app.a2rev.com', name: 'APP', custom_class: 'app-link', router: false},
        //{slug: 'https://help.a2rev.com/help-center', name: 'Help', custom_class: 'help-link', router: false},
        // {slug: 'https://chrome.google.com/webstore/detail/a2reviews-aliexpressamazo/hpkciffmmkehlgidnpeoagmkghpkdgai', name: 'Add to Chrome', custom_class: 'add-to-chrome', router: false, isChrome: true},
      ],

    }
  },
}
</script>
<style>

</style>