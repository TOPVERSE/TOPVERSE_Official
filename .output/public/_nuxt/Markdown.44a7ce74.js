import s from"./ContentSlot.afd41ce3.js";import{a as o,F as m,A as p,j as u}from"./entry.c4818dcd.js";import"./utils.2d4fbdad.js";import"./preview.a1b0faf7.js";const d=o({name:"Markdown",extends:s,setup(t){const{parent:e}=m(),{between:n,default:a}=p(),r=u(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:a,tags:r,between:n,parent:e}}});export{d as default};