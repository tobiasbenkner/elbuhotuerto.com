(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9675:function(e,a,s){"use strict";var n=s(5893);a.Z=function(e){return(0,n.jsx)("div",{className:"card ".concat(e.className),children:(0,n.jsx)("div",{className:"card-body",children:e.children})})}},8325:function(e,a,s){"use strict";var n=s(6261),r=s(5893);a.Z=function(e){var a=n.W_;return(0,r.jsx)(a,{className:"page",id:e.id,children:(0,r.jsxs)("div",{className:"main",children:[e.title&&(0,r.jsx)("h1",{className:"title",children:e.title}),e.children]})})}},3006:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return M}});var n=s(1664),r=s(5893),i=function(e){return(0,r.jsx)("button",{className:"p-button p-button-1",children:(0,r.jsx)("b",{children:e.label})})},t=function(){return(0,r.jsxs)("div",{className:"landing-page",children:[(0,r.jsxs)("div",{className:"wrapper",children:[(0,r.jsx)("h1",{children:"Un rinc\xf3n argentino en Las Palmas"}),(0,r.jsx)("h3",{style:{marginTop:15},children:"Parrilla a la Brasa & Vinos"})]}),(0,r.jsx)(n.default,{href:"/menu",children:(0,r.jsx)("a",{children:(0,r.jsx)(i,{label:"Men\xfa"})})})]})},o=s(2809),c=s(7294),l=s(9669),d=s.n(l),u=s(9675);function m(e,a){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),s.push.apply(s,n)}return s}function h(e){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?m(Object(s),!0).forEach((function(a){(0,o.Z)(e,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):m(Object(s)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(s,a))}))}return e}var p=function(e){var a="https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,username,thumbnail_url,permalink,media_type&access_token=".concat("IGQVJXR3R2RV9KQ3lZAQmhSVlhtV2ZAuYV9PRE55LS1JckFfRUtqa2xqczBBdXEzM3d2ZAVJ3c3gxTGRBeFpQOXhaZAHB1UEVPeHZAET3ZAmM3ZA1NVQ2ZAE9Hd3JNWTFrYXkxM2NVNXlFXzFGNlhvSm5VZAzIyQwZDZD"),s=(0,c.useState)([]),n=s[0],i=s[1];return(0,c.useEffect)((function(){d().get(a).then((function(e){var a=e.data.data.slice(0,6).map((function(e){var a,s=null===(a=e.caption)||void 0===a?void 0:a.indexOf("\n"),n=s>-1?e.caption.substring(0,s):e.caption;return h(h({},e),{},{caption:n})}));i(a),localStorage.setItem("posts",JSON.stringify(a))})).catch((function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message)})).finally((function(){e.onLoaded()}))}),[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"insta",children:n.map((function(e,a){return(0,r.jsxs)(u.Z,{className:"insta-item",children:[("IMAGE"===e.media_type||"CAROUSEL_ALBUM"===e.media_type)&&(0,r.jsx)("img",{src:e.media_url,alt:"asdf"}),"VIDEO"===e.media_type&&(0,r.jsxs)("video",{width:"100%",controls:!0,children:[(0,r.jsx)("source",{src:e.media_url,type:"video/mp4"}),"Your browser does not support HTML video."]}),(0,r.jsx)("div",{className:"insta-text",dangerouslySetInnerHTML:{__html:e.caption}})]},a)}))})})},j=p;p.defaultProps={onLoaded:function(){}};var x=s(8325),g=function(e){return(0,r.jsx)(x.Z,{id:"news",title:"Noticias",children:(0,r.jsx)(j,{onLoaded:e.onLoaded})})},f=g;g.defaultProps={onLoaded:function(){}};var v=s(8101),b=s(1130),y="https://www.google.com/maps/place/B%C3%BAho+Tuerto/@28.136629,-15.43349,15z/data=!4m5!3m4!1s0x0:0x727a399792854111!8m2!3d28.1366285!4d-15.4334896",N=function(e){return(0,r.jsx)(x.Z,{id:"restaurant",title:"",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"container-item wrapper",style:{display:"flex",flexDirection:"column"},children:[(0,r.jsx)("h2",{children:"Ubicaci\xf3n"}),(0,r.jsx)("a",{href:y,target:"_blank",rel:"noreferrer",style:{width:"100%",textAlign:"center"},children:(0,r.jsx)("img",{src:"".concat(b.server,"/assets/images/location.png"),alt:"location",style:{border:0,borderRadius:10,width:"100%",maxWidth:300}})}),(0,r.jsxs)("div",{style:{margin:"10px auto"},children:[(0,r.jsx)("a",{href:y,target:"_blank",rel:"noreferrer",style:{width:"100%",color:"white",textDecoration:"none"},children:(0,r.jsxs)(v.Z,{name:"marker",height:"20",width:"20",children:["El B\xfaho Tuerto",(0,r.jsx)("br",{}),"Tom\xe1s Miller 13",(0,r.jsx)("br",{}),"35007 Las Palmas"]})}),(0,r.jsx)("br",{}),(0,r.jsx)(v.Z,{color:"1",height:"20",width:"20",name:"phone",children:(0,r.jsx)("a",{href:"tel:+34928 504 820",children:"928 504 820"})}),(0,r.jsx)("br",{}),(0,r.jsx)(v.Z,{color:"1",height:"20",width:"20",name:"mail",children:(0,r.jsx)("a",{href:"mailto: elbuhotuerto13@gmail.com",children:"elbuhotuerto13@gmail.com"})})]})]}),(0,r.jsxs)("div",{className:"container-item wrapper",children:[(0,r.jsx)("h2",{children:"Horario"}),(0,r.jsx)("table",{style:{marginTop:"-1em"},children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Lunes"}),(0,r.jsx)("td",{children:"13:00 - 17:00"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Martes"}),(0,r.jsx)("td",{children:"Closed"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Mi\xe9rcoles"}),(0,r.jsx)("td",{children:"13:00 - 17:00"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Jueves"}),(0,r.jsxs)("td",{children:["13:00 - 17:00",(0,r.jsx)("br",{}),"20:00 - 00:00"]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Viernes"}),(0,r.jsxs)("td",{children:["13:00 - 17:00",(0,r.jsx)("br",{}),"20:00 - 00:00"]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"S\xe1bado"}),(0,r.jsxs)("td",{children:["13:00 - 17:00",(0,r.jsx)("br",{}),"20:00 - 00:00"]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Domingo"}),(0,r.jsx)("td",{children:"13:00 - 17:00"})]})]})})]})]})})},w=N;N.defaultProps={onLoaded:function(){}};var _=function(){return(0,r.jsxs)(x.Z,{id:"about",title:"Sobre nosotros",children:[(0,r.jsx)("img",{src:"".concat(b.server,"/assets/images/about.jpg"),alt:"about"}),(0,r.jsx)("h1",{children:"Somos una empresa familiar"}),(0,r.jsx)("p",{children:"Pretendemos crear para ti un c\xe1lido rinc\xf3n familiar contando con un esmerado servicio y productos de primera calidad. Nos especializamos en carnes a la brasa con un sabor aut\xe9ntico y t\xedpico de nuestra tierra. \xa1Esperamos que te sientas como en tu propia casa!!"}),(0,r.jsx)("h1",{children:"Nos Gusta ser diferentes"}),(0,r.jsx)("p",{children:"Desde diciembre del 2014 estamos en Las Palmas de Gran Canaria."}),(0,r.jsx)("p",{children:"Hemos querido romper con la est\xe9tica convencional de los grilles argentinos ya que estamos en una zona urbana, de ah\xed nace la idea de transportarnos al t\xedpico barrio porte\xf1o de La Boca."}),(0,r.jsx)("p",{children:"Nos complace darle la bienvenida a nuestro sitio web."}),(0,r.jsx)("p",{children:"\xa1Gracias por su visita!"}),(0,r.jsx)("h1",{children:"A Cerca de Nosotros"}),(0,r.jsx)("p",{children:"El B\xfaho Tuerto un rinc\xf3n para celebrar y disfrutar la vida a trav\xe9s de la rica cocina Argentina. Es un lugar donde ocurre el encuentro m\xe1gico entre personas de una misma nacionalidad que comulgan en una misma consigna: Estar siempre a la altura para satisfacer a todos nuestros clientes."}),(0,r.jsx)("p",{children:"Para poder lograrlo, se requiere de gran habilidad y esa constancia que denota la eficacia."}),(0,r.jsx)("p",{children:"Nos familiarizamos con cada producto y con los m\xe9todos de preparaci\xf3n, tanto en la cocina como en el sal\xf3n. Sabemos de los diferentes puntos de carne. Somos especialistas en la cata de vinos y en maridaje. A ra\xedz de la sucedido aqu\xed y en el mundo, nos formamos nuevamente en primeros auxilios y reforzamos los protocolos sanitarios para combatir al Covid-19 siendo m\xe1s cuidadosos y responsables en esta pandemia. Utilizamos mascarilla en todo momento."}),(0,r.jsx)("p",{children:"Contamos con nuestra carta digital con total disponibilidad del personal para disipar aquellas dudas que tengan tanto en Espa\xf1ol, Ingles. De acuerdo a la normativa vigente y recomendaciones sanitarias todos los clientes deber\xe1n llevar mascarillas en los espacios comunes ( menos ni\xf1os menores 6 a\xf1os)."}),(0,r.jsx)("h1",{children:"Cocina tradicional Argentina"}),(0,r.jsx)("p",{children:"Disfruta de aut\xe9nticas y deliciosas carnes a la brasa en un ambiente acogedor, acompa\xf1ado de un excelente servicio formado por personal id\xf3neo."}),(0,r.jsx)("p",{children:"Ya sea para una cena rom\xe1ntica, un almuerzo informal con amigos o una gran fiesta con toda la familia, nuestro restaurante es el lugar perfecto para cualquier ocasi\xf3n."})]})},P=function(e){var a=(0,c.useState)(1),s=a[0],n=a[1],i=function(a){var r=s+a;r>e.images.length?n(1):n(r<1?e.images.length:r)};return(0,c.useEffect)((function(){var e=document.getElementsByClassName("mySlides");if(0!==e.length){for(var a=0;a<e.length;a++)e[a].style.display="none";e[s-1].style.display="block"}}),[s]),(0,c.useEffect)((function(){document.getElementsByClassName("slideshow-container")[0]}),[s]),(0,r.jsx)("div",{className:"slideshow",children:(0,r.jsxs)("div",{className:"slideshow-container",children:[e.images.map((function(a,s){return function(a,s,n){return(0,r.jsxs)("div",{className:"mySlides fade",children:[(0,r.jsx)("div",{className:"numbertext",children:"".concat(a+1," / ").concat(s)}),(0,r.jsx)("img",{className:"image",src:"".concat(b.server).concat(e.images[a]),alt:n}),(0,r.jsx)("div",{className:"text",children:n})]},"img-".concat(a))}(s,e.images.length,"")})),(0,r.jsx)("div",{className:"prev-left",children:"\u276e"}),(0,r.jsx)("div",{className:"next-right",children:"\u276f"}),(0,r.jsx)("div",{className:"prev",onClick:function(){return i(-1)}}),(0,r.jsx)("div",{className:"next",onClick:function(){return i(1)}})]})})},E=P;P.defaultProps={images:["/assets/images/gallery/segunda-portada-bandera.jpg","/assets/images/gallery/IMG_5575.JPG","/assets/images/gallery/IMG_5579.JPG","/assets/images/gallery/IMG_5580.JPG","/assets/images/gallery/IMG_5707.JPG","/assets/images/gallery/IMG_5737.JPG","/assets/images/gallery/IMG_5798.JPG","/assets/images/gallery/IMG_5812.JPG","/assets/images/gallery/IMG_6009.JPG","/assets/images/gallery/2021-10-16-01.23.11.jpeg","/assets/images/gallery/2021-10-16-01.24.03.jpeg","/assets/images/gallery/2021-10-16-01.24.22.jpeg"]};var G=["2016.jpg","2017.jpg","2018.jpg","2019.jpg","choice-2020.gif","choice-2021.gif","guru-2020.jpg","guru-2021.jpeg"],O=function(){return(0,r.jsxs)(x.Z,{title:"Galer\xeda",id:"awards",children:[(0,r.jsx)("ul",{className:"container",children:G.map((function(e){return(0,r.jsx)("li",{children:(0,r.jsx)("img",{className:"item",src:"".concat(b.server,"/assets/images/awards/").concat(e),alt:"".concat(e)})},e)}))}),(0,r.jsx)(u.Z,{children:(0,r.jsx)(E,{})})]})},Z=function(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{}),(0,r.jsx)(f,{}),(0,r.jsx)("div",{style:{maxWidth:900,margin:"0 auto"},children:(0,r.jsx)("hr",{})}),(0,r.jsx)(O,{}),(0,r.jsx)(w,{}),(0,r.jsx)(_,{})]})};function M(){return(0,r.jsx)(Z,{})}},8581:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(3006)}])}},function(e){e.O(0,[669,774,888,179],(function(){return a=8581,e(e.s=a);var a}));var a=e.O();_N_E=a}]);