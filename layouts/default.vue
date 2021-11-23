<template>
  <div>
    <TheHeader />
    <Nuxt />
    <TheFooter />
    <div @click="goToTop" class="go_to_top" v-if="toTop">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-up" class="svg-inline--fa fa-arrow-up fa-w-14 w-[20px] h-[20px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path></svg>
    </div>
  </div>
</template>

<script>
import TheHeader from '../components/Header.vue';
import TheFooter from '../components/Footer.vue';

export default {
  head() {
		const linkCss = [
      { rel: 'stylesheet', href: '/css/fonts.css'}
    ]

		const site_scripts = []
		
		return {
			title: this.title,
			meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'Comprehensive customer care solutions.' }
			],
			noscript: [
				{ innerHTML: 'No Scripts, Welcome BazCRM', body: true }
			],
			link: linkCss,
			script: site_scripts
		}

  },

  data() {
    return {
      title: 'BazCRM',
      toTop:false
    }
  }, 
  mounted () {
    window.addEventListener('scroll', this.handleScroll);
  },
 
  methods: {
    handleScroll (event) {
      console.log( window.scrollY)
      window.scrollY > 200 ? this.toTop = true : this.toTop = false
    },

    goToTop(){
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  },
  components: {
    TheHeader,
    TheFooter
  }
}
</script>
<style>
.go_to_top{
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 1px solid #999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.go_to_top:hover{
  cursor: pointer;
}
</style>