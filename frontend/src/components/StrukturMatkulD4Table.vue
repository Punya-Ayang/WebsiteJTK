<template>
  <div id="struktur-matkul-d4">
    <v-content>
      <div class="headline-middle">
        <h1>Struktur Mata Kuliah</h1>
      </div>
      <v-container>
         <h3>Pilih Semester</h3>
        <v-col class="mx-1 pl-0 pb-0" style="max-width: 10vw; min-width: 1vw">
          <v-select
            :items="semester"
            label="Pilih Semester"
            v-model="defaultSelected"
            @input="atInput($event)"
            dense
            solo
            color="#fffff"
          ></v-select>
        </v-col>

        <div class="subheader-mtk pb-lg-5 pt-0">
          <h1>D-4 Teknik Informatika</h1>
        </div>
        <div>
          <v-data-table
            dense
            :headers="headers"
            :items="matakuliah[currSem - 1].mata_kuliah"
            item-key="name"
            class="elevation-1"
          ></v-data-table>
        </div>
      </v-container>
    </v-content>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  created() {
    axios
      .get("https://cms-web-jtk-kartikamilenda.cloud.okteto.net/struktur-mata-kuliahs?prodi=D4&_sort=semester:ASC")
      .then((res) => {
        this.matakuliah = res.data;
        for (let i = 0; i < this.matakuliah.length; i++) {
          this.semester.push(i + 1);
          for (let j = 0; j < this.matakuliah[i].mata_kuliah.length; j++) {
            this.matakuliah[i].mata_kuliah[j].sks = parseInt(this.matakuliah[i].mata_kuliah[j].sks_t + this.matakuliah[i].mata_kuliah[j].sks_p); 
          }
        }
        console.log(this.matakuliah);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  methods: {
    atInput(event) {
      this.currSem =event;
    }
  },
  data: () => ({
    currSem: 1,
    matakuliah: [],
    headers: [
      {
        text: "Nama Mata Kuliah",
        align: "start",
        sortable: false,
        value: "nama_mata_kuliah",
      },
      { text: "Deskripsi", value: "deskripsi", sortable: false },
      { text: "SKS", value: "sks" },
      { text: "SKS Teori", value: "sks_t" },
      { text: "SKS Praktek", value: "sks_p" },
      { text: "Kode", value: "kode", sortable: false },
    ],
    defaultSelected: 1,
    semester: [],
  }),
};
</script>