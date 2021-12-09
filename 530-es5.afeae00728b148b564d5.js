!function(){"use strict";function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function t(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}(self.webpackChunkextensions_srcs=self.webpackChunkextensions_srcs||[]).push([[530],{64530:function(n,o,i){i.r(o),i.d(o,{ComponentSidenavModule:function(){return S}});var c=i(63423),a=i(60798),r=i(88002),s=i(37716),p=i(65072),d=i(94935),m=i(77746),l=i(38583),g=function(e){return[e]};function u(e,n){if(1&e){var t=s.EpF();s.TgZ(0,"a",5,6),s.NdJ("click",function(){return s.CHM(t),s.oxw(2).navChange.emit()}),s._uU(2),s.qZA()}if(2&e){var o=n.$implicit,i=s.MAs(1);s.Q6J("routerLink",s.VKq(3,g,"/components/"+o.id)),s.uIk("tabindex",i.isActive?0:-1),s.xp6(2),s.hij(" ",o.name," ")}}function v(e,n){if(1&e&&(s.ynx(0),s.TgZ(1,"div",3),s._uU(2),s.qZA(),s.YNc(3,u,3,5,"a",4),s.BQk()),2&e){var t=n.$implicit;s.xp6(2),s.Oqu(t.title),s.xp6(1),s.Q6J("ngForOf",t.children)}}var f,h=[{title:"Basic",children:[{id:"alert",name:"Alert",summary:"Provide contextual feedback messages for typical user actions."},{id:"button",name:"Button",summary:"Provide a button loading directive for Material."},{id:"checkbox-group",name:"Checkbox Group",summary:"Allows the user to create a set of checkbox with select all."},{id:"colorpicker",name:"Color Picker",summary:"An extra input to select color enhanced by the ngx-color."},{id:"grid",name:"Data Grid",summary:"A powerful data grid for Material table."},{id:"datetimepicker",name:"Datetimepicker",summary:"Allows the user to choose both dates and times."},{id:"dialog",name:"Dialog",summary:"A configurable modal to show alert and confirmation."},{id:"loader",name:"Loader",summary:"An easier loading component wrap with progress bar and spinner."},{id:"popover",name:"Popover",summary:"A floating panel containing html content."},{id:"progress",name:"Progress",summary:"A linear progress indicator with Bootstrap style."},{id:"select",name:"Select",summary:"A ng-select wrapper to be used in the form field."},{id:"slider",name:"Slider",summary:"Provide a range slider for Material"},{id:"split",name:"Split Pane",summary:"A component for creating multi-view layouts."},{id:"tooltip",name:"Tooltip",summary:"The tooltip support rich content."}]},{title:"Experimental",children:[{id:"form-group",name:"Form Group",summary:"Material form field with Fluent UI style."},{id:"text3d",name:"Text 3D",summary:"Experimental component for 3d text."}]}],x=((f=function(){function n(){e(this,n),this.navChange=new s.vpe,this.menus=h}return t(n,[{key:"ngOnInit",value:function(){}}]),n}()).\u0275fac=function(e){return new(e||f)},f.\u0275cmp=s.Xpm({type:f,selectors:[["app-component-nav"]],outputs:{navChange:"navChange"},decls:4,vars:1,consts:[[1,"docs-component-viewer-nav"],[1,"docs-component-viewer-nav-content"],[4,"ngFor","ngForOf"],[1,"nav-item-title"],["mat-list-item","","routerLinkActive","docs-component-viewer-sidenav-item-selected",3,"routerLink","click",4,"ngFor","ngForOf"],["mat-list-item","","routerLinkActive","docs-component-viewer-sidenav-item-selected",3,"routerLink","click"],["routerLinkActiveInstance","routerLinkActive"]],template:function(e,n){1&e&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"mat-nav-list"),s.YNc(3,v,4,2,"ng-container",2),s.qZA(),s.qZA(),s.qZA()),2&e&&(s.xp6(3),s.Q6J("ngForOf",n.menus))},directives:[m.Hk,l.sg,m.Tg,c.yS,c.Od],styles:[".docs-component-viewer-nav[_ngcontent-%COMP%]{position:sticky;top:0}.docs-component-viewer-nav-content[_ngcontent-%COMP%]{width:240px;height:calc(100vh - 56px);overflow:auto}.docs-component-viewer-nav-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none;margin:0 0 5px;padding:0;overflow:hidden}.docs-component-viewer-nav-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:13px;line-height:16px;margin:0;padding:5px 15px 5px 20px}.docs-component-viewer-nav-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;text-decoration:none}.nav-item-title[_ngcontent-%COMP%]{padding:0 16px;margin:16px 0 8px;font-size:80%}"]}),f),y=i(41710),w=i(51095),_=i(88030),Z=i(76627),O=function(){var n=function(){function n(t){e(this,n),this._componentPageTitle=t,this.toggleSidenav=new s.vpe}return t(n,[{key:"getTitle",value:function(){return this._componentPageTitle.title}}]),n}();return n.\u0275fac=function(e){return new(e||n)(s.Y36(y._))},n.\u0275cmp=s.Xpm({type:n,selectors:[["component-page-header"]],outputs:{toggleSidenav:"toggleSidenav"},decls:6,vars:1,consts:[[1,"component-page-header"],["mat-button","","fxHide.gt-sm","",1,"sidenav-toggle",3,"click"]],template:function(e,n){1&e&&(s.TgZ(0,"header",0),s.TgZ(1,"button",1),s.NdJ("click",function(){return n.toggleSidenav.emit()}),s.TgZ(2,"mat-icon"),s._uU(3,"menu"),s.qZA(),s.qZA(),s.TgZ(4,"h1"),s._uU(5),s.qZA(),s.qZA()),2&e&&(s.xp6(5),s.hij("",n.getTitle()," "))},directives:[w.lW,_.b8,Z.Hw],styles:[".component-page-header[_ngcontent-%COMP%]{display:flex;align-items:center;padding-left:24px}@media (max-width: 959px){.component-page-header[_ngcontent-%COMP%]{padding-left:0}}.component-page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:300;padding:28px 8px;margin:0;font-size:20px;color:#fff;outline:none}@media (max-width: 959px){.component-page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{padding:24px 8px;font-size:20px}}.sidenav-toggle[_ngcontent-%COMP%]{padding:0;margin:8px;min-width:64px}.sidenav-toggle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:30px;height:64px;width:64px;line-height:64px;color:#fff}"]}),n}();function b(e,n){1&e&&s._UZ(0,"app-component-nav")}var A=function(){var n=function(){function n(t,o){var i=this;e(this,n),this._router=t,this.isExtraScreenSmall=o.observe("(max-width: 720px)").pipe((0,r.U)(function(e){return e.matches})),this.isScreenSmall=o.observe("(max-width: 959px)").pipe((0,r.U)(function(e){return e.matches})),this._router.events.subscribe(function(e){if(e instanceof c.m2){var n=i._router.parseUrl(i._router.url);n.fragment&&setTimeout(function(){var e=document.querySelector("#"+n.fragment);e&&e.scrollIntoView(!0)})}})}return t(n,[{key:"toggleSidenav",value:function(e){return e.toggle()}}]),n}();return n.\u0275fac=function(e){return new(e||n)(s.Y36(c.F0),s.Y36(p.Yg))},n.\u0275cmp=s.Xpm({type:n,selectors:[["app-component-sidenav"]],decls:13,vars:11,consts:[[1,"docs-component-viewer-sidenav-container"],["role","navigation",1,"docs-component-viewer-sidenav",3,"opened","mode","fixedInViewport","fixedTopGap"],["sidenav",""],[1,"docs-component-sidenav-content"],[3,"toggleSidenav"],[1,"docs-component-sidenav-inner-content"],[1,"docs-component-sidenav-body-content"],[4,"ngIf"]],template:function(e,n){if(1&e){var t=s.EpF();s.TgZ(0,"mat-sidenav-container",0),s.TgZ(1,"mat-sidenav",1,2),s.ALo(3,"async"),s.ALo(4,"async"),s._UZ(5,"app-component-nav"),s.qZA(),s.TgZ(6,"div",3),s.TgZ(7,"component-page-header",4),s.NdJ("toggleSidenav",function(){s.CHM(t);var e=s.MAs(2);return n.toggleSidenav(e)}),s.qZA(),s.TgZ(8,"div",5),s.TgZ(9,"main",6),s.YNc(10,b,1,0,"app-component-nav",7),s.ALo(11,"async"),s._UZ(12,"router-outlet"),s.qZA(),s.qZA(),s.qZA(),s.qZA()}2&e&&(s.xp6(1),s.Q6J("opened",!1)("mode",s.lcZ(3,5,n.isScreenSmall)?"over":"side")("fixedInViewport",s.lcZ(4,7,n.isScreenSmall))("fixedTopGap",56),s.xp6(9),s.Q6J("ngIf",!1===s.lcZ(11,9,n.isScreenSmall)))},directives:[d.TM,d.JX,x,O,l.O5,c.lC],pipes:[l.Ov],styles:["app-component-sidenav{display:flex;flex-direction:column;flex:1;overflow:auto;-webkit-overflow-scrolling:touch}.docs-component-viewer-sidenav-container{flex:1;box-sizing:border-box}.docs-component-viewer-sidenav{overflow:auto}.mat-drawer::-webkit-scrollbar{height:4px;width:4px}.docs-component-sidenav-content{display:flex;flex-direction:column;min-height:100%}.docs-component-sidenav-inner-content{display:flex;flex-direction:column;flex:1}.docs-component-sidenav-inner-content router-outlet+*{flex-grow:1;overflow:auto}.docs-component-sidenav-body-content{display:flex;flex:1 1 auto}.mat-list-base{padding-top:0}.docs-component-viewer-nav-content .mat-nav-list .mat-list-item .mat-list-item-content{padding-left:25px}@media (max-width: 959px){.docs-component-viewer-sidenav-container .docs-component-viewer-sidenav{z-index:4}.docs-component-viewer-nav{position:relative;top:0}.docs-component-viewer-nav .docs-component-viewer-nav-content{box-sizing:border-box;margin:0;max-height:none;max-height:initial}}@media (max-width: 720px){.docs-component-viewer-sidenav-container{flex:1 0 auto}.docs-component-sidenav-body-content{flex-direction:column}}\n"],encapsulation:2}),n}(),C=i(90739),M=i(72084),T=function(e){return[e]};function P(e,n){if(1&e&&(s.TgZ(0,"a",7),s.TgZ(1,"div",8),s.TgZ(2,"div",9),s._uU(3),s.qZA(),s.TgZ(4,"div",10),s._uU(5),s.qZA(),s.qZA(),s.qZA()),2&e){var t=n.$implicit;s.Q6J("routerLink",s.VKq(3,T,"/components/"+t.id)),s.xp6(3),s.Oqu(t.name),s.xp6(2),s.Oqu(t.summary)}}function k(e,n){if(1&e&&(s.TgZ(0,"div",3),s.TgZ(1,"h2",4),s._uU(2),s.qZA(),s.TgZ(3,"div",5),s.YNc(4,P,6,5,"a",6),s.qZA(),s.qZA()),2&e){var t=n.$implicit;s.xp6(2),s.Oqu(t.title),s.xp6(2),s.Q6J("ngForOf",t.children)}}var q=[{path:"",component:A,children:[{path:"",redirectTo:"categories",pathMatch:"full"},{path:"categories",children:[{path:"",component:function(){var n=function(){function n(t,o){e(this,n),this._componentPageTitle=t,this._route=o,this.list=h}return t(n,[{key:"ngOnInit",value:function(){var e=this;this.params=(0,C.aj)(this._route.pathFromRoot.map(function(e){return e.params}),Object.assign),this.routeParamSubscription=this.params.subscribe(function(n){e._componentPageTitle.title="components"})}},{key:"ngOnDestroy",value:function(){}}]),n}();return n.\u0275fac=function(e){return new(e||n)(s.Y36(y._),s.Y36(c.gz))},n.\u0275cmp=s.Xpm({type:n,selectors:[["app-component-category-list"]],decls:3,vars:2,consts:[["id","category-summary","focusOnNavigation","",1,"docs-component-category-list-summary"],[3,"innerHTML"],["class","docs-component-category-section",4,"ngFor","ngForOf"],[1,"docs-component-category-section"],[1,"docs-component-category-section-title"],[1,"docs-component-category-list"],["class","docs-component-category-list-item",3,"routerLink",4,"ngFor","ngForOf"],[1,"docs-component-category-list-item",3,"routerLink"],[1,"docs-component-category-list-card"],[1,"docs-component-category-list-card-title"],[1,"docs-component-category-list-card-summary"]],template:function(e,n){1&e&&(s.TgZ(0,"div",0),s._UZ(1,"div",1),s.qZA(),s.YNc(2,k,5,2,"div",2)),2&e&&(s.xp6(1),s.Q6J("innerHTML",n._categoryListSummary,s.oJD),s.xp6(1),s.Q6J("ngForOf",n.list))},directives:[M.y,l.sg,c.yS],styles:[".docs-component-category-section-title[_ngcontent-%COMP%]{margin-bottom:0;font-size:24px;font-weight:500;text-align:center}.docs-component-category-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;padding:20px;justify-content:center}.docs-component-category-list-item[_ngcontent-%COMP%]{display:inline-flex;margin:20px;vertical-align:top;width:280px}.docs-component-category-list-item[_ngcontent-%COMP%], .docs-component-category-list-item[_ngcontent-%COMP%]:active, .docs-component-category-list-item[_ngcontent-%COMP%]:hover, .docs-component-category-list-item[_ngcontent-%COMP%]:focus{text-decoration:none}.docs-component-category-list-card[_ngcontent-%COMP%]{width:100%}.docs-component-category-list-card-title[_ngcontent-%COMP%]{align-items:center;display:flex;padding:15px;font-size:20px;font-weight:500}.docs-component-category-list-card-summary[_ngcontent-%COMP%]{padding:0 15px 15px;font-size:15px}"]}),n}()}]},{path:"",loadChildren:function(){return i.e(528).then(i.bind(i,32528)).then(function(e){return e.ComponentsModule})}},{path:"**",redirectTo:"categories"}]}],S=function(){var n=function n(){e(this,n)};return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[[a.m8,c.Bz.forChild(q)]]}),n}()}}])}();