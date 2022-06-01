<template>
  <v-app id="inspire">
    <v-content>
      <section>
        <v-container>
          <v-row dense>
            <v-container
              fill-height
              fluid
              cols="12"
              class="d-flex flex-no-wrap justify-space-between mt-lg-16"
              style="font-size: xx-large; justify-content: left; color: #003399"
            >
              <h1>{{ title }}</h1>
            </v-container>
            <v-col cols="12">
              <v-container color="#F0F0FF" class="d-flex flex-no-wrap">
                <div>
                  <v-img
                    :src="items.profil.url"
                    height="210px"
                    max-width="210px"
                  ></v-img>
                </div>
                <div class="pl-lg-5" width="750px" style="justify-content: left">
                  <v-container class="pt-0 d-flex flex-no-wrap">
                    <v-container class="pt-0">
                      <v-container class="pt-0"><h4>Nama</h4></v-container>
                      <v-container><h4>NIP</h4></v-container>
                      <v-container><h4>Email</h4></v-container>
                      <v-container><h4>No.HP</h4></v-container>
                      <v-container><h4>KBK</h4></v-container>
                    </v-container>
                    <v-container class="pt-0 pl-lg-5">
                      <v-container class="pt-0"><h4>:</h4></v-container>
                      <v-container><h4>:</h4></v-container>
                      <v-container><h4>:</h4></v-container>
                      <v-container><h4>:</h4></v-container>
                      <v-container><h4>:</h4></v-container>
                    </v-container>
                    <v-container class="pt-0 pl-lg-5">
                      <v-container class="pt-0"
                        ><h4 v-text="items.nama"></h4
                      ></v-container>
                      <v-container><h4 v-text="items.nip"></h4></v-container>
                      <v-container><h4 v-text="items.email"></h4></v-container>
                      <v-container><h4 v-text="items.no_hp"></h4></v-container>
                      <v-container><h4 v-text="items.bidang_keilmuan.bidang"></h4></v-container>
                    </v-container>
                  </v-container>
                  <v-container>
                    <div>
                      <v-container class="pt-0 pl-lg-5">
                        <h2>Mata Kuliah yang Diampu</h2>
                      </v-container>
                    </div>
                    <div class="pt-0 pl-lg-5">
                      <v-card color="#6F9CEB">
                        <v-simple-table>
                          <template v-slot:default>
                            <thead>
                              <tr>
                                <th class="text-left">Mata Kuliah</th>
                                <th class="text-left">SKS</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="item in items.mata_kuliah_diampu" :key="item.nama_mata_kuliah">
                                <td>{{ item.nama_mata_kuliah }}</td>
                                <td>{{ item.sks_t + item.sks_p }}</td>
                              </tr>
                            </tbody>
                          </template>
                        </v-simple-table>
                      </v-card>
                    </div>
                  </v-container>
                  <v-container>
                    <div>
                      <v-container class="pt-0 pl-lg-5">
                        <h2>Penelitian Dosen</h2>
                      </v-container>
                    </div>
                    <div class="pt-0 pl-lg-5">
                      <v-card color="#6F9CEB">
                        <v-simple-table>
                          <template v-slot:default>
                            <thead>
                              <tr>
                                <th class="text-left">Judul</th>
                                <th class="text-left">Penyandang Dana</th>
                                <th class="text-left">Tahun</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="item in items.penelitian_dosens" :key="item.judul_penelitian">
                                <td>{{ item.judul_penelitian }}</td>
                                <td>{{ item.penyandang_dana }}</td>
                                <td>{{ item.tahun }}</td>
                              </tr>
                            </tbody>
                          </template>
                        </v-simple-table>
                      </v-card>
                    </div>
                  </v-container>
                  <v-container>
                    <div>
                      <v-container class="pt-0 pl-lg-5">
                        <h2>Publikasi</h2>
                      </v-container>
                    </div>
                    <div class="pt-0 pl-lg-5">
                      <v-card>
                        <v-simple-table color="#003399">
                          <template v-slot:default>
                            <thead>
                              <tr>
                                <th class="text-left">Publikasi</th>
                                <th class="text-left">Link</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="item in items.publikasi_dosens" :key="item.judul_publikasi">
                                <td>{{ item.judul_publikasi }}</td>
                                <td>{{ item.link_publikasi }}</td>
                              </tr>
                            </tbody>
                          </template>
                        </v-simple-table>
                      </v-card>
                    </div>
                  </v-container>
                </div>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </v-content>
  </v-app>
</template>
<script>
export default {
 
  props: ["title", "page", "dialog", "items"],
};
</script>