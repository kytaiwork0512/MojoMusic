<template>
  <div>
    <div @click="playMusic(s)" v-for="s in list" :key="s.id">
      <label></label> {{ s.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "list",
  props: {
    list: Array
  },
  fields: [],
  methods: {
    playMusic(song) {
      this.$store.dispatch("setPlayNow", song);
    }
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
