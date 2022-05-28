<template>
  <v-app id="Gallery">
    <v-content>
      <section class="headline-gl">
        <v-container>
          <h1>Gallery</h1>
        </v-container>
      </section>
      <v-spacer></v-spacer>
      <section class="content-gl pt-10 mt-10 pb-10 mb-10">
        <v-row>
          <v-col v-for="(item, i) in pagedAssets" :key="`asset_index_${i}`" cols="20" sm="4">
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
      </section>
      <div>
        <v-pagination v-model="pageNo" :length="numPages"></v-pagination>
      </div>
    </v-content>
  </v-app>
</template>

<style>
.headline-gl {
  height: 100px;
  background-color: #eeeeee;
  padding-top: 20px;
  margin-bottom: 25px;
  padding-bottom: 25px;
  text-align: center;
  color: #003399;
  position: relative;
  z-index: 1;
  font-size: x-large;
}
</style>
<script>
export default {
  el: "#app",
  props: ["items", "path"],
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