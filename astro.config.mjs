import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

const isProd = import.meta.env.PROD;
const site = 'https://benvalencia.github.io/korebit_it'
const base = isProd ? '/korebit_it' : '/'

export default defineConfig({
  site,
  base,
  vite: {
    plugins: [tailwindcss()],
  },
});
