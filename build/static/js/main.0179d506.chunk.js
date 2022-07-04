(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,a){e.exports={form:"CheckOutForm_form__3achp",control:"CheckOutForm_control__1SMJH",actions:"CheckOutForm_actions__35ZGJ",submit:"CheckOutForm_submit__2kZsc",invalid:"CheckOutForm_invalid__1CXgD"}},function(e,t,a){e.exports={"cart-items":"Cart_cart-items__2pjQw",total:"Cart_total__3pLin",actions:"Cart_actions__1GOmr","button--alt":"Cart_button--alt__1Z2QQ",button:"Cart_button__fw1-t"}},,function(e,t,a){e.exports={"cart-item":"CartItem_cart-item__3NKCv",summary:"CartItem_summary__3Vk0a",price:"CartItem_price__2HjaL",amount:"CartItem_amount__1Qj26",actions:"CartItem_actions__BO_bF"}},,,function(e,t,a){e.exports={meals:"MealsList_meals__2wUFk","meals-appear":"MealsList_meals-appear__2m2Ot",mealsLoading:"MealsList_mealsLoading__vONzX",mealsError:"MealsList_mealsError__1DqUM"}},function(e,t,a){e.exports={button:"Button_button__2lgkF",icon:"Button_icon__1pr2O",badge:"Button_badge__15J6o",bump:"Button_bump__2h2Dl"}},function(e,t,a){e.exports={meal:"MealItem_meal__2uJ70",description:"MealItem_description__2YINS",price:"MealItem_price__3sNYl","vertical-center":"MealItem_vertical-center__3k4TK"}},,,function(e,t,a){e.exports={backdrop:"Modal_backdrop__3iXHD",modal:"Modal_modal__30MRu","slide-down":"Modal_slide-down__294fH"}},,function(e,t,a){e.exports={header:"Header_header__2O1C4","main-image":"Header_main-image__90nQ_"}},,function(e,t,a){e.exports={summary:"MealsSummary_summary__KQJk6"}},function(e,t,a){e.exports={card:"Card_card__1te4P"}},function(e,t,a){e.exports={form:"MealItemForm_form__2VyYG"}},function(e,t,a){e.exports={input:"InputStyle_input__11i3k"}},,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(8),c=a.n(n),r=(a(27),a(3)),i=a(1),o=a.n(i),s=a(17),l=a.n(s),d=a.p+"static/media/meals.2971f633.jpg",u=a(11),j=a.n(u),m=a(0),b=function(){return Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(m.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},O=o.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),p=function(e){var t=Object(i.useState)(!1),a=Object(r.a)(t,2),n=a[0],c=a[1],o=Object(i.useContext)(O).items;Object(i.useEffect)((function(){if(0!==o.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[o]);var s=o.reduce((function(e,t){return e+t.amount}),0),l="".concat(j.a.button," ").concat(n?j.a.bump:"");return Object(m.jsxs)("button",{className:l,onClick:e.onClick,children:[Object(m.jsx)("span",{className:j.a.icon,children:Object(m.jsx)(b,{})}),Object(m.jsx)("span",{children:"Your Cart"}),Object(m.jsx)("span",{className:j.a.badge,children:s}),e.children]})},h=function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("header",{className:l.a.header,children:[Object(m.jsx)("h1",{children:"React Meals"}),Object(m.jsx)(p,{onClick:e.onShowCart})]}),Object(m.jsx)("div",{className:l.a["main-image"],children:Object(m.jsx)("img",{src:d,alt:"A Table full of food"})})]})},x=a(19),f=a.n(x),v=function(e){return Object(m.jsxs)("section",{className:f.a.summary,children:[Object(m.jsx)("h2",{children:" Food delivered to you"}),Object(m.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(m.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},_=a(6),C=a.n(_),y=a(14),N=a(2),g=a(10),E=a.n(g),A=a(20),k=a.n(A),I=function(e){return Object(m.jsx)("div",{className:k.a.card,children:e.children})},H=a(12),R=a.n(H),w=a(21),M=a.n(w),S=a(22),L=a.n(S),D=o.a.forwardRef((function(e,t){return Object(m.jsxs)("div",{className:L.a.input,children:[Object(m.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(m.jsx)("input",Object(N.a)({ref:t},e.input))]})})),F=function(e){var t=Object(i.useState)(!0),a=Object(r.a)(t,2),n=a[0],c=a[1],o=Object(i.useRef)(null);return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a=o.current.value,n=+a;c(!0),0===a.trim().length||n<1||n>5?c(!1):e.onAddtoCart(n)},className:M.a.form,children:[Object(m.jsx)(D,{label:"Amount",input:{id:"Amount_"+e.id,type:"number",min:"1",max:"100",step:1,defaultValue:1},ref:o}),Object(m.jsx)("button",{children:"Add +"}),!n&&Object(m.jsx)("p",{children:"Please enter a valid amount "})]})})},V=function(e){var t=e.props,a=t.name,n=t.description,c=t.price,r=t.id,o=Object(i.useContext)(O);return Object(m.jsx)("div",{className:E.a.meals,children:Object(m.jsx)(I,{children:Object(m.jsxs)("div",{className:R.a.meal,children:[Object(m.jsx)("ul",{children:Object(m.jsx)("li",{children:Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:a}),Object(m.jsx)("div",{className:R.a.description,children:Object(m.jsx)("p",{children:n})}),Object(m.jsx)("div",{className:R.a.price,children:Object(m.jsx)("h3",{children:"$".concat(c.toFixed(2))})})]})})}),Object(m.jsx)("div",{className:R.a["vertical-center"],children:Object(m.jsx)(F,{onAddtoCart:function(e){o.addItem({id:r,name:a,amount:e,price:c})},id:r})})]})})})},B={meals:{price:0,description:"",name:"",id:1},loading:!1,error:!1,loaded:!1},T=function(e,t){switch(t.type){case"LOADING":return Object(N.a)(Object(N.a)({},e),{},{loading:t.payload});case"SET-MEALS":return Object(N.a)(Object(N.a)({},e),{},{meals:t.payload});case"ERROR":return Object(N.a)(Object(N.a)({},e),{},{error:t.payload});case"LOADED":return Object(N.a)(Object(N.a)({},e),{},{loaded:t.payload});default:return B}},P=function(){var e=Object(i.useReducer)(T,B),t=Object(r.a)(e,2),a=t[0],n=t[1];Object(i.useEffect)((function(){(function(){var e=Object(y.a)(C.a.mark((function e(){var t,a,c,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:"LOADING",payload:!0}),e.next=4,fetch("https://food-app-a635f-default-rtdb.firebaseio.com/meals.json");case 4:if((t=e.sent).ok){e.next=7;break}throw new Error;case 7:return e.next=9,t.json();case 9:for(r in a=e.sent,c=[],a)c.push({id:r,name:a[r].name,price:a[r].price,description:a[r].description}),n({type:"SET-MEALS",payload:c});n({type:"LOADED",payload:!0}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),n({type:"ERROR",payload:e.t0.message});case 18:n({type:"LOADING",payload:!1});case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var c=a.loaded&&a.meals.map((function(e){return Object(m.jsx)(V,{props:e},e.id)}));return Object(m.jsxs)("div",{children:[a.loading&&Object(m.jsx)("p",{className:E.a.mealsLoading,children:"Loading..."}),a.error&&Object(m.jsxs)("p",{className:E.a.mealsError,children:[" ",a.error," "]}),c]})},G=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(v,{}),Object(m.jsx)(P,{})]})},J=a(5),U=a.n(J),Q=a(15),z=a.n(Q),Y=function(e){return Object(m.jsx)("div",{className:z.a.backdrop,onClick:e.onClose})},q=function(e){return Object(m.jsx)("div",{className:z.a.modal,children:Object(m.jsx)("div",{className:z.a.content,children:e.children})})},K=document.getElementById("overlays"),X=function(e){return Object(m.jsxs)(m.Fragment,{children:[c.a.createPortal(Object(m.jsx)(Y,{onClose:e.onClose}),K),c.a.createPortal(Object(m.jsx)(q,{children:e.children}),K)]})},Z=a(7),$=a.n(Z),W=function(e){var t="$".concat(e.price.toFixed(2));return Object(m.jsxs)("li",{className:$.a["cart-item"],children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:e.name}),Object(m.jsxs)("div",{className:$.a.summary,children:[Object(m.jsx)("span",{className:$.a.price,children:t}),Object(m.jsxs)("span",{className:$.a.amount,children:["x ",e.amount]})]})]}),Object(m.jsxs)("div",{className:$.a.actions,children:[Object(m.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(m.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},ee={enteredValue:"",hasError:!1,touched:!1,valueIsValid:!1},te=function(e,t){switch(t.type){case"VALUE_CHANGED":return Object(N.a)(Object(N.a)({},e),{},{enteredValue:t.payload});case"INPUT_BLUR":return Object(N.a)(Object(N.a)({},e),{},{touched:!0});case"RESET":return Object(N.a)(Object(N.a)({},e),{},{touched:!1,enteredValue:""})}},ae=function(e){var t=Object(i.useReducer)(te,ee),a=Object(r.a)(t,2),n=a[0],c=a[1];n.valueIsValid=e(n.enteredValue),n.hasError=!n.valueIsValid&&n.touched;return{value:n.enteredValue,hasError:n.hasError,isValid:n.valueIsValid,inputBlurHandler:function(){c({type:"INPUT_BLUR"})},valueChangedHandler:function(e){c({type:"VALUE_CHANGED",payload:e.target.value})},reset:function(){c({type:"RESET"})}}},ne=a(4),ce=a.n(ne),re=function(e){return e.includes("@")&&""!==e.trim()},ie=function(e){return""!==e.trim()},oe=function(e){return!isNaN(e)&&e.length>0&&e.length<6},se=function(e){return""!==e.trim()},le=function(e){var t=ae(ie),a=t.value,n=t.hasError,c=t.valueChangedHandler,r=t.inputBlurHandler,i=t.isValid,o=ae(re),s=o.value,l=o.hasError,d=o.valueChangedHandler,u=o.inputBlurHandler,j=o.isValid,b=ae(oe),O=b.value,p=b.hasError,h=b.valueChangedHandler,x=b.inputBlurHandler,f=b.isValid,v=ae(se),_=v.value,C=v.hasError,y=v.valueChangedHandler,N=v.inputBlurHandler,g=v.isValid,E={name:a,email:s,city:_,postalCode:O},A=i&&j&&g&&f;A&&e.valid(!0);return Object(m.jsxs)("form",{className:ce.a.form,onSubmit:function(t){t.preventDefault(),e.orderHandler(E)},children:[Object(m.jsxs)("div",{className:"".concat(ce.a.control," ").concat(i?"":ce.a.invalid),children:[Object(m.jsx)("label",{value:"Name",children:" Name"}),Object(m.jsx)("input",{placeholder:"Name",type:"text",id:"name",value:a,onChange:c,onBlur:r})]}),Object(m.jsxs)("div",{className:"".concat(ce.a.control," ").concat(j?"":ce.a.invalid),children:[Object(m.jsx)("label",{value:"Name",children:"Email"}),Object(m.jsx)("input",{placeholder:"Email",type:"email",id:"email",value:s,onChange:d,onBlur:u})]}),Object(m.jsxs)("div",{className:"".concat(ce.a.control," ").concat(f?"":ce.a.invalid),children:[Object(m.jsx)("label",{value:"Name",children:"Postal Code"}),Object(m.jsx)("input",{placeholder:"Postal Code",type:"text",id:"Postal Code",value:O,onChange:h,onBlur:x})]}),Object(m.jsxs)("div",{className:"".concat(ce.a.control," ").concat(g?"":ce.a.invalid),children:[Object(m.jsx)("label",{value:"Name",children:"City"}),Object(m.jsx)("input",{placeholder:"City",type:"text",id:"City",value:_,onChange:y,onBlur:N})]}),Object(m.jsxs)("div",{className:ce.a.actions,children:[Object(m.jsxs)("button",{type:"button",onClick:e.onClose,children:[" ","Cancel"]}),A&&Object(m.jsx)("button",{className:ce.a.submit,onClick:function(t){e.confirmation(!0)},children:"Confirm "})]}),Object(m.jsx)("div",{className:ce.a.invalid,children:n&&Object(m.jsx)("label",{children:" Cannot be empty "})}),Object(m.jsx)("div",{className:ce.a.invalid,children:l&&Object(m.jsx)("label",{children:' Does not include "@" '})}),Object(m.jsx)("div",{className:ce.a.invalid,children:p&&Object(m.jsx)("label",{children:" Has to be a number over 1 and under 6 "})}),Object(m.jsx)("div",{className:ce.a.invalid,children:C&&Object(m.jsx)("label",{children:" Can't be empty "})})]})},de=o.a.createContext({order:{name:"",email:" ",city:"",postalCode:1,items:[],totalAmount:0},createOrder:function(e){}}),ue=(a(30),function(e){var t=Object(i.useContext)(O),a=Object(i.useContext)(de),n="$".concat(t.totalAmount.toFixed(2)),c=t.items.length>0,o=Object(i.useState)(!1),s=Object(r.a)(o,2),l=s[0],d=s[1],u=Object(i.useState)(!1),j=Object(r.a)(u,2),b=j[0],p=j[1],h=Object(i.useState)(!1),x=Object(r.a)(h,2),f=x[0],v=x[1],_=Object(i.useState)(!1),g=Object(r.a)(_,2),E=g[0],A=g[1];console.log("items",t.items);var k=function(e){return{method:"POST",headers:{},body:JSON.stringify(e)}},I=function(){var e=Object(y.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,A(!0),e.next=4,fetch("https://food-app-a635f-default-rtdb.firebaseio.com/order.json",k(t));case 4:if(e.sent.ok){e.next=7;break}throw new Error("Request Failed");case 7:p(!0),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),p(!1);case 13:A(!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),H=function(e){t.removeItem(e)},R=function(e){t.addItem(Object(N.a)(Object(N.a)({},e),{},{amount:1}))},w=Object(m.jsx)("ul",{className:U.a["cart-items"],children:t.items.map((function(e){return Object(m.jsx)(W,{name:e.name,price:e.price,amount:e.amount,onRemove:H.bind(null,e.id),onAdd:R.bind(null,e)},e.id)}))}),M=Object(m.jsxs)(m.Fragment,{children:[w,c&&Object(m.jsx)(le,{onClose:e.onHideCart,valid:function(e){v(e)},orderHandler:function(e){a.createOrder({name:e.name,email:e.email,city:e.city,postalCode:e.postalCode,items:t.items,totalAmount:t.totalAmount})},confirmation:function(e){d(e)}}),Object(m.jsxs)("div",{className:U.a.total,children:[Object(m.jsx)("span",{children:"Total Amount"}),Object(m.jsx)("span",{children:n})]}),Object(m.jsxs)("div",{className:U.a.actions,children:[Object(m.jsxs)("button",{className:U.a["button--alt"],onClick:e.onHideCart,children:[" ","Close"]}),c&&f&&l&&Object(m.jsxs)("button",{className:U.a.button,onClick:function(){I(a.order),t.clearCart()},children:[" ","Order"]})]})]}),S=Object(m.jsx)("p",{children:" Sending order data"}),L=Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:U.a.actions,style:{justifyContent:"center",display:"flex"},children:["Order Sent",Object(m.jsx)("button",{className:U.a.button,onClick:e.onHideCart,children:"Close"})]})});return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(X,{onClose:e.onHideCart,children:[!E&&!b&&M,E&&S,!E&&b&&L]})})}),je=a(18),me={items:[],totalAmount:0},be=function(e,t){switch(t.type){case"ADD_ITEM":var a,n=e.totalAmount+t.payload.price*t.payload.amount,c=e.items.findIndex((function(e){return e.id===t.payload.id})),r=e.items[c];if(r){var i=Object(N.a)(Object(N.a)({},r),{},{amount:r.amount+t.payload.amount});(a=Object(je.a)(e.items))[c]=i}else a=e.items.concat(t.payload);return{items:a,totalAmount:n};case"REMOVE_ITEM":var o,s=e.items.findIndex((function(e){return e.id===t.payload})),l=e.items[s],d=e.totalAmount-l.price;if(0===l.amount)o=e.items.filter((function(e){return e.id!==t.payload}));else{var u=Object(N.a)(Object(N.a)({},l),{},{amount:l.amount-1});(o=Object(je.a)(e.items))[s]=u}return d<0?{items:[],totalAmount:0}:{items:o,totalAmount:d};case"CLEAR":return me}},Oe=function(e){var t=Object(i.useReducer)(be,me),a=Object(r.a)(t,2),n=a[0],c=a[1],o={items:n.items,totalAmount:n.totalAmount,addItem:function(e){c({type:"ADD_ITEM",payload:e})},removeItem:function(e){c({type:"REMOVE_ITEM",payload:e})},clearCart:function(){c({type:"CLEAR"})}};return Object(m.jsx)(O.Provider,{value:o,children:e.children})},pe={order:{name:"",email:" ",city:"",postalCode:1,items:[],totalAmount:0}},he=function(e,t){switch(t.type){case"CREATE_ORDER":return Object(N.a)({},t.payload)}},xe=function(e){var t=Object(i.useReducer)(he,pe),a=Object(r.a)(t,2),n=a[0],c=a[1],o={order:{name:n.name,email:n.email,city:n.city,postalCode:n.postalCode,items:n.items,totalAmount:n.totalAmount},createOrder:function(e){c({type:"CREATE_ORDER",payload:e})}};return Object(m.jsx)(de.Provider,{value:o,children:e.children})};var fe=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(m.jsx)(xe,{children:Object(m.jsxs)(Oe,{children:[Object(m.jsxs)("div",{children:[a&&Object(m.jsx)(ue,{onHideCart:function(){n(!1)}}),Object(m.jsx)(h,{onShowCart:function(e){n(!0)}})]}),Object(m.jsx)("main",{children:Object(m.jsx)(G,{})})]})})};c.a.render(Object(m.jsx)(fe,{}),document.getElementById("root"))}],[[31,1,2]]]);
//# sourceMappingURL=main.0179d506.chunk.js.map