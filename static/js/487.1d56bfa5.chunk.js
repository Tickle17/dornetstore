"use strict";(self.webpackChunkdornet_shop=self.webpackChunkdornet_shop||[]).push([[487],{7626:function(e,t,n){n.r(t),n.d(t,{default:function(){return ae}});var s=n(9439),r=n(8971),a=n.p+"static/media/index.fd7506214e0f202c2550.png",i=n(4165),c=n(5861),o=n(1243),l=n(2791),d=n(184);function A(e){var t=e.autorized,n=e.registration,a=(0,l.useState)(""),i=(0,s.Z)(a,2),c=i[0],o=i[1],A=(0,l.useState)(""),u=(0,s.Z)(A,2),p=u[0],x=u[1];return(0,d.jsxs)(r.ZP,{container:!0,spacing:2,style:{justifyContent:"center"},children:[(0,d.jsxs)(r.ZP,{container:!0,spacing:1,item:!0,xs:12,children:[(0,d.jsx)(r.ZP,{item:!0,xs:12,children:(0,d.jsx)("div",{children:"Username:"})}),(0,d.jsx)(r.ZP,{item:!0,xs:12,children:(0,d.jsx)("input",{onChange:function(e){return o(e.target.value)},type:"text",id:"username",name:"username",className:"inputModal"})})]}),(0,d.jsxs)(r.ZP,{container:!0,spacing:1,item:!0,xs:12,children:[(0,d.jsx)(r.ZP,{item:!0,xs:12,children:(0,d.jsx)("div",{htmlFor:"pass",children:"Password:"})}),(0,d.jsx)(r.ZP,{item:!0,xs:12,children:(0,d.jsx)("input",{onChange:function(e){return x(e.target.value)},type:"password",id:"pass",name:"password",className:"inputModal"})})]}),(0,d.jsxs)(r.ZP,{container:!0,spacing:2,item:!0,xs:12,children:[(0,d.jsx)(r.ZP,{item:!0,xs:6,textAlign:"right",children:(0,d.jsx)("button",{className:"headerButton",onClick:function(e){e.preventDefault(),t(c,p)},children:(0,d.jsx)("input",{type:"submit",value:"Login"})})}),(0,d.jsx)(r.ZP,{item:!0,xs:6,textAlign:"left",children:(0,d.jsx)("button",{className:"headerButton",onClick:function(e){e.preventDefault(),n(c,p)},children:(0,d.jsx)("input",{type:"submit",value:"Sign in"})})})]})]})}function u(e){var t=e.show?"modal display-block":"modal display-none",n=(0,l.useState)(""),r=(0,s.Z)(n,2),a=r[0],u=r[1],p=(0,l.useState)(!1),x=(0,s.Z)(p,2),g=x[0],h=x[1];function m(){return m=(0,c.Z)((0,i.Z)().mark((function t(n,s){var r;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.post("https://dornetshop.ru:5001/auth/login",{username:n,password:s});case 3:r=t.sent,localStorage.setItem("token",r.data.token),localStorage.setItem("username",r.data.username),e.setIsAuthenticated(!0),e.closeModal(),t.next=16;break;case 10:t.prev=10,t.t0=t.catch(0),h(!0),u(t.t0.response.data.message),setTimeout((function(){h(!1)}),2e3),console.log("".concat(t.t0.response.data.message));case 16:case"end":return t.stop()}}),t,null,[[0,10]])}))),m.apply(this,arguments)}function k(){return k=(0,c.Z)((0,i.Z)().mark((function t(n,s){var r;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.post("https://dornetshop.ru:5001/auth/registration",{username:n,password:s});case 3:r=t.sent,localStorage.setItem("token",r.data.token),localStorage.setItem("username",r.data.username),e.setIsAuthenticated(!0),e.closeModal(),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])}))),k.apply(this,arguments)}return(0,d.jsx)("div",{className:t,children:(0,d.jsxs)("div",{className:"modal-main",children:[(0,d.jsx)("div",{style:{display:"block"},children:(0,d.jsxs)("div",{className:"burger",onClick:e.closeModal,children:[(0,d.jsx)("span",{className:"line1"}),(0,d.jsx)("span",{className:"line2"})]})}),(0,d.jsx)(A,{autorized:function(e,t){!function(e,t){m.apply(this,arguments)}(e,t)},registration:function(e,t){!function(e,t){k.apply(this,arguments)}(e,t)}}),(0,d.jsx)("div",{className:g?"warningMessageActive":"warningMessageNone",children:a})]})})}function p(e){var t=e.logOut;return(0,d.jsx)(r.ZP,{item:!0,xs:12,style:{justifyContent:"center"},children:(0,d.jsx)("button",{className:"headerButton",onClick:t,children:(0,d.jsx)("input",{type:"submit",value:"Log out"})})})}var x=n(4805),g=n(7689),h=n(1087);function m(e){var t=e.IsAuthenticate,n=e.logOut,a=e.handleOpen,i=(0,l.useState)(!1),c=(0,s.Z)(i,2),o=c[0],A=c[1],u=function(){A(!o)};return(0,d.jsxs)(r.ZP,{children:[(0,d.jsx)(r.ZP,{children:(0,d.jsxs)("button",{className:"hamburger-button ".concat(o?"open":""),onClick:u,children:[(0,d.jsx)("span",{className:"line line-1"}),(0,d.jsx)("span",{className:"line line-2"}),(0,d.jsx)("span",{className:"line line-3"})]})}),(0,d.jsx)("div",{className:"sidebar ".concat(o?"open":""),children:(0,d.jsxs)("ul",{children:[(0,d.jsx)(h.OL,{to:"/dornetstore",className:"nav-link",children:(0,d.jsx)("li",{onClick:u,children:"\u041c\u0435\u0440\u0447"})}),(0,d.jsx)(h.OL,{to:"/delivery",className:"nav-link",children:(0,d.jsx)("li",{onClick:u,children:"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430"})}),t?(0,d.jsxs)("div",{children:[(0,d.jsx)(h.OL,{to:"/profile",className:"nav-link",children:(0,d.jsx)("li",{onClick:u,children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"})}),(0,d.jsx)("li",{onClick:u,children:(0,d.jsx)(p,{logOut:n})})]}):(0,d.jsx)("button",{className:"headerButton",style:{marginTop:"50px"},onClick:a,children:"\u0412\u043e\u0439\u0442\u0438"})]})})]})}function k(e){var t=e.IsAuthenticate,n=e.setIsAuthenticated,i=(0,x.useMediaQuery)({minWidth:"1181px"}),c=(0,l.useState)(!1),o=(0,s.Z)(c,2),A=o[0],k=o[1],j=function(){k(!0)},f=(0,g.s0)();function S(){localStorage.removeItem("token"),localStorage.removeItem("username"),n(!1),f("/dornetstore")}return(0,d.jsxs)("div",{children:[(0,d.jsx)(r.ZP,{container:!0,className:"headerBG",children:(0,d.jsxs)(r.ZP,{container:!0,className:"header",justifyContent:"space-between",children:[(0,d.jsx)(r.ZP,{item:!0,xs:10,sm:9,md:3,className:"logo",children:(0,d.jsx)(h.OL,{to:"/dornetstore",className:"nav-link",children:(0,d.jsx)("img",{src:a,alt:"logo",style:{cursor:"pointer"}})})}),i?(0,d.jsxs)(r.ZP,{container:!0,item:!0,md:9,alignItems:"center",justifyContent:"space-between",children:[(0,d.jsxs)(r.ZP,{item:!0,sm:6,className:"headerMenu",children:[(0,d.jsx)(h.OL,{to:"/dornetstore",className:"nav-link",children:(0,d.jsx)("li",{children:"\u041c\u0435\u0440\u0447"})}),(0,d.jsx)(h.OL,{to:"/delivery",className:"nav-link",children:(0,d.jsx)("li",{children:"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430"})})]}),(0,d.jsx)(r.ZP,{container:!0,item:!0,sm:6,alignItems:"center",children:t?(0,d.jsxs)(r.ZP,{container:!0,item:!0,xs:12,md:12,alignItems:"center",justifyContent:"flex-end",children:[(0,d.jsx)(r.ZP,{item:!0,xs:4,className:"headerMenu",children:(0,d.jsx)(h.OL,{to:"/basket",className:"nav-link",children:(0,d.jsx)("li",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"})})}),(0,d.jsx)(r.ZP,{item:!0,xs:4,className:"headerMenu",children:(0,d.jsx)(h.OL,{to:"/profile",className:"nav-link",children:(0,d.jsx)("li",{children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"})})}),(0,d.jsx)(r.ZP,{item:!0,xs:4,children:(0,d.jsx)(p,{logOut:S})})]}):(0,d.jsx)(r.ZP,{item:!0,xs:12,container:!0,justifyContent:"flex-end",children:(0,d.jsx)(r.ZP,{children:(0,d.jsx)("button",{className:"headerButton",onClick:j,children:"\u0412\u043e\u0439\u0442\u0438"})})})})]}):(0,d.jsx)(r.ZP,{item:!0,xs:2,sm:1,style:{overflow:"hidden"},children:(0,d.jsx)(m,{IsAuthenticate:t,logOut:S,handleOpen:j})})]})}),(0,d.jsx)(u,{show:A,closeModal:function(){k(!1)},IsAuthenticate:t,setIsAuthenticated:n})]})}var j=n(4942),f=n.p+"static/media/Google.510356691f4b32155309.png",S=n.p+"static/media/AppStore.31184fa5941fe6da6c82.png",w=n.p+"static/media/AppGalery.f082c6fc290d075053b1.png",B=(0,n(3457).Z)(r.ZP)((function(e){var t=e.theme;return(0,j.Z)({},t.breakpoints.up("md"),{marginLeft:"-20px"})}));function v(){return(0,d.jsx)("div",{className:"futterBG",children:(0,d.jsxs)(r.ZP,{container:!0,className:"footer",children:[(0,d.jsxs)(r.ZP,{item:!0,xs:6,sm:4,style:{textAlign:"left"},children:[(0,d.jsx)(h.OL,{to:"/dornetstore",className:"nav-link",children:(0,d.jsx)("img",{src:a,alt:"logo",style:{cursor:"pointer"}})}),(0,d.jsxs)(r.ZP,{container:!0,rowSpacing:1,style:{padding:"15px 0px"},children:[(0,d.jsx)(r.ZP,{item:!0,xs:10,md:6,children:(0,d.jsx)("img",{src:f,alt:"logo",style:{cursor:"pointer"}})}),(0,d.jsx)(B,{item:!0,xs:10,md:6,children:(0,d.jsx)("img",{src:S,alt:"logo",style:{cursor:"pointer"}})}),(0,d.jsx)(r.ZP,{item:!0,xs:10,md:6,children:(0,d.jsx)("img",{src:w,alt:"logo",style:{cursor:"pointer"}})})]}),(0,d.jsxs)(r.ZP,{container:!0,spacing:1,children:[(0,d.jsx)(r.ZP,{item:!0,xs:12,style:{fontWeight:"bold",fontSize:"20px"},children:"8 (800) 555-61-70"}),(0,d.jsx)(r.ZP,{item:!0,xs:12,style:{opacity:"0.2"},children:"\xa9 2015\u20142023 \u0414\u043e\u0440\u043e\u0436\u043d\u0430\u044f \u0421\u0435\u0442\u044c"}),(0,d.jsx)(r.ZP,{item:!0,xs:12,style:{opacity:"0.2",textDecoration:"underline",cursor:"pointer"},children:"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438"})]})]}),(0,d.jsx)(r.ZP,{item:!0,xs:2}),(0,d.jsx)(r.ZP,{item:!0,xs:2}),(0,d.jsx)(r.ZP,{item:!0,xs:2})]})})}var Z=n(1413),D=n(5717),J=(n(3037),n(8688),n.p+"static/media/\u041f\u043b\u0435\u0434-\u0441\u043f\u0430\u043b\u044c\u043d\u0438\u043a-transformed.0a9352a1579a6f38cf92.png"),P=n.p+"static/media/\u0411\u0435\u0439\u0441\u0431\u043e\u043b\u043a\u0430-transformed.275eda9825ed21f54497.png",Q=n.p+"static/media/\u041c\u0443\u043b\u044c\u0442\u0438\u0442\u0443\u043b-transformed.b6e24899d73e6afd0188.png",C=n.p+"static/media/\u0422\u0435\u0440\u043c\u043e\u0441-transformed.1f595645858d0c14fe21.png",O=n.p+"static/media/\u0444\u043e\u043d\u0430\u0440\u0438\u043a-Q20IulPYS-transformed.c8c619463244ad549872.png";function y(){return(0,d.jsx)("div",{className:"my-slider",style:{maxWidth:"1200px"},children:(0,d.jsxs)(D.Z,(0,Z.Z)((0,Z.Z)({},{infinite:!0,arrows:!0,speed:500,slidesToShow:1,slidesToScroll:1,cssEase:"linear",fade:!0,autoplay:!0,autoplaySpeed:3e3,swipeToSlide:!0}),{},{children:[(0,d.jsx)("div",{children:(0,d.jsx)("img",{src:P,alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"})}),(0,d.jsx)("div",{children:(0,d.jsx)("img",{src:J,alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"})}),(0,d.jsx)("div",{children:(0,d.jsx)("img",{src:Q,alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"})}),(0,d.jsx)("div",{children:(0,d.jsx)("img",{src:C,alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"})}),(0,d.jsx)("div",{children:(0,d.jsx)("img",{src:O,alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"})})]}))})}function I(){return(0,d.jsx)("div",{className:"sliderBG",children:(0,d.jsx)("div",{className:"sliderWith",children:(0,d.jsx)(y,{})})})}var H=n(1288),R=n(8749),b=n(4462),E=n(6685),N=n(2953),X=n(3683),F=n.p+"static/media/dornetCoin.9df1cc1d5d873ec6d33c.png",L=n.p+"static/media/buy.33b0413086e5f8be3a01.png",q=n(3947);function U(e){return(0,d.jsx)("div",{className:"modal display-block",children:(0,d.jsx)(q.Z,{})})}var Y=localStorage.getItem("token"),W=localStorage.getItem("username"),K=function(e){var t=e.product,n=(0,l.useState)(!1),r=(0,s.Z)(n,2),a=r[0],A=r[1];function u(){return(u=(0,c.Z)((0,i.Z)().mark((function e(){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,A(!0),e.next=4,o.Z.post("https://dornetshop.ru:5001/auth/updateBusket",{token:Y,username:W,name:t.name,price:t.price,photo:t.image,description:t.description,createdAt:t.createdAt});case 4:"success"===(n=e.sent).data.message&&(console.log(n.data.message),A(!1)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:A(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return(0,d.jsx)(H.Z,{children:(0,d.jsx)(R.Z,{style:{maxWidth:"1200px",maxHeight:"auto",margin:"20px"},children:(0,d.jsxs)(b.Z,{style:{maxWidth:"1200px"},children:[(0,d.jsx)(E.Z,{component:"img",height:"140",image:t.image,alt:t.title,style:{maxWidth:"100%",maxHeight:"auto"}}),(0,d.jsxs)(N.Z,{children:[(0,d.jsxs)(H.Z,{container:!0,spacing:2,children:[(0,d.jsxs)(H.Z,{item:!0,xs:12,style:{textAlign:"center"},children:[(0,d.jsx)(X.Z,{gutterBottom:!0,variant:"h5",component:"h2",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:t.name}),(0,d.jsx)(X.Z,{variant:"body2",color:"textSecondary",component:"p",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:t.description})]}),(0,d.jsxs)(H.Z,{container:!0,item:!0,xs:12,justifyContent:"space-between",style:{alignItems:"center"},children:[(0,d.jsx)(H.Z,{item:!0,xs:3,sm:2,children:(0,d.jsx)("button",{onClick:function(){return u.apply(this,arguments)},style:{textAlign:"left"},children:(0,d.jsx)("img",{style:{maxWidth:"100%"},src:L,alt:"",onMouseOver:function(e){return e.currentTarget.src="data:image/png;base64,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"},onMouseOut:function(e){return e.currentTarget.src=L}})})}),(0,d.jsxs)(H.Z,{container:!0,justifyContent:"space-between",item:!0,xs:9,sm:10,style:{alignItems:"center"},children:[(0,d.jsx)(H.Z,{item:!0,xs:7,sm:9,style:{textAlign:"right"},children:(0,d.jsx)(X.Z,{variant:"h5",color:"textSecondary",children:t.price})}),(0,d.jsx)(H.Z,{item:!0,xs:5,sm:3,children:(0,d.jsx)("img",{style:{maxWidth:"60%"},src:F,alt:""})})]})]})]}),a?(0,d.jsx)(U,{}):(0,d.jsx)(d.Fragment,{})]})]})})})},G=(0,l.memo)((function(e){var t=e.products;return(0,d.jsx)(H.Z,{container:!0,style:{maxWidth:"1200px",margin:"0 auto"},children:t.map((function(e){return(0,d.jsx)(H.Z,{item:!0,xs:6,sm:6,md:3,children:(0,d.jsx)(K,{product:e})},e.id)}))})}));function T(){var e=(0,l.useState)([]),t=(0,s.Z)(e,2),n=t[0],r=t[1];return(0,l.useEffect)((function(){function e(){return(e=(0,c.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://dornetshop.ru:5001/items/items");case 3:t=e.sent,r(t.data.items),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,d.jsx)(G,{products:n})}function V(){return(0,d.jsx)("div",{className:"bodyBG",children:(0,d.jsxs)("div",{style:{maxWidth:"1200px",margin:"0 auto",fontSize:"20px"},children:[(0,d.jsx)("div",{style:{textAlign:"left",marginLeft:"20px",marginTop:"20px"},children:"DorNet Odezda"}),(0,d.jsx)(T,{})]})})}function M(){var e=(0,l.useState)({firstname:"",secondname:"",balance:"",orders:""}),t=(0,s.Z)(e,2),n=t[0],a=t[1],A=(0,l.useState)(""),u=(0,s.Z)(A,2),p=u[0],x=u[1],g=(0,l.useState)(""),h=(0,s.Z)(g,2),m=h[0],k=h[1],j=(0,l.useState)(!1),f=(0,s.Z)(j,2),S=f[0],w=f[1],B=(0,l.useState)(!0),v=(0,s.Z)(B,2),D=v[0],J=v[1],P=localStorage.getItem("token"),Q=localStorage.getItem("username");(0,l.useEffect)((function(){function e(){return e=(0,c.Z)((0,i.Z)().mark((function e(t,n){var s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return J(!0),e.prev=1,e.next=4,o.Z.post("https://dornetshop.ru:5001/auth/username",{username:t,token:n});case 4:"access"===(s=e.sent).data.message&&(console.log(s.data),x(s.data.firstname),k(s.data.secondname),a({firstname:s.data.firstname,secondname:s.data.secondname,balance:s.data.balance,orders:s.data.orders}),J(!1)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),e.apply(this,arguments)}!function(t,n){e.apply(this,arguments)}(Q,P)}),[Q,P]);var C=function(){var e=(0,c.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.post("https://dornetshop.ru5001/auth/update",{username:Q,token:P,firstName:p,secondName:m});case 3:return e.next=5,a((0,Z.Z)((0,Z.Z)({},n),{},{firstname:p,secondname:m}));case 5:w(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return(0,d.jsxs)(r.ZP,{style:{margin:"0 auto",backgroundColor:"rgba(112, 112, 115, 0.15)",padding:"50px 0px"},children:[(0,d.jsx)(r.ZP,{item:!0,xs:12,style:{maxWidth:"1200px",margin:"0 auto"},children:(0,d.jsx)("div",{style:{textAlign:"left",paddingBottom:"50px",fontSize:"30px"},children:"\u041a\u0430\u0431\u0438\u043d\u0435\u0442 \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044f"})}),(0,d.jsxs)(r.ZP,{item:!0,xs:12,style:{margin:"0 auto",maxWidth:"1200px",backgroundColor:"white",padding:"50px",textAlign:"left",borderRadius:"10px",boxShadow:"rgba(0, 0, 0, 0.1) 0px 2px 8px"},children:[(0,d.jsxs)(r.ZP,{container:!0,style:{paddingBottom:"30px"},children:[(0,d.jsx)(r.ZP,{item:!0,xs:3,children:"\u041b\u0438\u0447\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"}),S?(0,d.jsx)(r.ZP,{item:!0,xs:4,children:(0,d.jsx)("button",{onClick:function(){return C()},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})}):(0,d.jsx)(r.ZP,{item:!0,xs:4,style:{cursor:"pointer"},onClick:function(){return w(!0)},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})]}),S?(0,d.jsxs)(r.ZP,{children:[(0,d.jsx)("input",{type:"text",value:p,onChange:function(e){return x(e.target.value)},style:{backgroundColor:"rgba(112, 112, 115, 0.15)",padding:"10px",borderRadius:"10px"}}),(0,d.jsx)("input",{type:"text",value:m,onChange:function(e){return k(e.target.value)},style:{backgroundColor:"rgba(112, 112, 115, 0.15)",padding:"10px",borderRadius:"10px",marginLeft:"10px"}})]}):(0,d.jsxs)("div",{children:[n.firstname," ",n.secondname]}),(0,d.jsx)(r.ZP,{container:!0,style:{paddingTop:"20px"},children:(0,d.jsxs)(r.ZP,{container:!0,item:!0,xs:12,children:[(0,d.jsx)("img",{src:F,alt:"",style:{width:"20px",marginRight:"10px"}}),(0,d.jsxs)("div",{children:[n.balance," \u0431\u0430\u043b\u043b\u043e\u0432"]})]})})]}),(0,d.jsxs)(r.ZP,{item:!0,xs:12,style:{margin:"0 auto",marginTop:"50px",maxWidth:"1200px",backgroundColor:"white",padding:"50px",textAlign:"left",borderRadius:"10px",boxShadow:"rgba(0, 0, 0, 0.1) 0px 2px 8px"},children:[(0,d.jsxs)(r.ZP,{container:!0,style:{paddingBottom:"50px"},children:[(0,d.jsx)(r.ZP,{item:!0,xs:3,children:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0437\u0430\u043a\u0430\u0437\u043e\u0432(".concat(n.orders.length,")")}),(0,d.jsx)(r.ZP,{item:!0,xs:3,children:"\u041d\u0435\u043e\u043f\u043b\u0430\u0447\u0435\u043d\u043d\u044b\u0435 \u0437\u0430\u043a\u0430\u0437\u044b(0)"}),(0,d.jsx)(r.ZP,{item:!0,xs:3,children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435 \u0442\u043e\u0432\u0430\u0440\u044b(0)"})]}),D?(0,d.jsx)(q.Z,{}):(0,d.jsx)(r.ZP,{children:n.orders.map((function(e,t){return(0,d.jsx)(r.ZP,{children:e.map((function(e,t){return(0,d.jsx)(r.ZP,{container:!0,children:(0,d.jsx)(r.ZP,{container:!0,style:{padding:"20px 0px"},children:(0,d.jsxs)(r.ZP,{container:!0,alignItems:"center",style:{borderBlock:"1px solid",borderColor:"rgba(211, 211, 211, 0.5)",padding:"10px 0px"},children:[(0,d.jsx)(r.ZP,{item:!0,xs:1,children:(0,d.jsx)("img",{src:e.photo,alt:""})}),(0,d.jsxs)(r.ZP,{item:!0,container:!0,alignItems:"center",justifyContent:"center",xs:3,children:[(0,d.jsx)(r.ZP,{children:e.name}),(0,d.jsx)(r.ZP,{item:!0,container:!0,alignItems:"center",justifyContent:"center",style:{opacity:"0.5",fontSize:"13px"},children:e.description})]}),(0,d.jsx)(r.ZP,{item:!0,container:!0,alignItems:"center",justifyContent:"center",xs:4,children:e.price}),(0,d.jsxs)(r.ZP,{item:!0,container:!0,alignItems:"center",justifyContent:"center",xs:4,children:["".concat(new Date(e.createdAt).getFullYear(),".").concat((new Date(e.createdAt).getMonth()+1).toString().padStart(2,"0"),".").concat(new Date(e.createdAt).getDate().toString().padStart(2,"0")," ").concat(new Date(e.createdAt).getHours().toString().padStart(2,"0"),":").concat(new Date(e.createdAt).getMinutes().toString().padStart(2,"0"),":").concat(new Date(e.createdAt).getSeconds().toString().padStart(2,"0")),"                                             "]})]})})},t)}))},t)}))})]})]})}var z=localStorage.getItem("token"),_=localStorage.getItem("username");function $(){return($=(0,c.Z)((0,i.Z)().mark((function e(t){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.post("https://dornetshop.ru:5001/auth/deleteItemBusket",{username:_,itemId:t});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function ee(){return te.apply(this,arguments)}function te(){return(te=(0,c.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.post("https://dornetshop.ru:5001/auth/deleteBusket",{username:_,token:z});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function ne(){return(ne=(0,c.Z)((0,i.Z)().mark((function e(t,n){var s,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.basket,e.prev=1,console.log(s,n),e.next=5,o.Z.post("https://dornetshop.ru:5001/auth/sendOrder",{username:_,basket:s,total:n});case 5:if("access"!==(r=e.sent).data.message){e.next=10;break}ee(),e.next=11;break;case 10:return e.abrupt("return",r.data);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}var se=(0,l.memo)((function(e){var t=e.basket,n=(0,l.useState)(0),a=(0,s.Z)(n,2),i=a[0],c=a[1];return(0,l.useEffect)((function(){var e=t.reduce((function(e,t){return e+t.price}),0);c(e)}),[t]),(0,d.jsx)(r.ZP,{style:{minHeight:"600px",maxWidth:"1200px",margin:"0 auto"},children:t.length<1?(0,d.jsx)("div",{style:{paddingTop:"200px"},children:" \u0415\u0449\u0435 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442, \u0432\u0440\u0435\u043c\u044f \u0437\u0430\u043a\u0443\u043f\u0430\u0442\u044c\u0441\u044f..."}):(0,d.jsxs)("div",{children:[t.map((function(e){return(0,d.jsx)(r.ZP,{style:{padding:"20px 0px"},children:(0,d.jsxs)(r.ZP,{container:!0,alignItems:"center",style:{borderBlock:"1px solid",borderColor:"rgba(211, 211, 211, 0.5)",padding:"10px 0px"},children:[(0,d.jsx)(r.ZP,{item:!0,xs:1,children:(0,d.jsx)("img",{src:e.photo,alt:""})}),(0,d.jsxs)(r.ZP,{item:!0,xs:4,children:[(0,d.jsx)(r.ZP,{children:e.name}),(0,d.jsx)(r.ZP,{style:{opacity:"0.5",fontSize:"13px"},children:e.description})]}),(0,d.jsx)(r.ZP,{item:!0,xs:4,children:e.price}),(0,d.jsx)(r.ZP,{item:!0,xs:3,children:(0,d.jsx)("button",{onClick:function(){!function(e){$.apply(this,arguments)}(e._id)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})]})})})),(0,d.jsxs)(r.ZP,{container:!0,item:!0,xs:3,alignItems:"center",justifyContent:"space-evenly",children:[(0,d.jsx)("div",{children:i}),(0,d.jsx)("button",{className:"headerButton",onClick:function(){return function(e,t){return ne.apply(this,arguments)}({basket:t},i)},children:(0,d.jsx)("input",{type:"submit",value:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c"})}),(0,d.jsx)("button",{className:"headerButton",onClick:ee,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})]})})}));function re(){var e=(0,l.useState)([]),t=(0,s.Z)(e,2),n=t[0],r=t[1];return(0,l.useEffect)((function(){function e(){return t.apply(this,arguments)}function t(){return(t=(0,c.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.post("https://dornetshop.ru:5001/auth/basket",{username:_,token:z});case 3:if("access"!==(t=e.sent).data.message){e.next=8;break}if(t.data.basket!==n){e.next=7;break}return e.abrupt("return");case 7:r(t.data.basket);case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return e(),function(){e()}}),[n]),(0,d.jsx)("div",{children:(0,d.jsx)(se,{basket:n})})}var ae=function(){var e=(0,l.useState)(!1),t=(0,s.Z)(e,2),n=t[0],r=t[1];return(0,l.useEffect)((function(){!function(e){var t=e.setIsAuthenticated,n=localStorage.getItem("token");function s(){return s=(0,c.Z)((0,i.Z)().mark((function e(n,s){var r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=function(){localStorage.removeItem("token"),localStorage.removeItem("username"),t(!1)},e.prev=1,e.next=4,o.Z.post("https://dornetshop.ru:5001/auth/check",{username:n,token:s});case 4:if("access"!==e.sent.data.message){e.next=9;break}return e.abrupt("return",t(!0));case 9:r();case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])}))),s.apply(this,arguments)}(function(e,t){s.apply(this,arguments)})(localStorage.getItem("username"),n)}({setIsAuthenticated:r})}),[]),(0,d.jsx)("div",{className:"App",children:(0,d.jsxs)(h.VK,{basename:"/",children:[(0,d.jsx)(k,{IsAuthenticate:n,setIsAuthenticated:r}),(0,d.jsxs)(g.Z5,{children:[(0,d.jsx)(g.AW,{exact:!0,path:"/dornetstore",element:(0,d.jsxs)("div",{className:"adaptiveMargin",children:[(0,d.jsx)(I,{}),(0,d.jsx)(V,{})]})}),(0,d.jsx)(g.AW,{exact:!0,path:"/delivery",element:(0,d.jsx)("div",{style:{margin:"0 auto",padding:"200px 0px",minHeight:"600px"},children:(0,d.jsx)("div",{style:{margin:"0 auto",width:"10%",animation:"spin 20s linear infinite"},children:"\u0417\u0434\u0435\u0441\u044c \u0431\u0443\u0434\u0435\u0442 \u043c\u043d\u043e\u0433\u043e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435"})})}),(0,d.jsx)(g.AW,{exact:!0,path:"/profile",element:(0,d.jsx)("div",{className:"adaptiveMargin",children:(0,d.jsx)(M,{})})}),(0,d.jsx)(g.AW,{exact:!0,path:"/basket",element:(0,d.jsx)("div",{children:(0,d.jsx)(re,{})})})]}),(0,d.jsx)(v,{})]})})}}}]);
//# sourceMappingURL=487.1d56bfa5.chunk.js.map