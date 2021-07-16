!function(){function s(s,n){if(!(s instanceof n))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkextensions_srcs=self.webpackChunkextensions_srcs||[]).push([[645],{64645:function(n,a,t){"use strict";t.r(a),t.d(a,{ProgressApiComponent:function(){return Q},ProgressModule:function(){return S},ProgressOverviewComponent:function(){return _}});var l=t(54655),e=t(63270),p=t(37716),o=t(82613),r=t(3679),c=t(54436),i=t(7539),g=t(38583),u=t(98295),h=t(90156),m=function(s,n){return{"mtx-progress-fill-striped":s,"mtx-progress-fill-animated":n}},d=function(s,n){return{"width.%":s,"background-color":n}},j=["*"],f=function(){var n=function n(){s(this,n),this.type="info",this.value=0};return n.\u0275fac=function(s){return new(s||n)},n.\u0275cmp=p.Xpm({type:n,selectors:[["mtx-progress"]],hostAttrs:[1,"mtx-progress"],hostVars:4,hostBindings:function(s,n){2&s&&p.Udp("height",n.height)("background-color",n.background)},inputs:{type:"type",value:"value",height:"height",color:"color",foreground:"foreground",background:"background",striped:"striped",animate:"animate"},exportAs:["mtxProgress"],ngContentSelectors:j,decls:2,vars:10,consts:[["role","progress-fill",3,"ngClass","ngStyle"]],template:function(s,n){1&s&&(p.F$t(),p.TgZ(0,"div",0),p.Hsn(1),p.qZA()),2&s&&(p.Tol("mtx-progress-fill mtx-progress-fill-"+n.type),p.Q6J("ngClass",p.WLB(4,m,n.striped,n.animate))("ngStyle",p.WLB(7,d,n.value,n.foreground)))},directives:[g.mk,g.PC],styles:[".mtx-progress{display:flex;height:1rem;margin:8px 0;overflow:hidden;font-size:.75rem;border-radius:.25rem}.mtx-progress-fill{display:flex;flex-direction:column;justify-content:center;text-align:center;transition:width .6s ease}.mtx-progress-fill-striped{background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-size:1rem 1rem}.mtx-progress-fill-animated{-webkit-animation:mtx-progress-fill-stripes 1s linear infinite;animation:mtx-progress-fill-stripes 1s linear infinite}@media (prefers-reduced-motion: reduce){.mtx-progress-fill-animated{-webkit-animation:none;animation:none}}@-webkit-keyframes mtx-progress-fill-stripes{0%{background-position:1rem 0}to{background-position:0 0}}@keyframes mtx-progress-fill-stripes{0%{background-position:1rem 0}to{background-position:0 0}}"],encapsulation:2,changeDetection:0}),n}(),x=t(51095),b=t(76627);function q(s,n){if(1&s){var a=p.EpF();p.TgZ(0,"mat-checkbox",6),p.NdJ("ngModelChange",function(s){return p.CHM(a),p.oxw().animate=s}),p._uU(1,"Animate "),p.qZA()}if(2&s){var t=p.oxw();p.Q6J("ngModel",t.animate)("labelPosition","before")}}function k(s,n){if(1&s){var a=p.EpF();p.TgZ(0,"button",11),p.NdJ("click",function(){return p.CHM(a),p.oxw().foreground=""}),p.TgZ(1,"mat-icon"),p._uU(2,"close"),p.qZA(),p.qZA()}}function v(s,n){if(1&s){var a=p.EpF();p.TgZ(0,"button",11),p.NdJ("click",function(){return p.CHM(a),p.oxw().background=""}),p.TgZ(1,"mat-icon"),p._uU(2,"close"),p.qZA(),p.qZA()}}var Z,y={title:"Configurable progress",component:(Z=function n(){s(this,n),this.type="info",this.value=50,this.striped=!1,this.animate=!1,this.height=16,this.foreground="",this.background=""},Z.\u0275fac=function(s){return new(s||Z)},Z.\u0275cmp=p.Xpm({type:Z,selectors:[["progress-example"]],decls:41,vars:18,consts:[[3,"ngModel","ngModelChange"],["value","info"],["value","success"],["value","warning"],["value","danger"],["min","0","max","100","thumbLabel","",3,"ngModel","ngModelChange"],[3,"ngModel","labelPosition","ngModelChange"],[3,"ngModel","labelPosition","ngModelChange",4,"ngIf"],["min","1","max","16","thumbLabel","",3,"ngModel","ngModelChange"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[3,"type","value","striped","animate","height","foreground","background"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"]],template:function(s,n){1&s&&(p.TgZ(0,"h2"),p._uU(1,"Progress configuration"),p.qZA(),p.TgZ(2,"section"),p.TgZ(3,"label"),p._uU(4,"Type:"),p.qZA(),p.TgZ(5,"mat-radio-group",0),p.NdJ("ngModelChange",function(s){return n.type=s}),p.TgZ(6,"mat-radio-button",1),p._uU(7,"Info"),p.qZA(),p.TgZ(8,"mat-radio-button",2),p._uU(9,"Success"),p.qZA(),p.TgZ(10,"mat-radio-button",3),p._uU(11,"Warning"),p.qZA(),p.TgZ(12,"mat-radio-button",4),p._uU(13,"Danger"),p.qZA(),p.qZA(),p.qZA(),p.TgZ(14,"section"),p.TgZ(15,"label"),p._uU(16,"Progress:"),p.qZA(),p.TgZ(17,"mat-slider",5),p.NdJ("ngModelChange",function(s){return n.value=s}),p.qZA(),p.qZA(),p.TgZ(18,"section"),p.TgZ(19,"mat-checkbox",6),p.NdJ("ngModelChange",function(s){return n.striped=s}),p._uU(20,"Striped"),p.qZA(),p.YNc(21,q,2,2,"mat-checkbox",7),p.qZA(),p.TgZ(22,"section"),p.TgZ(23,"label"),p._uU(24,"Height:"),p.qZA(),p.TgZ(25,"mat-slider",8),p.NdJ("ngModelChange",function(s){return n.height=s}),p.qZA(),p.qZA(),p.TgZ(26,"section"),p.TgZ(27,"mat-form-field"),p.TgZ(28,"mat-label"),p._uU(29,"Foreground color"),p.qZA(),p.TgZ(30,"mtx-color-picker",0),p.NdJ("ngModelChange",function(s){return n.foreground=s}),p.qZA(),p.YNc(31,k,3,0,"button",9),p.qZA(),p.TgZ(32,"mat-form-field"),p.TgZ(33,"mat-label"),p._uU(34,"Background color"),p.qZA(),p.TgZ(35,"mtx-color-picker",0),p.NdJ("ngModelChange",function(s){return n.background=s}),p.qZA(),p.YNc(36,v,3,0,"button",9),p.qZA(),p.qZA(),p.TgZ(37,"h2"),p._uU(38,"Result"),p.qZA(),p.TgZ(39,"mtx-progress",10),p._uU(40),p.qZA()),2&s&&(p.xp6(5),p.Q6J("ngModel",n.type),p.xp6(12),p.Q6J("ngModel",n.value),p.xp6(2),p.Q6J("ngModel",n.striped)("labelPosition","before"),p.xp6(2),p.Q6J("ngIf",n.striped),p.xp6(4),p.Q6J("ngModel",n.height),p.xp6(5),p.Q6J("ngModel",n.foreground),p.xp6(1),p.Q6J("ngIf",n.foreground),p.xp6(4),p.Q6J("ngModel",n.background),p.xp6(1),p.Q6J("ngIf",n.background),p.xp6(3),p.Q6J("type",n.type)("value",n.value)("striped",n.striped)("animate",n.animate)("height",n.height+"px")("foreground",n.foreground)("background",n.background),p.xp6(1),p.hij(" ",n.height>=14?n.value+"%":"","\n"))},directives:[o.VQ,r.JJ,r.On,o.U0,c.pH,i.oG,g.O5,u.KE,u.hX,h.J,f,x.lW,u.R9,b.Hw],styles:[".mat-radio-button[_ngcontent-%COMP%]{margin:1em}.mat-checkbox[_ngcontent-%COMP%]{display:inline-block;margin:1rem 1rem 1rem 0}.mat-form-field[_ngcontent-%COMP%]{margin-right:1rem}"]}),Z),files:[{file:"app.component.html",content:t(21797),filecontent:t(37736)},{file:"app.component.ts",content:t(80125),filecontent:t(95138)},{file:"app.component.scss",content:t(53973),filecontent:t(43235)}]},C={title:"Custom Color",component:function(){var n=function n(){s(this,n)};return n.\u0275fac=function(s){return new(s||n)},n.\u0275cmp=p.Xpm({type:n,selectors:[["progress-example"]],decls:6,vars:5,consts:[["foreground","#3949AB",3,"value"],["foreground","#6D4C41",3,"value","striped"],["foreground","#880E4F","background","#FCE4EC",3,"value","striped"]],template:function(s,n){1&s&&(p.TgZ(0,"mtx-progress",0),p._uU(1,"40%"),p.qZA(),p.TgZ(2,"mtx-progress",1),p._uU(3,"70%"),p.qZA(),p.TgZ(4,"mtx-progress",2),p._uU(5,"60%\n"),p.qZA()),2&s&&(p.Q6J("value",40),p.xp6(2),p.Q6J("value",70)("striped",!0),p.xp6(2),p.Q6J("value",60)("striped",!0))},directives:[f],styles:[""]}),n}(),files:[{file:"app.component.html",content:t(1026),filecontent:t(27422)},{file:"app.component.ts",content:t(77921),filecontent:t(84207)},{file:"app.component.scss",content:t(16342),filecontent:t(73805)}]},M=t(22281),A=t(29241);function T(s,n){if(1&s&&(p.ynx(0),p._UZ(1,"example-viewer",2),p.BQk()),2&s){var a=n.$implicit;p.xp6(1),p.Q6J("exampleData",a)}}function w(s,n){if(1&s&&(p.ynx(0),p.YNc(1,T,2,1,"ng-container",1),p.BQk()),2&s){var a=n.ngIf;p.xp6(1),p.Q6J("ngForOf",a.examples)}}function J(s,n){if(1&s&&(p.ynx(0),p._UZ(1,"doc-viewer",1),p.BQk()),2&s){var a=n.ngIf;p.xp6(1),p.Q6J("textContent",a.content.default)}}var P,U,I,_=((I=function n(a){s(this,n),this.route=a}).\u0275fac=function(s){return new(s||I)(p.Y36(l.gz))},I.\u0275cmp=p.Xpm({type:I,selectors:[["app-progress-overview"]],decls:2,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"exampleData"]],template:function(s,n){1&s&&(p.YNc(0,w,2,1,"ng-container",0),p.ALo(1,"async")),2&s&&p.Q6J("ngIf",p.lcZ(1,1,n.route.data))},directives:[g.O5,g.sg,M.B],pipes:[g.Ov],encapsulation:2}),I),Q=((U=function n(a){s(this,n),this.route=a}).\u0275fac=function(s){return new(s||U)(p.Y36(l.gz))},U.\u0275cmp=p.Xpm({type:U,selectors:[["app-progress-api"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"textContent"]],template:function(s,n){1&s&&(p.YNc(0,J,2,1,"ng-container",0),p.ALo(1,"async")),2&s&&p.Q6J("ngIf",p.lcZ(1,1,n.route.data))},directives:[g.O5,A.z],pipes:[g.Ov],encapsulation:2}),U),S=((P=function n(){s(this,n)}).\u0275fac=function(s){return new(s||P)},P.\u0275mod=p.oAB({type:P}),P.\u0275inj=p.cJS({imports:[[e.m,l.Bz.forChild([{path:"",redirectTo:"overview",pathMatch:"full"},{path:"overview",component:_,pathMatch:"full",data:{examples:[y,C]}},{path:"api",component:Q,pathMatch:"full",data:{content:t(32615)}},{path:"**",redirectTo:"overview"}])]]}),P)},21797:function(s){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Progress configuration<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Type:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-group</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;type&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>Info<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Success<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>Warning<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>Danger<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Progress:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-slider</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;100&quot;</span> <span class="hljs-attr">thumbLabel</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;value&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mat-slider</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;striped&quot;</span> [<span class="hljs-attr">labelPosition</span>]=<span class="hljs-string">&quot;&#x27;before&#x27;&quot;</span>&gt;</span>Striped<span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">&quot;striped&quot;</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;animate&quot;</span> [<span class="hljs-attr">labelPosition</span>]=<span class="hljs-string">&quot;&#x27;before&#x27;&quot;</span>&gt;</span>Animate\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Height:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-slider</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;16&quot;</span> <span class="hljs-attr">thumbLabel</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;height&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mat-slider</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-label</span>&gt;</span>Foreground color<span class="hljs-tag">&lt;/<span class="hljs-name">mat-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mtx-color-picker</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;foreground&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">mtx-color-picker</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-button</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">&quot;foreground&quot;</span> <span class="hljs-attr">matSuffix</span> <span class="hljs-attr">mat-icon-button</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">&quot;Clear&quot;</span>\n            (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;foreground=&#x27;&#x27;&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">mat-icon</span>&gt;</span>close<span class="hljs-tag">&lt;/<span class="hljs-name">mat-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-label</span>&gt;</span>Background color<span class="hljs-tag">&lt;/<span class="hljs-name">mat-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mtx-color-picker</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;background&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">mtx-color-picker</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-button</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">&quot;background&quot;</span> <span class="hljs-attr">matSuffix</span> <span class="hljs-attr">mat-icon-button</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">&quot;Clear&quot;</span>\n            (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;background=&#x27;&#x27;&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">mat-icon</span>&gt;</span>close<span class="hljs-tag">&lt;/<span class="hljs-name">mat-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Result<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-progress</span> [<span class="hljs-attr">type</span>]=<span class="hljs-string">&quot;type&quot;</span>\n              [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;value&quot;</span>\n              [<span class="hljs-attr">striped</span>]=<span class="hljs-string">&quot;striped&quot;</span> [<span class="hljs-attr">animate</span>]=<span class="hljs-string">&quot;animate&quot;</span>\n              [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;height + &#x27;px&#x27;&quot;</span>\n              [<span class="hljs-attr">foreground</span>]=<span class="hljs-string">&quot;foreground&quot;</span> [<span class="hljs-attr">background</span>]=<span class="hljs-string">&quot;background&quot;</span>&gt;</span>\n  {{height&gt;=14 ? value + &#x27;%&#x27; : &#x27;&#x27;}}\n<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-progress</span>&gt;</span>\n'},1026:function(s){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">mtx-progress</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;40&quot;</span> <span class="hljs-attr">foreground</span>=<span class="hljs-string">&quot;#3949AB&quot;</span>&gt;</span>40%<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-progress</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-progress</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;70&quot;</span> [<span class="hljs-attr">striped</span>]=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">foreground</span>=<span class="hljs-string">&quot;#6D4C41&quot;</span>&gt;</span>70%<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-progress</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-progress</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;60&quot;</span> [<span class="hljs-attr">striped</span>]=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">foreground</span>=<span class="hljs-string">&quot;#880E4F&quot;</span> <span class="hljs-attr">background</span>=<span class="hljs-string">&quot;#FCE4EC&quot;</span>&gt;</span>60%\n<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-progress</span>&gt;</span>\n'},53973:function(s){s.exports='<span class="hljs-selector-class">.mat-radio-button</span> {\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">1em</span>;\n}\n\n<span class="hljs-selector-class">.mat-checkbox</span> {\n  <span class="hljs-attribute">display</span>: inline-block;\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">1rem</span> <span class="hljs-number">1rem</span> <span class="hljs-number">1rem</span> <span class="hljs-number">0</span>;\n}\n\n<span class="hljs-selector-class">.mat-form-field</span> {\n  <span class="hljs-attribute">margin-right</span>: <span class="hljs-number">1rem</span>;\n}\n'},16342:function(s){s.exports='<span class="hljs-comment">/** No CSS for this example */</span>\n'},80125:function(s){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { MtxProgressType } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@ng-matero/extensions&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;progress-example&#x27;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{\n  <span class="hljs-attr">type</span>: MtxProgressType = <span class="hljs-string">&#x27;info&#x27;</span>;\n  value = <span class="hljs-number">50</span>;\n  striped = <span class="hljs-literal">false</span>;\n  animate = <span class="hljs-literal">false</span>;\n  height = <span class="hljs-number">16</span>;\n  foreground = <span class="hljs-string">&#x27;&#x27;</span>;\n  background = <span class="hljs-string">&#x27;&#x27;</span>;\n}\n'},77921:function(s){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;progress-example&#x27;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}\n'},32615:function(s,n,a){"use strict";a.r(n),n.default='<h1 id="progress">Progress</h1>\n<h2 id="api-reference-for-material-extensions-progress">API reference for Material Extensions Progress</h2>\n<p><code>import { MtxProgressModule } from &apos;@ng-matero/extensions/progress&apos;;</code></p>\n<h3 id="directives">Directives</h3>\n<h4 id="mtxprogress"><code>MtxProgress</code></h4>\n<p>Selector: <code>[mtx-progress]</code></p>\n<p>Exported as: <code>mtxProgress</code></p>\n<h5 id="properties">Properties</h5>\n<table>\n<thead>\n<tr>\n<th align="left"><strong>Name</strong></th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">@Input() <code>type: &apos;default&apos; | &apos;info&apos; | &apos;success&apos; | &apos;warning&apos; | &apos;danger&apos;</code></td>\n<td align="left">The progress types. Defaulted to <strong><code>&apos;info&apos;</code></strong>.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>value: number</code></td>\n<td align="left">The progress value. Defaulted to <strong><code>0</code></strong>.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>height: number</code></td>\n<td align="left">The progress height.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>color: string</code></td>\n<td align="left">The progress text color.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>foreground: string</code></td>\n<td align="left">The progress bar color.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>background: string</code></td>\n<td align="left">The progress track color.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>striped: boolean</code></td>\n<td align="left">Whether applies striped class.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>animate: boolean</code></td>\n<td align="left">Whether applies animated class.</td>\n</tr>\n</tbody></table>\n'},37736:function(s,n,a){"use strict";a.r(n),n.default='<h2>Progress configuration</h2>\n\n<section>\n  <label>Type:</label>\n  <mat-radio-group [(ngModel)]="type">\n    <mat-radio-button value="info">Info</mat-radio-button>\n    <mat-radio-button value="success">Success</mat-radio-button>\n    <mat-radio-button value="warning">Warning</mat-radio-button>\n    <mat-radio-button value="danger">Danger</mat-radio-button>\n  </mat-radio-group>\n</section>\n\n<section>\n  <label>Progress:</label>\n  <mat-slider min="0" max="100" thumbLabel [(ngModel)]="value"></mat-slider>\n</section>\n\n<section>\n  <mat-checkbox [(ngModel)]="striped" [labelPosition]="\'before\'">Striped</mat-checkbox>\n  <mat-checkbox *ngIf="striped" [(ngModel)]="animate" [labelPosition]="\'before\'">Animate\n  </mat-checkbox>\n</section>\n\n<section>\n  <label>Height:</label>\n  <mat-slider min="1" max="16" thumbLabel [(ngModel)]="height"></mat-slider>\n</section>\n\n<section>\n  <mat-form-field>\n    <mat-label>Foreground color</mat-label>\n    <mtx-color-picker [(ngModel)]="foreground">\n    </mtx-color-picker>\n    <button mat-button *ngIf="foreground" matSuffix mat-icon-button aria-label="Clear"\n            (click)="foreground=\'\'">\n      <mat-icon>close</mat-icon>\n    </button>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>Background color</mat-label>\n    <mtx-color-picker [(ngModel)]="background">\n    </mtx-color-picker>\n    <button mat-button *ngIf="background" matSuffix mat-icon-button aria-label="Clear"\n            (click)="background=\'\'">\n      <mat-icon>close</mat-icon>\n    </button>\n  </mat-form-field>\n</section>\n\n<h2>Result</h2>\n\n<mtx-progress [type]="type"\n              [value]="value"\n              [striped]="striped" [animate]="animate"\n              [height]="height + \'px\'"\n              [foreground]="foreground" [background]="background">\n  {{height>=14 ? value + \'%\' : \'\'}}\n</mtx-progress>\n'},43235:function(s,n,a){"use strict";a.r(n),n.default=".mat-radio-button {\n  margin: 1em;\n}\n\n.mat-checkbox {\n  display: inline-block;\n  margin: 1rem 1rem 1rem 0;\n}\n\n.mat-form-field {\n  margin-right: 1rem;\n}\n"},95138:function(s,n,a){"use strict";a.r(n),n.default="import { Component } from '@angular/core';\nimport { MtxProgressType } from '@ng-matero/extensions';\n\n@Component({\n  selector: 'progress-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n  type: MtxProgressType = 'info';\n  value = 50;\n  striped = false;\n  animate = false;\n  height = 16;\n  foreground = '';\n  background = '';\n}\n"},27422:function(s,n,a){"use strict";a.r(n),n.default='<mtx-progress [value]="40" foreground="#3949AB">40%</mtx-progress>\n<mtx-progress [value]="70" [striped]="true" foreground="#6D4C41">70%</mtx-progress>\n<mtx-progress [value]="60" [striped]="true" foreground="#880E4F" background="#FCE4EC">60%\n</mtx-progress>\n'},73805:function(s,n,a){"use strict";a.r(n),n.default="/** No CSS for this example */\n"},84207:function(s,n,a){"use strict";a.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'progress-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {}\n"}}])}();