(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{15:function(t,n,e){},18:function(t,n,e){"use strict";e.r(n);var o=e(4),r=e.n(o),c=e(3),s=e.n(c),a=e(5),i=e(6),u=e(7),l=e(9),d=e(8),f=e(1),b=e.n(f),m=(e(15),e(16),function(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}),j=function(){return m().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)}))},h=function(){return m().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},p=e(0),g=function(t){var n=t.goods;return Object(p.jsx)("ul",{className:"list-group w-25 m-auto",children:n.map((function(t){return Object(p.jsx)("li",{className:"list-group-item",style:{color:t.color},children:t.name},t.id)}))})},y=function(t){Object(l.a)(e,t);var n=Object(d.a)(e);function e(){var t;Object(i.a)(this,e);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(t=n.call.apply(n,[this].concat(r))).state={goods:[]},t.loadGoods=function(){var n=Object(a.a)(s.a.mark((function n(e){var o;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e();case 2:o=n.sent,t.setState({goods:o});case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),t}return Object(u.a)(e,[{key:"render",value:function(){var t=this,n=this.state.goods;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{className:"text-center mb-3",children:"Dynamic list of Goods"}),Object(p.jsxs)("div",{className:"d-flex text-center gap-3 justify-content-center mb-3",children:[Object(p.jsx)("button",{className:"btn btn-primary",type:"button",onClick:function(){return t.loadGoods(m)},children:"Load All goods"}),Object(p.jsx)("button",{className:"btn btn-primary",type:"button",onClick:function(){return t.loadGoods(j)},children:"Load 5 first goods"}),Object(p.jsx)("button",{className:"btn btn-primary",type:"button",onClick:function(){return t.loadGoods(h)},children:"Load red goods"})]}),Object(p.jsx)(g,{goods:n})]})}}]),e}(b.a.Component);r.a.render(Object(p.jsx)(y,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.258715c0.chunk.js.map