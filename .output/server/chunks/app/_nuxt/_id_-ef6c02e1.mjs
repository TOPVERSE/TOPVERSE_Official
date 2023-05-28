import _sfc_main$1 from './Counter-fd7b0c98.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-15b2078b.mjs';
import { defineComponent, watchEffect, resolveComponent, unref, withCtx, createTextVNode, toDisplayString, useSSRContext, ref, computed } from 'vue';
import { p as defineStore, d as useRoute } from '../server.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
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

const useUserStore = defineStore("user", () => {
  const savedName = ref("");
  const previousNames = ref(/* @__PURE__ */ new Set());
  const usedNames = computed(() => Array.from(previousNames.value));
  const otherNames = computed(() => usedNames.value.filter((name) => name !== savedName.value));
  function setNewName(name) {
    if (savedName.value)
      previousNames.value.add(savedName.value);
    savedName.value = name;
  }
  return {
    setNewName,
    otherNames,
    savedName
  };
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const user = useUserStore();
    const name = route.params.id;
    watchEffect(() => {
      user.setNewName(route.params.id);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_Counter = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div i-twemoji:waving-hand inline-block animate-shake-x animate-duration-5000 text-4xl></div><h3 text-2xl font-500> Hi, </h3><div text-xl>${ssrInterpolate(unref(name))}! </div>`);
      if (unref(user).otherNames.length) {
        _push(`<p my-4 text-sm><span op-50>Also as known as:</span><ul><!--[-->`);
        ssrRenderList(unref(user).otherNames, (otherName) => {
          _push(`<li>`);
          _push(ssrRenderComponent(_component_router_link, {
            to: `/hi/${otherName}`,
            replace: ""
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(otherName)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(otherName), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></p>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_Counter, null, null, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "m-3 text-sm btn",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Back `);
          } else {
            return [
              createTextVNode(" Back ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hi/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-ef6c02e1.mjs.map
