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
        formats: ["es"],
      },
    },

    plugins: [dts({ rollupTypes: true })],

    define: {
      "import.meta.vitest": "undefined",
    },
  })
);
