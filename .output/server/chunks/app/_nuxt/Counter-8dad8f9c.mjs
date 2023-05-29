import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { d as useState } from '../server.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
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

function useCount() {
  const count = useState("count", () => Math.round(Math.random() * 20));
  function inc() {
    count.value += 1;
  }
  function dec() {
    count.value -= 1;
  }
  return {
    count,
    inc,
    dec
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Counter",
  __ssrInlineRender: true,
  setup(__props) {
    const { count, inc, dec } = useCount();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "inline-flex": "",
        m: "y-3"
      }, _attrs))}><button rounded-full p-2 btn><div i-carbon-subtract></div></button><div font="mono" w="15" m-auto inline-block>${ssrInterpolate(unref(count))}</div><button rounded-full p-2 btn><div i-carbon-add></div></button></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Counter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Counter-8dad8f9c.mjs.map
