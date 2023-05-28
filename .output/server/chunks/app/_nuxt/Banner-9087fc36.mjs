import __nuxt_component_3 from './Section-a19c49ce.mjs';
import _sfc_main$1 from './Typography-ad4c45e0.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
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
  __name: "Banner",
  __ssrInlineRender: true,
  props: {
    "img": null,
    "title": null,
    "topic": null,
    "description": null,
    "link": null,
    "mask": null
  },
  setup(__props) {
    const props = __props;
    function getMask() {
      switch (props.mask) {
        case "top":
          return "linear-gradient(0deg,#000, transparent);";
        case "bottom":
          return "linear-gradient(0deg, transparent, #000);";
        case "both":
        default:
          return "linear-gradient(0deg, transparent, #000, transparent);";
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Section = __nuxt_component_3;
      const _component_Typography = _sfc_main$1;
      _push(ssrRenderComponent(_component_Section, mergeProps({
        relative: "",
        "h-380px": "",
        "md:h-400px": "",
        "xl:h-450px": ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div absolute left-0 top-0 z-0 h-full w-full bg-cover bg-center bg-no-repeat style="${ssrRenderStyle(`background-image: url('${__props.img}');-webkit-mask-image:${getMask()}`)}"${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_Section, {
              absolute: "",
              "left-0": "",
              "top-0": "",
              "h-full": "",
              "w-full": "",
              flex: "",
              "flex-col": "",
              "items-center": "",
              "justify-center": "",
              "text-shadow": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Typography, {
                    title: __props.title,
                    topic: __props.topic,
                    description: __props.description,
                    link: __props.link
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Typography, {
                      title: __props.title,
                      topic: __props.topic,
                      description: __props.description,
                      link: __props.link
                    }, null, 8, ["title", "topic", "description", "link"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", {
                absolute: "",
                "left-0": "",
                "top-0": "",
                "z-0": "",
                "h-full": "",
                "w-full": "",
                "bg-cover": "",
                "bg-center": "",
                "bg-no-repeat": "",
                style: `background-image: url('${__props.img}');-webkit-mask-image:${getMask()}`
              }, null, 4),
              createVNode(_component_Section, {
                absolute: "",
                "left-0": "",
                "top-0": "",
                "h-full": "",
                "w-full": "",
                flex: "",
                "flex-col": "",
                "items-center": "",
                "justify-center": "",
                "text-shadow": ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_Typography, {
                    title: __props.title,
                    topic: __props.topic,
                    description: __props.description,
                    link: __props.link
                  }, null, 8, ["title", "topic", "description", "link"])
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/Banner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Banner-9087fc36.mjs.map
