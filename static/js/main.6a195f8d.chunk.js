(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{45:function(e,a,s){},76:function(e,a,s){"use strict";s.r(a);var i=s(1),t=s.n(i),r=s(17),o=s.n(r),n=s(4),c=(s(45),s(2)),l=s(0),d=function(e){return Object(l.jsx)("button",{className:"p-button p-button-1",children:Object(l.jsx)("b",{children:e.label})})},j=function(){return Object(l.jsxs)("div",{className:"landing-page",children:[Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)("h1",{children:"Cocina tradicional Argentina"}),Object(l.jsx)("h3",{style:{marginTop:15},children:"Somos una empresa familiar "})]}),Object(l.jsx)(n.b,{to:"/menu",children:Object(l.jsx)(d,{label:"Men\xfa"})})]})},u=s(10),b=s(18),m=s.n(b),p=function(e){return Object(l.jsx)("div",{className:"card ".concat(e.className),children:Object(l.jsx)("div",{className:"card-body",children:e.children})})},O=window.localStorage,h=function(e){var a="https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,username,thumbnail_url,permalink,media_type&access_token=".concat("IGQVJVNE92YWRwMDc5RUo5bW5MZAWF2QjlkSTZAmZAk52MXFsNzM1UmwtV2hqUGtnOGlhc0dFYnZAnZAUtYSE5yNWJwTmJYMjNETFI2aWthWmswcnoxWVMybnF4X0FnSWNMNDcxVTQ4eklHc1dFTmhmbFdWOAZDZD"),s=Object(i.useState)(JSON.parse(O.getItem("posts"))||[]),t=Object(u.a)(s,2),r=t[0],o=t[1];return Object(i.useEffect)((function(){m.a.get(a).then((function(e){var a=e.data.data.slice(0,6);o(a),O.setItem("posts",JSON.stringify(a))})).catch((function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message)})).finally((function(){e.onLoaded()}))}),[]),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"insta",children:r.map((function(e,a){return Object(l.jsxs)(p,{className:"insta-item",children:[("IMAGE"===e.media_type||"CAROUSEL_ALBUM"===e.media_type)&&Object(l.jsx)("img",{src:e.media_url,alt:"asdf"}),"VIDEO"===e.media_type&&Object(l.jsxs)("video",{width:"100%",controls:!0,children:[Object(l.jsx)("source",{src:e.media_url,type:"video/mp4"}),"Your browser does not support HTML video."]}),Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:e.caption.replace("\r","").replace("\n","<br /><br />")}})]},a)}))})})},x=h;h.defaultProps={onLoaded:function(){}};var g=s(11),f=function(e){var a=g.Element;return Object(l.jsx)(a,{className:"page",id:e.id,children:Object(l.jsxs)("div",{className:"main",children:[e.title&&Object(l.jsx)("h1",{className:"title",children:e.title}),e.children]})})},v=function(e){return Object(l.jsx)(f,{id:"news",title:"Noticias",children:Object(l.jsx)(x,{onLoaded:e.onLoaded})})},y=v;v.defaultProps={onLoaded:function(){}};var N=function(e){return Object(l.jsxs)("div",{className:"icon",style:{display:"flex",alignItems:"center"},children:[Object(l.jsx)("img",{src:"".concat("/el_buho_tuerto","/assets/icons/").concat(e.name,".svg"),style:{filter:"invert(".concat(e.color,")")},width:e.width,height:e.height,alt:"".concat(e.name)}),e.text&&Object(l.jsx)("span",{style:{marginLeft:10},children:e.text}),e.children&&Object(l.jsx)("div",{style:{marginLeft:10},children:e.children})]})};N.defaultProps={width:30,height:30,text:"",color:1};var w=N,q="https://www.google.com/maps/place/B%C3%BAho+Tuerto/@28.136629,-15.43349,15z/data=!4m5!3m4!1s0x0:0x727a399792854111!8m2!3d28.1366285!4d-15.4334896",C=function(e){return Object(l.jsx)(f,{id:"restaurant",title:"",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"container-item wrapper",style:{display:"flex",flexDirection:"column"},children:[Object(l.jsx)("h2",{children:"Ubicaci\xf3n"}),Object(l.jsx)("a",{href:q,target:"_blank",rel:"noreferrer",style:{width:"100%",textAlign:"center"},children:Object(l.jsx)("img",{src:"".concat("/el_buho_tuerto","/assets/images/location.png"),alt:"location",style:{border:0,borderRadius:10,width:"100%",maxWidth:300}})}),Object(l.jsxs)("div",{style:{margin:"10px auto"},children:[Object(l.jsx)("a",{href:q,target:"_blank",rel:"noreferrer",style:{width:"100%",color:"white",textDecoration:"none"},children:Object(l.jsxs)(w,{name:"marker",height:"20",width:"20",children:["El B\xfaho Tuerto",Object(l.jsx)("br",{}),"Tom\xe1s Miller 13",Object(l.jsx)("br",{}),"35007 Las Palmas"]})}),Object(l.jsx)("br",{}),Object(l.jsx)(w,{color:"1",height:"20",width:"20",name:"phone",children:Object(l.jsx)("a",{href:"tel:+34928 504 820",children:"928 504 820"})}),Object(l.jsx)("br",{}),Object(l.jsx)(w,{color:"1",height:"20",width:"20",name:"mail",children:Object(l.jsx)("a",{href:"mailto: elbuhotuerto13@gmail.com",children:"elbuhotuerto13@gmail.com"})})]})]}),Object(l.jsxs)("div",{className:"container-item wrapper",children:[Object(l.jsx)("h2",{children:"Horario"}),Object(l.jsx)("table",{style:{marginTop:"-1em"},children:Object(l.jsxs)("tbody",{children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Lunes"}),Object(l.jsx)("td",{children:"13:00 - 17:00"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Martes"}),Object(l.jsx)("td",{children:"Closed"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Mi\xe9rcoles"}),Object(l.jsx)("td",{children:"13:00 - 17:00"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Jueves"}),Object(l.jsxs)("td",{children:["13:00 - 17:00",Object(l.jsx)("br",{}),"20:00 - 00:00"]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Viernes"}),Object(l.jsxs)("td",{children:["13:00 - 17:00",Object(l.jsx)("br",{}),"20:00 - 00:00"]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"S\xe1bado"}),Object(l.jsxs)("td",{children:["13:00 - 17:00",Object(l.jsx)("br",{}),"20:00 - 00:00"]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Domingo"}),Object(l.jsx)("td",{children:"13:00 - 17:00"})]})]})})]})]})})},k=C;C.defaultProps={onLoaded:function(){}};var _=function(){return Object(l.jsxs)(f,{id:"about",title:"Sobre nosotros",children:[Object(l.jsx)("img",{src:"".concat("/el_buho_tuerto","/assets/images/about.jpg"),alt:"about"}),Object(l.jsx)("h1",{children:"Somos una empresa familiar"}),Object(l.jsx)("p",{children:"Pretendemos crear para ti un c\xe1lido rinc\xf3n familiar contando con un esmerado servicio y productos de primera calidad. Nos especializamos en carnes a la brasa con un sabor aut\xe9ntico y t\xedpico de nuestra tierra. \xa1Esperamos que te sientas como en tu propia casa!!"}),Object(l.jsx)("h1",{children:"Nos Gusta ser diferentes"}),Object(l.jsx)("p",{children:"Desde diciembre del 2014 estamos en Las Palmas de Gran Canaria Hemos querido romper con la est\xe9tica convencional de los  grilles argentinos ya que estamos en una zona urbana ,de ah\xed nace la idea de transportarnos al  t\xedpico barrio porte\xf1o de la boca Nos complace darle la bienvenida a nuestro sitio web. Gracias por su visita."}),Object(l.jsx)("h1",{children:"A Cerca de Nosotros"}),Object(l.jsx)("p",{children:"El B\xfaho Tuerto un rinc\xf3n para celebrar y disfrutar la vida a trav\xe9s de la rica cocina Argentina. Es un lugar donde ocurre el encuentro m\xe1gico entre personas de una misma nacionalidad que comulgan en una misma consigna: Estar siempre a la altura para satisfacer a todos nuestros clientes."}),Object(l.jsx)("p",{children:"Para poder lograrlo, se requiere de gran habilidad y esa constancia que denota la eficacia."}),Object(l.jsx)("p",{children:"Nos familiarizamos con cada producto y con los m\xe9todos de preparaci\xf3n, tanto en la cocina como en el sal\xf3n. Sabemos de los diferentes puntos de carne. Somos especialistas en la cata de vinos y en maridaje. A ra\xedz de la sucedido aqu\xed y en el mundo, nos formamos nuevamente en primeros auxilios y reforzamos los protocolos sanitarios para combatir al Covid-19 siendo m\xe1s cuidadosos y responsables en esta pandemia. Utilizamos mascarilla en todo momento."}),Object(l.jsx)("p",{children:"Contamos con nuestra carta digital con total disponibilidad del personal para disipar aquellas dudas que tengan tanto en Espa\xf1ol, Ingles. De acuerdo a la normativa vigente y recomendaciones sanitarias todos los clientes deber\xe1n llevar mascarillas en los espacios comunes ( menos ni\xf1os menores 6 a\xf1os)."}),Object(l.jsx)("h1",{children:"Cocina tradicional Argentina"}),Object(l.jsx)("p",{children:"Disfruta de aut\xe9nticas y deliciosas carnes a la brasa en un ambiente acogedor, acompa\xf1ado de un excelente servicio  formado por personal  id\xf3neo. Ya sea para una cena rom\xe1ntica, un almuerzo informal con amigos o una gran fiesta con toda la familia, nuestro restaurante es el lugar perfecto para cualquier ocasi\xf3n."})]})},L=function(e){var a=Object(i.useState)(1),s=Object(u.a)(a,2),t=s[0],r=s[1],o=function(a){var s=t+a;s>e.images.length?r(1):r(s<1?e.images.length:s)};return Object(i.useEffect)((function(){var e=document.getElementsByClassName("mySlides"),a=document.getElementsByClassName("dot");if(0!==e.length){for(var s=0;s<e.length;s++)e[s].style.display="none";for(var i=0;i<a.length;i++)a[i].className=a[i].className.replace(" active","");e[t-1].style.display="block",a[t-1].className+=" active"}}),[t]),Object(l.jsxs)("div",{className:"slideshow",children:[Object(l.jsxs)("div",{className:"slideshow-container",children:[e.images.map((function(a,s){return function(a,s,i){return Object(l.jsxs)("div",{className:"mySlides fade",children:[Object(l.jsx)("div",{className:"numbertext",children:"".concat(a+1," / ").concat(s)}),Object(l.jsx)("img",{className:"image",src:"".concat("/el_buho_tuerto").concat(e.images[a]),alt:i}),Object(l.jsx)("div",{className:"text",children:i})]},"img-".concat(a))}(s,e.images.length,"")})),Object(l.jsx)("div",{className:"prev",onClick:function(){return o(-1)},children:"\u276e"}),Object(l.jsx)("div",{className:"next",onClick:function(){return o(1)},children:"\u276f"})]}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{style:{textAlign:"center"},children:e.images.map((function(e,a){return Object(l.jsx)("span",{className:"dot"},"dot-".concat(a))}))})]})},I=L;L.defaultProps={images:["/assets/images/gallery/segunda-portada-bandera.jpg","/assets/images/gallery/IMG_5575.JPG","/assets/images/gallery/IMG_5579.JPG","/assets/images/gallery/IMG_5580.JPG","/assets/images/gallery/IMG_5707.JPG","/assets/images/gallery/IMG_5737.JPG","/assets/images/gallery/IMG_5798.JPG","/assets/images/gallery/IMG_5812.JPG","/assets/images/gallery/IMG_6009.JPG","/assets/images/gallery/2021-10-16-01.23.11.jpeg","/assets/images/gallery/2021-10-16-01.24.03.jpeg","/assets/images/gallery/2021-10-16-01.24.22.jpeg"]};var A=["2016.jpg","2017.jpg","2018.jpg","2019.jpg","choice-2020.gif","choice-2021.gif","guru-2020.jpg","guru-2021.jpeg"],S=function(){return Object(l.jsxs)(f,{title:"Galer\xeda",id:"awards",children:[Object(l.jsx)("ul",{className:"container",children:A.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsx)("img",{className:"item",src:"".concat("/el_buho_tuerto","/assets/images/awards/").concat(e),alt:"".concat(e)})},e)}))}),Object(l.jsx)(I,{})]})},E=function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{}),Object(l.jsx)(y,{}),Object(l.jsx)(S,{}),Object(l.jsx)(k,{}),Object(l.jsx)(_,{})]})},P=function(e){var a=".accordion";if(e.target.matches(a+" .a-btn")){e.target.parentElement.classList.contains("active")?e.target.parentElement.classList.remove("active"):(document.querySelectorAll(a+" .a-container").forEach((function(e){e.classList.remove("active")})),e.target.parentElement.classList.add("active"));var s=e.target.parentElement.id;g.scroller.scrollTo(s,{smooth:!1,offset:-60})}},z=function(e){return Object(l.jsx)("div",{className:"accordion",children:e.children})},T=function(e){var a=g.Element;return Object(l.jsxs)(a,{name:e.id,id:e.id,className:"a-container",children:[Object(l.jsxs)("p",{className:"a-btn",onClick:P,children:["\xa0\xa0\xa0",e.title,Object(l.jsx)("span",{})]}),Object(l.jsx)("div",{className:"a-panel",children:e.children})]})},D=["es","de","ar","en"],M=function(e){var a,s,t=Object(i.useState)({}),r=Object(u.a)(t,2),o=r[0],d=r[1],j=Object(i.useState)("es"),b=Object(u.a)(j,2),p=b[0],O=b[1],h=Object(c.g)().search,x=new URLSearchParams(h).get("language");Object(i.useEffect)((function(){var e=x?x.toLocaleLowerCase():function(){var e=window.navigator.userLanguage||window.navigator.language;if(!e)return"es";var a=e.toLowerCase();return"es-ar"===a||"es-uy"===a?"ar":a.startsWith("es")?"es":a.startsWith("de")?"de":"en"}();D.includes(e)||(e="es"),O(e),m.a.get("".concat("/el_buho_tuerto","/assets/i18n/i18n.").concat(e,".json")).then((function(e){d(e.data)}))}),[x]);return Object(l.jsxs)(f,{id:"menu",title:"",children:[Object(l.jsx)("div",{className:"language",children:D.map((function(e,a){return Object(l.jsx)(n.b,{to:{pathname:"/menu",search:"?language=".concat(e)},children:Object(l.jsx)("img",{className:p===e?"active":"",src:"".concat("/el_buho_tuerto","/assets/images/flags/").concat(e.replace("en","gb"),".svg"),alt:e})},e+"-"+a)}))}),Object(l.jsxs)(z,{children:[null===o||void 0===o||null===(a=o.menu)||void 0===a?void 0:a.map((function(e,a){return Object(l.jsx)(T,{id:"".concat(a),title:e.title,children:e.foods.map((function(e,a){return function(e,a){return Object(l.jsxs)("div",{className:"food-container",children:[Object(l.jsxs)("div",{className:"food-description",children:[Object(l.jsx)("div",{className:"food-title",children:e.title}),Object(l.jsx)("div",{className:"food-subtitle",dangerouslySetInnerHTML:{__html:e.subtitle}}),e.allergies&&e.allergies.length>0&&Object(l.jsx)("div",{className:"food-allergies",children:e.allergies.sort().map((function(e,s){return Object(l.jsx)("img",{width:"25",height:"25",src:"".concat("/el_buho_tuerto","/assets/images/menu/allergies/").concat(e,".jpg"),alt:e},a+"-"+s)}))})]}),Object(l.jsxs)("div",{className:"food-info",children:[Object(l.jsx)("div",{className:"food-price",children:e.price}),e.special&&Object(l.jsx)("div",{className:"food-special",children:e.special})]})]},e.title+"-"+a)}(e,a)}))},e.title)})),Object(l.jsxs)(T,{id:"puntos",title:"Puntos de la Carne",children:[o["meat-image"]&&Object(l.jsx)("img",{className:"image",width:"100%",src:"".concat("/el_buho_tuerto").concat(o["meat-image"]),alt:"Meat"}),Object(l.jsx)("div",{children:null===o||void 0===o||null===(s=o.cooking)||void 0===s?void 0:s.map((function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"carne-title",children:e.title}),Object(l.jsx)("div",{className:"carne-subtitle",children:e.subtitle})]},e.title)}))})]})]}),Object(l.jsx)("div",{className:"tripadvistor",children:Object(l.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"https://www.tripadvisor.es/Restaurant_Review-g187472-d7729499-Reviews-El_Buho_Tuerto-Las_Palmas_de_Gran_Canaria_Gran_Canaria_Canary_Islands.html",children:[Object(l.jsx)("img",{src:"https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg",alt:"TripAdvisor"}),Object(l.jsx)("p",{children:"Haz click aqu\xed danos tu opin\xedon"})]})})]})},G=function(){return Object(l.jsxs)(f,{id:"cookies",title:"Politica de cookies",children:["Nuevo p\xe1rrafo \xbfQu\xe9 son las cookies?",Object(l.jsx)("br",{}),"La Web de DANIEL ANTONIO PISANO SORBILLI (en adelante la Web) utiliza Cookies. Las Cookies son ficheros enviados a un navegador por medio de un servidor web para registrar las actividades del Usuario en una web determinada. La primera finalidad de las Cookies es la de facilitar al usuario un acceso m\xe1s r\xe1pido a los servicios seleccionados. Adem\xe1s, las Cookies personalizan los servicios que ofrece la Web, facilitando y ofreciendo a cada usuario informaci\xf3n que es de su inter\xe9s o que puede ser de su inter\xe9s, en atenci\xf3n al uso que realiza de los Servicios.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"La Web utiliza Cookies para personalizar y facilitar al m\xe1ximo la navegaci\xf3n del usuario. Las Cookies se asocian \xfanicamente a un usuario an\xf3nimo y su ordenador y no proporcionan referencias que permitan deducir datos personales del usuario. El usuario podr\xe1 configurar su navegador para que notifique y rechace la instalaci\xf3n las Cookies enviadas por la Web, sin que ello perjudique la posibilidad del usuario de acceder a los contenidos de dicha web. Sin embargo, le hacemos notar que, en todo caso, la calidad de funcionamiento de la p\xe1gina Web puede disminuir.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Los usuarios registrados, que se registren o que hayan iniciado sesi\xf3n, podr\xe1n beneficiarse de unos servicios m\xe1s personalizados y orientados a su perfil, gracias a la combinaci\xf3n de los datos almacenados en las cookies con los datos personales utilizados en el momento de su registro. Dichos usuarios autorizan expresamente el uso de esta informaci\xf3n con la finalidad indicada, sin perjuicio de su derecho a rechazar o deshabilitar el uso de cookies.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Asimismo, la Web podr\xe1 saber todos los servicios solicitados por los usuarios, de forma que podr\xe1n facilitar u ofrecer informaci\xf3n adecuada a los gustos y preferencias de cada usuario.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"\xbfQu\xe9 tipos de cookies existen?",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Las Cookies, en funci\xf3n de su Permanencia, pueden dividirse en:",Object(l.jsx)("br",{}),"\u201cCookies de sesi\xf3n\u201d: Las primeras expiran cuando el usuario cierra el navegador.",Object(l.jsx)("br",{}),"\u201cCookies persistentes\u201d. Las segundas expiran en funci\xf3n de cuando se cumpla el objetivo para el que sirven (por ejemplo, para que el usuario se mantenga identificado en los Servicios) o bien cuando se borran manualmente.",Object(l.jsx)("br",{}),"Adicionalmente, en funci\xf3n de su Objetivo, las Cookies pueden clasificarse de la siguiente forma:",Object(l.jsx)("br",{}),"Cookies de rendimiento: Este tipo de Cookie recuerda sus preferencias para las herramientas que se encuentran en los servicios, por lo que no tiene que volver a configurar el servicio cada vez que usted visita. A modo de ejemplo, en esta tipolog\xeda se incluyen:",Object(l.jsx)("br",{}),"Ajustes de volumen de reproductores de v\xeddeo o sonido.",Object(l.jsx)("br",{}),"Las velocidades de transmisi\xf3n de v\xeddeo que sean compatibles con su navegador.",Object(l.jsx)("br",{}),"Cookies de geo-localizaci\xf3n: Estas Cookies son utilizadas para averiguar en qu\xe9 pa\xeds se encuentra cuando se solicita un servicio. Esta Cookie es totalmente an\xf3nima, y s\xf3lo se utiliza para ayudar a orientar el contenido a su ubicaci\xf3n.",Object(l.jsx)("br",{}),"Cookies de registro: Las Cookies de registro se generan una vez que el usuario se ha registrado o posteriormente ha abierto su sesi\xf3n, y se utilizan para identificarle en los servicios con los siguientes objetivos:",Object(l.jsx)("br",{}),"Mantener al usuario identificado de forma que, si cierra un servicio, el navegador o el ordenador y en otro momento u otro d\xeda vuelve a entrar en dicho servicio, seguir\xe1 identificado, facilitando as\xed su navegaci\xf3n sin tener que volver a identificarse. Esta funcionalidad se puede suprimir si el usuario pulsa la funcionalidad \u201ccerrar sesi\xf3n\u201d, de forma que esta Cookie se elimina y la pr\xf3xima vez que entre en el servicio el usuario tendr\xe1 que iniciar sesi\xf3n para estar identificado.",Object(l.jsx)("br",{}),"Comprobar si el usuario est\xe1 autorizado para acceder a ciertos servicios, por ejemplo, para participar en un concurso.",Object(l.jsx)("br",{}),"Cookies anal\xedticas: Cada vez que un Usuario visita un servicio, una herramienta de un proveedor externo genera una Cookie anal\xedtica en el ordenador del usuario. Esta Cookie que s\xf3lo se genera en la visita, servir\xe1 en pr\xf3ximas visitas a los Servicios de la Web para identificar de forma an\xf3nima al visitante. Los objetivos principales que se persiguen son:",Object(l.jsx)("br",{}),"Permitir la identificaci\xf3n an\xf3nima de los usuarios navegantes a trav\xe9s de la \u201cCookie\u201d (identifica navegadores y dispositivos, no personas) y por lo tanto la contabilizaci\xf3n aproximada del n\xfamero de visitantes y su tendencia en el tiempo.",Object(l.jsx)("br",{}),"Identificar de forma an\xf3nima los contenidos m\xe1s visitados y por lo tanto m\xe1s atractivos para los usuarios.",Object(l.jsx)("br",{}),"Saber si el usuario que est\xe1 accediendo es nuevo o repite visita.",Object(l.jsx)("br",{}),"Importante: Salvo que el usuario decida registrarse en un servicio de la Web, la \u201cCookie\u201d nunca ir\xe1 asociada a ning\xfan dato de car\xe1cter personal que pueda identificarle. Dichas Cookies s\xf3lo ser\xe1n utilizadas con prop\xf3sitos estad\xedsticos que ayuden a la optimizaci\xf3n de la experiencia de los Usuarios en el sitio.",Object(l.jsx)("br",{}),"Cookies de publicidad comportamental: Este tipo de \u201cCookies\u201d permite ampliar la informaci\xf3n de los anuncios mostrados a cada usuario an\xf3nimo en los Servicios de la Web. Entre otros, se almacena la duraci\xf3n o frecuencia de visualizaci\xf3n de posiciones publicitarias, la interacci\xf3n con las mismas, o los patrones de navegaci\xf3n y/o compartimientos del usuario ya que ayudan a conformar un perfil de inter\xe9s publicitario. De este modo, permiten ofrecer publicidad af\xedn a los intereses del usuario.",Object(l.jsx)("br",{}),"Cookies publicitarias de terceros: Adem\xe1s de la publicidad gestionada por la Web en sus Servicios, la Web ofrece a sus anunciantes la opci\xf3n de servir anuncios a trav\xe9s de terceros (\u201cAdServers\u201d). De este modo, estos terceros pueden almacenar Cookies enviadas desde los Servicios de la Web procedentes de los navegadores de los Usuarios, as\xed como acceder a los datos que en ellas se guardan.",Object(l.jsx)("br",{}),"Weborama: http://www.weborama.com/e-privacy/our-commitment/",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"3. \xbfQue Cookies utilizamos?",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Propias: Son aqu\xe9llas que se env\xedan al equipo terminal del usuario desde un equipo o dominio gestionado por el propio editor y desde el que se presta el servicio solicitado por el usuario.",Object(l.jsx)("br",{}),"Cookies de sesi\xf3n",Object(l.jsx)("br",{}),"De terceros: Son aqu\xe9llas que se env\xedan al equipo terminal del usuario desde un equipo o dominio que no es gestionado por el editor, sino por otra entidad que trata los datos obtenidos trav\xe9s de las cookies.",Object(l.jsx)("br",{}),"\xbfC\xf3mo deshabilitar las Cookies?",Object(l.jsx)("br",{}),"Normalmente es posible dejar de aceptar las Cookies del navegador, o dejar de aceptar las Cookies de un Servicio en particular.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Todos los navegadores modernos permiten cambiar la configuraci\xf3n de Cookies. Estos ajustes normalmente se encuentran en las \xa8opciones\xa8 o \xa8preferencias\xa8 del men\xfa de su navegador. Asimismo, puede configurar su navegador o su gestor de correo electr\xf3nico, as\xed como instalar complementos gratuitos para evitar que se descarguen los Web Bugs al abrir un email.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"La Web ofrece orientaci\xf3n al Usuario sobre los pasos para acceder al men\xfa de configuraci\xf3n de las cookies y, en su caso, de la navegaci\xf3n privada en cada uno de los navegadores principales:",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Internet Explorer: Herramientas - > Opciones de Internet - > Privacidad - > Configuraci\xf3n.",Object(l.jsx)("br",{}),"Para m\xe1s informaci\xf3n, puede consultar el soporte de Microsoft o la Ayuda del navegador.",Object(l.jsx)("br",{}),"Firefox: Herramientas - > Opciones - > Privacidad - > Historial - > Configuraci\xf3n personalizada.",Object(l.jsx)("br",{}),"Chrome: Configuraci\xf3n - > Mostrar opciones avanzadas - > Privacidad - > Configuraci\xf3n de contenido.",Object(l.jsx)("br",{}),"Safari: Preferencias - > Seguridad.",Object(l.jsx)("br",{}),"Para m\xe1s informaci\xf3n, puede consultar el soporte de Apple o la Ayuda del navegador.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"\xbfSe pueden producir modificaciones de la Pol\xedtica de Cookies?",Object(l.jsx)("br",{}),"La Web puede modificar esta Pol\xedtica de Cookies en funci\xf3n de las exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha pol\xedtica a las instrucciones dictadas por la Agencia Espa\xf1ola de Protecci\xf3n de Datos, por ello se aconseja a los usuarios que la visiten peri\xf3dicamente.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Cuando se produzcan cambios significativos en esta Pol\xedtica de Cookies, se comunicar\xe1n a los usuarios bien mediante la web o a trav\xe9s de correo electr\xf3nico a los usuarios registrados."]})},W=function(){return Object(l.jsxs)(f,{id:"privacy",title:"Politica de privacidad",children:["Nuevo p\xe1rrafo Pol\xedtica de Privacidad",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Siguiendo los principios de licitud, lealtad y transparencia, ponemos a su disposici\xf3n la presente Pol\xedtica de Privacidad.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"\xbfQui\xe9n es el Responsable del tratamiento de sus datos?",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"DANIEL ANTONIO PISANO SORBILLI",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"CIF: 54386074K",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"DOMICILIO SOCIAL: C/ TOMAS MILLER, N\xba13, 35007, LAS PALMAS (LAS PALMAS)",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Email: elbuhotuerto13@gmail.com",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Tel\xe9fono: 928 504 820",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"\xbfCon qu\xe9 finalidad tratamos sus datos personales?",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"En DANIEL ANTONIO PISANO SORBILLI tratamos la informaci\xf3n que nos facilita con la finalidad de gestionar la relaci\xf3n contractual que nos une, gestionar el env\xedo de la informaci\xf3n que nos solicita, facilitar a los interesados ofertas de nuestros servicios y/o productos de su inter\xe9s y/o gestionar su candidatura.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"\xbfPor cu\xe1nto tiempo conservaremos sus datos personales?",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Sus datos, ser\xe1n conservados el tiempo m\xednimo necesario para la correcta prestaci\xf3n del servicio ofrecido as\xed como para atender las responsabilidades que se pudieran derivar del mismo y de cualquier otra exigencia legal.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"\xbfCu\xe1l es la legitimaci\xf3n para el tratamiento de sus datos?",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"La base legal para el tratamiento de sus datos personales puede ser la ejecuci\xf3n de una relaci\xf3n contractual potencial y/o suscrita, el inter\xe9s leg\xedtimo, la habilitaci\xf3n legal y/o el consentimiento del propio interesado. Los datos que le solicitamos son adecuados, pertinentes y estrictamente necesarios y en ning\xfan caso est\xe1 obligado a facilit\xe1rnoslos, pero su no comunicaci\xf3n podr\xe1 afectar a la finalidad del servicio o la imposibilidad de prestarlo.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"\xbfA qu\xe9 destinatarios se comunicar\xe1n sus datos?",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"DANIEL ANTONIO PISANO SORBILLI no comunicar\xe1 sus datos a ning\xfan tercero, salvo su consentimiento expreso u obligaci\xf3n legal.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"\xbfCu\xe1les son sus derechos cuando nos facilita sus datos?",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Los derechos de protecci\xf3n de datos de los que son titulares los interesados son:",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Derecho a solicitar el acceso a los datos personales relativos al interesado",Object(l.jsx)("br",{}),"Derecho de rectificaci\xf3n o supresi\xf3n",Object(l.jsx)("br",{}),"Derecho de oposici\xf3n",Object(l.jsx)("br",{}),"Derecho a solicitar la limitaci\xf3n de su tratamiento",Object(l.jsx)("br",{}),"Derecho a la portabilidad de los datos",Object(l.jsx)("br",{}),"Los titulares de los datos personales obtenidos, podr\xe1n ejercer sus derechos de protecci\xf3n de datos personales dirigiendo una comunicaci\xf3n por escrito al domicilio social de DANIEL ANTONIO PISANO SORBILLI o al correo electr\xf3nico habilitado a tal efecto, elbuhotuerto13@gmail.com, incluyendo en ambos casos fotocopia de su DNI u otro documento de identificaci\xf3n equivalente.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Modelos, formularios y m\xe1s informaci\xf3n disponible sobre sus derechos en la p\xe1gina web de la autoridad de control nacional, Agencia Espa\xf1ola de Protecci\xf3n de Datos, en adelante, AEPD, www.agpd.es",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"\xbfPuedo retirar el consentimiento?",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Usted tiene la posibilidad y el derecho a retirar el consentimiento para cualquiera finalidad espec\xedfica otorgada en su momento, sin que ello afecte a la licitud del tratamiento basado en el consentimiento previo a su retirada.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"\xbfD\xf3nde puedo reclamar en caso de que considere que no se tratan mis datos correctamente?",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Si alg\xfan interesado considera que sus datos no son tratados correctamente por DANIEL ANTONIO PISANO SORBILLI puede dirigir sus reclamaciones al correo elbuhotuerto13@gmail.com o a la autoridad de protecci\xf3n de datos que corresponda, siendo la AEPD la indicada en el territorio nacional, www.agpd.es",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Seguridad y actualizaci\xf3n de sus datos personales",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Con el objetivo de salvaguardar la seguridad de sus datos personales, le informamos que DANIEL ANTONIO PISANO SORBILLI ha adoptado todas las medidas de \xedndole t\xe9cnica y organizativa necesarias para garantizar la seguridad de los datos personales suministrados. Todo ello para evitar su alteraci\xf3n, p\xe9rdida, y/o tratamientos o accesos no autorizados, tal como exige la normativa, si bien la seguridad absoluta no existe.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Es importante que, para que podamos mantener sus datos personales actualizados, nos informe siempre que se produzca una modificaci\xf3n de los mismos.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Confidencialidad",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"DANIEL ANTONIO PISANO SORBILLI le informa que sus datos ser\xe1n tratados con el m\xe1ximo celo y confidencialidad por todo el personal que intervenga en cualquiera de las fases del tratamiento. No cederemos ni comunicaremos a ning\xfan tercero sus datos, excepto en los casos legalmente previstos, o salvo que el interesado nos hubiera autorizado expresamente."]})},B=function(e){var a=Object(i.useState)(!1),s=Object(u.a)(a,2),t=s[0],r=s[1],o=function(e,a){return Object(l.jsx)("li",{className:"item ".concat(t?"active":""),onClick:function(){return r(!1)},children:Object(l.jsx)(n.b,{to:{pathname:"/",hash:"#".concat(e)},children:a})})};return Object(l.jsx)("nav",{children:Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(l.jsx)("div",{style:{width:900},children:Object(l.jsxs)("ul",{className:"menu",children:[Object(l.jsx)("li",{className:"logo",onClick:function(){return r(!1)},children:Object(l.jsx)(n.b,{to:"/",children:"El B\xfaho Tuerto"})}),o("news","Noticias"),o("awards","Galer\xeda"),o("restaurant","Restaurante"),o("about","Sobre nosotros"),Object(l.jsx)("li",{className:"item button ".concat(t?"active":""),onClick:function(){return r(!1)},children:Object(l.jsx)(n.b,{to:"/menu",children:"Men\xfa"})}),Object(l.jsx)("li",{className:"toggle",onClick:function(e){r(!t)},children:Object(l.jsx)("span",{className:"bars"})})]})})})})},R=function(){return Object(l.jsx)("div",{className:"footer",children:Object(l.jsxs)("footer",{children:[Object(l.jsxs)("section",{className:"ft-main",style:{maxWidth:900,margin:"0 auto"},children:[Object(l.jsx)("div",{className:"ft-main-item",children:Object(l.jsx)("a",{href:"https://www.google.com/maps/place/B%C3%BAho+Tuerto/@28.136629,-15.43349,15z/data=!4m5!3m4!1s0x0:0x727a399792854111!8m2!3d28.1366285!4d-15.4334896",target:"_blank",rel:"noreferrer",style:{width:"100%",color:"white",textDecoration:"none"},children:Object(l.jsxs)(w,{name:"marker",height:"20",width:"20",children:["El B\xfaho Tuerto",Object(l.jsx)("br",{}),"Tom\xe1s Miller 13",Object(l.jsx)("br",{}),"35007 Las Palmas"]})})}),Object(l.jsxs)("div",{className:"ft-main-item",children:[Object(l.jsx)(w,{color:"1",height:"20",width:"20",name:"phone",children:Object(l.jsx)("a",{href:"tel:+34928 504 820",children:"928 504 820"})}),Object(l.jsx)("br",{}),Object(l.jsx)(w,{color:"1",height:"20",width:"20",name:"mail",children:Object(l.jsx)("a",{href:"mailto: elbuhotuerto13@gmail.com",children:"elbuhotuerto13@gmail.com"})})]})]}),Object(l.jsx)("section",{className:"ft-social",children:Object(l.jsxs)("ul",{className:"ft-social-list",children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.facebook.com/elbuhotuerto13",children:Object(l.jsx)(w,{name:"facebook"})})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.instagram.com/el_buhotuerto/?hl=es",children:Object(l.jsx)(w,{name:"instagram"})})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.youtube.com/channel/UCCannDklNJZGNIK7l9pGVsw",children:Object(l.jsx)(w,{name:"youtube"})})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.tripadvisor.es/Restaurant_Review-g187472-d7729499-Reviews-El_Buho_Tuerto-Las_Palmas_de_Gran_Canaria_Gran_Canaria_Canary_Islands.html",children:Object(l.jsx)(w,{name:"tripadvisor"})})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://web.whatsapp.com/send?phone=+34608963438",children:Object(l.jsx)(w,{name:"whatsapp"})})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",href:"mailto:elbuhotuerto13@gmail.com",children:Object(l.jsx)(w,{name:"mail"})})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://es.restaurantguru.com/El-Buho-Tuerto-Las-Palmas-de-Gran-Canaria",children:Object(l.jsx)(w,{name:"rss"})})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.yelp.com/biz/el-buho-tuerto-las-palmas-de-gran-canaria",children:Object(l.jsx)(w,{name:"yelp"})})})]})}),Object(l.jsx)("section",{className:"ft-legal",children:Object(l.jsxs)("ul",{className:"ft-legal-list",style:{maxWidth:900,margin:"0 auto"},children:[Object(l.jsx)("li",{children:Object(l.jsx)(n.b,{to:"/cookies",children:"Politica de cookies"})}),Object(l.jsx)("li",{children:Object(l.jsx)(n.b,{to:"/privacy-policy",children:"Politica de privacidad"})}),Object(l.jsxs)("li",{children:["\xa9 ",(new Date).getFullYear()," El B\xfaho Tuerto"]})]})})]})})},J=function(e){var a=Object(c.g)(),s=g.scroller;return Object(i.useEffect)((function(){var e=a.hash;window.scrollTo({top:0,left:0});var i=e.replace("#","");document.getElementById(i)&&setTimeout((function(){s.scrollTo(i,{smooth:!1})}),100)}),[a]),Object(l.jsx)(l.Fragment,{children:e.children})},U=function(){return Object(l.jsxs)(J,{children:[Object(l.jsx)(B,{}),Object(l.jsxs)(c.d,{children:[Object(l.jsx)(c.b,{exact:!0,path:"/",children:Object(l.jsx)(E,{})}),Object(l.jsx)(c.b,{path:"/menu",children:Object(l.jsx)(M,{})}),Object(l.jsx)(c.b,{path:"/cookies",children:Object(l.jsx)(G,{})}),Object(l.jsx)(c.b,{path:"/privacy-policy",children:Object(l.jsx)(W,{})}),Object(l.jsx)(c.a,{to:"/"})]}),Object(l.jsx)(R,{})]})};o.a.render(Object(l.jsx)(t.a.StrictMode,{children:Object(l.jsx)(n.a,{basename:"/el_buho_tuerto",children:Object(l.jsx)(U,{})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.6a195f8d.chunk.js.map