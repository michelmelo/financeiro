import{I as r,k as m,r as d,o as p,l as c,u as f,x as i}from"./vendor.8e8f2b9c.js";const k={props:{modelValue:{type:String,default:r().format("YYYY-MM-DD hh:MM")}},emits:["update:modelValue"],setup(t,{emit:l}){const s=t,e=m({get:()=>s.modelValue,set:o=>{l("update:modelValue",o)}});return(o,a)=>{const u=d("BaseDatePicker");return p(),c(u,{modelValue:f(e),"onUpdate:modelValue":a[0]||(a[0]=n=>i(e)?e.value=n:null),"enable-time":""},null,8,["modelValue"])}}};export{k as default};
