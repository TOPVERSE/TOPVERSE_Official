import { _ as __nuxt_component_0$1 } from './nuxt-link-15b2078b.mjs';
import _sfc_main$1 from './logo-a8b66b60.mjs';
import _sfc_main$2 from './nav-a3bbeb8a.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'ufo';
import '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@intlify/core-base';
import 'cookie-es';
import 'is-https';
import 'anu-vue';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'ohash';
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
import './composables-25a5872e.mjs';
import './LocaleNuxtLink-cdd12b0d.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_BrandLogo = _sfc_main$1;
  const _component_HeaderNav = _sfc_main$2;
  _push(`<header${ssrRenderAttrs(mergeProps({
    class: "bg-header/10 min-h-[100px]",
    "z-100": "",
    "w-full": "",
    flex: "",
    "flex-col": "",
    "items-start": "",
    "justify-start": "",
    "px-5": "",
    md: "items-center flex-row justify-around px-15 absolute z-100 top-0"
  }, _attrs))}>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "w-35 flex items-center gap-5"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BrandLogo, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BrandLogo)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<nav h-full flex items-center>`);
  _push(ssrRenderComponent(_component_HeaderNav, null, null, _parent));
  _push(`</nav></header>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header/header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=header-97ec31c0.mjs.map
