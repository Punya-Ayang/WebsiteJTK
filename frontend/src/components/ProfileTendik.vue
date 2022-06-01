<template>
  <v-app id="inspire">
 <v-content>
     <v-section>
         <div class="prof-tndk">
            <h1>Profile Tendik</h1>
         </div>
     </v-section>
    <v-container class="container-tdk pb-10 mb-15">
      <v-row>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="20"
          sm="4"        
        >
        <v-card
          :loading="loading"
          shaped
          max-width="374"
          max-height="874"
          color="#6F9CEB"
          class="rounded-card"
        >
        <div class="text-center pt-10">
          <v-avatar
          size="230"
          text-center
          >
          <v-img
            :src="item.profil.url"
          ></v-img>
          </v-avatar>
        </div>
        <div class="biodata">
          <h3 v-text="item.nama"></h3>
          <subtitle-1 v-text="item.nip"></subtitle-1>
        <div class="pt-5">
          <subtitle-1>Contact:</subtitle-1>
          <br>
          <subtitle-1 v-text="item.email"></subtitle-1>
          <br>
          <subtitle-1 v-text="item.no_hp"></subtitle-1>
        </div>
        </div>
        </v-card>
        </v-col>
      </v-row>     
    </v-container>
 </v-content>
  </v-app>
</template>

<style>
.prof-tndk{
  color:#003399;
  margin-top: 20px;
  padding-top: 30px;
  padding-bottom: 40px;
  margin-left: 30px;
  padding-left: 150px;
}
.biodata{
  color: white;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
}
.rounded-card{
  border-radius: 50px;
}

</style>

<script>
export default{
 
props: ["items"],
  data () {
    return {
      dialog: false,
    }
  }
};
</script>