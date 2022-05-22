<template>
    <div id="struktur-matkul-d3">
        <Navbar />
        <StrukturMatkulD3Table />
        <Footer />
    </div>
</template>

<style>

</style>

<script>
import Vue from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import StrukturMatkulD3Table from "../components/StrukturMatkulD3Table.vue"

export default Vue.extend({
    components:{
    Navbar,
    StrukturMatkulD3Table,
    Footer
},
    name:"StrukturMatkulD3",
});
</script>