!function(){function n(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function a(n,a){for(var t=0;t<a.length;t++){var s=a[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}function t(n,t,s){return t&&a(n.prototype,t),s&&a(n,s),n}(self.webpackChunkextensions_srcs=self.webpackChunkextensions_srcs||[]).push([[37],{83037:function(a,s,o){"use strict";o.r(s),o.d(s,{ButtonApiComponent:function(){return T},ButtonModule:function(){return _},ButtonOverviewComponent:function(){return C}});var l,e=o(54655),p=o(63270),c=o(37716),i=o(82613),r=o(3679),u=o(7539),g=o(51095),m=o(4885),d=function(){var a=function(){function a(t,s,o,l){n(this,a),this.matButton=t,this.componentFactoryResolver=s,this.viewContainerRef=o,this.renderer=l,this.spinnerFactory=this.componentFactoryResolver.resolveComponentFactory(m.Ou)}return t(a,[{key:"ngOnChanges",value:function(n){n.loading&&(n.loading.currentValue?(this.matButton._elementRef.nativeElement.classList.add("mat-button-loading"),this.matButton.disabled=!0,this.createSpinner()):n.loading.firstChange||(this.matButton._elementRef.nativeElement.classList.remove("mat-button-loading"),this.matButton.disabled=this.disabled,this.destroySpinner()))}},{key:"createSpinner",value:function(){this.spinner||(this.spinner=this.viewContainerRef.createComponent(this.spinnerFactory),this.spinner.instance.color=this.color,this.spinner.instance.diameter=20,this.spinner.instance.mode="indeterminate",this.renderer.appendChild(this.matButton._elementRef.nativeElement,this.spinner.instance._elementRef.nativeElement))}},{key:"destroySpinner",value:function(){this.spinner&&(this.spinner.destroy(),this.spinner=null)}}]),a}();return a.\u0275fac=function(n){return new(n||a)(c.Y36(g.lW),c.Y36(c._Vd),c.Y36(c.s_b),c.Y36(c.Qsj))},a.\u0275dir=c.lG2({type:a,selectors:[["button","mat-button","","loading",""],["button","mat-raised-button","","loading",""],["button","mat-stroked-button","","loading",""],["button","mat-flat-button","","loading",""],["button","mat-icon-button","","loading",""],["button","mat-fab","","loading",""],["button","mat-mini-fab","","loading",""]],inputs:{loading:"loading",disabled:"disabled",color:"color"},features:[c.TTD]}),a}(),h=o(76627),b={title:"Configurable loading button",component:(l=function a(){n(this,a),this.color="primary",this.loading=!0},l.\u0275fac=function(n){return new(n||l)},l.\u0275cmp=c.Xpm({type:l,selectors:[["button-example"]],decls:36,vars:17,consts:[[3,"ngModel","ngModelChange"],["value","basic"],["value","primary"],["value","accent"],["value","warn"],[3,"ngModel","labelPosition","ngModelChange"],["mat-button","",3,"loading","color"],["mat-raised-button","",3,"loading","color"],["mat-stroked-button","",3,"loading","color"],["mat-flat-button","",3,"loading","color"],["mat-icon-button","",3,"loading","color"],["mat-fab","",3,"loading","color"],["mat-mini-fab","",3,"loading","color"]],template:function(n,a){1&n&&(c.TgZ(0,"h2"),c._uU(1,"Loading button configuration"),c.qZA(),c.TgZ(2,"section"),c.TgZ(3,"label"),c._uU(4,"Color:"),c.qZA(),c.TgZ(5,"mat-radio-group",0),c.NdJ("ngModelChange",function(n){return a.color=n}),c.TgZ(6,"mat-radio-button",1),c._uU(7,"Basic"),c.qZA(),c.TgZ(8,"mat-radio-button",2),c._uU(9,"Primary"),c.qZA(),c.TgZ(10,"mat-radio-button",3),c._uU(11,"Accent"),c.qZA(),c.TgZ(12,"mat-radio-button",4),c._uU(13,"Warn"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(14,"section"),c.TgZ(15,"mat-checkbox",5),c.NdJ("ngModelChange",function(n){return a.loading=n}),c._uU(16,"Loading"),c.qZA(),c.qZA(),c.TgZ(17,"h2"),c._uU(18,"Result"),c.qZA(),c.TgZ(19,"button",6),c._uU(20,"Button"),c.qZA(),c.TgZ(21,"button",7),c._uU(22,"Button"),c.qZA(),c.TgZ(23,"button",8),c._uU(24,"Button"),c.qZA(),c.TgZ(25,"button",9),c._uU(26,"Button"),c.qZA(),c.TgZ(27,"button",10),c.TgZ(28,"mat-icon"),c._uU(29,"more_vert"),c.qZA(),c.qZA(),c.TgZ(30,"button",11),c.TgZ(31,"mat-icon"),c._uU(32,"delete"),c.qZA(),c.qZA(),c.TgZ(33,"button",12),c.TgZ(34,"mat-icon"),c._uU(35,"menu"),c.qZA(),c.qZA()),2&n&&(c.xp6(5),c.Q6J("ngModel",a.color),c.xp6(10),c.Q6J("ngModel",a.loading)("labelPosition","before"),c.xp6(4),c.Q6J("loading",a.loading)("color",a.color),c.xp6(2),c.Q6J("loading",a.loading)("color",a.color),c.xp6(2),c.Q6J("loading",a.loading)("color",a.color),c.xp6(2),c.Q6J("loading",a.loading)("color",a.color),c.xp6(2),c.Q6J("loading",a.loading)("color",a.color),c.xp6(3),c.Q6J("loading",a.loading)("color",a.color),c.xp6(3),c.Q6J("loading",a.loading)("color",a.color))},directives:[i.VQ,r.JJ,r.On,i.U0,u.oG,g.lW,d,h.Hw],styles:[".mat-radio-button[_ngcontent-%COMP%]{margin:1em}.mat-checkbox[_ngcontent-%COMP%]{display:inline-block;margin:1rem 1rem 1rem 0}.mat-button-base[_ngcontent-%COMP%]{margin:0 .5rem}"]}),l),files:[{file:"app.component.html",content:o(80232),filecontent:o(31261)},{file:"app.component.ts",content:o(98961),filecontent:o(40406)},{file:"app.component.scss",content:o(28563),filecontent:o(37218)}]},f=o(38583),j=o(22281),x=o(29241);function v(n,a){if(1&n&&(c.ynx(0),c._UZ(1,"example-viewer",2),c.BQk()),2&n){var t=a.$implicit;c.xp6(1),c.Q6J("exampleData",t)}}function y(n,a){if(1&n&&(c.ynx(0),c.YNc(1,v,2,1,"ng-container",1),c.BQk()),2&n){var t=a.ngIf;c.xp6(1),c.Q6J("ngForOf",t.examples)}}function w(n,a){if(1&n&&(c.ynx(0),c._UZ(1,"doc-viewer",1),c.BQk()),2&n){var t=a.ngIf;c.xp6(1),c.Q6J("textContent",t.content.default)}}var q,Z,k,C=((k=function a(t){n(this,a),this.route=t}).\u0275fac=function(n){return new(n||k)(c.Y36(e.gz))},k.\u0275cmp=c.Xpm({type:k,selectors:[["app-button-overview"]],decls:2,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"exampleData"]],template:function(n,a){1&n&&(c.YNc(0,y,2,1,"ng-container",0),c.ALo(1,"async")),2&n&&c.Q6J("ngIf",c.lcZ(1,1,a.route.data))},directives:[f.O5,f.sg,j.B],pipes:[f.Ov],encapsulation:2}),k),T=((Z=function a(t){n(this,a),this.route=t}).\u0275fac=function(n){return new(n||Z)(c.Y36(e.gz))},Z.\u0275cmp=c.Xpm({type:Z,selectors:[["app-button-api"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"textContent"]],template:function(n,a){1&n&&(c.YNc(0,w,2,1,"ng-container",0),c.ALo(1,"async")),2&n&&c.Q6J("ngIf",c.lcZ(1,1,a.route.data))},directives:[f.O5,x.z],pipes:[f.Ov],encapsulation:2}),Z),_=((q=function a(){n(this,a)}).\u0275fac=function(n){return new(n||q)},q.\u0275mod=c.oAB({type:q}),q.\u0275inj=c.cJS({imports:[[p.m,e.Bz.forChild([{path:"",redirectTo:"overview",pathMatch:"full"},{path:"overview",component:C,pathMatch:"full",data:{examples:[b]}},{path:"api",component:T,pathMatch:"full",data:{content:o(47256)}},{path:"**",redirectTo:"overview"}])]]}),q)},29241:function(a,s,o){"use strict";o.d(s,{z:function(){return e}});var l=o(37716),e=function(){var a=function(){function a(){n(this,a),this.textContent=""}return t(a,[{key:"ngOnDestroy",value:function(){}}]),a}();return a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=l.Xpm({type:a,selectors:[["doc-viewer"]],inputs:{textContent:"textContent"},decls:1,vars:1,consts:[[1,"docs-markdown",3,"innerHTML"]],template:function(n,a){1&n&&l._UZ(0,"div",0),2&n&&l.Q6J("innerHTML",a.textContent,l.oJD)},styles:[".docs-markdown h1,.docs-markdown h2{font-weight:400}.docs-markdown h3{margin:40px 0 20px;padding-bottom:3px;font-weight:300;font-size:24px;line-height:32px;border-bottom:1px solid rgba(0,0,0,.12)}.docs-markdown h4{display:block;margin-top:28px;margin-bottom:16px;font-weight:700;font-size:20px;background:none}.docs-markdown h4 code{padding:0;background:none}.docs-markdown h5{font-size:15px}.docs-markdown h6{font-size:13px}.docs-markdown table{width:100%;margin:0 0 32px;border-collapse:collapse;border-radius:2px;border-spacing:0;box-shadow:0 2px 2px rgba(0,0,0,.24),0 0 2px rgba(0,0,0,.12)}.docs-markdown th{max-width:100px;padding:13px 16px;background:rgba(0,0,0,.025);font-weight:400;text-align:left}.docs-markdown td{padding:8px 16px;border:1px solid rgba(0,0,0,.03);font-weight:400;font-size:14px}.docs-markdown pre{display:block;margin:16px auto;overflow-x:auto;padding:20px;border-radius:5px;white-space:pre-wrap;background:rgba(0,0,0,.01);border:.5px solid rgba(0,0,0,.2)}"],encapsulation:2}),a}()},22281:function(a,s,o){"use strict";o.d(s,{B:function(){return j}});var l=o(37716),e=o(77001),p=o(27163),c=o(51095),i=o(11436),r=o(76627),u=o(38583),g=o(65939),m=["demo"];function d(n,a){if(1&n){var t=l.EpF();l.TgZ(0,"mat-tab",10),l.TgZ(1,"div",11),l.TgZ(2,"div",12),l.TgZ(3,"button",13),l.NdJ("click",function(){l.CHM(t);var n=l.MAs(8);return l.oxw(2).copySource(n)}),l.TgZ(4,"mat-icon"),l._uU(5,"content_copy"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(6,"div",14),l._UZ(7,"pre",15,16),l.qZA(),l.qZA(),l.qZA()}if(2&n){var s=a.$implicit;l.Q6J("label",s.file),l.xp6(3),l.Q6J("matTooltip","Copy example source"),l.xp6(4),l.Q6J("innerHtml",s.content,l.oJD)}}function h(n,a){if(1&n&&(l.TgZ(0,"div",8),l.TgZ(1,"mat-tab-group"),l.YNc(2,d,9,3,"mat-tab",9),l.qZA(),l.qZA()),2&n){var t=l.oxw();l.xp6(2),l.Q6J("ngForOf",t.exampleData.files)}}function b(n,a){if(1&n&&l._UZ(0,"div",17),2&n){var t=l.oxw();l.Q6J("innerHtml",t.exampleData.description,l.oJD)}}function f(n,a){}var j=function(){var a=function(){function a(t,s,o){n(this,a),this.snackbar=t,this.copier=s,this.componentFactoryResolver=o,this.showSource=!1}return t(a,[{key:"ngOnInit",value:function(){var n=this.componentFactoryResolver.resolveComponentFactory(this.exampleData.component);this.demoComponentRef=this.demoRef.createComponent(n)}},{key:"ngOnDestroy",value:function(){this.demoComponentRef&&this.demoComponentRef.destroy()}},{key:"toggleSourceView",value:function(){this.showSource=!this.showSource}},{key:"copySource",value:function(n){this.copier.copyText(n.innerText)?this.snackbar.open("Code copied","",{duration:2500}):this.snackbar.open("Copy failed. Please try again!","",{duration:2500})}}]),a}();return a.\u0275fac=function(n){return new(n||a)(l.Y36(e.ux),l.Y36(p.u),l.Y36(l._Vd))},a.\u0275cmp=l.Xpm({type:a,selectors:[["example-viewer"]],viewQuery:function(n,a){var t;(1&n&&l.Gf(m,7,l.s_b),2&n)&&(l.iGM(t=l.CRH())&&(a.demoRef=t.first))},inputs:{type:"type",exampleData:"exampleData"},decls:13,vars:4,consts:[[1,"docs-example-viewer-wrapper"],[1,"docs-example-viewer-title"],[1,"docs-example-viewer-title-spacer"],["mat-icon-button","","type","button",3,"matTooltip","click"],["class","docs-example-viewer-source",4,"ngIf"],[1,"docs-example-viewer-body"],[3,"innerHtml",4,"ngIf"],["demo",""],[1,"docs-example-viewer-source"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[1,"docs-example-source-wrapper"],[1,"button-bar"],["mat-icon-button","","type","button","title","Copy example source","aria-label","Copy example source to clipboard",1,"docs-example-source-copy","docs-example-button",3,"matTooltip","click"],[1,"code-snippet"],[1,"docs-example-source",3,"innerHtml"],["textContent",""],[3,"innerHtml"]],template:function(n,a){1&n&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l.TgZ(2,"span"),l._uU(3),l.qZA(),l._UZ(4,"div",2),l.TgZ(5,"button",3),l.NdJ("click",function(){return a.toggleSourceView()}),l.TgZ(6,"mat-icon"),l._uU(7,"code"),l.qZA(),l.qZA(),l.qZA(),l.YNc(8,h,3,1,"div",4),l.TgZ(9,"div",5),l.YNc(10,b,1,1,"div",6),l.YNc(11,f,0,0,"ng-template",null,7,l.W1O),l.qZA(),l.qZA()),2&n&&(l.xp6(3),l.Oqu(a.exampleData.title),l.xp6(2),l.Q6J("matTooltip","View source"),l.xp6(3),l.Q6J("ngIf",a.showSource),l.xp6(2),l.Q6J("ngIf",a.exampleData.description))},directives:[c.lW,i.gM,r.Hw,u.O5,g.SP,u.sg,g.uX],styles:["[_nghost-%COMP%]{display:block;padding:20px 0}.docs-example-viewer-wrapper[_ngcontent-%COMP%]{border-radius:4px}.docs-example-viewer-title[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;justify-content:center;padding:8px 8px 8px 16px}.docs-example-viewer-title-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.docs-example-viewer-body[_ngcontent-%COMP%]{padding:30px}.button-bar[_ngcontent-%COMP%]{float:right;padding:8px}.code-snippet[_ngcontent-%COMP%]{padding:20px}.docs-example-source[_ngcontent-%COMP%]{padding:0;margin:0;border:none;background:none;font-size:14px}"]}),a}()},80232:function(n){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Loading button configuration<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Color:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-group</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;color&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;basic&quot;</span>&gt;</span>Basic<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Primary<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;accent&quot;</span>&gt;</span>Accent<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;warn&quot;</span>&gt;</span>Warn<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;loading&quot;</span> [<span class="hljs-attr">labelPosition</span>]=<span class="hljs-string">&quot;&#x27;before&#x27;&quot;</span>&gt;</span>Loading<span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Result<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-button</span> [<span class="hljs-attr">loading</span>]=<span class="hljs-string">&quot;loading&quot;</span> [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;color&quot;</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-raised-button</span> [<span class="hljs-attr">loading</span>]=<span class="hljs-string">&quot;loading&quot;</span> [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;color&quot;</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-stroked-button</span> [<span class="hljs-attr">loading</span>]=<span class="hljs-string">&quot;loading&quot;</span> [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;color&quot;</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-flat-button</span> [<span class="hljs-attr">loading</span>]=<span class="hljs-string">&quot;loading&quot;</span> [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;color&quot;</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-icon-button</span> [<span class="hljs-attr">loading</span>]=<span class="hljs-string">&quot;loading&quot;</span> [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;color&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-icon</span>&gt;</span>more_vert<span class="hljs-tag">&lt;/<span class="hljs-name">mat-icon</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-fab</span> [<span class="hljs-attr">loading</span>]=<span class="hljs-string">&quot;loading&quot;</span> [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;color&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-icon</span>&gt;</span>delete<span class="hljs-tag">&lt;/<span class="hljs-name">mat-icon</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-mini-fab</span> [<span class="hljs-attr">loading</span>]=<span class="hljs-string">&quot;loading&quot;</span> [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;color&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-icon</span>&gt;</span>menu<span class="hljs-tag">&lt;/<span class="hljs-name">mat-icon</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n'},28563:function(n){n.exports='<span class="hljs-selector-class">.mat-radio-button</span> {\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">1em</span>;\n}\n\n<span class="hljs-selector-class">.mat-checkbox</span> {\n  <span class="hljs-attribute">display</span>: inline-block;\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">1rem</span> <span class="hljs-number">1rem</span> <span class="hljs-number">1rem</span> <span class="hljs-number">0</span>;\n}\n\n<span class="hljs-selector-class">.mat-button-base</span> {\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> .<span class="hljs-number">5rem</span>;\n}\n'},98961:function(n){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { ThemePalette } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/material/core&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;button-example&#x27;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{\n  <span class="hljs-attr">color</span>: ThemePalette = <span class="hljs-string">&#x27;primary&#x27;</span>;\n  loading = <span class="hljs-literal">true</span>;\n}\n'},47256:function(n,a,t){"use strict";t.r(a),a.default='<h1 id="button">Button</h1>\n<p>It has just add a <code>loading</code> property for material button.</p>\n'},31261:function(n,a,t){"use strict";t.r(a),a.default='<h2>Loading button configuration</h2>\n\n<section>\n  <label>Color:</label>\n  <mat-radio-group [(ngModel)]="color">\n    <mat-radio-button value="basic">Basic</mat-radio-button>\n    <mat-radio-button value="primary">Primary</mat-radio-button>\n    <mat-radio-button value="accent">Accent</mat-radio-button>\n    <mat-radio-button value="warn">Warn</mat-radio-button>\n  </mat-radio-group>\n</section>\n\n<section>\n  <mat-checkbox [(ngModel)]="loading" [labelPosition]="\'before\'">Loading</mat-checkbox>\n</section>\n\n<h2>Result</h2>\n\n<button mat-button [loading]="loading" [color]="color">Button</button>\n<button mat-raised-button [loading]="loading" [color]="color">Button</button>\n<button mat-stroked-button [loading]="loading" [color]="color">Button</button>\n<button mat-flat-button [loading]="loading" [color]="color">Button</button>\n<button mat-icon-button [loading]="loading" [color]="color">\n  <mat-icon>more_vert</mat-icon>\n</button>\n<button mat-fab [loading]="loading" [color]="color">\n  <mat-icon>delete</mat-icon>\n</button>\n<button mat-mini-fab [loading]="loading" [color]="color">\n  <mat-icon>menu</mat-icon>\n</button>\n'},37218:function(n,a,t){"use strict";t.r(a),a.default=".mat-radio-button {\n  margin: 1em;\n}\n\n.mat-checkbox {\n  display: inline-block;\n  margin: 1rem 1rem 1rem 0;\n}\n\n.mat-button-base {\n  margin: 0 .5rem;\n}\n"},40406:function(n,a,t){"use strict";t.r(a),a.default="import { Component } from '@angular/core';\nimport { ThemePalette } from '@angular/material/core';\n\n@Component({\n  selector: 'button-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n  color: ThemePalette = 'primary';\n  loading = true;\n}\n"}}])}();