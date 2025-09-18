// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        usePolling: true,
        interval: 300, // milisegundos (puedes bajar a 100 si quieres más rápido)
      },
      host: true,      // expone en 0.0.0.0 dentro de Docker
      strictPort: true // evita que cambie de puerto si ya está ocupado
    }
  }
});
