import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import checker from "vite-plugin-checker";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  server: {
    port: 9001,
  },
  plugins: [
    solidPlugin({}),
    checker({
      typescript: true,
      eslint: {
        useFlatConfig: true,
        lintCommand: "eslint 'src/**/*.{ts,tsx}'",
      },
    }),
    vanillaExtractPlugin(),
  ],
});
