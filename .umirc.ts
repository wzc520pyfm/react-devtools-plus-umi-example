import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  // 开发服务器配置
  devtool: 'source-map',
  npmClient: 'pnpm',
  // mfsu: false,
});
