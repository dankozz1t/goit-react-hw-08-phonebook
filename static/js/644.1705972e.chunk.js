"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[644],{644:function(e,n,a){a.r(n),a.d(n,{default:function(){return m}});var r=a(861),t=a(885),s=a(413),u=a(687),o=a.n(u),c=a(791),i=a(722),l=a(184),p=function(e,n){switch(n.type){case"name":return(0,s.Z)((0,s.Z)({},e),{},{name:n.payload});case"email":return(0,s.Z)((0,s.Z)({},e),{},{email:n.payload});case"password":return(0,s.Z)((0,s.Z)({},e),{},{password:n.payload});case"reset":return(0,s.Z)({},n.payload);default:return e}},d={name:"",email:"",password:""},m=function(){var e=(0,c.useReducer)(p,d),n=(0,t.Z)(e,2),a=n[0],s=a.name,u=a.email,m=a.password,f=n[1],h=(0,i.ZD)(),v=(0,t.Z)(h,1)[0],x=function(e){var n=e.currentTarget,a=n.name,r=n.value;f({type:a,payload:r})},w=function(){var e=(0,r.Z)(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),u&&m){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,v({name:s,email:u,password:m});case 6:f({type:"reset",payload:d}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(n){return e.apply(this,arguments)}}();return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("form",{onSubmit:w,children:[(0,l.jsxs)("label",{children:[(0,l.jsx)("span",{children:"Name"}),(0,l.jsx)("input",{type:"text",name:"name",value:s,onChange:x})]}),(0,l.jsxs)("label",{children:[(0,l.jsx)("span",{children:"Email"}),(0,l.jsx)("input",{type:"email",name:"email",value:u,onChange:x})]}),(0,l.jsxs)("label",{children:[(0,l.jsx)("span",{children:"Password"}),(0,l.jsx)("input",{type:"password",name:"password",value:m,onChange:x})]}),(0,l.jsx)("button",{type:"submit",children:"Login"})]})})}},861:function(e,n,a){function r(e,n,a,r,t,s,u){try{var o=e[s](u),c=o.value}catch(i){return void a(i)}o.done?n(c):Promise.resolve(c).then(r,t)}function t(e){return function(){var n=this,a=arguments;return new Promise((function(t,s){var u=e.apply(n,a);function o(e){r(u,t,s,o,c,"next",e)}function c(e){r(u,t,s,o,c,"throw",e)}o(void 0)}))}}a.d(n,{Z:function(){return t}})}}]);
//# sourceMappingURL=644.1705972e.chunk.js.map