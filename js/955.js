"use strict";(self["webpackChunkdental_blade"]=self["webpackChunkdental_blade"]||[]).push([[955],{4955:function(e,l,a){a.r(l),a.d(l,{default:function(){return ne}});a(4114),a(4603),a(7566),a(8721);var t=a(641),n=a(953),u=a(33),o=a(3751),i=a(4853),r=a(3532),d=a(4335),s=a(6583);const c=e=>((0,t.Qi)("data-v-0870e7ba"),e=e(),(0,t.jt)(),e),p={class:"admin-doctors"},v=c((()=>(0,t.Lk)("hr",null,null,-1))),m={key:0,class:"doctors-form"},k={class:"top-items"},f={class:"items-left"},g={key:0},h={key:1,class:"doctor-image"},b=["src"],y={key:2},L=c((()=>(0,t.Lk)("p",null,"предосмотр:",-1))),C=["src"],N={class:"items-right"},_={class:"name"},x={class:"input-field"},R=c((()=>(0,t.Lk)("label",{for:"selectedDoctor.lastName"},"Фамилия:",-1))),E={class:"input-field"},U=c((()=>(0,t.Lk)("label",{for:"selectedDoctor.firstName"},"Имя:",-1))),V={class:"input-field"},F=c((()=>(0,t.Lk)("label",{for:"selectedDoctor.middleName"},"Отчество:",-1))),X={class:"info"},z={class:"input-field"},W=c((()=>(0,t.Lk)("label",{for:"selectedDoctor.experienceYears"},"Стаж:",-1))),w={class:"input-field"},$=c((()=>(0,t.Lk)("label",{for:"selectedDoctor.category"},"Категория:",-1))),J={class:"input-field"},K=c((()=>(0,t.Lk)("label",{for:"selectedDoctor.slug"},"Ссылка на страницу:",-1))),P={class:"middle-info"},D={class:"doctors-profile"},T=c((()=>(0,t.Lk)("label",null,"профиль лечения",-1))),A=["onUpdate:modelValue"],I=["onUpdate:modelValue"],j={class:"doctors-speciality"},O=c((()=>(0,t.Lk)("label",null,"специальность",-1))),Q=["onUpdate:modelValue"],S={class:"education-list"},Y=["onUpdate:modelValue"],B=["onUpdate:modelValue"],M=["onUpdate:modelValue"],q={class:"training-list"},G=["onUpdate:modelValue"],H=["onUpdate:modelValue"],Z={key:1,class:"doctors-list"},ee="http://5.35.90.116:8000/doctors";var le=(0,t.pM)({__name:"index",setup(e){const l=(0,n.KR)([]),a=(0,n.KR)(null),c=(0,n.KR)(null),le=(0,n.KR)(null),ae=(0,n.KR)(null),te=(0,n.KR)([]),ne=(0,n.KR)([]),ue=(0,n.KR)([]),oe=(0,n.KR)([]),ie=localStorage.getItem("token"),re=async()=>{try{const e=await d.A.get(ee,{headers:{Authorization:`Bearer ${ie}`}});l.value=e.data}catch(e){console.error("Ошибка при получении врачей:",e)}},de=e=>{const a=l.value.find((l=>l.id===e));a&&(c.value={...a},le.value={...a},ne.value=[],te.value=[],ue.value=[],oe.value=[],ae.value=null)},se=(0,t.EW)((()=>ae.value?URL.createObjectURL(ae.value):"")),ce=e=>{const l=e.target;l.files&&l.files.length>0&&(ae.value=l.files[0])},pe=()=>{c.value&&(c.value.imgPath="")},ve=()=>{ae.value=null},me=()=>{te.value.push({id:te.value.length,name:"",percent:0})},ke=()=>{ne.value.push({id:ne.value.length,name:""})},fe=()=>{ue.value.push({id:ue.value.length,edStart:"",edEnd:"",name:""})},ge=()=>{oe.value.push({id:oe.value.length,year:"",name:""})},he=(e,l)=>{l?te.value.splice(e-c.value.treatmentProfile.length,1):c.value?.treatmentProfile.splice(e,1)},be=(e,l)=>{l?ne.value.splice(e-c.value.specialty.length,1):c.value?.specialty.splice(e,1)},ye=(e,l)=>{l?ue.value.splice(e-c.value.education.length,1):c.value?.education.splice(e,1)},Le=(e,l)=>{l?oe.value.splice(e-c.value.advancedTraining.length,1):c.value?.advancedTraining.splice(e,1)},Ce=async()=>{if(c.value){let l=`http://5.35.90.116:8000/doctors/${c.value.id}`,a="put";c.value.id||(l="http://5.35.90.116:8000/doctors",a="post");const t={...c.value,specialty:ne.value.map((e=>e.id)),treatmentProfile:te.value.map((e=>e.id)),education:ue.value.map((e=>e.id)),advancedTraining:oe.value.map((e=>e.id))};try{const e=await(0,d.A)({method:a,url:l,data:t,headers:{Authorization:`Bearer ${ie}`,"Content-Type":"application/json"}});console.log("Данные успешно сохранены",e.data),await re(),_e()}catch(e){console.error("Ошибка при сохранении данных:",e),e.response&&console.error("Ответ сервера:",e.response.data)}}},Ne=()=>{le.value&&(c.value={...le.value},_e())},_e=()=>{ue.value=[],te.value=[],oe.value=[],a.value=null,c.value=null,ae.value=null};return(0,t.sV)((()=>{re()})),(e,a)=>((0,t.uX)(),(0,t.CE)("section",p,[(0,t.bF)((0,n.R1)(i.D),{tagName:"h2",size:"xl"},{default:(0,t.k6)((()=>[(0,t.eW)("Врачи клиники")])),_:1}),v,c.value?((0,t.uX)(),(0,t.CE)("form",m,[(0,t.bF)((0,n.R1)(i.D),{tagName:"h3",size:"l"},{default:(0,t.k6)((()=>[(0,t.eW)(" Редактирование врача: "+(0,u.v_)(c.value.firstName)+" "+(0,u.v_)(c.value.lastName)+" "+(0,u.v_)(c.value.middleName),1)])),_:1}),(0,t.Lk)("div",k,[(0,t.Lk)("div",f,[c.value.imgPath||ae.value?(0,t.Q3)("",!0):((0,t.uX)(),(0,t.CE)("p",g,"добавить фото:")),c.value.imgPath?((0,t.uX)(),(0,t.CE)("div",h,[(0,t.Lk)("img",{src:c.value.imgPath,alt:"Doctor Image"},null,8,b),(0,t.bF)((0,n.R1)(s.$),{tagName:"button",size:"xs",color:"red",onClick:pe},{default:(0,t.k6)((()=>[(0,t.eW)("Удалить")])),_:1})])):(0,t.Q3)("",!0),ae.value?((0,t.uX)(),(0,t.CE)("div",y,[L,(0,t.Lk)("img",{src:se.value,alt:"New Doctor Image"},null,8,C),(0,t.bF)((0,n.R1)(s.$),{tagName:"button",size:"xs",color:"red",onClick:ve},{default:(0,t.k6)((()=>[(0,t.eW)("Удалить")])),_:1})])):(0,t.Q3)("",!0),c.value.imgPath||ae.value?(0,t.Q3)("",!0):((0,t.uX)(),(0,t.CE)("input",{key:3,type:"file",onChange:ce},null,32))]),(0,t.Lk)("div",N,[(0,t.Lk)("div",_,[(0,t.Lk)("div",x,[(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>c.value.lastName=e),type:"text"},null,512),[[o.Jo,c.value.lastName]]),R]),(0,t.Lk)("div",E,[(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":a[1]||(a[1]=e=>c.value.firstName=e),type:"text"},null,512),[[o.Jo,c.value.firstName]]),U]),(0,t.Lk)("div",V,[(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":a[2]||(a[2]=e=>c.value.middleName=e),type:"text"},null,512),[[o.Jo,c.value.middleName]]),F])]),(0,t.Lk)("div",X,[(0,t.Lk)("div",z,[(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":a[3]||(a[3]=e=>c.value.experienceYears=e),type:"number"},null,512),[[o.Jo,c.value.experienceYears]]),W]),(0,t.Lk)("div",w,[(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":a[4]||(a[4]=e=>c.value.category=e),type:"text"},null,512),[[o.Jo,c.value.category]]),$])]),(0,t.Lk)("div",J,[(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":a[5]||(a[5]=e=>c.value.slug=e),type:"text"},null,512),[[o.Jo,c.value.slug]]),K]),(0,t.Lk)("div",P,[(0,t.Lk)("div",D,[T,(0,t.Lk)("ul",null,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)([...c.value.treatmentProfile,...te.value],((e,l)=>((0,t.uX)(),(0,t.CE)("li",{key:l},[(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":l=>e.percent=l,placeholder:"процент",class:"percent"},null,8,A),[[o.Jo,e.percent]]),(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":l=>e.name=l,placeholder:"профиль",class:"name"},null,8,I),[[o.Jo,e.name]]),(0,t.bF)((0,n.R1)(s.$),{tagName:"button",size:"xs",color:"red",onClick:e=>he(l,l>=c.value.treatmentProfile.length)},{default:(0,t.k6)((()=>[(0,t.eW)("Удалить")])),_:2},1032,["onClick"])])))),128))]),(0,t.bF)((0,n.R1)(s.$),{tagName:"button",size:"xs",color:"green",onClick:me},{default:(0,t.k6)((()=>[(0,t.eW)("Добавить профиль лечения")])),_:1})]),(0,t.Lk)("div",j,[O,(0,t.Lk)("ul",null,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)([...c.value.specialty,...ne.value],((e,l)=>((0,t.uX)(),(0,t.CE)("li",{key:l},[(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":l=>e.name=l,placeholder:"специальность"},null,8,Q),[[o.Jo,e.name]]),(0,t.bF)((0,n.R1)(s.$),{tagName:"button",size:"xs",color:"red",onClick:e=>be(l,l>=c.value.specialty.length)},{default:(0,t.k6)((()=>[(0,t.eW)("Удалить")])),_:2},1032,["onClick"])])))),128))]),(0,t.bF)((0,n.R1)(s.$),{tagName:"button",size:"xs",color:"green",onClick:ke},{default:(0,t.k6)((()=>[(0,t.eW)("Добавить специальность")])),_:1})])]),(0,t.Lk)("ul",S,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)([...c.value.education,...ue.value],((e,l)=>((0,t.uX)(),(0,t.CE)("li",{key:l},[(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":l=>e.edStart=l,placeholder:"Год начала"},null,8,Y),[[o.Jo,e.edStart]]),(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":l=>e.edEnd=l,placeholder:"Год окончания"},null,8,B),[[o.Jo,e.edEnd]]),(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":l=>e.name=l,placeholder:"Учебное заведение"},null,8,M),[[o.Jo,e.name]]),(0,t.bF)((0,n.R1)(s.$),{tagName:"button",size:"xs",color:"red",onClick:e=>ye(l,l>=c.value.education.length)},{default:(0,t.k6)((()=>[(0,t.eW)("Удалить")])),_:2},1032,["onClick"])])))),128))]),(0,t.bF)((0,n.R1)(s.$),{tagName:"button",size:"xs",color:"green",onClick:fe},{default:(0,t.k6)((()=>[(0,t.eW)("Добавить образование")])),_:1}),(0,t.Lk)("ul",q,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)([...c.value.advancedTraining,...oe.value],((e,l)=>((0,t.uX)(),(0,t.CE)("li",{key:l},[(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":l=>e.year=l,placeholder:"Год"},null,8,G),[[o.Jo,e.year]]),(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":l=>e.name=l,placeholder:"Название курса"},null,8,H),[[o.Jo,e.name]]),(0,t.bF)((0,n.R1)(s.$),{tagName:"button",size:"xs",color:"red",onClick:e=>Le(l,l>=c.value.advancedTraining.length)},{default:(0,t.k6)((()=>[(0,t.eW)("Удалить")])),_:2},1032,["onClick"])])))),128))]),(0,t.bF)((0,n.R1)(s.$),{tagName:"button",size:"xs",color:"green",onClick:ge},{default:(0,t.k6)((()=>[(0,t.eW)("Добавить курс")])),_:1})])]),(0,t.bF)((0,n.R1)(s.$),{tagName:"button",size:"xs",color:"green",onClick:Ce},{default:(0,t.k6)((()=>[(0,t.eW)("Сохранить")])),_:1}),(0,t.bF)((0,n.R1)(s.$),{tagName:"button",size:"xs",color:"white",onClick:Ne},{default:(0,t.k6)((()=>[(0,t.eW)("Отмена")])),_:1})])):((0,t.uX)(),(0,t.CE)("ul",Z,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(l.value,(e=>((0,t.uX)(),(0,t.CE)("li",{key:e.id,class:"list__item"},[(0,t.bF)((0,n.R1)(r.f),{tagName:"p",color:"dark",class:"item__text",onClick:l=>de(e.id)},{default:(0,t.k6)((()=>[(0,t.eW)((0,u.v_)(e.firstName)+" "+(0,u.v_)(e.lastName)+" "+(0,u.v_)(e.middleName),1)])),_:2},1032,["onClick"])])))),128))]))]))}}),ae=a(6262);const te=(0,ae.A)(le,[["__scopeId","data-v-0870e7ba"]]);var ne=te},4527:function(e,l,a){var t=a(3724),n=a(4376),u=TypeError,o=Object.getOwnPropertyDescriptor,i=t&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=i?function(e,l){if(n(e)&&!o(e,"length").writable)throw new u("Cannot set read only .length");return e.length=l}:function(e,l){return e.length=l}},6837:function(e){var l=TypeError,a=9007199254740991;e.exports=function(e){if(e>a)throw l("Maximum allowed index exceeded");return e}},4376:function(e,l,a){var t=a(4576);e.exports=Array.isArray||function(e){return"Array"===t(e)}},4114:function(e,l,a){var t=a(6518),n=a(8981),u=a(6198),o=a(4527),i=a(6837),r=a(9039),d=r((function(){return 4294967297!==[].push.call({length:4294967296},1)})),s=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},c=d||!s();t({target:"Array",proto:!0,arity:1,forced:c},{push:function(e){var l=n(this),a=u(l),t=arguments.length;i(a+t);for(var r=0;r<t;r++)l[a]=arguments[r],a++;return o(l,a),a}})}}]);
//# sourceMappingURL=955.js.map