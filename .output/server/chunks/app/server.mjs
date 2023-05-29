import { getCurrentInstance, version, toRef, isRef, inject, defineComponent, h, onUnmounted, Suspense, nextTick, Transition, computed, provide, reactive, shallowRef, ref, watch, unref, useSSRContext, watchEffect, Fragment as Fragment$1, withCtx, createVNode, createApp, shallowReactive, markRaw, effectScope, isReactive, toRaw, getCurrentScope, onScopeDispose, readonly, onErrorCaptured, onServerPrefetch, resolveDynamicComponent, defineAsyncComponent, toRefs, isReadonly, Text, isShallow } from 'vue';
import { $fetch } from 'ofetch';
import { createHooks } from 'hookable';
import { getContext, executeAsync } from 'unctx';
import { sendRedirect, createError as createError$1, setResponseStatus as setResponseStatus$1 } from 'h3';
import { renderSSRHead } from '@unhead/ssr';
import { composableNames, getActiveHead, createServerHead as createServerHead$1 } from 'unhead';
import { defineHeadPlugin } from '@unhead/shared';
import { useRouter as useRouter$1, useRoute as useRoute$1, RouterView, createMemoryHistory, createRouter } from 'vue-router';
import { hasProtocol, parseURL, joinURL, isEqual } from 'ufo';
import { CoreWarnCodes, CompileErrorCodes, registerMessageResolver, resolveValue, registerLocaleFallbacker, fallbackWithLocaleChain, setDevToolsHook, createCompileError, DEFAULT_LOCALE as DEFAULT_LOCALE$1, updateFallbackLocale, NUMBER_FORMAT_OPTIONS_KEYS, DATETIME_FORMAT_OPTIONS_KEYS, setFallbackContext, createCoreContext, clearDateTimeFormat, clearNumberFormat, setAdditionalMeta, getFallbackContext, NOT_REOSLVED, parseTranslateArgs, translate, MISSING_RESOLVE_VALUE, parseDateTimeArgs, datetime, parseNumberArgs, number } from '@intlify/core-base';
import { parse, serialize } from 'cookie-es';
import isHTTPS from 'is-https';
import { anu } from 'anu-vue';
import { ssrRenderComponent, ssrRenderSuspense, ssrRenderVNode } from 'vue/server-renderer';
import { defu } from 'defu';
import { a as useRuntimeConfig$1 } from '../nitro/node-server.mjs';
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

const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
const nuxtAppCtx = /* @__PURE__ */ getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.4.0";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      data: shallowReactive({}),
      state: shallowReactive({}),
      _errors: shallowReactive({}),
      ...{ serverRendered: true }
    }),
    static: {
      data: {}
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    _payloadRevivers: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    async function contextCaller(hooks, args) {
      for (const hook of hooks) {
        await nuxtAppCtx.call(nuxtApp, () => hook(...args));
      }
    }
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter$1(nuxtApp, $name, value);
    defineGetter$1(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter$1(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter$1(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
    }
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext._payloadReducers = {};
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      if (prop in target) {
        return target[prop];
      }
      return target.public[prop];
    },
    set(target, prop, value) {
      {
        return false;
      }
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide: provide2 } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide2 && typeof provide2 === "object") {
    for (const key in provide2) {
      nuxtApp.provide(key, provide2[key]);
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  for (const plugin of plugins2) {
    await applyPlugin(nuxtApp, plugin);
  }
}
function normalizePlugins(_plugins2) {
  const plugins2 = [];
  for (const plugin of _plugins2) {
    if (typeof plugin !== "function") {
      continue;
    }
    let _plugin = plugin;
    if (plugin.length > 1) {
      _plugin = (nuxtApp) => plugin(nuxtApp, nuxtApp.provide);
    }
    plugins2.push(_plugin);
  }
  plugins2.sort((a, b) => {
    var _a, _b;
    return (((_a = a.meta) == null ? void 0 : _a.order) || orderMap.default) - (((_b = b.meta) == null ? void 0 : _b.order) || orderMap.default);
  });
  return plugins2;
}
const orderMap = {
  pre: -20,
  default: 0,
  post: 20
};
function defineNuxtPlugin(plugin, meta) {
  var _a;
  if (typeof plugin === "function") {
    return /* @__PURE__ */ defineNuxtPlugin({ setup: plugin }, meta);
  }
  const wrapper = (nuxtApp) => {
    if (plugin.hooks) {
      nuxtApp.hooks.addHooks(plugin.hooks);
    }
    if (plugin.setup) {
      return plugin.setup(nuxtApp);
    }
  };
  wrapper.meta = {
    name: (meta == null ? void 0 : meta.name) || plugin.name || ((_a = plugin.setup) == null ? void 0 : _a.name),
    order: (meta == null ? void 0 : meta.order) || plugin.order || orderMap[plugin.enforce || "default"] || orderMap.default
  };
  wrapper[NuxtPluginIndicator] = true;
  return wrapper;
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxtAppCtx.callAsync(nuxt, fn);
  }
}
function useNuxtApp() {
  const nuxtAppInstance = nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    const vm = getCurrentInstance();
    if (!vm) {
      throw new Error("nuxt instance unavailable");
    }
    return vm.appContext.app.$nuxt;
  }
  return nuxtAppInstance;
}
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter$1(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const isVue2 = false;
const isVue3 = true;
/*!
  * pinia v2.0.34
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
let activePinia;
const setActivePinia = (pinia) => activePinia = pinia;
const piniaSymbol = (
  /* istanbul ignore next */
  Symbol()
);
function isPlainObject$1(o) {
  return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
}
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
function createPinia() {
  const scope = effectScope(true);
  const state = scope.run(() => ref({}));
  let _p = [];
  let toBeInstalled = [];
  const pinia = markRaw({
    install(app) {
      setActivePinia(pinia);
      {
        pinia._a = app;
        app.provide(piniaSymbol, pinia);
        app.config.globalProperties.$pinia = pinia;
        toBeInstalled.forEach((plugin) => _p.push(plugin));
        toBeInstalled = [];
      }
    },
    use(plugin) {
      if (!this._a && !isVue2) {
        toBeInstalled.push(plugin);
      } else {
        _p.push(plugin);
      }
      return this;
    },
    _p,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: scope,
    _s: /* @__PURE__ */ new Map(),
    state
  });
  return pinia;
}
const noop$1 = () => {
};
function addSubscription(subscriptions, callback, detached, onCleanup = noop$1) {
  subscriptions.push(callback);
  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback);
    if (idx > -1) {
      subscriptions.splice(idx, 1);
      onCleanup();
    }
  };
  if (!detached && getCurrentScope()) {
    onScopeDispose(removeSubscription);
  }
  return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.slice().forEach((callback) => {
    callback(...args);
  });
}
function mergeReactiveObjects(target, patchToApply) {
  if (target instanceof Map && patchToApply instanceof Map) {
    patchToApply.forEach((value, key) => target.set(key, value));
  }
  if (target instanceof Set && patchToApply instanceof Set) {
    patchToApply.forEach(target.add, target);
  }
  for (const key in patchToApply) {
    if (!patchToApply.hasOwnProperty(key))
      continue;
    const subPatch = patchToApply[key];
    const targetValue = target[key];
    if (isPlainObject$1(targetValue) && isPlainObject$1(subPatch) && target.hasOwnProperty(key) && !isRef(subPatch) && !isReactive(subPatch)) {
      target[key] = mergeReactiveObjects(targetValue, subPatch);
    } else {
      target[key] = subPatch;
    }
  }
  return target;
}
const skipHydrateSymbol = (
  /* istanbul ignore next */
  Symbol()
);
function shouldHydrate(obj) {
  return !isPlainObject$1(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
const { assign: assign$2 } = Object;
function isComputed(o) {
  return !!(isRef(o) && o.effect);
}
function createOptionsStore(id, options, pinia, hot) {
  const { state, actions, getters } = options;
  const initialState = pinia.state.value[id];
  let store;
  function setup() {
    if (!initialState && (!("production" !== "production") )) {
      {
        pinia.state.value[id] = state ? state() : {};
      }
    }
    const localState = toRefs(pinia.state.value[id]);
    return assign$2(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
      computedGetters[name] = markRaw(computed(() => {
        setActivePinia(pinia);
        const store2 = pinia._s.get(id);
        return getters[name].call(store2, store2);
      }));
      return computedGetters;
    }, {}));
  }
  store = createSetupStore(id, setup, options, pinia, hot, true);
  return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
  let scope;
  const optionsForPlugin = assign$2({ actions: {} }, options);
  const $subscribeOptions = {
    deep: true
    // flush: 'post',
  };
  let isListening;
  let isSyncListening;
  let subscriptions = markRaw([]);
  let actionSubscriptions = markRaw([]);
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  if (!isOptionsStore && !initialState && (!("production" !== "production") )) {
    {
      pinia.state.value[$id] = {};
    }
  }
  ref({});
  let activeListener;
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = isSyncListening = false;
    if (typeof partialStateOrMutator === "function") {
      partialStateOrMutator(pinia.state.value[$id]);
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents
      };
    } else {
      mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      };
    }
    const myListenerId = activeListener = Symbol();
    nextTick().then(() => {
      if (activeListener === myListenerId) {
        isListening = true;
      }
    });
    isSyncListening = true;
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
  }
  const $reset = isOptionsStore ? function $reset2() {
    const { state } = options;
    const newState = state ? state() : {};
    this.$patch(($state) => {
      assign$2($state, newState);
    });
  } : (
    /* istanbul ignore next */
    noop$1
  );
  function $dispose() {
    scope.stop();
    subscriptions = [];
    actionSubscriptions = [];
    pinia._s.delete($id);
  }
  function wrapAction(name, action) {
    return function() {
      setActivePinia(pinia);
      const args = Array.from(arguments);
      const afterCallbackList = [];
      const onErrorCallbackList = [];
      function after(callback) {
        afterCallbackList.push(callback);
      }
      function onError(callback) {
        onErrorCallbackList.push(callback);
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name,
        store,
        after,
        onError
      });
      let ret;
      try {
        ret = action.apply(this && this.$id === $id ? this : store, args);
      } catch (error) {
        triggerSubscriptions(onErrorCallbackList, error);
        throw error;
      }
      if (ret instanceof Promise) {
        return ret.then((value) => {
          triggerSubscriptions(afterCallbackList, value);
          return value;
        }).catch((error) => {
          triggerSubscriptions(onErrorCallbackList, error);
          return Promise.reject(error);
        });
      }
      triggerSubscriptions(afterCallbackList, ret);
      return ret;
    };
  }
  const partialStore = {
    _p: pinia,
    // _s: scope,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
      const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
        if (options2.flush === "sync" ? isSyncListening : isListening) {
          callback({
            storeId: $id,
            type: MutationType.direct,
            events: debuggerEvents
          }, state);
        }
      }, assign$2({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose
  };
  const store = reactive(partialStore);
  pinia._s.set($id, store);
  const setupStore = pinia._e.run(() => {
    scope = effectScope();
    return scope.run(() => setup());
  });
  for (const key in setupStore) {
    const prop = setupStore[key];
    if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
      if (!isOptionsStore) {
        if (initialState && shouldHydrate(prop)) {
          if (isRef(prop)) {
            prop.value = initialState[key];
          } else {
            mergeReactiveObjects(prop, initialState[key]);
          }
        }
        {
          pinia.state.value[$id][key] = prop;
        }
      }
    } else if (typeof prop === "function") {
      const actionValue = wrapAction(key, prop);
      {
        setupStore[key] = actionValue;
      }
      optionsForPlugin.actions[key] = prop;
    } else ;
  }
  {
    assign$2(store, setupStore);
    assign$2(toRaw(store), setupStore);
  }
  Object.defineProperty(store, "$state", {
    get: () => pinia.state.value[$id],
    set: (state) => {
      $patch(($state) => {
        assign$2($state, state);
      });
    }
  });
  pinia._p.forEach((extender) => {
    {
      assign$2(store, scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      })));
    }
  });
  if (initialState && isOptionsStore && options.hydrate) {
    options.hydrate(store.$state, initialState);
  }
  isListening = true;
  isSyncListening = true;
  return store;
}
function defineStore(idOrOptions, setup, setupOptions) {
  let id;
  let options;
  const isSetupStore = typeof setup === "function";
  if (typeof idOrOptions === "string") {
    id = idOrOptions;
    options = isSetupStore ? setupOptions : setup;
  } else {
    options = idOrOptions;
    id = idOrOptions.id;
  }
  function useStore(pinia, hot) {
    const currentInstance = getCurrentInstance();
    pinia = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (pinia) || currentInstance && inject(piniaSymbol, null);
    if (pinia)
      setActivePinia(pinia);
    pinia = activePinia;
    if (!pinia._s.has(id)) {
      if (isSetupStore) {
        createSetupStore(id, setup, options, pinia);
      } else {
        createOptionsStore(id, options, pinia);
      }
    }
    const store = pinia._s.get(id);
    return store;
  }
  useStore.$id = id;
  return useStore;
}
function resolveUnref$1(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2, lastKey = "") {
  if (ref2 instanceof Promise)
    return ref2;
  const root = resolveUnref$1(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}
const Vue3 = version.startsWith("3");
const headSymbol = "usehead";
function injectHead() {
  return getCurrentInstance() && inject(headSymbol) || getActiveHead();
}
function vueInstall(head) {
  const plugin = {
    install(app) {
      if (Vue3) {
        app.config.globalProperties.$unhead = head;
        app.config.globalProperties.$head = head;
        app.provide(headSymbol, head);
      }
    }
  };
  return plugin.install;
}
function createServerHead(options = {}) {
  const head = createServerHead$1({
    ...options,
    plugins: [
      VueReactiveUseHeadPlugin(),
      ...(options == null ? void 0 : options.plugins) || []
    ]
  });
  head.install = vueInstall(head);
  return head;
}
function VueReactiveUseHeadPlugin() {
  return defineHeadPlugin({
    hooks: {
      "entries:resolve": function(ctx) {
        for (const entry2 of ctx.entries)
          entry2.resolvedInput = resolveUnrefHeadInput(entry2.input);
      }
    }
  });
}
function clientUseHead(input, options = {}) {
  const head = injectHead();
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry2 = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry2.patch(e);
  });
  getCurrentInstance();
  return entry2;
}
function serverUseHead(input, options = {}) {
  const head = injectHead();
  return head.push(input, options);
}
function useHead(input, options = {}) {
  var _a;
  const head = injectHead();
  if (head) {
    const isBrowser = !!((_a = head.resolvedOptions) == null ? void 0 : _a.document);
    if (options.mode === "server" && isBrowser || options.mode === "client" && !isBrowser)
      return;
    return isBrowser ? clientUseHead(input, options) : serverUseHead(input, options);
  }
}
const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = "$s" + _key;
  const nuxt = useNuxtApp();
  const state = toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
function useRequestHeaders(include) {
  var _a;
  const headers = ((_a = useNuxtApp().ssrContext) == null ? void 0 : _a.event.node.req.headers) ?? {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.map((key) => key.toLowerCase()).filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
function useRequestFetch() {
  var _a;
  const event = (_a = useNuxtApp().ssrContext) == null ? void 0 : _a.event;
  return (event == null ? void 0 : event.$fetch) || globalThis.$fetch;
}
function setResponseStatus(arg1, arg2, arg3) {
  if (arg1 && typeof arg1 !== "number") {
    return setResponseStatus$1(arg1, arg2, arg3);
  }
  return setResponseStatus$1(useRequestEvent(), arg1, arg2);
}
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (getCurrentInstance()) {
    return inject("_route", useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
const defineNuxtRouteMiddleware = (middleware) => middleware;
const addRouteMiddleware = (name, middleware, options = {}) => {
  const nuxtApp = useNuxtApp();
  const global2 = options.global || typeof name !== "string";
  const mw = typeof name !== "string" ? name : middleware;
  if (!mw) {
    console.warn("[nuxt] No route middleware passed to `addRouteMiddleware`.", name);
    return;
  }
  if (global2) {
    nuxtApp._middleware.global.push(mw);
  } else {
    nuxtApp._middleware.named[name] = mw;
  }
};
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : to.path || "/";
  const isExternal = (options == null ? void 0 : options.external) || hasProtocol(toPath, { acceptRelative: true });
  if (isExternal && !(options == null ? void 0 : options.external)) {
    throw new Error("Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`.");
  }
  if (isExternal && parseURL(toPath).protocol === "script:") {
    throw new Error("Cannot navigate to an URL with script protocol.");
  }
  const router = useRouter();
  {
    const nuxtApp = useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      if (isProcessingMiddleware() && !isExternal) {
        setResponseStatus(nuxtApp.ssrContext.event, (options == null ? void 0 : options.redirectCode) || 302);
        return to;
      }
      const redirectLocation = isExternal ? toPath : joinURL(useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => sendRedirect(nuxtApp.ssrContext.event, redirectLocation, (options == null ? void 0 : options.redirectCode) || 302));
    }
  }
  if (isExternal) {
    if (options == null ? void 0 : options.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = useNuxtApp();
    nuxtApp.callHook("app:error", err);
    const error = useError();
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
const isNuxtError = (err) => !!(err && typeof err === "object" && "__nuxt_error" in err);
const createError = (err) => {
  const _err = createError$1(err);
  _err.__nuxt_error = true;
  return _err;
};
const appHead = { "meta": [{ "charset": "utf-8" }, { "name": "viewport", "content": "width=device-width, initial-scale=1" }, { "name": "description", "content": "Topverse website" }, { "name": "apple-mobile-web-app-status-bar-style", "content": "black-translucent" }], "link": [{ "rel": "icon", "href": "/favicon.ico", "sizes": "any" }, { "rel": "icon", "type": "image/svg+xml", "href": "/topverse.icon.svg" }, { "rel": "apple-touch-icon", "href": "/apple-touch-icon.png" }], "style": [], "script": [], "noscript": [], "viewport": "width=device-width,initial-scale=1" };
const appLayoutTransition = false;
const appPageTransition = false;
const appKeepalive = false;
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce;
  }
}
const plugin_vue3_vV5j15melp = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  nuxtApp.vueApp.use(pinia);
  setActivePinia(pinia);
  {
    nuxtApp.payload.pinia = pinia.state.value;
  }
  return {
    provide: {
      pinia
    }
  };
});
const reducers = {
  NuxtError: (data) => isNuxtError(data) && data.toJSON(),
  EmptyShallowRef: (data) => isRef(data) && isShallow(data) && !data.value && JSON.stringify(data.value),
  EmptyRef: (data) => isRef(data) && !data.value && JSON.stringify(data.value),
  ShallowRef: (data) => isRef(data) && isShallow(data) && data.value,
  ShallowReactive: (data) => isReactive(data) && isShallow(data) && toRaw(data),
  Ref: (data) => isRef(data) && data.value,
  Reactive: (data) => isReactive(data) && toRaw(data)
};
const revive_payload_server_SU1PJ9JJuo = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const reducer in reducers) {
      definePayloadReducer(reducer, reducers[reducer]);
    }
  }
});
const components = {
  Carousel: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/Carousel-9c86bebd.mjs'
    /* webpackChunkName: "components/carousel" */
  ).then((c) => c.default || c)),
  Counter: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/Counter-8dad8f9c.mjs'
    /* webpackChunkName: "components/counter" */
  ).then((c) => c.default || c)),
  DarkToggle: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/DarkToggle-029564ac.mjs'
    /* webpackChunkName: "components/dark-toggle" */
  ).then((c) => c.default || c)),
  Divider: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/Divider-d0e5605d.mjs'
    /* webpackChunkName: "components/divider" */
  ).then((c) => c.default || c)),
  Footer: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/Footer-3e9ae166.mjs'
    /* webpackChunkName: "components/footer" */
  ).then((c) => c.default || c)),
  ImageHover: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ImageHover-3da56bd9.mjs'
    /* webpackChunkName: "components/image-hover" */
  ).then((c) => c.default || c)),
  InputEntry: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/InputEntry-c2b0eb3f.mjs'
    /* webpackChunkName: "components/input-entry" */
  ).then((c) => c.default || c)),
  LocaleNuxtLink: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/LocaleNuxtLink-9e62e7b2.mjs'
    /* webpackChunkName: "components/locale-nuxt-link" */
  ).then(function(n) {
    return n.L;
  }).then((c) => c.default || c)),
  Logos: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/Logos-8656c151.mjs'
    /* webpackChunkName: "components/logos" */
  ).then((c) => c.default || c)),
  PageView: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/PageView-9fce1c2b.mjs'
    /* webpackChunkName: "components/page-view" */
  ).then((c) => c.default || c)),
  Typography: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/Typography-f87718b1.mjs'
    /* webpackChunkName: "components/typography" */
  ).then((c) => c.default || c)),
  BrandLogo: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/logo-8010ba8d.mjs'
    /* webpackChunkName: "components/brand-logo" */
  ).then((c) => c.default || c)),
  Header: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/header-85adfadf.mjs'
    /* webpackChunkName: "components/header" */
  ).then((c) => c.default || c)),
  HeaderNav: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/nav-eb93eaf1.mjs'
    /* webpackChunkName: "components/header-nav" */
  ).then((c) => c.default || c)),
  ModelContent: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/content-2b54430c.mjs'
    /* webpackChunkName: "components/model-content" */
  ).then((c) => c.default || c)),
  Model: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/model-9bf70e2c.mjs'
    /* webpackChunkName: "components/model" */
  ).then(function (n) { return n.bo; }).then((c) => c.default || c)),
  SectionBanner: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/Banner-4804a2aa.mjs'
    /* webpackChunkName: "components/section-banner" */
  ).then((c) => c.default || c)),
  SectionGradientCard: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/GradientCard-aaa56a60.mjs'
    /* webpackChunkName: "components/section-gradient-card" */
  ).then((c) => c.default || c)),
  Section: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/Section-a19c49ce.mjs'
    /* webpackChunkName: "components/section" */
  ).then((c) => c.default || c)),
  ContentDoc: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ContentDoc-b44cd75e.mjs'
    /* webpackChunkName: "components/content-doc" */
  ).then((c) => c.default || c)),
  ContentList: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ContentList-7057ad8e.mjs'
    /* webpackChunkName: "components/content-list" */
  ).then((c) => c.default || c)),
  ContentNavigation: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ContentNavigation-6f0aad9c.mjs'
    /* webpackChunkName: "components/content-navigation" */
  ).then((c) => c.default || c)),
  ContentQuery: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ContentQuery-c9561d42.mjs'
    /* webpackChunkName: "components/content-query" */
  ).then((c) => c.default || c)),
  ContentRenderer: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ContentRenderer-aa0632eb.mjs'
    /* webpackChunkName: "components/content-renderer" */
  ).then((c) => c.default || c)),
  ContentRendererMarkdown: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ContentRendererMarkdown-6936f2dc.mjs'
    /* webpackChunkName: "components/content-renderer-markdown" */
  ).then((c) => c.default || c)),
  ContentSlot: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ContentSlot-ff6cce0d.mjs'
    /* webpackChunkName: "components/content-slot" */
  ).then((c) => c.default || c)),
  DocumentDrivenEmpty: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/DocumentDrivenEmpty-91213222.mjs'
    /* webpackChunkName: "components/document-driven-empty" */
  ).then((c) => c.default || c)),
  DocumentDrivenNotFound: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/DocumentDrivenNotFound-b0165c0a.mjs'
    /* webpackChunkName: "components/document-driven-not-found" */
  ).then((c) => c.default || c)),
  Markdown: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/Markdown-fb180bd8.mjs'
    /* webpackChunkName: "components/markdown" */
  ).then((c) => c.default || c)),
  ProseA: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseA-f5fb9717.mjs'
    /* webpackChunkName: "components/prose-a" */
  ).then((c) => c.default || c)),
  ProseBlockquote: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseBlockquote-0b827f1c.mjs'
    /* webpackChunkName: "components/prose-blockquote" */
  ).then((c) => c.default || c)),
  ProseCode: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseCode-8c7824c1.mjs'
    /* webpackChunkName: "components/prose-code" */
  ).then((c) => c.default || c)),
  ProseCodeInline: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseCodeInline-250ac8e2.mjs'
    /* webpackChunkName: "components/prose-code-inline" */
  ).then((c) => c.default || c)),
  ProseEm: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseEm-5793e881.mjs'
    /* webpackChunkName: "components/prose-em" */
  ).then((c) => c.default || c)),
  ProseH1: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseH1-a7c02748.mjs'
    /* webpackChunkName: "components/prose-h1" */
  ).then((c) => c.default || c)),
  ProseH2: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseH2-42a0e388.mjs'
    /* webpackChunkName: "components/prose-h2" */
  ).then((c) => c.default || c)),
  ProseH3: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseH3-7b35f781.mjs'
    /* webpackChunkName: "components/prose-h3" */
  ).then((c) => c.default || c)),
  ProseH4: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseH4-4cbcea3e.mjs'
    /* webpackChunkName: "components/prose-h4" */
  ).then((c) => c.default || c)),
  ProseH5: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseH5-d62f5dc6.mjs'
    /* webpackChunkName: "components/prose-h5" */
  ).then((c) => c.default || c)),
  ProseH6: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseH6-1171bbd6.mjs'
    /* webpackChunkName: "components/prose-h6" */
  ).then((c) => c.default || c)),
  ProseHr: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseHr-6890f261.mjs'
    /* webpackChunkName: "components/prose-hr" */
  ).then((c) => c.default || c)),
  ProseImg: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseImg-e8145ee4.mjs'
    /* webpackChunkName: "components/prose-img" */
  ).then((c) => c.default || c)),
  ProseLi: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseLi-5e3de957.mjs'
    /* webpackChunkName: "components/prose-li" */
  ).then((c) => c.default || c)),
  ProseOl: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseOl-8ab72e43.mjs'
    /* webpackChunkName: "components/prose-ol" */
  ).then((c) => c.default || c)),
  ProseP: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseP-eda12fbc.mjs'
    /* webpackChunkName: "components/prose-p" */
  ).then((c) => c.default || c)),
  ProseStrong: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseStrong-c334bf53.mjs'
    /* webpackChunkName: "components/prose-strong" */
  ).then((c) => c.default || c)),
  ProseTable: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseTable-1fc441c7.mjs'
    /* webpackChunkName: "components/prose-table" */
  ).then((c) => c.default || c)),
  ProseTbody: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseTbody-d4e13a4d.mjs'
    /* webpackChunkName: "components/prose-tbody" */
  ).then((c) => c.default || c)),
  ProseTd: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseTd-d1788437.mjs'
    /* webpackChunkName: "components/prose-td" */
  ).then((c) => c.default || c)),
  ProseTh: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseTh-bcc92ef7.mjs'
    /* webpackChunkName: "components/prose-th" */
  ).then((c) => c.default || c)),
  ProseThead: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseThead-3e7ec9dc.mjs'
    /* webpackChunkName: "components/prose-thead" */
  ).then((c) => c.default || c)),
  ProseTr: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseTr-1ccf685b.mjs'
    /* webpackChunkName: "components/prose-tr" */
  ).then((c) => c.default || c)),
  ProseUl: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseUl-7b7553dc.mjs'
    /* webpackChunkName: "components/prose-ul" */
  ).then((c) => c.default || c))
};
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components",
  setup(nuxtApp) {
    for (const name in components) {
      nuxtApp.vueApp.component(name, components[name]);
      nuxtApp.vueApp.component("Lazy" + name, components[name]);
    }
  }
});
const unhead_XK52crEq5p = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  setup(nuxtApp) {
    const createHead = createServerHead;
    const head = createHead();
    head.push(appHead);
    nuxtApp.vueApp.use(head);
    {
      nuxtApp.ssrContext.renderMeta = async () => {
        const meta = await renderSSRHead(head);
        return {
          ...meta,
          bodyScriptsPrepend: meta.bodyTagsOpen,
          // resolves naming difference with NuxtMeta and Unhead
          bodyScripts: meta.bodyTags
        };
      };
    }
  }
});
const __nuxt_page_meta = {
  layout: "home"
};
const _routes = [
  {
    name: "all___en",
    path: "/en/:all(.*)*",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/_...all_-004b5610.mjs').then((m) => m.default || m)
  },
  {
    name: "all___zh",
    path: "/:all(.*)*",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/_...all_-004b5610.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.name) ?? "hi-id___en",
    path: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.path) ?? "/en/hi/:id()",
    meta: __nuxt_page_meta || {},
    alias: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.alias) || [],
    redirect: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.redirect) || void 0,
    component: () => import('./_nuxt/_id_-23cdc191.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.name) ?? "hi-id___zh",
    path: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.path) ?? "/hi/:id()",
    meta: __nuxt_page_meta || {},
    alias: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.alias) || [],
    redirect: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.redirect) || void 0,
    component: () => import('./_nuxt/_id_-23cdc191.mjs').then((m) => m.default || m)
  },
  {
    name: "index___en",
    path: "/en",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-6a72bcad.mjs').then((m) => m.default || m)
  },
  {
    name: "index___zh",
    path: "/",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-6a72bcad.mjs').then((m) => m.default || m)
  },
  {
    name: "land___en",
    path: "/en/land",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/land-7579be0d.mjs').then((m) => m.default || m)
  },
  {
    name: "land___zh",
    path: "/land",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/land-7579be0d.mjs').then((m) => m.default || m)
  },
  {
    path: "/en/release",
    children: [
      {
        name: "release-id___en",
        path: ":id()",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => import('./_nuxt/_id_-bf8788de.mjs').then((m) => m.default || m)
      },
      {
        name: "release___en",
        path: "",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => import('./_nuxt/index-1eb19435.mjs').then((m) => m.default || m)
      }
    ],
    name: void 0,
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/release-50498f1d.mjs').then((m) => m.default || m)
  },
  {
    path: "/release",
    children: [
      {
        name: "release-id___zh",
        path: ":id()",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => import('./_nuxt/_id_-bf8788de.mjs').then((m) => m.default || m)
      },
      {
        name: "release___zh",
        path: "",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => import('./_nuxt/index-1eb19435.mjs').then((m) => m.default || m)
      }
    ],
    name: void 0,
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/release-50498f1d.mjs').then((m) => m.default || m)
  }
];
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();
    let position = savedPosition || void 0;
    if (!position && from && to && to.meta.scrollToTop !== false && _isDifferentRoute(from, to)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
      }
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve2) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await nextTick();
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
        }
        resolve2(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = document.querySelector(selector);
    if (elem) {
      return parseFloat(getComputedStyle(elem).scrollMarginTop);
    }
  } catch {
  }
  return 0;
}
function _isDifferentRoute(a, b) {
  const samePageComponent = a.matched[0] === b.matched[0];
  if (!samePageComponent) {
    return true;
  }
  if (samePageComponent && JSON.stringify(a.params) !== JSON.stringify(b.params)) {
    return true;
  }
  return false;
}
const configRouterOptions = {};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  useNuxtApp();
  useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  {
    return result;
  }
});
const globalMiddleware = [
  validate
];
const namedMiddleware = {};
const router_5r4iFHqBdi = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b;
    let __temp, __restore;
    let routerBase = useRuntimeConfig().app.baseURL;
    if (routerOptions.hashMode && !routerBase.includes("#")) {
      routerBase += "#";
    }
    const history = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = ((_b = routerOptions.routes) == null ? void 0 : _b.call(routerOptions, _routes)) ?? _routes;
    const initialURL = nuxtApp.ssrContext.url;
    const router = createRouter({
      ...routerOptions,
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const _route = shallowRef(router.resolve(initialURL));
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a2, _b2, _c, _d;
      if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d = (_c = from.matched[0]) == null ? void 0 : _c.components) == null ? void 0 : _d.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      route[key] = computed(() => _route.value[key]);
    }
    nuxtApp._route = reactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    useError();
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => callWithNuxt(nuxtApp, showError, [error2])), await __temp, __restore();
    }
    const initialLayout = useState("_layout");
    router.beforeEach(async (to, from) => {
      var _a2;
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout.value && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout.value;
      }
      nuxtApp._processingMiddleware = true;
      const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
      for (const component of to.matched) {
        const componentMiddleware = component.meta.middleware;
        if (!componentMiddleware) {
          continue;
        }
        if (Array.isArray(componentMiddleware)) {
          for (const entry2 of componentMiddleware) {
            middlewareEntries.add(entry2);
          }
        } else {
          middlewareEntries.add(componentMiddleware);
        }
      }
      for (const entry2 of middlewareEntries) {
        const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_a2 = namedMiddleware[entry2]) == null ? void 0 : _a2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
        if (!middleware) {
          throw new Error(`Unknown route middleware: '${entry2}'.`);
        }
        const result = await callWithNuxt(nuxtApp, middleware, [to, from]);
        {
          if (result === false || result instanceof Error) {
            const error2 = result || createError$1({
              statusCode: 404,
              statusMessage: `Page Not Found: ${initialURL}`
            });
            await callWithNuxt(nuxtApp, showError, [error2]);
            return false;
          }
        }
        if (result || result === false) {
          return result;
        }
      }
    });
    router.afterEach(async (to) => {
      delete nuxtApp._processingMiddleware;
      if (to.matched.length === 0) {
        await callWithNuxt(nuxtApp, showError, [createError$1({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`
        })]);
      } else {
        const currentURL = to.fullPath || "/";
        if (!isEqual(currentURL, initialURL, { trailingSlash: true })) {
          const event = await callWithNuxt(nuxtApp, useRequestEvent);
          const options = { redirectCode: event.node.res.statusCode !== 200 ? event.node.res.statusCode || 302 : 302 };
          await callWithNuxt(nuxtApp, navigateTo, [currentURL, options]);
        }
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        await router.replace({
          ...router.resolve(initialURL),
          name: void 0,
          // #4920, #$4982
          force: true
        });
      } catch (error2) {
        await callWithNuxt(nuxtApp, showError, [error2]);
      }
    });
    return { provide: { router } };
  }
}, 1);
const preference = "system";
const componentName = "ColorScheme";
const plugin_server_sYsf0D0IAI = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const colorMode = useState("color-mode", () => reactive({
    preference,
    value: preference,
    unknown: true,
    forced: false
  })).value;
  const htmlAttrs = {};
  {
    useHead({ htmlAttrs });
  }
  useRouter().afterEach((to) => {
    const forcedColorMode = to.meta.colorMode;
    if (forcedColorMode && forcedColorMode !== "system") {
      colorMode.value = htmlAttrs["data-color-mode-forced"] = forcedColorMode;
      colorMode.forced = true;
    } else if (forcedColorMode === "system") {
      console.warn("You cannot force the colorMode to system at the page level.");
    }
  });
  nuxtApp.provide("colorMode", colorMode);
});
const composition_UfBb5yEeLH = /* @__PURE__ */ defineNuxtPlugin(() => {
});
/*!
  * shared v9.3.0-beta.17
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
const inBrowser = false;
const makeSymbol$1 = (name, shareable = false) => !shareable ? Symbol(name) : Symbol.for(name);
const isNumber = (val) => typeof val === "number" && isFinite(val);
const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
const isEmptyObject = (val) => isPlainObject(val) && Object.keys(val).length === 0;
const assign$1 = Object.assign;
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {});
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
const isArray$1 = Array.isArray;
const isFunction$2 = (val) => typeof val === "function";
const isString$2 = (val) => typeof val === "string";
const isBoolean = (val) => typeof val === "boolean";
const isObject$1 = (val) => val !== null && typeof val === "object";
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
/*!
  * vue-i18n v9.3.0-beta.17
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
const VERSION = "9.3.0-beta.17";
function initFeatureFlags() {
  if (typeof __INTLIFY_PROD_DEVTOOLS__ !== "boolean") {
    getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false;
  }
}
CoreWarnCodes.__EXTEND_POINT__;
let code = CompileErrorCodes.__EXTEND_POINT__;
const inc = () => ++code;
const I18nErrorCodes = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: code,
  // legacy module errors
  INVALID_ARGUMENT: inc(),
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: inc(),
  NOT_INSLALLED: inc(),
  NOT_AVAILABLE_IN_LEGACY_MODE: inc(),
  // directive module errors
  REQUIRED_VALUE: inc(),
  INVALID_VALUE: inc(),
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: inc(),
  NOT_INSLALLED_WITH_PROVIDE: inc(),
  // unexpected error
  UNEXPECTED_ERROR: inc(),
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: inc(),
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: inc(),
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: inc(),
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: inc(),
  // for enhancement
  __EXTEND_POINT__: inc()
  // 29
};
function createI18nError(code2, ...args) {
  return createCompileError(code2, null, void 0);
}
const TranslateVNodeSymbol = /* @__PURE__ */ makeSymbol$1("__translateVNode");
const DatetimePartsSymbol = /* @__PURE__ */ makeSymbol$1("__datetimeParts");
const NumberPartsSymbol = /* @__PURE__ */ makeSymbol$1("__numberParts");
const SetPluralRulesSymbol = makeSymbol$1("__setPluralRules");
const InejctWithOption = /* @__PURE__ */ makeSymbol$1("__injectWithOption");
function handleFlatJson(obj) {
  if (!isObject$1(obj)) {
    return obj;
  }
  for (const key in obj) {
    if (!hasOwn(obj, key)) {
      continue;
    }
    if (!key.includes(".")) {
      if (isObject$1(obj[key])) {
        handleFlatJson(obj[key]);
      }
    } else {
      const subKeys = key.split(".");
      const lastIndex = subKeys.length - 1;
      let currentObj = obj;
      for (let i = 0; i < lastIndex; i++) {
        if (!(subKeys[i] in currentObj)) {
          currentObj[subKeys[i]] = {};
        }
        currentObj = currentObj[subKeys[i]];
      }
      currentObj[subKeys[lastIndex]] = obj[key];
      delete obj[key];
      if (isObject$1(currentObj[subKeys[lastIndex]])) {
        handleFlatJson(currentObj[subKeys[lastIndex]]);
      }
    }
  }
  return obj;
}
function getLocaleMessages(locale, options) {
  const { messages, __i18n, messageResolver, flatJson } = options;
  const ret = isPlainObject(messages) ? messages : isArray$1(__i18n) ? {} : { [locale]: {} };
  if (isArray$1(__i18n)) {
    __i18n.forEach((custom) => {
      if ("locale" in custom && "resource" in custom) {
        const { locale: locale2, resource } = custom;
        if (locale2) {
          ret[locale2] = ret[locale2] || {};
          deepCopy$1(resource, ret[locale2]);
        } else {
          deepCopy$1(resource, ret);
        }
      } else {
        isString$2(custom) && deepCopy$1(JSON.parse(custom), ret);
      }
    });
  }
  if (messageResolver == null && flatJson) {
    for (const key in ret) {
      if (hasOwn(ret, key)) {
        handleFlatJson(ret[key]);
      }
    }
  }
  return ret;
}
const isNotObjectOrIsArray = (val) => !isObject$1(val) || isArray$1(val);
function deepCopy$1(src, des) {
  if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
    throw createI18nError(I18nErrorCodes.INVALID_VALUE);
  }
  for (const key in src) {
    if (hasOwn(src, key)) {
      if (isNotObjectOrIsArray(src[key]) || isNotObjectOrIsArray(des[key])) {
        des[key] = src[key];
      } else {
        deepCopy$1(src[key], des[key]);
      }
    }
  }
}
function getComponentOptions(instance) {
  return instance.type;
}
function adjustI18nResources(global2, options, componentOptions) {
  let messages = isObject$1(options.messages) ? options.messages : {};
  if ("__i18nGlobal" in componentOptions) {
    messages = getLocaleMessages(globalThis.locale.value, {
      messages,
      __i18n: componentOptions.__i18nGlobal
    });
  }
  const locales = Object.keys(messages);
  if (locales.length) {
    locales.forEach((locale) => {
      global2.mergeLocaleMessage(locale, messages[locale]);
    });
  }
  {
    if (isObject$1(options.datetimeFormats)) {
      const locales2 = Object.keys(options.datetimeFormats);
      if (locales2.length) {
        locales2.forEach((locale) => {
          global2.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
        });
      }
    }
    if (isObject$1(options.numberFormats)) {
      const locales2 = Object.keys(options.numberFormats);
      if (locales2.length) {
        locales2.forEach((locale) => {
          global2.mergeNumberFormat(locale, options.numberFormats[locale]);
        });
      }
    }
  }
}
function createTextNode(key) {
  return createVNode(Text, null, key, 0);
}
const DEVTOOLS_META = "__INTLIFY_META__";
let composerID = 0;
function defineCoreMissingHandler(missing) {
  return (ctx, locale, key, type) => {
    return missing(locale, key, getCurrentInstance() || void 0, type);
  };
}
const getMetaInfo = () => {
  const instance = getCurrentInstance();
  let meta = null;
  return instance && (meta = getComponentOptions(instance)[DEVTOOLS_META]) ? { [DEVTOOLS_META]: meta } : null;
};
function createComposer(options = {}, VueI18nLegacy) {
  const { __root } = options;
  const _isGlobal = __root === void 0;
  let _inheritLocale = isBoolean(options.inheritLocale) ? options.inheritLocale : true;
  const _locale = ref(
    // prettier-ignore
    __root && _inheritLocale ? __root.locale.value : isString$2(options.locale) ? options.locale : DEFAULT_LOCALE$1
  );
  const _fallbackLocale = ref(
    // prettier-ignore
    __root && _inheritLocale ? __root.fallbackLocale.value : isString$2(options.fallbackLocale) || isArray$1(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value
  );
  const _messages = ref(getLocaleMessages(_locale.value, options));
  const _datetimeFormats = ref(isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [_locale.value]: {} });
  const _numberFormats = ref(isPlainObject(options.numberFormats) ? options.numberFormats : { [_locale.value]: {} });
  let _missingWarn = __root ? __root.missingWarn : isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  let _fallbackWarn = __root ? __root.fallbackWarn : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  let _fallbackRoot = __root ? __root.fallbackRoot : isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
  let _fallbackFormat = !!options.fallbackFormat;
  let _missing = isFunction$2(options.missing) ? options.missing : null;
  let _runtimeMissing = isFunction$2(options.missing) ? defineCoreMissingHandler(options.missing) : null;
  let _postTranslation = isFunction$2(options.postTranslation) ? options.postTranslation : null;
  let _warnHtmlMessage = __root ? __root.warnHtmlMessage : isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  let _escapeParameter = !!options.escapeParameter;
  const _modifiers = __root ? __root.modifiers : isPlainObject(options.modifiers) ? options.modifiers : {};
  let _pluralRules = options.pluralRules || __root && __root.pluralRules;
  let _context;
  const getCoreContext = () => {
    _isGlobal && setFallbackContext(null);
    const ctxOptions = {
      version: VERSION,
      locale: _locale.value,
      fallbackLocale: _fallbackLocale.value,
      messages: _messages.value,
      modifiers: _modifiers,
      pluralRules: _pluralRules,
      missing: _runtimeMissing === null ? void 0 : _runtimeMissing,
      missingWarn: _missingWarn,
      fallbackWarn: _fallbackWarn,
      fallbackFormat: _fallbackFormat,
      unresolving: true,
      postTranslation: _postTranslation === null ? void 0 : _postTranslation,
      warnHtmlMessage: _warnHtmlMessage,
      escapeParameter: _escapeParameter,
      messageResolver: options.messageResolver,
      __meta: { framework: "vue" }
    };
    {
      ctxOptions.datetimeFormats = _datetimeFormats.value;
      ctxOptions.numberFormats = _numberFormats.value;
      ctxOptions.__datetimeFormatters = isPlainObject(_context) ? _context.__datetimeFormatters : void 0;
      ctxOptions.__numberFormatters = isPlainObject(_context) ? _context.__numberFormatters : void 0;
    }
    const ctx = createCoreContext(ctxOptions);
    _isGlobal && setFallbackContext(ctx);
    return ctx;
  };
  _context = getCoreContext();
  updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
  function trackReactivityValues() {
    return [
      _locale.value,
      _fallbackLocale.value,
      _messages.value,
      _datetimeFormats.value,
      _numberFormats.value
    ];
  }
  const locale = computed({
    get: () => _locale.value,
    set: (val) => {
      _locale.value = val;
      _context.locale = _locale.value;
    }
  });
  const fallbackLocale = computed({
    get: () => _fallbackLocale.value,
    set: (val) => {
      _fallbackLocale.value = val;
      _context.fallbackLocale = _fallbackLocale.value;
      updateFallbackLocale(_context, _locale.value, val);
    }
  });
  const messages = computed(() => _messages.value);
  const datetimeFormats = /* @__PURE__ */ computed(() => _datetimeFormats.value);
  const numberFormats = /* @__PURE__ */ computed(() => _numberFormats.value);
  function getPostTranslationHandler() {
    return isFunction$2(_postTranslation) ? _postTranslation : null;
  }
  function setPostTranslationHandler(handler) {
    _postTranslation = handler;
    _context.postTranslation = handler;
  }
  function getMissingHandler() {
    return _missing;
  }
  function setMissingHandler(handler) {
    if (handler !== null) {
      _runtimeMissing = defineCoreMissingHandler(handler);
    }
    _missing = handler;
    _context.missing = _runtimeMissing;
  }
  const wrapWithDeps = (fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) => {
    trackReactivityValues();
    let ret;
    if (__INTLIFY_PROD_DEVTOOLS__) {
      try {
        setAdditionalMeta(getMetaInfo());
        if (!_isGlobal) {
          _context.fallbackContext = __root ? getFallbackContext() : void 0;
        }
        ret = fn(_context);
      } finally {
        setAdditionalMeta(null);
        if (!_isGlobal) {
          _context.fallbackContext = void 0;
        }
      }
    } else {
      ret = fn(_context);
    }
    if (isNumber(ret) && ret === NOT_REOSLVED) {
      const [key, arg2] = argumentParser();
      return __root && _fallbackRoot ? fallbackSuccess(__root) : fallbackFail(key);
    } else if (successCondition(ret)) {
      return ret;
    } else {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_RETURN_TYPE);
    }
  };
  function t(...args) {
    return wrapWithDeps((context) => Reflect.apply(translate, null, [context, ...args]), () => parseTranslateArgs(...args), "translate", (root) => Reflect.apply(root.t, root, [...args]), (key) => key, (val) => isString$2(val));
  }
  function rt(...args) {
    const [arg1, arg2, arg3] = args;
    if (arg3 && !isObject$1(arg3)) {
      throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
    }
    return t(...[arg1, arg2, assign$1({ resolvedMessage: true }, arg3 || {})]);
  }
  function d(...args) {
    return wrapWithDeps((context) => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), "datetime format", (root) => Reflect.apply(root.d, root, [...args]), () => MISSING_RESOLVE_VALUE, (val) => isString$2(val));
  }
  function n(...args) {
    return wrapWithDeps((context) => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), "number format", (root) => Reflect.apply(root.n, root, [...args]), () => MISSING_RESOLVE_VALUE, (val) => isString$2(val));
  }
  function normalize(values) {
    return values.map((val) => isString$2(val) || isNumber(val) || isBoolean(val) ? createTextNode(String(val)) : val);
  }
  const interpolate = (val) => val;
  const processor = {
    normalize,
    interpolate,
    type: "vnode"
  };
  function translateVNode(...args) {
    return wrapWithDeps(
      (context) => {
        let ret;
        const _context2 = context;
        try {
          _context2.processor = processor;
          ret = Reflect.apply(translate, null, [_context2, ...args]);
        } finally {
          _context2.processor = null;
        }
        return ret;
      },
      () => parseTranslateArgs(...args),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (root) => root[TranslateVNodeSymbol](...args),
      (key) => [createTextNode(key)],
      (val) => isArray$1(val)
    );
  }
  function numberParts(...args) {
    return wrapWithDeps(
      (context) => Reflect.apply(number, null, [context, ...args]),
      () => parseNumberArgs(...args),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (root) => root[NumberPartsSymbol](...args),
      () => [],
      (val) => isString$2(val) || isArray$1(val)
    );
  }
  function datetimeParts(...args) {
    return wrapWithDeps(
      (context) => Reflect.apply(datetime, null, [context, ...args]),
      () => parseDateTimeArgs(...args),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (root) => root[DatetimePartsSymbol](...args),
      () => [],
      (val) => isString$2(val) || isArray$1(val)
    );
  }
  function setPluralRules(rules) {
    _pluralRules = rules;
    _context.pluralRules = _pluralRules;
  }
  function te(key, locale2) {
    const targetLocale = isString$2(locale2) ? locale2 : _locale.value;
    const message = getLocaleMessage(targetLocale);
    return _context.messageResolver(message, key) !== null;
  }
  function resolveMessages(key) {
    let messages2 = null;
    const locales = fallbackWithLocaleChain(_context, _fallbackLocale.value, _locale.value);
    for (let i = 0; i < locales.length; i++) {
      const targetLocaleMessages = _messages.value[locales[i]] || {};
      const messageValue = _context.messageResolver(targetLocaleMessages, key);
      if (messageValue != null) {
        messages2 = messageValue;
        break;
      }
    }
    return messages2;
  }
  function tm(key) {
    const messages2 = resolveMessages(key);
    return messages2 != null ? messages2 : __root ? __root.tm(key) || {} : {};
  }
  function getLocaleMessage(locale2) {
    return _messages.value[locale2] || {};
  }
  function setLocaleMessage(locale2, message) {
    _messages.value[locale2] = message;
    _context.messages = _messages.value;
  }
  function mergeLocaleMessage2(locale2, message) {
    _messages.value[locale2] = _messages.value[locale2] || {};
    deepCopy$1(message, _messages.value[locale2]);
    _context.messages = _messages.value;
  }
  function getDateTimeFormat(locale2) {
    return _datetimeFormats.value[locale2] || {};
  }
  function setDateTimeFormat(locale2, format2) {
    _datetimeFormats.value[locale2] = format2;
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale2, format2);
  }
  function mergeDateTimeFormat(locale2, format2) {
    _datetimeFormats.value[locale2] = assign$1(_datetimeFormats.value[locale2] || {}, format2);
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale2, format2);
  }
  function getNumberFormat(locale2) {
    return _numberFormats.value[locale2] || {};
  }
  function setNumberFormat(locale2, format2) {
    _numberFormats.value[locale2] = format2;
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale2, format2);
  }
  function mergeNumberFormat(locale2, format2) {
    _numberFormats.value[locale2] = assign$1(_numberFormats.value[locale2] || {}, format2);
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale2, format2);
  }
  composerID++;
  if (__root && inBrowser) {
    watch(__root.locale, (val) => {
      if (_inheritLocale) {
        _locale.value = val;
        _context.locale = val;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
    watch(__root.fallbackLocale, (val) => {
      if (_inheritLocale) {
        _fallbackLocale.value = val;
        _context.fallbackLocale = val;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
  }
  const composer = {
    id: composerID,
    locale,
    fallbackLocale,
    get inheritLocale() {
      return _inheritLocale;
    },
    set inheritLocale(val) {
      _inheritLocale = val;
      if (val && __root) {
        _locale.value = __root.locale.value;
        _fallbackLocale.value = __root.fallbackLocale.value;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    },
    get availableLocales() {
      return Object.keys(_messages.value).sort();
    },
    messages,
    get modifiers() {
      return _modifiers;
    },
    get pluralRules() {
      return _pluralRules || {};
    },
    get isGlobal() {
      return _isGlobal;
    },
    get missingWarn() {
      return _missingWarn;
    },
    set missingWarn(val) {
      _missingWarn = val;
      _context.missingWarn = _missingWarn;
    },
    get fallbackWarn() {
      return _fallbackWarn;
    },
    set fallbackWarn(val) {
      _fallbackWarn = val;
      _context.fallbackWarn = _fallbackWarn;
    },
    get fallbackRoot() {
      return _fallbackRoot;
    },
    set fallbackRoot(val) {
      _fallbackRoot = val;
    },
    get fallbackFormat() {
      return _fallbackFormat;
    },
    set fallbackFormat(val) {
      _fallbackFormat = val;
      _context.fallbackFormat = _fallbackFormat;
    },
    get warnHtmlMessage() {
      return _warnHtmlMessage;
    },
    set warnHtmlMessage(val) {
      _warnHtmlMessage = val;
      _context.warnHtmlMessage = val;
    },
    get escapeParameter() {
      return _escapeParameter;
    },
    set escapeParameter(val) {
      _escapeParameter = val;
      _context.escapeParameter = val;
    },
    t,
    getLocaleMessage,
    setLocaleMessage,
    mergeLocaleMessage: mergeLocaleMessage2,
    getPostTranslationHandler,
    setPostTranslationHandler,
    getMissingHandler,
    setMissingHandler,
    [SetPluralRulesSymbol]: setPluralRules
  };
  {
    composer.datetimeFormats = datetimeFormats;
    composer.numberFormats = numberFormats;
    composer.rt = rt;
    composer.te = te;
    composer.tm = tm;
    composer.d = d;
    composer.n = n;
    composer.getDateTimeFormat = getDateTimeFormat;
    composer.setDateTimeFormat = setDateTimeFormat;
    composer.mergeDateTimeFormat = mergeDateTimeFormat;
    composer.getNumberFormat = getNumberFormat;
    composer.setNumberFormat = setNumberFormat;
    composer.mergeNumberFormat = mergeNumberFormat;
    composer[InejctWithOption] = options.__injectWithOption;
    composer[TranslateVNodeSymbol] = translateVNode;
    composer[DatetimePartsSymbol] = datetimeParts;
    composer[NumberPartsSymbol] = numberParts;
  }
  return composer;
}
const baseFormatProps = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    validator: (val) => val === "parent" || val === "global",
    default: "parent"
    /* ComponetI18nScope */
  },
  i18n: {
    type: Object
  }
};
function getInterpolateArg({ slots }, keys) {
  if (keys.length === 1 && keys[0] === "default") {
    const ret = slots.default ? slots.default() : [];
    return ret.reduce((slot, current) => {
      return [
        ...slot,
        // prettier-ignore
        ...current.type === Fragment$1 ? current.children : [current]
      ];
    }, []);
  } else {
    return keys.reduce((arg, key) => {
      const slot = slots[key];
      if (slot) {
        arg[key] = slot();
      }
      return arg;
    }, {});
  }
}
function getFragmentableTag(tag) {
  return Fragment$1;
}
const TranslationImpl = /* @__PURE__ */ defineComponent({
  /* eslint-disable */
  name: "i18n-t",
  props: assign$1({
    keypath: {
      type: String,
      required: true
    },
    plural: {
      type: [Number, String],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validator: (val) => isNumber(val) || !isNaN(val)
    }
  }, baseFormatProps),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(props, context) {
    const { slots, attrs } = context;
    const i18n = props.i18n || useI18n({
      useScope: props.scope,
      __useComponent: true
    });
    return () => {
      const keys = Object.keys(slots).filter((key) => key !== "_");
      const options = {};
      if (props.locale) {
        options.locale = props.locale;
      }
      if (props.plural !== void 0) {
        options.plural = isString$2(props.plural) ? +props.plural : props.plural;
      }
      const arg = getInterpolateArg(context, keys);
      const children = i18n[TranslateVNodeSymbol](props.keypath, arg, options);
      const assignedAttrs = assign$1({}, attrs);
      const tag = isString$2(props.tag) || isObject$1(props.tag) ? props.tag : getFragmentableTag();
      return h(tag, assignedAttrs, children);
    };
  }
});
const Translation = TranslationImpl;
function isVNode(target) {
  return isArray$1(target) && !isString$2(target[0]);
}
function renderFormatter(props, context, slotKeys, partFormatter) {
  const { slots, attrs } = context;
  return () => {
    const options = { part: true };
    let overrides = {};
    if (props.locale) {
      options.locale = props.locale;
    }
    if (isString$2(props.format)) {
      options.key = props.format;
    } else if (isObject$1(props.format)) {
      if (isString$2(props.format.key)) {
        options.key = props.format.key;
      }
      overrides = Object.keys(props.format).reduce((options2, prop) => {
        return slotKeys.includes(prop) ? assign$1({}, options2, { [prop]: props.format[prop] }) : options2;
      }, {});
    }
    const parts = partFormatter(...[props.value, options, overrides]);
    let children = [options.key];
    if (isArray$1(parts)) {
      children = parts.map((part, index) => {
        const slot = slots[part.type];
        const node = slot ? slot({ [part.type]: part.value, index, parts }) : [part.value];
        if (isVNode(node)) {
          node[0].key = `${part.type}-${index}`;
        }
        return node;
      });
    } else if (isString$2(parts)) {
      children = [parts];
    }
    const assignedAttrs = assign$1({}, attrs);
    const tag = isString$2(props.tag) || isObject$1(props.tag) ? props.tag : getFragmentableTag();
    return h(tag, assignedAttrs, children);
  };
}
const NumberFormatImpl = /* @__PURE__ */ defineComponent({
  /* eslint-disable */
  name: "i18n-n",
  props: assign$1({
    value: {
      type: Number,
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(props, context) {
    const i18n = props.i18n || useI18n({
      useScope: "parent",
      __useComponent: true
    });
    return renderFormatter(props, context, NUMBER_FORMAT_OPTIONS_KEYS, (...args) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      i18n[NumberPartsSymbol](...args)
    ));
  }
});
const NumberFormat = NumberFormatImpl;
const DatetimeFormatImpl = /* @__PURE__ */ defineComponent({
  /* eslint-disable */
  name: "i18n-d",
  props: assign$1({
    value: {
      type: [Number, Date],
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(props, context) {
    const i18n = props.i18n || useI18n({
      useScope: "parent",
      __useComponent: true
    });
    return renderFormatter(props, context, DATETIME_FORMAT_OPTIONS_KEYS, (...args) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      i18n[DatetimePartsSymbol](...args)
    ));
  }
});
const DatetimeFormat = DatetimeFormatImpl;
function getComposer$2(i18n, instance) {
  const i18nInternal = i18n;
  if (i18n.mode === "composition") {
    return i18nInternal.__getInstance(instance) || i18n.global;
  } else {
    const vueI18n = i18nInternal.__getInstance(instance);
    return vueI18n != null ? vueI18n.__composer : i18n.global.__composer;
  }
}
function vTDirective(i18n) {
  const _process = (binding) => {
    const { instance, modifiers, value } = binding;
    if (!instance || !instance.$) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const composer = getComposer$2(i18n, instance.$);
    const parsedValue = parseValue(value);
    return [
      Reflect.apply(composer.t, composer, [...makeParams(parsedValue)]),
      composer
    ];
  };
  const register = (el, binding) => {
    const [textContent, composer] = _process(binding);
    el.__composer = composer;
    el.textContent = textContent;
  };
  const unregister = (el) => {
    if (el.__composer) {
      el.__composer = void 0;
      delete el.__composer;
    }
  };
  const update = (el, { value }) => {
    if (el.__composer) {
      const composer = el.__composer;
      const parsedValue = parseValue(value);
      el.textContent = Reflect.apply(composer.t, composer, [
        ...makeParams(parsedValue)
      ]);
    }
  };
  const getSSRProps = (binding) => {
    const [textContent] = _process(binding);
    return { textContent };
  };
  return {
    created: register,
    unmounted: unregister,
    beforeUpdate: update,
    getSSRProps
  };
}
function parseValue(value) {
  if (isString$2(value)) {
    return { path: value };
  } else if (isPlainObject(value)) {
    if (!("path" in value)) {
      throw createI18nError(I18nErrorCodes.REQUIRED_VALUE, "path");
    }
    return value;
  } else {
    throw createI18nError(I18nErrorCodes.INVALID_VALUE);
  }
}
function makeParams(value) {
  const { path, locale, args, choice, plural } = value;
  const options = {};
  const named = args || {};
  if (isString$2(locale)) {
    options.locale = locale;
  }
  if (isNumber(choice)) {
    options.plural = choice;
  }
  if (isNumber(plural)) {
    options.plural = plural;
  }
  return [path, named, options];
}
function apply(app, i18n, ...options) {
  const pluginOptions = isPlainObject(options[0]) ? options[0] : {};
  const useI18nComponentName = !!pluginOptions.useI18nComponentName;
  const globalInstall = isBoolean(pluginOptions.globalInstall) ? pluginOptions.globalInstall : true;
  if (globalInstall) {
    app.component(!useI18nComponentName ? Translation.name : "i18n", Translation);
    app.component(NumberFormat.name, NumberFormat);
    app.component(DatetimeFormat.name, DatetimeFormat);
  }
  {
    app.directive("t", vTDirective(i18n));
  }
}
const I18nInjectionKey = /* @__PURE__ */ makeSymbol$1("global-vue-i18n");
function createI18n(options = {}, VueI18nLegacy) {
  const __globalInjection = isBoolean(options.globalInjection) ? options.globalInjection : true;
  const __allowComposition = true;
  const __instances = /* @__PURE__ */ new Map();
  const [globalScope, __global] = createGlobal(options);
  const symbol = /* @__PURE__ */ makeSymbol$1("");
  function __getInstance(component) {
    return __instances.get(component) || null;
  }
  function __setInstance(component, instance) {
    __instances.set(component, instance);
  }
  function __deleteInstance(component) {
    __instances.delete(component);
  }
  {
    const i18n = {
      // mode
      get mode() {
        return "composition";
      },
      // allowComposition
      get allowComposition() {
        return __allowComposition;
      },
      // install plugin
      async install(app, ...options2) {
        app.__VUE_I18N_SYMBOL__ = symbol;
        app.provide(app.__VUE_I18N_SYMBOL__, i18n);
        if (isPlainObject(options2[0])) {
          const opts = options2[0];
          i18n.__composerExtend = opts.__composerExtend;
          i18n.__vueI18nExtend = opts.__vueI18nExtend;
        }
        if (__globalInjection) {
          injectGlobalFields(app, i18n.global);
        }
        {
          apply(app, i18n, ...options2);
        }
        const unmountApp = app.unmount;
        app.unmount = () => {
          i18n.dispose();
          unmountApp();
        };
      },
      // global accessor
      get global() {
        return __global;
      },
      dispose() {
        globalScope.stop();
      },
      // @internal
      __instances,
      // @internal
      __getInstance,
      // @internal
      __setInstance,
      // @internal
      __deleteInstance
    };
    return i18n;
  }
}
function useI18n(options = {}) {
  const instance = getCurrentInstance();
  if (instance == null) {
    throw createI18nError(I18nErrorCodes.MUST_BE_CALL_SETUP_TOP);
  }
  if (!instance.isCE && instance.appContext.app != null && !instance.appContext.app.__VUE_I18N_SYMBOL__) {
    throw createI18nError(I18nErrorCodes.NOT_INSLALLED);
  }
  const i18n = getI18nInstance(instance);
  const global2 = getGlobalComposer(i18n);
  const componentOptions = getComponentOptions(instance);
  const scope = getScope(options, componentOptions);
  if (scope === "global") {
    adjustI18nResources(global2, options, componentOptions);
    return global2;
  }
  if (scope === "parent") {
    let composer2 = getComposer$3(i18n, instance, options.__useComponent);
    if (composer2 == null) {
      composer2 = global2;
    }
    return composer2;
  }
  const i18nInternal = i18n;
  let composer = i18nInternal.__getInstance(instance);
  if (composer == null) {
    const composerOptions = assign$1({}, options);
    if ("__i18n" in componentOptions) {
      composerOptions.__i18n = componentOptions.__i18n;
    }
    if (global2) {
      composerOptions.__root = global2;
    }
    composer = createComposer(composerOptions);
    if (i18nInternal.__composerExtend) {
      i18nInternal.__composerExtend(composer);
    }
    setupLifeCycle(i18nInternal, instance);
    i18nInternal.__setInstance(instance, composer);
  }
  return composer;
}
function createGlobal(options, legacyMode, VueI18nLegacy) {
  const scope = effectScope();
  {
    const obj = scope.run(() => createComposer(options));
    if (obj == null) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    return [scope, obj];
  }
}
function getI18nInstance(instance) {
  {
    const i18n = inject(!instance.isCE ? instance.appContext.app.__VUE_I18N_SYMBOL__ : I18nInjectionKey);
    if (!i18n) {
      throw createI18nError(!instance.isCE ? I18nErrorCodes.UNEXPECTED_ERROR : I18nErrorCodes.NOT_INSLALLED_WITH_PROVIDE);
    }
    return i18n;
  }
}
function getScope(options, componentOptions) {
  return isEmptyObject(options) ? "__i18n" in componentOptions ? "local" : "global" : !options.useScope ? "local" : options.useScope;
}
function getGlobalComposer(i18n) {
  return i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
}
function getComposer$3(i18n, target, useComponent = false) {
  let composer = null;
  const root = target.root;
  let current = target.parent;
  while (current != null) {
    const i18nInternal = i18n;
    if (i18n.mode === "composition") {
      composer = i18nInternal.__getInstance(current);
    }
    if (composer != null) {
      break;
    }
    if (root === current) {
      break;
    }
    current = current.parent;
  }
  return composer;
}
function setupLifeCycle(i18n, target, composer) {
  {
    onUnmounted(() => {
      i18n.__deleteInstance(target);
    }, target);
  }
}
const globalExportProps = [
  "locale",
  "fallbackLocale",
  "availableLocales"
];
const globalExportMethods = ["t", "rt", "d", "n", "tm", "te"];
function injectGlobalFields(app, composer) {
  const i18n = /* @__PURE__ */ Object.create(null);
  globalExportProps.forEach((prop) => {
    const desc = Object.getOwnPropertyDescriptor(composer, prop);
    if (!desc) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const wrap = isRef(desc.value) ? {
      get() {
        return desc.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(val) {
        desc.value.value = val;
      }
    } : {
      get() {
        return desc.get && desc.get();
      }
    };
    Object.defineProperty(i18n, prop, wrap);
  });
  app.config.globalProperties.$i18n = i18n;
  globalExportMethods.forEach((method) => {
    const desc = Object.getOwnPropertyDescriptor(composer, method);
    if (!desc || !desc.value) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    Object.defineProperty(app.config.globalProperties, `$${method}`, desc);
  });
}
registerMessageResolver(resolveValue);
registerLocaleFallbacker(fallbackWithLocaleChain);
{
  initFeatureFlags();
}
if (__INTLIFY_PROD_DEVTOOLS__) {
  const target = getGlobalThis();
  target.__INTLIFY__ = true;
  setDevToolsHook(target.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const STRATEGIES = {
  PREFIX: "prefix",
  PREFIX_EXCEPT_DEFAULT: "prefix_except_default",
  PREFIX_AND_DEFAULT: "prefix_and_default",
  NO_PREFIX: "no_prefix"
};
const DEFAULT_LOCALE = "";
const DEFAULT_STRATEGY = STRATEGIES.PREFIX_EXCEPT_DEFAULT;
const DEFAULT_TRAILING_SLASH = false;
const DEFAULT_ROUTES_NAME_SEPARATOR = "___";
const DEFAULT_LOCALE_ROUTE_NAME_SUFFIX = "default";
const DEFAULT_DETECTION_DIRECTION = "ltr";
const DEFAULT_BASE_URL = "";
const DEFAULT_DYNAMIC_PARAMS_KEY = "";
/*!
  * shared v9.3.0-beta.16
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
const makeSymbol = (name, shareable = false) => !shareable ? Symbol(name) : Symbol.for(name);
const assign = Object.assign;
const isArray = Array.isArray;
const isFunction$1 = (val) => typeof val === "function";
const isString$1 = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject = (val) => val !== null && typeof val === "object";
const TRAILING_SLASH_RE = /\/$|\/\?/;
function hasTrailingSlash(input = "", queryParameters = false) {
  if (!queryParameters) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", queryParameters = false) {
  if (!queryParameters) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return (s0.slice(0, -1) || "/") + (s.length > 0 ? `?${s.join("?")}` : "");
}
function withTrailingSlash(input = "", queryParameters = false) {
  if (!queryParameters) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return s0 + "/" + (s.length > 0 ? `?${s.join("?")}` : "");
}
function warn(msg, err) {
  if (typeof console !== "undefined") {
    console.warn(`[vue-i18n-routing] ` + msg);
    if (err) {
      console.warn(err.stack);
    }
  }
}
function getNormalizedLocales(locales) {
  locales = locales || [];
  const normalized = [];
  for (const locale of locales) {
    if (isString$1(locale)) {
      normalized.push({ code: locale });
    } else {
      normalized.push(locale);
    }
  }
  return normalized;
}
function isI18nInstance(i18n) {
  return i18n != null && "global" in i18n && "mode" in i18n;
}
function isComposer(target) {
  return target != null && !("__composer" in target) && isRef(target.locale);
}
function isVueI18n(target) {
  return target != null && "__composer" in target;
}
function isExportedGlobalComposer(target) {
  return target != null && !("__composer" in target) && !isRef(target.locale);
}
function isLegacyVueI18n$1(target) {
  return target != null && ("__VUE_I18N_BRIDGE__" in target || "_sync" in target);
}
function getComposer(i18n) {
  return isI18nInstance(i18n) ? isComposer(i18n.global) ? i18n.global : i18n.global.__composer : isVueI18n(i18n) ? i18n.__composer : i18n;
}
function getLocale(i18n) {
  const target = isI18nInstance(i18n) ? i18n.global : i18n;
  return isComposer(target) ? target.locale.value : isExportedGlobalComposer(target) || isVueI18n(target) || isLegacyVueI18n$1(target) ? target.locale : target.locale;
}
function getLocales(i18n) {
  const target = isI18nInstance(i18n) ? i18n.global : i18n;
  return isComposer(target) ? target.locales.value : isExportedGlobalComposer(target) || isVueI18n(target) || isLegacyVueI18n$1(target) ? target.locales : target.locales;
}
function getLocaleCodes(i18n) {
  const target = isI18nInstance(i18n) ? i18n.global : i18n;
  return isComposer(target) ? target.localeCodes.value : isExportedGlobalComposer(target) || isVueI18n(target) || isLegacyVueI18n$1(target) ? target.localeCodes : target.localeCodes;
}
function setLocale(i18n, locale) {
  const target = isI18nInstance(i18n) ? i18n.global : i18n;
  if (isComposer(target)) {
    {
      target.locale.value = locale;
    }
  } else if (isExportedGlobalComposer(target) || isVueI18n(target) || isLegacyVueI18n$1(target)) {
    target.locale = locale;
  } else {
    throw new Error("TODO:");
  }
}
function getRouteName(routeName) {
  return isString$1(routeName) ? routeName : isSymbol(routeName) ? routeName.toString() : "(null)";
}
function getLocaleRouteName(routeName, locale, {
  defaultLocale,
  strategy,
  routesNameSeparator,
  defaultLocaleRouteNameSuffix
}) {
  let name = getRouteName(routeName) + (strategy === "no_prefix" ? "" : routesNameSeparator + locale);
  if (locale === defaultLocale && strategy === "prefix_and_default") {
    name += routesNameSeparator + defaultLocaleRouteNameSuffix;
  }
  return name;
}
function resolveBaseUrl(baseUrl, context) {
  if (isFunction$1(baseUrl)) {
    return baseUrl(context);
  }
  return baseUrl;
}
function matchBrowserLocale(locales, browserLocales) {
  const matchedLocales = [];
  for (const [index, browserCode] of browserLocales.entries()) {
    const matchedLocale = locales.find((l) => l.iso.toLowerCase() === browserCode.toLowerCase());
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 1 - index / browserLocales.length });
      break;
    }
  }
  for (const [index, browserCode] of browserLocales.entries()) {
    const languageCode = browserCode.split("-")[0].toLowerCase();
    const matchedLocale = locales.find((l) => l.iso.split("-")[0].toLowerCase() === languageCode);
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 0.999 - index / browserLocales.length });
      break;
    }
  }
  return matchedLocales;
}
const DefaultBrowserLocaleMatcher = matchBrowserLocale;
function compareBrowserLocale(a, b) {
  if (a.score === b.score) {
    return b.code.length - a.code.length;
  }
  return b.score - a.score;
}
const DefaultBrowerLocaleComparer = compareBrowserLocale;
function findBrowserLocale(locales, browserLocales, { matcher = DefaultBrowserLocaleMatcher, comparer = DefaultBrowerLocaleComparer } = {}) {
  const normalizedLocales = [];
  for (const l of locales) {
    const { code: code2 } = l;
    const iso = l.iso || code2;
    normalizedLocales.push({ code: code2, iso });
  }
  const matchedLocales = matcher(normalizedLocales, browserLocales);
  if (matchedLocales.length > 1) {
    matchedLocales.sort(comparer);
  }
  return matchedLocales.length ? matchedLocales[0].code : "";
}
function proxyVueInstance(target) {
  return function() {
    return Reflect.apply(
      target,
      {
        getRouteBaseName: this.getRouteBaseName,
        localePath: this.localePath,
        localeRoute: this.localeRoute,
        localeLocation: this.localeLocation,
        resolveRoute: this.resolveRoute,
        switchLocalePath: this.switchLocalePath,
        localeHead: this.localeHead,
        i18n: this.$i18n,
        route: this.$route,
        router: this.$router
      },
      arguments
    );
  };
}
function extendI18n(i18n, {
  locales = [],
  localeCodes: localeCodes2 = [],
  baseUrl = DEFAULT_BASE_URL,
  hooks = {},
  context = {}
} = {}) {
  const scope = effectScope();
  const orgInstall = i18n.install;
  i18n.install = (vue, ...options) => {
    const pluginOptions = isPluginOptions(options[0]) ? assign({}, options[0]) : { inject: true };
    if (pluginOptions.inject == null) {
      pluginOptions.inject = true;
    }
    const orgComposerExtend = pluginOptions.__composerExtend;
    pluginOptions.__composerExtend = (c) => {
      const g = getComposer(i18n);
      c.locales = computed(() => g.locales.value);
      c.localeCodes = computed(() => g.localeCodes.value);
      c.baseUrl = computed(() => g.baseUrl.value);
      if (isFunction$1(orgComposerExtend)) {
        Reflect.apply(orgComposerExtend, pluginOptions, [c]);
      }
    };
    if (isVueI18n(i18n.global)) {
      const orgVueI18nExtend = pluginOptions.__vueI18nExtend;
      pluginOptions.__vueI18nExtend = (vueI18n) => {
        extendVueI18n(vueI18n, hooks.onExtendVueI18n);
        if (isFunction$1(orgVueI18nExtend)) {
          Reflect.apply(orgVueI18nExtend, pluginOptions, [vueI18n]);
        }
      };
    }
    options[0] = pluginOptions;
    Reflect.apply(orgInstall, i18n, [vue, ...options]);
    const composer = getComposer(i18n);
    scope.run(() => extendComposer(composer, { locales, localeCodes: localeCodes2, baseUrl, hooks, context }));
    if (isVueI18n(i18n.global)) {
      extendVueI18n(i18n.global, hooks.onExtendVueI18n);
    }
    const app = vue;
    const exported = i18n.mode === "composition" ? app.config.globalProperties.$i18n : null;
    if (exported) {
      extendExportedGlobal(exported, composer, hooks.onExtendExportedGlobal);
    }
    if (pluginOptions.inject) {
      vue.mixin({
        methods: {
          resolveRoute: proxyVueInstance(resolveRoute),
          localePath: proxyVueInstance(localePath),
          localeRoute: proxyVueInstance(localeRoute),
          localeLocation: proxyVueInstance(localeLocation),
          switchLocalePath: proxyVueInstance(switchLocalePath),
          getRouteBaseName: proxyVueInstance(getRouteBaseName),
          localeHead: proxyVueInstance(localeHead)
        }
      });
    }
    if (app.unmount) {
      const unmountApp = app.unmount;
      app.unmount = () => {
        scope.stop();
        unmountApp();
      };
    }
  };
  return scope;
}
function extendComposer(composer, options) {
  const { locales, localeCodes: localeCodes2, baseUrl, context } = options;
  const _locales = ref(locales);
  const _localeCodes = ref(localeCodes2);
  const _baseUrl = ref("");
  composer.locales = computed(() => _locales.value);
  composer.localeCodes = computed(() => _localeCodes.value);
  composer.baseUrl = computed(() => _baseUrl.value);
  {
    _baseUrl.value = resolveBaseUrl(baseUrl, context);
  }
  if (options.hooks && options.hooks.onExtendComposer) {
    options.hooks.onExtendComposer(composer);
  }
}
function extendExportedGlobal(exported, g, hook) {
  const properties = [
    {
      locales: {
        get() {
          return g.locales.value;
        }
      },
      localeCodes: {
        get() {
          return g.localeCodes.value;
        }
      },
      baseUrl: {
        get() {
          return g.baseUrl.value;
        }
      }
    }
  ];
  hook && properties.push(hook(g));
  for (const property of properties) {
    for (const [key, descriptor] of Object.entries(property)) {
      Object.defineProperty(exported, key, descriptor);
    }
  }
}
function extendVueI18n(vueI18n, hook) {
  const composer = getComposer(vueI18n);
  const properties = [
    {
      locales: {
        get() {
          return composer.locales.value;
        }
      },
      localeCodes: {
        get() {
          return composer.localeCodes.value;
        }
      },
      baseUrl: {
        get() {
          return composer.baseUrl.value;
        }
      }
    }
  ];
  hook && properties.push(hook(composer));
  for (const property of properties) {
    for (const [key, descriptor] of Object.entries(property)) {
      Object.defineProperty(vueI18n, key, descriptor);
    }
  }
}
function isPluginOptions(options) {
  return isObject(options) && ("inject" in options || "__composerExtend" in options || "__vueI18nExtend" in options);
}
const GlobalOptionsRegistory = makeSymbol("vue-i18n-routing-gor");
function registerGlobalOptions(router, options) {
  const _options = router[GlobalOptionsRegistory];
  if (_options) {
    warn("already registered global options");
  } else {
    router[GlobalOptionsRegistory] = options;
  }
}
function getGlobalOptions(router) {
  var _a;
  return (_a = router[GlobalOptionsRegistory]) != null ? _a : {};
}
function getLocalesRegex(localeCodes2) {
  return new RegExp(`^/(${localeCodes2.join("|")})(?:/|$)`, "i");
}
function createLocaleFromRouteGetter(localeCodes2, routesNameSeparator, defaultLocaleRouteNameSuffix) {
  const localesPattern = `(${localeCodes2.join("|")})`;
  const defaultSuffixPattern = `(?:${routesNameSeparator}${defaultLocaleRouteNameSuffix})?`;
  const regexpName = new RegExp(`${routesNameSeparator}${localesPattern}${defaultSuffixPattern}$`, "i");
  const regexpPath = getLocalesRegex(localeCodes2);
  const getLocaleFromRoute = (route) => {
    if (isObject(route)) {
      if (route.name) {
        const name = isString$1(route.name) ? route.name : route.name.toString();
        const matches = name.match(regexpName);
        if (matches && matches.length > 1) {
          return matches[1];
        }
      } else if (route.path) {
        const matches = route.path.match(regexpPath);
        if (matches && matches.length > 1) {
          return matches[1];
        }
      }
    } else if (isString$1(route)) {
      const matches = route.match(regexpPath);
      if (matches && matches.length > 1) {
        return matches[1];
      }
    }
    return "";
  };
  return getLocaleFromRoute;
}
function getI18nRoutingOptions(router, proxy, {
  defaultLocale = DEFAULT_LOCALE,
  defaultDirection = DEFAULT_DETECTION_DIRECTION,
  defaultLocaleRouteNameSuffix = DEFAULT_LOCALE_ROUTE_NAME_SUFFIX,
  routesNameSeparator = DEFAULT_ROUTES_NAME_SEPARATOR,
  strategy = DEFAULT_STRATEGY,
  trailingSlash = DEFAULT_TRAILING_SLASH,
  localeCodes: localeCodes2 = [],
  prefixable: prefixable2 = DefaultPrefixable,
  switchLocalePathIntercepter = DefaultSwitchLocalePathIntercepter,
  dynamicRouteParamsKey = DEFAULT_DYNAMIC_PARAMS_KEY
} = {}) {
  const options = getGlobalOptions(router);
  return {
    defaultLocale: proxy.defaultLocale || options.defaultLocale || defaultLocale,
    defaultDirection: proxy.defaultDirection || options.defaultDirection || defaultDirection,
    defaultLocaleRouteNameSuffix: proxy.defaultLocaleRouteNameSuffix || options.defaultLocaleRouteNameSuffix || defaultLocaleRouteNameSuffix,
    routesNameSeparator: proxy.routesNameSeparator || options.routesNameSeparator || routesNameSeparator,
    strategy: proxy.strategy || options.strategy || strategy,
    trailingSlash: proxy.trailingSlash || options.trailingSlash || trailingSlash,
    localeCodes: proxy.localeCodes || options.localeCodes || localeCodes2,
    prefixable: proxy.prefixable || options.prefixable || prefixable2,
    switchLocalePathIntercepter: proxy.switchLocalePathIntercepter || options.switchLocalePathIntercepter || switchLocalePathIntercepter,
    dynamicRouteParamsKey: proxy.dynamicRouteParamsKey || options.dynamicRouteParamsKey || dynamicRouteParamsKey
  };
}
function split(str, index) {
  const result = [str.slice(0, index), str.slice(index)];
  return result;
}
function resolve(router, route, strategy, locale) {
  if (strategy === "prefix") {
    if (isArray(route.matched) && route.matched.length > 0) {
      return route.matched[0];
    }
    const [rootSlash, restPath] = split(route.path, 1);
    const targetPath = `${rootSlash}${locale}${restPath === "" ? restPath : `/${restPath}`}`;
    const _route = router.options.routes.find((r) => r.path === targetPath);
    if (_route == null) {
      return route;
    } else {
      const _resolevableRoute = assign({}, _route);
      _resolevableRoute.path = targetPath;
      return router.resolve(_resolevableRoute);
    }
  } else {
    return router.resolve(route);
  }
}
const RESOLVED_PREFIXED = /* @__PURE__ */ new Set(["prefix_and_default", "prefix_except_default"]);
function prefixable(optons) {
  const { currentLocale, defaultLocale, strategy } = optons;
  const isDefaultLocale = currentLocale === defaultLocale;
  return !(isDefaultLocale && RESOLVED_PREFIXED.has(strategy)) && !(strategy === "no_prefix");
}
const DefaultPrefixable = prefixable;
function getRouteBaseName(givenRoute) {
  const router = this.router;
  const { routesNameSeparator } = getI18nRoutingOptions(router, this);
  const route = givenRoute != null ? isRef(givenRoute) ? unref(givenRoute) : givenRoute : this.route;
  if (route == null || !route.name) {
    return;
  }
  const name = getRouteName(route.name);
  return name.split(routesNameSeparator)[0];
}
function localePath(route, locale) {
  const localizedRoute = resolveRoute.call(this, route, locale);
  return localizedRoute == null ? "" : localizedRoute.redirectedFrom || localizedRoute.fullPath;
}
function localeRoute(route, locale) {
  const resolved = resolveRoute.call(this, route, locale);
  return resolved == null ? void 0 : resolved;
}
function localeLocation(route, locale) {
  const resolved = resolveRoute.call(this, route, locale);
  return resolved == null ? void 0 : resolved;
}
function resolveRoute(route, locale) {
  const router = this.router;
  const i18n = this.i18n;
  const _locale = locale || getLocale(i18n);
  const { routesNameSeparator, defaultLocale, defaultLocaleRouteNameSuffix, strategy, trailingSlash, prefixable: prefixable2 } = getI18nRoutingOptions(router, this);
  let _route = route;
  if (isString$1(route)) {
    if (_route[0] === "/") {
      _route = { path: route };
    } else {
      _route = { name: route };
    }
  }
  let localizedRoute = assign({}, _route);
  if (localizedRoute.path && !localizedRoute.name) {
    let _resolvedRoute = null;
    try {
      _resolvedRoute = resolve(router, localizedRoute, strategy, _locale);
    } catch {
    }
    const resolvedRoute = _resolvedRoute;
    const resolvedRouteName = getRouteBaseName.call(this, resolvedRoute);
    if (isString$1(resolvedRouteName)) {
      localizedRoute = {
        name: getLocaleRouteName(resolvedRouteName, _locale, {
          defaultLocale,
          strategy,
          routesNameSeparator,
          defaultLocaleRouteNameSuffix
        }),
        params: resolvedRoute.params,
        query: resolvedRoute.query,
        hash: resolvedRoute.hash
      };
      {
        localizedRoute.state = resolvedRoute.state;
      }
    } else {
      if (prefixable2({ currentLocale: _locale, defaultLocale, strategy })) {
        localizedRoute.path = `/${_locale}${localizedRoute.path}`;
      }
      localizedRoute.path = trailingSlash ? withTrailingSlash(localizedRoute.path, true) : withoutTrailingSlash(localizedRoute.path, true);
    }
  } else {
    if (!localizedRoute.name && !localizedRoute.path) {
      localizedRoute.name = getRouteBaseName.call(this, this.route);
    }
    localizedRoute.name = getLocaleRouteName(localizedRoute.name, _locale, {
      defaultLocale,
      strategy,
      routesNameSeparator,
      defaultLocaleRouteNameSuffix
    });
  }
  try {
    const resolvedRoute = router.resolve(localizedRoute);
    if (isVue3 ? resolvedRoute.name : resolvedRoute.route.name) {
      return resolvedRoute;
    }
    return router.resolve(route);
  } catch (e) {
    if (e.type === 1) {
      return null;
    }
  }
}
const DefaultSwitchLocalePathIntercepter = (path) => path;
function getLocalizableMetaFromDynamicParams(route, key) {
  const metaDefault = {};
  if (key === DEFAULT_DYNAMIC_PARAMS_KEY) {
    return metaDefault;
  }
  const meta = route.meta;
  if (isRef(meta)) {
    return meta.value[key] || metaDefault;
  } else {
    return meta[key] || metaDefault;
  }
}
function switchLocalePath(locale) {
  const route = this.route;
  const name = getRouteBaseName.call(this, route);
  if (!name) {
    return "";
  }
  const { switchLocalePathIntercepter, dynamicRouteParamsKey } = getI18nRoutingOptions(this.router, this);
  const { params, ...routeCopy } = route;
  const langSwitchParams = getLocalizableMetaFromDynamicParams(route, dynamicRouteParamsKey)[locale] || {};
  const _baseRoute = {
    name,
    params: {
      ...params,
      ...langSwitchParams
    }
  };
  const baseRoute = assign({}, routeCopy, _baseRoute);
  let path = localePath.call(this, baseRoute, locale);
  path = switchLocalePathIntercepter(path, locale);
  return path;
}
function localeHead({ addDirAttribute = false, addSeoAttributes = false, identifierAttribute = "hid" } = {}) {
  const router = this.router;
  const i18n = this.i18n;
  const { defaultDirection } = getI18nRoutingOptions(router, this);
  const metaObject = {
    htmlAttrs: {},
    link: [],
    meta: []
  };
  if (i18n.locales == null || i18n.baseUrl == null) {
    return metaObject;
  }
  const locale = getLocale(i18n);
  const locales = getLocales(i18n);
  const currentLocale = getNormalizedLocales(locales).find((l) => l.code === locale) || {
    code: locale
  };
  const currentLocaleIso = currentLocale.iso;
  const currentLocaleDir = currentLocale.dir || defaultDirection;
  if (addDirAttribute) {
    metaObject.htmlAttrs.dir = currentLocaleDir;
  }
  if (addSeoAttributes && locale && i18n.locales) {
    if (currentLocaleIso) {
      metaObject.htmlAttrs.lang = currentLocaleIso;
    }
    addHreflangLinks.call(this, locales, unref(i18n.baseUrl), metaObject.link, identifierAttribute);
    addCanonicalLinksAndOgUrl.call(
      this,
      unref(i18n.baseUrl),
      metaObject.link,
      metaObject.meta,
      identifierAttribute,
      addSeoAttributes
    );
    addCurrentOgLocale(currentLocale, currentLocaleIso, metaObject.meta, identifierAttribute);
    addAlternateOgLocales(locales, currentLocaleIso, metaObject.meta, identifierAttribute);
  }
  return metaObject;
}
function addHreflangLinks(locales, baseUrl, link, identifierAttribute) {
  const router = this.router;
  const { defaultLocale, strategy } = getI18nRoutingOptions(router, this);
  if (strategy === STRATEGIES.NO_PREFIX) {
    return;
  }
  const localeMap = /* @__PURE__ */ new Map();
  for (const locale of locales) {
    const localeIso = locale.iso;
    if (!localeIso) {
      warn("Locale ISO code is required to generate alternate link");
      continue;
    }
    const [language, region] = localeIso.split("-");
    if (language && region && (locale.isCatchallLocale || !localeMap.has(language))) {
      localeMap.set(language, locale);
    }
    localeMap.set(localeIso, locale);
  }
  for (const [iso, mapLocale] of localeMap.entries()) {
    const localePath2 = switchLocalePath.call(this, mapLocale.code);
    if (localePath2) {
      link.push({
        [identifierAttribute]: `i18n-alt-${iso}`,
        rel: "alternate",
        href: toAbsoluteUrl(localePath2, baseUrl),
        hreflang: iso
      });
    }
  }
  if (defaultLocale) {
    const localePath2 = switchLocalePath.call(this, defaultLocale);
    if (localePath2) {
      link.push({
        [identifierAttribute]: "i18n-xd",
        rel: "alternate",
        href: toAbsoluteUrl(localePath2, baseUrl),
        hreflang: "x-default"
      });
    }
  }
}
function addCanonicalLinksAndOgUrl(baseUrl, link, meta, identifierAttribute, seoAttributesOptions) {
  const route = this.route;
  const currentRoute = localeRoute.call(this, {
    ...route,
    name: getRouteBaseName.call(this, route)
  });
  if (currentRoute) {
    let href = toAbsoluteUrl(currentRoute.path, baseUrl);
    const canonicalQueries = isObject(seoAttributesOptions) && seoAttributesOptions.canonicalQueries || [];
    if (canonicalQueries.length) {
      const currentRouteQueryParams = currentRoute.query;
      const params = new URLSearchParams();
      for (const queryParamName of canonicalQueries) {
        if (queryParamName in currentRouteQueryParams) {
          const queryParamValue = currentRouteQueryParams[queryParamName];
          if (isArray(queryParamValue)) {
            queryParamValue.forEach((v) => params.append(queryParamName, v || ""));
          } else {
            params.append(queryParamName, queryParamValue || "");
          }
        }
      }
      const queryString = params.toString();
      if (queryString) {
        href = `${href}?${queryString}`;
      }
    }
    link.push({
      [identifierAttribute]: "i18n-can",
      rel: "canonical",
      href
    });
    meta.push({
      [identifierAttribute]: "i18n-og-url",
      property: "og:url",
      content: href
    });
  }
}
function addCurrentOgLocale(currentLocale, currentLocaleIso, meta, identifierAttribute) {
  const hasCurrentLocaleAndIso = currentLocale && currentLocaleIso;
  if (!hasCurrentLocaleAndIso) {
    return;
  }
  meta.push({
    [identifierAttribute]: "i18n-og",
    property: "og:locale",
    content: hypenToUnderscore(currentLocaleIso)
  });
}
function addAlternateOgLocales(locales, currentLocaleIso, meta, identifierAttribute) {
  const localesWithoutCurrent = locales.filter((locale) => {
    const localeIso = locale.iso;
    return localeIso && localeIso !== currentLocaleIso;
  });
  if (localesWithoutCurrent.length) {
    const alternateLocales = localesWithoutCurrent.map((locale) => ({
      [identifierAttribute]: `i18n-og-alt-${locale.iso}`,
      property: "og:locale:alternate",
      content: hypenToUnderscore(locale.iso)
    }));
    meta.push(...alternateLocales);
  }
}
function hypenToUnderscore(str) {
  return (str || "").replace(/-/g, "_");
}
function toAbsoluteUrl(urlOrPath, baseUrl) {
  if (urlOrPath.match(/^https?:\/\//)) {
    return urlOrPath;
  }
  return baseUrl + urlOrPath;
}
function proxyForComposable(options, target) {
  const {
    router,
    route,
    i18n,
    defaultLocale,
    strategy,
    defaultLocaleRouteNameSuffix,
    trailingSlash,
    routesNameSeparator
  } = options;
  return function(...args) {
    return Reflect.apply(
      target,
      {
        router,
        route,
        i18n,
        defaultLocale,
        strategy,
        defaultLocaleRouteNameSuffix,
        trailingSlash,
        routesNameSeparator
      },
      args
    );
  };
}
function useLocalePath({
  router = useRouter$1(),
  route = useRoute$1(),
  i18n = useI18n(),
  defaultLocale = void 0,
  defaultLocaleRouteNameSuffix = void 0,
  routesNameSeparator = void 0,
  strategy = void 0,
  trailingSlash = void 0
} = {}) {
  return proxyForComposable(
    { router, route, i18n, defaultLocale, defaultLocaleRouteNameSuffix, routesNameSeparator, strategy, trailingSlash },
    localePath
  );
}
function useSwitchLocalePath({
  router = useRouter$1(),
  route = useRoute$1(),
  i18n = useI18n(),
  defaultLocale = void 0,
  defaultLocaleRouteNameSuffix = void 0,
  routesNameSeparator = void 0,
  strategy = void 0,
  trailingSlash = void 0
} = {}) {
  return proxyForComposable(
    {
      router,
      route,
      i18n,
      defaultLocale,
      defaultLocaleRouteNameSuffix,
      routesNameSeparator,
      strategy,
      trailingSlash
    },
    switchLocalePath
  );
}
const localeCodes = ["en", "zh"];
const localeMessages = {
  "en": [{ key: "../locales/en-UK.json", load: () => import(
    './_nuxt/en-UK-6f4e7eee.mjs'
    /* webpackChunkName: "lang_en_UK_json_en_UK_json" */
  ) }],
  "zh": [{ key: "../locales/zh-CN.json", load: () => import(
    './_nuxt/zh-CN-d66c9beb.mjs'
    /* webpackChunkName: "lang_zh_CN_json_zh_CN_json" */
  ) }]
};
const additionalMessages = Object({ "en": [], "zh": [] });
const resolveNuxtI18nOptions = async (context) => {
  const nuxtI18nOptions = Object({});
  nuxtI18nOptions.experimental = Object({ "jsTsFormatResource": false });
  nuxtI18nOptions.precompile = Object({ "strictMessage": true, "escapeHtml": false });
  nuxtI18nOptions.vueI18n = Object({});
  nuxtI18nOptions.locales = [Object({ "code": "en", "file": "en-UK.json" }), Object({ "code": "zh", "file": "zh-CN.json" })];
  nuxtI18nOptions.defaultLocale = "zh";
  nuxtI18nOptions.defaultDirection = "ltr";
  nuxtI18nOptions.routesNameSeparator = "___";
  nuxtI18nOptions.trailingSlash = false;
  nuxtI18nOptions.defaultLocaleRouteNameSuffix = "default";
  nuxtI18nOptions.strategy = "prefix_except_default";
  nuxtI18nOptions.lazy = true;
  nuxtI18nOptions.langDir = "locales";
  nuxtI18nOptions.rootRedirect = null;
  nuxtI18nOptions.detectBrowserLanguage = Object({ "alwaysRedirect": false, "cookieCrossOrigin": false, "cookieDomain": null, "cookieKey": "i18n_redirected", "cookieSecure": false, "fallbackLocale": "", "redirectOn": "root", "useCookie": true });
  nuxtI18nOptions.differentDomains = false;
  nuxtI18nOptions.baseUrl = "";
  nuxtI18nOptions.dynamicRouteParams = false;
  nuxtI18nOptions.customRoutes = "page";
  nuxtI18nOptions.pages = Object({});
  nuxtI18nOptions.skipSettingLocaleOnNavigate = false;
  nuxtI18nOptions.types = "composition";
  nuxtI18nOptions.debug = false;
  return nuxtI18nOptions;
};
const nuxtI18nOptionsDefault = Object({ experimental: Object({ "jsTsFormatResource": false }), precompile: Object({ "strictMessage": true, "escapeHtml": false }), vueI18n: "", locales: [], defaultLocale: "", defaultDirection: "ltr", routesNameSeparator: "___", trailingSlash: false, defaultLocaleRouteNameSuffix: "default", strategy: "prefix_except_default", lazy: false, langDir: null, rootRedirect: null, detectBrowserLanguage: Object({ "alwaysRedirect": false, "cookieCrossOrigin": false, "cookieDomain": null, "cookieKey": "i18n_redirected", "cookieSecure": false, "fallbackLocale": "", "redirectOn": "root", "useCookie": true }), differentDomains: false, baseUrl: "", dynamicRouteParams: false, customRoutes: "page", pages: Object({}), skipSettingLocaleOnNavigate: false, types: "composition", debug: false });
const nuxtI18nInternalOptions = Object({ __normalizedLocales: [Object({ "code": "en", "file": "en-UK.json" }), Object({ "code": "zh", "file": "zh-CN.json" })] });
const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n";
const isSSG = false;
function formatMessage(message) {
  return NUXT_I18N_MODULE_ID + " " + message;
}
function isLegacyVueI18n(target) {
  return target != null && ("__VUE_I18N_BRIDGE__" in target || "_sync" in target);
}
function callVueI18nInterfaces(i18n, name, ...args) {
  const target = isI18nInstance(i18n) ? i18n.global : i18n;
  const [obj, method] = [target, target[name]];
  return Reflect.apply(method, obj, [...args]);
}
function getVueI18nPropertyValue(i18n, name) {
  const target = isI18nInstance(i18n) ? i18n.global : i18n;
  const ret = isComposer(target) ? target[name].value : isExportedGlobalComposer(target) || isVueI18n(target) || isLegacyVueI18n(target) ? target[name] : target[name];
  return ret;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
function proxyNuxt(nuxt, target) {
  return function() {
    return Reflect.apply(
      target,
      {
        i18n: nuxt.$i18n,
        getRouteBaseName: nuxt.$getRouteBaseName,
        localePath: nuxt.$localePath,
        localeRoute: nuxt.$localeRoute,
        switchLocalePath: nuxt.$switchLocalePath,
        localeHead: nuxt.$localeHead,
        route: nuxt.$router.currentRoute.value,
        router: nuxt.$router
      },
      // eslint-disable-next-line prefer-rest-params
      arguments
    );
  };
}
function parseAcceptLanguage(input) {
  return input.split(",").map((tag) => tag.split(";")[0]);
}
function deepCopy(src, des, predicate) {
  for (const key in src) {
    if (isObject$1(src[key])) {
      if (!isObject$1(des[key]))
        des[key] = {};
      deepCopy(src[key], des[key], predicate);
    } else {
      if (predicate) {
        if (predicate(src[key], des[key])) {
          des[key] = src[key];
        }
      } else {
        des[key] = src[key];
      }
    }
  }
}
async function loadMessage(context, loader, locale) {
  var _a, _b;
  const i18nConfig = (_a = context.$config.public) == null ? void 0 : _a.i18n;
  let message = null;
  try {
    const getter = await loader().then((r) => r.default || r);
    if (isFunction$2(getter)) {
      if ((_b = i18nConfig.experimental) == null ? void 0 : _b.jsTsFormatResource) {
        message = await getter(context, locale).then((r) => r.default || r);
      } else {
        console.warn(
          formatMessage(
            "Not support js / ts extension format as default. you can do enable with `i18n.experimental.jsTsFormatResource: true` (experimental)"
          )
        );
      }
    } else {
      message = getter;
    }
  } catch (e) {
    console.error(formatMessage("Failed locale loading: " + e.message));
  }
  return message;
}
const loadedMessages = /* @__PURE__ */ new Map();
async function loadLocale(context, locale, setter) {
  {
    const loaders = localeMessages[locale];
    if (loaders != null) {
      if (loaders.length === 1) {
        const { key, load } = loaders[0];
        let message = null;
        if (loadedMessages.has(key)) {
          message = loadedMessages.get(key);
        } else {
          message = await loadMessage(context, load, locale);
          if (message != null) {
            loadedMessages.set(key, message);
          }
        }
        if (message != null) {
          setter(locale, message);
        }
      } else if (loaders.length > 1) {
        const targetMessage = {};
        for (const { key, load } of loaders) {
          let message = null;
          if (loadedMessages.has(key)) {
            message = loadedMessages.get(key);
          } else {
            message = await loadMessage(context, load, locale);
            if (message != null) {
              loadedMessages.set(key, message);
            }
          }
          if (message != null) {
            deepCopy(message, targetMessage);
          }
        }
        setter(locale, targetMessage);
      }
    }
  }
}
async function loadAdditionalLocale(context, locale, merger) {
  {
    const additionalLoaders = additionalMessages[locale] || [];
    for (const additionalLoader of additionalLoaders) {
      const message = await loadMessage(context, additionalLoader, locale);
      if (message != null) {
        merger(locale, message);
      }
    }
  }
}
function getBrowserLocale(options, context) {
  let ret;
  {
    const header = useRequestHeaders(["accept-language"]);
    const accept = header["accept-language"];
    if (accept) {
      ret = findBrowserLocale(options.__normalizedLocales, parseAcceptLanguage(accept));
    }
  }
  return ret;
}
function getLocaleCookie(context, {
  useCookie = nuxtI18nOptionsDefault.detectBrowserLanguage.useCookie,
  cookieKey = nuxtI18nOptionsDefault.detectBrowserLanguage.cookieKey,
  localeCodes: localeCodes2 = []
} = {}) {
  if (useCookie) {
    let localeCode;
    {
      const cookie = useRequestHeaders(["cookie"]);
      if ("cookie" in cookie) {
        const parsedCookie = parse(cookie["cookie"]);
        localeCode = parsedCookie[cookieKey];
      }
    }
    if (localeCode && localeCodes2.includes(localeCode)) {
      return localeCode;
    }
  }
}
function setLocaleCookie(locale, context, {
  useCookie = nuxtI18nOptionsDefault.detectBrowserLanguage.useCookie,
  cookieKey = nuxtI18nOptionsDefault.detectBrowserLanguage.cookieKey,
  cookieDomain = nuxtI18nOptionsDefault.detectBrowserLanguage.cookieDomain,
  cookieSecure = nuxtI18nOptionsDefault.detectBrowserLanguage.cookieSecure,
  cookieCrossOrigin = nuxtI18nOptionsDefault.detectBrowserLanguage.cookieCrossOrigin
} = {}) {
  if (!useCookie) {
    return;
  }
  const date = /* @__PURE__ */ new Date();
  const cookieOptions = {
    expires: new Date(date.setDate(date.getDate() + 365)),
    path: "/",
    sameSite: cookieCrossOrigin ? "none" : "lax",
    secure: cookieCrossOrigin || cookieSecure
  };
  if (cookieDomain) {
    cookieOptions.domain = cookieDomain;
  }
  {
    if (context.res) {
      const { res } = context;
      let headers = res.getHeader("Set-Cookie") || [];
      if (!isArray$1(headers)) {
        headers = [String(headers)];
      }
      const redirectCookie = serialize(cookieKey, locale, cookieOptions);
      headers.push(redirectCookie);
      res.setHeader("Set-Cookie", headers);
    }
  }
}
const DefaultDetectBrowserLanguageFromResult = {
  locale: "",
  stat: false,
  reason: "unknown",
  from: "unknown"
};
function detectBrowserLanguage(route, context, nuxtI18nOptions, nuxtI18nInternalOptions2, localeCodes2 = [], locale = "", mode) {
  const { strategy } = nuxtI18nOptions;
  const { redirectOn, alwaysRedirect, useCookie, fallbackLocale } = nuxtI18nOptions.detectBrowserLanguage;
  const path = isString$2(route) ? route : route.path;
  if (strategy !== "no_prefix") {
    if (redirectOn === "root") {
      if (path !== "/") {
        return { locale: "", stat: false, reason: "not_redirect_on_root" };
      }
    } else if (redirectOn === "no prefix") {
      if (!alwaysRedirect && path.match(getLocalesRegex(localeCodes2))) {
        return { locale: "", stat: false, reason: "not_redirect_on_no_prefix" };
      }
    }
  }
  let localeFrom = "unknown";
  let cookieLocale;
  let matchedLocale;
  if (useCookie) {
    matchedLocale = cookieLocale = getLocaleCookie(context, { ...nuxtI18nOptions.detectBrowserLanguage, localeCodes: localeCodes2 });
    localeFrom = "cookie";
  }
  if (!matchedLocale) {
    matchedLocale = getBrowserLocale(nuxtI18nInternalOptions2);
    localeFrom = "navigator_or_header";
  }
  const finalLocale = matchedLocale || fallbackLocale;
  if (!matchedLocale && fallbackLocale) {
    localeFrom = "fallback";
  }
  const vueI18nLocale = locale || nuxtI18nOptions.vueI18n.locale;
  if (finalLocale && (!useCookie || alwaysRedirect || !cookieLocale)) {
    if (strategy === "no_prefix") {
      return { locale: finalLocale, stat: true, from: localeFrom };
    } else {
      if (finalLocale !== vueI18nLocale) {
        return { locale: finalLocale, stat: true, from: localeFrom };
      } else if (alwaysRedirect) {
        const redirectOnRoot = path === "/";
        const redirectOnAll = redirectOn === "all";
        const redirectOnNoPrefix = redirectOn === "no prefix" && !path.match(getLocalesRegex(localeCodes2));
        if (redirectOnRoot || redirectOnAll || redirectOnNoPrefix) {
          return { locale: finalLocale, stat: true, from: localeFrom };
        }
      }
    }
  }
  if (mode === "ssg_setup" && finalLocale) {
    return { locale: finalLocale, stat: true, from: localeFrom };
  }
  return { locale: "", stat: false, reason: "not_found_match" };
}
function getHost() {
  let host;
  {
    const header = useRequestHeaders(["x-forwarded-host", "host"]);
    let detectedHost;
    if ("x-forwarded-host" in header) {
      detectedHost = header["x-forwarded-host"];
    } else if ("host" in header) {
      detectedHost = header["host"];
    }
    host = isArray$1(detectedHost) ? detectedHost[0] : detectedHost;
  }
  return host;
}
function getLocaleDomain(locales) {
  let host = getHost() || "";
  if (host) {
    const matchingLocale = locales.find((locale) => locale.domain === host);
    if (matchingLocale) {
      return matchingLocale.code;
    } else {
      host = "";
    }
  }
  return host;
}
function getDomainFromLocale(localeCode, locales, nuxt) {
  const lang = locales.find((locale) => locale.code === localeCode);
  if (lang && lang.domain) {
    if (hasProtocol(lang.domain)) {
      return lang.domain;
    }
    let protocol;
    {
      const {
        node: { req }
      } = useRequestEvent(nuxt);
      protocol = req && isHTTPS(req) ? "https" : "http";
    }
    return protocol + "://" + lang.domain;
  }
  console.warn(formatMessage("Could not find domain name for locale " + localeCode));
}
function setCookieLocale(i18n, locale) {
  return callVueI18nInterfaces(i18n, "setLocaleCookie", locale);
}
function mergeLocaleMessage(i18n, locale, messages) {
  return callVueI18nInterfaces(i18n, "mergeLocaleMessage", locale, messages);
}
function onBeforeLanguageSwitch(i18n, oldLocale, newLocale, initial, context) {
  return callVueI18nInterfaces(i18n, "onBeforeLanguageSwitch", oldLocale, newLocale, initial, context);
}
function onLanguageSwitched(i18n, oldLocale, newLocale) {
  return callVueI18nInterfaces(i18n, "onLanguageSwitched", oldLocale, newLocale);
}
function makeFallbackLocaleCodes(fallback, locales) {
  let fallbackLocales = [];
  if (isArray$1(fallback)) {
    fallbackLocales = fallback;
  } else if (isObject$1(fallback)) {
    const targets = [...locales, "default"];
    for (const locale of targets) {
      if (fallback[locale]) {
        fallbackLocales = [...fallbackLocales, ...fallback[locale].filter(Boolean)];
      }
    }
  } else if (isString$2(fallback) && locales.every((locale) => locale !== fallback)) {
    fallbackLocales.push(fallback);
  }
  return fallbackLocales;
}
async function loadInitialMessages(context, messages, options) {
  const { defaultLocale, initialLocale, localeCodes: localeCodes2, fallbackLocale, langDir, lazy } = options;
  const setter = (locale, message) => {
    const base = messages[locale] || {};
    messages[locale] = { ...base, ...message };
  };
  if (langDir) {
    if (lazy && fallbackLocale) {
      const fallbackLocales = makeFallbackLocaleCodes(fallbackLocale, [defaultLocale, initialLocale]);
      await Promise.all(fallbackLocales.map((locale) => loadLocale(context, locale, setter)));
    }
    const locales = lazy ? [...(/* @__PURE__ */ new Set()).add(defaultLocale).add(initialLocale)] : localeCodes2;
    await Promise.all(locales.map((locale) => loadLocale(context, locale, setter)));
  }
  return messages;
}
async function mergeAdditionalMessages(context, i18n, locale) {
  await loadAdditionalLocale(
    context,
    locale,
    (locale2, message) => mergeLocaleMessage(i18n, locale2, message)
  );
}
async function loadAndSetLocale(newLocale, context, i18n, {
  useCookie = nuxtI18nOptionsDefault.detectBrowserLanguage.useCookie,
  skipSettingLocaleOnNavigate = nuxtI18nOptionsDefault.skipSettingLocaleOnNavigate,
  differentDomains = nuxtI18nOptionsDefault.differentDomains,
  initial = false,
  lazy = false,
  langDir = null
} = {}) {
  let ret = false;
  const oldLocale = getLocale(i18n);
  if (!newLocale) {
    return [ret, oldLocale];
  }
  if (!initial && differentDomains) {
    return [ret, oldLocale];
  }
  if (oldLocale === newLocale) {
    return [ret, oldLocale];
  }
  const localeOverride = await onBeforeLanguageSwitch(i18n, oldLocale, newLocale, initial, context);
  const localeCodes2 = getLocaleCodes(i18n);
  if (localeOverride && localeCodes2 && localeCodes2.includes(localeOverride)) {
    if (localeOverride === oldLocale) {
      return [ret, oldLocale];
    }
    newLocale = localeOverride;
  }
  if (langDir) {
    const i18nFallbackLocales = getVueI18nPropertyValue(i18n, "fallbackLocale");
    if (lazy) {
      const setter = (locale, message) => mergeLocaleMessage(i18n, locale, message);
      if (i18nFallbackLocales) {
        const fallbackLocales = makeFallbackLocaleCodes(i18nFallbackLocales, [newLocale]);
        await Promise.all(fallbackLocales.map((locale) => loadLocale(context, locale, setter)));
      }
      await loadLocale(context, newLocale, setter);
    }
  }
  await mergeAdditionalMessages(context, i18n, newLocale);
  if (skipSettingLocaleOnNavigate) {
    return [ret, oldLocale];
  }
  if (useCookie) {
    setCookieLocale(i18n, newLocale);
  }
  setLocale(i18n, newLocale);
  await onLanguageSwitched(i18n, oldLocale, newLocale);
  ret = true;
  return [ret, oldLocale];
}
function detectLocale(route, context, routeLocaleGetter, nuxtI18nOptions, initialLocaleLoader, normalizedLocales, localeCodes2 = [], ssgStatus = "normal") {
  const { strategy, defaultLocale, differentDomains } = nuxtI18nOptions;
  const initialLocale = isFunction$2(initialLocaleLoader) ? initialLocaleLoader() : initialLocaleLoader;
  const { locale: browserLocale, stat, reason, from } = nuxtI18nOptions.detectBrowserLanguage ? detectBrowserLanguage(route, context, nuxtI18nOptions, nuxtI18nInternalOptions, localeCodes2, initialLocale, ssgStatus) : DefaultDetectBrowserLanguageFromResult;
  if (reason === "detect_ignore_on_ssg") {
    return initialLocale;
  }
  let finalLocale = browserLocale;
  if (!finalLocale) {
    if (differentDomains) {
      finalLocale = getLocaleDomain(normalizedLocales);
    } else if (strategy !== "no_prefix") {
      finalLocale = routeLocaleGetter(route);
    } else {
      if (!nuxtI18nOptions.detectBrowserLanguage) {
        finalLocale = initialLocale;
      }
    }
  }
  if (!finalLocale && nuxtI18nOptions.detectBrowserLanguage && nuxtI18nOptions.detectBrowserLanguage.useCookie) {
    finalLocale = getLocaleCookie(context, { ...nuxtI18nOptions.detectBrowserLanguage, localeCodes: localeCodes2 });
  }
  if (!finalLocale) {
    finalLocale = defaultLocale || "";
  }
  return finalLocale;
}
function detectRedirect(route, context, targetLocale, routeLocaleGetter, nuxtI18nOptions) {
  const { strategy, defaultLocale, differentDomains } = nuxtI18nOptions;
  let redirectPath = "";
  if (!isI18nRouteDefined(route)) {
    return redirectPath;
  }
  if (!differentDomains && strategy !== "no_prefix" && // skip if already on the new locale unless the strategy is "prefix_and_default" and this is the default
  // locale, in which case we might still redirect as we prefer unprefixed route in this case.
  (routeLocaleGetter(route) !== targetLocale || strategy === "prefix_and_default" && targetLocale === defaultLocale)) {
    const { fullPath } = route;
    const decodedRoute = decodeURI(fullPath);
    const routePath = context.$switchLocalePath(targetLocale) || context.$localePath(fullPath, targetLocale);
    if (isString$2(routePath) && routePath && routePath !== fullPath && routePath !== decodedRoute && !routePath.startsWith("//")) {
      redirectPath = routePath;
    }
  }
  if (differentDomains || isSSG) {
    const switchLocalePath2 = useSwitchLocalePath({
      i18n: getComposer(context.$i18n),
      route,
      router: context.$router
    });
    const routePath = switchLocalePath2(targetLocale);
    if (isString$2(routePath)) {
      redirectPath = routePath;
    }
  }
  return redirectPath;
}
function isRootRedirectOptions(rootRedirect) {
  return isObject$1(rootRedirect) && "path" in rootRedirect && "statusCode" in rootRedirect;
}
const useRedirectState = () => useState(NUXT_I18N_MODULE_ID + ":redirect", () => "");
function _navigate(redirectPath, status) {
  {
    return navigateTo(redirectPath, { redirectCode: status });
  }
}
async function navigate(args, {
  status = 301,
  rootRedirect = nuxtI18nOptionsDefault.rootRedirect,
  differentDomains = nuxtI18nOptionsDefault.differentDomains,
  skipSettingLocaleOnNavigate = nuxtI18nOptionsDefault.skipSettingLocaleOnNavigate
} = {}) {
  const { i18n, locale, route } = args;
  let { redirectPath } = args;
  if (route.path === "/" && rootRedirect) {
    if (isString$2(rootRedirect)) {
      redirectPath = "/" + rootRedirect;
    } else if (isRootRedirectOptions(rootRedirect)) {
      redirectPath = "/" + rootRedirect.path;
      status = rootRedirect.statusCode;
    }
    return _navigate(redirectPath, status);
  }
  if (!differentDomains) {
    if (redirectPath) {
      return _navigate(redirectPath, status);
    }
  } else {
    const state = useRedirectState();
    {
      state.value = redirectPath;
    }
  }
}
function inejctNuxtHelpers(nuxt, i18n) {
  defineGetter(nuxt, "$i18n", i18n.global);
  for (const pair of [
    ["getRouteBaseName", getRouteBaseName],
    ["localePath", localePath],
    ["localeRoute", localeRoute],
    ["switchLocalePath", switchLocalePath],
    ["localeHead", localeHead]
  ]) {
    defineGetter(nuxt, "$" + pair[0], proxyNuxt(nuxt, pair[1]));
  }
}
function extendPrefixable(differentDomains) {
  return (opts) => {
    return DefaultPrefixable(opts) && !differentDomains;
  };
}
function extendSwitchLocalePathIntercepter(differentDomains, normalizedLocales, nuxt) {
  return (path, locale) => {
    if (differentDomains) {
      const domain = getDomainFromLocale(locale, normalizedLocales, nuxt);
      if (domain) {
        return joinURL(domain, path);
      } else {
        return path;
      }
    } else {
      return DefaultSwitchLocalePathIntercepter(path);
    }
  };
}
function extendBaseUrl(baseUrl, options) {
  return (context) => {
    var _a, _b;
    if (isFunction$2(baseUrl)) {
      const baseUrlResult = baseUrl(context);
      return baseUrlResult;
    }
    const { differentDomains, localeCodeLoader, normalizedLocales } = options;
    const localeCode = isFunction$2(localeCodeLoader) ? localeCodeLoader() : localeCodeLoader;
    if (differentDomains && localeCode) {
      const domain = getDomainFromLocale(localeCode, normalizedLocales, options.nuxt);
      if (domain) {
        return domain;
      }
    }
    const config = (_b = (_a = context.$config) == null ? void 0 : _a.public) == null ? void 0 : _b.i18n;
    if (config == null ? void 0 : config.baseUrl) {
      return config.baseUrl;
    }
    return baseUrl;
  };
}
function isI18nRouteDefined(route) {
  var _a;
  const i18nLocales = (_a = route.matched[0]) == null ? void 0 : _a.meta.nuxtI18n;
  return i18nLocales ? Object.keys(i18nLocales).length > 0 : false;
}
const i18n_ayDIKevr8m = /* @__PURE__ */ defineNuxtPlugin(async (nuxt) => {
  let __temp, __restore;
  const router = useRouter();
  const route = useRoute();
  const { vueApp: app } = nuxt;
  const nuxtContext = nuxt;
  const nuxtI18nOptions = ([__temp, __restore] = executeAsync(() => resolveNuxtI18nOptions()), __temp = await __temp, __restore(), __temp);
  const useCookie = nuxtI18nOptions.detectBrowserLanguage && nuxtI18nOptions.detectBrowserLanguage.useCookie;
  const { __normalizedLocales: normalizedLocales } = nuxtI18nInternalOptions;
  const {
    defaultLocale,
    differentDomains,
    skipSettingLocaleOnNavigate,
    lazy,
    langDir,
    routesNameSeparator,
    defaultLocaleRouteNameSuffix,
    strategy,
    rootRedirect
  } = nuxtI18nOptions;
  nuxtI18nOptions.baseUrl = extendBaseUrl(nuxtI18nOptions.baseUrl, {
    differentDomains,
    nuxt: nuxtContext,
    localeCodeLoader: defaultLocale,
    normalizedLocales
  });
  const getLocaleFromRoute = createLocaleFromRouteGetter(localeCodes, routesNameSeparator, defaultLocaleRouteNameSuffix);
  const vueI18nOptions = nuxtI18nOptions.vueI18n;
  vueI18nOptions.messages = vueI18nOptions.messages || {};
  vueI18nOptions.fallbackLocale = vueI18nOptions.fallbackLocale ?? false;
  registerGlobalOptions(router, {
    ...nuxtI18nOptions,
    dynamicRouteParamsKey: "nuxtI18n",
    switchLocalePathIntercepter: extendSwitchLocalePathIntercepter(differentDomains, normalizedLocales, nuxtContext),
    prefixable: extendPrefixable(differentDomains)
  });
  const getDefaultLocale = (defaultLocale2) => defaultLocale2 || vueI18nOptions.locale || "en-US";
  let initialLocale = detectLocale(
    route,
    nuxt.ssrContext,
    getLocaleFromRoute,
    nuxtI18nOptions,
    getDefaultLocale(defaultLocale),
    normalizedLocales,
    localeCodes,
    "normal"
  );
  vueI18nOptions.messages = ([__temp, __restore] = executeAsync(() => loadInitialMessages(nuxtContext, vueI18nOptions.messages, {
    ...nuxtI18nOptions,
    initialLocale,
    fallbackLocale: vueI18nOptions.fallbackLocale,
    localeCodes
  })), __temp = await __temp, __restore(), __temp);
  initialLocale = getDefaultLocale(initialLocale);
  const i18n = createI18n({
    ...vueI18nOptions,
    locale: initialLocale
  });
  let notInitialSetup = true;
  const isInitialLocaleSetup = (locale) => initialLocale !== locale && notInitialSetup;
  extendI18n(i18n, {
    locales: nuxtI18nOptions.locales,
    localeCodes,
    baseUrl: nuxtI18nOptions.baseUrl,
    context: nuxtContext,
    hooks: {
      onExtendComposer(composer) {
        composer.strategy = strategy;
        composer.localeProperties = computed(() => {
          return normalizedLocales.find((l) => l.code === composer.locale.value) || {
            code: composer.locale.value
          };
        });
        composer.setLocale = async (locale) => {
          const localeSetup = isInitialLocaleSetup(locale);
          const [modified] = await loadAndSetLocale(locale, nuxtContext, i18n, {
            useCookie,
            differentDomains,
            initial: localeSetup,
            skipSettingLocaleOnNavigate,
            lazy,
            langDir
          });
          if (modified && localeSetup) {
            notInitialSetup = false;
          }
          const redirectPath = detectRedirect(route, nuxtContext, locale, getLocaleFromRoute, nuxtI18nOptions);
          await navigate(
            {
              i18n,
              redirectPath,
              locale,
              route
            },
            {
              differentDomains,
              skipSettingLocaleOnNavigate,
              rootRedirect
            }
          );
        };
        composer.differentDomains = differentDomains;
        composer.getBrowserLocale = () => getBrowserLocale(nuxtI18nInternalOptions, nuxt.ssrContext);
        composer.getLocaleCookie = () => getLocaleCookie(nuxt.ssrContext, { ...nuxtI18nOptions.detectBrowserLanguage, localeCodes });
        composer.setLocaleCookie = (locale) => setLocaleCookie(locale, nuxt.ssrContext, nuxtI18nOptions.detectBrowserLanguage || void 0);
        composer.onBeforeLanguageSwitch = (oldLocale, newLocale, initialSetup, context) => nuxt.callHook("i18n:beforeLocaleSwitch", { oldLocale, newLocale, initialSetup, context });
        composer.onLanguageSwitched = (oldLocale, newLocale) => nuxt.callHook("i18n:localeSwitched", { oldLocale, newLocale });
        composer.finalizePendingLocaleChange = async () => {
          if (!i18n.__pendingLocale) {
            return;
          }
          setLocale(i18n, i18n.__pendingLocale);
          if (i18n.__resolvePendingLocalePromise) {
            await i18n.__resolvePendingLocalePromise();
          }
          i18n.__pendingLocale = void 0;
        };
        composer.waitForPendingLocaleChange = async () => {
          if (i18n.__pendingLocale && i18n.__pendingLocalePromise) {
            await i18n.__pendingLocalePromise;
          }
        };
      },
      onExtendExportedGlobal(g) {
        return {
          strategy: {
            get() {
              return g.strategy;
            }
          },
          localeProperties: {
            get() {
              return g.localeProperties.value;
            }
          },
          setLocale: {
            get() {
              return async (locale) => Reflect.apply(g.setLocale, g, [locale]);
            }
          },
          differentDomains: {
            get() {
              return g.differentDomains;
            }
          },
          getBrowserLocale: {
            get() {
              return () => Reflect.apply(g.getBrowserLocale, g, []);
            }
          },
          getLocaleCookie: {
            get() {
              return () => Reflect.apply(g.getLocaleCookie, g, []);
            }
          },
          setLocaleCookie: {
            get() {
              return (locale) => Reflect.apply(g.setLocaleCookie, g, [locale]);
            }
          },
          onBeforeLanguageSwitch: {
            get() {
              return (oldLocale, newLocale, initialSetup, context) => Reflect.apply(g.onBeforeLanguageSwitch, g, [oldLocale, newLocale, initialSetup, context]);
            }
          },
          onLanguageSwitched: {
            get() {
              return (oldLocale, newLocale) => Reflect.apply(g.onLanguageSwitched, g, [oldLocale, newLocale]);
            }
          },
          finalizePendingLocaleChange: {
            get() {
              return () => Reflect.apply(g.finalizePendingLocaleChange, g, []);
            }
          },
          waitForPendingLocaleChange: {
            get() {
              return () => Reflect.apply(g.waitForPendingLocaleChange, g, []);
            }
          }
        };
      },
      onExtendVueI18n(composer) {
        return {
          strategy: {
            get() {
              return composer.strategy;
            }
          },
          localeProperties: {
            get() {
              return composer.localeProperties.value;
            }
          },
          setLocale: {
            get() {
              return async (locale) => Reflect.apply(composer.setLocale, composer, [locale]);
            }
          },
          differentDomains: {
            get() {
              return composer.differentDomains;
            }
          },
          getBrowserLocale: {
            get() {
              return () => Reflect.apply(composer.getBrowserLocale, composer, []);
            }
          },
          getLocaleCookie: {
            get() {
              return () => Reflect.apply(composer.getLocaleCookie, composer, []);
            }
          },
          setLocaleCookie: {
            get() {
              return (locale) => Reflect.apply(composer.setLocaleCookie, composer, [locale]);
            }
          },
          onBeforeLanguageSwitch: {
            get() {
              return (oldLocale, newLocale, initialSetup, context) => Reflect.apply(composer.onBeforeLanguageSwitch, composer, [oldLocale, newLocale, initialSetup, context]);
            }
          },
          onLanguageSwitched: {
            get() {
              return (oldLocale, newLocale) => Reflect.apply(composer.onLanguageSwitched, composer, [oldLocale, newLocale]);
            }
          },
          finalizePendingLocaleChange: {
            get() {
              return () => Reflect.apply(composer.finalizePendingLocaleChange, composer, []);
            }
          },
          waitForPendingLocaleChange: {
            get() {
              return () => Reflect.apply(composer.waitForPendingLocaleChange, composer, []);
            }
          }
        };
      }
    }
  });
  const pluginOptions = {
    __composerExtend: (c) => {
      const g = getComposer(i18n);
      c.strategy = g.strategy;
      c.localeProperties = computed(() => g.localeProperties.value);
      c.setLocale = g.setLocale;
      c.differentDomains = g.differentDomains;
      c.getBrowserLocale = g.getBrowserLocale;
      c.getLocaleCookie = g.getLocaleCookie;
      c.setLocaleCookie = g.setLocaleCookie;
      c.onBeforeLanguageSwitch = g.onBeforeLanguageSwitch;
      c.onLanguageSwitched = g.onLanguageSwitched;
      c.finalizePendingLocaleChange = g.finalizePendingLocaleChange;
      c.waitForPendingLocaleChange = g.waitForPendingLocaleChange;
    }
  };
  app.use(i18n, pluginOptions);
  inejctNuxtHelpers(nuxtContext, i18n);
  [__temp, __restore] = executeAsync(() => mergeAdditionalMessages(nuxtContext, i18n, initialLocale)), await __temp, __restore();
  addRouteMiddleware(
    "locale-changing",
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    /* @__PURE__ */ defineNuxtRouteMiddleware(async (to, from) => {
      let __temp2, __restore2;
      const locale = detectLocale(
        to,
        nuxt.ssrContext,
        getLocaleFromRoute,
        nuxtI18nOptions,
        () => {
          return getLocale(i18n) || getDefaultLocale(defaultLocale);
        },
        normalizedLocales,
        localeCodes,
        "normal"
      );
      const localeSetup = isInitialLocaleSetup(locale);
      const [modified] = ([__temp2, __restore2] = executeAsync(() => loadAndSetLocale(locale, nuxtContext, i18n, {
        useCookie,
        differentDomains,
        initial: localeSetup,
        skipSettingLocaleOnNavigate,
        lazy,
        langDir
      })), __temp2 = await __temp2, __restore2(), __temp2);
      if (modified && localeSetup) {
        notInitialSetup = false;
      }
      const redirectPath = detectRedirect(to, nuxtContext, locale, getLocaleFromRoute, nuxtI18nOptions);
      return navigate(
        {
          i18n,
          redirectPath,
          locale,
          route: to
        },
        {
          differentDomains,
          skipSettingLocaleOnNavigate,
          rootRedirect
        }
      );
    }),
    { global: true }
  );
}, 1);
const unocss_MzCDxu9LMj = /* @__PURE__ */ defineNuxtPlugin(() => {
});
const anu_vue_plugin_RGS9YjaLXr = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(anu, { "themes": { "light": { "colors": { "primary": "238.73239436619718,83.52941176470587%,66.66666666666666%", "success": "142.08588957055215,70.56277056277057%,45.294117647058826%", "warning": "37.69230769230769,92.1259842519685%,50.19607843137255%", "danger": "349.72375690607737,89.1625615763547%,60.196078431372555%", "info": "217.2192513368984,91.21951219512195%,59.80392156862745%" }, "cssVars": { "body-bg-c": "0,0%,100%" } }, "dark": { "colors": { "primary": "238.73239436619718,83.52941176470587%,66.66666666666666%", "success": "142.08588957055215,70.56277056277057%,45.294117647058826%", "warning": "37.69230769230769,92.1259842519685%,50.19607843137255%", "danger": "349.72375690607737,89.1625615763547%,60.196078431372555%", "info": "217.2192513368984,91.21951219512195%,59.80392156862745%" }, "cssVars": { "body-bg-c": "0,0%,5.88235294117647%" } } } });
});
const _plugins = [
  plugin_vue3_vV5j15melp,
  revive_payload_server_SU1PJ9JJuo,
  components_plugin_KR1HBZs4kY,
  unhead_XK52crEq5p,
  router_5r4iFHqBdi,
  plugin_server_sYsf0D0IAI,
  composition_UfBb5yEeLH,
  i18n_ayDIKevr8m,
  unocss_MzCDxu9LMj,
  anu_vue_plugin_RGS9YjaLXr
];
const pwaInfo = { "pwaInDevEnvironment": false, "webManifest": { "href": "/manifest.webmanifest", "useCredentials": false, "linkTag": '<link rel="manifest" href="/manifest.webmanifest">' } };
const __nuxt_component_0$1 = /* @__PURE__ */ defineComponent({
  async setup() {
    if (pwaInfo) {
      const meta = ref({ link: [] });
      useHead(meta);
      const { webManifest } = pwaInfo;
      if (webManifest) {
        const { href, useCredentials } = webManifest;
        if (useCredentials) {
          meta.value.link.push({
            rel: "manifest",
            href,
            crossorigin: "use-credentials"
          });
        } else {
          meta.value.link.push({
            rel: "manifest",
            href
          });
        }
      }
    }
    return () => null;
  }
});
const Fragment = /* @__PURE__ */ defineComponent({
  name: "FragmentWrapper",
  setup(_props, { slots }) {
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
});
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? h(component, props === true ? {} : props, slots) : h(Fragment, {}, slots) };
};
const layouts = {
  default: () => import('./_nuxt/default-1cf97f71.mjs').then((m) => m.default || m),
  home: () => import('./_nuxt/home-4eab70b7.mjs').then((m) => m.default || m)
};
const LayoutLoader = /* @__PURE__ */ defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    ...{}
  },
  async setup(props, context) {
    const LayoutComponent = await layouts[props.name]().then((r) => r.default || r);
    return () => {
      return h(LayoutComponent, context.attrs, context.slots);
    };
  }
});
const __nuxt_component_1 = /* @__PURE__ */ defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const injectedRoute = inject("_route");
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout = computed(() => unref(props.name) ?? route.meta.layout ?? "default");
    return () => {
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = route.meta.layoutTransition ?? appLayoutTransition;
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () => _wrapIf(LayoutLoader, hasLayout && {
          key: layout.value,
          name: layout.value,
          ...{},
          ...context.attrs
        }, context.slots).default()
      }).default();
    };
  }
});
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? void 0 : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
const __nuxt_component_0 = /* @__PURE__ */ defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs }) {
    const nuxtApp = useNuxtApp();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            return;
          }
          const key = generateRouteKey(routeProps, props.pageKey);
          const done = nuxtApp.deferHydration();
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          return _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive,
              h(Suspense, {
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).finally(done));
                }
              }, { default: () => h(RouteProvider, { key, routeProps, pageKey: key, hasTransition }) })
            )
          ).default();
        }
      });
    };
  }
});
function _toArray(val) {
  return Array.isArray(val) ? val : val ? [val] : [];
}
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: _toArray(prop.onAfterLeave)
  }));
  return defu(..._props);
}
const RouteProvider = /* @__PURE__ */ defineComponent({
  name: "RouteProvider",
  // TODO: Type props
  // eslint-disable-next-line vue/require-prop-types
  props: ["routeProps", "pageKey", "hasTransition"],
  setup(props) {
    const previousKey = props.pageKey;
    const previousRoute = props.routeProps.route;
    const route = {};
    for (const key in props.routeProps.route) {
      route[key] = computed(() => previousKey === props.pageKey ? props.routeProps.route[key] : previousRoute[key]);
    }
    provide("_route", reactive(route));
    return () => {
      return h(props.routeProps.Component);
    };
  }
});
const isClient = false;
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const noop = () => {
};
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function identity(arg) {
  return arg;
}
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function resolveRef(r) {
  return typeof r === "function" ? computed(r) : ref(r);
}
function tryOnMounted(fn, sync = true) {
  if (getCurrentInstance())
    ;
  else if (sync)
    fn();
  else
    nextTick(fn);
}
function useIntervalFn(cb, interval = 1e3, options = {}) {
  const {
    immediate = true,
    immediateCallback = false
  } = options;
  let timer = null;
  const isActive = ref(false);
  function clean() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }
  function pause() {
    isActive.value = false;
    clean();
  }
  function resume() {
    const intervalValue = resolveUnref(interval);
    if (intervalValue <= 0)
      return;
    isActive.value = true;
    if (immediateCallback)
      cb();
    clean();
    timer = setInterval(cb, intervalValue);
  }
  if (immediate && isClient)
    resume();
  if (isRef(interval) || isFunction(interval)) {
    const stopWatch = watch(interval, () => {
      if (isActive.value && isClient)
        resume();
    });
    tryOnScopeDispose(stopWatch);
  }
  tryOnScopeDispose(pause);
  return {
    isActive,
    pause,
    resume
  };
}
function unrefElement(elRef) {
  var _a;
  const plain = resolveUnref(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
const defaultWindow = void 0;
function useEventListener(...args) {
  let target;
  let events;
  let listeners;
  let options;
  if (isString(args[0]) || Array.isArray(args[0])) {
    [events, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events, listeners, options] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events))
    events = [events];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(() => [unrefElement(target), resolveUnref(options)], ([el, options2]) => {
    cleanup();
    if (!el)
      return;
    cleanups.push(...events.flatMap((event) => {
      return listeners.map((listener) => register(el, event, listener, options2));
    }));
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function useSupported(callback, sync = false) {
  const isSupported = ref();
  const update = () => isSupported.value = Boolean(callback());
  update();
  tryOnMounted(update, sync);
  return isSupported;
}
function useMediaQuery(query, options = {}) {
  const { window = defaultWindow } = options;
  const isSupported = useSupported(() => window && "matchMedia" in window && "undefined".matchMedia === "function");
  let mediaQuery;
  const matches = ref(false);
  const cleanup = () => {
    if (!mediaQuery)
      return;
    if ("removeEventListener" in mediaQuery)
      mediaQuery.removeEventListener("change", update);
    else
      mediaQuery.removeListener(update);
  };
  const update = () => {
    if (!isSupported.value)
      return;
    cleanup();
    mediaQuery = window.matchMedia(resolveRef(query).value);
    matches.value = mediaQuery.matches;
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", update);
    else
      mediaQuery.addListener(update);
  };
  watchEffect(update);
  tryOnScopeDispose(() => cleanup());
  return matches;
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
function usePreferredDark(options) {
  return useMediaQuery("(prefers-color-scheme: dark)", options);
}
function useCycleList(list, options) {
  var _a;
  const state = shallowRef((_a = options == null ? void 0 : options.initialValue) != null ? _a : list[0]);
  const index = computed({
    get() {
      var _a2;
      let index2 = (options == null ? void 0 : options.getIndexOf) ? options.getIndexOf(state.value, list) : list.indexOf(state.value);
      if (index2 < 0)
        index2 = (_a2 = options == null ? void 0 : options.fallbackIndex) != null ? _a2 : 0;
      return index2;
    },
    set(v) {
      set2(v);
    }
  });
  function set2(i) {
    const length = list.length;
    const index2 = (i % length + length) % length;
    const value = list[index2];
    state.value = value;
    return value;
  }
  function shift(delta = 1) {
    return set2(index.value + delta);
  }
  function next(n = 1) {
    return shift(n);
  }
  function prev(n = 1) {
    return shift(-n);
  }
  return {
    state,
    index,
    next,
    prev
  };
}
function useRafFn(fn, options = {}) {
  const {
    immediate = true,
    window = defaultWindow
  } = options;
  const isActive = ref(false);
  let previousFrameTimestamp = 0;
  let rafId = null;
  function loop(timestamp) {
    if (!isActive.value || !window)
      return;
    const delta = timestamp - previousFrameTimestamp;
    fn({ delta, timestamp });
    previousFrameTimestamp = timestamp;
    rafId = window.requestAnimationFrame(loop);
  }
  function resume() {
    if (!isActive.value && window) {
      isActive.value = true;
      rafId = window.requestAnimationFrame(loop);
    }
  }
  function pause() {
    isActive.value = false;
    if (rafId != null && window) {
      window.cancelAnimationFrame(rafId);
      rafId = null;
    }
  }
  if (immediate)
    resume();
  tryOnScopeDispose(pause);
  return {
    isActive: readonly(isActive),
    pause,
    resume
  };
}
function useElementVisibility(element, { window = defaultWindow, scrollTarget } = {}) {
  const elementIsVisible = ref(false);
  const testBounding = () => {
    if (!window)
      return;
    const document2 = window.document;
    const el = unrefElement(element);
    if (!el) {
      elementIsVisible.value = false;
    } else {
      const rect = el.getBoundingClientRect();
      elementIsVisible.value = rect.top <= (window.innerHeight || document2.documentElement.clientHeight) && rect.left <= (window.innerWidth || document2.documentElement.clientWidth) && rect.bottom >= 0 && rect.right >= 0;
    }
  };
  watch(() => unrefElement(element), () => testBounding(), { immediate: true, flush: "post" });
  if (window) {
    useEventListener(scrollTarget || window, "scroll", testBounding, {
      capture: false,
      passive: true
    });
  }
  return elementIsVisible;
}
var __defProp$7 = Object.defineProperty;
var __getOwnPropSymbols$7 = Object.getOwnPropertySymbols;
var __hasOwnProp$7 = Object.prototype.hasOwnProperty;
var __propIsEnum$7 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$7 = (obj, key, value) => key in obj ? __defProp$7(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$7 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$7.call(b, prop))
      __defNormalProp$7(a, prop, b[prop]);
  if (__getOwnPropSymbols$7)
    for (var prop of __getOwnPropSymbols$7(b)) {
      if (__propIsEnum$7.call(b, prop))
        __defNormalProp$7(a, prop, b[prop]);
    }
  return a;
};
function useNow(options = {}) {
  const {
    controls: exposeControls = false,
    interval = "requestAnimationFrame"
  } = options;
  const now = ref(/* @__PURE__ */ new Date());
  const update = () => now.value = /* @__PURE__ */ new Date();
  const controls = interval === "requestAnimationFrame" ? useRafFn(update, { immediate: true }) : useIntervalFn(update, interval, { immediate: true });
  if (exposeControls) {
    return __spreadValues$7({
      now
    }, controls);
  } else {
    return now;
  }
}
var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
var __defProp$2 = Object.defineProperty;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const DEFAULT_UNITS = [
  { max: 6e4, value: 1e3, name: "second" },
  { max: 276e4, value: 6e4, name: "minute" },
  { max: 72e6, value: 36e5, name: "hour" },
  { max: 5184e5, value: 864e5, name: "day" },
  { max: 24192e5, value: 6048e5, name: "week" },
  { max: 28512e6, value: 2592e6, name: "month" },
  { max: Infinity, value: 31536e6, name: "year" }
];
const DEFAULT_MESSAGES = {
  justNow: "just now",
  past: (n) => n.match(/\d/) ? `${n} ago` : n,
  future: (n) => n.match(/\d/) ? `in ${n}` : n,
  month: (n, past) => n === 1 ? past ? "last month" : "next month" : `${n} month${n > 1 ? "s" : ""}`,
  year: (n, past) => n === 1 ? past ? "last year" : "next year" : `${n} year${n > 1 ? "s" : ""}`,
  day: (n, past) => n === 1 ? past ? "yesterday" : "tomorrow" : `${n} day${n > 1 ? "s" : ""}`,
  week: (n, past) => n === 1 ? past ? "last week" : "next week" : `${n} week${n > 1 ? "s" : ""}`,
  hour: (n) => `${n} hour${n > 1 ? "s" : ""}`,
  minute: (n) => `${n} minute${n > 1 ? "s" : ""}`,
  second: (n) => `${n} second${n > 1 ? "s" : ""}`,
  invalid: ""
};
const DEFAULT_FORMATTER = (date) => date.toISOString().slice(0, 10);
function useTimeAgo(time, options = {}) {
  const {
    controls: exposeControls = false,
    updateInterval = 3e4
  } = options;
  const _a = useNow({ interval: updateInterval, controls: true }), { now } = _a, controls = __objRest(_a, ["now"]);
  const timeAgo = computed(() => formatTimeAgo(new Date(resolveUnref(time)), options, unref(now.value)));
  if (exposeControls) {
    return __spreadValues$2({
      timeAgo
    }, controls);
  } else {
    return timeAgo;
  }
}
function formatTimeAgo(from, options = {}, now = Date.now()) {
  var _a;
  const {
    max,
    messages = DEFAULT_MESSAGES,
    fullDateFormatter = DEFAULT_FORMATTER,
    units = DEFAULT_UNITS,
    showSecond = false,
    rounding = "round"
  } = options;
  const roundFn = typeof rounding === "number" ? (n) => +n.toFixed(rounding) : Math[rounding];
  const diff = +now - +from;
  const absDiff = Math.abs(diff);
  function getValue(diff2, unit) {
    return roundFn(Math.abs(diff2) / unit.value);
  }
  function format2(diff2, unit) {
    const val = getValue(diff2, unit);
    const past = diff2 > 0;
    const str = applyFormat(unit.name, val, past);
    return applyFormat(past ? "past" : "future", str, past);
  }
  function applyFormat(name, val, isPast) {
    const formatter = messages[name];
    if (typeof formatter === "function")
      return formatter(val, isPast);
    return formatter.replace("{0}", val.toString());
  }
  if (absDiff < 6e4 && !showSecond)
    return messages.justNow;
  if (typeof max === "number" && absDiff > max)
    return fullDateFormatter(new Date(from));
  if (typeof max === "string") {
    const unitMax = (_a = units.find((i) => i.name === max)) == null ? void 0 : _a.max;
    if (unitMax && absDiff > unitMax)
      return fullDateFormatter(new Date(from));
  }
  for (const [idx, unit] of units.entries()) {
    const val = getValue(diff, unit);
    if (val <= 0 && units[idx - 1])
      return format2(diff, units[idx - 1]);
    if (absDiff < unit.max)
      return format2(diff, unit);
  }
  return messages.invalid;
}
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const _TransitionPresets = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
__spreadValues({
  linear: identity
}, _TransitionPresets);
const appName = "Topverse";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: appName,
      bodyAttrs: {
        class: "scrollbar-thumb-color-dark-50 scrollbar-track-color-transparent scrollbar-radius-2 scrollbar-thumb-radius-4 scrollbar-w-4px scrollbar scrollbar-rounded"
      }
    });
    usePreferredDark();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VitePwaManifest = __nuxt_component_0$1;
      const _component_NuxtLayout = __nuxt_component_1;
      const _component_NuxtPage = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_VitePwaManifest, null, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLayout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtPage)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const ErrorComponent = /* @__PURE__ */ defineAsyncComponent(() => import('./_nuxt/error-component-24ff620e.mjs').then((r) => r.default || r));
    const IslandRenderer = /* @__PURE__ */ defineAsyncComponent(() => import('./_nuxt/island-renderer-5f9a18a7.mjs').then((r) => r.default || r));
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide("_route", useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = callWithNuxt(nuxtApp, showError, [err]);
        onServerPrefetch(() => p);
        return false;
      }
    });
    const { islandContext } = nuxtApp.ssrContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/nuxt@3.4.0_@types+node@18.16.16_eslint@8.38.0_rollup@2.79.1_sass@1.62.1_typescript@4.9.5_vue-tsc@1.2.0/node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
let entry;
const plugins = normalizePlugins(_plugins);
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.hooks.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);

export { __nuxt_component_0 as _, useHead as a, componentName as b, createError as c, useState as d, entry$1 as default, useRouter as e, useRequestFetch as f, useTimeAgo as g, useRoute as h, useCycleList as i, useI18n as j, useLocalePath as k, getComposer as l, useNuxtApp as m, navigateTo as n, useSwitchLocalePath as o, useRequestEvent as p, defineStore as q, useElementVisibility as r, useRuntimeConfig as u };
//# sourceMappingURL=server.mjs.map
