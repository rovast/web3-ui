import vue from "@vitejs/plugin-vue";
import { viteBuildInfo } from "./info";
import svgLoader from "vite-svg-loader";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { visualizer } from "rollup-plugin-visualizer";
import removeConsole from "vite-plugin-remove-console";
import DefineOptions from "unplugin-vue-define-options/vite";

export function getPluginsList(_: string) {
  const lifecycle = process.env.npm_lifecycle_event;
  return [
    vue(),
    // jsx、tsx语法支持
    vueJsx(),
    DefineOptions(),
    // 线上环境删除console
    removeConsole({ external: ["src/assets/iconfont/iconfont.js"] }),
    viteBuildInfo(),
    // svg组件化支持
    svgLoader(),

    lifecycle === "report"
      ? visualizer({ open: true, brotliSize: true, filename: "report.html" })
      : null
  ];
}
