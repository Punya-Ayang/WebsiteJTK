<template>
    <div id="struktur-matkul-d3">
        <v-content>
            <div class="headline-middle">
                <h1>Struktur Mata Kuliah</h1>
            </div>
            <v-container>
                <div class="subheader-mtk pb-5">
                    <h1>D3 Teknik Informatika</h1>
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
          name: 'PKN',
          deskripsi: 'Mata kuliah umum yang mempelajari tentang kewarganegaraan',
          sks: 2,
          skst: 2,
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
    }),
  }
</script>