/// <reference types="vitest" />
import analog from '@analogjs/platform';
import { defineConfig } from 'vite';
import {extractRoutesToPrerender} from "./vite-prerender.utils";


// https://vitejs.dev/config/
export default defineConfig( () => {
  return {
    publicDir: 'src/assets',
    optimizeDeps: {
      include: ['@angular/common'],
    },
    build: {
      target: ['es2020'],
    },
    plugins: [
      analog({
          prerender: {
            routes: extractRoutesToPrerender(),
          },
      }),
    ],
  };
});
