import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const sourcePath = decodeURIComponent(new URL("./src", import.meta.url).pathname).replace(/^\/(?:([A-Za-z]:))/, "$1");

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": sourcePath } },
});
