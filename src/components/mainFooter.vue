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
        @click="changeColorMode(item)"
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
        { name: "Dark mode",type:'dark', valuebg: "#2c3e50", valuecolor: "white",valuecomponents:'rgb(32, 56, 92)'},
        { name: "Light mode",type:'light', valuebg: "white", valuecolor: "#2c3e50",valuecomponents:'rgb(212, 238, 231)'},
      ],
    };
  },
  methods: {
    changeColorMode(data) {
      document.documentElement.style.setProperty("--backgroundColor", data.valuebg);
      document.documentElement.style.setProperty("--color", data.valuecolor);
            document.documentElement.style.setProperty("--component", data.valuecomponents);

    },
  },
};
</script>