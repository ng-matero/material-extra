!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}(self.webpackChunkextensions_srcs=self.webpackChunkextensions_srcs||[]).push([[592],{41710:function(e,i,r){"use strict";r.d(i,{_:function(){return a}});var s=r(37716),o=r(39075),a=function(){var e=function(){function e(n){t(this,e),this.bodyTitle=n,this._title="",this._originalTitle="Angular Material Extensions library"}return n(e,[{key:"title",get:function(){return this._title},set:function(t){this._title=t&&this.capitalizeTitle(t),this.bodyTitle.setTitle(t=""!==t?"".concat(this._title," | Angular Material Extensions"):this._originalTitle)}},{key:"capitalizeTitle",value:function(t){return t.split("-").join(" ").replace(/\b\w+\b/g,function(t){return t.substring(0,1).toUpperCase()+t.substring(1)})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(s.LFG(o.Dx))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},76394:function(e,i,r){"use strict";r.d(i,{S:function(){return f}});var s=r(37716),o=r(38583);function a(t,e){if(1&t){var n=s.EpF();s.TgZ(0,"button",2),s.NdJ("click",function(){return s.CHM(n),s.oxw(2)._onClosed()}),s.TgZ(1,"span",3),s._uU(2,"\xd7"),s.qZA(),s.qZA()}}var l=function(t,e,n){return["mtx-alert-ref",t,e,n]};function c(t,e){if(1&t&&(s.TgZ(0,"div",1),s.Hsn(1),s.YNc(2,a,3,0,"ng-template",0),s.qZA()),2&t){var n=s.oxw();s.Q6J("ngClass",s.kEZ(2,l,"mtx-alert-ref-"+n.type,"mat-elevation-z"+n.elevation,n.dismissible?"mtx-alert-dismissible":"")),s.xp6(2),s.Q6J("ngIf",n.dismissible)}}var u=["*"],f=function(){var e=function(){function e(n){t(this,e),this._changeDetectorRef=n,this.type="default",this.isOpen=!0,this.elevation=0,this.closed=new s.vpe}return n(e,[{key:"hostClassList",get:function(){return"mtx-alert-".concat(this.type)}},{key:"_onClosed",value:function(){this.isOpen=!1,this._changeDetectorRef.markForCheck(),this.closed.emit(this)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(s.Y36(s.sBO))},e.\u0275cmp=s.Xpm({type:e,selectors:[["mtx-alert"]],hostAttrs:[1,"mtx-alert"],hostVars:2,hostBindings:function(t,e){2&t&&s.Tol(e.hostClassList)},inputs:{type:"type",isOpen:"isOpen",dismissible:"dismissible",color:"color",elevation:"elevation"},outputs:{closed:"closed"},exportAs:["mtxAlert"],ngContentSelectors:u,decls:1,vars:1,consts:[[3,"ngIf"],["role","alert",3,"ngClass"],["type","button","aria-label","Close",1,"mtx-alert-close",3,"click"],["aria-hidden","true"]],template:function(t,e){1&t&&(s.F$t(),s.YNc(0,c,3,6,"ng-template",0)),2&t&&s.Q6J("ngIf",e.isOpen)},directives:[o.O5,o.mk],styles:[".mtx-alert-ref{position:relative;padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.mtx-alert-close{position:absolute;top:0;bottom:0;right:0;padding:0 1.25rem;font-size:1.5rem;line-height:1;color:inherit;opacity:.5;background-color:transparent;border:0;cursor:pointer}[dir=rtl] .mtx-alert-close{right:auto;left:0}.mtx-alert-close:hover{opacity:.75}.mtx-alert-dismissible{padding-right:4rem}"],encapsulation:2,changeDetection:0}),e}()}}])}();