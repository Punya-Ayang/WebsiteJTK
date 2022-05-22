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
          Agenda
        </h1>
      </section>
      <v-section class="mt-lg-8 mb-lg-8">
        <v-container style="display: flex" fluid>
          <v-container class="ml-lg-8 mt-lg-6">
              <v-img :src="item.src"
              max-height="500"
              max-width="500"
              ></v-img>
          </v-container>
          <v-container class="ml-lg-4">
            <h2 class="mt-lg-4" style="color:#003399" v-bold v-text="item.title"></h2>
            <br>
            <v-text  style="color:#003399">Jenis</v-text><p>
            <v-text v-text="item.jenis"></v-text></p>
            <br>
            <v-text  style="color:#003399">Tanggal</v-text><p>
            <v-text v-text="item.date"></v-text></p>
            <br>
            <v-text  style="color:#003399">Jam</v-text><p>
            <v-text v-text="item.jam"></v-text></p>
            <br>
            <v-text  style="color:#003399">Tempat</v-text><p>
            <v-text v-text="item.tempat"></v-text></p>
            <br>
            <v-text  style="color:#003399">Penyelenggara</v-text><p>
            <v-text v-text="item.penyelenggara"></v-text></p>
            <v-text></v-text>
            <h4></h4>
          </v-container>
            <v-container class="ml-lg-16 pl-lg-16 mt-lg-16">
              <v-date-picker v-model="picker"></v-date-picker>
              <v-col cols="12" sm="6"> </v-col>
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