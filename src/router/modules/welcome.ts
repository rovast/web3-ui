export default {
  path: "/welcome",
  name: "welcome",
  component: () => import("@/views/welcome/index.vue"),
  meta: {
    title: "Welcome"
  }
};
