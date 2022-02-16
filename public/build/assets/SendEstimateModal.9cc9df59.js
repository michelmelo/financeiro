import{J as A,B as h,a0 as O,k as C,L as p,M as B,Q as E,T as J,r as d,o as g,l as M,w as l,h as v,i as f,t as $,u as e,f as a,e as N,j as x}from"./vendor.d12b5734.js";import{c as Q,k as X,u as H,b as K}from"./main.06577e8c.js";import{u as W}from"./mail-driver.cbcca12d.js";const Y={class:"flex justify-between w-full"},Z={key:0,action:""},ee={class:"px-8 py-8 sm:p-6"},te={class:"z-0 flex justify-end p-4 border-t border-gray-200 border-solid"},ae={key:1},oe={class:"my-6 mx-4 border border-gray-200 relative"},re=f(" Edit "),se=["src"],le={class:"z-0 flex justify-end p-4 border-t border-gray-200 border-solid"},me={setup(ne){const m=Q(),V=X(),U=H(),k=K();W();const{t:u}=A(),n=h(!1),I=h(""),b=h(!1),P=h(["customer","customerCustom","estimate","estimateCustom","company"]);let o=O({id:null,from:null,to:null,subject:"New Estimate",body:null});const D=C(()=>m.active&&m.componentName==="SendEstimateModal"),q=C(()=>m.data),G={from:{required:p.withMessage(u("validation.required"),B),email:p.withMessage(u("validation.email_incorrect"),E)},to:{required:p.withMessage(u("validation.required"),B),email:p.withMessage(u("validation.email_incorrect"),E)},subject:{required:p.withMessage(u("validation.required"),B)},body:{required:p.withMessage(u("validation.required"),B)}},r=J(G,C(()=>o));function L(){b.value=!1}async function F(){let s=await k.fetchBasicMailConfig();o.id=m.id,s.data&&(o.from=s.data.from_mail),q.value&&(o.to=q.value.customer.email),o.body=k.selectedCompanySettings.estimate_mail_body}async function S(){if(r.value.$touch(),r.value.$invalid)return!0;try{if(n.value=!0,!b.value){const c=await V.previewEstimate(o);n.value=!1,b.value=!0;var s=new Blob([c.data],{type:"text/html"});I.value=URL.createObjectURL(s);return}const t=await V.sendEstimate(o);if(n.value=!1,t.data.success)return y(),!0}catch(t){console.error(t),n.value=!1,U.showNotification({type:"error",message:u("estimates.something_went_wrong")})}}function y(){m.closeModal(),setTimeout(()=>{r.value.$reset(),b.value=!1,I.value=null},300)}return(s,t)=>{const c=d("BaseIcon"),j=d("BaseInput"),w=d("BaseInputGroup"),R=d("BaseCustomInput"),T=d("BaseInputGrid"),_=d("BaseButton"),z=d("BaseModal");return g(),M(z,{show:e(D),onClose:y,onOpen:F},{header:l(()=>[v("div",Y,[f($(e(m).title)+" ",1),a(c,{name:"XIcon",class:"h-6 w-6 text-gray-500 cursor-pointer",onClick:y})])]),default:l(()=>[b.value?(g(),N("div",ae,[v("div",oe,[a(_,{class:"absolute top-4 right-4",disabled:n.value,variant:"primary-outline",onClick:L},{default:l(()=>[a(c,{name:"PencilIcon",class:"h-5 mr-2"}),re]),_:1},8,["disabled"]),v("iframe",{src:I.value,frameborder:"0",class:"w-full",style:{"min-height":"500px"}},null,8,se)]),v("div",le,[a(_,{class:"mr-3",variant:"primary-outline",type:"button",onClick:y},{default:l(()=>[f($(s.$t("general.cancel")),1)]),_:1}),a(_,{loading:n.value,disabled:n.value,variant:"primary",type:"button",onClick:S},{default:l(()=>[n.value?x("",!0):(g(),M(c,{key:0,name:"PaperAirplaneIcon",class:"mr-2"})),f(" "+$(s.$t("general.send")),1)]),_:1},8,["loading","disabled"])])])):(g(),N("form",Z,[v("div",ee,[a(T,{layout:"one-column"},{default:l(()=>[a(w,{label:s.$t("general.from"),required:"",error:e(r).from.$error&&e(r).from.$errors[0].$message},{default:l(()=>[a(j,{modelValue:e(o).from,"onUpdate:modelValue":t[0]||(t[0]=i=>e(o).from=i),type:"text",invalid:e(r).from.$error,onInput:t[1]||(t[1]=i=>e(r).from.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"]),a(w,{label:s.$t("general.to"),required:"",error:e(r).to.$error&&e(r).to.$errors[0].$message},{default:l(()=>[a(j,{modelValue:e(o).to,"onUpdate:modelValue":t[2]||(t[2]=i=>e(o).to=i),type:"text",invalid:e(r).to.$error,onInput:t[3]||(t[3]=i=>e(r).to.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"]),a(w,{label:s.$t("general.subject"),required:"",error:e(r).subject.$error&&e(r).subject.$errors[0].$message},{default:l(()=>[a(j,{modelValue:e(o).subject,"onUpdate:modelValue":t[4]||(t[4]=i=>e(o).subject=i),type:"text",invalid:e(r).subject.$error,onInput:t[5]||(t[5]=i=>e(r).subject.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"]),a(w,{label:s.$t("general.body"),required:""},{default:l(()=>[a(R,{modelValue:e(o).body,"onUpdate:modelValue":t[6]||(t[6]=i=>e(o).body=i),fields:P.value},null,8,["modelValue","fields"])]),_:1},8,["label"])]),_:1})]),v("div",te,[a(_,{class:"mr-3",variant:"primary-outline",type:"button",onClick:y},{default:l(()=>[f($(s.$t("general.cancel")),1)]),_:1}),a(_,{loading:n.value,disabled:n.value,variant:"primary",type:"button",class:"mr-3",onClick:S},{default:l(()=>[n.value?x("",!0):(g(),M(c,{key:0,name:"PhotographIcon",class:"h-5 mr-2"})),f(" "+$(s.$t("general.preview")),1)]),_:1},8,["loading","disabled"])])]))]),_:1},8,["show"])}}};export{me as _};
