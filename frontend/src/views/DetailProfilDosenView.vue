<template>
  <div id="landing-page">
    <Navbar />
    <DetailProfilDosen v-bind="props" />
    <Footer />
  </div>
</template>

<script>
import Vue from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import DetailProfilDosen from "../components/DetailProfil.vue";
import axios from "axios";

export default Vue.extend({
  components: {
    Navbar,
    Footer,
    DetailProfilDosen,
  },
  created() {
    const id = this.$route.query.id;
    console.log(id);
    axios
      .get("https://cms-web-jtk-kartikamilenda.cloud.okteto.net/dosens/" + id)
      .then((res) => {
        this.props.items = res.data;
        console.log(this.props.items);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  data() {
    return {
      props: {
        title: "Detail Profil Dosen",
        page: 1,
        dialog: false,
        items: [],
      },
    };
  },
  name: "DetailProfilDosenView",
});
</script>