import { _ as __nuxt_component_0 } from './nuxt-link-15b2078b.mjs';
import { ABtn } from 'anu-vue';
import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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

function _optionalChain(ops) {
  let lastAccessLHS = void 0;
  let value = ops[0];
  let i = 1;
  while (i < ops.length) {
    const op = ops[i];
    const fn = ops[i + 1];
    i += 2;
    if ((op === "optionalAccess" || op === "optionalCall") && value == null) {
      return void 0;
    }
    if (op === "access" || op === "optionalAccess") {
      lastAccessLHS = value;
      value = fn(value);
    } else if (op === "call" || op === "optionalCall") {
      value = fn((...args) => value.call(lastAccessLHS, ...args));
      lastAccessLHS = void 0;
    }
  }
  return value;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Typography",
  __ssrInlineRender: true,
  props: {
    "title": null,
    "topic": null,
    "description": null,
    "link": null,
    "textColor": null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ABtn = ABtn;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center" }, _attrs))}>`);
      if (__props.title) {
        _push(`<p class="${ssrRenderClass([`text-${__props.textColor}`, "text-title"])}" drop-shadow>${ssrInterpolate(__props.title)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.topic) {
        _push(`<h2 class="${ssrRenderClass([`text-${__props.textColor}`, "text-h2"])}" drop-shadow>${ssrInterpolate(__props.topic)}</h2>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.description) {
        _push(`<p class="${ssrRenderClass(`text-${__props.textColor}`)}" text-h6 pb-5 drop-shadow>${ssrInterpolate(__props.description)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.link) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          href: _optionalChain([__props, "access", (_3) => _3.link, "optionalAccess", (_4) => _4.href])
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ABtn, {
                variant: "light",
                class: "group",
                color: "white",
                icon: "  i-solar-arrow-right-linear transition-all group-hover:px-4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_optionalChain([__props, "access", (_5) => _5.link, "optionalAccess", (_6) => _6.name]))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_optionalChain([__props, "access", (_7) => _7.link, "optionalAccess", (_8) => _8.name])), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_ABtn, {
                  variant: "light",
                  class: "group",
                  color: "white",
                  icon: "  i-solar-arrow-right-linear transition-all group-hover:px-4"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_optionalChain([__props, "access", (_9) => _9.link, "optionalAccess", (_10) => _10.name])), 1)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Typography.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Typography-ad4c45e0.mjs.map
