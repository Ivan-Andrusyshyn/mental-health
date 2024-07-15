import{a as De}from"./chunk-JCB5M7FT.js";import{a as Ve}from"./chunk-OGPSAGB3.js";import{a as Ue}from"./chunk-2STIFZH6.js";import{b as Te}from"./chunk-2NXFFOFG.js";import"./chunk-ZPF6EE53.js";import"./chunk-P6LYWOG3.js";import{a as ze}from"./chunk-3VWZEN6D.js";import{a as N}from"./chunk-PMQLLBN4.js";import"./chunk-MBXDWNPG.js";import{f as J,m as Ne,p as Re,q as Be}from"./chunk-ZRMWD7CH.js";import{c as se,d as de,f as R,g as B,i as le}from"./chunk-AESYL7IM.js";import{c as je}from"./chunk-6YLY5ZC5.js";import{C as Fe,H as He,j as ke,v as Oe}from"./chunk-EIIW2VZD.js";import"./chunk-JDDIQEYL.js";import"./chunk-HEOHOP3Y.js";import{h as Ae}from"./chunk-2UHE3LMZ.js";import{$b as p,Aa as D,Ba as fe,Cb as X,Cc as S,D as ge,Da as be,Dc as Se,E as F,Ea as ve,Gb as r,Hb as o,Ia as _e,Ib as x,Ic as Me,Ja as I,K as xe,Ka as ye,Mb as $,Nc as Z,Oc as Pe,Pa as ne,Pb as T,Rb as f,Sb as oe,Tb as w,Vb as re,Wb as we,X as te,Xb as G,Yb as Y,_b as d,a as z,ab as Ie,ac as W,db as s,ea as U,eb as l,f as O,fc as k,ga as P,gb as Ce,gc as v,ja as Q,l as he,na as y,nb as Ee,oa as b,pa as L,qa as C,qb as ie,rb as E,vb as g,wb as ae,xb as u,ya as q,yb as K,yc as j,za as A,zb as H}from"./chunk-BI3TUFEU.js";import"./chunk-BY3KSYET.js";var at=0,pe=new P("CdkAccordion"),Qe=(()=>{let e=class e{constructor(){this._stateChanges=new O,this._openCloseAllActions=new O,this.id=`cdk-accordion-${at++}`,this.multi=!1}openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(t){this._stateChanges.next(t)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}};e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=C({type:e,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:[y.HasDecoratorInputTransform,"multi","multi",S]},exportAs:["cdkAccordion"],standalone:!0,features:[k([{provide:pe,useExisting:e}]),E,q]});let a=e;return a})(),ot=0,Le=(()=>{let e=class e{get expanded(){return this._expanded}set expanded(t){if(this._expanded!==t){if(this._expanded=t,this.expandedChange.emit(t),t){this.opened.emit();let n=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,n)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}constructor(t,n,i){this.accordion=t,this._changeDetectorRef=n,this._expansionDispatcher=i,this._openCloseAllSubscription=z.EMPTY,this.closed=new I,this.opened=new I,this.destroyed=new I,this.expandedChange=new I,this.id=`cdk-accordion-child-${ot++}`,this._expanded=!1,this.disabled=!1,this._removeUniqueSelectionListener=()=>{},this._removeUniqueSelectionListener=i.listen((c,m)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===m&&this.id!==c&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(t=>{this.disabled||(this.expanded=t)})}};e.\u0275fac=function(n){return new(n||e)(l(pe,12),l(j),l(J))},e.\u0275dir=C({type:e,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[y.HasDecoratorInputTransform,"expanded","expanded",S],disabled:[y.HasDecoratorInputTransform,"disabled","disabled",S]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],standalone:!0,features:[k([{provide:pe,useValue:void 0}]),E]});let a=e;return a})(),qe=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=L({type:e}),e.\u0275inj=U({});let a=e;return a})();var dt=["body"],lt=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],pt=["mat-expansion-panel-header","*","mat-action-row"];function ct(a,e){}var mt=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],ut=["mat-panel-title","mat-panel-description","*"];function ht(a,e){if(a&1&&(r(0,"span",1),fe(),r(1,"svg",2),x(2,"path",3),o()()),a&2){let h=f();u("@indicatorRotate",h._getExpandedState())}}var ce=new P("MAT_ACCORDION"),Ke="225ms cubic-bezier(0.4,0.0,0.2,1)",$e={indicatorRotate:se("indicatorRotate",[B("collapsed, void",R({transform:"rotate(0deg)"})),B("expanded",R({transform:"rotate(180deg)"})),le("expanded <=> collapsed, void => collapsed",de(Ke))]),bodyExpansion:se("bodyExpansion",[B("collapsed, void",R({height:"0px",visibility:"hidden"})),B("expanded",R({height:"*",visibility:""})),le("expanded <=> collapsed, void => collapsed",de(Ke))])},Ge=new P("MAT_EXPANSION_PANEL"),gt=(()=>{let e=class e{constructor(t,n){this._template=t,this._expansionPanel=n}};e.\u0275fac=function(n){return new(n||e)(l(Ce),l(Ge,8))},e.\u0275dir=C({type:e,selectors:[["ng-template","matExpansionPanelContent",""]],standalone:!0});let a=e;return a})(),xt=0,Ye=new P("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),me=(()=>{let e=class e extends Le{get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(t){this._hideToggle=t}get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(t){this._togglePosition=t}constructor(t,n,i,c,m,_,V){super(t,n,i),this._viewContainerRef=c,this._animationMode=_,this._hideToggle=!1,this.afterExpand=new I,this.afterCollapse=new I,this._inputChanges=new O,this._headerId=`mat-expansion-panel-header-${xt++}`,this.accordion=t,this._document=m,this._animationsDisabled=_==="NoopAnimations",V&&(this.hideToggle=V.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(te(null),F(()=>this.expanded&&!this._portal),xe(1)).subscribe(()=>{this._portal=new Ne(this._lazyContent._template,this._viewContainerRef)})}ngOnChanges(t){this._inputChanges.next(t)}ngOnDestroy(){super.ngOnDestroy(),this._inputChanges.complete()}_containsFocus(){if(this._body){let t=this._document.activeElement,n=this._body.nativeElement;return t===n||n.contains(t)}return!1}_animationStarted(t){!Xe(t)&&!this._animationsDisabled&&this._body&&this._body?.nativeElement.setAttribute("inert","")}_animationDone(t){Xe(t)||(t.toState==="expanded"?this.afterExpand.emit():t.toState==="collapsed"&&this.afterCollapse.emit(),!this._animationsDisabled&&this._body&&this._body.nativeElement.removeAttribute("inert"))}};e.\u0275fac=function(n){return new(n||e)(l(ce,12),l(j),l(J),l(Ee),l(Me),l(ne,8),l(Ye,8))},e.\u0275cmp=b({type:e,selectors:[["mat-expansion-panel"]],contentQueries:function(n,i,c){if(n&1&&re(c,gt,5),n&2){let m;G(m=Y())&&(i._lazyContent=m.first)}},viewQuery:function(n,i){if(n&1&&we(dt,5),n&2){let c;G(c=Y())&&(i._body=c.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:6,hostBindings:function(n,i){n&2&&H("mat-expanded",i.expanded)("_mat-animation-noopable",i._animationsDisabled)("mat-expansion-panel-spacing",i._hasSpacing())},inputs:{hideToggle:[y.HasDecoratorInputTransform,"hideToggle","hideToggle",S],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],standalone:!0,features:[k([{provide:ce,useValue:void 0},{provide:Ge,useExisting:e}]),E,ie,q,v],ngContentSelectors:pt,decls:7,vars:4,consts:[["body",""],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(n,i){if(n&1){let c=$();oe(lt),w(0),r(1,"div",1,0),T("@bodyExpansion.start",function(_){return A(c),D(i._animationStarted(_))})("@bodyExpansion.done",function(_){return A(c),D(i._animationDone(_))}),r(3,"div",2),w(4,1),g(5,ct,0,0,"ng-template",3),o(),w(6,2),o()}n&2&&(s(),u("@bodyExpansion",i._getExpandedState())("id",i.id),ae("aria-labelledby",i._headerId),s(4),u("cdkPortalOutlet",i._portal))},dependencies:[Re],styles:['.mat-expansion-panel{box-sizing:content-box;display:block;margin:0;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative;background:var(--mat-expansion-container-background-color);color:var(--mat-expansion-container-text-color);border-radius:var(--mat-expansion-container-shape)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape);border-top-left-radius:var(--mat-expansion-container-shape)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape);border-bottom-left-radius:var(--mat-expansion-container-shape)}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;font-family:var(--mat-expansion-container-text-font);font-size:var(--mat-expansion-container-text-size);font-weight:var(--mat-expansion-container-text-weight);line-height:var(--mat-expansion-container-text-line-height);letter-spacing:var(--mat-expansion-container-text-tracking)}.mat-expansion-panel-content[style*="visibility: hidden"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color)}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}'],encapsulation:2,data:{animation:[$e.bodyExpansion]},changeDetection:0});let a=e;return a})();function Xe(a){return a.fromState==="void"}var ue=(()=>{let e=class e{constructor(t,n,i,c,m,_,V){this.panel=t,this._element=n,this._focusMonitor=i,this._changeDetectorRef=c,this._animationMode=_,this._parentChangeSubscription=z.EMPTY,this.tabIndex=0;let nt=t.accordion?t.accordion._stateChanges.pipe(F(M=>!!(M.hideToggle||M.togglePosition))):he;this.tabIndex=parseInt(V||"")||0,this._parentChangeSubscription=ge(t.opened,t.closed,nt,t._inputChanges.pipe(F(M=>!!(M.hideToggle||M.disabled||M.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),t.closed.pipe(F(()=>t._containsFocus())).subscribe(()=>i.focusVia(n,"program")),m&&(this.expandedHeight=m.expandedHeight,this.collapsedHeight=m.collapsedHeight)}get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let t=this._isExpanded();return t&&this.expandedHeight?this.expandedHeight:!t&&this.collapsedHeight?this.collapsedHeight:null}_keydown(t){switch(t.keyCode){case 32:case 13:ke(t)||(t.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(t);return}}focus(t,n){t?this._focusMonitor.focusVia(this._element,t,n):this._element.nativeElement.focus(n)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(t=>{t&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}};e.\u0275fac=function(n){return new(n||e)(l(me,1),l(_e),l(Fe),l(j),l(Ye,8),l(ne,8),ve("tabindex"))},e.\u0275cmp=b({type:e,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:15,hostBindings:function(n,i){n&1&&T("click",function(){return i._toggle()})("keydown",function(m){return i._keydown(m)}),n&2&&(ae("id",i.panel._headerId)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i._getPanelId())("aria-expanded",i._isExpanded())("aria-disabled",i.panel.disabled),K("height",i._getHeaderHeight()),H("mat-expanded",i._isExpanded())("mat-expansion-toggle-indicator-after",i._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",i._getTogglePosition()==="before")("_mat-animation-noopable",i._animationMode==="NoopAnimations"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[y.HasDecoratorInputTransform,"tabIndex","tabIndex",t=>t==null?0:Se(t)]},standalone:!0,features:[E,v],ngContentSelectors:ut,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(n,i){n&1&&(oe(mt),r(0,"span",0),w(1),w(2,1),w(3,2),o(),g(4,ht,3,1,"span",1)),n&2&&(H("mat-content-hide-toggle",!i._showToggle()),s(4),X(4,i._showToggle()?4:-1))},styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mat-expansion-header-collapsed-state-height);font-family:var(--mat-expansion-header-text-font);font-size:var(--mat-expansion-header-text-size);font-weight:var(--mat-expansion-header-text-weight);line-height:var(--mat-expansion-header-text-line-height);letter-spacing:var(--mat-expansion-header-text-tracking)}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color)}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color)}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color)}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color)}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color);display:inline-block;display:var(--mat-expansion-legacy-header-indicator-display, inline-block)}.mat-expansion-indicator svg{width:24px;height:24px;margin:0 -8px;vertical-align:middle;fill:var(--mat-expansion-header-indicator-color);display:none;display:var(--mat-expansion-header-indicator-display, none)}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}'],encapsulation:2,data:{animation:[$e.indicatorRotate]},changeDetection:0});let a=e;return a})();var We=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=C({type:e,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"],standalone:!0});let a=e;return a})(),Ze=(()=>{let e=class e extends Qe{constructor(){super(...arguments),this._ownHeaders=new ye,this.hideToggle=!1,this.displayMode="default",this.togglePosition="after"}ngAfterContentInit(){this._headers.changes.pipe(te(this._headers)).subscribe(t=>{this._ownHeaders.reset(t.filter(n=>n.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new Oe(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(t){this._keyManager.onKeydown(t)}_handleHeaderFocus(t){this._keyManager.updateActiveItem(t)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}};e.\u0275fac=(()=>{let t;return function(i){return(t||(t=be(e)))(i||e)}})(),e.\u0275dir=C({type:e,selectors:[["mat-accordion"]],contentQueries:function(n,i,c){if(n&1&&re(c,ue,5),n&2){let m;G(m=Y())&&(i._headers=m)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(n,i){n&2&&H("mat-accordion-multi",i.multi)},inputs:{hideToggle:[y.HasDecoratorInputTransform,"hideToggle","hideToggle",S],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],standalone:!0,features:[k([{provide:ce,useExisting:e}]),E,ie]});let a=e;return a})(),Je=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=L({type:e}),e.\u0275inj=U({imports:[He,qe,Be]});let a=e;return a})();function bt(a,e){if(a&1&&(r(0,"li"),d(1),o()),a&2){let h=f();s(),W(" ",h.product.advantages," ")}}var et=(()=>{let e=class e{constructor(){console.log(this.product)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=b({type:e,selectors:[["app-product-more-info"]],inputs:{product:"product"},standalone:!0,features:[v],decls:77,vars:16,consts:[[4,"ngFor","ngForOf"]],template:function(n,i){n&1&&(r(0,"mat-accordion")(1,"mat-expansion-panel")(2,"mat-expansion-panel-header")(3,"mat-panel-title"),d(4," \u0421\u043A\u043B\u0430\u0434 "),o()(),r(5,"p"),d(6),o(),r(7,"p"),d(8),o(),r(9,"p"),d(10),o(),r(11,"p"),d(12),o(),r(13,"p"),d(14),o(),r(15,"p"),d(16),o()(),r(17,"mat-expansion-panel")(18,"mat-expansion-panel-header")(19,"mat-panel-title"),d(20," \u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0456\u0457 "),o()(),r(21,"p"),d(22),o()(),r(23,"mat-expansion-panel")(24,"mat-expansion-panel-header")(25,"mat-panel-title"),d(26," \u0421\u0438\u043C\u043F\u0442\u043E\u043C\u0438 "),o()(),r(27,"p"),d(28),o()(),r(29,"mat-expansion-panel")(30,"mat-expansion-panel-header")(31,"mat-panel-title"),d(32," \u041F\u0435\u0440\u0435\u0432\u0430\u0433\u0438 "),o()(),r(33,"ul"),g(34,bt,2,1,"li",0),o()(),r(35,"mat-expansion-panel")(36,"mat-expansion-panel-header")(37,"mat-panel-title"),d(38," \u041A\u043B\u0456\u043D\u0456\u0447\u043D\u0438\u0439 \u0434\u043E\u0441\u0432\u0456\u0434 "),o()(),r(39,"p"),d(40),o()(),r(41,"mat-expansion-panel")(42,"mat-expansion-panel-header")(43,"mat-panel-title"),d(44," \u0406\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0456\u044F \u0449\u043E\u0434\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F "),o()(),r(45,"p"),d(46),o()(),r(47,"mat-expansion-panel")(48,"mat-expansion-panel-header")(49,"mat-panel-title"),d(50," \u0417\u0430\u0441\u0442\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F "),o()(),r(51,"p"),d(52),o()(),r(53,"mat-expansion-panel")(54,"mat-expansion-panel-header")(55,"mat-panel-title"),d(56," \u0412\u0456\u043A\u043E\u0432\u0456 \u043E\u0431\u043C\u0435\u0436\u0435\u043D\u043D\u044F "),o()(),r(57,"p"),d(58),o()(),r(59,"mat-expansion-panel")(60,"mat-expansion-panel-header")(61,"mat-panel-title"),d(62," \u0423\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0442\u0430 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u043D\u043D\u044F "),o()(),r(63,"p"),d(64),o()(),r(65,"mat-expansion-panel")(66,"mat-expansion-panel-header")(67,"mat-panel-title"),d(68," \u0412\u0438\u0440\u043E\u0431\u043D\u0438\u043A "),o()(),r(69,"p"),d(70),o()(),r(71,"mat-expansion-panel")(72,"mat-expansion-panel-header")(73,"mat-panel-title"),d(74," \u0406\u043C\u043F\u043E\u0440\u0442\u0435\u0440 "),o()(),r(75,"p"),d(76),o()()()),n&2&&(s(6),p(i.product.composition.extract),s(2),p(i.product.composition.folicAcid),s(2),p(i.product.composition.vitaminB6),s(2),p(i.product.composition.vitaminB1),s(2),p(i.product.composition.vitaminB12),s(2),p(i.product.composition.magnesium),s(6),p(i.product.recommendations),s(6),p(i.product.symptoms),s(6),u("ngForOf",i.product.advantages),s(6),p(i.product.clinicalExperience),s(6),p(i.product.usageInstructions),s(6),p(i.product.warnings),s(6),p(i.product.ageRestrictions),s(6),p(i.product.packagingAndStorage),s(6),p(i.product.manufacturer),s(6),p(i.product.importer))},dependencies:[Je,Ze,me,ue,We,Z,je],styles:["mat-accordion[_ngcontent-%COMP%]{margin:20px;border-radius:5px;background-color:#f9f9f9}mat-expansion-panel[_ngcontent-%COMP%]{margin:10px 0}mat-expansion-panel-header[_ngcontent-%COMP%]{background-color:#e0e0e0;font-weight:700;border-bottom:1px solid #ddd;color:#333}mat-panel-title[_ngcontent-%COMP%]{color:#010101}p[_ngcontent-%COMP%]{margin:10px;color:#666;font-size:14px}ul[_ngcontent-%COMP%]{list-style-type:disc;padding-left:20px;margin:10px}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0;color:#444;font-size:14px}"]});let a=e;return a})();function vt(a,e){if(a&1&&(r(0,"div",4),x(1,"img",5),o()),a&2){let h=e.$implicit;s(),u("src",h.image,Ie)}}function _t(a,e){if(a&1){let h=$();r(0,"button",6),T("click",function(){A(h);let n=f();return D(n.prevSlide())}),d(1,"\u276E"),o(),r(2,"button",7),T("click",function(){A(h);let n=f();return D(n.nextSlide())}),d(3,"\u276F"),o()}}var tt=(()=>{let e=class e{constructor(){this.slideIndex=0}ngOnInit(){this.img_slides=this.sliderImages}prevSlide(){this.slideIndex=this.slideIndex===0?this.img_slides.length-1:this.slideIndex-1}nextSlide(){this.slideIndex=this.slideIndex===this.img_slides.length-1?0:this.slideIndex+1}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=b({type:e,selectors:[["app-product-slider"]],inputs:{sliderImages:"sliderImages"},standalone:!0,features:[v],decls:5,vars:4,consts:[[1,"slider-container"],[1,"slider"],[1,"slides"],["class","slide",4,"ngFor","ngForOf"],[1,"slide"],[1,"product-img",3,"src"],[1,"slider_btn","prev",3,"click"],[1,"slider_btn","next",3,"click"]],template:function(n,i){n&1&&(r(0,"div",0)(1,"div",1)(2,"div",2),g(3,vt,2,1,"div",3),o(),g(4,_t,4,0),o()()),n&2&&(s(2),K("transform","translateX("+-i.slideIndex*350+"px)"),s(),u("ngForOf",i.img_slides),s(),X(4,i.img_slides?4:-1))},dependencies:[Z],styles:[".slider-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100%}.slider[_ngcontent-%COMP%]{width:350px;height:350px;border-radius:1rem;border:1px solid #bdbdbd;overflow:hidden}.slides[_ngcontent-%COMP%]{display:flex;transition:transform .5s ease}.slide[_ngcontent-%COMP%]{flex:0 0 auto}.slider[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:350px;object-fit:cover}.slider_btn[_ngcontent-%COMP%]{top:50%;padding:1rem;background-color:#0003;border-radius:.5rem;cursor:pointer;position:absolute;color:#fff;border:none;outline:none;transition:background-color .3s linear}.slider_btn[_ngcontent-%COMP%]:hover{background-color:#0006}.prev[_ngcontent-%COMP%]{left:-1rem}.next[_ngcontent-%COMP%]{right:-1rem}"],changeDetection:0});let a=e;return a})();function yt(a,e){if(a&1&&x(0,"app-edit-link",11),a&2){let h=f();u("productId",h.product.id)}}function It(a,e){if(a&1&&x(0,"app-buy-btn",12),a&2){let h=f();u("quantity",h.product.productQuantity)("obviously",h.product.obviously)("productId",h.product.id)}}var Sn=(()=>{let e=class e{constructor(){this.productsService=Q(ze),this.route=Q(Ae),this.authService=Q(Te),this.isAuthUser=!1,this.isAuthAdmin=!1,this.lastPath="products";let t;this.route.params.pipe(N()).subscribe(n=>{let{id:i}=n;t=i}),this.productsService.getObservableProducts().pipe(N()).subscribe(n=>{this.product=n.filter(i=>i.id===+t)[0],this.sliderImages=this.product.slider_img}),this.authService.getIsUserObservable().pipe(N()).subscribe(n=>{this.isAuthUser=n}),this.authService.getIsAdminObservable().pipe(N()).subscribe(n=>{this.isAuthAdmin=n})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=b({type:e,selectors:[["app-product-detail"]],standalone:!0,features:[v],decls:14,vars:7,consts:[[1,"product-container"],[1,"product-wrap"],[1,"slider-wrap"],[3,"sliderImages"],[1,"product-detail"],[2,"margin-bottom","1rem","max-width","600px"],[1,"btns-wrap"],[3,"productId",4,"ngIf"],[3,"lastPath"],[3,"quantity","obviously","productId",4,"ngIf"],[3,"product"],[3,"productId"],[3,"quantity","obviously","productId"]],template:function(n,i){n&1&&(r(0,"div",0)(1,"div",1)(2,"div",2),x(3,"app-product-slider",3),o(),r(4,"div",4)(5,"h2"),d(6),o(),r(7,"article",5),d(8),o(),r(9,"div",6),g(10,yt,1,1,"app-edit-link",7),x(11,"app-go-back-btn",8),g(12,It,1,3,"app-buy-btn",9),o()()(),x(13,"app-product-more-info",10),o()),n&2&&(s(3),u("sliderImages",i.sliderImages),s(3),p(i.product.name),s(2),W(" ",i.product.description," "),s(2),u("ngIf",i.isAuthAdmin),s(),u("lastPath",i.lastPath),s(),u("ngIf",i.isAuthUser),s(),u("product",i.product))},dependencies:[Pe,tt,Ve,De,et,Ue],styles:[".product-container[_ngcontent-%COMP%]{padding:2rem}.product-detail[_ngcontent-%COMP%]{margin-bottom:2rem}.slider-wrap[_ngcontent-%COMP%]{padding:0 2rem;position:relative}.product-wrap[_ngcontent-%COMP%]{gap:2rem;padding:1rem;margin-bottom:2rem;border-radius:1rem;border:1px solid #bdbdbd;min-height:400px;box-shadow:0 2px 4px #0000001a;background-color:#f9f9f9;display:flex}.product-wrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:1rem}.btns-wrap[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem}.goBack-btn-wrap[_ngcontent-%COMP%]{padding:1rem}"]});let a=e;return a})();export{Sn as ProductDetailComponent};
