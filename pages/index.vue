<template>
  <div id="home_page">
    <HomeSection1 />
    <HomeSection2 />
    <HomeSection3 />
    <HomeSection4 />
    <HomeSection5 />
    <HomeSection6 />
    <HomeSection7 />
    <HomeSection8 />
    <HomeSection9 />
    <HomeSection10 />

    <!-- <Tutorial/> -->
  </div>
</template>

<script>
import HomeSection1 from "~/components/Home/HomeSection1.vue";
import HomeSection2 from "~/components/Home/HomeSection2.vue";
import HomeSection3 from "~/components/Home/HomeSection3.vue";
import HomeSection4 from "~/components/Home/HomeSection4.vue";
import HomeSection5 from "~/components/Home/HomeSection5.vue";
import HomeSection6 from "~/components/Home/HomeSection6.vue";
import HomeSection7 from "~/components/Home/HomeSection7.vue";
import HomeSection8 from "~/components/Home/HomeSection8.vue";
import HomeSection9 from "~/components/Home/HomeSection9.vue";
import HomeSection10 from "~/components/Home/HomeSection10.vue";

export default {
  data() {
    return {};
  },

  components: {
    HomeSection1,
    HomeSection2,
    HomeSection3,
    HomeSection4,
    HomeSection5,
    HomeSection6,
    HomeSection7,
    HomeSection8,
    HomeSection9,
    HomeSection10
  }
};
</script>
<style>
#home_page {
  font-family: THICCCBOI, "Open Sans", sans-serif;
  color: #60697b;
  
}
</style>
