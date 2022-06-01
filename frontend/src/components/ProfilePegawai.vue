<template>
  <v-app id="profile-pegawai">
 <v-content>
     <v-section>
         <div class="headline-infopg mt-lg-16">
             <h1>Info Pegawai</h1>
         </div>
     </v-section>

    <v-section>
        <v-container>
            <v-div class="button">
                <v-btn
                    dark
                    x-large
                    to="/profile-tendik"
                    >
                    <v-icon>mdi-account-box</v-icon>
                    <h3>Tendik</h3>
                </v-btn>
                <v-btn
                    dark
                    x-large
                    class="button-2"
                    to="/profile-dosen"
                    >
                    <v-icon>mdi-account-box-outline</v-icon>
                    <h3>Dosen</h3>
                </v-btn>
                                
            </v-div>
        </v-container>
    </v-section>
 </v-content>
  </v-app>
</template>

<style>
.headline-infopg{
    height: 100px;
    width: 400px;
    background-color: #EEEEEE;
    text-align: justify;
    padding-top: 28px;
    margin-top: 80px;
    color: #003399;
    position: relative;
    z-index: 1;
    text-align: center;
}
.button{
    padding-top: 4cm;
    padding-bottom: 4cm;
    padding-left: 30px;
    padding-right: 20px;
    justify-content: center;
    align-items: center;
    text-align: center  ;
    display: flex;
}
.button-2{
    margin-left: 50px;
    padding-left: 28px;
    margin-right: 50px;
}
</style>
<script>
export default{
  

};
</script>