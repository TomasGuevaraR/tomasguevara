// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // 👇 Cambia "portafolio" por el nombre REAL de tu repositorio en GitHub
  site: 'https://tomasguevarar.github.io/tomasguevara/',
  base: '/tomasguevara/',
  
  integrations: [
    tailwind(),
    react()
  ],
  vite: {
    resolve: {
      alias: {
        "@": "/src",
        "@components": "/src/components",
      },
    },
  },
  output: 'static',
  build: {
    inlineStylesheets: "auto",
  },
  server: {
    host: true,
    port: 4321,
  },
});
