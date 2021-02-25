<template>
  <div>
    <h1>Album Details</h1>
    <b-row>
      <b-col cols="3" class="col1">
        <label>Album:</label> {{ inforAlbum.name }} <br />
        <label>Ca Sĩ:</label> {{ inforAlbum.singerAlbum }} <br />
        <img :src="inforAlbum.picAlbum" /> <br />
      </b-col>
      <b-col cols="9" class="col2">
        <label class="col2__1">DANH SÁCH BÀI HÁT:</label> <br /><br />
        <list :list="songOfAlbum"></list> <br />
      </b-col>
    </b-row>

    <b-button variant="outline-primary">Delete Song</b-button>
  </div>
</template>

<script>
import * as Parse from "parse";
import List from "./List.vue";
import { mapSongList } from "../assets/utils";

export default {
  name: "album",
  components: {
    List
  },
  methods: {},
  data() {
    return {
      id: "",
      inforAlbum: {},
      songOfAlbum: []
    };
  },
  async created() {
    this.id = this.$route.params.id;
    //console.log(this.id);

    try {
      const listAlbumQuery = new Parse.Query("Album");
      listAlbumQuery.equalTo("objectId", this.id);
      const album = await listAlbumQuery.first();
      //console.log("chi tiet album", album);
      this.inforAlbum = {
        id: album.id,
        name: album.get("name"),
        singerAlbum: album.get("singer").get("name"),
        picAlbum: album.get("picUrl")._url
      };
    } catch (error) {
      console.log(error);
    }

    //Lấy tất cả bài hát trong album
    const listSongQuery = new Parse.Query("Song");
    listSongQuery.limit(50);
    listSongQuery.include(["album", "singer"]);
    listSongQuery.equalTo("album", this.id);
    const listSong = await listSongQuery.find();
    console.log("Danh sách nhạc trong album nè: ", listSong);
    this.songOfAlbum = mapSongList(listSong);
  }
};
</script>

<style scoped>
div {
  font-family: Arial, Helvetica, sans-serif;
}

div .col1,
div .col2__1 {
  padding-bottom: 30px;
  font-size: 20px;
  color: #17a2b8;
  font-weight: 700;
}
</style>
