"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[175],{7175:function(e,r,a){a.r(r),a.d(r,{default:function(){return f}});var n=a(5861),t=a(885),s=a(1413),o=a(4687),u=a.n(o),l=a(2791),i=a(5722),c=a(8174),p=a(184),d=function(e,r){switch(r.type){case"email":return(0,s.Z)((0,s.Z)({},e),{},{email:r.payload});case"password":return(0,s.Z)((0,s.Z)({},e),{},{password:r.payload});case"reset":return(0,s.Z)({},r.payload);default:return e}},m={email:"",password:""},f=function(){var e=(0,l.useReducer)(d,m),r=(0,t.Z)(e,2),a=r[0],s=a.email,o=a.password,f=r[1],h=(0,i.yY)(),w=(0,t.Z)(h,1)[0],v=function(e){var r=e.currentTarget,a=r.name,n=r.value;f({type:a,payload:n})},x=function(){var e=(0,n.Z)(u().mark((function e(r){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),s&&o){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,w({email:s,password:o}).then((function(e){(null===e||void 0===e?void 0:e.error)&&c.Am.info("Error! Wrong email or password")}));case 6:f({type:"reset",payload:m}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(r){return e.apply(this,arguments)}}();return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("form",{onSubmit:x,children:[(0,p.jsxs)("label",{children:[(0,p.jsx)("span",{children:"Email"}),(0,p.jsx)("input",{type:"email",name:"email",value:s,onChange:v})]}),(0,p.jsxs)("label",{children:[(0,p.jsx)("span",{children:"Password"}),(0,p.jsx)("input",{type:"password",name:"password",value:o,onChange:v})]}),(0,p.jsx)("button",{type:"submit",children:"Login"})]})})}}}]);
//# sourceMappingURL=175.06265846.chunk.js.map