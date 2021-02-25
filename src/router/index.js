import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SongList from "../components/SongList.vue";
import SingerList from "../components/SingerList.vue";
import AlbumList from "../components/AlbumList.vue";
import DetailsListSinger from "../components/DetailsListSinger.vue";
import DetailsListAlbum from "../components/DetailsListAlbum.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/listSong",
    name: "SongList",
    component: SongList
  },
  {
    path: "/listSinger",
    name: "SingerList",
    component: SingerList
  },
  {
    path: "/listAlbum",
    name: "AlbumList",
    component: AlbumList
  },
  {
    path: "/singer-details/:id",
    name: "DetailsListSinger",
    component: DetailsListSinger
  },
  {
    path: "/album-details/:id",
    name: "DetailsListAlbum",
    component: DetailsListAlbum
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
