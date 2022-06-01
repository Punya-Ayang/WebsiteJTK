<template>
  <div id="daftar-prestasi">
    <Navbar />
    <DaftarPrestasiJTK v-bind="props" />
    <Footer />
  </div>
</template>

<script>
import Vue from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import DaftarPrestasiJTK from "../components/Daftar.vue";
import axios from "axios";

export default Vue.extend({
  components: {
    Navbar,
    Footer,
    DaftarPrestasiJTK,
  },
  created() {
    axios
      .get("https://cms-web-jtk-kartikamilenda.cloud.okteto.net/prestasis")
      .then((res) => {
        this.props.items = res.data;
        this.props.items.forEach(artikel => {
          artikel.title = artikel.judul_prestasi;
          artikel.body = artikel.deskripsi_prestasi.slice(0,300) + "...";
          artikel.date = artikel.tanggal_prestasi;
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
        title: "Daftar Prestasi JTK",
        page: 1,
        dialog: false,
        items: [],
        path: "/artikel-daftar-prestasi?id="
      },
    };
  },
  name: "DaftarPrestasiJTKView",
});
</script>