import{a as f,o as a,e as i,Q as u,t as s,R as r,c as m,G as d,L as p,p as k,S as C}from"./entry.c4818dcd.js";import{_ as g}from"./nuxt-link.19b5c399.js";function h(t){let c,l=t[0],o=1;for(;o<t.length;){const n=t[o],e=t[o+1];if(o+=2,(n==="optionalAccess"||n==="optionalCall")&&l==null)return;n==="access"||n==="optionalAccess"?(c=l,l=e(l)):(n==="call"||n==="optionalCall")&&(l=e((...x)=>l.call(c,...x)),c=void 0)}return l}const w={class:"text-center"},v=f({__name:"Typography",props:{title:null,topic:null,description:null,link:null,textColor:null},setup(t){return(c,l)=>{const o=C,n=g;return a(),i("div",w,[t.title?(a(),i("p",{key:0,class:u(["text-title",`text-${t.textColor}`]),"drop-shadow":""},s(t.title),3)):r("",!0),t.topic?(a(),i("h2",{key:1,class:u(["text-h2",`text-${t.textColor}`]),"drop-shadow":""},s(t.topic),3)):r("",!0),t.description?(a(),i("p",{key:2,class:u(`text-${t.textColor}`),"text-h6":"","pb-5":"","drop-shadow":""},s(t.description),3)):r("",!0),t.link?(a(),m(n,{key:3,href:h([t,"access",e=>e.link,"optionalAccess",e=>e.href])},{default:d(()=>[p(o,{variant:"light",class:"group",color:"white",icon:"  i-solar-arrow-right-linear transition-all group-hover:px-4"},{default:d(()=>[k(s(h([t,"access",e=>e.link,"optionalAccess",e=>e.name])),1)]),_:1})]),_:1},8,["href"])):r("",!0)])}}});export{v as _};