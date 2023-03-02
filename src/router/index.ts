import NProgress from "@/utils/progress";
import { Router, createRouter } from "vue-router";
import { getHistoryMode } from "./utils";
const Layout = () => import("@/layout/index.vue");
import { AppRoutes } from "./apps";
import { MarketsRoutes } from "./markets";
import { site } from "@/config/site";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Layout,
    redirect: "/welcome",
    meta: {
      icon: "homeFilled",
      title: "Home"
    },
    children: [
      {
        path: "/welcome",
        name: "welcome",
        component: () => import("@/views/welcome/index.vue"),
        meta: {
          title: "Welcome"
        }
      },

      AppRoutes,
      MarketsRoutes,

      {
        path: "/:pathMatch(.*)*",
        name: "404 not found",
        component: () => import("@/views/404.vue"),
        meta: {
          title: "404 not found"
        }
      }
    ]
  }
];

/** 创建路由实例 */
export const router: Router = createRouter({
  history: getHistoryMode(),
  routes: routes,
  strict: true,
  scrollBehavior(to, from, savedPosition) {
    return new Promise(resolve => {
      if (savedPosition) {
        return savedPosition;
      } else {
        if (from.meta.saveSrollTop) {
          const top: number =
            document.documentElement.scrollTop || document.body.scrollTop;
          resolve({ left: 0, top });
        }
      }
    });
  }
});

router.beforeEach((to: toRouteType, _from, next) => {
  NProgress.start();
  window.document.title = site.name;
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
