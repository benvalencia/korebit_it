import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

const site = 'https://benvalencia.github.io/korebit_it'
const base = '/korebit_it'

export default defineConfig({
  site,
  base,
  vite: {
    plugins: [tailwindcss()],
  },
});
