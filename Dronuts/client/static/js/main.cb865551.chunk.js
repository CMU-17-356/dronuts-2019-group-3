(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/dronutbackground.15632c44.jpg"},35:function(e,t,a){e.exports=a(79)},41:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),c=a.n(l),o=a(81),s=(a(41),a(83)),i=a(84),m=function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"About Us"),r.a.createElement("p",null,"We are Dronuts."))},u=a(4),d=a(5),b=a(7),p=a(6),E=a(8),v=a(20),h=a.n(v),f=a(82),g={day:"numeric",month:"long",weekday:"short",hour:"numeric",minute:"numeric",timeZoneName:"short",timeZone:"America/New_York"},N=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(b.a)(this,Object(p.a)(t).call(this,e))).state={orders:[]},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("http://52.160.82.166/api/Orders?filter=%7B%22completion_status%22%3A%20%22In-Progress%22%7D").then(function(e){return e.text()}).then(JSON.parse).then(function(t){return e.setState({orders:t})})}},{key:"render",value:function(){var e=this.state.orders;return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("h1",null,"Pending Orders")),r.a.createElement("div",{className:"content padding"},e.map(function(e){return r.a.createElement(f.a,{style:{width:"20%"}},r.a.createElement(f.a.Body,null,r.a.createElement(f.a.Title,null,"Time Placed: ",new Intl.DateTimeFormat("en-US",g).format(new Date(e.time_placed))),r.a.createElement(f.a.Subtitle,{className:"mb-2 text-muted"},"Drone: ",e.drone_id),r.a.createElement(f.a.Text,null,"Items:",r.a.createElement("br",null),r.a.createElement("ul",null,e.items.map(function(e){return r.a.createElement("li",null,e)}))),r.a.createElement(f.a.Link,{href:"#"},"Cancel"),r.a.createElement(f.a.Link,{href:"#"},"Complete")))})),r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("span",{className:"text-muted"},"Dronuts Group 3"))))}}]),t}(n.Component),y=function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Locations"),r.a.createElement("p",null,r.a.createElement("b",null,"5000 Forbes Ave, Pittsburgh, PA 15213"),r.a.createElement("br",null),r.a.createElement("b",null,"Hours:")," 8:00am - 10:00pm",r.a.createElement("br",null),r.a.createElement("b",null,"Phone:")," 412-000-0000"))},O=a(12),j=a.n(O),_=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(b.a)(this,Object(p.a)(t).call(this))).state={menu:[],cart:[]},e}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.a.get("/api/Items").then(function(t){e.setState({menu:t.data})}),sessionStorage.getItem("cart")&&this.setState({cart:JSON.parse(sessionStorage.getItem("cart"))})}},{key:"addToCart",value:function(e){var t=this.state.cart,a=t.find(function(t){return t.id===e.id});null==a?t.push({id:e.id,name:e.name,price:e.price,quantity:1}):a.quantity++,this.setState({cart:t}),sessionStorage.setItem("cart",JSON.stringify(this.state.cart))}},{key:"removeFromCart",value:function(e){var t=this.state.cart,a=t.find(function(t){return t.id===e.id});null!=a&&(a.quantity<=1?t.splice(t.indexOf(a),1):a.quantity--,this.setState({cart:t}),sessionStorage.setItem("cart",JSON.stringify(this.state.cart)))}},{key:"render",value:function(){var e=this,t=this.state.menu.map(function(t){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8 border"},t.name,r.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:function(){return e.addToCart(t)}},"Add to cart")),r.a.createElement("div",{className:"col-4 border text-right"},"$",t.price))}),a=r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8 border text-center"},r.a.createElement("b",null,"Item")),r.a.createElement("div",{className:"col-4 border text-center"},r.a.createElement("b",null,"Price"))),t),n=this.state.cart.map(function(t){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-5 border"},t.name),r.a.createElement("div",{className:"col-3 border text-right"},"$",t.price),r.a.createElement("div",{className:"col-4 border text-right"},t.quantity,"\xa0",r.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:function(){return e.addToCart(t)}},"+"),"\xa0",r.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:function(){return e.removeFromCart(t)}},"-")))}),l=0;this.state.cart.map(function(e){return l+=e.price*e.quantity}),l=Math.round(100*l)/100,sessionStorage.setItem("cartTotal",l);var c=r.a.createElement("div",null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-5 border text-center"},r.a.createElement("b",null,"Item")),r.a.createElement("div",{className:"col-3 border text-center"},r.a.createElement("b",null,"Price")),r.a.createElement("div",{className:"col-4 border text-center"},r.a.createElement("b",null,"Quantity"))),n),r.a.createElement("h4",null,"Total: $",l),r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"/order"},"Place Order"));return r.a.createElement("div",null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8 border text-center"},r.a.createElement("h3",null,"Menu")),r.a.createElement("div",{className:"col-4 border text-center"},r.a.createElement("h3",null,"My Cart"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8 border"},a),r.a.createElement("div",{className:"col-4 border text-center"},c))),r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("span",{className:"text-muted"},"Dronuts Group 3"))))}}]),t}(n.Component),C=[{name:"Donuts",items:[{name:"Plain Donut",description:"Good old plain donut, probably the healthiest.",price:.8},{name:"Glazed Donut",description:"Because plain donuts are boring, and diabetes is not a problem.",price:1}]},{name:"Beverages",items:[{name:"Coffee",description:"Can't survive CMU without this.",price:1}]}];function x(e){return e.map(function(e){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col border"},r.a.createElement("h4",null,e.name,":"),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4 border"},r.a.createElement("b",null,"Item")),r.a.createElement("div",{className:"col-6 border"},r.a.createElement("b",null,"Description")),r.a.createElement("div",{className:"col-2 border"},r.a.createElement("b",null,"Price"))),function(e){return e.items.map(function(e){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4 border"},e.name),r.a.createElement("div",{className:"col-6 border"},e.description),r.a.createElement("div",{className:"col-2 border"},"$",e.price))})}(e),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col border"},r.a.createElement("button",{type:"button",className:"btn btn-warning btn-sm btn-block","data-toggle":"collapse","data-target":"#addItem-"+e.name,"aria-expanded":"false","aria-controls":"addItem-"+e.name},r.a.createElement("b",null,"Add Item")),r.a.createElement("div",{className:"collapse",id:"addItem-"+e.name},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{className:"form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Name:"),r.a.createElement("input",{className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Description:"),r.a.createElement("input",{className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Price:"),r.a.createElement("input",{className:"form-control"})),r.a.createElement("button",{type:"button",className:"btn btn-success"},"Confirm"))))))),r.a.createElement("br",null))))})}var w=function(e){function t(){return Object(u.a)(this,t),Object(b.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=x(C);return r.a.createElement("div",null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col border"},r.a.createElement("h2",null,"Categories:"))),r.a.createElement("div",{id:"categories"},e),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col border"},r.a.createElement("button",{type:"button",className:"btn btn-warning btn-md btn-block","data-toggle":"collapse","data-target":"#addCategory","aria-expanded":"false","aria-controls":"addCategory"},r.a.createElement("b",null,"Add Category")),r.a.createElement("div",{className:"collapse",id:"addCategory"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{className:"form-inline"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Name:\xa0"),r.a.createElement("input",{className:"form-control"}),"\xa0",r.a.createElement("button",{type:"button",className:"btn btn-success"},"Confirm"))))))))),r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("span",{className:"text-muted"},"Dronuts Group 3"))))}}]),t}(n.Component),k=a(16),S=a.n(k),I=a(21),D=a(32),q=a(15),P=(a(65),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(b.a)(this,Object(p.a)(t).call(this,e))).state={location_lat:0,location_lon:0,location_string:"",location_display_name:"",card_number:"",customer_name:"",drone_id:"70"},a.handleInputChange=a.handleInputChange.bind(Object(q.a)(a)),a.formSubmitHandler=a.formSubmitHandler.bind(Object(q.a)(a)),a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target.name,a=e.target.value;this.setState(function(e){return Object(D.a)({},t,a)})}},{key:"formSubmitHandler",value:function(){var e=Object(I.a)(S.a.mark(function e(t){var a,n,r,l,c,o,s,i,m;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a=this,n="",r=this.state,r.location_lat,r.location_lon,l=r.location_string,c=r.card_number,console.log(this.state),console.log(c),j.a.post("http://credit.17-356.isri.cmu.edu/api/transactions",{companyId:"1",ammount:sessionStorage.getItem("cartTotal")}).then(function(e){console.log(e),n=e.data.id,console.log(n)}).then(function(){j.a.post("http://credit.17-356.isri.cmu.edu/api/transactions/".concat(n,"/process"),{id:n,customer_details:a.state.customer_name,credit_card:c}).then(function(e){console.log(e)})}),j.a.get("https://us1.locationiq.com/v1/search.php",{params:{key:"19855c1a20ede5",q:l,format:"json"}}).then(function(e){console.log(e),a.setState({location_lat:parseFloat(e.data[0].lat)}),a.setState({location_lon:parseFloat(e.data[0].lon)}),a.setState({location_display_name:e.data[0].display_name}),console.log(a.state),alert("Your Order to:\n"+a.state.location_display_name+"\nHas Been Placed! \nReturn to the menu to place another."),console.log("pop up should have been made")}).catch(function(e){console.log(e)}),o=[],69,j.a.get("http://drones.17-356.isri.cmu.edu/api/airbases/team3",{id:"team3"}).then(function(e){console.log(e),o=e.data.drones,console.log(o),o.forEach(function(){var t=Object(I.a)(S.a.mark(function t(n,r){return S.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.get("http://drones.17-356.isri.cmu.edu/api/drones/".concat(n),{id:n});case 2:console.log(n,e.current_delivery),null!=e.current_delivery&&void 0!=e.current_delivery||(a.setState({drone_id:n}),console.log("should select this drone",69,n));case 4:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}())}),console.log(sessionStorage.getItem("cart")),s=new Date,i=JSON.parse(sessionStorage.getItem("cart")),console.log(i),console.log(69),m=i.map(function(e){return e.name}),j.a.post("http://localhost:80/api/Orders",{user_id:a.state.customer_name,drone_id:a.state.drone_id,items:m,destination_lat:a.state.location_lat,destination_lon:a.state.location_lon,completion_status:"In-Progress",time_placed:s,time_delivered:s});case 18:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.formSubmitHandler},r.a.createElement("label",null,"Your Name:",r.a.createElement("input",{name:"customer_name",type:"string",value:this.state.customer_name,onChange:this.handleInputChange})),r.a.createElement("br",null),r.a.createElement("label",null,"Delivery Address:",r.a.createElement("input",{name:"location_string",type:"string",value:this.state.location_string,onChange:this.handleInputChange})),r.a.createElement("br",null),r.a.createElement("label",null,"Credit Card Number:",r.a.createElement("input",{name:"card_number",type:"number",value:this.state.card_number,onChange:this.handleInputChange})),r.a.createElement("br",null),r.a.createElement("button",{type:"button",class:"btn btn-primary",onClick:this.formSubmitHandler},"Submit"),r.a.createElement("br",null),r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"/menu"}," Return to Menu "))}}]),t}(r.a.Component)),A=function(e){function t(){return Object(u.a)(this,t),Object(b.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"content"},r.a.createElement("img",{src:h.a,className:"mainImg"}),r.a.createElement("div",{className:"about"},r.a.createElement("h3",null,"About Us"),r.a.createElement("br",null),r.a.createElement("h4",null,"We are Dronuts, your local drone donut delivery service."),r.a.createElement("div",{className:"container"},r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum ex eget convallis volutpat. Nam lacinia dignissim lacus et ultrices. Cras fermentum magna id tortor sollicitudin, non porta urna imperdiet. Vestibulum placerat lacus metus, id congue orci lacinia quis. Vestibulum euismod sodales turpis a accumsan. In hac habitasse platea dictumst. Mauris scelerisque magna dolor. Aliquam et metus ante. Aenean sed arcu non velit iaculis commodo. Curabitur auctor libero lobortis lectus porttitor, nec placerat mi sodales. Fusce et enim suscipit, dignissim diam quis, dignissim erat. Vestibulum rutrum lacinia risus, eget consectetur quam pharetra vel. Aenean suscipit turpis et turpis euismod, sed placerat ante gravida. Curabitur a tempor eros. Donec commodo risus vel augue efficitur ullamcorper. Nulla id nulla finibus, congue nisi non, congue nunc."),r.a.createElement("br",null),r.a.createElement("p",null,"Integer sed efficitur nibh. Pellentesque posuere nulla a ullamcorper luctus. Aenean posuere in elit sed egestas. Morbi orci leo, scelerisque vitae neque ut, bibendum pulvinar urna. Sed tristique suscipit sem. Aliquam ac faucibus elit. Nullam eget dolor eu magna aliquam vehicula sit amet a purus. Nulla sed sem vestibulum, blandit augue aliquam, mattis turpis. Proin mi augue, dignissim in lectus sit amet, feugiat consectetur turpis."))),r.a.createElement("div",{className:"location"},r.a.createElement("h3",null,"Location"),r.a.createElement("p",null,r.a.createElement("b",null,"5000 Forbes Ave, Pittsburgh, PA 15213"),r.a.createElement("br",null),r.a.createElement("b",null,"Hours:"),"8:00am - 10:00pm everyday",r.a.createElement("br",null),r.a.createElement("b",null,"Phone:")," 412-000-0000"))),r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("span",{className:"text-muted"},"Dronuts Group 3"))))}}]),t}(n.Component),M=function(){return r.a.createElement("main",null,r.a.createElement(s.a,null,r.a.createElement(i.a,{exact:!0,path:"/",component:A}),r.a.createElement(i.a,{exact:!0,path:"/about",component:m}),r.a.createElement(i.a,{exact:!0,path:"/employee",component:N}),r.a.createElement(i.a,{exact:!0,path:"/locations",component:y}),r.a.createElement(i.a,{exact:!0,path:"/menu",component:_}),r.a.createElement(i.a,{exact:!0,path:"/employee/menu",component:w}),r.a.createElement(i.a,{exact:!0,path:"/order",component:P})))},T=function(e){function t(){return Object(u.a)(this,t),Object(b.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary navbar-fixed-top"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"Dronuts"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/menu"},"Menu"))),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/employee"},"Employee Site")))))}}]),t}(n.Component),F=function(e){function t(){return Object(u.a)(this,t),Object(b.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("a",{className:"navbar-brand",href:"/employee"},"Dronuts for Employees"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/employee/menu"},"Update Menu"))),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/"},"Customer Site")))))}}]),t}(n.Component),H=function(e){function t(){return Object(u.a)(this,t),Object(b.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("span",{className:"text-muted"},"Dronuts Group 3")))}}]),t}(n.Component),B=window.location.pathname.includes("/employee")?r.a.createElement(F,null):r.a.createElement(T,null),G=function(){return r.a.createElement("div",null,B,r.a.createElement(M,null),H)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(o.a,null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.cb865551.chunk.js.map