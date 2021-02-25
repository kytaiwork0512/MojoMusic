<template>
  <div>
    <h1 class="">Singer List</h1>
    <!-- BootstrapVue -->
    <b-row>
      <b-col
        cols="3"
        v-for="singer in listB"
        :key="singer.id"
        class="text-center"
      >
        <router-link :to="`/singer-details/${singer.id}`">
          <!-- <img :src="singer.singerAvatar"> -->
          <b-img
            :src="singer.singerAvatar"
            rounded="circle"
            :alt="singer.name"
          ></b-img>
          <br />
          <label>Ca Sĩ: </label> {{ singer.singerName }} <br /><br /><br />
        </router-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import * as Parse from "parse";
export default {
  name: "",
  components: {},
  data() {
    return {
      listB: []
    };
  },
  async created() {
    const listSingerQuery = new Parse.Query("Singer");
    listSingerQuery.limit(50);
    const listSinger = await listSingerQuery.find();
    console.log("Danh sách ca sĩ nè:", listSinger);
    this.listB = listSinger.map(item => {
      return {
        id: item.id,
        singerName: item.get("name"),
        singerAvatar: item.get("picUrl")._url
      };
    });
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
