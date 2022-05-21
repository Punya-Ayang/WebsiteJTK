<template>
    <div id="landing-page">
        <Navbar />
        <ProfileTendik />
        <Footer />
    </div>
</template>

<script>
import Vue from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import ProfileTendik from "../components/ProfileTendik.vue";

export default Vue.extend({
    components:{
    Navbar,
    Footer,
    ProfileTendik
},
    name:"ProfileTendikView",
});
</script>