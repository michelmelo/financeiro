var O=Object.defineProperty;var E=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var x=(d,s,a)=>s in d?O(d,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):d[s]=a,z=(d,s)=>{for(var a in s||(s={}))R.call(s,a)&&x(d,a,s[a]);if(E)for(var a of E(s))X.call(s,a)&&x(d,a,s[a]);return d};import{a as g,d as H,G as K,J as Q,B as k,a0 as W,k as S,L as w,M as b,N as Y,T as Z,C as ee,D as te,r as f,o as ae,l as oe,w as p,h as I,i as C,t as M,u as o,f as c,m as ne,U as se}from"./vendor.d12b5734.js";import{h as $,c as re,u as ie,i as ue,k as le}from"./main.06577e8c.js";import{u as ce}from"./payment.ef8ace9c.js";const de=(d=!1)=>(d?window.pinia.defineStore:H)({id:"notes",state:()=>({notes:[],currentNote:{id:null,type:"",name:"",notes:""}}),getters:{isEdit:a=>!!a.currentNote.id},actions:{resetCurrentNote(){this.currentNote={type:"",name:"",notes:""}},fetchNotes(a){return new Promise((e,l)=>{g.get("/api/v1/notes",{params:a}).then(t=>{this.notes=t.data.data,e(t)}).catch(t=>{$(t),l(t)})})},fetchNote(a){return new Promise((e,l)=>{g.get(`/api/v1/notes/${a}`).then(t=>{this.currentNote=t.data.data,e(t)}).catch(t=>{$(t),l(t)})})},addNote(a){return new Promise((e,l)=>{g.post("/api/v1/notes",a).then(t=>{this.notes.push(t.data),e(t)}).catch(t=>{$(t),l(t)})})},updateNote(a){return new Promise((e,l)=>{g.put(`/api/v1/notes/${a.id}`,a).then(t=>{if(t.data){let y=this.notes.findIndex(u=>u.id===t.data.data.id);this.notes[y]=a.notes}e(t)}).catch(t=>{$(t),l(t)})})},deleteNote(a){return new Promise((e,l)=>{g.delete(`/api/v1/notes/${a}`).then(t=>{let y=this.notes.findIndex(u=>u.id===a);this.notes.splice(y,1),e(t)}).catch(t=>{$(t),l(t)})})}}})();const me={class:"flex justify-between w-full"},pe=["onSubmit"],fe={class:"px-8 py-8 sm:p-6"},ve={class:"z-0 flex justify-end px-4 py-4 border-t border-solid border-gray-light"},ge={setup(d){const s=re(),a=ie(),e=de(),l=ue(),t=ce(),y=le(),u=K(),{t:N}=Q();let v=k(!1);const D=W(["Invoice","Estimate","Payment"]);let h=k(["customer","customerCustom"]);const j=S(()=>s.active&&s.componentName==="NoteModal"),G=S(()=>({currentNote:{name:{required:w.withMessage(N("validation.required"),b),minLength:w.withMessage(N("validation.name_min_length",{count:3}),Y(3))},notes:{required:w.withMessage(N("validation.required"),b)},type:{required:w.withMessage(N("validation.required"),b)}}})),r=Z(G,S(()=>e));ee(()=>e.currentNote.type,n=>{V()}),te(()=>{u.name==="estimates.create"?e.currentNote.type="Estimate":u.name==="invoices.create"?e.currentNote.type="Invoice":e.currentNote.type="Payment"});function V(){h.value=["customer","customerCustom"],e.currentNote.type=="Invoice"&&h.value.push("invoice","invoiceCustom"),e.currentNote.type=="Estimate"&&h.value.push("estimate","estimateCustom"),e.currentNote.type=="Payment"&&h.value.push("payment","paymentCustom")}async function U(){if(r.value.currentNote.$touch(),r.value.currentNote.$invalid)return!0;if(v.value=!0,e.isEdit){let n=z({id:e.currentNote.id},e.currentNote);await e.updateNote(n).then(i=>{v.value=!1,i.data&&(a.showNotification({type:"success",message:N("settings.customization.notes.note_updated")}),s.refreshData&&s.refreshData(),_())}).catch(i=>{v.value=!1})}else await e.addNote(e.currentNote).then(n=>{v.value=!1,n.data&&(a.showNotification({type:"success",message:N("settings.customization.notes.note_added")}),(u.name==="invoices.create"&&n.data.data.type==="Invoice"||u.name==="invoices.edit"&&n.data.data.type==="Invoice")&&l.selectNote(n.data.data),(u.name==="estimates.create"&&n.data.data.type==="Estimate"||u.name==="estimates.edit"&&n.data.data.type==="Estimate")&&y.selectNote(n.data.data),(u.name==="payments.create"&&n.data.data.type==="Payment"||u.name==="payments.edit"&&n.data.data.type==="Payment")&&t.selectNote(n.data.data)),s.refreshData&&s.refreshData(),_()}).catch(n=>{v.value=!1})}function _(){s.closeModal(),setTimeout(()=>{e.resetCurrentNote(),r.value.$reset()},300)}return(n,i)=>{const P=f("BaseIcon"),F=f("BaseInput"),B=f("BaseInputGroup"),L=f("BaseMultiselect"),T=f("BaseCustomInput"),A=f("BaseInputGrid"),q=f("BaseButton"),J=f("BaseModal");return ae(),oe(J,{show:o(j),onClose:_,onOpen:V},{header:p(()=>[I("div",me,[C(M(o(s).title)+" ",1),c(P,{name:"XIcon",class:"h-6 w-6 text-gray-500 cursor-pointer",onClick:_})])]),default:p(()=>[I("form",{action:"",onSubmit:se(U,["prevent"])},[I("div",fe,[c(A,{layout:"one-column"},{default:p(()=>[c(B,{label:n.$t("settings.customization.notes.name"),variant:"vertical",error:o(r).currentNote.name.$error&&o(r).currentNote.name.$errors[0].$message,required:""},{default:p(()=>[c(F,{modelValue:o(e).currentNote.name,"onUpdate:modelValue":i[0]||(i[0]=m=>o(e).currentNote.name=m),invalid:o(r).currentNote.name.$error,type:"text",onInput:i[1]||(i[1]=m=>o(r).currentNote.name.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"]),c(B,{label:n.$t("settings.customization.notes.type"),error:o(r).currentNote.type.$error&&o(r).currentNote.type.$errors[0].$message,required:""},{default:p(()=>[c(L,{modelValue:o(e).currentNote.type,"onUpdate:modelValue":i[2]||(i[2]=m=>o(e).currentNote.type=m),options:o(D),"value-prop":"type",class:"mt-2"},null,8,["modelValue","options"])]),_:1},8,["label","error"]),c(B,{label:n.$t("settings.customization.notes.notes"),error:o(r).currentNote.notes.$error&&o(r).currentNote.notes.$errors[0].$message,required:""},{default:p(()=>[c(T,{modelValue:o(e).currentNote.notes,"onUpdate:modelValue":i[3]||(i[3]=m=>o(e).currentNote.notes=m),invalid:o(r).currentNote.notes.$error,fields:o(h),onInput:i[4]||(i[4]=m=>o(r).currentNote.notes.$touch())},null,8,["modelValue","invalid","fields"])]),_:1},8,["label","error"])]),_:1})]),I("div",ve,[c(q,{class:"mr-2",variant:"primary-outline",type:"button",onClick:_},{default:p(()=>[C(M(n.$t("general.cancel")),1)]),_:1}),c(q,{loading:o(v),disabled:o(v),variant:"primary",type:"submit"},{left:p(m=>[c(P,{name:"SaveIcon",class:ne(m.class)},null,8,["class"])]),default:p(()=>[C(" "+M(o(e).isEdit?n.$t("general.update"):n.$t("general.save")),1)]),_:1},8,["loading","disabled"])])],40,pe)]),_:1},8,["show"])}}};export{ge as _,de as u};
