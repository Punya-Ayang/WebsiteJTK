<template>
<v-app id="inspire">
    <v-toolbar dark color="#003399" style="max-height:10vh;">
      <v-toolbar-title class="white--text">
        <div class="image" style="max-width: 8vw; min-width:1vw;height: 3.8vw;">
          <img class="logo" src="../assets/logoPolban.png" width="50x">
        </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
         <v-tab
         v-for="item in nav"
           :key="item.icon"
           to="#"
           :title="item.title"
           flat
         >{{ item.text }}
         </v-tab>
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
      style="max-width: 8vw; min-width:1vw;height: 4.5vw;"
      >
        <v-select
          :items="items"
          label="IDN"
          dense
          solo
          color="#fffff"
        ></v-select>
      </v-col>
    </v-toolbar>

    <v-content>
        <section>
            <v-container fluid class="grey lighten-5" style="height: 15vh; font-size: xx-large;text-align: center; color: #003399;">
                <h1>Gallery</h1>
            </v-container>
        </section>
        <v-spacer></v-spacer>
        <section>
            <div style="height: 15vh; font-size: large;text-align: center; color: #fffff;">
            <h1>Dokumentasi Acara Webinar 2022</h1>
            <p>By Admin</p>
            </div>
            <v-row>
    <v-col
      v-for="n in 9"
      :key="n"
      class="d-flex child-flex"
      cols="4"
    >
      <v-img
        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
        aspect-ratio="1"
        class="grey lighten-2"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
        </section>
    </v-content>
</v-app>
</template>
<script>
export default{
el: '#app',
  data () {
    return {
      dialog: false,
      nav: [
        {
          text: 'Tentang JTK'
        },
        {
          text: 'Akademik'
        },
        {
          text: 'Article News'
        },
        {
          text: 'Gallery'
        },
        {
          text: 'Tracer Study'
        }
      ]
    }
  }
};
</script>