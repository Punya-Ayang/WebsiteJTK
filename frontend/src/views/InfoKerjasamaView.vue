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
        "https://cms-web-jtk-kartikamilenda.cloud.okteto.net/kerja-samas?_start=0&_limit=2&_sort=date:DESC"
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
        Text: "Perkembangan industri yang pesat menuntut dihasilkannya lulusan yang kompeten dan siap mengaplikasikan ilmunya di dunia kerja. Untuk memenuhi tuntutan industri akan tenaga kerja yang kompeten, JTK Polban menyelenggarakan sistem pendidikan kemitraan atau yang dikenal dengan kelas kerja sama. Kerja dama industri ini diharapkan dapat meningkatkan daya minat Mahasiswa terhadap perkembangan industri saat ini. Kerja sama ini, dapat memberikan manfaat bagi perusahaan yang bekerja sama juga bagi mahasiswa yang ingin mengajukan dirinya terjun langsung ke dalam dunia perindustrian. ",
      },
      items: [],
    },
  }),
  name: "InfoKerjasamaView",
});
</script>