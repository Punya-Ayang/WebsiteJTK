<template>
    <div id="landing-page">
        <Navbar />
        <landingPg />
        <ArtikelLp />
        <TentangjtkLp />
        <AkademikLp />
        <AgendaLp />
        <GalleryLp />
        <Footer />
    </div>
</template>

<script>
import Vue from "vue";
import Navbar from "../components/Navbar.vue";
import landingPg from "../components/landing-page/landingPg.vue";
import ArtikelLp from "../components/landing-page/ArtikelLp.vue";
import Footer from "../components/Footer.vue";
import TentangjtkLp from "../components/landing-page/TentangjtkLp.vue";
import AkademikLp from "../components/landing-page/AkademikLp.vue";
import AgendaLp from "../components/landing-page/AgendaLp.vue";
import GalleryLp from "../components/landing-page/GalleryLp.vue";

export default Vue.extend({
    components:{
    Navbar,
    landingPg,
    ArtikelLp,
    Footer,
    TentangjtkLp,
    AkademikLp,
    AgendaLp,
    GalleryLp
},
    name:"LandingPage",
});
</script>