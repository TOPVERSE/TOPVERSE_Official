import{_ as y}from"./Banner.vue.7a7153fe.js";import w from"./ContentRenderer.9da5a247.js";import{u as B}from"./index.ccd734cd.js";import{s as $,a0 as b,l as k,o as d,e as v,L as C,u as e,f as o,c as N,R,t as a,M as V}from"./entry.cb7ee9f7.js";import{q}from"./query.64d8dc15.js";import"./Typography.vue.e1a816e1.js";import"./nuxt-link.78002c3d.js";import"./Section.e2738030.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./ContentRendererMarkdown.414af1a8.js";import"./index.a6ef77ff.js";import"./preview.99f457cf.js";import"./utils.a547ac44.js";const A={class:"m-auto prose xl:max-w-900px"},D={class:"m-auto mb-20 flex flex-col text-right text-right prose xl:max-w-900px"},S={class:"text-lg font-bold"},E={class:"opacity-80"},F={class:"pt-5"},Y={__name:"[id]",async setup(I){let s,n;const f=$(),{locale:h}=b(),r=`/${h.value}/${f.params.id}`,{data:t}=([s,n]=k(()=>B(`content-${r}`,()=>q().where({_path:r}).findOne())),s=await s,n(),s);return(L,M)=>{var i,c,m,p,l,_,u;const x=y,g=w;return d(),v(V,null,[C(x,{img:(i=e(t))==null?void 0:i.img,title:(c=e(t))==null?void 0:c.title,topic:(m=e(t))==null?void 0:m.topic,description:(p=e(t))==null?void 0:p.description,"font-bold":"","text-white":""},null,8,["img","title","topic","description"]),o("main",A,[e(t)?(d(),N(g,{key:0,value:e(t)},null,8,["value"])):R("",!0)]),o("div",D,[o("span",S,a((l=e(t))==null?void 0:l.author),1),o("small",E,a((_=e(t))==null?void 0:_.resume),1),o("span",F,a((u=e(t))==null?void 0:u.publish),1)])],64)}}};export{Y as default};
