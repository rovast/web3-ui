import NProgress from "@/utils/progress";
import { Router, createRouter } from "vue-router";
import { getHistoryMode } from "./utils";
const Layout = () => import("@/layout/index.vue");

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
      {
        path: "/dashboard",
        name: "dashboard",
        redirect: "/dashboard/virtual-network",
        component: () => import("@/views/dashboard/index.vue"),
        meta: {
          title: "Dashboard"
        },
        children: [
          {
            path: "virtual-network",
            name: "dashboard.virtual-network",
            component: () =>
              import("@/views/dashboard/virtual-network/index.vue"),
            meta: {
              title: "Virtual Network"
            }
          },
          {
            path: "device",
            name: "dashboard.device",
            component: () => import("@/views/dashboard/device/index.vue"),
            meta: {
              title: "Device"
            }
          },
          {
            path: "key",
            name: "dashboard.key",
            component: () => import("@/views/dashboard/key/index.vue"),
            meta: {
              title: "Key"
            }
          },
          {
            path: "billing",
            name: "dashboard.billing",
            component: () => import("@/views/dashboard/billing/index.vue"),
            meta: {
              title: "Billing"
            }
          },
          {
            path: "settings",
            name: "dashboard.settings",
            component: () => import("@/views/dashboard/settings/index.vue"),
            meta: {
              title: "Settings"
            }
          }
        ]
      },
      {
        path: "/chat",
        name: "chat",
        component: () => import("@/views/chat/index.vue"),
        meta: {
          title: "Chat"
        }
      },
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
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
