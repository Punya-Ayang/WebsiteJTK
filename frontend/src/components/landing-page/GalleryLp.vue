<template>
<v-app>
    <v-content>
         <section>
          <div 
          class="text-md-center pt-10"
          style="
          color: #003399;
          font-size: x-large;">
          <h1>Gallery</h1>
          </div>
         <v-row no-gutters>
          <v-col
           v-for="(item, i) in gallery"
           :key="i"
            cols="6"
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
           </v-card>
          </v-col>
          </v-row>

          <v-col class="px-100 pb-10">
          <div class="text-center">
            <v-btn
              medium
              color="#E6E6E6"
              dark
              style="color: black"
              to="/gallery"
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
      gallery:[
        {
          src:'../../assets/gallery1.png'
        },
        {
          src:'../../assets/gallery1.png'
        },
        {
         src:'../../assets/gallery1.png'
        }
      ]
    }
  }
};
</script>