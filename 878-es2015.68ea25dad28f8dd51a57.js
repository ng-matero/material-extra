(self.webpackChunkextensions_srcs=self.webpackChunkextensions_srcs||[]).push([[878],{30878:function(t,s,n){"use strict";n.r(s),n.d(s,{Text3dApiComponent:function(){return Z},Text3dModule:function(){return b},Text3dOverviewComponent:function(){return j}});var a=n(54655),e=n(63270),l=n(37716),p=n(98295),o=n(49983),r=n(3679),c=n(54436),i=n(38583);const m=function(t,s){return{"z-index":t,transform:s}};function h(t,s){if(1&t&&(l.TgZ(0,"span",1),l._uU(1),l.GkF(2,2),l.qZA()),2&t){const t=s.$implicit,n=l.oxw();l.Q6J("ngStyle",l.WLB(3,m,-t,"translate3d(0, 0,"+-t+"px)")),l.xp6(1),l.hij(" ",n.text," "),l.xp6(1),l.Q6J("ngTemplateOutlet",n.template)}}let g=(()=>{class t{constructor(){this.text="",this.depth=20,this.rotateX=60,this.rotateY=0,this.rotateZ=0}get transform(){return`rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`}get depthArr(){const t=[];for(let s=1;s<=this.depth;s++)t.push(s);return t}}return t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=l.Xpm({type:t,selectors:[["mtx-text3d"]],contentQueries:function(t,s,n){if(1&t&&l.Suo(n,l.Rgc,5),2&t){let t;l.iGM(t=l.CRH())&&(s.template=t.first)}},hostAttrs:[1,"mtx-text3d"],hostVars:2,hostBindings:function(t,s){2&t&&l.Udp("transform",s.transform)},inputs:{text:"text",depth:"depth",rotateX:"rotateX",rotateY:"rotateY",rotateZ:"rotateZ"},exportAs:["mtxText3d"],decls:1,vars:1,consts:[["class","mtx-text3d-layer",3,"ngStyle",4,"ngFor","ngForOf"],[1,"mtx-text3d-layer",3,"ngStyle"],[3,"ngTemplateOutlet"]],template:function(t,s){1&t&&l.YNc(0,h,3,6,"span",0),2&t&&l.Q6J("ngForOf",s.depthArr)},directives:[i.sg,i.PC,i.tP],styles:[".mtx-text3d{display:block;transform-style:preserve-3d;-webkit-animation:rotate 5s ease infinite;animation:rotate 5s ease infinite;font-weight:700}.mtx-text3d .mtx-text3d-layer{display:block;text-align:center;font-size:10rem}.mtx-text3d .mtx-text3d-layer:not(:first-child){position:absolute;top:0;left:0;right:0;margin:auto;transform-style:preserve-3d}"],encapsulation:2,changeDetection:0}),t})();const u={title:"Configurable 3D text",component:(()=>{class t{constructor(){this.text="3D Text",this.depth=20,this.rotateX=60,this.rotateY=0,this.rotateZ=0}}return t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=l.Xpm({type:t,selectors:[["text-3d-example"]],decls:22,vars:10,consts:[["matInput","","placeholder","Text",3,"ngModel","ngModelChange"],["min","1","max","50","thumbLabel","",3,"ngModel","ngModelChange"],["min","0","max","360","thumbLabel","",3,"ngModel","ngModelChange"],[3,"text","depth","rotateX","rotateY","rotateZ"]],template:function(t,s){1&t&&(l.TgZ(0,"h2"),l._uU(1,"3D Text configuration"),l.qZA(),l.TgZ(2,"section"),l.TgZ(3,"mat-form-field"),l.TgZ(4,"input",0),l.NdJ("ngModelChange",function(t){return s.text=t}),l.qZA(),l.qZA(),l.qZA(),l.TgZ(5,"section"),l.TgZ(6,"label"),l._uU(7,"Depth:"),l.qZA(),l.TgZ(8,"mat-slider",1),l.NdJ("ngModelChange",function(t){return s.depth=t}),l.qZA(),l.qZA(),l.TgZ(9,"section"),l.TgZ(10,"label"),l._uU(11,"RotateX:"),l.qZA(),l.TgZ(12,"mat-slider",2),l.NdJ("ngModelChange",function(t){return s.rotateX=t}),l.qZA(),l.TgZ(13,"label"),l._uU(14,"RotateY:"),l.qZA(),l.TgZ(15,"mat-slider",2),l.NdJ("ngModelChange",function(t){return s.rotateY=t}),l.qZA(),l.TgZ(16,"label"),l._uU(17,"RotateZ:"),l.qZA(),l.TgZ(18,"mat-slider",2),l.NdJ("ngModelChange",function(t){return s.rotateZ=t}),l.qZA(),l.qZA(),l.TgZ(19,"h2"),l._uU(20,"Result"),l.qZA(),l._UZ(21,"mtx-text3d",3)),2&t&&(l.xp6(4),l.Q6J("ngModel",s.text),l.xp6(4),l.Q6J("ngModel",s.depth),l.xp6(4),l.Q6J("ngModel",s.rotateX),l.xp6(3),l.Q6J("ngModel",s.rotateY),l.xp6(3),l.Q6J("ngModel",s.rotateZ),l.xp6(3),l.Q6J("text",s.text)("depth",s.depth)("rotateX",s.rotateX)("rotateY",s.rotateY)("rotateZ",s.rotateZ))},directives:[p.KE,o.Nt,r.Fj,r.JJ,r.On,c.pH,g],styles:[""]}),t})(),files:[{file:"app.component.html",content:n(97587),filecontent:n(1841)},{file:"app.component.ts",content:n(90321),filecontent:n(78693)},{file:"app.component.scss",content:n(55381),filecontent:n(75018)}]};var d=n(22281);function x(t,s){if(1&t&&(l.ynx(0),l._UZ(1,"example-viewer",2),l.BQk()),2&t){const t=s.$implicit;l.xp6(1),l.Q6J("exampleData",t)}}function f(t,s){if(1&t&&(l.ynx(0),l.YNc(1,x,2,1,"ng-container",1),l.BQk()),2&t){const t=s.ngIf;l.xp6(1),l.Q6J("ngForOf",t.examples)}}let j=(()=>{class t{constructor(t){this.route=t}}return t.\u0275fac=function(s){return new(s||t)(l.Y36(a.gz))},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-text3d-overview"]],decls:2,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"exampleData"]],template:function(t,s){1&t&&(l.YNc(0,f,2,1,"ng-container",0),l.ALo(1,"async")),2&t&&l.Q6J("ngIf",l.lcZ(1,1,s.route.data))},directives:[i.O5,i.sg,d.B],pipes:[i.Ov],encapsulation:2}),t})(),Z=(()=>{class t{constructor(t){this.route=t}}return t.\u0275fac=function(s){return new(s||t)(l.Y36(a.gz))},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-text3d-api"]],decls:1,vars:0,template:function(t,s){1&t&&l._uU(0,"Coming soon\n")},encapsulation:2}),t})(),b=(()=>{class t{}return t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[e.m,a.Bz.forChild([{path:"",redirectTo:"overview",pathMatch:"full"},{path:"overview",component:j,pathMatch:"full",data:{examples:[u]}},{path:"api",component:Z,pathMatch:"full"},{path:"**",redirectTo:"overview"}])]]}),t})()},22281:function(t,s,n){"use strict";n.d(s,{B:function(){return x}});var a=n(37716),e=n(77001),l=n(27163),p=n(51095),o=n(11436),r=n(76627),c=n(38583),i=n(65939);const m=["demo"];function h(t,s){if(1&t){const t=a.EpF();a.TgZ(0,"mat-tab",10),a.TgZ(1,"div",11),a.TgZ(2,"div",12),a.TgZ(3,"button",13),a.NdJ("click",function(){a.CHM(t);const s=a.MAs(8);return a.oxw(2).copySource(s)}),a.TgZ(4,"mat-icon"),a._uU(5,"content_copy"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(6,"div",14),a._UZ(7,"pre",15,16),a.qZA(),a.qZA(),a.qZA()}if(2&t){const t=s.$implicit;a.Q6J("label",t.file),a.xp6(3),a.Q6J("matTooltip","Copy example source"),a.xp6(4),a.Q6J("innerHtml",t.content,a.oJD)}}function g(t,s){if(1&t&&(a.TgZ(0,"div",8),a.TgZ(1,"mat-tab-group"),a.YNc(2,h,9,3,"mat-tab",9),a.qZA(),a.qZA()),2&t){const t=a.oxw();a.xp6(2),a.Q6J("ngForOf",t.exampleData.files)}}function u(t,s){if(1&t&&a._UZ(0,"div",17),2&t){const t=a.oxw();a.Q6J("innerHtml",t.exampleData.description,a.oJD)}}function d(t,s){}let x=(()=>{class t{constructor(t,s,n){this.snackbar=t,this.copier=s,this.componentFactoryResolver=n,this.showSource=!1}ngOnInit(){const t=this.componentFactoryResolver.resolveComponentFactory(this.exampleData.component);this.demoComponentRef=this.demoRef.createComponent(t)}ngOnDestroy(){this.demoComponentRef&&this.demoComponentRef.destroy()}toggleSourceView(){this.showSource=!this.showSource}copySource(t){this.copier.copyText(t.innerText)?this.snackbar.open("Code copied","",{duration:2500}):this.snackbar.open("Copy failed. Please try again!","",{duration:2500})}}return t.\u0275fac=function(s){return new(s||t)(a.Y36(e.ux),a.Y36(l.u),a.Y36(a._Vd))},t.\u0275cmp=a.Xpm({type:t,selectors:[["example-viewer"]],viewQuery:function(t,s){if(1&t&&a.Gf(m,7,a.s_b),2&t){let t;a.iGM(t=a.CRH())&&(s.demoRef=t.first)}},inputs:{type:"type",exampleData:"exampleData"},decls:13,vars:4,consts:[[1,"docs-example-viewer-wrapper"],[1,"docs-example-viewer-title"],[1,"docs-example-viewer-title-spacer"],["mat-icon-button","","type","button",3,"matTooltip","click"],["class","docs-example-viewer-source",4,"ngIf"],[1,"docs-example-viewer-body"],[3,"innerHtml",4,"ngIf"],["demo",""],[1,"docs-example-viewer-source"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[1,"docs-example-source-wrapper"],[1,"button-bar"],["mat-icon-button","","type","button","title","Copy example source","aria-label","Copy example source to clipboard",1,"docs-example-source-copy","docs-example-button",3,"matTooltip","click"],[1,"code-snippet"],[1,"docs-example-source",3,"innerHtml"],["textContent",""],[3,"innerHtml"]],template:function(t,s){1&t&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"span"),a._uU(3),a.qZA(),a._UZ(4,"div",2),a.TgZ(5,"button",3),a.NdJ("click",function(){return s.toggleSourceView()}),a.TgZ(6,"mat-icon"),a._uU(7,"code"),a.qZA(),a.qZA(),a.qZA(),a.YNc(8,g,3,1,"div",4),a.TgZ(9,"div",5),a.YNc(10,u,1,1,"div",6),a.YNc(11,d,0,0,"ng-template",null,7,a.W1O),a.qZA(),a.qZA()),2&t&&(a.xp6(3),a.Oqu(s.exampleData.title),a.xp6(2),a.Q6J("matTooltip","View source"),a.xp6(3),a.Q6J("ngIf",s.showSource),a.xp6(2),a.Q6J("ngIf",s.exampleData.description))},directives:[p.lW,o.gM,r.Hw,c.O5,i.SP,c.sg,i.uX],styles:["[_nghost-%COMP%]{display:block;padding:20px 0}.docs-example-viewer-wrapper[_ngcontent-%COMP%]{border-radius:4px}.docs-example-viewer-title[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;justify-content:center;padding:8px 8px 8px 16px}.docs-example-viewer-title-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.docs-example-viewer-body[_ngcontent-%COMP%]{padding:30px}.button-bar[_ngcontent-%COMP%]{float:right;padding:8px}.code-snippet[_ngcontent-%COMP%]{padding:20px}.docs-example-source[_ngcontent-%COMP%]{padding:0;margin:0;border:none;background:none;font-size:14px}"]}),t})()},97587:function(t){t.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>3D Text configuration<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">matInput</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Text&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Depth:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-slider</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">thumbLabel</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;depth&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mat-slider</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>RotateX:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-slider</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;360&quot;</span> <span class="hljs-attr">thumbLabel</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;rotateX&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mat-slider</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>RotateY:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-slider</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;360&quot;</span> <span class="hljs-attr">thumbLabel</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;rotateY&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mat-slider</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>RotateZ:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-slider</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;360&quot;</span> <span class="hljs-attr">thumbLabel</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;rotateZ&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mat-slider</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Result<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-text3d</span> [<span class="hljs-attr">text</span>]=<span class="hljs-string">&quot;text&quot;</span> [<span class="hljs-attr">depth</span>]=<span class="hljs-string">&quot;depth&quot;</span>\n            [<span class="hljs-attr">rotateX</span>]=<span class="hljs-string">&quot;rotateX&quot;</span> [<span class="hljs-attr">rotateY</span>]=<span class="hljs-string">&quot;rotateY&quot;</span> [<span class="hljs-attr">rotateZ</span>]=<span class="hljs-string">&quot;rotateZ&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mtx-text3d</span>&gt;</span>\n'},55381:function(t){t.exports='<span class="hljs-comment">/** No CSS for this example */</span>\n'},90321:function(t){t.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;text-3d-example&#x27;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{\n  text = <span class="hljs-string">&#x27;3D Text&#x27;</span>;\n  depth = <span class="hljs-number">20</span>;\n  rotateX = <span class="hljs-number">60</span>;\n  rotateY = <span class="hljs-number">0</span>;\n  rotateZ = <span class="hljs-number">0</span>;\n}\n'},1841:function(t,s,n){"use strict";n.r(s),s.default='<h2>3D Text configuration</h2>\n\n<section>\n  <mat-form-field>\n    <input matInput [(ngModel)]="text" placeholder="Text">\n  </mat-form-field>\n</section>\n\n<section>\n  <label>Depth:</label>\n  <mat-slider min="1" max="50" thumbLabel [(ngModel)]="depth"></mat-slider>\n</section>\n\n<section>\n  <label>RotateX:</label>\n  <mat-slider min="0" max="360" thumbLabel [(ngModel)]="rotateX"></mat-slider>\n\n  <label>RotateY:</label>\n  <mat-slider min="0" max="360" thumbLabel [(ngModel)]="rotateY"></mat-slider>\n\n  <label>RotateZ:</label>\n  <mat-slider min="0" max="360" thumbLabel [(ngModel)]="rotateZ"></mat-slider>\n</section>\n\n<h2>Result</h2>\n\n<mtx-text3d [text]="text" [depth]="depth"\n            [rotateX]="rotateX" [rotateY]="rotateY" [rotateZ]="rotateZ"></mtx-text3d>\n'},75018:function(t,s,n){"use strict";n.r(s),s.default="/** No CSS for this example */\n"},78693:function(t,s,n){"use strict";n.r(s),s.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'text-3d-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n  text = '3D Text';\n  depth = 20;\n  rotateX = 60;\n  rotateY = 0;\n  rotateZ = 0;\n}\n"}}]);