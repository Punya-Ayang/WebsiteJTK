<template>
    <div id="landing-page">
        <Navbar />
        <Agenda />
        <Footer />
    </div>
</template>

<script>
import Vue from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Agenda from "../components/Agenda.vue";

export default Vue.extend({
    components:{
    Navbar,
    Agenda,
    Footer
},
    name:"AgendaView",
});
</script>