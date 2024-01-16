import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      components: `${path.resolve(__dirname, "./src/components/")}`,
      public: `${path.resolve(__dirname, "./public/")}`,
      types: `${path.resolve(__dirname, "./src/@types")}`,
      routes: path.resolve(__dirname, "./src/routes/"),
      lib: path.resolve(__dirname, "./src/lib/"),
      hooks: path.resolve(__dirname, "./src/hooks/"),
      utils: path.resolve(__dirname, "./src/utils/"),
      assets: path.resolve(__dirname, "./src/assets/"),
    },
  },
});