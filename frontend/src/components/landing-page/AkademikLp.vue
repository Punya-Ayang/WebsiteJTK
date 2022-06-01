<template>
<v-app>
    <v-content>
         <section
       style="
       background-color: #E7E9ED;
       "
       >
        <v-layout
          column
          wrap
          align-center
        >
          <div 
          class="text-md-center pt-5 pr-10 pl-10 mb-10"
          style="
          color: #003399;
          font-size: 22px;">
              <h1 class="headline-lp pb-5">Akademik</h1>
              <p class="subheading">
                Jurusan pertama yang menyelenggarakan pendidikan profesional bidang teknologi informasi, JTK selalu dijadikan tolok ukur dan telah banyak memberikan bantuan teknis dan non-teknis kepada institusi lain maupun kepada masyarakat umum
              </p>
          </div>

          <div class="content">
              <v-row
              >
                <v-col class="content">
                      <v-img 
                      max-width="250"
                      max-height="auto"                      
                      src="../../assets/MengapaJTK.png"></v-img>
                      <h2>Mengapa JTK?</h2>
                      <p>Jurusan penyelenggara pendidikan diploma teknologi informasi yang pertama di Indonesia. </p>
                </v-col>
                <v-col class="content pt-12">
                      <v-img 
                      max-width="250"
                      max-height="auto"  
                      src="../../assets/TentangProdi.png"></v-img>
                      <h2>Tentang Prodi</h2>
                      <p>Terdapat dua Prodi</p>
                      <p> D-3 Prodi Teknik Informatika & D-4 Prodi Teknik Informatika</p>
                </v-col>
                <v-col class="content">
                      <v-img 
                      max-width="250"
                      max-height="auto"  
                      src="../../assets/KuliahdiJTK.png"></v-img>
                      <h2>Bagaimana Kuliah Di JTK?</h2>
                      <p>Menyediakan Fasilitas Sarana dan Prasarana yang menopang pembelajaran di JTK</p>
                </v-col>
              </v-row>
          </div>

        </v-layout>
      </section>
    </v-content>
</v-app>
</template>

<style>
.content{
    color: #003399;
    justify-content: center;
    text-align: center;
    padding-left: 2cm;
    padding-right: 2cm;
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: 10px;
}
</style>