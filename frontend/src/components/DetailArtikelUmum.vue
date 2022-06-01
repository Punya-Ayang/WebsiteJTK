<template>
  <v-app id="inspire">
    <v-content>
      <section>
        <v-container
          fluid
          class="grey lighten-5 mt-lg-16"
          style="
            height: 15vh;
            font-size: xx-large;
            text-align: center;
            color: #003399;
          "
        >
          <h1 v-text="item.title"></h1>
          <p style="font-size: medium" v-text="item.date"></p>
        </v-container>
      </section>
      <v-spacer></v-spacer>

      <section>
        <v-container>
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
        <v-container class="mb-lg-10">
          <v-row align="center" justify="center">
            <p v-text="item.body"></p>
          </v-row>
        </v-container>
      </section>
      <v-spacer></v-spacer>
    </v-content>
  </v-app>
</template>
<script>
import axios from "axios";

export default {
  created() {
    const id = this.$route.query.id;
    console.log(id);
    axios
      .get("https://cms-web-jtk-kartikamilenda.cloud.okteto.netartikels/" + id)
      .then((res) => {
        this.item = res.data;
        console.log(this.item);
      })
      .catch((err) => {
        console.error(err);
      });
  },
 
  data: () => ({
    item: []
  }),
};
</script>