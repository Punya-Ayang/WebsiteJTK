<template>
    <div id="landing-page">
        <Navbar />
        <ProdD4 />
        <Footer />
    </div>
</template>

<script>
import Vue from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import ProdD4 from "../components/ProdD4.vue";

export default Vue.extend({
    components:{
    Navbar,
    ProdD4,
    Footer
},
    name:"ProfileProdD4View",
});
</script>