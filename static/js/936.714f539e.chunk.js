"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936],{357:function(t,e,r){r.d(e,{e:function(){return o}});var n=r(87),a=r(689),u="MovieList_listMovies__BlttL",c="MovieList_itemMovie__sURUG",s="MovieList_cardMovie__H8TtT",i=r(184),o=function(t){var e=t.movies,r=(0,a.TH)();return e?(0,i.jsx)("ul",{className:u,children:e.map((function(t){var e=t.backdrop_path?"https://image.tmdb.org/t/p/w500/".concat(t.backdrop_path):"https://dummyimage.com/400x225/000/fff&text=Image+is+not+defined";return(0,i.jsx)("li",{className:c,children:(0,i.jsxs)(n.rU,{to:"/movies/".concat(t.id),state:{from:r},className:s,children:[(0,i.jsx)("h2",{children:t.title}),(0,i.jsx)("img",{src:e,alt:t.title})]})},t.id)}))}):void 0}},936:function(t,e,r){r.r(e),r.d(e,{default:function(){return o}});var n=r(439),a=r(791),u="Home_div__dPT8O",c=r(391),s=r(357),i=r(184);var o=function(){var t=(0,a.useState)([]),e=(0,n.Z)(t,2),r=e[0],o=e[1];return(0,a.useEffect)((function(){(0,c.JN)().then((function(t){var e=t.results;o(e)}))}),[]),(0,i.jsxs)("div",{className:u,children:[(0,i.jsx)("h1",{children:"Tranding todays"}),(0,i.jsx)(s.e,{movies:r})]})}},391:function(t,e,r){r.d(e,{JN:function(){return s},Ku:function(){return f},Pg:function(){return o},Ph:function(){return i},W_:function(){return p}});var n=r(861),a=r(757),u=r.n(a),c=r(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"794730dc1c43e9adb303e39dd0b0dcb2"};var s=function(){var t=(0,n.Z)(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/movie/day",{params:{page:1}});case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie",{params:{query:e}});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/credits"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/reviews"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=936.714f539e.chunk.js.map