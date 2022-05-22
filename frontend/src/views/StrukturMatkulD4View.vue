<template>
    <div id="struktur-matkul-d4">
        <Navbar />
        <StrukturMatkulD4Table />
        <Footer />
    </div>
</template>

<style>

</style>

<script>
import Vue from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import StrukturMatkulD4Table from "../components/StrukturMatkulD4Table.vue"

export default Vue.extend({
    components:{
    Navbar,
    StrukturMatkulD4Table,
    Footer
},
    name:"StrukturMatkulD4View",
});
</script>