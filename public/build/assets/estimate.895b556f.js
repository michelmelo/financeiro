import{u as h}from"./main.1b6fcfb3.js";import{a as n}from"./vendor.8e8f2b9c.js";import{h as r}from"./auth.211e412e.js";const{defineStore:u}=window.pinia,p=u({id:"customerEstimateStore",state:()=>({estimates:[],totalEstimates:0,selectedViewEstimate:[]}),actions:{fetchEstimate(s,e){return new Promise((a,i)=>{n.get(`/api/v1/${e}/customer/estimates`,{params:s}).then(t=>{this.estimates=t.data.data,this.totalEstimates=t.data.meta.estimateTotalCount,a(t)}).catch(t=>{r(t),i(t)})})},fetchViewEstimate(s,e){return new Promise((a,i)=>{n.get(`/api/v1/${e}/customer/estimates/${s.id}`,{params:s}).then(t=>{this.selectedViewEstimate=t.data.data,a(t)}).catch(t=>{r(t),i(t)})})},searchEstimate(s,e){return new Promise((a,i)=>{n.get(`/api/v1/${e}/customer/estimates`,{params:s}).then(t=>{this.estimates=t.data,a(t)}).catch(t=>{r(t),i(t)})})},acceptEstimate({slug:s,id:e,status:a}){return new Promise((i,t)=>{n.post(`/api/v1/${s}/customer/estimate/${e}/status`,{status:a}).then(o=>{let m=this.estimates.findIndex(c=>c.id===e);this.estimates[m]&&(this.estimates[m].status="ACCEPTED",h(!0).showNotification({type:"success",message:global.t("estimates.marked_as_accepted_message")})),i(o)}).catch(o=>{r(o),t(o)})})},rejectEstimate({slug:s,id:e,status:a}){return new Promise((i,t)=>{n.post(`/api/v1/${s}/customer/estimate/${e}/status`,{status:a}).then(o=>{let m=this.estimates.findIndex(c=>c.id===e);this.estimates[m]&&(this.estimates[m].status="REJECTED",h(!0).showNotification({type:"success",message:global.t("estimates.marked_as_rejected_message")})),i(o)}).catch(o=>{r(o),t(o)})})}}});export{p as u};