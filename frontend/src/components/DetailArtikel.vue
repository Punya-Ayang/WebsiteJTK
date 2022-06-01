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
              :src="item.banner.url"
            ></v-img>
          </v-row>
        </v-container>
      </section>
      <v-spacer></v-spacer>
      <section>
        <v-container class="mb-lg-10">
          <v-row align="center" justify="left">
            <TextMarkdown v-bind="item" />
          </v-row>
        </v-container>
      </section>
      <v-spacer></v-spacer>
    </v-content>
  </v-app>
</template>
<script>
import TextMarkdown from "../components/TextMarkdown.vue"

export default {
components: {
  TextMarkdown
},
  el: "#app",
  props: ["item"],
};
</script>