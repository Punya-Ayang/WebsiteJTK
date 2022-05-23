<template>
    <div id="landing-page">
        <Navbar />
        <InfoKerjasama />
        <Footer />
    </div>
</template>

<script>
import Vue from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import InfoKerjasama from "../components/InfoKerjasama.vue";

export default Vue.extend({
    components:{
    Navbar,
    Footer,
    InfoKerjasama
},
    name:"InfoKerjasamaView",
});
</script>