(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9675:function(e,a,s){"use strict";var n=s(5893);a.Z=function(e){return(0,n.jsx)("div",{className:"card ".concat(e.className),children:(0,n.jsx)("div",{className:"card-body",children:e.children})})}},8325:function(e,a,s){"use strict";var n=s(6261),r=s(5893);a.Z=function(e){var a=n.W_;return(0,r.jsx)(a,{className:"page",id:e.id,children:(0,r.jsxs)("div",{className:"main",children:[e.title&&(0,r.jsx)("h1",{className:"title",children:e.title}),e.children]})})}},8441:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return C}});var n=s(1664),r=s(5893),i=function(e){return(0,r.jsx)("button",{className:"p-button p-button-1",children:(0,r.jsx)("b",{children:e.label})})},t=s(7294),o=function(e){var a=(0,t.createRef)();return(0,t.useEffect)((function(){var s=1,n=setInterval((function(){s++;var n=e.images[s%e.images.length];a.current.style.backgroundImage="url(".concat(n,")")}),1e4);return function(){clearInterval(n)}}),[]),(0,r.jsxs)("div",{className:"landing-page",ref:a,style:{backgroundImage:"url(".concat(e.images[0],")"),transition:"background-image 2s ease-in-out"},children:[(0,r.jsx)("div",{style:{width:"100%",textAlign:"right",marginTop:-50},children:(0,r.jsx)("img",{src:"/assets/logo.png",width:200,style:{}})}),(0,r.jsx)("div",{className:"text-shadow",children:(0,r.jsx)("h1",{style:{textAlign:"center"},children:"Un rinc\xf3n argentino en Las Palmas"})}),(0,r.jsx)(n.default,{href:"/menu",children:(0,r.jsx)("a",{children:(0,r.jsx)(i,{label:"Men\xfa"})})})]})},c=o;o.defaultProps={images:["/assets/images/landing/inicio-1.jpg","/assets/images/landing/inicio-2.jpg","/assets/images/landing/inicio-3.jpg","/assets/images/landing/inicio-4.jpg","/assets/images/landing/inicio-5.jpg"]};var l=s(2809),d=s(8325),u=s(9675),h=s(9669),m=s.n(h),j=s(2643);function x(e,a){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),s.push.apply(s,n)}return s}function g(e){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?x(Object(s),!0).forEach((function(a){(0,l.Z)(e,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):x(Object(s)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(s,a))}))}return e}for(var p="https://raw.githubusercontent.com/tobiasbenkner/instagram/main/el_buhotuerto",f=[],b=0;b<3;b++)f.push({image:"".concat(p,"/").concat(b,".jpg")});var v=function(){var e=(0,t.useState)(f),a=e[0],s=e[1];return(0,t.useEffect)((function(){m().get("".concat(p,"/text.json")).then((function(e){for(var n=e.data.map((function(e){var a,s,n=null===(a=e.es)||void 0===a?void 0:a.indexOf("<br/>"),r=n>-1?null===e||void 0===e||null===(s=e.es)||void 0===s?void 0:s.substring(0,n):null===e||void 0===e?void 0:e.es;return g(g({},e),{},{text:r})})),r=[],i=0;i<a.length;i++)r.push(g(g({},a[i]),{},{text:n[i].text}));s(r)}))}),[]),(0,r.jsx)(d.Z,{id:"news",title:"Noticias",children:(0,r.jsx)("div",{className:"insta",children:a.map((function(e,a){return(0,r.jsx)(u.Z,{className:"insta-item",children:(0,r.jsxs)(j.Z,{children:[(0,r.jsx)("div",{style:{textAlign:"center",width:"100%"},children:(0,r.jsx)("img",{src:e.image,alt:"",width:"100%",height:300,style:{objectFit:"contain"}})}),(0,r.jsx)("div",{className:"insta-text",dangerouslySetInnerHTML:{__html:e.text}})]})},a)}))})})},w=v;v.defaultProps={instagram:[]};var y=s(8101),N=s(1130),O="https://www.google.com/maps/place/B%C3%BAho+Tuerto/@28.136629,-15.43349,15z/data=!4m5!3m4!1s0x0:0x727a399792854111!8m2!3d28.1366285!4d-15.4334896",P=function(e){return(0,r.jsx)(d.Z,{id:"restaurant",title:"",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"container-item wrapper",style:{display:"flex",flexDirection:"column"},children:[(0,r.jsx)("h2",{children:"Ubicaci\xf3n"}),(0,r.jsx)("a",{href:O,target:"_blank",rel:"noreferrer",style:{width:"100%",textAlign:"center"},children:(0,r.jsx)("img",{src:"".concat(N.server,"/assets/images/location.png"),alt:"location",style:{border:0,borderRadius:10,width:"100%",maxWidth:300}})}),(0,r.jsxs)("div",{style:{margin:"10px auto"},children:[(0,r.jsx)("a",{href:O,target:"_blank",rel:"noreferrer",style:{width:"100%",color:"white",textDecoration:"none"},children:(0,r.jsxs)(y.Z,{name:"marker",height:"20",width:"20",children:["El B\xfaho Tuerto",(0,r.jsx)("br",{}),"Tom\xe1s Miller 13",(0,r.jsx)("br",{}),"35007 Las Palmas"]})}),(0,r.jsx)("br",{}),(0,r.jsx)(y.Z,{color:"1",height:"20",width:"20",name:"phone",children:(0,r.jsx)("a",{href:"tel:+34928 504 820",children:"928 504 820"})}),(0,r.jsx)("br",{}),(0,r.jsx)(y.Z,{color:"1",height:"20",width:"20",name:"mobile",children:(0,r.jsx)("a",{href:"tel:+34608963438",children:"608 963 438"})}),(0,r.jsx)("br",{}),(0,r.jsx)(y.Z,{color:"1",height:"20",width:"20",name:"mail",children:(0,r.jsx)("a",{href:"mailto: elbuhotuerto13@gmail.com",children:"elbuhotuerto13@gmail.com"})})]})]}),(0,r.jsxs)("div",{className:"container-item wrapper",children:[(0,r.jsx)("h2",{children:"Horario"}),(0,r.jsx)("table",{style:{marginTop:"-1em"},children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Lunes"}),(0,r.jsx)("td",{children:"13:00 - 17:00"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Martes"}),(0,r.jsx)("td",{children:"Closed"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Mi\xe9rcoles"}),(0,r.jsx)("td",{children:"13:00 - 17:00"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Jueves"}),(0,r.jsxs)("td",{children:["13:00 - 17:00",(0,r.jsx)("br",{}),"20:00 - 00:00"]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Viernes"}),(0,r.jsxs)("td",{children:["13:00 - 17:00",(0,r.jsx)("br",{}),"20:00 - 00:00"]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"S\xe1bado"}),(0,r.jsxs)("td",{children:["13:00 - 17:00",(0,r.jsx)("br",{}),"20:00 - 00:00"]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Domingo"}),(0,r.jsx)("td",{children:"13:00 - 17:00"})]})]})})]})]})})},_=P;P.defaultProps={onLoaded:function(){}};var E=function(){return(0,r.jsxs)(d.Z,{id:"about",title:"Sobre nosotros",children:[(0,r.jsx)("div",{style:{textAlign:"center"},children:(0,r.jsx)("img",{src:"".concat(N.server,"/assets/images/about.jpg"),style:{width:"100%",maxWidth:250},alt:"about"})}),(0,r.jsx)("h1",{children:"Somos una empresa familiar"}),(0,r.jsx)("p",{children:"Pretendemos crear para ti un c\xe1lido rinc\xf3n familiar contando con un esmerado servicio y productos de primera calidad. Nos especializamos en carnes a la brasa con un sabor aut\xe9ntico y t\xedpico de nuestra tierra. \xa1Esperamos que te sientas como en tu propia casa!!"}),(0,r.jsx)("h1",{children:"Nos Gusta ser diferentes"}),(0,r.jsx)("p",{children:"Desde diciembre del 2014 estamos en Las Palmas de Gran Canaria."}),(0,r.jsx)("p",{children:"Hemos querido romper con la est\xe9tica convencional de los grilles argentinos ya que estamos en una zona urbana, de ah\xed nace la idea de transportarnos al t\xedpico barrio porte\xf1o de La Boca."}),(0,r.jsx)("p",{children:"Nos complace darle la bienvenida a nuestro sitio web."}),(0,r.jsx)("p",{children:"\xa1Gracias por su visita!"}),(0,r.jsx)("h1",{children:"A Cerca de Nosotros"}),(0,r.jsx)("p",{children:"El B\xfaho Tuerto un rinc\xf3n para celebrar y disfrutar la vida a trav\xe9s de la rica cocina Argentina. Es un lugar donde ocurre el encuentro m\xe1gico entre personas de una misma nacionalidad que comulgan en una misma consigna: Estar siempre a la altura para satisfacer a todos nuestros clientes."}),(0,r.jsx)("p",{children:"Para poder lograrlo, se requiere de gran habilidad y esa constancia que denota la eficacia."}),(0,r.jsx)("p",{children:"Nos familiarizamos con cada producto y con los m\xe9todos de preparaci\xf3n, tanto en la cocina como en el sal\xf3n. Sabemos de los diferentes puntos de carne. Somos especialistas en la cata de vinos y en maridaje. A ra\xedz de la sucedido aqu\xed y en el mundo, nos formamos nuevamente en primeros auxilios y reforzamos los protocolos sanitarios para combatir al Covid-19 siendo m\xe1s cuidadosos y responsables en esta pandemia. Utilizamos mascarilla en todo momento."}),(0,r.jsx)("p",{children:"Contamos con nuestra carta digital con total disponibilidad del personal para disipar aquellas dudas que tengan tanto en Espa\xf1ol, Ingles. De acuerdo a la normativa vigente y recomendaciones sanitarias todos los clientes deber\xe1n llevar mascarillas en los espacios comunes ( menos ni\xf1os menores 6 a\xf1os)."}),(0,r.jsx)("h1",{children:"Cocina tradicional Argentina"}),(0,r.jsx)("p",{children:"Disfruta de aut\xe9nticas y deliciosas carnes a la brasa en un ambiente acogedor, acompa\xf1ado de un excelente servicio formado por personal id\xf3neo."}),(0,r.jsx)("p",{children:"Ya sea para una cena rom\xe1ntica, un almuerzo informal con amigos o una gran fiesta con toda la familia, nuestro restaurante es el lugar perfecto para cualquier ocasi\xf3n."})]})},Z=s(3056),k=s.n(Z),A=s(6501),q=["/assets/images/awards/2016.jpg","/assets/images/awards/2017.jpg","/assets/images/awards/2018.jpg","/assets/images/awards/2019.jpg","/assets/images/awards/choice-2020.gif","/assets/images/awards/choice-2021.gif","/assets/images/awards/guru-2020.jpg","/assets/images/awards/guru-2021.jpeg"],D=function(){return(0,r.jsx)(d.Z,{title:"Premios",id:"awards",children:(0,r.jsx)(k(),{navButtonsAlwaysVisible:!1,duration:2e3,height:350,children:q.map((function(e,a){return(0,r.jsx)(A.Z,{style:{height:350,position:"relative"},children:(0,r.jsx)("img",{src:e,style:{maxHeight:300,maxWidth:"90%",width:"auto",height:"auto",position:"absolute",top:0,bottom:0,left:0,right:0,margin:"auto",objectFit:"contain"}})},"award-"+a)}))})})};function C(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(w,{}),(0,r.jsx)("div",{style:{maxWidth:900,margin:"0 auto"},children:(0,r.jsx)("hr",{})}),(0,r.jsx)(D,{}),(0,r.jsx)(_,{}),(0,r.jsx)(E,{})]})}},8581:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(8441)}])}},function(e){e.O(0,[319,118,187,774,888,179],(function(){return a=8581,e(e.s=a);var a}));var a=e.O();_N_E=a}]);