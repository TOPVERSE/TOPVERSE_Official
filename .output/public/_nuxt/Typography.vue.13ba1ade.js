import{a as f,o,e as c,S as u,t as s,T as r,c as C,G as d,L as m,p as k,U as p}from"./entry.a42f0781.js";import{_ as g}from"./nuxt-link.f7f44df1.js";function h(t){let i,l=t[0],a=1;for(;a<t.length;){const n=t[a],e=t[a+1];if(a+=2,(n==="optionalAccess"||n==="optionalCall")&&l==null)return;n==="access"||n==="optionalAccess"?(i=l,l=e(l)):(n==="call"||n==="optionalCall")&&(l=e((...x)=>l.call(i,...x)),i=void 0)}return l}const w={class:"text-center"},v=f({__name:"Typography",props:{title:null,titleClass:null,topic:null,topicClass:null,description:null,descriptionClass:null,link:null,textColor:null},setup(t){return(i,l)=>{const a=p,n=g;return o(),c("div",w,[t.title?(o(),c("p",{key:0,class:u(["text-title",[`text-${t.textColor}`,t.titleClass]]),"drop-shadow":""},s(t.title),3)):r("",!0),t.topic?(o(),c("h2",{key:1,class:u(["md:text-h2 text-h4 font-bold",[`text-${t.textColor}`,t.topicClass]]),"drop-shadow":""},s(t.topic),3)):r("",!0),t.description?(o(),c("p",{key:2,class:u([`text-${t.textColor}`,t.descriptionClass]),"text-h6":"","pb-5":"","drop-shadow":""},s(t.description),3)):r("",!0),t.link?(o(),C(n,{key:3,href:h([t,"access",e=>e.link,"optionalAccess",e=>e.href])},{default:d(()=>[m(a,{variant:"light",class:"group",color:"white",icon:"i-solar-arrow-right-linear transition-all group-hover:px-4"},{default:d(()=>[k(s(h([t,"access",e=>e.link,"optionalAccess",e=>e.name])),1)]),_:1})]),_:1},8,["href"])):r("",!0)])}}});export{v as _};
