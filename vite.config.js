import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  test: {},
  resolve: {
    // alias: {
    //   components: path.resolve(__dirname, "src/components"),
    // },
    alias: {
      '@': '/src',
  },
  },
});
