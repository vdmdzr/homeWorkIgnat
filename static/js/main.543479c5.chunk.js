(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(31),c=a.n(l),o=(a(94),a(72)),u=a.n(o),i=a(15),s=a(34);a(70);function m(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{onClick:function(){return l(!a)}},!a&&r.a.createElement("img",{className:"imgBurger",src:"https://samurai.it-incubator.by/static/media/burgerOpen.12f6bc84.svg"}),a&&r.a.createElement("img",{className:"imgBurger",src:"https://samurai.it-incubator.by/static/media/burgerClose.ed3e982e.svg"})),r.a.createElement("div",{className:a?"navBar active":"navBar"},r.a.createElement("span",null,r.a.createElement(s.b,{className:function(e){return e.isActive?"active":"navBarItem"},to:"/PreJunior"},"PreJunior")),r.a.createElement("span",null,r.a.createElement(s.b,{className:function(e){return e.isActive?"active":"navBarItem"},to:"/Junior"},"Junior")),r.a.createElement("span",null,r.a.createElement(s.b,{className:function(e){return e.isActive?"active":"navBarItem"},to:"/JuniorPlus"},"JuniorPlus"))))}var p=a(11),E=a(50),v=function(e){var t=e.options,a=(e.onChange,e.onChangeOption),n=Object(E.a)(e,["options","onChange","onChangeOption"]),l=t?t.map((function(e,t){return r.a.createElement("option",{value:e,key:t},e)})):[];return r.a.createElement("select",Object.assign({onChange:function(e){a&&a(e.currentTarget.value)}},n),l)},d=a(28),h=function(e){e.type;var t=e.name,a=e.options,n=e.value,l=(e.onChange,e.onChangeOption),c=(Object(d.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){l&&l(e.currentTarget.value)}),o=a?a.map((function(e,a){return r.a.createElement("label",{key:t+"-"+a},r.a.createElement("input",{value:e,type:"radio",onChange:c,name:t,checked:n===e}),e)})):[];return r.a.createElement(r.a.Fragment,null,o)},g=a(146),f=a(148),b=a(139),_=a(143);var C=function(e){return r.a.createElement(g.a,{style:{width:"130px"}},r.a.createElement(f.a,null,"Skills"),r.a.createElement(b.a,{value:e.value,label:"Skills",onChange:function(t){e.onChangeOption&&e.onChangeOption(t.target.value)}},e.options.map((function(e,t){return r.a.createElement(_.a,{key:t,value:e},e)}))))},O=a(135),k=a(144),N=a(145),j=a(141);var y=function(e){return r.a.createElement(g.a,null,r.a.createElement(O.a,null,"Skills"),r.a.createElement(k.a,{value:e.value,onChange:function(t){e.onChangeOption&&e.onChangeOption(t.target.value)}},e.options.map((function(e,t){return r.a.createElement(N.a,{key:t,value:e,control:r.a.createElement(j.a,null),label:e})}))))},S=["React","JS","HTML","CSS"];var w=function(){var e=Object(n.useState)(S[2]),t=Object(p.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(v,{options:S,value:a,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(h,{name:"radio",options:S,value:a,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement(C,{options:S,value:a,onChangeOption:l}),r.a.createElement(y,{options:S,value:a,onChangeOption:l}),r.a.createElement("hr",null))},x=function(){return r.a.createElement("div",null,r.a.createElement(w,null))},A=function(){return r.a.createElement("div",null,"JuniorPlus")},T=a(53),J=a(29),P=a.n(J);function B(e){return r.a.createElement("div",{className:P.a.message},r.a.createElement("div",{className:P.a.photo},r.a.createElement("img",{src:e.avatar})),r.a.createElement("div",{className:P.a.content},r.a.createElement("div",{className:P.a.name},e.name),r.a.createElement("div",null,e.message),r.a.createElement("div",{className:P.a.time},e.time)))}var F=function(e){var t=e.addMessage,a=Object(n.useState)(""),l=Object(i.a)(a,2),c=l[0],o=l[1],u=Object(n.useState)(null),s=Object(i.a)(u,2),m=s[0],p=s[1];return r.a.createElement("div",null,r.a.createElement("input",{className:m?P.a.error:"",placeholder:'write text and click "Enter"',value:c,onChange:function(e){o(e.currentTarget.value),p(null)},onKeyPress:function(e){"Enter"===e.key&&""!==c.trim()?(t(c),o("")):p("Title is required")}}),m&&r.a.createElement("div",{className:P.a.errorMessage},m))};var M=function(){var e=Object(n.useState)([{avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",name:"Some Name",message:"some text",time:"22:00"}]),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",a.map((function(e,t){return r.a.createElement(B,{key:t,avatar:e.avatar,name:e.name,message:e.message,time:e.time})})),r.a.createElement("hr",null),r.a.createElement(F,{addMessage:function(e){var t={avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",name:"Some Name",message:e,time:"22:00"};l([].concat(Object(T.a)(a),[t]))}}),r.a.createElement("hr",null))},I=a(56),W=a.n(I);var H=function(e){return r.a.createElement("div",{className:W.a.main},r.a.createElement("div",{className:W.a.name},e.affair.name),r.a.createElement("div",{className:W.a.priority},e.affair.priority),r.a.createElement("button",{onClick:function(){return t=e.affair._id,void e.deleteAffairCallback(t);var t}},"X"))};var U=function(e){var t=e.data.map((function(t){return r.a.createElement(H,{key:t._id,affair:t,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,t,r.a.createElement("button",{onClick:function(){return t="all",void e.setFilter(t);var t}},"All"),r.a.createElement("button",{onClick:function(){return t="high",void e.setFilter(t);var t}},"High"),r.a.createElement("button",{onClick:function(){return t="middle",void e.setFilter(t);var t}},"Middle"),r.a.createElement("button",{onClick:function(){return t="low",void e.setFilter(t);var t}},"Low"))},X=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var G=function(){var e=Object(n.useState)(X),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("all"),o=Object(i.a)(c,2),u=o[0],s=o[1],m=function(e,t){return"all"===t?e:"low"===t?e.filter((function(e){return"low"===e.priority})):"high"===t?e.filter((function(e){return"high"===e.priority})):e.filter((function(e){return"middle"===e.priority}))}(a,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(U,{data:m,setFilter:s,deleteAffairCallback:function(e){return l(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},q=a(57),K=a.n(q),R=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?K.a.error:"";return r.a.createElement("div",{className:K.a.wrapper},r.a.createElement("div",{className:K.a.errorMessage},l),r.a.createElement("input",{value:t,onChange:a,className:o,onKeyPress:function(e){"Enter"===e.key&&n()}}),r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",null," ",c))},Z=function(e){var t=e.users,a=e.addUserCallback,l=Object(n.useState)(""),c=Object(i.a)(l,2),o=c[0],u=c[1],s=Object(n.useState)(""),m=Object(i.a)(s,2),p=m[0],E=m[1],v=t.length;return r.a.createElement(R,{name:o,setNameCallback:function(e){u(e.currentTarget.value),E("")},addUser:function(){o?(a(o),alert("Hello ".concat(o,"!")),u(""),E("")):E("Empty string cannot be a name")},error:p,totalUsers:v})},D=a(142);var Q=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(Z,{users:a,addUserCallback:function(e){l([].concat(Object(T.a)(a),[{_id:Object(D.a)(),name:e}]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},Y=a(47),L=a.n(Y),V=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,i=Object(d.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),s="".concat(L.a.error," ").concat(u||""),m="".concat(L.a.input," ").concat(c?L.a.errorInput:L.a.superInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},i)),c&&r.a.createElement("span",{className:s},c))},z=a(65),$=a.n(z),ee=a(66),te=a.n(ee),ae=function(e){var t=e.red,a=e.className,n=Object(d.a)(e,["red","className"]),l="".concat(t?te.a.red:te.a.default," ").concat(a);return r.a.createElement("button",Object.assign({className:l},n))},ne=a(67),re=a.n(ne),le=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(E.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(re.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:re.a.spanClassName},l))};var ce=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1],c=a?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},u=Object(n.useState)(!1),s=Object(i.a)(u,2),m=s[0],p=s[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:$.a.column},r.a.createElement(V,{value:a,onChangeText:l,onEnter:o,error:c}),r.a.createElement(V,{className:$.a.blue}),r.a.createElement(ae,null,"default"),r.a.createElement(ae,{red:!0,onClick:o},"delete "),r.a.createElement(ae,{disabled:!0},"disabled"),r.a.createElement(le,{checked:m,onChangeChecked:p},"some text "),r.a.createElement(le,{checked:m,onChange:function(e){return p(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},oe=function(e){e.autoFocus;var t=e.onBlur,a=e.onEnter,l=e.spanProps,c=Object(d.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(p.a)(o,2),i=u[0],s=u[1],m=l||{},E=m.children,v=m.onDoubleClick,h=m.className,g=Object(d.a)(m,["children","onDoubleClick","className"]),f="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",h);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(V,Object.assign({autoFocus:!0,onBlur:function(e){s(!1),t&&t(e)},onEnter:function(){s(!1),a&&a()}},c)):r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{style:{height:"17px"},src:"https://avatars.mds.yandex.net/i?id=e99374e95a2d9cb0e4176d6cd3c02e36-4119114-images-thumbs&ref=rim&n=33&w=357&h=188",alt:""}),r.a.createElement("span",Object.assign({onDoubleClick:function(e){s(!0),v&&v(e)},className:f},g),E||c.value)))};function ue(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}function ie(e,t){var a=t,n=localStorage.getItem(e);return null!==n&&(a=JSON.parse(n)),a}ue("test",{x:"A",y:1});ie("test",{x:"",y:0});var se=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(oe,{value:a,onChangeText:l,spanProps:{children:a?void 0:"enter text..."}})),r.a.createElement(ae,{onClick:function(){ue("editable-span-value",a)}},"save"),r.a.createElement(ae,{onClick:function(){l(ie("editable-span-value",""))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var me=function(){return r.a.createElement("div",null,r.a.createElement(se,null),r.a.createElement(M,null),r.a.createElement(G,null),r.a.createElement(Q,null),r.a.createElement(ce,null))};var pe=function(){return r.a.createElement("div",{className:"notFound"},r.a.createElement("img",{src:"https://www.singhaniainternational.com/imgs/error.jpg",alt:""}))},Ee=a(13),ve="/PreJunior",de="/Junior",he="/JuniorPlus";var ge=function(){return r.a.createElement("div",null,r.a.createElement(Ee.d,null,r.a.createElement(Ee.b,{path:"/",element:r.a.createElement(Ee.a,{to:ve})}),r.a.createElement(Ee.b,{path:ve,element:r.a.createElement(me,null)}),r.a.createElement(Ee.b,{path:de,element:r.a.createElement(x,null)}),r.a.createElement(Ee.b,{path:he,element:r.a.createElement(A,null)}),r.a.createElement(Ee.b,{path:"/*",element:r.a.createElement(pe,null)})))};var fe=function(){return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(m,null),r.a.createElement(ge,null)))};var be=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(fe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(be,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},29:function(e,t,a){e.exports={message:"Message_message__1Wxq0",photo:"Message_photo__keWHp",content:"Message_content__28w5T",time:"Message_time__NFvw4",name:"Message_name__2kX0O",error:"Message_error__2NsV-",errorMessage:"Message_errorMessage__3SRx1"}},47:function(e,t,a){e.exports={superInput:"SuperInputText_superInput__1_JE_",errorInput:"SuperInputText_errorInput__2xuHx",input:"SuperInputText_input__dNB3e",error:"SuperInputText_error__JzIEZ"}},56:function(e,t,a){e.exports={main:"Affair_main__he8Vr",name:"Affair_name__24hjw",priority:"Affair_priority__2T91O"}},57:function(e,t,a){e.exports={wrapper:"Greeting_wrapper__3-eRQ",error:"Greeting_error__1pP21",errorMessage:"Greeting_errorMessage__d-J-l"}},65:function(e,t,a){e.exports={blue:"HW4_blue__3nX56",column:"HW4_column__2mGah",testSpanError:"HW4_testSpanError__3sm1Z"}},66:function(e,t,a){e.exports={default:"SuperButton_default__1sqTv",red:"SuperButton_red__2XQvW",button:"SuperButton_button__2CpiU"}},67:function(e,t,a){},70:function(e,t,a){},72:function(e,t,a){e.exports={message:"App_message__3O0jb",photo:"App_photo__3mY2j",content:"App_content__2-P8-",time:"App_time__a5kHX",name:"App_name__2F_Qn"}},86:function(e,t,a){e.exports=a(101)},94:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.543479c5.chunk.js.map