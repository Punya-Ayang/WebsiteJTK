<template>
    <div id="struktur-matkul-d4">
        <v-content>
            <div class="headline-middle">
                <h1>Struktur Mata Kuliah</h1>
            </div>
            <v-container>
                       <v-col
                        class="mx-1 pl-0 pb-0"
                        style="max-width: 10vw; min-width:1vw;"
                        >
                          <v-select
                            :items="semester"
                            label="Pilih Semester"
                            dense
                            solo
                            color="#fffff"
                          ></v-select>
                        </v-col>
            
                <div class="subheader-mtk pb-lg-5 pt-0">
                    <h1>D4 Teknik Informatika</h1>
                </div>
                <div>
                    <v-data-table
                        dense
                        :headers="headers"
                        :items="matkul"
                        item-key="name"
                        class="elevation-1"
                    ></v-data-table>
                </div>
            </v-container>
        </v-content>
    </div>
</template>

<style>

</style>

<script>
export default {
    data: () => ({
      matkul: [
        {
          name: 'Matematika Terapan',
          deskripsi: 'Mata kuliah dasar yang mempelajari tentang kalkulus I',
          sks: 3,
          skst: 3,
          sksp: 0,
          kode: '16KU34052',
          smt:'Semester 1'
        },
        {
          name: 'Dasar Dasar Pemrograman',
          deskripsi: 'Mata kuliah dasar untuk mempelajari algoritma',
          sks: 4,
          skst: 2,
          sksp: 2,
          kode: '16TIN4024',
          smt:'Semester 1'
        }
      ],
      headers: [
        {
          text: 'Nama Mata Kuliah',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Deskripsi', value: 'deskripsi',sortable: false },
        { text: 'SKS', value: 'sks' },
        { text: 'SKS Teori', value: 'skst' },
        { text: 'SKS Praktek', value: 'sksp' },
        { text: 'Kode', value: 'kode', sortable: false},
        { text: 'Semester',value:'smt'}
      ],
      
      semester :[
        '1','2','3','4','5','6'
      ],
      }),
}
</script>