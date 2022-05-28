<template>
  <div id="landing-page">
    <Navbar />
    <DetailArtikel v-bind="props" />
    <ShareOn />
    <Footer />
  </div>
</template>

<script>
import Vue from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import DetailArtikel from "../components/DetailArtikel.vue";
import ShareOn from "../components/ShareOn.vue";
import axios from "axios";

export default Vue.extend({
  components: {
    Navbar,
    DetailArtikel,
    Footer,
    ShareOn
  },
  created() {
    const id = this.$route.query.id;
    console.log(id);
    axios
      .get("http://localhost:1337/artikels/" + id)
      .then((res) => {
        this.props.item = res.data;
        console.log(this.props.item);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  data: () => ({
    props: {
      item: [],
    },
  }),
  name: "DetailArtikelUmumView",
});
</script>