(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,a,t){e.exports=t.p+"static/media/dronutbackground.15632c44.jpg"},34:function(e,a,t){e.exports=t(75)},40:function(e,a,t){},75:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),c=t.n(l),o=t(77),s=(t(40),t(79)),i=t(80),m=function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"About Us"),r.a.createElement("p",null,"We are Dronuts."))},u=t(4),d=t(5),b=t(7),p=t(6),E=t(8),v=t(19),h=t.n(v),f=t(78),N={day:"numeric",month:"long",weekday:"short",hour:"numeric",minute:"numeric",timeZoneName:"short",timeZone:"America/New_York"},g=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(b.a)(this,Object(p.a)(a).call(this,e))).state={orders:[]},t}return Object(E.a)(a,e),Object(d.a)(a,[{key:"componentWillMount",value:function(){var e=this;fetch("http://52.160.82.166/api/Orders?filter=%7B%22completion_status%22%3A%20%22In-Progress%22%7D").then(function(e){return e.text()}).then(JSON.parse).then(function(a){return e.setState({orders:a})})}},{key:"render",value:function(){var e=this.state.orders;return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("h1",null,"Pending Orders")),r.a.createElement("div",{className:"content padding"},e.map(function(e){return r.a.createElement(f.a,{style:{width:"20%"}},r.a.createElement(f.a.Body,null,r.a.createElement(f.a.Title,null,"Time Placed: ",new Intl.DateTimeFormat("en-US",N).format(new Date(e.time_placed))),r.a.createElement(f.a.Subtitle,{className:"mb-2 text-muted"},"Drone: ",e.drone_id),r.a.createElement(f.a.Text,null,"Items:",r.a.createElement("br",null),r.a.createElement("ul",null,e.items.map(function(e){return r.a.createElement("li",null,e)}))),r.a.createElement(f.a.Link,{href:"#"},"Cancel"),r.a.createElement(f.a.Link,{href:"#"},"Complete")))})),r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("span",{className:"text-muted"},"Dronuts Group 3"))))}}]),a}(n.Component),y=function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Locations"),r.a.createElement("p",null,r.a.createElement("b",null,"5000 Forbes Ave, Pittsburgh, PA 15213"),r.a.createElement("br",null),r.a.createElement("b",null,"Hours:")," 8:00am - 10:00pm",r.a.createElement("br",null),r.a.createElement("b",null,"Phone:")," 412-000-0000"))},O=t(13),C=t.n(O),j=function(e){function a(){var e;return Object(u.a)(this,a),(e=Object(b.a)(this,Object(p.a)(a).call(this))).state={menu:[],cart:[]},e}return Object(E.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;C.a.get("/api/Items").then(function(a){e.setState({menu:a.data})}),sessionStorage.getItem("cart")&&this.setState({cart:JSON.parse(sessionStorage.getItem("cart"))})}},{key:"addToCart",value:function(e){var a=this.state.cart,t=a.find(function(a){return a.id===e.id});null==t?a.push({id:e.id,name:e.name,price:e.price,quantity:1}):t.quantity++,this.setState({cart:a}),sessionStorage.setItem("cart",JSON.stringify(this.state.cart))}},{key:"removeFromCart",value:function(e){var a=this.state.cart,t=a.find(function(a){return a.id===e.id});null!=t&&(t.quantity<=1?a.splice(a.indexOf(t),1):t.quantity--,this.setState({cart:a}),sessionStorage.setItem("cart",JSON.stringify(this.state.cart)))}},{key:"render",value:function(){var e=this,a=this.state.menu.map(function(a){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8 border"},a.name,r.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:function(){return e.addToCart(a)}},"Add to cart")),r.a.createElement("div",{className:"col-4 border text-right"},"$",a.price))}),t=r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8 border text-center"},r.a.createElement("b",null,"Item")),r.a.createElement("div",{className:"col-4 border text-center"},r.a.createElement("b",null,"Price"))),a),n=this.state.cart.map(function(a){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-5 border"},a.name),r.a.createElement("div",{className:"col-3 border text-right"},"$",a.price),r.a.createElement("div",{className:"col-4 border text-right"},a.quantity,"\xa0",r.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:function(){return e.addToCart(a)}},"+"),"\xa0",r.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:function(){return e.removeFromCart(a)}},"-")))}),l=0;this.state.cart.map(function(e){return l+=e.price*e.quantity}),l=Math.round(100*l)/100,sessionStorage.setItem("cartTotal",l);var c=r.a.createElement("div",null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-5 border text-center"},r.a.createElement("b",null,"Item")),r.a.createElement("div",{className:"col-3 border text-center"},r.a.createElement("b",null,"Price")),r.a.createElement("div",{className:"col-4 border text-center"},r.a.createElement("b",null,"Quantity"))),n),r.a.createElement("h4",null,"Total: $",l),r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"/order"},"Place Order"));return r.a.createElement("div",null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8 border text-center"},r.a.createElement("h3",null,"Menu")),r.a.createElement("div",{className:"col-4 border text-center"},r.a.createElement("h3",null,"My Cart"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8 border"},t),r.a.createElement("div",{className:"col-4 border text-center"},c))),r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("span",{className:"text-muted"},"Dronuts Group 3"))))}}]),a}(n.Component),x=[{name:"Donuts",items:[{name:"Plain Donut",description:"Good old plain donut, probably the healthiest.",price:.8},{name:"Glazed Donut",description:"Because plain donuts are boring, and diabetes is not a problem.",price:1}]},{name:"Beverages",items:[{name:"Coffee",description:"Can't survive CMU without this.",price:1}]}];function k(e){return e.map(function(e){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col border"},r.a.createElement("h4",null,e.name,":"),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4 border"},r.a.createElement("b",null,"Item")),r.a.createElement("div",{className:"col-6 border"},r.a.createElement("b",null,"Description")),r.a.createElement("div",{className:"col-2 border"},r.a.createElement("b",null,"Price"))),function(e){return e.items.map(function(e){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4 border"},e.name),r.a.createElement("div",{className:"col-6 border"},e.description),r.a.createElement("div",{className:"col-2 border"},"$",e.price))})}(e),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col border"},r.a.createElement("button",{type:"button",className:"btn btn-warning btn-sm btn-block","data-toggle":"collapse","data-target":"#addItem-"+e.name,"aria-expanded":"false","aria-controls":"addItem-"+e.name},r.a.createElement("b",null,"Add Item")),r.a.createElement("div",{className:"collapse",id:"addItem-"+e.name},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{className:"form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Name:"),r.a.createElement("input",{className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Description:"),r.a.createElement("input",{className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Price:"),r.a.createElement("input",{className:"form-control"})),r.a.createElement("button",{type:"button",className:"btn btn-success"},"Confirm"))))))),r.a.createElement("br",null))))})}var w=function(e){function a(){return Object(u.a)(this,a),Object(b.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=k(x);return r.a.createElement("div",null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col border"},r.a.createElement("h2",null,"Categories:"))),r.a.createElement("div",{id:"categories"},e),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col border"},r.a.createElement("button",{type:"button",className:"btn btn-warning btn-md btn-block","data-toggle":"collapse","data-target":"#addCategory","aria-expanded":"false","aria-controls":"addCategory"},r.a.createElement("b",null,"Add Category")),r.a.createElement("div",{className:"collapse",id:"addCategory"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{className:"form-inline"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Name:\xa0"),r.a.createElement("input",{className:"form-control"}),"\xa0",r.a.createElement("button",{type:"button",className:"btn btn-success"},"Confirm"))))))))),r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("span",{className:"text-muted"},"Dronuts Group 3"))))}}]),a}(n.Component),I=t(30),S=t(15),_=t(31),D=t.n(_),P=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(b.a)(this,Object(p.a)(a).call(this,e))).state={location_lat:0,location_lon:0,card_number:""},t.handleInputChange=t.handleInputChange.bind(Object(S.a)(t)),t.formSubmitHandler=t.formSubmitHandler.bind(Object(S.a)(t)),t}return Object(E.a)(a,e),Object(d.a)(a,[{key:"handleInputChange",value:function(e){var a=e.target.name,t=e.target.value;this.setState(function(e){return Object(I.a)({},a,t)})}},{key:"formSubmitHandler",value:function(e){e.preventDefault();var a=this.state,t=a.location_lat,n=a.location_lon,r=a.card_number;console.log(this.state),console.log(r),C.a.post("http://credit.17-356.isri.cmu.edu/api/transactions",{companyId:"1",ammount:sessionStorage.getItem("cartTotal")}),C.a.put("http://drones.17-356.isri.cmu.edu/api/drones/69/send",{id:69,lat:parseFloat(t),lon:parseFloat(n)}),console.log(this.state.location_lat),C.a.post("http://localhost:80/api/Orders",{user_id:"string",drone_id:"string",items:["donut"],destination_lat:this.state.location_lat,destination_lon:this.state.location_lon,completion_status:"In-Progress",time_placed:"2019-02-26T05:50:28.279Z",time_delivered:"2019-02-26T05:50:28.279Z"}),D.a.alert("Your Order Has Been Placed"),console.log("pop up should have been made")}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.formSubmitHandler},r.a.createElement("label",null,"Delivery Latitude",r.a.createElement("input",{name:"location_lat",type:"number",value:this.state.location_lat,onChange:this.handleInputChange})),r.a.createElement("br",null),r.a.createElement("label",null,"Delivery Longitude:",r.a.createElement("input",{name:"location_lon",type:"number",value:this.state.location_lon,onChange:this.handleInputChange})),r.a.createElement("br",null),r.a.createElement("label",null,"Credit Card Number:",r.a.createElement("input",{name:"card_number",type:"number",value:this.state.card_number,onChange:this.handleInputChange})),r.a.createElement("button",{type:"button",class:"btn btn-primary",onClick:this.formSubmitHandler},"Submit"))}}]),a}(r.a.Component),q=function(e){function a(){return Object(u.a)(this,a),Object(b.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"content"},r.a.createElement("img",{src:h.a,className:"mainImg"}),r.a.createElement("div",{className:"about"},r.a.createElement("h3",null,"About Us"),r.a.createElement("br",null),r.a.createElement("h4",null,"We are Dronuts, your local drone donut delivery service."),r.a.createElement("div",{className:"container"},r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum ex eget convallis volutpat. Nam lacinia dignissim lacus et ultrices. Cras fermentum magna id tortor sollicitudin, non porta urna imperdiet. Vestibulum placerat lacus metus, id congue orci lacinia quis. Vestibulum euismod sodales turpis a accumsan. In hac habitasse platea dictumst. Mauris scelerisque magna dolor. Aliquam et metus ante. Aenean sed arcu non velit iaculis commodo. Curabitur auctor libero lobortis lectus porttitor, nec placerat mi sodales. Fusce et enim suscipit, dignissim diam quis, dignissim erat. Vestibulum rutrum lacinia risus, eget consectetur quam pharetra vel. Aenean suscipit turpis et turpis euismod, sed placerat ante gravida. Curabitur a tempor eros. Donec commodo risus vel augue efficitur ullamcorper. Nulla id nulla finibus, congue nisi non, congue nunc."),r.a.createElement("br",null),r.a.createElement("p",null,"Integer sed efficitur nibh. Pellentesque posuere nulla a ullamcorper luctus. Aenean posuere in elit sed egestas. Morbi orci leo, scelerisque vitae neque ut, bibendum pulvinar urna. Sed tristique suscipit sem. Aliquam ac faucibus elit. Nullam eget dolor eu magna aliquam vehicula sit amet a purus. Nulla sed sem vestibulum, blandit augue aliquam, mattis turpis. Proin mi augue, dignissim in lectus sit amet, feugiat consectetur turpis."))),r.a.createElement("div",{className:"location"},r.a.createElement("h3",null,"Location"),r.a.createElement("p",null,r.a.createElement("b",null,"5000 Forbes Ave, Pittsburgh, PA 15213"),r.a.createElement("br",null),r.a.createElement("b",null,"Hours:"),"8:00am - 10:00pm everyday",r.a.createElement("br",null),r.a.createElement("b",null,"Phone:")," 412-000-0000"))),r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("span",{className:"text-muted"},"Dronuts Group 3"))))}}]),a}(n.Component),A=function(){return r.a.createElement("main",null,r.a.createElement(s.a,null,r.a.createElement(i.a,{exact:!0,path:"/",component:q}),r.a.createElement(i.a,{exact:!0,path:"/about",component:m}),r.a.createElement(i.a,{exact:!0,path:"/employee",component:g}),r.a.createElement(i.a,{exact:!0,path:"/locations",component:y}),r.a.createElement(i.a,{exact:!0,path:"/menu",component:j}),r.a.createElement(i.a,{exact:!0,path:"/employee/menu",component:w}),r.a.createElement(i.a,{exact:!0,path:"/order",component:P})))},T=function(e){function a(){return Object(u.a)(this,a),Object(b.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary navbar-fixed-top"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"Dronuts"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/menu"},"Menu"))),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/employee"},"Employee Site")))))}}]),a}(n.Component),M=function(e){function a(){return Object(u.a)(this,a),Object(b.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("a",{className:"navbar-brand",href:"/employee"},"Dronuts for Employees"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/employee/menu"},"Update Menu"))),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/"},"Customer Site")))))}}]),a}(n.Component),F=function(e){function a(){return Object(u.a)(this,a),Object(b.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("span",{className:"text-muted"},"Dronuts Group 3")))}}]),a}(n.Component),H=window.location.pathname.includes("/employee")?r.a.createElement(M,null):r.a.createElement(T,null),B=function(){return r.a.createElement("div",null,H,r.a.createElement(A,null),F)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(o.a,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.f0dcb248.chunk.js.map