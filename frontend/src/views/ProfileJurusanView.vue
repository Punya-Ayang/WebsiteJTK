<template>
    <div id="profile-jurusan">
        <Navbar />
        <v-content>
            <div class="headline-middle">
                <h1>Profile, Visi, dan Misi</h1>
            </div>
            <v-container>
                <v-img class="banner mt-n15" src="../assets/Landing.png"></v-img>
                <div class="content pt-5 mt-10">
                    <p>
                        Jurusan Teknik Komputer dan Informatika Politeknik Negeri Bandung (lebih dikenal dengan singkatan JTK) merupakan jurusan penyelenggara pendidikan diploma bidang teknologi informasi pertama di Indonesia. Jurusan ini telah menyelenggarakan pendidikan D-3 bidang teknik komputer dan informatika sejak 1977 dan pendidikan D-4 sejak 2009.
                    </p>
                    <p>
                        Dengan daya tampung sekitar 96 mahasiswa per tahun, sampai saat ini JTK telah menghasilkan lebih dari 2.500 alumni yang bekerja pada berbagai sektor industri, baik di dalam maupun di luar negeri.
                    </p>
                    <p>
                        Selain menjalankan pendidikan, JTK juga menyelenggarakan penelitian dan pengabdian kepada masyarakat dalam bidang teknologi informasi. Sebagai jurusan pertama yang menyelenggarakan pendidikan profesional bidang teknologi informasi, JTK selalu dijadikan tolok ukur dan telah banyak memberikan bantuan teknis dan non-teknis kepada institusi lain maupun kepada masyarakat umum. Beberapa aktivitas yang sering dilakukan di antaranya adalah pembinaan institusi, pelatihan bidang TI, konsultasi pemanfaatan TI untuk menunjang kegiatan kerja, pengembangan sistem informasi, dan lab/bengkel komputer layanan masyarakat.
                    </p>
                </div>
                <div class="subheadline">
                    <h2>Visi dan Misi</h2>
                </div>
                <div class=" content">
                    <p>
                        JTK memiliki misi untuk menjadi jurusan unggulan dan terdepan di bidang pengkajian, penerapan dan pengembangan teknologi informasi, yang diakui baik di tingkat nasional maupun internasional.
                    </p>
                    <h3 class="pb-2 mb-2">
                        Visi:
                    </h3>
                    <p>
                        1. Menyelenggarakan pendidikan yang menghasilkan sumber daya manusia yang profesional dibidang teknologi informasi;
                    </p>
                    <p>
                        2.Menyelenggarakan program penelitian yang menghasilkan produk unggulan dibidang teknologi informasi;
                    </p>
                    <p>
                        3. Meningkatkan pemanfaatan teknologi informasi di lingkungan internal maupun lingkungan eksternal (industri, pemerintah dan masyarakat umum);
                    </p>
                    <p class="pb-10 mb-10">
                        4. Menjadi tempat bagi sivitas akademika untuk saling bertukar gagasan dalam lingkungan yang kondusif.
                    </p>
                </div>
            </v-container>
        </v-content>
        <Footer />
    </div>
</template>

<style>
.headline{
    height: 100px;
    width: 955px;
    background-color: #EEEEEE;
    text-align: justify;
    padding-top: 28px;
    margin-top: 80px;
    color: #003399;
    position: relative;
    z-index: 1;
}
.subheadline{
    font-size: larger;
    color: #003399;
    padding-bottom: 20px;
    margin-bottom: 10px;
    padding-top: 20px;
    text-align: center;
}
.content{
    padding-bottom: 5px;
    font-size: large;
    text-align: justify;
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
    name:"ProfileJurusanView",
});
</script>