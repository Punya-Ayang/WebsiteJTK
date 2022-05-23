<template>
<v-app id="inspire">
    <v-content>
      <section>
        <v-container
          fill-height
          fluid
          class="grey lighten-5"
          style="
            height: 15vh;
            font-size: xx-large;
            justify-content: center;
            color: #003399;
          "
        >
          <h1>Profil Prodi D3 Teknik Informatika</h1>
        </v-container>
      </section>
        <v-spacer></v-spacer>

        <section>
            <v-container>
                <v-row align="center" justify="center" class="mt-lg-10 mb-lg-10">
                    <v-img
                    max-height="670px"
                    max-width="1200px"
                    src="../assets/Landing.png"
                    ></v-img>
                </v-row>
            </v-container>
        </section>
            <v-spacer></v-spacer>
        <section>
             <v-container>
          <v-row>
            <h2 class="mt-lg-2 mb-lg-2" style="color: #003399">
              Visi Program Studi
            </h2>
          </v-row>
        </v-container>
            <v-container>
                <v-row align="center" justify="center">
                <v-text>
                Menjadi Program studi unggulan dan terdepan dalam program pendidikan Diploma III Teknik Informatika yang diakui baik
                ditingkat nasional maupun internasional pada tahun 2025.
                </v-text>
                </v-row>
            </v-container>
             <v-container>
                <v-row>
                    <h2 class="mt-lg-2 mb-lg-2" style="color: #003399">
                    Misi Program Studi
                    </h2>
                </v-row>
            </v-container>
            <v-container>
                <v-row>
                <v-text>
                1. Menyelenggarakan program pendidikan Diploma III Teknik Informatika yang diakui baik di tingkat nasional maupun internasional.
                <br>
                2. Melakukan penelitian terapan yang dapat digunakan oleh Industri, Institusi atau Masyarakat baik ditingkat nasional maupun internasional
                <br>
                3. Melaksanakan pengabdian kepada masyarakat pada lingkup lokal, regional dan nasional.
                </v-text>
                </v-row>
            </v-container>
            <v-container>
                <v-row>
                    <h2 class="mt-lg-2 mb-lg-2" style="color: #003399">
                    Tujuan Program Studi
                    </h2>
                </v-row>
            </v-container>
            <v-container>
                <v-row align="center" justify="center">
                <v-text>
                1. Menghasilkan tenaga di bidang perancangan dan implementasi perangkat lunak bisnis serta perancangan solusi bisnis berbasis teknologi informasi untuk menunjang kebutuhan masyarakat dan industri di lingkup nasional dan internasional, yang memiliki sikap dan kemampuan sebagai berikut:
                <div class ="pl-lg-4"><br>a. beradaptasi terhadap perkembangan teknologi informasi
                <br>b. belajar sepanjang hayat dan ulet
                <br>c. berpikir kreatif, analitis dan sistematis
                <br>d. berwirausaha
                <br>e. bermoral
                <br>f. berkomunikasi dalam bahasa Internasional </div>
                <br>2. Menghasilkan lulusan dengan kompetensi yang diakui pada tingkat nasional maupun internasional.
                <br>3. Mendorong mahasiswa untuk menghasilkan produk terapan di bidang perangkat lunak bisnis yang bermanfaat bagi masyarakat dan industri baik nasional maupun internasional.
                <br>4. Menghasilkan produk pelayanan dan produk penelitian terapan di bidang teknologi informasi yang bermanfaat bagi masyarakat dan industri baik di tingkat nasional maupun internasional.
                </v-text>
                </v-row>
            </v-container>
            <v-container>
                <a>&bull; Profil Lulusan</a>
                <br>
                <a>&bull; Struktur mata Kuliah</a>

            </v-container>
        </section>
        <v-spacer></v-spacer>

    </v-content>
</v-app>
</template>
<script>
export default{
el: '#app',
  data () {
    return {
      dialog: false,
        
    }
  }
};
</script>