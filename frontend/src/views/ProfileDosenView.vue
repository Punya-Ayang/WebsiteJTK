<template>
    <div id="profile-dosen">
        <Navbar />
        <ProfileDosen />
        <Footer />
    </div>
</template>

<script>
import Vue from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import ProfileDosen from "../components/ProfileDosen.vue";


export default Vue.extend({
    components:{
    Navbar,
    ProfileDosen,
    Footer

},
    name:"ProfileDosenView",
});
</script>