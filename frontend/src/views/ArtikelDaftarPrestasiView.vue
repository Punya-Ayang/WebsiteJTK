<template>
    <div id="landing-page">
        <Navbar />
        <ArtikelDaftarPrestasi />
        <Footer />
    </div>
</template>

<script>
import Vue from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import ArtikelDaftarPrestasi from "../components/ArtikelDaftarPrestasi.vue";

export default Vue.extend({
    components:{
    Navbar,
    Footer,
    ArtikelDaftarPrestasi
},
    name:"ArtikelDaftarPrestasiView",
});
</script>