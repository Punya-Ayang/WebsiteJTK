<template>
    <div id="kurikulum">
        <Navbar />
        <v-content>
            <div class="headline-middle">
                <h1>Kurikulum</h1>
            </div>
            <v-container>
                <v-section>
                <h1>D3 Teknik Informatika</h1>
                <div class="list">
                <a href="..">Profile Lulusan</a>
                <br>
                <a href="..">Mata Kuliah</a>
                </div>

                </v-section>

                <v-section>
                    <h1>D4 Teknik Informatika</h1>
                <div class="list">
                <a href="..">Profile Lulusan</a>
                <br>
                <a href="..">Mata Kuliah</a>
                <br>
                <br>
                </div>
                </v-section>
                
            </v-container>
        </v-content>
        <Footer />
    </div>
</template>

<style>
.headline-middle{
    height:123px;
    background-color: #EEEEEE;
    text-align: center;
    padding-top: 28px;
    color: #003399;
    position: relative;
    z-index: 1;
    padding-bottom: 25px;
    margin-bottom: 50px;
}
.list{
    margin-top: 20px;
    padding-top: 10px;
    margin-bottom: 20px;

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
    name:"kurikulum",
});
</script>