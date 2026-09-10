import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },

  test: {
    globals: true,

    environment: "jsdom",

    setupFiles: ["./tests/setup.ts"],

    include: [
      "tests/unit/**/*.test.ts",
      "tests/components/**/*.test.tsx",
    ],

    exclude: ["node_modules", "tests/e2e"],
  },
});