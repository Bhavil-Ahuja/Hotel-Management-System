(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{260:function(e,t,c){},261:function(e,t,c){},497:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(24),r=c.n(s),l=(c(260),c(261),c(1));var o=function(){var e=JSON.parse(localStorage.getItem("currentUser"));return Object(l.jsx)("div",{children:Object(l.jsxs)("nav",{class:"navbar navbar-expand-lg",children:[Object(l.jsx)("a",{class:"navbar-brand",href:"/home",children:"Hotel Booking"}),Object(l.jsx)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{class:"navbar-toggler-icon",children:Object(l.jsx)("i",{class:"fa fa-bars",style:{color:"white"}})})}),Object(l.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNav",children:Object(l.jsx)("ul",{class:"navbar-nav mr-5",children:e?Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{class:"dropdown",children:[Object(l.jsxs)("button",{class:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:[Object(l.jsx)("i",{className:"fa fa-user"})," ",e.name]}),Object(l.jsxs)("div",{class:"dropdown-menu","aria-labelledby":"dropdownMenuButton",children:[Object(l.jsx)("a",{class:"dropdown-item",href:"/profile",children:"Profile"}),Object(l.jsx)("a",{class:"dropdown-item",href:"#",onClick:function(){localStorage.removeItem("currentUser"),window.location.href="/login"},children:"Logout"})]})]})}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("li",{class:"nav-item active",children:Object(l.jsx)("a",{class:"nav-link",href:"/register",children:"Register"})}),Object(l.jsx)("li",{class:"nav-item",children:Object(l.jsx)("a",{class:"nav-link",href:"/login",children:"Login"})})]})})})]})})},i=c(75),j=c(11),b=c(50),d=c(8),u=c(14),O=c(2),h=c(26),x=c.n(h),m=c(503),p=c(507),f=c(508),g=c(87),v=c.n(g);c(150);v.a.init({duration:1e3});var y=function(e){var t=e.room,c=Object(a.useState)(!1),n=Object(O.a)(c,2),s=n[0],r=n[1],o=function(){return r(!1)};return Object(l.jsxs)("div",{className:"row bs","data-aos":"fade-up",children:[Object(l.jsx)("div",{className:"col-md-4",children:Object(l.jsx)("img",{src:t.imageurls[0],className:"smallimg",alt:""})}),Object(l.jsxs)("div",{className:"col-md-7 ",children:[Object(l.jsx)("h1",{children:t.name}),Object(l.jsxs)("b",{children:[" ",Object(l.jsxs)("p",{children:["Max Count :",t.maxcount," "]}),Object(l.jsxs)("p",{children:["Phone Number:",t.phonenumber," "]}),Object(l.jsxs)("p",{children:["Type :",t.type," "]}),Object(l.jsxs)("p",{children:["Address : ",t.address]})]}),Object(l.jsxs)("div",{style:{float:"right"},children:[Object(l.jsx)(i.b,{to:"/book/".concat(t._id),children:Object(l.jsx)(m.a,{className:"btn btn-primary",children:"Book now"})}),Object(l.jsx)("button",{className:"btn btn-primary",onClick:function(){return r(!0)},children:"View Details"})]})]}),Object(l.jsxs)(p.a,{show:s,onHide:o,size:"lg",children:[Object(l.jsx)(p.a.Header,{children:Object(l.jsx)(p.a.Title,{children:t.name})}),Object(l.jsxs)(p.a.Body,{children:[Object(l.jsx)(f.a,{prevLabel:"",nextLabel:"",children:t.imageurls.map((function(e){return Object(l.jsx)(f.a.Item,{children:Object(l.jsx)("img",{className:"d-block w-100 big img",src:e,alt:""})})}))}),Object(l.jsx)("p",{children:t.description})]}),Object(l.jsx)(p.a.Footer,{children:Object(l.jsx)(m.a,{variant:"secondary",onClick:o,children:"Close"})})]})]})},w=c(246),N=c.n(w);var S=function(){var e=Object(a.useState)(!0),t=Object(O.a)(e,1)[0];return Object(l.jsx)("div",{style:{marginTop:"150px"},children:Object(l.jsx)("div",{className:"sweet-loading text-center",children:Object(l.jsx)(N.a,{color:"#000000",loading:t,css:"",size:30})})})};var k=function(e){var t=e.message;return Object(l.jsx)("div",{children:Object(l.jsx)("div",{class:"alert alert-danger",role:"alert",children:t})})},Y=(c(190),c(22)),C=c.n(Y),M=c(505),D=M.a.RangePicker;var T=function(){var e=Object(a.useState)(!0),t=Object(O.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(),r=Object(O.a)(s,2),o=(r[0],r[1]),i=Object(a.useState)([]),j=Object(O.a)(i,2),h=j[0],m=j[1],p=Object(a.useState)(),f=Object(O.a)(p,2),g=(f[0],f[1]),v=Object(a.useState)(),w=Object(O.a)(v,2),N=(w[0],w[1]),k=Object(a.useState)([]),Y=Object(O.a)(k,2),M=Y[0],T=Y[1],B=Object(a.useState)(""),A=Object(O.a)(B,2),I=A[0],R=A[1],E=Object(a.useState)("all"),U=Object(O.a)(E,2),L=U[0],P=U[1];function z(e,t){var c=t.length,a=e.length,n=new Array(256);!function(e,t,c){for(var a=0;a<256;a++)c[a]=-1;for(var n=0;n<t;n++)c[e[n].charCodeAt(0)]=n}(t,c,n);for(var s,r,l=0;l<=a-c;){for(var o=c-1;o>=0&&t[o]==e[l+o];)o--;l+=o<0?l+c<a?c-n[e[l+c].charCodeAt(0)]:1:(s=1,r=o-n[e[l+o].charCodeAt(0)],s>r?s:r)}}return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(Object(d.a)().mark((function e(){var t;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("/api/rooms/getallrooms");case 3:t=e.sent.data,m(t),T(t),n(!1),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),o(!0),console.log(e.t0),n(!1);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),z(I,"hotel"),console.log(z),Object(l.jsx)("div",{className:"bgimg",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"row bs ",children:[Object(l.jsxs)("div",{className:"col-md-5",style:{display:"flex"},children:[Object(l.jsx)(D,{format:"DD-MM-YYYY",onChange:function(e){g(C()(e[0]).format("DD-MM-YYYY")),N(C()(e[1]).format("DD-MM-YYYY"));var t,c=[],a=!1,n=Object(b.a)(M);try{for(n.s();!(t=n.n()).done;){var s=t.value;if(s.currentbookings.length>0){var r,l=Object(b.a)(s.currentbookings);try{for(l.s();!(r=l.n()).done;){var o=r.value;C()(C()(e[0]).format("DD-MM-YYYY")).isBetween(o.fromdate,o.todate)||C()(C()(e[1]).format("DD-MM-YYYY")).isBetween(o.fromdate,o.todate)||C()(e[0]).format("DD-MM-YYYY")!==o.fromdate&&C()(e[0]).format("DD-MM-YYYY")!==o.todate&&C()(e[1]).format("DD-MM-YYYY")!==o.fromdate&&C()(e[1]).format("DD-MM-YYYY")!==o.todate&&(a=!0)}}catch(i){l.e(i)}finally{l.f()}}!0!==a&&0!==s.currentbookings.length||c.push(s),m(c)}}catch(i){n.e(i)}finally{n.f()}}}),Object(l.jsx)("button",{className:"c",onClick:function(){g(null),N(null)},children:"x"})]}),Object(l.jsx)("div",{className:"col-md-3",children:Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"Search rooms",value:I,onChange:function(e){R(e.target.value)},onKeyUp:function(){var e=M.filter((function(e){return e.name.toLowerCase().includes(I.toLowerCase())}));m(e)}})}),Object(l.jsx)("div",{className:"col-md-3",children:Object(l.jsxs)("select",{className:"form-control",value:L,onChange:function(e){!function(e){if(P(e),"all"!==e){var t=M.filter((function(t){return t.type.toLowerCase()===e.toLowerCase()}));m(t)}else m(M)}(e.target.value)},children:[Object(l.jsx)("option",{value:"all",children:"All"}),Object(l.jsx)("option",{value:"delux",children:"Delux"}),Object(l.jsx)("option",{value:"non-delux",children:"Non-Delux"})]})})]}),Object(l.jsx)("div",{children:Object(l.jsxs)("a",{class:"fcc-btn",href:"/map",children:[Object(l.jsxs)("h6",{children:[Object(l.jsx)("i",{class:"fa fa-location-arrow","aria-hidden":"true"}),"Google Map"]}),Object(l.jsx)("div",{className:"qwe",children:Object(l.jsx)("img",{src:"map.png",alt:""})})]})}),Object(l.jsx)("div",{className:"row justify-content-center mt-5",children:c?Object(l.jsx)(S,{}):h.map((function(e){return Object(l.jsx)("div",{className:"col-md-9 mt-2",children:Object(l.jsx)(y,{room:e})})}))})]})})};var B=function(e){var t=e.message;return Object(l.jsx)("div",{children:Object(l.jsx)("div",{class:"alert alert-success",role:"alert",children:t})})};var A=function(){var e=Object(a.useState)(""),t=Object(O.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),r=Object(O.a)(s,2),o=r[0],i=r[1],j=Object(a.useState)(""),b=Object(O.a)(j,2),h=b[0],m=b[1],p=Object(a.useState)(""),f=Object(O.a)(p,2),g=f[0],v=f[1],y=Object(a.useState)(!1),w=Object(O.a)(y,2),N=w[0],Y=w[1],C=Object(a.useState)(),M=Object(O.a)(C,2),D=M[0],T=M[1],A=Object(a.useState)(),I=Object(O.a)(A,2),R=I[0],E=I[1];function U(){return(U=Object(u.a)(Object(d.a)().mark((function e(){var t;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h!==g){e.next=21;break}return t={name:c,email:o,password:h,cpassword:g},e.prev=2,Y(!0),e.next=6,x.a.post("/api/users/register",t).data;case 6:e.sent,Y(!1),E(!0),n(""),i(""),m(""),v(""),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(2),Y(!1),T(!0);case 19:e.next=22;break;case 21:alert("Password not matched");case 22:case"end":return e.stop()}}),e,null,[[2,15]])})))).apply(this,arguments)}return Object(l.jsx)("div",{className:"regimg",children:Object(l.jsxs)("div",{children:[N&&Object(l.jsx)(S,{}),D&&Object(l.jsx)(k,{}),Object(l.jsx)("div",{className:"row justify-content-center mt -5",children:Object(l.jsxs)("div",{className:"col-md-5 mt-5",children:[R&&Object(l.jsx)(B,{message:"Registration success"}),Object(l.jsxs)("div",{className:"bs ",children:[Object(l.jsx)("span",{children:Object(l.jsx)("i",{class:"fa fa-user-plus ",style:{fontSize:"30px",position:"absolute"},"aria-hidden":"true"})}),Object(l.jsx)("h2",{children:"Register"}),Object(l.jsx)("input",{type:"text",className:"form-control",style:{marginBottom:"10px"},placeholder:"name",value:c,onChange:function(e){n(e.target.value)}}),Object(l.jsx)("input",{type:"email",className:"form-control",style:{marginBottom:"10px"},placeholder:"email",value:o,onChange:function(e){i(e.target.value)}}),Object(l.jsx)("input",{type:"password",className:"form-control",style:{marginBottom:"10px"},placeholder:"password",value:h,onChange:function(e){m(e.target.value)}}),Object(l.jsx)("input",{type:"password",className:"form-control",style:{marginBottom:"10px"},placeholder:"confirm password",value:g,onChange:function(e){v(e.target.value)}}),Object(l.jsx)("button",{className:"btn btn-primary mt-3",onClick:function(){return U.apply(this,arguments)},children:"Register"})]})]})})]})})};var I=function(){var e=Object(a.useState)(""),t=Object(O.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),r=Object(O.a)(s,2),o=r[0],i=r[1],j=Object(a.useState)(!1),b=Object(O.a)(j,2),h=b[0],m=b[1],p=Object(a.useState)(),f=Object(O.a)(p,2),g=f[0],v=f[1];function y(){return(y=Object(u.a)(Object(d.a)().mark((function e(){var t,a;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={email:c,password:o},e.prev=1,m(!0),e.next=5,x.a.post("/api/users/login",t);case 5:a=e.sent.data,m(!1),localStorage.setItem("currentUser",JSON.stringify(a)),window.location.href="/home",e.next=16;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0),m(!1),v(!0);case 16:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}return Object(l.jsx)("div",{className:"loginimg",children:Object(l.jsxs)("div",{children:[h&&Object(l.jsx)(S,{}),Object(l.jsx)("div",{className:"row justify-content-center mt -5 p-5",children:Object(l.jsxs)("div",{className:"col-md-5 mt-5 p-4",children:[g&&Object(l.jsx)(k,{message:"Invalid Credentials"}),Object(l.jsxs)("div",{className:"bs",children:[Object(l.jsx)("span",{children:Object(l.jsx)("i",{class:"fas fa-sign-in-alt",style:{fontSize:"30px",position:"absolute"}})}),Object(l.jsx)("h2",{children:"Login"}),Object(l.jsx)("input",{type:"text",className:"form-control ",style:{marginBottom:"10px"},placeholder:"email",value:c,onChange:function(e){n(e.target.value)}}),Object(l.jsx)("input",{type:"password",className:"form-control ",placeholder:"password",value:o,onChange:function(e){i(e.target.value)}}),Object(l.jsx)("button",{className:"btn btn-primary mt-3",onClick:function(){return y.apply(this,arguments)},children:"Login"})]})]})})]})})},R=c(250),E=c.n(R),U=c(56),L=c.n(U);v.a.init({duration:1e3});var P=M.a.RangePicker;var z=function(e){e.match;var t=Object(a.useState)(!0),c=Object(O.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)(),o=Object(O.a)(r,2),i=(o[0],o[1]),b=Object(a.useState)(),h=Object(O.a)(b,2),m=h[0],p=h[1],f=Object(j.n)(),g=Object(a.useState)(),v=Object(O.a)(g,2),y=v[0],w=v[1],N=Object(a.useState)(),Y=Object(O.a)(N,2),M=Y[0],D=Y[1],T=Object(a.useState)(),B=Object(O.a)(T,2),A=B[0],I=B[1],R=C()(y,"DD-MM-YYYY"),U=C()(M,"DD-MM-YYYY"),z=C.a.duration(U.diff(R)).asDays()+1,F=A*z;function _(){return(_=Object(u.a)(Object(d.a)().mark((function e(t){var c;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={room:m,userid:JSON.parse(localStorage.getItem("currentUser"))._id,fromdate:y,todate:M,totalamount:F,totaldays:z,token:t},e.prev=1,s(!0),e.next=5,x.a.post("/api/bookings/bookroom",c);case 5:e.sent,s(!1),L.a.fire("Congratulations","Your room booked successfully","success").then((function(e){window.location.href="/profile"})),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),s(!1),L.a.fire("Oops","Something went wrong","error");case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(Object(d.a)().mark((function e(){var t;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(!0),e.next=4,x.a.post("/api/rooms/getroombyid",{roomid:f.roomid});case 4:t=e.sent.data,p(t),I(t.rentperday),s(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),i(!0),s(!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}localStorage.getItem("currentUser")||(window.location.reload="/login"),function(){e.apply(this,arguments)}()}),[]),Object(l.jsx)("div",{className:"m-5","data-aos":"flip-left",children:n?Object(l.jsx)(S,{}):m?Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"row justify-content-center mt-5 bs",children:[Object(l.jsxs)("div",{className:"col-md-6",children:[Object(l.jsx)("h1",{children:m.name}),Object(l.jsx)("img",{src:m.imageurls[0],className:"bigimg",alt:""})]}),Object(l.jsxs)("div",{className:"col-md-6",children:[Object(l.jsxs)("div",{style:{textAlign:"right"},children:[Object(l.jsx)("h1",{children:"Booking Details"}),Object(l.jsx)("hr",{}),Object(l.jsx)("div",{style:{textAlign:"left",margin:"15px"},children:Object(l.jsx)("p",{children:"Choose your date"})}),Object(l.jsxs)("div",{className:"col-md-5",style:{display:"flex"},children:[Object(l.jsx)(P,{format:"DD-MM-YYYY",onChange:function(e){w(C()(e[0]).format("DD-MM-YYYY")),D(C()(e[1]).format("DD-MM-YYYY")),s(!0),s(!1)}}),Object(l.jsx)("button",{className:"c",onClick:function(){w(null),D(null)},children:"x"})]}),Object(l.jsxs)("b",{children:[Object(l.jsxs)("p",{children:["Name:",JSON.parse(localStorage.getItem("currentUser")).name]}),Object(l.jsxs)("p",{children:["Max Count:",m.maxcount]})]})]}),Object(l.jsx)("div",{style:{textAlign:"right"},children:Object(l.jsxs)("b",{children:[Object(l.jsx)("hr",{}),Object(l.jsx)("h1",{children:"Amount"}),Object(l.jsx)("hr",{}),Object(l.jsxs)("p",{children:["Total Days:",z]}),Object(l.jsxs)("p",{children:["Rent per day:",m.rentperday]}),Object(l.jsxs)("p",{children:["Total Amount:",F]})]})}),Object(l.jsx)("div",{style:{float:"right"},children:Object(l.jsx)(E.a,{amount:100*F,token:function(e){return _.apply(this,arguments)},currency:"NPR",stripeKey:"pk_test_51KgkyBCjm49JZjwROIbPL3ky3Ur1s8vKzSc5DE2gFiTE08HvGamtmmyXhZ0dMlWRYBY4zp8eEsCUuNC5umb7U22300RtFvxBde",children:Object(l.jsxs)("button",{className:"btn btn-primary",children:["Pay Now",""]})})})]})]}),")"]}):Object(l.jsx)(k,{})})},F=c(506),_=F.a.TabPane;var J=function(){return Object(a.useEffect)((function(){JSON.parse(localStorage.getItem("currentUser")).isAdmin||(window.location.href="/home")}),[]),Object(l.jsxs)("div",{className:"mt-3 ml-3 mr-3 bs",children:[Object(l.jsx)("h2",{className:"text-center",style:{fontsize:"30px"},children:Object(l.jsx)("b",{children:"Admin panel"})}),Object(l.jsxs)(F.a,{defaultActiveKey:"1",children:[Object(l.jsx)(_,{tab:"Bookings",children:Object(l.jsx)(W,{})},"1"),Object(l.jsx)(_,{tab:"Room",children:Object(l.jsx)(G,{})},"2"),Object(l.jsx)(_,{tab:"Add Room",children:Object(l.jsx)(H,{})},"3"),Object(l.jsx)(_,{tab:"Users",children:Object(l.jsx)(K,{})},"4")]})]})};function W(){var e=Object(a.useState)([]),t=Object(O.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!0),r=Object(O.a)(s,2),o=r[0],i=r[1],j=Object(a.useState)(),b=Object(O.a)(j,2),h=(b[0],b[1]);return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(Object(d.a)().mark((function e(){var t;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("/api/bookings/getallbookings");case 3:return e.next=5,e.sent.data;case 5:t=e.sent,n(t),i(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),i(!1),h(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)("div",{className:"col-md-12",children:[Object(l.jsx)("h1",{children:"Bookings"}),o&&Object(l.jsx)(S,{}),Object(l.jsxs)("table",{className:"table table-bordered table-dark",children:[Object(l.jsx)("thead",{className:"bs",children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Booking ID"}),Object(l.jsx)("th",{children:"User ID"}),Object(l.jsx)("th",{children:"Room"}),Object(l.jsx)("th",{children:"From"}),Object(l.jsx)("th",{children:"To"}),Object(l.jsx)("th",{children:"Status"})]})}),Object(l.jsx)("tbody",{children:c.length&&c.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e._id}),Object(l.jsx)("td",{children:e.userid}),Object(l.jsx)("td",{children:e.room}),Object(l.jsx)("td",{children:e.fromdate}),Object(l.jsx)("td",{children:e.todate}),Object(l.jsx)("td",{children:e.status})]})}))})]})]})})}function G(){var e=Object(a.useState)([]),t=Object(O.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!0),r=Object(O.a)(s,2),o=r[0],i=r[1],j=Object(a.useState)(),b=Object(O.a)(j,2),h=(b[0],b[1]);return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(Object(d.a)().mark((function e(){var t;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("/api/rooms/getallrooms");case 3:return e.next=5,e.sent.data;case 5:t=e.sent,n(t),console.log(t),i(!1),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),i(!1),h(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)("div",{className:"col-md-12",children:[Object(l.jsx)("h1",{children:"Rooms"}),o&&Object(l.jsx)(S,{}),Object(l.jsxs)("table",{className:"table table-bordered table-dark",children:[Object(l.jsx)("thead",{className:"bs",children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Room ID"}),Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Type"}),Object(l.jsx)("th",{children:"Rent per Day"}),Object(l.jsx)("th",{children:"Max Count"}),Object(l.jsx)("th",{children:"Phone Number"})]})}),Object(l.jsx)("tbody",{children:c.length&&c.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e._id}),Object(l.jsx)("td",{children:e.name}),Object(l.jsx)("td",{children:e.type}),Object(l.jsx)("td",{children:e.rentperday}),Object(l.jsx)("td",{children:e.maxcount}),Object(l.jsx)("td",{children:e.phonenumber})]})}))})]})]})})}function K(){var e=Object(a.useState)([]),t=Object(O.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!0),r=Object(O.a)(s,2),o=(r[0],r[1]),i=Object(a.useState)(),j=Object(O.a)(i,2),b=(j[0],j[1]);return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(Object(d.a)().mark((function e(){var t;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("/api/users/getallusers");case 3:return e.next=5,e.sent.data;case 5:t=e.sent,n(t),console.log(t),o(!1),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),o(!1),b(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)("div",{className:"col-md-12",children:[Object(l.jsx)("h1",{children:"Uses"}),Object(l.jsxs)("table",{className:"table table-dark table-bordered",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"User Id"}),Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Email"}),Object(l.jsx)("th",{children:"Is Admin"})]})}),Object(l.jsx)("tbody",{children:c.length&&c.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e._id}),Object(l.jsx)("td",{children:e.name}),Object(l.jsx)("td",{children:e.email}),Object(l.jsx)("td",{children:e.isAdmin?"YES":"NO"})]})}))})]})]})})}function H(){var e=Object(a.useState)(!1),t=Object(O.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(),r=Object(O.a)(s,2),o=(r[0],r[1],Object(a.useState)("")),i=Object(O.a)(o,2),j=i[0],b=i[1],h=Object(a.useState)(),m=Object(O.a)(h,2),p=m[0],f=m[1],g=Object(a.useState)(),v=Object(O.a)(g,2),y=v[0],w=v[1],N=Object(a.useState)(),k=Object(O.a)(N,2),Y=k[0],C=k[1],M=Object(a.useState)(),D=Object(O.a)(M,2),T=D[0],B=D[1],A=Object(a.useState)(),I=Object(O.a)(A,2),R=I[0],E=I[1],U=Object(a.useState)(),P=Object(O.a)(U,2),z=P[0],F=P[1],_=Object(a.useState)(),J=Object(O.a)(_,2),W=J[0],G=J[1],K=Object(a.useState)(),H=Object(O.a)(K,2),Z=H[0],q=H[1];function Q(){return(Q=Object(u.a)(Object(d.a)().mark((function e(){var t,c;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={name:j,rentperday:p,maxcount:y,description:Y,phonenumber:T,type:R},e.prev=1,n(!0),e.next=5,x.a.post("/api/rooms/addroom",t);case 5:return e.next=7,e.sent.data;case 7:c=e.sent,console.log(c),n(!1),L.a.fire("Congrats","Your New Room Added Successfully","success").then((function(e){window.location.href="/home"})),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0),n(!1),L.a.fire("Oops","Something went wrong","error ");case 18:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}return Object(l.jsxs)("div",{className:"row",children:[c&&Object(l.jsx)(S,{}),Object(l.jsxs)("div",{className:"col-md-5",style:{display:"grid"},children:[Object(l.jsx)("input",{type:"text",className:"form-centrol",style:{marginBottom:"10px"},placeholder:"Room name",value:j,onChange:function(e){b(e.target.value)}}),Object(l.jsx)("input",{type:"text",className:"form-centrol",style:{marginBottom:"10px"},placeholder:"Rent per day",value:p,onChange:function(e){f(e.target.value)}}),Object(l.jsx)("input",{type:"text",className:"form-centrol",style:{marginBottom:"10px"},placeholder:"Max count",value:y,onChange:function(e){w(e.target.value)}}),Object(l.jsx)("input",{type:"text",className:"form-centrol",style:{marginBottom:"10px"},placeholder:"Description",value:Y,onChange:function(e){C(e.target.value)}}),Object(l.jsx)("input",{type:"text",className:"form-centrol",style:{marginBottom:"10px"},placeholder:"Phone number",value:T,onChange:function(e){B(e.target.value)}})]}),Object(l.jsxs)("div",{className:"col-md-5",style:{display:"grid"},children:[Object(l.jsx)("input",{type:"text",className:"form-centrol",style:{marginBottom:"10px"},placeholder:"Type",value:R,onChange:function(e){E(e.target.value)}}),Object(l.jsx)("input",{type:"text",className:"form-centrol",style:{marginBottom:"10px"},placeholder:"Image URL 1",value:z,onChange:function(e){F(e.target.value)}}),Object(l.jsx)("input",{type:"text",className:"form-centrol",style:{marginBottom:"10px"},placeholder:"Image URL 2",value:W,onChange:function(e){G(e.target.value)}}),Object(l.jsx)("input",{type:"text",className:"form-centrol",style:{marginBottom:"10px"},placeholder:"Image URL 3",value:Z,onChange:function(e){q(e.target.value)}}),Object(l.jsx)("div",{className:"text-right",children:Object(l.jsx)("button",{className:"btn btn-primary mt-2",onClick:function(){return Q.apply(this,arguments)},children:"Add Room"})})]})]})}var Z=c(255),q=F.a.TabPane;var Q=function(){var e=JSON.parse(localStorage.getItem("currentUser"));return Object(a.useEffect)((function(){e||(window.location.href="/login")}),[]),Object(l.jsx)("div",{className:"ml-3 mt-3",children:Object(l.jsxs)(F.a,{defaultActiveKey:"1",children:[Object(l.jsxs)(q,{tab:"Profile",children:[Object(l.jsx)("h1",{children:"My Profile"}),Object(l.jsx)("br",{}),Object(l.jsxs)("h1",{children:["Name : ",e.name]}),Object(l.jsxs)("h1",{children:["Email : ",e.email]}),Object(l.jsxs)("h1",{children:["isAdmin : ",e.isAdmin?"YES":"NO"]})]},"1"),Object(l.jsx)(q,{tab:"Bookings",children:Object(l.jsx)(V,{})},"2")]})})};function V(){var e=JSON.parse(localStorage.getItem("currentUser")),t=Object(a.useState)([]),c=Object(O.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)([!1]),o=Object(O.a)(r,2),i=o[0],j=o[1],b=Object(a.useState)([]),h=Object(O.a)(b,2),m=(h[0],h[1]);function p(){return(p=Object(u.a)(Object(d.a)().mark((function e(t,c){var a;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,x.a.post("/api/bookings/cancelbooking",{bookingid:t,roomid:c});case 4:return e.next=6,e.sent.data;case 6:a=e.sent,console.log(a),j(!1),L.a.fire("Congrats","Your booking has been cancelled","success").then((function(e){window.location.reload()})),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0),j(!1),L.a.fire("Oops","Something went wrong","error");case 17:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){function t(){return(t=Object(u.a)(Object(d.a)().mark((function t(){var c;return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,j(!0),t.next=4,x.a.post("/api/bookings/getbookingsbyuserid",{userid:e._id});case 4:return t.next=6,t.sent.data;case 6:c=t.sent,console.log(c),s(c),j(!1),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0),j(!1),m(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)("div",{className:".col-md-6",children:[i&&Object(l.jsx)(S,{}),n&&n.map((function(e){return Object(l.jsxs)("div",{className:"bs",children:[Object(l.jsx)("h1",{children:e.room}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"BookingId"}),": ",e._id]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"CheckIn"}),": ",e.fromdate]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Check Out"}),": ",e.todate]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Amount"}),": ",e.totalamount]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Status"}),":"," ","cancelled"==e.status?Object(l.jsx)(Z.a,{color:"red",children:"CANCELLED"}):Object(l.jsx)(Z.a,{color:"green",children:"CONFIRMED"})]}),"cancelled"!==e.status&&Object(l.jsx)("div",{className:"text-right",children:Object(l.jsx)("button",{class:"btn btn-primary",onClick:function(){!function(e,t){p.apply(this,arguments)}(e._id,e.roomid)},children:"CANCEL BOOKING"})})]})}))]})})})}var X=c(94),$=[{featureType:"all",elementType:"geometry",stylers:[{color:"#202c3e"}]},{featureType:"all",elementType:"labels.text.fill",stylers:[{gamma:.01},{lightness:20},{weight:"1.39"},{color:"#ffffff"}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{weight:"0.96"},{saturation:"9"},{visibility:"on"},{color:"#000000"}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"landscape",elementType:"geometry",stylers:[{lightness:30},{saturation:"9"},{color:"#29446b"}]},{featureType:"poi",elementType:"geometry",stylers:[{saturation:20}]},{featureType:"poi.park",elementType:"geometry",stylers:[{lightness:20},{saturation:-20}]},{featureType:"road",elementType:"geometry",stylers:[{lightness:10},{saturation:-30}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#193a55"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{saturation:25},{lightness:25},{weight:"0.01"}]},{featureType:"water",elementType:"all",stylers:[{lightness:-20}]}];var ee=Object(X.withScriptjs)(Object(X.withGoogleMap)((function(){var e=Object(a.useState)([]),t=Object(O.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!0),r=Object(O.a)(s,2),o=(r[0],r[1]),i=Object(a.useState)(),j=Object(O.a)(i,2),b=(j[0],j[1]),h=Object(a.useState)(null),m=Object(O.a)(h,2),p=m[0],f=m[1];return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(Object(d.a)().mark((function e(){var t;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("/api/rooms/getallrooms");case 3:t=e.sent.data,n(t),o(!1),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),b(!0),console.log(e.t0),o(!1);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(l.jsxs)(X.GoogleMap,{defaultZoom:15,defaultCenter:{lat:27.7097158,lng:85.3223556},defaultOptions:{styles:$},children:[c.map((function(e){return Object(l.jsx)(X.Marker,{position:{lat:e.lat,lng:e.lng},onClick:function(){f(e)},icon:{url:"/hotel.png",scaledSize:new window.google.maps.Size(25,25)}},e._id)})),p&&Object(l.jsx)(X.InfoWindow,{onCloseClick:function(){f(null)},position:{lat:p.lat,lng:p.lng},children:Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:p.name}),Object(l.jsx)("p",{children:p.description})]})})]})})));function te(){return Object(l.jsx)("div",{style:{width:"100vw",height:"100vh"},children:Object(l.jsx)(ee,{googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC7IPsqWebybWGYtkaQgAWQUNWE0Ogs8MY",loadingElement:Object(l.jsx)("div",{style:{height:"100%"}}),containerElement:Object(l.jsx)("div",{style:{height:"100%"}}),mapElement:Object(l.jsx)("div",{style:{height:"100%"}})})})}v.a.init({duration:2e3});var ce=function(){return Object(l.jsx)("div",{className:"row landing justify-content-center",children:Object(l.jsxs)("div",{className:"col-md-9 my-auto text-center",style:{borderRight:"8px solid white"},children:[Object(l.jsx)("h2",{"data-aos":"zoom-in",style:{color:"White",fontSize:"130px"},children:"HotelAtLast"}),Object(l.jsx)("h1",{"data-aos":"zoom-out",style:{color:"White"},children:'"Best Hotel Booking Web Application"'}),Object(l.jsx)(i.b,{to:"/home",children:Object(l.jsx)("button",{className:"btn landingbtn",style:{color:"black"},children:"Get Started"})})]})})};var ae=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o,{}),Object(l.jsx)(i.a,{children:Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{path:"/home",element:Object(l.jsx)(T,{})}),Object(l.jsx)(j.a,{path:"/register",element:Object(l.jsx)(A,{})}),Object(l.jsx)(j.a,{path:"/login",element:Object(l.jsx)(I,{})}),Object(l.jsx)(j.a,{path:"/book/:roomid",element:Object(l.jsx)(z,{})}),Object(l.jsx)(j.a,{path:"/admin",element:Object(l.jsx)(J,{})}),Object(l.jsx)(j.a,{path:"/profile",element:Object(l.jsx)(Q,{})}),Object(l.jsx)(j.a,{path:"/map",element:Object(l.jsx)(te,{})}),Object(l.jsx)(j.a,{path:"/",element:Object(l.jsx)(ce,{})})]})})]})},ne=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,509)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(ae,{})}),document.getElementById("root")),ne()}},[[497,1,2]]]);
//# sourceMappingURL=main.5449bc51.chunk.js.map