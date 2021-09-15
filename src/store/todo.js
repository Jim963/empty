import axios from "axios";
import * as types from "./mutationType";

const state = {
  todoList: [],
};

const mutations = {
  [types.setTodoList](state, items) {
    state.todoList = items;
  },
};

const actions = {
  async getTodoList(context) {
    try {
      let response = await axios({
        method: "get",
        url: "https://mocki.io/v1/b54a3d5d-d30d-488d-a08d-341020e28b68",
        params: {},
        headers: {
          "Content-Type": "application/json",
        },
      });
      context.commit(types.setTodoList, response.data);
      return response;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  resetTodoList(context,data){
    console.log("got it",data);
    context.commit(types.setTodoList, data);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
