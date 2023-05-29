import { u as useColorMode } from './composables-4342911f.mjs';
import { computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import '../server.mjs';
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

const _sfc_main = {
  __name: "logo",
  __ssrInlineRender: true,
  setup(__props) {
    const color = useColorMode();
    const textColor = computed(() => color.value === "dark" ? "white" : "black");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        text: unref(textColor),
        class: "py-10"
      }, _attrs))}><svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 749.65 91.19"><path fill="currentColor" d="M80.84,7.07V22.23H48V72.75H32.84V22.23H0V7.07Z"></path><path fill="currentColor" d="M106.56,7.07H147q20.21,0,20.21,20.21V52.54q0,20.21-20.21,20.21H106.56q-20.22,0-20.21-20.21V27.28Q86.35,7.07,106.56,7.07ZM147,22.23H106.56q-5.06,0-5.06,5.05V52.54q0,5.06,5.06,5.05H147c3.36,0,5.05-1.68,5.05-5.05V27.28C152,23.91,150.34,22.23,147,22.23Z"></path><path fill="currentColor" d="M194.12,22.23V72.75H179V7.07h60.63q20.21,0,20.21,20.21T239.59,47.49H204.22V32.33h35.37q5.06,0,5-5t-5-5.05Z"></path><path fill="currentColor" d="M261.11,7.07h16.68l26.77,51.84L331.34,7.07H348L304.56,91.19Z"></path><path fill="currentColor" d="M369.64,57.59h60.63V72.75H369.64q-20.2,0-20.21-20.21V27.28q0-20.21,20.21-20.21h60.63V22.23H369.64q-5.06,0-5.05,5.05V52.54Q364.59,57.6,369.64,57.59Zm40.42-25.26V47.49H374.69V32.33Z"></path><path fill="currentColor" d="M457.25,22.23V72.75H442.09V7.07h60.63q20.22,0,20.21,20.21T502.72,47.49h-3.84l25.26,25.26H502.72L462.3,32.33h40.42q5.05,0,5-5t-5-5.05Z"></path><path fill="currentColor" d="M592.2,72.75H531.57V57.59H592.2q5.06,0,5-5.05t-5-5H551.78q-20.21,0-20.21-20.21T551.78,7.07h60.63V22.23H551.78q-5.06,0-5,5.05t5,5H592.2q20.2,0,20.21,20.21T592.2,72.75Z"></path><path fill="currentColor" d="M642.73,57.59h60.63V72.75H642.73q-20.22,0-20.21-20.21V27.28q0-20.21,20.21-20.21h60.63V22.23H642.73q-5.06,0-5.06,5.05V52.54Q637.67,57.6,642.73,57.59Zm40.42-25.26V47.49H647.78V32.33Z"></path><path fill="currentColor" d="M730.5,38.29A18.44,18.44,0,0,1,717,32.68a18.45,18.45,0,0,1-5.62-13.53A18.45,18.45,0,0,1,717,5.61a19.13,19.13,0,0,1,27.07,0,18.45,18.45,0,0,1,5.61,13.54A18.44,18.44,0,0,1,744,32.68,18.48,18.48,0,0,1,730.5,38.29ZM729,8.84q9.72,0,9.72,7.36c0,3.06-1.26,5.18-3.77,6.33l4.83,6,.06-.06a12.76,12.76,0,0,0,3.89-9.36,12.77,12.77,0,0,0-3.89-9.37,13.23,13.23,0,0,0-18.74,0,12.76,12.76,0,0,0-3.88,9.37,12.75,12.75,0,0,0,3.88,9.36,13.26,13.26,0,0,0,17.71.95H734l-4.91-5.9H729v5.9h-5.89V8.84Zm0,5.89v2.94c2.55,0,3.83-.49,3.83-1.47S731.58,14.73,729,14.73Z"></path></svg></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/brand/logo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=logo-8010ba8d.mjs.map
