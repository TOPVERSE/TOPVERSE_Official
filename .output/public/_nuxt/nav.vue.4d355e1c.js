import{a as A,a0 as N,j as B,o as t,e as s,M as c,N as d,c as o,G as a,L as i,R as $,f as h,t as z,u,Q as S,ac as V,ad as G,ae as I,af as M,S as P}from"./entry.c4818dcd.js";import{u as j,_ as D}from"./LocaleNuxtLink.vue.69cae52a.js";function E(){return[{title:"nav.home",href:"/"},{title:"nav.solutions.t",child:[{title:"nav.solutions.child.land.service[0]",subtitle:"nav.solutions.child.land.description[0]",href:"/land",icon:"i-tabler-affiliate",iconColor:"red"},{title:"nav.solutions.child.land.service[1]",subtitle:"nav.solutions.child.land.description[1]",href:"/land",icon:"i-tabler-a-b",iconColor:"amber"},{title:"nav.solutions.child.land.service[2]",subtitle:"nav.solutions.child.land.description[2]",href:"/land",icon:"i-tabler-3d-cube-sphere",iconColor:"amber"}]},{title:"nav.news",href:"/news"},{title:"nav.event.t",child:[{title:"nav.event.child.act[0]",subtitle:"nav.event.child.description[0]",href:"/land",icon:"i-tabler-apple",iconColor:"red"},{title:"nav.event.child.act[1]",subtitle:"nav.event.child.description[1]",href:"/land",icon:"i-tabler-api-app",iconColor:"red"},{title:"nav.event.child.act[2]",subtitle:"nav.event.child.description[2]",href:"/land",icon:"i-academicons-archive",iconColor:"red"}]}]}const F={style:{color:"hsla(var(--a-base-c), 0.87)"},class:"font-bold"},K=A({__name:"nav",setup(J){const v=E(),{locale:b,locales:f,setLocale:Q}=N(),m=j(),_=B(()=>f.value.filter(n=>n.code!==b.value)),g={en:"i-flag-gb-4x3",zh:"i-flag-cn-4x3"};return(n,R)=>{const k=V,y=G,r=D,x=I,C=M,p=P;return t(),s("nav",null,[(t(!0),s(c,null,d(u(v),(e,L)=>(t(),o(r,{key:L,class:"mx-2 border-primary p-1 pb-5 transition-all",href:e.href,"active-class":"border-b-3px"},{default:a(()=>[i(p,{variant:"text"},{default:a(()=>[e.child?(t(),o(C,{key:0,style:{"--un-bg-opacity":"0.6","--a-spacing":"2"},class:"","z-1000":"","mt-5":"",placement:"bottom"},{default:a(()=>[i(x,{items:e.child,"avatar-append":"",class:"[--a-list-item-gap:1rem] [--a-spacing:1] border-1px border-light-50/20 backdrop-blur-md !m-0 divide-y divide-dark-50/10 dark:border-dark-50/20 dark:divide-light-50/10"},{default:a(()=>[(t(!0),s(c,null,d(e.child,(l,w)=>(t(),o(r,{key:w,href:l.href,class:"overflow-hidden py-1 hover:bg-primary/20","active-class":"bg-primary/20"},{default:a(()=>[i(y,{class:"[--a-spacing:1] max-w-300px",title:n.$t(l.title),subtitle:l.subtitle&&n.$t(l.subtitle)},{prepend:a(()=>[i(k,{class:"shrink-0 rounded-lg",icon:l.icon},null,8,["icon"])]),_:2},1032,["title","subtitle"])]),_:2},1032,["href"]))),128))]),_:2},1032,["items"])]),_:2},1024)):$("",!0),h("span",F,z(n.$t(e.title)),1)]),_:2},1024)]),_:2},1032,["href"]))),128)),(t(!0),s(c,null,d(u(_),e=>(t(),o(r,{key:e.code,to:u(m)(e.code),class:"mx-2 border-primary p-1 pb-5 transition-all"},{default:a(()=>[i(p,{variant:"text"},{default:a(()=>[h("span",{class:S(g[e.code])},null,2)]),_:2},1024)]),_:2},1032,["to"]))),128))])}}});export{K as _};