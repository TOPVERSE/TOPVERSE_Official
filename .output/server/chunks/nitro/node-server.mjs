globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, readBody, getQuery as getQuery$1, getCookie, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase, kebabCase, pascalCase, camelCase } from 'scule';
import { klona } from 'klona';
import defu, { defuFn } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withLeadingSlash, withoutTrailingSlash, isRelative } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import unstorage_47drivers_47fs from 'unstorage/drivers/fs';
import overlay from 'unstorage/drivers/overlay';
import memory$1 from 'unstorage/drivers/memory';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, extname, join } from 'pathe';
import { generateJSON } from '@intlify/bundle-utils';
import { unified } from 'unified';
import { toString } from 'mdast-util-to-string';
import { preprocess } from 'micromark/lib/preprocess.js';
import { postprocess } from 'micromark/lib/postprocess.js';
import { stringifyPosition } from 'unist-util-stringify-position';
import { markdownLineEnding, markdownSpace } from 'micromark-util-character';
import { push, splice } from 'micromark-util-chunked';
import { resolveAll } from 'micromark-util-resolve-all';
import remarkEmoji from 'remark-emoji';
import rehypeSlug from 'rehype-slug';
import remarkSqueezeParagraphs from 'remark-squeeze-paragraphs';
import rehypeExternalLinks from 'rehype-external-links';
import remarkGfm from 'remark-gfm';
import rehypeSortAttributeValues from 'rehype-sort-attribute-values';
import rehypeSortAttributes from 'rehype-sort-attributes';
import rehypeRaw from 'rehype-raw';
import remarkMDC, { parseFrontMatter } from 'remark-mdc';
import remarkParse from 'remark-parse';
import remark2rehype from 'remark-rehype';
import { all } from 'mdast-util-to-hast';
import { detab } from 'detab';
import { u } from 'unist-builder';
import { encode } from 'mdurl';
import slugify from 'slugify';
import { position } from 'unist-util-position';
import { visit } from 'unist-util-visit';
import { BUNDLED_LANGUAGES, BUNDLED_THEMES, getHighlighter } from 'shiki-es';
import { consola } from 'unenv/runtime/npm/consola';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/sw.js": {
        "headers": {
          "Cache-Control": "public, max-age=0, must-revalidate"
        }
      },
      "/manifest.webmanifest": {
        "headers": {
          "Content-Type": "application/manifest+json",
          "Cache-Control": "public, max-age=0, must-revalidate"
        }
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "i18n": {
      "experimental": {
        "jsTsFormatResource": false
      },
      "baseUrl": ""
    },
    "content": {
      "locales": [],
      "defaultLocale": "",
      "integrity": 1685257058890,
      "experimental": {
        "stripQueryParameters": false,
        "clientDB": false,
        "advancedIgnoresPattern": false
      },
      "api": {
        "baseURL": "/api/_content"
      },
      "navigation": {
        "fields": []
      },
      "tags": {
        "p": "prose-p",
        "a": "prose-a",
        "blockquote": "prose-blockquote",
        "code-inline": "prose-code-inline",
        "code": "prose-code",
        "em": "prose-em",
        "h1": "prose-h1",
        "h2": "prose-h2",
        "h3": "prose-h3",
        "h4": "prose-h4",
        "h5": "prose-h5",
        "h6": "prose-h6",
        "hr": "prose-hr",
        "img": "prose-img",
        "ul": "prose-ul",
        "ol": "prose-ol",
        "li": "prose-li",
        "strong": "prose-strong",
        "table": "prose-table",
        "thead": "prose-thead",
        "tbody": "prose-tbody",
        "td": "prose-td",
        "th": "prose-th",
        "tr": "prose-tr"
      },
      "highlight": false,
      "wsUrl": "",
      "documentDriven": false,
      "host": "",
      "trailingSlash": false,
      "anchorLinks": {
        "depth": 4,
        "exclude": [
          1
        ]
      }
    }
  },
  "i18n": {
    "precompile": {
      "strictMessage": true,
      "escapeHtml": false
    }
  },
  "content": {
    "cacheVersion": 2,
    "cacheIntegrity": "kc4UzpZUjI",
    "transformers": [],
    "base": "",
    "api": {
      "baseURL": "/api/_content"
    },
    "watch": {
      "ws": {
        "port": {
          "port": 4000,
          "portRange": [
            4000,
            4040
          ]
        },
        "hostname": "localhost",
        "showURL": false
      }
    },
    "sources": {},
    "ignores": [],
    "locales": [],
    "defaultLocale": "",
    "highlight": false,
    "markdown": {
      "tags": {
        "p": "prose-p",
        "a": "prose-a",
        "blockquote": "prose-blockquote",
        "code-inline": "prose-code-inline",
        "code": "prose-code",
        "em": "prose-em",
        "h1": "prose-h1",
        "h2": "prose-h2",
        "h3": "prose-h3",
        "h4": "prose-h4",
        "h5": "prose-h5",
        "h6": "prose-h6",
        "hr": "prose-hr",
        "img": "prose-img",
        "ul": "prose-ul",
        "ol": "prose-ol",
        "li": "prose-li",
        "strong": "prose-strong",
        "table": "prose-table",
        "thead": "prose-thead",
        "tbody": "prose-tbody",
        "td": "prose-td",
        "th": "prose-th",
        "tr": "prose-tr"
      },
      "anchorLinks": {
        "depth": 4,
        "exclude": [
          1
        ]
      },
      "remarkPlugins": {},
      "rehypePlugins": {}
    },
    "yaml": {},
    "csv": {
      "delimeter": ",",
      "json": true
    },
    "navigation": {
      "fields": []
    },
    "documentDriven": false,
    "experimental": {
      "clientDB": false,
      "stripQueryParameters": false,
      "advancedIgnoresPattern": false
    }
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const _assets = {
  ["nitro:bundled:cache:content:content-index.json"]: {
    import: () => import('../raw/content-index.mjs').then(r => r.default || r),
    meta: {"type":"application/json","etag":"\"1a9-2a1mSYcXwF6LsYRLT2u/vzhlkoI\"","mtime":"2023-05-28T06:58:32.659Z"}
  },
  ["nitro:bundled:cache:content:content-navigation.json"]: {
    import: () => import('../raw/content-navigation.mjs').then(r => r.default || r),
    meta: {"type":"application/json","etag":"\"231-GQoUc4boIcOUmwo3Ixe2dv0EXxQ\"","mtime":"2023-05-28T06:58:32.661Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:en:bar-symphony.md"]: {
    import: () => import('../raw/bar-symphony.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"19b3-jT6sJ0wiUv1w1P30VKKT2T78w2o\"","mtime":"2023-05-28T06:58:32.663Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:en:changannostalgia.md"]: {
    import: () => import('../raw/changannostalgia.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"f0a-zNaLpqKccrzLGe+ji7ULctu4dQQ\"","mtime":"2023-05-28T06:58:32.665Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:en:creatorpartyverse.md"]: {
    import: () => import('../raw/creatorpartyverse.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"6e8-vmv7OChC3TSWnC6leGpoaIuP+9s\"","mtime":"2023-05-28T06:58:32.664Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:en:holowater.md"]: {
    import: () => import('../raw/holowater.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"8c7-G94TCa6/4f/2gyZIf5/94RRpFlY\"","mtime":"2023-05-28T06:58:32.663Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:zh:bar-symphony.md"]: {
    import: () => import('../raw/bar-symphony2.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"f65-NgwgzbuXsXJa5txlDpPV/thcyFo\"","mtime":"2023-05-28T06:58:32.663Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:zh:changannostalgia.md"]: {
    import: () => import('../raw/changannostalgia2.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"4ea-lQwKimaGPOsTxtuCQS+1v6N+t+Q\"","mtime":"2023-05-28T06:58:32.664Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:zh:creatorpartyverse.md"]: {
    import: () => import('../raw/creatorpartyverse2.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"195b-io0QpIxmyKHWEikxbSi3e3JJDDo\"","mtime":"2023-05-28T06:58:32.661Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:zh:holowater.md"]: {
    import: () => import('../raw/holowater2.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"2b98-3vLkuZg1BHI+TlC6EdpWj1xB5q8\"","mtime":"2023-05-28T06:58:32.664Z"}
  }
};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('i18n', unstorage_47drivers_47fs({"driver":"fs","base":"G:\\JS\\work\\TOPVERSE_Official\\.nuxt\\i18n","ignore":["**/node_modules/**","**/.git/**"]}));

const bundledStorage = ["/cache/content"];
for (const base of bundledStorage) {
  storage.mount(base, overlay({
    layers: [
      memory$1(),
      // TODO
      // prefixStorage(storage, base),
      prefixStorage(storage, 'assets:nitro:bundled:' + base)
    ]
  }));
}

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const script = "\"use strict\";const w=window,de=document.documentElement,knownColorSchemes=[\"dark\",\"light\"],preference=window.localStorage.getItem(\"nuxt-color-mode\")||\"system\";let value=preference===\"system\"?getColorScheme():preference;const forcedColorMode=de.getAttribute(\"data-color-mode-forced\");forcedColorMode&&(value=forcedColorMode),addColorScheme(value),w[\"__NUXT_COLOR_MODE__\"]={preference,value,getColorScheme,addColorScheme,removeColorScheme};function addColorScheme(e){const o=\"\"+e+\"\",t=\"\";de.classList?de.classList.add(o):de.className+=\" \"+o,t&&de.setAttribute(\"data-\"+t,e)}function removeColorScheme(e){const o=\"\"+e+\"\",t=\"\";de.classList?de.classList.remove(o):de.className=de.className.replace(new RegExp(o,\"g\"),\"\"),t&&de.removeAttribute(\"data-\"+t)}function prefersColorScheme(e){return w.matchMedia(\"(prefers-color-scheme\"+e+\")\")}function getColorScheme(){if(w.matchMedia&&prefersColorScheme(\"\").media!==\"not all\"){for(const e of knownColorSchemes)if(prefersColorScheme(\":\"+e).matches)return e}return\"light\"}\n";

const _JABnYktoat = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const plugins = [
  _JABnYktoat
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(await res.text());
});

const assets = {
  "/apple-touch-icon.png": {
    "type": "image/png",
    "etag": "\"bde-W/NsBBTBXb8LAIxQ/um4bIAQOB4\"",
    "mtime": "2023-05-25T01:10:09.024Z",
    "size": 3038,
    "path": "../public/apple-touch-icon.png"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"118f6-6pMfXzpVyfjE8HDaJoOFYNjGqWM\"",
    "mtime": "2023-05-25T01:10:09.024Z",
    "size": 71926,
    "path": "../public/favicon.ico"
  },
  "/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"bfd4-+tFCXV4w3VussZCv8BGQ9ot26OM\"",
    "mtime": "2023-05-28T06:58:22.787Z",
    "size": 49108,
    "path": "../public/index.html"
  },
  "/manifest.webmanifest": {
    "type": "application/manifest+json",
    "etag": "\"1ac-nBEQhDtzp0u0Irh8roqK9gPpWX0\"",
    "mtime": "2023-05-28T06:58:09.097Z",
    "size": 428,
    "path": "../public/manifest.webmanifest"
  },
  "/maskable-icon.png": {
    "type": "image/png",
    "etag": "\"18bc-iDlIOVGhiiXZQzC0nmWsWI0EwxA\"",
    "mtime": "2023-05-25T01:10:12.545Z",
    "size": 6332,
    "path": "../public/maskable-icon.png"
  },
  "/pwa-192x192.png": {
    "type": "image/png",
    "etag": "\"8e1-W8Uop367c9UFU5ZG1WoX7M31T7w\"",
    "mtime": "2023-05-25T01:10:12.546Z",
    "size": 2273,
    "path": "../public/pwa-192x192.png"
  },
  "/pwa-512x512.png": {
    "type": "image/png",
    "etag": "\"18bc-iDlIOVGhiiXZQzC0nmWsWI0EwxA\"",
    "mtime": "2023-05-25T01:10:12.546Z",
    "size": 6332,
    "path": "../public/pwa-512x512.png"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"19-yHADZo6lKl+mSNPU9098EiqzPCE\"",
    "mtime": "2023-05-25T01:10:12.547Z",
    "size": 25,
    "path": "../public/robots.txt"
  },
  "/sw.js": {
    "type": "application/javascript",
    "etag": "\"2889-KCipL+dB3RY0fTq5YdCrvvfYO2k\"",
    "mtime": "2023-05-28T06:58:32.583Z",
    "size": 10377,
    "path": "../public/sw.js"
  },
  "/topverse.black.svg": {
    "type": "image/svg+xml",
    "etag": "\"85f-dXKVsrke2/PaigZIkVTRfhuQP54\"",
    "mtime": "2023-05-25T01:10:12.547Z",
    "size": 2143,
    "path": "../public/topverse.black.svg"
  },
  "/topverse.icon.svg": {
    "type": "image/svg+xml",
    "etag": "\"72c-SJ8uiaKHSiYvOFglRpF/wL3hKCk\"",
    "mtime": "2023-05-25T01:10:12.547Z",
    "size": 1836,
    "path": "../public/topverse.icon.svg"
  },
  "/topverse.svg": {
    "type": "image/svg+xml",
    "etag": "\"85f-3KEdXZdKC5cGaOnTo4yeM81lc2o\"",
    "mtime": "2023-05-25T01:10:12.548Z",
    "size": 2143,
    "path": "../public/topverse.svg"
  },
  "/vite.png": {
    "type": "image/png",
    "etag": "\"daa-9QB0vADWlAJoHjvml3HVjIqSvUs\"",
    "mtime": "2023-05-25T01:10:12.548Z",
    "size": 3498,
    "path": "../public/vite.png"
  },
  "/wechat.png": {
    "type": "image/png",
    "etag": "\"18bc-iDlIOVGhiiXZQzC0nmWsWI0EwxA\"",
    "mtime": "2023-05-25T01:10:12.545Z",
    "size": 6332,
    "path": "../public/wechat.png"
  },
  "/workbox-de803542.js": {
    "type": "application/javascript",
    "etag": "\"5579-ImenQs6LWUOAoHRiY/xDcNuiK8Y\"",
    "mtime": "2023-05-28T06:58:32.586Z",
    "size": 21881,
    "path": "../public/workbox-de803542.js"
  },
  "/imgs/1 (1).jpg": {
    "type": "image/jpeg",
    "etag": "\"4eea6f-v1/OkP0yR+Oobx4Sqpyyu2K9fVA\"",
    "mtime": "2023-05-25T01:10:09.053Z",
    "size": 5171823,
    "path": "../public/imgs/1 (1).jpg"
  },
  "/imgs/1 (1).png": {
    "type": "image/png",
    "etag": "\"7601ab-ayj/jhnvzYNh2brTSb8d1JpKolg\"",
    "mtime": "2023-05-25T01:10:09.074Z",
    "size": 7733675,
    "path": "../public/imgs/1 (1).png"
  },
  "/imgs/1 (10).jpg": {
    "type": "image/jpeg",
    "etag": "\"3113ae-ZI4Vn4FLYAqrfFfG8xbq/8Ab5qI\"",
    "mtime": "2023-05-25T01:10:09.089Z",
    "size": 3216302,
    "path": "../public/imgs/1 (10).jpg"
  },
  "/imgs/1 (11).jpg": {
    "type": "image/jpeg",
    "etag": "\"60817f-P/lZO5N7lTu7+KXuU+MXcNwlEpc\"",
    "mtime": "2023-05-25T01:10:09.141Z",
    "size": 6324607,
    "path": "../public/imgs/1 (11).jpg"
  },
  "/imgs/1 (12).jpg": {
    "type": "image/jpeg",
    "etag": "\"b4c6fb-CBi/nBkbyp1K0hq3Dv1YVOsJKIQ\"",
    "mtime": "2023-05-25T01:10:09.225Z",
    "size": 11847419,
    "path": "../public/imgs/1 (12).jpg"
  },
  "/imgs/1 (13).jpg": {
    "type": "image/jpeg",
    "etag": "\"3406f3-zbql0SE+jcfUerawLxp71YO+oXY\"",
    "mtime": "2023-05-25T01:10:09.248Z",
    "size": 3409651,
    "path": "../public/imgs/1 (13).jpg"
  },
  "/imgs/1 (14).jpg": {
    "type": "image/jpeg",
    "etag": "\"1fd603-1/CuUAkJQ0zwvAV4jQhA7LLoNZE\"",
    "mtime": "2023-05-25T01:10:09.265Z",
    "size": 2086403,
    "path": "../public/imgs/1 (14).jpg"
  },
  "/imgs/1 (15).jpg": {
    "type": "image/jpeg",
    "etag": "\"5c0789-SBqqU3LCGiSgBlxKDpbsIvOnkRs\"",
    "mtime": "2023-05-25T01:10:09.310Z",
    "size": 6031241,
    "path": "../public/imgs/1 (15).jpg"
  },
  "/imgs/1 (2).jpg": {
    "type": "image/jpeg",
    "etag": "\"73e52b-Hx7vBkv7jlxE5w6zn/hL32mz1d8\"",
    "mtime": "2023-05-25T01:10:09.359Z",
    "size": 7595307,
    "path": "../public/imgs/1 (2).jpg"
  },
  "/imgs/1 (2).png": {
    "type": "image/png",
    "etag": "\"74c728-fdGCUo5s8nR26noFVeKvYms2oUE\"",
    "mtime": "2023-05-25T01:10:09.394Z",
    "size": 7653160,
    "path": "../public/imgs/1 (2).png"
  },
  "/imgs/1 (3).jpg": {
    "type": "image/jpeg",
    "etag": "\"4d6c5d-yr+uW4l8K6dDum3J2gD4iJiDO+I\"",
    "mtime": "2023-05-25T01:10:09.429Z",
    "size": 5074013,
    "path": "../public/imgs/1 (3).jpg"
  },
  "/imgs/1 (4).jpg": {
    "type": "image/jpeg",
    "etag": "\"5011f3-PXoMzBZN2OSTjGQ1eE0G1rntABI\"",
    "mtime": "2023-05-25T01:10:09.464Z",
    "size": 5247475,
    "path": "../public/imgs/1 (4).jpg"
  },
  "/imgs/1 (5).jpg": {
    "type": "image/jpeg",
    "etag": "\"1cb979-WiDuKWImmPBm+qG5ByzR+mFA8Go\"",
    "mtime": "2023-05-25T01:10:09.476Z",
    "size": 1882489,
    "path": "../public/imgs/1 (5).jpg"
  },
  "/imgs/1 (6).jpg": {
    "type": "image/jpeg",
    "etag": "\"3e788-DGerfTysWLw50pBwnZ1/pBQ1Mps\"",
    "mtime": "2023-05-25T01:10:09.478Z",
    "size": 255880,
    "path": "../public/imgs/1 (6).jpg"
  },
  "/imgs/1 (7).jpg": {
    "type": "image/jpeg",
    "etag": "\"5e140d-7pzOb6nmhGbaznMmunV3AgPPQpg\"",
    "mtime": "2023-05-25T01:10:09.518Z",
    "size": 6165517,
    "path": "../public/imgs/1 (7).jpg"
  },
  "/imgs/1 (8).jpg": {
    "type": "image/jpeg",
    "etag": "\"1516da-kQzVSVsfA13DHxZG4AiXjCW5ZVA\"",
    "mtime": "2023-05-25T01:10:09.526Z",
    "size": 1382106,
    "path": "../public/imgs/1 (8).jpg"
  },
  "/imgs/1 (9).jpg": {
    "type": "image/jpeg",
    "etag": "\"55cb98-W0dT4RduCMr64gPu16DHqmwTx6I\"",
    "mtime": "2023-05-25T01:10:09.560Z",
    "size": 5622680,
    "path": "../public/imgs/1 (9).jpg"
  },
  "/imgs/Home.Creatorverse.jpg": {
    "type": "image/jpeg",
    "etag": "\"8ec3d-vQaWGrQ//bPFxQaJ1ReksWdfYps\"",
    "mtime": "2023-05-25T01:10:12.391Z",
    "size": 584765,
    "path": "../public/imgs/Home.Creatorverse.jpg"
  },
  "/_nuxt/Banner.f39b449a.js": {
    "type": "application/javascript",
    "etag": "\"f2-XKFK6UwVXIOy4tD0ahj/8JbZHSk\"",
    "mtime": "2023-05-28T06:58:08.958Z",
    "size": 242,
    "path": "../public/_nuxt/Banner.f39b449a.js"
  },
  "/_nuxt/Banner.vue.7a7153fe.js": {
    "type": "application/javascript",
    "etag": "\"482-U0TxJJULrpGe4oGglziC1Yjzmmk\"",
    "mtime": "2023-05-28T06:58:08.966Z",
    "size": 1154,
    "path": "../public/_nuxt/Banner.vue.7a7153fe.js"
  },
  "/_nuxt/cannon-es.73300c7b.js": {
    "type": "application/javascript",
    "etag": "\"1e81b-RivZyW44TQ58EMyaPmFzV61WsjI\"",
    "mtime": "2023-05-28T06:58:09.022Z",
    "size": 124955,
    "path": "../public/_nuxt/cannon-es.73300c7b.js"
  },
  "/_nuxt/Carousel.6ef6071a.js": {
    "type": "application/javascript",
    "etag": "\"a6-RnRfjwLH4JDxsukeEu0YEdPcOfA\"",
    "mtime": "2023-05-28T06:58:08.958Z",
    "size": 166,
    "path": "../public/_nuxt/Carousel.6ef6071a.js"
  },
  "/_nuxt/Carousel.vue.02b92690.js": {
    "type": "application/javascript",
    "etag": "\"6ea-tV9MudZi8wj3NZtO3/8WpjnUz5s\"",
    "mtime": "2023-05-28T06:58:08.958Z",
    "size": 1770,
    "path": "../public/_nuxt/Carousel.vue.02b92690.js"
  },
  "/_nuxt/client-db.d0b28097.js": {
    "type": "application/javascript",
    "etag": "\"4c65-O8dQ3bnP0E9x8Ytag8uWCnbWPM8\"",
    "mtime": "2023-05-28T06:58:08.995Z",
    "size": 19557,
    "path": "../public/_nuxt/client-db.d0b28097.js"
  },
  "/_nuxt/composables.da12a86e.js": {
    "type": "application/javascript",
    "etag": "\"5a-wspdmtr1gPZ5yesb5o8/AQBLbzA\"",
    "mtime": "2023-05-28T06:58:08.967Z",
    "size": 90,
    "path": "../public/_nuxt/composables.da12a86e.js"
  },
  "/_nuxt/computeBVH.9a5304e5.js": {
    "type": "application/javascript",
    "etag": "\"8820-DrgbWEh7iE7Gdd9yBngYtI2cA4s\"",
    "mtime": "2023-05-28T06:58:08.996Z",
    "size": 34848,
    "path": "../public/_nuxt/computeBVH.9a5304e5.js"
  },
  "/_nuxt/content.4dbfe98b.js": {
    "type": "application/javascript",
    "etag": "\"80-dZWvbUsBJiUy+8R/85i0GJg1xFs\"",
    "mtime": "2023-05-28T06:58:08.958Z",
    "size": 128,
    "path": "../public/_nuxt/content.4dbfe98b.js"
  },
  "/_nuxt/content.vue.07d7129e.js": {
    "type": "application/javascript",
    "etag": "\"2b8-k8cFZLtwH+c+cXqtIaaGxfU6Z2k\"",
    "mtime": "2023-05-28T06:58:08.941Z",
    "size": 696,
    "path": "../public/_nuxt/content.vue.07d7129e.js"
  },
  "/_nuxt/ContentDoc.114e63bf.js": {
    "type": "application/javascript",
    "etag": "\"809-Q8zz2MctKO3kesR2VZe2BrsexeY\"",
    "mtime": "2023-05-28T06:58:08.980Z",
    "size": 2057,
    "path": "../public/_nuxt/ContentDoc.114e63bf.js"
  },
  "/_nuxt/ContentList.77a47606.js": {
    "type": "application/javascript",
    "etag": "\"3b4-Pdg01wQqOt93s75d6Vmydp+6aNg\"",
    "mtime": "2023-05-28T06:58:08.958Z",
    "size": 948,
    "path": "../public/_nuxt/ContentList.77a47606.js"
  },
  "/_nuxt/ContentNavigation.66ab4147.js": {
    "type": "application/javascript",
    "etag": "\"732-DUWryrp7f8vTsZ0rVzKos4Jrrdg\"",
    "mtime": "2023-05-28T06:58:08.958Z",
    "size": 1842,
    "path": "../public/_nuxt/ContentNavigation.66ab4147.js"
  },
  "/_nuxt/ContentQuery.8329d812.js": {
    "type": "application/javascript",
    "etag": "\"90b-bq+PBYF0vJMjl7lB7VhaS3on1y4\"",
    "mtime": "2023-05-28T06:58:08.958Z",
    "size": 2315,
    "path": "../public/_nuxt/ContentQuery.8329d812.js"
  },
  "/_nuxt/ContentRenderer.9da5a247.js": {
    "type": "application/javascript",
    "etag": "\"4f0-RbPv58VY0riZO84/ld3QGtbCVBY\"",
    "mtime": "2023-05-28T06:58:08.941Z",
    "size": 1264,
    "path": "../public/_nuxt/ContentRenderer.9da5a247.js"
  },
  "/_nuxt/ContentRendererMarkdown.414af1a8.js": {
    "type": "application/javascript",
    "etag": "\"5795-LeMd+9iklGrD6RVmsd4pCB+B2OE\"",
    "mtime": "2023-05-28T06:58:08.995Z",
    "size": 22421,
    "path": "../public/_nuxt/ContentRendererMarkdown.414af1a8.js"
  },
  "/_nuxt/ContentSlot.f74ded05.js": {
    "type": "application/javascript",
    "etag": "\"406-tU5RiRFWDLIhbn8NW62oD9DC4jk\"",
    "mtime": "2023-05-28T06:58:08.966Z",
    "size": 1030,
    "path": "../public/_nuxt/ContentSlot.f74ded05.js"
  },
  "/_nuxt/Counter.25bd3e2c.js": {
    "type": "application/javascript",
    "etag": "\"60-SG0stAAEDW++ZjvkM6ZSNGT0IGE\"",
    "mtime": "2023-05-28T06:58:08.980Z",
    "size": 96,
    "path": "../public/_nuxt/Counter.25bd3e2c.js"
  },
  "/_nuxt/Counter.vue.b2171292.js": {
    "type": "application/javascript",
    "etag": "\"2b9-K+28L7M+wHGNDwXmF08WnBaynMs\"",
    "mtime": "2023-05-28T06:58:08.991Z",
    "size": 697,
    "path": "../public/_nuxt/Counter.vue.b2171292.js"
  },
  "/_nuxt/DarkToggle.c64bb182.js": {
    "type": "application/javascript",
    "etag": "\"85-jU8n6oAHnv3AA2zLXOm/k2OmmwU\"",
    "mtime": "2023-05-28T06:58:08.941Z",
    "size": 133,
    "path": "../public/_nuxt/DarkToggle.c64bb182.js"
  },
  "/_nuxt/DarkToggle.vue.f0852b30.js": {
    "type": "application/javascript",
    "etag": "\"1dc-+ivKyyHxSwYGQjcBmAl92Jblbto\"",
    "mtime": "2023-05-28T06:58:08.958Z",
    "size": 476,
    "path": "../public/_nuxt/DarkToggle.vue.f0852b30.js"
  },
  "/_nuxt/default.18a4237f.js": {
    "type": "application/javascript",
    "etag": "\"243-ZJWxBv766P7kOJOH6kiuD8gcBNU\"",
    "mtime": "2023-05-28T06:58:08.994Z",
    "size": 579,
    "path": "../public/_nuxt/default.18a4237f.js"
  },
  "/_nuxt/Divider.ef16fb96.js": {
    "type": "application/javascript",
    "etag": "\"60-NYjAT6IldUvqe1Fpd8l+xcyOncQ\"",
    "mtime": "2023-05-28T06:58:08.979Z",
    "size": 96,
    "path": "../public/_nuxt/Divider.ef16fb96.js"
  },
  "/_nuxt/Divider.vue.76327322.js": {
    "type": "application/javascript",
    "etag": "\"2ad-05kqT+6bStIh7C4Anj3JdYY6YSI\"",
    "mtime": "2023-05-28T06:58:08.991Z",
    "size": 685,
    "path": "../public/_nuxt/Divider.vue.76327322.js"
  },
  "/_nuxt/DocumentDrivenEmpty.9ef6bd4a.js": {
    "type": "application/javascript",
    "etag": "\"120-MlGH8Fv5vsahgwyGmGUXCHy4CYo\"",
    "mtime": "2023-05-28T06:58:08.958Z",
    "size": 288,
    "path": "../public/_nuxt/DocumentDrivenEmpty.9ef6bd4a.js"
  },
  "/_nuxt/DocumentDrivenNotFound.50153427.js": {
    "type": "application/javascript",
    "etag": "\"9f-kkECVie+9Z3rlCtxo/ZX0X1icvE\"",
    "mtime": "2023-05-28T06:58:08.979Z",
    "size": 159,
    "path": "../public/_nuxt/DocumentDrivenNotFound.50153427.js"
  },
  "/_nuxt/en-UK.bc13650a.js": {
    "type": "application/javascript",
    "etag": "\"2868-10OSegMJfVMpmqg6dg7YCumkiRY\"",
    "mtime": "2023-05-28T06:58:08.995Z",
    "size": 10344,
    "path": "../public/_nuxt/en-UK.bc13650a.js"
  },
  "/_nuxt/enableBVHCamera.90b20f9f.js": {
    "type": "application/javascript",
    "etag": "\"5dd-Bx3yPbTXHvy20up/3RmZfWK2Sag\"",
    "mtime": "2023-05-28T06:58:08.993Z",
    "size": 1501,
    "path": "../public/_nuxt/enableBVHCamera.90b20f9f.js"
  },
  "/_nuxt/enableBVHCharacter.e07196db.js": {
    "type": "application/javascript",
    "etag": "\"6ea-te39N9UoqTE1XUzS8U05gILtKfk\"",
    "mtime": "2023-05-28T06:58:08.991Z",
    "size": 1770,
    "path": "../public/_nuxt/enableBVHCharacter.e07196db.js"
  },
  "/_nuxt/enableBVHMap.54d9cd56.js": {
    "type": "application/javascript",
    "etag": "\"1b5-nCCwEFBye4PbMR74RZrh05LoYrI\"",
    "mtime": "2023-05-28T06:58:08.983Z",
    "size": 437,
    "path": "../public/_nuxt/enableBVHMap.54d9cd56.js"
  },
  "/_nuxt/enableCannon.847baa21.js": {
    "type": "application/javascript",
    "etag": "\"40b-wkKG6QRM+6UTK99znJ68r8VShvs\"",
    "mtime": "2023-05-28T06:58:08.960Z",
    "size": 1035,
    "path": "../public/_nuxt/enableCannon.847baa21.js"
  },
  "/_nuxt/enableMouseControl.0c532768.js": {
    "type": "application/javascript",
    "etag": "\"5c8-HH4uZBwB95Nb1Yt3CLZ984BfF7g\"",
    "mtime": "2023-05-28T06:58:08.986Z",
    "size": 1480,
    "path": "../public/_nuxt/enableMouseControl.0c532768.js"
  },
  "/_nuxt/entry.cb7ee9f7.js": {
    "type": "application/javascript",
    "etag": "\"4ec24-c3KUJKJKmsP55nIZ8cSt9RYv4to\"",
    "mtime": "2023-05-28T06:58:09.025Z",
    "size": 322596,
    "path": "../public/_nuxt/entry.cb7ee9f7.js"
  },
  "/_nuxt/entry.f2740701.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1adfc-9HLclz1eCKX5JQdPUWfHbB35YPk\"",
    "mtime": "2023-05-28T06:58:08.941Z",
    "size": 110076,
    "path": "../public/_nuxt/entry.f2740701.css"
  },
  "/_nuxt/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2023-05-28T06:58:08.941Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.23f2309d.css"
  },
  "/_nuxt/error-404.66163063.js": {
    "type": "application/javascript",
    "etag": "\"904-95EuUusstT1q7YTiGuno83CZmo8\"",
    "mtime": "2023-05-28T06:58:09.015Z",
    "size": 2308,
    "path": "../public/_nuxt/error-404.66163063.js"
  },
  "/_nuxt/error-500.5ac34d18.js": {
    "type": "application/javascript",
    "etag": "\"78d-yrYVj2OIq4XzFpVsjkQsf1ewG5c\"",
    "mtime": "2023-05-28T06:58:09.021Z",
    "size": 1933,
    "path": "../public/_nuxt/error-500.5ac34d18.js"
  },
  "/_nuxt/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2023-05-28T06:58:08.941Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.aa16ed4d.css"
  },
  "/_nuxt/error-component.716ea04a.js": {
    "type": "application/javascript",
    "etag": "\"4cc-CfntqICojCkq1HiFOOD/lXAELjE\"",
    "mtime": "2023-05-28T06:58:08.966Z",
    "size": 1228,
    "path": "../public/_nuxt/error-component.716ea04a.js"
  },
  "/_nuxt/Footer.00a99010.js": {
    "type": "application/javascript",
    "etag": "\"a8b-k8g1PNdGOuwOINGGZgWgejYZYPA\"",
    "mtime": "2023-05-28T06:58:08.967Z",
    "size": 2699,
    "path": "../public/_nuxt/Footer.00a99010.js"
  },
  "/_nuxt/GradientCard.a5b058bf.js": {
    "type": "application/javascript",
    "etag": "\"f8-MOxa4Ss4OeagpMqr4FKbzUTEhmU\"",
    "mtime": "2023-05-28T06:58:08.966Z",
    "size": 248,
    "path": "../public/_nuxt/GradientCard.a5b058bf.js"
  },
  "/_nuxt/GradientCard.vue.fb21056b.js": {
    "type": "application/javascript",
    "etag": "\"4c1-ZY1P9C8yEBzQtMUj60jMw0IErYQ\"",
    "mtime": "2023-05-28T06:58:08.941Z",
    "size": 1217,
    "path": "../public/_nuxt/GradientCard.vue.fb21056b.js"
  },
  "/_nuxt/header.cd0d4265.js": {
    "type": "application/javascript",
    "etag": "\"30a-O5ajB5as0jxsYK/gGZlZEkv2lt8\"",
    "mtime": "2023-05-28T06:58:08.967Z",
    "size": 778,
    "path": "../public/_nuxt/header.cd0d4265.js"
  },
  "/_nuxt/home.eef5625b.js": {
    "type": "application/javascript",
    "etag": "\"278-3uT8jgjEJyRcixox6e/7dR4HAAc\"",
    "mtime": "2023-05-28T06:58:08.967Z",
    "size": 632,
    "path": "../public/_nuxt/home.eef5625b.js"
  },
  "/_nuxt/howler.d2437dd1.js": {
    "type": "application/javascript",
    "etag": "\"8ff5-yva2M8NQ1RzBUHY225c1xAA+Leo\"",
    "mtime": "2023-05-28T06:58:08.996Z",
    "size": 36853,
    "path": "../public/_nuxt/howler.d2437dd1.js"
  },
  "/_nuxt/ImageHover.7c091286.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"404-5LYG7MOaBDK1dKWkNOGGtJ8g3Cg\"",
    "mtime": "2023-05-28T06:58:08.940Z",
    "size": 1028,
    "path": "../public/_nuxt/ImageHover.7c091286.css"
  },
  "/_nuxt/ImageHover.ed8b94f2.js": {
    "type": "application/javascript",
    "etag": "\"41e-Mzux5wdj2kMi4tIeL/nmRMMEmzg\"",
    "mtime": "2023-05-28T06:58:08.995Z",
    "size": 1054,
    "path": "../public/_nuxt/ImageHover.ed8b94f2.js"
  },
  "/_nuxt/index.57066528.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"43a-Vw8yAyD5vTqXrE83gIZzZAZ0P18\"",
    "mtime": "2023-05-28T06:58:08.936Z",
    "size": 1082,
    "path": "../public/_nuxt/index.57066528.css"
  },
  "/_nuxt/index.7232e1be.js": {
    "type": "application/javascript",
    "etag": "\"b7-NlEdH6qAoHEavEBucN+X3eY6Hi0\"",
    "mtime": "2023-05-28T06:58:08.941Z",
    "size": 183,
    "path": "../public/_nuxt/index.7232e1be.js"
  },
  "/_nuxt/index.a6ef77ff.js": {
    "type": "application/javascript",
    "etag": "\"26c-+VpW5S3yY9LeN0pZkd2hWLzNeBY\"",
    "mtime": "2023-05-28T06:58:08.984Z",
    "size": 620,
    "path": "../public/_nuxt/index.a6ef77ff.js"
  },
  "/_nuxt/index.ccd734cd.js": {
    "type": "application/javascript",
    "etag": "\"28c0-TGod0SC74V4QpqaA2QDmqhXmV5Y\"",
    "mtime": "2023-05-28T06:58:08.994Z",
    "size": 10432,
    "path": "../public/_nuxt/index.ccd734cd.js"
  },
  "/_nuxt/index.dcf5889f.js": {
    "type": "application/javascript",
    "etag": "\"308d-edtLu9vT+U9xEapnq8p5+piFbP4\"",
    "mtime": "2023-05-28T06:58:09.021Z",
    "size": 12429,
    "path": "../public/_nuxt/index.dcf5889f.js"
  },
  "/_nuxt/InputEntry.98d1eb8c.js": {
    "type": "application/javascript",
    "etag": "\"2eb-uQX58OqZ59WWrC27HP7VdQXmrfM\"",
    "mtime": "2023-05-28T06:58:08.966Z",
    "size": 747,
    "path": "../public/_nuxt/InputEntry.98d1eb8c.js"
  },
  "/_nuxt/land.c8bf2f17.js": {
    "type": "application/javascript",
    "etag": "\"1501-4dVHOWRrzyZEkfvJbX4CJXJnFNE\"",
    "mtime": "2023-05-28T06:58:08.980Z",
    "size": 5377,
    "path": "../public/_nuxt/land.c8bf2f17.js"
  },
  "/_nuxt/loadFBX.f1cb83cd.js": {
    "type": "application/javascript",
    "etag": "\"116fb-+S8gdNeTSxJd6JNO1DRLVKz613Q\"",
    "mtime": "2023-05-28T06:58:09.021Z",
    "size": 71419,
    "path": "../public/_nuxt/loadFBX.f1cb83cd.js"
  },
  "/_nuxt/loadGLTF.f9b564c4.js": {
    "type": "application/javascript",
    "etag": "\"c5f0-gd/8rKePwS+9WOeffyVkYPH+rs8\"",
    "mtime": "2023-05-28T06:58:08.996Z",
    "size": 50672,
    "path": "../public/_nuxt/loadGLTF.f9b564c4.js"
  },
  "/_nuxt/loadSVG.2a4a7b32.js": {
    "type": "application/javascript",
    "etag": "\"52bb-3bBuiO8rKcBLr9uN8MTHbEHaYlA\"",
    "mtime": "2023-05-28T06:58:08.995Z",
    "size": 21179,
    "path": "../public/_nuxt/loadSVG.2a4a7b32.js"
  },
  "/_nuxt/LocaleNuxtLink.b21458ca.js": {
    "type": "application/javascript",
    "etag": "\"87-7SHDTqRo9ON/zgBBHvqayG8qQcg\"",
    "mtime": "2023-05-28T06:58:08.956Z",
    "size": 135,
    "path": "../public/_nuxt/LocaleNuxtLink.b21458ca.js"
  },
  "/_nuxt/LocaleNuxtLink.vue.03a61021.js": {
    "type": "application/javascript",
    "etag": "\"205-vC83Gf77b3hBK/eKKe6gcSbTj+E\"",
    "mtime": "2023-05-28T06:58:08.958Z",
    "size": 517,
    "path": "../public/_nuxt/LocaleNuxtLink.vue.03a61021.js"
  },
  "/_nuxt/logo.d0944810.js": {
    "type": "application/javascript",
    "etag": "\"958-BJLW31R4GFQAvDSgb1YvJG5+Omo\"",
    "mtime": "2023-05-28T06:58:08.979Z",
    "size": 2392,
    "path": "../public/_nuxt/logo.d0944810.js"
  },
  "/_nuxt/Logos.1f0ae2d2.js": {
    "type": "application/javascript",
    "etag": "\"35b-l/uNGPOBOxZG6ervVsDvNVKbu0k\"",
    "mtime": "2023-05-28T06:58:08.966Z",
    "size": 859,
    "path": "../public/_nuxt/Logos.1f0ae2d2.js"
  },
  "/_nuxt/Markdown.88ae4ded.js": {
    "type": "application/javascript",
    "etag": "\"183-HuedOfeGDZLJPtcvOTv1USrxGkU\"",
    "mtime": "2023-05-28T06:58:08.979Z",
    "size": 387,
    "path": "../public/_nuxt/Markdown.88ae4ded.js"
  },
  "/_nuxt/MeshReflectorMaterial.1b5b7600.js": {
    "type": "application/javascript",
    "etag": "\"4898-AFWf7QJ9WFOcW4eSfoNQCXb8RhA\"",
    "mtime": "2023-05-28T06:58:08.994Z",
    "size": 18584,
    "path": "../public/_nuxt/MeshReflectorMaterial.1b5b7600.js"
  },
  "/_nuxt/model.12e572fa.js": {
    "type": "application/javascript",
    "etag": "\"5e-jsIJcSJOGQmJmnYiT2s0c+fIMis\"",
    "mtime": "2023-05-28T06:58:08.941Z",
    "size": 94,
    "path": "../public/_nuxt/model.12e572fa.js"
  },
  "/_nuxt/model.vue.adf58890.js": {
    "type": "application/javascript",
    "etag": "\"120893-Bp56bulAA3oJYvChYaOpVGRo0HA\"",
    "mtime": "2023-05-28T06:58:09.026Z",
    "size": 1181843,
    "path": "../public/_nuxt/model.vue.adf58890.js"
  },
  "/_nuxt/nav.83846617.js": {
    "type": "application/javascript",
    "etag": "\"a5-D5Ri4/MQZTAfKTnyOq0kNW6NCg4\"",
    "mtime": "2023-05-28T06:58:08.958Z",
    "size": 165,
    "path": "../public/_nuxt/nav.83846617.js"
  },
  "/_nuxt/nav.vue.7ac38710.js": {
    "type": "application/javascript",
    "etag": "\"b4a-g5QkKOOAPb0tizxMQ2OpPmjfYIo\"",
    "mtime": "2023-05-28T06:58:08.993Z",
    "size": 2890,
    "path": "../public/_nuxt/nav.vue.7ac38710.js"
  },
  "/_nuxt/nuxt-link.78002c3d.js": {
    "type": "application/javascript",
    "etag": "\"10dc-zFJez9j+nIhnHlksMVgkqD85/MM\"",
    "mtime": "2023-05-28T06:58:08.986Z",
    "size": 4316,
    "path": "../public/_nuxt/nuxt-link.78002c3d.js"
  },
  "/_nuxt/PageView.37313059.js": {
    "type": "application/javascript",
    "etag": "\"74d-WOuBcQW5xXKFtIcjLS4BdgolAyk\"",
    "mtime": "2023-05-28T06:58:08.941Z",
    "size": 1869,
    "path": "../public/_nuxt/PageView.37313059.js"
  },
  "/_nuxt/parser-babel.3e98e432.js": {
    "type": "application/javascript",
    "etag": "\"4b70e-z5hwp6ARYo7/rgq6tskIJSCRSjg\"",
    "mtime": "2023-05-28T06:58:09.023Z",
    "size": 309006,
    "path": "../public/_nuxt/parser-babel.3e98e432.js"
  },
  "/_nuxt/parser-html.39e98a06.js": {
    "type": "application/javascript",
    "etag": "\"258e1-CK5R9/oz4LHSkkLxEQGkhU7rik4\"",
    "mtime": "2023-05-28T06:58:09.022Z",
    "size": 153825,
    "path": "../public/_nuxt/parser-html.39e98a06.js"
  },
  "/_nuxt/preview.99f457cf.js": {
    "type": "application/javascript",
    "etag": "\"c65-NbgWYif4IILDUhZ499Jpd+n4AXY\"",
    "mtime": "2023-05-28T06:58:08.941Z",
    "size": 3173,
    "path": "../public/_nuxt/preview.99f457cf.js"
  },
  "/_nuxt/ProseA.3a959f81.js": {
    "type": "application/javascript",
    "etag": "\"18b-Wfh7iP7bnuX0s6+UB5+xcXo7zhU\"",
    "mtime": "2023-05-28T06:58:08.965Z",
    "size": 395,
    "path": "../public/_nuxt/ProseA.3a959f81.js"
  },
  "/_nuxt/ProseBlockquote.d2184839.js": {
    "type": "application/javascript",
    "etag": "\"f7-jHMGKxj5VePLsBKA65goPVsLnvg\"",
    "mtime": "2023-05-28T06:58:08.941Z",
    "size": 247,
    "path": "../public/_nuxt/ProseBlockquote.d2184839.js"
  },
  "/_nuxt/ProseCode.acfe2b62.js": {
    "type": "application/javascript",
    "etag": "\"194-dyQqfgLvXIHi63RtW5dNS1J8uhM\"",
    "mtime": "2023-05-28T06:58:09.014Z",
    "size": 404,
    "path": "../public/_nuxt/ProseCode.acfe2b62.js"
  },
  "/_nuxt/ProseCode.e63e49c6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2e-GbvrqT5j9gSWlpa8e36U/Kv6Zx0\"",
    "mtime": "2023-05-28T06:58:08.941Z",
    "size": 46,
    "path": "../public/_nuxt/ProseCode.e63e49c6.css"
  },
  "/_nuxt/ProseCodeInline.d32070c4.js": {
    "type": "application/javascript",
    "etag": "\"f1-GX9f1mhWYkf89WQ1Z8ZsExSwJ+M\"",
    "mtime": "2023-05-28T06:58:08.943Z",
    "size": 241,
    "path": "../public/_nuxt/ProseCodeInline.d32070c4.js"
  },
  "/_nuxt/ProseEm.b0ccaa6b.js": {
    "type": "application/javascript",
    "etag": "\"ef-omC1HdeZzTgpgcuPvdYpqAgdTaw\"",
    "mtime": "2023-05-28T06:58:08.941Z",
    "size": 239,
    "path": "../public/_nuxt/ProseEm.b0ccaa6b.js"
  },
  "/_nuxt/ProseH1.eabc3f7a.js": {
    "type": "application/javascript",
    "etag": "\"2ef-4QN4u+FdGC6jg6a1DU8pNLP5Ols\"",
    "mtime": "2023-05-28T06:58:08.966Z",
    "size": 751,
    "path": "../public/_nuxt/ProseH1.eabc3f7a.js"
  },
  "/_nuxt/ProseH2.1f8ef3fb.js": {
    "type": "application/javascript",
    "etag": "\"2ef-zTDfEZmRHWdEyf7sue7AsDk3Oms\"",
    "mtime": "2023-05-28T06:58:08.966Z",
    "size": 751,
    "path": "../public/_nuxt/ProseH2.1f8ef3fb.js"
  },
  "/_nuxt/ProseH3.62caebe1.js": {
    "type": "application/javascript",
    "etag": "\"2ef-uoBTH/eEvfcmpw2544fUYcnkDPk\"",
    "mtime": "2023-05-28T06:58:08.941Z",
    "size": 751,
    "path": "../public/_nuxt/ProseH3.62caebe1.js"
  },
  "/_nuxt/ProseH4.f999ec6f.js": {
    "type": "application/javascript",
    "etag": "\"2ef-T5ULPCzI+QT7VApy67UN+46b6+k\"",
    "mtime": "2023-05-28T06:58:08.971Z",
    "size": 751,
    "path": "../public/_nuxt/ProseH4.f999ec6f.js"
  },
  "/_nuxt/ProseH5.8e8742a6.js": {
    "type": "application/javascript",
    "etag": "\"2ef-XaGRaG54RJo0aEce3ouVhJIurIE\"",
    "mtime": "2023-05-28T06:58:08.986Z",
    "size": 751,
    "path": "../public/_nuxt/ProseH5.8e8742a6.js"
  },
  "/_nuxt/ProseH6.1ea14256.js": {
    "type": "application/javascript",
    "etag": "\"2ef-XLjCXbhCEP/yW8/y7QR0h1rU+4Y\"",
    "mtime": "2023-05-28T06:58:08.941Z",
    "size": 751,
    "path": "../public/_nuxt/ProseH6.1ea14256.js"
  },
  "/_nuxt/ProseHr.1664a1cf.js": {
    "type": "application/javascript",
    "etag": "\"cb-Qd08ZFQCt9eWADWtx/QpKU4mnlA\"",
    "mtime": "2023-05-28T06:58:08.979Z",
    "size": 203,
    "path": "../public/_nuxt/ProseHr.1664a1cf.js"
  },
  "/_nuxt/ProseImg.879f16c4.js": {
    "type": "application/javascript",
    "etag": "\"348-Aux0EgW2AAFHGa17s7IoSkmKIL4\"",
    "mtime": "2023-05-28T06:58:08.941Z",
    "size": 840,
    "path": "../public/_nuxt/ProseImg.879f16c4.js"
  },
  "/_nuxt/ProseLi.12872095.js": {
    "type": "application/javascript",
    "etag": "\"ef-V3pdFspYIaiIkMximxIQp6WLhxg\"",
    "mtime": "2023-05-28T06:58:08.979Z",
    "size": 239,
    "path": "../public/_nuxt/ProseLi.12872095.js"
  },
  "/_nuxt/ProseOl.4a479624.js": {
    "type": "application/javascript",
    "etag": "\"ef-SAfhDnN5J8g3cmxAtvTdU6LGX9I\"",
    "mtime": "2023-05-28T06:58:08.958Z",
    "size": 239,
    "path": "../public/_nuxt/ProseOl.4a479624.js"
  },
  "/_nuxt/ProseP.b7808472.js": {
    "type": "application/javascript",
    "etag": "\"ee-NO8EiKaYtJV2oQfc6RTRe+TBi0c\"",
    "mtime": "2023-05-28T06:58:08.941Z",
    "size": 238,
    "path": "../public/_nuxt/ProseP.b7808472.js"
  },
  "/_nuxt/ProseStrong.56ec6780.js": {
    "type": "application/javascript",
    "etag": "\"f3-VQvo8M+ky6I2yCN1u7//tP4/o0U\"",
    "mtime": "2023-05-28T06:58:08.979Z",
    "size": 243,
    "path": "../public/_nuxt/ProseStrong.56ec6780.js"
  },
  "/_nuxt/ProseTable.930b044d.js": {
    "type": "application/javascript",
    "etag": "\"f2-Qb52SCuxCg1Ct1rr5goeplYFeDg\"",
    "mtime": "2023-05-28T06:58:08.986Z",
    "size": 242,
    "path": "../public/_nuxt/ProseTable.930b044d.js"
  },
  "/_nuxt/ProseTbody.6e1099f1.js": {
    "type": "application/javascript",
    "etag": "\"f2-qlkERigfVxTo9CiYjtPo4yz3OJA\"",
    "mtime": "2023-05-28T06:58:08.967Z",
    "size": 242,
    "path": "../public/_nuxt/ProseTbody.6e1099f1.js"
  },
  "/_nuxt/ProseTd.6152b6ff.js": {
    "type": "application/javascript",
    "etag": "\"ef-ONsjT/z4tq+o1iIznWi2REl3FxY\"",
    "mtime": "2023-05-28T06:58:08.991Z",
    "size": 239,
    "path": "../public/_nuxt/ProseTd.6152b6ff.js"
  },
  "/_nuxt/ProseTh.82c4695b.js": {
    "type": "application/javascript",
    "etag": "\"ef-FF1HyNFdSv6qIOpt90krNXt1REM\"",
    "mtime": "2023-05-28T06:58:08.968Z",
    "size": 239,
    "path": "../public/_nuxt/ProseTh.82c4695b.js"
  },
  "/_nuxt/ProseThead.96e2cf54.js": {
    "type": "application/javascript",
    "etag": "\"f2-7K72ZuJZ9sI98wZ4apbmwAScREc\"",
    "mtime": "2023-05-28T06:58:08.959Z",
    "size": 242,
    "path": "../public/_nuxt/ProseThead.96e2cf54.js"
  },
  "/_nuxt/ProseTr.8633db01.js": {
    "type": "application/javascript",
    "etag": "\"ea-UuU7vKSKnpPxKsHLoXEmI3Cb8ko\"",
    "mtime": "2023-05-28T06:58:08.958Z",
    "size": 234,
    "path": "../public/_nuxt/ProseTr.8633db01.js"
  },
  "/_nuxt/ProseUl.9c964465.js": {
    "type": "application/javascript",
    "etag": "\"ef-O3m3uy6pAZHavZWGeBM63SurGl0\"",
    "mtime": "2023-05-28T06:58:08.958Z",
    "size": 239,
    "path": "../public/_nuxt/ProseUl.9c964465.js"
  },
  "/_nuxt/query.64d8dc15.js": {
    "type": "application/javascript",
    "etag": "\"d95-0J1M7KihsbKqP8FSLu9RMTAV9TM\"",
    "mtime": "2023-05-28T06:58:08.967Z",
    "size": 3477,
    "path": "../public/_nuxt/query.64d8dc15.js"
  },
  "/_nuxt/RectAreaLightUniformsLib.52467819.js": {
    "type": "application/javascript",
    "etag": "\"3c524-T9FjfTjncM4F1UHW2GhKdu2aSj4\"",
    "mtime": "2023-05-28T06:58:09.021Z",
    "size": 247076,
    "path": "../public/_nuxt/RectAreaLightUniformsLib.52467819.js"
  },
  "/_nuxt/release.c765e4fe.js": {
    "type": "application/javascript",
    "etag": "\"d0-BIwOKZna6GjCV4mSxCW5eQUnZTo\"",
    "mtime": "2023-05-28T06:58:08.994Z",
    "size": 208,
    "path": "../public/_nuxt/release.c765e4fe.js"
  },
  "/_nuxt/Section.e2738030.js": {
    "type": "application/javascript",
    "etag": "\"11b-7uYGF3FdMa8/MkCYub9NiEKadHM\"",
    "mtime": "2023-05-28T06:58:08.980Z",
    "size": 283,
    "path": "../public/_nuxt/Section.e2738030.js"
  },
  "/_nuxt/standalone.c3c835bc.js": {
    "type": "application/javascript",
    "etag": "\"6b04f-uGAbw2W1XdOamTviyjjwCSnKb24\"",
    "mtime": "2023-05-28T06:58:09.023Z",
    "size": 438351,
    "path": "../public/_nuxt/standalone.c3c835bc.js"
  },
  "/_nuxt/TransformControls.1f044d92.js": {
    "type": "application/javascript",
    "etag": "\"5190-qXZhWeSG9aD0FAGYSP9skv7PdPo\"",
    "mtime": "2023-05-28T06:58:08.994Z",
    "size": 20880,
    "path": "../public/_nuxt/TransformControls.1f044d92.js"
  },
  "/_nuxt/Typography.0ee43641.js": {
    "type": "application/javascript",
    "etag": "\"83-BEcFWULWAcnAZvuIlC4y/a/eGuc\"",
    "mtime": "2023-05-28T06:58:08.959Z",
    "size": 131,
    "path": "../public/_nuxt/Typography.0ee43641.js"
  },
  "/_nuxt/Typography.vue.e1a816e1.js": {
    "type": "application/javascript",
    "etag": "\"528-QZeGcLchisdkxJgqjt0jTF3QSrQ\"",
    "mtime": "2023-05-28T06:58:08.979Z",
    "size": 1320,
    "path": "../public/_nuxt/Typography.vue.e1a816e1.js"
  },
  "/_nuxt/useBVHMap.d211b1fe.js": {
    "type": "application/javascript",
    "etag": "\"7b-gZD4xK44UyMkbmJJR9aYut7seB4\"",
    "mtime": "2023-05-28T06:58:08.979Z",
    "size": 123,
    "path": "../public/_nuxt/useBVHMap.d211b1fe.js"
  },
  "/_nuxt/utils.a547ac44.js": {
    "type": "application/javascript",
    "etag": "\"591-XOjzI95u2rf4wX5BECzE58ScrLU\"",
    "mtime": "2023-05-28T06:58:08.959Z",
    "size": 1425,
    "path": "../public/_nuxt/utils.a547ac44.js"
  },
  "/_nuxt/workbox-window.prod.es5.dc90f814.js": {
    "type": "application/javascript",
    "etag": "\"14a9-f+VD9+jGbxRSAYS8alrqDRXPmw4\"",
    "mtime": "2023-05-28T06:58:08.981Z",
    "size": 5289,
    "path": "../public/_nuxt/workbox-window.prod.es5.dc90f814.js"
  },
  "/_nuxt/zh-CN.3303a779.js": {
    "type": "application/javascript",
    "etag": "\"2b25-pDb/VbhHxX4IcMUiRDW3p6pDBic\"",
    "mtime": "2023-05-28T06:58:08.971Z",
    "size": 11045,
    "path": "../public/_nuxt/zh-CN.3303a779.js"
  },
  "/_nuxt/_...all_.c2243e5c.js": {
    "type": "application/javascript",
    "etag": "\"230-n8XzTm5lJdji/56hORHSa7tcjnA\"",
    "mtime": "2023-05-28T06:58:08.958Z",
    "size": 560,
    "path": "../public/_nuxt/_...all_.c2243e5c.js"
  },
  "/_nuxt/_id_.0807413b.js": {
    "type": "application/javascript",
    "etag": "\"4fa-4+0BXCtMq5T8RHt/27QmZ0O2dlo\"",
    "mtime": "2023-05-28T06:58:08.994Z",
    "size": 1274,
    "path": "../public/_nuxt/_id_.0807413b.js"
  },
  "/_nuxt/_id_.511af0af.js": {
    "type": "application/javascript",
    "etag": "\"5e8-bET9Avz46+Va3U4KrxmQxgvS8xU\"",
    "mtime": "2023-05-28T06:58:08.968Z",
    "size": 1512,
    "path": "../public/_nuxt/_id_.511af0af.js"
  },
  "/_nuxt/_plugin-vue_export-helper.c27b6911.js": {
    "type": "application/javascript",
    "etag": "\"5b-eFCz/UrraTh721pgAl0VxBNR1es\"",
    "mtime": "2023-05-28T06:58:08.967Z",
    "size": 91,
    "path": "../public/_nuxt/_plugin-vue_export-helper.c27b6911.js"
  },
  "/api/_content/cache.1685257058890.json": {
    "type": "application/json",
    "etag": "\"933a-ltFcoen9uO9KZY+c2vp7oMrKHbM\"",
    "mtime": "2023-05-28T06:58:22.494Z",
    "size": 37690,
    "path": "../public/api/_content/cache.1685257058890.json"
  },
  "/imgs/Home-Banner/Banner_1.gif": {
    "type": "image/gif",
    "etag": "\"2f4593e-qlMnzYt1R0o+xhO56kBt9u5Gr/E\"",
    "mtime": "2023-05-25T01:10:09.853Z",
    "size": 49568062,
    "path": "../public/imgs/Home-Banner/Banner_1.gif"
  },
  "/imgs/Home-Banner/Banner_2.gif": {
    "type": "image/gif",
    "etag": "\"3057567-Vc2A+xKi8zCdx6KoHEglbi2rkBM\"",
    "mtime": "2023-05-25T01:10:10.030Z",
    "size": 50689383,
    "path": "../public/imgs/Home-Banner/Banner_2.gif"
  },
  "/imgs/Home-Solutions&Services/.gitattributes": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"65-0wSpSUJrkt9ebA0EBl49N6kkiWE\"",
    "mtime": "2023-05-25T01:10:10.032Z",
    "size": 101,
    "path": "../public/imgs/Home-Solutions&Services/.gitattributes"
  },
  "/imgs/Home-Solutions&Services/AIGC.gif": {
    "type": "image/gif",
    "etag": "\"3c5b750-pKvqiw5dL9F0dzBzBulTJ8Ql0BE\"",
    "mtime": "2023-05-25T01:10:10.459Z",
    "size": 63289168,
    "path": "../public/imgs/Home-Solutions&Services/AIGC.gif"
  },
  "/imgs/Home-Solutions&Services/Circulus.gif": {
    "type": "image/gif",
    "etag": "\"6b72ad5-AucyO6wF1BzTwMtrqm+g5gRLf+Y\"",
    "mtime": "2023-05-25T01:11:07.918Z",
    "size": 112667349,
    "path": "../public/imgs/Home-Solutions&Services/Circulus.gif"
  },
  "/imgs/Home-Solutions&Services/CyberPink.gif": {
    "type": "image/gif",
    "etag": "\"a953562-Hf/inUKm5uGYTsKMBUp9TnlPK8g\"",
    "mtime": "2023-05-25T01:11:22.618Z",
    "size": 177550690,
    "path": "../public/imgs/Home-Solutions&Services/CyberPink.gif"
  },
  "/imgs/Home-Solutions&Services/DigitalTwin.gif": {
    "type": "image/gif",
    "etag": "\"4463181-8uwQz5Hrpgvmq40GAL61b+6aAGU\"",
    "mtime": "2023-05-25T01:10:12.272Z",
    "size": 71709057,
    "path": "../public/imgs/Home-Solutions&Services/DigitalTwin.gif"
  },
  "/imgs/Home-Solutions&Services/GeneratedDesign.gif": {
    "type": "image/gif",
    "etag": "\"121d658-zMYmd8HyagnLmBsL6azptoS+JTQ\"",
    "mtime": "2023-05-25T01:10:12.365Z",
    "size": 18994776,
    "path": "../public/imgs/Home-Solutions&Services/GeneratedDesign.gif"
  },
  "/imgs/Home-Solutions&Services/MetaFold.jpg": {
    "type": "image/jpeg",
    "etag": "\"4a3b5-QAuPTYYhc2dct4Zod7KZSQeEu8E\"",
    "mtime": "2023-05-25T01:10:12.367Z",
    "size": 304053,
    "path": "../public/imgs/Home-Solutions&Services/MetaFold.jpg"
  },
  "/imgs/Home-Stories/BitCountry.jpg": {
    "type": "image/jpeg",
    "etag": "\"20485-ymlnb9F5VbHibBq/7iSOMIiS4EQ\"",
    "mtime": "2023-05-25T01:10:12.368Z",
    "size": 132229,
    "path": "../public/imgs/Home-Stories/BitCountry.jpg"
  },
  "/imgs/Home-Stories/Circulus.jpg": {
    "type": "image/jpeg",
    "etag": "\"426f6-kMV2wouZ1/n89xf6ctfIoH36Su0\"",
    "mtime": "2023-05-25T01:10:12.370Z",
    "size": 272118,
    "path": "../public/imgs/Home-Stories/Circulus.jpg"
  },
  "/imgs/Home-Stories/CoreOfTime.jpg": {
    "type": "image/jpeg",
    "etag": "\"146c0d-HHPTrKoT/mNPjmX+ngJO0W6b3/A\"",
    "mtime": "2023-05-25T01:10:12.377Z",
    "size": 1338381,
    "path": "../public/imgs/Home-Stories/CoreOfTime.jpg"
  },
  "/imgs/Home-Stories/HoloWater.JPG": {
    "type": "image/jpeg",
    "etag": "\"1eac0-/vrcYwifrLTstQGY6hsWBUwwzqs\"",
    "mtime": "2023-05-25T01:10:12.378Z",
    "size": 125632,
    "path": "../public/imgs/Home-Stories/HoloWater.JPG"
  },
  "/imgs/Home-Stories/MMMM.jpg": {
    "type": "image/jpeg",
    "etag": "\"499a5-CTpIXWHscZJhZgK4BR8wa6cULSc\"",
    "mtime": "2023-05-25T01:10:12.381Z",
    "size": 301477,
    "path": "../public/imgs/Home-Stories/MMMM.jpg"
  },
  "/imgs/Home-Stories/NASA.jpg": {
    "type": "image/jpeg",
    "etag": "\"13c96-NaK9NuLeh3DtMla1HD3J7hsgihw\"",
    "mtime": "2023-05-25T01:10:12.381Z",
    "size": 81046,
    "path": "../public/imgs/Home-Stories/NASA.jpg"
  },
  "/imgs/Home-Stories/NeverDrinkAlone.jpg": {
    "type": "image/jpeg",
    "etag": "\"31851-yEf1C7J2ywedmKaj5ygsK0ZCnU4\"",
    "mtime": "2023-05-25T01:10:12.383Z",
    "size": 202833,
    "path": "../public/imgs/Home-Stories/NeverDrinkAlone.jpg"
  },
  "/imgs/Home-Stories/ParcelCreatorverse.jpg": {
    "type": "image/jpeg",
    "etag": "\"8ec3d-vQaWGrQ//bPFxQaJ1ReksWdfYps\"",
    "mtime": "2023-05-25T01:10:12.387Z",
    "size": 584765,
    "path": "../public/imgs/Home-Stories/ParcelCreatorverse.jpg"
  },
  "/imgs/Home-Stories/RIBAChangan.jpg": {
    "type": "image/jpeg",
    "etag": "\"1b0fe-KwLmpZB4coEVbjqN6RIMxxdGc18\"",
    "mtime": "2023-05-25T01:10:12.388Z",
    "size": 110846,
    "path": "../public/imgs/Home-Stories/RIBAChangan.jpg"
  },
  "/imgs/Partners/bc-font-logo.png": {
    "type": "image/png",
    "etag": "\"cc4-F5RHbEEgbtR5GaU5gkWrFS4vF+k\"",
    "mtime": "2023-05-25T01:10:12.542Z",
    "size": 3268,
    "path": "../public/imgs/Partners/bc-font-logo.png"
  },
  "/imgs/Partners/CASCI.png": {
    "type": "image/png",
    "etag": "\"118d2-domjdjOrS+LD58hLIyBlRMCfY2Y\"",
    "mtime": "2023-05-25T01:10:12.539Z",
    "size": 71890,
    "path": "../public/imgs/Partners/CASCI.png"
  },
  "/imgs/Partners/ChinaTower.svg": {
    "type": "image/svg+xml",
    "etag": "\"163a-iB8a02aDeIhLNU33N/STr1DSx7k\"",
    "mtime": "2023-05-25T01:10:12.539Z",
    "size": 5690,
    "path": "../public/imgs/Partners/ChinaTower.svg"
  },
  "/imgs/Partners/MMMM.png": {
    "type": "image/png",
    "etag": "\"2761-v7wtoXz4A2LzmkwscliuzJUBBVM\"",
    "mtime": "2023-05-25T01:10:12.539Z",
    "size": 10081,
    "path": "../public/imgs/Partners/MMMM.png"
  },
  "/imgs/Partners/MONAVERSE.webp": {
    "type": "image/webp",
    "etag": "\"4a82-vCg2pDmnqVvrdEIfWyTCgvacFMk\"",
    "mtime": "2023-05-25T01:10:12.540Z",
    "size": 19074,
    "path": "../public/imgs/Partners/MONAVERSE.webp"
  },
  "/imgs/Partners/MUA.png": {
    "type": "image/png",
    "etag": "\"d0a-KbjjIx6SrAgOPt/w73OuV7CpxXA\"",
    "mtime": "2023-05-25T01:10:12.540Z",
    "size": 3338,
    "path": "../public/imgs/Partners/MUA.png"
  },
  "/imgs/Partners/MUA_Black.png": {
    "type": "image/png",
    "etag": "\"ba8-VFQGK8qDx8j9n9acT51hkVb3prk\"",
    "mtime": "2023-05-25T01:10:12.540Z",
    "size": 2984,
    "path": "../public/imgs/Partners/MUA_Black.png"
  },
  "/imgs/Partners/PARCEL.png": {
    "type": "image/png",
    "etag": "\"1e9c-Xyb2FMqO+hjiAwU9CcMvmUnqieY\"",
    "mtime": "2023-05-25T01:10:12.540Z",
    "size": 7836,
    "path": "../public/imgs/Partners/PARCEL.png"
  },
  "/imgs/Partners/Ultiverse.png": {
    "type": "image/png",
    "etag": "\"60aa-VRTPlQPfGcdhNLnaQn34jY6MpNs\"",
    "mtime": "2023-05-25T01:10:12.542Z",
    "size": 24746,
    "path": "../public/imgs/Partners/Ultiverse.png"
  },
  "/model/apple_watch/scene.bin": {
    "type": "application/octet-stream",
    "etag": "\"5b144-9e1cuLBr9eEwAir5NggcQCBI3e0\"",
    "mtime": "2023-05-26T03:25:36.587Z",
    "size": 373060,
    "path": "../public/model/apple_watch/scene.bin"
  },
  "/model/apple_watch/scene.gltf": {
    "type": "model/gltf+json",
    "etag": "\"400d-3voaUqU+5esySoXNThz5KCQ5tUA\"",
    "mtime": "2023-05-26T03:25:36.588Z",
    "size": 16397,
    "path": "../public/model/apple_watch/scene.gltf"
  },
  "/unity/test/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"1330-psj7NQRTJreaYOyht3kdE9riRa0\"",
    "mtime": "2023-05-26T05:24:01.892Z",
    "size": 4912,
    "path": "../public/unity/test/index.html"
  },
  "/imgs/News/BarSymphony/20230524175132.jpg": {
    "type": "image/jpeg",
    "etag": "\"10cbe-+362W6PVhqV5nv2q0h3Jx+rhYQU\"",
    "mtime": "2023-05-25T01:10:12.392Z",
    "size": 68798,
    "path": "../public/imgs/News/BarSymphony/20230524175132.jpg"
  },
  "/imgs/News/BarSymphony/Bartender.gif": {
    "type": "image/gif",
    "etag": "\"9414a4-B27OLwyz0yG9yBYHpVxXfDzhoTQ\"",
    "mtime": "2023-05-25T01:10:12.470Z",
    "size": 9704612,
    "path": "../public/imgs/News/BarSymphony/Bartender.gif"
  },
  "/imgs/News/BarSymphony/Diagrams.gif": {
    "type": "image/gif",
    "etag": "\"50c9b8-xpW0Mwjllmsq042a+l3tvzsisNU\"",
    "mtime": "2023-05-25T01:10:12.495Z",
    "size": 5294520,
    "path": "../public/imgs/News/BarSymphony/Diagrams.gif"
  },
  "/imgs/News/BarSymphony/Elevation.jpg": {
    "type": "image/jpeg",
    "etag": "\"1c61e-XkNfbJ4xSghe6W/7A1x7Q2ZWgis\"",
    "mtime": "2023-05-25T01:10:12.497Z",
    "size": 116254,
    "path": "../public/imgs/News/BarSymphony/Elevation.jpg"
  },
  "/imgs/News/BarSymphony/FrontView.jpg": {
    "type": "image/jpeg",
    "etag": "\"31851-yEf1C7J2ywedmKaj5ygsK0ZCnU4\"",
    "mtime": "2023-05-25T01:10:12.499Z",
    "size": 202833,
    "path": "../public/imgs/News/BarSymphony/FrontView.jpg"
  },
  "/imgs/News/HoloWater/20230524153246.jpg": {
    "type": "image/jpeg",
    "etag": "\"26cce-SnlQ01NF2ib2Q+3Ovv+NGTBh/pU\"",
    "mtime": "2023-05-25T01:10:12.500Z",
    "size": 158926,
    "path": "../public/imgs/News/HoloWater/20230524153246.jpg"
  },
  "/imgs/News/HoloWater/20230524153322.jpg": {
    "type": "image/jpeg",
    "etag": "\"21e0d-WElPBp6FWnVE5JFuoP1JALnqqPU\"",
    "mtime": "2023-05-25T01:10:12.502Z",
    "size": 138765,
    "path": "../public/imgs/News/HoloWater/20230524153322.jpg"
  },
  "/imgs/News/HoloWater/20230524162328.jpg": {
    "type": "image/jpeg",
    "etag": "\"1ef64-G447S+E+g711y2V2A7LwZFhnBz0\"",
    "mtime": "2023-05-25T01:10:12.503Z",
    "size": 126820,
    "path": "../public/imgs/News/HoloWater/20230524162328.jpg"
  },
  "/imgs/News/HoloWater/20230524162358.jpg": {
    "type": "image/jpeg",
    "etag": "\"2b336-E1LfJCH+geQPJ0cJ71cjzonwJXg\"",
    "mtime": "2023-05-25T01:10:12.505Z",
    "size": 176950,
    "path": "../public/imgs/News/HoloWater/20230524162358.jpg"
  },
  "/imgs/News/HoloWater/20230524162415.jpg": {
    "type": "image/jpeg",
    "etag": "\"23e1a-wAsyfrJjacGMqXSU4Afc8lVWczg\"",
    "mtime": "2023-05-25T01:10:12.506Z",
    "size": 146970,
    "path": "../public/imgs/News/HoloWater/20230524162415.jpg"
  },
  "/imgs/News/HoloWater/20230524162443.jpg": {
    "type": "image/jpeg",
    "etag": "\"1d6e7-vUWYCP5zUsnSyNlS+KqfzYQiXyI\"",
    "mtime": "2023-05-25T01:10:12.507Z",
    "size": 120551,
    "path": "../public/imgs/News/HoloWater/20230524162443.jpg"
  },
  "/imgs/News/HoloWater/20230524162510.jpg": {
    "type": "image/jpeg",
    "etag": "\"151dc-dCU6vwKFcV4ebA8N+3MrgjzBdYQ\"",
    "mtime": "2023-05-25T01:10:12.508Z",
    "size": 86492,
    "path": "../public/imgs/News/HoloWater/20230524162510.jpg"
  },
  "/imgs/News/HoloWater/20230524162540.jpg": {
    "type": "image/jpeg",
    "etag": "\"2ef49-MBviaS8B0dU4FtgMo1vgK/ukyWg\"",
    "mtime": "2023-05-25T01:10:12.509Z",
    "size": 192329,
    "path": "../public/imgs/News/HoloWater/20230524162540.jpg"
  },
  "/imgs/News/HoloWater/20230524162603.jpg": {
    "type": "image/jpeg",
    "etag": "\"17c9b-ldVcBel9rzjN8yqEcLmtLDHfc9E\"",
    "mtime": "2023-05-25T01:10:12.510Z",
    "size": 97435,
    "path": "../public/imgs/News/HoloWater/20230524162603.jpg"
  },
  "/imgs/News/HoloWater/20230524163453.jpg": {
    "type": "image/jpeg",
    "etag": "\"15288-s+ghxXUtC82ShXZjsmrxR/wwDiQ\"",
    "mtime": "2023-05-25T01:10:12.512Z",
    "size": 86664,
    "path": "../public/imgs/News/HoloWater/20230524163453.jpg"
  },
  "/imgs/News/HoloWater/20230524163506.jpg": {
    "type": "image/jpeg",
    "etag": "\"11757-A8D0uNzhYcuUNIwIJb1pxB7MtHE\"",
    "mtime": "2023-05-25T01:10:12.513Z",
    "size": 71511,
    "path": "../public/imgs/News/HoloWater/20230524163506.jpg"
  },
  "/imgs/News/HoloWater/20230524163539.jpg": {
    "type": "image/jpeg",
    "etag": "\"5c0fd-roscEdcMSQGayHNEfiPXcv3n1/M\"",
    "mtime": "2023-05-25T01:10:12.514Z",
    "size": 377085,
    "path": "../public/imgs/News/HoloWater/20230524163539.jpg"
  },
  "/imgs/News/HoloWater/20230524163700.jpg": {
    "type": "image/jpeg",
    "etag": "\"194a4-PTk5GhVzbzRoRLYJ2gb8UZtgG8c\"",
    "mtime": "2023-05-25T01:10:12.515Z",
    "size": 103588,
    "path": "../public/imgs/News/HoloWater/20230524163700.jpg"
  },
  "/imgs/News/PARCELCreatorverse/20221003225946.jpg": {
    "type": "image/jpeg",
    "etag": "\"9219e-jzbNgn/fGNQM6Ys+y/ikzIZRHds\"",
    "mtime": "2023-05-25T01:10:12.520Z",
    "size": 598430,
    "path": "../public/imgs/News/PARCELCreatorverse/20221003225946.jpg"
  },
  "/imgs/News/PARCELCreatorverse/20221003230015.jpg": {
    "type": "image/jpeg",
    "etag": "\"32acf-AWgsWBIDtcD5i7JdmSvGqh8z0YE\"",
    "mtime": "2023-05-25T01:10:12.521Z",
    "size": 207567,
    "path": "../public/imgs/News/PARCELCreatorverse/20221003230015.jpg"
  },
  "/imgs/News/PARCELCreatorverse/20221003230258.jpg": {
    "type": "image/jpeg",
    "etag": "\"6fcab-pc9RcxWM8P5R7Bvwm8JR0YMG/Hw\"",
    "mtime": "2023-05-25T01:10:12.525Z",
    "size": 457899,
    "path": "../public/imgs/News/PARCELCreatorverse/20221003230258.jpg"
  },
  "/imgs/News/PARCELCreatorverse/20221003230309.jpg": {
    "type": "image/jpeg",
    "etag": "\"95171-9qC5MMv5zDpewYNOodoqx62H0zQ\"",
    "mtime": "2023-05-25T01:10:12.530Z",
    "size": 610673,
    "path": "../public/imgs/News/PARCELCreatorverse/20221003230309.jpg"
  },
  "/imgs/News/PARCELCreatorverse/AwardImage.jpg": {
    "type": "image/jpeg",
    "etag": "\"7eefe-LpeqLz65zrZ0YInCoZVgbsD4t/k\"",
    "mtime": "2023-05-25T01:10:12.534Z",
    "size": 519934,
    "path": "../public/imgs/News/PARCELCreatorverse/AwardImage.jpg"
  },
  "/imgs/Partners/500/Bit.Country.png": {
    "type": "image/png",
    "etag": "\"1b29-ORoHK3SOoULg0BXN1Vl+w//QeGY\"",
    "mtime": "2023-05-25T01:10:12.534Z",
    "size": 6953,
    "path": "../public/imgs/Partners/500/Bit.Country.png"
  },
  "/imgs/Partners/500/CASCI.png": {
    "type": "image/png",
    "etag": "\"f633-nV1WIFtorWqjVeVqN1JAWcVqpSw\"",
    "mtime": "2023-05-25T01:10:12.534Z",
    "size": 63027,
    "path": "../public/imgs/Partners/500/CASCI.png"
  },
  "/imgs/Partners/500/ChinaTower.png": {
    "type": "image/png",
    "etag": "\"4309-ORlpqioKO07x5JFMvzyf0TBwPKE\"",
    "mtime": "2023-05-25T01:10:12.534Z",
    "size": 17161,
    "path": "../public/imgs/Partners/500/ChinaTower.png"
  },
  "/imgs/Partners/500/MMMM.png": {
    "type": "image/png",
    "etag": "\"4464-iEPc7vWpmHs8EwKeykZHcnklWNw\"",
    "mtime": "2023-05-25T01:10:12.536Z",
    "size": 17508,
    "path": "../public/imgs/Partners/500/MMMM.png"
  },
  "/imgs/Partners/500/MONA.png": {
    "type": "image/png",
    "etag": "\"af82-moUhYI17d8fhn4iiw4VVxMmq1tQ\"",
    "mtime": "2023-05-25T01:10:12.537Z",
    "size": 44930,
    "path": "../public/imgs/Partners/500/MONA.png"
  },
  "/imgs/Partners/500/MUA.png": {
    "type": "image/png",
    "etag": "\"20dc-mMRw7i8qwGaw2GhoBkAq49YQtEI\"",
    "mtime": "2023-05-25T01:10:12.537Z",
    "size": 8412,
    "path": "../public/imgs/Partners/500/MUA.png"
  },
  "/imgs/Partners/500/PARCEL.png": {
    "type": "image/png",
    "etag": "\"3467-YzfzHglt2aDCpBEO89vN8hgBosI\"",
    "mtime": "2023-05-25T01:10:12.537Z",
    "size": 13415,
    "path": "../public/imgs/Partners/500/PARCEL.png"
  },
  "/imgs/Partners/500/Ultiverse.png": {
    "type": "image/png",
    "etag": "\"8e68-FmXhNPXlV0E68ag61Pp2ORHNw/o\"",
    "mtime": "2023-05-25T01:10:12.538Z",
    "size": 36456,
    "path": "../public/imgs/Partners/500/Ultiverse.png"
  },
  "/model/apple_watch/textures/material_baseColor.jpeg": {
    "type": "image/jpeg",
    "etag": "\"14e49-51nPnbw6NPY5gCskqwGOXocZf0g\"",
    "mtime": "2023-05-26T03:25:36.588Z",
    "size": 85577,
    "path": "../public/model/apple_watch/textures/material_baseColor.jpeg"
  },
  "/imgs/Project/Metaverse-Build/MusicVenue.jpg": {
    "type": "image/jpeg",
    "etag": "\"8ec3d-vQaWGrQ//bPFxQaJ1ReksWdfYps\"",
    "mtime": "2023-05-25T01:10:12.545Z",
    "size": 584765,
    "path": "../public/imgs/Project/Metaverse-Build/MusicVenue.jpg"
  },
  "/unity/test/Build/Builds.data": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"14ab92e-0EvnFX9J1U28EafCLlguLXRh4zA\"",
    "mtime": "2023-05-26T05:24:30.362Z",
    "size": 21674286,
    "path": "../public/unity/test/Build/Builds.data"
  },
  "/unity/test/Build/Builds.framework.js": {
    "type": "application/javascript",
    "etag": "\"134b7-X6UGUPTu7FOHbb8KWztFwTXR2P0\"",
    "mtime": "2023-05-26T05:27:01.288Z",
    "size": 79031,
    "path": "../public/unity/test/Build/Builds.framework.js"
  },
  "/unity/test/Build/Builds.loader.js": {
    "type": "application/javascript",
    "etag": "\"a9d5-mAgOfIVWHL8AaNMREMfHr0biTSM\"",
    "mtime": "2023-05-26T05:24:02.530Z",
    "size": 43477,
    "path": "../public/unity/test/Build/Builds.loader.js"
  },
  "/unity/test/Build/Builds.wasm": {
    "type": "application/wasm",
    "etag": "\"76f780-rvT1YgaWPPQyI2NpDvp9ONBA8ms\"",
    "mtime": "2023-05-26T05:27:07.611Z",
    "size": 7796608,
    "path": "../public/unity/test/Build/Builds.wasm"
  },
  "/unity/test/StreamingAssets/UnityServicesProjectConfiguration.json": {
    "type": "application/json",
    "etag": "\"5f-33TwFR7Nd/d1u3OdHQJrXuaJJt0\"",
    "mtime": "2023-05-26T05:24:02.058Z",
    "size": 95,
    "path": "../public/unity/test/StreamingAssets/UnityServicesProjectConfiguration.json"
  },
  "/unity/test/TemplateData/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"901-rFHbT5WywFjl5EGVy6FDAA1W+eQ\"",
    "mtime": "2023-05-26T05:24:02.030Z",
    "size": 2305,
    "path": "../public/unity/test/TemplateData/favicon.ico"
  },
  "/unity/test/TemplateData/fullscreen-button.png": {
    "type": "image/png",
    "etag": "\"af-CbMpeiUTHSF/xzFj6/KcFWSvCAQ\"",
    "mtime": "2023-05-26T05:24:02.048Z",
    "size": 175,
    "path": "../public/unity/test/TemplateData/fullscreen-button.png"
  },
  "/unity/test/TemplateData/progress-bar-empty-dark.png": {
    "type": "image/png",
    "etag": "\"60-jCt1arEmm5VcJb/hrtj/aBOVNag\"",
    "mtime": "2023-05-26T05:24:02.248Z",
    "size": 96,
    "path": "../public/unity/test/TemplateData/progress-bar-empty-dark.png"
  },
  "/unity/test/TemplateData/progress-bar-empty-light.png": {
    "type": "image/png",
    "etag": "\"6d-NPIdmLUm3vAX1k89ojDdaKPvsYo\"",
    "mtime": "2023-05-26T05:24:02.003Z",
    "size": 109,
    "path": "../public/unity/test/TemplateData/progress-bar-empty-light.png"
  },
  "/unity/test/TemplateData/progress-bar-full-dark.png": {
    "type": "image/png",
    "etag": "\"4a-hyEkmS5cSVWTEZVFWZcwvMukHec\"",
    "mtime": "2023-05-26T05:24:02.263Z",
    "size": 74,
    "path": "../public/unity/test/TemplateData/progress-bar-full-dark.png"
  },
  "/unity/test/TemplateData/progress-bar-full-light.png": {
    "type": "image/png",
    "etag": "\"54-UJa0MipNcPb+lLmLJLpNIUhFTkk\"",
    "mtime": "2023-05-26T05:24:01.999Z",
    "size": 84,
    "path": "../public/unity/test/TemplateData/progress-bar-full-light.png"
  },
  "/unity/test/TemplateData/style.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"573-4Qjq5+JYHuc6vN05lFoXREFwuJw\"",
    "mtime": "2023-05-26T05:24:01.829Z",
    "size": 1395,
    "path": "../public/unity/test/TemplateData/style.css"
  },
  "/unity/test/TemplateData/unity-logo-dark.png": {
    "type": "image/png",
    "etag": "\"be2-wZ7az0ksjtI7jWM7HnUJb4wCgYU\"",
    "mtime": "2023-05-26T05:24:01.918Z",
    "size": 3042,
    "path": "../public/unity/test/TemplateData/unity-logo-dark.png"
  },
  "/unity/test/TemplateData/unity-logo-light.png": {
    "type": "image/png",
    "etag": "\"c05-K5uYRdEgFDrRx3p46/z7ZPtQF9o\"",
    "mtime": "2023-05-26T05:24:02.047Z",
    "size": 3077,
    "path": "../public/unity/test/TemplateData/unity-logo-light.png"
  },
  "/unity/test/TemplateData/webgl-logo.png": {
    "type": "image/png",
    "etag": "\"b83-dAY7hRYImPY3WQQ6xsSomyfK21M\"",
    "mtime": "2023-05-26T05:24:02.030Z",
    "size": 2947,
    "path": "../public/unity/test/TemplateData/webgl-logo.png"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const CONFIG_KEY = "i18n";
const BUILD_CONFIG_KEY = "config";
const configStorage = prefixStorage(useStorage(), CONFIG_KEY);
const PRECOMPILED_LOCALE_KEY = "i18n:locales";
const localeStorage = prefixStorage(useStorage(), PRECOMPILED_LOCALE_KEY);
const resolveKey = (key) => `${key}.js`;
const configKey = (configId) => `${BUILD_CONFIG_KEY}-${configId}`;
const _1ZWmrG = defineEventHandler(async (event) => {
  const body = await readBody(event);
  validate(body);
  const cacheCode = await getCacheCode(body);
  if (cacheCode) {
    await setResponseHeader(event, "content-type", "text/javascript");
    return cacheCode.toString();
  }
  const [code, errors] = generateCode(body);
  if (errors.length > 0) {
    throw createError({ statusMessage: errors.join("|"), statusCode: 400 });
  }
  await setCacheCode(code, body);
  await setResponseHeader(event, "content-type", "text/javascript");
  return code;
});
function validate(body) {
  if (!body.type) {
    throw createError({ statusMessage: `require the 'type'`, statusCode: 400 });
  }
  if (body.type === "locale") {
    if (!body.locale) {
      throw createError({ statusMessage: `require the 'locale'`, statusCode: 400 });
    }
  }
  if (body.type === "config") {
    if (!body.configId) {
      throw createError({ statusMessage: `require the 'configId'`, statusCode: 400 });
    }
  }
  if (!body.resource) {
    throw createError({ statusMessage: `require the 'resource'`, statusCode: 400 });
  }
}
async function getCacheCode({ type, locale, configId }) {
  if (type === "locale") {
    return await localeStorage.getItem(resolveKey(locale));
  } else if (type === "config") {
    return await configStorage.getItem(resolveKey(configKey(configId)));
  } else {
    return null;
  }
}
function generateCode(body) {
  const errors = [];
  const {
    i18n: { strictMessage, escapeHtml }
  } = useRuntimeConfig();
  const env = "production";
  let gen = "";
  if (body.type === "locale") {
    const { code } = generateJSON(JSON.stringify(body.resource), {
      env,
      strictMessage,
      escapeHtml,
      onError: (error) => {
        errors.push(error);
      }
    });
    gen = code;
  } else if (body.type === "config") {
    gen += `export default {
`;
    const codes = [];
    Object.keys(body.resource).reduce((codes2, key) => {
      const { code } = generateJSON(JSON.stringify(body.resource[key]), {
        type: "bare",
        env,
        strictMessage,
        escapeHtml,
        onError: (error) => {
          errors.push(error);
        }
      });
      codes2.push(`  ${JSON.stringify(key)}: ${code},
`);
      return codes2;
    }, codes);
    gen += codes.join("");
    gen += `}
`;
  }
  return [gen, errors];
}
async function setCacheCode(code, { type, locale, configId }) {
  if (type === "locale") {
    await localeStorage.setItem(resolveKey(locale), code);
  } else if (type === "config") {
    await configStorage.setItem(resolveKey(configKey(configId)), code);
  }
}

const get = (obj, path) => path.split(".").reduce((acc, part) => acc && acc[part], obj);
const _pick = (obj, condition) => Object.keys(obj).filter(condition).reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
const apply = (fn) => (data) => Array.isArray(data) ? data.map((item) => fn(item)) : fn(data);
const detectProperties = (keys) => {
  const prefixes = [];
  const properties = [];
  for (const key of keys) {
    if (["$", "_"].includes(key)) {
      prefixes.push(key);
    } else {
      properties.push(key);
    }
  }
  return { prefixes, properties };
};
const withoutKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => !properties.includes(key) && !prefixes.includes(key[0]));
};
const withKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => properties.includes(key) || prefixes.includes(key[0]));
};
const sortList = (data, params) => {
  const comperable = new Intl.Collator(params.$locale, {
    numeric: params.$numeric,
    caseFirst: params.$caseFirst,
    sensitivity: params.$sensitivity
  });
  const keys = Object.keys(params).filter((key) => !key.startsWith("$"));
  for (const key of keys) {
    data = data.sort((a, b) => {
      const values = [get(a, key), get(b, key)].map((value) => {
        if (value === null) {
          return void 0;
        }
        if (value instanceof Date) {
          return value.toISOString();
        }
        return value;
      });
      if (params[key] === -1) {
        values.reverse();
      }
      return comperable.compare(values[0], values[1]);
    });
  }
  return data;
};
const assertArray = (value, message = "Expected an array") => {
  if (!Array.isArray(value)) {
    throw new TypeError(message);
  }
};
const ensureArray = (value) => Array.isArray(value) ? value : value ? [value] : [];

const arrayParams = ["sort", "where", "only", "without"];
const createQuery = (fetcher, intitialParams) => {
  const queryParams = {
    ...intitialParams
  };
  for (const key of arrayParams) {
    if (queryParams[key]) {
      queryParams[key] = ensureArray(queryParams[key]);
    }
  }
  const $set = (key, fn = (v) => v) => {
    return (...values) => {
      queryParams[key] = fn(...values);
      return query;
    };
  };
  const query = {
    params: () => ({
      ...queryParams,
      ...queryParams.where ? { where: [...ensureArray(queryParams.where)] } : {},
      ...queryParams.sort ? { sort: [...ensureArray(queryParams.sort)] } : {}
    }),
    only: $set("only", ensureArray),
    without: $set("without", ensureArray),
    where: $set("where", (q) => [...ensureArray(queryParams.where), ...ensureArray(q)]),
    sort: $set("sort", (sort) => [...ensureArray(queryParams.sort), ...ensureArray(sort)]),
    limit: $set("limit", (v) => parseInt(String(v), 10)),
    skip: $set("skip", (v) => parseInt(String(v), 10)),
    // find
    find: () => fetcher(query),
    findOne: () => {
      queryParams.first = true;
      return fetcher(query);
    },
    findSurround: (surroundQuery, options) => {
      queryParams.surround = { query: surroundQuery, ...options };
      return fetcher(query);
    },
    // locale
    locale: (_locale) => query.where({ _locale })
  };
  return query;
};

function createMatch(opts = {}) {
  const operators = createOperators(match, opts.operators);
  function match(item, conditions) {
    if (typeof conditions !== "object" || conditions instanceof RegExp) {
      return operators.$eq(item, conditions);
    }
    return Object.keys(conditions || {}).every((key) => {
      const condition = conditions[key];
      if (key.startsWith("$") && operators[key]) {
        const fn = operators[key];
        return typeof fn === "function" ? fn(item, condition) : false;
      }
      return match(get(item, key), condition);
    });
  }
  return match;
}
function createOperators(match, operators = {}) {
  return {
    $match: (item, condition) => match(item, condition),
    /**
     * Match if item equals condition
     **/
    $eq: (item, condition) => condition instanceof RegExp ? condition.test(item) : item === condition,
    /**
     * Match if item not equals condition
     **/
    $ne: (item, condition) => condition instanceof RegExp ? !condition.test(item) : item !== condition,
    /**
     * Match is condition is false
     **/
    $not: (item, condition) => !match(item, condition),
    /**
     * Match only if all of nested conditions are true
     **/
    $and: (item, condition) => {
      assertArray(condition, "$and requires an array as condition");
      return condition.every((cond) => match(item, cond));
    },
    /**
     * Match if any of nested conditions is true
     **/
    $or: (item, condition) => {
      assertArray(condition, "$or requires an array as condition");
      return condition.some((cond) => match(item, cond));
    },
    /**
     * Match if item is in condition array
     **/
    $in: (item, condition) => ensureArray(condition).some(
      (cond) => Array.isArray(item) ? match(item, { $contains: cond }) : match(item, cond)
    ),
    /**
     * Match if item contains every condition or math every rule in condition array
     **/
    $contains: (item, condition) => {
      item = Array.isArray(item) ? item : String(item);
      return ensureArray(condition).every((i) => item.includes(i));
    },
    /**
     * Ignore case contains
     **/
    $icontains: (item, condition) => {
      if (typeof condition !== "string") {
        throw new TypeError("$icontains requires a string, use $contains instead");
      }
      item = String(item).toLocaleLowerCase();
      return ensureArray(condition).every((i) => item.includes(i.toLocaleLowerCase()));
    },
    /**
     * Match if item contains at least one rule from condition array
     */
    $containsAny: (item, condition) => {
      assertArray(condition, "$containsAny requires an array as condition");
      item = Array.isArray(item) ? item : String(item);
      return condition.some((i) => item.includes(i));
    },
    /**
     * Check key existence
     */
    $exists: (item, condition) => condition ? typeof item !== "undefined" : typeof item === "undefined",
    /**
     * Match if type of item equals condition
     */
    $type: (item, condition) => typeof item === String(condition),
    /**
     * Provides regular expression capabilities for pattern matching strings.
     */
    $regex: (item, condition) => {
      if (!(condition instanceof RegExp)) {
        const matched = String(condition).match(/\/(.*)\/([dgimsuy]*)$/);
        condition = matched ? new RegExp(matched[1], matched[2] || "") : new RegExp(condition);
      }
      return condition.test(String(item || ""));
    },
    /**
     * Check if item is less than condition
     */
    $lt: (item, condition) => {
      return item < condition;
    },
    /**
     * Check if item is less than or equal to condition
     */
    $lte: (item, condition) => {
      return item <= condition;
    },
    /**
     * Check if item is greater than condition
     */
    $gt: (item, condition) => {
      return item > condition;
    },
    /**
     * Check if item is greater than or equal to condition
     */
    $gte: (item, condition) => {
      return item >= condition;
    },
    ...operators || {}
  };
}

function createPipelineFetcher(getContentsList) {
  const match = createMatch();
  const surround = (data, { query, before, after }) => {
    const matchQuery = typeof query === "string" ? { _path: query } : query;
    const index = data.findIndex((item) => match(item, matchQuery));
    before = before ?? 1;
    after = after ?? 1;
    const slice = new Array(before + after).fill(null, 0);
    return index === -1 ? slice : slice.map((_, i) => data[index - before + i + Number(i >= before)] || null);
  };
  const pipelines = [
    // Conditions
    (data, params) => data.filter((item) => ensureArray(params.where).every((matchQuery) => match(item, matchQuery))),
    // Sort data
    (data, params) => ensureArray(params.sort).forEach((options) => sortList(data, options)),
    // Surround logic
    (data, params) => params.surround ? surround(data, params.surround) : data,
    // Skip first items
    (data, params) => params.skip ? data.slice(params.skip) : data,
    // Pick first items
    (data, params) => params.limit ? data.slice(0, params.limit) : data,
    // Remove unwanted fields
    (data, params) => apply(withoutKeys(params.without))(data),
    // Select only wanted fields
    (data, params) => apply(withKeys(params.only))(data)
  ];
  return async (query) => {
    const data = await getContentsList();
    const params = query.params();
    const filteredData = pipelines.reduce(($data, pipe) => pipe($data, params) || $data, data);
    if (params.first) {
      return filteredData[0];
    }
    return filteredData;
  };
}

const defineTransformer = (transformer) => {
  return transformer;
};
const createSingleton = (fn) => {
  let instance;
  return (...args) => {
    if (!instance) {
      instance = fn(...args);
    }
    return instance;
  };
};

function createTokenizer(parser, initialize, from) {
  let point = Object.assign(
    from ? Object.assign({}, from) : {
      line: 1,
      column: 1,
      offset: 0
    },
    {
      _index: 0,
      _bufferIndex: -1
    }
  );
  const columnStart = {};
  const resolveAllConstructs = [];
  let chunks = [];
  let stack = [];
  const effects = {
    consume,
    enter,
    exit,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    })
  };
  const context = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser,
    sliceStream,
    sliceSerialize,
    now,
    defineSkip,
    write
  };
  let state = initialize.tokenize.call(context, effects);
  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }
  return context;
  function write(slice) {
    chunks = push(chunks, slice);
    main();
    if (chunks[chunks.length - 1] !== null) {
      return [];
    }
    addResult(initialize, 0);
    context.events = resolveAll(resolveAllConstructs, context.events, context);
    return context.events;
  }
  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs);
  }
  function sliceStream(token) {
    return sliceChunks(chunks, token);
  }
  function now() {
    return Object.assign({}, point);
  }
  function defineSkip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  }
  function main() {
    let chunkIndex;
    while (point._index < chunks.length) {
      const chunk = chunks[point._index];
      if (typeof chunk === "string") {
        chunkIndex = point._index;
        if (point._bufferIndex < 0) {
          point._bufferIndex = 0;
        }
        while (point._index === chunkIndex && point._bufferIndex < chunk.length) {
          go(chunk.charCodeAt(point._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }
  function go(code) {
    state = state(code);
  }
  function consume(code) {
    if (markdownLineEnding(code)) {
      point.line++;
      point.column = 1;
      point.offset += code === -3 ? 2 : 1;
      accountForPotentialSkip();
    } else if (code !== -1) {
      point.column++;
      point.offset++;
    }
    if (point._bufferIndex < 0) {
      point._index++;
    } else {
      point._bufferIndex++;
      if (point._bufferIndex === chunks[point._index].length) {
        point._bufferIndex = -1;
        point._index++;
      }
    }
    context.previous = code;
  }
  function enter(type, fields) {
    const token = fields || {};
    token.type = type;
    token.start = now();
    context.events.push(["enter", token, context]);
    stack.push(token);
    return token;
  }
  function exit(type) {
    const token = stack.pop();
    token.end = now();
    context.events.push(["exit", token, context]);
    return token;
  }
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  function onsuccessfulcheck(_, info) {
    info.restore();
  }
  function constructFactory(onreturn, fields) {
    return hook;
    function hook(constructs, returnState, bogusState) {
      let listOfConstructs;
      let constructIndex;
      let currentConstruct;
      let info;
      return Array.isArray(constructs) ? (
        /* c8 ignore next 1 */
        handleListOfConstructs(constructs)
      ) : "tokenize" in constructs ? handleListOfConstructs([constructs]) : handleMapOfConstructs(constructs);
      function handleMapOfConstructs(map) {
        return start;
        function start(code) {
          const def = code !== null && map[code];
          const all = code !== null && map.null;
          const list = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(def) ? def : def ? [def] : [],
            ...Array.isArray(all) ? all : all ? [all] : []
          ];
          return handleListOfConstructs(list)(code);
        }
      }
      function handleListOfConstructs(list) {
        listOfConstructs = list;
        constructIndex = 0;
        if (list.length === 0) {
          return bogusState;
        }
        return handleConstruct(list[constructIndex]);
      }
      function handleConstruct(construct) {
        return start;
        function start(code) {
          info = store();
          currentConstruct = construct;
          if (!construct.partial) {
            context.currentConstruct = construct;
          }
          if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
            return nok();
          }
          return construct.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            fields ? Object.assign(Object.create(context), fields) : context,
            effects,
            ok,
            nok
          )(code);
        }
      }
      function ok(code) {
        onreturn(currentConstruct, info);
        return returnState;
      }
      function nok(code) {
        info.restore();
        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex]);
        }
        return bogusState;
      }
    }
  }
  function addResult(construct, from2) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct);
    }
    if (construct.resolve) {
      splice(
        context.events,
        from2,
        context.events.length - from2,
        construct.resolve(context.events.slice(from2), context)
      );
    }
    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }
  function store() {
    const startPoint = now();
    const startPrevious = context.previous;
    const startCurrentConstruct = context.currentConstruct;
    const startEventsIndex = context.events.length;
    const startStack = Array.from(stack);
    return {
      restore,
      from: startEventsIndex
    };
    function restore() {
      point = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }
  function accountForPotentialSkip() {
    if (point.line in columnStart && point.column < 2) {
      point.column = columnStart[point.line];
      point.offset += columnStart[point.line] - 1;
    }
  }
}
function sliceChunks(chunks, token) {
  const startIndex = token.start._index;
  const startBufferIndex = token.start._bufferIndex;
  const endIndex = token.end._index;
  const endBufferIndex = token.end._bufferIndex;
  let view;
  if (startIndex === endIndex) {
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);
    if (startBufferIndex > -1) {
      view[0] = view[0].slice(startBufferIndex);
    }
    if (endBufferIndex > 0) {
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }
  return view;
}
function serializeChunks(chunks, expandTabs) {
  let index = -1;
  const result = [];
  let atTab;
  while (++index < chunks.length) {
    const chunk = chunks[index];
    let value;
    if (typeof chunk === "string") {
      value = chunk;
    } else
      switch (chunk) {
        case -5: {
          value = "\r";
          break;
        }
        case -4: {
          value = "\n";
          break;
        }
        case -3: {
          value = "\r\n";
          break;
        }
        case -2: {
          value = expandTabs ? " " : "	";
          break;
        }
        case -1: {
          if (!expandTabs && atTab)
            continue;
          value = " ";
          break;
        }
        default: {
          value = String.fromCharCode(chunk);
        }
      }
    atTab = chunk === -2;
    result.push(value);
  }
  return result.join("");
}

function initializeDocument(effects) {
  const self = this;
  const delimiter = (this.parser.delimiter || ",").charCodeAt(0);
  return enterRow;
  function enterRow(code) {
    return effects.attempt(
      { tokenize: attemptLastLine },
      (code2) => {
        effects.consume(code2);
        return enterRow;
      },
      (code2) => {
        effects.enter("row");
        return enterColumn(code2);
      }
    )(code);
  }
  function enterColumn(code) {
    effects.enter("column");
    return content(code);
  }
  function content(code) {
    if (code === null) {
      effects.exit("column");
      effects.exit("row");
      effects.consume(code);
      return content;
    }
    if (code === 34) {
      return quotedData(code);
    }
    if (code === delimiter) {
      if (self.previous === delimiter || markdownLineEnding(self.previous) || self.previous === null) {
        effects.enter("data");
        effects.exit("data");
      }
      effects.exit("column");
      effects.enter("columnSeparator");
      effects.consume(code);
      effects.exit("columnSeparator");
      effects.enter("column");
      return content;
    }
    if (markdownLineEnding(code)) {
      effects.exit("column");
      effects.enter("newline");
      effects.consume(code);
      effects.exit("newline");
      effects.exit("row");
      return enterRow;
    }
    return data(code);
  }
  function data(code) {
    effects.enter("data");
    return dataChunk(code);
  }
  function dataChunk(code) {
    if (code === null || markdownLineEnding(code) || code === delimiter) {
      effects.exit("data");
      return content(code);
    }
    if (code === 92) {
      return escapeCharacter(code);
    }
    effects.consume(code);
    return dataChunk;
  }
  function escapeCharacter(code) {
    effects.consume(code);
    return function(code2) {
      effects.consume(code2);
      return content;
    };
  }
  function quotedData(code) {
    effects.enter("quotedData");
    effects.enter("quotedDataChunk");
    effects.consume(code);
    return quotedDataChunk;
  }
  function quotedDataChunk(code) {
    if (code === 92) {
      return escapeCharacter(code);
    }
    if (code === 34) {
      return effects.attempt(
        { tokenize: attemptDoubleQuote },
        (code2) => {
          effects.exit("quotedDataChunk");
          effects.enter("quotedDataChunk");
          return quotedDataChunk(code2);
        },
        (code2) => {
          effects.consume(code2);
          effects.exit("quotedDataChunk");
          effects.exit("quotedData");
          return content;
        }
      )(code);
    }
    effects.consume(code);
    return quotedDataChunk;
  }
}
function attemptDoubleQuote(effects, ok, nok) {
  return startSequence;
  function startSequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.enter("quoteFence");
    effects.consume(code);
    return sequence;
  }
  function sequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.consume(code);
    effects.exit("quoteFence");
    return (code2) => ok(code2);
  }
}
function attemptLastLine(effects, ok, nok) {
  return enterLine;
  function enterLine(code) {
    if (!markdownSpace(code) && code !== null) {
      return nok(code);
    }
    effects.enter("emptyLine");
    return continueLine(code);
  }
  function continueLine(code) {
    if (markdownSpace(code)) {
      effects.consume(code);
      return continueLine;
    }
    if (code === null) {
      effects.exit("emptyLine");
      return ok(code);
    }
    return nok(code);
  }
}
const parse$1 = (options) => {
  return createTokenizer(
    { ...options },
    { tokenize: initializeDocument },
    void 0
  );
};

const own = {}.hasOwnProperty;
const initialPoint = {
  line: 1,
  column: 1,
  offset: 0
};
const fromCSV = function(value, encoding, options) {
  if (typeof encoding !== "string") {
    options = encoding;
    encoding = void 0;
  }
  return compiler$1()(
    postprocess(
      parse$1(options).write(preprocess()(value, encoding, true))
    )
  );
};
function compiler$1() {
  const config = {
    enter: {
      column: opener(openColumn),
      row: opener(openRow),
      data: onenterdata,
      quotedData: onenterdata
    },
    exit: {
      row: closer(),
      column: closer(),
      data: onexitdata,
      quotedData: onexitQuotedData
    }
  };
  return compile;
  function compile(events) {
    const tree = {
      type: "root",
      children: []
    };
    const stack = [tree];
    const tokenStack = [];
    const context = {
      stack,
      tokenStack,
      config,
      enter,
      exit,
      resume
    };
    let index = -1;
    while (++index < events.length) {
      const handler = config[events[index][0]];
      if (own.call(handler, events[index][1].type)) {
        handler[events[index][1].type].call(
          Object.assign(
            {
              sliceSerialize: events[index][2].sliceSerialize
            },
            context
          ),
          events[index][1]
        );
      }
    }
    if (tokenStack.length > 0) {
      const tail = tokenStack[tokenStack.length - 1];
      const handler = tail[1] || defaultOnError;
      handler.call(context, void 0, tail[0]);
    }
    tree.position = {
      start: point(
        events.length > 0 ? events[0][1].start : initialPoint
      ),
      end: point(
        events.length > 0 ? events[events.length - 2][1].end : initialPoint
      )
    };
    return tree;
  }
  function point(d) {
    return {
      line: d.line,
      column: d.column,
      offset: d.offset
    };
  }
  function opener(create, and) {
    return open;
    function open(token) {
      enter.call(this, create(token), token);
      if (and) {
        and.call(this, token);
      }
    }
  }
  function enter(node, token, errorHandler) {
    const parent = this.stack[this.stack.length - 1];
    parent.children.push(node);
    this.stack.push(node);
    this.tokenStack.push([token, errorHandler]);
    node.position = {
      start: point(token.start)
    };
    return node;
  }
  function closer(and) {
    return close;
    function close(token) {
      if (and) {
        and.call(this, token);
      }
      exit.call(this, token);
    }
  }
  function exit(token, onExitError) {
    const node = this.stack.pop();
    const open = this.tokenStack.pop();
    if (!open) {
      throw new Error(
        "Cannot close `" + token.type + "` (" + stringifyPosition({
          start: token.start,
          end: token.end
        }) + "): it\u2019s not open"
      );
    } else if (open[0].type !== token.type) {
      if (onExitError) {
        onExitError.call(this, token, open[0]);
      } else {
        const handler = open[1] || defaultOnError;
        handler.call(this, token, open[0]);
      }
    }
    node.position.end = point(token.end);
    return node;
  }
  function resume() {
    return toString(this.stack.pop());
  }
  function onenterdata(token) {
    const parent = this.stack[this.stack.length - 1];
    let tail = parent.children[parent.children.length - 1];
    if (!tail || tail.type !== "text") {
      tail = text();
      tail.position = {
        start: point(token.start)
      };
      parent.children.push(tail);
    }
    this.stack.push(tail);
  }
  function onexitdata(token) {
    const tail = this.stack.pop();
    tail.value += this.sliceSerialize(token).trim().replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function onexitQuotedData(token) {
    const tail = this.stack.pop();
    const value = this.sliceSerialize(token);
    tail.value += this.sliceSerialize(token).trim().substring(1, value.length - 1).replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function text() {
    return {
      type: "text",
      value: ""
    };
  }
  function openColumn() {
    return {
      type: "column",
      children: []
    };
  }
  function openRow() {
    return {
      type: "row",
      children: []
    };
  }
}
function defaultOnError(left, right) {
  if (left) {
    throw new Error(
      "Cannot close `" + left.type + "` (" + stringifyPosition({
        start: left.start,
        end: left.end
      }) + "): a different token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is open"
    );
  } else {
    throw new Error(
      "Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is still open"
    );
  }
}

function csvParse(options) {
  const parser = (doc) => {
    return fromCSV(doc, options);
  };
  Object.assign(this, { Parser: parser });
  const toJsonObject = (tree) => {
    const [header, ...rows] = tree.children;
    const columns = header.children.map((col) => col.children[0].value);
    const data = rows.map((row) => {
      return row.children.reduce((acc, col, i) => {
        acc[String(columns[i])] = col.children[0]?.value;
        return acc;
      }, {});
    });
    return data;
  };
  const toJsonArray = (tree) => {
    const data = tree.children.map((row) => {
      return row.children.map((col) => col.children[0]?.value);
    });
    return data;
  };
  const compiler = (doc) => {
    if (options.json) {
      return toJsonObject(doc);
    }
    return toJsonArray(doc);
  };
  Object.assign(this, { Compiler: compiler });
}
const csv = defineTransformer({
  name: "csv",
  extensions: [".csv"],
  parse: async (_id, content, options = {}) => {
    const stream = unified().use(csvParse, {
      delimiter: ",",
      json: true,
      ...options
    });
    const { result } = await stream.process(content);
    return {
      _id,
      _type: "csv",
      body: result
    };
  }
});

function flattenNodeText(node) {
  if (node.type === "text") {
    return node.value || "";
  } else {
    return (node.children || []).reduce((text, child) => {
      return text.concat(flattenNodeText(child));
    }, "");
  }
}
function flattenNode(node, maxDepth = 2, _depth = 0) {
  if (!Array.isArray(node.children) || _depth === maxDepth) {
    return [node];
  }
  return [
    node,
    ...node.children.reduce((acc, child) => acc.concat(flattenNode(child, maxDepth, _depth + 1)), [])
  ];
}

const TOC_TAGS = ["h2", "h3", "h4", "h5", "h6"];
const TOC_TAGS_DEPTH = TOC_TAGS.reduce((tags, tag) => {
  tags[tag] = Number(tag.charAt(tag.length - 1));
  return tags;
}, {});
const getHeaderDepth = (node) => TOC_TAGS_DEPTH[node.tag];
const getTocTags = (depth) => {
  if (depth < 1 || depth > 5) {
    console.log(`\`toc.depth\` is set to ${depth}. It should be a number between 1 and 5. `);
    depth = 1;
  }
  return TOC_TAGS.slice(0, depth);
};
function nestHeaders(headers) {
  if (headers.length <= 1) {
    return headers;
  }
  const toc = [];
  let parent;
  headers.forEach((header) => {
    if (!parent || header.depth <= parent.depth) {
      header.children = [];
      parent = header;
      toc.push(header);
    } else {
      parent.children.push(header);
    }
  });
  toc.forEach((header) => {
    if (header.children?.length) {
      header.children = nestHeaders(header.children);
    } else {
      delete header.children;
    }
  });
  return toc;
}
function generateFlatToc(body, options) {
  const { searchDepth, depth, title = "" } = options;
  const tags = getTocTags(depth);
  const headers = flattenNode(body, searchDepth).filter((node) => tags.includes(node.tag || ""));
  const links = headers.map((node) => ({
    id: node.props?.id,
    depth: getHeaderDepth(node),
    text: flattenNodeText(node)
  }));
  return {
    title,
    searchDepth,
    depth,
    links
  };
}
function generateToc(body, options) {
  const toc = generateFlatToc(body, options);
  toc.links = nestHeaders(toc.links);
  return toc;
}

function emphasis(h, node) {
  return h(node, "em", node.attributes, all(h, node));
}

function parseThematicBlock(lang) {
  if (!lang) {
    return {
      language: void 0,
      highlights: void 0,
      fileName: void 0
    };
  }
  const language = lang.replace(/[{|[](.+)/, "").match(/^[^ \t]+(?=[ \t]|$)/);
  const highlightTokens = lang.match(/{([^}]+)}/);
  const filenameTokens = lang.match(/\[(.+)\]/);
  return {
    language: language ? language[0] : void 0,
    highlights: parseHighlightedLines(highlightTokens && highlightTokens[1]),
    filename: Array.isArray(filenameTokens) ? filenameTokens[1] : void 0
  };
}
function parseHighlightedLines(lines) {
  const lineArray = String(lines || "").split(",").filter(Boolean).flatMap((line) => {
    const [start, end] = line.trim().split("-").map((a) => Number(a.trim()));
    return Array.from({ length: (end || start) - start + 1 }).map((_, i) => start + i);
  });
  return lineArray.length ? lineArray : void 0;
}
const TAG_NAME_REGEXP = /^<\/?([A-Za-z0-9-_]+) ?[^>]*>/;
function getTagName(value) {
  const result = String(value).match(TAG_NAME_REGEXP);
  return result && result[1];
}
function wrap(nodes, loose = false) {
  const result = [];
  let index = -1;
  if (loose) {
    result.push(u("text", "\n"));
  }
  while (++index < nodes.length) {
    if (index) {
      result.push(u("text", "\n"));
    }
    result.push(nodes[index]);
  }
  if (loose && nodes.length > 0) {
    result.push(u("text", "\n"));
  }
  return result;
}

const code = (h, node) => {
  const lang = (node.lang || "") + " " + (node.meta || "");
  const { language, highlights, filename } = parseThematicBlock(lang);
  const code = node.value ? detab(node.value + "\n") : "";
  return h(
    node.position,
    "code",
    {
      language,
      filename,
      highlights,
      meta: node.meta,
      code
    },
    [h(node, "pre", {}, [h(node, "code", { __ignoreMap: "" }, [u("text", code)])])]
  );
};

function html(h, node) {
  const tagName = getTagName(node.value);
  if (tagName && /[A-Z]/.test(tagName)) {
    node.value = node.value.replace(tagName, kebabCase(tagName));
  }
  if (tagName === "code") {
    node.value = node.value.replace(tagName, "code-inline");
  }
  return h.dangerous ? h.augment(node, u("raw", node.value)) : null;
}

function heading(h, node) {
  return h(node, "h" + node.depth, all(h, node));
}

const SEMVER_REGEX = /^(\d+)(\.\d+)*(\.x)?$/;
const describeId = (_id) => {
  const [_source, ...parts] = _id.split(":");
  const [, filename, _extension] = parts[parts.length - 1].match(/(.*)\.([^.]+)$/);
  parts[parts.length - 1] = filename;
  const _path = parts.join("/");
  return {
    _source,
    _path,
    _extension,
    _file: _extension ? `${_path}.${_extension}` : _path
  };
};
const pathMeta = defineTransformer({
  name: "path-meta",
  extensions: [".*"],
  transform(content, options = {}) {
    const { locales = [], defaultLocale = "en" } = options;
    const { _source, _file, _path, _extension } = describeId(content._id);
    const parts = _path.split("/");
    const _locale = locales.includes(parts[0]) ? parts.shift() : defaultLocale;
    const filePath = generatePath(parts.join("/"));
    return {
      _path: filePath,
      _dir: filePath.split("/").slice(-2)[0],
      _draft: isDraft(_path),
      _partial: isPartial(_path),
      _locale,
      ...content,
      // TODO: move title to Markdown parser
      title: content.title || generateTitle(refineUrlPart(parts[parts.length - 1])),
      _source,
      _file,
      _extension
    };
  }
});
const isDraft = (path) => !!path.match(/\.draft(\/|\.|$)/);
const isPartial = (path) => path.split(/[:/]/).some((part) => part.match(/^_.*/));
const generatePath = (path, { forceLeadingSlash = true } = {}) => {
  path = path.split("/").map((part) => slugify(refineUrlPart(part), { lower: true })).join("/");
  return forceLeadingSlash ? withLeadingSlash(withoutTrailingSlash(path)) : path;
};
const generateTitle = (path) => path.split(/[\s-]/g).map(pascalCase).join(" ");
function refineUrlPart(name) {
  name = name.split(/[/:]/).pop();
  if (SEMVER_REGEX.test(name)) {
    return name;
  }
  return name.replace(/(\d+\.)?(.*)/, "$2").replace(/^index(\.draft)?$/, "").replace(/\.draft$/, "");
}

function link(h, node) {
  const props = {
    ...node.attributes || {},
    href: encode(normalizeLink(node.url))
  };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h(node, "a", props, all(h, node));
}
function normalizeLink(link2) {
  if (link2.endsWith(".md") && (isRelative(link2) || !/^https?/.test(link2) && !link2.startsWith("/"))) {
    return generatePath(link2.replace(/\.md$/, ""), { forceLeadingSlash: false });
  } else {
    return link2;
  }
}

function list(h, node) {
  const props = {};
  const name = `${node.ordered ? "ol" : "ul"}`;
  if (typeof node.start === "number" && node.start !== 1) {
    props.start = node.start;
  }
  if ((node.children || []).some((child) => typeof child.checked === "boolean")) {
    props.className = ["contains-task-list"];
  }
  return h(node, name, props, wrap(all(h, node), true));
}

function listItem(h, node, parent) {
  const result = all(h, node);
  const loose = parent ? listLoose(parent) : listItemLoose(node);
  const props = {};
  let wrapped = [];
  let index;
  let child;
  if (typeof node.checked === "boolean") {
    result.unshift(
      h({}, "input", {
        type: "checkbox",
        checked: node.checked,
        disabled: true
      })
    );
    props.className = ["task-list-item"];
  }
  const length = result.length;
  index = -1;
  while (++index < length) {
    child = result[index];
    if (child.tagName === "p" && !loose) {
      wrapped = wrapped.concat(child.children || []);
    } else {
      wrapped.push(child);
    }
  }
  return h(node, "li", props, wrapped);
}
function listLoose(node) {
  let loose = node.spread;
  const children = node.children;
  const length = children.length;
  let index = -1;
  while (!loose && ++index < length) {
    loose = listItemLoose(children[index]);
  }
  return loose;
}
function listItemLoose(node) {
  const spread = node.spread;
  const children = node.children || [];
  return spread === void 0 || spread === null ? children.length > 1 : spread;
}

function table(h, node) {
  const rows = node.children;
  const align = node.align || [];
  const result = rows.map((row, index) => {
    const childres = row.children;
    const name = index === 0 ? "th" : "td";
    let pos = node.align ? align.length : childres.length;
    const out = [];
    while (pos--) {
      const cell = childres[pos];
      out[pos] = h(cell, name, { align: align[pos] }, cell ? all(h, cell) : []);
    }
    return h(row, "tr", wrap(out, true));
  });
  const body = result[1] && h(
    {
      start: position(result[1]).start,
      end: position(result[result.length - 1]).end
    },
    "tbody",
    wrap(result.slice(1), true)
  );
  return h(node, "table", wrap([h(result[0].position, "thead", wrap([result[0]], true))].concat(body || []), true));
}

const htmlTags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];

function paragraph(h, node) {
  if (node.children && node.children[0] && node.children[0].type === "html") {
    const tagName = kebabCase(getTagName(node.children[0].value) || "div");
    if (!htmlTags.includes(tagName)) {
      return all(h, node);
    }
  }
  return h(node, "p", all(h, node));
}

function image(h, node) {
  const props = {
    ...node.attributes,
    src: encode(node.url),
    alt: node.alt
  };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h(node, "img", props);
}

function blockquote(h, node) {
  return h(node, "blockquote", wrap(all(h, node), true));
}

function strong(h, node) {
  return h(node, "strong", node.attributes, all(h, node));
}

function inlineCode(h, node) {
  return h(node, "code-inline", node.attributes, [
    // @ts-ignore
    u("text", node.value.replace(/\r?\n|\r/g, " "))
  ]);
}

function thematicBreak(h, node) {
  return h(node, "hr");
}

function containerComponent(h, node) {
  const hast = h(node, node.tagName, node.attributes, all(h, node));
  hast.attributes = node.attributes;
  hast.fmAttributes = node.fmAttributes;
  return hast;
}

const handlers$1 = {
  emphasis,
  code,
  paragraph,
  html,
  link,
  list,
  listItem,
  heading,
  table,
  image,
  blockquote,
  strong,
  inlineCode,
  thematicBreak,
  containerComponent
};

function compiler(_options) {
  function parseAsJSON(node) {
    if (Array.isArray(node)) {
      return node.map(parseAsJSON).filter(Boolean);
    }
    if (node.tagName?.startsWith("h") && node.properties.id) {
      node.properties.id = node.properties.id.replace(/-+/g, "-").replace(/-$/, "").replace(/^-/, "").replace(/^(\d)/, "_$1");
    }
    if (node.type === "element") {
      if (node.tagName === "li") {
        let hasPreviousParagraph = false;
        node.children = node.children?.flatMap((child) => {
          if (child.tagName === "p") {
            if (hasPreviousParagraph) {
              child.children.unshift({
                type: "element",
                tagName: "br",
                properties: {}
              });
            }
            hasPreviousParagraph = true;
            return child.children;
          }
          return child;
        });
      }
      if (node.tagName === "component-slot") {
        node.tagName = "template";
      }
      return {
        type: "element",
        tag: node.tagName,
        props: node.properties,
        children: parseAsJSON(node.children || [])
      };
    }
    if (node.type === "text") {
      if (node.value === "\n") {
        return void 0;
      }
      return {
        type: "text",
        value: node.value
      };
    }
    if (node.type === "comment") {
      return void 0;
    }
    node.children = parseAsJSON(node.children || []);
    return node;
  }
  this.Compiler = function(root) {
    return {
      type: "root",
      children: parseAsJSON(root.children || [])
    };
  };
}

function isTag(vnode, tag) {
  if (vnode.type === tag) {
    return true;
  }
  if (typeof vnode.type === "object" && vnode.type.tag === tag) {
    return true;
  }
  if (vnode.tag === tag) {
    return true;
  }
  return false;
}
function isText(vnode) {
  return isTag(vnode, "text") || typeof vnode.children === "string";
}
function nodeChildren(node) {
  if (Array.isArray(node.children) || typeof node.children === "string") {
    return node.children;
  }
  if (typeof node.children?.default === "function") {
    return node.children.default();
  }
  return [];
}
function nodeTextContent(node) {
  if (!node) {
    return "";
  }
  if (Array.isArray(node)) {
    return node.map(nodeTextContent).join("");
  }
  if (isText(node)) {
    return node.children || node.value;
  }
  const children = nodeChildren(node);
  if (Array.isArray(children)) {
    return children.map(nodeTextContent).join("");
  }
  return "";
}

const usePlugins = (plugins, stream) => {
  for (const plugin of Object.values(plugins)) {
    if (plugin) {
      const { instance, ...options } = plugin;
      stream.use(instance, options);
    }
  }
};
function generateBody(content, options) {
  const rehypeOptions = {
    handlers: handlers$1,
    allowDangerousHtml: true
  };
  return new Promise((resolve, reject) => {
    const stream = unified().use(remarkParse);
    if (options.mdc) {
      stream.use(remarkMDC);
    }
    usePlugins(options.remarkPlugins, stream);
    stream.use(remark2rehype, rehypeOptions);
    usePlugins(options.rehypePlugins, stream);
    stream.use(compiler, options);
    stream.process(
      {
        value: content,
        data: options.data
      },
      (error, file) => {
        if (error) {
          return reject(error);
        }
        Object.assign(options.data, file?.data || {});
        resolve(file?.result);
      }
    );
  });
}
function contentHeading(body) {
  let title = "";
  let description = "";
  const children = body.children.filter((node) => node.type !== "text" && node.tag !== "hr");
  if (children.length && children[0].tag === "h1") {
    const node = children.shift();
    title = nodeTextContent(node);
  }
  if (children.length && children[0].tag === "p") {
    const node = children.shift();
    description = nodeTextContent(node);
  }
  return {
    title,
    description
  };
}

const useDefaultOptions = () => ({
  mdc: true,
  toc: {
    depth: 2,
    searchDepth: 2
  },
  tags: {},
  remarkPlugins: {
    "remark-emoji": {
      instance: remarkEmoji
    },
    "remark-squeeze-paragraphs": {
      instance: remarkSqueezeParagraphs
    },
    "remark-gfm": {
      instance: remarkGfm
    }
  },
  rehypePlugins: {
    "rehype-slug": {
      instance: rehypeSlug
    },
    "rehype-external-links": {
      instance: rehypeExternalLinks
    },
    "rehype-sort-attribute-values": {
      instance: rehypeSortAttributeValues
    },
    "rehype-sort-attributes": {
      instance: rehypeSortAttributes
    },
    "rehype-raw": {
      instance: rehypeRaw,
      passThrough: ["element"]
    }
  }
});
async function parse(file, userOptions = {}) {
  const options = defu(userOptions, useDefaultOptions());
  const { content, data } = await parseFrontMatter(file);
  const body = await generateBody(content, { ...options, data });
  let toc;
  if (data.toc !== false) {
    const tocOption = defu(data.toc || {}, options.toc);
    toc = generateToc(body, tocOption);
  }
  const excerptString = useExcerpt(content);
  const excerpt = excerptString ? await generateBody(excerptString, { ...options, data }) : void 0;
  const heading = contentHeading(body);
  return {
    body: {
      ...body,
      toc
    },
    meta: {
      _empty: content.trim().length === 0,
      title: heading.title,
      description: heading.description,
      excerpt,
      ...data
    }
  };
}
function useExcerpt(content, delimiter = /<!--\s*?more\s*?-->/i) {
  if (!delimiter) {
    return "";
  }
  let idx = -1;
  const match = delimiter.exec(content);
  if (match) {
    idx = match.index;
  }
  if (idx !== -1) {
    return content.slice(0, idx);
  }
}

const markdown = defineTransformer({
  name: "markdown",
  extensions: [".md"],
  parse: async (_id, content, options = {}) => {
    const config = { ...options };
    config.rehypePlugins = await importPlugins(config.rehypePlugins);
    config.remarkPlugins = await importPlugins(config.remarkPlugins);
    const parsed = await parse(content, config);
    return {
      ...parsed.meta,
      body: parsed.body,
      _type: "markdown",
      _id
    };
  }
});
async function importPlugins(plugins = {}) {
  const resolvedPlugins = {};
  for (const [name, plugin] of Object.entries(plugins)) {
    if (plugin) {
      resolvedPlugins[name] = {
        instance: plugin.instance || await import(
          /* @vite-ignore */
          name
        ).then((m) => m.default || m),
        ...plugin
      };
    } else {
      resolvedPlugins[name] = false;
    }
  }
  return resolvedPlugins;
}

const yaml = defineTransformer({
  name: "Yaml",
  extensions: [".yml", ".yaml"],
  parse: async (_id, content) => {
    const { data } = await parseFrontMatter(`---
${content}
---`);
    let parsed = data;
    if (Array.isArray(data)) {
      console.warn(`YAML array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = { body: data };
    }
    return {
      ...parsed,
      _id,
      _type: "yaml"
    };
  }
});

const grammar = {
  "information_for_contributors": [
    "This file has been converted from https://github.com/docusgen/vscode-extension/blob/main/syntaxes/mdc.tmLanguage.json",
    "If you want to provide a fix or improvement, please create a pull request against the original repository.",
    "Once accepted there, we are happy to receive an update request."
  ],
  "version": "https://github.com/docusgen/vscode-extension/blob/1303abd16342880a42a4d143a660da049c79ea6c/syntaxes/mdc.tmLanguage.json",
  "name": "markdown",
  "injectionSelector": "L:text.html.markdown",
  "scopeName": "text.markdown.mdc",
  "patterns": [
    {
      "include": "text.html.markdown#frontMatter"
    },
    {
      "include": "#component_block"
    },
    {
      "include": "#block"
    }
  ],
  "repository": {
    "block": {
      "comment": "Same as `text.html.markdown#block`, but without `raw_block`",
      "patterns": [
        {
          "include": "#component_block"
        },
        {
          "include": "text.html.markdown#separator"
        },
        {
          "include": "#heading"
        },
        {
          "include": "#blockquote"
        },
        {
          "include": "#lists"
        },
        {
          "include": "#paragraph"
        },
        {
          "include": "text.html.markdown#fenced_code_block"
        },
        {
          "include": "text.html.markdown#link-def"
        },
        {
          "include": "text.html.markdown#html"
        }
      ]
    },
    "inline": {
      "patterns": [
        {
          "include": "#component_inline"
        },
        {
          "include": "#span"
        },
        {
          "include": "#markdown_attributes"
        }
      ]
    },
    "markdown_attributes": {
      "match": "(?x)([^ ])(               # attributes\n    ({)\n      ([^{]*)\n    (})\n  )",
      "name": "markup.component.attribute",
      "captures": {
        "4": {
          "patterns": [
            {
              "include": "#attribute"
            }
          ]
        }
      }
    },
    "span": {
      "match": "(?x)\n  (\\[)           # Open\n    ([^]]*)\n  (\\])\n  (               # attributes\n    ({)\n      ([^{]*)\n    (})\n  )?",
      "name": "markup.component.span",
      "captures": {
        "2": {
          "name": "string.other.link.description.title.markdown"
        },
        "4": {
          "patterns": [
            {
              "include": "#attributes"
            }
          ]
        }
      }
    },
    "attributes": {
      "match": "(?x)(               # attributes\n    ({)\n      ([^{]*)\n    (})\n  )",
      "name": "markup.attributes",
      "captures": {
        "3": {
          "patterns": [
            {
              "include": "#attribute"
            }
          ]
        }
      }
    },
    "component_inline": {
      "match": "(?x)\n  (^|\\G|\\s+)\n  (:)           # component colon\n  (?i:             # component name\n    (\\w[\\w\\d-]*)\n  )\n  (\n      ({[^}]*})        # attributes\n      (\\[[^\\]]*\\]?) # slot\n      # reverse order\n    | (\\[[^\\]]*\\])  # slot\n      ({[^}]*})?       # attributes\n  )?",
      "name": "markup.component.inline",
      "captures": {
        "2": {
          "name": "punctuation.definition.tag.start.component"
        },
        "3": {
          "name": "entity.name.tag.component"
        },
        "5": {
          "patterns": [
            {
              "include": "#attributes"
            }
          ]
        },
        "6": {
          "patterns": [
            {
              "include": "#span"
            }
          ]
        },
        "7": {
          "patterns": [
            {
              "include": "#span"
            }
          ]
        },
        "8": {
          "patterns": [
            {
              "include": "#attributes"
            }
          ]
        }
      }
    },
    "component_block": {
      "begin": "(?x)\n  (^|\\G)(\\s*)\n  (:{2,})     # component colons\n  (?i:\n    (\\w[\\w\\d-]+)   # component name\n    (                 # folowing spaces or attributes\n        \\s*\n      | {([^{]*)}\n    )\n    $\n  )",
      "name": "markup.component.block",
      "end": "(^|\\G)(\\2)(\\3)\\s*$",
      "beginCaptures": {
        "4": {
          "name": "entity.name.tag.component"
        },
        "5": {
          "patterns": [
            {
              "include": "#attribute"
            }
          ]
        }
      },
      "patterns": [
        {
          "include": "#content"
        }
      ]
    },
    "content": {
      "begin": "(^|\\G)(\\s*)(.*)",
      "while": "(^|\\G)(?!\\s*([:]{2,})\\s*$)",
      "contentName": "meta.embedded.block.component",
      "patterns": [
        {
          "begin": "(^|\\G)(\\s*)(-{3})(\\s*)$",
          "end": "(^|\\G)(\\s*(-{3})(\\s*)$)",
          "patterns": [
            {
              "include": "source.yaml"
            }
          ]
        },
        {
          "match": "^(\\s*)(#[\\w\\-\\_]*)\\s*(<!--(.*)-->)?$",
          "captures": {
            "2": {
              "name": "entity.other.attribute-name.html"
            },
            "3": {
              "name": "comment.block.html"
            }
          }
        },
        {
          "comment": "Block Repository created to disable 4-space raw block inside components",
          "include": "#block"
        }
      ]
    },
    "attribute": {
      "patterns": [
        {
          "match": `(?x)
  (
    ([^=><\\s]*)  # attribute name
    (             # attribute value
        =["]([^"]*)(["])|[']([^']*)(['])
      | =[^\\s'"]*
    )?
    \\s*
  )`,
          "captures": {
            "2": {
              "name": "entity.other.attribute-name.html"
            },
            "3": {
              "patterns": [
                {
                  "include": "#attribute-interior"
                }
              ]
            }
          }
        }
      ]
    },
    "attribute-interior": {
      "comment": "https://github.com/microsoft/vscode/blob/08d59c432609ae9306eb3889815977e93bb548de/extensions/html/syntaxes/html.tmLanguage.json#L376",
      "patterns": [
        {
          "begin": "=",
          "beginCaptures": {
            "0": {
              "name": "punctuation.separator.key-value.html"
            }
          },
          "end": "(?<=[^\\s=])(?!\\s*=)|(?=/?>)",
          "patterns": [
            {
              "match": "([^\\s\"'=<>`/]|/(?!>))+",
              "name": "string.unquoted.html"
            },
            {
              "begin": '"',
              "beginCaptures": {
                "0": {
                  "name": "punctuation.definition.string.begin.html"
                }
              },
              "end": '"',
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.string.end.html"
                }
              },
              "name": "string.quoted.double.html",
              "patterns": [
                {
                  "include": "#entities"
                }
              ]
            },
            {
              "begin": "'",
              "beginCaptures": {
                "0": {
                  "name": "punctuation.definition.string.begin.html"
                }
              },
              "end": "'",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.string.end.html"
                }
              },
              "name": "string.quoted.single.html",
              "patterns": [
                {
                  "include": "#entities"
                }
              ]
            },
            {
              "match": "=",
              "name": "invalid.illegal.unexpected-equals-sign.html"
            }
          ]
        }
      ]
    },
    "entities": {
      "comment": "https://github.com/microsoft/vscode/blob/08d59c432609ae9306eb3889815977e93bb548de/extensions/html/syntaxes/html.tmLanguage.json#L532",
      "patterns": [
        {
          "captures": {
            "1": {
              "name": "punctuation.definition.entity.html"
            },
            "912": {
              "name": "punctuation.definition.entity.html"
            }
          },
          "comment": "Yes this is a bit ridiculous, there are quite a lot of these",
          "match": "(?x)\n						(&)	(?=[a-zA-Z])\n						(\n							(a(s(ymp(eq)?|cr|t)|n(d(slope|d|v|and)?|g(s(t|ph)|zarr|e|le|rt(vb(d)?)?|msd(a(h|c|d|e|f|a|g|b))?)?)|c(y|irc|d|ute|E)?|tilde|o(pf|gon)|uml|p(id|os|prox(eq)?|e|E|acir)?|elig|f(r)?|w(conint|int)|l(pha|e(ph|fsym))|acute|ring|grave|m(p|a(cr|lg))|breve)|A(s(sign|cr)|nd|MP|c(y|irc)|tilde|o(pf|gon)|uml|pplyFunction|fr|Elig|lpha|acute|ring|grave|macr|breve))\n						  | (B(scr|cy|opf|umpeq|e(cause|ta|rnoullis)|fr|a(ckslash|r(v|wed))|reve)|b(s(cr|im(e)?|ol(hsub|b)?|emi)|n(ot|e(quiv)?)|c(y|ong)|ig(s(tar|qcup)|c(irc|up|ap)|triangle(down|up)|o(times|dot|plus)|uplus|vee|wedge)|o(t(tom)?|pf|wtie|x(h(d|u|D|U)?|times|H(d|u|D|U)?|d(R|l|r|L)|u(R|l|r|L)|plus|D(R|l|r|L)|v(R|h|H|l|r|L)?|U(R|l|r|L)|V(R|h|H|l|r|L)?|minus|box))|Not|dquo|u(ll(et)?|mp(e(q)?|E)?)|prime|e(caus(e)?|t(h|ween|a)|psi|rnou|mptyv)|karow|fr|l(ock|k(1(2|4)|34)|a(nk|ck(square|triangle(down|left|right)?|lozenge)))|a(ck(sim(eq)?|cong|prime|epsilon)|r(vee|wed(ge)?))|r(eve|vbar)|brk(tbrk)?))\n						  | (c(s(cr|u(p(e)?|b(e)?))|h(cy|i|eck(mark)?)|ylcty|c(irc|ups(sm)?|edil|a(ps|ron))|tdot|ir(scir|c(eq|le(d(R|circ|S|dash|ast)|arrow(left|right)))?|e|fnint|E|mid)?|o(n(int|g(dot)?)|p(y(sr)?|f|rod)|lon(e(q)?)?|m(p(fn|le(xes|ment))?|ma(t)?))|dot|u(darr(l|r)|p(s|c(up|ap)|or|dot|brcap)?|e(sc|pr)|vee|wed|larr(p)?|r(vearrow(left|right)|ly(eq(succ|prec)|vee|wedge)|arr(m)?|ren))|e(nt(erdot)?|dil|mptyv)|fr|w(conint|int)|lubs(uit)?|a(cute|p(s|c(up|ap)|dot|and|brcup)?|r(on|et))|r(oss|arr))|C(scr|hi|c(irc|onint|edil|aron)|ircle(Minus|Times|Dot|Plus)|Hcy|o(n(tourIntegral|int|gruent)|unterClockwiseContourIntegral|p(f|roduct)|lon(e)?)|dot|up(Cap)?|OPY|e(nterDot|dilla)|fr|lo(seCurly(DoubleQuote|Quote)|ckwiseContourIntegral)|a(yleys|cute|p(italDifferentialD)?)|ross))\n						  | (d(s(c(y|r)|trok|ol)|har(l|r)|c(y|aron)|t(dot|ri(f)?)|i(sin|e|v(ide(ontimes)?|onx)?|am(s|ond(suit)?)?|gamma)|Har|z(cy|igrarr)|o(t(square|plus|eq(dot)?|minus)?|ublebarwedge|pf|wn(harpoon(left|right)|downarrows|arrow)|llar)|d(otseq|a(rr|gger))?|u(har|arr)|jcy|e(lta|g|mptyv)|f(isht|r)|wangle|lc(orn|rop)|a(sh(v)?|leth|rr|gger)|r(c(orn|rop)|bkarow)|b(karow|lac)|Arr)|D(s(cr|trok)|c(y|aron)|Scy|i(fferentialD|a(critical(Grave|Tilde|Do(t|ubleAcute)|Acute)|mond))|o(t(Dot|Equal)?|uble(Right(Tee|Arrow)|ContourIntegral|Do(t|wnArrow)|Up(DownArrow|Arrow)|VerticalBar|L(ong(RightArrow|Left(RightArrow|Arrow))|eft(RightArrow|Tee|Arrow)))|pf|wn(Right(TeeVector|Vector(Bar)?)|Breve|Tee(Arrow)?|arrow|Left(RightVector|TeeVector|Vector(Bar)?)|Arrow(Bar|UpArrow)?))|Zcy|el(ta)?|D(otrahd)?|Jcy|fr|a(shv|rr|gger)))\n						  | (e(s(cr|im|dot)|n(sp|g)|c(y|ir(c)?|olon|aron)|t(h|a)|o(pf|gon)|dot|u(ro|ml)|p(si(v|lon)?|lus|ar(sl)?)|e|D(ot|Dot)|q(s(im|lant(less|gtr))|c(irc|olon)|u(iv(DD)?|est|als)|vparsl)|f(Dot|r)|l(s(dot)?|inters|l)?|a(ster|cute)|r(Dot|arr)|g(s(dot)?|rave)?|x(cl|ist|p(onentiale|ectation))|m(sp(1(3|4))?|pty(set|v)?|acr))|E(s(cr|im)|c(y|irc|aron)|ta|o(pf|gon)|NG|dot|uml|TH|psilon|qu(ilibrium|al(Tilde)?)|fr|lement|acute|grave|x(ists|ponentialE)|m(pty(SmallSquare|VerySmallSquare)|acr)))\n						  | (f(scr|nof|cy|ilig|o(pf|r(k(v)?|all))|jlig|partint|emale|f(ilig|l(ig|lig)|r)|l(tns|lig|at)|allingdotseq|r(own|a(sl|c(1(2|8|3|4|5|6)|78|2(3|5)|3(8|4|5)|45|5(8|6)))))|F(scr|cy|illed(SmallSquare|VerySmallSquare)|o(uriertrf|pf|rAll)|fr))\n						  | (G(scr|c(y|irc|edil)|t|opf|dot|T|Jcy|fr|amma(d)?|reater(Greater|SlantEqual|Tilde|Equal(Less)?|FullEqual|Less)|g|breve)|g(s(cr|im(e|l)?)|n(sim|e(q(q)?)?|E|ap(prox)?)|c(y|irc)|t(c(c|ir)|dot|quest|lPar|r(sim|dot|eq(qless|less)|less|a(pprox|rr)))?|imel|opf|dot|jcy|e(s(cc|dot(o(l)?)?|l(es)?)?|q(slant|q)?|l)?|v(nE|ertneqq)|fr|E(l)?|l(j|E|a)?|a(cute|p|mma(d)?)|rave|g(g)?|breve))\n						  | (h(s(cr|trok|lash)|y(phen|bull)|circ|o(ok(leftarrow|rightarrow)|pf|arr|rbar|mtht)|e(llip|arts(uit)?|rcon)|ks(earow|warow)|fr|a(irsp|lf|r(dcy|r(cir|w)?)|milt)|bar|Arr)|H(s(cr|trok)|circ|ilbertSpace|o(pf|rizontalLine)|ump(DownHump|Equal)|fr|a(cek|t)|ARDcy))\n						  | (i(s(cr|in(s(v)?|dot|v|E)?)|n(care|t(cal|prod|e(rcal|gers)|larhk)?|odot|fin(tie)?)?|c(y|irc)?|t(ilde)?|i(nfin|i(nt|int)|ota)?|o(cy|ta|pf|gon)|u(kcy|ml)|jlig|prod|e(cy|xcl)|quest|f(f|r)|acute|grave|m(of|ped|a(cr|th|g(part|e|line))))|I(scr|n(t(e(rsection|gral))?|visible(Comma|Times))|c(y|irc)|tilde|o(ta|pf|gon)|dot|u(kcy|ml)|Ocy|Jlig|fr|Ecy|acute|grave|m(plies|a(cr|ginaryI))?))\n						  | (j(s(cr|ercy)|c(y|irc)|opf|ukcy|fr|math)|J(s(cr|ercy)|c(y|irc)|opf|ukcy|fr))\n						  | (k(scr|hcy|c(y|edil)|opf|jcy|fr|appa(v)?|green)|K(scr|c(y|edil)|Hcy|opf|Jcy|fr|appa))\n						  | (l(s(h|cr|trok|im(e|g)?|q(uo(r)?|b)|aquo)|h(ar(d|u(l)?)|blk)|n(sim|e(q(q)?)?|E|ap(prox)?)|c(y|ub|e(il|dil)|aron)|Barr|t(hree|c(c|ir)|imes|dot|quest|larr|r(i(e|f)?|Par))?|Har|o(ng(left(arrow|rightarrow)|rightarrow|mapsto)|times|z(enge|f)?|oparrow(left|right)|p(f|lus|ar)|w(ast|bar)|a(ng|rr)|brk)|d(sh|ca|quo(r)?|r(dhar|ushar))|ur(dshar|uhar)|jcy|par(lt)?|e(s(s(sim|dot|eq(qgtr|gtr)|approx|gtr)|cc|dot(o(r)?)?|g(es)?)?|q(slant|q)?|ft(harpoon(down|up)|threetimes|leftarrows|arrow(tail)?|right(squigarrow|harpoons|arrow(s)?))|g)?|v(nE|ertneqq)|f(isht|loor|r)|E(g)?|l(hard|corner|tri|arr)?|a(ng(d|le)?|cute|t(e(s)?|ail)?|p|emptyv|quo|rr(sim|hk|tl|pl|fs|lp|b(fs)?)?|gran|mbda)|r(har(d)?|corner|tri|arr|m)|g(E)?|m(idot|oust(ache)?)|b(arr|r(k(sl(d|u)|e)|ac(e|k))|brk)|A(tail|arr|rr))|L(s(h|cr|trok)|c(y|edil|aron)|t|o(ng(RightArrow|left(arrow|rightarrow)|rightarrow|Left(RightArrow|Arrow))|pf|wer(RightArrow|LeftArrow))|T|e(ss(Greater|SlantEqual|Tilde|EqualGreater|FullEqual|Less)|ft(Right(Vector|Arrow)|Ceiling|T(ee(Vector|Arrow)?|riangle(Bar|Equal)?)|Do(ubleBracket|wn(TeeVector|Vector(Bar)?))|Up(TeeVector|DownVector|Vector(Bar)?)|Vector(Bar)?|arrow|rightarrow|Floor|A(ngleBracket|rrow(RightArrow|Bar)?)))|Jcy|fr|l(eftarrow)?|a(ng|cute|placetrf|rr|mbda)|midot))\n						  | (M(scr|cy|inusPlus|opf|u|e(diumSpace|llintrf)|fr|ap)|m(s(cr|tpos)|ho|nplus|c(y|omma)|i(nus(d(u)?|b)?|cro|d(cir|dot|ast)?)|o(dels|pf)|dash|u(ltimap|map)?|p|easuredangle|DDot|fr|l(cp|dr)|a(cr|p(sto(down|up|left)?)?|l(t(ese)?|e)|rker)))\n						  | (n(s(hort(parallel|mid)|c(cue|e|r)?|im(e(q)?)?|u(cc(eq)?|p(set(eq(q)?)?|e|E)?|b(set(eq(q)?)?|e|E)?)|par|qsu(pe|be)|mid)|Rightarrow|h(par|arr|Arr)|G(t(v)?|g)|c(y|ong(dot)?|up|edil|a(p|ron))|t(ilde|lg|riangle(left(eq)?|right(eq)?)|gl)|i(s(d)?|v)?|o(t(ni(v(c|a|b))?|in(dot|v(c|a|b)|E)?)?|pf)|dash|u(m(sp|ero)?)?|jcy|p(olint|ar(sl|t|allel)?|r(cue|e(c(eq)?)?)?)|e(s(im|ear)|dot|quiv|ar(hk|r(ow)?)|xist(s)?|Arr)?|v(sim|infin|Harr|dash|Dash|l(t(rie)?|e|Arr)|ap|r(trie|Arr)|g(t|e))|fr|w(near|ar(hk|r(ow)?)|Arr)|V(dash|Dash)|l(sim|t(ri(e)?)?|dr|e(s(s)?|q(slant|q)?|ft(arrow|rightarrow))?|E|arr|Arr)|a(ng|cute|tur(al(s)?)?|p(id|os|prox|E)?|bla)|r(tri(e)?|ightarrow|arr(c|w)?|Arr)|g(sim|t(r)?|e(s|q(slant|q)?)?|E)|mid|L(t(v)?|eft(arrow|rightarrow)|l)|b(sp|ump(e)?))|N(scr|c(y|edil|aron)|tilde|o(nBreakingSpace|Break|t(R(ightTriangle(Bar|Equal)?|everseElement)|Greater(Greater|SlantEqual|Tilde|Equal|FullEqual|Less)?|S(u(cceeds(SlantEqual|Tilde|Equal)?|perset(Equal)?|bset(Equal)?)|quareSu(perset(Equal)?|bset(Equal)?))|Hump(DownHump|Equal)|Nested(GreaterGreater|LessLess)|C(ongruent|upCap)|Tilde(Tilde|Equal|FullEqual)?|DoubleVerticalBar|Precedes(SlantEqual|Equal)?|E(qual(Tilde)?|lement|xists)|VerticalBar|Le(ss(Greater|SlantEqual|Tilde|Equal|Less)?|ftTriangle(Bar|Equal)?))?|pf)|u|e(sted(GreaterGreater|LessLess)|wLine|gative(MediumSpace|Thi(nSpace|ckSpace)|VeryThinSpace))|Jcy|fr|acute))\n						  | (o(s(cr|ol|lash)|h(m|bar)|c(y|ir(c)?)|ti(lde|mes(as)?)|S|int|opf|d(sold|iv|ot|ash|blac)|uml|p(erp|lus|ar)|elig|vbar|f(cir|r)|l(c(ir|ross)|t|ine|arr)|a(st|cute)|r(slope|igof|or|d(er(of)?|f|m)?|v|arr)?|g(t|on|rave)|m(i(nus|cron|d)|ega|acr))|O(s(cr|lash)|c(y|irc)|ti(lde|mes)|opf|dblac|uml|penCurly(DoubleQuote|Quote)|ver(B(ar|rac(e|ket))|Parenthesis)|fr|Elig|acute|r|grave|m(icron|ega|acr)))\n						  | (p(s(cr|i)|h(i(v)?|one|mmat)|cy|i(tchfork|v)?|o(intint|und|pf)|uncsp|er(cnt|tenk|iod|p|mil)|fr|l(us(sim|cir|two|d(o|u)|e|acir|mn|b)?|an(ck(h)?|kv))|ar(s(im|l)|t|a(llel)?)?|r(sim|n(sim|E|ap)|cue|ime(s)?|o(d|p(to)?|f(surf|line|alar))|urel|e(c(sim|n(sim|eqq|approx)|curlyeq|eq|approx)?)?|E|ap)?|m)|P(s(cr|i)|hi|cy|i|o(incareplane|pf)|fr|lusMinus|artialD|r(ime|o(duct|portion(al)?)|ecedes(SlantEqual|Tilde|Equal)?)?))\n						  | (q(scr|int|opf|u(ot|est(eq)?|at(int|ernions))|prime|fr)|Q(scr|opf|UOT|fr))\n						  | (R(s(h|cr)|ho|c(y|edil|aron)|Barr|ight(Ceiling|T(ee(Vector|Arrow)?|riangle(Bar|Equal)?)|Do(ubleBracket|wn(TeeVector|Vector(Bar)?))|Up(TeeVector|DownVector|Vector(Bar)?)|Vector(Bar)?|arrow|Floor|A(ngleBracket|rrow(Bar|LeftArrow)?))|o(undImplies|pf)|uleDelayed|e(verse(UpEquilibrium|E(quilibrium|lement)))?|fr|EG|a(ng|cute|rr(tl)?)|rightarrow)|r(s(h|cr|q(uo(r)?|b)|aquo)|h(o(v)?|ar(d|u(l)?))|nmid|c(y|ub|e(il|dil)|aron)|Barr|t(hree|imes|ri(e|f|ltri)?)|i(singdotseq|ng|ght(squigarrow|harpoon(down|up)|threetimes|left(harpoons|arrows)|arrow(tail)?|rightarrows))|Har|o(times|p(f|lus|ar)|a(ng|rr)|brk)|d(sh|ca|quo(r)?|ldhar)|uluhar|p(polint|ar(gt)?)|e(ct|al(s|ine|part)?|g)|f(isht|loor|r)|l(har|arr|m)|a(ng(d|e|le)?|c(ute|e)|t(io(nals)?|ail)|dic|emptyv|quo|rr(sim|hk|c|tl|pl|fs|w|lp|ap|b(fs)?)?)|rarr|x|moust(ache)?|b(arr|r(k(sl(d|u)|e)|ac(e|k))|brk)|A(tail|arr|rr)))\n						  | (s(s(cr|tarf|etmn|mile)|h(y|c(hcy|y)|ort(parallel|mid)|arp)|c(sim|y|n(sim|E|ap)|cue|irc|polint|e(dil)?|E|a(p|ron))?|t(ar(f)?|r(ns|aight(phi|epsilon)))|i(gma(v|f)?|m(ne|dot|plus|e(q)?|l(E)?|rarr|g(E)?)?)|zlig|o(pf|ftcy|l(b(ar)?)?)|dot(e|b)?|u(ng|cc(sim|n(sim|eqq|approx)|curlyeq|eq|approx)?|p(s(im|u(p|b)|et(neq(q)?|eq(q)?)?)|hs(ol|ub)|1|n(e|E)|2|d(sub|ot)|3|plus|e(dot)?|E|larr|mult)?|m|b(s(im|u(p|b)|et(neq(q)?|eq(q)?)?)|n(e|E)|dot|plus|e(dot)?|E|rarr|mult)?)|pa(des(uit)?|r)|e(swar|ct|tm(n|inus)|ar(hk|r(ow)?)|xt|mi|Arr)|q(su(p(set(eq)?|e)?|b(set(eq)?|e)?)|c(up(s)?|ap(s)?)|u(f|ar(e|f))?)|fr(own)?|w(nwar|ar(hk|r(ow)?)|Arr)|larr|acute|rarr|m(t(e(s)?)?|i(d|le)|eparsl|a(shp|llsetminus))|bquo)|S(scr|hort(RightArrow|DownArrow|UpArrow|LeftArrow)|c(y|irc|edil|aron)?|tar|igma|H(cy|CHcy)|opf|u(c(hThat|ceeds(SlantEqual|Tilde|Equal)?)|p(set|erset(Equal)?)?|m|b(set(Equal)?)?)|OFTcy|q(uare(Su(perset(Equal)?|bset(Equal)?)|Intersection|Union)?|rt)|fr|acute|mallCircle))\n						  | (t(s(hcy|c(y|r)|trok)|h(i(nsp|ck(sim|approx))|orn|e(ta(sym|v)?|re(4|fore))|k(sim|ap))|c(y|edil|aron)|i(nt|lde|mes(d|b(ar)?)?)|o(sa|p(cir|f(ork)?|bot)?|ea)|dot|prime|elrec|fr|w(ixt|ohead(leftarrow|rightarrow))|a(u|rget)|r(i(sb|time|dot|plus|e|angle(down|q|left(eq)?|right(eq)?)?|minus)|pezium|ade)|brk)|T(s(cr|trok)|RADE|h(i(nSpace|ckSpace)|e(ta|refore))|c(y|edil|aron)|S(cy|Hcy)|ilde(Tilde|Equal|FullEqual)?|HORN|opf|fr|a(u|b)|ripleDot))\n						  | (u(scr|h(ar(l|r)|blk)|c(y|irc)|t(ilde|dot|ri(f)?)|Har|o(pf|gon)|d(har|arr|blac)|u(arr|ml)|p(si(h|lon)?|harpoon(left|right)|downarrow|uparrows|lus|arrow)|f(isht|r)|wangle|l(c(orn(er)?|rop)|tri)|a(cute|rr)|r(c(orn(er)?|rop)|tri|ing)|grave|m(l|acr)|br(cy|eve)|Arr)|U(scr|n(ion(Plus)?|der(B(ar|rac(e|ket))|Parenthesis))|c(y|irc)|tilde|o(pf|gon)|dblac|uml|p(si(lon)?|downarrow|Tee(Arrow)?|per(RightArrow|LeftArrow)|DownArrow|Equilibrium|arrow|Arrow(Bar|DownArrow)?)|fr|a(cute|rr(ocir)?)|ring|grave|macr|br(cy|eve)))\n						  | (v(s(cr|u(pn(e|E)|bn(e|E)))|nsu(p|b)|cy|Bar(v)?|zigzag|opf|dash|prop|e(e(eq|bar)?|llip|r(t|bar))|Dash|fr|ltri|a(ngrt|r(s(igma|u(psetneq(q)?|bsetneq(q)?))|nothing|t(heta|riangle(left|right))|p(hi|i|ropto)|epsilon|kappa|r(ho)?))|rtri|Arr)|V(scr|cy|opf|dash(l)?|e(e|r(yThinSpace|t(ical(Bar|Separator|Tilde|Line))?|bar))|Dash|vdash|fr|bar))\n						  | (w(scr|circ|opf|p|e(ierp|d(ge(q)?|bar))|fr|r(eath)?)|W(scr|circ|opf|edge|fr))\n						  | (X(scr|i|opf|fr)|x(s(cr|qcup)|h(arr|Arr)|nis|c(irc|up|ap)|i|o(time|dot|p(f|lus))|dtri|u(tri|plus)|vee|fr|wedge|l(arr|Arr)|r(arr|Arr)|map))\n						  | (y(scr|c(y|irc)|icy|opf|u(cy|ml)|en|fr|ac(y|ute))|Y(scr|c(y|irc)|opf|uml|Icy|Ucy|fr|acute|Acy))\n						  | (z(scr|hcy|c(y|aron)|igrarr|opf|dot|e(ta|etrf)|fr|w(nj|j)|acute)|Z(scr|c(y|aron)|Hcy|opf|dot|e(ta|roWidthSpace)|fr|acute))\n						)\n						(;)\n					",
          "name": "constant.character.entity.named.$2.html"
        },
        {
          "captures": {
            "1": {
              "name": "punctuation.definition.entity.html"
            },
            "3": {
              "name": "punctuation.definition.entity.html"
            }
          },
          "match": "(&)#[0-9]+(;)",
          "name": "constant.character.entity.numeric.decimal.html"
        },
        {
          "captures": {
            "1": {
              "name": "punctuation.definition.entity.html"
            },
            "3": {
              "name": "punctuation.definition.entity.html"
            }
          },
          "match": "(&)#[xX][0-9a-fA-F]+(;)",
          "name": "constant.character.entity.numeric.hexadecimal.html"
        },
        {
          "match": "&(?=[a-zA-Z0-9]+;)",
          "name": "invalid.illegal.ambiguous-ampersand.html"
        }
      ]
    },
    "heading": {
      "match": "(?:^|\\G)[ ]*(#{1,6}\\s+(.*?)(\\s+#{1,6})?\\s*)$",
      "captures": {
        "1": {
          "patterns": [
            {
              "match": "(#{6})\\s+(.*?)(?:\\s+(#+))?\\s*$",
              "name": "heading.6.markdown",
              "captures": {
                "1": {
                  "name": "punctuation.definition.heading.markdown"
                },
                "2": {
                  "name": "entity.name.section.markdown",
                  "patterns": [
                    {
                      "include": "text.html.markdown#inline"
                    },
                    {
                      "include": "text.html.derivative"
                    }
                  ]
                },
                "3": {
                  "name": "punctuation.definition.heading.markdown"
                }
              }
            },
            {
              "match": "(#{5})\\s+(.*?)(?:\\s+(#+))?\\s*$",
              "name": "heading.5.markdown",
              "captures": {
                "1": {
                  "name": "punctuation.definition.heading.markdown"
                },
                "2": {
                  "name": "entity.name.section.markdown",
                  "patterns": [
                    {
                      "include": "text.html.markdown#inline"
                    },
                    {
                      "include": "text.html.derivative"
                    }
                  ]
                },
                "3": {
                  "name": "punctuation.definition.heading.markdown"
                }
              }
            },
            {
              "match": "(#{4})\\s+(.*?)(?:\\s+(#+))?\\s*$",
              "name": "heading.4.markdown",
              "captures": {
                "1": {
                  "name": "punctuation.definition.heading.markdown"
                },
                "2": {
                  "name": "entity.name.section.markdown",
                  "patterns": [
                    {
                      "include": "text.html.markdown#inline"
                    },
                    {
                      "include": "text.html.derivative"
                    }
                  ]
                },
                "3": {
                  "name": "punctuation.definition.heading.markdown"
                }
              }
            },
            {
              "match": "(#{3})\\s+(.*?)(?:\\s+(#+))?\\s*$",
              "name": "heading.3.markdown",
              "captures": {
                "1": {
                  "name": "punctuation.definition.heading.markdown"
                },
                "2": {
                  "name": "entity.name.section.markdown",
                  "patterns": [
                    {
                      "include": "text.html.markdown#inline"
                    },
                    {
                      "include": "text.html.derivative"
                    }
                  ]
                },
                "3": {
                  "name": "punctuation.definition.heading.markdown"
                }
              }
            },
            {
              "match": "(#{2})\\s+(.*?)(?:\\s+(#+))?\\s*$",
              "name": "heading.2.markdown",
              "captures": {
                "1": {
                  "name": "punctuation.definition.heading.markdown"
                },
                "2": {
                  "name": "entity.name.section.markdown",
                  "patterns": [
                    {
                      "include": "text.html.markdown#inline"
                    },
                    {
                      "include": "text.html.derivative"
                    }
                  ]
                },
                "3": {
                  "name": "punctuation.definition.heading.markdown"
                }
              }
            },
            {
              "match": "(#{1})\\s+(.*?)(?:\\s+(#+))?\\s*$",
              "name": "heading.1.markdown",
              "captures": {
                "1": {
                  "name": "punctuation.definition.heading.markdown"
                },
                "2": {
                  "name": "entity.name.section.markdown",
                  "patterns": [
                    {
                      "include": "text.html.markdown#inline"
                    },
                    {
                      "include": "text.html.derivative"
                    }
                  ]
                },
                "3": {
                  "name": "punctuation.definition.heading.markdown"
                }
              }
            }
          ]
        }
      },
      "name": "markup.heading.markdown",
      "patterns": [
        {
          "include": "text.html.markdown#inline"
        }
      ]
    },
    "heading-setext": {
      "patterns": [
        {
          "match": "^(={3,})(?=[ \\t]*$\\n?)",
          "name": "markup.heading.setext.1.markdown"
        },
        {
          "match": "^(-{3,})(?=[ \\t]*$\\n?)",
          "name": "markup.heading.setext.2.markdown"
        }
      ]
    },
    "lists": {
      "patterns": [
        {
          "begin": "(^|\\G)([ ]*)([*+-])([ \\t])",
          "beginCaptures": {
            "3": {
              "name": "punctuation.definition.list.begin.markdown"
            }
          },
          "comment": "Currently does not support un-indented second lines.",
          "name": "markup.list.unnumbered.markdown",
          "patterns": [
            {
              "include": "#block"
            },
            {
              "include": "text.html.markdown#list_paragraph"
            }
          ],
          "while": "((^|\\G)([ ]*|\\t))|(^[ \\t]*$)"
        },
        {
          "begin": "(^|\\G)([ ]*)([0-9]+\\.)([ \\t])",
          "beginCaptures": {
            "3": {
              "name": "punctuation.definition.list.begin.markdown"
            }
          },
          "name": "markup.list.numbered.markdown",
          "patterns": [
            {
              "include": "#block"
            },
            {
              "include": "text.html.markdown#list_paragraph"
            }
          ],
          "while": "((^|\\G)([ ]*|\\t))|(^[ \\t]*$)"
        }
      ]
    },
    "paragraph": {
      "begin": "(^|\\G)[ ]*(?=\\S)",
      "name": "meta.paragraph.markdown",
      "patterns": [
        {
          "include": "#inline"
        },
        {
          "include": "text.html.markdown#inline"
        },
        {
          "include": "text.html.derivative"
        },
        {
          "include": "#heading-setext"
        }
      ],
      "while": "(^|\\G)((?=\\s*[-=]{3,}\\s*$)|[ ]{4,}(?=\\S))"
    },
    "blockquote": {
      "begin": "(^|\\G)[ ]*(>) ?",
      "captures": {
        "2": {
          "name": "punctuation.definition.quote.begin.markdown"
        }
      },
      "name": "markup.quote.markdown",
      "patterns": [
        {
          "include": "#block"
        }
      ],
      "while": "(^|\\G)\\s*(>) ?"
    }
  }
};
const mdcTMLanguage = grammar;

const logger = consola.withTag("@nuxt/content");
const resolveLang = (lang) => BUNDLED_LANGUAGES.find((l) => l.id === lang || l.aliases?.includes(lang));
const resolveTheme = (theme) => {
  if (!theme) {
    return;
  }
  if (typeof theme === "string") {
    theme = {
      default: theme
    };
  }
  return Object.entries(theme).reduce((acc, [key, value]) => {
    acc[key] = BUNDLED_THEMES.find((t) => t === value);
    return acc;
  }, {});
};
const useShikiHighlighter = createSingleton((opts) => {
  const { theme, preload } = opts || {};
  let promise;
  const getShikiHighlighter = () => {
    if (!promise) {
      promise = getHighlighter({
        theme: theme?.default || theme || "dark-plus",
        langs: [
          ...preload || [],
          "diff",
          "json",
          "js",
          "ts",
          "css",
          "shell",
          "html",
          "md",
          "yaml",
          "vue",
          {
            id: "md",
            scopeName: "text.markdown.mdc",
            path: "mdc.tmLanguage.json",
            aliases: ["markdown", "md", "mdc"],
            grammar: mdcTMLanguage
          }
        ]
      }).then((highlighter) => {
        const themes = Object.values(typeof theme === "string" ? { default: theme } : theme || {});
        if (themes.length) {
          return Promise.all(themes.map((theme2) => highlighter.loadTheme(theme2))).then(() => highlighter);
        }
        return highlighter;
      });
    }
    return promise;
  };
  const splitCodeToLines = (code) => {
    const lines = code.split(/\r\n|\r|\n/);
    return [...lines.map((line) => [{ content: line }])];
  };
  const getHighlightedTokens = async (code, lang, theme2) => {
    const highlighter = await getShikiHighlighter();
    code = code.replace(/\n+$/, "");
    lang = resolveLang(lang || "")?.id || lang;
    theme2 = resolveTheme(theme2 || "") || { default: highlighter.getTheme() };
    if (!lang) {
      return splitCodeToLines(code);
    }
    if (!highlighter.getLoadedLanguages().includes(lang)) {
      const languageRegistration = resolveLang(lang);
      if (languageRegistration) {
        await highlighter.loadLanguage(languageRegistration);
      } else {
        logger.warn(`Language '${lang}' is not supported by shiki. Skipping highlight.`);
        return splitCodeToLines(code);
      }
    }
    const newThemes = Object.values(theme2).filter((t) => !highlighter.getLoadedThemes().includes(t));
    if (newThemes.length) {
      await Promise.all(newThemes.map(highlighter.loadTheme));
    }
    const coloredTokens = Object.entries(theme2).map(([key, theme3]) => {
      const tokens = highlighter.codeToThemedTokens(code, lang, theme3, { includeExplanation: false });
      return {
        key,
        theme: theme3,
        tokens
      };
    });
    const highlightedCode = [];
    for (const line in coloredTokens[0].tokens) {
      highlightedCode[line] = coloredTokens.reduce((acc, color) => {
        return mergeLines({
          key: coloredTokens[0].key,
          tokens: acc
        }, {
          key: color.key,
          tokens: color.tokens[line]
        });
      }, coloredTokens[0].tokens[line]);
    }
    return highlightedCode;
  };
  const getHighlightedAST = async (code, lang, theme2, opts2) => {
    const lines = await getHighlightedTokens(code, lang, theme2);
    const { highlights = [], colorMap = {} } = opts2 || {};
    return lines.map((line, lineIndex) => {
      if (lineIndex !== lines.length - 1) {
        if (line.length === 0) {
          line.push({ content: "" });
        }
        line[line.length - 1].content += "\n";
      }
      return {
        type: "element",
        tag: "span",
        props: {
          class: ["line", highlights.includes(lineIndex + 1) ? "highlight" : ""].join(" ").trim(),
          line: lineIndex + 1
        },
        children: line.map(tokenSpan)
      };
    });
    function getColorProps(token) {
      if (!token.color) {
        return {};
      }
      if (typeof token.color === "string") {
        return { style: { color: token.color } };
      }
      const key = Object.values(token.color).join("");
      if (!colorMap[key]) {
        colorMap[key] = {
          colors: token.color,
          className: "ct-" + Math.random().toString(16).substring(2, 8)
          // hash(key)
        };
      }
      return { class: colorMap[key].className };
    }
    function tokenSpan(token) {
      return {
        type: "element",
        tag: "span",
        props: getColorProps(token),
        children: [{ type: "text", value: token.content }]
      };
    }
  };
  const getHighlightedCode = async (code, lang, theme2, opts2) => {
    const colorMap = opts2?.colorMap || {};
    const highlights = opts2?.highlights || [];
    const ast = await getHighlightedAST(code, lang, theme2, { colorMap, highlights });
    function renderNode(node) {
      if (node.type === "text") {
        return node.value.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      }
      const children = node.children.map(renderNode).join("");
      return `<${node.tag} class="${node.props.class}">${children}</${node.tag}>`;
    }
    return {
      code: ast.map(renderNode).join(""),
      styles: generateStyles(colorMap)
    };
  };
  const generateStyles = (colorMap) => {
    const colors = [];
    for (const colorClass of Object.values(colorMap)) {
      Object.entries(colorClass.colors).forEach(([variant, color]) => {
        if (variant === "default") {
          colors.unshift(`.${colorClass.className}{color:${color}}`);
        } else {
          colors.push(`.${variant} .${colorClass.className}{color:${color}}`);
        }
      });
    }
    return colors.join("\n");
  };
  return {
    getHighlightedTokens,
    getHighlightedAST,
    getHighlightedCode,
    generateStyles
  };
});
function mergeLines(line1, line2) {
  const mergedTokens = [];
  const getColors = (h, i) => typeof h.tokens[i].color === "string" ? { [h.key]: h.tokens[i].color } : h.tokens[i].color;
  const right = {
    key: line1.key,
    tokens: line1.tokens.slice()
  };
  const left = {
    key: line2.key,
    tokens: line2.tokens.slice()
  };
  let index = 0;
  while (index < right.tokens.length) {
    const rightToken = right.tokens[index];
    const leftToken = left.tokens[index];
    if (rightToken.content === leftToken.content) {
      mergedTokens.push({
        content: rightToken.content,
        color: {
          ...getColors(right, index),
          ...getColors(left, index)
        }
      });
      index += 1;
      continue;
    }
    if (rightToken.content.startsWith(leftToken.content)) {
      const nextRightToken = {
        ...rightToken,
        content: rightToken.content.slice(leftToken.content.length)
      };
      rightToken.content = leftToken.content;
      right.tokens.splice(index + 1, 0, nextRightToken);
      continue;
    }
    if (leftToken.content.startsWith(rightToken.content)) {
      const nextLeftToken = {
        ...leftToken,
        content: leftToken.content.slice(rightToken.content.length)
      };
      leftToken.content = rightToken.content;
      left.tokens.splice(index + 1, 0, nextLeftToken);
      continue;
    }
    throw new Error("Unexpected token");
  }
  return mergedTokens;
}

const shiki = defineTransformer({
  name: "highlight",
  extensions: [".md"],
  transform: async (content, options = {}) => {
    const shikiHighlighter = useShikiHighlighter(options);
    await Promise.all([
      highlight(content.body),
      highlight(content.excerpt)
    ]);
    return content;
    async function highlight(document) {
      if (!document) {
        return;
      }
      const colorMap = {};
      const codeBlocks = [];
      const inlineCodes = [];
      visit(
        document,
        (node) => node?.tag === "code" && node?.props.code || node?.tag === "code-inline" && (node.props?.lang || node.props?.language),
        (node) => {
          if (node?.tag === "code") {
            codeBlocks.push(node);
          } else if (node?.tag === "code-inline") {
            inlineCodes.push(node);
          }
        }
      );
      await Promise.all(codeBlocks.map((node) => highlightBlock(node, colorMap)));
      await Promise.all(inlineCodes.map((node) => highlightInline(node, colorMap)));
      if (Object.values(colorMap).length) {
        document?.children.push({
          type: "element",
          tag: "style",
          children: [{ type: "text", value: shikiHighlighter.generateStyles(colorMap) }]
        });
      }
    }
    async function highlightInline(node, colorMap) {
      const code = node.children[0].value;
      const lines = await shikiHighlighter.getHighlightedAST(code, node.props.lang || node.props.language, options.theme, { colorMap });
      node.children = lines[0].children;
      node.props = Object.assign(node.props || {}, { class: "colored" });
      return node;
    }
    async function highlightBlock(node, colorMap) {
      const { code, language: lang, highlights = [] } = node.props;
      const innerCodeNode = node.children[0].children[0];
      innerCodeNode.children = await shikiHighlighter.getHighlightedAST(code, lang, options.theme, { colorMap, highlights });
      return node;
    }
  }
});

const json = defineTransformer({
  name: "Json",
  extensions: [".json", ".json5"],
  parse: async (_id, content) => {
    let parsed;
    if (typeof content === "string") {
      if (_id.endsWith("json5")) {
        parsed = (await import('json5').then((m) => m.default || m)).parse(content);
      } else if (_id.endsWith("json")) {
        parsed = destr(content);
      }
    } else {
      parsed = content;
    }
    if (Array.isArray(parsed)) {
      console.warn(`JSON array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = {
        body: parsed
      };
    }
    return {
      ...parsed,
      _id,
      _type: "json"
    };
  }
});

const TRANSFORMERS = [
  csv,
  markdown,
  json,
  yaml,
  shiki,
  pathMeta
];
function getParser(ext, additionalTransformers = []) {
  let parser = additionalTransformers.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  if (!parser) {
    parser = TRANSFORMERS.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  }
  return parser;
}
function getTransformers(ext, additionalTransformers = []) {
  return [
    ...additionalTransformers.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform),
    ...TRANSFORMERS.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform)
  ];
}
async function transformContent(id, content, options = {}) {
  const { transformers = [] } = options;
  const file = { _id: id, body: content };
  const ext = extname(id);
  const parser = getParser(ext, transformers);
  if (!parser) {
    console.warn(`${ext} files are not supported, "${id}" falling back to raw content`);
    return file;
  }
  const parserOptions = options[camelCase(parser.name)] || {};
  const parsed = await parser.parse(file._id, file.body, parserOptions);
  const matchedTransformers = getTransformers(ext, transformers);
  const result = await matchedTransformers.reduce(async (prev, cur) => {
    const next = await prev || parsed;
    const transformOptions = options[camelCase(cur.name)];
    if (transformOptions === false) {
      return next;
    }
    return cur.transform(next, transformOptions || {});
  }, Promise.resolve(parsed));
  return result;
}

function makeIgnored(ignores, experimental = false) {
  ignores = ignores.map((e) => e);
  if (experimental) {
    const rxAll2 = ["/\\.", "/-", ...ignores].map((p) => new RegExp(p));
    return function isIgnored(key) {
      const path = "/" + key.replaceAll(":", "/");
      return rxAll2.some((rx) => rx.test(path));
    };
  }
  const rxAll = ["\\.", "-", ...ignores].map((p) => new RegExp(`^${p}|:${p}`));
  return function isIgnored(key) {
    return rxAll.some((rx) => rx.test(key));
  };
}

const isPreview = (event) => {
  const previewToken = getQuery$1(event).previewToken || getCookie(event, "previewToken");
  return !!previewToken;
};
const getPreview = (event) => {
  const key = getQuery$1(event).previewToken || getCookie(event, "previewToken");
  return { key };
};

async function getContentIndex(event) {
  const defaultLocale = useRuntimeConfig().content.defaultLocale;
  let contentIndex = await cacheStorage.getItem("content-index.json");
  if (!contentIndex) {
    const data = await getContentsList(event);
    contentIndex = data.reduce((acc, item) => {
      acc[item._path] = acc[item._path] || [];
      if (item._locale === defaultLocale) {
        acc[item._path].unshift(item._id);
      } else {
        acc[item._path].push(item._id);
      }
      return acc;
    }, {});
    await cacheStorage.setItem("content-index.json", contentIndex);
  }
  return contentIndex;
}
async function getIndexedContentsList(event, query) {
  const params = query.params();
  const path = params?.where?.find((wh) => wh._path)?._path;
  if (!isPreview(event) && (typeof path === "string" || path instanceof RegExp)) {
    const index = await getContentIndex(event);
    const keys = Object.keys(index).filter((key) => path.test ? path.test(key) : key === String(path)).flatMap((key) => index[key]);
    const contents = await Promise.all(keys.map((key) => getContent(event, key)));
    return contents;
  }
  return getContentsList(event);
}

const transformers = [];

const sourceStorage = prefixStorage(useStorage(), "content:source");
const cacheStorage = prefixStorage(useStorage(), "cache:content");
const cacheParsedStorage = prefixStorage(useStorage(), "cache:content:parsed");
const contentConfig = useRuntimeConfig().content;
const isIgnored = makeIgnored(contentConfig.ignores, contentConfig.experimental.advancedIgnoresPattern);
const invalidKeyCharacters = `'"?#/`.split("");
const contentIgnorePredicate = (key) => {
  if (key.startsWith("preview:") || isIgnored(key)) {
    return false;
  }
  if (invalidKeyCharacters.some((ik) => key.includes(ik))) {
    console.warn(`Ignoring [${key}]. File name should not contain any of the following characters: ${invalidKeyCharacters.join(", ")}`);
    return false;
  }
  return true;
};
const getContentsIds = async (event, prefix) => {
  let keys = [];
  {
    keys = await cacheParsedStorage.getKeys(prefix);
  }
  if (keys.length === 0) {
    keys = await sourceStorage.getKeys(prefix);
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewPrefix = `preview:${key}:${prefix || ""}`;
    const previewKeys = await sourceStorage.getKeys(previewPrefix);
    if (previewKeys.length) {
      const keysSet = new Set(keys);
      await Promise.all(
        previewKeys.map(async (key2) => {
          const meta = await sourceStorage.getMeta(key2);
          if (meta?.__deleted) {
            keysSet.delete(key2.substring(previewPrefix.length));
          } else {
            keysSet.add(key2.substring(previewPrefix.length));
          }
        })
      );
      keys = Array.from(keysSet);
    }
  }
  return keys.filter(contentIgnorePredicate);
};
const getContentsList = async (event, prefix) => {
  const keys = await getContentsIds(event, prefix);
  const contents = await Promise.all(keys.map((key) => getContent(event, key)));
  return contents;
};
const getContent = async (event, id) => {
  const contentId = id;
  if (!contentIgnorePredicate(id)) {
    return { _id: contentId, body: null };
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewId = `preview:${key}:${id}`;
    const draft = await sourceStorage.getItem(previewId);
    if (draft) {
      id = previewId;
    }
  }
  const cached = await cacheParsedStorage.getItem(id);
  if (cached) {
    return cached.parsed;
  }
  const meta = await sourceStorage.getMeta(id);
  const mtime = meta.mtime;
  const size = meta.size || 0;
  const hash$1 = hash({
    // Last modified time
    mtime,
    // File size
    size,
    // Add Content version to the hash, to revalidate the cache on content update
    version: contentConfig.cacheVersion,
    integrity: contentConfig.cacheIntegrity
  });
  if (cached?.hash === hash$1) {
    return cached.parsed;
  }
  const body = await sourceStorage.getItem(id);
  if (body === null) {
    return { _id: contentId, body: null };
  }
  const parsed = await parseContent(contentId, body);
  await cacheParsedStorage.setItem(id, { parsed, hash: hash$1 }).catch(() => {
  });
  return parsed;
};
async function parseContent(id, content, opts = {}) {
  const nitroApp = useNitroApp();
  const options = defu(
    opts,
    {
      markdown: contentConfig.markdown,
      csv: contentConfig.csv,
      yaml: contentConfig.yaml,
      highlight: contentConfig.highlight,
      transformers: transformers,
      pathMeta: {
        defaultLocale: contentConfig.defaultLocale,
        locales: contentConfig.locales
      }
    }
  );
  const file = { _id: id, body: content };
  await nitroApp.hooks.callHook("content:file:beforeParse", file);
  const result = await transformContent(id, file.body, options);
  await nitroApp.hooks.callHook("content:file:afterParse", result);
  return result;
}
const createServerQueryFetch = (event) => (query) => {
  return createPipelineFetcher(() => getIndexedContentsList(event, query))(query);
};
function serverQueryContent(event, query, ...pathParts) {
  const queryBuilder = createQuery(createServerQueryFetch(event), typeof query !== "string" ? query || {} : {});
  let path;
  if (typeof query === "string") {
    path = withLeadingSlash(joinURL(query, ...pathParts));
  }
  const originalParamsFn = queryBuilder.params;
  queryBuilder.params = () => {
    const params = originalParamsFn();
    if (path) {
      params.where = params.where || [];
      if (params.first && (params.where || []).length === 0) {
        params.where.push({ _path: withoutTrailingSlash(path) });
      } else {
        params.where.push({ _path: new RegExp(`^${path.replace(/[-[\]{}()*+.,^$\s/]/g, "\\$&")}`) });
      }
    }
    if (!params.sort?.length) {
      params.sort = [{ _file: 1, $numeric: true }];
    }
    if (contentConfig.locales.length) {
      const queryLocale = params.where?.find((w) => w._locale)?._locale;
      if (!queryLocale) {
        params.where = params.where || [];
        params.where.push({ _locale: contentConfig.defaultLocale });
      }
    }
    return params;
  };
  return queryBuilder;
}

function jsonParse(value) {
  return JSON.parse(value, regExpReviver);
}
function regExpReviver(_key, value) {
  const withOperator = typeof value === "string" && value.match(/^--([A-Z]+) (.+)$/) || [];
  if (withOperator[1] === "REGEX") {
    const regex = withOperator[2].match(/\/(.*)\/([dgimsuy]*)$/);
    return regex ? new RegExp(regex[1], regex[2] || "") : value;
  }
  return value;
}

const parseJSONQueryParams = (body) => {
  try {
    return jsonParse(body);
  } catch (e) {
    throw createError({ statusCode: 400, message: "Invalid _params query" });
  }
};
const decodeQueryParams = (encoded) => {
  encoded = encoded.replace(/\//g, "");
  encoded = encoded.replace(/-/g, "+").replace(/_/g, "/");
  encoded = encoded.padEnd(encoded.length + (4 - encoded.length % 4) % 4, "=");
  return parseJSONQueryParams(typeof Buffer !== "undefined" ? Buffer.from(encoded, "base64").toString() : atob(encoded));
};
const memory = {};
const getContentQuery = (event) => {
  const { params } = event.context.params || {};
  if (params) {
    return decodeQueryParams(params.replace(/.json$/, ""));
  }
  const qid = event.context.params?.qid?.replace(/.json$/, "");
  const query = getQuery$1(event) || {};
  if (qid && query._params) {
    memory[qid] = parseJSONQueryParams(decodeURIComponent(query._params));
    if (memory[qid].where && !Array.isArray(memory[qid].where)) {
      memory[qid].where = [memory[qid].where];
    }
    return memory[qid];
  }
  if (qid && memory[qid]) {
    return memory[qid];
  }
  if (query._params) {
    return parseJSONQueryParams(decodeURIComponent(query._params));
  }
  if (typeof query.only === "string" && query.only.includes(",")) {
    query.only = query.only.split(",").map((s) => s.trim());
  }
  if (typeof query.without === "string" && query.without.includes(",")) {
    query.without = query.without.split(",").map((s) => s.trim());
  }
  const where = query.where || {};
  for (const key of ["draft", "partial", "empty"]) {
    if (query[key] && ["true", "false"].includes(query[key])) {
      where[key] = query[key] === "true";
      delete query[key];
    }
  }
  if (query.sort) {
    query.sort = String(query.sort).split(",").map((s) => {
      const [key, order] = s.split(":");
      return [key, +order];
    });
  }
  const reservedKeys = ["partial", "draft", "only", "without", "where", "sort", "limit", "skip"];
  for (const key of Object.keys(query)) {
    if (reservedKeys.includes(key)) {
      continue;
    }
    query.where = query.where || {};
    query.where[key] = query[key];
  }
  if (Object.keys(where).length > 0) {
    query.where = [where];
  } else {
    delete query.where;
  }
  return query;
};

const _Rv2xRj = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  if (query.first) {
    const content = await serverQueryContent(event, query).findOne();
    const path = content?._path || query.where?.find((w) => w._path)?._path;
    if (path) {
      const _dir = await serverQueryContent(event).where({ _path: join(path, "_dir") }).without("_").findOne();
      if (_dir && !Array.isArray(_dir)) {
        return {
          _path: path,
          ...content || {},
          _dir
        };
      }
    }
    if (!content) {
      throw createError({
        statusMessage: "Document not found!",
        statusCode: 404,
        data: {
          description: "Could not find document for the given query.",
          query
        }
      });
    }
    return content;
  }
  const contents = await serverQueryContent(event, query).find();
  return contents;
});

const _7SxmKf = defineEventHandler(async (event) => {
  const { content } = useRuntimeConfig();
  const now = Date.now();
  const contents = await serverQueryContent(event).find();
  await getContentIndex(event);
  const navigation = await $fetch(`${content.api.baseURL}/navigation`);
  await cacheStorage.setItem("content-navigation.json", navigation);
  return {
    generatedAt: now,
    generateTime: Date.now() - now,
    contents,
    navigation
  };
});

function createNav(contents, configs) {
  const { navigation } = useRuntimeConfig().public.content;
  const pickNavigationFields = (content) => ({
    ...pick(["title", ...navigation.fields])(content),
    ...isObject(content?.navigation) ? content.navigation : {}
  });
  const nav = contents.sort((a, b) => a._path.localeCompare(b._path)).reduce((nav2, content) => {
    const parts = content._path.substring(1).split("/");
    const idParts = content._id.split(":").slice(1);
    const isIndex = !!idParts[idParts.length - 1].match(/([1-9][0-9]*\.)?index.md/g);
    const getNavItem = (content2) => ({
      title: content2.title,
      _path: content2._path,
      _file: content2._file,
      children: [],
      ...pickNavigationFields(content2),
      ...content2._draft ? { _draft: true } : {}
    });
    const navItem = getNavItem(content);
    if (isIndex) {
      const dirConfig = configs[navItem._path];
      if (typeof dirConfig?.navigation !== "undefined" && !dirConfig?.navigation) {
        return nav2;
      }
      if (content._path !== "/") {
        const indexItem = getNavItem(content);
        navItem.children.push(indexItem);
      }
      Object.assign(
        navItem,
        pickNavigationFields(dirConfig)
      );
    }
    if (parts.length === 1) {
      nav2.push(navItem);
      return nav2;
    }
    const siblings = parts.slice(0, -1).reduce((nodes, part, i) => {
      const currentPathPart = "/" + parts.slice(0, i + 1).join("/");
      const conf = configs[currentPathPart];
      if (typeof conf?.navigation !== "undefined" && !conf.navigation) {
        return [];
      }
      let parent = nodes.find((n) => n._path === currentPathPart);
      if (!parent) {
        parent = {
          title: generateTitle(part),
          _path: currentPathPart,
          _file: content._file,
          children: [],
          ...pickNavigationFields(conf)
        };
        nodes.push(parent);
      }
      return parent.children;
    }, nav2);
    siblings.push(navItem);
    return nav2;
  }, []);
  return sortAndClear(nav);
}
const collator = new Intl.Collator(void 0, { numeric: true, sensitivity: "base" });
function sortAndClear(nav) {
  const sorted = nav.sort((a, b) => collator.compare(a._file, b._file));
  for (const item of sorted) {
    if (item.children?.length) {
      sortAndClear(item.children);
    } else {
      delete item.children;
    }
    delete item._file;
  }
  return nav;
}
function pick(keys) {
  return (obj) => {
    obj = obj || {};
    if (keys && keys.length) {
      return keys.filter((key) => typeof obj[key] !== "undefined").reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
    }
    return obj;
  };
}
function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

const _yH5w93 = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  if (!isPreview(event) && Object.keys(query).length === 0) {
    const cache = await cacheStorage.getItem("content-navigation.json");
    if (cache) {
      return cache;
    }
  }
  const contents = await serverQueryContent(event, query).where({
    /**
     * Partial contents are not included in the navigation
     * A partial content is a content that has `_` prefix in its path
     */
    _partial: false,
    /**
     * Exclude any pages which have opted out of navigation via frontmatter.
     */
    navigation: {
      $ne: false
    }
  }).find();
  const dirConfigs = await serverQueryContent(event).where({ _path: /\/_dir$/i, _partial: true }).find();
  const configs = dirConfigs.reduce((configs2, conf) => {
    if (conf.title?.toLowerCase() === "dir") {
      conf.title = void 0;
    }
    const key = conf._path.split("/").slice(0, -1).join("/") || "/";
    configs2[key] = {
      ...conf,
      // Extract meta from body. (non MD files)
      ...conf.body
    };
    return configs2;
  }, {});
  return createNav(contents, configs);
});

const _lazy_hV2ohQ = () => import('../pageview.mjs');
const _lazy_ecNWhc = () => import('../handlers/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/api/pageview', handler: _lazy_hV2ohQ, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_ecNWhc, lazy: true, middleware: false, method: undefined },
  { route: '/__i18n__/precompile', handler: _1ZWmrG, lazy: false, middleware: false, method: "post" },
  { route: '/api/_content/query/:qid/**:params', handler: _Rv2xRj, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query/:qid', handler: _Rv2xRj, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query', handler: _Rv2xRj, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/cache.1685257058890.json', handler: _7SxmKf, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid/**:params', handler: _yH5w93, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid', handler: _yH5w93, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation', handler: _yH5w93, lazy: false, middleware: false, method: "get" },
  { route: '/**', handler: _lazy_ecNWhc, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: $fetch });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection] " + err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException] " + err)
  );
}
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
