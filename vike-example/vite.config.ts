import react from "@vitejs/plugin-react";
import vue from '@vitejs/plugin-vue'
import vike from "vike/plugin";
import { defineConfig } from "vite";
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [vike(), react(),vue({
    include: [/\.vue$/, /\.md$/],
  })],
  build: {
    target: "es2022",
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
