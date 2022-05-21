<template>
    <div id="landing-page">
        <Navbar />
        <Gallery />
        <Footer />
    </div>
</template>

<script>
import Vue from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Gallery from "../components/Gallery.vue";

export default Vue.extend({
    components:{
    Navbar,
    Gallery,
    Footer
},
    name:"GalleryView",
});
</script>