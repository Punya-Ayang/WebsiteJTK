<template>
    <div id="landing-page">
        <Navbar />
        <DetailArtikelUmum />
        <Footer />
    </div>
</template>

<script>
import Vue from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import DetailArtikelUmum from "../components/DetailArtikelUmum.vue";

export default Vue.extend({
    components:{
    Navbar,
    DetailArtikelUmum,
    Footer
},
    name:"DetailArtikelUmumView",
});
</script>