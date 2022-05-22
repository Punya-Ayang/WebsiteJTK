<template>
    <div id="Artikel-Detail-KerjaSama">
        <Navbar />
        <v-content>
            <div class="headline-middle">
                <h1>Kerjasama PT. BIMS</h1>
                <subtitle-1>09/05/2022 / Kerjasama</subtitle-1>
            </div>
            <v-container >
            <div>
                <v-img src="../assets/Landing.png"></v-img>
            </div>
            <div class="content-ar">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra posuere volutpat. Etiam nec tortor quis purus fermentum dapibus ac vitae ex. Duis sodales sit amet ex non imperdiet. Vivamus leo ex, pretium et malesuada sed, auctor a libero. Nullam scelerisque feugiat convallis. In eget ullamcorper tortor. Cras nec vestibulum urna. Nullam quis magna quis tellus ultricies interdum. Suspendisse vel bibendum lectus, vitae eleifend enim. Cras tristique est et luctus sollicitudin. Quisque ullamcorper gravida nibh, sed ullamcorper metus pretium quis. Proin vulputate purus at fermentum mattis. Vivamus lobortis mollis convallis. Aenean mattis sed orci non varius. Vivamus elementum luctus fermentum. Maecenas mi diam, varius nec magna vel, pellentesque fermentum magna.
            </p>
            <p>
                Vestibulum condimentum arcu at velit eleifend, eget scelerisque orci fermentum. Nulla imperdiet nunc sit amet turpis ultrices, ac porta lacus dapibus. Sed dignissim, est vitae feugiat faucibus, leo arcu posuere turpis, vel sollicitudin sapien diam a enim. Nam ex arcu, iaculis pharetra fermentum nec, cursus volutpat leo. Vestibulum ullamcorper malesuada mattis. Cras sed nisl ornare, dapibus metus non, consectetur dolor. Donec ligula urna, porttitor vitae ipsum a, eleifend mattis sapien. Curabitur sed lorem ut erat tristique viverra a non orci. Sed enim felis, dignissim sit amet lorem quis, ultrices feugiat ligula. Phasellus faucibus ex a nisl scelerisque molestie. Vivamus vulputate, neque vel sodales luctus, orci elit scelerisque arcu, et elementum enim risus blandit nunc.
Fusce ligula dolor, ornare at interdum eu, sodales ac tortor.drerit nisi.
            </p>
            </div>
            </v-container>
        </v-content>
        <Footer />
    </div>
</template>

<style>
.content-ar{
 padding-top: 20px;
 margin-top: 30px;
 margin-bottom: 20px;
 padding-bottom: 20px;
 text-align: justify;
 font-size: large;
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
    name:"ArtikelDetailKerjaSama",
});
</script>