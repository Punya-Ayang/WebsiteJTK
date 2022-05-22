import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import GalleryView from '../views/GalleryView.vue'
import ArtikelDaftarPrestasiView from '../views/ArtikelDaftarPrestasiView.vue'
import DaftarPrestasiView from '../views/DaftarPrestasiView.vue'
import DetailGalleryView from '../views/DetailGalleryView.vue'
import ProfilePegawaiView from '../views/ProfilePegawaiView.vue'
import ProfileTendikView from '../views/ProfileTendikView.vue'
import ProfileProdD3View from '../views/ProfileProdD3View.vue'
import AgendaView from '../views/AgendaView.vue'

Vue.use(VueRouter)

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
    path: '/ProfileTendik',
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