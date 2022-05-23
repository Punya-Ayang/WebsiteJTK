<template>
    <div id="tracer-study">
        <Navbar />
        <v-content>
            <div class="headline-middle">
                <h1>Hasil Tracer Study</h1>
            </div>
            <div class="subheadline-ts">
                <h1>Tracer Study Lulusan 2019</h1>
            </div>
        </v-content>
        <Footer />
    </div>
</template>

<style>
.subheadline-ts{
    padding-bottom : 10px;
    margin-bottom : 20px;
}


</style>

<script>
import Vue from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default Vue.extend({
    components:{
    Navbar,
    Footer
},
    name:"TracerStudy",
});
</script>