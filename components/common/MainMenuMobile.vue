<template>
  <div class="nav_mobile">
    <span @click="openNav()" class="open_nav">☰</span>
    <div id="special_menu" ref="nav_mobile" class="overlay">
      <span @click="closeNav()" class="close_nav">x</span>
      <div id="wprmenu_menu" class="wprmenu_levels top wprmenu_custom_icons x">
        <ul id="wprmenu_menu_ul">
          <li  @click="closeNav()" 
            class="border-b py-[20px] px-[5px]"
            :class="link.custom_class"
            v-for="link in menu_links"
            :key="link.slug"
          >
            <NuxtLink
              class="text-[white] "
              :to="link.slug"
              v-if="link.router"
              >{{ link.name }}</NuxtLink
            >
            <a class="text-[white] " @click="closeNav()"  :href="link.slug" target="_blank" v-else>
              {{ link.name }}
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
      menu_links: [
        { slug: "/", name: "Home", custom_class: "", router: true },
        { slug: "about", name: "About", custom_class: "", router: true },
        { slug: "pricing", name: "Pricing", custom_class: "", router: true },
        { slug: "contact", name: "Contact", custom_class: "", router: true },
        {
          slug: "https://app.a2rev.com",
          name: "APP",
          custom_class: "app-link",
          router: false
        }
        //{slug: 'https://help.a2rev.com/help-center', name: 'Help', custom_class: 'help-link', router: false},
        // {slug: 'https://chrome.google.com/webstore/detail/a2reviews-aliexpressamazo/hpkciffmmkehlgidnpeoagmkghpkdgai', name: 'Add to Chrome', custom_class: 'add-to-chrome', router: false, isChrome: true},
      ]
    };
  },

  methods: {
    openNav() {
      this.$refs.nav_mobile.style.width = "300px";
    },
    closeNav() {
      console.log('x')
      this.$refs.nav_mobile.style.width = "0";
    }
  }
};
</script>

<style>
.nav_mobile .close_nav {
  color: white;
  font-size: 30px;
  position: absolute;
  right: 10px;
  top: 0;
  z-index: 1;
}

.nav_mobile .open_nav {
  position: absolute;
  right: 10px;
  top: 0;
  font-size: 30px;
  cursor: pointer;
  color: black;
}
.overlay {
  height: auto;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
  overflow: hidden;
  transition: 0.5s;
}
</style>
