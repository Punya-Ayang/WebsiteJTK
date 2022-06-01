<template>
  <v-app id="inspire">
    <v-content>
      <section>
        <v-container
          fill-height
          fluid
          class="grey lighten-5 mt-lg-16"
          style="
            height: 15vh;
            font-size: xx-large;
            justify-content: center;
            color: #003399;
          "
        >
          <h1>{{ article.title }}</h1>
        </v-container>
      </section>
      <v-spacer></v-spacer>

      <section>
        <v-container fluid>
          <v-row align="center" justify="center" class="mt-lg-4">
            <v-img
              max-height="670px"
              max-width="1200px"
              class="mb-lg-4"
              src="../assets/Landing.png"
            ></v-img>
          </v-row>
        </v-container>
      </section>
      <v-spacer></v-spacer>
      <section>
        <v-container>
          <v-row align="center" justify="center">
            <p v-text="article.Text"></p>
          </v-row>
        </v-container>
      </section>
      <v-spacer></v-spacer>
      <section>
        <v-container>
          <v-row>
            <h2 style="color: #003399">Kerja Sama yang Pernah Dilakukan</h2>
          </v-row>
          <v-col v-for="(item, i) in items" :key="i" cols="12">
            <v-card
              tile
              color="#F0F0FF"
              class="mt-lg-5 mb-lg-5 d-flex flex-no-wrap justify-space-between"
            >
              <div class="ma-5">
                <div>
                  <v-card-title
                    class="text-h5"
                    v-text="item.title"
                    style="font-style: #00000; color: #003399"
                  ></v-card-title>
                  <v-card-subtitle v-text="item.date"></v-card-subtitle>
                  <v-card-text v-text="item.body"> </v-card-text>
                </div>
                <v-card-actions>
                  <v-btn
                    width="100%"
                    text
                    color="primary"
                    style="justify-content: right"
                    :href="path + item.id"
                  >
                    Selengkapnya
                  </v-btn>
                </v-card-actions>
              </div>
              <v-container
                fill-height
                height="100%"
                style="justify-content: right"
                ma-5
              >
                <v-img :src="item.banner.url" height="210px" max-width="210px"></v-img>
              </v-container>
            </v-card>
          </v-col>
          <v-col class="mb-lg-5 px-100 pt-10">
            <div class="text-center">
              <v-btn href="/daftar-kerja-sama" small color="#E6E6E6" dark style="color: black"> Lihat Selengkapnya </v-btn>
            </div>
          </v-col>
          <v-col class="mb-lg-5 px-100 pt-10">
            <div>
              <v-text>Jika tertarik untuk melakukan kerjasama, klik link berikut <a href>bit.ly/kerja-sama-jtk</a></v-text>
            </div>
          </v-col>
        </v-container>
      </section>
    </v-content>
  </v-app>
</template>
<script>
export default {
 
  props:["dialog", "path", "article", "items"],
}
</script>