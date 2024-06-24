import{a as Pe}from"./chunk-RZYUWMB6.js";import{a as Ve}from"./chunk-RLH3CFK4.js";import{a as Ue}from"./chunk-R2VPP4WD.js";import"./chunk-DCACXDWT.js";import{a as ze}from"./chunk-EF454TGY.js";import"./chunk-MPQ2VAF5.js";import{f as G,m as Ne,p as Re,q as Be}from"./chunk-EG6Y2IVM.js";import{c as oe,d as re,f as j,g as N,h as se}from"./chunk-IX6G3U3V.js";import{c as je}from"./chunk-IQV7FEMG.js";import{B as Oe,G as He,j as Fe,v as ke}from"./chunk-VKKZCV3X.js";import{m as Te}from"./chunk-VKBFFX2I.js";import{a as H}from"./chunk-BKYAZJY5.js";import"./chunk-HEOHOP3Y.js";import"./chunk-2BE2PJEY.js";import{h as Me}from"./chunk-Q6XNWYSG.js";import{Aa as J,Ba as ge,Bb as Ee,D as ue,Da as xe,Dc as Ae,E as F,Ea as fe,Fb as o,Gb as r,Hb as x,Ia as ve,Ic as $,Ja as y,Jc as De,K as he,Ka as be,Lb as Ce,Nb as M,Ob as C,Pa as ee,Pb as ie,Qb as S,Sb as ae,Tb as Se,Ub as q,Vb as K,X as W,Xb as s,Yb as c,Zb as X,a as B,ab as _e,cc as P,db as d,dc as v,ea as V,eb as p,f as T,ga as D,gb as ye,ja as z,l as me,na as _,nb as Ie,oa as f,pa as U,pb as te,qa as I,qb as E,tc as O,ub as g,vb as ne,wb as u,xb as L,xc as w,ya as Q,yb as k,yc as we,za as Z}from"./chunk-D746LQEN.js";import"./chunk-BY3KSYET.js";var ot=0,de=new D("CdkAccordion"),Qe=(()=>{let e=class e{constructor(){this._stateChanges=new T,this._openCloseAllActions=new T,this.id=`cdk-accordion-${ot++}`,this.multi=!1}openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(t){this._stateChanges.next(t)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}};e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=I({type:e,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:[_.HasDecoratorInputTransform,"multi","multi",w]},exportAs:["cdkAccordion"],standalone:!0,features:[P([{provide:de,useExisting:e}]),E,Q]});let a=e;return a})(),rt=0,Le=(()=>{let e=class e{get expanded(){return this._expanded}set expanded(t){if(this._expanded!==t){if(this._expanded=t,this.expandedChange.emit(t),t){this.opened.emit();let n=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,n)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}constructor(t,n,i){this.accordion=t,this._changeDetectorRef=n,this._expansionDispatcher=i,this._openCloseAllSubscription=B.EMPTY,this.closed=new y,this.opened=new y,this.destroyed=new y,this.expandedChange=new y,this.id=`cdk-accordion-child-${rt++}`,this._expanded=!1,this.disabled=!1,this._removeUniqueSelectionListener=()=>{},this._removeUniqueSelectionListener=i.listen((l,m)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===m&&this.id!==l&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(t=>{this.disabled||(this.expanded=t)})}};e.\u0275fac=function(n){return new(n||e)(p(de,12),p(O),p(G))},e.\u0275dir=I({type:e,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[_.HasDecoratorInputTransform,"expanded","expanded",w],disabled:[_.HasDecoratorInputTransform,"disabled","disabled",w]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],standalone:!0,features:[P([{provide:de,useValue:void 0}]),E]});let a=e;return a})(),qe=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=U({type:e}),e.\u0275inj=V({});let a=e;return a})();var pt=["body"],lt=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],ct=["mat-expansion-panel-header","*","mat-action-row"];function mt(a,e){}var ut=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],ht=["mat-panel-title","mat-panel-description","*"];function gt(a,e){if(a&1&&(o(0,"span",1),ge(),o(1,"svg",2),x(2,"path",3),r()()),a&2){let h=C();u("@indicatorRotate",h._getExpandedState())}}var pe=new D("MAT_ACCORDION"),Ke="225ms cubic-bezier(0.4,0.0,0.2,1)",$e={indicatorRotate:oe("indicatorRotate",[N("collapsed, void",j({transform:"rotate(0deg)"})),N("expanded",j({transform:"rotate(180deg)"})),se("expanded <=> collapsed, void => collapsed",re(Ke))]),bodyExpansion:oe("bodyExpansion",[N("collapsed, void",j({height:"0px",visibility:"hidden"})),N("expanded",j({height:"*",visibility:""})),se("expanded <=> collapsed, void => collapsed",re(Ke))])},Ge=new D("MAT_EXPANSION_PANEL"),xt=(()=>{let e=class e{constructor(t,n){this._template=t,this._expansionPanel=n}};e.\u0275fac=function(n){return new(n||e)(p(ye),p(Ge,8))},e.\u0275dir=I({type:e,selectors:[["ng-template","matExpansionPanelContent",""]],standalone:!0});let a=e;return a})(),ft=0,Ye=new D("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),le=(()=>{let e=class e extends Le{get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(t){this._hideToggle=t}get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(t){this._togglePosition=t}constructor(t,n,i,l,m,b,R){super(t,n,i),this._viewContainerRef=l,this._animationMode=b,this._hideToggle=!1,this.afterExpand=new y,this.afterCollapse=new y,this._inputChanges=new T,this._headerId=`mat-expansion-panel-header-${ft++}`,this.accordion=t,this._document=m,this._animationsDisabled=b==="NoopAnimations",R&&(this.hideToggle=R.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(W(null),F(()=>this.expanded&&!this._portal),he(1)).subscribe(()=>{this._portal=new Ne(this._lazyContent._template,this._viewContainerRef)})}ngOnChanges(t){this._inputChanges.next(t)}ngOnDestroy(){super.ngOnDestroy(),this._inputChanges.complete()}_containsFocus(){if(this._body){let t=this._document.activeElement,n=this._body.nativeElement;return t===n||n.contains(t)}return!1}_animationStarted(t){!Xe(t)&&!this._animationsDisabled&&this._body&&this._body?.nativeElement.setAttribute("inert","")}_animationDone(t){Xe(t)||(t.toState==="expanded"?this.afterExpand.emit():t.toState==="collapsed"&&this.afterCollapse.emit(),!this._animationsDisabled&&this._body&&this._body.nativeElement.removeAttribute("inert"))}};e.\u0275fac=function(n){return new(n||e)(p(pe,12),p(O),p(G),p(Ie),p(Ae),p(ee,8),p(Ye,8))},e.\u0275cmp=f({type:e,selectors:[["mat-expansion-panel"]],contentQueries:function(n,i,l){if(n&1&&ae(l,xt,5),n&2){let m;q(m=K())&&(i._lazyContent=m.first)}},viewQuery:function(n,i){if(n&1&&Se(pt,5),n&2){let l;q(l=K())&&(i._body=l.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:6,hostBindings:function(n,i){n&2&&k("mat-expanded",i.expanded)("_mat-animation-noopable",i._animationsDisabled)("mat-expansion-panel-spacing",i._hasSpacing())},inputs:{hideToggle:[_.HasDecoratorInputTransform,"hideToggle","hideToggle",w],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],standalone:!0,features:[P([{provide:pe,useValue:void 0},{provide:Ge,useExisting:e}]),E,te,Q,v],ngContentSelectors:ct,decls:7,vars:4,consts:[["body",""],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(n,i){if(n&1){let l=Ce();ie(lt),S(0),o(1,"div",1,0),M("@bodyExpansion.start",function(b){return Z(l),J(i._animationStarted(b))})("@bodyExpansion.done",function(b){return Z(l),J(i._animationDone(b))}),o(3,"div",2),S(4,1),g(5,mt,0,0,"ng-template",3),r(),S(6,2),r()}n&2&&(d(),u("@bodyExpansion",i._getExpandedState())("id",i.id),ne("aria-labelledby",i._headerId),d(4),u("cdkPortalOutlet",i._portal))},dependencies:[Re],styles:['.mat-expansion-panel{box-sizing:content-box;display:block;margin:0;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative;background:var(--mat-expansion-container-background-color);color:var(--mat-expansion-container-text-color);border-radius:var(--mat-expansion-container-shape)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape);border-top-left-radius:var(--mat-expansion-container-shape)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape);border-bottom-left-radius:var(--mat-expansion-container-shape)}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;font-family:var(--mat-expansion-container-text-font);font-size:var(--mat-expansion-container-text-size);font-weight:var(--mat-expansion-container-text-weight);line-height:var(--mat-expansion-container-text-line-height);letter-spacing:var(--mat-expansion-container-text-tracking)}.mat-expansion-panel-content[style*="visibility: hidden"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color)}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}'],encapsulation:2,data:{animation:[$e.bodyExpansion]},changeDetection:0});let a=e;return a})();function Xe(a){return a.fromState==="void"}var ce=(()=>{let e=class e{constructor(t,n,i,l,m,b,R){this.panel=t,this._element=n,this._focusMonitor=i,this._changeDetectorRef=l,this._animationMode=b,this._parentChangeSubscription=B.EMPTY,this.tabIndex=0;let it=t.accordion?t.accordion._stateChanges.pipe(F(A=>!!(A.hideToggle||A.togglePosition))):me;this.tabIndex=parseInt(R||"")||0,this._parentChangeSubscription=ue(t.opened,t.closed,it,t._inputChanges.pipe(F(A=>!!(A.hideToggle||A.disabled||A.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),t.closed.pipe(F(()=>t._containsFocus())).subscribe(()=>i.focusVia(n,"program")),m&&(this.expandedHeight=m.expandedHeight,this.collapsedHeight=m.collapsedHeight)}get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let t=this._isExpanded();return t&&this.expandedHeight?this.expandedHeight:!t&&this.collapsedHeight?this.collapsedHeight:null}_keydown(t){switch(t.keyCode){case 32:case 13:Fe(t)||(t.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(t);return}}focus(t,n){t?this._focusMonitor.focusVia(this._element,t,n):this._element.nativeElement.focus(n)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(t=>{t&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}};e.\u0275fac=function(n){return new(n||e)(p(le,1),p(ve),p(Oe),p(O),p(Ye,8),p(ee,8),fe("tabindex"))},e.\u0275cmp=f({type:e,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:15,hostBindings:function(n,i){n&1&&M("click",function(){return i._toggle()})("keydown",function(m){return i._keydown(m)}),n&2&&(ne("id",i.panel._headerId)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i._getPanelId())("aria-expanded",i._isExpanded())("aria-disabled",i.panel.disabled),L("height",i._getHeaderHeight()),k("mat-expanded",i._isExpanded())("mat-expansion-toggle-indicator-after",i._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",i._getTogglePosition()==="before")("_mat-animation-noopable",i._animationMode==="NoopAnimations"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[_.HasDecoratorInputTransform,"tabIndex","tabIndex",t=>t==null?0:we(t)]},standalone:!0,features:[E,v],ngContentSelectors:ht,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(n,i){n&1&&(ie(ut),o(0,"span",0),S(1),S(2,1),S(3,2),r(),g(4,gt,3,1,"span",1)),n&2&&(k("mat-content-hide-toggle",!i._showToggle()),d(4),Ee(4,i._showToggle()?4:-1))},styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mat-expansion-header-collapsed-state-height);font-family:var(--mat-expansion-header-text-font);font-size:var(--mat-expansion-header-text-size);font-weight:var(--mat-expansion-header-text-weight);line-height:var(--mat-expansion-header-text-line-height);letter-spacing:var(--mat-expansion-header-text-tracking)}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color)}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color)}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color)}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color)}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color);display:inline-block;display:var(--mat-expansion-legacy-header-indicator-display, inline-block)}.mat-expansion-indicator svg{width:24px;height:24px;margin:0 -8px;vertical-align:middle;fill:var(--mat-expansion-header-indicator-color);display:none;display:var(--mat-expansion-header-indicator-display, none)}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}'],encapsulation:2,data:{animation:[$e.indicatorRotate]},changeDetection:0});let a=e;return a})();var We=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=I({type:e,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"],standalone:!0});let a=e;return a})(),Ze=(()=>{let e=class e extends Qe{constructor(){super(...arguments),this._ownHeaders=new be,this.hideToggle=!1,this.displayMode="default",this.togglePosition="after"}ngAfterContentInit(){this._headers.changes.pipe(W(this._headers)).subscribe(t=>{this._ownHeaders.reset(t.filter(n=>n.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new ke(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(t){this._keyManager.onKeydown(t)}_handleHeaderFocus(t){this._keyManager.updateActiveItem(t)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}};e.\u0275fac=(()=>{let t;return function(i){return(t||(t=xe(e)))(i||e)}})(),e.\u0275dir=I({type:e,selectors:[["mat-accordion"]],contentQueries:function(n,i,l){if(n&1&&ae(l,ce,5),n&2){let m;q(m=K())&&(i._headers=m)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(n,i){n&2&&k("mat-accordion-multi",i.multi)},inputs:{hideToggle:[_.HasDecoratorInputTransform,"hideToggle","hideToggle",w],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],standalone:!0,features:[P([{provide:pe,useExisting:e}]),E,te]});let a=e;return a})(),Je=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=U({type:e}),e.\u0275inj=V({imports:[He,qe,Be]});let a=e;return a})();function bt(a,e){if(a&1&&(o(0,"li"),s(1),r()),a&2){let h=C();d(),X(" ",h.product.advantages," ")}}var et=(()=>{let e=class e{constructor(){console.log(this.product)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=f({type:e,selectors:[["app-product-more-info"]],inputs:{product:"product"},standalone:!0,features:[v],decls:77,vars:16,consts:[[4,"ngFor","ngForOf"]],template:function(n,i){n&1&&(o(0,"mat-accordion")(1,"mat-expansion-panel")(2,"mat-expansion-panel-header")(3,"mat-panel-title"),s(4," \u0421\u043A\u043B\u0430\u0434 "),r()(),o(5,"p"),s(6),r(),o(7,"p"),s(8),r(),o(9,"p"),s(10),r(),o(11,"p"),s(12),r(),o(13,"p"),s(14),r(),o(15,"p"),s(16),r()(),o(17,"mat-expansion-panel")(18,"mat-expansion-panel-header")(19,"mat-panel-title"),s(20," \u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0456\u0457 "),r()(),o(21,"p"),s(22),r()(),o(23,"mat-expansion-panel")(24,"mat-expansion-panel-header")(25,"mat-panel-title"),s(26," \u0421\u0438\u043C\u043F\u0442\u043E\u043C\u0438 "),r()(),o(27,"p"),s(28),r()(),o(29,"mat-expansion-panel")(30,"mat-expansion-panel-header")(31,"mat-panel-title"),s(32," \u041F\u0435\u0440\u0435\u0432\u0430\u0433\u0438 "),r()(),o(33,"ul"),g(34,bt,2,1,"li",0),r()(),o(35,"mat-expansion-panel")(36,"mat-expansion-panel-header")(37,"mat-panel-title"),s(38," \u041A\u043B\u0456\u043D\u0456\u0447\u043D\u0438\u0439 \u0434\u043E\u0441\u0432\u0456\u0434 "),r()(),o(39,"p"),s(40),r()(),o(41,"mat-expansion-panel")(42,"mat-expansion-panel-header")(43,"mat-panel-title"),s(44," \u0406\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0456\u044F \u0449\u043E\u0434\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F "),r()(),o(45,"p"),s(46),r()(),o(47,"mat-expansion-panel")(48,"mat-expansion-panel-header")(49,"mat-panel-title"),s(50," \u0417\u0430\u0441\u0442\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F "),r()(),o(51,"p"),s(52),r()(),o(53,"mat-expansion-panel")(54,"mat-expansion-panel-header")(55,"mat-panel-title"),s(56," \u0412\u0456\u043A\u043E\u0432\u0456 \u043E\u0431\u043C\u0435\u0436\u0435\u043D\u043D\u044F "),r()(),o(57,"p"),s(58),r()(),o(59,"mat-expansion-panel")(60,"mat-expansion-panel-header")(61,"mat-panel-title"),s(62," \u0423\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0442\u0430 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u043D\u043D\u044F "),r()(),o(63,"p"),s(64),r()(),o(65,"mat-expansion-panel")(66,"mat-expansion-panel-header")(67,"mat-panel-title"),s(68," \u0412\u0438\u0440\u043E\u0431\u043D\u0438\u043A "),r()(),o(69,"p"),s(70),r()(),o(71,"mat-expansion-panel")(72,"mat-expansion-panel-header")(73,"mat-panel-title"),s(74," \u0406\u043C\u043F\u043E\u0440\u0442\u0435\u0440 "),r()(),o(75,"p"),s(76),r()()()),n&2&&(d(6),c(i.product.composition.extract),d(2),c(i.product.composition.folicAcid),d(2),c(i.product.composition.vitaminB6),d(2),c(i.product.composition.vitaminB1),d(2),c(i.product.composition.vitaminB12),d(2),c(i.product.composition.magnesium),d(6),c(i.product.recommendations),d(6),c(i.product.symptoms),d(6),u("ngForOf",i.product.advantages),d(6),c(i.product.clinicalExperience),d(6),c(i.product.usageInstructions),d(6),c(i.product.warnings),d(6),c(i.product.ageRestrictions),d(6),c(i.product.packagingAndStorage),d(6),c(i.product.manufacturer),d(6),c(i.product.importer))},dependencies:[Je,Ze,le,ce,We,$,je]});let a=e;return a})();var tt=[{image:"../../../assets/product-main-img.jpg"},{image:"../../../assets/1703619922.0556.jpg"},{image:"../../../assets/1703619922.202.jpg"},{image:"../../../assets/1703619922.1739.jpg"}];function _t(a,e){if(a&1&&(o(0,"div",6),x(1,"img",7),r()),a&2){let h=e.$implicit;d(),u("src",h.image,_e)}}var nt=(()=>{let e=class e{constructor(){this.slideIndex=0,this.imgsProduct=tt}prevSlide(){this.slideIndex=this.slideIndex===0?this.imgsProduct.length-1:this.slideIndex-1}nextSlide(){this.slideIndex=this.slideIndex===this.imgsProduct.length-1?0:this.slideIndex+1}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=f({type:e,selectors:[["app-slider"]],standalone:!0,features:[v],decls:8,vars:3,consts:[[1,"slider-container"],[1,"slider"],[1,"slides"],["class","slide",4,"ngFor","ngForOf"],[1,"button","prev",3,"click"],[1,"button","next",3,"click"],[1,"slide"],[1,"product-img",3,"src"]],template:function(n,i){n&1&&(o(0,"div",0)(1,"div",1)(2,"div",2),g(3,_t,2,1,"div",3),r(),o(4,"button",4),M("click",function(){return i.prevSlide()}),s(5,"\u276E"),r(),o(6,"button",5),M("click",function(){return i.nextSlide()}),s(7,"\u276F"),r()()()),n&2&&(d(2),L("transform","translateX("+-i.slideIndex*200+"px)"),d(),u("ngForOf",i.imgsProduct))},dependencies:[$],styles:[".slider-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100%}.slider[_ngcontent-%COMP%]{width:200px;border-radius:1rem;position:relative;overflow:hidden}.slides[_ngcontent-%COMP%]{display:flex;transition:transform .5s ease}.slide[_ngcontent-%COMP%]{flex:0 0 auto}.slider[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:200px;height:200px;object-fit:cover}.button[_ngcontent-%COMP%]{cursor:pointer;position:absolute;top:50%;padding:10px;background-color:#00000080;color:#fff;border:none;outline:none}.prev[_ngcontent-%COMP%]{left:0}.next[_ngcontent-%COMP%]{right:0}"]});let a=e;return a})();function yt(a,e){if(a&1&&x(0,"app-edit-link",9),a&2){let h=C();u("productId",h.product.id)}}function It(a,e){if(a&1&&x(0,"app-buy-btn",10),a&2){let h=C();u("quantity",h.product.productQuantity)("obviously",h.product.obviously)("productId",h.product.id)}}var Mn=(()=>{let e=class e{constructor(){this.productsService=z(ze),this.route=z(Me),this.authService=z(Te),this.isAuthUser=!1,this.isAuthAdmin=!1,this.lastPath="products";let t;this.route.params.pipe(H()).subscribe(n=>{let{id:i}=n;t=i}),this.productsService.getObservableProducts().pipe(H()).subscribe(n=>{this.product=n.filter(i=>i.id===+t)[0]}),this.authService.getIsUserObservable().pipe(H()).subscribe(n=>{this.isAuthUser=n}),this.authService.getIsAdminObservable().pipe(H()).subscribe(n=>{this.isAuthAdmin=n})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=f({type:e,selectors:[["app-product-detail"]],standalone:!0,features:[v],decls:14,vars:6,consts:[[1,"product-container"],[1,"product-wrap"],[1,"product-detail"],[2,"margin-bottom","1rem","max-width","600px"],[1,"btns-wrap"],[3,"productId",4,"ngIf"],[3,"lastPath"],[3,"quantity","obviously","productId",4,"ngIf"],[3,"product"],[3,"productId"],[3,"quantity","obviously","productId"]],template:function(n,i){n&1&&(o(0,"div",0)(1,"div",1),x(2,"app-slider"),o(3,"div",2)(4,"h2"),s(5),r(),o(6,"article",3),s(7),r(),o(8,"div",4),g(9,yt,1,1,"app-edit-link",5),x(10,"app-go-back-btn",6),g(11,It,1,3,"app-buy-btn",7),r()()(),x(12,"hr")(13,"app-product-more-info",8),r()),n&2&&(d(5),c(i.product.name),d(2),X(" ",i.product.description," "),d(2),u("ngIf",i.isAuthAdmin),d(),u("lastPath",i.lastPath),d(),u("ngIf",i.isAuthUser),d(2),u("product",i.product))},dependencies:[De,nt,Ve,Pe,et,Ue],styles:[".product-container[_ngcontent-%COMP%]{padding:2rem}.product-detail[_ngcontent-%COMP%]{margin-bottom:2rem}.product-wrap[_ngcontent-%COMP%]{gap:2rem;margin-bottom:2rem;display:flex}.product-wrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:1rem}.btns-wrap[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem}.goBack-btn-wrap[_ngcontent-%COMP%]{padding:1rem}"],changeDetection:0});let a=e;return a})();export{Mn as ProductDetailComponent};
