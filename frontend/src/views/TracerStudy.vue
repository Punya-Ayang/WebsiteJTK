<template>
    <div id="tracer-study">
        <Navbar />
        <TracerStudyComp />
        <Footer />
    </div>
</template>

<script>
import Vue from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import TracerStudyComp from "../components/TracerStudyComp.vue";

export default Vue.extend({
    components:{
    Navbar,
    Footer,
    TracerStudyComp,
},
    name:"TracerStudy",
});
</script>