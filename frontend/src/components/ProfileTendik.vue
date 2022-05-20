<template>
  <v-app id="inspire">

      <v-toolbar dark color="#003399" style="max-height:10vh;">
      <v-toolbar-title class="white--text">
        <div class="image" style="max-width: 8vw; min-width:1vw;height: 3.5vw;">
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
     <v-section>
         <div flex-column mb-6>
        <v-card tile class="white" style="width: 25vw;height: 15vh; font-size: xx-large; color: #003399;">
            <h1>Profile Tendik</h1>
        </v-card>
         </div>
     </v-section>
    
    <v-section>
        <v-container>
                <v-row dense>
                    <v-col
                    v-for="(item, i) in items"
                    :key="i"
                    cols="12"
                    >
                    <v-card
                        tile
                        :color="item.color"
                    >
                        <div class="d-flex flex-no-wrap justify-space-between">
                        <v-avatar
                        class="ma-3"
                        size="125"
                        tile
                        >
                        <v-img :src="item.src"></v-img>
                        </v-avatar>
                        <v-container>
                            <v-card-title
                            class="text-h5"
                            v-text="item.nama"
                            style="font-style: #00000;"
                            ></v-card-title>

                            <v-card-subtitle v-text="item.nip"></v-card-subtitle>
                            <v-card-subtitle v-text="item.email"></v-card-subtitle>
                            <v-card-subtitle v-text="item.nohp"></v-card-subtitle>
                        </v-container>
                        </div>
                    </v-card>
                    </v-col>
                </v-row>
            </v-container>
    </v-section>
   
<v-footer
  padless>
    <v-card width="1920px" height="250px" color="#003294">

    </v-card>
    <v-card width="1920px" color="#10203F">
      <v-card-text class="text-center">
        Jurusan Teknik Komputer dan Informatika Politeknik Negeri Bandung
      </v-card-text>
    </v-card>
  </v-footer>
 </v-content>
  </v-app>
</template>

<script>
export default{
el: '#app',
  data () {
    return {
      dialog: false,
      items:[
        {
          color: '#00000',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          nama: 'AbcdefghiaaaaaaaaaaaJklmno',
          nip: '10219217',
          email:'aku@email.com',
          nohp:'0812821989 ',
        },
        {
          color: '#00000',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          nama: 'Abcdefghi Jklmno',
          nip: '10219217',
          email:'aku@email.com',
          nohp:'0812821989 ',
        },
      ],
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