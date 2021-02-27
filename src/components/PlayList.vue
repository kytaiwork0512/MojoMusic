<template>
  <div>
    <h1>PlayList</h1>
        <table class="table">
  <thead>
        <tr>
        <th scope="col">Tên Playlist</th>
        <th scope="col">Mô tả</th>
        <th scope="col">Hành động</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="playlist in listPlaylist" :key="playlist.id">
            <td>{{playlist.name}}</td>
            <td>{{playlist.desc}}</td>
            <td>
                <router-link :to="`/playlist-details/${playlist.id}`">
                    <button class="btn btn-primary">Chi tiết</button>
                </router-link>
            </td>

        </tr>
    </tbody>
    </table>
  </div>
</template>


<script>
import * as Parse from "parse";

export default {
  components: {  },
    name: "PlayList",
    data() {
        return {
            showAddPlayList: false,
            listPlaylist: [],
        };
    },
    methods: {

    },
    async created() {
        try {
            const listSongQuery = new Parse.Query("Playlist");
            listSongQuery.limit(5);
            const listSong = await listSongQuery.find();
            console.log("Danh sách nhạc nè: ", listSong);
            this.listPlaylist = listSong.map(playlist => {
                return {
                id: playlist.id,
                name: playlist.get("name"),
                desc: playlist.get("desc"),
             };
            });
            console.log("this.list", this.listPlaylist);    
        } catch (error) {
            console.log(error);
        }
        
    }
}
</script>

<style>

</style>