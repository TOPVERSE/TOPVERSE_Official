import{_ as B}from"./Divider.vue.28215811.js";import{a1 as L,o as e,e as i,L as a,f as t,M as c,N as h,t as n,c as m,G as f,p as d,u as p,a2 as b,U as N}from"./entry.a42f0781.js";import{_ as T}from"./LocaleNuxtLink.vue.55177453.js";import A from"./logo.05a379fd.js";import{_ as D}from"./DarkToggle.vue.c8daa493.js";import"./nuxt-link.f7f44df1.js";import"./composables.83bd627d.js";const F=""+globalThis.__publicAssetsURL("wechat.png");function V(){const{locale:_}=L();return _.value==="zh"||`${_.value}`,{copyright:"foot.copyright",release:"foot.release",record:["foot.record[0]","foot.record[1]"],links:[{title:"foot.links[0].group",child:[{link:{name:"foot.links[0].link[0]",href:"/"}},{link:{name:"foot.links[0].link[1]",href:"#"}},{link:{name:"foot.links[0].link[2]",href:"#"}}]},{title:"foot.links[1].group",child:[{link:{name:"foot.links[1].link[0]",href:"/about"}},{link:{name:"foot.links[1].link[1]",href:"/about#location"}},{link:{name:"foot.links[1].link[2]",href:"/"}}]},{title:"foot.links[2].group",child:[{icon:"i-ic-sharp-wechat",link:{name:"foot.links[2].link[0]",href:"#"}},{icon:"i-ri-twitter-fill",link:{name:"foot.links[2].link[1]",href:"https://twitter.com/Topverse_Studio"}},{link:{name:"foot.links[2].link[2]",href:"#"}}]}]}}const S={class:"grid-row p-20 pt-30 lg:grid-cols-3 grid-cols-2 md:px-30 xl:px-60"},U={"text-title":"","opacity-60":""},j={class:"a-tooltip-text"},z=t("i",{class:"i-ic-sharp-wechat me-1"},null,-1),C=t("img",{src:F,class:"h-40 rounded"},null,-1),E={"my-10":"",flex:"","flex-col":"","items-center":"","justify-center":"","gap-4":""},G={flex:"","items-center":"","gap-4":""},P={__name:"Footer",setup(_){const s=V();return(o,I)=>{const g=B,x=b,u=N,y=T,$=A,v=D;return e(),i(c,null,[a(g),t("div",S,[(e(!0),i(c,null,h(p(s).links,(r,k)=>(e(),i("div",{key:k,class:"w-full flex flex-col items-center gap-8"},[t("h5",U,n(o.$t(r.title)),1),(e(!0),i(c,null,h(r.child,(l,w)=>(e(),m(y,{key:w,href:l.link.href},{default:f(()=>[l.icon==="i-ic-sharp-wechat"?(e(),m(u,{key:0,variant:"text",color:"slate-200",class:"dark:!text-light/50",icon:l.icon},{default:f(()=>[d(n(o.$t(l.link.name))+" ",1),a(x,{class:"[&_.a-tooltip]-bg-green-600",placement:"left"},{default:f(()=>[t("span",j,[z,t("span",null,n(o.$t("wechat")),1),C])]),_:1})]),_:2},1032,["icon"])):(e(),m(u,{key:1,variant:"text",color:"slate-200",class:"dark:!text-light/50",icon:l.icon},{default:f(()=>[d(n(o.$t(l.link.name)),1)]),_:2},1032,["icon"]))]),_:2},1032,["href"]))),128))]))),128))]),t("div",E,[t("div",G,[a($),a(v)]),t("p",null,n(o.$t(p(s).copyright)),1),t("p",null,n(o.$t(p(s).release)),1),(e(!0),i(c,null,h(p(s).record,(r,k)=>(e(),i("p",{key:k},n(o.$t(r)),1))),128))])],64)}}};export{P as default};
