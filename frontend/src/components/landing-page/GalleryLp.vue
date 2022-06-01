<template>
  <v-app>
    <v-content>
      <section>
        <div
          class="text-md-center pt-10"
          style="color: #003399; font-size: x-large"
        >
          <h1>Gallery</h1>
        </div>
        <v-row>
          <v-col
            v-for="(item, i) in items"
            :key="`asset_index_${i}`"
            cols="20"
            sm="4"
          >
            <v-card class="mx-auto" max-width="400">
              <a :href="path + item.id">
                <v-img
                  class="white--text align-end"
                  height="250px"
                  :src="item.media[0].url"
                >
                </v-img>
              </a>
              <v-card-subtitle class="pb-0"> Created By </v-card-subtitle>

              <v-card-text class="text--primary">
                <div>
                  <p v-text="item.judul"></p>
                </div>

                <div>
                  <p v-text="item.tanggal"></p>
                </div>
              </v-card-text>
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
              to="/gallery"
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
  el: "#app",
  created() {
    axios
      .get("http://localhost:1337/galleries")
      .then((res) => {
        this.items = res.data;
        console.log(this.items)
      })
      .catch((err) => {
        console.error(err);
      });
  },
  data() {
    return {
      dialog: false,
      items: [],
      path: "/detail-gallery?id=",
    };
  },
};
</script>