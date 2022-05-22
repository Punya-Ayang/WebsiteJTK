<template>
    <div id="landing-page">
        <Navbar />
        <DetailAgenda />
        <Footer />
    </div>
</template>

<script>
import Vue from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import DetailAgenda from "../components/DetailAgenda.vue";

export default Vue.extend({
    components:{
    Navbar,
    Footer,
    DetailAgenda
},
    name:"DetailAgendaView",
});
</script>