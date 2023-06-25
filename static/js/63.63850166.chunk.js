"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[63],{63:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,c,o,a,i,s=t(439),u=t(689),p=t(791),l=t(168),f=t(444),d=f.ZP.div(r||(r=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 20px;\n  font-size: 20px;\n  color: #010101;\n  margin-top: 20px;\n  border-bottom: 1px solid black;\n"]))),h=f.ZP.button(c||(c=(0,l.Z)(["\n  margin-top: 20px;\n  font-size: 18px;\n  padding: 10px 10px;\n  border-radius: 5px;\n  border: 1px solid #fff;\n  text-decoration: none;\n  display: inline-block;\n  cursor: pointer;\n  text-transform: uppercase;\n  color: cornflowerblue;\n  font-weight: 500;\n  background: #cfe0e8;\n  :hover,\n  :focus {\n    color: red;\n    transition: color 0.35s cubic-bezier(0.4, 0, 0.2, 1);\n  }\n"]))),x=t(81),v=t(87),m=f.ZP.ul(o||(o=(0,l.Z)(["\n  padding: 0;\n  margin: 0;\n  display: flex;\n  justify-content: flex-start;\n"]))),g=f.ZP.li(a||(a=(0,l.Z)(["\n  color: #000;\n  font-size: 25px;\n  list-style: none;\n  padding: 13px;\n"]))),b=(0,f.ZP)(v.OL)(i||(i=(0,l.Z)(["\n  text-decoration: none;\n  color: cornflowerblue;\n  text-transform: uppercase;\n  font-weight: 500;\n  &.active {\n    color: red;\n  }\n  :hover:not(.active),\n  :focus-visible:not(.active) {\n    color: #7a3b2e;\n  }\n"]))),j=t(184),w=function(n){var e=n.from;return(0,j.jsxs)(m,{children:[(0,j.jsx)(g,{children:(0,j.jsx)(b,{to:"cast",state:{from:e},children:"Cast"})}),(0,j.jsx)(g,{children:(0,j.jsx)(b,{to:"reviews",state:{from:e},children:"Reviews"})})]})},y=function(){var n,e,t=(0,u.UO)().movieId,r=(0,u.TH)(),c=(0,u.s0)(),o=(0,p.useState)(),a=(0,s.Z)(o,2),i=a[0],l=a[1],f=null!==(n=null===(e=r.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";if((0,p.useEffect)((function(){(0,x.gW)(t).then(l)}),[t]),!i)return null;var v=i.release_date,m=new Date(v),g=i.original_title,b=i.overview,y=i.vote_average,k=i.genres,Z=i.poster_path;return(0,j.jsx)("main",{children:(0,j.jsxs)("div",{children:[(0,j.jsx)(h,{type:"button",onClick:function(){return c(f)},children:"Go back"}),(0,j.jsxs)(d,{children:[(0,j.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+Z,alt:g,width:250}),(0,j.jsxs)("div",{children:[(0,j.jsxs)("h2",{children:[g," (",m.getFullYear(),")"]}),(0,j.jsxs)("p",{children:["User Score: ",y]}),(0,j.jsx)("b",{children:"Overview:"}),(0,j.jsx)("p",{children:b}),(0,j.jsx)("b",{children:"Genres:"}),(0,j.jsx)("p",{children:k.map((function(n){return n.name})).join(", ")})]})]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("h3",{children:"Additional information"}),(0,j.jsx)(w,{from:f})]}),(0,j.jsx)(u.j3,{})]})})}},81:function(n,e,t){t.d(e,{Av:function(){return l},Hj:function(){return x},Yc:function(){return m},gW:function(){return d},tp:function(){return u}});var r=t(861),c=t(757),o=t.n(c),a=t(243),i="6ba15ce3765cec3b359b6906ffc09e02",s="https://api.themoviedb.org/3";function u(){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(o().mark((function n(){var e,t,r,c,u=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=u.length>0&&void 0!==u[0]?u[0]:1,t="".concat(s,"/trending/movie/day?api_key=").concat(i,"&page=").concat(e),n.next=4,a.Z.get(t);case 4:return r=n.sent,c=r.data,n.abrupt("return",c.results);case 7:case"end":return n.stop()}}),n)}))),p.apply(this,arguments)}function l(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(s,"/search/movie?api_key=").concat(i,"&language=en-US&query=").concat(e),n.next=3,a.Z.get(t);case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(o().mark((function n(e){var t,r,c;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(s,"/movie/").concat(e,"?api_key=").concat(i),n.next=3,a.Z.get(t);case 3:return r=n.sent,c=r.data,n.abrupt("return",c);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(o().mark((function n(e){var t,r,c;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(i),n.next=3,a.Z.get(t);case 3:return r=n.sent,c=r.data,n.abrupt("return",c);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(o().mark((function n(e){var t,r,c;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(i),n.next=3,a.Z.get(t);case 3:return r=n.sent,c=r.data,n.abrupt("return",c.results);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}u()}}]);
//# sourceMappingURL=63.63850166.chunk.js.map