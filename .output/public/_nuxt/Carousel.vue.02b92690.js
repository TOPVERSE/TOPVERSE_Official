import{a as _,I as g,J as v,K as w,o as n,e as c,L as u,G as p,M as k,N as y,u as e,c as b,f as r,i as x,O as V,P as C}from"./entry.cb7ee9f7.js";import{_ as j}from"./Typography.vue.e1a816e1.js";function B(){return[{title:"home.carousel.topic[0]",description:"home.carousel.description[0]",link:{name:"home.carousel.link[0]",href:"/release/creatorpartyverse"},img:"/imgs/Home.Creatorverse.jpg"},{title:"home.carousel.topic[1]",description:"home.carousel.description[1]",link:{name:"home.carousel.link[1]",href:"/release/holowater"},img:"/imgs/News/HoloWater/20230524162443.jpg"}]}const N={class:"relative h-500px w-full overflow-hidden md:h-600px xl:h-700px"},$=["src"],L={class:"absolute top-0 z-10 h-full w-full flex items-center justify-center text-shadow"},z=r("div",{class:"absolute left-0 top-0 z-1 h-full w-full",style:{"background-image":"linear-gradient(0deg,hsl(var(--a-body-bg-c)),transparent 65%, hsl(var(--a-body-bg-c)))","pointer-events":"none"}},null,-1),M=_({__name:"Carousel",setup(A){const s=B(),{state:t,next:m,prev:F}=g(s.map((o,l)=>l),{initialValue:0});return v(()=>{w(()=>{m()},3500)}),(o,l)=>{const d=V,h=C,f=j;return n(),c("div",N,[u(h,{modelValue:e(t),"onUpdate:modelValue":l[0]||(l[0]=a=>x(t)?t.value=a:null),"h-full":"",class:"[&>.a-views-wrapper]:h-full"},{default:p(()=>[(n(!0),c(k,null,y(e(s),(a,i)=>(n(),b(d,{key:i,value:i,"h-full":""},{default:p(()=>[r("img",{src:a.img,style:{"object-fit":"cover",height:"100%",width:"100%"}},null,8,$)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),r("div",L,[u(f,{"scale-135":"","text-color":"white",topic:o.$t(e(s)[e(t)].title),description:o.$t(e(s)[e(t)].description),link:{...e(s)[e(t)].link,name:o.$t(e(s)[e(t)].link.name)}},null,8,["topic","description","link"])]),z])}}});export{M as _};
