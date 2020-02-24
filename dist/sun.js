!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Sun",[],e):"object"==typeof exports?exports.Sun=e():t.Sun=e()}(window,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=5)}([function(t,e,r){t.exports=r(6)},function(t,e){function r(t,e,r,n,i,a,s){try{var u=t[a](s),o=u.value}catch(t){return void r(t)}u.done?e(o):Promise.resolve(o).then(n,i)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(i,a){var s=t.apply(e,n);function u(t){r(s,i,a,u,o,"next",t)}function o(t){r(s,i,a,u,o,"throw",t)}u(void 0)}))}}},function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}},function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return v}));var n=r(2),i=r.n(n),a=r(0),s=r.n(a),u=r(1),o=r.n(u),c=r(3),h=r.n(c),l=r(4),d=r.n(l);function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){i()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var v=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];h()(this,t),this.mainchain=e,this.sidechain=r,this.isAddress=this.mainchain.isAddress,this.utils=this.mainchain.utils,this.setMainGatewayAddress(n),this.setSideGatewayAddress(i),this.setChainId(a),this.injectPromise=this.utils.promiseInjector(this),this.validator=this.mainchain.trx.validator;var s=this;this.sidechain.trx.sign=function(){return s.sign.apply(s,arguments)},this.sidechain.trx.multiSign=function(){return s.multiSign.apply(s,arguments)}}var e,r,n,i,a,u,c,l,p,v,y,g,m,b,w,x,k,P,T,j,L;return d()(t,[{key:"setMainGatewayAddress",value:function(t){if(!this.isAddress(t))throw new Error("Invalid main gateway address provided");this.mainGatewayAddress=t}},{key:"setSideGatewayAddress",value:function(t){if(!this.isAddress(t))throw new Error("Invalid side gateway address provided");this.sideGatewayAddress=t}},{key:"setChainId",value:function(t){if(!this.utils.isString(t)||!t)throw new Error("Invalid side chainId provided");this.chainId=t}},{key:"signTransaction",value:function(t,e){"string"==typeof t&&(t=this.utils.code.hexStr2byteArray(t));var r=this.utils.code.hexStr2byteArray(this.chainId),n=this.utils.code.hexStr2byteArray(e.txID).concat(r),i=this.sidechain.utils.ethersUtils.sha256(n),a=this.utils.crypto.ECKeySign(this.utils.code.hexStr2byteArray(i.replace(/^0x/,"")),t);return Array.isArray(e.signature)?e.signature.includes(a)||e.signature.push(a):e.signature=[a],e}},{key:"multiSign",value:(L=o()(s.a.mark((function t(){var e,r,n,i,a,u,o,c=arguments;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=c.length>0&&void 0!==c[0]&&c[0],r=c.length>1&&void 0!==c[1]?c[1]:this.sidechain.defaultPrivateKey,n=c.length>2&&void 0!==c[2]&&c[2],i=c.length>3&&void 0!==c[3]&&c[3],this.utils.isFunction(n)&&(i=n,n=0),this.utils.isFunction(r)&&(i=r,r=this.mainchain.defaultPrivateKey,n=0),i){t.next=8;break}return t.abrupt("return",this.injectPromise(this.multiSign,e,r,n));case 8:if(this.utils.isObject(e)&&e.raw_data&&e.raw_data.contract){t.next=10;break}return t.abrupt("return",i("Invalid transaction provided"));case 10:return e.raw_data.contract[0].Permission_id=n,a=this.sidechain.address.toHex(this.sidechain.address.fromPrivateKey(r)).toLowerCase(),t.next=14,this.sidechain.trx.getSignWeight(e,n);case 14:if("PERMISSION_ERROR"!==(u=t.sent).result.code){t.next=17;break}return t.abrupt("return",i(u.result.message));case 17:if(o=!1,u.permission.keys.map((function(t){t.address===a&&(o=!0)})),o){t.next=21;break}return t.abrupt("return",i(r+" has no permission to sign"));case 21:if(!u.approved_list||-1==u.approved_list.indexOf(a)){t.next=23;break}return t.abrupt("return",i(r+" already sign transaction"));case 23:if(!u.transaction||!u.transaction.transaction){t.next=28;break}(e=u.transaction.transaction).raw_data.contract[0].Permission_id=n,t.next=29;break;case 28:return t.abrupt("return",i("Invalid transaction provided"));case 29:return t.prev=29,t.abrupt("return",i(null,this.signTransaction(r,e)));case 33:t.prev=33,t.t0=t.catch(29),i(t.t0);case 36:case"end":return t.stop()}}),t,this,[[29,33]])}))),function(){return L.apply(this,arguments)})},{key:"sign",value:(j=o()(s.a.mark((function t(){var e,r,n,i,a,u,o=arguments;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=o.length>0&&void 0!==o[0]&&o[0],r=o.length>1&&void 0!==o[1]?o[1]:this.sidechain.defaultPrivateKey,n=!(o.length>2&&void 0!==o[2])||o[2],i=o.length>3&&void 0!==o[3]&&o[3],a=o.length>4&&void 0!==o[4]&&o[4],this.utils.isFunction(i)&&(a=i,i=!1),this.utils.isFunction(n)&&(a=n,n=!0,i=!1),this.utils.isFunction(r)&&(a=r,r=this.sidechain.defaultPrivateKey,n=!0,i=!1),a){t.next=10;break}return t.abrupt("return",this.injectPromise(this.sign,e,r,n,i));case 10:if(!this.utils.isString(e)){t.next=21;break}if(this.utils.isHex(e)){t.next=13;break}return t.abrupt("return",a("Expected hex message input"));case 13:return t.prev=13,u=this.sidechain.trx.signString(e,r,n),t.abrupt("return",a(null,u));case 18:t.prev=18,t.t0=t.catch(13),a(t.t0);case 21:if(this.utils.isObject(e)){t.next=23;break}return t.abrupt("return",a("Invalid transaction provided"));case 23:if(i||!e.signature){t.next=25;break}return t.abrupt("return",a("Transaction is already signed"));case 25:if(t.prev=25,i){t.next=30;break}if(this.sidechain.address.toHex(this.sidechain.address.fromPrivateKey(r)).toLowerCase()===e.raw_data.contract[0].parameter.value.owner_address.toLowerCase()){t.next=30;break}return t.abrupt("return",a("Private key does not match address in transaction"));case 30:return t.abrupt("return",a(null,this.signTransaction(r,e)));case 33:t.prev=33,t.t1=t.catch(25),a(t.t1);case 36:case"end":return t.stop()}}),t,this,[[13,18],[25,33]])}))),function(){return j.apply(this,arguments)})},{key:"depositTrx",value:(T=o()(s.a.mark((function t(e,r,n){var i,a,u,o,c,h=arguments;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=h.length>3&&void 0!==h[3]?h[3]:{},a=h.length>4&&void 0!==h[4]?h[4]:this.mainchain.defaultPrivateKey,u=h.length>5&&void 0!==h[5]&&h[5],this.utils.isFunction(a)&&(u=a,a=this.mainchain.defaultPrivateKey),this.utils.isFunction(i)&&(u=i,i={}),u){t.next=7;break}return t.abrupt("return",this.injectPromise(this.depositTrx,e,r,n,i,a));case 7:if(!this.validator.notValid([{name:"callValue",type:"integer",value:e,gte:0},{name:"depositFee",type:"integer",value:r,gte:0},{name:"feeLimit",type:"integer",value:n,gt:0,lte:1e9}],u)){t.next=9;break}return t.abrupt("return");case 9:return i=f({callValue:Number(e)+Number(r),feeLimit:n},i),t.prev=10,t.next=13,this.mainchain.contract().at(this.mainGatewayAddress);case 13:return o=t.sent,t.next=16,o.depositTRX().send(i,a);case 16:return c=t.sent,t.abrupt("return",u(null,c));case 20:return t.prev=20,t.t0=t.catch(10),t.abrupt("return",u(t.t0));case 23:case"end":return t.stop()}}),t,this,[[10,20]])}))),function(t,e,r){return T.apply(this,arguments)})},{key:"depositTrc10",value:(P=o()(s.a.mark((function t(e,r,n,i){var a,u,o,c,h,l=arguments;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=l.length>4&&void 0!==l[4]?l[4]:{},u=l.length>5&&void 0!==l[5]?l[5]:this.mainchain.defaultPrivateKey,o=l.length>6&&void 0!==l[6]&&l[6],this.utils.isFunction(u)&&(o=u,u=this.mainchain.defaultPrivateKey),this.utils.isFunction(a)&&(o=a,a={}),o){t.next=7;break}return t.abrupt("return",this.injectPromise(this.depositTrc10,e,r,n,i,a,u));case 7:if(!this.validator.notValid([{name:"tokenValue",type:"integer",value:r,gte:0},{name:"depositFee",type:"integer",value:n,gte:0},{name:"feeLimit",type:"integer",value:i,gt:0,lte:1e9},{name:"tokenId",type:"integer",value:e,gte:0}],o)){t.next=9;break}return t.abrupt("return");case 9:return a=f({tokenId:e,tokenValue:r,feeLimit:i},a,{callValue:n}),t.prev=10,t.next=13,this.mainchain.contract().at(this.mainGatewayAddress);case 13:return c=t.sent,t.next=16,c.depositTRC10(e,r).send(a,u);case 16:h=t.sent,o(null,h),t.next=23;break;case 20:return t.prev=20,t.t0=t.catch(10),t.abrupt("return",o(t.t0));case 23:case"end":return t.stop()}}),t,this,[[10,20]])}))),function(t,e,r,n){return P.apply(this,arguments)})},{key:"depositTrc",value:(k=o()(s.a.mark((function t(e,r,n,i,a){var u,o,c,h,l,d,p=arguments;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(u=p.length>5&&void 0!==p[5]?p[5]:{},o=p.length>6&&void 0!==p[6]?p[6]:this.mainchain.defaultPrivateKey,c=p.length>7&&void 0!==p[7]&&p[7],this.utils.isFunction(o)&&(c=o,o=this.mainchain.defaultPrivateKey),this.utils.isFunction(u)&&(c=u,u={}),c){t.next=7;break}return t.abrupt("return",this.injectPromise(this.depositTrc,e,r,n,i,a,u,o));case 7:if(!this.validator.notValid([{name:"functionSelector",type:"not-empty-string",value:e},{name:"num",type:"integer",value:r,gte:0},{name:"fee",type:"integer",value:n,gte:0},{name:"feeLimit",type:"integer",value:i,gt:0,lte:1e9},{name:"contractAddress",type:"address",value:a}],c)){t.next=9;break}return t.abrupt("return");case 9:if(u=f({feeLimit:i},u,{callValue:n,tokenId:"",tokenValue:0}),t.prev=10,h=null,"approve"!==e){t.next=21;break}return t.next=15,this.mainchain.contract().at(a);case 15:return l=t.sent,t.next=18,l.approve(this.mainGatewayAddress,r).send(u,o);case 18:h=t.sent,t.next=44;break;case 21:return t.next=23,this.mainchain.contract().at(this.mainGatewayAddress);case 23:d=t.sent,t.t0=e,t.next="depositTRC20"===t.t0?27:"depositTRC721"===t.t0?31:"retryDeposit"===t.t0?35:"retryMapping"===t.t0?39:43;break;case 27:return t.next=29,d.depositTRC20(a,r).send(u,o);case 29:return h=t.sent,t.abrupt("break",44);case 31:return t.next=33,d.depositTRC721(a,r).send(u,o);case 33:return h=t.sent,t.abrupt("break",44);case 35:return t.next=37,d.retryDeposit(r).send(u,o);case 37:return h=t.sent,t.abrupt("break",44);case 39:return t.next=41,d.retryMapping(r).send(u,o);case 41:return h=t.sent,t.abrupt("break",44);case 43:return t.abrupt("break",44);case 44:c(null,h),t.next=50;break;case 47:return t.prev=47,t.t1=t.catch(10),t.abrupt("return",c(t.t1));case 50:case"end":return t.stop()}}),t,this,[[10,47]])}))),function(t,e,r,n,i){return k.apply(this,arguments)})},{key:"approveTrc20",value:(x=o()(s.a.mark((function t(e,r,n){var i,a,u,o,c=arguments;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=c.length>3&&void 0!==c[3]?c[3]:{},a=c.length>4&&void 0!==c[4]?c[4]:this.mainchain.defaultPrivateKey,u=c.length>5&&void 0!==c[5]&&c[5],o="approve",t.abrupt("return",this.depositTrc(o,e,0,r,n,i,a,u));case 5:case"end":return t.stop()}}),t,this)}))),function(t,e,r){return x.apply(this,arguments)})},{key:"approveTrc721",value:(w=o()(s.a.mark((function t(e,r,n){var i,a,u,o,c=arguments;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=c.length>3&&void 0!==c[3]?c[3]:{},a=c.length>4&&void 0!==c[4]?c[4]:this.mainchain.defaultPrivateKey,u=c.length>5&&void 0!==c[5]&&c[5],o="approve",t.abrupt("return",this.depositTrc(o,e,0,r,n,i,a,u));case 5:case"end":return t.stop()}}),t,this)}))),function(t,e,r){return w.apply(this,arguments)})},{key:"depositTrc20",value:(b=o()(s.a.mark((function t(e,r,n,i){var a,u,o,c,h=arguments;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=h.length>4&&void 0!==h[4]?h[4]:{},u=h.length>5&&void 0!==h[5]?h[5]:this.mainchain.defaultPrivateKey,o=h.length>6&&void 0!==h[6]&&h[6],c="depositTRC20",t.abrupt("return",this.depositTrc(c,e,r,n,i,a,u,o));case 5:case"end":return t.stop()}}),t,this)}))),function(t,e,r,n){return b.apply(this,arguments)})},{key:"depositTrc721",value:(m=o()(s.a.mark((function t(e,r,n,i){var a,u,o,c,h=arguments;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=h.length>4&&void 0!==h[4]?h[4]:{},u=h.length>5&&void 0!==h[5]?h[5]:this.mainchain.defaultPrivateKey,o=h.length>6&&void 0!==h[6]&&h[6],c="depositTRC721",t.abrupt("return",this.depositTrc(c,e,r,n,i,a,u,o));case 5:case"end":return t.stop()}}),t,this)}))),function(t,e,r,n){return m.apply(this,arguments)})},{key:"mappingTrc",value:(g=o()(s.a.mark((function t(e,r,n,i){var a,u,o,c,h,l=arguments;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=l.length>4&&void 0!==l[4]?l[4]:{},u=l.length>5&&void 0!==l[5]?l[5]:this.mainchain.defaultPrivateKey,o=l.length>6?l[6]:void 0,this.utils.isFunction(u)&&(o=u,u=this.mainchain.defaultPrivateKey),this.utils.isFunction(a)&&(o=a,a={}),o){t.next=7;break}return t.abrupt("return",this.injectPromise(this.mappingTrc,e,r,n,i,a,u));case 7:if(!this.validator.notValid([{name:"trxHash",type:"not-empty-string",value:e},{name:"mappingFee",type:"integer",value:r,gte:0},{name:"feeLimit",type:"integer",value:n,gt:0,lte:1e9}],o)){t.next=9;break}return t.abrupt("return");case 9:return e=e.startsWith("0x")?e:"0x"+e,a=f({feeLimit:n},a,{callValue:r}),t.prev=11,t.next=14,this.mainchain.contract().at(this.mainGatewayAddress);case 14:if(c=t.sent,h=null,"mappingTRC20"!==i){t.next=22;break}return t.next=19,c.mappingTRC20(e).send(a,u);case 19:h=t.sent,t.next=29;break;case 22:if("mappingTRC721"!==i){t.next=28;break}return t.next=25,c.mappingTRC721(e).send(a,u);case 25:h=t.sent,t.next=29;break;case 28:o(new Error("type must be trc20 or trc721"));case 29:o(null,h),t.next=35;break;case 32:return t.prev=32,t.t0=t.catch(11),t.abrupt("return",o(t.t0));case 35:case"end":return t.stop()}}),t,this,[[11,32]])}))),function(t,e,r,n){return g.apply(this,arguments)})},{key:"mappingTrc20",value:(y=o()(s.a.mark((function t(e,r,n){var i,a,u,o,c=arguments;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=c.length>3&&void 0!==c[3]?c[3]:{},a=c.length>4&&void 0!==c[4]?c[4]:this.mainchain.defaultPrivateKey,u=c.length>5&&void 0!==c[5]&&c[5],o="mappingTRC20",t.abrupt("return",this.mappingTrc(e,r,n,o,i,a,u));case 5:case"end":return t.stop()}}),t,this)}))),function(t,e,r){return y.apply(this,arguments)})},{key:"mappingTrc721",value:(v=o()(s.a.mark((function t(e,r,n){var i,a,u,o,c=arguments;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=c.length>3&&void 0!==c[3]?c[3]:{},a=c.length>4&&void 0!==c[4]?c[4]:this.mainchain.defaultPrivateKey,u=c.length>5&&void 0!==c[5]&&c[5],o="mappingTRC721",t.abrupt("return",this.mappingTrc(e,r,n,o,i,a,u));case 5:case"end":return t.stop()}}),t,this)}))),function(t,e,r){return v.apply(this,arguments)})},{key:"withdrawTrx",value:(p=o()(s.a.mark((function t(e,r,n){var i,a,u,o,c,h=arguments;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=h.length>3&&void 0!==h[3]?h[3]:{},a=h.length>4&&void 0!==h[4]?h[4]:this.mainchain.defaultPrivateKey,u=h.length>5&&void 0!==h[5]&&h[5],this.utils.isFunction(a)&&(u=a,a=this.mainchain.defaultPrivateKey),this.utils.isFunction(i)&&(u=i,i={}),u){t.next=7;break}return t.abrupt("return",this.injectPromise(this.withdrawTrx,e,r,n,i,a));case 7:if(!this.validator.notValid([{name:"callValue",type:"integer",value:e,gte:0},{name:"withdrawFee",type:"integer",value:r,gte:0},{name:"feeLimit",type:"integer",value:n,gt:0,lte:1e9}],u)){t.next=9;break}return t.abrupt("return");case 9:return i=f({callValue:Number(e)+Number(r),feeLimit:n},i),t.prev=10,t.next=13,this.sidechain.contract().at(this.sideGatewayAddress);case 13:return o=t.sent,t.next=16,o.withdrawTRX().send(i,a);case 16:return c=t.sent,t.abrupt("return",u(null,c));case 20:return t.prev=20,t.t0=t.catch(10),t.abrupt("return",u(t.t0));case 23:case"end":return t.stop()}}),t,this,[[10,20]])}))),function(t,e,r){return p.apply(this,arguments)})},{key:"withdrawTrc10",value:(l=o()(s.a.mark((function t(e,r,n,i){var a,u,o,c,h,l=arguments;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=l.length>4&&void 0!==l[4]?l[4]:{},u=l.length>5&&void 0!==l[5]?l[5]:this.mainchain.defaultPrivateKey,o=l.length>6&&void 0!==l[6]&&l[6],this.utils.isFunction(u)&&(o=u,u=this.mainchain.defaultPrivateKey),this.utils.isFunction(a)&&(o=a,a={}),o){t.next=7;break}return t.abrupt("return",this.injectPromise(this.withdrawTrc10,e,r,n,i,a,u));case 7:if(!this.validator.notValid([{name:"tokenId",type:"integer",value:e,gte:0},{name:"tokenValue",type:"integer",value:r,gte:0},{name:"withdrawFee",type:"integer",value:n,gte:0},{name:"feeLimit",type:"integer",value:i,gt:0,lte:1e9}],o)){t.next=9;break}return t.abrupt("return");case 9:return a=f({tokenValue:r,tokenId:e,callValue:n,feeLimit:i},a),t.prev=10,t.next=13,this.sidechain.contract().at(this.sideGatewayAddress);case 13:return c=t.sent,t.next=16,c.withdrawTRC10(e,r).send(a,u);case 16:return h=t.sent,t.abrupt("return",o(null,h));case 20:return t.prev=20,t.t0=t.catch(10),t.abrupt("return",o(t.t0));case 23:case"end":return t.stop()}}),t,this,[[10,20]])}))),function(t,e,r,n){return l.apply(this,arguments)})},{key:"withdrawTrc",value:(c=o()(s.a.mark((function t(e,r,n,i,a){var u,c,h,l,d,p,v,y,g,m,b=this,w=arguments;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(u=w.length>5&&void 0!==w[5]?w[5]:{},c=w.length>6&&void 0!==w[6]?w[6]:this.mainchain.defaultPrivateKey,h=w.length>7&&void 0!==w[7]&&w[7],this.utils.isFunction(c)&&(h=c,c=this.mainchain.defaultPrivateKey),this.utils.isFunction(u)&&(h=u,u={}),h){t.next=7;break}return t.abrupt("return",this.injectPromise(this.withdrawTrc,e,r,n,i,a,u,c));case 7:if(!this.validator.notValid([{name:"functionSelector",type:"not-empty-string",value:e},{name:"numOrId",type:"integer",value:r,gte:0},{name:"withdrawFee",type:"integer",value:n,gte:0},{name:"feeLimit",type:"integer",value:i,gt:0,lte:1e9},{name:"contractAddress",type:"address",value:a}],h)){t.next=9;break}return t.abrupt("return");case 9:return u=f({feeLimit:i},u,{callValue:n}),l=[{type:"uint256",value:r}],t.prev=11,d=c?this.sidechain.address.fromPrivateKey(c):this.sidechain.defaultAddress.base58,t.next=15,this.sidechain.transactionBuilder.triggerSmartContract(a,e,u,l,this.sidechain.address.toHex(d));case 15:if((p=t.sent).result&&p.result.result){t.next=18;break}return t.abrupt("return",h("Unknown error: "+JSON.stringify(p.transaction,null,2)));case 18:return t.next=20,this.sidechain.trx.sign(p.transaction,c);case 20:if((v=t.sent).signature){t.next=25;break}if(c){t.next=24;break}return t.abrupt("return",h("Transaction was not signed properly"));case 24:return t.abrupt("return",h("Invalid private key provided"));case 25:return t.next=27,this.sidechain.trx.sendRawTransaction(v);case 27:if(!(y=t.sent).code){t.next=32;break}return g={error:y.code,message:y.code},y.message&&(g.message=this.sidechain.toUtf8(y.message)),t.abrupt("return",h(g));case 32:if(u.shouldPollResponse){t.next=34;break}return t.abrupt("return",h(null,v.txID));case 34:(m=function(){var t=o()(s.a.mark((function t(){var e,r,n,i=arguments;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(20!=(e=i.length>0&&void 0!==i[0]?i[0]:0)){t.next=3;break}return t.abrupt("return",h({error:"Cannot find result in solidity node",transaction:v}));case 3:return t.next=5,b.sidechain.trx.getTransactionInfo(v.txID);case 5:if(r=t.sent,Object.keys(r).length){t.next=8;break}return t.abrupt("return",setTimeout((function(){m(e+1)}),3e3));case 8:if(!r.result||"FAILED"!=r.result){t.next=10;break}return t.abrupt("return",h({error:b.sidechain.toUtf8(r.resMessage),transaction:v,output:r}));case 10:if(utils.hasProperty(r,"contractResult")){t.next=12;break}return t.abrupt("return",h({error:"Failed to execute: "+JSON.stringify(r,null,2),transaction:v,output:r}));case 12:if(!u.rawResponse){t.next=14;break}return t.abrupt("return",h(null,r));case 14:return 1===(n=decodeOutput(b.outputs,"0x"+r.contractResult[0])).length&&(n=n[0]),t.abrupt("return",h(null,n));case 17:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}())(),t.next=41;break;case 38:return t.prev=38,t.t0=t.catch(11),t.abrupt("return",h(t.t0));case 41:case"end":return t.stop()}}),t,this,[[11,38]])}))),function(t,e,r,n,i){return c.apply(this,arguments)})},{key:"withdrawTrc20",value:(u=o()(s.a.mark((function t(e,r,n,i,a){var u,o,c,h=arguments;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=h.length>5&&void 0!==h[5]?h[5]:this.mainchain.defaultPrivateKey,o=h.length>6&&void 0!==h[6]&&h[6],c="withdrawal(uint256)",t.abrupt("return",this.withdrawTrc(c,e,r,n,i,a,u,o));case 4:case"end":return t.stop()}}),t,this)}))),function(t,e,r,n,i){return u.apply(this,arguments)})},{key:"withdrawTrc721",value:(a=o()(s.a.mark((function t(e,r,n,i,a){var u,o,c,h=arguments;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=h.length>5&&void 0!==h[5]?h[5]:this.mainchain.defaultPrivateKey,o=h.length>6&&void 0!==h[6]&&h[6],c="withdrawal(uint256)",t.abrupt("return",this.withdrawTrc(c,e,r,n,i,a,u,o));case 4:case"end":return t.stop()}}),t,this)}))),function(t,e,r,n,i){return a.apply(this,arguments)})},{key:"injectFund",value:(i=o()(s.a.mark((function t(e,r,n){var i,a,u,o,c,h,l,d,p=arguments;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=p.length>3&&void 0!==p[3]?p[3]:this.mainchain.defaultPrivateKey,a=p.length>4&&void 0!==p[4]&&p[4],this.utils.isFunction(i)&&(a=i,i=this.mainchain.defaultPrivateKey),this.utils.isFunction(n)&&(a=n,n={}),a){t.next=6;break}return t.abrupt("return",this.injectPromise(this.injectFund,e,r,n,i));case 6:if(!this.validator.notValid([{name:"num",type:"integer",value:e,gte:0},{name:"feeLimit",type:"integer",value:r,gt:0,lte:1e9}],a)){t.next=8;break}return t.abrupt("return");case 8:return t.prev=8,u=this.sidechain.address.fromPrivateKey(i),o=this.sidechain.address.toHex(u),t.next=13,this.sidechain.fullNode.request("/wallet/fundinject",{owner_address:o,amount:e},"post");case 13:return c=t.sent,t.next=16,this.sidechain.trx.sign(c,i);case 16:if((h=t.sent).signature){t.next=21;break}if(i){t.next=20;break}return t.abrupt("return",a("Transaction was not signed properly"));case 20:return t.abrupt("return",a("Invalid private key provided"));case 21:return t.next=23,this.sidechain.trx.sendRawTransaction(h);case 23:if(!(l=t.sent).code){t.next=28;break}return d={error:l.code,message:l.code},l.message&&(d.message=this.mainchain.toUtf8(l.message)),t.abrupt("return",a(d));case 28:return t.abrupt("return",a(null,h.txID));case 31:return t.prev=31,t.t0=t.catch(8),t.abrupt("return",a(t.t0));case 34:case"end":return t.stop()}}),t,this,[[8,31]])}))),function(t,e,r){return i.apply(this,arguments)})},{key:"retryWithdraw",value:(n=o()(s.a.mark((function t(e,r,n){var i,a,u,o,c=arguments;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=c.length>3&&void 0!==c[3]?c[3]:{},a=c.length>4&&void 0!==c[4]?c[4]:this.sidechain.defaultPrivateKey,u=c.length>5&&void 0!==c[5]&&c[5],o="retryWithdraw(uint256)",t.abrupt("return",this.withdrawTrc(o,e,r,n,this.sideGatewayAddress,i,a,u));case 5:case"end":return t.stop()}}),t,this)}))),function(t,e,r){return n.apply(this,arguments)})},{key:"retryDeposit",value:(r=o()(s.a.mark((function t(e,r,n){var i,a,u,o,c=arguments;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=c.length>3&&void 0!==c[3]?c[3]:{},a=c.length>4&&void 0!==c[4]?c[4]:this.mainchain.defaultPrivateKey,u=c.length>5&&void 0!==c[5]&&c[5],o="retryDeposit",t.abrupt("return",this.depositTrc(o,e,r,n,this.mainGatewayAddress,i,a,u));case 5:case"end":return t.stop()}}),t,this)}))),function(t,e,n){return r.apply(this,arguments)})},{key:"retryMapping",value:(e=o()(s.a.mark((function t(e,r,n){var i,a,u,o,c=arguments;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=c.length>3&&void 0!==c[3]?c[3]:{},a=c.length>4&&void 0!==c[4]?c[4]:this.mainchain.defaultPrivateKey,u=c.length>5&&void 0!==c[5]&&c[5],o="retryMapping",t.abrupt("return",this.depositTrc(o,e,r,n,this.mainGatewayAddress,i,a,u));case 5:case"end":return t.stop()}}),t,this)}))),function(t,r,n){return e.apply(this,arguments)})}]),t}()},function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function u(t,e,r,n){var i=e&&e.prototype instanceof h?e:h,a=Object.create(i.prototype),s=new k(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(i,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw a;return T()}for(r.method=i,r.arg=a;;){var s=r.delegate;if(s){var u=b(s,r);if(u){if(u===c)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var h=o(t,e,r);if("normal"===h.type){if(n=r.done?"completed":"suspendedYield",h.arg===c)continue;return{value:h.arg,done:r.done}}"throw"===h.type&&(n="completed",r.method="throw",r.arg=h.arg)}}}(t,r,s),a}function o(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var c={};function h(){}function l(){}function d(){}var p={};p[i]=function(){return this};var f=Object.getPrototypeOf,v=f&&f(f(P([])));v&&v!==e&&r.call(v,i)&&(p=v);var y=d.prototype=h.prototype=Object.create(p);function g(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function m(t){var e;this._invoke=function(n,i){function a(){return new Promise((function(e,a){!function e(n,i,a,s){var u=o(t[n],t,i);if("throw"!==u.type){var c=u.arg,h=c.value;return h&&"object"==typeof h&&r.call(h,"__await")?Promise.resolve(h.__await).then((function(t){e("next",t,a,s)}),(function(t){e("throw",t,a,s)})):Promise.resolve(h).then((function(t){c.value=t,a(c)}),(function(t){return e("throw",t,a,s)}))}s(u.arg)}(n,i,e,a)}))}return e=e?e.then(a,a):a()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return c;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}var n=o(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,c;var i=n.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,c):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,c)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:T}}function T(){return{value:void 0,done:!0}}return l.prototype=y.constructor=d,d.constructor=l,d[s]=l.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===l||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(m.prototype),m.prototype[a]=function(){return this},t.AsyncIterator=m,t.async=function(e,r,n,i){var a=new m(u(e,r,n,i));return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(y),y[s]="Generator",y[i]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return s.type="throw",s.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),o=r.call(a,"finallyLoc");if(u&&o){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!o)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var s=a?a.completion:{};return s.type=t,s.arg=e,a?(this.method="next",this.next=a.finallyLoc,c):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),c},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),c}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;x(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),c}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}]).default}));
//# sourceMappingURL=sun.js.map