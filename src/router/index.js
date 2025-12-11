import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import ProductList from "../views/ProductList.vue";
import Cart from "../views/Cart.vue";
// import Post from "../views/Post.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/post/:category/:id",
    name: "Post",
    component: () => import("../views/Post.vue"),
  },
  {
    path: "/user/:id",
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
    path: "/products",
    name: "products",
    component: ProductList,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
