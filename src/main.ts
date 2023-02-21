import App from "./App.vue";
import router from "./router";
import { setupStore } from "@/store";
import { getServerConfig } from "./config";
import { createApp } from "vue";
import { injectResponsiveStorage } from "@/utils/responsive";

import "./style/reset.scss";
import "./style/index.scss";
// 一定要在main.ts中导入tailwind.css，防止vite每次hmr都会请求src/style/index.scss整体css文件导致热更新慢的问题
import "./style/tailwind.css";

const app = createApp(App);

// register @iconify/vue
import { IconifyIconOffline, IconifyIconOnline } from "./components/ReIcon";
app.component("IconifyIconOffline", IconifyIconOffline);
app.component("IconifyIconOnline", IconifyIconOnline);

getServerConfig(app).then(async config => {
  app.use(router);
  await router.isReady();
  injectResponsiveStorage(app, config);
  setupStore(app);
  app.mount("#app");
});
