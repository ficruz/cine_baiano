(this.webpackJsonpcine_baiano_front=this.webpackJsonpcine_baiano_front||[]).push([[0],{128:function(e,a,t){"use strict";(function(e){var o=t(12),c=t(10),r=t(1),s=t(0),n=t.n(s),i=t(144),l=t(216),j=t(148),d=t(27),b=t(215),m=t(18),u=t(147),O=t(72),p=t(92),x=t.n(p),h=t(95),f=t(96),g=t(143),v=t(98),y=t(145),C=t(73),S=t.n(C),N=t(134),k=t.n(N),w=t(93),I=t.n(w),B=t(79),q=t(89),A=Object(j.a)((function(e){return{toolbarMargin:Object(c.a)(Object(c.a)({},e.mixins.toolbar),{},{backgroundColor:"black"}),drawerIconContainer:{marginRight:"auto",color:"white","&:hover":{backgroundColor:"transparent"},alignItems:"center",display:"flex"},drawerIcon:{height:"40px",width:"40px",color:"white"},title:Object(c.a)(Object(c.a)({},e.typography.tab),{},{color:e.palette.common.white,display:"flex",marginLeft:"30px"}),drawer:{backgroundColor:e.palette.common.black,color:e.palette.common.grey},drawerTypo:Object(c.a)(Object(c.a)({},e.typography.tab),{},{color:"white",opacity:.6,"&:hover":{opacity:1},textTransform:"uppercase"}),drawerTypoSelected:Object(c.a)(Object(c.a)({},e.typography.tab),{},{color:"white",opacity:1,textTransform:"uppercase"}),searchBar:{backgroundColor:"white",marginLeft:"2em",flexGrow:1,borderRadius:10},toolbar:{maxWidth:1280,flexGrow:1,padding:0}}}));a.a=function(a){var t=A(),c=Object(m.a)(),j=e.browser&&/iPad|iPhone|iPod/.test(navigator.userAgent),p=Object(b.a)(c.breakpoints.down("xs")),C=Object(s.useState)(0),N=Object(o.a)(C,2),w=N[0],F=N[1],z=Object(s.useState)(0),P=Object(o.a)(z,2),D=P[0],T=P[1],E=Object(s.useState)(!1),_=Object(o.a)(E,2),L=_[0],M=_[1],U=Object(s.useState)(!1),R=Object(o.a)(U,2),W=R[0],V=R[1],G=[{name:"Pagina Inicial",link:"/home",activeIndex:0},{name:"Quem Somos",link:"/quemsomos",activeIndex:1},{name:"O que \xe9 um filme baiano?",link:"/filmebaiano",activeIndex:2},{name:"Busqueda Avan\xe7ada",link:"/busquedaavancada",activeIndex:5}];Object(s.useEffect)((function(){[].concat(G).forEach((function(e){switch(window.location.pathname){case"".concat(e.link):w!==e.activeIndex&&(F(e.activeIndex),e.selectedIndex&&e.selectedIndex!==D&&T(e.selectedIndex))}}))}));var J=Object(r.jsxs)(n.a.Fragment,{children:[Object(r.jsx)(u.a,{disableBackdropTransition:!j,disableDiscovery:j,open:L,onClose:function(){return M(!1)},onOpen:function(){return M(!0)},classes:{paper:t.drawer},children:Object(r.jsx)(h.a,{children:G.map((function(e){return Object(r.jsx)(f.a,{onClick:function(){M(!1),F(e.activeIndex)},button:!0,component:d.b,to:e.link,selected:w===e.link,children:Object(r.jsx)(g.a,{className:w===e.activeIndex?t.drawerTypoSelected:t.drawerTypo,children:e.name})},"".concat(e.name).concat(e.activeIndex))}))})}),Object(r.jsxs)(B.a,{className:t.drawerIconContainer,onClick:function(){return M(!L)},children:[Object(r.jsx)(x.a,{}),"Menu"]}),Object(r.jsx)(v.a,{className:t.searchBar,children:Object(r.jsx)(q.a,{})}),Object(r.jsx)(d.b,{to:"/home",underline:"none",children:Object(r.jsxs)(v.a,{className:t.title,children:[Object(r.jsx)(I.a,{color:"secondary"})," Filmografia Bahiana"]})})]}),Q=Object(r.jsxs)(n.a.Fragment,{children:[Object(r.jsx)(u.a,{disableBackdropTransition:!j,disableDiscovery:j,open:L,onClose:function(){return M(!1)},onOpen:function(){return M(!0)},classes:{paper:t.drawer},children:Object(r.jsx)(h.a,{children:G.map((function(e){return Object(r.jsx)(f.a,{onClick:function(){M(!1),F(e.activeIndex)},button:!0,component:d.b,to:e.link,selected:w===e.link,children:Object(r.jsx)(g.a,{className:w===e.activeIndex?t.drawerTypoSelected:t.drawerTypo,children:e.name})},"".concat(e.name).concat(e.activeIndex))}))})}),Object(r.jsxs)("div",{className:t.drawerIconContainer,children:[Object(r.jsx)(O.a,{onClick:function(){return M(!L)},children:Object(r.jsx)(x.a,{className:t.drawerIcon})}),Object(r.jsx)(d.b,{to:"/",underline:"none",children:Object(r.jsx)(I.a,{color:"secondary"})})]}),Object(r.jsx)(B.a,{onClick:function(){return V(!0)},children:Object(r.jsx)(S.a,{color:"secondary"})})]});return Object(r.jsxs)(n.a.Fragment,{children:[W?Object(r.jsx)(i.a,{style:{position:"fixed"},color:"secondary",children:Object(r.jsx)(y.a,{maxWidth:"xs",children:Object(r.jsxs)(v.a,{height:"65px",display:"flex",children:[Object(r.jsx)(q.a,{}),Object(r.jsx)(B.a,{onClick:function(){return V(!1)},children:Object(r.jsx)(k.a,{})})]})})}):Object(r.jsx)(i.a,{position:"fixed",children:Object(r.jsx)(y.a,{maxWidth:"lg",children:Object(r.jsx)(l.a,{className:t.toolbar,children:p?Q:J})})}),Object(r.jsx)("div",{className:t.toolbarMargin})]})}}).call(this,t(111))},206:function(e,a,t){"use strict";t.r(a);var o=t(1),c=t(0),r=t.n(c),s=t(11),n=t.n(s),i=t(249),l=t(27),j=t(15),d=t(128),b=t(50),m="#141414",u=Object(b.a)({palette:{common:{white:"".concat("#ffffff"),darkgrey:"".concat(m),lightgrey:"".concat("#b8b8b8"),black:"".concat("#000000")},primary:{main:"".concat(m)},secondary:{main:"".concat("#e9a320")}},typography:{tab:{fontFamily:"Poppins",fontWeight:500,fontSize:"1.2rem"},footer:{fontFamily:"Poppins",fontWeight:300,fontSize:"1rem"}},bodySection:{height:"800px"}}),O=t(10),p=t(65),x=t(88),h=t(248),f=t(80),g=t.p+"static/media/funceb.2f3cbfa3.jpg",v=t.p+"static/media/govbahialogo.4dfbdab7.jpg",y=t.p+"static/media/ufrb.59e1a3af.jpg",C=Object(x.a)((function(e){return{footer:{backgroundColor:e.palette.common.black,width:"100%",color:e.palette.common.white,marginTop:"20px"},imgfooter:Object(p.a)({borderRadius:"5%"},e.breakpoints.down("xl"),{height:"5vh"}),text:Object(O.a)(Object(O.a)({marginTop:"10vh"},e.typography.tab),{},{color:e.palette.common.white,display:"flex",marginLeft:"30px",justifyContent:"center",padding:"20vh 0 "})}}));function S(){var e=C(),a=[{name:"FUNDACAO CULTURAL ESTADO DA BAIA",src:g,xs:1,link:"http://www.fundacaocultural.ba.gov.br/"},{name:"BAHIA GOVERNO DO ESTADO",src:v,xs:1,link:"http://www.bahia.ba.gov.br/"},{name:"CECULT UFBR",src:y,xs:1,link:"https://ufrb.edu.br/cecult/"}];return Object(o.jsxs)("footer",{className:e.footer,children:[Object(o.jsxs)(h.a,{container:!0,spacing:5,justify:"center",alignItems:"center",children:[Object(o.jsx)(f.a,{variant:"h6",children:" Apoio: "}),a.map((function(a,t){return Object(o.jsx)(h.a,{item:!0,component:"a",href:"".concat(a.link),rel:"noopener noreferrer",target:"_blank",children:Object(o.jsx)("img",{className:e.imgfooter,alt:"".concat(a.src),src:a.src})},a.name)}))]}),Object(o.jsx)("div",{className:e.text,children:"Designed and built with all the love in the world by FIdev. 2021"})]})}var N=t(135),k=t.n(N),w=t(142),I=t(79),B=t(145),q=t.p+"static/media/astrogildo.bd817933.jpg",A=t.p+"static/media/eclipse.b24e5dab.jpg",F=t.p+"static/media/travessia.e805d957.jpg",z=Object(x.a)((function(e){return{container:{justifyContent:"center"},paper:{backgroundColor:e.palette.common.black},spacediv:{height:"10vh"},title:Object(O.a)(Object(O.a)({},e.typography.tab),{},{color:"white"}),divider:{backgroundColor:e.palette.secondary.main,width:"40px",height:"4px"}}}));function P(){var e=z(),a=[{codfilme:"1947",alt:"astrogildo",img:q},{codfilme:"3016",alt:"travessia",img:F},{codfilme:"1946",alt:"eclipse",img:A}];return Object(o.jsxs)("div",{className:e.paper,children:[Object(o.jsx)("div",{className:e.spacediv}),Object(o.jsxs)(B.a,{maxWidth:"lg",className:e.container,children:[Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)(k.a,{navButtonsAlwaysVisible:!0,children:a.map((function(e,a){return Object(o.jsx)(D,{item:e},a)}))})]}),Object(o.jsx)("div",{className:e.spacediv})]})}function D(e){var a=z();return Object(o.jsx)(w.a,{className:a.paper,children:Object(o.jsx)(l.b,{to:"/busquedaavancada/codfilme/".concat(e.item.codfilme),children:Object(o.jsx)(I.a,{disableRipple:!0,children:Object(o.jsx)("img",{alt:e.alt,src:e.item.img,width:"100%"})})})})}var T=t(95),E=t(96),_=t(250),L=t(143),M=t(21),U=t.n(M),R=Object(x.a)((function(e){return{root:Object(O.a)(Object(O.a)({maxWidth:"700px"},e.typography.tab),{},{padding:"2em",margin:e.spacing(10)}),divider:{backgroundColor:e.palette.secondary.main,width:"40px",height:"4px"},drawerTypo:Object(O.a)(Object(O.a)({},e.typography.tab),{},{color:"white",opacity:.6,"&:hover":{opacity:1},textTransform:"uppercase"})}}));function W(){var e=R();return Object(o.jsx)(r.a.Fragment,{children:Object(o.jsx)(B.a,{children:Object(o.jsxs)("div",{className:e.root,children:[Object(o.jsx)(f.a,{variant:"h3",gutterBottom:!0,children:"Nossas Bases"}),Object(o.jsx)("div",{className:e.divider}),Object(o.jsx)("br",{}),Object(o.jsx)(f.a,{variant:"h6",gutterBottom:!0,children:"International Federation of Film Archives (FIAF) e Filmografia Brasileira"}),Object(o.jsxs)(f.a,{variant:"body1",gutterBottom:!0,children:["Em 1980, a UNESCO lan\xe7ou a \u201cRecomenda\xe7\xe3o sobre a Salvaguarda e Conserva\xe7\xe3o das Imagens em Movimento\u201d. Uma das a\xe7\xf5es sugeridas \xe9 \u201cestabelecer e divulgar filmografias nacionais e cat\xe1logos de todas as categorias de imagens em movimento [...] procurando, quando poss\xedvel, padronizar os sistemas de cataloga\xe7\xe3o\u201d. De acordo com a \u201cRecomenda\xe7\xe3o\u201d, este invent\xe1rio constituiria a base para a\xe7\xf5es de preserva\xe7\xe3o dos acervos audiovisuais.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Tendo em mente a indica\xe7\xe3o da UNESCO, Filmografia Baiana: Mem\xf3ria Viva utiliza um sistema de cataloga\xe7\xe3o criado a partir das normas definidas pela FIAF - Federa\xe7\xe3o Internacional de Arquivos Filmogr\xe1ficos e desenvolvido em constante di\xe1logo com a Cinemateca Brasileira.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"A Cinemateca \xe9 a institui\xe7\xe3o respons\xe1vel por documentar a Filmografia Brasileira, por\xe9m, mesmo com a enorme compet\xeancia e comprometimento dos seus profissionais, n\xe3o tem possibilidade de se aprofundar em quest\xf5es eminentemente \u201cestaduais/regionais\u201d, devido \xe0 vastid\xe3o do conjunto da produ\xe7\xe3o brasileira. \xc9 justamente a\xed que entra o projeto Filmografia Baiana, acrescentando um pequeno mosaico \xe0 pesquisa do audiovisual nacional.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Isso significa que, mesmo estabelecendo pontes e di\xe1logos nacionais, caminhamos ao encontro de algumas reflex\xf5es de Jean-Claude Bernardet, em \u201cHistoriografia Cl\xe1ssica do Cinema Brasileiro\u201d. O autor nos chama a aten\xe7\xe3o para a necessidade de observar e respeitar o que ele chama de \u201critmos pr\xf3prios\u201d das produ\xe7\xf5es regionais, que n\xe3o podem ser subsumidas a uma grande narrativa nacional, na qual perdem sua especificidade e s\xe3o submetidas aos grandes eixos de produ\xe7\xe3o/reflex\xe3o. Ou seja, ao dar visibilidade \xe0s produ\xe7\xf5es baianas, tidas como \u201cperif\xe9ricas\u201d, contribu\xedmos para o enriquecimento do panorama audiovisual brasileiro.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)(f.a,{variant:"h3",gutterBottom:!0,children:"Objetivos"}),Object(o.jsx)("div",{className:e.divider}),Object(o.jsx)("br",{}),Object(o.jsxs)(f.a,{component:"span",variant:"body1",gutterBottom:!0,children:["Nossos tr\xeas principais objetivos est\xe3o intimamente interligados. S\xe3o eles:",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsxs)(T.a,{"aria-label":"objetivos",children:[Object(o.jsxs)(E.a,{children:[Object(o.jsx)(_.a,{children:Object(o.jsx)(U.a,{fontSize:"small",color:"secondary"})}),Object(o.jsx)(L.a,{primary:"Incentivar as pesquisas sobre a hist\xf3ria do cinema e v\xeddeo realizados na Bahia"})]}),Object(o.jsxs)(E.a,{children:[Object(o.jsx)(_.a,{children:Object(o.jsx)(U.a,{fontSize:"small",color:"secondary"})}),Object(o.jsx)(L.a,{primary:"Divulgar (e valorizar) a produ\xe7\xe3o audiovisual baiana"})]}),Object(o.jsxs)(E.a,{children:[Object(o.jsx)(_.a,{children:Object(o.jsx)(U.a,{fontSize:"small",color:"secondary"})}),Object(o.jsx)(L.a,{primary:"Preparar o fundamento para defini\xe7\xe3o de uma pol\xedtica de preserva\xe7\xe3o do acervo audiovisual do estado."})]})]}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),'Ao denominar a segunda etapa do projeto de "Mem\xf3ria Viva", quisemos enfatizar a import\xe2ncia de se constitu\xedrem "lugares de mem\xf3ria" para o cinema baiano, entendendo a mem\xf3ria como din\xe2mica, reinventada no contato constante com o presente e o cotidiano. Ou seja, \xe9 preciso que haja meios de registro e cataloga\xe7\xe3o das produ\xe7\xf5es baianas, para que sua hist\xf3ria possa ser contada e sua perman\xeancia na mem\xf3ria coletiva impe\xe7a o esquecimento, que compromete inclusive a exist\xeancia dos pr\xf3prios filmes.',Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"As informa\xe7\xf5es catalogadas na Filmografia Baiana podem ser usadas como base tanto para pesquisas posteriores, como tamb\xe9m para alimentar o banco de dados da Cinemateca Brasileira, melhorando, assim, a representa\xe7\xe3o baiana na hist\xf3ria do cinema do Brasil. S\xe3o parte importante do projeto o treinamento de estudantes para a documenta\xe7\xe3o filmogr\xe1fica de acordo com as normas e padr\xf5es internacionais e um levantamento de fontes sobre o audiovisual baiano (tamb\xe9m dispon\xedvel aqui). Todas as fontes utilizadas est\xe3o devidamente creditadas nas p\xe1ginas dos filmes.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Al\xe9m de servir como base para pesquisas e preserva\xe7\xe3o, o site do projeto \xe9 tamb\xe9m um meio eficiente para a difus\xe3o do audiovisual baiano. A utiliza\xe7\xe3o de um banco de dados (que pode ser permanentemente atualizado e absorver tanto os resultados de pesquisas posteriores como tamb\xe9m as futuras produ\xe7\xf5es de cinema e v\xeddeo) e da Internet (pela sua crescente acessibilidade) devem ser vistos neste contexto. Atrav\xe9s do sistema de buscas do site, as informa\xe7\xf5es sobre a produ\xe7\xe3o audiovisual da Bahia estar\xe3o facilmente dispon\xedveis para os interessados.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)(f.a,{variant:"h3",gutterBottom:!0,children:"Equipe"}),Object(o.jsx)("div",{className:e.divider}),Object(o.jsx)("br",{}),Object(o.jsxs)(f.a,{component:"span",variant:"body1",gutterBottom:!0,children:[Object(o.jsx)("b",{children:"Concep\xe7\xe3o e coordena\xe7\xe3o:"})," Laura Bezerra",Object(o.jsx)("br",{}),Object(o.jsx)("b",{children:"Pesquisadoras: :"}),Object(o.jsx)("br",{}),Object(o.jsxs)(T.a,{"aria-label":"Pesquisadoras",children:[Object(o.jsxs)(E.a,{children:[Object(o.jsx)(_.a,{children:Object(o.jsx)(U.a,{fontSize:"small",color:"secondary"})}),Object(o.jsx)(L.a,{primary:"Laura Bezerra, prof. do Centro de Cultura, Linguagens e Tecnologias Aplicadas - CECULT/UFRB."})]}),Object(o.jsxs)(E.a,{children:[Object(o.jsx)(_.a,{children:Object(o.jsx)(U.a,{fontSize:"small",color:"secondary"})}),Object(o.jsx)(L.a,{primary:"Izabel Melo,  prof. da Universidade do Estado da Bahia - UNEB."})]}),Object(o.jsxs)(E.a,{children:[Object(o.jsx)(_.a,{children:Object(o.jsx)(U.a,{fontSize:"small",color:"secondary"})}),Object(o.jsx)(L.a,{primary:"Gabriel Pires, NordesteLab (pesquisador associado)."})]})]}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("b",{children:"Pesquisadoras: :"}),Object(o.jsx)("br",{}),Object(o.jsxs)(T.a,{"aria-label":"estudantes",children:[Object(o.jsxs)(E.a,{children:[Object(o.jsx)(_.a,{children:Object(o.jsx)(U.a,{fontSize:"small",color:"secondary"})}),Object(o.jsx)(L.a,{primary:"Joanderson Santos (BICULT/UFRB, Santo Amaro)."})]}),Object(o.jsxs)(E.a,{children:[Object(o.jsx)(_.a,{children:Object(o.jsx)(U.a,{fontSize:"small",color:"secondary"})}),Object(o.jsx)(L.a,{primary:"heila Ara\xfajo (BICULT/UFRB, Santo Amaro)."})]}),Object(o.jsxs)(E.a,{children:[Object(o.jsx)(_.a,{children:Object(o.jsx)(U.a,{fontSize:"small",color:"secondary"})}),Object(o.jsx)(L.a,{primary:"Iago Ribeiro (Cinema e Audiovisual/UFRB, Cachoeira)."})]})]}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("b",{children:"Banco de dados:"})," Jo\xe3o Paulo Coelho",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("b",{children:"Projeto gr\xe1fico:"})," Fernanda Andrade",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("b",{children:"Assessorai de Comunica\xe7\xe3o:"})," Priscila Mendes e Shagaly Ferreira",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})})})}var V=Object(x.a)((function(e){return{root:Object(O.a)(Object(O.a)({maxWidth:"700px"},e.typography.tab),{},{padding:"2em"}),drawerTypo:Object(O.a)(Object(O.a)({},e.typography.tab),{},{color:"white",opacity:.6,"&:hover":{opacity:1},textTransform:"uppercase"}),divider:{backgroundColor:e.palette.secondary.main,width:"40px",height:"4px"}}}));function G(){var e=V();return Object(o.jsx)(r.a.Fragment,{children:Object(o.jsx)(B.a,{children:Object(o.jsxs)("div",{className:e.root,children:[Object(o.jsx)(f.a,{variant:"h3",gutterBottom:!0,children:"O que \xe9 um filme baiano?"}),Object(o.jsx)("div",{className:e.divider}),Object(o.jsx)("br",{}),Object(o.jsxs)(f.a,{component:"span",variant:"body1",gutterBottom:!0,children:["Os crit\xe9rios para inclus\xe3o de produ\xe7\xf5es audiovisuais no projeto Filmografia Baiana s\xe3o:",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsxs)(T.a,{"aria-label":"objetivos",children:[Object(o.jsxs)(E.a,{children:[Object(o.jsx)(_.a,{children:Object(o.jsx)(U.a,{fontSize:"small",color:"secondary"})}),Object(o.jsx)(L.a,{primary:"Ter sido realizado por companhias produtoras (ou produtores) radicadas na Bahia"})]}),Object(o.jsxs)(E.a,{children:[Object(o.jsx)(_.a,{children:Object(o.jsx)(U.a,{fontSize:"small",color:"secondary"})}),Object(o.jsx)(L.a,{primary:"Ter sido realizado por companhias produtoras (ou produtores) radicadas na Bahia"})]})]}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Ser\xe3o documentados produtos audiovisuais, independente do:",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsxs)(T.a,{"aria-label":"objetivos",children:[Object(o.jsxs)(E.a,{children:[Object(o.jsx)(_.a,{children:Object(o.jsx)(U.a,{fontSize:"small",color:"secondary"})}),Object(o.jsx)(L.a,{primary:"suporte (35mm, 16mm, Super-8, v\xeddeo, formatos digitais etc.)"})]}),Object(o.jsxs)(E.a,{children:[Object(o.jsx)(_.a,{children:Object(o.jsx)(U.a,{fontSize:"small",color:"secondary"})}),Object(o.jsx)(L.a,{primary:"g\xeanero (fic\xe7\xe3o, n\xe3o-fic\xe7\xe3o, experimental, anima\xe7\xe3o, cine-jornal etc.)"})]}),Object(o.jsxs)(E.a,{children:[Object(o.jsx)(_.a,{children:Object(o.jsx)(U.a,{fontSize:"small",color:"secondary"})}),Object(o.jsx)(L.a,{primary:"dura\xe7\xe3o (curtas e longas-metragens)"})]}),Object(o.jsxs)(E.a,{children:[Object(o.jsx)(_.a,{children:Object(o.jsx)(U.a,{fontSize:"small",color:"secondary"})}),Object(o.jsx)(L.a,{primary:"valor art\xedstico e/ou comercial. "})]})]}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("b",{children:"N\xe3o est\xe3o inclu\xeddos:"})," filmes institucionais, trabalhos de publicidade e telejornalismo, bem como a produ\xe7\xe3o audiovisual dom\xe9stica. Consideramos que videoarte, videoclipes ou os chamados \u201cTV movie\u201d fazem parte da Filmografia Baiana, mas n\xe3o realizamos uma pesquisa espec\xedfica para localiz\xe1-los e catalog\xe1-los. Uma etapa posterior do projeto dar\xe1 conta dessas produ\xe7\xf5es.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("b",{children:"Quem define o que \xe9 um filme baiano?"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Somos muitas vezes questionados sobre o que seria um filme \u201cbaiano\u201d. Filmes de diretores baianos? Filmes rodados na Bahia? Filmes de \u201ctem\xe1tica baiana\u201d? Este seria um campo vasto de discuss\xe3o, se pensamos em quest\xf5es identit\xe1rias. Mas o foco do nosso trabalho \xe9 a documenta\xe7\xe3o filmogr\xe1fica \u2013 an\xe1loga \xe0 documenta\xe7\xe3o bibliogr\xe1fica \u2013 e, neste contexto, a padroniza\xe7\xe3o de crit\xe9rios de cataloga\xe7\xe3o \xe9 fundamental.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"No seu \u201cGloss\xe1rio de termos filmogr\xe1ficos\u201d, a FIAF \u2013 Federa\xe7\xe3o Internacional de Arquivos Filmogr\xe1ficos determina os identificadores b\xe1sicos de um filme e entre eles encontramos o \u201cPa\xeds de origem, nacionalidade de origem\u201d, definido como: \u201cPa\xeds no qual est\xe1 domiciliada a empresa ou pessoa que produz um filme. No caso de uma co-produ\xe7\xe3o internacional, devem ser enumerados todos os pa\xedses participantes.\u201d \xc9 esta defini\xe7\xe3o, utilizada na Filmografia Brasileira, que adotamos no projeto Filmografia Baiana.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Em casos onde n\xe3o existam defini\xe7\xf5es aceitas por todos, procuramos seguir a Cinemateca Brasileira. Por exemplo, assim como na Filmografia Brasileira, s\xf3 classificamos os filmes como curtas (at\xe9 59\u2019) ou longas (a partir de 60\u2019)."]})]})})})}var J=t(77),Q=t(12),H=t(251),K=t(263),X=t(58),Y=t(261),Z=t(72),$=t(256),ee=t(139),ae=t.n(ee),te=t(140),oe=t.n(te),ce=t(57),re=t.n(ce);function se(e){return Object(o.jsxs)(H.a,{variant:"outlined",children:[Object(o.jsx)(K.a,{id:e.InitialData.label,children:e.InitialData.label}),Object(o.jsx)(Y.a,{labelId:e.InitialData.label,id:"select-".concat(e.InitialData.label),label:e.InitialData.label,onChange:function(a){return e.clicked(a.target.value)},value:e.currentValue,children:e.InitialData.values.map((function(a){return Object(o.jsx)(X.a,{value:a[Object.keys(e.InitialData.values[0])[0]],children:a[Object.keys(e.InitialData.values[0])[0]]},a[Object.keys(e.InitialData.values[0])[0]])}))})]})}var ne=t(265),ie=function(e){return Object(o.jsx)("div",{children:Object(o.jsx)(ne.a,{id:"".concat(e.name),label:e.label,type:"search",variant:"outlined",onChange:function(a){e.clicked(a.target.value)}})})},le=t(94),je=t.n(le),de=t(136),be=t(98),me=t(258),ue=t(260),Oe=t(255),pe=t(257),xe=t(259),he=t(254),fe=t(138),ge=t.n(fe),ve=t(137),ye=t.n(ve),Ce=Object(x.a)((function(e){return{root:{"& > *":{borderBottom:"unset"}},divMoreInfo:{display:"flex",flexWrap:"wrap",backgroundColor:e.palette.secondary.main},celldiv:{margin:e.spacing(1),minWidth:450}}}));function Se(e){var a=Ce(),t=e.row,c=r.a.useState(!1),s=Object(Q.a)(c,2),n=s[0],i=s[1],l=r.a.useState(null),j=Object(Q.a)(l,2),d=j[0],b=j[1],m=function(){var e=Object(de.a)(je.a.mark((function e(a){var t;return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re.a.get("".concat("https://cine-baiano.herokuapp.com","/api/aboutfilme"),{params:{cod_filme:a}});case 2:t=e.sent,b(t.data);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(o.jsxs)(r.a.Fragment,{children:[Object(o.jsxs)(he.a,{className:a.root,children:[Object(o.jsx)(Oe.a,{children:Object(o.jsx)(Z.a,{"aria-label":"expand row",size:"small",onClick:function(){return m(t.cod_filme),i(!n)},children:n?Object(o.jsx)(ye.a,{}):Object(o.jsx)(ge.a,{})})}),Object(o.jsx)(Oe.a,{component:"th",scope:"row",children:Object(o.jsxs)("b",{children:[t.Nome," (",t.Ano,")"]})}),Object(o.jsx)(Oe.a,{align:"right",children:t.Genero}),Object(o.jsx)(Oe.a,{align:"right",children:t.Metragem}),Object(o.jsx)(Oe.a,{align:"right",children:t.Origem}),Object(o.jsx)(Oe.a,{align:"right",children:t.Director})]}),Object(o.jsx)(he.a,{children:Object(o.jsx)(Oe.a,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:Object(o.jsx)($.a,{in:n,timeout:"auto",unmountOnExit:!0,children:Object(o.jsx)(be.a,{margin:1,children:d?Object(o.jsxs)(w.a,{className:a.divMoreInfo,children:[d[0].Ano_Lancamento?Object(o.jsxs)("div",{className:a.celldiv,children:[Object(o.jsx)("b",{children:"Ano Lan\u04abamento: "})," ",d[0].Ano_Lancamento]}):null,d[0].Ano_Producao?Object(o.jsxs)("div",{className:a.celldiv,children:[Object(o.jsx)("b",{children:"Ano Prudu\u04abao: "})," ",d[0].Ano_Producao]}):null,d[0].Estreia?Object(o.jsxs)("div",{className:a.celldiv,children:[Object(o.jsx)("b",{children:"Ano Estr\xe9ia: "})," ",d[0].Ano_Estreia]}):null,d[0].Locacao?Object(o.jsxs)("div",{className:a.celldiv,children:[Object(o.jsx)("b",{children:"Loca\u04aboes: "})," ",d[0].Locacao]}):null,d.map((function(e,t){return Object(o.jsxs)("div",{className:a.celldiv,children:[Object(o.jsxs)("b",{children:[e.des_subcategoria,": "]})," ",e.des_pessoa]},"".concat(e.des_subcategoria).concat(e.des_pessoa).concat(t))}))]}):Object(o.jsx)("h1",{children:"Loading"})})})})})]})}function Ne(e){var a=e.listaFiltrada;return Object(o.jsx)(pe.a,{component:w.a,children:a?Object(o.jsxs)(me.a,{"aria-label":"collapsible table",children:[Object(o.jsx)(xe.a,{children:Object(o.jsxs)(he.a,{children:[Object(o.jsx)(Oe.a,{}),Object(o.jsx)(Oe.a,{children:"Nome"}),Object(o.jsx)(Oe.a,{align:"right",children:"Genero"}),Object(o.jsx)(Oe.a,{align:"right",children:"Metragem"}),Object(o.jsx)(Oe.a,{align:"right",children:"Origem"}),Object(o.jsx)(Oe.a,{align:"right",children:"Direcao"})]})}),Object(o.jsx)(ue.a,{children:a.map((function(e,a){return Object(o.jsx)(Se,{row:e},"".concat(e.nome).concat(a))}))})]}):null})}var ke="https://cine-baiano.herokuapp.com",we=Object(x.a)((function(e){return{title:Object(O.a)(Object(O.a)({},e.typography.tab),{},{display:"flex",marginTop:"1em",marginLeft:"30px"}),formControl:{margin:e.spacing(2),minWidth:170},moreIcon:{display:"flex",justifyContent:"center"}}}));function Ie(e){var a=we(),t=e.match.params,r=Object(c.useState)(""),s=Object(Q.a)(r,2),n=s[0],i=s[1],l=Object(c.useState)(""),j=Object(Q.a)(l,2),d=j[0],b=j[1],m=Object(c.useState)(""),u=Object(Q.a)(m,2),p=u[0],x=u[1],h=Object(c.useState)(""),f=Object(Q.a)(h,2),g=f[0],v=f[1],y=Object(c.useState)(""),C=Object(Q.a)(y,2),S=C[0],N=C[1],k=Object(c.useState)(""),w=Object(Q.a)(k,2),q=w[0],A=w[1],F=Object(c.useState)(""),z=Object(Q.a)(F,2),P=z[0],D=z[1],T=Object(c.useState)(""),E=Object(Q.a)(T,2),_=E[0],L=E[1],M=Object(c.useState)(""),U=Object(Q.a)(M,2),R=U[0],W=U[1],V=Object(c.useState)(""),G=Object(Q.a)(V,2),ee=G[0],te=G[1],ce=Object(c.useState)(""),ne=Object(Q.a)(ce,2),le=ne[0],je=ne[1],de=Object(c.useState)(""),be=Object(Q.a)(de,2),me=be[0],ue=be[1],Oe=Object(c.useState)(""),pe=Object(Q.a)(Oe,2),xe=pe[0],he=pe[1],fe=Object(c.useState)("%"),ge=Object(Q.a)(fe,1)[0],ve=Object(c.useState)(null),ye=Object(Q.a)(ve,2),Ce=ye[0],Se=ye[1],Ie=Object(c.useState)(null),Be=Object(Q.a)(Ie,2),qe=Be[0],Ae=Be[1],Fe=Object(c.useState)(!1),ze=Object(Q.a)(Fe,2),Pe=ze[0],De=ze[1],Te=function(e){re.a.get("".concat(ke,"/api/advancedsearch"),{params:e}).then((function(e){console.log(e),Ae(e.data)}))};Object(c.useEffect)((function(){re.a.get("".concat(ke,"/api/initialData")).then((function(e){return Se(Ee(e.data))}))}),[]);var Ee=function(e){var a=[{des_genero_filme:""}].concat(Object(J.a)(e.generoFilme.values)),t=[{des_tipo_metragem:""}].concat(Object(J.a)(e.tipoMetragem.values)),o=[{des_tipo_suporte:""}].concat(Object(J.a)(e.tipoSoporte.values)),c=Object(O.a)({},e);return c.generoFilme.values=a,c.tipoMetragem.values=t,c.tipoSoporte.values=o,c};return Object(c.useEffect)((function(){var e={sinopse:"",observacao:"",fontes:"",origem:"",pessoasempresas:"",peb:"",colorido:"",ano:"",nome:"",cinemamudo:"",genero:"",metragem:"",soporte:"",codfilme:"%"};switch(t.pathParam1){case"Nome":return e.nome=t.pathParam2,Te(e);case"Ano":return e.ano=t.pathParam2,Te(e);case"Diretor":case"Sinopse":return e.pessoasempresas=t.pathParam2,Te(e);case"codfilme":return e.codfilme=t.pathParam2,Te(e)}}),[t.pathParam1,t.pathParam2]),Object(o.jsxs)(B.a,{children:[Object(o.jsx)("div",{className:a.title,children:" Busqueda Avan\xe7ada"}),Object(o.jsxs)("div",{children:[Object(o.jsx)(H.a,{className:a.formControl,children:Object(o.jsx)(ie,{label:"Nome Do Filme",name:"querybyname",clicked:function(e){return i(e)}})}),Object(o.jsx)(H.a,{className:a.formControl,children:Object(o.jsx)(ie,{label:"Ano",name:"ano_lancamento",clicked:A})}),Ce?Object(o.jsx)(H.a,{className:a.formControl,children:Object(o.jsx)(se,{InitialData:Ce.generoFilme,currentValue:p,clicked:function(e){return x(e)}})}):Object(o.jsx)("p",{children:"Cargando..."}),Ce?Object(o.jsx)(H.a,{className:a.formControl,children:Object(o.jsx)(se,{InitialData:Ce.tipoMetragem,currentValue:g,clicked:function(e){return v(e)}})}):Object(o.jsx)("p",{children:"Cargando..."}),Object(o.jsx)(H.a,{className:a.formControl,children:Object(o.jsx)(ie,{label:"Origem",name:"origem",clicked:te})})]}),Object(o.jsx)("div",{className:a.moreIcon,children:Object(o.jsxs)(Z.a,{disableRipple:!0,"aria-label":"expand row",size:"small",onClick:function(){return De(!Pe)},children:[Pe?Object(o.jsx)(ae.a,{color:"secondary"}):Object(o.jsx)(oe.a,{color:"secondary"}),Pe?Object(o.jsxs)("p",{children:["\xa0",Object(o.jsx)("b",{children:"Menos opcoes de busqueda."})]}):Object(o.jsxs)("p",{children:["\xa0",Object(o.jsx)("b",{children:"Mais opcoes de busqueda."})]})]})}),Object(o.jsx)("div",{children:Object(o.jsxs)($.a,{in:Pe,timeout:"auto",unmountOnExit:!0,children:[Object(o.jsxs)(H.a,{className:a.formControl,variant:"outlined",children:[Object(o.jsx)(K.a,{id:"demo-simple-select-outlined-label",children:"Cinema Mudo"}),Object(o.jsxs)(Y.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",label:"Cinema Mudo",value:d,onChange:function(e){return b(e.target.value)},children:[Object(o.jsx)(X.a,{value:"S",children:"Sem"}),Object(o.jsx)(X.a,{value:"N",children:"Nao"})]})]}),Ce?Object(o.jsx)(H.a,{className:a.formControl,children:Object(o.jsx)(se,{InitialData:Ce.tipoSoporte,currentValue:S,clicked:function(e){return N(e)}})}):Object(o.jsx)("p",{children:"Cargando..."}),Object(o.jsxs)(H.a,{className:a.formControl,variant:"outlined",children:[Object(o.jsx)(K.a,{id:"colorido",children:"Colorido"}),Object(o.jsxs)(Y.a,{labelId:"colorido",id:"select-colorido",label:"Colorido",value:P,onChange:function(e){return D(e.target.value)},children:[Object(o.jsx)(X.a,{value:"S",children:"Sem"}),Object(o.jsx)(X.a,{value:"N",children:"Nao"})]})]}),Object(o.jsxs)(H.a,{className:a.formControl,variant:"outlined",children:[Object(o.jsx)(K.a,{id:"pyb",children:"Preto e Branco"}),Object(o.jsxs)(Y.a,{labelId:"pyb",id:"select-pyb",label:"Petro e Branco",value:_,onChange:function(e){return L(e.target.value)},children:[Object(o.jsx)(X.a,{value:"S",children:"Sem"}),Object(o.jsx)(X.a,{value:"N",children:"Nao"})]})]}),Object(o.jsx)(H.a,{className:a.formControl,children:Object(o.jsx)(ie,{label:"Pessoas/Empresas",name:"pessoas_empresas",clicked:W})}),Object(o.jsx)(H.a,{className:a.formControl,children:Object(o.jsx)(ie,{label:"Fontes",name:"fontes",clicked:je})}),Object(o.jsx)(H.a,{className:a.formControl,children:Object(o.jsx)(ie,{label:"Observa\xe7ao",name:"observacao",clicked:ue})}),Object(o.jsx)(H.a,{className:a.formControl,children:Object(o.jsx)(ie,{label:"Sinopse",name:"sinopse",clicked:he})})]})}),Object(o.jsx)("div",{className:a.moreIcon,children:Object(o.jsx)(I.a,{className:a.formControl,onClick:function(){return Ae(null),Te({sinopse:xe,observacao:me,fontes:le,origem:ee,pessoasempresas:R,peb:_,colorido:P,ano:q,nome:n,cinemamudo:d,genero:p,metragem:g,soporte:S,codfilme:ge})},variant:"contained",color:"secondary",children:"Buscar"})}),Object(o.jsx)(Ne,{listaFiltrada:qe})]})}var Be=function(){return Object(o.jsx)(i.a,{theme:u,children:Object(o.jsxs)(l.a,{children:[Object(o.jsx)(d.a,{}),Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{exact:!0,path:"/home",component:P}),Object(o.jsx)(j.a,{exact:!0,path:"/quemsomos",component:W}),Object(o.jsx)(j.a,{exact:!0,path:"/filmebaiano",component:G}),Object(o.jsx)(j.a,{exact:!0,path:"/busquedaavancada/:pathParam1?/:pathParam2?",component:Ie})]}),Object(o.jsx)(S,{})]})})};n.a.render(Object(o.jsx)(Be,{}),document.getElementById("root"))},89:function(e,a,t){"use strict";t.d(a,"a",(function(){return k}));var o=t(10),c=t(12),r=t(1),s=t(0),n=t.n(s),i=t(88),l=t(73),j=t.n(l),d=t(58),b=t(72),m=t(100),u=t(79),O=t(142),p=t(213),x=t(212),h=t(214),f=t(97),g=t(132),v=t.n(g),y=t(27),C=t(15),S=t(210),N=Object(i.a)((function(e){return{root:{display:"flex",alignItems:"center"},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10}}}));function k(){var e=Object(C.f)(),a=N(),t=Object(s.useState)(null),i=Object(c.a)(t,2),l=i[0],g=i[1],k=n.a.useState(!1),w=Object(c.a)(k,2),I=w[0],B=w[1],q=Object(s.useState)("Nome"),A=Object(c.a)(q,2),F=A[0],z=A[1],P=n.a.useRef(null),D=function(e){P.current&&P.current.contains(e.target)||B(!1)},T=function(e){P.current&&P.current.contains(e.target)||(B(!1),z("Nome"))},E=function(e){P.current&&P.current.contains(e.target)||(B(!1),z("Ano"))},_=function(e){P.current&&P.current.contains(e.target)||(B(!1),z("Diretor"))},L=function(e){P.current&&P.current.contains(e.target)||(B(!1),z("Sinopse"))},M=function(e){P.current&&P.current.contains(e.target)||B(!1)};function U(e){"Tab"===e.key&&(e.preventDefault(),B(!1))}return Object(r.jsxs)("div",{className:a.root,children:[Object(r.jsxs)("div",{children:[Object(r.jsxs)(u.a,{ref:P,"aria-controls":I?"menu-list-grow":void 0,"aria-haspopup":"true",onClick:function(){B((function(e){return!e}))},children:[F,Object(r.jsx)(v.a,{})]}),Object(r.jsx)(S.a,{open:I,anchorEl:P.current,role:void 0,transition:!0,disablePortal:!0,children:function(e){var a=e.TransitionProps,t=e.placement;return Object(r.jsx)(x.a,Object(o.a)(Object(o.a)({},a),{},{style:{transformOrigin:"bottom"===t?"center top":"center bottom"},children:Object(r.jsx)(O.a,{children:Object(r.jsx)(p.a,{onClickAway:D,children:Object(r.jsxs)(h.a,{autoFocusItem:I,id:"menu-list-grow",onKeyDown:U,children:[Object(r.jsx)(d.a,{onClick:T,children:"Nome"}),Object(r.jsx)(d.a,{onClick:E,children:"Ano"}),Object(r.jsx)(d.a,{onClick:_,children:"Diretor"}),Object(r.jsx)(d.a,{onClick:L,children:"Sinopse"}),Object(r.jsx)(f.a,{}),Object(r.jsx)(y.b,{to:"/busquedaavancada",style:{textDecoration:"none",color:"inherit"},variant:"body2",children:Object(r.jsx)(d.a,{onClick:M,children:"BUSQUEDA AVAN\xc7ADA"})})]})})})}))}})]}),Object(r.jsx)(f.a,{orientation:"vertical",flexItem:!0}),Object(r.jsx)(m.a,{className:a.input,placeholder:"Pesquisar Filme",inputProps:{"aria-label":"search google maps"},onChange:function(e){return g(e.target.value)},onKeyDown:function(a){"Enter"===a.key&&e.push("/busquedaavancada/".concat(F,"/").concat(l))}}),Object(r.jsx)(f.a,{orientation:"vertical",flexItem:!0}),Object(r.jsx)(b.a,{type:"submit",className:a.iconButton,"aria-label":"search",component:y.b,to:"/busquedaavancada/".concat(F,"/").concat(l),children:Object(r.jsx)(j.a,{})})]})}}},[[206,1,2]]]);
//# sourceMappingURL=main.22a9c7c4.chunk.js.map