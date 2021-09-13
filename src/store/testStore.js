import axios from "axios";

const state = {
    testStore: [],
  };

  const mutations = {
    setTestStore(state, items) {
      state.testStore = items;
    },
  };

  const actions = {
    async testAxios(context) {
        try {
          let response = await axios({
            method: "get",
            url: "http://202.182.124.162:81/user-data",
            params: {},
            headers: {
              "Content-Type": "application/json",
            },
          });
          context.commit("setTestStore", response.data);
          return response;
        } catch (err) {
          return Promise.reject(err);
        }
      },
  };

  export default {
    namespaced: true,
    state,
    mutations,
    actions,
  };