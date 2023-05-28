import { _ as __nuxt_component_0 } from './nuxt-link-15b2078b.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ImageHover",
  __ssrInlineRender: true,
  props: {
    "img": null,
    "topic": null,
    "href": null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        href: __props.href,
        class: "group relative h-full w-full overflow-hidden rounded-lg bg-primary bg-opacity-35 shadow-lg"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", __props.img)} class="h-full w-full" style="${ssrRenderStyle({ "object-fit": "cover" })}" data-v-75ff40f7${_scopeId}><div class="mask-img h-50px bg-dark-700/70 transition-all group-hover:h-full" data-v-75ff40f7${_scopeId}><div class="text-h6 flex-grow" data-v-75ff40f7${_scopeId}><p${ssrRenderAttr("title", _ctx.$t(__props.topic))} class="line-clamp-1 w-full text-white group-hover:line-clamp-3 group-hover:h-full" data-v-75ff40f7${_scopeId}>${ssrInterpolate(_ctx.$t(__props.topic))}</p></div><div i-solar-arrow-right-linear mx-2 stroke-3 font-bold text-white data-v-75ff40f7${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("img", {
                src: __props.img,
                class: "h-full w-full",
                style: { "object-fit": "cover" }
              }, null, 8, ["src"]),
              createVNode("div", { class: "mask-img h-50px bg-dark-700/70 transition-all group-hover:h-full" }, [
                createVNode("div", { class: "text-h6 flex-grow" }, [
                  createVNode("p", {
                    title: _ctx.$t(__props.topic),
                    class: "line-clamp-1 w-full text-white group-hover:line-clamp-3 group-hover:h-full"
                  }, toDisplayString(_ctx.$t(__props.topic)), 9, ["title"])
                ]),
                createVNode("div", {
                  "i-solar-arrow-right-linear": "",
                  "mx-2": "",
                  "stroke-3": "",
                  "font-bold": "",
                  "text-white": ""
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ImageHover.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-75ff40f7"]]);

export { __nuxt_component_5 as default };
//# sourceMappingURL=ImageHover-73df1afb.mjs.map
