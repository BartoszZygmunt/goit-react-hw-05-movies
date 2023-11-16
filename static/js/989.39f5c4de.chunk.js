"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[989],{9855:function(n,t,e){e.d(t,{aN:function(){return w.a},H2:function(){return g},eW:function(){return d},s2:function(){return k}});e(3960);var r,a,i,c,o,s=e(168),u=e(5867),p=u.ZP.ul(r||(r=(0,s.Z)(["\n  list-style-type: none;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  justify-content: center;\n"]))),l=e(184),d=function(n){var t=n.movies;return(0,l.jsx)(p,{children:t.map((function(n){return(0,l.jsx)(g,{movie:n},n.id)}))})},f=e(7689),h=e(1087),x=u.ZP.img(a||(a=(0,s.Z)(["\n  border-radius: 4px;\n  width: 300px;\n  height: 400px;\n  object-fit: cover;\n"]))),v=u.ZP.p(i||(i=(0,s.Z)(["\n  color: darkblue;\n  margin: 10;\n  font-size: large;\n  font-weight: 700;\n  max-width: 300px;\n"]))),m=u.ZP.li(c||(c=(0,s.Z)(["\n  display: flex;\n  margin: 10px 20px;\n"]))),Z=(0,u.ZP)(h.rU)(o||(o=(0,s.Z)(["\n  text-decoration: none;\n"]))),j=e(3014),g=function(n){var t=n.movie,e=(0,f.TH)(),r=e.pathname,a=e.search,i=t.title,c=t.poster_path,o=t.id;return(0,l.jsx)(m,{children:(0,l.jsxs)(Z,{to:"/movies/".concat(o),state:{from:r+a},children:[c?(0,l.jsx)(x,{src:"http://image.tmdb.org/t/p/w200".concat(c),alt:i}):(0,l.jsx)(x,{src:j,alt:"Placeholder"}),(0,l.jsx)(v,{children:i})]})})},w=(e(2070),e(7527)),b=e(8683),y=e(5717),k=(e(3037),e(8688),function(n){var t=n.movies;return(0,l.jsx)("div",{children:(0,l.jsx)(y.Z,(0,b.Z)((0,b.Z)({},{dots:!0,arrows:!1,infinite:!0,speed:500,slidesToScroll:4,variableWidth:!0}),{},{children:t.map((function(n){return(0,l.jsx)(g,{movie:n},n.id)}))}))})})},5033:function(n,t,e){e.r(t),e.d(t,{default:function(){return D}});var r,a,i,c,o,s,u,p,l,d,f,h=e(9439),x=e(2791),v=e(7689),m=e(409),Z=e(9128),j=e(9855),g=e(3014),w=e(168),b=e(5867),y=e(1087),k=b.ZP.div(r||(r=(0,w.Z)(["\n  display: flex;\n  flex-direction: row;\n  gap: 30px;\n  margin-bottom: 10px;\n"]))),P=(b.ZP.div(a||(a=(0,w.Z)(["\n  padding: 15px;\n"]))),b.ZP.img(i||(i=(0,w.Z)(["\n  border-radius: 4px;\n"])))),_=b.ZP.span(c||(c=(0,w.Z)(["\n  margin-right: 20px;\n  color: darkblue;\n  font-weight: 600;\n"]))),I=b.ZP.div(o||(o=(0,w.Z)(["\n  margin-bottom: 10px;\n"]))),N=b.ZP.h3(s||(s=(0,w.Z)(["\n  margin: 40px 0 10px;\n"]))),M=b.ZP.p(u||(u=(0,w.Z)(["\n  width: 33%;\n"]))),z=b.ZP.ul(p||(p=(0,w.Z)(["\n  list-style-type: none;\n  display: flex;\n  margin: 0;\n  padding: 0;\n"]))),T=b.ZP.li(l||(l=(0,w.Z)(["\n  padding: 10px;\n"]))),C=(0,b.ZP)(y.OL)(d||(d=(0,w.Z)(["\n  color: darkblue;\n  text-decoration: none;\n  font-size: 18px;\n  font-weight: bold;\n  padding: 8px;\n\n  &.active {\n    border: 1px solid darkblue;\n    border-radius: 6px;\n  }\n"]))),J=(0,b.ZP)(y.rU)(f||(f=(0,w.Z)(["\n  text-decoration: none;\n  color: darkblue;\n  margin-bottom: 25px;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-weight: 500;\n"]))),Y=e(184),D=function(){var n,t,e=(0,v.UO)().movieId,r=(0,x.useState)(null),a=(0,h.Z)(r,2),i=a[0],c=a[1],o=(0,x.useState)(!0),s=(0,h.Z)(o,2),u=s[0],p=s[1],l=(0,x.useRef)(null),d=null!==(n=null===(t=(0,v.TH)().state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/";(0,x.useEffect)((function(){(0,m.TP)(e).then((function(n){c(n)})).finally((function(){p(!1)}))}),[e]);var f=function(){l.current&&setTimeout((function(){l.current.scrollIntoView({behavior:"smooth"})}),500)};if(u)return(0,Y.jsx)(j.aN,{});var w=i.title,b=i.release_date,y=i.vote_average,D=i.genres,F=i.overview,U=i.poster_path;return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(J,{to:d,children:[(0,Y.jsx)(Z.jTe,{size:"24"}),"Go back"]}),(0,Y.jsxs)(k,{children:[(0,Y.jsx)("div",{children:(0,Y.jsx)(P,{src:U||g,alt:U?w:"Placeholder"})}),(0,Y.jsxs)("div",{children:[(0,Y.jsxs)("h2",{children:[w," (",b.slice(0,4),")"]}),(0,Y.jsxs)("div",{children:[(0,Y.jsxs)(I,{children:[(0,Y.jsx)(_,{children:b}),(0,Y.jsx)(_,{children:D.map((function(n){return n.name+" "}))}),(0,Y.jsxs)(_,{children:["User score: ",y.toFixed(1)," "]})]}),(0,Y.jsx)(N,{children:"Overview"}),(0,Y.jsx)(M,{children:F})]})]})]}),(0,Y.jsxs)(z,{ref:l,children:[(0,Y.jsx)(T,{children:(0,Y.jsx)(C,{to:"cast",state:{from:d},onClick:f,children:"Cast"})}),(0,Y.jsx)(T,{children:(0,Y.jsx)(C,{to:"reviews",state:{from:d},onClick:f,children:"Reviews"})})]}),(0,Y.jsx)(x.Suspense,{fallback:(0,Y.jsx)(j.aN,{}),children:(0,Y.jsx)(v.j3,{})})]})}},409:function(n,t,e){e.d(t,{Df:function(){return f},M1:function(){return v},TP:function(){return x},Wf:function(){return h},tx:function(){return m}});var r=e(5861),a=e(7757),i=e.n(a),c=e(5294);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="trending/movie/day",s="search/movie",u="movie",p="credits",l="reviews",d=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("".concat("https://api.themoviedb.org/3/")+t,{headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjZmMjc2MjcyMDY2NzE4Y2YyYjBhNzI4MjFlYmEwNyIsInN1YiI6IjY0YmFlZTFhNDM1MDExMDBjNzExMGNmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MZ8vGlAMFv2BTCJshD8dcZDS5gvT7sILLLCriDcF-Uc"}});case 3:if(200!==(e=n.sent).status){n.next=6;break}return n.abrupt("return",e.data);case 6:n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.error("An error occurred while fetching data:",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d("".concat(o));case 2:return t=n.sent,n.abrupt("return",t.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d("".concat(s,"?query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d("".concat(u,"/").concat(t));case 2:return(e=n.sent).poster_path&&(e.poster_path="http://image.tmdb.org/t/p/w300".concat(e.poster_path)),n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d("".concat(u,"/").concat(t,"/").concat(p));case 2:return e=n.sent,n.abrupt("return",e.cast.map((function(n){return n.profile_path&&(n.profile_path="http://image.tmdb.org/t/p/w200".concat(n.profile_path)),n})));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),m=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d("".concat(u,"/").concat(t,"/").concat(l));case 2:return e=n.sent,n.abrupt("return",e.results.map((function(n){return n.author_details.avatar_path&&(n.author_details.avatar_path="http://image.tmdb.org/t/p/w200".concat(n.author_details.avatar_path)),n})));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},3014:function(n,t,e){n.exports=e.p+"static/media/no-poster-available.22f65d84652dc84a5df2.jpg"}}]);
//# sourceMappingURL=989.39f5c4de.chunk.js.map