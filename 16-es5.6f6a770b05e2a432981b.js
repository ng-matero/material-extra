!function(){function s(s,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(s,t.key,t)}}function a(s,a){if(!(s instanceof a))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"1pVs":function(s,a){s.exports='<span class="hljs-selector-class">.mat-radio-button</span> {\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">1em</span>;\n}\n\n<span class="hljs-selector-class">.mat-checkbox</span> {\n  <span class="hljs-attribute">display</span>: inline-block;\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">1rem</span> <span class="hljs-number">1rem</span> <span class="hljs-number">1rem</span> <span class="hljs-number">0</span>;\n}\n\n<span class="hljs-selector-class">.mtx-form-group</span> {\n  <span class="hljs-attribute">display</span>: block;\n}\n'},"9W4b":function(s,n,t){"use strict";t.r(n),t.d(n,"FormGroupOverviewComponent",(function(){return C})),t.d(n,"FormGroupApiComponent",(function(){return _})),t.d(n,"FormGroupModule",(function(){return P}));var e=t("sEIs"),l=t("M0ag"),p=t("EM62"),o=t("F1o0"),r=t("nIj0"),c=t("+Tre"),i=t("QzYN"),m=t("29Wa"),u=t("Cd2c"),d=t("bFHC"),h=t("R7+U"),g=t("2kYt"),b=t("cMjj"),j=t("gcUQ"),f=t("mFH5");function q(s,a){if(1&s&&(p.Tb(0,"mat-option",19),p.Nc(1),p.Sb()),2&s){var n=a.$implicit;p.nc("value",n.value),p.Bb(1),p.Pc(" ",n.viewValue," ")}}var x,v={title:"Basic",description:"",component:(x=function s(){a(this,s),this.color="primary",this.required=!1,this.disabled=!1,this.foods=[{value:"steak-0",viewValue:"Steak"},{value:"pizza-1",viewValue:"Pizza"},{value:"tacos-2",viewValue:"Tacos"}]},x.\u0275fac=function(s){return new(s||x)},x.\u0275cmp=p.Hb({type:x,selectors:[["form-group-example"]],decls:57,vars:34,consts:[[3,"ngModel","ngModelChange"],["value","primary"],["value","accent"],["value","warn"],[3,"ngModel","labelPosition","ngModelChange"],["label","Mat Input",3,"showRequiredMarker"],[3,"color"],["matInput","","placeholder","Placeholder",3,"ngModel","required","disabled","ngModelChange"],["matSuffix",""],["label","Mat Select",3,"showRequiredMarker"],["name","food","placeholder","Placeholder",3,"ngModel","required","disabled","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["label","Mtx Select",3,"showRequiredMarker"],["bindLabel","viewValue","bindValue","value","placeholder","Placeholder",3,"ngModel","items","required","disabled","ngModelChange"],["label","Mat Textarea",3,"showRequiredMarker"],["label","Mat Datepicker",3,"showRequiredMarker"],["matInput","","placeholder","Choose a date",3,"ngModel","matDatepicker","required","disabled","ngModelChange"],["matSuffix","",3,"for"],["picker",""],[3,"value"]],template:function(s,a){if(1&s&&(p.Tb(0,"section"),p.Tb(1,"label"),p.Nc(2,"Color:"),p.Sb(),p.Tb(3,"mat-radio-group",0),p.bc("ngModelChange",(function(s){return a.color=s})),p.Tb(4,"mat-radio-button",1),p.Nc(5,"primary"),p.Sb(),p.Tb(6,"mat-radio-button",2),p.Nc(7,"accent"),p.Sb(),p.Tb(8,"mat-radio-button",3),p.Nc(9,"warn"),p.Sb(),p.Sb(),p.Sb(),p.Tb(10,"section"),p.Tb(11,"mat-checkbox",4),p.bc("ngModelChange",(function(s){return a.required=s})),p.Nc(12,"Required"),p.Sb(),p.Sb(),p.Tb(13,"section"),p.Tb(14,"mat-checkbox",4),p.bc("ngModelChange",(function(s){return a.disabled=s})),p.Nc(15,"Disabled"),p.Sb(),p.Sb(),p.Tb(16,"h2"),p.Nc(17,"Result"),p.Sb(),p.Tb(18,"mtx-form-group",5),p.Tb(19,"mat-form-field",6),p.Tb(20,"input",7),p.bc("ngModelChange",(function(s){return a.text=s})),p.Sb(),p.Tb(21,"mat-icon",8),p.Nc(22,"sentiment_very_satisfied"),p.Sb(),p.Tb(23,"mat-hint"),p.Nc(24,"Hint"),p.Sb(),p.Sb(),p.Sb(),p.Tb(25,"mtx-form-group",9),p.Tb(26,"mat-form-field",6),p.Tb(27,"mat-select",10),p.bc("ngModelChange",(function(s){return a.selectedFood=s})),p.Lc(28,q,2,2,"mat-option",11),p.Sb(),p.Tb(29,"mat-icon",8),p.Nc(30,"sentiment_very_satisfied"),p.Sb(),p.Tb(31,"mat-hint"),p.Nc(32,"Hint"),p.Sb(),p.Sb(),p.Sb(),p.Tb(33,"mtx-form-group",12),p.Tb(34,"mat-form-field",6),p.Tb(35,"mtx-select",13),p.bc("ngModelChange",(function(s){return a.selectedFood=s})),p.Sb(),p.Tb(36,"mat-icon",8),p.Nc(37,"sentiment_very_satisfied"),p.Sb(),p.Tb(38,"mat-hint"),p.Nc(39,"Hint"),p.Sb(),p.Sb(),p.Sb(),p.Tb(40,"mtx-form-group",14),p.Tb(41,"mat-form-field",6),p.Tb(42,"textarea",7),p.bc("ngModelChange",(function(s){return a.text=s})),p.Sb(),p.Tb(43,"mat-icon",8),p.Nc(44,"sentiment_very_satisfied"),p.Sb(),p.Tb(45,"mat-hint"),p.Nc(46,"Hint"),p.Sb(),p.Sb(),p.Sb(),p.Tb(47,"mtx-form-group",15),p.Tb(48,"mat-form-field",6),p.Tb(49,"input",16),p.bc("ngModelChange",(function(s){return a.date=s})),p.Sb(),p.Ob(50,"mat-datepicker-toggle",17),p.Ob(51,"mat-datepicker",null,18),p.Tb(53,"mat-icon",8),p.Nc(54,"sentiment_very_satisfied"),p.Sb(),p.Tb(55,"mat-hint"),p.Nc(56,"Hint"),p.Sb(),p.Sb(),p.Sb()),2&s){var n=p.wc(52);p.Bb(3),p.nc("ngModel",a.color),p.Bb(8),p.nc("ngModel",a.required)("labelPosition","before"),p.Bb(3),p.nc("ngModel",a.disabled)("labelPosition","before"),p.Bb(4),p.nc("showRequiredMarker",a.required),p.Bb(1),p.nc("color",a.color),p.Bb(1),p.nc("ngModel",a.text)("required",a.required)("disabled",a.disabled),p.Bb(5),p.nc("showRequiredMarker",a.required),p.Bb(1),p.nc("color",a.color),p.Bb(1),p.nc("ngModel",a.selectedFood)("required",a.required)("disabled",a.disabled),p.Bb(1),p.nc("ngForOf",a.foods),p.Bb(5),p.nc("showRequiredMarker",a.required),p.Bb(1),p.nc("color",a.color),p.Bb(1),p.nc("ngModel",a.selectedFood)("items",a.foods)("required",a.required)("disabled",a.disabled),p.Bb(5),p.nc("showRequiredMarker",a.required),p.Bb(1),p.nc("color",a.color),p.Bb(1),p.nc("ngModel",a.text)("required",a.required)("disabled",a.disabled),p.Bb(5),p.nc("showRequiredMarker",a.required),p.Bb(1),p.nc("color",a.color),p.Bb(1),p.nc("ngModel",a.date)("matDatepicker",n)("required",a.required)("disabled",a.disabled),p.Bb(1),p.nc("for",n)}},directives:[o.b,r.m,r.p,o.a,c.a,i.a,m.c,u.b,r.d,r.x,d.a,m.j,m.f,h.a,g.s,b.a,j.b,j.d,j.a,f.o],styles:[".mat-radio-button[_ngcontent-%COMP%]{margin:1em}.mat-checkbox[_ngcontent-%COMP%]{display:inline-block;margin:1rem 1rem 1rem 0}.mtx-form-group[_ngcontent-%COMP%]{display:block}"]}),x),files:[{file:"app.component.html",content:t("Vu83"),filecontent:t("xqW9")},{file:"app.component.ts",content:t("VZPB"),filecontent:t("Af+S")},{file:"app.component.scss",content:t("1pVs"),filecontent:t("mH1E")}]},M=t("Pg5x");function w(s,a){if(1&s&&(p.Rb(0),p.Ob(1,"example-viewer",3),p.Qb()),2&s){var n=a.$implicit;p.Bb(1),p.nc("exampleData",n)}}function k(s,a){if(1&s&&(p.Rb(0),p.Lc(1,w,2,1,"ng-container",2),p.Qb()),2&s){var n=a.ngIf;p.Bb(1),p.nc("ngForOf",n.examples)}}var S,y,T,C=((T=function s(n){a(this,s),this.route=n}).\u0275fac=function(s){return new(s||T)(p.Nb(e.a))},T.\u0275cmp=p.Hb({type:T,selectors:[["app-form-group-overview"]],decls:5,vars:3,consts:[["href","https://developer.microsoft.com/en-us/fluentui#/controls/web/textfield","target","_blank"],[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"exampleData"]],template:function(s,a){1&s&&(p.Tb(0,"p"),p.Tb(1,"a",0),p.Nc(2,"Fluent UI"),p.Sb(),p.Sb(),p.Lc(3,k,2,1,"ng-container",1),p.gc(4,"async")),2&s&&(p.Bb(3),p.nc("ngIf",p.hc(4,1,a.route.data)))},directives:[g.t,g.s,M.a],pipes:[g.b],encapsulation:2}),T),_=((y=function s(n){a(this,s),this.route=n}).\u0275fac=function(s){return new(s||y)(p.Nb(e.a))},y.\u0275cmp=p.Hb({type:y,selectors:[["app-form-group-api"]],decls:1,vars:0,template:function(s,a){1&s&&p.Nc(0,"Coming soon\n")},encapsulation:2}),y),P=((S=function s(){a(this,s)}).\u0275mod=p.Lb({type:S}),S.\u0275inj=p.Kb({factory:function(s){return new(s||S)},imports:[[l.c,e.j.forChild([{path:"",redirectTo:"overview",pathMatch:"full"},{path:"overview",component:C,pathMatch:"full",data:{examples:[v]}},{path:"api",component:_,pathMatch:"full"},{path:"**",redirectTo:"overview"}])]]}),S)},"Af+S":function(s,a,n){"use strict";n.r(a),a.default="import { Component } from '@angular/core';\nimport { ThemePalette } from '@angular/material/core';\n\ninterface Food {\n  value: string;\n  viewValue: string;\n}\n\n@Component({\n  selector: 'form-group-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n  color: ThemePalette = 'primary';\n  required = false;\n  disabled = false;\n\n  foods: Food[] = [\n    { value: 'steak-0', viewValue: 'Steak' },\n    { value: 'pizza-1', viewValue: 'Pizza' },\n    { value: 'tacos-2', viewValue: 'Tacos' },\n  ];\n\n  selectedFood: string;\n\n  text: string;\n\n  date: string;\n}\n"},Pg5x:function(n,t,e){"use strict";e.d(t,"a",(function(){return f}));var l=e("EM62"),p=e("W1gw"),o=e("cTZo"),r=e("PBFl"),c=e("Y2X+"),i=e("bFHC"),m=e("2kYt"),u=e("KZIX"),d=["demo"];function h(s,a){if(1&s){var n=l.Ub();l.Tb(0,"mat-tab",10),l.Tb(1,"div",11),l.Tb(2,"div",12),l.Tb(3,"button",13),l.bc("click",(function(){l.Ac(n);var s=l.wc(8);return l.fc(2).copySource(s)})),l.Tb(4,"mat-icon"),l.Nc(5,"content_copy"),l.Sb(),l.Sb(),l.Sb(),l.Tb(6,"div",14),l.Ob(7,"pre",15,16),l.Sb(),l.Sb(),l.Sb()}if(2&s){var t=a.$implicit;l.nc("label",t.file),l.Bb(3),l.nc("matTooltip","Copy example source"),l.Bb(4),l.nc("innerHtml",t.content,l.Bc)}}function g(s,a){if(1&s&&(l.Tb(0,"div",8),l.Tb(1,"mat-tab-group"),l.Lc(2,h,9,3,"mat-tab",9),l.Sb(),l.Sb()),2&s){var n=l.fc();l.Bb(2),l.nc("ngForOf",n.exampleData.files)}}function b(s,a){if(1&s&&l.Ob(0,"div",17),2&s){var n=l.fc();l.nc("innerHtml",n.exampleData.description,l.Bc)}}function j(s,a){}var f=function(){var n=function(){function n(s,t,e){a(this,n),this.snackbar=s,this.copier=t,this.componentFactoryResolver=e,this.showSource=!1}var t,e,l;return t=n,(e=[{key:"ngOnInit",value:function(){var s=this.componentFactoryResolver.resolveComponentFactory(this.exampleData.component);this.demoComponentRef=this.demoRef.createComponent(s)}},{key:"ngOnDestroy",value:function(){this.demoComponentRef&&this.demoComponentRef.destroy()}},{key:"toggleSourceView",value:function(){this.showSource=!this.showSource}},{key:"copySource",value:function(s){this.copier.copyText(s.innerText)?this.snackbar.open("Code copied","",{duration:2500}):this.snackbar.open("Copy failed. Please try again!","",{duration:2500})}}])&&s(t.prototype,e),l&&s(t,l),n}();return n.\u0275fac=function(s){return new(s||n)(l.Nb(p.a),l.Nb(o.a),l.Nb(l.j))},n.\u0275cmp=l.Hb({type:n,selectors:[["example-viewer"]],viewQuery:function(s,a){var n;1&s&&l.Gc(d,!0,l.R),2&s&&l.vc(n=l.cc())&&(a.demoRef=n.first)},inputs:{type:"type",exampleData:"exampleData"},decls:13,vars:4,consts:[[1,"docs-example-viewer-wrapper"],[1,"docs-example-viewer-title"],[1,"docs-example-viewer-title-spacer"],["mat-icon-button","","type","button",3,"matTooltip","click"],["class","docs-example-viewer-source",4,"ngIf"],[1,"docs-example-viewer-body"],[3,"innerHtml",4,"ngIf"],["demo",""],[1,"docs-example-viewer-source"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[1,"docs-example-source-wrapper"],[1,"button-bar"],["mat-icon-button","","type","button","title","Copy example source","aria-label","Copy example source to clipboard",1,"docs-example-source-copy","docs-example-button",3,"matTooltip","click"],[1,"code-snippet"],[1,"docs-example-source",3,"innerHtml"],["textContent",""],[3,"innerHtml"]],template:function(s,a){1&s&&(l.Tb(0,"div",0),l.Tb(1,"div",1),l.Tb(2,"span"),l.Nc(3),l.Sb(),l.Ob(4,"div",2),l.Tb(5,"button",3),l.bc("click",(function(){return a.toggleSourceView()})),l.Tb(6,"mat-icon"),l.Nc(7,"code"),l.Sb(),l.Sb(),l.Sb(),l.Lc(8,g,3,1,"div",4),l.Tb(9,"div",5),l.Lc(10,b,1,1,"div",6),l.Lc(11,j,0,0,"ng-template",null,7,l.Mc),l.Sb(),l.Sb()),2&s&&(l.Bb(3),l.Oc(a.exampleData.title),l.Bb(2),l.nc("matTooltip","View source"),l.Bb(3),l.nc("ngIf",a.showSource),l.Bb(2),l.nc("ngIf",a.exampleData.description))},directives:[r.b,c.a,i.a,m.t,u.b,m.s,u.a],styles:["[_nghost-%COMP%]{display:block;padding:20px 0}.docs-example-viewer-wrapper[_ngcontent-%COMP%]{border-radius:4px}.docs-example-viewer-title[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;justify-content:center;padding:8px 8px 8px 16px}.docs-example-viewer-title-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.docs-example-viewer-body[_ngcontent-%COMP%]{padding:30px}.button-bar[_ngcontent-%COMP%]{float:right;padding:8px}.code-snippet[_ngcontent-%COMP%]{padding:20px}.docs-example-source[_ngcontent-%COMP%]{padding:0;margin:0;border:none;background:none;font-size:14px}"]}),n}()},VZPB:function(s,a){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { ThemePalette } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/material/core&#x27;</span>;\n\n<span class="hljs-keyword">interface</span> Food {\n  value: <span class="hljs-built_in">string</span>;\n  viewValue: <span class="hljs-built_in">string</span>;\n}\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">&#x27;form-group-example&#x27;</span>,\n  templateUrl: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  styleUrls: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  color: ThemePalette = <span class="hljs-string">&#x27;primary&#x27;</span>;\n  required = <span class="hljs-literal">false</span>;\n  disabled = <span class="hljs-literal">false</span>;\n\n  foods: Food[] = [\n    { value: <span class="hljs-string">&#x27;steak-0&#x27;</span>, viewValue: <span class="hljs-string">&#x27;Steak&#x27;</span> },\n    { value: <span class="hljs-string">&#x27;pizza-1&#x27;</span>, viewValue: <span class="hljs-string">&#x27;Pizza&#x27;</span> },\n    { value: <span class="hljs-string">&#x27;tacos-2&#x27;</span>, viewValue: <span class="hljs-string">&#x27;Tacos&#x27;</span> },\n  ];\n\n  selectedFood: <span class="hljs-built_in">string</span>;\n\n  text: <span class="hljs-built_in">string</span>;\n\n  date: <span class="hljs-built_in">string</span>;\n}\n'},Vu83:function(s,a){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Color:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-group</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;color&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>primary<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;accent&quot;</span>&gt;</span>accent<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;warn&quot;</span>&gt;</span>warn<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;required&quot;</span> [<span class="hljs-attr">labelPosition</span>]=<span class="hljs-string">&quot;&#x27;before&#x27;&quot;</span>&gt;</span>Required<span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;disabled&quot;</span> [<span class="hljs-attr">labelPosition</span>]=<span class="hljs-string">&quot;&#x27;before&#x27;&quot;</span>&gt;</span>Disabled<span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Result<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-form-group</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Mat Input&quot;</span> [<span class="hljs-attr">showRequiredMarker</span>]=<span class="hljs-string">&quot;required&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span> [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;color&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">matInput</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Placeholder&quot;</span>\n           [<span class="hljs-attr">required</span>]=<span class="hljs-string">&quot;required&quot;</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;disabled&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-icon</span> <span class="hljs-attr">matSuffix</span>&gt;</span>sentiment_very_satisfied<span class="hljs-tag">&lt;/<span class="hljs-name">mat-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-hint</span>&gt;</span>Hint<span class="hljs-tag">&lt;/<span class="hljs-name">mat-hint</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-form-group</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-form-group</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Mat Select&quot;</span> [<span class="hljs-attr">showRequiredMarker</span>]=<span class="hljs-string">&quot;required&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span> [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;color&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-select</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;selectedFood&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;food&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Placeholder&quot;</span>\n                [<span class="hljs-attr">required</span>]=<span class="hljs-string">&quot;required&quot;</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;disabled&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">mat-option</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let food of foods&quot;</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;food.value&quot;</span>&gt;</span>\n        {{food.viewValue}}\n      <span class="hljs-tag">&lt;/<span class="hljs-name">mat-option</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">mat-select</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-icon</span> <span class="hljs-attr">matSuffix</span>&gt;</span>sentiment_very_satisfied<span class="hljs-tag">&lt;/<span class="hljs-name">mat-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-hint</span>&gt;</span>Hint<span class="hljs-tag">&lt;/<span class="hljs-name">mat-hint</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-form-group</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-form-group</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Mtx Select&quot;</span> [<span class="hljs-attr">showRequiredMarker</span>]=<span class="hljs-string">&quot;required&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span> [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;color&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mtx-select</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;selectedFood&quot;</span> [<span class="hljs-attr">items</span>]=<span class="hljs-string">&quot;foods&quot;</span> <span class="hljs-attr">bindLabel</span>=<span class="hljs-string">&quot;viewValue&quot;</span> <span class="hljs-attr">bindValue</span>=<span class="hljs-string">&quot;value&quot;</span>\n                <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Placeholder&quot;</span> [<span class="hljs-attr">required</span>]=<span class="hljs-string">&quot;required&quot;</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;disabled&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">mtx-select</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-icon</span> <span class="hljs-attr">matSuffix</span>&gt;</span>sentiment_very_satisfied<span class="hljs-tag">&lt;/<span class="hljs-name">mat-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-hint</span>&gt;</span>Hint<span class="hljs-tag">&lt;/<span class="hljs-name">mat-hint</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-form-group</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-form-group</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Mat Textarea&quot;</span> [<span class="hljs-attr">showRequiredMarker</span>]=<span class="hljs-string">&quot;required&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span> [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;color&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">matInput</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Placeholder&quot;</span>\n              [<span class="hljs-attr">required</span>]=<span class="hljs-string">&quot;required&quot;</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;disabled&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-icon</span> <span class="hljs-attr">matSuffix</span>&gt;</span>sentiment_very_satisfied<span class="hljs-tag">&lt;/<span class="hljs-name">mat-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-hint</span>&gt;</span>Hint<span class="hljs-tag">&lt;/<span class="hljs-name">mat-hint</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-form-group</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-form-group</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Mat Datepicker&quot;</span> [<span class="hljs-attr">showRequiredMarker</span>]=<span class="hljs-string">&quot;required&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span> [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;color&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">matInput</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;date&quot;</span> [<span class="hljs-attr">matDatepicker</span>]=<span class="hljs-string">&quot;picker&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Choose a date&quot;</span>\n           [<span class="hljs-attr">required</span>]=<span class="hljs-string">&quot;required&quot;</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;disabled&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-datepicker-toggle</span> <span class="hljs-attr">matSuffix</span> [<span class="hljs-attr">for</span>]=<span class="hljs-string">&quot;picker&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mat-datepicker-toggle</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-datepicker</span> #<span class="hljs-attr">picker</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mat-datepicker</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-icon</span> <span class="hljs-attr">matSuffix</span>&gt;</span>sentiment_very_satisfied<span class="hljs-tag">&lt;/<span class="hljs-name">mat-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-hint</span>&gt;</span>Hint<span class="hljs-tag">&lt;/<span class="hljs-name">mat-hint</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-form-group</span>&gt;</span>\n'},mH1E:function(s,a,n){"use strict";n.r(a),a.default=".mat-radio-button {\n  margin: 1em;\n}\n\n.mat-checkbox {\n  display: inline-block;\n  margin: 1rem 1rem 1rem 0;\n}\n\n.mtx-form-group {\n  display: block;\n}\n"},xqW9:function(s,a,n){"use strict";n.r(a),a.default='<section>\n  <label>Color:</label>\n  <mat-radio-group [(ngModel)]="color">\n    <mat-radio-button value="primary">primary</mat-radio-button>\n    <mat-radio-button value="accent">accent</mat-radio-button>\n    <mat-radio-button value="warn">warn</mat-radio-button>\n  </mat-radio-group>\n</section>\n\n<section>\n  <mat-checkbox [(ngModel)]="required" [labelPosition]="\'before\'">Required</mat-checkbox>\n</section>\n\n<section>\n  <mat-checkbox [(ngModel)]="disabled" [labelPosition]="\'before\'">Disabled</mat-checkbox>\n</section>\n\n<h2>Result</h2>\n\n<mtx-form-group label="Mat Input" [showRequiredMarker]="required">\n  <mat-form-field [color]="color">\n    <input matInput [(ngModel)]="text" placeholder="Placeholder"\n           [required]="required" [disabled]="disabled">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</mtx-form-group>\n\n<mtx-form-group label="Mat Select" [showRequiredMarker]="required">\n  <mat-form-field [color]="color">\n    <mat-select [(ngModel)]="selectedFood" name="food" placeholder="Placeholder"\n                [required]="required" [disabled]="disabled">\n      <mat-option *ngFor="let food of foods" [value]="food.value">\n        {{food.viewValue}}\n      </mat-option>\n    </mat-select>\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</mtx-form-group>\n\n<mtx-form-group label="Mtx Select" [showRequiredMarker]="required">\n  <mat-form-field [color]="color">\n    <mtx-select [(ngModel)]="selectedFood" [items]="foods" bindLabel="viewValue" bindValue="value"\n                placeholder="Placeholder" [required]="required" [disabled]="disabled">\n    </mtx-select>\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</mtx-form-group>\n\n<mtx-form-group label="Mat Textarea" [showRequiredMarker]="required">\n  <mat-form-field [color]="color">\n    <textarea matInput [(ngModel)]="text" placeholder="Placeholder"\n              [required]="required" [disabled]="disabled"></textarea>\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</mtx-form-group>\n\n<mtx-form-group label="Mat Datepicker" [showRequiredMarker]="required">\n  <mat-form-field [color]="color">\n    <input matInput [(ngModel)]="date" [matDatepicker]="picker" placeholder="Choose a date"\n           [required]="required" [disabled]="disabled">\n    <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>\n    <mat-datepicker #picker></mat-datepicker>\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</mtx-form-group>\n'}}])}();