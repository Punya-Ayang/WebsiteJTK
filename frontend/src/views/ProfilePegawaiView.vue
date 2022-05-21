<template>
    <div id="landing-page">
        <Navbar />
        <ProfilePegawai />
        <Footer />
    </div>
</template>

<script>
import Vue from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import ProfilePegawai from "../components/ProfilePegawai.vue";

export default Vue.extend({
    components:{
    Navbar,
    Footer,
    ProfilePegawai
},
    name:"ProfilePegawaiView",
});
</script>