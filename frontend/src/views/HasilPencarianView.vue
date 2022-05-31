<template>
  <div id="hasil-pencarian">
    <Navbar />
    <div v-if="props.items.length === 1 && props.items[0].title === ''">
      <DaftarPencarian
        v-bind="props"
      />
    </div>
    <div v-else>
      <DaftarPencarian v-bind="props" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Vue from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import DaftarPencarian from "../components/Daftar.vue";
import axios from "axios";

export default Vue.extend({
  components: {
    Navbar,
    Footer,
    DaftarPencarian,
  },
  async beforeCreate() {
    this.search = this.$route.query.search;
    console.log(this.search);
    await axios
      .get("http://localhost:1337/artikels?title_contains=" + this.search)
      .then((res) => {
        this.props.items = res.data;
        this.props.items.forEach(artikel => {
          artikel.body = artikel.body.slice(0,300) + "...";
        });
        console.log(this.props.items);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  data() {
    return {
      props: {
        title: "Hasil Pencarian",
        subtitle: "Menampilkan Hasil Pencarian dari " + this.search,
        page: 1,
        dialog: false,
        items: [{
          banner: {
            url: 'https://res.cloudinary.com/marssn/image/upload/v1653719265/DIG_Ibanner_732784414a.jpg' 
          },
          title: '',
          body: '',
          date: '',
          id: ''
        }],
        path: "http://localhost:8080/detail-artikel-umum?id=",
      },
    };
  },
  name: "HasilPencarianView",
});
</script>