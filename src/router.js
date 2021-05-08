 import Vue from "vue";
 import Router from "vue-router";

 import Signup from "./views/Signup.vue";

 Vue.use(Router);

 export default new Router({
     mode: "history",
     routes: [
         {
            path: "/",
            name: "signup",
            component: Signup,

         },
         {
            path: "/signup",
            component: Signup,
         },
         {
             path: "/success",
             name: "success",
             component: () => import(/* webpackChunkName: "user-chunk" */ "./views/Success.vue"),
         },
         {
             path: "/login",
             name: "login",
             component: () => import(/* webpackChunkName: "user-chunk" */ "./views/Login.vue"),
         },
         {
             path: "/test",
             name: "test",
             component: () => import(/* webpackChunkName: "test-chunk" */ "./views/Test.vue"),
         },
         {
             path: "/result",
             name: "result",
             component: () => import(/* webpackChunkName: "result-chunk" */ "./views/Result.vue"),
         },
     ],
     scrollBehavior(to, from, savedPosition) {
         if (savedPosition) {
             return savedPosition;
         }
         if (to.hash) {
             return {
                 selector: to.hash,
                 behavior: "smooth",
             };
         }
         return { x: 0, y: 0 };
     }
 });