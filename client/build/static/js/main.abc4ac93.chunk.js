(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{42:function(e,t,a){},48:function(e,t,a){e.exports=a(82)},53:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),l=a.n(c),i=a(16),o=a(10),s=a(11),d=a(13),u=a(12),p=a(14),m=(a(53),a(21)),h=a(23),E=function(e){return{type:"GET_PRODUCTS",payload:e}},f=function(e){return{type:"TABLE_UPDATED",tableUpdated:e}},b=a(22),g=a(43),v=a.n(g),P=a(47),y=a(19),C={products:[],tableUpdated:!1,totalPrice:"",productToEdit:"",editProductClicked:""};var N=Object(b.c)({productReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PRODUCTS":return Object(y.a)({},e,{products:t.payload});case"SAVE_PRODUCT":return Object(y.a)({},e,{products:[].concat(Object(P.a)(e.products),[t.payload])});case"EDIT_PRODUCT":return Object(y.a)({},e,{productToEdit:t.product});case"EDIT_PRODUCT_CLICKED":return Object(y.a)({},e,{editProductClicked:t.editProductClicked});case"DELETE_PRODUCT":var a=e.products.filter((function(e){return t.payload._id!==e._id}));return Object(y.a)({},e,{products:a});case"GET_TOTAL_PRICE":return Object(y.a)({},e,{totalPrice:t.payload});case"TABLE_UPDATED":return Object(y.a)({},e,{tableUpdated:t.tableUpdated});default:return e}}}),O=Object(b.d)(N,Object(b.a)(v.a));console.log(O.getState());var T=O,_=a(3),j=a(17),k=a(7),w=a.n(k),x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).saveProduct=function(e){a.setState(Object(i.a)({},e.target.id,e.target.value))},a.addNewProduct=function(e){""===a.state.name||""===a.state.description||""===a.state.type||""===a.state.date||""===a.state.price?(e.preventDefault(),alert("Please fill in the required fields:")):""===a.state.name&&""===a.state.description&&""===a.state.type&&""===a.state.date&&""===a.state.price||w.a.post("https://hidden-everglades-59214.herokuapp.com/app/v1/products/",{name:a.state.name,description:a.state.description,type:a.state.type,date:a.state.date,price:a.state.price,_created:new Date},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},a.editProduct=function(e){""===a.state.name||""===a.state.type||""===a.state.description||""===a.state.date||""===a.state.price?(alert("Please fill in the required fields:"),e.preventDefault()):(T.dispatch(f(!a.state.tableUpdated)),w.a.put("https://hidden-everglades-59214.herokuapp.com/app/v1/products/".concat(a.props.productToEdit._id),{name:a.state.name,type:a.state.type,description:a.state.description,date:a.state.date,price:a.state.price,_modified:new Date},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})))},a.state={name:a.props.editProductClicked?a.props.productToEdit.name:"",type:a.props.editProductClicked?a.props.productToEdit.type:"",description:a.props.editProductClicked?a.props.productToEdit.description:"",date:a.props.editProductClicked?a.props.productToEdit.date:"",price:a.props.editProductClicked?a.props.productToEdit.price:"",tableUpdated:!1},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.editProductClicked?r.a.createElement("h1",{id:"new-products-h3"},"Edit Product"):r.a.createElement("h1",{id:"new-products-h3"},"New Product"),r.a.createElement("div",{className:"new-container"},r.a.createElement("div",{className:"first-container"},r.a.createElement("div",{id:"new-product"},r.a.createElement("form",null,r.a.createElement("p",{className:"input-container"},r.a.createElement("label",{className:"text-field-input",htmlFor:"name"},"Product Name"),r.a.createElement("input",{defaultValue:this.props.editProductClicked?this.props.productToEdit.name:"",type:"text",name:"name",className:"text-field",id:"name",onChange:this.saveProduct})),r.a.createElement("p",{className:"input-container"},r.a.createElement("label",{className:"text-field-input",htmlFor:"description"},"Product Description"),r.a.createElement("input",{defaultValue:this.props.editProductClicked?this.props.productToEdit.description:"",type:"text",name:"description",className:"text-field",id:"description",onChange:this.saveProduct})),r.a.createElement("p",{className:"input-container"},r.a.createElement("label",{className:"text-field-input",htmlFor:"type"},"Product Type"),r.a.createElement("input",{defaultValue:this.props.editProductClicked?this.props.productToEdit.type:"",type:"text",name:"type",className:"text-field",id:"type",onChange:this.saveProduct})),r.a.createElement("p",{className:"input-container"},r.a.createElement("label",{className:"text-field-input",htmlFor:"date"},"Purchase Date"),r.a.createElement("input",{defaultValue:this.props.editProductClicked?this.props.productToEdit.date.toString().slice(0,10):"",type:"date",name:"date",className:"text-field",id:"date",onChange:this.saveProduct})),r.a.createElement("p",{className:"input-container"},r.a.createElement("label",{className:"text-field-input",htmlFor:"price"},"Product Price"),r.a.createElement("input",{defaultValue:this.props.editProductClicked?Number(this.props.productToEdit.price):"",type:"text",name:"price",className:"text-field",id:"price",onChange:this.saveProduct})),r.a.createElement(_.b,{to:"/products"},this.props.editProductClicked?r.a.createElement("button",{onClick:this.editProduct,id:"primary-button",className:"primary-button",type:"submit"},"EDIT PRODUCT"):r.a.createElement("button",{onClick:this.addNewProduct,className:"primary-button",type:"submit"},"CREATE PRODUCT"))))),r.a.createElement("div",{className:"second-container"},r.a.createElement("div",{className:"products-add"},r.a.createElement(h.a,{icon:m.b,style:{color:"#8D8D8D"},size:"3x"}),this.props.editProductClicked?r.a.createElement("p",null,"You are editing a product"):r.a.createElement("p",null,"You are creating a new product")))))}}]),t}(r.a.Component);var D=Object(j.b)((function(e){return{productToEdit:e.productReducer.productToEdit,editProductClicked:e.productReducer.editProductClicked,tableUpdated:e.productReducer.tableUpdated}}))(x),I=(a(77),a(46)),U=(a(78),a(79),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).editProduct=function(e){var t=!a.state.editProductClicked;T.dispatch(function(e,t){return{type:"EDIT_PRODUCT",product:e,editProductClicked:t}}(e)),T.dispatch({type:"EDIT_PRODUCT_CLICKED",editProductClicked:t})},a.handleClose=function(){a.setState({isOpen:!1})},a.handleOpen=function(){a.setState({isOpen:!0})},a.state={editProductClicked:!1,isOpen:!1},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=null;return this.props.products&&(t=this.props.products.map((function(t){return r.a.createElement("tr",{key:t._id},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.type),r.a.createElement("td",null,t.description),r.a.createElement("td",null,t.date.toString().slice(0,10)),r.a.createElement("td",null,t.price),r.a.createElement("td",null,r.a.createElement(_.b,{to:"/edit-product"},r.a.createElement("button",{className:"btn-secondary",title:"Edit this product",id:"edit",onClick:function(){return e.editProduct(t)}},r.a.createElement(h.a,{icon:m.a}))),r.a.createElement(I.a,{trigger:r.a.createElement("button",{className:"btn-danger",title:"Delete this product",id:"delete"},r.a.createElement(h.a,{icon:m.c})),on:"click"},r.a.createElement("div",null,r.a.createElement("div",{class:"footer"},r.a.createElement("div",{class:"alert-box"},r.a.createElement("p",{class:"p-header"},"Delete Product"),r.a.createElement("p",null,"You are about to delete this product. Are you sure you wish to continue? "),r.a.createElement("div",{class:"alert-buttons"},r.a.createElement("button",{onClick:e.handleClose,className:"cancel-button",id:"close"},"CANCEL"),r.a.createElement("button",{onClick:e.deleteProduct,className:"delete-button"},"DELETE"))))))))}))),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"table-container"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Product Name"),r.a.createElement("th",null,"Product Type"),r.a.createElement("th",null,"Product Description"),r.a.createElement("th",null,"Purchase Date"),r.a.createElement("th",null,"Product Price"))),r.a.createElement("tbody",null,t))))}}]),t}(r.a.Component));var S=Object(j.b)((function(e){return{products:e.productReducer.products,editProductClicked:e.productReducer.editProductClicked}}))(U),R=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).filterHandler=function(e){a.setState({didUpdate:!0,filterOption:e.target.value})},a.state={filterOption:null,didUpdate:!1},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.products&&w.a.get("https://hidden-everglades-59214.herokuapp.com/app/v1/products/?sort=date:desc",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){T.dispatch(E(e.data));for(var t=0,a=0;a<e.data.length;a++)t+=parseInt(e.data[a].price);T.dispatch({type:"GET_TOTAL_PRICE",payload:t})})).catch((function(e){console.log(e)}))}},{key:"componentDidUpdate",value:function(){!0===this.state.didUpdate&&(null==this.state.filterOption?(w.a.get("https://hidden-everglades-59214.herokuapp.com/app/v1/products/?sort=date:desc",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){T.dispatch(E(e.data)),T.dispatch(f(!1))})).catch((function(e){console.log(e)})),this.setState({didUpdate:!1})):null!==this.state.filterOption&&(w.a.get("https://hidden-everglades-59214.herokuapp.com/app/v1/products/?sort=".concat(this.state.filterOption),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){T.dispatch(E(e.data)),T.dispatch(f(!1))})).catch((function(e){console.log(e)})),this.setState({didUpdate:!1,filterOption:null})))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main-div"},r.a.createElement("h3",null,"Products"),r.a.createElement("label",{htmlFor:"sort"},"Filter by:",r.a.createElement("select",{name:"filterOption",id:"sort",onChange:this.filterHandler},r.a.createElement("option",{value:"date:desc"},"Last Purchase"),r.a.createElement("option",{value:"date:asc"},"First Purchase"),r.a.createElement("option",{value:"price:desc"},"Highest Price"),r.a.createElement("option",{value:"price:asc"},"Lowest Price")))),r.a.createElement(S,null),r.a.createElement(_.b,{to:"/newproduct"},r.a.createElement("button",{id:"new-btn"},"NEW PRODUCT")))}}]),t}(r.a.Component);var F=Object(j.b)((function(e){return{products:e.productReducer.products,tableUpdated:e.productReducer.tableUpdated}}))(R),A=a(18),V=(a(80),a(42),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).saveInputValue=function(e){a.setState(Object(i.a)({},e.target.id,e.target.value))},a.redirectToMain=function(){if(a.state.isAuthenticated)return r.a.createElement(A.a,{to:"/products"})},a.logIn=function(e){""===a.state.email||""===a.state.password?(e.preventDefault(),alert("Please fill in the required fields:")):""===a.state.email&&""===a.state.password||(e.preventDefault(),w.a.post("https://hidden-everglades-59214.herokuapp.com/app/v1/auth/login",{email:a.state.email,password:a.state.password}).then((function(e){localStorage.setItem("jwt",e.data.jwt),localStorage.setItem("first_name",e.data.first_name),localStorage.setItem("last_name",e.data.last_name),a.setState({isAuthenticated:!0})})).catch((function(e){console.log(e)})))},a.state={email:"",password:"",isAuthenticated:!1},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.redirectToMain(),r.a.createElement("div",{id:"login"},r.a.createElement("div",{className:"box-container"},r.a.createElement("form",null,r.a.createElement("p",{className:"input-container"},r.a.createElement("label",{className:"text-field-input",htmlFor:"email"},"E-mail"),r.a.createElement("input",{onChange:this.saveInputValue,type:"email",name:"email",id:"email",className:"text-field"})),r.a.createElement("p",{className:"input-container"},r.a.createElement("label",{className:"text-field-input",htmlFor:"password"},"Password"),r.a.createElement("input",{onChange:this.saveInputValue,type:"password",name:"password",id:"password",className:"text-field"})),r.a.createElement("button",{className:"primary-button",type:"submit",onClick:this.logIn},"SIGN IN"))),r.a.createElement("div",{className:"aditional-info"},r.a.createElement("p",null,"Or if you don't have an account.",r.a.createElement(_.b,{to:"/register"},"Register")))))}}]),t}(r.a.Component)),L=(a(81),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).saveInputValue=function(e){a.setState(Object(i.a)({},e.target.id,e.target.value))},a.redirectToMain=function(){if(a.state.isAuthenticated)return r.a.createElement(A.a,{to:"/products"})},a.registerUser=function(e){null===a.state.first_name||null===a.state.last_name||null===a.state.email||null===a.state.date_of_birth||null===a.state.telephone||null===a.state.country||null===a.state.password?(e.preventDefault(),alert("Please fill in the required fields:")):null==a.state.first_name&&null==a.state.last_name&&null==a.state.email&&null==a.state.date_of_birth&&null==a.state.telephone&&null==a.state.country&&null==a.state.password||(e.preventDefault(),w.a.post("https://hidden-everglades-59214.herokuapp.com/app/v1/auth/register",{first_name:a.state.first_name,last_name:a.state.last_name,email:a.state.email,date_of_birth:a.state.date_of_birth,telephone:a.state.telephone,country:a.state.country,password:a.state.password,_created:new Date}).then((function(e){console.log(e),w.a.post("https://hidden-everglades-59214.herokuapp.com/app/v1/auth/login",{email:a.state.email,password:a.state.password}).then((function(e){localStorage.setItem("jwt",e.data.jwt),localStorage.setItem("name",a.state.first_name),localStorage.setItem("lastName",a.state.last_name),a.setState({isAuthenticated:!0})})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)})))},a.state={first_name:null,last_name:null,email:null,date_of_birth:null,telephone:null,country:null,password:null,isAuthenticated:!1},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.redirectToMain(),r.a.createElement("div",{id:"register"},r.a.createElement("div",{className:"box-container"},r.a.createElement("form",null,r.a.createElement("p",{className:"input-container"},r.a.createElement("label",{className:"text-field-input",htmlFor:""},"First Name"),r.a.createElement("input",{onChange:this.saveInputValue,type:"text",id:"first_name",className:"text-field"})),r.a.createElement("p",{className:"input-container"},r.a.createElement("label",{className:"text-field-input",htmlFor:""},"Last Name"),r.a.createElement("input",{onChange:this.saveInputValue,type:"text",id:"last_name",className:"text-field"})),r.a.createElement("p",{className:"input-container"},r.a.createElement("label",{className:"text-field-input",htmlFor:""},"E-mail"),r.a.createElement("input",{onChange:this.saveInputValue,type:"email",id:"email",className:"text-field"})),r.a.createElement("p",{className:"input-container"},r.a.createElement("label",{className:"text-field-input",htmlFor:""},"Date of Birth"),r.a.createElement("input",{onChange:this.saveInputValue,type:"date",id:"date_of_birth",className:"text-field"})),r.a.createElement("p",{className:"input-container"},r.a.createElement("label",{className:"text-field-input",htmlFor:""},"Telephone"),r.a.createElement("input",{onChange:this.saveInputValue,type:"text",id:"telephone",className:"text-field"})),r.a.createElement("p",{className:"input-container"},r.a.createElement("label",{className:"text-field-input",htmlFor:""},"Country"),r.a.createElement("input",{onChange:this.saveInputValue,type:"text",id:"country",className:"text-field"})),r.a.createElement("p",{className:"input-container"},r.a.createElement("label",{className:"text-field-input",htmlFor:""},"Password"),r.a.createElement("input",{onChange:this.saveInputValue,type:"password",id:"password",className:"text-field"})),r.a.createElement("button",{onClick:this.registerUser,type:"submit",className:"primary-button"},"REGISTER"))),r.a.createElement("div",{className:"aditional-info"},r.a.createElement("p",null,"Or if you don't have an account.",r.a.createElement(_.b,{to:"/"}," Sign in")))))}}]),t}(r.a.Component)),B=document.getElementById("root");l.a.render(r.a.createElement(j.a,{store:T},r.a.createElement((function(){return r.a.createElement(_.a,null,r.a.createElement(A.d,null,r.a.createElement(A.b,{exact:!0,path:"/",component:V}),r.a.createElement(A.b,{exact:!0,path:"/register",component:L}),r.a.createElement(A.b,{exact:!0,path:"/newproduct",render:function(){return r.a.createElement(D,null)}}),r.a.createElement(A.b,{exact:!0,path:"/products",render:function(){return r.a.createElement(F,null)}}),r.a.createElement(A.b,{exact:!0,path:"/edit-product",render:function(){return r.a.createElement(D,null)}})))}),null)),B)}},[[48,1,2]]]);
//# sourceMappingURL=main.abc4ac93.chunk.js.map