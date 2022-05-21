<template>
    <div id="landing-page">
        <Navbar />
        <ProdD3 />
        <Footer />
    </div>
</template>

<script>
import Vue from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import ProdD3 from "../components/ProdD3.vue";

export default Vue.extend({
    components:{
    Navbar,
    ProdD3,
    Footer
},
    name:"ProfileProdD3View",
});
</script>