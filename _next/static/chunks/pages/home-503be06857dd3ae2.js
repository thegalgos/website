(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[229],{76:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home",function(){return n(7503)}])},7802:function(e,t,n){"use strict";var s=n(5893),r=n(3056),a=n(1664),i=n(2868),l=n(4461);function c(e){var t=e.item;return(0,s.jsxs)("div",{className:"bg-black p-4",children:[(0,s.jsx)(a.default,{href:"/galgo/".concat(t.id),children:(0,s.jsx)("a",{className:"rounded-xl shadow-lg max-w-max mx-auto group overflow-hidden block",children:(0,s.jsx)("img",{className:"transform transition duration-1000 ease-out group-hover:scale-150 w-full",src:"https://img.cnft.exchange/thegalgos/".concat(String(t.number).padStart(4,"0"),".webp")})})}),(0,s.jsxs)("div",{className:"mt-4 flex items-center justify-between text-white",children:[(0,s.jsx)("span",{className:"font-bold text-md",children:t.given_name}),(0,s.jsxs)("span",{className:"text-xs border-gray-500 border rounded-md px-4 py-2",children:["Series ",t.pack_number]}),(0,s.jsx)("span",{className:"hidden text-xs border-gray-500 border rounded-md px-4 py-2",children:"addr1qyvf...asqwhjmt5"})]}),(0,s.jsxs)("div",{className:"mt-2 flex justify-between text-white items-center",children:[t.available>0?(0,s.jsx)(a.default,{href:"/galgo/".concat(t.id),children:(0,s.jsx)("a",{className:"transition block shadow-lg bg-blue-800 py-2 px-6 text-sm rounded-full hover:bg-blue-900",children:"Details"})}):(0,s.jsx)("span",{className:"shadow-lg bg-yellow-800 px-6 text-sm rounded-full",children:"Sold Out"}),(0,s.jsx)("span",{className:"text-sm hidden border-white py-4 font-bold"})]})]})}t.Z=function(e){var t=e.title,n=e.maxResults||1e4,a=(0,r.a)(i.$h,{variables:{limit:n}}),o=a.loading,d=a.error,x=a.data;return o?(0,s.jsx)(l.Z,{}):d?(0,s.jsx)("div",{className:"bg-gray-900",children:(0,s.jsxs)("div",{className:"text-gray-400 mx-auto max-w-7xl p-10",children:[(0,s.jsx)("h1",{className:"text-xl text-bold",children:"Ups!"}),(0,s.jsx)("p",{className:"py-6",children:"Our servers are busy. Please try again later."})]})}):(x=[].concat(x.collectible),t=t||"OG Collection",(0,s.jsx)("div",{className:"bg-gray-900",children:(0,s.jsxs)("div",{className:"container mx-auto p-6 pt-20",children:[(0,s.jsx)("h2",{className:"text-4xl text-white font-extrabold mb-10 whitespace-nowrap",children:t}),(0,s.jsx)("div",{className:"mx-auto grid gap-10 grid-rows-1 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4",children:x.map((function(e){return(0,s.jsx)(c,{item:e},e.id)}))})]})}))}},4461:function(e,t,n){"use strict";var s=n(5893);t.Z=function(){return(0,s.jsx)("div",{className:"w-full text-white bg-black animate-pulse",children:(0,s.jsx)("div",{className:"container flex items-center justify-between px-6 py-4 mx-auto",children:(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsxs)("svg",{className:"animate-spin -ml-1 mr-3 h-6 w-6 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,s.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,s.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),(0,s.jsx)("p",{className:"mx-2",children:"Loading...."})]})})})}},2868:function(e,t,n){"use strict";n.d(t,{NW:function(){return x},$h:function(){return d},K5:function(){return m}});var s=n(1621);function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function a(){var e=r(["\nmutation updateNftByPk ($id: Int!, $reserved_by: String!){\n  update_nft_by_pk(pk_columns: {id: $id}, _set: {reserved_by: $reserved_by}) {\n    id\n    reserved_by\n  }\n}"]);return a=function(){return e},e}function i(){var e=r(["\nmutation insertReservation ($id: Int!, $reserved_by: String!){\n  insert_reservation_one(object: {nft_id: $id, reserved_by: $reserved_by}) {\n    id\n    reservation_expiration_time\n    price\n    reserved_by\n    payment_address\n  }\n}"]);return i=function(){return e},e}function l(){var e=r(["\nquery collectibles ($limit: Int!) {\n    collectible (order_by: {name: asc}, limit: $limit) {\n      id\n      name\n      number\n      given_name\n      pack_number\n      available\n      total_supplay\n      image_url\n    }\n  }"]);return l=function(){return e},e}function c(){var e=r(["\nquery MyQuery ($id: Int!){\n    collectible_by_pk(id: $id) {\n      id\n      given_name\n      name\n      image_url\n      gender\n      total_supplay\n      available\n      pack_number\n      traits\n      occupation\n    }\n  }\n"]);return c=function(){return e},e}function o(){var e=r(['\nquery MyQuery {\n  configuration(where: {key: {_eq: "current_sales"}}) {\n    id\n    key\n    value\n  }\n}\n']);return o=function(){return e},e}(0,s.Ps)(a()),(0,s.Ps)(i());var d=(0,s.Ps)(l()),x=(0,s.Ps)(c()),m=(0,s.Ps)(o())},7503:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var s=n(5893),r=n(1664);var a=function(){return(0,s.jsx)("section",{class:"text-gray-400 bg-gray-900 body-font",children:(0,s.jsxs)("div",{class:"container mx-auto max-w-7xl p-10 flex md:flex-row flex-col items-center",children:[(0,s.jsxs)("div",{class:"lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center",children:[(0,s.jsxs)("h1",{class:"title-font sm:text-5xl text-3xl mb-4 text-white font-bold",children:["Collect, hold and earn",(0,s.jsx)("br",{class:"hidden lg:inline-block"})]}),(0,s.jsx)("p",{class:"mb-8 text-xl",children:"Hand drawn NFTs with smart-contract functionality"}),(0,s.jsx)("div",{class:"flex justify-center",children:(0,s.jsx)("a",{target:"_blank",href:"https://dapp.thegalgos.io",class:"inline-flex text-white bg-blue-800 border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 rounded text-2xl font-semibold",children:"Access DApp"})})]}),(0,s.jsx)("div",{class:"lg:max-w-lg lg:w-full md:w-1/2 w-5/6",children:(0,s.jsx)("img",{class:"object-cover object-center rounded",alt:"hero",src:"images/hero.webp"})})]})})},i=n(7294);const l=i.forwardRef((function(e,t){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 13l4 4L19 7"}))}));var c=[{name:"Long-term goals",description:"We are constantly innovating and as such we set long-term goals to be a reference in the NFT space",icon:l},{name:"Hold to earn",description:"While you hold your The Galgos NFTs you will also be earning monthly rewards through our DApp",icon:l},{name:"Play to earn",description:"A set of quests that can be completed to earn special NFTs",icon:l},{name:"Treasure boxes and keys",description:"A set of treasure boxes locked by special keys, containing items which can help complete the quests",icon:l},{name:"Swap",description:"Smart-contract swapping functionality to trade your NFTs",icon:l},{name:"Puzzles",description:"Each series comes with a puzzle that only big brains will be able to solve",icon:l}];function o(){return(0,s.jsx)("div",{className:"py-12 bg-gray-800",children:(0,s.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,s.jsxs)("div",{className:"lg:text-center",children:[(0,s.jsx)("h2",{className:"text-base text-white font-semibold tracking-wide uppercase",children:"Utility matters"}),(0,s.jsx)("p",{className:"mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl",children:"Art + Functionality"}),(0,s.jsx)("p",{className:"mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto",children:"Smart-contract based utility"})]}),(0,s.jsx)("div",{className:"mt-10",children:(0,s.jsx)("dl",{className:"space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10",children:c.map((function(e){return(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsxs)("dt",{children:[(0,s.jsx)("div",{className:"absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white",children:(0,s.jsx)(e.icon,{className:"h-6 w-6","aria-hidden":"true"})}),(0,s.jsx)("p",{className:"ml-16 text-lg leading-6 font-medium text-white",children:e.name})]}),(0,s.jsx)("dd",{className:"mt-2 ml-16 text-base text-gray-500",children:e.description})]},e.name)}))})})]})})}var d=n(7802);var x=function(){return(0,s.jsxs)("div",{className:"bg-gray-900 ",children:[(0,s.jsx)(a,{}),(0,s.jsx)(o,{}),(0,s.jsx)(d.Z,{title:"Featured",maxResults:8}),(0,s.jsx)("div",{className:"mx-auto max-w-7xl text-center p-10 pb-20",children:(0,s.jsx)(r.default,{href:"/og-collection",children:(0,s.jsx)("a",{className:"inline-flex text-white bg-blue-800 border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 rounded text-lg",children:"Explore the collection"})})})]})}}},function(e){e.O(0,[919,774,888,179],(function(){return t=76,e(e.s=t);var t}));var t=e.O();_N_E=t}]);