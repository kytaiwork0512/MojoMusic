<template>
  <div>
    <h1>Album List</h1>
    <b-row>
      <b-col
        cols="3"
        v-for="album in listC"
        :key="album.id"
        class="text-center"
      >
        <router-link :to="`/album-details/${album.id}`">
          <b-img :src="album.albumCover" :alt="album.name"></b-img> <br />
          <label>Album:</label> {{ album.albumName }} <br /><br /><br />
        </router-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import * as Parse from "parse";

export default {
  name: "",
  data() {
    return {
      listC: []
    };
  },
  async created() {
    const listAlbumQuery = new Parse.Query("Album");
    listAlbumQuery.limit(50);
    listAlbumQuery.include(["singer"]);
    const listAlbum = await listAlbumQuery.find();
    console.log("Danh sách Album nè:", listAlbum);

    this.listC = listAlbum.map(item => {
      return {
        id: item.id,
        albumName: item.get("name"),
        albumCover: item.get("picUrl")._url,
        singerName: item.get("singer").get("name"),
        singerAvatar: item.get("singer").get("picUrl")._url
      };
    });
  }
};
</script>

<style>
div h1 {
  font-size: 3rem;
  font-weight: 700;
  color: #17a2b8;
  padding: 20px 0px;
  text-align: center;
}
</style>
