<template>
  <div id="landing-page">
    <Navbar />
    <Gallery v-bind="props"/>
    <Footer />
  </div>
</template>

<script>
import Vue from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Gallery from "../components/Gallery.vue";
import axios from "axios";

export default Vue.extend({
  components: {
    Navbar,
    Gallery,
    Footer,
  },
  created() {
    axios
      .get("https://cms-web-jtk-kartikamilenda.cloud.okteto.net/galleries")
      .then((res) => {
        this.props.items = res.data;
        console.log(this.props.items)
      })
      .catch((err) => {
        console.error(err);
      });
  },
  data() {
    return {
      props: {
        page: 1,
        dialog: false,
        items: [],
        path: "/detail-gallery?id=",
      },
    };
  },
  name: "GalleryView",
});
</script>