<template>
  <v-app id="inspire">
    <v-content>
      <section>
        <v-container fluid>
          <v-row align="center" justify="center" class="mt-lg-10 mb-lg-10">
            <v-card width="75%">
              <v-tabs background-color="#003399" dark center-active>
                <v-tab>Sarana</v-tab>
                <v-tab>Prasarana</v-tab>

                <v-tab-item>
                  <v-container fluid>
                    <v-carousel v-model="model">
                      <v-carousel-item v-for="img in img_sarana" :key="img">
                        <v-sheet color="EEEEEE" height="100%" tile>
                          <v-row
                            class="fill-height"
                            align="center"
                            justify="center"
                          >
                            <img :src="img.formats.medium.url" />
                          </v-row>
                        </v-sheet>
                      </v-carousel-item>
                    </v-carousel>
                  </v-container>
                </v-tab-item>
                <v-tab-item>
                  <v-container fluid>
                    <v-carousel v-model="model">
                      <v-carousel-item
                        v-for="img in img_prasarana"
                        :key="img"
                      >
                        <v-sheet color="EEEEEE" height="100%" tile>
                          <v-row
                            class="fill-height"
                            align="center"
                            justify="center"
                          >
                            <img :src="img.formats.medium.url" />
                          </v-row>
                        </v-sheet>
                      </v-carousel-item>
                    </v-carousel>
                  </v-container>
                </v-tab-item>
              </v-tabs>
            </v-card>
          </v-row>
        </v-container>
      </section>
    </v-content>
  </v-app>
</template>
<script>
import axios from "axios";

export default {
  el: "#app",
  created() {
    axios
      .get("http://localhost:1337/sarana-dan-prasarana")
      .then((res) => {
        this.img_sarana = res.data.sarana;
        this.img_prasarana = res.data.prasarana;
        console.log(this.sarana);
        console.log(this.prasarana);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  data() {
    return {
      dialog: false,
      img_sarana: [],
      //   "https://res.cloudinary.com/marssn/image/upload/v1653194256/sarana_kelas_2_1024x576_20bfa6fa40.jpg",
      //   "https://res.cloudinary.com/marssn/image/upload/v1653194256/sarana_kelas_1_1024x576_2984645af1.jpg",
      //   "https://res.cloudinary.com/marssn/image/upload/v1653194256/sarana_mading_mahasiswa_1024x576_5f323c3b5c.jpg",
      // ],
      img_prasarana: [],
      //   "https://res.cloudinary.com/marssn/image/upload/v1653194266/sarana_taman_depan_1024x576_c0a41844ad.jpg",
      //   "https://res.cloudinary.com/marssn/image/upload/v1653194266/sarana_rsg_1024x576_02472dd4c0.jpg",
      //   "https://res.cloudinary.com/marssn/image/upload/v1653194256/sarana_papan_jurusan_1024x576_02fba4cff6.jpg",
      // ],
    };
  },
};
</script>

