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
            <a href="../views/DetailGalleryView.vue">
                <v-img
                class="white--text align-end"
                height="250px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                >
                </v-img>
            </a>
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

<style>
.headline-gl{
    height: 100px;
    background-color: #EEEEEE;
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