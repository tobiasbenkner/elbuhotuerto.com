(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{45:function(e,a,s){},76:function(e,a,s){"use strict";s.r(a);var i=s(1),o=s.n(i),r=s(17),t=s.n(r),n=s(4),c=(s(45),s(2)),l=s(9),d=s(0),u=function(e){return Object(d.jsx)("button",{className:"p-button p-button-1",children:Object(d.jsx)("b",{children:e.label})})},j=function(){return Object(d.jsxs)("div",{className:"landing-page",children:[Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)("h1",{children:"Cocina tradicional Argentina"}),Object(d.jsx)("h3",{style:{marginTop:15},children:"Somos una empresa familiar "})]}),Object(d.jsx)(n.b,{to:"/menu",children:Object(d.jsx)(u,{label:"Men\xfa"})})]})},b=s(18),m=s.n(b),p=function(e){return Object(d.jsx)("div",{className:"card ".concat(e.className),children:Object(d.jsx)("div",{className:"card-body",children:e.children})})},O=function(e){var a="https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,username,thumbnail_url,permalink,media_type&access_token=".concat("IGQVJVNE92YWRwMDc5RUo5bW5MZAWF2QjlkSTZAmZAk52MXFsNzM1UmwtV2hqUGtnOGlhc0dFYnZAnZAUtYSE5yNWJwTmJYMjNETFI2aWthWmswcnoxWVMybnF4X0FnSWNMNDcxVTQ4eklHc1dFTmhmbFdWOAZDZD"),s=Object(i.useState)([]),o=Object(l.a)(s,2),r=o[0],t=o[1];return Object(i.useEffect)((function(){m.a.get(a).then((function(a){var s=a.data;t(s.data.slice(0,6)),e.onLoaded()})).catch((function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message)}))}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"insta",children:r.map((function(e,a){return Object(d.jsxs)(p,{className:"insta-item",children:[("IMAGE"===e.media_type||"CAROUSEL_ALBUM"===e.media_type)&&Object(d.jsx)("img",{src:e.media_url,alt:"asdf"}),"VIDEO"===e.media_type&&Object(d.jsxs)("video",{width:"100%",controls:!0,children:[Object(d.jsx)("source",{src:e.media_url,type:"video/mp4"}),"Your browser does not support HTML video."]}),Object(d.jsx)("div",{dangerouslySetInnerHTML:{__html:e.caption.replace("\r","").replace("\n","<br /><br />")}})]},a)}))})})},x=O;O.defaultProps={onLoaded:function(){}};var h=s(10),f=function(e){var a=h.Element;return Object(d.jsx)(a,{className:"page",id:e.id,children:Object(d.jsxs)("div",{className:"main",children:[e.title&&Object(d.jsx)("h1",{className:"title",children:e.title}),e.children]})})},g=function(e){return Object(d.jsx)(f,{id:"news",title:"Noticias",children:Object(d.jsx)(x,{onLoaded:e.onLoaded})})},v=g;g.defaultProps={onLoaded:function(){}};var N=function(e){return Object(d.jsxs)("div",{className:"icon",style:{display:"flex",alignItems:"center"},children:[Object(d.jsx)("img",{src:"".concat("/el_buho_tuerto","/assets/icons/").concat(e.name,".svg"),style:{filter:"invert(".concat(e.color,")")},width:e.width,height:e.height,alt:"".concat(e.name)}),e.text&&Object(d.jsx)("span",{style:{marginLeft:10},children:e.text}),e.children&&Object(d.jsx)("div",{style:{marginLeft:10},children:e.children})]})};N.defaultProps={width:30,height:30,text:"",color:1};var y=N,q=function(e){return Object(d.jsx)(f,{id:"restaurant",title:"",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"container-item wrapper",children:[Object(d.jsx)("h2",{children:"Ubicaci\xf3n"}),Object(d.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3518.323674014576!2d-15.43567828524984!3d28.136633213102694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc409515a6173bf3%3A0x727a399792854111!2sB%C3%BAho%20Tuerto!5e0!3m2!1sen!2sde!4v1633635135880!5m2!1sen!2sde",width:"100%",style:{border:0,borderRadius:10},loading:"lazy",title:"Location",onLoad:e.onLoaded}),Object(d.jsx)("div",{style:{marginTop:10},children:Object(d.jsxs)(y,{name:"marker",height:"20",width:"20",children:["El B\xfaho Tuerto",Object(d.jsx)("br",{}),"Tom\xe1s Miller 13",Object(d.jsx)("br",{}),"35007 Las Palmas"]})}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{style:{marginBottom:20},children:Object(d.jsx)(y,{color:"1",height:"20",width:"20",name:"phone",children:Object(d.jsx)("a",{href:"tel:+34928 504 820",children:"928 504 820"})})}),Object(d.jsx)("div",{children:Object(d.jsx)(y,{color:"1",height:"20",width:"20",name:"mail",children:Object(d.jsx)("a",{href:"mailto: elbuhotuerto13@gmail.com",children:"elbuhotuerto13@gmail.com"})})})]}),Object(d.jsxs)("div",{className:"container-item wrapper",children:[Object(d.jsx)("h2",{children:"Horario"}),Object(d.jsx)("table",{style:{marginTop:"-1em"},children:Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Lunes"}),Object(d.jsx)("td",{children:"13:00 - 17:00"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Martes"}),Object(d.jsx)("td",{children:"Closed"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Mi\xe9rcoles"}),Object(d.jsx)("td",{children:"13:00 - 17:00"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Jueves"}),Object(d.jsxs)("td",{children:["13:00 - 17:00",Object(d.jsx)("br",{}),"20:00 - 00:00"]})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Viernes"}),Object(d.jsxs)("td",{children:["13:00 - 17:00",Object(d.jsx)("br",{}),"20:00 - 00:00"]})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"S\xe1bado"}),Object(d.jsxs)("td",{children:["13:00 - 17:00",Object(d.jsx)("br",{}),"20:00 - 00:00"]})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Domingo"}),Object(d.jsx)("td",{children:"13:00 - 17:00"})]})]})})]})]})})},L=q;q.defaultProps={onLoaded:function(){}};var C=function(){return Object(d.jsxs)(f,{id:"about",title:"Sobre nosotros",children:[Object(d.jsx)("img",{src:"".concat("/el_buho_tuerto","/assets/images/about.jpg"),alt:"about"}),Object(d.jsx)("h1",{children:"Somos una empresa familiar"}),Object(d.jsx)("p",{children:"Pretendemos crear para ti un c\xe1lido rinc\xf3n familiar contando con un esmerado servicio y productos de primera calidad. Nos especializamos en carnes a la brasa con un sabor aut\xe9ntico y t\xedpico de nuestra tierra. \xa1Esperamos que te sientas como en tu propia casa!!"}),Object(d.jsx)("h1",{children:"Nos Gusta ser diferentes"}),Object(d.jsx)("p",{children:"Desde diciembre del 2014 estamos en Las Palmas de Gran Canaria Hemos querido romper con la est\xe9tica convencional de los  grilles argentinos ya que estamos en una zona urbana ,de ah\xed nace la idea de transportarnos al  t\xedpico barrio porte\xf1o de la boca Nos complace darle la bienvenida a nuestro sitio web. Gracias por su visita."}),Object(d.jsx)("h1",{children:"A Cerca de Nosotros"}),Object(d.jsx)("p",{children:"El B\xfaho Tuerto un rinc\xf3n para celebrar y disfrutar la vida a trav\xe9s de la rica cocina Argentina. Es un lugar donde ocurre el encuentro m\xe1gico entre personas de una misma nacionalidad que comulgan en una misma consigna: Estar siempre a la altura para satisfacer a todos nuestros clientes."}),Object(d.jsx)("p",{children:"Para poder lograrlo, se requiere de gran habilidad y esa constancia que denota la eficacia."}),Object(d.jsx)("p",{children:"Nos familiarizamos con cada producto y con los m\xe9todos de preparaci\xf3n, tanto en la cocina como en el sal\xf3n. Sabemos de los diferentes puntos de carne. Somos especialistas en la cata de vinos y en maridaje. A ra\xedz de la sucedido aqu\xed y en el mundo, nos formamos nuevamente en primeros auxilios y reforzamos los protocolos sanitarios para combatir al Covid-19 siendo m\xe1s cuidadosos y responsables en esta pandemia. Utilizamos mascarilla en todo momento."}),Object(d.jsx)("p",{children:"Contamos con nuestra carta digital con total disponibilidad del personal para disipar aquellas dudas que tengan tanto en Espa\xf1ol, Ingles. De acuerdo a la normativa vigente y recomendaciones sanitarias todos los clientes deber\xe1n llevar mascarillas en los espacios comunes ( menos ni\xf1os menores 6 a\xf1os)."}),Object(d.jsx)("h1",{children:"Cocina tradicional Argentina"}),Object(d.jsx)("p",{children:"Disfruta de aut\xe9nticas y deliciosas carnes a la brasa en un ambiente acogedor, acompa\xf1ado de un excelente servicio  formado por personal  id\xf3neo. Ya sea para una cena rom\xe1ntica, un almuerzo informal con amigos o una gran fiesta con toda la familia, nuestro restaurante es el lugar perfecto para cualquier ocasi\xf3n."})]})},k=function(e){var a=Object(c.f)(),s=Object(i.useState)(!1),o=Object(l.a)(s,2),r=o[0],t=o[1],n=Object(i.useState)(!1),u=Object(l.a)(n,2),b=u[0],m=u[1];return Object(i.useEffect)((function(){r&&b&&setTimeout((function(){!function(){var e=a.hash.replace("#","");h.scroller.scrollTo(e,{smooth:!0,offset:0,delay:0})}()}),100)}),[r,b]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{}),Object(d.jsx)(v,{onLoaded:function(){return t(!0)}}),Object(d.jsx)(L,{onLoaded:function(){return m(!0)}}),Object(d.jsx)(C,{})]})},w=function(e){var a=".accordion";if(e.target.matches(a+" .a-btn")){e.target.parentElement.classList.contains("active")?e.target.parentElement.classList.remove("active"):(document.querySelectorAll(a+" .a-container").forEach((function(e){e.classList.remove("active")})),e.target.parentElement.classList.add("active"));var s=e.target.parentElement.id;h.scroller.scrollTo(s,{smooth:!1,offset:-60})}},S=function(e){return Object(d.jsx)("div",{className:"accordion",children:e.children})},A=function(e){var a=h.Element;return Object(d.jsxs)(a,{name:e.id,id:e.id,className:"a-container",children:[Object(d.jsxs)("p",{className:"a-btn",onClick:w,children:["\xa0\xa0\xa0",e.title,Object(d.jsx)("span",{})]}),Object(d.jsx)("div",{className:"a-panel",children:e.children})]})},I=["es","de","ar","en"],E=function(e){var a,s,o=Object(i.useState)({}),r=Object(l.a)(o,2),t=r[0],u=r[1],j=Object(i.useState)("es"),b=Object(l.a)(j,2),p=b[0],O=b[1],x=Object(c.f)().search,h=new URLSearchParams(x).get("language");Object(i.useEffect)((function(){var e=h?h.toLocaleLowerCase():function(){var e=window.navigator.userLanguage||window.navigator.language;if(!e)return"es";var a=e.toLowerCase();return"es-ar"===a||"es-uy"===a?"ar":a.startsWith("es")?"es":a.startsWith("de")?"de":"en"}();I.includes(e)||(e="es"),O(e),m.a.get("".concat("/el_buho_tuerto","/assets/i18n/i18n.").concat(e,".json")).then((function(e){u(e.data)}))}),[h]);return Object(d.jsxs)(f,{id:"menu",title:"",children:[Object(d.jsx)("div",{className:"language",children:I.map((function(e,a){return Object(d.jsx)(n.b,{to:{pathname:"/menu",search:"?language=".concat(e)},children:Object(d.jsx)("img",{className:p===e?"active":"",src:"".concat("/el_buho_tuerto","/assets/images/flags/").concat(e.replace("en","gb"),".svg"),alt:e})},e+"-"+a)}))}),Object(d.jsxs)(S,{children:[null===t||void 0===t||null===(a=t.menu)||void 0===a?void 0:a.map((function(e,a){return Object(d.jsx)(A,{id:"".concat(a),title:e.title,children:e.foods.map((function(e,a){return function(e,a){return Object(d.jsxs)("div",{className:"food-container",children:[Object(d.jsxs)("div",{className:"food-description",children:[Object(d.jsx)("div",{className:"food-title",children:e.title}),Object(d.jsx)("div",{className:"food-subtitle",dangerouslySetInnerHTML:{__html:e.subtitle}}),e.allergies&&e.allergies.length>0&&Object(d.jsx)("div",{className:"food-allergies",children:e.allergies.sort().map((function(e,s){return Object(d.jsx)("img",{width:"25",height:"25",src:"".concat("/el_buho_tuerto","/assets/images/menu/allergies/").concat(e,".jpg"),alt:e},a+"-"+s)}))})]}),Object(d.jsxs)("div",{className:"food-info",children:[Object(d.jsx)("div",{className:"food-price",children:e.price}),e.special&&Object(d.jsx)("div",{className:"food-special",children:e.special})]})]},e.title+"-"+a)}(e,a)}))},e.title)})),Object(d.jsxs)(A,{id:"puntos",title:"Puntos de la Carne",children:[t["meat-image"]&&Object(d.jsx)("img",{className:"image",width:"100%",src:"".concat("/el_buho_tuerto").concat(t["meat-image"]),alt:"Meat"}),Object(d.jsx)("div",{children:null===t||void 0===t||null===(s=t.cooking)||void 0===s?void 0:s.map((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"carne-title",children:e.title}),Object(d.jsx)("div",{className:"carne-subtitle",children:e.subtitle})]},e.title)}))})]})]})]})},P=function(){return Object(d.jsxs)(f,{id:"cookies",title:"Politica de cookies",children:["Nuevo p\xe1rrafo \xbfQu\xe9 son las cookies?",Object(d.jsx)("br",{}),"La Web de DANIEL ANTONIO PISANO SORBILLI (en adelante la Web) utiliza Cookies. Las Cookies son ficheros enviados a un navegador por medio de un servidor web para registrar las actividades del Usuario en una web determinada. La primera finalidad de las Cookies es la de facilitar al usuario un acceso m\xe1s r\xe1pido a los servicios seleccionados. Adem\xe1s, las Cookies personalizan los servicios que ofrece la Web, facilitando y ofreciendo a cada usuario informaci\xf3n que es de su inter\xe9s o que puede ser de su inter\xe9s, en atenci\xf3n al uso que realiza de los Servicios.",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"La Web utiliza Cookies para personalizar y facilitar al m\xe1ximo la navegaci\xf3n del usuario. Las Cookies se asocian \xfanicamente a un usuario an\xf3nimo y su ordenador y no proporcionan referencias que permitan deducir datos personales del usuario. El usuario podr\xe1 configurar su navegador para que notifique y rechace la instalaci\xf3n las Cookies enviadas por la Web, sin que ello perjudique la posibilidad del usuario de acceder a los contenidos de dicha web. Sin embargo, le hacemos notar que, en todo caso, la calidad de funcionamiento de la p\xe1gina Web puede disminuir.",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"Los usuarios registrados, que se registren o que hayan iniciado sesi\xf3n, podr\xe1n beneficiarse de unos servicios m\xe1s personalizados y orientados a su perfil, gracias a la combinaci\xf3n de los datos almacenados en las cookies con los datos personales utilizados en el momento de su registro. Dichos usuarios autorizan expresamente el uso de esta informaci\xf3n con la finalidad indicada, sin perjuicio de su derecho a rechazar o deshabilitar el uso de cookies.",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"Asimismo, la Web podr\xe1 saber todos los servicios solicitados por los usuarios, de forma que podr\xe1n facilitar u ofrecer informaci\xf3n adecuada a los gustos y preferencias de cada usuario.",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"\xbfQu\xe9 tipos de cookies existen?",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"Las Cookies, en funci\xf3n de su Permanencia, pueden dividirse en:",Object(d.jsx)("br",{}),"\u201cCookies de sesi\xf3n\u201d: Las primeras expiran cuando el usuario cierra el navegador.",Object(d.jsx)("br",{}),"\u201cCookies persistentes\u201d. Las segundas expiran en funci\xf3n de cuando se cumpla el objetivo para el que sirven (por ejemplo, para que el usuario se mantenga identificado en los Servicios) o bien cuando se borran manualmente.",Object(d.jsx)("br",{}),"Adicionalmente, en funci\xf3n de su Objetivo, las Cookies pueden clasificarse de la siguiente forma:",Object(d.jsx)("br",{}),"Cookies de rendimiento: Este tipo de Cookie recuerda sus preferencias para las herramientas que se encuentran en los servicios, por lo que no tiene que volver a configurar el servicio cada vez que usted visita. A modo de ejemplo, en esta tipolog\xeda se incluyen:",Object(d.jsx)("br",{}),"Ajustes de volumen de reproductores de v\xeddeo o sonido.",Object(d.jsx)("br",{}),"Las velocidades de transmisi\xf3n de v\xeddeo que sean compatibles con su navegador.",Object(d.jsx)("br",{}),"Cookies de geo-localizaci\xf3n: Estas Cookies son utilizadas para averiguar en qu\xe9 pa\xeds se encuentra cuando se solicita un servicio. Esta Cookie es totalmente an\xf3nima, y s\xf3lo se utiliza para ayudar a orientar el contenido a su ubicaci\xf3n.",Object(d.jsx)("br",{}),"Cookies de registro: Las Cookies de registro se generan una vez que el usuario se ha registrado o posteriormente ha abierto su sesi\xf3n, y se utilizan para identificarle en los servicios con los siguientes objetivos:",Object(d.jsx)("br",{}),"Mantener al usuario identificado de forma que, si cierra un servicio, el navegador o el ordenador y en otro momento u otro d\xeda vuelve a entrar en dicho servicio, seguir\xe1 identificado, facilitando as\xed su navegaci\xf3n sin tener que volver a identificarse. Esta funcionalidad se puede suprimir si el usuario pulsa la funcionalidad \u201ccerrar sesi\xf3n\u201d, de forma que esta Cookie se elimina y la pr\xf3xima vez que entre en el servicio el usuario tendr\xe1 que iniciar sesi\xf3n para estar identificado.",Object(d.jsx)("br",{}),"Comprobar si el usuario est\xe1 autorizado para acceder a ciertos servicios, por ejemplo, para participar en un concurso.",Object(d.jsx)("br",{}),"Cookies anal\xedticas: Cada vez que un Usuario visita un servicio, una herramienta de un proveedor externo genera una Cookie anal\xedtica en el ordenador del usuario. Esta Cookie que s\xf3lo se genera en la visita, servir\xe1 en pr\xf3ximas visitas a los Servicios de la Web para identificar de forma an\xf3nima al visitante. Los objetivos principales que se persiguen son:",Object(d.jsx)("br",{}),"Permitir la identificaci\xf3n an\xf3nima de los usuarios navegantes a trav\xe9s de la \u201cCookie\u201d (identifica navegadores y dispositivos, no personas) y por lo tanto la contabilizaci\xf3n aproximada del n\xfamero de visitantes y su tendencia en el tiempo.",Object(d.jsx)("br",{}),"Identificar de forma an\xf3nima los contenidos m\xe1s visitados y por lo tanto m\xe1s atractivos para los usuarios.",Object(d.jsx)("br",{}),"Saber si el usuario que est\xe1 accediendo es nuevo o repite visita.",Object(d.jsx)("br",{}),"Importante: Salvo que el usuario decida registrarse en un servicio de la Web, la \u201cCookie\u201d nunca ir\xe1 asociada a ning\xfan dato de car\xe1cter personal que pueda identificarle. Dichas Cookies s\xf3lo ser\xe1n utilizadas con prop\xf3sitos estad\xedsticos que ayuden a la optimizaci\xf3n de la experiencia de los Usuarios en el sitio.",Object(d.jsx)("br",{}),"Cookies de publicidad comportamental: Este tipo de \u201cCookies\u201d permite ampliar la informaci\xf3n de los anuncios mostrados a cada usuario an\xf3nimo en los Servicios de la Web. Entre otros, se almacena la duraci\xf3n o frecuencia de visualizaci\xf3n de posiciones publicitarias, la interacci\xf3n con las mismas, o los patrones de navegaci\xf3n y/o compartimientos del usuario ya que ayudan a conformar un perfil de inter\xe9s publicitario. De este modo, permiten ofrecer publicidad af\xedn a los intereses del usuario.",Object(d.jsx)("br",{}),"Cookies publicitarias de terceros: Adem\xe1s de la publicidad gestionada por la Web en sus Servicios, la Web ofrece a sus anunciantes la opci\xf3n de servir anuncios a trav\xe9s de terceros (\u201cAdServers\u201d). De este modo, estos terceros pueden almacenar Cookies enviadas desde los Servicios de la Web procedentes de los navegadores de los Usuarios, as\xed como acceder a los datos que en ellas se guardan.",Object(d.jsx)("br",{}),"Weborama: http://www.weborama.com/e-privacy/our-commitment/",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"3. \xbfQue Cookies utilizamos?",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"Propias: Son aqu\xe9llas que se env\xedan al equipo terminal del usuario desde un equipo o dominio gestionado por el propio editor y desde el que se presta el servicio solicitado por el usuario.",Object(d.jsx)("br",{}),"Cookies de sesi\xf3n",Object(d.jsx)("br",{}),"De terceros: Son aqu\xe9llas que se env\xedan al equipo terminal del usuario desde un equipo o dominio que no es gestionado por el editor, sino por otra entidad que trata los datos obtenidos trav\xe9s de las cookies.",Object(d.jsx)("br",{}),"\xbfC\xf3mo deshabilitar las Cookies?",Object(d.jsx)("br",{}),"Normalmente es posible dejar de aceptar las Cookies del navegador, o dejar de aceptar las Cookies de un Servicio en particular.",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"Todos los navegadores modernos permiten cambiar la configuraci\xf3n de Cookies. Estos ajustes normalmente se encuentran en las \xa8opciones\xa8 o \xa8preferencias\xa8 del men\xfa de su navegador. Asimismo, puede configurar su navegador o su gestor de correo electr\xf3nico, as\xed como instalar complementos gratuitos para evitar que se descarguen los Web Bugs al abrir un email.",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"La Web ofrece orientaci\xf3n al Usuario sobre los pasos para acceder al men\xfa de configuraci\xf3n de las cookies y, en su caso, de la navegaci\xf3n privada en cada uno de los navegadores principales:",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"Internet Explorer: Herramientas - > Opciones de Internet - > Privacidad - > Configuraci\xf3n.",Object(d.jsx)("br",{}),"Para m\xe1s informaci\xf3n, puede consultar el soporte de Microsoft o la Ayuda del navegador.",Object(d.jsx)("br",{}),"Firefox: Herramientas - > Opciones - > Privacidad - > Historial - > Configuraci\xf3n personalizada.",Object(d.jsx)("br",{}),"Chrome: Configuraci\xf3n - > Mostrar opciones avanzadas - > Privacidad - > Configuraci\xf3n de contenido.",Object(d.jsx)("br",{}),"Safari: Preferencias - > Seguridad.",Object(d.jsx)("br",{}),"Para m\xe1s informaci\xf3n, puede consultar el soporte de Apple o la Ayuda del navegador.",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"\xbfSe pueden producir modificaciones de la Pol\xedtica de Cookies?",Object(d.jsx)("br",{}),"La Web puede modificar esta Pol\xedtica de Cookies en funci\xf3n de las exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha pol\xedtica a las instrucciones dictadas por la Agencia Espa\xf1ola de Protecci\xf3n de Datos, por ello se aconseja a los usuarios que la visiten peri\xf3dicamente.",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"Cuando se produzcan cambios significativos en esta Pol\xedtica de Cookies, se comunicar\xe1n a los usuarios bien mediante la web o a trav\xe9s de correo electr\xf3nico a los usuarios registrados."]})},_=function(){return Object(d.jsxs)(f,{id:"privacy",title:"Politica de privacidad",children:["Nuevo p\xe1rrafo Pol\xedtica de Privacidad",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"Siguiendo los principios de licitud, lealtad y transparencia, ponemos a su disposici\xf3n la presente Pol\xedtica de Privacidad.",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"\xbfQui\xe9n es el Responsable del tratamiento de sus datos?",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"DANIEL ANTONIO PISANO SORBILLI",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"CIF: 54386074K",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"DOMICILIO SOCIAL: C/ TOMAS MILLER, N\xba13, 35007, LAS PALMAS (LAS PALMAS)",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"Email: elbuhotuerto13@gmail.com",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"Tel\xe9fono: 928 504 820",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"\xbfCon qu\xe9 finalidad tratamos sus datos personales?",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"En DANIEL ANTONIO PISANO SORBILLI tratamos la informaci\xf3n que nos facilita con la finalidad de gestionar la relaci\xf3n contractual que nos une, gestionar el env\xedo de la informaci\xf3n que nos solicita, facilitar a los interesados ofertas de nuestros servicios y/o productos de su inter\xe9s y/o gestionar su candidatura.",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"\xbfPor cu\xe1nto tiempo conservaremos sus datos personales?",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"Sus datos, ser\xe1n conservados el tiempo m\xednimo necesario para la correcta prestaci\xf3n del servicio ofrecido as\xed como para atender las responsabilidades que se pudieran derivar del mismo y de cualquier otra exigencia legal.",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"\xbfCu\xe1l es la legitimaci\xf3n para el tratamiento de sus datos?",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"La base legal para el tratamiento de sus datos personales puede ser la ejecuci\xf3n de una relaci\xf3n contractual potencial y/o suscrita, el inter\xe9s leg\xedtimo, la habilitaci\xf3n legal y/o el consentimiento del propio interesado. Los datos que le solicitamos son adecuados, pertinentes y estrictamente necesarios y en ning\xfan caso est\xe1 obligado a facilit\xe1rnoslos, pero su no comunicaci\xf3n podr\xe1 afectar a la finalidad del servicio o la imposibilidad de prestarlo.",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"\xbfA qu\xe9 destinatarios se comunicar\xe1n sus datos?",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"DANIEL ANTONIO PISANO SORBILLI no comunicar\xe1 sus datos a ning\xfan tercero, salvo su consentimiento expreso u obligaci\xf3n legal.",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"\xbfCu\xe1les son sus derechos cuando nos facilita sus datos?",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"Los derechos de protecci\xf3n de datos de los que son titulares los interesados son:",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"Derecho a solicitar el acceso a los datos personales relativos al interesado",Object(d.jsx)("br",{}),"Derecho de rectificaci\xf3n o supresi\xf3n",Object(d.jsx)("br",{}),"Derecho de oposici\xf3n",Object(d.jsx)("br",{}),"Derecho a solicitar la limitaci\xf3n de su tratamiento",Object(d.jsx)("br",{}),"Derecho a la portabilidad de los datos",Object(d.jsx)("br",{}),"Los titulares de los datos personales obtenidos, podr\xe1n ejercer sus derechos de protecci\xf3n de datos personales dirigiendo una comunicaci\xf3n por escrito al domicilio social de DANIEL ANTONIO PISANO SORBILLI o al correo electr\xf3nico habilitado a tal efecto, elbuhotuerto13@gmail.com, incluyendo en ambos casos fotocopia de su DNI u otro documento de identificaci\xf3n equivalente.",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"Modelos, formularios y m\xe1s informaci\xf3n disponible sobre sus derechos en la p\xe1gina web de la autoridad de control nacional, Agencia Espa\xf1ola de Protecci\xf3n de Datos, en adelante, AEPD, www.agpd.es",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"\xbfPuedo retirar el consentimiento?",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"Usted tiene la posibilidad y el derecho a retirar el consentimiento para cualquiera finalidad espec\xedfica otorgada en su momento, sin que ello afecte a la licitud del tratamiento basado en el consentimiento previo a su retirada.",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"\xbfD\xf3nde puedo reclamar en caso de que considere que no se tratan mis datos correctamente?",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"Si alg\xfan interesado considera que sus datos no son tratados correctamente por DANIEL ANTONIO PISANO SORBILLI puede dirigir sus reclamaciones al correo elbuhotuerto13@gmail.com o a la autoridad de protecci\xf3n de datos que corresponda, siendo la AEPD la indicada en el territorio nacional, www.agpd.es",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"Seguridad y actualizaci\xf3n de sus datos personales",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"Con el objetivo de salvaguardar la seguridad de sus datos personales, le informamos que DANIEL ANTONIO PISANO SORBILLI ha adoptado todas las medidas de \xedndole t\xe9cnica y organizativa necesarias para garantizar la seguridad de los datos personales suministrados. Todo ello para evitar su alteraci\xf3n, p\xe9rdida, y/o tratamientos o accesos no autorizados, tal como exige la normativa, si bien la seguridad absoluta no existe.",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"Es importante que, para que podamos mantener sus datos personales actualizados, nos informe siempre que se produzca una modificaci\xf3n de los mismos.",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"Confidencialidad",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"DANIEL ANTONIO PISANO SORBILLI le informa que sus datos ser\xe1n tratados con el m\xe1ximo celo y confidencialidad por todo el personal que intervenga en cualquiera de las fases del tratamiento. No cederemos ni comunicaremos a ning\xfan tercero sus datos, excepto en los casos legalmente previstos, o salvo que el interesado nos hubiera autorizado expresamente."]})},z=function(e){var a=Object(i.useState)(!1),s=Object(l.a)(a,2),o=s[0],r=s[1],t=function(e,a){return Object(d.jsx)("li",{className:"item ".concat(o?"active":""),onClick:function(){return r(!1)},children:Object(d.jsx)(n.b,{to:{pathname:"/",hash:"#".concat(e)},children:a})})};return Object(d.jsx)("nav",{children:Object(d.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(d.jsx)("div",{style:{width:900},children:Object(d.jsxs)("ul",{className:"menu",children:[Object(d.jsx)("li",{className:"logo",onClick:function(){return r(!1)},children:Object(d.jsx)(n.b,{to:"/",children:"El B\xfaho Tuerto"})}),t("news","Noticias"),t("restaurant","Restaurante"),t("about","Sobre nosotros"),Object(d.jsx)("li",{className:"item button ".concat(o?"active":""),onClick:function(){return r(!1)},children:Object(d.jsx)(n.b,{to:"/menu",children:"Men\xfa"})}),Object(d.jsx)("li",{className:"toggle",onClick:function(e){r(!o)},children:Object(d.jsx)("span",{className:"bars"})})]})})})})},T=function(){return Object(d.jsx)("div",{className:"footer",children:Object(d.jsxs)("footer",{children:[Object(d.jsxs)("section",{className:"ft-main",style:{maxWidth:900,margin:"0 auto"},children:[Object(d.jsx)("div",{className:"ft-main-item",children:Object(d.jsxs)(y,{name:"marker",width:"20",height:"20",children:["El B\xfaho Tuerto",Object(d.jsx)("br",{}),"Tom\xe1s Miller 13",Object(d.jsx)("br",{}),"35007 Las Palmas"]})}),Object(d.jsxs)("div",{className:"ft-main-item",children:[Object(d.jsx)(y,{color:"1",height:"20",width:"20",name:"phone",children:Object(d.jsx)("a",{href:"tel:+34928 504 820",children:"928 504 820"})}),Object(d.jsx)("br",{}),Object(d.jsx)(y,{color:"1",height:"20",width:"20",name:"mail",children:Object(d.jsx)("a",{href:"mailto: elbuhotuerto13@gmail.com",children:"elbuhotuerto13@gmail.com"})})]})]}),Object(d.jsx)("section",{className:"ft-social",children:Object(d.jsxs)("ul",{className:"ft-social-list",children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.facebook.com/elbuhotuerto13",children:Object(d.jsx)(y,{name:"facebook"})})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.instagram.com/el_buhotuerto/?hl=es",children:Object(d.jsx)(y,{name:"instagram"})})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.youtube.com/channel/UCCannDklNJZGNIK7l9pGVsw",children:Object(d.jsx)(y,{name:"youtube"})})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{target:"_blank",rel:"noreferrer",href:"/https://www.tripadvisor.es/Restaurant_Review-g187472-d7729499-Reviews-El_Buho_Tuerto-Las_Palmas_de_Gran_Canaria_Gran_Canaria_Canary_Islands.html",children:Object(d.jsx)(y,{name:"tripadvisor"})})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://web.whatsapp.com/send?phone=+34608963438",children:Object(d.jsx)(y,{name:"whatsapp"})})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{target:"_blank",rel:"noreferrer",href:"mailto:elbuhotuerto13@gmail.com",children:Object(d.jsx)(y,{name:"mail"})})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://es.restaurantguru.com/El-Buho-Tuerto-Las-Palmas-de-Gran-Canaria",children:Object(d.jsx)(y,{name:"rss"})})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.yelp.com/biz/el-buho-tuerto-las-palmas-de-gran-canaria",children:Object(d.jsx)(y,{name:"yelp"})})})]})}),Object(d.jsx)("section",{className:"ft-legal",children:Object(d.jsxs)("ul",{className:"ft-legal-list",style:{maxWidth:900,margin:"0 auto"},children:[Object(d.jsx)("li",{children:Object(d.jsx)(n.b,{to:"/cookies",children:"Politica de cookies"})}),Object(d.jsx)("li",{children:Object(d.jsx)(n.b,{to:"/privacy-policy",children:"Politica de privacidad"})}),Object(d.jsxs)("li",{children:["\xa9 ",(new Date).getFullYear()," El B\xfaho Tuerto"]})]})})]})})},D=function(e){var a=Object(c.f)(),s=Object(i.useState)(""),o=Object(l.a)(s,2),r=o[0],t=o[1],n=h.scroller,u=h.animateScroll;return Object(i.useEffect)((function(){var e=a.pathname,s=a.hash;if(e===r||s||u.scrollToTop(),r===e&&s){var i=s.replace("#","");n.scrollTo(i,{smooth:!0})}t(e)}),[a]),Object(d.jsx)(d.Fragment,{children:e.children})},W=function(){return Object(d.jsxs)(D,{children:[Object(d.jsx)(z,{}),Object(d.jsxs)(c.c,{children:[Object(d.jsx)(c.a,{exact:!0,path:"/",children:Object(d.jsx)(k,{})}),Object(d.jsx)(c.a,{path:"/menu",children:Object(d.jsx)(E,{})}),Object(d.jsx)(c.a,{path:"/cookies",children:Object(d.jsx)(P,{})}),Object(d.jsx)(c.a,{path:"/privacy-policy",children:Object(d.jsx)(_,{})})]}),Object(d.jsx)(T,{})]})};t.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(n.a,{basename:"/el_buho_tuerto",children:Object(d.jsx)(W,{})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.48422044.chunk.js.map