import{J as w,a0 as S,B as v,L as _,M as V,Q as I,T as x,r as n,o as l,e as u,f as r,w as m,u as t,t as d,h as M,i as N,U as q,a as j}from"./vendor.8e8f2b9c.js";import{u as C,h as D}from"./main.1b6fcfb3.js";const E=["onSubmit"],G={key:0},L={key:1},T={class:"mt-4 mb-4 text-sm"},Q={setup(U){const b=C(),{t:c}=w(),i=S({email:""}),p=v(!1),o=v(!1),g={email:{required:_.withMessage(c("validation.required"),V),email:_.withMessage(c("validation.email_incorrect"),I)}},a=x(g,i);async function h(s){if(a.value.$touch(),!a.value.$invalid)try{o.value=!0,(await j.post("/api/v1/auth/password/email",i)).data&&b.showNotification({type:"success",message:"Mail sent successfully"}),p.value=!0,o.value=!1}catch(e){D(e),o.value=!1}}return(s,e)=>{const y=n("BaseInput"),$=n("BaseInputGroup"),B=n("BaseButton"),k=n("router-link");return l(),u("form",{id:"loginForm",onSubmit:q(h,["prevent"])},[r($,{error:t(a).email.$error&&t(a).email.$errors[0].$message,label:s.$t("login.enter_email"),class:"mb-4",required:""},{default:m(()=>[r(y,{modelValue:t(i).email,"onUpdate:modelValue":e[0]||(e[0]=f=>t(i).email=f),invalid:t(a).email.$error,focus:"",type:"email",name:"email",onInput:e[1]||(e[1]=f=>t(a).email.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["error","label"]),r(B,{loading:o.value,disabled:o.value,type:"submit",variant:"primary"},{default:m(()=>[p.value?(l(),u("div",L,d(s.$t("validation.not_yet")),1)):(l(),u("div",G,d(s.$t("validation.send_reset_link")),1))]),_:1},8,["loading","disabled"]),M("div",T,[r(k,{to:"/login",class:"text-sm text-primary-400 hover:text-gray-700"},{default:m(()=>[N(d(s.$t("general.back_to_login")),1)]),_:1})])],40,E)}}};export{Q as default};