<template>
    <div id="landing-page">
        <Navbar />
        <SaranaPrasarana />
        <Footer />
    </div>
</template>

<script>
import Vue from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import SaranaPrasarana from "../components/SaranaPrasarana.vue";

export default Vue.extend({
    components:{
    Navbar,
    Footer,
    SaranaPrasarana
},
    name:"SaranaPrasaranaView",
});
</script>