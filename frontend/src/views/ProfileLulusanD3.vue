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
                <v-text class="font-weight-bold">Programmer</v-text><p>
                <v-text>Mengkonversi spesifikasi dan problem statement beserta prosedur suatu proyek menjadi logical flow yang deteil sehingga siap dicoding dalam bahasa pemrograman.</v-text></p>
            </div>
            <div class="list-lulusan">
                <v-text class="font-weight-bold">Software Application Tester</v-text><p>
                <v-text>Memonitor dan mengendalikan perangkat komputer untuk keperluan pemrosesan data bisnis, saintifik, engineering, dan data lain sesuai dengan instruksi pengoperasiannya.</v-text></p>
            </div>
            <div class="list-lulusan">
                <v-text class="font-weight-bold">Technical Writer</v-text><p>
                <v-text>Mendokumentasikan algoritma dan/program secara eksplisit dan implisit berdasar standar dokumentasi pengembangan perangkat lunak.</v-text></p>
            </div>
            <div class="list-lulusan">
                <v-text class="font-weight-bold">Designer Software Application</v-text><p>
                <v-text>Merancang prosedur, tata cara pemeliharaan sistem perangkat lunak dan troubleshooting dengan memperhatikan prinsip security dan K3 (Kesehatan dan keselamatan Kerja).</v-text></p>
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