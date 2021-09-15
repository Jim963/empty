import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import pageTest from "../views/pageTest.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "home",
      content: {
        description: "this is home",
      },
    },
  },
  {
    path: "/pageTest",
    name: "pageTest",
    component: pageTest,
    meta: {
      title: "pageTest",
      content: {
        description: "this is pageTest",
      },
    },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }

  if (to.meta.content) {
    let description = document.querySelector("meta[name='description']");

    description ? description.remove() : "";

    let head = document.getElementsByTagName("head");
    let meta = document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute("content", to.meta.content.description);
    // meta.content = to.meta.content.description;
    head[0].appendChild(meta);
  }
  next();
});

export default router;
