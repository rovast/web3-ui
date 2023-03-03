export default {
  path: "/dashboard",
  name: "dashboard",
  redirect: "/dashboard/hosts",
  component: () => import("@/views/dashboard/index.vue"),
  meta: {
    title: "Dashboard",
    rank: 2
  },
  children: [
    {
      path: "hosts",
      name: "dashboard.hosts",
      component: () => import("@/views/dashboard/hosts/index.vue"),
      meta: {
        title: "Hosts",
        icon: "tabler:server-2"
      }
    },
    {
      path: "providers",
      name: "dashboard.providers",
      component: () => import("@/views/dashboard/providers/index.vue"),
      meta: {
        title: "Providers",
        icon: "healthicons:provider-fst"
      }
    },
    {
      path: "actors",
      name: "dashboard.actors",
      component: () => import("@/views/dashboard/actors/index.vue"),
      meta: {
        title: "Actors",
        icon: "simple-icons:wasmer"
      }
    }
  ]
} as RouteConfigsTable;
