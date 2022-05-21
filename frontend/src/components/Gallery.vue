<template>
<v-app id="Gallery">
    <v-content>
        <section>
            <v-container fluid class="grey lighten-5" style="height: 15vh; font-size: xx-large;text-align: center; color: #003399;">
                <h1>Gallery</h1>
            </v-container>
        </section>
        <v-spacer></v-spacer>
        <section>
            <v-row>
                <v-col
                    v-for="n in 6"
                    :key="n"
                    cols="20"
                    sm="4"
                >
                <v-card
                class="mx-auto"
                max-width="400"
            >
                <v-img
                class="white--text align-end"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                >
                </v-img>

                <v-card-subtitle class="pb-0">
                Created By
                </v-card-subtitle>

                <v-card-text class="text--primary">
                <div>Dokumentasi Acara Webinar 2022</div>

                <div>09/02/2022</div>
                </v-card-text>
            </v-card>
                </v-col>
            </v-row>
        </section>
    </v-content>
</v-app>
</template>
<script>
export default{
el: '#app',
  data () {
    return {
      dialog: false,
      nav: [
        {
          text: 'Tentang JTK'
        },
        {
          text: 'Akademik'
        },
        {
          text: 'Article News'
        },
        {
          text: 'Gallery'
        },
        {
          text: 'Tracer Study'
        }
      ]
    }
  }
};
</script>