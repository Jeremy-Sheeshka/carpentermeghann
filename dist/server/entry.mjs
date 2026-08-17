import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CT49IweF.mjs';
import { manifest } from './manifest_mgvA_f84.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/contact.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/meet-meghann.astro.mjs');
const _page5 = () => import('./pages/portfolio/_slug_.astro.mjs');
const _page6 = () => import('./pages/portfolio.astro.mjs');
const _page7 = () => import('./pages/services/concrete.astro.mjs');
const _page8 = () => import('./pages/services/decks-fences-gates.astro.mjs');
const _page9 = () => import('./pages/services/diy.astro.mjs');
const _page10 = () => import('./pages/services/interior-reno.astro.mjs');
const _page11 = () => import('./pages/services/siding-stairs.astro.mjs');
const _page12 = () => import('./pages/services/windows-doors.astro.mjs');
const _page13 = () => import('./pages/services.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/contact.ts", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/meet-meghann.astro", _page4],
    ["src/pages/portfolio/[slug].astro", _page5],
    ["src/pages/portfolio/index.astro", _page6],
    ["src/pages/services/concrete.astro", _page7],
    ["src/pages/services/decks-fences-gates.astro", _page8],
    ["src/pages/services/diy.astro", _page9],
    ["src/pages/services/interior-reno.astro", _page10],
    ["src/pages/services/siding-stairs.astro", _page11],
    ["src/pages/services/windows-doors.astro", _page12],
    ["src/pages/services/index.astro", _page13],
    ["src/pages/index.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///home/sheeshka/Desktop/carpentermeghann/dist/client/",
    "server": "file:///home/sheeshka/Desktop/carpentermeghann/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "assets",
    "experimentalStaticHeaders": false
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
