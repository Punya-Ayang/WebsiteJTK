import Vue from 'vue'
import VueRouter from 'vue-router'
import lightbox from 'vlightbox'
import LandingPage from '../views/LandingPage.vue'
import GalleryView from '../views/GalleryView.vue'
import ArtikelDaftarPrestasiView from '../views/ArtikelDaftarPrestasiView.vue'
import DaftarPrestasiView from '../views/DaftarPrestasiView.vue'
import DetailGalleryView from '../views/DetailGalleryView.vue'
import ProfilePegawaiView from '../views/ProfilePegawaiView.vue'
import ProfileTendikView from '../views/ProfileTendikView.vue'
import ProfileProdD3View from '../views/ProfileProdD3View.vue'
import AgendaView from '../views/AgendaView.vue'
import DetailAgendaView from '../views/DetailAgendaView.vue'
import KurikulumProfilLulusanD4View from '../views/KurikulumProfilLulusanD4View.vue'
import ProfileJurusanView from '../views/ProfileJurusanView.vue'
import KurikulumView from '../views/KurikulumView.vue'
import ProfileLulusanD3 from '../views/ProfileLulusanD3.vue'
import ArtikelDetailKerjaSama from '../views/ArtikelDetailKerjaSama.vue'
import ProfileDosenView from '../views/ProfileDosenView.vue'

Vue.use(VueRouter)
Vue.use(lightbox)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/gallery',
    name: 'GalleryView',
    component: GalleryView
    
  },
  {
    path: '/artikelDaftarPrestasi',
    name: 'ArtikelDaftarPrestasiView',
    component: ArtikelDaftarPrestasiView
    
  },
  {
    path: '/DaftarPrestasi',
    name: 'DaftarPrestasiView',
    component: DaftarPrestasiView
    
  },
  {
    path: '/DetailGallery',
    name: 'DetailGalleryView',
    component: DetailGalleryView
    
  },
  {
    path: '/ProfilePegawai',
    name: 'ProfilePegawaiView',
    component: ProfilePegawaiView
    
  },
  {
    path: '/profile-tendik',
    name: 'ProfileTendikView',
    component: ProfileTendikView
    
  },
  {
    path: '/profile-prodi-D3',
    name: 'ProfileProdD3View',
    component: ProfileProdD3View
    
  },
  {
    path: '/agenda',
    name: 'AgendaView',
    component: AgendaView
    
  },
  {
    path: '/detail-agenda',
    name: 'DetailAgendaView',
    component: DetailAgendaView
  },{
    path: '/profile-jurusan',
    name: 'ProfileJurusanView',
    component: ProfileJurusanView
    
  },
  {
    path: '/kurikulum',
    name: 'KurikulumView',
    component: KurikulumView
    
  },
  {
    path: '/profile-lulusan-d3',
    name: 'ProfileLulusanD3',
    component: ProfileLulusanD3
    
  },
  {
    path: '/artikel-detail-kerjasama',
    name: 'ArtikelDetailKerjaSama',
    component: ArtikelDetailKerjaSama
    
  },
  {
    path: '/profile-dosen',
    name: 'ProfileDosenView',
    component: ProfileDosenView
    
  },
  {
    path: '/kurikulum-profil-lulusan-d4',
    name: 'KurikulumProfilLulusanD4View',
    component: KurikulumProfilLulusanD4View
    
  },
  {
    path: "/:catchAll(.*)",
    redirect: () => {
      // the function receives the target route as the argument
      // we return a redirect path/location here.
      return { path: "/" };
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router