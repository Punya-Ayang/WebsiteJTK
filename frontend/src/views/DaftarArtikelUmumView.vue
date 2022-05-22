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

export default Vue.extend({
  components: {
    Navbar,
    Footer,
    DaftarArtikelUmum,
  },
  data() {
    return {
      props: {
        title: "Artikel",
        page: 1,
        dialog: false,
        items: [
          {
            src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
            title: "JTK Memperoleh 3 Medali pada PIMNAS",
            artist: "09/05/2022 / Kejuaraan",
            Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra posuere volutpat. Etiam nec tortor quis purus fermentum dapibus ac vitae ex. Duis sodales sit amet ex non imperdiet. Vivamus leo ex, pretium et malesuada sed, auctor a libero. Nullam scelerisque feugiat convallis. In eget ullamcorper tortor. Cras nec vestibulum urna. Nullam quis magna quis tellus ultricies interdum. Suspendisse vel bibendum lectus, vitae eleifend enim. ",
          },
          {
            src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
            title: "JTK Memperoleh 3 Medali pada PIMNAS",
            artist: "09/05/2022 / Kejuaraan",
            Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra posuere volutpat. Etiam nec tortor quis purus fermentum dapibus ac vitae ex. Duis sodales sit amet ex non imperdiet. Vivamus leo ex, pretium et malesuada sed, auctor a libero. Nullam scelerisque feugiat convallis. In eget ullamcorper tortor. Cras nec vestibulum urna. Nullam quis magna quis tellus ultricies interdum. Suspendisse vel bibendum lectus, vitae eleifend enim. ",
          },
          {
            src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
            title: "JTK Memperoleh 3 Medali pada PIMNAS",
            artist: "09/05/2022 / Kejuaraan",
            Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra posuere volutpat. Etiam nec tortor quis purus fermentum dapibus ac vitae ex. Duis sodales sit amet ex non imperdiet. Vivamus leo ex, pretium et malesuada sed, auctor a libero. Nullam scelerisque feugiat convallis. In eget ullamcorper tortor. Cras nec vestibulum urna. Nullam quis magna quis tellus ultricies interdum. Suspendisse vel bibendum lectus, vitae eleifend enim. ",
          },
          {
            src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
            title: "JTK Memperoleh 3 Medali pada PIMNAS",
            artist: "09/05/2022 / Kejuaraan",
            Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra posuere volutpat. Etiam nec tortor quis purus fermentum dapibus ac vitae ex. Duis sodales sit amet ex non imperdiet. Vivamus leo ex, pretium et malesuada sed, auctor a libero. Nullam scelerisque feugiat convallis. In eget ullamcorper tortor. Cras nec vestibulum urna. Nullam quis magna quis tellus ultricies interdum. Suspendisse vel bibendum lectus, vitae eleifend enim. ",
          },
        ],
      },
    };
  },
  name: "DaftarPrestasiJTKView",
});
</script>