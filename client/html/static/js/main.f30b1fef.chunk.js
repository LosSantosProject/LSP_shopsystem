(this["webpackJsonpbutarota-shops"]=this["webpackJsonpbutarota-shops"]||[]).push([[0],{31:function(n,t,e){},32:function(n,t,e){"use strict";e.r(t);var i=e(0),r=e.n(i),o=e(9),c=e.n(o),a=e(17);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s,d,b,u,l,p,j,f,g,h,m,O,x=e(5),y=e(2),v=e(3),w=e(4),S="1000px",T="550px",k="6pt",E={width:70,item:{padding:"6pt 6pt",radius:"12px",description:{max_length:128},buttons:{in_cart:{color:"rgba(37, 139, 223, .6)",icon:"f07a"}}}},C={list:{height:83,buttons:{delete:{color:"rgb(125, 26, 26)",icon:"f00d"}}},buttons:{radius:"8pt",text_color:"rgb(220, 220, 220);",buy:{color:"rgba(37, 139, 223, .6)"},clear:{color:"rgb(115, 33, 33)"}}},_=e(18),A=e(11),z=function(n,t){switch(t.type){case"ADD_CART_ITEM":return n.cart.find((function(n){return n.name===t.item.name}))?Object(w.a)(Object(w.a)({},n),{},{cart:Object(A.a)(n.cart.map((function(n){return n.name===t.item.name?Object(w.a)(Object(w.a)({},n),{},{count:n.count+t.item.count}):Object(w.a)({},n)})))}):Object(w.a)(Object(w.a)({},n),{},{cart:[].concat(Object(A.a)(n.cart),[t.item])});case"REMOVE_CART_ITEM":return Object(w.a)(Object(w.a)({},n),{},{cart:Object(A.a)(n.cart.filter((function(n){return n.name!==t.name})))});case"TUNCATE_CART":return Object(w.a)(Object(w.a)({},n),{},{cart:[]});case"SET_STATE":return Object(w.a)(Object(w.a)({},n),{},{visible:t.state});case"SET_ITEMS":return Object(w.a)(Object(w.a)({},n),{},{items:t.items});default:return Object(w.a)({},n)}},R=Object(_.a)({reducer:z,preloadedState:{cart:[],items:[],visible:!1}}),F=v.a.div(s||(s=Object(y.a)(["\n  width: 32px;\n  height: 32px;\n\n  margin: 0pt 4pt;\n\n  border-radius: 6pt;\n\n  opacity: 0.5;\n  background: ",';\n  transition: opacity 100ms linear;\n\n  &::before {\n    width: 100%;\n    height: 100%;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    font-size: 13pt;\n    font-family: "FontAwesome";\n    content: "\\','";\n  }\n\n  &:hover {\n    cursor: pointer;\n    opacity: 0.8;\n  }\n'],["\n  width: 32px;\n  height: 32px;\n\n  margin: 0pt 4pt;\n\n  border-radius: 6pt;\n\n  opacity: 0.5;\n  background: ",';\n  transition: opacity 100ms linear;\n\n  &::before {\n    width: 100%;\n    height: 100%;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    font-size: 13pt;\n    font-family: "FontAwesome";\n    content: "\\\\','";\n  }\n\n  &:hover {\n    cursor: pointer;\n    opacity: 0.8;\n  }\n'])),(function(n){return n.color}),(function(n){return n.icon})),I=e(1),M=v.a.div(d||(d=Object(y.a)(["\n  width: 100%;\n\n  display: flex;\n  justify-content: right;\n  align-items: center;\n\n  box-sizing: border-box;\n  border-radius: ",";\n  padding: ",";\n\n  background: rgb(26, 26, 26);\n\n  margin-bottom: 4pt;\n"])),E.item.radius,E.item.padding),$=v.a.img(b||(b=Object(y.a)(["\n  width: 48px;\n  height: 48px;\n\n  margin-right: 6px;\n  border-radius: 6pt;\n\n  background: rgb(22, 22, 22);\n"]))),D=v.a.div(u||(u=Object(y.a)(["\n    width: 40%;\n  "]))),N=v.a.p(l||(l=Object(y.a)(['\n    margin: 0;\n    padding: 0;\n\n    color: rgb(200, 200, 200);\n\n    font-family: "Roboto+Condensed", sans-serif;\n    font-size: 14pt;\n  ']))),U=v.a.p(p||(p=Object(y.a)(['\n    margin: 0;\n    padding: 0;\n\n    color: rgb(120, 120, 120);\n\n    font-family: "Roboto+Condensed", sans-serif;\n    font-size: 8pt;\n  ']))),J=v.a.div(j||(j=Object(y.a)(["\n    width: 22.5%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  "]))),P=v.a.span(f||(f=Object(y.a)(['\n    display: block;\n\n    word-wrap: break-word;\n\n    color: rgb(120, 120, 120);\n\n    font-family: "Roboto+Condensed", sans-serif;\n    font-size: 8pt;\n\n    &:before {\n      content: "\n";\n    }\n  '],['\n    display: block;\n\n    word-wrap: break-word;\n\n    color: rgb(120, 120, 120);\n\n    font-family: "Roboto+Condensed", sans-serif;\n    font-size: 8pt;\n\n    &:before {\n      content: "\\n";\n    }\n  ']))),V=v.a.div(g||(g=Object(y.a)(["\n  width: 10%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),B=v.a.div(h||(h=Object(y.a)(["\n    width: 20%;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  "]))),L=v.a.p(m||(m=Object(y.a)([""]))),W=v.a.p(O||(O=Object(y.a)(["\n    margin: 0pt 8pt;\n    padding: 0;\n\n    width: 32px;\n    height: 32px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    color: rgba(255, 255, 255, 0.7);\n\n    border-radius: 6pt;\n    background: ",';\n\n    font-size: 10pt;\n    font-weight: bold;\n\n    transition: background 100ms linear;\n\n    &::before {\n      font-family: "FontAwesome";\n      font-weight: bold;\n      content: "\\','";\n    }\n\n    &:hover {\n      cursor: pointer;\n      background: ',";\n    }\n  "],["\n    margin: 0pt 8pt;\n    padding: 0;\n\n    width: 32px;\n    height: 32px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    color: rgba(255, 255, 255, 0.7);\n\n    border-radius: 6pt;\n    background: ",';\n\n    font-size: 10pt;\n    font-weight: bold;\n\n    transition: background 100ms linear;\n\n    &::before {\n      font-family: "FontAwesome";\n      font-weight: bold;\n      content: "\\\\','";\n    }\n\n    &:hover {\n      cursor: pointer;\n      background: ',";\n    }\n  "])),(function(n){return"plus"===n.type?"rgba(0, 255, 0, .2)":"rgba(255, 0, 0, .2)"}),(function(n){return"plus"===n.type?"f067":"f068"}),(function(n){return"plus"===n.type?"rgba(0, 255, 0, .6)":"rgba(255, 0, 0, .6)"}));var q,G=function(n){var t,e=n.name,r=(n.count,n.price),o=n.description,c=Object(i.useState)(1),a=Object(x.a)(c,2),s=a[0],d=a[1];return Object(I.jsxs)(M,{children:[Object(I.jsx)($,{src:"./items/".concat(e,".png")}),Object(I.jsxs)(D,{children:[Object(I.jsx)(N,{children:(null===(t=R.getState().items.find((function(n){return n.name===e})))||void 0===t?void 0:t.label)||"Ismeretlen"}),Object(I.jsx)(U,{children:"string"==typeof o&&(null===o||void 0===o?void 0:o.length)>E.item.description.max_length?"".concat(null===o||void 0===o?void 0:o.substring(0,E.item.description.max_length),"..."):o})]}),Object(I.jsxs)(J,{children:["$ ",null===r||void 0===r?void 0:r.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"),Object(I.jsx)(P,{children:"/ darab"})]}),Object(I.jsxs)(B,{children:[Object(I.jsx)(W,{type:"minus",onClick:function(){s>1&&d(s-1)}}),Object(I.jsx)(L,{children:s}),Object(I.jsx)(W,{type:"plus",onClick:function(){d(s+1)}})]}),Object(I.jsx)(V,{children:Object(I.jsx)(F,Object(w.a)(Object(w.a)({},E.item.buttons.in_cart),{},{onClick:function(n){return t={name:e,count:s},void R.dispatch({type:"ADD_CART_ITEM",item:Object(w.a)({},t)});var t}}))})]})},H=v.a.div(q||(q=Object(y.a)(["\n  width: ","%;\n  height: 100%;\n\n  overflow-x: none;\n  overflow-y: auto;\n\n  box-sizing: border-box;\n  padding: 6pt 6pt;\n\n  border-top-left-radius: ",";\n  border-bottom-left-radius: ",";\n\n  background: rgb(18, 18, 18);\n"])),E.width,k,k);var K,Q,X,Y,Z,nn,tn,en,rn=function(){var n=Object(i.useState)(R.getState().items),t=Object(x.a)(n,2),e=t[0],r=t[1];return Object(i.useEffect)((function(){R.subscribe((function(){return r(R.getState().items)}))}),[]),Object(I.jsx)(H,{children:e&&e.map((function(n,t){return Object(I.jsx)(G,Object(w.a)({},n),"bar-".concat(t))}))})},on=v.a.button(K||(K=Object(y.a)(["\n  width: 100%;\n  border: none;\n\n  ","\n\n  opacity: .65;\n  transition: opacity 100ms linear;\n\n  &:hover {\n    opacity: 0.85;\n    cursor: pointer;\n  }\n"])),(function(n){return"none"!==n.currentStyle&&"\n    padding: 8pt 0pt;\n    border-radius: ".concat(C.buttons.radius,";\n\n    color: ").concat(C.buttons.text_color,";\n    \n    margin-bottom: 4pt;\n\n    background: ").concat("success"===n.currentStyle?C.buttons.buy.color:C.buttons.clear.color,";\n    ")})),cn=v.a.div(Q||(Q=Object(y.a)(["\n  width: 100%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  padding: 6pt 0pt;\n  margin: 4pt 0pt;\n\n  border-radius: 8pt;\n\n  background: rgb(18, 18, 18);\n"]))),an=v.a.div(X||(X=Object(y.a)(["\n  width: 75%;\n  margin: 0pt 4pt;\n"]))),sn=v.a.p(Y||(Y=Object(y.a)(['\n  margin: 0;\n  padding: 0;\n\n  color: rgb(200, 200, 200);\n\n  font-family: "Roboto+Condensed", sans-serif;\n  font-size: 14pt;\n']))),dn=v.a.p(Z||(Z=Object(y.a)(['\n  margin: 0;\n  padding: 0;\n\n  color: rgb(120, 120, 120);\n\n  font-family: "Roboto+Condensed", sans-serif;\n  font-size: 8pt;\n']))),bn=v.a.div(nn||(nn=Object(y.a)(["\n  display: flex;\n  justify-content: right;\n  align-items: center;\n"]))),un=function(n){var t,e=n.name,i=n.label,r=n.count;return Object(I.jsxs)(cn,{children:[Object(I.jsxs)(an,{children:[Object(I.jsx)(sn,{children:i}),Object(I.jsxs)(dn,{children:["$"," ",(((null===(t=R.getState().items.find((function(n){return n.name===e})))||void 0===t?void 0:t.price)||1)*r).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")," ","(",r," darab)"]})]}),Object(I.jsx)(bn,{children:Object(I.jsx)(F,Object(w.a)(Object(w.a)({},C.list.buttons.delete),{},{onClick:function(){return R.dispatch({type:"REMOVE_CART_ITEM",name:e})}}))})]})},ln=v.a.div(tn||(tn=Object(y.a)(["\n  width: ","%;\n  height: 100%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n\n  border-top-right-radius: ",";\n  border-bottom-right-radius: ",";\n\n  background: rgb(22, 22, 22);\n"])),100-E.width,k,k),pn=v.a.div(en||(en=Object(y.a)(["\n  width: 100%;\n  height: ",";\n\n  overflow-x: none;\n  overflow-y: auto;\n\n  box-sizing: border-box;\n  padding: ",";\n"])),(function(n){return"items"===n.type?"".concat(C.list.height,"%"):"".concat(100-C.list.height,"%")}),(function(n){return"actions"===n.type?"4pt":"5pt"}));var jn,fn=function(){var n=Object(i.useState)([]),t=Object(x.a)(n,2),e=t[0],r=t[1];return Object(i.useEffect)((function(){R.subscribe((function(){return r(R.getState().cart)}))}),[]),Object(I.jsxs)(ln,{children:[Object(I.jsx)(pn,{type:"items",children:e&&e.map((function(n,t){var e;return Object(I.jsx)(un,{name:n.name,count:n.count,label:(null===(e=R.getState().items.find((function(t){return t.name===n.name})))||void 0===e?void 0:e.label)||"Ismeretlen"},"item-".concat(t))}))}),Object(I.jsxs)(pn,{type:"actions",children:[Object(I.jsx)(on,{currentStyle:"success",onClick:function(){fetch("http://sShops/purchase",{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({items:R.getState().cart})})},children:"V\xe1s\xe1rl\xe1s ($".concat(e.reduce((function(n,t){var e;return n+t.count*((null===(e=R.getState().items.find((function(n){return n.name===t.name})))||void 0===e?void 0:e.price)||1)}),0).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"),")")}),Object(I.jsx)(on,{currentStyle:"error",onClick:function(){return R.dispatch({type:"TUNCATE_CART"})},children:"\xd6sszes t\xf6rl\xe9se"})]})]})},gn=v.a.div(jn||(jn=Object(y.a)(["\n  width: ",";\n  height: ",";\n\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  color: white;\n"])),S,T);function hn(){return window.addEventListener("message",(function(n){switch(n.data.action){case"OPEN":R.dispatch({type:"SET_ITEMS",items:[]}),R.dispatch({type:"SET_ITEMS",items:n.data.items}),R.dispatch({type:"SET_STATE",state:!0});break;case"CLOSE":R.dispatch({type:"SET_STATE",state:!1})}})),null}function mn(){return window.onkeydown=function(n){"Escape"===n.key&&fetch("http://sShops/close",{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"}})},null}console.log("");var On=function(){var n=Object(i.useState)(!1),t=Object(x.a)(n,2),e=t[0],r=t[1];return Object(i.useEffect)((function(){R.subscribe((function(){return r(R.getState().visible)}))}),[]),Object(I.jsxs)(I.Fragment,{children:[e&&Object(I.jsxs)(gn,{children:[Object(I.jsx)(rn,{}),Object(I.jsx)(fn,{})]}),Object(I.jsx)(hn,{}),Object(I.jsx)(mn,{})]})};e(31);c.a.render(Object(I.jsx)(r.a.StrictMode,{children:Object(I.jsx)(a.a,{store:R,children:Object(I.jsx)(On,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.f30b1fef.chunk.js.map