"use strict";(self["webpackChunkdental_blade"]=self["webpackChunkdental_blade"]||[]).push([[73],{1073:function(e,a,l){l.r(a),l.d(a,{default:function(){return ee}});var s=l(641),t=l(953),i=l(33),c=l(6278),o=l(4853),r=l(3532);const n={class:"tags"},d={class:"tags__list"},u=["onClick"];var k=(0,s.pM)({__name:"index",setup(e){const a=(0,c.Pj)(),l=(0,s.EW)((()=>a.getters["doctors/uniqueSpecialties"])),o=(0,s.EW)((()=>a.state.doctors.selectedSpecialty));function k(e){a.commit("doctors/setSelectedSpecialty",e)}return(e,a)=>((0,s.uX)(),(0,s.CE)("div",n,[(0,s.Lk)("ul",d,[(0,s.Lk)("li",{onClick:a[0]||(a[0]=e=>k("")),class:(0,i.C4)([{item_active:""===o.value},"item"])},[(0,s.bF)((0,t.R1)(r.f),{tagName:"span",size:"xs",color:"dark-gray",class:"item__text"},{default:(0,s.k6)((()=>[(0,s.eW)(" Все специалисты ")])),_:1})],2),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(l.value,(e=>((0,s.uX)(),(0,s.CE)("li",{key:e,onClick:a=>k(e),class:(0,i.C4)([{item_active:o.value===e},"item"])},[(0,s.bF)((0,t.R1)(r.f),{tagName:"span",size:"xs",color:"dark-gray",class:"item__text"},{default:(0,s.k6)((()=>[(0,s.eW)((0,i.v_)(e),1)])),_:2},1024)],10,u)))),128))])]))}}),_=l(6262);const v=(0,_.A)(k,[["__scopeId","data-v-05dd0a4a"]]);var m=v,f=l(2669),p=l(6583),g=l(2759);const b={class:"info__content-right"},L={slidesPerView:"auto",spaceBetween:"{10}",class:"date-slider__items"},F=["onClick"],R={class:"time-slider"},C={class:"time-slider__items"},x=["onClick"];var h=(0,s.pM)({__name:"index",setup(e){const a=(0,t.KR)(null);(0,g.o)({elementRef:a});const l=(0,t.KR)(0),c=(0,t.KR)(null),o=e=>{1!==e&&(l.value=e)},n=e=>{c.value=e};return(e,d)=>((0,s.uX)(),(0,s.CE)("div",b,[(0,s.Lk)("div",{class:"date-slider",ref_key:"itemsContainer",ref:a},[(0,s.Lk)("ul",L,[((0,s.uX)(),(0,s.CE)(s.FK,null,(0,s.pI)(["15 сент","16 сент","17 сент","18 сент","19 сент"],((e,a)=>(0,s.Lk)("li",{key:a,class:(0,i.C4)(["item",{"item_active-date":l.value===a,"item_busy-date":1===a}]),onClick:e=>o(a)},[(0,s.bF)((0,t.R1)(r.f),{tagName:"p",color:"dark",size:"m",class:"date"},{default:(0,s.k6)((()=>[(0,s.eW)((0,i.v_)(e),1)])),_:2},1024),(0,s.bF)((0,t.R1)(r.f),{tagName:"p",color:"dark",size:"m",class:"day"},{default:(0,s.k6)((()=>[(0,s.eW)((0,i.v_)(0===a?"сегодня":1===a?"завтра":["вт","ср","чт"][a-2]),1)])),_:2},1024)],10,F))),64))])],512),(0,s.Lk)("div",R,[(0,s.Lk)("ul",C,[((0,s.uX)(),(0,s.CE)(s.FK,null,(0,s.pI)(["09:00","10:00","11:00","12:00","13:00","14:00"],((e,a)=>(0,s.Lk)("li",{key:a,class:(0,i.C4)(["item",{"item_active-time":c.value===a}]),onClick:e=>n(a)},[(0,s.bF)((0,t.R1)(r.f),{tagName:"span",color:"dark",size:"m"},{default:(0,s.k6)((()=>[(0,s.eW)((0,i.v_)(e),1)])),_:2},1024)],10,x))),64))])]),(0,s.bF)((0,t.R1)(p.$),{tagName:"button",color:"white",size:"xs",type:"none"},{default:(0,s.k6)((()=>[(0,s.eW)(" записаться на прием ")])),_:1})]))}});const y=h;var W=y,N=l(9999),z=l(5220);const E=e=>((0,s.Qi)("data-v-26cc7ccc"),e=e(),(0,s.jt)(),e),X=E((()=>(0,s.Lk)("hr",null,null,-1))),w={class:"section-doctors"},I={class:"section-doctors__content"},K={class:"item__info"},S={class:"info__content-left"},$={class:"photo"},D=["aria-label"],P={class:"reviews__item"},j=E((()=>(0,s.Lk)("a",{class:"review__link",href:""},"109 отзывов",-1))),G={class:"item__description"},M={class:"expierence"},T=E((()=>(0,s.Lk)("span",{class:"dot"},null,-1))),A={class:"phone"},Q={href:""},V={class:"chat"},q={class:"social-links"},B={href:""},H={href:""},J={class:"reviews__item"},O=E((()=>(0,s.Lk)("a",{class:"review__link",href:""},"109 отзывов",-1))),U={key:0};var Y=(0,s.pM)({__name:"index",setup(e){const a=(0,c.Pj)(),l=(0,s.EW)((()=>a.getters["doctors/formattedDoctors"]));return(0,s.sV)((()=>{a.dispatch("doctors/fetchDoctors")})),(e,a)=>((0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)((0,t.R1)(o.D),{tagName:"h2",regular:"",size:"xxl"},{default:(0,s.k6)((()=>[(0,s.eW)(" наши специалисты ")])),_:1}),X,(0,s.bF)((0,t.R1)(m)),(0,s.Lk)("section",w,[(0,s.Lk)("div",I,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(l.value,((e,a)=>((0,s.uX)(),(0,s.CE)("div",{key:e.id,class:"item"},[(0,s.Lk)("div",K,[(0,s.Lk)("div",S,[(0,s.Lk)("div",$,[(0,s.Lk)("div",{class:"doctor-photo",style:(0,i.Tr)({backgroundImage:`url(${e.imgPath})`}),"aria-label":`${e.firstName} ${e.lastName}`},null,12,D),(0,s.Lk)("div",P,[(0,s.bF)((0,t.R1)(r.f),{tagName:"p",size:"xs",color:"dark"},{default:(0,s.k6)((()=>[(0,s.bF)((0,t.R1)(N.G),{value:e.rating},null,8,["value"]),(0,s.eW)(" 98% пациентов рекомендуют врача ")])),_:2},1024),j])]),(0,s.Lk)("div",G,[(0,s.bF)((0,t.R1)(z.Wk),{to:`/doctors/${e.slug}`},{default:(0,s.k6)((()=>[(0,s.bF)((0,t.R1)(r.f),{tagName:"p",size:"xs",color:"dark-gray"},{default:(0,s.k6)((()=>[(0,s.eW)((0,i.v_)(e.specialties),1)])),_:2},1024),(0,s.bF)((0,t.R1)(o.D),{tagName:"h2",regular:"",size:"xs",color:"dark"},{default:(0,s.k6)((()=>[(0,s.eW)((0,i.v_)(e.fullName),1)])),_:2},1024),(0,s.Lk)("div",M,[(0,s.bF)((0,t.R1)(r.f),{tagName:"span",size:"xs",color:"dark-gray"},{default:(0,s.k6)((()=>[(0,s.eW)((0,i.v_)(e.experienceText),1)])),_:2},1024),T,(0,s.bF)((0,t.R1)(r.f),{tagName:"span",size:"xs",color:"dark-gray"},{default:(0,s.k6)((()=>[(0,s.eW)((0,i.v_)(e.category),1)])),_:2},1024)])])),_:2},1032,["to"]),(0,s.Lk)("div",A,[(0,s.bF)((0,t.R1)(r.f),{tagName:"p",size:"xs",color:"dark-gray"},{default:(0,s.k6)((()=>[(0,s.eW)(" телефон для записи ")])),_:1}),(0,s.Lk)("a",Q,[(0,s.bF)((0,t.R1)(r.f),{tagName:"p",size:"xxl",color:"dark"},{default:(0,s.k6)((()=>[(0,s.eW)(" 8 (800) 888 88 88 ")])),_:1})])]),(0,s.Lk)("div",V,[(0,s.bF)((0,t.R1)(r.f),{tagName:"span",size:"xs",color:"dark-gray"},{default:(0,s.k6)((()=>[(0,s.eW)(" наш чат: ")])),_:1}),(0,s.Lk)("ul",q,[(0,s.Lk)("li",null,[(0,s.Lk)("a",B,[(0,s.bF)((0,t.R1)(f.I),{type:"WS",color:"none",size:25})])]),(0,s.Lk)("li",null,[(0,s.Lk)("a",H,[(0,s.bF)((0,t.R1)(f.I),{type:"TG",color:"none",size:25})])])])]),(0,s.Lk)("div",J,[(0,s.bF)((0,t.R1)(r.f),{tagName:"p",size:"xs",color:"dark"},{default:(0,s.k6)((()=>[(0,s.bF)((0,t.R1)(N.G),{value:e.rating},null,8,["value"]),(0,s.eW)(" 98% пациентов рекомендуют врача ")])),_:2},1024),O])])]),(0,s.bF)((0,t.R1)(W))]),a<l.value.length-1?((0,s.uX)(),(0,s.CE)("hr",U)):(0,s.Q3)("",!0)])))),128))])])],64))}});const Z=(0,_.A)(Y,[["__scopeId","data-v-26cc7ccc"]]);var ee=Z}}]);
//# sourceMappingURL=73.js.map