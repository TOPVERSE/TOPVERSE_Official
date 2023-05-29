import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Divider",
  __ssrInlineRender: true,
  props: {
    "asChild": { type: Boolean },
    "title": null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ className: "relative col-span-full lg:col-span-10 lg:col-start-2 px-50" }, _attrs))}><hr className="border-0 h-px opacity-20 from-white/0 to-white/0 via-[#fff_21.5%,#fff_80%] bg-gradient-to-r">`);
      if (__props.title) {
        _push(`<div className="font-medium absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[hsl(var(--a-body-bg-c))] leading-none text-center whitespace-nowrap p-2 z-10 ">${ssrInterpolate(__props.title)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.asChild) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Divider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Divider-d0e5605d.mjs.map
