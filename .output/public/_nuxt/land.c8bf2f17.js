import{r as m,J as v,V as w,o as p,e as g,f as _}from"./entry.cb7ee9f7.js";/*!
 * unity-webgl.js v3.4.2
 * (c) 2023 Mervin<mengqing723@gmail.com>
 * Released under the MIT License.
 */const c=s=>Object.prototype.toString.call(s)==="[object Object]",u="[UnityWebgl]: ";function o(s){console.log(u,s)}o.warn=s=>console.warn(u,s);o.error=s=>console.error(u,s);function d(s){return s instanceof HTMLCanvasElement?s:typeof s=="string"?document.querySelector(s):(o.warn("CanvasElement not found."),null)}class E{constructor(t={}){this._eventMap=t}on(t,n){if(typeof n!="function")throw new TypeError(u+"The argument handler must be function");return this._eventMap[t]=n,this}off(t){return delete this._eventMap[t],this}once(t,n){const e=this;function i(...a){typeof n=="function"&&(e.off(t),n.apply(e,a))}return this.on(t,i)}emit(t,...n){const e=this._eventMap[t];e&&e.apply(this,n)}clear(){for(const t in this._eventMap)delete this._eventMap[t]}}function U(s,{resolve:t,reject:n}){if(!s){n&&n(new Error(`${u} loaderUrl not found.`));return}if(typeof window.createUnityInstance=="function"){t&&t();return}function e(r){r==="ready"?t&&t():n&&n(new Error(`${u} ${s} loading failure.`))}let i=document.querySelector(`script[src="${s}"]`);if(i===null){i=document.createElement("script"),i.src=s,i.async=!0,i.setAttribute("data-status","loading"),document.body.appendChild(i);const r=function(y){const h=y.type==="load"?"ready":"error";i==null||i.setAttribute("data-status",h)};i.addEventListener("load",r),i.addEventListener("error",r)}else e(i.getAttribute("data-status"));const a=function(r){e(r.type==="load"?"ready":"error")};return i.addEventListener("load",a),i.addEventListener("error",a),function(){i&&(i.removeEventListener("load",a),i.removeEventListener("error",a),document.body.removeChild(i))}}let l="__UnityLib__";const f={streamingAssetsUrl:"StreamingAssets",companyName:"Unity",productName:"Unity"};function I(s){const t=Object.assign({},s.unityConfig);return t.print=function(n){s.emit("debug",n)},t.printError=function(n){s.emit("error",n)},t}class b extends E{constructor(t,n,e){if(window===void 0)throw new Error(u+"Must be running in browser.");if(e=e??l,c(t)&&typeof n=="string"&&(e=n||e),e in window&&o.error(u+`window.${e} already exists.`),l=e,super(window[e]={}),this.canvasElement=null,this.unityLoader=null,this.unityInstance=null,c(t))this.unityConfig=Object.assign({},f,t);else{this.unityConfig=Object.assign({},f,n);const i=d(t);i&&this.create(i)}}get bridge(){return l}set bridge(t){window[t]=window[l],delete window[l],l=t}create(t){if(this.unityInstance&&this.canvasElement&&this.unityLoader){o.warn("Unity Instance already exists!");return}const n=d(t);if(!n){o.warn("CanvasElement not found.");return}this.emit("beforeMount",this),this.canvasElement=n;const e=this,i=I(this),a=U(this.unityConfig.loaderUrl,{resolve(){try{window.createUnityInstance(n,i,r=>e.emit("progress",r)).then(r=>{e.unityInstance=r,e.emit("created",r),e.emit("mounted",e)}).catch(r=>{e.unityInstance=null,e.emit("error",r)})}catch(r){e.unityInstance=null,e.emit("error",r)}},reject(r){o.error(r.message)}});typeof a=="function"&&(this.unityLoader=a)}send(t,n,e){if(this.unityInstance)if(e==null)this.unityInstance.SendMessage(t,n);else{const i=typeof e=="object"?JSON.stringify(e):e;this.unityInstance.SendMessage(t,n,i)}else o.warn("Unable to Send Message while Unity is not Instantiated.");return this}requestPointerLock(){var t,n;const e=this.canvasElement||((n=(t=this.unityInstance)===null||t===void 0?void 0:t.Module)===null||n===void 0?void 0:n.canvas);e&&e.requestPointerLock()}takeScreenshot(t="image/jpeg",n){var e,i,a;const r=this.canvasElement||((i=(e=this.unityInstance)===null||e===void 0?void 0:e.Module)===null||i===void 0?void 0:i.canvas);if(!r){o.warn("Unable to Take Screenshot while Unity is not Instantiated or Canvas is not available.");return}return((a=this.unityConfig.webglContextAttributes)===null||a===void 0?void 0:a.preserveDrawingBuffer)!==!0&&o.warn('Taking a screenshot requires "preserveDrawingBuffer".'),r.toDataURL(t,n)}setFullscreen(t){if(!this.unityInstance){o.warn("Unable to Set Fullscreen while Unity is not Instantiated.");return}this.unityInstance.SetFullscreen(t?1:0)}unload(){return this.unityInstance===null?(o.warn("Unable to Quit Unity while Unity is not Instantiated."),Promise.reject()):(this.emit("beforeUnmount",this),this.unityLoader&&(this.unityLoader(),this.unityLoader=null),this.unityInstance.Quit().then(()=>{this.emit("unmounted"),this.emit("destroyed"),this.unityInstance=null,delete window[l]}))}_unsafe_unload(){try{if(this.unityInstance===null||!this.unityInstance.Module.canvas)return o.warn("No Unity Instance found."),Promise.reject();const t=this.unityInstance.Module.canvas;return document.body.appendChild(t),t.style.display="none",this.unload().then(()=>{t.remove()})}catch(t){return o.error(t.message),Promise.reject(t)}}}const L={class:"h-screen w-screen"},B={__name:"land",setup(s){const t=m(null);let n=null;return v(()=>{n||(n=new b(t.value,{loaderUrl:"/unity/test/Build/Builds.loader.js",dataUrl:"/unity/test/Build/Builds.data",frameworkUrl:"/unity/test/Build/Builds.framework.js",codeUrl:"/unity/test/Build/Builds.wasm"}))}),w(()=>{n&&(n.destroy(),n=null)}),(e,i)=>(p(),g("div",L,[_("canvas",{id:"canvas",ref_key:"canvasRef",ref:t,style:{width:"100%",height:"100%"}},null,512)]))}};export{B as default};
