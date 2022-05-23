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

export default Vue.extend({
  components: {
    Navbar,
    Footer,
    DetailProfilDosen,
  },
  data() {
    return {
      props: {
        title: "Detail Profil Dosen",
        subtitle: "Menampilkan Hasil Pencarian dari “PIMNAS”",
        page: 1,
        dialog: false,
        items: {
          src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          nama: "Santi Sundari",
          nip: "19710903199932001",
          email: "santi@jtk.polban.ac.id",
          no_hp: "081234567891011",
          kbk: "Multimedia",
          mk: [
            {
              matkul: "Pengembangan Perangkat Lunak",
              sks: "4",
            },
            {
              matkul: "Struktur Data dan Algoritma",
              sks: "4",
            },
            {
              matkul: "Aplikasi dan Perancangan Perangkat Lunak 1",
              sks: "4",
            },
          ],
          pglmn: [
            {
              pengalaman: "Aplikasi Materi Pembelajaran",
              jenis: "Produk",
            },
            {
              pengalaman: "Penghargaan Dosen Terbaik",
              jenis: "Penghargaan",
            },
          ],
          pub: [
            {
              publikasi: "Efektivitas Penggunaan Algoritma xxx ",
              link: "google.scholar.com",
            },
            {
              publikasi: "Pengaruh Graphic Card pada Game RPG",
              link: "google.scholar.com",
            },
          ],
        },
      },
    };
  },
  name: "DetailProfilDosenView",
});
</script>