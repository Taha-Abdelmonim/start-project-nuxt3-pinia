import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
export default defineConfig({
  sourcemap: true,
  build: {
    /** If you set esmExternals to true, this plugins assumes that 
     all external dependencies are ES modules */

    commonjsOptions: {
      esmExternals: true,
    },
    sourcemap: true,
  },
  css: { sourceMap: true, devSourcemap: true },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./", import.meta.url)),
    },
  },
});
