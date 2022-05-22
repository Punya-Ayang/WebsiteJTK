<template>
  <v-app id="landingPg">
    <v-content>
      <section>
        <v-parallax
        class="landingPage" src="../../assets/Landing.png" height="700">
        </v-parallax>
      </section>
      <section>
        
        <div style="
        color: #003399;
        height: 50px;
        font-size: x-large;">
          <h1 class="headline-lp text-md-center pt-5">Artikel Terkini</h1>
        </div>

        <v-row no-gutters>
          <v-col
            v-for="(item, i) in items"
            :key="i"
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
            :src="item.src"
          ></v-img>
          <v-card-title v-text="item.title"></v-card-title>
          <v-card-text
          v-text="item.artikel"
          >
          </v-card-text>
        </v-card>
        </v-col>
        </v-row>
      </section>

      <section>

        <div style="
        background-color: #003399; 
        color: white;
        height: 407px;
        font-size: x-large;">
        <h1 class="text-md-center pt-5">Tentang JTK</h1>
        <p class="text-md-center pt-10">
          Jurusan Teknik Komputer dan Informatika Politeknik Negeri Bandung (lebih dikenal dengan singkatan JTK) merupakan jurusan penyelenggara pendidikan diploma bidang teknologi informasi pertama di Indonesia. Jurusan ini telah menyelenggarakan pendidikan D-3 bidang teknik komputer dan informatika sejak 1977 dan pendidikan D-4 sejak 2009.
        </p>
        <p class="text-md-center pt-5">
          Dengan daya tampung sekitar 96 mahasiswa per tahun, sampai saat ini JTK telah menghasilkan lebih dari 2.500 alumni yang bekerja pada berbagai sektor industri, baik di dalam maupun di luar negeri.
        </p>
        </div>
      </section>

       <section
       style="
       background-color: #E7E9ED;
       "
       >
        <v-layout
          column
          wrap
          align-center
        >
          <div 
          class="text-md-center pt-5"
          style="
          color: #003399;
          font-size: x-large;">
              <h1 class="headline-lp">Akademik</h1>
              <p class="subheading">
                Jurusan pertama yang menyelenggarakan pendidikan profesional bidang teknologi informasi, JTK selalu dijadikan tolok ukur dan telah banyak memberikan bantuan teknis dan non-teknis kepada institusi lain maupun kepada masyarakat umum
              </p>
          </div>

          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <img class="logo" src="../../assets/MengapaJTK.png" width="274px">
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class=" text-xs-center">Mengapa JTK?</div>
                    </v-card-title>
                    <v-card-text>
                     Take courses from the world’s best instructors and universities. 
                    </v-card-text>
                  </v-card> 
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <img class="logo" src="../../assets/TentangProdi.png" width="274px">
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="">Tentang Prodi</div>
                    </v-card-title>
                    <v-card-text>
                      Take courses from the world’s best instructors and universities. 
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <img class="logo" src="../../assets/KuliahdiJTK.png" width="274px">
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class=" text-xs-center">Bagaimana kuliah di JTK</div>
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

      <section
       style="
       background-color: #EEEEEE;
       height: 350px;
       "
       >
          <div 
          class="text-md-center pt-10 pb-10"
          style="
          color: #003399;
          font-size: x-large;">
          <h1>Agenda</h1>
          </div>

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
        
        <v-col class="px-100 pt-10">
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
          <div 
          class="text-md-center pt-10"
          style="
          color: #003399;
          font-size: x-large;">
          <h1>Gallery</h1>
          </div>
         <v-row no-gutters>
          <v-col
           v-for="(item, i) in gallery"
           :key="i"
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
            :src="item.src"
          ></v-img>
           </v-card>
          </v-col>
          </v-row>

          <v-col class="px-100 pb-10">
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
    </v-content>
  </v-app>
</template>

<style>

</style>
<script>
export default{
el: '#app',
  data () {
    return {
      dialog: false,
      items:[
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'JTK Memperoleh 3 Medali pada PIMNAS',
          artikel: 'Bandung (2/10), Pekan Ilmiah Nasional atau Pimnas telah selesai diselenggarakan...'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'JTK Memperoleh 3 Medali pada PIMNAS',
          artikel: 'Bandung (2/10), Pekan Ilmiah Nasional atau Pimnas telah selesai diselenggarakan...'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'JTK Memperoleh 3 Medali pada PIMNAS',
          artikel: 'Bandung (2/10), Pekan Ilmiah Nasional atau Pimnas telah selesai diselenggarakan...'
        }
      ],
      gallery:[
        {
          src:'../../assets/gallery1.png'
        },
        {
          src:'../../assets/gallery1.png'
        },
        {
         src:'../../assets/gallery1.png'
        }
      ]
    }
  }
};
</script>