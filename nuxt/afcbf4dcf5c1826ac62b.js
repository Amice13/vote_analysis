(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{143:function(t,e,n){var r=n(6);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},144:function(t,e,n){},145:function(t,e,n){"use strict";var r=n(9).f,o=n(63),c=n(91),l=n(17),d=n(89),f=n(90),m=n(65),v=n(94),h=n(68),_=n(7),y=n(88).fastKey,x=n(143),w=_?"_s":"size",C=function(t,e){var n,r=y(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,m){var v=t(function(t,r){d(t,v,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[w]=0,null!=r&&f(r,n,t[m],t)});return c(v.prototype,{clear:function(){for(var t=x(this,e),data=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete data[n.i];t._f=t._l=void 0,t[w]=0},delete:function(t){var n=x(this,e),r=C(n,t);if(r){var o=r.n,c=r.p;delete n._i[r.i],r.r=!0,c&&(c.n=o),o&&(o.p=c),n._f==r&&(n._f=o),n._l==r&&(n._l=c),n[w]--}return!!r},forEach:function(t){x(this,e);for(var n,r=l(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!C(x(this,e),t)}}),_&&r(v.prototype,"size",{get:function(){return x(this,e)[w]}}),v},def:function(t,e,n){var r,o,c=C(t,e);return c?c.v=n:(t._l=c={i:o=y(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=c),r&&(r.n=c),t[w]++,"F"!==o&&(t._i[o]=c)),t},getEntry:C,setStrong:function(t,e,n){m(t,e,function(t,n){this._t=x(t,e),this._k=n,this._l=void 0},function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?v(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,v(1))},n?"entries":"values",!n,!0),h(e)}}},146:function(t,e,n){"use strict";var r=n(2),o=n(4),c=n(11),l=n(91),meta=n(88),d=n(90),f=n(89),m=n(6),v=n(8),h=n(95),_=n(29),y=n(92);t.exports=function(t,e,n,x,w,C){var k=r[t],O=k,S=w?"set":"add",R=O&&O.prototype,T={},L=function(t){var e=R[t];c(R,t,"delete"==t?function(a){return!(C&&!m(a))&&e.call(this,0===a?0:a)}:"has"==t?function(a){return!(C&&!m(a))&&e.call(this,0===a?0:a)}:"get"==t?function(a){return C&&!m(a)?void 0:e.call(this,0===a?0:a)}:"add"==t?function(a){return e.call(this,0===a?0:a),this}:function(a,b){return e.call(this,0===a?0:a,b),this})};if("function"==typeof O&&(C||R.forEach&&!v(function(){(new O).entries().next()}))){var P=new O,D=P[S](C?{}:-0,1)!=P,E=v(function(){P.has(1)}),I=h(function(t){new O(t)}),N=!C&&v(function(){for(var t=new O,e=5;e--;)t[S](e,e);return!t.has(-0)});I||((O=e(function(e,n){f(e,O,t);var r=y(new k,e,O);return null!=n&&d(n,w,r[S],r),r})).prototype=R,R.constructor=O),(E||N)&&(L("delete"),L("has"),w&&L("get")),(N||D)&&L(S),C&&R.clear&&delete R.clear}else O=x.getConstructor(e,t,w,S),l(O.prototype,n),meta.NEED=!0;return _(O,t),T[t]=O,o(o.G+o.W+o.F*(O!=k),T),C||x.setStrong(O,t,w),O}},147:function(t,e,n){var r=n(4),o=n(148)(!1);r(r.S,"Object",{values:function(t){return o(t)}})},148:function(t,e,n){var r=n(18),o=n(19),c=n(32).f;t.exports=function(t){return function(e){for(var n,l=o(e),d=r(l),f=d.length,i=0,m=[];f>i;)c.call(l,n=d[i++])&&m.push(t?[n,l[n]]:l[n]);return m}}},149:function(t,e,n){"use strict";var strong=n(145),r=n(143);t.exports=n(146)("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return strong.def(r(this,"Set"),t=0===t?0:t,t)}},strong)},150:function(t,e,n){"use strict";var strong=n(145),r=n(143);t.exports=n(146)("Map",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var e=strong.getEntry(r(this,"Map"),t);return e&&e.v},set:function(t,e){return strong.def(r(this,"Map"),0===t?0:t,e)}},strong,!0)},151:function(t,e,n){"use strict";var r=n(2),o=n(14),c=n(20),l=n(92),d=n(42),f=n(8),m=n(43).f,v=n(66).f,h=n(9).f,_=n(152).trim,y=r.Number,x=y,w=y.prototype,C="Number"==c(n(63)(w)),k="trim"in String.prototype,O=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,c=(e=k?e.trim():_(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,r)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof y&&(C?f(function(){w.valueOf.call(n)}):"Number"!=c(n))?l(new x(O(e)),n,y):O(e)};for(var S,R=n(7)?m(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),T=0;R.length>T;T++)o(x,S=R[T])&&!o(y,S)&&h(y,S,v(x,S));y.prototype=w,w.constructor=y,n(11)(r,"Number",y)}},152:function(t,e,n){var r=n(4),o=n(16),c=n(8),l=n(153),d="["+l+"]",f=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),v=function(t,e,n){var o={},d=c(function(){return!!l[t]()||"​"!="​"[t]()}),f=o[t]=d?e(h):l[t];n&&(o[n]=f),r(r.P+r.F*d,"String",o)},h=v.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(m,"")),t};t.exports=v},153:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},154:function(t,e,n){"use strict";var r=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r)return r;throw new Error("unable to locate global object")}();t.exports=e=r.fetch,e.default=r.fetch.bind(r),e.Headers=r.Headers,e.Request=r.Request,e.Response=r.Response},155:function(t,e,n){"use strict";var r=n(144);n.n(r).a},156:function(t,e,n){"use strict";n.r(e);n(147);function r(t,i){return function(t){if(Array.isArray(t))return t}(t)||function(t,i){var e=[],n=!0,r=!1,o=void 0;try{for(var c,l=t[Symbol.iterator]();!(n=(c=l.next()).done)&&(e.push(c.value),!i||e.length!==i);n=!0);}catch(t){r=!0,o=t}finally{try{n||null==l.return||l.return()}finally{if(r)throw o}}return e}(t,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n(149),n(64),n(150),n(151);function o(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n(93),n(69),n(44);var c=n(5),l=(n(47),n(48),n(67),n(30),n(31),n(21),n(45),n(46),n(10)),d=(n(96),n(49),n(154)),f={methods:{remove:function(t,filter){var e=this.filters[filter].indexOf(t);e>=0&&this.filters[filter].splice(e,1)},setTimeRangeFilter:function(t){this.filters.timeRange=[this.timeRange[0],this.timeRange[1]]},setChoiceRangeFilter:function(t){this.filters.choiceRange=[this.choiceRange[0],this.choiceRange[1]]},formatDate:function(t){return t=(t=new Date(t).toISOString().slice(5,16)).replace(/-/,".").replace(/T/," ")},setSort:function(t){"candidate"===t&&(this.sortType="asc"),"counts"===t&&(this.sortType="desc")},candidateFiltered:function(t){return new RegExp(this.filter,"gi").test(t)},candidateImage:function(t){return this.candidates[t].photo?"https://gromrada.mva.gov.ua/candidates/small/"+this.candidates[t].photo:""},candidateProp:function(t,e){return!!this.candidates[t][e]&&this.candidates[t][e]},mobileProp:function(t,e){return v[t][e]},success:function(t){return t<=15?"check":"close"},chartOptions:function(t){return Object(l.a)({},h[t])},getCandidatesTimeLineChart:function(){var t=this,e=this,data=this.filteredCandidatesCount.slice(0,30),n=this.filteredData.filter(function(t){return t.choiceLength>1});n=this.filteredData.map(function(t){return t.choice}),data=data.map(function(r){var data,o,c,l,d=(data=e.filteredData,o=e.typeOfTime,c=r.id,l=e.currentTimeScale,data=(data=data.filter(function(t){return t.choice.includes(c)})).map(function(t){return t[o]}),l.map(function(t){return[t,data.filter(function(e){return e===t}).length]}));return d="hours"===t.typeOfTime?d.map(function(t){return{x:new Date(t[0]+":00"),y:t[1]}}):d.map(function(t){return{x:new Date(t[0]),y:t[1]}}),{id:r.id,counts:r.counts,edges:t.edges(r.id,n),series:[{name:"series-1",data:d}]}}),this.timelines=data},edges:function(t,e){var n=this,r=(e=e.filter(function(e){return e.includes(t)})).reduce(function(t,e){var n=!0,r=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(n=(c=l.next()).done);n=!0){var p=c.value,d=void 0===t[p]?1:t[p]+1;t[p]=d}}catch(t){r=!0,o=t}finally{try{n||null==l.return||l.return()}finally{if(r)throw o}}return t},{});return r=Object.keys(r).map(function(t){return{name:n.candidates[t].idName,counts:r[t]}}),r=w(r,"counts"),r=r.slice(1,10),r}},computed:{current:function(){return this.$store.getters.current},filteredData:function(){var t=this,data=this.data;return data=(data=(data=(data=data.filter(function(e){return e.date>=t.filters.timeRange[0]})).filter(function(e){return e.date<=t.filters.timeRange[1]})).filter(function(e){return e.choiceLength>=t.filters.choiceRange[0]})).filter(function(e){return e.choiceLength<=t.filters.choiceRange[1]}),this.filters.mobile.length&&(data=data.filter(function(e){return t.filters.mobile.includes(e.mobile)})),data},candidatesCount:function(){var t=this;if("main"!==this.current)return!1;var e=_(this.data,Object.keys(this.candidates));return e=(e=w(e=e.map(function(e){return{id:e[0],candidate:t.candidates[e[0]].name,counts:e[1]}}),"counts")).map(function(t,e){return Object.assign({rating:e+1},t)}),"counts"===this.sort&&"desc"===this.sortType||(e=w(e,this.sort,this.sortType)),e},candidatesChart:function(){var t=_(this.filteredData,Object.keys(this.candidates));return x(t=y(t))},total:function(){return this.filteredData.length},timeLineCounts:function(){return data=this.filteredData,t=this.typeOfTime,data=data.map(function(e){return e[t]}),o(new Set(data)).map(function(t){return[t,data.filter(function(e){return e===t}).length]});var data,t},timeLine:function(){return"hours"===this.typeOfTime?this.timeLineCounts.map(function(t){return{x:new Date(t[0]+":00"),y:t[1]}}):this.timeLineCounts.map(function(t){return{x:new Date(t[0]),y:t[1]}})},currentTimeScale:function(){return this.timeLineCounts.map(function(t){return t[0]})},timeStep:function(){return"hours"===this.typeOfTime?36e5:"minutes"===this.typeOfTime?6e4:void 0},timeLineChart:function(){return{series:[{name:"series-1",data:this.timeLine}]}},timeLineOptions:function(){return Object.assign(h.line,{showLine:!0})},filteredCandidatesCount:function(){var t=this,e=_(this.filteredData,Object.keys(this.candidates));return e=w(e=e.map(function(e){return{id:e[0],candidate:t.candidates[e[0]].name,counts:e[1]}}),"counts")},top15Candidates:function(){return this.filteredCandidatesCount.slice(0,15)},top15CandidatesChart:function(){return x(this.top15Candidates.reduce(function(t,e){return t[e.candidate.replace(/^(.*?) (.).*? (.).*/,"$1 $2. $3.")]=e.counts,t},{}))},mobileCounts:function(){var data,t;return data=this.filteredData,t=Object.keys(v),data=data.map(function(t){return t.mobile}),t.map(function(t){return[t,data.filter(function(e){return e===t}).length]})},mobileFilter:function(){var t=this.mobileCounts;return t=t.map(function(t){return{mobile:t[0],counts:t[1]}})},mobileCountsChart:function(){return x(y(this.mobileCounts))},choiceCounts:function(){var data,t,e,n=(data=this.filteredData,t=this.maxChoice,e=Array.apply(null,{length:t-1}).map(Number.call,Number).map(function(t){return t+1}),data=data.map(function(t){return t.choiceLength}),e.map(function(t){return[t,data.filter(function(e){return e===t}).length]}));return n=y(n=n.filter(function(t){return 0!==t[1]}))},choiceCountsChart:function(){return x(this.choiceCounts)}},asyncData:function(){var t=Object(c.a)(regeneratorRuntime.mark(function t(e){var path,n,r,c,l,data,f,v,h,_;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return path="https://amice13.github.io/vote-analysis/",t.next=3,d(path+"/candidates.json");case 3:return n=t.sent,t.next=6,n.json();case 6:return n=t.sent,r=y(r=(r=(r=n.candidates).map(function(t){return t.name=t.name.replace(/\s+/g," ").toLowerCase().replace(C,function(t){return t.toUpperCase()}),t.idName=t.name.replace(/^(.*?) (.).*? (.).*/,"$1 $2. $3."),t})).map(function(t){return[t.id,t]})),t.next=13,d(path+"/public_report.txt");case 13:return c=t.sent,t.next=16,c.text();case 16:return c=t.sent,(l=c.split(/\n/g)).splice(-1,1),data=l.map(function(t){var e=new Date(t.match(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\.\d{3}/g)[0]),n=t.match(/(?<=SEL=).*?(?= )/g)[0].split(/,/g);return{date:e,choice:n,choiceLength:n.length,mobile:m[t.match(/(?<=MOB=)\d{5}/g)[0]],minutes:t.match(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}/g)[0],hours:t.match(/^\d{4}-\d{2}-\d{2} \d{2}/g)[0]}}),f=data.map(function(t){return t.date}),v=Math.max.apply(Math,o(f)),h=Math.min.apply(Math,o(f)),_=Math.max.apply(Math,o(data.map(function(t){return t.choiceLength}))),t.abrupt("return",{data:data,candidates:r,maxChoice:_,minDate:h,maxDate:v,choiceRange:[1,_],timeRange:[h,v],filters:{timeRange:[h,v],choiceRange:[1,_],mobile:[],candidates:[]}});case 25:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),data:function(){return{typeOfTime:"hours",typesOfTime:[{id:"hours",name:"Години"},{id:"minutes",name:"Хвилини"}],sortOptions:[{id:"counts",name:"Кількість голосів"},{id:"candidate",name:"ПІБ"}],maxChoice:1,minDate:0,maxDate:10,timeRange:[0,10],choiceRange:[1,1],sort:"counts",filter:"",filters:{timeRange:[0,10],choiceRange:[1,1],candidates:[]},sortType:"desc",timelines:[]}}},m={38050:"Vodafone",38066:"Vodafone",38067:"Kyivstar",38068:"Kyivstar",38073:"Lifecell",380891:"Datagroup",380892:"Ukrtelecom",380893:"Global",380894:"O3",380895:"Linkom-3000",380896:"Vodafone",380897:"Kyivstar",380899:"Velton",38091:"Trimob",38092:"Peoplenet",38093:"Lifecell",38094:"Intertelecom",38095:"Vodafone",38096:"Kyivstar",38097:"Kyivstar",38098:"Kyivstar",38099:"Vodafone"},v={Vodafone:{name:"Vodafone Україна",photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Vodafone_Ukraine.png/1032px-Vodafone_Ukraine.png"},Lifecell:{name:"lifecell",photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Lifecell_2016_logo_-_Wordmark.svg/1920px-Lifecell_2016_logo_-_Wordmark.svg.png"},Kyivstar:{name:"Київстар",photo:"https://upload.wikimedia.org/wikipedia/commons/e/e0/Kyivstar_logo15.png"},Datagroup:{name:"Датагруп",photo:"https://www.datagroup.ua/storage/settings/logo-gr.svg"},Ukrtelecom:{name:"Укртелеком",photo:"https://upload.wikimedia.org/wikipedia/commons/d/d2/Ukrtelecom.png"},Global:{name:"Global",photo:"http://global.ua/assets/logo_60.png"},O3:{name:"О3",photo:"https://o3.ua/img/logo.png"},Velton:{name:"Велтон.Телеком",photo:"https://upload.wikimedia.org/wikipedia/uk/0/0f/Velton_telecom.gif"},Trimob:{name:"ТриМоб",photo:"https://upload.wikimedia.org/wikipedia/uk/5/52/3mob_logo.png"},Peoplenet:{name:"PEOPLEnet",photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Peoplenet.png/800px-Peoplenet.png"}},h={line:{showArea:!0,showLine:!1,showPoint:!1,axisX:{labelInterpolationFnc:function(t,e){return e%2==0?t:null}}},horizontalBar:{seriesBarDistance:7,reverseData:!0,horizontalBars:!0,axisY:{offset:120}},bar:{seriesBarDistance:10}};function _(data,t){return data=data.map(function(t){return t.choice}),t.map(function(t){return[t,data.filter(function(e){return e.includes(t)}).length]})}function y(t){return function(data){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=!0,n=!1,o=void 0;try{for(var c,l=data[Symbol.iterator]();!(e=(c=l.next()).done);e=!0){var d=r(c.value,2),f=d[0],m=d[1];t[f]=m}}catch(t){n=!0,o=t}finally{try{e||null==l.return||l.return()}finally{if(n)throw o}}return t}(new Map(t))}function x(t){return{labels:Object.keys(t),series:[Object.values(t)]}}function w(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"desc";return"number"==typeof t[0][e]?"asc"===n?t.sort(function(a,b){return a[e]-b[e]}):t.sort(function(a,b){return b[e]-a[e]}):"asc"===n?t.sort(function(a,b){return a[e].localeCompare(b[e])}):t.sort(function(a,b){return b[e].localeCompare(a[e])})}var C=/([^a-zа-яєіїґ'’]|^)([a-zа-яєіїґ])/gi;var k=f,O=(n(155),n(22)),component=Object(O.a)(k,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:"",wrap:"","justify-center":"","align-center":""}},["main"===t.current?n("v-flex",{attrs:{xs12:""}},[n("v-card",[n("v-card-title",[n("div",[n("div",{staticClass:"display-2 mb-1",staticStyle:{"font-weight":"bold"}},[t._v("Загальний результат")]),n("div",[t._v("Загальна кількість виборців: "+t._s(t.data.length)+".")])])]),t._v(" "),n("v-card-text",[n("v-layout",{attrs:{row:"",wrap:"","pb-3":""}},[n("v-flex",{attrs:{xs12:"",sm6:"",md7:"",id:"search-place"}},[n("v-text-field",{attrs:{name:"search",solo:"","hide-details":"","prepend-icon":"search",label:"Фільтр",id:"search"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.filterList(e)}},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",sm5:"",md4:"","offset-sm1":"","text-xs-right":""}},[n("v-select",{staticClass:"sort",class:[t.sortType],attrs:{items:t.sortOptions,"item-text":"name","item-value":"id","prepend-icon":"sort",label:"Сортування",solo:""},on:{input:t.setSort},model:{value:t.sort,callback:function(e){t.sort=e},expression:"sort"}})],1)],1),t._v(" "),n("v-layout",{attrs:{row:"",wrap:"","pb-3":""}},t._l(t.candidatesCount,function(e,r){return n("v-flex",{directives:[{name:"show",rawName:"v-show",value:t.candidateFiltered(e.candidate),expression:"candidateFiltered(item.candidate)"}],key:"rating"+r,attrs:{xs12:""}},[n("v-card",{staticClass:"mb-3"},[n("v-layout",{attrs:{row:"",wrap:"","fill-height":"","align-center":""}},[n("v-flex",{staticClass:"text-xs-center",staticStyle:{"min-width":"120px"},attrs:{xs1:"",sm1:"",md1:""}},[n("div",{staticStyle:{padding:"5px"}},[n("h1",{staticStyle:{"font-weight":"bold","font-size":"2.5em"}},[t._v(t._s(e.rating))]),t._v(" "),n("div",{staticStyle:{"font-size":"12px"}},[n("v-icon",{attrs:{color:"black",size:"16"}},[t._v("person")]),t._v(" "+t._s(e.counts)+" голосів")],1)])]),t._v(" "),n("v-flex",{staticClass:"hidden-xs-only",attrs:{xs1:"",sm2:"",md2:"",lg1:"","text-xs-center":""}},[n("v-img",{staticClass:"user-image",staticStyle:{background:"#666"},attrs:{src:t.candidateImage(e.id),contains:"","aspect-ratio":"0.6"}},[n("div",{class:t.success(e.rating)},[n("v-icon",{attrs:{color:"white"}},[t._v(t._s(t.success(e.rating)))])],1)])],1),t._v(" "),n("v-flex",{attrs:{xs6:"",sm7:"",md8:""}},[n("div",{staticClass:"pl-4"},[n("h3",{staticClass:"headline mt-3 mb-1",staticStyle:{"font-weight":"bold"}},[t._v(t._s(e.candidate))]),t._v(" "),t.candidateProp(e.id,"ngo_name")?n("span",{staticStyle:{background:"#EEE",padding:"2px 4px"}},[t._v(t._s(t.candidateProp(e.id,"ngo_name")))]):t._e(),t._v(" "),n("div",{staticClass:"links mt-4"},[t.candidateProp(e.id,"social")?n("a",{attrs:{href:t.candidateProp(e.id,"social"),target:"_blank"}},[n("v-icon",{attrs:{color:"blue",size:"16"}},[t._v("share")]),t._v(" Профіль у Facebook")],1):t._e(),t._v(" "),t.candidateProp(e.id,"social")?n("span",{staticClass:"divider hidden-sm-and-down"},[t._v("|")]):t._e(),t._v(" "),t.candidateProp(e.id,"social")?n("br",{staticClass:"hidden-md-and-up"}):t._e(),t._v(" "),t.candidateProp(e.id,"ngo_web")?n("a",{attrs:{href:t.candidateProp(e.id,"ngo_web"),target:"_blank"}},[n("v-icon",{attrs:{color:"blue",size:"16"}},[t._v("public")]),t._v(" Сайт організації")],1):t._e(),t._v(" "),t.candidateProp(e.id,"ngo_web")&&t.candidateProp(e.id,"ngo_social")?n("span",{staticClass:"divider hidden-sm-and-down"},[t._v("|")]):t._e(),t._v(" "),t.candidateProp(e.id,"ngo_web")&&t.candidateProp(e.id,"ngo_social")?n("br",{staticClass:"hidden-md-and-up"}):t._e(),t._v(" "),t.candidateProp(e.id,"ngo_social")?n("a",{attrs:{href:t.candidateProp(e.id,"ngo_social"),target:"_blank"}},[n("v-icon",{attrs:{color:"blue",size:"16"}},[t._v("domain")]),t._v(" Організація у Facebook")],1):t._e()])])])],1)],1)],1)}),1)],1)],1)],1):t._e(),t._v(" "),"time"===t.current?n("v-flex",{attrs:{xs12:""}},[n("v-card",[n("v-card-title",[n("div",{staticClass:"mr-5"},[n("div",{staticClass:"display-2 mb-1",staticStyle:{"font-weight":"bold"}},[t._v("Аналіз процедури голосування")]),n("div",[t._v("Загальна кількість виборців: "+t._s(t.data.length)+". Відображено - "+t._s(t.filteredData.length)+".")])]),t._v(" "),n("v-select",{staticClass:"sort",attrs:{items:t.typesOfTime,"item-text":"name","item-value":"id","prepend-icon":"av_timer",label:"Одиниця аналізу",solo:""},model:{value:t.typeOfTime,callback:function(e){t.typeOfTime=e},expression:"typeOfTime"}})],1),t._v(" "),n("v-card-text",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-card",{staticClass:"elevation-4 mb-4"},[n("v-card-title",{attrs:{"primary-title":""}},[n("v-avatar",{attrs:{size:"36px"}},[n("v-icon",[t._v("access_time")])],1),t._v(" "),n("h2",[t._v("Кількість голосів за часом")])],1),t._v(" "),n("v-card-text",[n("chartist",{attrs:{ratio:"ct-double-octave",type:"Line",data:t.timeLineChart,options:t.timeLineOptions}}),t._v(" "),n("v-layout",{attrs:{row:"","align-center":""}},[n("v-flex",{staticStyle:{width:"60px"},attrs:{shrink:"","text-xs-center":""}},[n("span",[t._v(t._s(t.formatDate(t.timeRange[0])))])]),t._v(" "),n("v-flex",{staticClass:"px-3"},[n("v-range-slider",{attrs:{"validate-on-blur":"",max:t.maxDate,min:t.minDate,step:t.timeStep},on:{mouseup:t.setTimeRangeFilter},model:{value:t.timeRange,callback:function(e){t.timeRange=e},expression:"timeRange"}})],1),t._v(" "),n("v-flex",{staticStyle:{width:"60px"},attrs:{shrink:""}},[n("span",[t._v(t._s(t.formatDate(t.timeRange[1])))])])],1)],1)],1)],1),t._v(" "),n("v-layout",{staticClass:"elevation-4 mb-4",attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",md4:""}},[n("v-card",{attrs:{flat:""}},[n("v-card-title",{attrs:{"primary-title":""}},[n("v-avatar",{attrs:{size:"36px"}},[n("v-icon",[t._v("person")])],1),t._v(" "),n("h2",[t._v("Кандидати")])],1),t._v(" "),n("v-card-text",[n("chartist",{attrs:{ratio:"ct-major-second",type:"Bar",data:t.top15CandidatesChart,options:t.chartOptions("horizontalBar")}}),t._v(" "),n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-autocomplete",{attrs:{items:t.filteredCandidatesCount,box:"",chips:"",color:"blue-grey lighten-2",label:"Фільтр кандидатів","item-text":"candidate","item-value":"id",multiple:""},scopedSlots:t._u([{key:"selection",fn:function(data){return[n("v-chip",{staticClass:"chip--select-multi",attrs:{selected:data.selected,close:""},on:{input:function(e){return t.remove(data.item.id,"candidates")}}},[n("v-avatar",[n("img",{attrs:{src:t.candidateImage(data.item.id)}})]),t._v(" "+t._s(t.candidateProp(data.item.id,"idName"))+"\n                        ")],1)]}},{key:"item",fn:function(data){return["object"!=typeof data.item?[n("v-list-tile-content",{domProps:{textContent:t._s(data.item)}})]:[n("v-list-tile-avatar",[n("img",{attrs:{src:t.candidateImage(data.item.id)}})]),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(data.item.candidate)+" ("+t._s(data.item.counts)+" голосів)")]),t._v(" "),n("v-list-tile-sub-title",{domProps:{innerHTML:t._s(t.candidateProp(data.item.id,"ngo_name"))}})],1)]]}}],null,!1,1363501149),model:{value:t.filters.candidates,callback:function(e){t.$set(t.filters,"candidates",e)},expression:"filters.candidates"}})],1)],1)],1)],1)],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md4:""}},[n("v-card",{attrs:{flat:""}},[n("v-card-title",{attrs:{"primary-title":""}},[n("v-avatar",{attrs:{size:"36px"}},[n("v-icon",[t._v("smartphone")])],1),t._v(" "),n("h2",[t._v("Мобільні оператори")])],1),t._v(" "),n("v-card-text",[n("chartist",{attrs:{ratio:"ct-major-second",type:"Bar",data:t.mobileCountsChart,options:Object.assign(t.chartOptions("horizontalBar"),{axisY:{offset:60}})}}),t._v(" "),n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-autocomplete",{attrs:{items:t.mobileFilter,box:"",chips:"",color:"blue-grey lighten-2",label:"Фільтр операторів","item-text":"mobile","item-value":"mobile",multiple:""},scopedSlots:t._u([{key:"selection",fn:function(data){return[n("v-chip",{staticClass:"chip--select-multi",attrs:{selected:data.selected,close:""},on:{input:function(e){return t.remove(data.item.mobile,"mobile")}}},[n("v-avatar",[n("img",{attrs:{src:t.mobileProp(data.item.mobile,"photo")}})]),t._v(" "+t._s(data.item.mobile)+"\n                        ")],1)]}},{key:"item",fn:function(data){return["object"!=typeof data.item?[n("v-list-tile-content",{domProps:{textContent:t._s(data.item)}})]:[n("v-list-tile-avatar",[n("img",{attrs:{src:t.mobileProp(data.item.mobile,"photo")}})]),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(data.item.mobile)+" ("+t._s(data.item.counts)+" голосів)")])],1)]]}}],null,!1,3213136169),model:{value:t.filters.mobile,callback:function(e){t.$set(t.filters,"mobile",e)},expression:"filters.mobile"}})],1)],1)],1)],1)],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md4:""}},[n("v-card",{attrs:{flat:""}},[n("v-card-title",{attrs:{"primary-title":""}},[n("v-avatar",{attrs:{size:"36px"}},[n("v-icon",[t._v("insert_chart")])],1),t._v(" "),n("h2",[t._v("Кількість голосів")])],1),t._v(" "),n("v-card-text",[n("chartist",{attrs:{ratio:"ct-major-second",type:"Bar",data:t.choiceCountsChart}}),t._v(" "),n("v-layout",{attrs:{row:"","align-center":""}},[n("v-flex",{staticStyle:{width:"60px"},attrs:{shrink:"","text-xs-center":""}},[n("span",[t._v(t._s(t.choiceRange[0]))])]),t._v(" "),n("v-flex",{staticClass:"px-3"},[n("v-range-slider",{attrs:{"validate-on-blur":"",max:t.maxChoice,min:1,step:1},on:{mouseup:t.setChoiceRangeFilter},model:{value:t.choiceRange,callback:function(e){t.choiceRange=e},expression:"choiceRange"}})],1),t._v(" "),n("v-flex",{staticStyle:{width:"60px"},attrs:{shrink:""}},[n("span",[t._v(t._s(t.choiceRange[1]))])])],1)],1)],1)],1)],1),t._v(" "),n("v-flex",{attrs:{xs12:""}},[n("v-card",{staticClass:"elevation-4 mb-4"},[n("v-card-title",{attrs:{"primary-title":""}},[n("v-avatar",{attrs:{size:"36px"}},[n("v-icon",[t._v("timeline")])],1),t._v(" "),n("h2",[t._v("Таймлайн кандидатів")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:t.getCandidatesTimeLineChart}},[t._v("Розрахувати")])],1),t._v(" "),t.timelines.length?n("v-card-text",[n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.timelines,function(e,r){return n("v-flex",{key:"candidateTimeline"+r,attrs:{xs12:"",sm6:"",md4:""}},[n("v-card",{staticClass:"mb-1 ml-1 mr-1 mt-1"},[n("v-card-title",{attrs:{"primary-title":""}},[n("h4",{staticClass:"subheading"},[n("v-avatar",{staticClass:"mr-2",attrs:{size:"36",color:"primary"}},[n("img",{attrs:{src:t.candidateImage(e.id),alt:"alt"}})]),t._v(" "),n("span",{staticClass:"mini-header"},[t._v(t._s(t.candidateProp(e.id,"idName"))+"\n                        "),n("span",[t._v(t._s(e.counts)+" голосів")])])],1)]),t._v(" "),n("v-card-text",{staticStyle:{padding:"0px"}},[n("chartist",{attrs:{ratio:"ct-double-octave",type:"Line",data:e,options:t.timeLineOptions}}),t._v(" "),n("v-flex",{staticClass:"ml-4 pb-4",attrs:{xs12:""}},[n("p",[t._v("Обирають разом з:")]),t._v(" "),n("ul",t._l(e.edges,function(e,i){return n("li",{key:"edge"+i},[t._v(" "+t._s(e.name)+" ("+t._s(e.counts)+")")])}),0)])],1)],1)],1)}),1)],1):t._e()],1)],1)],1)],1)],1)],1):t._e()],1)},[],!1,null,null,null);e.default=component.exports}}]);