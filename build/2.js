webpackJsonp([2],{639:function(l,n,u){"use strict";function t(l){return a._23(0,[(l()(),a.Z(0,0,null,null,5,"ion-header",[],null,null,null,null,null)),a.Y(1,16384,null,0,Y.a,[x.a,a.j,a.z,[2,$.a]],null,null),(l()(),a._21(-1,null,["\n  "])),(l()(),a.Z(3,0,null,null,1,"app-header",[["page","category"]],null,null,null,j.b,j.a)),a.Y(4,49152,null,0,I.a,[a.u,o.a],{page:[0,"page"]},null),(l()(),a._21(-1,null,["\n"])),(l()(),a._21(-1,null,["\n\n"])),(l()(),a.Z(7,0,null,null,27,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,C.b,C.a)),a.Y(8,4374528,null,0,F.a,[x.a,z.a,O.a,a.j,a.z,w.a,q.a,a.u,[2,$.a],[2,A.a]],null,null),(l()(),a._21(-1,1,["\n\n  "])),(l()(),a.Z(10,0,null,1,20,"ion-grid",[["class","grid"]],null,null,null,null,null)),a.Y(11,16384,null,0,U.a,[],null,null),(l()(),a._21(-1,null,["\n    "])),(l()(),a.Z(13,0,null,null,16,"ion-row",[["class","row"]],null,null,null,null,null)),a.Y(14,16384,null,0,X.a,[],null,null),(l()(),a._21(-1,null,["\n\n      "])),(l()(),a.Z(16,0,null,null,5,"ion-col",[["class","col"],["col-12",""],["col-lg-6",""],["col-md-8",""],["offset-lg-2",""]],null,null,null,null,null)),a.Y(17,16384,null,0,P.a,[],null,null),(l()(),a._21(-1,null,["\n\n        "])),(l()(),a.Z(19,0,null,null,1,"app-posts",[],null,null,null,L.b,L.a)),a.Y(20,49152,null,0,M.a,[o.a],{posts:[0,"posts"]},null),(l()(),a._21(-1,null,["\n\n      "])),(l()(),a._21(-1,null,["\n\n      "])),(l()(),a.Z(23,0,null,null,5,"ion-col",[["class","col"],["col-12",""],["col-lg-2",""],["col-md-4",""]],null,null,null,null,null)),a.Y(24,16384,null,0,P.a,[],null,null),(l()(),a._21(-1,null,["\n\n        "])),(l()(),a.Z(26,0,null,null,1,"app-sidebar",[],null,null,null,T.b,T.a)),a.Y(27,114688,null,0,B.a,[o.a,c.a],null,null),(l()(),a._21(-1,null,["\n\n      "])),(l()(),a._21(-1,null,["\n\n    "])),(l()(),a._21(-1,null,["\n  "])),(l()(),a._21(-1,1,["\n\n\n  \n  "])),(l()(),a.Z(32,0,null,1,1,"app-footer",[],null,null,null,H.b,H.a)),a.Y(33,49152,null,0,S.a,[a.u,o.a],null,null),(l()(),a._21(-1,1,["\n\n"])),(l()(),a._21(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,4,0,"category");l(n,20,0,u.posts),l(n,27,0)},function(l,n){l(n,7,0,a._11(n,8).statusbarPadding,a._11(n,8)._hasRefresher)})}Object.defineProperty(n,"__esModule",{value:!0});var a=u(1),o=(u(2),u(104),u(161)),i=u(165),c=u(73),e=function(){function l(l,n,u,t){this.params=l,this.nav=n,this.sheetbase=u,this.meta=t,this.categoryId=this.params.get("categoryId"),this.category=this.params.get("category")}return l.prototype.ionViewDidLoad=function(){var l=this,n=setInterval(function(){l.category&&(l.meta.set({title:l.category.value||l.category.title}),clearInterval(n))},500);setTimeout(function(){clearInterval(n)},5e3)},l.prototype.ngOnInit=function(){var l=this;!this.category&&this.categoryId&&this.sheetbase.get("categories",this.categoryId).subscribe(function(n){l.category=n}),this.sheetbase.get("posts",null,{orderByKey:"categories/"+this.categoryId,equalTo:"!null"}).subscribe(function(n){l.posts=n})},l}(),r=u(646),s=u(647),_=u(654),f=u(653),p=function(){return function(){}}(),g=u(332),d=u(333),b=u(334),m=u(335),v=u(336),h=u(337),k=u(338),y=u(339),Z=u(340),Y=u(167),x=u(3),$=u(7),j=u(650),I=u(644),C=u(651),F=u(32),z=u(6),O=u(13),w=u(12),q=u(47),A=u(30),U=u(163),X=u(164),P=u(162),L=u(658),M=u(649),T=u(657),B=u(648),H=u(652),S=u(645),V=u(16),D=a.X({encapsulation:2,styles:[],data:{}}),J=a.V("page-category",e,function(l){return a._23(0,[(l()(),a.Z(0,0,null,null,1,"page-category",[],null,null,null,t,D)),a.Y(1,114688,null,0,e,[V.a,o.a,c.a,i.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),K=u(23),N=u(26),R=u(169),W=u(655),E=u(48);u.d(n,"CategoryPageModuleNgFactory",function(){return G});var G=a.W(p,[],function(l){return a._7([a._8(512,a.i,a.S,[[8,[g.a,d.a,b.a,m.a,v.a,h.a,k.a,y.a,Z.a,J]],[3,a.i],a.s]),a._8(4608,K.k,K.j,[a.r,[2,K.s]]),a._8(4608,N.k,N.k,[]),a._8(4608,N.c,N.c,[]),a._8(512,K.b,K.b,[]),a._8(512,N.j,N.j,[]),a._8(512,N.d,N.d,[]),a._8(512,N.i,N.i,[]),a._8(512,R.a,R.a,[]),a._8(512,R.b,R.b,[]),a._8(512,r.a,r.a,[]),a._8(512,s.a,s.a,[]),a._8(512,W.a,W.a,[]),a._8(512,_.a,_.a,[]),a._8(512,f.a,f.a,[]),a._8(512,p,p,[]),a._8(256,E.a,e,[])])})},644:function(l,n,u){"use strict";u.d(n,"a",function(){return t});u(2),u(161);var t=function(){return function(l,n){this.zone=l,this.nav=n}}()},645:function(l,n,u){"use strict";u.d(n,"a",function(){return t});u(2),u(161);var t=function(){return function(l,n){this.zone=l,this.nav=n}}()},646:function(l,n,u){"use strict";u.d(n,"a",function(){return t});u(2),u(104);var t=function(){return function(){}}()},647:function(l,n,u){"use strict";u.d(n,"a",function(){return t});u(2),u(104);var t=function(){return function(){}}()},648:function(l,n,u){"use strict";u.d(n,"a",function(){return t});u(2),u(161),u(73);var t=function(){function l(l,n){this.nav=l,this.sheetbase=n}return l.prototype.ngOnInit=function(){var l=this;this.sheetbase.get("categories").subscribe(function(n){l.categories=n})},l}()},649:function(l,n,u){"use strict";u.d(n,"a",function(){return t});u(2),u(161);var t=function(){return function(l){this.nav=l,this.singular=!1}}()},650:function(l,n,u){"use strict";function t(l){return i._23(0,[(l()(),i.Z(0,0,null,null,1,"div",[["class","toolbar-background"]],null,null,null,null,null)),i.Y(1,278528,null,0,c.g,[i.p,i.q,i.j,i.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),i.Z(2,0,null,null,8,"button",[["class","back-button"],["ion-button","bar-button"]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==l.component.backButtonClick(u)&&t}return t},e.b,e.a)),i.Y(3,278528,null,0,c.g,[i.p,i.q,i.j,i.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),i.Y(4,1097728,null,0,r.a,[[8,"bar-button"],s.a,i.j,i.z],null,null),(l()(),i.Z(5,0,null,0,2,"ion-icon",[["class","back-button-icon"],["role","img"]],[[2,"hide",null]],null,null,null,null)),i.Y(6,278528,null,0,c.g,[i.p,i.q,i.j,i.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),i.Y(7,147456,null,0,_.a,[s.a,i.j,i.z],{name:[0,"name"]},null),(l()(),i.Z(8,0,null,0,2,"span",[["class","back-button-text"]],null,null,null,null,null)),i.Y(9,278528,null,0,c.g,[i.p,i.q,i.j,i.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),i._21(10,null,["",""])),i._10(null,0),i._10(null,1),i._10(null,2),(l()(),i.Z(14,0,null,null,2,"div",[["class","toolbar-content"]],null,null,null,null,null)),i.Y(15,278528,null,0,c.g,[i.p,i.q,i.j,i.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),i._10(null,3)],function(l,n){var u=n.component;l(n,1,0,"toolbar-background","toolbar-background-"+u._mode);l(n,3,0,"back-button","back-button-"+u._mode);l(n,6,0,"back-button-icon","back-button-icon-"+u._mode);l(n,7,0,u._bbIcon);l(n,9,0,"back-button-text","back-button-text-"+u._mode);l(n,15,0,"toolbar-content","toolbar-content-"+u._mode)},function(l,n){var u=n.component;l(n,2,0,u._hideBb);l(n,5,0,i._11(n,7)._hidden);l(n,10,0,u._backText)})}function a(l){return i._23(2,[(l()(),i.Z(0,0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),i.Y(1,278528,null,0,c.g,[i.p,i.q,i.j,i.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),i._10(null,0)],function(l,n){l(n,1,0,"toolbar-title","toolbar-title-"+n.component._mode)},null)}function o(l){return i._23(0,[(l()(),i.Z(0,0,null,null,27,"ion-navbar",[["class","toolbar"],["id","header"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,t,b)),i.Y(1,49152,null,0,f.a,[p.a,[2,g.a],[2,d.a],s.a,i.j,i.z],null,null),(l()(),i._21(-1,3,["\n  "])),(l()(),i.Z(3,0,null,3,6,"ion-title",[],null,null,null,a,h)),i.Y(4,49152,null,0,m.a,[s.a,i.j,i.z,[2,v.a],[2,f.a]],null,null),(l()(),i._21(-1,0,["\n    "])),(l()(),i.Z(6,0,null,0,2,"h1",[],null,null,null,null,null)),(l()(),i.Z(7,0,null,null,1,"span",[],null,[[null,"click"]],function(l,n,u){var t=!0,a=l.component;if("click"===n){t=!1!==("home"!==a.page?a.nav.go("home"):a.return)&&t}return t},null,null)),(l()(),i._21(-1,null,["My Blog"])),(l()(),i._21(-1,0,["\n  "])),(l()(),i._21(-1,3,["\n  "])),(l()(),i.Z(11,0,null,2,15,"ion-buttons",[["end",""],["id","menu"]],null,null,null,null,null)),i.Y(12,16384,null,1,k.a,[s.a,i.j,i.z,[2,v.a],[2,f.a]],null,null),i._19(603979776,1,{_buttons:1}),(l()(),i._21(-1,null,["\n    "])),(l()(),i.Z(15,0,null,null,4,"button",[["ion-button",""]],null,[[null,"click"]],function(l,n,u){var t=!0,a=l.component;if("click"===n){t=!1!==("about"!==a.page?a.nav.go("about"):a.return)&&t}return t},e.b,e.a)),i.Y(16,278528,null,0,c.g,[i.p,i.q,i.j,i.A],{ngClass:[0,"ngClass"]},null),i._15(17,{activated:0}),i.Y(18,1097728,[[1,4]],0,r.a,[[8,""],s.a,i.j,i.z],null,null),(l()(),i._21(-1,0,["About"])),(l()(),i._21(-1,null,["\n    "])),(l()(),i.Z(21,0,null,null,4,"button",[["ion-button",""]],null,[[null,"click"]],function(l,n,u){var t=!0,a=l.component;if("click"===n){t=!1!==("contact"!==a.page?a.nav.go("contact"):a.return)&&t}return t},e.b,e.a)),i.Y(22,278528,null,0,c.g,[i.p,i.q,i.j,i.A],{ngClass:[0,"ngClass"]},null),i._15(23,{activated:0}),i.Y(24,1097728,[[1,4]],0,r.a,[[8,""],s.a,i.j,i.z],null,null),(l()(),i._21(-1,0,["Contact"])),(l()(),i._21(-1,null,["\n  "])),(l()(),i._21(-1,3,["\n"]))],function(l,n){var u=n.component;l(n,16,0,l(n,17,0,"about"===u.page));l(n,22,0,l(n,23,0,"contact"===u.page))},function(l,n){l(n,0,0,i._11(n,1)._hidden,i._11(n,1)._sbPadding)})}var i=u(1),c=u(23),e=u(51),r=u(28),s=u(3),_=u(52),f=u(50),p=u(12),g=u(7),d=u(30),b=i.X({encapsulation:2,styles:[],data:{}}),m=u(166),v=u(74),h=i.X({encapsulation:2,styles:[],data:{}}),k=u(168);u(644),u(161);u.d(n,"a",function(){return y}),n.b=o;var y=i.X({encapsulation:2,styles:[],data:{}})},651:function(l,n,u){"use strict";function t(l){return a._23(2,[a._19(402653184,1,{_fixedContent:0}),a._19(402653184,2,{_scrollContent:0}),(l()(),a.Z(2,0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),a._10(null,0),(l()(),a.Z(4,0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),a._10(null,1),a._10(null,2)],null,null)}u.d(n,"a",function(){return o}),n.b=t;var a=u(1),o=(u(3),u(6),u(13),u(47),u(7),u(30),a.X({encapsulation:2,styles:[],data:{}}))},652:function(l,n,u){"use strict";function t(l){return a._23(0,[(l()(),a.Z(0,0,null,null,21,"ion-grid",[["class","grid"],["id","footer"]],null,null,null,null,null)),a.Y(1,16384,null,0,o.a,[],null,null),(l()(),a._21(-1,null,["\n  "])),(l()(),a.Z(3,0,null,null,17,"ion-row",[["class","row"]],null,null,null,null,null)),a.Y(4,16384,null,0,i.a,[],null,null),(l()(),a._21(-1,null,["\n\n    "])),(l()(),a.Z(6,0,null,null,13,"ion-col",[["class","col"],["col-md-12",""]],null,null,null,null,null)),a.Y(7,16384,null,0,c.a,[],null,null),(l()(),a._21(-1,null,["\n      "])),(l()(),a.Z(9,0,null,null,9,"p",[],null,null,null,null,null)),(l()(),a._21(-1,null,["Copyright © 2018 by "])),(l()(),a.Z(11,0,null,null,2,"a",[["href","https://316.company"],["target","_blank"]],null,null,null,null,null)),(l()(),a.Z(12,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),a._21(-1,null,["316 Company"])),(l()(),a._21(-1,null,[". Powered by "])),(l()(),a.Z(15,0,null,null,2,"a",[["href","https://sheetbase.net"],["target","_blank"]],null,null,null,null,null)),(l()(),a.Z(16,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),a._21(-1,null,["Sheetbase"])),(l()(),a._21(-1,null,["; free, easy, fun way to build modern websites and apps."])),(l()(),a._21(-1,null,["\n    "])),(l()(),a._21(-1,null,["\n\n  "])),(l()(),a._21(-1,null,["\n"]))],null,null)}u.d(n,"a",function(){return e}),n.b=t;var a=u(1),o=u(163),i=u(164),c=u(162),e=(u(161),a.X({encapsulation:2,styles:[],data:{}}))},653:function(l,n,u){"use strict";u.d(n,"a",function(){return t});u(2),u(104);var t=function(){return function(){}}()},654:function(l,n,u){"use strict";u.d(n,"a",function(){return t});u(2),u(104),u(655);var t=function(){return function(){}}()},655:function(l,n,u){"use strict";u.d(n,"a",function(){return t});u(2),u(656);var t=function(){return function(){}}()},656:function(l,n,u){"use strict";u.d(n,"a",function(){return a});u(2);var t=u(343),a=function(){function l(){}return l.prototype.transform=function(l,n,u){return void 0===n&&(n=!0),void 0===u&&(u=null),t.a.o2a(l,n,u)},l}()},657:function(l,n,u){"use strict";function t(l){return o._23(0,[(l()(),o.Z(0,0,null,null,6,"ion-item",[["class","item item-block"]],null,[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==l.component.nav.go("category",{category:l.context.$implicit,categoryId:l.context.$implicit.$key})&&t}return t},i.b,i.a)),o.Y(1,1097728,null,3,c.a,[e.a,r.a,o.j,o.z,[2,s.a]],null,null),o._19(335544320,4,{contentLabel:0}),o._19(603979776,5,{_buttons:1}),o._19(603979776,6,{_icons:1}),o.Y(5,16384,null,0,_.a,[],null,null),(l()(),o._21(6,2,["",""]))],null,function(l,n){l(n,6,0,n.context.$implicit.title)})}function a(l){return o._23(0,[(l()(),o.Z(0,0,null,null,13,"ion-list",[["class","sidebar"]],null,null,null,null,null)),o.Y(1,16384,null,0,f.a,[r.a,o.j,o.z,p.a,g.l,d.a],null,null),(l()(),o._21(-1,null,["\n  "])),(l()(),o.Z(3,0,null,null,6,"ion-list-header",[["class","item"]],null,null,null,i.b,i.a)),o.Y(4,1097728,null,3,c.a,[e.a,r.a,o.j,o.z,[2,s.a]],null,null),o._19(335544320,1,{contentLabel:0}),o._19(603979776,2,{_buttons:1}),o._19(603979776,3,{_icons:1}),o.Y(8,16384,null,0,b.a,[r.a,o.z,o.j,[8,null]],null,null),(l()(),o._21(-1,2,["Categories"])),(l()(),o._21(-1,null,["\n  "])),(l()(),o.U(16777216,null,null,1,null,t)),o.Y(12,802816,null,0,m.h,[o.I,o.F,o.p],{ngForOf:[0,"ngForOf"]},null),(l()(),o._21(-1,null,["\n"]))],function(l,n){l(n,12,0,n.component.categories)},null)}u.d(n,"a",function(){return v}),n.b=a;var o=u(1),i=u(341),c=u(27),e=u(24),r=u(3),s=u(53),_=u(105),f=u(75),p=u(6),g=u(11),d=u(13),b=u(106),m=u(23),v=(u(161),u(73),o.X({encapsulation:2,styles:[],data:{}}))},658:function(l,n,u){"use strict";function t(l){return s._23(0,[(l()(),s.Z(0,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),s.Z(1,0,null,null,1,"ion-spinner",[],[[2,"spinner-paused",null]],null,null,_.b,_.a)),s.Y(2,114688,null,0,f.a,[p.a,s.j,s.z],null,null)],function(l,n){l(n,2,0)},function(l,n){l(n,1,0,s._11(n,2)._paused)})}function a(l){return s._23(0,[(l()(),s.Z(0,0,null,null,1,"a",[["href","javascript:void(0)"]],null,[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==l.component.nav.go("author",{authorId:l.context.$implicit.$key,author:l.context.$implicit})&&t}return t},null,null)),(l()(),s._21(1,null,["",""]))],null,function(l,n){l(n,1,0,n.context.$implicit.value)})}function o(l){return s._23(0,[(l()(),s.Z(0,0,null,null,0,"img",[],[[8,"src",4],[8,"alt",0]],null,null,null,null))],null,function(l,n){l(n,0,0,n.parent.context.$implicit.image||"https://dummyimage.com/1200x700/cccccc/ffffff",n.parent.context.$implicit.title)})}function i(l){return s._23(0,[(l()(),s.Z(0,0,null,null,1,"a",[["href","javascript:void(0)"]],null,[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==l.component.nav.go("category",{categoryId:l.context.$implicit.$key,category:l.context.$implicit})&&t}return t},null,null)),(l()(),s._21(1,null,["",""]))],null,function(l,n){l(n,1,0,n.context.$implicit.value)})}function c(l){return s._23(0,[(l()(),s.Z(0,0,null,null,2,"button",[["color","dark"],["ion-button",""],["outline",""],["small",""]],null,[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==l.component.nav.go("tag",{tagId:l.context.$implicit.$key,tag:l.context.$implicit})&&t}return t},g.b,g.a)),s.Y(1,1097728,null,0,d.a,[[8,""],p.a,s.j,s.z],{color:[0,"color"],small:[1,"small"],outline:[2,"outline"]},null),(l()(),s._21(2,0,["",""]))],function(l,n){l(n,1,0,"dark","","")},function(l,n){l(n,2,0,n.context.$implicit.value)})}function e(l){return s._23(0,[(l()(),s.Z(0,0,null,null,40,"li",[["class","post"]],null,null,null,null,null)),(l()(),s._21(-1,null,["\n    "])),(l()(),s.Z(2,0,null,null,16,"div",[["class","head"]],null,null,null,null,null)),(l()(),s._21(-1,null,["\n      "])),(l()(),s.Z(4,0,null,null,2,"h1",[],null,null,null,null,null)),(l()(),s.Z(5,0,null,null,1,"a",[["href","javascript:void(0)"]],null,[[null,"click"]],function(l,n,u){var t=!0,a=l.component;if("click"===n){t=!1!==(a.singular?a.return:a.nav.go("post",{post:l.context.$implicit,postId:l.context.$implicit.$key}))&&t}return t},null,null)),(l()(),s._21(6,null,["",""])),(l()(),s._21(-1,null,["\n      "])),(l()(),s.Z(8,0,null,null,5,"p",[],null,null,null,null,null)),(l()(),s._21(9,null,["Posted on "," by "])),(l()(),s.U(16777216,null,null,3,null,a)),s.Y(11,802816,null,0,b.h,[s.I,s.F,s.p],{ngForOf:[0,"ngForOf"]},null),s._15(12,{unknown:0}),s._16(13,1),(l()(),s._21(-1,null,["\n      "])),(l()(),s.Z(15,0,null,null,2,"a",[["href","javascript:void(0)"]],null,[[null,"click"]],function(l,n,u){var t=!0,a=l.component;if("click"===n){t=!1!==(a.singular?a.return:a.nav.go("post",{post:l.context.$implicit,postId:l.context.$implicit.$key}))&&t}return t},null,null)),(l()(),s.U(16777216,null,null,1,null,o)),s.Y(17,16384,null,0,b.i,[s.I,s.F],{ngIf:[0,"ngIf"]},null),(l()(),s._21(-1,null,["\n    "])),(l()(),s._21(-1,null,["\n    "])),(l()(),s.Z(20,0,null,null,0,"p",[["class","excerpt"]],[[8,"innerHTML",1]],null,null,null,null)),(l()(),s._21(-1,null,["\n    "])),(l()(),s.Z(22,0,null,null,0,"div",[["class","content"]],[[8,"innerHTML",1]],null,null,null,null)),(l()(),s._21(-1,null,["\n\n    "])),(l()(),s.Z(24,0,null,null,15,"div",[["class","foot"]],null,null,null,null,null)),(l()(),s._21(-1,null,["\n      "])),(l()(),s.Z(26,0,null,null,5,"div",[["class","categories"]],null,null,null,null,null)),(l()(),s._21(-1,null,["\n        "])),(l()(),s.U(16777216,null,null,2,null,i)),s.Y(29,802816,null,0,b.h,[s.I,s.F,s.p],{ngForOf:[0,"ngForOf"]},null),s._16(30,1),(l()(),s._21(-1,null,["\n      "])),(l()(),s._21(-1,null,["\n      "])),(l()(),s.Z(33,0,null,null,5,"div",[["class","tags"]],null,null,null,null,null)),(l()(),s._21(-1,null,["\n        "])),(l()(),s.U(16777216,null,null,2,null,c)),s.Y(36,802816,null,0,b.h,[s.I,s.F,s.p],{ngForOf:[0,"ngForOf"]},null),s._16(37,1),(l()(),s._21(-1,null,["\n      "])),(l()(),s._21(-1,null,["\n    "])),(l()(),s._21(-1,null,["\n  "]))],function(l,n){l(n,11,0,s._22(n,11,0,l(n,13,0,s._11(n.parent,0),n.context.$implicit.author||l(n,12,0,"Unknown"))));l(n,17,0,n.context.$implicit.image);l(n,29,0,s._22(n,29,0,l(n,30,0,s._11(n.parent,0),n.context.$implicit.categories)));l(n,36,0,s._22(n,36,0,l(n,37,0,s._11(n.parent,0),n.context.$implicit.tags)))},function(l,n){l(n,6,0,n.context.$implicit.title);l(n,9,0,n.context.$implicit.date);l(n,20,0,n.context.$implicit.description);l(n,22,0,n.context.$implicit.content)})}function r(l){return s._23(0,[s._14(0,m.a,[]),(l()(),s.Z(1,0,null,null,7,"ul",[["class","posts"]],null,null,null,null,null)),(l()(),s._21(-1,null,["\n  "])),(l()(),s.U(16777216,null,null,1,null,t)),s.Y(4,16384,null,0,b.i,[s.I,s.F],{ngIf:[0,"ngIf"]},null),(l()(),s._21(-1,null,["\n  "])),(l()(),s.U(16777216,null,null,1,null,e)),s.Y(7,802816,null,0,b.h,[s.I,s.F,s.p],{ngForOf:[0,"ngForOf"]},null),(l()(),s._21(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,4,0,!u.posts);l(n,7,0,u.posts)},null)}u.d(n,"a",function(){return v}),n.b=r;var s=u(1),_=u(342),f=u(76),p=u(3),g=u(51),d=u(28),b=u(23),m=u(656),v=(u(161),s.X({encapsulation:2,styles:[],data:{}}))}});