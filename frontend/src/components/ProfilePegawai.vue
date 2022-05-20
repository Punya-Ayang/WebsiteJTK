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
        <v-card tile class="grey lighten-1" style="width: 25vw;height: 15vh; font-size: xx-large; color: #003399;">
            <h1>Info Pegawai</h1>
        </v-card>
         </div>
     </v-section>

    <v-section>
             <v-card
                flat
                class="py-12"
            >
                <v-card-text>
                <v-row
                    align="center"
                    justify="center"
                >
                    <v-col cols="12">
                    
                    <v-btn
                    dark
                    x-large
                    >
                    <v-icon>mdi-account-box</v-icon>
                    </v-btn>

                    <v-btn
                    dark
                    x-large
                    >
                    <v-icon>mdi-account-box-outline</v-icon>
                    </v-btn>
                    </v-col>
                </v-row>
                </v-card-text>
            </v-card>
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