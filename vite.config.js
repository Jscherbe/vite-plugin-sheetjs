import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import sheetJsPlugin from "./index.js";

export default defineConfig({
  plugins: [
    sheetJsPlugin(),
    vue(),
  ],
})
