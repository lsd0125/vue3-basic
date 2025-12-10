import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import ProductList from "../views/ProductList.vue";
import Cart from "../views/Cart.vue";
// import Post from "../views/Post.vue";

const routes = [
  {
    path: "/",
    name: "RootHome",
    component: Home,
  },
  {
    path: "/vue3-basic",
    name: "Home",
    component: Home,
  },
  {
    path: "/vue3-basic/about",
    name: "About",
    component: About,
  },
  {
    path: "/vue3-basic/post/:category/:id",
    name: "Post",
    component: () => import("../views/Post.vue"),
  },
  {
    path: "/vue3-basic/user/:id",
    component: () => import("../views/User.vue"),
    children: [
      {
        // 當 /user/:id 被匹配時，這個會被渲染
        path: "",
        component: () => import("../views/UserHome.vue"),
      },
      {
        // 當 /user/:id/profile 被匹配時
        path: "profile",
        component: () => import("../views/UserProfile.vue"),
      },
      {
        // 當 /user/:id/posts 被匹配時
        path: "posts",
        component: () => import("../views/UserPosts.vue"),
      },
    ],
  },
  {
    path: "/vue3-basic/products",
    name: "products",
    component: ProductList,
  },
  {
    path: "/vue3-basic/cart",
    name: "cart",
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
