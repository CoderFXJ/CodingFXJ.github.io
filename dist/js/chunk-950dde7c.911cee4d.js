<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\css\APlayer.min.css"><script src="\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\js\Meting.min.js"></script>(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-950dde7c"],{"0ac3":function(t,e,a){},"1a4d":function(t,e,a){"use strict";var n=a("5e52"),i=a.n(n);i.a},"1fe5":function(t,e,a){},"36ca":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fenye"},[a("div",{staticClass:"block"},[a("el-pagination",{attrs:{layout:"prev, pager, next,total",total:t.total,"page-size":t.pageSize},on:{"current-change":t.pageChange}})],1)])},i=[],r={data:function(){return{}},props:["total","pageSize"],components:{},created:function(){},methods:{pageChange:function(t){this.$emit("pageChange",t)}}},s=r,o=(a("ea25"),a("2877")),c=Object(o["a"])(s,n,i,!1,null,"459985ba",null);e["a"]=c.exports},5109:function(t,e,a){},"5e52":function(t,e,a){},"62a8":function(t,e,a){"use strict";var n=a("1fe5"),i=a.n(n);i.a},8708:function(t,e,a){"use strict";var n=a("0ac3"),i=a.n(n);i.a},a434:function(t,e,a){"use strict";var n=a("23e7"),i=a("23cb"),r=a("a691"),s=a("50c4"),o=a("7b0b"),c=a("65f0"),u=a("8418"),d=a("1dde"),l=a("ae40"),p=d("splice"),m=l("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,g=Math.min,h=9007199254740991,v="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!p||!m},{splice:function(t,e){var a,n,d,l,p,m,b=o(this),x=s(b.length),C=i(t,x),w=arguments.length;if(0===w?a=n=0:1===w?(a=0,n=x-C):(a=w-2,n=g(f(r(e),0),x-C)),x+a-n>h)throw TypeError(v);for(d=c(b,n),l=0;l<n;l++)p=C+l,p in b&&u(d,l,b[p]);if(d.length=n,a<n){for(l=C;l<x-n;l++)p=l+n,m=l+a,p in b?b[m]=b[p]:delete b[m];for(l=x;l>x-n+a;l--)delete b[l-1]}else if(a>n)for(l=x-n;l>C;l--)p=l+n-1,m=l+a-1,p in b?b[m]=b[p]:delete b[m];for(l=0;l<a;l++)b[l+C]=arguments[l+2];return b.length=x-n+a,d}})},b1c2:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("body",[a("BiaoQian",{attrs:{biaoQianName:t.biaoQianName},on:{nameChange:t.nameChange}}),a("VideoList",{staticClass:"clearfix",attrs:{videoList:t.videoList}}),a("Fenye",{attrs:{total:t.total,pageSize:t.pageSize},on:{pageChange:t.currentChange}})],1)])},i=[],r=(a("d81d"),a("a434"),a("2909")),s=(a("96cf"),a("1da1")),o=a("36ca"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"allList"},[a("el-dropdown",{attrs:{size:"medium",trigger:"click"}},[a("span",{staticClass:"el-dropdown-link",staticStyle:{color:"#000"}},[t._v(" 全部视频"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{staticStyle:{position:"relative",top:"-20px"},attrs:{slot:"dropdown"},slot:"dropdown"})],1)],1),a("div",{staticClass:"biaoQian"},[a("span",{staticStyle:{"margin-right":"14px"}},[t._v("分类:")]),a("ul",{staticClass:"biaoQianItem"},t._l(t.biaoQianName,(function(e,n){return a("li",{key:n,staticClass:"cur",on:{click:function(a){return t.clickName(e.name,n)}}},[t._v(" "+t._s(e.name)),n!==t.biaoQianName.length-1?a("span",{staticStyle:{margin:"0 16px"}},[t._v("|")]):t._e()])})),0)])])},u=[],d={data:function(){return{}},props:{biaoQianName:{type:Array}},components:{},created:function(){},methods:{getIdList:function(){this.biaoQianName},clickName:function(t,e){this.$emit("nameChange",e)}}},l=d,p=(a("8708"),a("2877")),m=Object(p["a"])(l,c,u,!1,null,"8453f2e6",null),f=m.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.videoList?a("div",{staticClass:"maxBox"},t._l(t.videoList,(function(e,n){return a("div",{key:n,class:(n+1)%3?"itemBox":"itemBox cr"},[a("div",{staticClass:"imgBox",on:{click:function(e){return t.putVideoing(t.videoList[n].data)}}},[a("img",{attrs:{src:e.data.coverUrl,alt:""}}),a("span",{staticClass:"time"},[t._v(t._s(t._f("timeFormat")(e.data.durationms)))]),a("span",{staticClass:"count"},[a("i",{staticClass:"el-icon-view",staticStyle:{color:"#fff","margin-right":"4px"}}),t._v(t._s((e.data.playTime/1e4).toFixed(0))+"万")])]),t._m(0,!0),a("div",{staticClass:"textBox"},[a("h5",{staticClass:"nowp"},[t._v(t._s(e.data.title))]),a("span",{staticClass:"nowp"},[t._v(t._s(e.data.description))])])])})),0):t._e()},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"boFang"},[a("i",{staticClass:"el-icon-video-play"})])}],v=a("25b1"),b={data:function(){return{}},props:{videoList:{type:Array}},components:{},created:function(){},mounted:function(){},methods:{putVideoing:function(t){this.$store.commit("setVideoInfo",t),this.$router.push("/home/videoing"+t.vid)}},watch:{idList:function(){this.getVideoList()}},filters:{timeFormat:function(t){return Object(v["d"])(t)}}},x=b,C=(a("1a4d"),Object(p["a"])(x,g,h,!1,null,"4f300a6a",null)),w=C.exports,_={data:function(){return{biaoQianName:[],ids:[],videoList:[],total:66,pageSize:6,index:0}},components:{BiaoQian:f,VideoList:w,Fenye:o["a"]},created:function(){this.getbiaoQianName()},mounted:function(){},methods:{getbiaoQianName:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("hehe"),window.localStorage.getItem("getP")){e.next=3;break}return e.abrupt("return",t.$message.error("未登录状态，不可访问！"));case 3:return e.next=5,t.$http.get("/video/group/list");case 5:return a=e.sent,console.log(a),t.biaoQianName=Object(r["a"])(a.data.data).splice(0,11),t.biaoQianName.map((function(e){t.ids.push(e.id)})),e.next=11,t.$http.get("video/group",{params:{id:t.ids[t.index]}});case 11:n=e.sent,t.videoList=n.data.datas.splice(0,6);case 13:case"end":return e.stop()}}),e)})))()},nameChange:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.index=t,a.next=3,e.$http.get("video/group",{params:{id:e.ids[e.index]}});case 3:n=a.sent,e.videoList=n.data.datas.splice(0,6);case 5:case"end":return a.stop()}}),a)})))()},currentChange:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.index=t-1,console.log(t),a.next=4,e.$http.get("video/group",{params:{id:e.ids[e.index]}});case 4:n=a.sent,e.videoList=n.data.datas.splice(0,6);case 6:case"end":return a.stop()}}),a)})))()}}},y=_,k=(a("62a8"),Object(p["a"])(y,n,i,!1,null,"48067fd2",null));e["default"]=k.exports},d81d:function(t,e,a){"use strict";var n=a("23e7"),i=a("b727").map,r=a("1dde"),s=a("ae40"),o=r("map"),c=s("map");n({target:"Array",proto:!0,forced:!o||!c},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},ea25:function(t,e,a){"use strict";var n=a("5109"),i=a.n(n);i.a}}]);
//# sourceMappingURL=chunk-950dde7c.911cee4d.js.map