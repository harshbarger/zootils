import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig(
  defineConfig({
    build: {
      lib: {
        entry: resolve(__dirname, "src/index.ts"),
        name: "zootils",
        fileName: "index",
      },
    },

    plugins: [dts()],

    define: {
      "import.meta.vitest": "undefined",
    },
  })
);
