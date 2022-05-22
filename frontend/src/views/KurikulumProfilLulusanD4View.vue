<template>
    <div id="landing-page">
        <Navbar />
        <KurikulumProfilLulusanD4 />
        <Footer />
    </div>
</template>

<script>
import Vue from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import KurikulumProfilLulusanD4 from "../components/KurikulumProfilLulusanD4.vue";

export default Vue.extend({
    components:{
    Navbar,
    Footer,
    KurikulumProfilLulusanD4
},
    name:"KurikulumProfilLulusanD4View",
});
</script>