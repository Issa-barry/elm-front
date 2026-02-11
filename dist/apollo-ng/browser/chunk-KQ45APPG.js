import{d as oe,e as le}from"./chunk-CYEUP4PV.js";import"./chunk-UAZ37PIZ.js";import"./chunk-ZN2HQ4SK.js";import"./chunk-SEL7WNEU.js";import{Ba as V,Ea as L,Fa as U,Ga as T,Ha as G,_ as ne,ra as ie,sa as ae,ta as H,ua as C}from"./chunk-6ETCFPPD.js";import{j as te,k as M,o as P,u as D}from"./chunk-6PDKYY6Q.js";import{$b as b,Db as B,Eb as F,Fb as y,Ja as Y,Lb as f,Ma as l,Mb as Z,Nb as j,Ob as v,Qb as _,R,Rb as g,S as N,U as Q,Ub as ee,W as x,Xb as q,Yb as u,Zb as s,_b as w,ab as S,bb as O,eb as A,fb as z,gb as d,gc as $,ia as X,ic as I,na as k,wb as i,wc as h,xb as r,yb as p,zb as E}from"./chunk-KCZYDF4B.js";import"./chunk-GAL4ENT6.js";var re=`
    .p-timeline {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        direction: ltr;
    }

    .p-timeline-left .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-left .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event {
        flex-direction: row-reverse;
    }

    .p-timeline-right .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: row-reverse;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical .p-timeline-event-opposite,
    .p-timeline-vertical .p-timeline-event-content {
        padding: dt('timeline.vertical.event.content.padding');
    }

    .p-timeline-vertical .p-timeline-event-connector {
        width: dt('timeline.event.connector.size');
    }

    .p-timeline-event {
        display: flex;
        position: relative;
        min-height: dt('timeline.event.min.height');
    }

    .p-timeline-event:last-child {
        min-height: 0;
    }

    .p-timeline-event-opposite {
        flex: 1;
    }

    .p-timeline-event-content {
        flex: 1;
    }

    .p-timeline-event-separator {
        flex: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .p-timeline-event-marker {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        align-self: baseline;
        border-width: dt('timeline.event.marker.border.width');
        border-style: solid;
        border-color: dt('timeline.event.marker.border.color');
        border-radius: dt('timeline.event.marker.border.radius');
        width: dt('timeline.event.marker.size');
        height: dt('timeline.event.marker.size');
        background: dt('timeline.event.marker.background');
    }

    .p-timeline-event-marker::before {
        content: ' ';
        border-radius: dt('timeline.event.marker.content.border.radius');
        width: dt('timeline.event.marker.content.size');
        height: dt('timeline.event.marker.content.size');
        background: dt('timeline.event.marker.content.background');
    }

    .p-timeline-event-marker::after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: dt('timeline.event.marker.border.radius');
        box-shadow: dt('timeline.event.marker.content.inset.shadow');
    }

    .p-timeline-event-connector {
        flex-grow: 1;
        background: dt('timeline.event.connector.color');
    }

    .p-timeline-horizontal {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event {
        flex-direction: column;
        flex: 1;
    }

    .p-timeline-horizontal .p-timeline-event:last-child {
        flex: 0;
    }

    .p-timeline-horizontal .p-timeline-event-separator {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event-connector {
        width: 100%;
        height: dt('timeline.event.connector.size');
    }

    .p-timeline-horizontal .p-timeline-event-opposite,
    .p-timeline-horizontal .p-timeline-event-content {
        padding: dt('timeline.horizontal.event.content.padding');
    }

    .p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: column-reverse;
    }

    .p-timeline-bottom .p-timeline-event {
        flex-direction: column-reverse;
    }
`;var ye=["content"],Te=["opposite"],xe=["marker"],J=e=>({$implicit:e});function be(e,a){e&1&&y(0)}function Ce(e,a){e&1&&y(0)}function Ee(e,a){if(e&1&&(B(0),d(1,Ce,1,0,"ng-container",3),F()),e&2){let t=f().$implicit,o=f();l(),i("ngTemplateOutlet",o.markerTemplate||o._markerTemplate)("ngTemplateOutletContext",I(2,J,t))}}function ke(e,a){if(e&1&&E(0,"div",2),e&2){let t=f(2);u(t.cx("eventMarker")),i("pBind",t.ptm("eventMarker"))}}function Se(e,a){if(e&1&&E(0,"div",2),e&2){let t=f(2);u(t.cx("eventConnector")),i("pBind",t.ptm("eventConnector"))}}function Ie(e,a){e&1&&y(0)}function Me(e,a){if(e&1&&(r(0,"div",2)(1,"div",2),d(2,be,1,0,"ng-container",3),p(),r(3,"div",2),d(4,Ee,2,4,"ng-container",4)(5,ke,1,3,"ng-template",null,0,h)(7,Se,1,3,"div",5),p(),r(8,"div",2),d(9,Ie,1,0,"ng-container",3),p()()),e&2){let t=a.$implicit,o=a.last,n=ee(6),m=f();u(m.cx("event")),i("pBind",m.ptm("event")),l(),u(m.cx("eventOpposite")),i("pBind",m.ptm("eventOpposite")),l(),i("ngTemplateOutlet",m.oppositeTemplate||m._oppositeTemplate)("ngTemplateOutletContext",I(19,J,t)),l(),u(m.cx("eventSeparator")),i("pBind",m.ptm("eventSeparator")),l(),i("ngIf",m.markerTemplate||m._markerTemplate)("ngIfElse",n),l(3),i("ngIf",!o),l(),u(m.cx("eventContent")),i("pBind",m.ptm("eventContent")),l(),i("ngTemplateOutlet",m.contentTemplate||m._contentTemplate)("ngTemplateOutletContext",I(21,J,t))}}var De={root:({instance:e})=>["p-timeline p-component","p-timeline-"+e.align,"p-timeline-"+e.layout],event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},pe=(()=>{class e extends V{name="timeline";style=re;classes=De;static \u0275fac=(()=>{let t;return function(n){return(t||(t=k(e)))(n||e)}})();static \u0275prov=R({token:e,factory:e.\u0275fac})}return e})();var me=new Q("TIMELINE_INSTANCE"),K=(()=>{class e extends U{bindDirectiveInstance=x(T,{self:!0});$pcTimeline=x(me,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value;styleClass;align="left";layout="vertical";contentTemplate;oppositeTemplate;markerTemplate;templates;_contentTemplate;_oppositeTemplate;_markerTemplate;_componentStyle=x(pe);getBlockableElement(){return this.el.nativeElement.children[0]}onAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"opposite":this._oppositeTemplate=t.template;break;case"marker":this._markerTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=k(e)))(n||e)}})();static \u0275cmp=S({type:e,selectors:[["p-timeline"]],contentQueries:function(o,n,m){if(o&1&&(v(m,ye,4),v(m,Te,4),v(m,xe,4),v(m,H,4)),o&2){let c;_(c=g())&&(n.contentTemplate=c.first),_(c=g())&&(n.oppositeTemplate=c.first),_(c=g())&&(n.markerTemplate=c.first),_(c=g())&&(n.templates=c)}},hostVars:2,hostBindings:function(o,n){o&2&&u(n.cn(n.cx("root"),n.styleClass))},inputs:{value:"value",styleClass:"styleClass",align:"align",layout:"layout"},features:[$([pe,{provide:me,useExisting:e},{provide:L,useExisting:e}]),z([T]),A],decls:1,vars:1,consts:[["marker",""],[3,"pBind","class",4,"ngFor","ngForOf"],[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"pBind","class",4,"ngIf"]],template:function(o,n){o&1&&d(0,Me,10,23,"div",1),o&2&&i("ngForOf",n.value)},dependencies:[D,te,M,P,C,T],encapsulation:2,changeDetection:0})}return e})(),se=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=O({type:e});static \u0275inj=N({imports:[K,C,C]})}return e})();var ue=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`;var Fe=["header"],we=["title"],Re=["subtitle"],Ne=["content"],Qe=["footer"],Oe=["*",[["p-header"]],[["p-footer"]]],Ae=["*","p-header","p-footer"];function ze(e,a){e&1&&y(0)}function je(e,a){if(e&1&&(r(0,"div",1),j(1,1),d(2,ze,1,0,"ng-container",2),p()),e&2){let t=f();u(t.cx("header")),i("pBind",t.ptm("header")),l(2),i("ngTemplateOutlet",t.headerTemplate||t._headerTemplate)}}function qe(e,a){if(e&1&&(B(0),s(1),F()),e&2){let t=f(2);l(),w(t.header)}}function $e(e,a){e&1&&y(0)}function Pe(e,a){if(e&1&&(r(0,"div",1),d(1,qe,2,1,"ng-container",3)(2,$e,1,0,"ng-container",2),p()),e&2){let t=f();u(t.cx("title")),i("pBind",t.ptm("title")),l(),i("ngIf",t.header&&!t._titleTemplate&&!t.titleTemplate),l(),i("ngTemplateOutlet",t.titleTemplate||t._titleTemplate)}}function He(e,a){if(e&1&&(B(0),s(1),F()),e&2){let t=f(2);l(),w(t.subheader)}}function Ve(e,a){e&1&&y(0)}function Le(e,a){if(e&1&&(r(0,"div",1),d(1,He,2,1,"ng-container",3)(2,Ve,1,0,"ng-container",2),p()),e&2){let t=f();u(t.cx("subtitle")),i("pBind",t.ptm("subtitle")),l(),i("ngIf",t.subheader&&!t._subtitleTemplate&&!t.subtitleTemplate),l(),i("ngTemplateOutlet",t.subtitleTemplate||t._subtitleTemplate)}}function Ue(e,a){e&1&&y(0)}function Ge(e,a){e&1&&y(0)}function Je(e,a){if(e&1&&(r(0,"div",1),j(1,2),d(2,Ge,1,0,"ng-container",2),p()),e&2){let t=f();u(t.cx("footer")),i("pBind",t.ptm("footer")),l(2),i("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var Ke=`
    ${ue}

    .p-card {
        display: block;
    }
`,We={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},fe=(()=>{class e extends V{name="card";style=Ke;classes=We;static \u0275fac=(()=>{let t;return function(n){return(t||(t=k(e)))(n||e)}})();static \u0275prov=R({token:e,factory:e.\u0275fac})}return e})();var ve=new Q("CARD_INSTANCE"),W=(()=>{class e extends U{$pcCard=x(ve,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=x(T,{self:!0});_componentStyle=x(fe);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}header;subheader;set style(t){ne(this._style(),t)||(this._style.set(t),this.el?.nativeElement&&t&&Object.keys(t).forEach(o=>{this.el.nativeElement.style[o]=t[o]}))}get style(){return this._style()}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=X(null);getBlockableElement(){return this.el.nativeElement.children[0]}templates;onAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"title":this._titleTemplate=t.template;break;case"subtitle":this._subtitleTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=k(e)))(n||e)}})();static \u0275cmp=S({type:e,selectors:[["p-card"]],contentQueries:function(o,n,m){if(o&1&&(v(m,ie,5),v(m,ae,5),v(m,Fe,4),v(m,we,4),v(m,Re,4),v(m,Ne,4),v(m,Qe,4),v(m,H,4)),o&2){let c;_(c=g())&&(n.headerFacet=c.first),_(c=g())&&(n.footerFacet=c.first),_(c=g())&&(n.headerTemplate=c.first),_(c=g())&&(n.titleTemplate=c.first),_(c=g())&&(n.subtitleTemplate=c.first),_(c=g())&&(n.contentTemplate=c.first),_(c=g())&&(n.footerTemplate=c.first),_(c=g())&&(n.templates=c)}},hostVars:4,hostBindings:function(o,n){o&2&&(q(n._style()),u(n.cn(n.cx("root"),n.styleClass)))},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[$([fe,{provide:ve,useExisting:e},{provide:L,useExisting:e}]),z([T]),A],ngContentSelectors:Ae,decls:8,vars:11,consts:[[3,"pBind","class",4,"ngIf"],[3,"pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"]],template:function(o,n){o&1&&(Z(Oe),d(0,je,3,4,"div",0),r(1,"div",1),d(2,Pe,3,5,"div",0)(3,Le,3,5,"div",0),r(4,"div",1),j(5),d(6,Ue,1,0,"ng-container",2),p(),d(7,Je,3,4,"div",0),p()),o&2&&(i("ngIf",n.headerFacet||n.headerTemplate||n._headerTemplate),l(),u(n.cx("body")),i("pBind",n.ptm("body")),l(),i("ngIf",n.header||n.titleTemplate||n._titleTemplate),l(),i("ngIf",n.subheader||n.subtitleTemplate||n._subtitleTemplate),l(),u(n.cx("content")),i("pBind",n.ptm("content")),l(2),i("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),l(),i("ngIf",n.footerFacet||n.footerTemplate||n._footerTemplate))},dependencies:[D,M,P,C,G,T],encapsulation:2,changeDetection:0})}return e})(),_e=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=O({type:e});static \u0275inj=N({imports:[W,C,G,C,G]})}return e})();var Ye=e=>({"background-color":e});function Ze(e,a){if(e&1&&s(0),e&2){let t=a.$implicit;b(" ",t.status," ")}}function et(e,a){if(e&1&&s(0),e&2){let t=a.$implicit;b(" ",t.status," ")}}function tt(e,a){if(e&1&&s(0),e&2){let t=a.$implicit;b(" ",t.status," ")}}function nt(e,a){if(e&1&&(r(0,"small",17),s(1),p()),e&2){let t=a.$implicit;l(),w(t.date)}}function it(e,a){if(e&1&&s(0),e&2){let t=a.$implicit;b(" ",t.status," ")}}function at(e,a){if(e&1&&(r(0,"span",18),E(1,"i"),p()),e&2){let t=a.$implicit;q(I(4,Ye,t.color)),l(),u(t.icon)}}function ot(e,a){if(e&1&&E(0,"img",22),e&2){let t=f().$implicit;i("src","/images/product/"+t.image,Y)("alt",t.name)}}function lt(e,a){if(e&1&&(r(0,"p-card",19),d(1,ot,1,2,"img",20),r(2,"p"),s(3," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas! "),p(),E(4,"p-button",21),p()),e&2){let t=a.$implicit;i("header",t.status)("subheader",t.date),l(),i("ngIf",t.image),l(3),i("text",!0)}}function rt(e,a){if(e&1&&s(0),e&2){let t=a.$implicit;b(" ",t," ")}}function pt(e,a){if(e&1&&s(0),e&2){let t=a.$implicit;b(" ",t," ")}}function mt(e,a){if(e&1&&s(0),e&2){let t=a.$implicit;b(" ",t," ")}}function ct(e,a){e&1&&s(0," \xA0")}var ge=class e{events1=[];events2=[];ngOnInit(){this.events1=[{status:"Ordered",date:"15/10/2020 10:30",icon:"pi pi-shopping-cart",color:"#9C27B0",image:"game-controller.jpg"},{status:"Processing",date:"15/10/2020 14:00",icon:"pi pi-cog",color:"#673AB7"},{status:"Shipped",date:"15/10/2020 16:15",icon:"pi pi-envelope",color:"#FF9800"},{status:"Delivered",date:"16/10/2020 10:00",icon:"pi pi-check",color:"#607D8B"}],this.events2=["2020","2021","2022","2023"]}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=S({type:e,selectors:[["app-timeline-demo"]],decls:61,vars:8,consts:[["content",""],["opposite",""],["marker",""],[1,"grid","grid-cols-12","gap-8"],[1,"col-span-12","sm:col-span-6"],[1,"card"],[1,"font-semibold","text-xl","mb-4"],[3,"value"],["align","right",3,"value"],["align","alternate",3,"value"],[1,"col-span-full"],["align","alternate","styleClass","customized-timeline",3,"value"],[1,"font-semibold","mb-2"],["layout","horizontal","align","top",3,"value"],[1,"font-semibold","mt-4","mb-2"],["layout","horizontal","align","bottom",3,"value"],["layout","horizontal","align","alternate",3,"value"],[1,"p-text-secondary"],[1,"flex","w-8","h-8","items-center","justify-center","text-white","rounded-full","z-10","shadow-sm"],[3,"header","subheader"],["width","200","class","shadow",3,"src","alt",4,"ngIf"],["label","Read more",3,"text"],["width","200",1,"shadow",3,"src","alt"]],template:function(t,o){t&1&&(r(0,"div",3)(1,"div",4)(2,"div",5)(3,"div",6),s(4,"Left Align"),p(),r(5,"p-timeline",7),d(6,Ze,1,1,"ng-template",null,0,h),p()()(),r(8,"div",4)(9,"div",5)(10,"div",6),s(11,"Right Align"),p(),r(12,"p-timeline",8),d(13,et,1,1,"ng-template",null,0,h),p()()(),r(15,"div",4)(16,"div",5)(17,"div",6),s(18,"Alternate Align"),p(),r(19,"p-timeline",9),d(20,tt,1,1,"ng-template",null,0,h),p()()(),r(22,"div",4)(23,"div",5)(24,"div",6),s(25,"Opposite Content"),p(),r(26,"p-timeline",7),d(27,nt,2,1,"ng-template",null,0,h)(29,it,1,1,"ng-template",null,1,h),p()()(),r(31,"div",10)(32,"div",5)(33,"div",6),s(34,"Templating"),p(),r(35,"p-timeline",11),d(36,at,2,6,"ng-template",null,2,h)(38,lt,5,4,"ng-template",null,0,h),p()()(),r(40,"div",10)(41,"div",5)(42,"div",6),s(43,"Horizontal"),p(),r(44,"div",12),s(45,"Top Align"),p(),r(46,"p-timeline",13),d(47,rt,1,1,"ng-template",null,0,h),p(),r(49,"div",14),s(50,"Bottom Align"),p(),r(51,"p-timeline",15),d(52,pt,1,1,"ng-template",null,0,h),p(),r(54,"div",14),s(55,"Alternate Align"),p(),r(56,"p-timeline",16),d(57,mt,1,1,"ng-template",null,0,h)(59,ct,1,0,"ng-template",null,1,h),p()()()()),t&2&&(l(5),i("value",o.events1),l(7),i("value",o.events1),l(7),i("value",o.events1),l(7),i("value",o.events1),l(9),i("value",o.events1),l(11),i("value",o.events2),l(5),i("value",o.events2),l(5),i("value",o.events2))},dependencies:[D,M,se,K,le,oe,_e,W],encapsulation:2})};export{ge as TimelineDemo};
