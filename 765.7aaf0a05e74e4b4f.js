"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[765],{82765:(T,_,n)=>{n.d(_,{So:()=>h,g7:()=>M});var u=n(89888),e=n(54438),s=n(89417),d=n(3),x=n(49046);const p=["input"],v=["label"],g=["*"],f=new e.nKC("mat-checkbox-default-options",{providedIn:"root",factory:b});function b(){return{color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1}}var i=function(o){return o[o.Init=0]="Init",o[o.Checked=1]="Checked",o[o.Unchecked=2]="Unchecked",o[o.Indeterminate=3]="Indeterminate",o}(i||{});const y={provide:s.kq,useExisting:(0,e.Rfq)(()=>h),multi:!0};class C{source;checked}const k=b();let h=(()=>{class o{_elementRef=(0,e.WQX)(e.aKT);_changeDetectorRef=(0,e.WQX)(e.gRc);_ngZone=(0,e.WQX)(e.SKi);_animationMode=(0,e.WQX)(e.bc$,{optional:!0});_options=(0,e.WQX)(f,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(c){const a=new C;return a.source=this,a.checked=c,a}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required;labelPosition="after";name=null;change=new e.bkB;indeterminateChange=new e.bkB;value;disableRipple;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=i.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){(0,e.WQX)(x.l).load(d.Ah);const c=(0,e.WQX)(new e.ES_("tabindex"),{optional:!0});this._options=this._options||k,this.color=this._options.color||k.color,this.tabIndex=null==c?0:parseInt(c)||0,this.id=this._uniqueId=(0,e.WQX)(u.g7).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(c){c.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this._indeterminate)}get checked(){return this._checked}set checked(c){c!=this.checked&&(this._checked=c,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(c){c!==this.disabled&&(this._disabled=c,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate}set indeterminate(c){const a=c!=this._indeterminate;this._indeterminate=c,a&&(this._transitionCheckState(this._indeterminate?i.Indeterminate:this.checked?i.Checked:i.Unchecked),this.indeterminateChange.emit(this._indeterminate)),this._syncIndeterminate(this._indeterminate)}_indeterminate=!1;_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(c){this.checked=!!c}registerOnChange(c){this._controlValueAccessorChangeFn=c}registerOnTouched(c){this._onTouched=c}setDisabledState(c){this.disabled=c}validate(c){return this.required&&!0!==c.value?{required:!0}:null}registerOnValidatorChange(c){this._validatorChangeFn=c}_transitionCheckState(c){let a=this._currentCheckState,t=this._getAnimationTargetElement();if(a!==c&&t&&(this._currentAnimationClass&&t.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(a,c),this._currentCheckState=c,this._currentAnimationClass.length>0)){t.classList.add(this._currentAnimationClass);const r=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{t.classList.remove(r)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){const c=this._options?.clickAction;this.disabled||"noop"===c?(this.disabled&&this.disabledInteractive||!this.disabled&&"noop"===c)&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate):(this.indeterminate&&"check"!==c&&Promise.resolve().then(()=>{this._indeterminate=!1,this.indeterminateChange.emit(this._indeterminate)}),this._checked=!this._checked,this._transitionCheckState(this._checked?i.Checked:i.Unchecked),this._emitChangeEvent())}_onInteractionEvent(c){c.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(c,a){if("NoopAnimations"===this._animationMode)return"";switch(c){case i.Init:if(a===i.Checked)return this._animationClasses.uncheckedToChecked;if(a==i.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case i.Unchecked:return a===i.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case i.Checked:return a===i.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case i.Indeterminate:return a===i.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(c){const a=this._inputElement;a&&(a.nativeElement.indeterminate=c)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(c){c.target&&this._labelElement.nativeElement.contains(c.target)&&c.stopPropagation()}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=e.VBU({type:o,selectors:[["mat-checkbox"]],viewQuery:function(a,t){if(1&a&&(e.GBs(p,5),e.GBs(v,5)),2&a){let r;e.mGM(r=e.lsd())&&(t._inputElement=r.first),e.mGM(r=e.lsd())&&(t._labelElement=r.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(a,t){2&a&&(e.Mr5("id",t.id),e.BMQ("tabindex",null)("aria-label",null)("aria-labelledby",null),e.HbH(t.color?"mat-"+t.color:"mat-accent"),e.AVh("_mat-animation-noopable","NoopAnimations"===t._animationMode)("mdc-checkbox--disabled",t.disabled)("mat-mdc-checkbox-disabled",t.disabled)("mat-mdc-checkbox-checked",t.checked)("mat-mdc-checkbox-disabled-interactive",t.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",e.L39],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",e.L39],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",e.L39],tabIndex:[2,"tabIndex","tabIndex",c=>null==c?void 0:(0,e.Udg)(c)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",e.L39],checked:[2,"checked","checked",e.L39],disabled:[2,"disabled","disabled",e.L39],indeterminate:[2,"indeterminate","indeterminate",e.L39]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[e.Jv_([y,{provide:s.cz,useExisting:o,multi:!0}]),e.GFd,e.OA$],ngContentSelectors:g,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],[1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],[1,"mdc-checkbox__ripple"],[1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24","aria-hidden","true",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(a,t){if(1&a){const r=e.RV6();e.NAR(),e.j41(0,"div",3),e.bIt("click",function(l){return e.eBV(r),e.Njj(t._preventBubblingFromLabel(l))}),e.j41(1,"div",4,0)(3,"div",5),e.bIt("click",function(){return e.eBV(r),e.Njj(t._onTouchTargetClick())}),e.k0s(),e.j41(4,"input",6,1),e.bIt("blur",function(){return e.eBV(r),e.Njj(t._onBlur())})("click",function(){return e.eBV(r),e.Njj(t._onInputClick())})("change",function(l){return e.eBV(r),e.Njj(t._onInteractionEvent(l))}),e.k0s(),e.nrm(6,"div",7),e.j41(7,"div",8),e.qSk(),e.j41(8,"svg",9),e.nrm(9,"path",10),e.k0s(),e.joV(),e.nrm(10,"div",11),e.k0s(),e.nrm(11,"div",12),e.k0s(),e.j41(12,"label",13,2),e.SdG(14),e.k0s()()}if(2&a){const r=e.sdS(2);e.Y8G("labelPosition",t.labelPosition),e.R7$(4),e.AVh("mdc-checkbox--selected",t.checked),e.Y8G("checked",t.checked)("indeterminate",t.indeterminate)("disabled",t.disabled&&!t.disabledInteractive)("id",t.inputId)("required",t.required)("tabIndex",t.disabled&&!t.disabledInteractive?-1:t.tabIndex),e.BMQ("aria-label",t.ariaLabel||null)("aria-labelledby",t.ariaLabelledby)("aria-describedby",t.ariaDescribedby)("aria-checked",t.indeterminate?"mixed":null)("aria-controls",t.ariaControls)("aria-disabled",!(!t.disabled||!t.disabledInteractive)||null)("aria-expanded",t.ariaExpanded)("aria-owns",t.ariaOwns)("name",t.name)("value",t.value),e.R7$(7),e.Y8G("matRippleTrigger",r)("matRippleDisabled",t.disableRipple||t.disabled)("matRippleCentered",!0),e.R7$(),e.Y8G("for",t.inputId)}},dependencies:[d.r6,d.tO],styles:['.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox:hover .mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:hover .mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active .mdc-checkbox__native-control~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mdc-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mdc-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mdc-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mdc-checkbox__ripple{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;width:var(--mdc-checkbox-state-layer-size, 40px);height:var(--mdc-checkbox-state-layer-size, 40px);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox--disabled{cursor:default;pointer-events:none}@media(forced-colors: active){.mdc-checkbox--disabled{opacity:.5}}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mdc-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));top:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2)}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-icon-color, var(--mat-sys-primary));background-color:var(--mdc-checkbox-selected-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox:hover .mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));background-color:rgba(0,0,0,0)}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-sys-primary));background-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-sys-primary))}.mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-sys-primary));background-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover .mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox._mat-animation-noopable .mdc-checkbox *,.mat-mdc-checkbox._mat-animation-noopable .mdc-checkbox *::before{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox .mat-internal-form-field{color:var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive{pointer-events:auto}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input{cursor:default}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default;color:var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-checkbox label:empty{display:none}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox .mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-checkbox-touch-target-display, block)}.mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-focus-indicator::before{content:""}'],encapsulation:2,changeDetection:0})}return o})(),M=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=e.$C({type:o});static \u0275inj=e.G2t({imports:[h,d.yE,d.yE]})}return o})()}}]);