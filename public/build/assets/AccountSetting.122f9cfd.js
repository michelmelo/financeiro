var L=Object.defineProperty,P=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var U=(u,s,i)=>s in u?L(u,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):u[s]=i,S=(u,s)=>{for(var i in s||(s={}))z.call(s,i)&&U(u,i,s[i]);if(V)for(var i of V(s))E.call(s,i)&&U(u,i,s[i]);return u},I=(u,s)=>P(u,T(s));import{J,B as b,k as y,L as _,M as C,Q,N as H,P as K,a0 as O,T as W,r as m,o as M,e as X,f as r,w as d,u as e,x as Y,l as Z,m as x,j as ee,i as ae,t as se,U as te,h as ne}from"./vendor.d12b5734.js";import{e as oe,d as re,b as le}from"./main.06577e8c.js";const ie=["onSubmit"],ue=ne("span",null,null,-1),ce={setup(u){const s=oe(),i=re(),F=le(),{t:v}=J();let p=b(!1),c=b(null),f=b([]);const $=b(!1);s.currentUser.avatar&&f.value.push({image:s.currentUser.avatar});const q=y(()=>({name:{required:_.withMessage(v("validation.required"),C)},email:{required:_.withMessage(v("validation.required"),C),email:_.withMessage(v("validation.email_incorrect"),Q)},password:{minLength:_.withMessage(v("validation.password_length",{count:8}),H(8))},confirm_password:{sameAsPassword:_.withMessage(v("validation.password_incorrect"),K(t.password))}})),t=O({name:s.currentUser.name,email:s.currentUser.email,language:s.currentUserSettings.language||F.selectedCompanySettings.language,password:"",confirm_password:""}),o=W(q,y(()=>t));function k(l,a){c.value=a}function N(){c.value=null,$.value=!0}async function A(){if(o.value.$touch(),o.value.$invalid)return!0;p.value=!0;let l={name:t.name,email:t.email};try{if(t.password!=null&&t.password!==void 0&&t.password!==""&&(l=I(S({},l),{password:t.password})),s.currentUserSettings.language!==t.language&&await s.updateUserSettings({settings:{language:t.language}}),(await s.updateCurrentUser(l)).data.data){if(p.value=!1,c.value||$.value){let w=new FormData;c.value&&w.append("admin_avatar",c.value),w.append("is_admin_avatar_removed",$.value),await s.uploadAvatar(w),c.value=null,$.value=!1}t.password="",t.confirm_password=""}}catch{return p.value=!1,!0}}return(l,a)=>{const w=m("BaseFileUploader"),g=m("BaseInputGroup"),B=m("BaseInput"),G=m("BaseMultiselect"),D=m("BaseInputGrid"),R=m("BaseIcon"),h=m("BaseButton"),j=m("BaseSettingCard");return M(),X("form",{class:"relative",onSubmit:te(A,["prevent"])},[r(j,{title:l.$t("settings.account_settings.account_settings"),description:l.$t("settings.account_settings.section_description")},{default:d(()=>[r(D,null,{default:d(()=>[r(g,{label:l.$tc("settings.account_settings.profile_picture")},{default:d(()=>[r(w,{modelValue:e(f),"onUpdate:modelValue":a[0]||(a[0]=n=>Y(f)?f.value=n:f=n),avatar:!0,accept:"image/*",onChange:k,onRemove:N},null,8,["modelValue"])]),_:1},8,["label"]),ue,r(g,{label:l.$tc("settings.account_settings.name"),error:e(o).name.$error&&e(o).name.$errors[0].$message,required:""},{default:d(()=>[r(B,{modelValue:e(t).name,"onUpdate:modelValue":a[1]||(a[1]=n=>e(t).name=n),invalid:e(o).name.$error,onInput:a[2]||(a[2]=n=>e(o).name.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"]),r(g,{label:l.$tc("settings.account_settings.email"),error:e(o).email.$error&&e(o).email.$errors[0].$message,required:""},{default:d(()=>[r(B,{modelValue:e(t).email,"onUpdate:modelValue":a[3]||(a[3]=n=>e(t).email=n),invalid:e(o).email.$error,onInput:a[4]||(a[4]=n=>e(o).email.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"]),r(g,{error:e(o).password.$error&&e(o).password.$errors[0].$message,label:l.$tc("settings.account_settings.password")},{default:d(()=>[r(B,{modelValue:e(t).password,"onUpdate:modelValue":a[5]||(a[5]=n=>e(t).password=n),type:"password",onInput:a[6]||(a[6]=n=>e(o).password.$touch())},null,8,["modelValue"])]),_:1},8,["error","label"]),r(g,{label:l.$tc("settings.account_settings.confirm_password"),error:e(o).confirm_password.$error&&e(o).confirm_password.$errors[0].$message},{default:d(()=>[r(B,{modelValue:e(t).confirm_password,"onUpdate:modelValue":a[7]||(a[7]=n=>e(t).confirm_password=n),type:"password",onInput:a[8]||(a[8]=n=>e(o).confirm_password.$touch())},null,8,["modelValue"])]),_:1},8,["label","error"]),r(g,{label:l.$tc("settings.language")},{default:d(()=>[r(G,{modelValue:e(t).language,"onUpdate:modelValue":a[9]||(a[9]=n=>e(t).language=n),options:e(i).config.languages,label:"name","value-prop":"code","track-by":"code","open-direction":"top"},null,8,["modelValue","options"])]),_:1},8,["label"])]),_:1}),r(h,{loading:e(p),disabled:e(p),class:"mt-6"},{left:d(n=>[e(p)?ee("",!0):(M(),Z(R,{key:0,name:"SaveIcon",class:x(n.class)},null,8,["class"]))]),default:d(()=>[ae(" "+se(l.$tc("settings.company_info.save")),1)]),_:1},8,["loading","disabled"])]),_:1},8,["title","description"])],40,ie)}}};export{ce as default};
