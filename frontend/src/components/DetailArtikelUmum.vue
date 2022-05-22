<template>
<v-app id="inspire">
    <v-content>
      <section>
        <v-container
          fluid
          class="grey lighten-5"
          style="
            height: 15vh;
            font-size: xx-large;
            text-align: center;
            color: #003399;
          "
        >
          <h1 v-text="item.title"></h1>
          <p style="font-size: medium" v-text="item.artist"></p>
        </v-container>
      </section>
        <v-spacer></v-spacer>

        <section>
            <v-container>
                <v-row align="center" >
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
                <v-container>
                <v-row align="center" justify="center">
                <v-text>
                Presiden Joko Widodo meminta Kabinet Indonesia Maju untuk mempercepat transformasi digital di Indonesia. Salah satu langkahnya yaitu melalui persiapan Sumber Daya Manusia talenta digital. Memenuhi arahan tersebut, Kementerian Komunikasi dan Informatika hadir kembali dengan pelatihan daring Vocational School Graduate Academy (VSGA) dan Fresh Graduate Academy (FGA) untuk menyiapkan talenta andal yang #makinjagodigital.
                <br><br>
                VSGA dan FGA merupakan bagian dari Program Digital Talent Scholarship 2020. Setiap peserta terpilih berkesempatan mengikuti pelatihan dan sertifikasi untuk meningkatkan keterampilan di bidang IT. Pelaksanaan VSGA bekerja sama dengan Unit Pelaksana Teknis Kementerian Kominfo dan Mitra Perguruan Tinggi ternama yang tersebar di seluruh Indonesia serta didukung oleh Global Technology Companies untuk FGA. Tahun ini, beradaptasi dengan kebiasaan baru, VSGA dan FGA berlangsung dalam jaringan (online). Materi pelatihan yang diberikan terdiri dari technical skills dan soft skills development.
                <br><br>
                Pelatihan VSGA membuka pendaftaran mulai 11 Agustus 2020 dengan 7 tema pelatihan. Pelatihan ini diperuntukkan bagi Lulusan SMK, D3 dan D4 jurusan TIK, Elektro, Telekomunikasi, Desain Komunikasi Visual, Animasi, Multimedia, atau yang terkait; sedangkan pelatihan FGA membuka pendaftaran mulai 14 Agustus 2020 dengan 7 tema pelatihan, diperuntukan bagi Lulusan D3, D4, atau Strata-1 yang terkait terkait dalam bidang TIK, MIPA, dan Teknik lainnya.
                <br><br>
                Program Digital Talent Scholarship dapat diakses secara GRATIS tanpa dipungut biaya apapun dan peserta akan mendapatkan Sertifikat.
                <br><br>
                <h4>INFORMASI, PERSYARATAN DAN PENDAFTARAN</h4>
                <br>
                Politeknik Negeri Bandung bekerjasama pada program VSGA dengan skema sebagai berikut :
                <br><br>
                <h5>Mobile Programmer</h5>
                &bull;Kriteria : D3 / D4 Bidang Manajemen Informatika / Teknik Informatika dan Komputer
                <br>
                &bull;Kuota : 50
                <br>
                &bull;Link Pendaftaran : https://digitalent.kominfo.go.id/pelatihan/detail/395
                <br><br>
                <h5>Web Developer</h5>
                &bull;Kriteria : Lulusan SMK Bidang Rekayasa Perangkat Lunak / Teknik Informatika dan Komputer
                <br>
                &bull;Kuota : 50
                <br>
                &bull;Link Pendaftaran : https://digitalent.kominfo.go.id/pelatihan/detail/396
                <br>
                <br>
                <h5>Network Administrator</h5>
                &bull;Kriteria : Lulusan SMK Bidang Teknik Komputer dan Jaringan / Teknik Informatika dan Komputer
                <br>
                &bull;Kuota : 75
                <br><br>
                <h5>Link Pendaftaran : https://digitalent.kominfo.go.id/pelatihan/detail/394</h5>
                <br>
                <h4>
                UPDATE: Waktu pendaftaran diperpanjang sampai 15 September 2020.
                </h4>
                <br>
                Informasi program secara umum dapat dilihat di http://banjoo.id/dts-VSGA dan http://banjoo.id/dts-FGA (mulai 14 Agustus 2020) Segera daftar melalui website https://digitalent.kominfo.go.id.
                <br>
                <br>
                Ikuti sosial media kami untuk mendapatkan informasi-informasi terbaru :
                <br>
                Instagram: @digitalent.kominfo
                <br>
                Twitter: @DTS_Kominfo
                <br>
                Facebook & Telegram: Digital Talent Scholarship
                <br>
                <br>
                Stay safe & stay healthy Digiers!
                <br>
                <br>
                Salam,
                <br>
                Kementerian Komunikasi dan Informatika RI
                <br>
                <br>
                </v-text>
                </v-row>
                </v-container>
            </v-container>
        </section>
        <v-spacer></v-spacer>

    </v-content>
</v-app>
</template>
<script>
export default{
el: '#app',
  data: () => ({
    item:
    {
      src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
      title: "JTK Memperoleh 3 Mendali pada PIMNAS",
      artist: "09/05/2022 / Kejuaraan", 
    },
  }),
};
</script>