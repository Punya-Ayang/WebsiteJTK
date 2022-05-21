<template>
    <div id="landing-page">
        <Navbar />
        <DaftarPrestasiJTK />
        <Footer />
    </div>
</template>

<script>
import Vue from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import DaftarPrestasiJTK from "../components/DaftarPrestasiJTK.vue";

export default Vue.extend({
    components:{
    Navbar,
    Footer,
    DaftarPrestasiJTK
},
    name:"DaftarPrestasiJTKView",
});
</script>