(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[396],{8325:function(e,n,t){"use strict";var r=t(6261),i=t(5893);n.Z=function(e){var n=r.W_;return(0,i.jsx)(n,{className:"page",id:e.id,children:(0,i.jsxs)("div",{className:"main",children:[e.title&&(0,i.jsx)("h1",{className:"title",children:e.title}),e.children]})})}},1077:function(e,n,t){"use strict";t.d(n,{Qt:function(){return h},kS:function(){return p},x4:function(){return x},_L:function(){return j},CE:function(){return v},x8:function(){return Z}});var r=t(266),i=t(809),c=t.n(i),s=t(5503),a=t(6257),o=t(4586),u=t(1369),l="agendas",d=((0,s.ZF)({apiKey:"AIzaSyAbevVynk_hK4q3EG800AsNzE19hnUqAVU",projectId:"elbuhotuerto"}),(0,a.ad)()),f=(0,u.v0)(),h=function(e,n){return(0,u.Aj)(f,(function(t){e(t),n(!1)}))},p=function(){var e=(0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.signOut();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=(0,r.Z)(c().mark((function e(n,t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.e5)(f,n,t);case 2:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),j=function(){var e=(0,r.Z)(c().mark((function e(n,t,r,i,s,u){var f,h;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f={id:(0,o.Z)(),time:t,person_count:r||0,contact:i||"",name:s||"",description:u||""},h=(0,a.JU)(d,l,n),e.next=4,(0,a.QT)(h);case 4:if(!e.sent.exists()){e.next=10;break}return e.next=8,(0,a.r7)(h,{reservations:(0,a.vr)(f)});case 8:e.next=12;break;case 10:return e.next=12,(0,a.pl)((0,a.JU)(d,l,n),{date:n,reservations:[f]});case 12:case"end":return e.stop()}}),e)})));return function(n,t,r,i,c,s){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(n,t){var r,i,s,o,u;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,a.JU)(d,l,n),e.next=3,(0,a.QT)(r);case 3:if(!(i=e.sent).exists()){e.next=11;break}if(o=i.data(),u=null===o||void 0===o||null===(s=o.reservations)||void 0===s?void 0:s.find((function(e){return e.id===t}))){e.next=9;break}return e.abrupt("return");case 9:return e.next=11,(0,a.r7)(r,{reservations:(0,a.Ab)(u)});case 11:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),Z=function(e,n,t){return t(!0),(0,a.cf)((0,a.JU)(d,l,n),(function(n){var r,i=n.data();i&&i.reservations&&(i.reservations=null===i||void 0===i||null===(r=i.reservations)||void 0===r?void 0:r.sort((function(e,n){return e.time.localeCompare(n.time)})));e(i),t(!1)}),(function(){t(!1)}),(function(){t(!1)}))}},6666:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return $}});var r=t(2809),i=t(7294),c=t(8325),s=t(1077),a=t(266),o=t(6311),u=t(809),l=t.n(u),d=t(6186),f=t(6914),h=t(9783),p=t(4666),x=t(5522),j=t(7750),v=t(5344),Z=t(1931),g=t(578),y=t(8511),m=t(1655),b=t(8779),O=t(9986),w=t(7645),C=t(8309),k=t(5893);function P(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function S(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?P(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var _=function(){var e=i.useState(!1),n=(0,o.Z)(e,2),t=n[0],c=n[1],u=i.useState(!1),P=(0,o.Z)(u,2),_=P[0],D=P[1],E=(0,i.useState)({date:null,time:null}),N=E[0],A=E[1],M=(0,i.useState)(""),I=M[0],W=M[1],H=function(e,n){A((function(t){return S(S({},t),{},(0,r.Z)({},n,e))}))},U=function(){A({date:null,time:null}),c(!1)},z=function(){D(!1)},J=function(){var e=(0,a.Z)(l().mark((function e(){var n,t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N.date&&N.time){e.next=2;break}return e.abrupt("return");case 2:return n=(0,b.Z)(N.date,"yyyy-MM-dd"),t=(0,b.Z)(N.time,"HH:mm"),e.next=6,(0,s._L)(n,t,N.person_count,N.contact,N.name,N.description);case 6:W("reserva creada: ".concat((0,b.Z)(N.date,"dd.MM.yyyy")," ").concat(t," ").concat(N.name)),D(!0),U();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,k.jsxs)("div",{children:[(0,k.jsx)(f.Z,{variant:"outlined",onClick:function(){c(!0)},startIcon:(0,k.jsx)(C.Z,{}),children:"nueva reserva"}),(0,k.jsx)(O.Z,{open:_,autoHideDuration:6e3,onClose:z,anchorOrigin:{vertical:"top",horizontal:"right"},children:(0,k.jsx)(d.Z,{onClose:z,severity:"info",sx:{width:"100%"},children:I})}),(0,k.jsxs)(p.Z,{open:t,onClose:U,children:[(0,k.jsx)(w.Z,{children:"Nueva reserva"}),(0,k.jsxs)(j.Z,{children:[(0,k.jsxs)(v.Z,{dateAdapter:y.Z,locale:m.Z,children:[(0,k.jsx)(Z.Z,{label:"D\xeda",inputFormat:"dd.MM.yyyy",value:N.date,onChange:function(e){return H(e,"date")},renderInput:function(e){return(0,k.jsx)(h.Z,S(S({},e),{},{margin:"dense",fullWidth:!0}))}}),(0,k.jsx)(g.Z,{label:"Hora",ampm:!1,value:N.time,onChange:function(e){H(e,"time")},renderInput:function(e){return(0,k.jsx)(h.Z,S(S({},e),{},{margin:"dense",fullWidth:!0}))}})]}),(0,k.jsx)(h.Z,{margin:"dense",label:"Nombre",type:"text",fullWidth:!0,onChange:function(e){return H(e.target.value,"name")}}),(0,k.jsx)(h.Z,{margin:"dense",label:"Personas",type:"text",fullWidth:!0,onChange:function(e){return H(e.target.value,"person_count")}}),(0,k.jsx)(h.Z,{margin:"dense",label:"Contacto",type:"text",fullWidth:!0,onChange:function(e){return H(e.target.value,"contact")}}),(0,k.jsx)(h.Z,{margin:"dense",id:"name",label:"Observaciones",type:"text",fullWidth:!0,onChange:function(e){return H(e.target.value,"description")}})]}),(0,k.jsxs)(x.Z,{children:[(0,k.jsx)(f.Z,{onClick:U,children:"Cancelar"}),(0,k.jsx)(f.Z,{onClick:J,children:"A\xf1adir"})]})]})]})},D=t(7896),E=t(6501),N=t(9573),A=t(6011),M=t(3694),I=t(6926),W=t(8732),H=t(6867),U=t(6447),z=t(1508),J=t(9062),Q=t(3951),T=t(625);function q(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function F(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?q(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):q(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var V=function(e){var n=(0,i.useState)({}),t=n[0],c=n[1],o=(0,i.useState)(null),u=o[0],p=o[1],x=(0,i.useState)(!0),j=x[0],v=x[1],Z=(0,i.useState)(!1),g=Z[0],y=Z[1];(0,i.useEffect)((function(){var e=(0,s.Qt)(p,v);return function(){e()}}),[]);var m=function(e,n){c((function(t){return F(F({},t),{},(0,r.Z)({},n,e))}))},b=function(){var e=(0,a.Z)(l().mark((function e(n){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,(0,s.x4)(t.username,t.password);case 4:y(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),y(!0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(n){return e.apply(this,arguments)}}();return j?(0,k.jsx)(U.Z,{alignItems:"center",children:(0,k.jsx)(J.Z,{})}):u?e.children:(0,k.jsx)(z.Z,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:b,children:(0,k.jsxs)(U.Z,{spacing:3,children:[(0,k.jsx)(h.Z,{label:"Correo",onChange:function(e){return m(e.target.value,"username")}}),(0,k.jsx)(h.Z,{label:"Contrase\xf1a",type:"password",onChange:function(e){return m(e.target.value,"password")}}),g&&(0,k.jsx)(d.Z,{severity:"warning",children:"Por favor, compruebe sus datos de acceso"}),(0,k.jsx)(f.Z,{type:"submit",children:"Inicio"})]})})},K=t(9647),L=t(7349),R=t(6408),X=t(8364),B=function(e){var n=e.reservation,t=i.useState(!1),r=(0,o.Z)(t,2),c=r[0],u=r[1],d=function(){u(!1)},h=function(){var e=(0,a.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(),e.next=3,(0,s.CE)((0,b.Z)(n.date,"yyyy-MM-dd"),n.id);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,k.jsxs)("div",{children:[(0,k.jsx)(H.Z,{onClick:function(){u(!0)},"aria-label":"upload picture",component:"span",children:(0,k.jsx)(X.Z,{})}),(0,k.jsxs)(p.Z,{open:c,onClose:d,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,k.jsx)(w.Z,{id:"alert-dialog-title",children:"\xbfRealmente quieres borrar la reserva?"}),(0,k.jsx)(j.Z,{children:(0,k.jsxs)(R.Z,{id:"alert-dialog-description",children:[(0,b.Z)(n.date,"dd.MM.yyyy"),(0,k.jsx)("br",{}),n.time,(0,k.jsx)("br",{}),n.name]})}),(0,k.jsxs)(x.Z,{children:[(0,k.jsx)(f.Z,{onClick:d,children:"No"}),(0,k.jsx)(f.Z,{onClick:h,autoFocus:!0,children:"S\xed"})]})]})]})};function G(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?G(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):G(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var $=function(){var e=(0,i.useState)({}),n=e[0],t=e[1],r=(0,i.useState)(new Date),a=r[0],o=r[1],u=(0,i.useState)(!0),l=u[0],d=u[1];(0,i.useEffect)((function(){var e=(0,b.Z)(a,"yyyy-MM-dd"),n=(0,s.x8)(t,e,d);return function(){n()}}),[a]);var h=function(e){var n=(0,L.Z)(a,e);o(n)};return(0,k.jsx)(c.Z,{id:"agenda",title:"Agenda",children:(0,k.jsxs)(V,{children:[(0,k.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20},children:[(0,k.jsx)("div",{children:(0,k.jsx)(H.Z,{component:"span",onClick:function(){return h(-1)},children:(0,k.jsx)(Q.Z,{})})}),(0,k.jsxs)(U.Z,{direction:"row",spacing:2,justifyContent:"center",alignItems:"center",children:[(0,k.jsx)(f.Z,{onClick:function(){o(new Date)},children:"Hoy"}),(0,k.jsx)(v.Z,{dateAdapter:y.Z,locale:m.Z,children:(0,k.jsx)(K.Z,{value:a,onChange:function(e){o(e)},renderInput:function(e){var n=e.inputRef,t=(e.inputProps,e.InputProps);return(0,k.jsxs)(z.Z,{sx:{display:"flex",alignItems:"center"},children:[null===t||void 0===t?void 0:t.endAdornment,"\xa0\xa0\xa0",(0,k.jsx)("strong",{ref:n,children:(0,b.Z)(a,"dd.MM.yyyy")})]})}})}),(0,k.jsx)(_,{})]}),(0,k.jsx)("div",{children:(0,k.jsx)(H.Z,{component:"span",onClick:function(){return h(1)},children:(0,k.jsx)(T.Z,{})})})]}),l?(0,k.jsx)(U.Z,{alignItems:"center",children:(0,k.jsx)(J.Z,{})}):function(e){var n,t,r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=e||[];return(0,k.jsx)(D.Z,{component:E.Z,children:(0,k.jsxs)(N.Z,{size:"small",sx:{minWidth:650},"aria-label":"simple table",children:[r&&(0,k.jsx)(A.Z,{children:(0,k.jsxs)(M.Z,{children:[(0,k.jsx)(I.Z,{children:"Hora"}),(0,k.jsx)(I.Z,{align:"right",children:"Nombre"}),(0,k.jsx)(I.Z,{align:"right",children:"Personas"}),(0,k.jsx)(I.Z,{align:"right",children:"Contacto"}),(0,k.jsx)(I.Z,{align:"right",children:"Observaciones"}),(0,k.jsx)(I.Z,{align:"center"})]})}),(0,k.jsxs)(W.Z,{children:[null===e||void 0===e||null===(n=e.filter((function(e){return e.time<"19:00"})))||void 0===n?void 0:n.map((function(e){return(0,k.jsxs)(M.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,k.jsx)(I.Z,{width:10,component:"th",scope:"row",children:e.time}),(0,k.jsx)(I.Z,{align:"right",children:e.name}),(0,k.jsx)(I.Z,{align:"right",children:e.person_count}),(0,k.jsx)(I.Z,{align:"right",children:e.contact}),(0,k.jsx)(I.Z,{align:"right",children:e.description}),(0,k.jsx)(I.Z,{width:10,align:"center",children:(0,k.jsx)(B,{reservation:Y(Y({},e),{},{date:a})})})]},e.name)})),0===i.filter((function(e){return e.time<"19:00"})).length&&(0,k.jsx)(M.Z,{children:(0,k.jsx)(I.Z,{colSpan:6,style:{textAlign:"center"},children:"No hay reservas"})}),(0,k.jsx)(M.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:(0,k.jsxs)(I.Z,{colSpan:6,width:10,component:"th",scope:"row",style:{textAlign:"center"},children:[(0,k.jsx)("hr",{}),(0,k.jsx)("hr",{})]})}),null===e||void 0===e||null===(t=e.filter((function(e){return e.time>"19:00"})))||void 0===t?void 0:t.map((function(e){return(0,k.jsxs)(M.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,k.jsx)(I.Z,{width:10,component:"th",scope:"row",children:e.time}),(0,k.jsx)(I.Z,{align:"right",children:e.name}),(0,k.jsx)(I.Z,{align:"right",children:e.person_count}),(0,k.jsx)(I.Z,{align:"right",children:e.contact}),(0,k.jsx)(I.Z,{align:"right",children:e.description}),(0,k.jsx)(I.Z,{width:10,align:"center",children:(0,k.jsx)(B,{reservation:Y(Y({},e),{},{date:a})})})]},e.name)})),0===i.filter((function(e){return e.time>"19:00"})).length&&(0,k.jsx)(M.Z,{children:(0,k.jsx)(I.Z,{colSpan:6,style:{textAlign:"center"},children:"No hay reservas"})})]})]})})}(null===n||void 0===n?void 0:n.reservations)]})})}},5889:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/agenda",function(){return t(6666)}])}},function(e){e.O(0,[16,297,343,867,774,888,179],(function(){return n=5889,e(e.s=n);var n}));var n=e.O();_N_E=n}]);