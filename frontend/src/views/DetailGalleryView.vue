<template>
    <div id="landing-page">
        <Navbar />
        <DetailGallery />
        <Footer />
    </div>
</template>

<script>
import Vue from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import DetailGallery from "../components/DetailGallery.vue";

export default Vue.extend({
    components:{
    Navbar,
    Footer,
    DetailGallery
},
    name:"DetailGalleryView",
});
</script>