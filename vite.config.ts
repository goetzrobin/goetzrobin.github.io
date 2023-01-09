/// <reference types="vitest" />
import analog from '@analogjs/platform';
import { defineConfig } from 'vite';
import {extractRoutesToPrerender} from "./vite-prerender.utils";


// https://vitejs.dev/config/
export default defineConfig( () => {
  return {
    publicDir: 'src/assets',
    ssr: {
      noExternal: ['@analogjs/router'],
    },
    build: {
      target: ['es2020'],
    },
    plugins: [
      analog({
        ssr: true,
        ssrBuildDir: './dist/app/ssr',
        entryServer: 'src/main.server.ts',
        vite: {
          tsconfig: 'tsconfig.app.json',
        },
        nitro: {
          rootDir: '',
          output: {
            dir: '../dist/app/server',
            publicDir: '../dist/app/server/public',
          },
          buildDir: './dist/app/.nitro',
          prerender: {
            routes: extractRoutesToPrerender(),
          },
        },
      }),
    ],
  };
});
