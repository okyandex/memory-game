(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(6),i=n.n(r),o=n(3),u=n(1),l=n(7),s=n.n(l),m=(n(14),{one:"\u0445\u043e\u0434",few:"\u0445\u043e\u0434\u0430",many:"\u0445\u043e\u0434\u043e\u0432"}),d=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[];n.length<e;){var a=Math.floor(Math.random()*t+1);-1===n.indexOf(a)&&n.push(a)}return n}(6,300).reduce((function(e,t){return[].concat(Object(u.a)(e),[{id:t}])}),[]),f=s()([].concat(Object(u.a)(d),Object(u.a)(d)));function b(e){var t=e.id,n=e.index,a=e.flipCard,r=e.isFlipped;return c.a.createElement("div",{onClick:function(){return a(n)},className:"card ".concat(r?"flipped":"")},c.a.createElement("div",{className:"inner"},c.a.createElement("div",{className:"front"},c.a.createElement("img",{src:"https://pokeres.bastionbot.org/images/pokemon/".concat(t,".png"),alt:"pokemon"})),c.a.createElement("div",{className:"back"},"?")))}var p=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)([]),l=Object(o.a)(i,2),s=l[0],p=l[1],v=Object(a.useState)(!1),O=Object(o.a)(v,2),j=(O[0],O[1]),g=Object(a.useState)(0),E=Object(o.a)(g,2),h=E[0],k=E[1];Object(a.useEffect)((function(){2===n.length&&setTimeout((function(){return r([])}),700)}),[n]),Object(a.useEffect)((function(){if(!(n.length<2)){var e=f[n[0]],t=f[n[1]];e.id===t.id&&p((function(t){return[].concat(Object(u.a)(t),[e.id])}))}}),[n]),Object(a.useEffect)((function(){d.length===s.length&&setTimeout((function(){return j(!0)}),700)}),[s]);var N=function(e){n.includes(e)||(r((function(t){return[].concat(Object(u.a)(t),[e])})),k((function(e){return e+1})))};return c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"moves"},h," ",function(e,t){return t[new Intl.PluralRules("ru-RU").select(e)]}(h,m)),c.a.createElement("div",{className:"cards"},f.map((function(e,t){var a=e.id,r=!1;return n.includes(t)&&(r=!0),s.includes(a)&&(r=!0),c.a.createElement(b,Object.assign({key:t},{id:a,index:t,flipCard:N,isFlipped:r}))}))),c.a.createElement("button",{className:"play-again-button",onClick:function(){window.location.reload()}},"\u0415\u0449\u0435 \u0440\u0430\u0437"))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root"))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.372dd624.chunk.js.map