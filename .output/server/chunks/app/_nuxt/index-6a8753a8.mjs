import _sfc_main$1 from './Carousel-cdefc828.mjs';
import _sfc_main$2 from './Divider-d0e5605d.mjs';
import _sfc_main$3 from './GradientCard-84bc95b5.mjs';
import __nuxt_component_3 from './Section-a19c49ce.mjs';
import _sfc_main$4 from './Typography-ad4c45e0.mjs';
import __nuxt_component_5 from './ImageHover-73df1afb.mjs';
import { _ as _sfc_main$5 } from './LocaleNuxtLink-cdd12b0d.mjs';
import { ABtn } from 'anu-vue';
import _sfc_main$6 from './Banner-9087fc36.mjs';
import _sfc_main$7 from './content-2b54430c.mjs';
import { useSSRContext, defineComponent, ref, unref, withCtx, openBlock, createBlock, Fragment, renderList, createVNode, createTextVNode, toDisplayString, createCommentVNode } from 'vue';
import { q as useElementVisibility } from '../server.mjs';
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
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

function useSectionEight() {
  return {
    topic: "home.sectionEight.topic",
    description: "home.sectionEight.description",
    content: [
      {
        title: "home.sectionEight.content.title[0]",
        description: "home.sectionEight.content.topic[0]",
        icon: "i-subway-basket"
      },
      {
        title: "home.sectionEight.content.title[1]",
        description: "home.sectionEight.content.topic[1]",
        icon: "i-maki-college-11"
      },
      {
        title: "home.sectionEight.content.title[2]",
        description: "home.sectionEight.content.topic[2]",
        icon: "i-maki-amusement-park-11"
      },
      {
        title: "home.sectionEight.content.title[3]",
        description: "home.sectionEight.content.topic[3]",
        icon: "i-maki-gaming"
      },
      {
        title: "home.sectionEight.content.title[4]",
        description: "home.sectionEight.content.topic[4]",
        icon: "i-maki-city"
      },
      {
        title: "home.sectionEight.content.title[5]",
        description: "home.sectionEight.content.topic[5]",
        icon: "i-maki-basketball-11"
      },
      {
        title: "home.sectionEight.content.title[6]",
        description: "home.sectionEight.content.topic[6]",
        icon: "i-maki-baseball-11"
      },
      {
        title: "home.sectionEight.content.title[7]",
        description: "home.sectionEight.content.topic[7]",
        icon: "i-maki-communications-tower-11"
      }
    ]
  };
}
function useSectionFive() {
  return {
    title: "home.sectionFive.title",
    topic: "home.sectionFive.topic",
    description: "home.sectionFive.description",
    link: {
      name: "home.sectionFive.link",
      href: "#"
    },
    content: [
      {
        topic: "home.sectionFive.content.topic[0]",
        description: "home.sectionFive.content.description[0]"
      },
      {
        topic: "home.sectionFive.content.topic[1]",
        description: "home.sectionFive.content.description[1]"
      },
      {
        topic: "home.sectionFive.content.topic[2]",
        description: "home.sectionFive.content.description[2]"
      },
      {
        topic: "home.sectionFive.content.topic[3]",
        description: "home.sectionFive.content.description[3]"
      },
      {
        topic: "home.sectionFive.content.topic[4]",
        description: "home.sectionFive.content.description[4]"
      },
      {
        topic: "home.sectionFive.content.topic[5]",
        description: "home.sectionFive.content.description[5]"
      }
    ]
  };
}
function useSectionFour() {
  return {
    img: "/imgs/Home-Banner/Banner_1.gif",
    title: "home.sectionFour.title",
    topic: "home.sectionFour.topic",
    description: "home.sectionFour.description",
    link: {
      name: "home.sectionFour.link",
      href: "#"
    }
  };
}
function useSectionNine() {
  return {
    img: "/imgs/1 (8).jpg",
    title: "home.sectionNine.title",
    topic: "home.sectionNine.topic",
    description: "home.sectionNine.description",
    link: {
      name: "home.sectionNine.link",
      href: "#"
    }
  };
}
function useSectionOne() {
  return {
    topic: "home.sectionOne.topic",
    description: "home.sectionOne.description",
    content: [
      {
        title: "home.sectionOne.content.title[0]",
        subtext: "home.sectionOne.content.subtext[0]",
        description: "home.sectionOne.content.description[0]"
      },
      {
        title: "home.sectionOne.content.title[1]",
        subtext: "home.sectionOne.content.subtext[1]",
        description: "home.sectionOne.content.description[1]"
      },
      {
        title: "home.sectionOne.content.title[2]",
        subtext: "home.sectionOne.content.subtext[2]",
        description: "home.sectionOne.content.description[2]"
      }
    ]
  };
}
function useSectionSeven() {
  return {
    img: "/imgs/Home-Banner/Banner_2.gif",
    title: "home.sectionSeven.title",
    topic: "home.sectionSeven.topic",
    description: "home.sectionSeven.description",
    link: {
      name: "home.sectionSeven.link",
      href: "#"
    }
  };
}
function useSectionSix() {
  return {
    topic: "home.sectionSix.topic",
    description: "home.sectionSix.description",
    content: [
      {
        title: "home.sectionSix.content.title[0]",
        topic: "home.sectionSix.content.topic[0]",
        description: "home.sectionSix.content.description[0]",
        link: {
          name: "home.sectionSix.content.link[0]",
          href: "#"
        },
        img: "/imgs/Home-Solutions&Services/DigitalTwin.gif"
      },
      {
        title: "home.sectionSix.content.title[1]",
        topic: "home.sectionSix.content.topic[1]",
        description: "home.sectionSix.content.description[1]",
        link: {
          name: "home.sectionSix.content.link[1]",
          href: "#"
        },
        img: "/imgs/Home-Solutions&Services/Circulus.gif"
      },
      {
        title: "home.sectionSix.content.title[2]",
        topic: "home.sectionSix.content.topic[2]",
        description: "home.sectionSix.content.description[2]",
        link: {
          name: "home.sectionSix.content.link[2]",
          href: "#"
        },
        img: "/imgs/Home-Solutions&Services/CyberPink.gif"
      },
      {
        title: "home.sectionSix.content.title[3]",
        topic: "home.sectionSix.content.topic[3]",
        description: "home.sectionSix.content.description[3]",
        link: {
          name: "home.sectionSix.content.link[3]",
          href: "#"
        },
        img: "/imgs/Home-Solutions&Services/AIGC.gif"
      }
    ]
  };
}
function useSectionThree() {
  return {
    title: "home.sectionThree.title",
    topic: "home.sectionThree.topic",
    description: "home.sectionThree.description",
    link: {
      name: "home.sectionThree.link",
      href: "#"
    },
    contentPrimary: [
      {
        topic: "home.sectionThree.contentPrimary.topic[0]",
        img: "/imgs/Home-Stories/ParcelCreatorverse.jpg",
        href: "release/creatorpartyverse"
      },
      {
        topic: "home.sectionThree.contentPrimary.topic[1]",
        img: "/imgs/Home-Stories/HoloWater.jpg",
        href: "release/holowater"
      }
    ],
    contentSecondary: [
      {
        topic: "home.sectionThree.contentSecondary.topic[0]",
        img: "/imgs/Home-Stories/NeverDrinkAlone.jpg",
        href: "release/bar-symphony"
      },
      {
        topic: "home.sectionThree.contentSecondary.topic[1]",
        img: "/imgs/Home-Stories/RIBAChangan.jpg",
        href: "#"
      },
      {
        topic: "home.sectionThree.contentSecondary.topic[2]",
        img: "/imgs/Home-Stories/CoreOfTime.jpg",
        href: "#"
      }
    ],
    contentThird: [
      {
        topic: "home.sectionThree.contentThird.topic[0]",
        img: "/imgs/Home-Stories/BitCountry.jpg",
        href: "#"
      },
      {
        topic: "home.sectionThree.contentThird.topic[1]",
        img: "/imgs/Home-Stories/MMMM.jpg",
        href: "#"
      },
      {
        topic: "home.sectionThree.contentThird.topic[2]",
        img: "/imgs/Home-Stories/Circulus.jpg",
        href: "#"
      },
      {
        topic: "home.sectionThree.contentThird.topic[3]",
        img: "/imgs/Home-Stories/NASA.jpg",
        href: "#"
      }
    ]
  };
}
function useSectionTwo() {
  return {
    // title: 'home.sectionTwo.title',
    // description: 'home.sectionTwo.description',
    content: [
      {
        title: "home.sectionTwo.content.title[0]",
        imgs: [
          {
            img: "/imgs/Partners/500/CASCI.png",
            href: "https://weibo.com/u/7418885402?nick=%E4%B8%AD%E5%9B%BD%E8%88%AA%E5%A4%A9%E6%96%87%E5%88%9B&noscript=1&is_all=1",
            title: "CASCI"
          },
          {
            img: "/imgs/Partners/500/ChinaTower.png",
            href: "https://ir.china-tower.com/en/global/home.php",
            title: "China Tower"
          },
          {
            img: "/imgs/Partners/500/MUA.png",
            href: "https://muadao.build/",
            title: "MUA DAO"
          }
        ]
      },
      {
        title: "home.sectionTwo.content.title[1]",
        imgs: [
          {
            img: "/imgs/Partners/500/Ultiverse.png",
            href: "https://www.ultiverse.io/home",
            title: "Ultiverse"
          },
          {
            img: "/imgs/Partners/500/PARCEL.png",
            href: "https://parcel.so/",
            title: "PARCEL Creatorverse"
          },
          {
            img: "/imgs/Partners/500/Bit.Country.png",
            href: "https://bit.country/",
            title: "Bit.Country"
          }
        ]
      },
      {
        title: "home.sectionTwo.content.title[2]",
        imgs: [
          {
            img: "/imgs/Partners/500/MMMM.png",
            href: "https://mmmm.world/",
            title: "MMMM"
          },
          {
            img: "/imgs/Partners/500/MONA.png",
            href: "https://monaverse.com/",
            title: "MONAVerse"
          }
        ]
      }
    ]
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const sectionOne = useSectionOne();
    const sectionOneEl = ref(null);
    useElementVisibility(sectionOneEl);
    const sectionTwo = useSectionTwo();
    const sectionTwoEl = ref(null);
    const sectionTwoVis = useElementVisibility(sectionTwoEl);
    const sectionThree = useSectionThree();
    const sectionThreeEl = ref(null);
    const sectionThreeVis = useElementVisibility(sectionThreeEl);
    const sectionFour = useSectionFour();
    const sectionFive = useSectionFive();
    const sectionSix = useSectionSix();
    const sectionSeven = useSectionSeven();
    const sectionEight = useSectionEight();
    const sectionNine = useSectionNine();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Carousel = _sfc_main$1;
      const _component_Divider = _sfc_main$2;
      const _component_SectionGradientCard = _sfc_main$3;
      const _component_Section = __nuxt_component_3;
      const _component_Typography = _sfc_main$4;
      const _component_ImageHover = __nuxt_component_5;
      const _component_LocaleNuxtLink = _sfc_main$5;
      const _component_ABtn = ABtn;
      const _component_SectionBanner = _sfc_main$6;
      const _component_ModelContent = _sfc_main$7;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Carousel, { class: "mb-5" }, null, _parent));
      _push(ssrRenderComponent(_component_Divider, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionGradientCard, {
        content: unref(sectionOne).content,
        topic: unref(sectionOne).topic
      }, null, _parent));
      _push(ssrRenderComponent(_component_Section, {
        ref_key: "sectionTwoEl",
        ref: sectionTwoEl,
        class: "border-b-2 border-dark/40 border-b-solid from-dark/30 bg-gradient-to-t dark:border-light-50/10 dark:from-light/5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(sectionTwo).content, (item, i) => {
              _push2(`<div class="pb-8" data-v-0fedc9e9${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Typography, {
                title: _ctx.$t(item.title)
              }, null, _parent2, _scopeId));
              _push2(`<div class="${ssrRenderClass([`lg:grid-cols-${item.imgs.length} lg:gap-2 `, "grid-row grid-cols-2 gap-18 md:grid-cols-3 md:gap-10"])}" data-v-0fedc9e9${_scopeId}><!--[-->`);
              ssrRenderList(item.imgs, (img, j) => {
                _push2(`<a class="${ssrRenderClass([[`animated-delay-${j * 100}ms`, {
                  "animated animated-fade-in-up animated-faster": unref(sectionTwoVis)
                }], "h-25 w-full flex justify-center"])}"${ssrRenderAttr("href", img.href)}${ssrRenderAttr("title", _ctx.$t(img.title))} data-v-0fedc9e9${_scopeId}><img${ssrRenderAttr("src", img.img)} data-v-0fedc9e9${_scopeId}></a>`);
              });
              _push2(`<!--]--></div></div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(sectionTwo).content, (item, i) => {
                return openBlock(), createBlock("div", {
                  key: i,
                  class: "pb-8"
                }, [
                  createVNode(_component_Typography, {
                    title: _ctx.$t(item.title)
                  }, null, 8, ["title"]),
                  createVNode("div", {
                    class: ["grid-row grid-cols-2 gap-18 md:grid-cols-3 md:gap-10", `lg:grid-cols-${item.imgs.length} lg:gap-2 `]
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(item.imgs, (img, j) => {
                      return openBlock(), createBlock("a", {
                        key: j,
                        class: ["h-25 w-full flex justify-center", [`animated-delay-${j * 100}ms`, {
                          "animated animated-fade-in-up animated-faster": unref(sectionTwoVis)
                        }]],
                        href: img.href,
                        title: _ctx.$t(img.title)
                      }, [
                        createVNode("img", {
                          src: img.img
                        }, null, 8, ["src"])
                      ], 10, ["href", "title"]);
                    }), 128))
                  ], 2)
                ]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Section, {
        "text-center": "",
        class: "section-three"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Typography, {
              title: _ctx.$t(unref(sectionThree).title),
              topic: _ctx.$t(unref(sectionThree).topic),
              description: _ctx.$t(unref(sectionThree).description)
            }, null, _parent2, _scopeId));
            _push2(`<div data-v-0fedc9e9${_scopeId}><div class="${ssrRenderClass([`lg:grid-cols-${unref(sectionThree).contentPrimary.length}`, "grid-row py-10 md:grid-cols-2"])}" data-v-0fedc9e9${_scopeId}><!--[-->`);
            ssrRenderList(unref(sectionThree).contentPrimary, (content, i) => {
              _push2(ssrRenderComponent(_component_ImageHover, {
                key: i,
                href: content.href,
                img: content.img,
                topic: content.topic,
                class: [`animated-delay-${i * 100}ms`, {
                  "animated animated-fade-in-up animated-faster": unref(sectionThreeVis)
                }]
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><div class="${ssrRenderClass([`lg:grid-cols-${unref(sectionThree).contentSecondary.length}`, "grid-row pb-10 md:grid-cols-2"])}" data-v-0fedc9e9${_scopeId}><!--[-->`);
            ssrRenderList(unref(sectionThree).contentSecondary, (content, i) => {
              _push2(ssrRenderComponent(_component_ImageHover, {
                key: i,
                href: content.href,
                img: content.img,
                topic: content.topic,
                class: [`animated-delay-${i * 100}ms`, {
                  "animated animated-fade-in-up animated-faster": unref(sectionThreeVis)
                }]
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><div class="${ssrRenderClass([`lg:grid-cols-${unref(sectionThree).contentThird.length}`, "grid-row pb-20 md:grid-cols-2"])}" data-v-0fedc9e9${_scopeId}><!--[-->`);
            ssrRenderList(unref(sectionThree).contentThird, (content, i) => {
              _push2(ssrRenderComponent(_component_ImageHover, {
                key: i,
                href: content.href,
                img: content.img,
                topic: content.topic,
                class: [`animated-delay-${i * 100}ms`, {
                  "animated animated-fade-in-up": unref(sectionThreeVis)
                }]
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div>`);
            _push2(ssrRenderComponent(_component_LocaleNuxtLink, {
              href: unref(sectionThree).link.href
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ABtn, { variant: "light" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.$t(unref(sectionThree).link.name))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t(unref(sectionThree).link.name)), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ABtn, { variant: "light" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t(unref(sectionThree).link.name)), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Typography, {
                title: _ctx.$t(unref(sectionThree).title),
                topic: _ctx.$t(unref(sectionThree).topic),
                description: _ctx.$t(unref(sectionThree).description)
              }, null, 8, ["title", "topic", "description"]),
              createVNode("div", {
                ref_key: "sectionThreeEl",
                ref: sectionThreeEl
              }, [
                createVNode("div", {
                  class: ["grid-row py-10 md:grid-cols-2", `lg:grid-cols-${unref(sectionThree).contentPrimary.length}`]
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(sectionThree).contentPrimary, (content, i) => {
                    return openBlock(), createBlock(_component_ImageHover, {
                      key: i,
                      href: content.href,
                      img: content.img,
                      topic: content.topic,
                      class: [`animated-delay-${i * 100}ms`, {
                        "animated animated-fade-in-up animated-faster": unref(sectionThreeVis)
                      }]
                    }, null, 8, ["href", "img", "topic", "class"]);
                  }), 128))
                ], 2),
                createVNode("div", {
                  class: ["grid-row pb-10 md:grid-cols-2", `lg:grid-cols-${unref(sectionThree).contentSecondary.length}`]
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(sectionThree).contentSecondary, (content, i) => {
                    return openBlock(), createBlock(_component_ImageHover, {
                      key: i,
                      href: content.href,
                      img: content.img,
                      topic: content.topic,
                      class: [`animated-delay-${i * 100}ms`, {
                        "animated animated-fade-in-up animated-faster": unref(sectionThreeVis)
                      }]
                    }, null, 8, ["href", "img", "topic", "class"]);
                  }), 128))
                ], 2),
                createVNode("div", {
                  class: ["grid-row pb-20 md:grid-cols-2", `lg:grid-cols-${unref(sectionThree).contentThird.length}`]
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(sectionThree).contentThird, (content, i) => {
                    return openBlock(), createBlock(_component_ImageHover, {
                      key: i,
                      href: content.href,
                      img: content.img,
                      topic: content.topic,
                      class: [`animated-delay-${i * 100}ms`, {
                        "animated animated-fade-in-up": unref(sectionThreeVis)
                      }]
                    }, null, 8, ["href", "img", "topic", "class"]);
                  }), 128))
                ], 2)
              ], 512),
              createVNode(_component_LocaleNuxtLink, {
                href: unref(sectionThree).link.href
              }, {
                default: withCtx(() => [
                  createVNode(_component_ABtn, { variant: "light" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t(unref(sectionThree).link.name)), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["href"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_SectionBanner, {
        img: _ctx.$t(unref(sectionFour).img),
        topic: _ctx.$t(unref(sectionFour).topic),
        description: _ctx.$t(unref(sectionFour).description),
        link: {
          href: unref(sectionFour).link.href,
          name: _ctx.$t(unref(sectionFour).link.name)
        },
        mask: "bottom"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Section, { class: "bg-gradient-blue text-white" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Typography, {
              title: _ctx.$t(unref(sectionFive).title),
              topic: _ctx.$t(unref(sectionFive).topic),
              description: _ctx.$t(unref(sectionFive).description),
              class: "pb-20 text-start"
            }, null, _parent2, _scopeId));
            _push2(`<div class="grid-row gap-26 pb-10 lg:grid-cols-3 md:grid-cols-2" data-v-0fedc9e9${_scopeId}><!--[-->`);
            ssrRenderList(unref(sectionFive).content, (content, i) => {
              _push2(`<div class="w-full" data-v-0fedc9e9${_scopeId}><h4 text-h4 class="break-words text-start font-bold text-white !line-clamp-2" data-v-0fedc9e9${_scopeId}>${ssrInterpolate(_ctx.$t(content.topic))}</h4><p text-h7 class="break-words text-start !line-clamp-3" data-v-0fedc9e9${_scopeId}>${ssrInterpolate(_ctx.$t(content.description))}</p></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode(_component_Typography, {
                title: _ctx.$t(unref(sectionFive).title),
                topic: _ctx.$t(unref(sectionFive).topic),
                description: _ctx.$t(unref(sectionFive).description),
                class: "pb-20 text-start"
              }, null, 8, ["title", "topic", "description"]),
              createVNode("div", { class: "grid-row gap-26 pb-10 lg:grid-cols-3 md:grid-cols-2" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(sectionFive).content, (content, i) => {
                  return openBlock(), createBlock("div", {
                    key: i,
                    class: "w-full"
                  }, [
                    createVNode("h4", {
                      "text-h4": "",
                      class: "break-words text-start font-bold text-white !line-clamp-2"
                    }, toDisplayString(_ctx.$t(content.topic)), 1),
                    createVNode("p", {
                      "text-h7": "",
                      class: "break-words text-start !line-clamp-3"
                    }, toDisplayString(_ctx.$t(content.description)), 1)
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Section, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Typography, {
              topic: _ctx.$t(unref(sectionSix).topic),
              description: _ctx.$t(unref(sectionSix).description)
            }, null, _parent2, _scopeId));
            _push2(`<!--[-->`);
            ssrRenderList(unref(sectionSix).content, (item, i) => {
              _push2(`<div class="${ssrRenderClass([{ "flex-row-reverse": i % 2 === 0 }, "flex flex-wrap gap-6 py-10 md:flex-nowrap"])}" data-v-0fedc9e9${_scopeId}><div class="w-45% flex-grow" data-v-0fedc9e9${_scopeId}><div class="relative h-full w-full flex items-center justify-center overflow-hidden border-6px border-dark-50/10 rounded-xl dark:border-light-50/10" style="${ssrRenderStyle({ "mask-image": "linear-gradient(0deg, transparent, #000)", "-webkit-mask-image": "linear-gradient(0deg, transparent, #000 60%)" })}" data-v-0fedc9e9${_scopeId}><img${ssrRenderAttr("src", item.img)} data-v-0fedc9e9${_scopeId}></div></div><div class="w-55% flex-grow" data-v-0fedc9e9${_scopeId}><div class="h-full w-full flex flex-col items-center justify-center px-16 md:items-start" data-v-0fedc9e9${_scopeId}><p class="text-title" data-v-0fedc9e9${_scopeId}>${ssrInterpolate(_ctx.$t(item.title))}</p><h4 class="text-h4 font-bold" data-v-0fedc9e9${_scopeId}>${ssrInterpolate(_ctx.$t(item.topic))}</h4><p class="text-h6 md:text-left" data-v-0fedc9e9${_scopeId}>${ssrInterpolate(_ctx.$t(item.description))}</p>`);
              if (item.link) {
                _push2(`<div w-full py-10 data-v-0fedc9e9${_scopeId}>`);
                _push2(ssrRenderComponent(_component_LocaleNuxtLink, {
                  href: item.link.href
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_ABtn, {
                        variant: "light",
                        class: "group"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(_ctx.$t(item.link.name))} <div i-solar-arrow-right-linear class="transition-all group-hover:px-4" data-v-0fedc9e9${_scopeId3}></div>`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(_ctx.$t(item.link.name)) + " ", 1),
                              createVNode("div", {
                                "i-solar-arrow-right-linear": "",
                                class: "transition-all group-hover:px-4"
                              })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_ABtn, {
                          variant: "light",
                          class: "group"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t(item.link.name)) + " ", 1),
                            createVNode("div", {
                              "i-solar-arrow-right-linear": "",
                              class: "transition-all group-hover:px-4"
                            })
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode(_component_Typography, {
                topic: _ctx.$t(unref(sectionSix).topic),
                description: _ctx.$t(unref(sectionSix).description)
              }, null, 8, ["topic", "description"]),
              (openBlock(true), createBlock(Fragment, null, renderList(unref(sectionSix).content, (item, i) => {
                return openBlock(), createBlock("div", {
                  key: i,
                  class: ["flex flex-wrap gap-6 py-10 md:flex-nowrap", { "flex-row-reverse": i % 2 === 0 }]
                }, [
                  createVNode("div", { class: "w-45% flex-grow" }, [
                    createVNode("div", {
                      class: "relative h-full w-full flex items-center justify-center overflow-hidden border-6px border-dark-50/10 rounded-xl dark:border-light-50/10",
                      style: { "mask-image": "linear-gradient(0deg, transparent, #000)", "-webkit-mask-image": "linear-gradient(0deg, transparent, #000 60%)" }
                    }, [
                      createVNode("img", {
                        src: item.img
                      }, null, 8, ["src"])
                    ])
                  ]),
                  createVNode("div", { class: "w-55% flex-grow" }, [
                    createVNode("div", { class: "h-full w-full flex flex-col items-center justify-center px-16 md:items-start" }, [
                      createVNode("p", { class: "text-title" }, toDisplayString(_ctx.$t(item.title)), 1),
                      createVNode("h4", { class: "text-h4 font-bold" }, toDisplayString(_ctx.$t(item.topic)), 1),
                      createVNode("p", { class: "text-h6 md:text-left" }, toDisplayString(_ctx.$t(item.description)), 1),
                      item.link ? (openBlock(), createBlock("div", {
                        key: 0,
                        "w-full": "",
                        "py-10": ""
                      }, [
                        createVNode(_component_LocaleNuxtLink, {
                          href: item.link.href
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ABtn, {
                              variant: "light",
                              class: "group"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t(item.link.name)) + " ", 1),
                                createVNode("div", {
                                  "i-solar-arrow-right-linear": "",
                                  class: "transition-all group-hover:px-4"
                                })
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["href"])
                      ])) : createCommentVNode("", true)
                    ])
                  ])
                ], 2);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_SectionBanner, {
        img: _ctx.$t(unref(sectionSeven).img),
        title: _ctx.$t(unref(sectionSeven).title),
        topic: _ctx.$t(unref(sectionSeven).topic),
        mask: "bottom"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Section, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid-row grid-cols-2 gap-20 pb-20 lg:grid-cols-4" data-v-0fedc9e9${_scopeId}><!--[-->`);
            ssrRenderList(unref(sectionEight).content, (content, i) => {
              _push2(`<div class="w-full text-center" data-v-0fedc9e9${_scopeId}><div class="${ssrRenderClass(content.icon)}" h-60px w-full data-v-0fedc9e9${_scopeId}></div><h4 text-h4 font-bold data-v-0fedc9e9${_scopeId}>${ssrInterpolate(_ctx.$t(content.title))}</h4><p text-h7 data-v-0fedc9e9${_scopeId}>${ssrInterpolate(_ctx.$t(content.description))}</p></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "grid-row grid-cols-2 gap-20 pb-20 lg:grid-cols-4" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(sectionEight).content, (content, i) => {
                  return openBlock(), createBlock("div", {
                    key: i,
                    class: "w-full text-center"
                  }, [
                    createVNode("div", {
                      class: content.icon,
                      "h-60px": "",
                      "w-full": ""
                    }, null, 2),
                    createVNode("h4", {
                      "text-h4": "",
                      "font-bold": ""
                    }, toDisplayString(_ctx.$t(content.title)), 1),
                    createVNode("p", { "text-h7": "" }, toDisplayString(_ctx.$t(content.description)), 1)
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Divider, null, null, _parent));
      _push(ssrRenderComponent(_component_Section, { class: "my-10 flex bg-gradient-pink" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Typography, {
              title: _ctx.$t(unref(sectionNine).title),
              topic: _ctx.$t(unref(sectionNine).topic),
              description: _ctx.$t(unref(sectionNine).description),
              class: "text-start"
            }, null, _parent2, _scopeId));
            _push2(`<div class="w-96" data-v-0fedc9e9${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ModelContent, { src: "/model/apple_watch/scene.gltf" }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_Typography, {
                title: _ctx.$t(unref(sectionNine).title),
                topic: _ctx.$t(unref(sectionNine).topic),
                description: _ctx.$t(unref(sectionNine).description),
                class: "text-start"
              }, null, 8, ["title", "topic", "description"]),
              createVNode("div", { class: "w-96" }, [
                createVNode(_component_ModelContent, { src: "/model/apple_watch/scene.gltf" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Divider, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0fedc9e9"]]);

export { index as default };
//# sourceMappingURL=index-6a8753a8.mjs.map
