<template>
  <div class="inputType_div oftenuse_relative">
    <input
      v-if="type == 'input'"
      class="oftenuse_center"
      :type="type"
      v-model="inputValue"
      @change="inputChange()"
    />
    <input
      v-if="type == 'radio'"
      class="oftenuse_center"
      :type="type"
      v-model="radioValue"
      @change="changeRadio"
      @click="radioClick($event)"
    />

    <select
      v-if="type == 'select'"
      class="oftenuse_center"
      v-model="selectValue"
      @change="selectChange()"
      name=""
    >
      <option
        :value="item.value"
        v-for="(item, index) in selectOption"
        :key="index"
      >
        {{ item.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "inputType",
  data() {
    return {
      inputValue: this.inputCont ? this.inputCont : "",
      radioValue: "",
      radioChange: false,
      selectOption: [
        { name: "choose...", value: 'origin' },
        { name: "everyday", value: 'everyday' },
        { name: "per week", value: 'per week' },
        { name: "once", value: 'once' },
      ],
      selectValue: this.selectTime ? this.selectTime :'origin',
    };
  },
  props: {
    type: String,
    inputCont: String,
    whitchpick:Number,
    selectTime:String
  },
  methods: {
    inputChange() {
        this.$emit("inputChange",this.inputValue);
    },
    selectChange(){
        this.$emit("selectChange",this.selectValue);
    },
    radioClick(event) {
      window.setTimeout(() => {
        if (!this.radioChange) {
          event.target.checked = false;
          this.$emit("changeRadio",{'todoindex':this.whitchpick,
          'status':'cancel'});
        }else{
            this.$emit("changeRadio",{'todoindex':this.whitchpick,
          'status':'checked'});
        }
        this.radioChange = false;
      }, 0);
    },
    changeRadio() {
      this.radioChange = true;
    },
  },
};
</script>