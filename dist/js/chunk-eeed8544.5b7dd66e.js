<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\css\APlayer.min.css"><script src="\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\js\Meting.min.js"></script>(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eeed8544"],{3117:function(t,e,n){},"36ca":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fenye"},[n("div",{staticClass:"block"},[n("el-pagination",{attrs:{layout:"prev, pager, next,total",total:t.total,"page-size":t.pageSize},on:{"current-change":t.pageChange}})],1)])},i=[],s={data:function(){return{}},props:["total","pageSize"],components:{},created:function(){},methods:{pageChange:function(t){this.$emit("pageChange",t)}}},o=s,r=(n("ea25"),n("2877")),c=Object(r["a"])(o,a,i,!1,null,"459985ba",null);e["a"]=c.exports},5109:function(t,e,n){},"5b0f":function(t,e,n){"use strict";var a=n("3117"),i=n.n(a);i.a},c751:function(t,e,n){},e4b3:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("body",[n("header",[n("h4",[t._v("最新MV")]),n("ul",{staticClass:"biaoQianItem"},t._l(t.biaoQianName,(function(e,a){return n("li",{key:a,staticClass:"cur",on:{click:function(e){return t.clickName(a)}}},[t._v(" "+t._s(e.name)),a!==t.biaoQianName.length-1?n("span",{staticStyle:{margin:"0 16px"}},[t._v("|")]):t._e()])})),0)]),n("Mv-list",{staticClass:"clearfix",attrs:{videoList:t.videoList}}),n("Fenye",{attrs:{total:t.total,pageSize:t.pageSize},on:{pageChange:t.currentChange}})],1)},i=[],s=(n("96cf"),n("1da1")),o=n("25b1"),r=n("36ca"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.videoList?n("div",{staticClass:"maxBox"},t._l(t.videoList,(function(e,a){return n("div",{key:a,class:(a+1)%3?"itemBox":"itemBox cr"},[n("div",{staticClass:"imgBox",on:{click:function(e){return t.putVideoing(t.videoList[a])}}},[n("img",{attrs:{src:e.cover,alt:""}}),n("span",{staticClass:"time"},[t._v(t._s(t._f("timeFormat")(e.duration)))]),n("span",{staticClass:"count"},[n("i",{staticClass:"el-icon-view",staticStyle:{color:"#fff","margin-right":"4px"}}),t._v(t._s(e.playCount>1e4?(e.playCount/1e4).toFixed(0)+"万":e.playCount))])]),t._m(0,!0),n("div",{staticClass:"textBox"},[n("h5",{staticClass:"nowp"},[t._v("作者:"+t._s(e.artistName))]),n("span",{staticClass:"nowp"},[t._v(t._s(e.name))])])])})),0):t._e()},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"boFang"},[n("i",{staticClass:"el-icon-video-play"})])}],l={data:function(){return{}},props:{videoList:{type:Array}},components:{},created:function(){console.log(this.videoList)},mounted:function(){console.log(this.videoList)},methods:{putVideoing:function(t){this.$store.commit("setVideoInfo",t),this.$router.push("/home/mving"+t.id)}},watch:{idList:function(){this.getVideoList()}},filters:{timeFormat:function(t){return Object(o["d"])(t)}}},f=l,m=(n("5b0f"),n("2877")),p=Object(m["a"])(f,c,u,!1,null,"53491870",null),d=p.exports,v={data:function(){return{biaoQianName:[{name:"内地"},{name:"港台"},{name:"欧美"},{name:"日本"},{name:"韩国"}],query:{area:"内地",limit:36,offset:0},videoList:[],total:66,pageSize:6}},components:{MvList:d,Fenye:r["a"]},created:function(){this.getMvList()},methods:{getMvList:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/mv/all",{params:t.query});case 2:n=e.sent,console.log(n.data),t.videoList=n.data.data;case 5:case"end":return e.stop()}}),e)})))()},currentChange:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.query.offset=(t-1)*e.query.limit,console.log(t),e.getMvList(),a=document.getElementById("Right_box").scrollHeight,Object(o["b"])(a,0);case 5:case"end":return n.stop()}}),n)})))()},clickName:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.query.offset=t*e.query.limit,console.log(t+1),e.getMvList();case 3:case"end":return n.stop()}}),n)})))()}}},g=v,h=(n("f235"),Object(m["a"])(g,a,i,!1,null,"07bdf4c9",null));e["default"]=h.exports},ea25:function(t,e,n){"use strict";var a=n("5109"),i=n.n(a);i.a},f235:function(t,e,n){"use strict";var a=n("c751"),i=n.n(a);i.a}}]);
//# sourceMappingURL=chunk-eeed8544.5b7dd66e.js.map