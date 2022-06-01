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
      </section>
    </v-content>
  </v-app>
</template>

<script>
import axios from "axios"

export default {
  el: "#app",
  data() {
    return {
      dialog: false,
      items: [],
    };
  },
  created() {
    axios
      .get("http://localhost:1337/artikels?_start=0&_limit=3")
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