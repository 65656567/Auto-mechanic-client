import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Now @ maps to /src
    },
  },
  optimizeDeps: {
    include: ["lovable-tagger"], // Pre-bundle ESM-only dependency
  },
  server: {
    port: 5173,
  },
  build: {
    target: "esnext",
  },
});
