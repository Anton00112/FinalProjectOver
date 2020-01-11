(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{42:function(e,t,a){e.exports=a(69)},69:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),l=a.n(r),s=a(10),i=a(15),o=a(16),u=a(20),d=a(17),p=a(21),m=a(19),f=a(18),E=a.n(f),h=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).saveProduct=function(e){a.setState(Object(s.a)({},e.target.id,e.target.value))},a.addNewProduct=function(e){""===a.state.name||""===a.state.type||""===a.state.description||""===a.state.date||""===a.state.price?(e.preventDefault(),alert("Please fill in the required fields:")):""===a.state.name&&""===a.state.type&&""===a.state.description&&""===a.state.date&&""===a.state.price||E.a.post("https://hidden-everglades-59214.herokuapp.com/api/v1/products/",{name:a.state.name,type:a.state.type,description:a.state.description,date:a.state.date,price:a.state.price,_created:new Date},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},a.state={name:"",type:"",description:"",date:"",price:""},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{class:"new-container"},c.a.createElement("div",{class:"first-container"},c.a.createElement("div",{id:"new-product"},c.a.createElement("form",null,c.a.createElement("p",{class:"input-container"},c.a.createElement("label",{class:"text-field-input",for:"name"},"Product Name"),c.a.createElement("input",{type:"text",name:"name",class:"text-field",onChange:this.saveProduct})),c.a.createElement("p",{class:"input-container"},c.a.createElement("label",{class:"text-field-input",for:"description"},"Product Description"),c.a.createElement("input",{type:"text",name:"description",class:"text-field",onChange:this.saveProduct})),c.a.createElement("p",{class:"input-container"},c.a.createElement("label",{class:"text-field-input",for:"type"},"Product Type"),c.a.createElement("input",{type:"text",name:"type",class:"text-field",onChange:this.saveProduct})),c.a.createElement("p",{class:"input-container"},c.a.createElement("label",{class:"text-field-input",for:"date"},"Purchase Date"),c.a.createElement("input",{type:"date",name:"date",class:"text-field",onChange:this.saveProduct})),c.a.createElement("p",{class:"input-container"},c.a.createElement("label",{class:"text-field-input",for:"price"},"Product Price"),c.a.createElement("input",{type:"text",name:"price",class:"text-field",onChange:this.saveProduct})),c.a.createElement("button",{onClick:this.addNewProduct,class:"primary-button",type:"submit"},"CREATE PRODUCT")))),c.a.createElement("div",{class:"second-container"},c.a.createElement("div",{class:"products-add"},c.a.createElement("i",{class:"fas fa-plus-circle fa-3x"}),c.a.createElement("p",null,"You are creating a new product")))))}}]),t}(c.a.Component);var b=Object(m.b)((function(e){return{}}))(h),v=a(9),g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).saveInputValue=function(e){a.setState(Object(s.a)({},e.target.id,e.target.value))},a.redirectToMain=function(){if(a.state.isAuthenticated)return c.a.createElement(v.a,{to:"/products"})},a.logIn=function(e){""===a.state.email||""===a.state.password?(e.preventDefault(),alert("Please fill in the required fields:")):""===a.state.email&&""===a.state.password||(e.preventDefault(),E.a.post("https://hidden-everglades-59214.herokuapp.com/api/v1/auth/login",{email:a.state.email,password:a.state.password}).then((function(e){localStorage.setItem("jwt",e.data.jwt),localStorage.setItem("first_name",e.data.first_name),localStorage.setItem("last_name",e.data.last_name),a.setState({isAuthenticated:!0})})).catch((function(e){console.log(e)})))},a.state={email:"",password:"",isAuthenticated:!1},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,this.redirectToMain(),c.a.createElement("div",{id:"login"},c.a.createElement("div",{class:"box-container"},c.a.createElement("form",null,c.a.createElement("p",{class:"input-container"},c.a.createElement("label",{class:"text-field-input",for:"email"},"E-mail"),c.a.createElement("input",{onChange:this.saveInputValue,type:"email",name:"email",id:"email",class:"text-field"})),c.a.createElement("p",{class:"input-container"},c.a.createElement("label",{class:"text-field-input",for:"password"},"Password"),c.a.createElement("input",{onChange:this.saveInputValue,type:"password",name:"password",id:"password",class:"text-field"})),c.a.createElement("button",{class:"primary-button",type:"submit",onClick:this.logIn},"SIGN IN"))),c.a.createElement("div",{class:"aditional-info"},c.a.createElement("p",null,"Or if you don't have an account.",c.a.createElement("a",{href:"#"}," Register")))))}}]),t}(c.a.Component),y=a(25),O=a(11),j=a(40),w=a.n(j),x=a(41),P=a(22),C={products:[]};var I=Object(O.c)({productReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PRODUCTS":return Object(P.a)({},e,{products:t.payload});case"SAVE_PRODUCT":return Object(P.a)({},e,{products:[].concat(Object(x.a)(e.products),[t.payload])});case"DELETE_PRODUCT":var a=e.products.filter((function(e){return t.payload._id!==e._id}));return Object(P.a)({},e,{products:a});default:return e}}}),D=Object(O.d)(I,Object(O.a)(w.a));console.log(D.getState());var S=D,T=document.getElementById("root");l.a.render(c.a.createElement(m.a,{store:S},c.a.createElement((function(){return c.a.createElement(y.a,null,c.a.createElement(v.d,null,c.a.createElement(v.b,{exact:!0,path:"/",component:g}),c.a.createElement(v.b,{exact:!0,path:"/newproduct",render:function(){return c.a.createElement(b,{component:b})}})))}),null)),T)}},[[42,1,2]]]);
//# sourceMappingURL=main.850bc6d6.chunk.js.map