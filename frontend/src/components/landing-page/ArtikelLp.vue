<template>
<v-app id="Artikel-Lp">
    <v-content>
              <section>
        
        <div style="
        color: #003399;
        height: 50px;
        font-size: x-large;">
          <h1 class="headline-lp text-md-center pt-5">Artikel Terkini</h1>
        </div>

        <v-row no-gutters>
          <v-col
            v-for="(item, i) in items"
            :key="i"
            cols="12"
            sm="4"
          >
          <v-card
            :loading="loading"
            class="mx-auto my-12"
            max-width="374"
          >
          <v-img
            height="250"
            :src="item.src"
          ></v-img>
          <v-card-title v-text="item.title"></v-card-title>
          <v-card-text
          v-text="item.artikel"
          >
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
      items:[
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'JTK Memperoleh 3 Medali pada PIMNAS',
          artikel: 'Bandung (2/10), Pekan Ilmiah Nasional atau Pimnas telah selesai diselenggarakan...'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'JTK Memperoleh 3 Medali pada PIMNAS',
          artikel: 'Bandung (2/10), Pekan Ilmiah Nasional atau Pimnas telah selesai diselenggarakan...'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'JTK Memperoleh 3 Medali pada PIMNAS',
          artikel: 'Bandung (2/10), Pekan Ilmiah Nasional atau Pimnas telah selesai diselenggarakan...'
        }
      ]
    }
  }
};
</script>