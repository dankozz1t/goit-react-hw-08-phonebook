"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[766],{8211:function(e,r,a){a.d(r,{Z:function(){return d}});var n=a(885),t=a(2791),s=a(2677),l=a(9186),i=a(2134),o="PasswordInput_btn__g7scp",c=a(184),d=function(e){var r=e.label,a=e.placeholder,d=e.title,u=e.onChange,p=e.password,h=(0,t.useState)(!1),m=(0,n.Z)(h,2),f=m[0],w=m[1];return(0,c.jsxs)(s.Z,{children:[(0,c.jsx)(l.Z.Label,{htmlFor:"password",className:"formLabel",children:r}),(0,c.jsx)(l.Z.Control,{className:"mb-2",id:"password",placeholder:a,type:f?"text":"password",name:"password",pattern:".{7,16}",title:d,value:p,onChange:u,required:!0}),(0,c.jsx)("button",{className:o,type:"button",onClick:function(){w(!f)},children:f?(0,c.jsx)(i.p3W,{size:"1.4em",title:"Icon hide password"}):(0,c.jsx)(i.w8I,{size:"1.4em",title:"Icon show password"})})]})}},3418:function(e,r,a){a.d(r,{Z:function(){return s}});a(2791);var n="Section_title__SLHvV",t=a(184),s=function(e){var r=e.title,a=e.children;return(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{className:n,children:r}),a]})}},4766:function(e,r,a){a.r(r),a.d(r,{default:function(){return y}});var n=a(2791),t=a(5048),s=a(8445),l=a(3418),i=a(5861),o=a(885),c=a(4687),d=a.n(c),u=a(5722),p=a(9085),h=a(4566),m=a(1413),f=function(e,r){switch(r.type){case"email":return(0,m.Z)((0,m.Z)({},e),{},{email:r.payload});case"password":return(0,m.Z)((0,m.Z)({},e),{},{password:r.payload});case"reset":return(0,m.Z)({},r.payload);default:return e}},w=a(3360),x=a(2677),Z=a(9186),b=a(9743),v=a(8211),j=a(184),g={email:"",password:""},_=function(){var e=(0,t.v9)(s.G3,t.wU),r=(0,n.useReducer)(f,g),a=(0,o.Z)(r,2),l=a[0],c=l.email,m=l.password,_=a[1],y=(0,u.yY)(),k=(0,o.Z)(y,2),I=k[0],C=k[1].isLoading,N=function(e){var r=e.currentTarget,a=r.name,n=r.value;_({type:a,payload:n})},L=function(){var e=(0,i.Z)(d().mark((function e(r){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),c&&m){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,I({email:c,password:m}).then((function(e){(null===e||void 0===e?void 0:e.error)&&p.Am.info("Error! Wrong email or password")}));case 6:_({type:"reset",payload:g}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(r){return e.apply(this,arguments)}}();return(0,j.jsxs)(Z.Z,{onSubmit:L,children:[(0,j.jsx)(b.Z,{xs:!0,children:(0,j.jsxs)(x.Z,{children:[(0,j.jsx)(Z.Z.Label,{htmlFor:"email",className:"formLabel",children:e.login_labelInputEmail}),(0,j.jsx)(Z.Z.Control,{className:"mb-2",id:"email",placeholder:e.login_placeholderInputEmail,type:"email",name:"email",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",title:e.login_titleInputEmail,value:c,onChange:N,required:!0})]})}),(0,j.jsx)(b.Z,{xs:!0,children:(0,j.jsx)(v.Z,{label:e.login_labelInputPassword,placeholder:e.login_placeholderInputPassword,title:e.login_titleInputPassword,onChange:N,password:m})}),(0,j.jsx)("div",{className:"d-grid gap-2",children:(0,j.jsx)(w.Z,{variant:"primary",type:"submit",disabled:C,children:C?(0,j.jsx)(h.Z,{width:"45",height:"10",color:"#fff"}):(0,j.jsx)("span",{children:e.btn_login})})})]})},y=function(){var e=(0,t.v9)(s.G3,t.wU);return(0,j.jsx)("main",{className:"box",children:(0,j.jsx)(l.Z,{title:e.login_tittle,children:(0,j.jsx)(_,{})})})}}}]);
//# sourceMappingURL=766.e2bd0dc1.chunk.js.map