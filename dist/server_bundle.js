!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=3)}([function(e,t){e.exports=require("path")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("body-parser")},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),u=n(2),i=n.n(u),s=n(0),c=n.n(s),l=o()(),f=process.env.PORT||5e3;l.use(o.a.static(c.a.resolve()+"/dist/public")),l.use(i.a.urlencoded({extended:!1})),l.set("view engine","ejs"),l.set("views",c.a.resolve()+"/server/views"),l.get("/",function(e,t){t.render("page1")}),l.get("*",function(e,t){t.sendFile(c.a.resolve()+"/public/index.html")}),l.listen(f,function(){console.log("Server listen on port ".concat(f))})}]);