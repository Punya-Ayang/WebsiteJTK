<template>
  <v-app id="inspire">
    <v-content>
      <section>
        <v-container
          fill-height
          fluid
          class="grey lighten-5"
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
          <v-row align="center" justify="center" class="mt-lg-10 mb-lg-10">
            <v-img
              max-height="670px"
              max-width="1200px"
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
                  <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                  <v-card-text v-text="item.Text"> </v-card-text>
                </div>
                <v-card-actions>
                  <v-btn
                    width="100%"
                    text
                    color="primary"
                    style="justify-content: right"
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
                <v-img :src="item.src" height="210px" max-width="210px"></v-img>
              </v-container>
            </v-card>
          </v-col>
          <v-col class="mb-lg-5 px-100 pt-10">
            <div class="text-center">
              <v-btn small color="#E6E6E6" dark> Lihat Selengkapnya </v-btn>
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
  el: "#app",
  data() {
    return {
      dialog: false,
      article: {
        title: "Info Kerja Sama",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra posuere volutpat. Etiam nec tortor quis purus fermentum dapibus ac vitae ex. Duis sodales sit amet ex non imperdiet. Vivamus leo ex, pretium et malesuada sed, auctor a libero. Nullam scelerisque feugiat convallis. In eget ullamcorper tortor. Cras nec vestibulum urna. Nullam quis magna quis tellus ultricies interdum. Suspendisse vel bibendum lectus, vitae eleifend enim. Cras tristique est et luctus sollicitudin. Quisque ullamcorper gravida nibh, sed ullamcorper metus pretium quis. Proin vulputate purus at fermentum mattis. Vivamus lobortis mollis convallis. Aenean mattis sed orci non varius. Vivamus elementum luctus fermentum. Maecenas mi diam, varius nec magna vel, pellentesque fermentum magna.Vestibulum condimentum arcu at velit eleifend, eget scelerisque orci fermentum. Nulla imperdiet nunc sit amet turpis ultrices, ac porta lacus dapibus. Sed dignissim, est vitae feugiat faucibus, leo arcu posuere turpis, vel sollicitudin sapien diam a enim. Nam ex arcu, iaculis pharetra fermentum nec, cursus volutpat leo. Vestibulum ullamcorper malesuada mattis. Cras sed nisl ornare, dapibus metus non, consectetur dolor. Donec ligula urna, porttitor vitae ipsum a, eleifend mattis sapien. Curabitur sed lorem ut erat tristique viverra a non orci. Sed enim felis, dignissim sit amet lorem quis, ultrices feugiat ligula. Phasellus faucibus ex a nisl scelerisque molestie. Vivamus vulputate, neque vel sodales luctus, orci elit scelerisque arcu, et elementum enim risus blandit nunc. Fusce ligula dolor, ornare at interdum eu, sodales ac tortor.drerit nisi.",
      },
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          title: "Kerjasama PT. BIMS",
          artist: "09/05/2022 / Kerjasama",
          Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra posuere volutpat. Etiam nec tortor quis purus fermentum dapibus ac vitae ex. Duis sodales sit amet ex non imperdiet. Vivamus leo ex, pretium et malesuada sed, auctor a libero. Nullam scelerisque feugiat convallis. In eget ullamcorper tortor. Cras nec vestibulum urna. Nullam quis magna quis tellus ultricies interdum. Suspendisse vel bibendum lectus, vitae eleifend enim. ",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          title: "Kerjasama PT. BIMS",
          artist: "09/05/2022 / Kerjasama",
          Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra posuere volutpat. Etiam nec tortor quis purus fermentum dapibus ac vitae ex. Duis sodales sit amet ex non imperdiet. Vivamus leo ex, pretium et malesuada sed, auctor a libero. Nullam scelerisque feugiat convallis. In eget ullamcorper tortor. Cras nec vestibulum urna. Nullam quis magna quis tellus ultricies interdum. Suspendisse vel bibendum lectus, vitae eleifend enim. ",
        },
      ],
    };
  },
};
</script>