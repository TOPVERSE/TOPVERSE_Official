import { ABtn } from 'anu-vue';
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { e as useRouter } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'ufo';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...all]",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ABtn = ABtn;
      _push(`<main${ssrRenderAttrs(mergeProps({
        p: "x4 y10",
        text: "center teal-700 dark:gray-200"
      }, _attrs))}><div text-4xl><div i-carbon-warning inline-block></div></div><div>Not found</div><div class="bg-primary">`);
      _push(ssrRenderComponent(_component_ABtn, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`test`);
          } else {
            return [
              createTextVNode("test")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button btn text-sm m="3 t8"> Back </button></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...all].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...all_-004b5610.mjs.map
