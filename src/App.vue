<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link>  --- -->
      <!-- <router-link to="/about">About</router-link>  --- -->

      <!-- <router-link to="/list">List</router-link> |
      <router-link to="/listSong">List Song</router-link> |
      <router-link to="/listSinger">List Singer</router-link> |
      <router-link to="/listAlbum">List Album</router-link> -->

      <!-- <router-link to="/DetailsListSinger">Details List Singer</router-link> --- -->
      <!-- <router-link to="/DetailsListAlbum">Details List Album</router-link> -->

      <b-navbar toggleable="lg" type="dark" variant="info">
        <!-- <b-navbar-brand to='/list'>List</b-navbar-brand> -->
	
        <!-- Sildebar -->
		
        <div>
          <b-button v-b-toggle.sidebar-no-header><i class="fa fa-bars"></i></b-button>
          <b-sidebar
            id="sidebar-no-header"
            aria-labelledby="sidebar-no-header-title"
            no-header
            shadow
          >
            <template #default="{ hide }">
              <div class="p-3">
                <img src="./assets/qqqq.png" alt="logo" width="100%" /><br><br>
                <nav class="mb-3">
                  <b-nav vertical>
                    <b-nav-item active @click="hide"><i class="fa fa-home"></i> Trang chủ</b-nav-item><br>
                    <b-nav-item href="#link-1" @click="hide"
                      ><i class="fa fa-chart-bar"></i> Bảng xếp hạng</b-nav-item
                    ><br>
                    <b-nav-item @click="hide"
                      ><i class="fa fa-music"></i> Danh sách phát</b-nav-item
                    ><br>
                    <b-nav-item href="#link-1" @click="hide"
                      ><i class="fa fa-cloud-download-alt"></i> Tải xuống</b-nav-item
                    ><br>
                    <b-nav-item href="#link-1" @click="hide"
                      ><i class="fa fa-user"></i> Đăng nhập</b-nav-item
                    ><br>
                    <b-nav-item href="#link-1" @click="hide"
                      ><i class="fa fa-cog"></i> Thiết lập</b-nav-item
                    >
                  </b-nav>
                </nav>
                <b-button variant="primary" block @click="hide"
                  >Close</b-button
                >
              </div>
            </template>
          </b-sidebar>
        </div>

        <b-navbar-brand to="/listSong" class="navBar">List Song</b-navbar-brand>
        <b-navbar-brand to="/listSinger" class="navBar"
          >List Singer</b-navbar-brand
        >
        <b-navbar-brand to="/listAlbum" class="navBar"
          >List Album</b-navbar-brand
        >

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
              ></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit"
                >Search</b-button
              >
            </b-nav-form>

            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <b-container>
      <router-view />
    </b-container>

    <audio crossOrigin="anonymous" :src="playNow.url" controls autoplay></audio>
    {{ playNow.name }}
  </div>
</template>

<script>
import * as Parse from "parse";
import { environment } from "./environment";
import { mapGetters } from "vuex";

export default {
  name: "App",
  created() {
    this.initParse();
  },
  computed: {
    ...mapGetters({
      playNow: "getPlayNow",
    }),
  },
  methods: {
    initParse() {
      try {
        // eslint-disable-next-line
        Parse.initialize(environment.PARSE.APPLICATION_ID, "");
        // eslint-disable-next-line
        Parse.serverURL = environment.PARSE.SERVER_URL;
        window.Parse = Parse;
      } catch (error) {
        console.log("initParse__error", error);
      }
    },
  },
};
</script>

<style>
body {
  background: #d9a7c7; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #fffcdc,
    #d9a7c7
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #fffcdc,
    #d9a7c7
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  /* background-attachment: fixed; */
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
}
div .navBar {
  font-size: 25px;
  padding: 0 15px;
}
</style>
