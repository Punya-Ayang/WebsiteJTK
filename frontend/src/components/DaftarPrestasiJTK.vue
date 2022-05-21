<template>
<v-app id="inspire">
    <v-content>
        <section>
            <v-container fluid class="grey lighten-5" style="height: 15vh; font-size: xx-large;text-align: center; color: #003399;">
                <h1>Daftar Prestasi JTK</h1>
            </v-container>
        </section>
        <v-spacer></v-spacer>

        <section>
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
                        <div>
                            <v-card-title
                            class="text-h5"
                            v-text="item.title"
                            style="font-style: #00000;"
                            ></v-card-title>

                            <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                            <v-card-text v-text="item.Text"> </v-card-text>
                        </div>
                        <v-avatar
                            class="ma-3"
                            size="125"
                            tile
                        >
                            <v-img :src="item.src"></v-img>
                        </v-avatar>
                        </div>
                        <v-card-actions>
                            <v-btn
                                class="text-right"
                                text
                                color="primary"
                                >
                                Selengkapnya
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-col>
                </v-row>
                </v-container>
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
          color: '#F0F0FF',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'JTK Memperoleh 3 Medali pada PIMNAS',
          artist: '09/05/2022 / Kejuaraan',
          Text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra posuere volutpat. Etiam nec tortor quis purus fermentum dapibus ac vitae ex. Duis sodales sit amet ex non imperdiet. Vivamus leo ex, pretium et malesuada sed, auctor a libero. Nullam scelerisque feugiat convallis. In eget ullamcorper tortor. Cras nec vestibulum urna. Nullam quis magna quis tellus ultricies interdum. Suspendisse vel bibendum lectus, vitae eleifend enim. ',
        },
        {
          color: '#F0F0FF',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'JTK Memperoleh 3 Medali pada PIMNAS',
          artist: '09/05/2022 / Kejuaraan',
          Text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra posuere volutpat. Etiam nec tortor quis purus fermentum dapibus ac vitae ex. Duis sodales sit amet ex non imperdiet. Vivamus leo ex, pretium et malesuada sed, auctor a libero. Nullam scelerisque feugiat convallis. In eget ullamcorper tortor. Cras nec vestibulum urna. Nullam quis magna quis tellus ultricies interdum. Suspendisse vel bibendum lectus, vitae eleifend enim. ',
        },
        {
          color: '#F0F0FF',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'JTK Memperoleh 3 Medali pada PIMNAS',
          artist: '09/05/2022 / Kejuaraan',
          Text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra posuere volutpat. Etiam nec tortor quis purus fermentum dapibus ac vitae ex. Duis sodales sit amet ex non imperdiet. Vivamus leo ex, pretium et malesuada sed, auctor a libero. Nullam scelerisque feugiat convallis. In eget ullamcorper tortor. Cras nec vestibulum urna. Nullam quis magna quis tellus ultricies interdum. Suspendisse vel bibendum lectus, vitae eleifend enim. ',
        },
                {
          color: '#F0F0FF',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'JTK Memperoleh 3 Medali pada PIMNAS',
          artist: '09/05/2022 / Kejuaraan',
          Text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra posuere volutpat. Etiam nec tortor quis purus fermentum dapibus ac vitae ex. Duis sodales sit amet ex non imperdiet. Vivamus leo ex, pretium et malesuada sed, auctor a libero. Nullam scelerisque feugiat convallis. In eget ullamcorper tortor. Cras nec vestibulum urna. Nullam quis magna quis tellus ultricies interdum. Suspendisse vel bibendum lectus, vitae eleifend enim. ',
        },
      ]
    }
  }
};
</script>