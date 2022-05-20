<template>
    <div id="landing-page">
        <Navbar />
        <landingPg />
        <Footer />
    </div>
</template>

<script>
import Vue from "vue";
import Navbar from "../components/Navbar.vue";
import landingPg from "../components/landing-page/landingPg.vue";
import Footer from "../components/Footer.vue";

export default Vue.extend({
    components:{
        Navbar,
        landingPg,
        Footer
    },
    name:"LandingPage",
});
</script>