<template>
  <div class="footer row align-items-center">
    <div class="col-2 col-lg-4"></div>
    <div
      class="col-4 col-lg-2 footer_colorbtn"
      v-for="(item, index) in colorMode"
      :key="index"
    >
      <div
        :class="['btn',item.type == 'dark' ?'btn-dark':'btn-light']"
        @click="changeColorMode(item.valuebg, item.valuecolor)"
      >
        {{ item.name }}
      </div>
    </div>

    <div class="col-2 col-lg-4"></div>
  </div>
</template>

<script>
export default {
  name: "mainfooter",
  data() {
    return {
      colorMode: [
        { name: "Dark mode",type:'dark', valuebg: "black", valuecolor: "white" },
        { name: "Light mode",type:'light', valuebg: "white", valuecolor: "black" },
      ],
    };
  },
  methods: {
    changeColorMode(bgcolor, color) {
      document.documentElement.style.setProperty("--backgroundColor", bgcolor);
      document.documentElement.style.setProperty("--color", color);
    },
  },
};
</script>