(this.webpackJsonpss=this.webpackJsonpss||[]).push([[3],{298:function(e,a,t){e.exports={root:"Dialog_root__XZT9w"}},299:function(e,a,t){e.exports={root:"MessageList_root__3Q0no",container:"MessageList_container__3ACJH",header:"MessageList_header__2G85b",containerMessages:"MessageList_containerMessages__1_ZG0"}},300:function(e,a,t){e.exports={root_gust:"Message_root_gust__27qKf",root_my:"Message_root_my__2Z_EO",show:"Message_show__cqU7v",myMessage:"Message_myMessage__2Phv3",gustMessage:"Message_gustMessage__2D7UU",body:"Message_body__XHy40",myFooter:"Message_myFooter__1EWY-",gustFooter:"Message_gustFooter__3IecQ"}},301:function(e,a,t){e.exports={root:"MessageForm_root__2GUy_",area:"MessageForm_area__3sRB9",btn:"MessageForm_btn__1LIPw"}},302:function(e,a,t){e.exports={root:"UserItemList_root__dVvDR",container:"UserItemList_container__2-poS",containerItem:"UserItemList_containerItem__1rW8O",link:"UserItemList_link__m2CqR"}},303:function(e,a,t){e.exports={root:"UserItem_root__1I-Y2",active:"UserItem_active__3-osa",avatar:"UserItem_avatar__3VgKW",info:"UserItem_info__1UlBm",alert:"UserItem_alert__1WZFh",alertBox:"UserItem_alertBox__2u_dP"}},305:function(e,a,t){"use strict";t.r(a);var s=t(0),r=t.n(s),n=t(10),o=t(8),m=t(7),c=t(121),i=t(109),l=function(e){return e.dialogPage.messages},_=t(298),u=t.n(_),g=t(299),d=t.n(g),E=t(300),f=t.n(E),v=function(e){var a=e.message;return r.a.createElement("div",{className:a.isGust?f.a.root_gust:f.a.root_my},r.a.createElement("div",{className:a.isGust?f.a.gustMessage:f.a.myMessage},r.a.createElement("div",{className:f.a.body},r.a.createElement("p",null,a.body)),r.a.createElement("div",{className:a.isGust?f.a.gustFooter:f.a.myFooter},r.a.createElement("p",null,a.time),!a.isGust&&r.a.createElement("span",null,a.check))))},b=t(132),M=t(133),p=t(301),h=t.n(p),N=t(27),U=t(23),y=Object(M.a)({form:"message"})((function(e){return r.a.createElement("form",{className:h.a.root,onSubmit:e.handleSubmit},r.a.createElement(b.a,{className:h.a.area,palecholder:"Write message ...",name:"message",component:"textarea"}),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return setTimeout((function(){return e.change("message",null)}),0)},className:h.a.btn},r.a.createElement(N.a,{icon:U.c}))))})),I=function(e){var a=e.messages,t=e.submitMessage,n=e.match,o=n.params.idUser?Number(n.params.idUser):1,m=Object(s.createRef)();return Object(s.useEffect)((function(){m.current.scrollBy(0,m.current.offsetHeight)})),r.a.createElement("div",{className:d.a.root},r.a.createElement("div",{className:d.a.container,ref:m},r.a.createElement("div",{className:d.a.containerMessages},void 0!==a[o-1]&&a[o-1].messages.map((function(e){return r.a.createElement(v,{key:e.id,message:e})})))),r.a.createElement(y,{onSubmit:function(e){var a=e.message;return t(o,a)}}))},x=t(13),F=t(302),L=t.n(F),k=t(303),O=t.n(k),G=function(e){var a=e.user,t=e.match,s=t.params.idUser?Number(t.params.idUser):1;return r.a.createElement("div",{className:s===a.id?O.a.active:O.a.root},r.a.createElement("div",{className:O.a.avatar},r.a.createElement("img",{src:a.img.url,alt:a.img.alt})),r.a.createElement("div",{className:O.a.info},r.a.createElement("p",null,a.name)),r.a.createElement("div",{className:O.a.alert},r.a.createElement("div",{className:O.a.alertBox},a.message)))},j=function(e){var a=e.users,t=e.match;return r.a.createElement("div",{className:L.a.root},r.a.createElement("div",{className:L.a.container},r.a.createElement("h3",null,"Users List"),r.a.createElement("div",{className:L.a.containerItem},a.map((function(e){return r.a.createElement(x.b,{className:L.a.link,key:e.id,to:"/dialog/".concat(e.id)},r.a.createElement(G,{user:e,match:t}))})))))},w=function(e){var a=e.users,t=e.messages,s=e.submitMessage,n=e.match;return r.a.createElement("div",{className:u.a.root},r.a.createElement(j,{users:a,match:n}),r.a.createElement(I,{messages:t,submitMessage:s,match:n}))},B=Object(s.memo)((function(e){return r.a.createElement(w,e)})),P=Object(m.d)(o.g,Object(n.b)((function(e){return{users:(a=e,a.dialogPage.users),messages:l(e)};var a}),{submitMessage:i.b}),c.a)(B);a.default=P}}]);
//# sourceMappingURL=3.c44ae63b.chunk.js.map