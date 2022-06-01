<template>
    <div id="Profile-Lulusan-D3">
        <Navbar />
        <v-content>
        <div class="headline-middle mt-lg-16">
            <h1>Profile Lulusan</h1>
        </div>
        <v-container>
            <div>
                <h1>D3 Teknik Informatika</h1>
                <div class="list-lulusan">
                <p>
                    Lulusan program studi Teknik Informatika dibekali dengan pengetahuan teoritis dan pengalaman praktek sehingga siap masuk ke dunia kerja. Lulusan dikategorikan sebagai Informatic-workers yaitu profesional yang bekerja dibidang informatika atau bidang lain yang berbasis teknologi informatika sebagai operator, programmer, atau analis dan designer
                </p>
                </div>
            </div>
            <div class="list-lulusan">
                <h2>Programmer</h2>
                <span>Profil lulusan teknik informatika berpotensi menjadi programmer yang mana dapat mengerjakan Dokumenter, Administrator, Programmer</span>
            </div>
            <div class="list-lulusan">
                <h2>Programmer</h2>
                <span>Profil lulusan teknik informatika berpotensi menjadi programmer yang mana dapat mengerjakan Dokumenter, Administrator, Programmer</span>
            </div>
            <div class="list-lulusan">
                <h2>Programmer</h2>
                <span>Profil lulusan teknik informatika berpotensi menjadi programmer yang mana dapat mengerjakan Dokumenter, Administrator, Programmer</span>
            </div>
            <div class="list-lulusan">
                <h2>Programmer</h2>
                <span>Profil lulusan teknik informatika berpotensi menjadi programmer yang mana dapat mengerjakan Dokumenter, Administrator, Programmer</span>
            </div>            
        </v-container>
        </v-content>
        <Footer />
    </div>
</template>

<style>
.list-lulusan{
    padding-top: 10px;
    margin-bottom: 10px;
    width: 1000px;
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
    name:"ProfileLulusanD3",
});
</script>