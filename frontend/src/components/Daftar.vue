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
          <h1>{{ title }}</h1>
        </v-container>
      </section>
      <v-spacer></v-spacer>

      <section>
        <v-container>
          <v-row dense>
            <v-container
              fill-height
              fluid
              cols="12"
              class="d-flex flex-no-wrap justify-space-between mb-lg-5"
              style="
                height: 5vh;
                font-size: xx-large;
                justify-content: left;
                color: #003399;
              "
            >
              <h6>{{ subtitle }}</h6>
            </v-container>
            <v-col v-for="(item, i) in pagedAssets" :key="`asset_index_${i}`" cols="12">
              <v-card
                tile
                color="#F0F0FF"
                class="mb-lg-10 d-flex flex-no-wrap justify-space-between"
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
                  <v-img
                    :src="item.banner.url"
                    height="210px"
                    max-width="210px"
                  ></v-img>
                </v-container>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>
      <div
        v-if="items === NULL"
        class="text-center pt-lg-10 pb-lg-10 mt-lg-10 mb-lg-10"
      >
        <h3 class="font-weight-bold">Not Found</h3>
        <h3 class="font-weight-medium">Gunakan kata kunci lainnya untuk</h3>
        <h3 class="font-weight-medium">hasil pencarian yang sesuai</h3>
      </div>
      <div v-else class="text-center mt-lg-5 mb-lg-10">
        <div>
          <v-pagination v-model="pageNo" :length="numPages"></v-pagination>
        </div>
      </div>
    </v-content>
  </v-app>
</template>
<script>
export default {
  el: "#app",
  props: ["title", "subtitle", "page", "dialog", "items", "path"],
  data: () => ({
    pageNo: 1,
    pageSize: 5,
  }),
  computed: {
    numPages() {
      // calculate the number of pages we have
      return Math.ceil(this.items.length / this.pageSize);
    },

    pagedAssets() {
      // get the start index for your paged result set.
      // The page number starts at 1 so the active item in the pagination is displayed properly.
      // However for our calculation the page number must start at (n-1)
      const startIndex = (this.pageNo - 1) * this.pageSize;

      // create a copy of your assets list so we don't modify the original data set
      const data = [...this.items];

      // only return the data for the current page using splice
      return data.splice(startIndex, this.pageSize);
    },
  },
};
</script>