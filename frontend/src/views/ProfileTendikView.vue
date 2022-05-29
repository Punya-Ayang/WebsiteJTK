<template>
  <div id="landing-page">
    <Navbar />
    <ProfileTendik v-bind="props"/>
    <Footer />
  </div>
</template>

<script>
import Vue from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import ProfileTendik from "../components/ProfileTendik.vue";
import axios from "axios";

export default Vue.extend({
  components: {
    Navbar,
    Footer,
    ProfileTendik,
  },
  created() {
    axios
      .get("http://localhost:1337/tendiks")
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
        items: [],
      },
    };
  },
  name: "ProfileTendikView",
});
</script>