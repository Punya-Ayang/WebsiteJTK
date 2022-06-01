<template>
<v-app>
    <v-content>
         <section
       style="
       background-color: #EEEEEE;
       height: 400px;
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
            v-for="(item, i) in items"
            :key="i"
            cols="12"
            sm="4"
          >
          <v-card
          class="mx-auto"
          max-width="344"
          max-height="250px"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-avatar
              tile
              size="80"
              :src="item.image.url"
            >
            <v-img :src="item.image.url"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="text-h5" v-text="item.judul_kegiatan"> 
              </v-list-item-title>
              <v-list-item-subtitle v-text="item.tanggal_kegiatan"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
          </v-col>
        </v-row>
        
        <v-col class="px-100 pt-10 pb-10">
          <div class="text-center">
            <v-btn
              medium
              color="#E6E6E6"
              dark
              style="color: black"
              to="/agenda"
            >
              Lihat Selengkapnya
            </v-btn>
          </div>
        </v-col>
      </section>
    </v-content>
</v-app>
</template>

<script>
import axios from "axios"

export default{
el: '#app',
  created() {
    axios
      .get("http://localhost:1337/acaras?_start=0&_limit=3&_sort=tanggal_kegiatan:DESC")
      .then((res) => {
        this.items = res.data;
        console.log(this.items);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  data () {
    return {
      dialog: false,
      items:[]
    }
  }
};
</script>