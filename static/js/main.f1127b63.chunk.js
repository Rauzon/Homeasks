(this.webpackJsonptasks=this.webpackJsonptasks||[]).push([[0],{21:function(e,t,n){e.exports={content:"messages_content__NngSf",content__wrapper:"messages_content__wrapper__1yd_B",content__wrapper_img:"messages_content__wrapper_img__3g_Tq",content__wrapper_item:"messages_content__wrapper_item__7BiBU",content__wrapper_item_time:"messages_content__wrapper_item_time__1311m",content__wrapper_item_message:"messages_content__wrapper_item_message__3uMZj",content__wrapper_item_messageName:"messages_content__wrapper_item_messageName__3wBSM",content__wrapper_item_messageText:"messages_content__wrapper_item_messageText__QQvkS"}},30:function(e,t,n){e.exports={content:"listOfTasks_content__2WJK-",content__tasks:"listOfTasks_content__tasks__2tv--",content__title:"listOfTasks_content__title__1kyt_",list:"listOfTasks_list__2p6e5",content__buttons:"listOfTasks_content__buttons__19pKk"}},31:function(e,t,n){e.exports={wrapper:"navBar_wrapper__Hi6_V",menu:"navBar_menu__ditQ0",menu_active:"navBar_menu_active__eRNoR",menu_list:"navBar_menu_list__3ylic",menu_btn:"navBar_menu_btn__2TT7l"}},40:function(e,t,n){e.exports={content:"Counter_content__ZuwO5",content__inner:"Counter_content__inner__34QDE",content__text:"Counter_content__text__3IBgV",content__input:"Counter_content__input__2Xft5"}},59:function(e,t,n){e.exports={text_field:"myInput_text_field__3Q-JL"}},64:function(e,t,n){e.exports={content:"editableSpan_content__21psB"}},75:function(e,t,n){e.exports=n(89)},80:function(e,t,n){},81:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),l=n.n(c),i=(n(80),n(81),n(50)),o=n(13),u=n(40),m=n.n(u),s=n(124),_=n(59),p=n.n(_),d=n(123),f=function(e){return r.a.createElement("div",{className:p.a.text_field},r.a.createElement(d.a,{variant:"outlined",value:e.value,onChange:function(t){var n=t.currentTarget.value;void 0!==n&&e.onChange&&e.onChange(n)}}))},v=n(120),E=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{variant:"contained",onClick:function(){e.onClick&&e.onClick()}},e.value))},g=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)([]),u=Object(o.a)(l,2),_=u[0],p=u[1],d=function(){n&&(p([].concat(Object(i.a)(_),[{id:Object(s.a)(),name:n}])),alert("Hello, ".concat(n))),c("")};return r.a.createElement("div",{className:m.a.content},r.a.createElement("div",{className:m.a.content__inner},r.a.createElement("div",{className:m.a.content__text},r.a.createElement("span",null,_.length)),r.a.createElement("div",{className:m.a.content__input},r.a.createElement("span",null,"Enter your name:"),r.a.createElement(f,{value:n,onChange:function(e){c(e)},onKeyPress:function(e){13===e&&d()}}),r.a.createElement(E,{onClick:d,value:"increase"}))))},k=n(21),h=n.n(k),b=function(e){return r.a.createElement("div",{className:h.a.content},r.a.createElement("div",{className:h.a.content__wrapper},r.a.createElement("div",{className:h.a.content__wrapper_img},r.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSebA8fFnNGT1sxNPZ882iVMNpbng0j_hdBZQ&usqp=CAU",alt:""})),r.a.createElement("div",{className:h.a.content__wrapper_item},r.a.createElement("div",{className:h.a.content__wrapper_item_message},r.a.createElement("div",{className:h.a.content__wrapper_item_messageName},r.a.createElement("p",null,e.name)),r.a.createElement("div",{className:h.a.content__wrapper_item_messageText},r.a.createElement("p",null,e.message))),r.a.createElement("div",{className:h.a.content__wrapper_item_time},r.a.createElement("p",null,e.time)))))},w=function(){return r.a.createElement(r.a.Fragment,null,[{id:1,name:"Masha",message:"Did you buy that i asked?",time:"10:39"}].map((function(e){return r.a.createElement(b,{key:e.id,name:e.name,message:e.message,time:e.time})})))},C=n(30),j=n.n(C),N=n(121),y=n(63),O=n.n(y),T=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:j.a.content__tasks},r.a.createElement("div",{className:j.a.content__title},r.a.createElement("h3",null,"List of tasks at a day")),r.a.createElement("ul",{id:j.a.list},e.tasks.map((function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{key:t.id},t.title,r.a.createElement(N.a,{"aria-label":"delete",onClick:function(){e.removeTask(t.id)}},r.a.createElement(O.a,{fontSize:"small"}))))})))),r.a.createElement("div",{className:j.a.content__buttons},r.a.createElement(E,{value:"all",onClick:function(){return e.filterTasks("all")}}),r.a.createElement(E,{value:"low",onClick:function(){return e.filterTasks("low")}}),r.a.createElement(E,{value:"medium",onClick:function(){return e.filterTasks("medium")}}),r.a.createElement(E,{value:"high",onClick:function(){return e.filterTasks("high")}})))},x=function(){var e=Object(a.useState)([{id:1,title:"\u0420\u0430\u0431\u043e\u0442\u0430",priority:"high"},{id:2,title:"\u0423\u0431\u043e\u0440\u043a\u0430",priority:"medium"},{id:3,title:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0441\u0435\u0440\u0438\u044e \u0421\u0430\u0439\u0442\u0430\u043c\u044b",priority:"high"},{id:4,title:"\u041f\u043e\u0447\u0438\u0442\u0430\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u043a\u043d\u0438\u0433\u0443 \u0414\u043e\u043d\u0446\u043e\u0432\u043e\u0439",priority:"low"}]),t=Object(o.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)("all"),u=Object(o.a)(l,2),m=u[0],s=u[1],_=n;"low"===m&&(_=_.filter((function(e){return"low"===e.priority}))),"medium"===m&&(_=_.filter((function(e){return"medium"===e.priority}))),"high"===m&&(_=_.filter((function(e){return"high"===e.priority})));return r.a.createElement("div",{className:j.a.content},r.a.createElement(T,{tasks:_,removeTask:function(e){var t=Object(i.a)(n);t=t.filter((function(t){return t.id!==e})),c(t)},filterTasks:function(e){s(e)}}))},S=n(125),B=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{checked:e.isChecked,onChange:function(t){var n=t.currentTarget.checked;n&&e.onChange&&e.onChange(n)}}))},F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement(E,{value:"default"}),r.a.createElement(B,null))},I=n(36),J=n(31),Q=n.n(J),V=function(){var e=[{id:Object(s.a)(),link:"pre-junior"},{id:Object(s.a)(),link:"junior"},{id:Object(s.a)(),link:"junior-plus"}],t=Object(a.useState)(!1),n=Object(o.a)(t,2),c=n[0],l=n[1],i=c?"".concat(Q.a.menu," ").concat(Q.a.menu_active):"".concat(Q.a.menu);return r.a.createElement("div",{className:Q.a.wrapper},r.a.createElement("div",{className:i},r.a.createElement("button",{className:Q.a.menu_btn,onClick:function(){l(!c)}},r.a.createElement("span",null)),r.a.createElement("nav",{className:Q.a.menu_list},e.map((function(e){return r.a.createElement(I.b,{key:e.id,to:e.link},e.link)})))))},A=n(10),M=n(64),D=n.n(M),Z=function(e){var t=Object(a.useState)(!0),n=Object(o.a)(t,2),c=n[0],l=n[1];return r.a.createElement("div",{className:D.a.content},c?r.a.createElement("span",{onDoubleClick:function(){l(!1)}},e.value):r.a.createElement(d.a,{value:e.value,onChange:function(t){var n=t.currentTarget.value;void 0!==n&&null!==n&&e.onChange&&e.onChange(n)},onBlur:function(){l(!0)},autoFocus:!0}))};var q=function(){var e,t=e||"Value is null",n=Object(a.useState)(t),c=Object(o.a)(n,2),l=c[0],i=c[1],u=function(e){i(e)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,{value:l,onChange:u}),r.a.createElement(E,{value:"save values",onClick:function(){!function(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}("value",l)}}),r.a.createElement(E,{value:"get values",onClick:function(){e=function(e,t){var n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}("value","default value"),u(e)}}))},K=n(122),W=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(G,{data:[{id:1,title:"task1"},{id:2,title:"task2"},{id:3,title:"task3"}],onChange:function(e){c(e)},value:n}))},G=function(e){return r.a.createElement("div",{style:{margin:"15px 10px"}},r.a.createElement(K.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",onChange:function(t){t.currentTarget&&e.onChange&&e.onChange(t.currentTarget.value)},value:e.value},e.data.map((function(e){return r.a.createElement("option",{key:e.id,value:e.title},e.title)}))))},H=function(){var e=Object(a.useState)("email"),t=Object(o.a)(e,2),n=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,{data:[{id:1,name:"data",value:"email"},{id:2,name:"data",value:"login"},{id:3,name:"data",value:"password"}],onChange:function(e){c(e)},checkedValue:n}))},L=function(e){var t={dispay:"inline-block",margin:"5px 0"};return r.a.createElement("div",{style:{margin:"10px 5px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly"}},e.data.map((function(n){return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"radio",name:n.name,value:n.value,style:t,onChange:function(t){var n=t.currentTarget.value;n&&e.onChange(n)},checked:e.checkedValue==="".concat(n.value)}))})))};var P=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(V,null),r.a.createElement(A.a,{path:"/pre-junior",render:function(){return r.a.createElement(w,null)}}),r.a.createElement(A.a,{path:"/pre-junior",render:function(){return r.a.createElement(x,null)}}),r.a.createElement(A.a,{path:"/pre-junior",render:function(){return r.a.createElement(g,null)}}),r.a.createElement(A.a,{path:"/pre-junior",render:function(){return r.a.createElement(F,null)}}),r.a.createElement(A.a,{path:"/junior",render:function(){return r.a.createElement(q,null)}}),r.a.createElement(A.a,{path:"/junior",render:function(){return r.a.createElement(W,null)}}),r.a.createElement(A.a,{path:"/junior",render:function(){return r.a.createElement(H,null)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I.a,null,r.a.createElement(P,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[75,1,2]]]);
//# sourceMappingURL=main.f1127b63.chunk.js.map