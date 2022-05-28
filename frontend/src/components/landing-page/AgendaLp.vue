<template>
<v-app>
    <v-content>
         <section
       style="
       background-color: #EEEEEE;
       height: 400px;
       "
       >
          <div 
          class="text-md-center pt-10 pb-10"
          style="
          color: #003399;
          font-size: x-large;">
          <h1>Agenda</h1>
          </div>

        <v-row no-gutters>
          <v-col
            v-for="(item, i) in items"
            :key="i"
            cols="12"
            sm="4"
          >
          <v-card
          class="mx-auto"
          max-width="344"
          max-height="250px"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-avatar
              tile
              size="80"
              :src="item.src"
            >
            <v-img :src="item.src"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="text-h5" v-text="item.title"> 
              </v-list-item-title>
              <v-list-item-subtitle v-text="item.date"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
          </v-col>
        </v-row>
        
        <v-col class="px-100 pt-10 pb-10">
          <div class="text-center">
            <v-btn
              medium
              color="#E6E6E6"
              dark
              style="color: black"
            >
              Lihat Selengkapnya
            </v-btn>
          </div>
        </v-col>
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
          title: 'Webinar Cloud Computing',
          date:'11-11-11'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Webinar Cloud Computing',
          date:'11-11-11'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Webinar Cloud Computing',
          date:'11-11-11'
        }
      ]
    }
  }
};
</script>