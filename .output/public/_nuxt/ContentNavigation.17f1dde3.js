import{h as p,u as f}from"./index.500b5a03.js";import{z as v,_,a as d,D as l,j as g,E as h,A as y,C as r}from"./entry.c3abd651.js";import{_ as w}from"./nuxt-link.16f31b31.js";import{q as C,e as P,j as $}from"./query.79ebe04e.js";import{w as c,s as j,u as N}from"./utils.5e77fdb8.js";import{u as D}from"./preview.bfc27fc9.js";/* empty css                       *//* empty css                      */const E=async n=>{const{content:t}=v().public;typeof(n==null?void 0:n.params)!="function"&&(n=C(n));const a=n.params(),s=t.experimental.stripQueryParameters?c(`/navigation/${`${p(a)}.${t.integrity}`}/${P(a)}.json`):c(`/navigation/${p(a)}.${t.integrity}.json`);if(j())return(await _(()=>import("./client-db.4ae767c1.js"),["./client-db.4ae767c1.js","./entry.c3abd651.js","./entry.f74844d6.css","./query.79ebe04e.js","./index.500b5a03.js","./utils.5e77fdb8.js","./preview.bfc27fc9.js","./index.a6ef77ff.js"],import.meta.url).then(o=>o.generateNavigation))(a);const e=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:$(a),previewToken:D().getPreviewToken()}});if(typeof e=="string"&&e.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return e};const S=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(n){const{query:t}=l(n),a=g(()=>{var e;return typeof((e=t.value)==null?void 0:e.params)=="function"?t.value.params():t.value});if(!a.value&&h("dd-navigation").value){const{navigation:e}=N();return{navigation:e}}const{data:s}=await f(`content-navigation-${p(a.value)}`,()=>E(a.value));return{navigation:s}},render(n){const t=y(),{navigation:a}=n,s=o=>r(w,{to:o._path},()=>o.title),e=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),e(i.children,u+1)]):r("li",null,s(i)))),m=o=>e(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):m(a)}});export{S as default};
