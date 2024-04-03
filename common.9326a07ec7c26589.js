"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76],{78731:(v,_,s)=>{s.d(_,{X:()=>p});var r=s(54438),f=s(345);let p=(()=>{class u{get title(){return this._title}set title(o){this._title=o&&this.capitalizeTitle(o),this.bodyTitle.setTitle(o=""!==o?`${this._title} | Angular Material Extensions`:this._originalTitle)}constructor(o){this.bodyTitle=o,this._title="",this._originalTitle="Angular Material Extensions library"}capitalizeTitle(o){return o.split("-").join(" ").replace(/\b\w+\b/g,t=>t.substring(0,1).toUpperCase()+t.substring(1))}static#r=this.\u0275fac=function(t){return new(t||u)(r.KVO(f.hE))};static#e=this.\u0275prov=r.jDH({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})()},69576:(v,_,s)=>{s.d(_,{r:()=>u});var r=s(54438),f=s(35309);let p=0,u=(()=>{class n{constructor(t,m){this.el=t,this.navigationFocusService=m,this.tabindex="-1",this.outline="none",t.nativeElement.id||(t.nativeElement.id="skip-link-target-"+p++),this.navigationFocusService.requestFocusOnNavigation(t.nativeElement),this.navigationFocusService.requestSkipLinkFocus(t.nativeElement)}ngOnDestroy(){this.navigationFocusService.relinquishFocusOnNavigation(this.el.nativeElement),this.navigationFocusService.relinquishSkipLinkFocus(this.el.nativeElement)}static#r=this.\u0275fac=function(m){return new(m||n)(r.rXU(r.aKT),r.rXU(f._))};static#e=this.\u0275dir=r.FsC({type:n,selectors:[["","focusOnNavigation",""]],hostVars:3,hostBindings:function(m,a){2&m&&(r.Mr5("tabindex",a.tabindex),r.xc7("outline",a.outline))},standalone:!0})}return n})()},23822:(v,_,s)=>{s.d(_,{s:()=>u});var r=s(54438);const f=["*"];function p(n,o){if(1&n){const t=r.RV6();r.j41(0,"button",1),r.bIt("click",function(){r.eBV(t);const a=r.XpG();return r.Njj(a._onClosed())}),r.j41(1,"span",2),r.EFF(2,"\xd7"),r.k0s()()}}let u=(()=>{class n{get _hostClassList(){return`mtx-alert-${this.type} mat-elevation-z${this.elevation}`}constructor(t){this._changeDetectorRef=t,this.type="default",this.dismissible=!1,this.elevation=0,this.closed=new r.bkB}_onClosed(){this._changeDetectorRef.markForCheck(),this.closed.emit(this)}static#r=this.\u0275fac=function(m){return new(m||n)(r.rXU(r.gRc))};static#e=this.\u0275cmp=r.VBU({type:n,selectors:[["mtx-alert"]],hostAttrs:["role","alert",1,"mtx-alert"],hostVars:4,hostBindings:function(m,a){2&m&&(r.HbH(a._hostClassList),r.AVh("mtx-alert-dismissible",a.dismissible))},inputs:{type:"type",dismissible:[r.Mj6.HasDecoratorInputTransform,"dismissible","dismissible",r.L39],elevation:"elevation"},outputs:{closed:"closed"},exportAs:["mtxAlert"],standalone:!0,features:[r.GFd,r.aNF],ngContentSelectors:f,decls:2,vars:1,consts:[["type","button","aria-label","Close",1,"mtx-alert-close"],["type","button","aria-label","Close",1,"mtx-alert-close",3,"click"],["aria-hidden","true"]],template:function(m,a){1&m&&(r.NAR(),r.SdG(0),r.DNE(1,p,3,0,"button",0)),2&m&&(r.R7$(),r.vxM(1,a.dismissible?1:-1))},styles:[".mtx-alert{position:relative;display:block;padding:12px 20px;margin-bottom:16px;border:1px solid var(--mtx-alert-outline-color);border-radius:var(--mtx-alert-container-shape);background-color:var(--mtx-alert-background-color);color:var(--mtx-alert-text-color)}.mtx-alert.mtx-alert-info{background-color:var(--mtx-alert-info-background-color);color:var(--mtx-alert-info-text-color)}.mtx-alert.mtx-alert-success{background-color:var(--mtx-alert-success-background-color);color:var(--mtx-alert-success-text-color)}.mtx-alert.mtx-alert-warning{background-color:var(--mtx-alert-warning-background-color);color:var(--mtx-alert-warning-text-color)}.mtx-alert.mtx-alert-danger{background-color:var(--mtx-alert-danger-background-color);color:var(--mtx-alert-danger-text-color)}.mtx-alert-close{position:absolute;top:0;bottom:0;right:0;padding:0 1.25rem;font-size:1.5rem;line-height:1;color:inherit;opacity:.5;background-color:transparent;border:0;cursor:pointer}[dir=rtl] .mtx-alert-close{right:auto;left:0}.mtx-alert-close:hover{opacity:.75}.mtx-alert-dismissible{padding-right:4rem}\n"],encapsulation:2,changeDetection:0})}return n})()},1514:(v,_,s)=>{s.d(_,{H:()=>f});var r=s(54438);let f=(()=>{class p{transform(n){return n instanceof r.C4Q}static#r=this.\u0275fac=function(o){return new(o||p)};static#e=this.\u0275pipe=r.EJ8({name:"isTemplateRef",type:p,pure:!0,standalone:!0})}return p})()},67575:(v,_,s)=>{s.d(_,{HM:()=>o});var r=s(54438);s(60177);const p=new r.nKC("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");let o=(()=>{class a{constructor(d,c,g,i,l){this._elementRef=d,this._ngZone=c,this._changeDetectorRef=g,this._animationMode=i,this._isNoopAnimation=!1,this._defaultColor="primary",this._value=0,this._bufferValue=0,this.animationEnd=new r.bkB,this._mode="determinate",this._transitionendHandler=e=>{0===this.animationEnd.observers.length||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||("determinate"===this.mode||"buffer"===this.mode)&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))},this._isNoopAnimation="NoopAnimations"===i,l&&(l.color&&(this.color=this._defaultColor=l.color),this.mode=l.mode||this.mode)}get color(){return this._color||this._defaultColor}set color(d){this._color=d}get value(){return this._value}set value(d){this._value=t(d||0),this._changeDetectorRef.markForCheck()}get bufferValue(){return this._bufferValue||0}set bufferValue(d){this._bufferValue=t(d||0),this._changeDetectorRef.markForCheck()}get mode(){return this._mode}set mode(d){this._mode=d,this._changeDetectorRef.markForCheck()}ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._elementRef.nativeElement.addEventListener("transitionend",this._transitionendHandler)})}ngOnDestroy(){this._elementRef.nativeElement.removeEventListener("transitionend",this._transitionendHandler)}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${"buffer"===this.mode?this.bufferValue:100}%`}_isIndeterminate(){return"indeterminate"===this.mode||"query"===this.mode}static#r=this.\u0275fac=function(c){return new(c||a)(r.rXU(r.aKT),r.rXU(r.SKi),r.rXU(r.gRc),r.rXU(r.bc$,8),r.rXU(p,8))};static#e=this.\u0275cmp=r.VBU({type:a,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(c,g){2&c&&(r.BMQ("aria-valuenow",g._isIndeterminate()?null:g.value)("mode",g.mode),r.HbH("mat-"+g.color),r.AVh("_mat-animation-noopable",g._isNoopAnimation)("mdc-linear-progress--animation-ready",!g._isNoopAnimation)("mdc-linear-progress--indeterminate",g._isIndeterminate()))},inputs:{color:"color",value:[r.Mj6.HasDecoratorInputTransform,"value","value",r.Udg],bufferValue:[r.Mj6.HasDecoratorInputTransform,"bufferValue","bufferValue",r.Udg],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],standalone:!0,features:[r.GFd,r.aNF],decls:7,vars:4,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(c,g){1&c&&(r.j41(0,"div",0),r.nrm(1,"div",1)(2,"div",2),r.k0s(),r.j41(3,"div",3),r.nrm(4,"span",4),r.k0s(),r.j41(5,"div",5),r.nrm(6,"span",4),r.k0s()),2&c&&(r.R7$(),r.xc7("flex-basis",g._getBufferBarFlexBasis()),r.R7$(2),r.xc7("transform",g._getPrimaryBarTransform()))},styles:["@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(var(--mdc-linear-progress-primary-half))}100%{transform:translateX(var(--mdc-linear-progress-primary-full))}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(var(--mdc-linear-progress-secondary-quarter))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(var(--mdc-linear-progress-secondary-half))}100%{transform:translateX(var(--mdc-linear-progress-secondary-full))}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(var(--mdc-linear-progress-primary-half-neg))}100%{transform:translateX(var(--mdc-linear-progress-primary-full-neg))}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(var(--mdc-linear-progress-secondary-quarter-neg))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(var(--mdc-linear-progress-secondary-half-neg))}100%{transform:translateX(var(--mdc-linear-progress-secondary-full-neg))}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid rgba(0,0,0,0);overflow-x:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}@media screen and (forced-colors: active){.mdc-linear-progress{outline-color:CanvasText}}.mdc-linear-progress__bar{position:absolute;top:0;bottom:0;margin:auto 0;width:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid}.mdc-linear-progress__buffer{display:flex;position:absolute;top:0;bottom:0;margin:auto 0;width:100%;overflow:hidden}.mdc-linear-progress__buffer-dots{background-repeat:repeat-x;flex:auto;transform:rotate(180deg);-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E\");animation:mdc-linear-progress-buffering 250ms infinite linear}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__bar{right:0;-webkit-transform-origin:center right;transform-origin:center right}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__buffer-dots,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}.mdc-linear-progress--closed{opacity:0}.mdc-linear-progress--closed-animation-off .mdc-linear-progress__buffer-dots{animation:none}.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar,.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar .mdc-linear-progress__bar-inner{animation:none}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(calc(var(--mdc-linear-progress-track-height) * -2.5))}}.mdc-linear-progress__bar-inner{border-color:var(--mdc-linear-progress-active-indicator-color)}.mdc-linear-progress__buffer-dots{background-color:var(--mdc-linear-progress-track-color)}@media(forced-colors: active){.mdc-linear-progress__buffer-dots{background-color:ButtonBorder}}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.mdc-linear-progress__buffer-dots{background-color:rgba(0,0,0,0);background-image:url(\"data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='rgba(244, 67, 54, 0.25)'/%3E%3C/svg%3E\")}}.mdc-linear-progress__buffer-bar{background-color:var(--mdc-linear-progress-track-color)}.mdc-linear-progress{height:max(var(--mdc-linear-progress-track-height), var(--mdc-linear-progress-active-indicator-height))}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.mdc-linear-progress{height:4px}}.mdc-linear-progress__bar{height:var(--mdc-linear-progress-active-indicator-height)}.mdc-linear-progress__bar-inner{border-top-width:var(--mdc-linear-progress-active-indicator-height)}.mdc-linear-progress__buffer{height:var(--mdc-linear-progress-track-height)}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.mdc-linear-progress__buffer-dots{background-size:10px var(--mdc-linear-progress-track-height)}}.mdc-linear-progress__buffer{border-radius:var(--mdc-linear-progress-track-shape)}.mat-mdc-progress-bar{display:block;text-align:start;--mdc-linear-progress-primary-half: 83.67142%;--mdc-linear-progress-primary-full: 200.611057%;--mdc-linear-progress-secondary-quarter: 37.651913%;--mdc-linear-progress-secondary-half: 84.386165%;--mdc-linear-progress-secondary-full: 160.277782%;--mdc-linear-progress-primary-half-neg: -83.67142%;--mdc-linear-progress-primary-full-neg: -200.611057%;--mdc-linear-progress-secondary-quarter-neg: -37.651913%;--mdc-linear-progress-secondary-half-neg: -84.386165%;--mdc-linear-progress-secondary-full-neg: -160.277782%}.mat-mdc-progress-bar[mode=query]{transform:scaleX(-1)}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner{animation:none}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar{transition:transform 1ms}"],encapsulation:2,changeDetection:0})}return a})();function t(a,h=0,d=100){return Math.max(h,Math.min(d,a))}},9183:(v,_,s)=>{s.d(_,{LG:()=>a});var r=s(54438),f=s(60177);const p=["determinateSpinner"];function u(c,g){if(1&c&&(r.qSk(),r.j41(0,"svg",11),r.nrm(1,"circle",12),r.k0s()),2&c){const i=r.XpG();r.BMQ("viewBox",i._viewBox()),r.R7$(),r.xc7("stroke-dasharray",i._strokeCircumference(),"px")("stroke-dashoffset",i._strokeCircumference()/2,"px")("stroke-width",i._circleStrokeWidth(),"%"),r.BMQ("r",i._circleRadius())}}const n=new r.nKC("mat-progress-spinner-default-options",{providedIn:"root",factory:function o(){return{diameter:t}}}),t=100;let a=(()=>{class c{get color(){return this._color||this._defaultColor}set color(i){this._color=i}constructor(i,l,e){this._elementRef=i,this._defaultColor="primary",this._value=0,this._diameter=t,this._noopAnimations="NoopAnimations"===l&&!!e&&!e._forceAnimations,this.mode="mat-spinner"===i.nativeElement.nodeName.toLowerCase()?"indeterminate":"determinate",e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}get value(){return"determinate"===this.mode?this._value:0}set value(i){this._value=Math.max(0,Math.min(100,i||0))}get diameter(){return this._diameter}set diameter(i){this._diameter=i||0}get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(i){this._strokeWidth=i||0}_circleRadius(){return(this.diameter-10)/2}_viewBox(){const i=2*this._circleRadius()+this.strokeWidth;return`0 0 ${i} ${i}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return"determinate"===this.mode?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static#r=this.\u0275fac=function(l){return new(l||c)(r.rXU(r.aKT),r.rXU(r.bc$,8),r.rXU(n))};static#e=this.\u0275cmp=r.VBU({type:c,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(l,e){if(1&l&&r.GBs(p,5),2&l){let b;r.mGM(b=r.lsd())&&(e._determinateCircle=b.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(l,e){2&l&&(r.BMQ("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow","determinate"===e.mode?e.value:null)("mode",e.mode),r.HbH("mat-"+e.color),r.xc7("width",e.diameter,"px")("height",e.diameter,"px")("--mdc-circular-progress-size",e.diameter+"px")("--mdc-circular-progress-active-indicator-width",e.diameter+"px"),r.AVh("_mat-animation-noopable",e._noopAnimations)("mdc-circular-progress--indeterminate","indeterminate"===e.mode))},inputs:{color:"color",mode:"mode",value:[r.Mj6.HasDecoratorInputTransform,"value","value",r.Udg],diameter:[r.Mj6.HasDecoratorInputTransform,"diameter","diameter",r.Udg],strokeWidth:[r.Mj6.HasDecoratorInputTransform,"strokeWidth","strokeWidth",r.Udg]},exportAs:["matProgressSpinner"],standalone:!0,features:[r.GFd,r.aNF],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(l,e){if(1&l&&(r.DNE(0,u,2,8,"ng-template",null,0,r.C5r),r.j41(2,"div",2,1),r.qSk(),r.j41(4,"svg",3),r.nrm(5,"circle",4),r.k0s()(),r.joV(),r.j41(6,"div",5)(7,"div",6)(8,"div",7),r.eu8(9,8),r.k0s(),r.j41(10,"div",9),r.eu8(11,8),r.k0s(),r.j41(12,"div",10),r.eu8(13,8),r.k0s()()()),2&l){const b=r.sdS(1);r.R7$(4),r.BMQ("viewBox",e._viewBox()),r.R7$(),r.xc7("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeDashOffset(),"px")("stroke-width",e._circleStrokeWidth(),"%"),r.BMQ("r",e._circleRadius()),r.R7$(4),r.Y8G("ngTemplateOutlet",b),r.R7$(2),r.Y8G("ngTemplateOutlet",b),r.R7$(2),r.Y8G("ngTemplateOutlet",b)}},dependencies:[f.T3],styles:["@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner circle{stroke-width:var(--mdc-circular-progress-active-indicator-width)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-1 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-2 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-3 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-4 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner .mdc-circular-progress{width:var(--mdc-circular-progress-size) !important;height:var(--mdc-circular-progress-size) !important}.mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}"],encapsulation:2,changeDetection:0})}return c})()}}]);