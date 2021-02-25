<template>
  <div>
    <h1>Singer Details</h1>
    <b-row class="row1">
      <b-col cols="3" class="col1">
        <label>Ca Sĩ: </label> {{ inforSinger.name }} <br />
        <label>Giới tính: </label> {{ inforSinger.gender }} <br />
        <label>Ngày sinh: </label> {{ inforSinger.birthday }} <br />
        <label>Quốc tịch: </label> {{ inforSinger.country }} <br />
      </b-col>
      <b-col cols="9" class="col2">
        <img :src="inforSinger.avatar" />
      </b-col>
    </b-row>
    <b-row class="row2">
      <b-col class="col3"> {{ inforSinger.description }} <br /> </b-col>
    </b-row>
    <b-row class="row3">
      <b-col class="col4">
        <label class="col4__1">DANH SÁCH BÀI HÁT:</label> <br /><br />
        <list :list="songOfSinger"></list>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import * as Parse from "parse";
import List from "./List.vue";
import { mapSongList } from "../assets/utils";

export default {
  name: "singer",
  components: {
    List
  },
  data() {
    return {
      id: "",
      inforSinger: {},
      songOfSinger: []
    };
  },
  async created() {
    this.id = this.$route.params.id;
    console.log(this.id);

    try {
      const listSingerQuery = new Parse.Query("Singer");
      listSingerQuery.equalTo("objectId", this.id);
      const singer = await listSingerQuery.first();
      //console.log("chi tieets singer", singer);
      this.inforSinger = {
        id: singer.id,
        name: singer.get("name"),
        gender: singer.get("gender"),
        birthday: singer.get("birthday"),
        country: singer.get("country"),
        avatar: singer.get("picUrl")._url,
        description: singer.get("desc") ? singer.get("desc") : ""
      };
    } catch (error) {
      console.log(error);
    }

    //Lấy tất cả bài hát của ca sĩ
    const listSongQuery = new Parse.Query("Song");
    listSongQuery.limit(30);
    listSongQuery.include(["album", "singer"]);
    listSongQuery.equalTo("singer", this.id);
    const listSong = await listSongQuery.find();
    console.log("Danh sách nhạc của ca sĩ nè: ", listSong);
    this.songOfSinger = mapSongList(listSong);
  }
};
</script>

<style scoped>
div {
  font-family: Arial, Helvetica, sans-serif;
}
div .row1 {
  padding-bottom: 30px;
  font-size: 20px;
  color: #17a2b8;
  font-weight: 700;
}

div .row2 {
  padding-bottom: 30px;
}

div .col4__1 {
  font-size: 20px;
  color: #17a2b8;
  font-weight: 700;
}
</style>
