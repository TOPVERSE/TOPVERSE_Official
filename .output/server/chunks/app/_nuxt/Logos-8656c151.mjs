import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'unstorage/drivers/fs';
import 'unstorage/drivers/overlay';
import 'unstorage/drivers/memory';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import '@intlify/bundle-utils';
import 'unified';
import 'mdast-util-to-string';
import 'micromark/lib/preprocess.js';
import 'micromark/lib/postprocess.js';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'remark-emoji';
import 'rehype-slug';
import 'remark-squeeze-paragraphs';
import 'rehype-external-links';
import 'remark-gfm';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'remark-mdc';
import 'remark-parse';
import 'remark-rehype';
import 'mdast-util-to-hast';
import 'detab';
import 'unist-builder';
import 'mdurl';
import 'slugify';
import 'unist-util-position';
import 'unist-util-visit';
import 'shiki-es';
import 'unenv/runtime/npm/consola';

const _imports_0 = "" + publicAssetsURL("topverse.icon.svg");
const _imports_1 = "" + publicAssetsURL("vite.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    "inline-flex": "",
    "cursor-default": "",
    "text-2xl": "",
    "font-300": ""
  }, _attrs))}><div flex flex-col children:mx-auto><img inline-block h-18 w-18${ssrRenderAttr("src", _imports_0)}><span mt--2 text-green5>Nuxt 3</span></div><div text="3xl gray4" m="x-4 y-auto" i-carbon-add transform transition-all-500 hover:rotate-135></div><div flex flex-col children:mx-auto><img inline-block h-18 w-18${ssrRenderAttr("src", _imports_1)}><span mt--2 text-purple5>Vitesse</span></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Logos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Logos = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Logos as default };
//# sourceMappingURL=Logos-8656c151.mjs.map
