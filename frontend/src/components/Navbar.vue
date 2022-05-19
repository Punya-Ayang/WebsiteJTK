<template>
  <v-app id="inspire">

      <v-toolbar dark color="#003399" style="height:10vh;">
      <v-toolbar-title class="white--text">
        <div class="image" style="max-width: 8vw; min-width:1vw;height: 4.5vw;">
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
        <v-parallax
        class="landingPage" src="../assets/Landing.png" height="727"
        >
        </v-parallax>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center>
          <div class="text-xs-center">
            <h2 class="headline" style="font: size 100px;; color:#003399 ;">Artikel Terkini</h2>
          </div>
        </v-layout>
        <v-row no-gutters>
          <v-col
            v-for="n in 3"
            :key="n"
            cols="12"
            sm="4"
          >
          <v-card
            :loading="loading"
            class="mx-auto my-12"
            max-width="374"
          >
          <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>
          <v-card-title>JTK Berhasil Meraih Emas di Pimnas</v-card-title>
          <v-card-text>
            <div>Bandung (2/10), Pekan Ilmiah Nasional atau Pimnas telah selesai diselenggarakan...</div>
          </v-card-text>
        </v-card>
        </v-col>
        </v-row>
      </section>

      <section>
        <v-card color="#003399"
        style="
              width: 1920px;
              height: 250px"
        >
          <v-card-title class="title">Tentang JTK</v-card-title>
          <v-card-text>{Jurusan Teknik Komputer dan Informatika atau yang sering disebut JTK berdiri sejak tahun XXXX. Lorem ipsum dolor sit amet}</v-card-text>
        </v-card>
      </section>

       <section >
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3" >
            <div class="text-xs-center">
              <h1 class="headline">Akademik</h1>
              <span class="subheading">
                Jurusan Teknik Komputer dan Informatika atau yang sering disebut JTK berdiri sejak tahun XXXX. Lorem ipsum dolor sit amet
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <img class="logo" src="../assets/MengapaJTK.png" width="274px">
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Mengapa JTK?</div>
                    </v-card-title>
                    <v-card-text>
                     Take courses from the world’s best instructors and universities. 
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <img class="logo" src="../assets/TentangProdi.png" width="274px">
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Tentang Prodi</div>
                    </v-card-title>
                    <v-card-text>
                      Take courses from the world’s best instructors and universities. 
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <img class="logo" src="../assets/KuliahdiJTK.png" width="274px">
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Bagaimana kuliah di JTK</div>
                    </v-card-title>
                    <v-card-text>
                      Learn your favourite course with world-class instructors.
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center>
          <div class="text-xs-center">
            <h2 class="headline" style="font: size 100px;; color:#003399;">Agenda</h2>
          </div>
        </v-layout>
        <v-row no-gutters>
          <v-col
            v-for="n in 3"
            :key="n"
            cols="12"
            sm="4"
          >
          <v-card
          class="mx-auto"
          max-width="344"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-avatar
              tile
              size="80"
              color="grey"
            ></v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1">
                Webinar: Cloud Computing 101  
              </v-list-item-title>
              <v-list-item-subtitle>Sabtu, 7 Mei 2022</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
          </v-col>
        </v-row>
        
        <v-col class="px-100">
          <div class="text-center">
            <v-btn
              small
              color="#E6E6E6"
              dark
            >
              Lihat Selengkapnya
            </v-btn>
          </div>
        </v-col>
      </section>
      <v-spancer></v-spancer>

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center>
          <div class="text-xs-center">
            <h2 class="headline" style="font: size 100px; color:#003399;">Gallery</h2>
          </div>
        </v-layout>
         <v-row no-gutters>
          <v-col
             v-for="n in 3"
            :key="n"
            cols="6"
            sm="4"
          >
           <v-card
            :loading="loading"
            class="mx-auto my-12"
            max-width="374"
          >
          <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>
           </v-card>
          </v-col>
          </v-row>

          <v-col class="px-100">
          <div class="text-center">
            <v-btn
              small
              color="#E6E6E6"
              dark
            >
              Lihat Selengkapnya
            </v-btn>
          </div>
        </v-col>
      </section>
      <v-spancer></v-spancer>


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