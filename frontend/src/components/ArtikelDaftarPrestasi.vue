<template>
  <v-app id="inspire">
    <v-content>
      <section>
        <v-container
          fluid
          class="grey lighten-5"
          style="
            height: 15vh;
            font-size: xx-large;
            text-align: center;
            color: #003399;
          "
        >
          <h1 v-text="article.title"></h1>
          <p style="font-size: medium" v-text="article.artist"></p>
        </v-container>
      </section>
      <v-spacer></v-spacer>

      <section>
        <v-container fluid>
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
        <v-container class="mb-lg-10">
          <v-row align="center" justify="center">
            <p v-text="article.Text"></p>
          </v-row>
        </v-container>
      </section>
      <v-spacer></v-spacer>
      <section>
        <v-container fluid class="mt-lg-10 mb-lg-10">
          <h2 style="text-align: center; padding-bottom: 20px">Share On</h2>

          <v-row align="center" justify="center">
            <div class="text-center">
              <v-btn class="mx-2" fab dark outlined large color="#003399">
                <v-icon dark> mdi-twitter </v-icon>
              </v-btn>
              <v-btn class="mx-2" fab outlined dark large color="#003399">
                <v-icon dark> mdi-facebook </v-icon>
              </v-btn>
              <v-btn class="mx-2" fab dark outlined large color="#003399">
                <v-icon dark> mdi-google-plus </v-icon>
              </v-btn>
            </div>
          </v-row>
        </v-container>
      </section>
    </v-content>
  </v-app>
</template>
<script>
export default {
  el: "#app",
  data() {
    return {
      dialog: false,
      article: {
        title: "JTK Memperoleh 3 Medali pada PIMNAS",
        artist: "09/05/2022 / Kejuaraan",
        Text: "Mahasiswa JTK Polban kembali unjuk gigi dengan raihan Juara 1 di ajang Hackaton BuildOn Indonesia 2020 (13/09/2020) melalui karya berjudul “Obsterik: Aplikasi untuk Bidan”. Mereka adalah tim “Semester 2 Setengah” yang beranggotakan : Reynaldy Rizki Saputra (191524031) Muhammad Fauzan Lubis (191524026) Marissa Nur Amalia (191524019) Kompetisi BuildOn Indonesia merupakan rangkaian dari BuildOn ASEAN 2020 yang diselenggarakan di Malaysia, Singapura, Indonesia, Filipina, dan Thailand. Peserta Hackaton BuildOn ASEAN 2020 ditantang untuk belajar dan menyelesaikan permasalahan menggunakan teknologi Cloud Computing AWS. Akibat pandemi COVID-19, seluruh tahapan kompetisi dilakukan secara daring. Kompetisi dimulai pengiriman proposal, kemudian 50 tim terbaik akan melaju ke tahap selanjutnya yaitu mengirimkan video presentasi dan prototyping. Mereka berhasil menjadi juara 1 sehingga berhasil menjadi 1 dari 3 tim yang akan mewakili Indonesia di tingkat ASEAN Fauzan dan kawan-kawan berharap rekan-rekan yang lain berani mencoba ikut serta dalam berbagai kompetisi agar waktu luang yang tersedia dapat dimanfaatkan secara lebih baik. Selamat kepada tim semeseter 2 setengah ! Semoga dapat menjadi inspirasi bagi yang lain ! Kepada para bidan Indonesia, selamat datang di masa depan! semester 2 setengah mempersembahkan Obstetrisk: Aplikasi untuk bidan. App ini memiliki fitur akun untuk bidan, pendaftaran nama pasien oleh bidan, penambahan rekam jejak medis, serta pencatat pertemuan yang dilakukan antara bidan dengan pasien. "
      },
    };
  },
};
</script>