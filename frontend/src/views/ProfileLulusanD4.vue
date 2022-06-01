<template>
  <div id="Profile-Lulusan-D3">
    <Navbar />
    <v-content>
      <div class="headline-middle mt-lg-16">
        <h1>Profile Lulusan</h1>
      </div>
      <v-container>
        <div>
          <h1>D4 Teknik Informatika</h1>
          <div class="list-lulusan">
            <p>
              Lulusan program studi Teknik Informatika dibekali dengan
              pengetahuan teoritis dan pengalaman praktek sehingga siap masuk ke
              dunia kerja. Lulusan dikategorikan sebagai Informatic-workers
              yaitu profesional yang bekerja dibidang informatika atau bidang
              lain yang berbasis teknologi informatika sebagai operator,
              programmer, atau analis dan designer
            </p>
          </div>
        </div>
        <div class="list-lulusan">
          <v-text class="font-weight-bold">Senior Programmer</v-text>
          <p>
            <v-text
              >Sarjana Terapan Teknik Informatika yang memiliki\nkemampuan
              menulis program perangkat lunak (coding). Ia mentransformasikan
              rancangan program yang dibuat oleh software
              designers/engineers/system analyst menjadi instruksi-instruksi
              yang dapat dikerjakan oleh komputer.</v-text
            >
          </p>
        </div>
        <div class="list-lulusan">
          <v-text class="font-weight-bold">Software Developer</v-text>
          <p>
            <v-text
              >Sarjana Terapan Teknik Informatika yang memiliki\nkemampuan
              mengembangkan aplikasi-aplikasi yang memungkinkan orang untuk
              menjalankan tugas-tugas spesifik pada komputer atau perangkat
              lain.</v-text
            >
          </p>
        </div>
        <div class="list-lulusan">
          <v-text class="font-weight-bold">Database Administrator</v-text>
          <p>
            <v-text
              >Sarjana Terapan Teknik Informatika yang memiliki kemampuan
              menyimpan dan mengorganisasikan data dengan menggunakan perangkat
              lunak khusus seperti DBMS dan lainnya. Ia memastikan bahwa data
              tersedia dan aman/terlindungi dari akses oleh pihak-pihak yang
              tidak berhak.</v-text
            >
          </p>
        </div>
        <div class="list-lulusan">
          <v-text class="font-weight-bold">Web Developer</v-text>
          <p>
            <v-text
              >Sarjana Terapan Teknik Informatika yang memiliki kemampuan
              merancang dan membuat websites. Ia bertanggung jawab terhadap rupa
              (looks and feels) dari website. Ia juga bertanggung jawab terhadap
              aspek-aspek teknis website, seperti performansi dan kapasitas,
              yang merupakan ukuran dari website’s speed dan sejauh mana website
              dapat menangani traffic. Ia juga dimungkinkan untuk membuat konten
              dari website dan memiliki perhatian terhadap isu sekuritas dalam
              pengembangan dan penggunaan website.</v-text
            >
          </p>
        </div>
        <div class="list-lulusan">
          <v-text class="font-weight-bold">Multimedia Developer</v-text>
          <p>
            <v-text
              >Sarjana Terapan Teknik Informatika yang memiliki kemampuan
              profesional pengembangan multimedia yang menggabungkan desain dan
              pengetahuan teknis untuk penelitian, menganalisis, mengevaluasi,
              desain, memprogram, dan memodifikasi aplikasi yang menggabungkan
              teks, grafik, animasi, pencitraan, audiovideo display, dan media
              interaktif lainnya.</v-text
            >
          </p>
        </div>
        <div class="list-lulusan">
          <v-text class="font-weight-bold">Information System Analyst</v-text>
          <p>
            <v-text
              >Sarjana Terapan Teknik Informatika yang memiliki kemampuan
              mempelajari sistem-sistem berbasis TIK beserta
              prosedur-prosedurnya dan merancang solusi-solusi sistem informasi
              untuk membantu organisasi agar dapat beroperasi dengan lebih
              efisien dan efektif. Ia menerapkan TIK pada proses bisnis
              organisasi dengan cara memahami kebutuhan dan batasan keduanya
              (TIK dan bisnis).</v-text
            >
          </p>
        </div>
        <div class="list-lulusan">
          <v-text class="font-weight-bold">Computer Support Specialist</v-text>
          <p>
            <v-text
              >Sarjana Terapan Teknik Informatika yang memiliki kemampuan
              menyediakan bantuan dan advis kepada orang-orang dan
              organisasiorganisasi tentang bagaimana menggunakan perangkat lunak
              dan perlengkapan komputer. Sebutan lain: computer network support
              specialists, support information technology (IT) staff, dan
              computer user support specialists.</v-text
            >
          </p>
        </div>
        <div class="list-lulusan">
          <v-text class="font-weight-bold">Data Engineer</v-text>
          <p>
            <v-text
              >Sarjana Terapan Teknik Informatika yang memiliki kemampuan
              menyiapkan infrastruktur "data besar" (big data) untuk dianalisis
              oleh para data scientist. Mereka adalah software engineer yang
              merancang, membangun, mengintegrasikan data dari berbagai sumber,
              dan mengelola data besar, kemudian menuliskan query yang kompleks
              terkait data besar tersebut, memastikannya mudah diakses, bekerja
              dengan lancar. Sasarannya adalah mengoptimalkan kinerja ekosistem
              data besar perusahaan stakeholder atau minimal pada perusahaan
              tempat mereka bekerja.</v-text
            >
          </p>
        </div>
        <div class="list-lulusan">
          <v-text class="font-weight-bold">Quality Assurance Engineer</v-text>
          <p>
            <v-text
              >Sarjana Terapan Teknik Informatika yang memiliki kemampuan
              memantau dan memastikan setiap fase proses pengembangan perangkat
              lunak memenuhi persyaratan kualitas yang ditetapkan, memastikan
              bahwa perangkat lunak yang dihasilkan beserta seluruh komponen
              yang melingkupinya sesuai dengan standar yang ditetapkan oleh
              perusahaan pengembang, serta memastikan bahwa produk perangkat
              lunak yang dihasillkan berfungsi sebagaimana mestinya (memenuhi
              seluruh requirement) melalui proses pengujian perangkat lunak,
              sebelum dirilis ke publik/pengguna akhir.</v-text
            >
          </p>
        </div>
      </v-container>
    </v-content>
    <Footer />
  </div>
</template>

<style>
.list-lulusan {
  padding-top: 10px;
  margin-bottom: 10px;
  width: 1000px;
  font-size: large;
}
</style>
<script>
import Vue from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default Vue.extend({
  components: {
    Navbar,
    Footer,
  },
  name: "ProfileLulusanD3",
});
</script>