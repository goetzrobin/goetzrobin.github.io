/// <reference types="vitest" />
import analog from '@analogjs/platform';
import { defineConfig } from 'vite';
import * as fs from 'fs';
import * as path from 'path';

const readFilesInDirectory = (dir: string): string[] =>
  fs.readdirSync(dir).reduce((files: string[], file: string) => {
    const name = path.join(dir, file);
    const isDirectory = fs.statSync(name).isDirectory();
    return isDirectory ? [...files, ...readFilesInDirectory(name)] : [...files, name];
  }, []);

const extractRoutes = (routes: string[]): string[] => {
  const mappedRoutes = routes.map(route => {
    return route
      .replace('src','')
      .replace('/content/','')
      .replace(/^\/(.*?)\/routes|\/app\/routes|\.(js|ts|md)$/g, '')
      .replace(/\[\.{3}.+\]/, '404')
      .replace(/\[([^\]]+)\]/g, ':$1')
      .replace(/index|\(.*?\)$/g, '')
      .replace(/(?<!^)\/$/, '')
  })
  return [... new Set(mappedRoutes)]
}
const extractRoutesToPrerender = () => {
  const routes = extractRoutes(readFilesInDirectory('./src/app/routes'));
  const slugRouteIndex = routes.findIndex(route => route.includes(':slug'))
  const contentSlugs = extractRoutes(readFilesInDirectory('./src/content'));
  const slugRoutes = contentSlugs.map(contentSlug => routes[slugRouteIndex].replace(':slug', contentSlug))
  routes.splice(slugRouteIndex,1)
  routes.push(...slugRoutes)
  return routes
}
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
