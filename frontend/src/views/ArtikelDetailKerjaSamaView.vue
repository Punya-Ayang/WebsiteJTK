<template>
  <div id="Artikel-Detail-KerjaSama">
    <Navbar />
    <DetailArtikelKerjasama v-bind="props"/>
    <Footer />
  </div>
</template>

<style>
.content-ar {
  padding-top: 20px;
  margin-top: 30px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  text-align: justify;
  font-size: large;
}
</style>

<script>
import Vue from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import DetailArtikelKerjasama from "../components/DetailArtikel.vue";
import axios from "axios";

export default Vue.extend({
  components: {
    Navbar,
    Footer,
    DetailArtikelKerjasama,
  },
  created() {
    const id = this.$route.query.id;
    console.log(id);
    axios
      .get("https://cms-web-jtk-kartikamilenda.cloud.okteto.net/kerja-samas/" + id)
      .then((res) => {
        this.props.item = res.data;
        this.props.item.date = this.props.item.date + " / Kerja Sama";
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
  name: "ArtikelDetailKerjaSama",
});
</script>