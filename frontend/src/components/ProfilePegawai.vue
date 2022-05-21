<template>
  <v-app id="inspire">
 <v-content>
     <v-section>
         <div flex-column mb-6>
        <v-card tile class="grey lighten-1" style="width: 25vw;height: 15vh; font-size: xx-large; color: #003399;">
            <h1>Info Pegawai</h1>
        </v-card>
         </div>
     </v-section>

    <v-section>
             <v-card
                flat
                class="py-12"
            >
                <v-card-text>
                <v-row
                    align="center"
                    justify="center"
                >
                    <v-col cols="12">
                    
                    <v-btn
                    dark
                    x-large
                    >
                    <v-icon>mdi-account-box</v-icon>
                    </v-btn>

                    <v-btn
                    dark
                    x-large
                    >
                    <v-icon>mdi-account-box-outline</v-icon>
                    </v-btn>
                    </v-col>
                </v-row>
                </v-card-text>
            </v-card>
    </v-section>
 </v-content>
  </v-app>
</template>

<script>
export default{
  

};
</script>