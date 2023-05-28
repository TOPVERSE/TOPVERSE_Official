import { u as useSwitchLocalePath, _ as _sfc_main$1 } from './LocaleNuxtLink-cdd12b0d.mjs';
import { ABtn, AMenu, AList, AListItem, AAvatar } from 'anu-vue';
import { i as useI18n } from '../server.mjs';
import { defineComponent, computed, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
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

function useNav() {
  return [
    {
      title: "nav.home",
      href: "/"
    },
    {
      title: "nav.solutions.t",
      child: [
        {
          title: "nav.solutions.child.land.service[0]",
          subtitle: "nav.solutions.child.land.description[0]",
          href: "/land",
          icon: "i-tabler-affiliate",
          iconColor: "red"
        },
        {
          title: "nav.solutions.child.land.service[1]",
          subtitle: "nav.solutions.child.land.description[1]",
          href: "/land",
          icon: "i-tabler-a-b",
          iconColor: "amber"
        },
        {
          title: "nav.solutions.child.land.service[2]",
          subtitle: "nav.solutions.child.land.description[2]",
          href: "/land",
          icon: "i-tabler-3d-cube-sphere",
          iconColor: "amber"
        }
      ]
    },
    {
      title: "nav.news",
      href: "/news"
    },
    {
      title: "nav.event.t",
      child: [
        {
          title: "nav.event.child.act[0]",
          subtitle: "nav.event.child.description[0]",
          href: "/land",
          icon: "i-tabler-apple",
          iconColor: "red"
        },
        {
          title: "nav.event.child.act[1]",
          subtitle: "nav.event.child.description[1]",
          href: "/land",
          icon: "i-tabler-api-app",
          iconColor: "red"
        },
        {
          title: "nav.event.child.act[2]",
          subtitle: "nav.event.child.description[2]",
          href: "/land",
          icon: "i-academicons-archive",
          iconColor: "red"
        }
      ]
    }
  ];
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "nav",
  __ssrInlineRender: true,
  setup(__props) {
    const navs = useNav();
    const { locale, locales, setLocale } = useI18n();
    const switchLocalePath = useSwitchLocalePath();
    const availableLocales = computed(() => {
      return locales.value.filter((i) => i.code !== locale.value);
    });
    const flag = {
      en: "i-flag-gb-4x3",
      zh: "i-flag-cn-4x3"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LocaleNuxtLink = _sfc_main$1;
      const _component_ABtn = ABtn;
      const _component_AMenu = AMenu;
      const _component_AList = AList;
      const _component_AListItem = AListItem;
      const _component_AAvatar = AAvatar;
      _push(`<nav${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(unref(navs), (nav, i) => {
        _push(ssrRenderComponent(_component_LocaleNuxtLink, {
          key: i,
          class: "mx-2 border-primary p-1 pb-5 transition-all",
          href: nav.href,
          "active-class": "border-b-3px"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ABtn, { variant: "text" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (nav.child) {
                      _push3(ssrRenderComponent(_component_AMenu, {
                        style: { "--un-bg-opacity": "0.6", "--a-spacing": "2" },
                        class: "",
                        "z-1000": "",
                        "mt-5": "",
                        placement: "bottom"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_AList, {
                              items: nav.child,
                              "avatar-append": "",
                              class: "[--a-list-item-gap:1rem] [--a-spacing:1] border-1px border-light-50/20 backdrop-blur-md !m-0 divide-y divide-dark-50/10 dark:border-dark-50/20 dark:divide-light-50/10"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<!--[-->`);
                                  ssrRenderList(nav.child, (item, index) => {
                                    _push5(ssrRenderComponent(_component_LocaleNuxtLink, {
                                      key: index,
                                      href: item.href,
                                      class: "overflow-hidden py-1 hover:bg-primary/20",
                                      "active-class": "bg-primary/20"
                                    }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(ssrRenderComponent(_component_AListItem, {
                                            class: "[--a-spacing:1] max-w-300px",
                                            title: _ctx.$t(item.title),
                                            subtitle: item.subtitle && _ctx.$t(item.subtitle)
                                          }, {
                                            prepend: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(ssrRenderComponent(_component_AAvatar, {
                                                  class: "shrink-0 rounded-lg",
                                                  icon: item.icon
                                                }, null, _parent7, _scopeId6));
                                              } else {
                                                return [
                                                  createVNode(_component_AAvatar, {
                                                    class: "shrink-0 rounded-lg",
                                                    icon: item.icon
                                                  }, null, 8, ["icon"])
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                        } else {
                                          return [
                                            createVNode(_component_AListItem, {
                                              class: "[--a-spacing:1] max-w-300px",
                                              title: _ctx.$t(item.title),
                                              subtitle: item.subtitle && _ctx.$t(item.subtitle)
                                            }, {
                                              prepend: withCtx(() => [
                                                createVNode(_component_AAvatar, {
                                                  class: "shrink-0 rounded-lg",
                                                  icon: item.icon
                                                }, null, 8, ["icon"])
                                              ]),
                                              _: 2
                                            }, 1032, ["title", "subtitle"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  });
                                  _push5(`<!--]-->`);
                                } else {
                                  return [
                                    (openBlock(true), createBlock(Fragment, null, renderList(nav.child, (item, index) => {
                                      return openBlock(), createBlock(_component_LocaleNuxtLink, {
                                        key: index,
                                        href: item.href,
                                        class: "overflow-hidden py-1 hover:bg-primary/20",
                                        "active-class": "bg-primary/20"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AListItem, {
                                            class: "[--a-spacing:1] max-w-300px",
                                            title: _ctx.$t(item.title),
                                            subtitle: item.subtitle && _ctx.$t(item.subtitle)
                                          }, {
                                            prepend: withCtx(() => [
                                              createVNode(_component_AAvatar, {
                                                class: "shrink-0 rounded-lg",
                                                icon: item.icon
                                              }, null, 8, ["icon"])
                                            ]),
                                            _: 2
                                          }, 1032, ["title", "subtitle"])
                                        ]),
                                        _: 2
                                      }, 1032, ["href"]);
                                    }), 128))
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_AList, {
                                items: nav.child,
                                "avatar-append": "",
                                class: "[--a-list-item-gap:1rem] [--a-spacing:1] border-1px border-light-50/20 backdrop-blur-md !m-0 divide-y divide-dark-50/10 dark:border-dark-50/20 dark:divide-light-50/10"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(nav.child, (item, index) => {
                                    return openBlock(), createBlock(_component_LocaleNuxtLink, {
                                      key: index,
                                      href: item.href,
                                      class: "overflow-hidden py-1 hover:bg-primary/20",
                                      "active-class": "bg-primary/20"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_AListItem, {
                                          class: "[--a-spacing:1] max-w-300px",
                                          title: _ctx.$t(item.title),
                                          subtitle: item.subtitle && _ctx.$t(item.subtitle)
                                        }, {
                                          prepend: withCtx(() => [
                                            createVNode(_component_AAvatar, {
                                              class: "shrink-0 rounded-lg",
                                              icon: item.icon
                                            }, null, 8, ["icon"])
                                          ]),
                                          _: 2
                                        }, 1032, ["title", "subtitle"])
                                      ]),
                                      _: 2
                                    }, 1032, ["href"]);
                                  }), 128))
                                ]),
                                _: 2
                              }, 1032, ["items"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<span style="${ssrRenderStyle({ "color": "hsla(var(--a-base-c), 0.87)" })}" class="font-bold"${_scopeId2}>${ssrInterpolate(_ctx.$t(nav.title))}</span>`);
                  } else {
                    return [
                      nav.child ? (openBlock(), createBlock(_component_AMenu, {
                        key: 0,
                        style: { "--un-bg-opacity": "0.6", "--a-spacing": "2" },
                        class: "",
                        "z-1000": "",
                        "mt-5": "",
                        placement: "bottom"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_AList, {
                            items: nav.child,
                            "avatar-append": "",
                            class: "[--a-list-item-gap:1rem] [--a-spacing:1] border-1px border-light-50/20 backdrop-blur-md !m-0 divide-y divide-dark-50/10 dark:border-dark-50/20 dark:divide-light-50/10"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(nav.child, (item, index) => {
                                return openBlock(), createBlock(_component_LocaleNuxtLink, {
                                  key: index,
                                  href: item.href,
                                  class: "overflow-hidden py-1 hover:bg-primary/20",
                                  "active-class": "bg-primary/20"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AListItem, {
                                      class: "[--a-spacing:1] max-w-300px",
                                      title: _ctx.$t(item.title),
                                      subtitle: item.subtitle && _ctx.$t(item.subtitle)
                                    }, {
                                      prepend: withCtx(() => [
                                        createVNode(_component_AAvatar, {
                                          class: "shrink-0 rounded-lg",
                                          icon: item.icon
                                        }, null, 8, ["icon"])
                                      ]),
                                      _: 2
                                    }, 1032, ["title", "subtitle"])
                                  ]),
                                  _: 2
                                }, 1032, ["href"]);
                              }), 128))
                            ]),
                            _: 2
                          }, 1032, ["items"])
                        ]),
                        _: 2
                      }, 1024)) : createCommentVNode("", true),
                      createVNode("span", {
                        style: { "color": "hsla(var(--a-base-c), 0.87)" },
                        class: "font-bold"
                      }, toDisplayString(_ctx.$t(nav.title)), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_ABtn, { variant: "text" }, {
                  default: withCtx(() => [
                    nav.child ? (openBlock(), createBlock(_component_AMenu, {
                      key: 0,
                      style: { "--un-bg-opacity": "0.6", "--a-spacing": "2" },
                      class: "",
                      "z-1000": "",
                      "mt-5": "",
                      placement: "bottom"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_AList, {
                          items: nav.child,
                          "avatar-append": "",
                          class: "[--a-list-item-gap:1rem] [--a-spacing:1] border-1px border-light-50/20 backdrop-blur-md !m-0 divide-y divide-dark-50/10 dark:border-dark-50/20 dark:divide-light-50/10"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(nav.child, (item, index) => {
                              return openBlock(), createBlock(_component_LocaleNuxtLink, {
                                key: index,
                                href: item.href,
                                class: "overflow-hidden py-1 hover:bg-primary/20",
                                "active-class": "bg-primary/20"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AListItem, {
                                    class: "[--a-spacing:1] max-w-300px",
                                    title: _ctx.$t(item.title),
                                    subtitle: item.subtitle && _ctx.$t(item.subtitle)
                                  }, {
                                    prepend: withCtx(() => [
                                      createVNode(_component_AAvatar, {
                                        class: "shrink-0 rounded-lg",
                                        icon: item.icon
                                      }, null, 8, ["icon"])
                                    ]),
                                    _: 2
                                  }, 1032, ["title", "subtitle"])
                                ]),
                                _: 2
                              }, 1032, ["href"]);
                            }), 128))
                          ]),
                          _: 2
                        }, 1032, ["items"])
                      ]),
                      _: 2
                    }, 1024)) : createCommentVNode("", true),
                    createVNode("span", {
                      style: { "color": "hsla(var(--a-base-c), 0.87)" },
                      class: "font-bold"
                    }, toDisplayString(_ctx.$t(nav.title)), 1)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(unref(availableLocales), (locale2) => {
        _push(ssrRenderComponent(_component_LocaleNuxtLink, {
          key: locale2.code,
          to: unref(switchLocalePath)(locale2.code),
          class: "mx-2 border-primary p-1 pb-5 transition-all"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ABtn, { variant: "text" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="${ssrRenderClass(flag[locale2.code])}"${_scopeId2}></span>`);
                  } else {
                    return [
                      createVNode("span", {
                        class: flag[locale2.code]
                      }, null, 2)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_ABtn, { variant: "text" }, {
                  default: withCtx(() => [
                    createVNode("span", {
                      class: flag[locale2.code]
                    }, null, 2)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header/nav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=nav-a3bbeb8a.mjs.map
