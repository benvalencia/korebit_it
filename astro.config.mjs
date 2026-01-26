import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

const site = 'https://benvalencia.github.io/korebit_it'
// https://astro.build/config
export default defineConfig({
  site,
  vite: {
    plugins: [tailwindcss()],
  },
});
