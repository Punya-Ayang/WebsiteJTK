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
              <v-card
                style="border: 1px solid white"
                max-width="360"
                outlined
                color="ffffff"
              >
                <v-list-item three-line>
                  <v-list-item-avatar
                    tile
                    size="100"
                  ><v-img :src="item.src"></v-img></v-list-item-avatar>
                  

                  <v-list-item-content>
                    <v-list-item-title class="text-h6 mb-1" v-text=item.title>
                    </v-list-item-title>
                    <v-list-item-subtitle v-text=item.date></v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-col>
          </v-container>
          <v-container class="ml-lg-16 pl-lg-16">
            <v-container class="ml-lg-16 pl-lg-16">
              <v-text-field
                v-model="dateRangeText"
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
export default {
  el: "#app",
  data: () => ({
    dates: ["2019-09-10", "2019-09-20"],
    items: [
    {
      src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
      title: "Baksos Resiliensi",
      date: "2019-09-10"
    },
    {
      src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
      title: "JTK Berbagi",
      date: "2019-09-12"
    },
    {
      src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
      title: "Bukber JTK",
      date: "2019-09-14"
    }
  ],
  }),
  computed: {
    dateRangeText() {
      return this.dates.join(" ~ ");
    },
  },
  dialog: false,
};
</script>