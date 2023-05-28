import __nuxt_component_3 from './Section-a19c49ce.mjs';
import _sfc_main$1 from './Typography-ad4c45e0.mjs';
import { defineComponent, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import './_plugin-vue_export-helper-cc2b3d55.mjs';
import './nuxt-link-15b2078b.mjs';
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
  __name: "GradientCard",
  __ssrInlineRender: true,
  props: {
    "topic": null,
    "content": null
  },
  setup(__props) {
    const colors = [
      "text-gradient-pink",
      "text-gradient-blue",
      "text-gradient-green",
      "text-gradient-rose",
      "text-gradient-purple",
      "text-gradient-yello"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Section = __nuxt_component_3;
      const _component_Typography = _sfc_main$1;
      _push(ssrRenderComponent(_component_Section, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Typography, {
              topic: _ctx.$t(__props.topic)
            }, null, _parent2, _scopeId));
            _push2(`<div class="${ssrRenderClass([`lg:grid-cols-${__props.content.length}`, "grid-row gap-10 pt-20 md:grid-cols-2"])}"${_scopeId}><!--[-->`);
            ssrRenderList(__props.content, (col, i) => {
              _push2(`<div class="${ssrRenderClass([`animated-delay-${i * 100}ms`, "h-full w-full flex flex-col items-center justify-center animated animated-fade-in-up animated-faster"])}"${_scopeId}><h2${ssrRenderAttr("title", _ctx.$t(col.title))} class="${ssrRenderClass([colors[i], "text-h2 w-full text-center text-7xl font-bold text-transparent"])}"${_scopeId}>${ssrInterpolate(_ctx.$t(col.title))}</h2><h5${ssrRenderAttr("title", _ctx.$t(col.subtext))} class="text-h4 text-h5 mt-3 text-center"${_scopeId}>${ssrInterpolate(_ctx.$t(col.subtext))}</h5><p${ssrRenderAttr("title", _ctx.$t(col.description))} class="text-h6 mt-1 text-center"${_scopeId}>${ssrInterpolate(_ctx.$t(col.description))}</p></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode(_component_Typography, {
                topic: _ctx.$t(__props.topic)
              }, null, 8, ["topic"]),
              createVNode("div", {
                class: ["grid-row gap-10 pt-20 md:grid-cols-2", `lg:grid-cols-${__props.content.length}`]
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.content, (col, i) => {
                  return openBlock(), createBlock("div", {
                    key: i,
                    class: ["h-full w-full flex flex-col items-center justify-center animated animated-fade-in-up animated-faster", `animated-delay-${i * 100}ms`]
                  }, [
                    createVNode("h2", {
                      title: _ctx.$t(col.title),
                      class: ["text-h2 w-full text-center text-7xl font-bold text-transparent", colors[i]]
                    }, toDisplayString(_ctx.$t(col.title)), 11, ["title"]),
                    createVNode("h5", {
                      title: _ctx.$t(col.subtext),
                      class: "text-h4 text-h5 mt-3 text-center"
                    }, toDisplayString(_ctx.$t(col.subtext)), 9, ["title"]),
                    createVNode("p", {
                      title: _ctx.$t(col.description),
                      class: "text-h6 mt-1 text-center"
                    }, toDisplayString(_ctx.$t(col.description)), 9, ["title"])
                  ], 2);
                }), 128))
              ], 2)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/GradientCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=GradientCard-84bc95b5.mjs.map
