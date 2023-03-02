export const MarketsRoutes = {
  path: "/markets",
  name: "markets",
  redirect: "/markets/providers",
  component: () => import("@/views/markets/index.vue"),
  meta: {
    title: "Markets"
  },
  children: [
    {
      path: "providers",
      name: "markets.providers",
      component: () => import("@/views/markets/providers/index.vue"),
      meta: {
        title: "Providers"
      }
    },
    {
      path: "actors",
      name: "markets.actors",
      component: () => import("@/views/markets/actors/index.vue"),
      meta: {
        title: "Actors"
      }
    }
  ]
};
