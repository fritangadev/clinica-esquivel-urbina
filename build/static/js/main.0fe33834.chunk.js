(this["webpackJsonpclinica-eu-react"]=this["webpackJsonpclinica-eu-react"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e){e.exports=JSON.parse('[{"profiles":[{"title":"Dr","name":"Erwin Esquivel Ch\xe1vez","img":"e-esquivel","grade":"Odontologia General","university":"UAM","specialization":"Rehabilitacion Oral e Implantes","studies":"USAL - AOA","city":"Buenos Aires, Argentina"},{"title":"Dra","name":"Ma. Ximena Urbina Ord\xf3\xf1ez","img":"x-urbina","grade":"Odontologia General","university":"UAM","specialization":"Rehabilitacion Oral e Implantes","studies":"USAL - AOA","city":"Buenos Aires, Argentina"}]},{"treatments":["Limpieza","Est\xe9tica","Blanqueamiento","Endodoncia en una cita","Puentes y Coronas de Porcelana","Implantes Dentales","Cirug\xeda Oral","Ortodoncia","Periodoncia","Odontopediatr\xeda"]},{"contact":{"address":"Iglesia Xalteva 1c. al Este, 1c. al Norte, Calle \\"El Palenque\\", Granada, Nicaragua"}}]')},,,function(e,a,t){},,,,,function(e){e.exports=JSON.parse('[{"profiles":[{"title":"Dr","name":"Erwin Esquivel Ch\xe1vez","img":"e-esquivel","grade":"General Dentistry","university":"UAM","specialization":"Oral Rehabilitation and Implants","studies":"USAL - AOA","city":"Buenos Aires, Argentina"},{"title":"Dr","name":"Ma. Ximena Urbina Ord\xf3\xf1ez","img":"x-urbina","grade":"General Dentistry","university":"UAM","specialization":"Endodontist","studies":"USAL - AOA","city":"Buenos Aires, Argentina"}]},{"treatments":["Dental Cleaning","Esthetic","Teeth Whitening","Root Canal Traetment","Metal Free Crown and Bridges","Implants","Oral Surgery","Orthodontics Treatment","Periodontics Treatment","Pediatric Dentistry"]},{"contact":{"address":"From Xalteva Church, 1 block to the East, 1 block to the North, \\"El Palenque\\" street, Granada, Nicaragua","phone":"(+505) 2252-0664"}}]')},function(e,a,t){e.exports=t.p+"static/media/logo-texto.9c16d13d.png"},,,,,,function(e,a,t){e.exports=t(50)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/img-0.dbd69624.jpeg"},function(e,a,t){e.exports=t.p+"static/media/img-2.74bae6b4.jpeg"},function(e,a,t){e.exports=t.p+"static/media/img-3.d68eb657.jpeg"},function(e,a,t){e.exports=t.p+"static/media/img-4.70dcd99f.jpeg"},function(e,a,t){e.exports=t.p+"static/media/img-6.11757b0d.jpeg"},function(e,a,t){},,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(19),s=t.n(r),i=t(16),c=t(20),o=t(21),m=t(27),u=t(22),g=t(28),d=(t(35),t(36),t(15)),E=t.t(d,2),p=t(23),h=t.t(p,2),f=t(24),N=t.n(f),v=(t(18),function(e){return l.a.createElement("button",{className:"lang-button",onClick:function(){var a="ES"===e.lang?"EN":"ES";e.changeLang(a)}},"ES"===e.lang?"English":"Spanish")}),b=function(e){var a="ES"===e.lang?"Por medidas de seguridad y pensando en la salud de nuestros pacientes estaremos cerrados hasta nuevo aviso, atendiendo \xfanicamente casos de emergencia.":"For security measures and thinking about the health of our patients, we will be closed until further notice, attending emergency cases only.";return l.a.createElement("div",{className:"navbar-container"},l.a.createElement("small",{className:"coronavirus-alert",style:{margin:0}}," ",l.a.createElement("span",null,"ES"===e.lang?"AVISO":"NOTICE",": "),a),l.a.createElement("nav",{className:"navbar navbar-green bg-green"},l.a.createElement("a",{className:"navbar-brand",href:"#"},l.a.createElement("img",{src:N.a,height:"30",alt:""})),l.a.createElement(v,{lang:e.lang,changeLang:e.changeLang})))},O=(t(37),function(e){return l.a.createElement("header",{className:"masthead"},l.a.createElement("div",{className:"container h-100"},l.a.createElement("div",{className:"row h-100 align-items-center"},l.a.createElement("div",{className:"col-12 text-center"},l.a.createElement("h1",{className:"title"},"Esquivel",l.a.createElement("br",null),"Urbina"),l.a.createElement("p",{className:"subtitle"},"ES"===e.lang?"Odontolog\xeda Integral":"Integral Dentristy")))))}),y=function(e){var a=e.profile,t=a.title,n=a.name,r=a.img,s=a.grade,i=a.university,c=a.specialization,o=a.studies,m=a.city;return l.a.createElement("div",{className:"profile-card"},l.a.createElement("div",{className:"profile-picture ".concat(r)}),l.a.createElement("div",{className:"profile-info"},l.a.createElement("h3",null,t,". ",n),l.a.createElement("small",null,s," - ",i),l.a.createElement("small",null,c),l.a.createElement("small",null,o," - ",m)))},S=function(e){return l.a.createElement("div",null,l.a.createElement("h2",{className:"section-title"},"ES"===e.lang?"Nosotros":"About Us"),l.a.createElement("div",{className:"profiles-container"},e.profiles.map((function(e,a){return l.a.createElement(y,{key:a,profile:e})}))))},A=(t(38),function(e){return l.a.createElement("div",null,l.a.createElement("h2",{className:"section-title"},"ES"===e.lang?"Atendemos":"Treatments"),l.a.createElement("ul",{className:"list-group treatments-container"},e.treatments.map((function(e,a){return l.a.createElement("li",{key:a,className:"list-group-item"},e)}))))}),x=(t(39),function(e){return l.a.createElement("section",{className:"about-us"},l.a.createElement(S,{profiles:e.profiles,lang:e.lang}),l.a.createElement(A,{treatments:e.treatments,lang:e.lang}))}),I=t(29),k=t(9),w=(t(40),function(e){var a=Object(n.useState)(0),r=Object(I.a)(a,2),s=r[0],i=r[1];return l.a.createElement("section",null,l.a.createElement("h2",{className:"section-title"},"ES"===e.lang?"Instalaciones":"Our Clinic"),l.a.createElement(k.a,{className:"carousel-container",activeIndex:s,onSelect:function(e,a){i(e)}},l.a.createElement(k.a.Item,{className:"carousel-item"},l.a.createElement("img",{className:"d-block w-100 carousel-img",src:t(41),alt:"First slide"})),l.a.createElement(k.a.Item,{className:"carousel-item"},l.a.createElement("img",{className:"d-block w-100 carousel-img",src:t(42),alt:"Third slide"})),l.a.createElement(k.a.Item,{className:"carousel-item"},l.a.createElement("img",{className:"d-block w-100 carousel-img",src:t(43),alt:"Third slide"})),l.a.createElement(k.a.Item,{className:"carousel-item"},l.a.createElement("img",{className:"d-block w-100 carousel-img",src:t(44),alt:"Third slide"})),l.a.createElement(k.a.Item,{className:"carousel-item"},l.a.createElement("img",{className:"d-block w-100 carousel-img",src:t(45),alt:"Third slide"}))))}),C=(t(46),t(53)),j=t(54),P=t(52),U=function(e){var a=[11.92939,-85.959212];return l.a.createElement("section",null,l.a.createElement("h2",{className:"section-title"},"ES"===e.lang?"Encu\xe9ntranos":"Find Us"),l.a.createElement("div",{id:"map"},l.a.createElement(C.a,{center:a,zoom:16,style:{width:"100%",height:"100%"}},l.a.createElement(j.a,{url:"https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=7GQKOAd9gkqPebbuiESJ",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),l.a.createElement(P.a,{position:a}))),l.a.createElement("p",{className:"location"},e.address))},z=(t(49),function(e){var a=e.lang;return l.a.createElement("footer",{className:"footer"},l.a.createElement("h2",{className:"footer-title"},"ES"===a?"Contacto":"Contact"),l.a.createElement("hr",null),l.a.createElement("div",{className:"contact-container"},l.a.createElement("div",{className:"office-phone"},l.a.createElement("h3",{className:"footer-text"},"ES"===a?"Telefono (Oficina)":"Phone (Office)",":"),l.a.createElement("p",{className:"footer-text"},"(+505) 2552-0664")),l.a.createElement("div",{className:"personal-phone"},l.a.createElement("h3",{className:"footer-text"},"ES"===a?"Telefono (Personal)":"Phone (Personal)",":"),l.a.createElement("p",{className:"footer-text"},"(+505) 8954-4579 / (+505) 8971-7756")),l.a.createElement("div",{className:"email"},l.a.createElement("h3",{className:"footer-text"},"E-mail:"),l.a.createElement("p",{className:"footer-text"},"erwinesquivel@hotmail.com / ximenaurbina@hotmail.com"))))}),T=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={language:"ES",profiles:[],treatments:[],contact:{}},t.changeLang=function(e){t.setState({language:e});var a="ES"===e?E:h,n=Object(i.a)(a.default).slice(0);t.setState({profiles:n[0].profiles,treatments:n[1].treatments,contact:n[2].contact})},t}return Object(g.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=E,a=Object(i.a)(e.default).slice(0);this.setState({profiles:a[0].profiles,treatments:a[1].treatments,contact:a[2].contact})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(b,{lang:this.state.language,changeLang:this.changeLang}),l.a.createElement(O,{lang:this.state.language}),l.a.createElement("div",{className:"wrapper"},l.a.createElement(x,{profiles:this.state.profiles,treatments:this.state.treatments,lang:this.state.language}),l.a.createElement(w,{lang:this.state.language}),l.a.createElement(U,{address:this.state.contact.address,lang:this.state.language})),l.a.createElement(z,{contact:this.state.contact,lang:this.state.language,loading:this.state.loading}))}}]),a}(n.Component);s.a.render(l.a.createElement(T,null),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.0fe33834.chunk.js.map