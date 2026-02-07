import {
  MemberService
} from "./chunk-6LYHFPNF.js";
import {
  AvatarGroup,
  AvatarGroupModule
} from "./chunk-WE24ELOJ.js";
import {
  Avatar,
  AvatarModule
} from "./chunk-2GJLLVBV.js";
import {
  PopoverModule
} from "./chunk-7T6AGEHT.js";
import {
  Menu,
  MenuModule
} from "./chunk-JSOL5EHL.js";
import {
  TieredMenu,
  TieredMenuModule
} from "./chunk-DTM66CJH.js";
import {
  CdkDrag,
  CdkDragHandle,
  CdkDropList,
  DragDropModule,
  moveItemInArray,
  transferArrayItem
} from "./chunk-V7XZCK3Y.js";
import {
  StyleClass,
  StyleClassModule
} from "./chunk-FPNEPMP3.js";
import {
  Drawer,
  DrawerModule
} from "./chunk-SWRBB5GX.js";
import {
  AutoComplete,
  AutoCompleteModule
} from "./chunk-FDIW5MJX.js";
import {
  ProgressBar,
  ProgressBarModule
} from "./chunk-UXWH3647.js";
import "./chunk-IFPN5NGS.js";
import "./chunk-KZ2XEJBQ.js";
import {
  Textarea,
  TextareaModule
} from "./chunk-SNWJRZDT.js";
import "./chunk-VYPJWBQM.js";
import "./chunk-K745LLV4.js";
import "./chunk-QM3EJKHT.js";
import {
  DatePicker,
  DatePickerModule
} from "./chunk-ATTBT5LJ.js";
import "./chunk-S7EQZUZC.js";
import {
  Checkbox,
  CheckboxModule
} from "./chunk-FT7WFYEI.js";
import "./chunk-GM56SEQR.js";
import "./chunk-X3MCY454.js";
import "./chunk-BICDQRLL.js";
import "./chunk-JPETFPPG.js";
import "./chunk-KG7RE235.js";
import "./chunk-UHMM7FE7.js";
import "./chunk-SUK52LSR.js";
import "./chunk-3UGMWDW4.js";
import "./chunk-WQC3TYUA.js";
import {
  InputText,
  InputTextModule
} from "./chunk-YW263GEX.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-HEGGX7RQ.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-HZAHIETM.js";
import {
  HttpClient
} from "./chunk-UXOAS4MB.js";
import {
  TimesIcon
} from "./chunk-BVWUZ6O2.js";
import {
  Button,
  ButtonDirective,
  ButtonModule
} from "./chunk-O7LMIZSN.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-BNKYD7VX.js";
import "./chunk-XLSVDIRK.js";
import {
  Ripple,
  RippleModule
} from "./chunk-HURDVDQD.js";
import "./chunk-CUNICK74.js";
import {
  BaseComponent,
  BaseStyle,
  Bind,
  PARENT_INSTANCE,
  PrimeTemplate,
  SharedModule
} from "./chunk-6R3XSTEB.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgTemplateOutlet,
  SlicePipe
} from "./chunk-KASXF2RH.js";
import "./chunk-WWG27WRZ.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Output,
  Subject,
  Subscription,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-5J4QQBGF.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/apps/kanban/service/kanban.service.ts
var KanbanService = class _KanbanService {
  http;
  _lists = [];
  selectedCard = new Subject();
  selectedListId = new Subject();
  lists = new BehaviorSubject(this._lists);
  listNames = new Subject();
  lists$ = this.lists.asObservable();
  selectedCard$ = this.selectedCard.asObservable();
  selectedListId$ = this.selectedListId.asObservable();
  listNames$ = this.listNames.asObservable();
  constructor(http) {
    this.http = http;
    this.http.get("/demo/data/kanban.json").toPromise().then((res) => res.data).then((data) => {
      this.updateLists(data);
    });
  }
  updateLists(data) {
    this._lists = data;
    let small = data.map((l) => ({ listId: l.listId, title: l.title }));
    this.listNames.next(small);
    this.lists.next(data);
  }
  addList() {
    const listId = this.generateId();
    const title = "Untitled List";
    const newList = {
      listId,
      title,
      cards: []
    };
    this._lists.push(newList);
    this.lists.next(this._lists);
  }
  addCard(listId) {
    const cardId = this.generateId();
    const title = "Untitled card";
    const newCard = { id: cardId, title, description: "", progress: "", assignees: [], attachments: 0, comments: [], startDate: "", dueDate: "", completed: false, taskList: { title: "Untitled Task List", tasks: [] } };
    let lists = [];
    lists = this._lists.map((l) => l.listId === listId ? __spreadProps(__spreadValues({}, l), { cards: [...l.cards || [], newCard] }) : l);
    this.updateLists(lists);
  }
  updateCard(card, listId) {
    let lists = this._lists.map((l) => l.listId === listId ? __spreadProps(__spreadValues({}, l), { cards: l.cards.map((c) => c?.id === card.id ? __spreadValues({}, card) : c) }) : l);
    this.updateLists(lists);
  }
  deleteList(id) {
    this._lists = this._lists.filter((l) => l.listId !== id);
    this.lists.next(this._lists);
  }
  copyList(list) {
    let newId = this.generateId();
    let newList = __spreadProps(__spreadValues({}, list), { listId: newId });
    this._lists.push(newList);
    this.lists.next(this._lists);
  }
  deleteCard(cardId, listId) {
    let lists = [];
    for (let i = 0; i < this._lists.length; i++) {
      let list = this._lists[i];
      if (list.listId === listId && list.cards) {
        list.cards = list.cards.filter((c) => c.id !== cardId);
      }
      lists.push(list);
    }
    this.updateLists(lists);
  }
  copyCard(card, listId) {
    let lists = [];
    for (let i = 0; i < this._lists.length; i++) {
      let list = this._lists[i];
      if (list.listId === listId && list.cards) {
        let cardIndex = list.cards.indexOf(card);
        let newId = this.generateId();
        let newCard = __spreadProps(__spreadValues({}, card), { id: newId });
        list.cards.splice(cardIndex, 0, newCard);
      }
      lists.push(list);
    }
    this.updateLists(lists);
  }
  moveCard(card, targetListId, sourceListId) {
    if (card.id) {
      this.deleteCard(card.id, sourceListId);
      let lists = this._lists.map((l) => l.listId === targetListId ? __spreadProps(__spreadValues({}, l), { cards: [...l.cards || [], card] }) : l);
      this.updateLists(lists);
    }
  }
  onCardSelect(card, listId) {
    this.selectedCard.next(card);
    this.selectedListId.next(listId);
  }
  generateId() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
  isMobileDevice() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) || /(android)/i.test(navigator.userAgent);
  }
  static \u0275fac = function KanbanService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KanbanService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _KanbanService, factory: _KanbanService.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KanbanService, [{
    type: Injectable
  }], () => [{ type: HttpClient }], null);
})();

// node_modules/@primeuix/styles/dist/inplace/index.mjs
var style = "\n    .p-inplace-display {\n        display: inline-block;\n        cursor: pointer;\n        border: 1px solid transparent;\n        padding: dt('inplace.padding');\n        border-radius: dt('inplace.border.radius');\n        transition:\n            background dt('inplace.transition.duration'),\n            color dt('inplace.transition.duration'),\n            outline-color dt('inplace.transition.duration'),\n            box-shadow dt('inplace.transition.duration');\n        outline-color: transparent;\n    }\n\n    .p-inplace-display:not(.p-disabled):hover {\n        background: dt('inplace.display.hover.background');\n        color: dt('inplace.display.hover.color');\n    }\n\n    .p-inplace-display:focus-visible {\n        box-shadow: dt('inplace.focus.ring.shadow');\n        outline: dt('inplace.focus.ring.width') dt('inplace.focus.ring.style') dt('inplace.focus.ring.color');\n        outline-offset: dt('inplace.focus.ring.offset');\n    }\n\n    .p-inplace-content {\n        display: block;\n    }\n";

// node_modules/primeng/fesm2022/primeng-inplace.mjs
var _c0 = ["*"];
var _c1 = ["display"];
var _c2 = ["content"];
var _c3 = ["closeicon"];
var _c4 = [[["", "pInplaceDisplay", ""]], [["", "pInplaceContent", ""]]];
var _c5 = ["[pInplaceDisplay]", "[pInplaceContent]"];
var _c6 = (a0) => ({
  "p-disabled": a0
});
var _c7 = (a0) => ({
  closeCallback: a0
});
function Inplace_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Inplace_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275listener("click", function Inplace_div_0_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onActivateClick($event));
    })("keydown", function Inplace_div_0_Template_div_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onKeydown($event));
    });
    \u0275\u0275projection(1);
    \u0275\u0275template(2, Inplace_div_0_ng_container_2_Template, 1, 0, "ng-container", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cx("display"));
    \u0275\u0275property("pBind", ctx_r1.ptm("display"))("ngClass", \u0275\u0275pureFunction1(5, _c6, ctx_r1.disabled));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.displayTemplate || ctx_r1._displayTemplate);
  }
}
function Inplace_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Inplace_div_1_ng_container_3_p_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 10);
    \u0275\u0275listener("click", function Inplace_div_1_ng_container_3_p_button_1_Template_p_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDeactivateClick($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("pt", ctx_r1.ptm("pcButton"))("icon", ctx_r1.closeIcon);
    \u0275\u0275attribute("aria-label", ctx_r1.closeAriaLabel);
  }
}
function Inplace_div_1_ng_container_3_p_button_2_ng_template_1__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 13);
  }
}
function Inplace_div_1_ng_container_3_p_button_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Inplace_div_1_ng_container_3_p_button_2_ng_template_1__svg_svg_0_Template, 1, 0, "svg", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngIf", !ctx_r1.closeIconTemplate && !ctx_r1._closeIconTemplate);
  }
}
function Inplace_div_1_ng_container_3_p_button_2_3_ng_template_0_Template(rf, ctx) {
}
function Inplace_div_1_ng_container_3_p_button_2_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Inplace_div_1_ng_container_3_p_button_2_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Inplace_div_1_ng_container_3_p_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 11);
    \u0275\u0275listener("click", function Inplace_div_1_ng_container_3_p_button_2_Template_p_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDeactivateClick($event));
    });
    \u0275\u0275template(1, Inplace_div_1_ng_container_3_p_button_2_ng_template_1_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, Inplace_div_1_ng_container_3_p_button_2_3_Template, 1, 0, null, 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("pt", ctx_r1.ptm("pcButton"));
    \u0275\u0275attribute("aria-label", ctx_r1.closeAriaLabel);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.closeIconTemplate || ctx_r1._closeIconTemplate);
  }
}
function Inplace_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Inplace_div_1_ng_container_3_p_button_1_Template, 1, 3, "p-button", 8)(2, Inplace_div_1_ng_container_3_p_button_2_Template, 4, 3, "p-button", 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.closeIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.closeIcon);
  }
}
function Inplace_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275projection(1, 1);
    \u0275\u0275template(2, Inplace_div_1_ng_container_2_Template, 1, 0, "ng-container", 6)(3, Inplace_div_1_ng_container_3_Template, 3, 2, "ng-container", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cx("content"));
    \u0275\u0275property("pBind", ctx_r1.ptm("content"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.contentTemplate || ctx_r1._contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(6, _c7, ctx_r1.onDeactivateClick.bind(ctx_r1)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.closable);
  }
}
var classes = {
  root: () => ["p-inplace p-component"],
  display: ({
    instance
  }) => ["p-inplace-display", {
    "p-disabled": instance.disabled
  }],
  content: "p-inplace-content"
};
var InplaceStyle = class _InplaceStyle extends BaseStyle {
  name = "inplace";
  style = style;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InplaceStyle_BaseFactory;
    return function InplaceStyle_Factory(__ngFactoryType__) {
      return (\u0275InplaceStyle_BaseFactory || (\u0275InplaceStyle_BaseFactory = \u0275\u0275getInheritedFactory(_InplaceStyle)))(__ngFactoryType__ || _InplaceStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InplaceStyle,
    factory: _InplaceStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InplaceStyle, [{
    type: Injectable
  }], null, null);
})();
var InplaceClasses;
(function(InplaceClasses2) {
  InplaceClasses2["root"] = "p-inplace";
  InplaceClasses2["display"] = "p-inplace-display";
  InplaceClasses2["content"] = "p-inplace-content";
})(InplaceClasses || (InplaceClasses = {}));
var INPLACE_INSTANCE = new InjectionToken("INPLACE_INSTANCE");
var InplaceDisplay = class _InplaceDisplay extends BaseComponent {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InplaceDisplay_BaseFactory;
    return function InplaceDisplay_Factory(__ngFactoryType__) {
      return (\u0275InplaceDisplay_BaseFactory || (\u0275InplaceDisplay_BaseFactory = \u0275\u0275getInheritedFactory(_InplaceDisplay)))(__ngFactoryType__ || _InplaceDisplay);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _InplaceDisplay,
    selectors: [["p-inplacedisplay"], ["p-inplaceDisplay"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function InplaceDisplay_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InplaceDisplay, [{
    type: Component,
    args: [{
      selector: "p-inplacedisplay, p-inplaceDisplay",
      standalone: true,
      imports: [CommonModule],
      template: "<ng-content></ng-content>"
    }]
  }], null, null);
})();
var InplaceContent = class _InplaceContent extends BaseComponent {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InplaceContent_BaseFactory;
    return function InplaceContent_Factory(__ngFactoryType__) {
      return (\u0275InplaceContent_BaseFactory || (\u0275InplaceContent_BaseFactory = \u0275\u0275getInheritedFactory(_InplaceContent)))(__ngFactoryType__ || _InplaceContent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _InplaceContent,
    selectors: [["p-inplacecontent"], ["p-inplaceContent"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function InplaceContent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InplaceContent, [{
    type: Component,
    args: [{
      selector: "p-inplacecontent, p-inplaceContent",
      standalone: true,
      imports: [CommonModule],
      template: "<ng-content></ng-content>"
    }]
  }], null, null);
})();
var Inplace = class _Inplace extends BaseComponent {
  $pcInplace = inject(INPLACE_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Whether the content is displayed or not.
   * @group Props
   */
  active = false;
  /**
   * Displays a button to switch back to display mode.
   * @deprecated since v20.0.0, use `closeCallback` within content template.
   * @group Props
   */
  closable = false;
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  disabled = false;
  /**
   * Allows to prevent clicking.
   * @group Props
   */
  preventClick;
  /**
   * Class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Icon to display in the close button.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  closeIcon;
  /**
   * Establishes a string value that labels the close button.
   * @group Props
   */
  closeAriaLabel;
  /**
   * Callback to invoke when inplace is opened.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onActivate = new EventEmitter();
  /**
   * Callback to invoke when inplace is closed.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onDeactivate = new EventEmitter();
  hover;
  /**
   * Display template of the element.
   * @group Templates
   */
  displayTemplate;
  /**
   * Content template of the element.
   * @group Templates
   */
  contentTemplate;
  /**
   * Close icon template of the element.
   * @group Templates
   */
  closeIconTemplate;
  _componentStyle = inject(InplaceStyle);
  onActivateClick(event) {
    if (!this.preventClick) this.activate(event);
  }
  onDeactivateClick(event) {
    if (!this.preventClick) this.deactivate(event);
  }
  /**
   * Activates the content.
   * @param {Event} event - Browser event.
   * @group Method
   */
  activate(event) {
    if (!this.disabled) {
      this.active = true;
      this.onActivate.emit(event);
      this.cd.markForCheck();
    }
  }
  /**
   * Deactivates the content.
   * @param {Event} event - Browser event.
   * @group Method
   */
  deactivate(event) {
    if (!this.disabled) {
      this.active = false;
      this.hover = false;
      this.onDeactivate.emit(event);
      this.cd.markForCheck();
    }
  }
  onKeydown(event) {
    if (event.code === "Enter") {
      this.activate(event);
      event.preventDefault();
    }
  }
  templates;
  _displayTemplate;
  _closeIconTemplate;
  _contentTemplate;
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "display":
          this._displayTemplate = item.template;
          break;
        case "closeicon":
          this._closeIconTemplate = item.template;
          break;
        case "content":
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Inplace_BaseFactory;
    return function Inplace_Factory(__ngFactoryType__) {
      return (\u0275Inplace_BaseFactory || (\u0275Inplace_BaseFactory = \u0275\u0275getInheritedFactory(_Inplace)))(__ngFactoryType__ || _Inplace);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Inplace,
    selectors: [["p-inplace"]],
    contentQueries: function Inplace_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c1, 4);
        \u0275\u0275contentQuery(dirIndex, _c2, 4);
        \u0275\u0275contentQuery(dirIndex, _c3, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.displayTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.closeIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 3,
    hostBindings: function Inplace_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-live", "polite");
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      active: [2, "active", "active", booleanAttribute],
      closable: [2, "closable", "closable", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute],
      preventClick: [2, "preventClick", "preventClick", booleanAttribute],
      styleClass: "styleClass",
      closeIcon: "closeIcon",
      closeAriaLabel: "closeAriaLabel"
    },
    outputs: {
      onActivate: "onActivate",
      onDeactivate: "onDeactivate"
    },
    features: [\u0275\u0275ProvidersFeature([InplaceStyle, {
      provide: INPLACE_INSTANCE,
      useExisting: _Inplace
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Inplace
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c5,
    decls: 2,
    vars: 2,
    consts: [["icon", ""], ["tabindex", "0", "role", "button", 3, "class", "pBind", "ngClass", "click", "keydown", 4, "ngIf"], [3, "class", "pBind", 4, "ngIf"], ["tabindex", "0", "role", "button", 3, "click", "keydown", "pBind", "ngClass"], [4, "ngTemplateOutlet"], [3, "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf"], ["type", "button", "pRipple", "", 3, "pt", "icon", "click", 4, "ngIf"], ["type", "button", "pRipple", "", 3, "pt", "click", 4, "ngIf"], ["type", "button", "pRipple", "", 3, "click", "pt", "icon"], ["type", "button", "pRipple", "", 3, "click", "pt"], ["data-p-icon", "times", 4, "ngIf"], ["data-p-icon", "times"]],
    template: function Inplace_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c4);
        \u0275\u0275template(0, Inplace_div_0_Template, 3, 7, "div", 1)(1, Inplace_div_1_Template, 4, 8, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", !ctx.active);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.active);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, ButtonModule, Button, TimesIcon, SharedModule, Ripple, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Inplace, [{
    type: Component,
    args: [{
      selector: "p-inplace",
      standalone: true,
      imports: [CommonModule, ButtonModule, TimesIcon, SharedModule, Ripple, Bind],
      template: `
        <div [class]="cx('display')" [pBind]="ptm('display')" (click)="onActivateClick($event)" tabindex="0" role="button" (keydown)="onKeydown($event)" [ngClass]="{ 'p-disabled': disabled }" *ngIf="!active">
            <ng-content select="[pInplaceDisplay]"></ng-content>
            <ng-container *ngTemplateOutlet="displayTemplate || _displayTemplate"></ng-container>
        </div>
        <div [class]="cx('content')" [pBind]="ptm('content')" *ngIf="active">
            <ng-content select="[pInplaceContent]"></ng-content>
            <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { closeCallback: onDeactivateClick.bind(this) }"></ng-container>

            <ng-container *ngIf="closable">
                <p-button *ngIf="closeIcon" [pt]="ptm('pcButton')" type="button" [icon]="closeIcon" pRipple (click)="onDeactivateClick($event)" [attr.aria-label]="closeAriaLabel"></p-button>
                <p-button *ngIf="!closeIcon" [pt]="ptm('pcButton')" type="button" pRipple (click)="onDeactivateClick($event)" [attr.aria-label]="closeAriaLabel">
                    <ng-template #icon>
                        <svg data-p-icon="times" *ngIf="!closeIconTemplate && !_closeIconTemplate" />
                    </ng-template>
                    <ng-template *ngTemplateOutlet="closeIconTemplate || _closeIconTemplate"></ng-template>
                </p-button>
            </ng-container>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [InplaceStyle, {
        provide: INPLACE_INSTANCE,
        useExisting: Inplace
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Inplace
      }],
      host: {
        "[attr.aria-live]": "'polite'",
        "[class]": "cn(cx('root'), styleClass)"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    active: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    closable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    preventClick: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    styleClass: [{
      type: Input
    }],
    closeIcon: [{
      type: Input
    }],
    closeAriaLabel: [{
      type: Input
    }],
    onActivate: [{
      type: Output
    }],
    onDeactivate: [{
      type: Output
    }],
    displayTemplate: [{
      type: ContentChild,
      args: ["display", {
        descendants: false
      }]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    closeIconTemplate: [{
      type: ContentChild,
      args: ["closeicon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var InplaceModule = class _InplaceModule {
  static \u0275fac = function InplaceModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InplaceModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _InplaceModule,
    imports: [Inplace, InplaceContent, InplaceDisplay, SharedModule],
    exports: [Inplace, InplaceContent, InplaceDisplay, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Inplace, InplaceContent, InplaceDisplay, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InplaceModule, [{
    type: NgModule,
    args: [{
      imports: [Inplace, InplaceContent, InplaceDisplay, SharedModule],
      exports: [Inplace, InplaceContent, InplaceDisplay, SharedModule]
    }]
  }], null, null);
})();

// src/app/apps/kanban/kanbansidebar.ts
var _c02 = ["inputTitle"];
var _c12 = ["inputTaskListTitle"];
var _c22 = () => ({ height: "2.5rem" });
var _c32 = (a0, a1) => ({ "text-600 line-through": a0, "text-900": a1 });
function KanbanSidebar_p_drawer_0_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formValue.title ? ctx_r1.formValue.title : "Untitled");
  }
}
function KanbanSidebar_p_drawer_0_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 48)(1, "input", 49, 8);
    \u0275\u0275twoWayListener("ngModelChange", function KanbanSidebar_p_drawer_0_ng_template_2_ng_template_6_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.formValue.title, $event) || (ctx_r1.formValue.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function KanbanSidebar_p_drawer_0_ng_template_2_ng_template_6_Template_input_keydown_enter_1_listener() {
      \u0275\u0275restoreView(_r4);
      \u0275\u0275nextContext();
      const inplace_r5 = \u0275\u0275reference(3);
      return \u0275\u0275resetView(inplace_r5.deactivate());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 50);
    \u0275\u0275listener("click", function KanbanSidebar_p_drawer_0_ng_template_2_ng_template_6_Template_button_click_3_listener($event) {
      const closeCallback_r6 = \u0275\u0275restoreView(_r4).closeCallback;
      return \u0275\u0275resetView(closeCallback_r6($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formValue.title);
  }
}
function KanbanSidebar_p_drawer_0_ng_template_2_span_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275listener("click", function KanbanSidebar_p_drawer_0_ng_template_2_span_17_Template_span_click_0_listener() {
      const list_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onMove(list_r8.listId || ""));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const list_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(list_r8.title);
  }
}
function KanbanSidebar_p_drawer_0_ng_template_2_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 52)(2, "span", 53);
    \u0275\u0275text(3, "Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 54);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "p-progress-bar", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.formValue.progress, "%");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.formValue.progress)("showValue", false);
  }
}
function KanbanSidebar_p_drawer_0_ng_template_2_div_38_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formValue.taskList.title);
  }
}
function KanbanSidebar_p_drawer_0_ng_template_2_div_38_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 48)(1, "input", 49, 9);
    \u0275\u0275twoWayListener("ngModelChange", function KanbanSidebar_p_drawer_0_ng_template_2_div_38_ng_template_6_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.formValue.taskList.title, $event) || (ctx_r1.formValue.taskList.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function KanbanSidebar_p_drawer_0_ng_template_2_div_38_ng_template_6_Template_input_keydown_enter_1_listener() {
      \u0275\u0275restoreView(_r10);
      \u0275\u0275nextContext();
      const inplace_r11 = \u0275\u0275reference(3);
      return \u0275\u0275resetView(inplace_r11.deactivate());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 50);
    \u0275\u0275listener("click", function KanbanSidebar_p_drawer_0_ng_template_2_div_38_ng_template_6_Template_button_click_3_listener($event) {
      const closeCallback_r12 = \u0275\u0275restoreView(_r10).closeCallback;
      return \u0275\u0275resetView(closeCallback_r12($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formValue.taskList.title);
  }
}
function KanbanSidebar_p_drawer_0_ng_template_2_div_38_ul_9_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 61)(1, "p-checkbox", 62);
    \u0275\u0275twoWayListener("ngModelChange", function KanbanSidebar_p_drawer_0_ng_template_2_div_38_ul_9_li_1_Template_p_checkbox_ngModelChange_1_listener($event) {
      const task_r14 = \u0275\u0275restoreView(_r13).$implicit;
      \u0275\u0275twoWayBindingSet(task_r14.completed, $event) || (task_r14.completed = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function KanbanSidebar_p_drawer_0_ng_template_2_div_38_ul_9_li_1_Template_p_checkbox_onChange_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.calculateProgress());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 63);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r14 = ctx.$implicit;
    const i_r15 = ctx.index;
    \u0275\u0275advance();
    \u0275\u0275property("name", task_r14.text + i_r15);
    \u0275\u0275twoWayProperty("ngModel", task_r14.completed);
    \u0275\u0275property("binary", true)("inputId", task_r14.text);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(6, _c32, task_r14.completed, !task_r14.completed));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", task_r14.text, " ");
  }
}
function KanbanSidebar_p_drawer_0_ng_template_2_div_38_ul_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 59);
    \u0275\u0275template(1, KanbanSidebar_p_drawer_0_ng_template_2_div_38_ul_9_li_1_Template, 4, 9, "li", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.formValue.taskList == null ? null : ctx_r1.formValue.taskList.tasks);
  }
}
function KanbanSidebar_p_drawer_0_ng_template_2_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 56)(2, "p-inplace", null, 2);
    \u0275\u0275template(4, KanbanSidebar_p_drawer_0_ng_template_2_div_38_ng_template_4_Template, 2, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(6, KanbanSidebar_p_drawer_0_ng_template_2_div_38_ng_template_6_Template, 4, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "textarea", 57);
    \u0275\u0275twoWayListener("ngModelChange", function KanbanSidebar_p_drawer_0_ng_template_2_div_38_Template_textarea_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.taskContent, $event) || (ctx_r1.taskContent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function KanbanSidebar_p_drawer_0_ng_template_2_div_38_Template_textarea_keydown_enter_8_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addTask($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, KanbanSidebar_p_drawer_0_ng_template_2_div_38_ul_9_Template, 2, 1, "ul", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.taskContent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.formValue.taskList == null ? null : ctx_r1.formValue.taskList.tasks == null ? null : ctx_r1.formValue.taskList.tasks.length) !== 0);
  }
}
function KanbanSidebar_p_drawer_0_ng_template_2_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 65);
    \u0275\u0275element(2, "img", 66);
    \u0275\u0275elementStart(3, "span", 67);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const assignee_r16 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", \u0275\u0275interpolate1("/demo/images/avatar/", assignee_r16.image), \u0275\u0275sanitizeUrl)("alt", assignee_r16.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(assignee_r16.name);
  }
}
function KanbanSidebar_p_drawer_0_ng_template_2_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275element(1, "img", 66);
    \u0275\u0275elementStart(2, "span", 67);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const assignee_r17 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275interpolate1("/demo/images/avatar/", assignee_r17.image), \u0275\u0275sanitizeUrl)("alt", assignee_r17.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(assignee_r17.name);
  }
}
function KanbanSidebar_p_drawer_0_ng_template_2_div_55_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275element(1, "img", 78);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comment_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275interpolate1("/demo/images/avatar/", comment_r18.image), \u0275\u0275sanitizeUrl);
  }
}
function KanbanSidebar_p_drawer_0_ng_template_2_div_55_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 79);
    \u0275\u0275element(1, "i", 40);
    \u0275\u0275elementEnd();
  }
}
function KanbanSidebar_p_drawer_0_ng_template_2_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275template(1, KanbanSidebar_p_drawer_0_ng_template_2_div_55_span_1_Template, 2, 2, "span", 70)(2, KanbanSidebar_p_drawer_0_ng_template_2_div_55_span_2_Template, 2, 0, "span", 71);
    \u0275\u0275elementStart(3, "div", 72)(4, "div", 73)(5, "span", 74);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 75);
    \u0275\u0275text(8, "1 Jun 17:58 pm");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 76);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const comment_r18 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", comment_r18.image);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !comment_r18.image);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(comment_r18.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(comment_r18 == null ? null : comment_r18.text);
  }
}
function KanbanSidebar_p_drawer_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 12);
    \u0275\u0275listener("submit", function KanbanSidebar_p_drawer_0_ng_template_2_Template_form_submit_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSave($event));
    });
    \u0275\u0275elementStart(1, "div", 13)(2, "p-inplace", null, 2);
    \u0275\u0275template(4, KanbanSidebar_p_drawer_0_ng_template_2_ng_template_4_Template, 2, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(6, KanbanSidebar_p_drawer_0_ng_template_2_ng_template_6_Template, 4, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 14);
    \u0275\u0275element(9, "button", 15, 5);
    \u0275\u0275elementStart(11, "button", 16);
    \u0275\u0275listener("click", function KanbanSidebar_p_drawer_0_ng_template_2_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 17)(13, "div", 18)(14, "div", 19)(15, "span", 20);
    \u0275\u0275text(16, "Move to...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, KanbanSidebar_p_drawer_0_ng_template_2_span_17_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 19)(19, "span", 20);
    \u0275\u0275text(20, "Tasks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 22);
    \u0275\u0275listener("click", function KanbanSidebar_p_drawer_0_ng_template_2_Template_span_click_21_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addTaskList());
    });
    \u0275\u0275text(22, "Create a tasklist");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(23, "div", 23)(24, "div", 24)(25, "label", 25);
    \u0275\u0275text(26, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "textarea", 26);
    \u0275\u0275twoWayListener("ngModelChange", function KanbanSidebar_p_drawer_0_ng_template_2_Template_textarea_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.formValue.description, $event) || (ctx_r1.formValue.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 27)(29, "div", 28)(30, "label", 25);
    \u0275\u0275text(31, "Start Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p-datepicker", 29);
    \u0275\u0275twoWayListener("ngModelChange", function KanbanSidebar_p_drawer_0_ng_template_2_Template_p_datepicker_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.formValue.startDate, $event) || (ctx_r1.formValue.startDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 28)(34, "label", 30);
    \u0275\u0275text(35, "Due Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p-datepicker", 31);
    \u0275\u0275twoWayListener("ngModelChange", function KanbanSidebar_p_drawer_0_ng_template_2_Template_p_datepicker_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.formValue.dueDate, $event) || (ctx_r1.formValue.dueDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(37, KanbanSidebar_p_drawer_0_ng_template_2_div_37_Template, 7, 3, "div", 32)(38, KanbanSidebar_p_drawer_0_ng_template_2_div_38_Template, 10, 2, "div", 32);
    \u0275\u0275elementStart(39, "div", 33)(40, "label", 34);
    \u0275\u0275text(41, "Assignees");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "p-autocomplete", 35);
    \u0275\u0275twoWayListener("ngModelChange", function KanbanSidebar_p_drawer_0_ng_template_2_Template_p_autocomplete_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.formValue.assignees, $event) || (ctx_r1.formValue.assignees = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("completeMethod", function KanbanSidebar_p_drawer_0_ng_template_2_Template_p_autocomplete_completeMethod_42_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.filterAssignees($event));
    });
    \u0275\u0275template(43, KanbanSidebar_p_drawer_0_ng_template_2_ng_template_43_Template, 5, 4, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(45, KanbanSidebar_p_drawer_0_ng_template_2_ng_template_45_Template, 4, 4, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 36)(48, "span", 37);
    \u0275\u0275text(49, "Comments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 38)(51, "span", 39);
    \u0275\u0275element(52, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "span");
    \u0275\u0275elementStart(54, "textarea", 41);
    \u0275\u0275twoWayListener("ngModelChange", function KanbanSidebar_p_drawer_0_ng_template_2_Template_textarea_ngModelChange_54_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.comment, $event) || (ctx_r1.comment = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function KanbanSidebar_p_drawer_0_ng_template_2_Template_textarea_keydown_enter_54_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onComment($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(55, KanbanSidebar_p_drawer_0_ng_template_2_div_55_Template, 11, 4, "div", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 43);
    \u0275\u0275element(57, "button", 44);
    \u0275\u0275elementStart(58, "button", 45);
    \u0275\u0275listener("click", function KanbanSidebar_p_drawer_0_ng_template_2_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDelete());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(59, "button", 46);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const sidebar_r19 = \u0275\u0275reference(1);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r1.listNames);
    \u0275\u0275advance(10);
    \u0275\u0275property("rows", 5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formValue.description);
    \u0275\u0275advance(5);
    \u0275\u0275property("showTime", false)("required", true)("showIcon", true);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formValue.startDate);
    \u0275\u0275advance(4);
    \u0275\u0275property("showTime", false)("required", true)("showIcon", true);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formValue.dueDate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formValue.taskList.tasks.length || ctx_r1.showTaskContainer);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formValue.taskList.tasks.length || ctx_r1.showTaskContainer);
    \u0275\u0275advance(4);
    \u0275\u0275property("appendTo", sidebar_r19);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formValue.assignees);
    \u0275\u0275property("suggestions", ctx_r1.filteredAssignees)("multiple", true)("showEmptyMessage", true)("inputStyle", \u0275\u0275pureFunction0(21, _c22));
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.comment);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.formValue.comments);
  }
}
function KanbanSidebar_p_drawer_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-drawer", 11, 0);
    \u0275\u0275twoWayListener("visibleChange", function KanbanSidebar_p_drawer_0_Template_p_drawer_visibleChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.parent.sidebarVisible, $event) || (ctx_r1.parent.sidebarVisible = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(2, KanbanSidebar_p_drawer_0_ng_template_2_Template, 60, 22, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("visible", ctx_r1.parent.sidebarVisible);
    \u0275\u0275property("baseZIndex", 1e4)("showCloseIcon", false);
  }
}
var KanbanSidebar = class _KanbanSidebar {
  parent;
  memberService;
  kanbanService;
  card = { id: "", taskList: { title: "Untitled Task List", tasks: [] } };
  formValue;
  listId = "";
  filteredAssignees = [];
  assignees = [];
  newComment = { id: "123", name: "Jane Cooper", text: "" };
  newTask = { text: "", completed: false };
  comment = "";
  taskContent = "";
  timeout = null;
  showTaskContainer = false;
  listNames = [];
  cardSubscription;
  listSubscription;
  listNameSubscription;
  inputTitle;
  inputTaskListTitle;
  constructor(parent, memberService, kanbanService) {
    this.parent = parent;
    this.memberService = memberService;
    this.kanbanService = kanbanService;
    this.memberService.getMembers().then((members) => this.assignees = members);
    this.cardSubscription = this.kanbanService.selectedCard$.subscribe((data) => {
      this.card = data;
      this.formValue = __spreadValues({}, data);
    });
    this.listSubscription = this.kanbanService.selectedListId$.subscribe((data) => this.listId = data);
    this.listNameSubscription = this.kanbanService.listNames$.subscribe((data) => this.listNames = data);
  }
  ngOnDestroy() {
    this.cardSubscription.unsubscribe();
    this.listSubscription.unsubscribe();
    this.listNameSubscription.unsubscribe();
    clearTimeout(this.timeout);
  }
  close() {
    this.parent.sidebarVisible = false;
    this.resetForm();
  }
  filterAssignees(event) {
    let filtered = [];
    let query = event.query;
    for (let i = 0; i < this.assignees.length; i++) {
      let assignee = this.assignees[i];
      if (assignee.name && assignee.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(assignee);
      }
    }
    this.filteredAssignees = filtered;
  }
  onComment(event) {
    event.preventDefault();
    if (this.comment.trim().length > 0) {
      this.newComment = __spreadProps(__spreadValues({}, this.newComment), { text: this.comment });
      this.formValue?.comments?.unshift(this.newComment);
      this.comment = "";
    }
  }
  onSave(event) {
    event.preventDefault();
    this.card = __spreadValues({}, this.formValue);
    this.kanbanService.updateCard(this.card, this.listId);
    this.close();
  }
  onMove(listId) {
    this.kanbanService.moveCard(this.formValue, listId, this.listId);
  }
  onDelete() {
    this.kanbanService.deleteCard(this.formValue?.id || "", this.listId);
    this.parent.sidebarVisible = false;
    this.resetForm();
  }
  resetForm() {
    this.formValue = { id: "", taskList: { title: "Untitled Task List", tasks: [] } };
  }
  addTaskList() {
    this.showTaskContainer = !this.showTaskContainer;
    if (!this.showTaskContainer) {
      return;
    } else if (!this.formValue.taskList) {
      let id = this.kanbanService.generateId();
      this.formValue = __spreadProps(__spreadValues({}, this.formValue), { taskList: { id, title: "Untitled Task List", tasks: [] } });
    }
  }
  addTask(event) {
    event.preventDefault();
    if (this.taskContent.trim().length > 0) {
      this.newTask = { text: this.taskContent, completed: false };
      this.formValue.taskList?.tasks.unshift(this.newTask);
      this.taskContent = "";
      this.calculateProgress();
    }
  }
  focus(arg) {
    if (arg == 1) {
      this.timeout = setTimeout(() => this.inputTitle.nativeElement.focus(), 1);
    }
    if (arg == 2) {
      this.timeout = setTimeout(() => this.inputTaskListTitle.nativeElement.focus(), 1);
    }
  }
  calculateProgress() {
    if (this.formValue.taskList) {
      let completed = this.formValue.taskList.tasks.filter((t) => t.completed).length;
      this.formValue.progress = Math.round(100 * (completed / this.formValue.taskList.tasks.length));
    }
  }
  static \u0275fac = function KanbanSidebar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KanbanSidebar)(\u0275\u0275directiveInject(Kanban), \u0275\u0275directiveInject(MemberService), \u0275\u0275directiveInject(KanbanService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KanbanSidebar, selectors: [["kanban-sidebar"]], viewQuery: function KanbanSidebar_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
      \u0275\u0275viewQuery(_c12, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputTitle = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputTaskListTitle = _t.first);
    }
  }, decls: 1, vars: 1, consts: [["sidebar", ""], ["headless", ""], ["inplace", ""], ["display", ""], ["content", ""], ["action1", ""], ["selecteditem", ""], ["item", ""], ["inputTitle", ""], ["inputTaskListTitle", ""], ["position", "right", "styleClass", "w-full! lg:w-200! overflow-auto", 3, "visible", "baseZIndex", "showCloseIcon", "visibleChange", 4, "ngIf"], ["position", "right", "styleClass", "w-full! lg:w-200! overflow-auto", 3, "visibleChange", "visible", "baseZIndex", "showCloseIcon"], [3, "submit"], [1, "px-6", "py-12", "border-b", "border-surface", "flex", "items-center", "justify-between", "h-16"], [1, "flex", "relative"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-cog", "severity", "secondary", "rounded", "", "text", "", "pTooltip", "Card Actions", "tooltipPosition", "left", "pStyleClass", "#op", "enterFromClass", "!hidden", "leaveToClass", "!hidden"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-times", "severity", "secondary", "rounded", "", "text", "", 3, "click"], ["id", "op", 1, "card", "z-50", "absolute", "shadow-md", "rounded-md!", "border", "border-gray-100", "dark:border-gray-600!", "hidden!", 2, "right", "50px", "top", "45px"], [1, "grid", "grid-cols-12", "gap-4", "flex-col", "w-60"], [1, "col-span-12", "flex", "flex-col"], [1, "text-surface-900", "dark:text-surface-0", "font-semibold", "block", "w-full", "border-b", "border-surface", "pb-4", "mb-2"], ["pRipple", "", "class", "text-surface-700 dark:text-surface-100 block p-2 cursor-pointer hover:bg-surface-50 dark:hover:bg-surface-950 select-none rounded-border", 3, "click", 4, "ngFor", "ngForOf"], ["pRipple", "", 1, "text-surface-700", "dark:text-surface-100", "block", "p-2", "cursor-pointer", "hover:bg-surface-50", "dark:hover:bg-surface-950", "select-none", "rounded-border", 3, "click"], [1, "grid", "grid-cols-12", "gap-8", "pt-8", "flex-wrap", "flex-1", "flex-col"], [1, "col-span-12", "field", "px-8", "flex", "flex-col", "gap-4"], ["for", "start", 1, "block", "text-surface-900", "dark:text-surface-0", "font-semibold", "text-lg"], ["id", "description", "name", "description", "type", "text", "pTextarea", "", 1, "w-full", 2, "resize", "none", 3, "ngModelChange", "rows", "ngModel"], [1, "col-span-12", "px-8", "flex", "gap-4"], [1, "flex", "flex-col", "field", "w-full", "gap-4"], ["name", "startDate", "dateFormat", "yy-mm-dd", "inputId", "start", "inputStyleClass", "w-full text-surface-900 dark:text-surface-0 font-semibold", "styleClass", "w-full", 3, "ngModelChange", "showTime", "required", "showIcon", "ngModel"], ["for", "due", 1, "block", "text-surface-900", "dark:text-surface-0", "font-semibold", "text-lg"], ["name", "endDate", "dateFormat", "yy-mm-dd", "inputId", "due", "inputStyleClass", "w-full text-surface-900 dark:text-surface-0 font-semibold", "styleClass", "w-full", 3, "ngModelChange", "showTime", "required", "showIcon", "ngModel"], ["class", "col-span-12 flex flex-col px-8", 4, "ngIf"], [1, "col-span-12", "flex", "flex-col", "field", "px-8"], ["for", "assignees", 1, "block", "text-surface-900", "dark:text-surface-0", "font-semibold", "mb-4", "text-lg"], ["name", "assignees", "field", "name", "emptyMessage", "No results found", "placeholder", "Choose assignees", "styleClass", "w-full", "inputStyleClass", "w-full", 3, "ngModelChange", "completeMethod", "appendTo", "ngModel", "suggestions", "multiple", "showEmptyMessage", "inputStyle"], [1, "col-span-12", "flex", "flex-col", "gap-y-6", "px-8", "mb-12"], [1, "block", "text-surface-900", "dark:text-surface-0", "font-semibold", "text-lg"], [1, "flex", "items-center"], [1, "w-14", "h-13", "rounded-full", "flex", "items-center", "justify-center", "mr-4", "bg-surface-200", "dark:bg-surface-800"], [1, "pi", "pi-user"], ["type", "text", "pTextarea", "", "name", "comment", "placeholder", "Write a comment...", 1, "w-full", 2, "resize", "none", 3, "ngModelChange", "keydown.enter", "ngModel"], ["class", "flex items-center rounded-border", 4, "ngFor", "ngForOf"], [1, "flex", "w-full", "justify-end", "border-t", "border-surface", "py-8", "px-8", "gap-4"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-paperclip", 1, "p-button-outlined", "p-button-secondary", "border-surface", "text-surface-900", "dark:text-surface-0", "w-12", "h-12"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-trash", 1, "p-button-outlined", "p-button-secondary", "border-surface", "text-surface-900", "dark:text-surface-0", "w-12", "h-12", 3, "click"], ["pButton", "", "pRipple", "", "type", "submit", "icon", "pi pi-check", "label", "Save", 1, "p-button-primary", "h-12"], ["pTooltip", "Click to edit", 1, "text-surface-900", "dark:text-surface-0", "font-semibold", "text-lg"], [1, "inline-flex", "items-center", "gap-1", "h-10"], ["type", "text", "name", "title", "autofocus", "", "pInputText", "", 1, "h-full", "rounded-r-none!", 3, "ngModelChange", "keydown.enter", "ngModel"], ["pButton", "", "icon", "pi pi-check", 1, "rounded-l-none!", "h-10!", 3, "click"], [1, "col-span-12", "flex", "flex-col", "px-8"], [1, "flex", "justify-between", "mb-4"], [1, "text-surface-900", "dark:text-surface-0", "font-semibold", "text-lg"], [1, "text-surface-900", "dark:text-surface-0", "font-semibold"], ["name", "progress", "styleClass", "h-1!", 3, "value", "showValue"], [1, "h-16", "-mb-6"], ["type", "text", "pTextarea", "", "name", "taskContent", "placeholder", "Add a task", 1, "w-full", "mt-6", "mb-6", 2, "resize", "none", 3, "ngModelChange", "keydown.enter", "ngModel"], ["class", "list-none p-6 flex flex-col gap-4 bg-surface-50 dark:bg-surface-950 border-surface border rounded-border", 4, "ngIf"], [1, "list-none", "p-6", "flex", "flex-col", "gap-4", "bg-surface-50", "dark:bg-surface-950", "border-surface", "border", "rounded-border"], ["class", "flex items-center gap-4", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-4"], [3, "ngModelChange", "onChange", "name", "ngModel", "binary", "inputId"], [2, "word-break", "break-all", 3, "ngClass"], [1, "flex", "items-center", "gap-2", "border", "rounded-full", "dark:border-gray-600!", "p-2"], [1, "flex", "gap-2", "items-center"], [1, "h-8", "w-8", "border-2", "rounded-full", "border-surface", 3, "src", "alt"], [1, "text-surface-900", "dark:text-surface-0"], [1, "flex", "items-center", "gap-2", "rounded-border"], [1, "flex", "items-center", "rounded-border"], ["class", "w-14 h-13 rounded-full flex items-center justify-center", 4, "ngIf"], ["class", "w-14 h-13 rounded-full flex items-center justify-center bg-surface-200 dark:bg-surface-800", 4, "ngIf"], [1, "ml-4", "w-full"], [1, "flex", "justify-between", "mb-2"], [1, "block", "text-surface-900", "dark:text-surface-0"], [1, "block", "text-surface-700", "dark:text-surface-100"], [1, "block", "text-surface-900", "dark:text-surface-0", "border", "bg-surface-50", "dark:bg-surface-950", "border-surface", "p-2", "rounded-border", 2, "word-break", "break-all"], [1, "w-14", "h-13", "rounded-full", "flex", "items-center", "justify-center"], [3, "src"], [1, "w-14", "h-13", "rounded-full", "flex", "items-center", "justify-center", "bg-surface-200", "dark:bg-surface-800"]], template: function KanbanSidebar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, KanbanSidebar_p_drawer_0_Template, 4, 3, "p-drawer", 10);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.formValue);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    NgModel,
    NgForm,
    DrawerModule,
    Drawer,
    PopoverModule,
    TooltipModule,
    Tooltip,
    InplaceModule,
    Inplace,
    AutoCompleteModule,
    AutoComplete,
    ProgressBarModule,
    ProgressBar,
    AvatarModule,
    CheckboxModule,
    Checkbox,
    InputTextModule,
    InputText,
    TextareaModule,
    Textarea,
    ButtonModule,
    ButtonDirective,
    RippleModule,
    Ripple,
    DatePickerModule,
    DatePicker,
    StyleClassModule,
    StyleClass
  ], styles: ["\n\n[_nghost-%COMP%]     .p-drawer .p-drawer-content {\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n  overflow: auto;\n}\n[_nghost-%COMP%]     .p-autocomplete .p-autocomplete-chip-item {\n  display: flex;\n}\n[_nghost-%COMP%]     div.p-inplace-display {\n  padding-left: 0 !important;\n}\n/*# sourceMappingURL=kanbansidebar.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KanbanSidebar, [{
    type: Component,
    args: [{ selector: "kanban-sidebar", standalone: true, imports: [
      CommonModule,
      FormsModule,
      DrawerModule,
      PopoverModule,
      TooltipModule,
      InplaceModule,
      AutoCompleteModule,
      ProgressBarModule,
      AvatarModule,
      CheckboxModule,
      InputTextModule,
      TextareaModule,
      ButtonModule,
      RippleModule,
      DatePickerModule,
      StyleClassModule
    ], template: `<p-drawer *ngIf="formValue" #sidebar [(visible)]="parent.sidebarVisible" position="right" [baseZIndex]="10000" styleClass="w-full! lg:w-200! overflow-auto" [showCloseIcon]="false">
        <ng-template #headless>
            <form (submit)="onSave($event)">
                <div class="px-6 py-12 border-b border-surface flex items-center justify-between h-16">
                    <p-inplace #inplace>
                        <ng-template #display>
                            <span class="text-surface-900 dark:text-surface-0 font-semibold text-lg" pTooltip="Click to edit">{{ formValue.title ? formValue.title : 'Untitled' }}</span>
                        </ng-template>
                        <ng-template #content let-closeCallback="closeCallback">
                            <span class="inline-flex items-center gap-1 h-10">
                                <input #inputTitle type="text" name="title" autofocus [(ngModel)]="formValue.title" pInputText class="h-full rounded-r-none!" (keydown.enter)="inplace.deactivate()" />
                                <button (click)="closeCallback($event)" pButton icon="pi pi-check" class="rounded-l-none! h-10!"></button>
                            </span>
                        </ng-template>
                    </p-inplace>
                    <div class="flex relative">
                        <button pButton pRipple type="button" icon="pi pi-cog" severity="secondary" rounded text pTooltip="Card Actions" tooltipPosition="left" #action1 pStyleClass="#op" enterFromClass="!hidden" leaveToClass="!hidden"></button>
                        <button pButton pRipple type="button" icon="pi pi-times" severity="secondary" rounded text (click)="close()"></button>

                        <div id="op" class="card z-50 absolute shadow-md rounded-md! border border-gray-100 dark:border-gray-600! hidden!" style="right: 50px; top:45px;">
                            <div class="grid grid-cols-12 gap-4 flex-col w-60">
                                <div class="col-span-12 flex flex-col">
                                    <span class="text-surface-900 dark:text-surface-0 font-semibold block w-full border-b border-surface pb-4 mb-2">Move to...</span>
                                    <span
                                        pRipple
                                        class="text-surface-700 dark:text-surface-100 block p-2 cursor-pointer hover:bg-surface-50 dark:hover:bg-surface-950 select-none rounded-border"
                                        *ngFor="let list of listNames"
                                        (click)="onMove(list.listId || '')"
                                    >{{ list.title }}</span
                                    >
                                </div>
                                <div class="col-span-12 flex flex-col">
                                    <span class="text-surface-900 dark:text-surface-0 font-semibold block w-full border-b border-surface pb-4 mb-2">Tasks</span>
                                    <span pRipple class="text-surface-700 dark:text-surface-100 block p-2 cursor-pointer hover:bg-surface-50 dark:hover:bg-surface-950 select-none rounded-border" (click)="addTaskList()">Create a tasklist</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-8 pt-8 flex-wrap flex-1 flex-col">
                    <div class="col-span-12 field px-8 flex flex-col gap-4">
                        <label for="start" class="block text-surface-900 dark:text-surface-0 font-semibold text-lg">Description</label>
                        <textarea id="description" name="description" type="text" pTextarea [rows]="5" [(ngModel)]="formValue.description" style="resize: none" class="w-full"></textarea>
                    </div>
                    <div class="col-span-12 px-8 flex gap-4">
                        <div class="flex flex-col field w-full gap-4">
                            <label for="start" class="block text-surface-900 dark:text-surface-0 font-semibold text-lg">Start Date</label>
                            <p-datepicker
                                name="startDate"
                                dateFormat="yy-mm-dd"
                                [showTime]="false"
                                [required]="true"
                                [showIcon]="true"
                                inputId="start"
                                inputStyleClass="w-full text-surface-900 dark:text-surface-0 font-semibold"
                                styleClass="w-full"
                                [(ngModel)]="formValue.startDate"
                            ></p-datepicker>
                        </div>
                        <div class="flex flex-col field w-full gap-4">
                            <label for="due" class="block text-surface-900 dark:text-surface-0 font-semibold text-lg">Due Date</label>
                            <p-datepicker
                                name="endDate"
                                dateFormat="yy-mm-dd"
                                [showTime]="false"
                                [required]="true"
                                [showIcon]="true"
                                inputId="due"
                                inputStyleClass="w-full text-surface-900 dark:text-surface-0 font-semibold"
                                styleClass="w-full"
                                [(ngModel)]="formValue.dueDate"
                            ></p-datepicker>
                        </div>
                    </div>

                    <div *ngIf="formValue.taskList.tasks.length || showTaskContainer" class="col-span-12 flex flex-col px-8">
                        <div class="flex justify-between mb-4">
                            <span class="text-surface-900 dark:text-surface-0 font-semibold text-lg">Progress</span>
                            <span class="text-surface-900 dark:text-surface-0 font-semibold">{{ formValue.progress }}%</span>
                        </div>
                        <p-progress-bar name="progress" [value]="formValue.progress" [showValue]="false" styleClass="h-1!"></p-progress-bar>
                    </div>

                    <div *ngIf="formValue.taskList.tasks.length || showTaskContainer" class="col-span-12 flex flex-col px-8">
                        <div class="h-16 -mb-6">
                            <p-inplace #inplace>
                                <ng-template #display>
                                    <span class="text-surface-900 dark:text-surface-0 font-semibold text-lg" pTooltip="Click to edit">{{ formValue.taskList.title }}</span>
                                </ng-template>
                                <ng-template #content let-closeCallback="closeCallback">
                                    <span class="inline-flex items-center gap-1 h-10">
                                        <input
                                            #inputTaskListTitle
                                            type="text"
                                            name="title"
                                            autofocus
                                            [(ngModel)]="formValue.taskList.title"
                                            pInputText
                                            class="h-full rounded-r-none!"
                                            (keydown.enter)="inplace.deactivate()"
                                        />
                                        <button (click)="closeCallback($event)" pButton icon="pi pi-check" class="rounded-l-none! h-10!"></button>
                                    </span>
                                </ng-template>
                            </p-inplace>
                        </div>
                        <textarea type="text" pTextarea name="taskContent" [(ngModel)]="taskContent" style="resize: none" class="w-full mt-6 mb-6" placeholder="Add a task" (keydown.enter)="addTask($event)"></textarea>

                        <ul *ngIf="formValue.taskList?.tasks?.length !== 0" class="list-none p-6 flex flex-col gap-4 bg-surface-50 dark:bg-surface-950 border-surface border rounded-border">
                            <li class="flex items-center gap-4" *ngFor="let task of formValue.taskList?.tasks; let i = index">
                                <p-checkbox [name]="task.text + i" [(ngModel)]="task.completed" [binary]="true" [inputId]="task.text" (onChange)="calculateProgress()"></p-checkbox>
                                <span style="word-break: break-all;" [ngClass]="{ 'text-600 line-through': task.completed, 'text-900': !task.completed }">
                                    {{ task.text }}
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div class="col-span-12 flex flex-col field px-8">
                        <label for="assignees" class="block text-surface-900 dark:text-surface-0 font-semibold mb-4 text-lg">Assignees</label>
                        <p-autocomplete
                            [appendTo]="sidebar"
                            name="assignees"
                            [(ngModel)]="formValue.assignees"
                            [suggestions]="filteredAssignees"
                            (completeMethod)="filterAssignees($event)"
                            field="name"
                            [multiple]="true"
                            [showEmptyMessage]="true"
                            emptyMessage="No results found"
                            placeholder="Choose assignees"
                            [inputStyle]="{ height: '2.5rem' }"
                            styleClass="w-full"
                            inputStyleClass="w-full"
                        >
                            <ng-template let-assignee #selecteditem>
                                <div class="flex items-center gap-2 border rounded-full dark:border-gray-600! p-2">
                                    <div class="flex gap-2 items-center">
                                        <img src="/demo/images/avatar/{{ assignee.image }}" [alt]="assignee.name" class="h-8 w-8 border-2 rounded-full border-surface" />
                                        <span class="text-surface-900 dark:text-surface-0">{{ assignee.name }}</span>
                                    </div>
                                </div>
                            </ng-template>
                            <ng-template let-assignee #item>
                                <div class="flex items-center gap-2 rounded-border">
                                    <img src="/demo/images/avatar/{{ assignee.image }}" [alt]="assignee.name" class="h-8 w-8 border-2 rounded-full border-surface" />
                                    <span class="text-surface-900 dark:text-surface-0">{{ assignee.name }}</span>
                                </div>
                            </ng-template>
                        </p-autocomplete>
                    </div>

                    <div class="col-span-12 flex flex-col gap-y-6 px-8 mb-12">
                        <span class="block text-surface-900 dark:text-surface-0 font-semibold text-lg">Comments</span>
                        <div class="flex items-center">
                            <span class="w-14 h-13 rounded-full flex items-center justify-center mr-4 bg-surface-200 dark:bg-surface-800">
                                <i class="pi pi-user"></i>
                            </span>
                            <span></span>
                            <textarea type="text" pTextarea name="comment" [(ngModel)]="comment" style="resize: none" class="w-full" placeholder="Write a comment..." (keydown.enter)="onComment($event)"></textarea>
                        </div>
                        <div *ngFor="let comment of formValue.comments" class="flex items-center rounded-border">
                            <span *ngIf="comment.image" class="w-14 h-13 rounded-full flex items-center justify-center">
                                <img src="/demo/images/avatar/{{ comment.image }}" />
                            </span>
                            <span *ngIf="!comment.image" class="w-14 h-13 rounded-full flex items-center justify-center bg-surface-200 dark:bg-surface-800">
                                <i class="pi pi-user"></i>
                            </span>
                            <div class="ml-4 w-full">
                                <div class="flex justify-between mb-2">
                                    <span class="block text-surface-900 dark:text-surface-0">{{ comment.name }}</span>
                                    <span class="block text-surface-700 dark:text-surface-100">1 Jun 17:58 pm</span>
                                </div>
                                <span class="block text-surface-900 dark:text-surface-0 border bg-surface-50 dark:bg-surface-950 border-surface p-2 rounded-border" style="word-break: break-all;">{{ comment?.text }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex w-full justify-end border-t border-surface py-8 px-8 gap-4">
                    <button pButton pRipple type="button" icon="pi pi-paperclip" class="p-button-outlined p-button-secondary border-surface text-surface-900 dark:text-surface-0 w-12 h-12"></button>
                    <button pButton pRipple type="button" icon="pi pi-trash" class="p-button-outlined p-button-secondary border-surface text-surface-900 dark:text-surface-0 w-12 h-12" (click)="onDelete()"></button>
                    <button pButton pRipple type="submit" icon="pi pi-check" label="Save" class="p-button-primary h-12"></button>
                </div>
            </form>
        </ng-template>
    </p-drawer>`, styles: ["/* angular:styles/component:scss;61f8455b495aa9b2e11cd87ecb706b8bcdf28d831a7349f3cae7b05b145bcf0a;C:/laragon/www/FRONT/elm-front/src/app/apps/kanban/kanbansidebar.ts */\n:host ::ng-deep .p-drawer .p-drawer-content {\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n  overflow: auto;\n}\n:host ::ng-deep .p-autocomplete .p-autocomplete-chip-item {\n  display: flex;\n}\n:host ::ng-deep div.p-inplace-display {\n  padding-left: 0 !important;\n}\n/*# sourceMappingURL=kanbansidebar.css.map */\n"] }]
  }], () => [{ type: Kanban }, { type: MemberService }, { type: KanbanService }], { inputTitle: [{
    type: ViewChild,
    args: ["inputTitle"]
  }], inputTaskListTitle: [{
    type: ViewChild,
    args: ["inputTaskListTitle"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KanbanSidebar, { className: "KanbanSidebar", filePath: "src/app/apps/kanban/kanbansidebar.ts", lineNumber: 256 });
})();

// src/app/apps/kanban/kanbancard.ts
var _c03 = () => ({ height: ".5rem" });
function KanbanCard_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.card.description);
  }
}
function KanbanCard_p_progress_bar_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-progress-bar", 13);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(4, _c03));
    \u0275\u0275property("value", ctx_r2.card.progress)("showValue", false);
  }
}
function KanbanCard_p_avatar_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-avatar", 14);
  }
  if (rf & 2) {
    const assignee_r4 = ctx.$implicit;
    \u0275\u0275property("image", \u0275\u0275interpolate1("/demo/images/avatar/", assignee_r4.image));
  }
}
function KanbanCard_p_avatar_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-avatar", 15);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("label", \u0275\u0275interpolate1("+ ", ctx_r2.card.assignees.length - 3));
  }
}
function KanbanCard_div_15_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275element(1, "i", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.generateTaskInfo());
  }
}
function KanbanCard_div_15_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275element(1, "i", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.card.attachments);
  }
}
function KanbanCard_div_15_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275element(1, "i", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.parseDate(ctx_r2.card.dueDate));
  }
}
function KanbanCard_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, KanbanCard_div_15_span_1_Template, 3, 1, "span", 17)(2, KanbanCard_div_15_span_2_Template, 3, 1, "span", 17)(3, KanbanCard_div_15_span_3_Template, 3, 1, "span", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.card.taskList.tasks.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.card.attachments);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.card.dueDate);
  }
}
var KanbanCard = class _KanbanCard {
  kanbanService;
  card;
  listId;
  menuItems = [];
  subscription;
  constructor(kanbanService) {
    this.kanbanService = kanbanService;
    this.subscription = this.kanbanService.lists$.subscribe((data) => {
      let subMenu = data.map((d) => ({ id: d.listId, label: d.title, command: () => this.onMove(d.listId) }));
      this.generateMenu(subMenu);
    });
  }
  parseDate(dueDate) {
    return new Date(dueDate).toDateString().split(" ").slice(1, 3).join(" ");
  }
  onDelete() {
    this.kanbanService.deleteCard(this.card.id, this.listId);
  }
  onCopy() {
    this.kanbanService.copyCard(this.card, this.listId);
  }
  onMove(listId) {
    this.kanbanService.moveCard(this.card, listId, this.listId);
  }
  generateMenu(subMenu) {
    this.menuItems = [
      { label: "Copy card", command: () => this.onCopy() },
      { label: "Move card", items: subMenu },
      { label: "Delete card", command: () => this.onDelete() }
    ];
  }
  generateTaskInfo() {
    let total = this.card.taskList.tasks.length;
    let completed = this.card.taskList.tasks.filter((t) => t.completed).length;
    return `${completed} / ${total}`;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static \u0275fac = function KanbanCard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KanbanCard)(\u0275\u0275directiveInject(KanbanService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KanbanCard, selectors: [["kanban-card"]], inputs: { card: "card", listId: "listId" }, decls: 16, vars: 13, consts: [["menu", ""], ["cdkDragHandle", "", 1, "flex", "bg-surface-0", "dark:bg-surface-900", "flex-col", "w-full", "border", "border-surface", "p-4", "gap-8", "hover:bg-surface-50", "dark:hover:bg-surface-950", "cursor-pointer", "rounded-border", 3, "id"], [1, "flex", "justify-between", "items-center"], [1, "text-surface-900", "dark:text-surface-0", "font-semibold"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-ellipsis-v", "rounded", "", "text", "", "severity", "secondary", 1, "p-trigger", 3, "click"], ["appendTo", "body", 3, "model", "popup"], ["style", "word-break: break-word", "class", "text-surface-700 dark:text-surface-100", 4, "ngIf"], [3, "value", "showValue", "style", 4, "ngIf"], [1, "flex", "items-center", "justify-between", "flex-col", "md:flex-row", "gap-6", "md:gap-0"], ["shape", "circle", "styleClass", "border-2 border-surface", 3, "image", 4, "ngFor", "ngForOf"], ["shape", "circle", "styleClass", "border-2 border-surface mb-1 bg-surface-50 dark:bg-surface-950", 3, "label", 4, "ngIf"], ["class", "flex items-center gap-4", 4, "ngIf"], [1, "text-surface-700", "dark:text-surface-100", 2, "word-break", "break-word"], [3, "value", "showValue"], ["shape", "circle", "styleClass", "border-2 border-surface", 3, "image"], ["shape", "circle", "styleClass", "border-2 border-surface mb-1 bg-surface-50 dark:bg-surface-950", 3, "label"], [1, "flex", "items-center", "gap-4"], ["class", "text-surface-900 dark:text-surface-0 font-semibold shrink-0", 4, "ngIf"], [1, "text-surface-900", "dark:text-surface-0", "font-semibold", "shrink-0"], [1, "pi", "pi-check-square", "text-surface-700", "dark:text-surface-100", "mr-2"], [1, "pi", "pi-paperclip", "text-surface-700", "dark:text-surface-100", "mr-2"], [1, "pi", "pi-clock", "text-surface-700", "dark:text-surface-100", "mr-2"]], template: function KanbanCard_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "span", 3);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div")(5, "button", 4);
      \u0275\u0275listener("click", function KanbanCard_Template_button_click_5_listener($event) {
        \u0275\u0275restoreView(_r1);
        const menu_r2 = \u0275\u0275reference(7);
        return \u0275\u0275resetView(menu_r2.toggle($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "p-tiered-menu", 5, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, KanbanCard_div_8_Template, 2, 1, "div", 6)(9, KanbanCard_p_progress_bar_9_Template, 1, 5, "p-progress-bar", 7);
      \u0275\u0275elementStart(10, "div", 8)(11, "p-avatar-group");
      \u0275\u0275template(12, KanbanCard_p_avatar_12_Template, 1, 2, "p-avatar", 9);
      \u0275\u0275pipe(13, "slice");
      \u0275\u0275template(14, KanbanCard_p_avatar_14_Template, 1, 2, "p-avatar", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275template(15, KanbanCard_div_15_Template, 4, 3, "div", 11);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("id", ctx.card.id);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.card.title ? ctx.card.title : "Untitled");
      \u0275\u0275advance(3);
      \u0275\u0275property("model", ctx.menuItems)("popup", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.card.description);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.card.taskList.tasks.length);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(13, 9, ctx.card.assignees, 0, 3));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.card.assignees && ctx.card.assignees.length > 3);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.card.attachments || ctx.card.dueDate);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, TieredMenuModule, TieredMenu, ButtonModule, ButtonDirective, RippleModule, Ripple, AvatarModule, Avatar, ProgressBarModule, ProgressBar, AvatarGroupModule, AvatarGroup, CdkDragHandle, SlicePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KanbanCard, [{
    type: Component,
    args: [{
      selector: "kanban-card",
      standalone: true,
      imports: [CommonModule, TieredMenuModule, ButtonModule, RippleModule, AvatarModule, ProgressBarModule, AvatarGroupModule, CdkDragHandle],
      template: `<div [id]="card.id" class="flex bg-surface-0 dark:bg-surface-900 flex-col w-full border border-surface p-4 gap-8 hover:bg-surface-50 dark:hover:bg-surface-950 cursor-pointer rounded-border" cdkDragHandle>
        <div class="flex justify-between items-center">
            <span class="text-surface-900 dark:text-surface-0 font-semibold">{{ card.title ? card.title : 'Untitled' }}</span>
            <div>
                <button pButton pRipple type="button" icon="pi pi-ellipsis-v" rounded text severity="secondary" class="p-trigger" (click)="menu.toggle($event)"></button>
                <p-tiered-menu #menu [model]="menuItems" appendTo="body" [popup]="true"></p-tiered-menu>
            </div>
        </div>
        <div *ngIf="card.description" style="word-break: break-word" class="text-surface-700 dark:text-surface-100">{{ card.description }}</div>
        <p-progress-bar *ngIf="card.taskList.tasks.length" [value]="card.progress" [showValue]="false" [style]="{ height: '.5rem' }"></p-progress-bar>

        <div class="flex items-center justify-between flex-col md:flex-row gap-6 md:gap-0">
            <p-avatar-group>
                <p-avatar *ngFor="let assignee of card.assignees | slice: 0 : 3" image="/demo/images/avatar/{{ assignee.image }}" shape="circle" styleClass="border-2 border-surface"></p-avatar>
                <p-avatar *ngIf="card.assignees && card.assignees.length > 3" label="+ {{ card.assignees.length - 3 }}" shape="circle" styleClass="border-2 border-surface mb-1 bg-surface-50 dark:bg-surface-950"></p-avatar>
            </p-avatar-group>
            <div *ngIf="card.attachments || card.dueDate" class="flex items-center gap-4">
                <span class="text-surface-900 dark:text-surface-0 font-semibold shrink-0" *ngIf="card.taskList.tasks.length"><i class="pi pi-check-square text-surface-700 dark:text-surface-100 mr-2"></i>{{ generateTaskInfo() }}</span>
                <span class="text-surface-900 dark:text-surface-0 font-semibold shrink-0" *ngIf="card.attachments"><i class="pi pi-paperclip text-surface-700 dark:text-surface-100 mr-2"></i>{{ card.attachments }}</span>
                <span class="text-surface-900 dark:text-surface-0 font-semibold shrink-0" *ngIf="card.dueDate"><i class="pi pi-clock text-surface-700 dark:text-surface-100 mr-2"></i>{{ parseDate(card.dueDate) }}</span>
            </div>
        </div>
    </div>`
    }]
  }], () => [{ type: KanbanService }], { card: [{
    type: Input
  }], listId: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KanbanCard, { className: "KanbanCard", filePath: "src/app/apps/kanban/kanbancard.ts", lineNumber: 43 });
})();

// src/app/apps/kanban/kanbanlist.ts
var _c04 = ["inputEl"];
var _c13 = ["listEl"];
function KanbanList_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.list.title);
  }
}
function KanbanList_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 12)(1, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function KanbanList_ng_template_4_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.list.title, $event) || (ctx_r1.list.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 14);
    \u0275\u0275listener("click", function KanbanList_ng_template_4_Template_button_click_2_listener($event) {
      const closeCallback_r4 = \u0275\u0275restoreView(_r3).closeCallback;
      return \u0275\u0275resetView(closeCallback_r4($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.list.title);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.list.title);
  }
}
function KanbanList_kanban_card_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "kanban-card", 15);
    \u0275\u0275listener("click", function KanbanList_kanban_card_12_Template_kanban_card_click_0_listener($event) {
      const card_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCardClick($event, card_r7));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const card_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("card", card_r7)("listId", ctx_r1.list.listId)("cdkDragDisabled", ctx_r1.isMobileDevice);
  }
}
var KanbanList = class _KanbanList {
  parent;
  kanbanService;
  list;
  listIds;
  menuItems = [];
  title = "";
  timeout = null;
  isMobileDevice = false;
  inputEl;
  listEl;
  constructor(parent, kanbanService) {
    this.parent = parent;
    this.kanbanService = kanbanService;
  }
  ngOnInit() {
    this.isMobileDevice = this.kanbanService.isMobileDevice();
    this.menuItems = [
      {
        label: "List actions",
        items: [
          { separator: true },
          { label: "Copy list", command: () => this.onCopy(this.list) },
          {
            label: "Remove list",
            command: () => {
              if (this.list.listId) {
                this.onDelete(this.list.listId);
              }
            }
          }
        ]
      }
    ];
  }
  toggleSidebar() {
    this.parent.sidebarVisible = true;
  }
  onDelete(id) {
    this.kanbanService.deleteList(id);
  }
  onCopy(list) {
    this.kanbanService.copyList(list);
  }
  onCardClick(event, card) {
    const eventTarget = event.target;
    if (!(eventTarget.classList.contains("p-button-icon") || eventTarget.classList.contains("p-trigger"))) {
      if (this.list.listId) {
        this.kanbanService.onCardSelect(card, this.list.listId);
      }
      this.parent.sidebarVisible = true;
    }
  }
  insertCard() {
    if (this.list.listId) {
      this.kanbanService.addCard(this.list.listId);
    }
  }
  dropCard(event) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
  focus() {
    this.timeout = setTimeout(() => this.inputEl.nativeElement.focus(), 1);
  }
  insertHeight(event) {
    event.container.element.nativeElement.style.minHeight = "10rem";
  }
  removeHeight(event) {
    event.container.element.nativeElement.style.minHeight = "2rem";
  }
  static \u0275fac = function KanbanList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KanbanList)(\u0275\u0275directiveInject(Kanban), \u0275\u0275directiveInject(KanbanService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KanbanList, selectors: [["kanban-list"]], viewQuery: function KanbanList_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c04, 5);
      \u0275\u0275viewQuery(_c13, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputEl = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.listEl = _t.first);
    }
  }, hostAttrs: [1, "card", "md:w-100", "overflow-hidden", "shadow-md", "rounded-border!", "shrink-0"], inputs: { list: "list", listIds: "listIds" }, decls: 15, vars: 6, consts: [["display", ""], ["content", ""], ["menu", ""], ["listEl", ""], [1, "flex", "justify-between", "items-center", "w-full"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-ellipsis-h", 1, "p-button-rounded", "p-button-text", "p-button-secondary", 3, "click"], ["appendTo", "body", 3, "model", "popup"], ["cdkDropList", "", 1, "flex", "flex-col", "gap-8", "overflow-y-auto", "mt-6", "scrollable", "kanban-list", 2, "min-height", "2rem", 3, "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited", "id", "cdkDropListData", "cdkDropListConnectedTo"], ["cdkDrag", "", 3, "card", "listId", "cdkDragDisabled", "click", 4, "ngFor", "ngForOf"], [1, "px-6", "mb-4", "w-full", "mt-6", "flex"], ["pButton", "", "pRipple", "", "label", "New Card", "icon", "pi pi-plus font-semibold", 1, "py-4", "justify-center", "font-semibold", "w-full", "rounded-border", 3, "click"], [1, "text-lg", "font-semibold"], [1, "inline-flex", "items-center", "gap-1", "h-10"], ["type", "text", "autofocus", "", "pInputText", "", 1, "h-full", "rounded-r-none!", "w-40", 3, "ngModelChange", "value", "ngModel"], ["pButton", "", "icon", "pi pi-check", 1, "rounded-l-none!", "h-10!", 3, "click"], ["cdkDrag", "", 3, "click", "card", "listId", "cdkDragDisabled"]], template: function KanbanList_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 4)(1, "p-inplace");
      \u0275\u0275template(2, KanbanList_ng_template_2_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, KanbanList_ng_template_4_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div")(7, "button", 5);
      \u0275\u0275listener("click", function KanbanList_Template_button_click_7_listener($event) {
        \u0275\u0275restoreView(_r1);
        const menu_r5 = \u0275\u0275reference(9);
        return \u0275\u0275resetView(menu_r5.toggle($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "p-menu", 6, 2);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 7, 3);
      \u0275\u0275listener("cdkDropListDropped", function KanbanList_Template_div_cdkDropListDropped_10_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.dropCard($event));
      })("cdkDropListEntered", function KanbanList_Template_div_cdkDropListEntered_10_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.insertHeight($event));
      })("cdkDropListExited", function KanbanList_Template_div_cdkDropListExited_10_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.removeHeight($event));
      });
      \u0275\u0275template(12, KanbanList_kanban_card_12_Template, 1, 3, "kanban-card", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 9)(14, "button", 10);
      \u0275\u0275listener("click", function KanbanList_Template_button_click_14_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.insertCard());
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("model", ctx.menuItems)("popup", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("id", ctx.list.listId)("cdkDropListData", ctx.list.cards)("cdkDropListConnectedTo", ctx.listIds);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.list.cards);
    }
  }, dependencies: [CommonModule, NgForOf, InplaceModule, Inplace, ButtonModule, ButtonDirective, RippleModule, Ripple, MenuModule, Menu, KanbanCard, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, InputTextModule, InputText, CdkDropList, CdkDrag, TooltipModule], styles: ["\n\n[_nghost-%COMP%]     .p-button-label {\n  flex: 0;\n  white-space: nowrap;\n}\n[_nghost-%COMP%]     .scrollable {\n  scroll-behavior: smooth;\n  max-height: 70vh;\n}\n[_nghost-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n[_nghost-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n[_nghost-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--p-gray-500);\n  border-radius: 20px;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0.25;\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=kanbanlist.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KanbanList, [{
    type: Component,
    args: [{ selector: "kanban-list", standalone: true, imports: [CommonModule, InplaceModule, ButtonModule, RippleModule, MenuModule, KanbanCard, FormsModule, InputTextModule, CdkDropList, CdkDrag, TooltipModule], template: `
        <div class="flex justify-between items-center w-full">
            <p-inplace>
                <ng-template #display>
                    <span class="text-lg font-semibold">{{ list.title }}</span>
                </ng-template>
                <ng-template #content let-closeCallback="closeCallback">
                    <span class="inline-flex items-center gap-1 h-10">
                        <input type="text" autofocus pInputText [value]="list.title" [(ngModel)]="list.title" class="h-full rounded-r-none! w-40" />
                        <button (click)="closeCallback($event)" pButton icon="pi pi-check" class="rounded-l-none! h-10!"></button>
                    </span>
                </ng-template>
            </p-inplace>
            <div>
                <button pButton pRipple type="button" icon="pi pi-ellipsis-h" class="p-button-rounded p-button-text p-button-secondary" (click)="menu.toggle($event)"></button>
                <p-menu #menu [model]="menuItems" [popup]="true" appendTo="body"></p-menu>
            </div>
        </div>
        <div
            [id]="list.listId"
            class="flex flex-col gap-8 overflow-y-auto  mt-6 scrollable kanban-list"
            cdkDropList
            (cdkDropListDropped)="dropCard($event)"
            (cdkDropListEntered)="insertHeight($event)"
            (cdkDropListExited)="removeHeight($event)"
            [cdkDropListData]="list.cards"
            [cdkDropListConnectedTo]="listIds"
            #listEl
            style="min-height:2rem"
        >
            <kanban-card *ngFor="let card of list.cards" [card]="card" [listId]="list.listId" (click)="onCardClick($event, card)" cdkDrag [cdkDragDisabled]="isMobileDevice"></kanban-card>
        </div>
        <div class="px-6 mb-4 w-full mt-6 flex">
            <button pButton pRipple label="New Card" icon="pi pi-plus font-semibold" class="py-4 justify-center font-semibold w-full rounded-border" (click)="insertCard()"></button>
        </div>
    `, host: {
      class: "card md:w-100 overflow-hidden shadow-md rounded-border! shrink-0"
    }, styles: ["/* angular:styles/component:scss;2f4139c927b1e670d502252618c7404815aa53fc046af9178ebad7dd63ef1ec2;C:/laragon/www/FRONT/elm-front/src/app/apps/kanban/kanbanlist.ts */\n:host ::ng-deep .p-button-label {\n  flex: 0;\n  white-space: nowrap;\n}\n:host ::ng-deep .scrollable {\n  scroll-behavior: smooth;\n  max-height: 70vh;\n}\n:host ::-webkit-scrollbar {\n  width: 6px;\n}\n:host ::-webkit-scrollbar-track {\n  background: transparent;\n}\n:host ::-webkit-scrollbar-thumb {\n  background-color: var(--p-gray-500);\n  border-radius: 20px;\n}\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder {\n  opacity: 0.25;\n}\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=kanbanlist.css.map */\n"] }]
  }], () => [{ type: Kanban }, { type: KanbanService }], { list: [{
    type: Input
  }], listIds: [{
    type: Input
  }], inputEl: [{
    type: ViewChild,
    args: ["inputEl"]
  }], listEl: [{
    type: ViewChild,
    args: ["listEl"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KanbanList, { className: "KanbanList", filePath: "src/app/apps/kanban/kanbanlist.ts", lineNumber: 106 });
})();

// src/app/apps/kanban/index.ts
function Kanban_kanban_list_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "kanban-list", 4);
  }
  if (rf & 2) {
    const list_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("list", list_r1)("listIds", ctx_r1.listIds)("cdkDragDisabled", ctx_r1.isMobileDevice);
  }
}
var Kanban = class _Kanban {
  kanbanService;
  sidebarVisible = false;
  lists = [];
  listIds = [];
  subscription = new Subscription();
  style;
  isMobileDevice = false;
  constructor(kanbanService) {
    this.kanbanService = kanbanService;
    this.subscription = this.kanbanService.lists$.subscribe((data) => {
      this.lists = data;
      this.listIds = this.lists.map((l) => l.listId || "");
    });
  }
  ngOnInit() {
    this.removeLayoutResponsive();
    this.isMobileDevice = this.kanbanService.isMobileDevice();
  }
  toggleSidebar() {
    this.sidebarVisible = true;
  }
  addList() {
    this.kanbanService.addList();
  }
  dropList(event) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }
  removeLayoutResponsive() {
    this.style = document.createElement("style");
    this.style.innerHTML = `
                .layout-content {
                    width: 100%;
                }

                .layout-topbar {
                    width: 100%;
                }
            `;
    document.head.appendChild(this.style);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    document.head.removeChild(this.style);
  }
  static \u0275fac = function Kanban_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Kanban)(\u0275\u0275directiveInject(KanbanService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Kanban, selectors: [["kanban"]], features: [\u0275\u0275ProvidersFeature([KanbanService])], decls: 5, vars: 2, consts: [["id", "kanban-wrapper", "cdkDropList", "", "cdkDropListOrientation", "horizontal", 1, "flex", "gap-8", "w-full", "flex-col", "md:flex-row", "flex-nowrap", "lg:overflow-y-hidden", "overflow-x-auto", 3, "cdkDropListDropped", "cdkDropListData"], ["cdkDrag", "", "cdkDragHandle", "", "class", "p-kanban-list", 3, "list", "listIds", "cdkDragDisabled", 4, "ngFor", "ngForOf"], [1, "px-4", "py-1", "mb-4", "md:w-100", "shrink-0"], ["pButton", "", "pRipple", "", "label", "New List", "icon", "pi pi-plus font-semibold", 1, "py-4", "justify-center", "font-semibold", "w-full", "rounded", 3, "click"], ["cdkDrag", "", "cdkDragHandle", "", 1, "p-kanban-list", 3, "list", "listIds", "cdkDragDisabled"]], template: function Kanban_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("cdkDropListDropped", function Kanban_Template_div_cdkDropListDropped_0_listener($event) {
        return ctx.dropList($event);
      });
      \u0275\u0275template(1, Kanban_kanban_list_1_Template, 1, 3, "kanban-list", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "button", 3);
      \u0275\u0275listener("click", function Kanban_Template_button_click_3_listener() {
        return ctx.addList();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275element(4, "kanban-sidebar");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("cdkDropListData", ctx.lists);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.lists);
    }
  }, dependencies: [KanbanSidebar, KanbanList, CommonModule, NgForOf, ButtonModule, ButtonDirective, RippleModule, Ripple, DragDropModule, CdkDropList, CdkDrag, CdkDragHandle], styles: ["\n\n[_nghost-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 6px;\n}\n[_nghost-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n[_nghost-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--gray-500);\n  border-radius: 20px;\n}\n[_nghost-%COMP%]     .p-button-label {\n  flex: 0;\n  white-space: nowrap;\n}\n[_nghost-%COMP%]     .p-inplace .p-inplace-content .p-inputtext {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[_nghost-%COMP%]     .p-inplace .p-inplace-content .p-button {\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px;\n  width: 3rem;\n  height: 3rem;\n}\n[_nghost-%COMP%]     .p-inplace .p-inplace-display {\n  padding: 0;\n}\n.p-kanban-list[_ngcontent-%COMP%] {\n  cursor: pointer;\n  height: min-content;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0.25;\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=index.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Kanban, [{
    type: Component,
    args: [{ selector: "kanban", standalone: true, imports: [KanbanSidebar, KanbanList, CommonModule, ButtonModule, RippleModule, DragDropModule], template: `<div id="kanban-wrapper" cdkDropList cdkDropListOrientation="horizontal" (cdkDropListDropped)="dropList($event)" [cdkDropListData]="lists" class="flex gap-8 w-full flex-col md:flex-row flex-nowrap lg:overflow-y-hidden overflow-x-auto">
        <kanban-list *ngFor="let list of lists; let i = index" [list]="list" [listIds]="listIds" cdkDrag cdkDragHandle [cdkDragDisabled]="isMobileDevice" class="p-kanban-list"></kanban-list>
        <div class="px-4 py-1 mb-4 md:w-100 shrink-0">
            <button pButton pRipple label="New List" icon="pi pi-plus font-semibold" class="py-4 justify-center font-semibold w-full rounded" (click)="addList()"></button>
        </div>
        <kanban-sidebar></kanban-sidebar>
    </div>`, providers: [KanbanService], styles: ["/* angular:styles/component:scss;cce09ef9ee18506ead139ddae754c40609d9a37b130e1842eda30a866c8e4834;C:/laragon/www/FRONT/elm-front/src/app/apps/kanban/index.ts */\n:host ::-webkit-scrollbar {\n  height: 6px;\n}\n:host ::-webkit-scrollbar-track {\n  background: transparent;\n}\n:host ::-webkit-scrollbar-thumb {\n  background-color: var(--gray-500);\n  border-radius: 20px;\n}\n:host ::ng-deep .p-button-label {\n  flex: 0;\n  white-space: nowrap;\n}\n:host ::ng-deep .p-inplace .p-inplace-content .p-inputtext {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n:host ::ng-deep .p-inplace .p-inplace-content .p-button {\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px;\n  width: 3rem;\n  height: 3rem;\n}\n:host ::ng-deep .p-inplace .p-inplace-display {\n  padding: 0;\n}\n.p-kanban-list {\n  cursor: pointer;\n  height: min-content;\n}\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder {\n  opacity: 0.25;\n}\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=index.css.map */\n"] }]
  }], () => [{ type: KanbanService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Kanban, { className: "Kanban", filePath: "src/app/apps/kanban/index.ts", lineNumber: 90 });
})();
export {
  Kanban
};
//# sourceMappingURL=chunk-BSX6KJ7H.js.map
