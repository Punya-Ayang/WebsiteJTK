<template>
  <v-app id="footer">
    <div>
      <v-footer color="#003399">
          <v-row
          style="height: 300px"
          >
          <v-col
            cols="12"
            sm="3"
          >

          <v-list-item three-line>
            <v-list-item-avatar

            ></v-list-item-avatar>
          <div>
               <h4 class="white--text mt-lg-2 mb-lg-2">
                Akreditasi Program Studi
              </h4>
           <div id="app"
                v-for="(item, i) in prodiD3"
                :key="i">
            <v-app id="inspire">
              <v-card
                style="border: 3px solid white"
                width="300"
                height="100"
                color="#003399"
              >
                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item-title class="text-h4 text-center" style="color:#ffffff;" v-text=item.alphabet>
                    </v-list-item-title>
                    <v-list-item-subtitle class="caption text-center" style="color:#ffffff" v-text=item.ket></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-app>
          </div>
          <div>
            <br>
          <div id="app"
                v-for="(item, i) in prodiD4"
                :key="i">
            <v-app id="inspire">
              <v-card
                style="border: 3px solid white"
                width="300"
                height="100"
                color="#003399"
              >
                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item-title class="text-h4 text-center" style="color:#ffffff;" v-text=item.alphabet>
                    </v-list-item-title>
                    <v-list-item-subtitle class="caption text-center" style="color:#ffffff" v-text=item.ket></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-app>
          </div>
          </div>
          </div>
          </v-list-item>
     
          </v-col>

          <v-col
            cols="12"
            sm="3"
          >

          <v-list-item three-line>
            <v-list-item-avatar

            ></v-list-item-avatar>

            <v-list-item-content>
              <h4 class="white--text mb-lg-4">
                Kontak
              </h4>
              <subtitle-1 class="white--text">Email </subtitle-1>
              <a href="mailto:contact@jtk.polban.ac.id.com" class="white--text">contact@jtk.polban.ac.id</a>
              
                 <subtitle-1 class="white--text">Hotline JTK </subtitle-1>
                 <a href="tel:022123456" class="white--text">022123456</a>
            </v-list-item-content>
          </v-list-item>
     
          </v-col>

                    <v-col
            cols="12"
            sm="3"
          >

          <v-list-item three-line>
            <v-list-item-avatar

            ></v-list-item-avatar>

            <v-list-item-content>
              <h4 class="white--text mb-lg-4">
                Link Eksternal
              </h4>
              <a href="https://polban.ac.id" class="white--text">polban.ac.id</a>
              <a href="https://akademik@polban.ac.id" class="white--text">akademik@polban.ac.id</a>
              <v-list-item-subtitle></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
     
          </v-col>

                    <v-col
            cols="12"
            sm="3"
          >

          <v-list-item three-line>
            <v-list-item-avatar

            ></v-list-item-avatar>

            <v-list-item-content>
              <h4 class="white--text mb-lg-4">
                Media Sosial
              </h4>
             
             <v-row class="ml-lg-1 pt-lg-1"> 
                      <v-btn
                        v-for="(item, index) in media"
                        :key="index"
                        class="mr-4"
                        color="#FFFFFF"
                        icon
                        :href="item.link">
                        <v-icon color="white" large  class="mr-lg-1"> {{item.icon}}</v-icon></v-btn>
              </v-row>
            
              <!-- <v-icon color="white" large>mdi-youtube</v-icon></v-row>
              <v-row class="ml-lg-1"><v-icon color="white" large class="mr-lg-1">mdi-instagram</v-icon>
              <v-icon color="white" large>mdi-twitter</v-icon></v-row> -->
          
              
            </v-list-item-content>
          </v-list-item>
     
          </v-col>
      </v-row>
    
  </v-footer>
      <v-card tile width="2000" color="#10203F">
      <v-card-text class="text-center" >
          <h5 style="color:#ffffff">Jurusan Teknik Komputer dan Informatika Politeknik Negeri Bandung</h5>
        </v-card-text>
      </v-card>
    </div>
  </v-app>
</template>

<script>
export default {
   data () {
      return {
        media: [
            {icon: 'mdi-facebook', link:"https://www.facebook.com/jtkpolban/"},
            {icon: 'mdi-youtube', link:"https://www.youtube.com/channel/UC7IrpaB00O6NcW5C8gcYjiQ/videos/"},
            {icon: 'mdi-instagram', link:"https://www.instagram.com/jtkpolban/"}
         ],
        prodiD3: [
          {alphabet:"A", ket:"D-3 Teknik Komputer dan Informatika"}
        ],
        prodiD4: [
          {alphabet:"A", ket:"D-4 Teknik Komputer dan Informatika"}
        ],
      }
   }
}
</script>