<template>
  <div class="home">
    <div class="home_todoFrame">
      <div class="home_todoTitle">
        <h4>todoList</h4>
      </div>

      <!-- 新增列表 -->
      <div class="row home_inputrow">
        <div class="col-3">
          <inputType type="select" @selectChange="addOption"></inputType>
        </div>
        <div class="col-7">
          <inputType type="input" @inputChange="addtodoContent"></inputType>
        </div>
        <div class="col-2">
          <button class="btn btn-info" @click="addtodoList">+</button>
        </div>
      </div>

      <div
        class="row home_todolist"
        v-for="(item, index) in todolist"
        :key="index"
      >
        <!-- 列表radio -->
        <div class="col-2">
          <inputType
            type="radio"
            :whitchpick="index"
            @changeRadio="donetodo"
          ></inputType>
        </div>
        <div class="col-6 col-sm-6 col-lg-8">
          <!-- 列表標題 -->
          <p
            :class="[
              'oftenuse_center',
              'home_todoContent',
              { home_tododone: item.checked == true },
            ]"
            v-if="edit != item.title"
          >
            {{ item.title }} / {{ item.frequency }}
          </p>

          <div class="row oftenuse_height100">
            <div class="col-4">
              <!-- 列表修改時select -->
              <inputType
                v-if="edit == item.title"
                type="select"
                :selectTime="item.frequency"
                @selectChange="newselectValue"
              ></inputType>
            </div>
            <div class="col-8">
              <!-- 列表修改時input -->
              <inputType
                v-if="edit == item.title"
                type="input"
                :inputCont="item.title"
                @inputChange="newinputValue"
              ></inputType>
            </div>
          </div>
        </div>

        <!-- 列表按鈕 -->
        <div class="col-2 col-sm-2 col-lg-1" v-if="edit != item.title">
          <button
            class="btn btn-warning oftenuse_center"
            @click="editTodo(item.title)"
          >
            E
          </button>
        </div>
        <div class="col-2 col-sm-2 col-lg-1" v-if="edit != item.title">
          <button
            class="btn btn-danger oftenuse_center"
            @click="deleteTodo(index)"
          >
            X
          </button>
        </div>
        <div class="col-2 col-sm-2 col-lg-1" v-if="edit == item.title">
          <button
            class="btn btn-success oftenuse_center"
            @click="editfinish(index)"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import inputType from "@/components/inputType.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    inputType,
  },
  data() {
    return {
      addinput: "",
      addselect: "",
      edit: false,
      inputedit: "",
      selectedit: "",
    };
  },
  async mounted() {
    // await this.testAxios();
    await this.getTodoList();
  },
  computed: {
    ...mapState({
      todolist: (state) => state.todo.todoList,
    }),
  },
  methods: {
    // async testAxios() {
    //   const api = `http://202.182.124.162:81/porfolios`;
    //   let res = await this.$axios.get(api);
    //   console.log("test", res.data);
    // },
    getTodoList() {
      this.$store.dispatch("todo/getTodoList").then((res) => {
        console.log("test the fake api", res.data);
      });
    },
    addtodoContent(data) {
      this.addinput = data;
    },
    addOption(data) {
      this.addselect = data;
    },
    addtodoList() {
      if (this.addselect != "" && this.addinput != "") {
        this.todolist.push({
          title: this.addinput,
          checked: false,
          frequency: this.addselect,
        });
      } else {
        alert("選項不得為空");
      }
    },
    donetodo(data) {
      console.log(data);
      if (data.status == "checked") {
        this.todolist[data.todoindex].checked = true;
        console.log(this.todolist);
      } else {
        this.todolist[data.todoindex].checked = false;
        console.log(this.todolist);
      }
      this.$store.dispatch("todo/resetTodoList", this.todolist);
    },
    editTodo(data) {
      this.edit = data;
    },
    newinputValue(data) {
      this.inputedit = data;
    },
    newselectValue(data) {
      this.selectedit = data;
      console.log(this.selectedit);
    },
    editfinish(index) {
      this.edit = "";
      if (this.inputedit != "" && this.selectedit != "") {
        this.todolist[index].title = this.inputedit;
        this.todolist[index].frequency = this.selectedit;
      } else if (this.selectedit != "") {
        this.todolist[index].frequency = this.selectedit;
      }else if (this.inputedit != ""){
        this.todolist[index].title = this.inputedit;
      }
      this.$store.dispatch("todo/resetTodoList", this.todolist);
    },
    deleteTodo(index) {
      this.todolist.splice(index, 1);
      this.$store.dispatch("todo/resetTodoList", this.todolist);
    },
  },
};
</script>
