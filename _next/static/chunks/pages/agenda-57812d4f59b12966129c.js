(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[396],{8325:function(e,n,t){"use strict";var r=t(6261),i=t(5893);n.Z=function(e){var n=r.W_;return(0,i.jsx)(n,{className:"page",id:e.id,children:(0,i.jsxs)("div",{className:"main",children:[e.title&&(0,i.jsx)("h1",{className:"title",children:e.title}),e.children]})})}},1991:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ie}});var r=t(7294),i=(t(8325),t(6437)),a=t(266),o=t(2809),s=t(6311),c=t(809),l=t.n(c),d=t(6186),u=t(6914),h=t(9783),p=t(4666),f=t(5522),j=t(7750),x=t(5344),g=t(1931),m=t(578),Z=t(3889),v=t(1655),y=t(5853),b=t(8779),O=t(6867),w=t(9986),C=t(7645),P=t(6447),S=t(9062),k=t(8309),D=t(7957),_=t(381),E=t.n(_),I=t(5893);function N(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function M(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?N(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var A=function(e){var n=r.useState(!1),t=(0,s.Z)(n,2),c=t[0],_=t[1],N=r.useState(!1),A=(0,s.Z)(N,2),H=A[0],W=A[1],Y=(0,r.useState)({date:null,time:null,name:"",person_count:"",contact:"",description:""}),B=Y[0],R=Y[1];(0,r.useEffect)((function(){c&&e.edit&&R(M(M({},e.reservation),{},{time:(0,y.Z)(e.reservation.time,"HH:mm",new Date)}))}),[c]);var z=(0,r.useState)(""),L=z[0],F=z[1],T=(0,r.useState)(!1),X=T[0],q=T[1],V=function(e,n){R((function(t){return M(M({},t),{},(0,o.Z)({},n,e))}))},G=function(){_(!0)},J=function(){R({date:null,time:null,name:"",person_count:"",contact:"",description:""}),_(!1)},K=function(){W(!1)},Q=function(){var n=(0,a.Z)(l().mark((function n(){var t,r;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(B.date&&B.time){n.next=2;break}return n.abrupt("return");case 2:q(!0),t="string"===typeof B.date||B.date instanceof String?B.date:(0,b.Z)(B.date,"yyyy-MM-dd"),r="string"===typeof B.time||B.time instanceof String?B.time:(0,b.Z)(B.time,"HH:mm"),e.edit?(0,i.cW)(t,B.id,M(M({},B),{},{time:(0,b.Z)(B.time,"HH:mm")})):(0,i._L)(t,r,B.person_count,B.contact,B.name,B.description),q(!1),F("reserva ".concat(e.edit?"actualizada":"creada"," : ").concat(E()(B.date).format("DD.MM.YYYY")," ").concat(r," ").concat(B.name)),W(!0),J();case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,I.jsxs)("div",{children:[e.edit?(0,I.jsx)(O.Z,{onClick:G,"aria-label":"upload picture",component:"span",children:(0,I.jsx)(D.Z,{})}):(0,I.jsx)(u.Z,{variant:"outlined",onClick:G,startIcon:(0,I.jsx)(k.Z,{}),children:"nueva reserva"}),(0,I.jsx)(w.Z,{open:H,autoHideDuration:6e3,onClose:K,anchorOrigin:{vertical:"top",horizontal:"right"},children:(0,I.jsx)(d.Z,{onClose:K,severity:"info",sx:{width:"100%"},children:L})}),(0,I.jsxs)(p.Z,{open:c,onClose:J,children:[(0,I.jsx)(C.Z,{children:"Nueva reserva"}),(0,I.jsxs)(j.Z,{children:[(0,I.jsxs)(x.Z,{dateAdapter:Z.Z,locale:v.Z,children:[(0,I.jsx)(g.Z,{label:"D\xeda",inputFormat:"dd.MM.yyyy",value:B.date,onChange:function(e){return V(e,"date")},renderInput:function(e){return(0,I.jsx)(h.Z,M(M({},e),{},{margin:"dense",fullWidth:!0}))}}),(0,I.jsx)(m.Z,{label:"Hora",ampm:!1,value:B.time,onChange:function(e){V(e,"time")},renderInput:function(e){return(0,I.jsx)(h.Z,M(M({},e),{},{margin:"dense",fullWidth:!0}))}})]}),(0,I.jsx)(h.Z,{margin:"dense",label:"Nombre",type:"text",value:B.name,fullWidth:!0,onChange:function(e){return V(e.target.value,"name")}}),(0,I.jsx)(h.Z,{margin:"dense",value:B.person_count,label:"Personas",type:"text",fullWidth:!0,onChange:function(e){return V(e.target.value,"person_count")}}),(0,I.jsx)(h.Z,{value:B.contact,margin:"dense",label:"Contacto",type:"text",fullWidth:!0,onChange:function(e){return V(e.target.value,"contact")}}),(0,I.jsx)(h.Z,{margin:"dense",value:B.description,label:"Observaciones",type:"text",fullWidth:!0,onChange:function(e){return V(e.target.value,"description")}})]}),X?(0,I.jsx)(P.Z,{alignItems:"end",children:(0,I.jsx)(S.Z,{style:{marginRight:24,marginBottom:20}})}):(0,I.jsxs)(f.Z,{children:[(0,I.jsx)(u.Z,{onClick:J,children:"Cancelar"}),(0,I.jsx)(u.Z,{onClick:Q,children:e.edit?"Cambiar":"A\xf1adir"})]})]})]})},H=t(1508),W=t(3951),Y=t(625),B=t(7691);function R(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?R(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var L=function(e){var n=(0,B.a)(),t=n.userInfo,i=n.login,s=(0,r.useState)({}),c=s[0],p=s[1],f=(0,r.useState)(!1),j=f[0],x=f[1],g=function(e,n){p((function(t){return z(z({},t),{},(0,o.Z)({},n,e))}))},m=function(){var e=(0,a.Z)(l().mark((function e(n){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,i(c.username,c.password);case 4:x(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),x(!0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(n){return e.apply(this,arguments)}}();return t.isLoading?(0,I.jsx)(P.Z,{alignItems:"center",children:(0,I.jsx)(S.Z,{})}):t.isAuth?e.children:(0,I.jsx)(H.Z,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:m,children:(0,I.jsxs)(P.Z,{spacing:3,children:[(0,I.jsx)(h.Z,{label:"Correo",onChange:function(e){return g(e.target.value,"username")}}),(0,I.jsx)(h.Z,{label:"Contrase\xf1a",type:"password",onChange:function(e){return g(e.target.value,"password")}}),j&&(0,I.jsx)(d.Z,{severity:"warning",children:"Por favor, compruebe sus datos de acceso"}),(0,I.jsx)(u.Z,{type:"submit",children:"Inicio"})]})})},F=t(9647),T=t(7349),X=t(7896),q=t(6501),V=t(9573),G=t(6011),J=t(3694),K=t(6926),Q=t(8732),U=t(6408),$=t(8364),ee=function(e){var n=e.reservation,t=r.useState(!1),o=(0,s.Z)(t,2),c=o[0],d=o[1],h=function(){d(!1)},x=function(){var e=(0,a.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(),e.next=3,(0,i.CE)(n.date,n.id);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,I.jsxs)("div",{children:[(0,I.jsx)(O.Z,{onClick:function(){d(!0)},"aria-label":"upload picture",component:"span",children:(0,I.jsx)($.Z,{})}),(0,I.jsxs)(p.Z,{open:c,onClose:h,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,I.jsx)(C.Z,{id:"alert-dialog-title",children:"\xbfRealmente quieres borrar la reserva?"}),(0,I.jsx)(j.Z,{children:(0,I.jsxs)(U.Z,{id:"alert-dialog-description",children:[E()(n.date).format("DD.MM.YYYY"),(0,I.jsx)("br",{}),n.time,(0,I.jsx)("br",{}),n.name]})}),(0,I.jsxs)(f.Z,{children:[(0,I.jsx)(u.Z,{onClick:h,children:"No"}),(0,I.jsx)(u.Z,{onClick:x,autoFocus:!0,children:"S\xed"})]})]})]})};function ne(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function te(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ne(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ne(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var re=function(e){var n,t,r=e.agenda,i=null===r||void 0===r?void 0:r.date,a=(null===r||void 0===r?void 0:r.reservations)||[];return(0,I.jsx)(X.Z,{component:q.Z,children:(0,I.jsxs)(V.Z,{size:"small",sx:{minWidth:650},"aria-label":"simple table",children:[(0,I.jsx)(G.Z,{children:(0,I.jsxs)(J.Z,{children:[(0,I.jsx)(K.Z,{children:"Hora"}),(0,I.jsx)(K.Z,{align:"right",children:"Nombre"}),(0,I.jsx)(K.Z,{align:"right",children:"Personas"}),(0,I.jsx)(K.Z,{align:"right",children:"Contacto"}),(0,I.jsx)(K.Z,{align:"right",children:"Observaciones"}),(0,I.jsx)(K.Z,{align:"center"})]})}),(0,I.jsxs)(Q.Z,{children:[null===a||void 0===a||null===(n=a.filter((function(e){return e.time<"19:00"})))||void 0===n?void 0:n.map((function(e){return(0,I.jsxs)(J.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,I.jsx)(K.Z,{width:10,component:"th",scope:"row",children:e.time}),(0,I.jsx)(K.Z,{align:"right",children:e.name}),(0,I.jsx)(K.Z,{align:"right",children:e.person_count}),(0,I.jsx)(K.Z,{align:"right",children:e.contact}),(0,I.jsx)(K.Z,{align:"right",children:e.description}),(0,I.jsx)(K.Z,{width:10,align:"center",children:(0,I.jsxs)(P.Z,{direction:"row",children:[(0,I.jsx)(A,{edit:!0,reservation:te(te({},e),{},{date:i})}),(0,I.jsx)(ee,{reservation:te(te({},e),{},{date:i})})]})})]},e.id)})),0===a.filter((function(e){return e.time<"19:00"})).length&&(0,I.jsx)(J.Z,{children:(0,I.jsx)(K.Z,{colSpan:6,style:{textAlign:"center"},children:"No hay reservas"})}),(0,I.jsx)(J.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:(0,I.jsxs)(K.Z,{colSpan:6,width:10,component:"th",scope:"row",style:{textAlign:"center"},children:[(0,I.jsx)("hr",{}),(0,I.jsx)("hr",{})]})}),null===a||void 0===a||null===(t=a.filter((function(e){return e.time>"19:00"})))||void 0===t?void 0:t.map((function(e){return(0,I.jsxs)(J.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,I.jsx)(K.Z,{width:10,component:"th",scope:"row",children:e.time}),(0,I.jsx)(K.Z,{align:"right",children:e.name}),(0,I.jsx)(K.Z,{align:"right",children:e.person_count}),(0,I.jsx)(K.Z,{align:"right",children:e.contact}),(0,I.jsx)(K.Z,{align:"right",children:e.description}),(0,I.jsx)(K.Z,{width:10,align:"center",children:(0,I.jsxs)(P.Z,{direction:"row",children:[(0,I.jsx)(A,{edit:!0,reservation:te(te({},e),{},{date:i})}),(0,I.jsx)(ee,{reservation:te(te({},e),{},{date:i})})]})})]},e.id)})),0===a.filter((function(e){return e.time>"19:00"})).length&&(0,I.jsx)(J.Z,{children:(0,I.jsx)(K.Z,{colSpan:6,style:{textAlign:"center"},children:"No hay reservas"})})]})]})})},ie=function(){var e=(0,B.a)().userInfo,n=(0,r.useState)({}),t=n[0],a=n[1],o=(0,r.useState)(new Date),s=o[0],c=o[1],l=(0,r.useState)(!0),d=l[0],h=l[1];(0,r.useEffect)((function(){document.getElementById("navigation").style.display="none",document.getElementById("footer").style.display="none"}),[]),(0,r.useEffect)((function(){if(e.isAuth){h(!0);var n=(0,b.Z)(s,"yyyy-MM-dd"),t=(0,i.x8)(n,(function(e){var n,t=e.data();t&&t.reservations&&(t.reservations=null===t||void 0===t||null===(n=t.reservations)||void 0===n?void 0:n.sort((function(e,n){return e.time.localeCompare(n.time)})));a(t),h(!1)}));return function(){t()}}}),[s,e]);var p=function(e){var n=(0,T.Z)(s,e);c(n)};return(0,I.jsxs)("div",{style:{padding:20,maxWidth:1200,marginLeft:"auto",marginRight:"auto"},children:[(0,I.jsx)("h1",{style:{textAlign:"center",marginBottom:40},children:"Agenda"}),(0,I.jsxs)(L,{children:[(0,I.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20},children:[(0,I.jsx)("div",{children:(0,I.jsx)(O.Z,{component:"span",onClick:function(){return p(-1)},children:(0,I.jsx)(W.Z,{})})}),(0,I.jsxs)(P.Z,{direction:"row",spacing:2,justifyContent:"center",alignItems:"center",children:[(0,I.jsx)(u.Z,{onClick:function(){c(new Date)},children:"Hoy"}),(0,I.jsx)(x.Z,{dateAdapter:Z.Z,locale:v.Z,children:(0,I.jsx)(F.Z,{value:s,onChange:function(e){c(e)},renderInput:function(e){var n=e.inputRef,t=(e.inputProps,e.InputProps);return(0,I.jsxs)(H.Z,{sx:{display:"flex",alignItems:"center"},children:[null===t||void 0===t?void 0:t.endAdornment,"\xa0\xa0\xa0",(0,I.jsx)("strong",{ref:n,children:(0,b.Z)(s,"dd.MM.yyyy")})]})}})}),(0,I.jsx)(A,{})]}),(0,I.jsx)("div",{children:(0,I.jsx)(O.Z,{component:"span",onClick:function(){return p(1)},children:(0,I.jsx)(Y.Z,{})})})]}),d?(0,I.jsx)(P.Z,{alignItems:"center",children:(0,I.jsx)(S.Z,{})}):(0,I.jsx)(re,{agenda:t})]})]})}},5889:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/agenda",function(){return t(1991)}])}},function(e){e.O(0,[885,725,774,888,179],(function(){return n=5889,e(e.s=n);var n}));var n=e.O();_N_E=n}]);