import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import _sfc_main$1 from './Divider-d0e5605d.mjs';
import { _ as _sfc_main$2 } from './LocaleNuxtLink-cdd12b0d.mjs';
import { ABtn, ATooltip } from 'anu-vue';
import _sfc_main$3 from './logo-a8b66b60.mjs';
import _sfc_main$4 from './DarkToggle-6e8eb269.mjs';
import { unref, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { i as useI18n } from '../server.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
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
import './nuxt-link-15b2078b.mjs';
import './composables-25a5872e.mjs';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@intlify/core-base';
import 'cookie-es';
import 'is-https';

const _imports_0 = "" + publicAssetsURL("wechat.png");
function useFoot() {
  const { locale } = useI18n();
  locale.value === "zh" ? "/" : `/${locale.value}`;
  return {
    copyright: "foot.copyright",
    release: "foot.release",
    record: ["foot.record[0]", "foot.record[1]"],
    links: [
      {
        title: "foot.links[0].group",
        child: [
          {
            link: {
              name: "foot.links[0].link[0]",
              href: "/"
            }
          },
          {
            link: {
              name: "foot.links[0].link[1]",
              href: "#"
            }
          },
          {
            link: {
              name: "foot.links[0].link[2]",
              href: "#"
            }
          }
        ]
      },
      {
        title: "foot.links[1].group",
        child: [
          {
            link: {
              name: "foot.links[1].link[0]",
              href: "/about"
            }
          },
          {
            link: {
              name: "foot.links[1].link[1]",
              href: "/about#location"
            }
          },
          {
            link: {
              name: "foot.links[1].link[2]",
              href: "/"
            }
          }
        ]
      },
      {
        title: "foot.links[2].group",
        child: [
          {
            icon: "i-ic-sharp-wechat",
            link: {
              name: "foot.links[2].link[0]",
              href: "#"
            }
          },
          {
            icon: "i-ri-twitter-fill",
            link: {
              name: "foot.links[2].link[1]",
              href: "https://twitter.com/Topverse_Studio"
            }
          },
          {
            link: {
              name: "foot.links[2].link[2]",
              href: "#"
            }
          }
        ]
      }
    ]
  };
}
const _sfc_main = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const footer = useFoot();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Divider = _sfc_main$1;
      const _component_LocaleNuxtLink = _sfc_main$2;
      const _component_ABtn = ABtn;
      const _component_ATooltip = ATooltip;
      const _component_BrandLogo = _sfc_main$3;
      const _component_DarkToggle = _sfc_main$4;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Divider, null, null, _parent));
      _push(`<div class="grid-row p-20 pt-30 lg:grid-cols-3 md:grid-cols-2 md:px-30 xl:px-60"><!--[-->`);
      ssrRenderList(unref(footer).links, (col, i) => {
        _push(`<div class="w-full flex flex-col items-center gap-8"><h5 text-title opacity-60>${ssrInterpolate(_ctx.$t(col.title))}</h5><!--[-->`);
        ssrRenderList(col.child, (item, i2) => {
          _push(ssrRenderComponent(_component_LocaleNuxtLink, {
            key: i2,
            href: item.link.href
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (item.icon === "i-ic-sharp-wechat") {
                  _push2(ssrRenderComponent(_component_ABtn, {
                    variant: "text",
                    color: "slate-200",
                    class: "dark:!text-light/50",
                    icon: item.icon
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(_ctx.$t(item.link.name))} `);
                        _push3(ssrRenderComponent(_component_ATooltip, {
                          class: "[&_.a-tooltip]-bg-green-600",
                          placement: "left"
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`<span class="a-tooltip-text"${_scopeId3}><i class="i-ic-sharp-wechat me-1"${_scopeId3}></i><span${_scopeId3}>${ssrInterpolate(_ctx.$t("wechat"))}</span><img${ssrRenderAttr("src", _imports_0)} class="h-40 rounded"${_scopeId3}></span>`);
                            } else {
                              return [
                                createVNode("span", { class: "a-tooltip-text" }, [
                                  createVNode("i", { class: "i-ic-sharp-wechat me-1" }),
                                  createVNode("span", null, toDisplayString(_ctx.$t("wechat")), 1),
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "h-40 rounded"
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t(item.link.name)) + " ", 1),
                          createVNode(_component_ATooltip, {
                            class: "[&_.a-tooltip]-bg-green-600",
                            placement: "left"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "a-tooltip-text" }, [
                                createVNode("i", { class: "i-ic-sharp-wechat me-1" }),
                                createVNode("span", null, toDisplayString(_ctx.$t("wechat")), 1),
                                createVNode("img", {
                                  src: _imports_0,
                                  class: "h-40 rounded"
                                })
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  _push2(ssrRenderComponent(_component_ABtn, {
                    variant: "text",
                    color: "slate-200",
                    class: "dark:!text-light/50",
                    icon: item.icon
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(_ctx.$t(item.link.name))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t(item.link.name)), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                }
              } else {
                return [
                  item.icon === "i-ic-sharp-wechat" ? (openBlock(), createBlock(_component_ABtn, {
                    key: 0,
                    variant: "text",
                    color: "slate-200",
                    class: "dark:!text-light/50",
                    icon: item.icon
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t(item.link.name)) + " ", 1),
                      createVNode(_component_ATooltip, {
                        class: "[&_.a-tooltip]-bg-green-600",
                        placement: "left"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "a-tooltip-text" }, [
                            createVNode("i", { class: "i-ic-sharp-wechat me-1" }),
                            createVNode("span", null, toDisplayString(_ctx.$t("wechat")), 1),
                            createVNode("img", {
                              src: _imports_0,
                              class: "h-40 rounded"
                            })
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1032, ["icon"])) : (openBlock(), createBlock(_component_ABtn, {
                    key: 1,
                    variant: "text",
                    color: "slate-200",
                    class: "dark:!text-light/50",
                    icon: item.icon
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t(item.link.name)), 1)
                    ]),
                    _: 2
                  }, 1032, ["icon"]))
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div><div my-10 flex flex-col items-center justify-center gap-4><div flex items-center gap-4>`);
      _push(ssrRenderComponent(_component_BrandLogo, null, null, _parent));
      _push(ssrRenderComponent(_component_DarkToggle, null, null, _parent));
      _push(`</div><p>${ssrInterpolate(_ctx.$t(unref(footer).copyright))}</p><p>${ssrInterpolate(_ctx.$t(unref(footer).release))}</p><!--[-->`);
      ssrRenderList(unref(footer).record, (record, i) => {
        _push(`<p>${ssrInterpolate(_ctx.$t(record))}</p>`);
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Footer-3047ea45.mjs.map
