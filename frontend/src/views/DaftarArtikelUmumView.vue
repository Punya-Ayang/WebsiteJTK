<template>
  <div id="daftar-prestasi">
    <Navbar />
    <DaftarArtikelUmum v-bind="props" />
    <Footer />
  </div>
</template>

<script>
import Vue from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import DaftarArtikelUmum from "../components/Daftar.vue";
import axios from "axios";

export default Vue.extend({
  components: {
    Navbar,
    Footer,
    DaftarArtikelUmum,
  },
  created() {
    axios
      .get("https://cms-web-jtk-kartikamilenda.cloud.okteto.net/artikels")
      .then((res) => {
        this.props.items = res.data;
        this.props.items.forEach(artikel => {
          artikel.body = artikel.body.slice(0,300) + "...";
          console.log(artikel.body);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  },
  data() {
    return {
      props: {
        title: "Artikel",
        page: 1,
        dialog: false,
        items: [],
        path: "/detail-artikel-umum?id="
      },
    };
  },
  name: "DaftarPrestasiJTKView",
});
</script>