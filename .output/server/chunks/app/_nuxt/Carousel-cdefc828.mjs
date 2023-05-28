import { AViews, AView } from 'anu-vue';
import _sfc_main$1 from './Typography-ad4c45e0.mjs';
import { h as useCycleList } from '../server.mjs';
import { defineComponent, mergeProps, unref, isRef, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import './nuxt-link-15b2078b.mjs';
import 'ufo';
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

function useCarousel() {
  return [
    {
      title: "home.carousel.topic[0]",
      description: "home.carousel.description[0]",
      link: {
        name: "home.carousel.link[0]",
        href: "/release/creatorpartyverse"
      },
      img: "/imgs/Home.Creatorverse.jpg"
    },
    {
      title: "home.carousel.topic[1]",
      description: "home.carousel.description[1]",
      link: {
        name: "home.carousel.link[1]",
        href: "/release/holowater"
      },
      img: "/imgs/News/HoloWater/20230524162443.jpg"
    }
  ];
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Carousel",
  __ssrInlineRender: true,
  setup(__props) {
    const carousels = useCarousel();
    const { state: pages, next, prev } = useCycleList(carousels.map((_, i) => i), {
      initialValue: 0
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AViews = AViews;
      const _component_AView = AView;
      const _component_Typography = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-500px w-full overflow-hidden md:h-600px xl:h-700px" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AViews, {
        modelValue: unref(pages),
        "onUpdate:modelValue": ($event) => isRef(pages) ? pages.value = $event : null,
        "h-full": "",
        class: "[&>.a-views-wrapper]:h-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(carousels), (item, i) => {
              _push2(ssrRenderComponent(_component_AView, {
                key: i,
                value: i,
                "h-full": ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", item.img)} style="${ssrRenderStyle({ "object-fit": "cover", "height": "100%", "width": "100%" })}"${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: item.img,
                        style: { "object-fit": "cover", "height": "100%", "width": "100%" }
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(carousels), (item, i) => {
                return openBlock(), createBlock(_component_AView, {
                  key: i,
                  value: i,
                  "h-full": ""
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: item.img,
                      style: { "object-fit": "cover", "height": "100%", "width": "100%" }
                    }, null, 8, ["src"])
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="absolute top-0 z-10 h-full w-full flex items-center justify-center text-shadow">`);
      _push(ssrRenderComponent(_component_Typography, {
        "scale-135": "",
        "text-color": "white",
        topic: _ctx.$t(unref(carousels)[unref(pages)].title),
        description: _ctx.$t(unref(carousels)[unref(pages)].description),
        link: {
          ...unref(carousels)[unref(pages)].link,
          name: _ctx.$t(unref(carousels)[unref(pages)].link.name)
        }
      }, null, _parent));
      _push(`</div><div class="absolute left-0 top-0 z-1 h-full w-full" style="${ssrRenderStyle({ "background-image": "linear-gradient(0deg,hsl(var(--a-body-bg-c)),transparent 65%, hsl(var(--a-body-bg-c)))", "pointer-events": "none" })}"></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Carousel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Carousel-cdefc828.mjs.map
