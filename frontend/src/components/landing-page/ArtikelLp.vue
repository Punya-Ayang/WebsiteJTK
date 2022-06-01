<template>
  <v-app id="Artikel-Lp">
    <v-content>
      <section>
        <div style="color: #003399; height: 50px; font-size: x-large">
          <h1 class="headline-lp text-md-center pt-5">Artikel Terkini</h1>
        </div>

        <v-row no-gutters>
          <v-col v-for="(item, i) in items" :key="i" cols="12" sm="4">
            <v-card :loading="loading" class="mx-auto my-12" max-width="374">
              <v-img height="250" :src="item.banner.url"></v-img>
              <v-card-title v-text="item.title"></v-card-title>
              <v-card-text v-text="item.body"> </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-col class="px-100 pb-10">
          <div class="text-center">
            <v-btn
              medium
              color="#E6E6E6"
              dark
              style="color: black"
              to="/daftar-artikel"
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

export default {
 
  data() {
    return {
      dialog: false,
      items: [],
    };
  },
  created() {
    axios
      .get("https://cms-web-jtk-kartikamilenda.cloud.okteto.net/artikels?_start=0&_limit=3")
      .then((res) => {
        this.items = res.data;
        this.items.forEach((artikel) => {
          artikel.body = artikel.body.slice(0, 300) + "...";
          console.log(artikel.body);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>