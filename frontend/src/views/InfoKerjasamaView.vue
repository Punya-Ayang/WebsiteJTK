<template>
  <div id="landing-page">
    <Navbar />
    <InfoKerjasama v-bind="props" />
    <Footer />
  </div>
</template>

<script>
import Vue from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import InfoKerjasama from "../components/InfoKerjasama.vue";
import axios from "axios";

export default Vue.extend({
  components: {
    Navbar,
    Footer,
    InfoKerjasama,
  },
  created() {
    axios
      .get(
        "http://localhost:1337/kerja-samas?_start=0&_limit=2&_sort=date:DESC"
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
      dialog: false,
      path: "/artikel-detail-kerjasama?id=",
      article: {
        title: "Info Kerja Sama",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra posuere volutpat. Etiam nec tortor quis purus fermentum dapibus ac vitae ex. Duis sodales sit amet ex non imperdiet. Vivamus leo ex, pretium et malesuada sed, auctor a libero. Nullam scelerisque feugiat convallis. In eget ullamcorper tortor. Cras nec vestibulum urna. Nullam quis magna quis tellus ultricies interdum. Suspendisse vel bibendum lectus, vitae eleifend enim. Cras tristique est et luctus sollicitudin. Quisque ullamcorper gravida nibh, sed ullamcorper metus pretium quis. Proin vulputate purus at fermentum mattis. Vivamus lobortis mollis convallis. Aenean mattis sed orci non varius. Vivamus elementum luctus fermentum. Maecenas mi diam, varius nec magna vel, pellentesque fermentum magna.Vestibulum condimentum arcu at velit eleifend, eget scelerisque orci fermentum. Nulla imperdiet nunc sit amet turpis ultrices, ac porta lacus dapibus. Sed dignissim, est vitae feugiat faucibus, leo arcu posuere turpis, vel sollicitudin sapien diam a enim. Nam ex arcu, iaculis pharetra fermentum nec, cursus volutpat leo. Vestibulum ullamcorper malesuada mattis. Cras sed nisl ornare, dapibus metus non, consectetur dolor. Donec ligula urna, porttitor vitae ipsum a, eleifend mattis sapien. Curabitur sed lorem ut erat tristique viverra a non orci. Sed enim felis, dignissim sit amet lorem quis, ultrices feugiat ligula. Phasellus faucibus ex a nisl scelerisque molestie. Vivamus vulputate, neque vel sodales luctus, orci elit scelerisque arcu, et elementum enim risus blandit nunc. Fusce ligula dolor, ornare at interdum eu, sodales ac tortor.drerit nisi.",
      },
      items: [],
    },
  }),
  name: "InfoKerjasamaView",
});
</script>