(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/drag-sorts/index"],{"0586":function(t,e,i){},"16cd":function(t,e,i){"use strict";var r=i("0586"),n=i.n(r);n.a},"3ccf":function(t,e,i){"use strict";i.r(e);var r=i("81a6"),n=i.n(r);for(var u in r)"default"!==u&&function(t){i.d(e,t,(function(){return r[t]}))}(u);e["default"]=n.a},"4c94":function(t,e,i){"use strict";i.r(e);var r=i("8f61"),n=i("3ccf");for(var u in n)"default"!==u&&function(t){i.d(e,t,(function(){return n[t]}))}(u);i("16cd");var o,s=i("f0c5"),c=Object(s["a"])(n["default"],r["b"],r["c"],!1,null,"0447f0a0",null,!1,r["a"],o);e["default"]=c.exports},"81a6":function(t,e,i){"use strict";(function(t){function i(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function r(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"drag-sort",mixins:[],components:{},data:function(){return{reveal:!1,style:{background:"red"},direction:"all",windowWidth:100,height:40,currentList:[],active:-1,index:0,topY:0,topX:0,deviationX:0,deviationY:0}},computed:{boxHeight:function(){return Math.ceil((Number(this.list.length)+1)/4)*this.height+"px"}},props:{list:{type:Array,default:function(){return[]}},boxStyle:{type:Object,default:function(){return{}}},props:{type:Object,default:function(){return{label:"label",value:"value"}}}},watch:{list:{handler:function(){this.onUpdateCurrentList()},deep:!0}},created:function(){var e=t.getSystemInfoSync();this.windowWidth=e.windowWidth,this.onUpdateCurrentList()},mounted:function(){},updated:function(){},filters:{},methods:{onUpdateCurrentList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.list,e=[];for(var i in t){var n=Math.ceil((Number(i)+1)/4)-1,u=0;u=i<=3?i*this.windowWidth*.24+.04*this.windowWidth||.04*this.windowWidth:(Number(i)+1)%4===0?3*this.windowWidth*.24+.04*this.windowWidth||.04*this.windowWidth:((Number(i)+1)%4-1)*this.windowWidth*.24+.04*this.windowWidth||.04*this.windowWidth,e.push(r(r({},t[i]),{},{isShow:1,index:Number(i),SortNumber:Number(i),y:n*this.height,x:u,animation:!0}))}this.currentList=e},moveUpdateCurrentList:function(t){for(var e in this.currentList){var i=void 0;i=this.currentList[e].SortNumber||0===this.currentList[e].SortNumber?this.currentList[e].SortNumber:Number(e);r({},this.currentList[e]);this.currentList[e].y=(Math.ceil((Number(i)+1)/4)-1)*this.height,t!=i&&(i<=3?this.currentList[e].x=i*this.windowWidth*.24+.04*this.windowWidth||.04*this.windowWidth:(Number(i)+1)%4===0?this.currentList[e].x=3*this.windowWidth*.24+.04*this.windowWidth||.04*this.windowWidth:this.currentList[e].x=((Number(i)+1)%4-1)*this.windowWidth*.24+.04*this.windowWidth||.04*this.windowWidth)}this.$emit("change",this.currentList)},touchstart:function(e){var i=this,r=t.createSelectorQuery().in(this);r.select("#drag").boundingClientRect(),r.exec((function(t){i.topY=t[0].top,i.topX=t[0].left;var r=e.mp.touches[0].clientY-t[0].top,n=e.mp.touches[0].clientX-t[0].left;i.deviationY=r%i.height,i.deviationX=n%(.2*i.windowWidth),i.active=Number(e.currentTarget.dataset.index),i.index=Number(e.currentTarget.dataset.index)}))},touchmove:function(t){var e=this;if(!(this.active<0)){var i=t.mp.touches[0].clientY-this.topY,r=t.mp.touches[0].clientX-this.topX,n=i-15,u=r-.1*this.windowWidth;this.currentList[this.active].y=n,this.currentList[this.active].x=u,this.currentList[this.active].animation=!1,this.currentList.every((function(t,i){var r=Math.abs(u-t.x),o=Math.abs(n-t.y);if(0<r&&r<=10&&o>0&&o<=10&&e.active!=i){var s=e.currentList[i].SortNumber;return e.currentList.every((function(t,r){return e.currentList[e.active].SortNumber<e.currentList[i].SortNumber?e.currentList[r].SortNumber>e.currentList[e.active].SortNumber&&e.currentList[r].SortNumber<=e.currentList[i].SortNumber&&t.SortNumber--:e.currentList[r].SortNumber<e.currentList[e.active].SortNumber&&e.currentList[r].SortNumber>=e.currentList[i].SortNumber&&t.SortNumber++,!0}),e),e.currentList[e.active].SortNumber=s,e.moveUpdateCurrentList(s),!1}return!0}),this)}},touchend:function(t){this.currentList[this.active]&&(this.currentList[this.active].animation=!0),this.moveUpdateCurrentList(-1),this.active=-1},reveals:function(){this.reveal=!this.reveal},close:function(e){var i=this;t.showToast({title:"点击删除"}),console.log("我是删除的index 的SortNumber"),console.log(this.currentList[e].SortNumber),this.currentList.forEach((function(t,r){i.currentList[r].SortNumber>i.currentList[e].SortNumber&&t.SortNumber--})),this.moveUpdateCurrentList(-1),this.currentList[e].isShow=0}}};e.default=u}).call(this,i("543d")["default"])},"8f61":function(t,e,i){"use strict";var r;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return u})),i.d(e,"a",(function(){return r}));var n=function(){var t=this,e=t.$createElement;t._self._c},u=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/drag-sorts/index-create-component',
    {
        'components/drag-sorts/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("4c94"))
        })
    },
    [['components/drag-sorts/index-create-component']]
]);