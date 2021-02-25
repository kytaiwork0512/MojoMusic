<template>
  <div>
    <h1>Song List</h1>
    <list :list="listA"> </list>
    <!-- <audio
        crossOrigin="anonymous"
        :src="playNow.url"
        controls
      ></audio>
    {{ playNow.name }} -->
  </div>

  

</template>

<script>
import * as Parse from "parse";
import List from "./List.vue";
import { mapSongList } from "../assets/utils";

export default {
  name: "",
  components: {
    List,
  },
  fields: [],
  data() {
    return {
      listA: []
      // playNow: "",
    };
  },
  async created() {
    const listSongQuery = new Parse.Query("Song");
    listSongQuery.limit(100);
    listSongQuery.include(["album", "singer"]);
    const listSong = await listSongQuery.find();
    console.log("Danh sách nhạc nè: ", listSong);
    this.listA = mapSongList(listSong);
    console.log("this.list", this.listA);
  }
};
</script>

<style scoped>
div h1 {
  font-size: 3rem;
  font-weight: 700;
  color: #17a2b8;
  padding: 20px 0px;
  text-align: center;
}
</style>
