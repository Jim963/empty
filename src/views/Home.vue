<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {};
  },
  async mounted() {
    await this.testAxios();
    await this.testAxios2();
    await this.testAxios3();
  },
  methods: {
    async testAxios() {
      const api = `http://202.182.124.162:81/user-data`;
      let res = await this.$axios.get(api);
      console.log("個人資訊", res.data);
    },
    async testAxios2() {
      const api = `http://202.182.124.162:81/porfolios`;
      let res = await this.$axios.get(api);
      console.log("作品", res.data);
    },
    testAxios3() {
      this.$store.dispatch("testStore/testAxios").then((res) => {
        console.log("vuex測試", res.data);
      });
    },
  },
};
</script>
