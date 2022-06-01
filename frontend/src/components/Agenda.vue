<template>
  <v-app id="inspire">
    <v-content>
      <section style="background-color: #eeeeee; height: 115px">
        <div></div>
        <!-- <v-container fluid class="grey lighten-5" style="height: 15vh; font-size: xx-large;text-align: center; color: #003399;"> -->
        <h1
          class="text-no-wrap pt-lg-8 pb-lg-8"
          style="width: 100rem; grey lighten-9 height: 15vh; font-size: xx-large;text-align: center; color: #003399;"
        >
          Agenda
        </h1>
      </section>
      <v-section class="mt-lg-8 mb-lg-8">
        <v-container style="display: flex">
          <v-container>
            <v-col v-for="(item, i) in items" :key="i" cols="12">
              <v-card v-if="new Date(item.tanggal_kegiatan) >= new Date(dates[0]) && new Date(item.tanggal_kegiatan) <= new Date(dates[1])"
                style="border: 1px solid white"
                max-width="360"
                outlined
                color="ffffff"
              >
                <v-list-item three-line>
                  <v-list-item-avatar tile size="100"
                    ><v-img :src="item.image.url"></v-img
                  ></v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title class="text-h6 mb-1" v-text="item.judul_kegiatan">
                    </v-list-item-title>
                    <v-list-item-subtitle
                      v-text="item.tanggal_kegiatan"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-col>
          </v-container>
          <v-container class="ml-lg-16 pl-lg-16">
            <v-container class="ml-lg-16 pl-lg-16">
              <v-text-field
                v-model="dateRangeText"
                :available-dates='{ start: new Date(), end: null }'
                label="Date range"
                prepend-icon="mdi-calendar"
                readonly
              ></v-text-field>
              <v-date-picker v-model="dates" range></v-date-picker>
              <v-col cols="12" sm="6"> </v-col>
            </v-container>
          </v-container>
        </v-container>
      </v-section>
    </v-content>
  </v-app>
</template>
<script>
import axios from "axios";

export default {
 
  created() {
    this.today = new Date();
    this.today = String(this.today.getFullYear()) + '-' + String(this.today.getMonth() + 1).padStart(2, '0') + '-'+ String(this.today.getDate()).padStart(2, '0')
    var date = this.today;
    this.dates = [date, date];
    console.log(date);
    axios
      .get("https://cms-web-jtk-kartikamilenda.cloud.okteto.net/acaras?tanggal_kegiatan_gt=" + date)
      .then((res) => {
        this.items = res.data;
        console.log(this.items);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  data: () => ({
    today: [],
    dates: [],
    items: [],
  }),
  computed: {
    dateRangeText() {
      return this.dates.join(" ~ ");
    },
  },

  dialog: false,
};
</script>