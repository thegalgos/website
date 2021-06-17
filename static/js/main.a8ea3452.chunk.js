(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{109:function(e,n,t){"use strict";t.r(n);t(2);var c=t(39),i=t.n(c),s=(t(86),t(27),t(21)),a=(t.p,t(0));t(22);var r=t(37),o=t(46),l=Object(o.b)({name:"settings",initialState:{topNotification:{message:"Pre-sale phase 1 is open. You can start collection your Galgos!",show:!1}},reducers:{showTopNotification:function(e){e.topNotification.show=!0},hideTopNotification:function(e){e.topNotification.show=!1}}}),b=l.actions,d=(b.showTopNotification,b.hideTopNotification,l.reducer);var p,j=t(28);t(122),Object(j.a)(p||(p=Object(s.a)(["\nquery nfts {\n  nft(order_by: {name: asc}) {\n    id\n    name\n    price\n    available\n    total_supplay\n    source_image\n  }\n}"])));var u;t(70),t(11),Object(j.a)(u||(u=Object(s.a)(["\nquery MyQuery ($id: Int!){\n    nft_by_pk(id: $id) {\n      id\n      name\n      source_image\n      price\n      gender\n      total_supplay\n      collection {\n        name\n      }\n\n    }\n  }\n"])));var g,f,h,x=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("section",{class:"text-gray-200 bg-gray-900 body-font",children:Object(a.jsxs)("div",{class:"container mx-auto flex px-5 py-20 items-center justify-center flex-col",children:[Object(a.jsx)("img",{class:"lg:w-2/6 md:w-3/6 w-5/6 mb-4 object-cover object-center rounded-xl",alt:"hero",src:"images/the-galgos-comming-soon.png"}),Object(a.jsx)("h1",{class:"text-8xl brand-text",children:"The Galgos"}),Object(a.jsxs)("div",{class:"text-center mt-6",children:[Object(a.jsx)("h1",{class:"title-font text-2xl mb-4 font-bold uppercase",children:"NFTs on Cardano Blockchain"}),Object(a.jsx)("p",{class:"title-font text-xl mt-10 font-extrabold text-green-800",children:"- COMMING SOON -"})]})]})}),Object(a.jsxs)("section",{class:"bg-black flex justify-center p-10 items-center gap-10",children:[Object(a.jsx)("img",{class:"w-20",src:"images/11labs.png"}),Object(a.jsx)("img",{class:"w-20",src:"images/cardano-1500.webp"})]}),Object(a.jsx)("section",{class:"bg-gray-900 flex justify-center p-6 text-gray-400 mx-auto",children:"\xa9 Copyright 2021 - 11LABS - All rights reserved"})]})};t(93),t(124),t(125),Object(j.a)(g||(g=Object(s.a)(["\nquery nfts {\n  nft(limit: 10, order_by: {name: asc}) {\n    id\n    name\n    price\n    reserved_by\n    reserve_expires_at\n  }\n}"]))),Object(j.a)(f||(f=Object(s.a)(["\nmutation updateNftByPk ($id: numeric!, $reserved_by: String!){\n  update_nft_by_pk(pk_columns: {id: $id}, _set: {reserved_by: $reserved_by}) {\n    id\n    reserved_by\n  }\n}\n"]))),Object(j.a)(h||(h=Object(s.a)(["\nsubscription OnReservation {\n  nft {\n    id\n    reserved_by\n  }\n}\n"])));var m=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,126)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,s=n.getLCP,a=n.getTTFB;t(e),c(e),i(e),s(e),a(e)}))},O=t(54),y=t(110),v=t(108),_=t(73),w=t(121),N=t(29),k=t(23),T=Object(o.a)({reducer:{settings:d}}),q=new w.a({uri:"http://localhost:8080/v1/graphql"}),C=new _.a({uri:"ws://localhost:8080/v1/graphql",options:{reconnect:!0}}),$=Object(N.split)((function(e){var n=e.query,t=Object(k.e)(n);return"OperationDefinition"===t.kind&&"subscription"===t.operation}),C,q),B=new O.a({link:$,cache:new y.a});i.a.render(Object(a.jsx)(v.a,{client:B,children:Object(a.jsx)(r.a,{store:T,children:Object(a.jsx)(x,{})})}),document.getElementById("root")),m()},86:function(e,n,t){},93:function(e,n,t){}},[[109,1,2]]]);
//# sourceMappingURL=main.a8ea3452.chunk.js.map