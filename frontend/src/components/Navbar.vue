<template>
  <v-app id="navbar">
      <v-toolbar dark color="#003399" style="max-height:35vh;">
      <v-toolbar-title class="white--text">
        <div class="image" style="max-width: 8vw; min-width:1vw;height: 3.5vw;">
          <img class="logo" src="../assets/logoPolban.png" width="50x">
        </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items >
          <v-menu
          open-on-hover
          down
          offset-y
          >
            <template
              v-slot:activator="{on,attrs}"
            >
              <v-btn
              text
              v-on="on"
              v-bind="attrs"
              >
              Tentang JTK
              </v-btn>
            </template>
              <v-list>
                <v-list-item
                  v-for="(item, index) in tentangjtk"
                  :key="index"
                  :to="item.link"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
          </v-menu>
          <v-menu
          open-on-hover
          down
          offset-y
          >
            <template
              v-slot:activator="{on, attrs}"
            >
              <v-btn
              text
              v-on="on"
              v-bind="attrs"
              >
              Akademik
              </v-btn>
            </template>
              <v-list>
                <v-list-item
                  v-for="(item, index) in akademik"
                  :key="index"
                  :to="item.link"
                >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
          </v-menu>
          <v-btn
              text
              >
              Article News
          </v-btn>
          <v-btn
              text
              >
              Gallery
          </v-btn>
          <v-btn
              text
              >
              Tracer Study
          </v-btn>  
      </v-toolbar-items>
      <v-layout 
      row align-center style="max-width: 15vw; min-width:1vw;"
      class="mx-4">
        <v-text-field
          filled
          rounded
          dense
          label="Search"
          single-line
          background-color="#00000"
          color="black"
          hide-details
        >
        <v-icon style="#00000">mdi-magnify</v-icon>
        </v-text-field>
      </v-layout>
      <v-col
      class="mx-1"
      style="max-width: 8vw; min-width:1vw;height: 4vw;"
      >
        <v-select
          :items="language"
          label="IDN"
          dense
          solo
          color="#fffff"
        ></v-select>
      </v-col>
    </v-toolbar>
  </v-app>
</template>

<style>
.v-application--wrap{
  min-height: unset;
}
</style>
<script>
export default{
  data () {
    return {
      dialog: false,
      tentangjtk: [
        {title: 'Profile Jurusan', link:"/profile-jurusan"},
        {title: 'Profil Prodi', link:"/profile-prodi-d3"},
        {title: 'Profil Pegawai', link:"/profile-pegawai"},
        {title: 'Sarana dan Prasarana', link:"/sarana-prasarana"},
        {title: 'Info Kerja Sama', link:"/-"},
        {title: 'Daftar Prestasi', link:"/daftar-prestasi"}
      ],
      akademik  : [
        {title: 'Kurikulum'},
        {title: 'Profil Lulusan'},
        {title: 'Mata Kuliah'},
        {title: 'Agenda'}
      ],
      language :[
        'IDN','ENG'
      ]
    }
  }
};
</script>