(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){e.exports=t(27)},23:function(e,a,t){},27:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(10),c=t.n(r),m=t(28),o=(t(23),t(29)),i=t(30),s=function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"About Us"),l.a.createElement("p",null,"We are Dronuts."))},u=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Welcome employee, stop looking at this page and get to work immediately!"))},d=function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Locations"),l.a.createElement("p",null,l.a.createElement("b",null,"5000 Forbes Ave, Pittsburgh, PA 15213"),l.a.createElement("br",null),l.a.createElement("b",null,"Hours:")," 8:00am - 10:00pm",l.a.createElement("br",null),l.a.createElement("b",null,"Phone:")," 412-000-0000"))},b=t(4),E=t(5),v=t(7),p=t(6),N=t(8),h=[];var f=[{id:1,name:"Plain Donut",price:.8},{id:2,name:"Glazed Donut",price:1},{id:3,name:"Glazed Chocolate Donut",price:1.2}].map(function(e){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-8 border"},e.name,l.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:function(){return function(e){var a=h.find(function(a){return a.id===e.id});null==a?h.push({id:e.id,name:e.name,price:e.price,quantity:1}):a.quantity++;var t=h.map(function(e){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-5 border"},e.name),l.a.createElement("div",{className:"col-4 border text-right"},"$",e.price),l.a.createElement("div",{className:"col-3 border text-right"},e.quantity))}),n=0;h.map(function(e){return n+=e.price*e.quantity}),n=Math.round(100*n)/100,sessionStorage.setItem("cartTotal",n);var r=l.a.createElement("div",null,l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-5 border text-center"},l.a.createElement("b",null,"Item")),l.a.createElement("div",{className:"col-4 border text-center"},l.a.createElement("b",null,"Price")),l.a.createElement("div",{className:"col-3 border text-center"},l.a.createElement("b",null,"Quantity"))),t),l.a.createElement("h4",null,"Total: $",n),l.a.createElement("a",{role:"button",className:"btn btn-primary",href:"/order"},"Place Order")),m=document.getElementById("cart");c.a.render(r,m)}(e)}},"Add to cart")),l.a.createElement("div",{className:"col-4 border text-right"},"$",e.price))}),g=l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-8 border text-center"},l.a.createElement("b",null,"Item")),l.a.createElement("div",{className:"col-4 border text-center"},l.a.createElement("b",null,"Price"))),f),y=function(e){function a(){return Object(b.a)(this,a),Object(v.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(N.a)(a,e),Object(E.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-8 border text-center"},l.a.createElement("h3",null,"Menu")),l.a.createElement("div",{className:"col-4 border text-center"},l.a.createElement("h3",null,"My Cart"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-8 border"},g),l.a.createElement("div",{className:"col-4 border text-center"},l.a.createElement("div",{id:"cart"}))))}}]),a}(n.Component),O=[{name:"Donuts",items:[{name:"Plain Donut",description:"Good old plain donut, probably the healthiest.",price:.8},{name:"Glazed Donut",description:"Because plain donuts are boring, and diabetes is not a problem.",price:1}]},{name:"Beverages",items:[{name:"Coffee",description:"Can't survive CMU without this.",price:1}]}];function j(e){return e.map(function(e){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col border"},l.a.createElement("h4",null,e.name,":"),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-4 border"},l.a.createElement("b",null,"Item")),l.a.createElement("div",{className:"col-6 border"},l.a.createElement("b",null,"Description")),l.a.createElement("div",{className:"col-2 border"},l.a.createElement("b",null,"Price"))),function(e){return e.items.map(function(e){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-4 border"},e.name),l.a.createElement("div",{className:"col-6 border"},e.description),l.a.createElement("div",{className:"col-2 border"},"$",e.price))})}(e),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col border"},l.a.createElement("button",{type:"button",className:"btn btn-warning btn-sm btn-block","data-toggle":"collapse","data-target":"#addItem-"+e.name,"aria-expanded":"false","aria-controls":"addItem-"+e.name},l.a.createElement("b",null,"Add Item")),l.a.createElement("div",{className:"collapse",id:"addItem-"+e.name},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("form",{className:"form"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Name:"),l.a.createElement("input",{className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Description:"),l.a.createElement("input",{className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Price:"),l.a.createElement("input",{className:"form-control"})),l.a.createElement("button",{type:"button",className:"btn btn-success"},"Confirm"))))))),l.a.createElement("br",null))))})}var C=function(e){function a(){return Object(b.a)(this,a),Object(v.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(N.a)(a,e),Object(E.a)(a,[{key:"render",value:function(){var e=j(O);return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col border"},l.a.createElement("h2",null,"Categories:"))),l.a.createElement("div",{id:"categories"},e),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col border"},l.a.createElement("button",{type:"button",className:"btn btn-warning btn-md btn-block","data-toggle":"collapse","data-target":"#addCategory","aria-expanded":"false","aria-controls":"addCategory"},l.a.createElement("b",null,"Add Category")),l.a.createElement("div",{className:"collapse",id:"addCategory"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("form",{className:"form-inline"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Name:\xa0"),l.a.createElement("input",{className:"form-control"}),"\xa0",l.a.createElement("button",{type:"button",className:"btn btn-success"},"Confirm")))))))))}}]),a}(n.Component),w=t(14),k=t(11),x=function(e){function a(e){var t;return Object(b.a)(this,a),(t=Object(v.a)(this,Object(p.a)(a).call(this,e))).formSubmitHandler=function(){console.log(t.state),fetch("http://credit.17-356.isri.cmu.edu/api/transactions",{method:"POST",body:JSON.stringify({companyId:"1",ammount:sessionStorage.getItem("cartTotal")})}).then(function(e){return e.json()}).then(function(e){console.log(e.id)}).catch(function(e){console.error(e)})},t.state={location_lat:0,location_lon:0,card_number:""},t.handleInputChange=t.handleInputChange.bind(Object(k.a)(t)),t}return Object(N.a)(a,e),Object(E.a)(a,[{key:"handleInputChange",value:function(e){var a=e.target.name,t=e.target.value;this.setState(Object(w.a)({},a,t))}},{key:"render",value:function(){return l.a.createElement("form",null,l.a.createElement("label",null,"Delivery Latitude",l.a.createElement("input",{name:"location_lat",type:"number",value:this.state.location_lat,onChange:this.handleInputChange})),l.a.createElement("br",null),l.a.createElement("label",null,"Delivery Longitude:",l.a.createElement("input",{name:"location_lon",type:"number",value:this.state.location_lon,onChange:this.handleInputChange})),l.a.createElement("br",null),l.a.createElement("label",null,"Credit Card Number:",l.a.createElement("input",{name:"card_number",type:"number",value:this.state.card_number,onChange:this.handleInputChange})),l.a.createElement("a",{role:"button",className:"btn btn-primary",onClick:this.formSubmitHandler,href:"/menu"}," Submit "))}}]),a}(l.a.Component),I=function(e){function a(){return Object(b.a)(this,a),Object(v.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(N.a)(a,e),Object(E.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Welcome to Dronuts! We deliver donuts with drones!"))}}]),a}(n.Component),D=function(){return l.a.createElement("main",null,l.a.createElement(o.a,null,l.a.createElement(i.a,{exact:!0,path:"/",component:I}),l.a.createElement(i.a,{exact:!0,path:"/about",component:s}),l.a.createElement(i.a,{exact:!0,path:"/employee",component:u}),l.a.createElement(i.a,{exact:!0,path:"/locations",component:d}),l.a.createElement(i.a,{exact:!0,path:"/menu",component:y}),l.a.createElement(i.a,{exact:!0,path:"/employee/menu",component:C}),l.a.createElement(i.a,{exact:!0,path:"/order",component:x})))},P=function(e){function a(){return Object(b.a)(this,a),Object(v.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(N.a)(a,e),Object(E.a)(a,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"Dronuts"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/about"},"About Us")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/menu"},"Menu")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/locations"},"Locations")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/employee"},"Employee Site")))))}}]),a}(n.Component),S=function(e){function a(){return Object(b.a)(this,a),Object(v.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(N.a)(a,e),Object(E.a)(a,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},l.a.createElement("a",{className:"navbar-brand",href:"/employee"},"Dronuts for Employees"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/employee/menu"},"Update Menu")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/"},"Customer Site")))))}}]),a}(n.Component),_=window.location.pathname.includes("/employee")?l.a.createElement(S,null):l.a.createElement(P,null),A=function(){return l.a.createElement("div",null,_,l.a.createElement("div",{className:"container-fluid"},l.a.createElement(D,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(m.a,null,l.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.8e459eb9.chunk.js.map