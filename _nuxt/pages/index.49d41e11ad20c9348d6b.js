webpackJsonp([0],{"/TYz":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("afal"),n=i("rGQh"),r=!1;var a=function(t){r||i("w+9K")},o=i("VU/8")(s.a,n.a,!1,a,"data-v-2a183b29",null);o.options.__file="pages/index.vue",e.default=o.exports},"00hl":function(t,e,i){var s=i("JxKj");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("rjj0")("18906e2c",s,!1)},"3C5G":function(t,e,i){"use strict";var s=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"square",class:{alive:this.alive},on:{click:this.onClick}},[e("span",[this._v("\n    "+this._s(this.aliveNeighborCount)+"\n  ")])])};s._withStripped=!0;var n={render:s,staticRenderFns:[]};e.a=n},"4Zbe":function(t,e,i){var s=i("JHfW");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("rjj0")("87036696",s,!1)},"6EV7":function(t,e,i){"use strict";var s=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"play-button ui small button",class:this.buttonClassObject,on:{click:this.onClick}},[e("i",{staticClass:"icon",class:this.iconClassObject}),this._v(" "+this._s(this.buttonContent)+"\n")])};s._withStripped=!0;var n={render:s,staticRenderFns:[]};e.a=n},"6tOw":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".square[data-v-21555fb8]{height:100%;width:5%;border-right:1px solid #a7c8c9;border-bottom:1px solid #a7c8c9;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#78aaac;font-size:2vmin}.square.alive[data-v-21555fb8]{background-color:#a7c8c9}",""])},BZGa:function(t,e,i){"use strict";var s=i("MGMb"),n=i("6EV7"),r=!1;var a=function(t){r||i("4Zbe")},o=i("VU/8")(s.a,n.a,!1,a,"data-v-3d98ee29",null);o.options.__file="components/StartButton.vue",e.a=o.exports},"Dv5+":function(t,e,i){"use strict";var s=i("fQjq"),n=i("SZ70"),r=!1;var a=function(t){r||i("Kekw")},o=i("VU/8")(s.a,n.a,!1,a,"data-v-1ffa99ce",null);o.options.__file="components/SquareMatrix.vue",e.a=o.exports},EzCj:function(t,e,i){var s=i("6tOw");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("rjj0")("47eb633f",s,!1)},JHfW:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".play-button[data-v-3d98ee29]{margin-top:32px;margin-top:2rem}",""])},JxKj:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".square-row[data-v-72814632]{display:-webkit-box;display:-ms-flexbox;display:flex;height:5%;width:100%}",""])},Kekw:function(t,e,i){var s=i("meHQ");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("rjj0")("456c95b2",s,!1)},MGMb:function(t,e,i){"use strict";e.a={computed:{buttonClassObject:function(){return this.$store.getters.isActive?{}:{green:!0}},iconClassObject:function(){return this.$store.getters.isActive?{stop:!0}:{play:!0}},buttonContent:function(){return this.$store.getters.isActive?"ストップ":"スタート"}},methods:{onClick:function(){this.$store.getters.isActive?this.$store.dispatch("stopGame"):this.$store.dispatch("startGame")}}}},Nv5j:function(t,e,i){"use strict";var s=i("SLtC"),n=i("3C5G"),r=!1;var a=function(t){r||i("EzCj")},o=i("VU/8")(s.a,n.a,!1,a,"data-v-21555fb8",null);o.options.__file="components/Square.vue",e.a=o.exports},SLtC:function(t,e,i){"use strict";e.a={props:{alive:Boolean,m:Number,n:Number},methods:{onClick:function(){this.alive?this.$store.dispatch("kill",this.coordinate):this.$store.dispatch("spawn",this.coordinate)}},computed:{coordinate:function(){return{m:this.m,n:this.n}},aliveNeighborCount:function(){return this.$store.getters.getAliveNeighborCountOf(this.coordinate)}}}},SZ70:function(t,e,i){"use strict";var s=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"square-matrix"},this._l(this.matrix,function(t,i){return e("SquareRow",{key:i,attrs:{row:t,m:i}})}))};s._withStripped=!0;var n={render:s,staticRenderFns:[]};e.a=n},TCeo:function(t,e,i){"use strict";var s=i("Nv5j");e.a={props:{row:Array,m:Number},components:{Square:s.a}}},afal:function(t,e,i){"use strict";var s=i("Dv5+"),n=i("BZGa");e.a={components:{SquareMatrix:s.a,StartButton:n.a},computed:{buttonClassObject:function(){return this.$store.getters.isActive?{}:{green:!0}},iconClassObject:function(){return this.$store.getters.isActive?{stop:!0}:{play:!0}},buttonContent:function(){return this.$store.getters.isActive?"ストップ":"スタート"}},methods:{onClick:function(){this.$store.getters.isActive?this.$store.dispatch("stopGame"):this.$store.dispatch("startGame")}}}},fQjq:function(t,e,i){"use strict";var s=i("Dd8w"),n=i.n(s),r=i("NYxO"),a=i("xmgU");e.a={components:{SquareRow:a.a},computed:n()({},Object(r.mapGetters)(["matrix"]))}},hoYA:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".container[data-v-2a183b29]{height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.play-button[data-v-2a183b29]{margin-top:32px;margin-top:2rem}",""])},meHQ:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".square-matrix[data-v-1ffa99ce]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:calc(100vmin - 5rem);height:calc(100vmin - 5rem);border-top:1px solid #a7c8c9;border-left:1px solid #a7c8c9}",""])},rGQh:function(t,e,i){"use strict";var s=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"ui container"},[e("SquareMatrix"),e("StartButton")],1)])};s._withStripped=!0;var n={render:s,staticRenderFns:[]};e.a=n},vE7F:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"square-row"},t._l(t.row,function(e,s){return i("Square",{key:s,attrs:{alive:e,m:t.m,n:s}})}))};s._withStripped=!0;var n={render:s,staticRenderFns:[]};e.a=n},"w+9K":function(t,e,i){var s=i("hoYA");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("rjj0")("bbc850e8",s,!1)},xmgU:function(t,e,i){"use strict";var s=i("TCeo"),n=i("vE7F"),r=!1;var a=function(t){r||i("00hl")},o=i("VU/8")(s.a,n.a,!1,a,"data-v-72814632",null);o.options.__file="components/SquareRow.vue",e.a=o.exports}});