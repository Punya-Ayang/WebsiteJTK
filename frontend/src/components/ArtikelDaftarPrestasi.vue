<template>
<v-app id="inspire">
    <v-toolbar dark color="#003399" style="max-height:10vh;">
      <v-toolbar-title class="white--text">
        <div class="image" style="max-width: 8vw; min-width:1vw;height: 3.8vw;">
          <img class="logo" src="../assets/logoPolban.png" width="50x">
        </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
         <v-tab
         v-for="item in nav"
           :key="item.icon"
           to="#"
           :title="item.title"
           flat
         >{{ item.text }}
         </v-tab>
      </v-toolbar-items>
      <v-layout 
      row align-center style="max-width: 15vw; min-width:1vw;"
      class="mx-4">
        <v-text-field
          filled
          rounded
          dense
          label="Search"
          single-line
          background-color="#00000"
          color="black"
          hide-details
        >
        <v-icon style="#00000">mdi-magnify</v-icon>
        </v-text-field>
      </v-layout>
      <v-col
      class="mx-1"
      style="max-width: 8vw; min-width:1vw;height: 4.5vw;"
      >
        <v-select
          :items="items"
          label="IDN"
          dense
          solo
          color="#fffff"
        ></v-select>
      </v-col>
    </v-toolbar>

    <v-content>
        <section>
            <v-container fluid class="grey lighten-5" style="height: 15vh; font-size: xx-large;text-align: center; color: #003399;">
                <h1>JTK Memperoleh 3 Medali pada PIMNAS</h1>
                <p style="font-size: medium;">09/05/2022 / Kejuaraan</p>
            </v-container>
        </section>
        <v-spacer></v-spacer>

        <section>
            <v-container fluid>
                <v-row align="center" justify="center">
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
            <v-container>
                <v-row align="center" justify="center">
                <v-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra posuere volutpat. Etiam nec tortor quis purus fermentum dapibus ac vitae ex. Duis sodales sit amet ex non imperdiet. Vivamus leo ex, pretium et malesuada sed, auctor a libero. Nullam scelerisque feugiat convallis. In eget ullamcorper tortor. Cras nec vestibulum urna. Nullam quis magna quis tellus ultricies interdum. Suspendisse vel bibendum lectus, vitae eleifend enim. Cras tristique est et luctus sollicitudin. Quisque ullamcorper gravida nibh, sed ullamcorper metus pretium quis. Proin vulputate purus at fermentum mattis. Vivamus lobortis mollis convallis. Aenean mattis sed orci non varius. Vivamus elementum luctus fermentum. Maecenas mi diam, varius nec magna vel, pellentesque fermentum magna.
                Vestibulum condimentum arcu at velit eleifend, eget scelerisque orci fermentum. Nulla imperdiet nunc sit amet turpis ultrices, ac porta lacus dapibus. Sed dignissim, est vitae feugiat faucibus, leo arcu posuere turpis, vel sollicitudin sapien diam a enim. Nam ex arcu, iaculis pharetra fermentum nec, cursus volutpat leo. Vestibulum ullamcorper malesuada mattis. Cras sed nisl ornare, dapibus metus non, consectetur dolor. Donec ligula urna, porttitor vitae ipsum a, eleifend mattis sapien. Curabitur sed lorem ut erat tristique viverra a non orci. Sed enim felis, dignissim sit amet lorem quis, ultrices feugiat ligula. Phasellus faucibus ex a nisl scelerisque molestie. Vivamus vulputate, neque vel sodales luctus, orci elit scelerisque arcu, et elementum enim risus blandit nunc.
                Fusce ligula dolor, ornare at interdum eu, sodales ac tortor.drerit nisi.
                </v-text>
                </v-row>
            </v-container>
        </section>
        <v-spacer></v-spacer>
        <section>
            <v-container fluid>
            <h2 style="text-align: center; padding-bottom: 20px;">Share On</h2>

            <v-row align="center" justify="center">
            <div class="text-center">
                <v-btn
                    class="mx-2"
                    fab
                    dark
                    outlined
                    large
                    color="#003399"
                    >
                    <v-icon dark>
                        mdi-twitter
                    </v-icon>
                    </v-btn>
                    <v-btn
                    class="mx-2"
                    fab
                    outlined
                    dark
                    large
                    color="#003399"
                    >
                    <v-icon dark>
                        mdi-facebook
                    </v-icon>
                    </v-btn>
                    <v-btn
                    class="mx-2"
                    fab
                    dark
                    outlined
                    large
                    color="#003399"
                    >
                    <v-icon dark>
                        mdi-google-plus
                    </v-icon>
                    </v-btn>
            </div>
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