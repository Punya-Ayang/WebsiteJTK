<template>
  <v-app id="inspire">
 <v-content>
     <v-section>
         <div flex-column mb-6>
        <v-card tile class="white" style="width: 25vw;height: 15vh; font-size: xx-large; color: #003399;">
            <h1>Profile Tendik</h1>
        </v-card>
         </div>
     </v-section>
    
    <v-section>
        <v-container>
                <v-row dense>
                    <v-col
                    v-for="(item, i) in items"
                    :key="i"
                    cols="12"
                    >
                    <v-card
                        tile
                        :color="item.color"
                    >
                        <div class="d-flex flex-no-wrap justify-space-between">
                        <v-avatar
                        class="ma-3"
                        size="125"
                        tile
                        >
                        <v-img :src="item.src"></v-img>
                        </v-avatar>
                        <v-container>
                            <v-card-title
                            class="text-h5"
                            v-text="item.nama"
                            style="font-style: #00000;"
                            ></v-card-title>

                            <v-card-subtitle v-text="item.nip"></v-card-subtitle>
                            <v-card-subtitle v-text="item.email"></v-card-subtitle>
                            <v-card-subtitle v-text="item.nohp"></v-card-subtitle>
                        </v-container>
                        </div>
                    </v-card>
                    </v-col>
                </v-row>
            </v-container>
    </v-section>
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
          color: '#00000',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          nama: 'AbcdefghiaaaaaaaaaaaJklmno',
          nip: '10219217',
          email:'aku@email.com',
          nohp:'0812821989 ',
        },
        {
          color: '#00000',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          nama: 'Abcdefghi Jklmno',
          nip: '10219217',
          email:'aku@email.com',
          nohp:'0812821989 ',
        },
      ]
    }
  }
};
</script>