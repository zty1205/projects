import { defineConfig } from "vite";
import {resolve} from 'path'
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, 'src')
    }
  },
  port: 3000,
  open: true,
  plugins: [vue()],
});
