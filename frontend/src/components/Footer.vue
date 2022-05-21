<template>
  <v-app id="footer">
    <div>
      <v-footer color="#003399">
  

          <v-row >
          <v-col
            cols="12"
            sm="3"
          >

          <v-list-item three-line>
            <v-list-item-avatar

            ></v-list-item-avatar>

            <v-list-item-content>
              <h4 class="white--text">
                Akreditasi Program Studi 
              </h4>
              <v-img   
              max-height="150"
              max-width="245"
              src="../assets/D3.png"></v-img>
              <v-img   
              max-height="150"
              max-width="245"
              src="../assets/D4.png"></v-img>
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
              <h4 class="white--text">
                Kontak
              </h4>
              <h6 class="white--text">email </h6>
              <h6 class="white--text">contact@jtk.polban.ac.id</h6>
              
                 <h6 class="white--text">Hotline JTK </h6>
                 <h6 class="white--text">022123456 </h6>
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
              <h4 class="white--text">
                Link Eksternal
              </h4>
               <h6 class="white--text">polban.ac.id </h6>
              <h6 class="white--text">akademik@polban.ac.id</h6>
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
              <h4 class="white--text">
                Media Sosial
              </h4>
              <div class="pa-4">
             <v-row> <v-icon color="white">mdi-facebook</v-icon>
              <v-icon color="white">mdi-youtube</v-icon></v-row>
              <v-row><v-icon color="white">mdi-instagram</v-icon>
              <v-icon color="white">mdi-twitter</v-icon></v-row>
              </div>
              
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

<style>


footer {
  height: 300px;
}

</style>

<script lang="ts">
import Vue from "vue";
// import axios from "axios";

export default Vue.extend({
  name: "Footer",

  data() {
    return {
      // CMS_API: process.env.VUE_APP_CMS_API,
      footerData: [],
      isOpen: false,
      state: "close",
    };
  },
  async created() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      // const footerData = await axios.get(this.CMS_API + "/footer");
      // this.footerData = footerData.data;
    },
  },
});


</script>
