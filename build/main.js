webpackJsonp([7],{159:function(e,t,a){"use strict";a.d(t,"a",function(){return n});a(2);var o=a(330),n=function(){function e(e,t){this.ngZone=e,this.http=t}return e.prototype.getSheet=function(e,t,a,o){var n=this;return void 0===t&&(t=null),void 0===a&&(a=null),void 0===o&&(o=!0),new Promise(function(r,i){if(e.range.indexOf(",")<0)n.get(e.id,e.range).then(function(e){return n.ngZone.run(function(){r(n.modifyValue(e,t,a,o))})}).catch(i);else{var u="";(e.range.split(",").map(function(e){return e.trim()})||[]).forEach(function(e){u+="&ranges="+e}),n.batchGet(e.id,u).then(function(e){return n.ngZone.run(function(){r(n.modifyValue(e,t,a,o))})}).catch(i)}})},e.prototype.get=function(e,t){var a=this;return new Promise(function(n,r){a.http.get("https://sheets.googleapis.com/v4/spreadsheets/"+e+"/values/"+t+"?key="+o.a.apiKey).subscribe(function(e){n(a.transformValue(e.values))},r)})},e.prototype.batchGet=function(e,t){var a=this;return new Promise(function(n,r){a.http.get("https://sheets.googleapis.com/v4/spreadsheets/"+e+"/values:batchGet?"+t+"&key="+o.a.apiKey).subscribe(function(e){n(a.transformBatchValue(e.valueRanges))},r)})},e.prototype.transformValue=function(e){var t=[],a=e[0]||[];return(e.slice(1,e.length)||[]).forEach(function(e){for(var o={},n=0;n<e.length;n++)if(e[n]){o[a[n]]=e[n]}t.push(o)}),t},e.prototype.transformBatchValue=function(e){var t=this,a=this.transformValue(e[0].values||[]),o=[];(e.slice(1,e.length)||[]).forEach(function(e){o.push(t.transformValue(e.values||[]))});var n=[];return(a||[]).forEach(function(e){(o||[]).forEach(function(t){(t||[]).forEach(function(t){e.key===t.key&&(e=Object.assign(e,t))})}),n.push(e)}),n},e.prototype.modifyValue=function(e,t,a,n){var r=function(e,t){return void 0===t&&(t={}),e};t&&o.a.modifiers&&o.a.modifiers[t]&&(r=o.a.modifiers[t]);var i=null,u=null;return(e||[]).forEach(function(e){for(var t in e){try{e[t]=JSON.parse(e[t])}catch(e){}isNaN(e[t])||Number(e[t])%1!=0||(e[t]=parseInt(e[t])),isNaN(e[t])||Number(e[t])%1==0||(e[t]=parseFloat(e[t])),("string"==typeof e[t]||e[t]instanceof String)&&(e[t]="true"===e[t].toLowerCase()||"false"!==e[t].toLowerCase()&&e[t]),""!==e[t]&&null!==e[t]&&void 0!==e[t]||delete e[t]}e=r(e,{}),(i=i||{})[a?e[a]:e.key||e.slug||""+e.id]=e,(u=u||[]).push(e)}),n?i:u},e}()},161:function(e,t,a){"use strict";a(2),a(1),a(104);var o={home:"HomePage",about:"AboutPage",contact:"ContactPage",category:"CategoryPage",tag:"TagPage",author:"AuthorPage",post:"PostPage"};a.d(t,"a",function(){return n});var n=function(){function e(e,t){this.app=e,this.modalCtrl=t,this.MODAL_PAGES={}}return e.prototype.go=function(e,t,a,o){return void 0===e&&(e="home"),void 0===t&&(t={}),void 0===a&&(a=null),void 0===o&&(o={animate:!0,direction:"forward"}),this.root(e,t,a,o)},e.prototype.root=function(e,t,a,n){void 0===e&&(e="home"),void 0===t&&(t={}),void 0===a&&(a=null),void 0===n&&(n={animate:!0,direction:"forward"});var r=this.app.getRootNavById("n4");a&&(r=a);return r.setRoot(o[e]||o.home,t,n)},e.prototype.push=function(e,t,a,n){void 0===e&&(e="home"),void 0===t&&(t={}),void 0===a&&(a=null),void 0===n&&(n={animate:!0,direction:"forward"});var r=this.app.getRootNavById("n4");a&&(r=a);return r.push(o[e]||o.home,t,n)},e.prototype.pop=function(e){void 0===e&&(e=null);var t=this.app.getRootNavById("n4");return e&&(t=e),t.canGoBack()?t.pop():t.setRoot(o.home,{},{animate:!0,direction:"back"})},e.prototype.up=function(e,t){void 0===e&&(e="home"),void 0===t&&(t={});return this.modalCtrl.create(this.MODAL_PAGES[e],t).present()},e.prototype.down=function(e){if(e)return e.dismiss()},e.prototype.scroll=function(e,t,a){return void 0===t&&(t=0),void 0===a&&(a=1e3),e.scrollTo(0,t||0,a)},e.prototype.url=function(e,t){return void 0===t&&(t=!1),t?window.open(e,"_blank"):window.location.href=e},e}()},165:function(e,t,a){"use strict";a.d(t,"a",function(){return o});a(2);var o=function(){function e(){}return e.prototype.set=function(e){e.title&&(document.title=e.title),e.favicon&&this.changeFavicon(e.favicon)},e.prototype.changeFavicon=function(e){document.head||(document.head=document.getElementsByTagName("head")[0]);var t=document.createElement("link"),a=document.getElementById("favicon");t.id="favicon",t.rel="shortcut icon",t.href=e,a&&document.head.removeChild(a),document.head.appendChild(t)},e}()},184:function(e,t){function a(e){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+e+"'.")})}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=184},216:function(e,t,a){function o(e){var t=n[e];return t?a.e(t[1]).then(function(){return a(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var n={"../pages/about/about.module.ngfactory":[637,6],"../pages/author/author.module.ngfactory":[638,4],"../pages/category/category.module.ngfactory":[639,2],"../pages/contact/contact.module.ngfactory":[640,5],"../pages/home/home.module.ngfactory":[641,1],"../pages/post/post.module.ngfactory":[642,3],"../pages/tag/tag.module.ngfactory":[643,0]};o.keys=function(){return Object.keys(n)},o.id=216,e.exports=o},330:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var o={apiKey:"AIzaSyC6Rpk_JAZLNc9cp5GxkixfazHdMoYZ8VU",database:"1BkCUWPCVWr90xfOTy5bDCDDbw3fD83XNBWCna3J98JY",backend:"",modifiers:{posts:function(e){return e.greeting="Hello, ["+(e.key||e.slug||e.id)+"]! :)",e}}}},343:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var o=a(634),n=(a.n(o),{noMark:function(e){return void 0===e&&(e=""),e=e.toLowerCase(),e=e.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"),e=e.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"),e=e.replace(/ì|í|ị|ỉ|ĩ/g,"i"),e=e.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"),e=e.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"),e=e.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"),e=e.replace(/đ/g,"d")},noDash:function(e){return void 0===e&&(e=""),e=e.replace(/\-|\_/g,"")},dashToSpace:function(e){return void 0===e&&(e=""),e=e.replace(/\-|\_/g," ")},o2a:function(e,t,a,o){void 0===t&&(t=!1),void 0===a&&(a=null),void 0===o&&(o=!1),t&&void 0!==e&&(e=JSON.parse(JSON.stringify(e)));var n=[];for(var r in e)"object"==typeof e[r]?e[r].$key=r:e[r]={$key:r,value:e[r]},n.push(e[r]);return a&&n.splice(a,n.length),o&&n.length<1&&(n=null),n},sort:function(e,t,a){return void 0===t&&(t="$key"),void 0===a&&(a="desc"),Object(o.orderBy)(e,[t],[a])}})},344:function(e,t,a){"use strict";function o(e){return r._23(0,[(e()(),r.Z(0,0,null,null,2,"ion-nav",[],null,null,null,w.b,w.a)),r._17(6144,null,T.a,null,[O.a]),r.Y(2,4374528,null,0,O.a,[[2,C.a],[2,N.a],F.a,E.a,j.a,r.j,r.u,r.z,r.i,B.l,D.a,[2,R.a],A.a,r.k],{root:[0,"root"]},null),(e()(),r._21(-1,null,["\n"]))],function(e,t){e(t,2,0,t.component.rootPage)},null)}Object.defineProperty(t,"__esModule",{value:!0});var n=a(43),r=a(1),i=(a(2),a(104),a(160)),u=a(73),l=function(){return function(e){this.sheetbase=e,this.rootPage="HomePage",this.sheetbase.init()}}(),c=a(161),s=a(165),f=a(159),d=function(){return function(){}}(),p=a(58),g=a(332),h=a(333),m=a(334),y=a(335),v=a(336),_=a(337),b=a(338),k=a(339),P=a(340),w=a(636),T=a(46),O=a(64),C=a(7),N=a(30),F=a(12),E=a(3),j=a(6),B=a(11),D=a(40),R=a(22),A=a(13),M=r.X({encapsulation:2,styles:[],data:{}}),S=r.V("ng-component",l,function(e){return r._23(0,[(e()(),r.Z(0,0,null,null,1,"ng-component",[],null,null,null,o,M)),r.Y(1,49152,null,0,l,[u.a],null,null)],null,null)},{},{},[]),x=a(23),H=a(125),V=a(26),q=a(114),I=a(116),G=a(124),L=a(24),Z=a(42),K=a(47),J=a(122),$=a(169),X=a(60),Y=a(48),W=a(129),z=a(86),U=a(133),Q=a(127),ee=a(141),te=a(331),ae=a(126),oe=a(38),ne=a(123),re=a(128),ie=r.W(d,[p.b],function(e){return r._7([r._8(512,r.i,r.S,[[8,[g.a,h.a,m.a,y.a,v.a,_.a,b.a,k.a,P.a,S]],[3,r.i],r.s]),r._8(5120,r.r,r._18,[[3,r.r]]),r._8(4608,x.k,x.j,[r.r,[2,x.s]]),r._8(5120,r.b,r._1,[]),r._8(5120,r.p,r._9,[]),r._8(5120,r.q,r._12,[]),r._8(4608,n.c,n.q,[x.c]),r._8(6144,r.D,null,[n.c]),r._8(4608,n.f,H.a,[]),r._8(5120,n.d,function(e,t,a,o,r){return[new n.k(e,t),new n.o(a),new n.n(o,r)]},[x.c,r.u,x.c,x.c,n.f]),r._8(4608,n.e,n.e,[n.d,r.u]),r._8(135680,n.m,n.m,[x.c]),r._8(4608,n.l,n.l,[n.e,n.m]),r._8(6144,r.B,null,[n.l]),r._8(6144,n.p,null,[n.m]),r._8(4608,r.G,r.G,[r.u]),r._8(4608,n.h,n.h,[x.c]),r._8(4608,n.i,n.i,[x.c]),r._8(4608,i.h,i.n,[x.c,r.w,i.l]),r._8(4608,i.o,i.o,[i.h,i.m]),r._8(5120,i.a,function(e){return[e]},[i.o]),r._8(4608,i.k,i.k,[]),r._8(6144,i.i,null,[i.k]),r._8(4608,i.g,i.g,[i.i]),r._8(6144,i.b,null,[i.g]),r._8(4608,i.f,i.j,[i.b,r.o]),r._8(4608,i.c,i.c,[i.f]),r._8(4608,V.k,V.k,[]),r._8(4608,V.c,V.c,[]),r._8(4608,q.a,q.a,[F.a,E.a]),r._8(4608,I.a,I.a,[F.a,E.a]),r._8(4608,G.a,G.a,[]),r._8(4608,L.a,L.a,[]),r._8(4608,Z.a,Z.a,[j.a]),r._8(4608,K.a,K.a,[E.a,j.a,r.u,A.a]),r._8(4608,J.a,J.a,[F.a,E.a]),r._8(5120,x.f,$.c,[x.q,[2,x.a],E.a]),r._8(4608,x.e,x.e,[x.f]),r._8(5120,X.b,X.d,[F.a,X.a]),r._8(5120,R.a,R.b,[F.a,X.b,x.e,Y.b,r.i]),r._8(4608,W.a,W.a,[F.a,E.a,R.a]),r._8(4608,z.a,z.a,[F.a,E.a]),r._8(4608,U.a,U.a,[F.a,E.a,R.a]),r._8(4608,Q.a,Q.a,[E.a,j.a,A.a,F.a,B.l]),r._8(4608,ee.a,ee.a,[F.a,E.a]),r._8(4608,D.a,D.a,[j.a,E.a]),r._8(4608,c.a,c.a,[F.a,W.a]),r._8(4608,s.a,s.a,[]),r._8(4608,f.a,f.a,[r.u,i.c]),r._8(4608,u.a,u.a,[G.a,f.a]),r._8(512,x.b,x.b,[]),r._8(512,r.k,te.a,[]),r._8(256,E.b,{backButtonText:"",mode:"md",pageTransition:"wp-transition"},[]),r._8(1024,ae.a,ae.b,[]),r._8(1024,j.a,j.b,[n.b,ae.a,r.u]),r._8(1024,E.a,E.c,[E.b,j.a]),r._8(512,A.a,A.a,[j.a]),r._8(512,oe.a,oe.a,[]),r._8(512,F.a,F.a,[E.a,j.a,[2,oe.a]]),r._8(512,B.l,B.l,[F.a]),r._8(256,X.a,{links:[{loadChildren:"../pages/about/about.module.ngfactory#AboutPageModuleNgFactory",name:"AboutPage",segment:"about",priority:"low",defaultHistory:[]},{loadChildren:"../pages/author/author.module.ngfactory#AuthorPageModuleNgFactory",name:"AuthorPage",segment:"author/:authorId",priority:"low",defaultHistory:[]},{loadChildren:"../pages/category/category.module.ngfactory#CategoryPageModuleNgFactory",name:"CategoryPage",segment:"category/:categoryId",priority:"low",defaultHistory:[]},{loadChildren:"../pages/contact/contact.module.ngfactory#ContactPageModuleNgFactory",name:"ContactPage",segment:"contact",priority:"low",defaultHistory:[]},{loadChildren:"../pages/home/home.module.ngfactory#HomePageModuleNgFactory",name:"HomePage",segment:"blog",priority:"low",defaultHistory:[]},{loadChildren:"../pages/post/post.module.ngfactory#PostPageModuleNgFactory",name:"PostPage",segment:"post/:postId",priority:"low",defaultHistory:[]},{loadChildren:"../pages/tag/tag.module.ngfactory#TagPageModuleNgFactory",name:"TagPage",segment:"tag/:tagId",priority:"low",defaultHistory:[]}]},[]),r._8(512,r.h,r.h,[]),r._8(512,ne.a,ne.a,[r.h]),r._8(1024,Y.b,Y.c,[ne.a,r.o]),r._8(1024,r.c,function(e,t,a,o,r,i,u,l,c,s,f,d,p){return[n.s(e),re.a(t),G.b(a,o),Q.b(r,i,u,l,c),Y.d(s,f,d,p)]},[[2,r.t],E.a,j.a,A.a,E.a,j.a,A.a,F.a,B.l,E.a,X.a,Y.b,r.u]),r._8(512,r.d,r.d,[[2,r.c]]),r._8(131584,r.f,r.f,[r.u,r.T,r.o,r.k,r.i,r.d]),r._8(512,r.e,r.e,[r.f]),r._8(512,n.a,n.a,[[3,n.a]]),r._8(512,i.e,i.e,[]),r._8(512,i.d,i.d,[]),r._8(512,V.j,V.j,[]),r._8(512,V.d,V.d,[]),r._8(512,V.i,V.i,[]),r._8(512,$.a,$.a,[]),r._8(512,d,d,[]),r._8(256,i.l,"XSRF-TOKEN",[]),r._8(256,i.m,"X-XSRF-TOKEN",[]),r._8(256,p.a,l,[]),r._8(256,x.a,"/",[])])});Object(r.M)(),Object(n.j)().bootstrapModuleFactory(ie)},73:function(e,t,a){"use strict";a.d(t,"a",function(){return i});a(2),a(104);var o=a(349),n=(a.n(o),a(159),a(330)),r=a(343),i=function(){function e(e,t){this.events=e,this.spreadsheet=t,this.tables=[{name:"categories"},{name:"tags"},{name:"authors"},{name:"posts"},{name:"pages"}]}return e.prototype.dbID=function(){return n.a.database},e.prototype.dbTables=function(){return this.tables||[]},e.prototype.init=function(){var e=this;this.spreadsheet.getSheet({id:n.a.database,range:"__tables__!A1:C"},null,"name",!1).then(function(t){e.tables=t,e.getRemoteData()}).catch(function(t){e.getRemoteData()})},e.prototype.get=function(e,t,a,n){var i=this;return void 0===t&&(t=null),void 0===a&&(a=null),void 0===n&&(n=!1),new o.Observable(function(o){i.database=i.database||{};var u=i.database[e]||{};if(!u||Object.keys(u).length<1){var l=null;(i.tables||[]).forEach(function(t){t.name===e&&(l=t)}),l&&i.getRemoteData([l])}if(t)o.next(Object.assign({$key:t},u[t]||{})),n?o.complete():i.events.subscribe("appData:"+e,function(e){o.next(Object.assign({$key:t},e[t]||{}))});else{var c=[];for(var s in u)c.push(Object.assign({$key:s},u[s]));o.next(i.filterResult(c,a)),n?o.complete():i.events.subscribe("appData:"+e,function(e){delete e.$key,o.next(i.filterResult(r.a.o2a(e,!0),a))})}})},e.prototype.getRemoteData=function(e){var t=this;void 0===e&&(e=null),(e||this.tables||[]).forEach(function(a){(e||a.autoload)&&((t.dataOnTheFly||[]).indexOf(a.name)>-1||(console.info("GO FLY -> "+a.name+"[]"),t.dataOnTheFly=t.dataOnTheFly||[],t.dataOnTheFly.push(a.name),setTimeout(function(){t.spreadsheet.getSheet({id:n.a.database,range:a.name+"!"+(a.range||"A1:ZZ")},a.name,a.key).then(function(e){t.database=t.database||{},t.database[a.name]=e,t.events.publish("appData:"+a.name,e),t.dataOnTheFly.splice(t.dataOnTheFly.indexOf("table.name"),1)}).catch(function(e){})},100)))})},e.prototype.filterResult=function(e,t){var a=[];if((t=t||{}).orderByKey&&(t.equalTo||!t.equalTo&&"boolean"==typeof t.equalTo)){var o=t.orderByKey.split("/"),n=o[0];o=o.slice(1,o.length),(e||[]).forEach(function(e){var r=e[n]||{};(o||[]).forEach(function(e){if(!r[e])return r=null;r=r[e]}),("boolean"==typeof t.equalTo&&"boolean"==typeof r&&r===t.equalTo||"!null"===t.equalTo&&r||"boolean"!=typeof t.equalTo&&"boolean"!=typeof r&&r===t.equalTo)&&a.push(e)})}else a=e;return a=r.a.sort(a,t.orderByKey||"id",t.order||"asc"),t.limitToFirst&&(a=a.slice(t.offset||0,t.limitToFirst+(t.offset||0))),t.limitToLast&&(a=a.slice(a.length-t.limitToLast-(t.offset||0),a.length-(t.offset||0))),a},e}()}},[344]);