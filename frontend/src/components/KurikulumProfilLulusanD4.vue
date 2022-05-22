<template>
  <v-app id="inspire">
    <v-content>
      <section style="background-color: #eeeeee; height: 115px">
        <div></div>
        <!-- <v-container fluid class="grey lighten-5" style="height: 15vh; font-size: xx-large;text-align: center; color: #003399;"> -->
        <h1
          class="text-no-wrap pt-lg-8 pb-lg-8"
          style="width: 100rem; grey lighten-9 height: 15vh; font-size: xx-large;text-align: center; color: #003399;"
        >
          Profil Lulusan
        </h1>
      </section>
      <v-section class="mt-lg-8 mb-lg-8">
          <v-container>
          <v-container class="ml-lg-4">
            <h2 class="mt-lg-4">D4 Teknik Informatika</h2>
            <br>
            <v-text class="font-weight-bold">Programmer</v-text><p>
            <v-text>Programmer menjadi salah satu profil lulusan teratas karena mayoritas Mahasiswa dan Mahasiswi JTK ini dilatih untuk menjadi Programmer handal pada saat berkuliah di JTK.</v-text></p>
            <br>
            <v-text class="font-weight-bold">System Analis</v-text><p>
            <v-text>Sistem Analis menjadi salah satu profil lulusan teratas karena mayoritas Mahasiswa dan Mahasiswi JTK ini dilatih untuk menjadi Sistem Analis handal pada saat berkuliah di JTK.</v-text></p>
            <br>
            <v-text class="font-weight-bold">Software Quality Asurance</v-text><p>
            <v-text>Software Quality Asurance menjadi salah satu profil lulusan teratas karena mayoritas Mahasiswa dan Mahasiswi JTK ini dilatih untuk menjadi Software Quality Asurance handal pada saat berkuliah di JTK.</v-text></p>
            <br>
            <v-text class="font-weight-bold">CEO Perusahaan / Startup</v-text><p>
            <v-text>CEO Perusahaan / Startup menjadi salah satu profil lulusan teratas karena mayoritas Mahasiswa dan Mahasiswi JTK ini dilatih untuk menjadi CEO Perusahaan / Startup terampil pada saat berkuliah di JTK.</v-text></p>
           <br>
            <v-text class="font-weight-bold">Designer Software</v-text><p>
            <v-text>Designer Software menjadi salah satu profil lulusan teratas karena mayoritas Mahasiswa dan Mahasiswi JTK ini dilatih untuk menjadi Designer Software handal pada saat berkuliah di JTK.</v-text></p>
          </v-container>
          </v-container>
      </v-section>
    </v-content>
  </v-app>
</template>
<script>
export default {
  el: "#app",
  data: () => ({
    dates: "2019-09-10",
    item:
    {
      src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
      title: "Baksos Resiliensi",
      jenis : "Pendidikan",
      date: "2019-09-10",
      jam : "07.00.00",
      tempat : "Gedung Sate",
      penyelenggara : "Himakom JTK"
    },
  }),
  picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
  dialog: false,
};
</script>