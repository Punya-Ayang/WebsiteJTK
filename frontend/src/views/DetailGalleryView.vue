<template>
  <div id="landing-page">
    <Navbar />
    <DetailGallery v-bind="props" />
    <Footer />
  </div>
</template>

<script>
import Vue from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import DetailGallery from "../components/DetailGallery.vue";
import axios from "axios";

export default Vue.extend({
  components: {
    Navbar,
    Footer,
    DetailGallery,
  },
  created() {
    const id = this.$route.query.id;
    console.log(id);
    axios
      .get("https://cms-web-jtk-kartikamilenda.cloud.okteto.net/galleries/" + id)
      .then((res) => {
        this.props.item = res.data;
        this.props.item.media.forEach((Image) => {
            this.props.images.push({src: Image.formats.large.url});
        });
        console.log(this.props.images);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  data: () => ({
    props: {
      item: [],
      images: [],
    },
  }),
  name: "DetailGalleryView",
});
</script>