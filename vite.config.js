import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pokeball from "../../public/pokeball.svg";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://brandonrv.github.io/Poke-API-Practica11/"
})
