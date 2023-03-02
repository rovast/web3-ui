export const AppRoutes = {
  path: "/apps",
  name: "apps",
  redirect: "/apps/hosts",
  component: () => import("@/views/apps/index.vue"),
  meta: {
    title: "Apps"
  },
  children: [
    {
      path: "hosts",
      name: "apps.hosts",
      component: () => import("@/views/apps/hosts/index.vue"),
      meta: {
        title: "Hosts"
      }
    },
    {
      path: "providers",
      name: "apps.providers",
      component: () => import("@/views/apps/providers/index.vue"),
      meta: {
        title: "Providers"
      }
    },
    {
      path: "actors",
      name: "apps.actors",
      component: () => import("@/views/apps/actors/index.vue"),
      meta: {
        title: "Actors"
      }
    }
  ]
};
