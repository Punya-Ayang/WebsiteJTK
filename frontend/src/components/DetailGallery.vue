<template>
  <v-app id="inspire">
    <v-content>
      <section>
        <v-container
          fluid
          class="grey lighten-5"
          style="
            height: 15vh;
            font-size: xx-large;
            text-align: center;
            color: #003399;
          "
        >
          <h1>Gallery</h1>
        </v-container>
      </section>
      <v-spacer></v-spacer>
      <section>
        <div class="subheadline-dgl">
          <h1 v-text="item.judul"></h1>
          <p>By Admin</p>
        </div>
        <div class="detail-gl">
          <!-- <v-row> -->
            <!-- <v-col
              v-for="n in images"
              :key="n"
              class="d-flex child-flex pl-10 pr-10"
              cols="4"
            > -->
              <lightbox :images="images"></lightbox>
            <!-- </v-col> -->
          <!-- </v-row> -->
        </div>
      </section>
    </v-content>
  </v-app>
</template>
<style>
.subheadline-dgl {
  text-align: center;
  padding-top: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  color: #003399;
}
.detail-gl {
  padding-bottom: 50px;
  margin-bottom: 20px;
}
</style>
<script>
export default {
 
  props: ["item", "images"],
  data() {
    return {
      dialog: false,
    //   images: [
    //     {
    //       src: "https://unsplash.it/500",
    //     },
    //     {
    //       src: "https://unsplash.it/501",
    //     },
    //   ],
    };
  },
};
</script>