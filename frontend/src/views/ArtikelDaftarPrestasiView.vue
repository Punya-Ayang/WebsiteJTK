<template>
  <div id="landing-page">
    <Navbar />
    <ArtikelDaftarPrestasi v-bind="props" />
    <ShareOn />
    <Footer />
  </div>
</template>

<script>
import Vue from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import ArtikelDaftarPrestasi from "../components/DetailArtikel.vue";
import ShareOn from "../components/ShareOn.vue"
import axios from "axios";

export default Vue.extend({
  components: {
    Navbar,
    Footer,
    ArtikelDaftarPrestasi,
    ShareOn,
  },
  created() {
    const id = this.$route.query.id;
    console.log(id);
    axios
      .get("http://localhost:1337/prestasis/" + id)
      .then((res) => {
        this.props.item = res.data;
        this.props.item.title = this.props.item.judul_prestasi;
        this.props.item.body = this.props.item.deskripsi_prestasi;
        this.props.item.date = this.props.item.tanggal_prestasi;
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
  name: "ArtikelDaftarPrestasiView",
});
</script>