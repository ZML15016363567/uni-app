(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/listenKnowledge/listenKnowledge"],{"39e8":function(t,n,e){"use strict";var o={"uni-load-more":()=>e.e("components/uni-load-more/uni-load-more").then(e.bind(null,"a884"))},r=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}))},5876:function(t,n,e){"use strict";e.r(n);var o=e("39e8"),r=e("7a45");for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);var u,i=e("f0c5"),c=Object(i["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);n["default"]=c.exports},"7a45":function(t,n,e){"use strict";e.r(n);var o=e("a161"),r=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=r.a},"7ab6":function(t,n,e){"use strict";(function(t){e("bdde"),e("921b");o(e("66fd"));var n=o(e("5876"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},a161:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(e("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t){return c(t)||i(t)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function i(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function c(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}function s(t,n,e,o,r,a,u){try{var i=t[a](u),c=i.value}catch(s){return void e(s)}i.done?n(c):Promise.resolve(c).then(o,r)}function l(t){return function(){var n=this,e=arguments;return new Promise((function(o,r){var a=t.apply(n,e);function u(t){s(a,o,r,u,i,"next",t)}function i(t){s(a,o,r,u,i,"throw",t)}u(void 0)}))}}var d=function(){e.e("components/bookList").then(function(){return resolve(e("8cf8"))}.bind(null,e)).catch(e.oe)},f=function(){e.e("components/pageTitle").then(function(){return resolve(e("ce25"))}.bind(null,e)).catch(e.oe)},h=function(){e.e("components/uni-load-more/uni-load-more").then(function(){return resolve(e("a884"))}.bind(null,e)).catch(e.oe)},p={data:function(){return{loadedBookList:[],loadMoreStatus:"loading"}},components:{bookList:d,pageTitle:f,uniLoadMore:h},methods:{initLoadMore:function(){var t=l(o.default.mark((function t(){var n,e=this;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/readList");case 2:n=t.sent,setTimeout((function(){n.books.length&&(e.loadedBookList=a(n.books),e.loadMoreStatus="more")}),2e3);case 4:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),loadMore:function(){var t=l(o.default.mark((function t(){var n,e=this;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/readList");case 2:n=t.sent,t.t0=n.isLoadMore,t.next="正在加载中"===t.t0?6:"没有更多了"===t.t0?8:"上拉加载显示更多"===t.t0?10:13;break;case 6:return t.abrupt("return");case 8:return this.loadMoreStatus="noMore",t.abrupt("break",13);case 10:return this.loadMoreStatus="loading",setTimeout((function(){e.loadedBookList=[].concat(a(e.loadedBookList),a(n.books)),e.loadMoreStatus="more"}),1500),t.abrupt("break",13);case 13:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}()},onLoad:function(){this.initLoadMore()},onReachBottom:function(){this.loadMore()}};n.default=p}},[["7ab6","common/runtime","common/vendor"]]]);