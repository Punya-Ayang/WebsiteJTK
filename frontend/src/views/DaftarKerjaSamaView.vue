<template>
  <div id="daftar-prestasi">
    <Navbar />
    <DaftarArtikelUmum v-bind="props"/>
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
      .get(
        "http://localhost:1337/kerja-samas"
      )
      .then((res) => {
        this.props.items = res.data;
        this.props.items.forEach((artikel) => {
          artikel.body = artikel.body.slice(0, 300) + "...";
          console.log(artikel.body);
        });
        console.log(this.props.items);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  data: () => ({
    props: {
        title: "Info Kerja Sama",
        page: 1,
        dialog: false,
        items: [],
        path: "/artikel-detail-kerjasama?id=",
    },
  }),
  name: "DaftarPrestasiJTKView",
});
</script>