import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  // 开发服务器配置
  devtool: 'source-map',
  npmClient: 'pnpm',
  // 禁用 MFSU，它可能会干扰 devtools 插件
  mfsu: false,
});
