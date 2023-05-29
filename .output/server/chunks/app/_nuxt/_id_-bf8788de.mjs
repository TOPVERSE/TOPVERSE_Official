import _sfc_main$1 from './Banner-4804a2aa.mjs';
import _sfc_main$2 from './ContentRenderer-aa0632eb.mjs';
import { withAsyncContext, unref, useSSRContext } from 'vue';
import { u as useAsyncData } from './asyncData-e8a8bfb6.mjs';
import { h as useRoute, j as useI18n } from '../server.mjs';
import { q as queryContent } from './query-e0164f92.mjs';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import './Section-a19c49ce.mjs';
import './_plugin-vue_export-helper-cc2b3d55.mjs';
import './Typography-f87718b1.mjs';
import './nuxt-link-691ee40a.mjs';
import 'ufo';
import 'anu-vue';
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
import './ContentRendererMarkdown-6936f2dc.mjs';
import 'property-information';
import './preview-38d6e135.mjs';
import './utils-6d756e03.mjs';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { locale } = useI18n();
    const path = `/${locale.value}/${route.params.id}`;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(`content-${path}`, () => {
      return queryContent().where({ _path: path }).findOne();
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g;
      const _component_SectionBanner = _sfc_main$1;
      const _component_ContentRenderer = _sfc_main$2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_SectionBanner, {
        img: (_a = unref(data)) == null ? void 0 : _a.img,
        title: (_b = unref(data)) == null ? void 0 : _b.title,
        topic: (_c = unref(data)) == null ? void 0 : _c.topic,
        description: (_d = unref(data)) == null ? void 0 : _d.description,
        "font-bold": "",
        "text-white": ""
      }, null, _parent));
      _push(`<main class="m-auto prose xl:max-w-900px">`);
      if (unref(data)) {
        _push(ssrRenderComponent(_component_ContentRenderer, { value: unref(data) }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</main><div class="m-auto mb-20 flex flex-col text-right text-right prose xl:max-w-900px"><span class="text-lg font-bold">${ssrInterpolate((_e = unref(data)) == null ? void 0 : _e.author)}</span><small class="opacity-80">${ssrInterpolate((_f = unref(data)) == null ? void 0 : _f.resume)}</small><span class="pt-5">${ssrInterpolate((_g = unref(data)) == null ? void 0 : _g.publish)}</span></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/release/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-bf8788de.mjs.map
