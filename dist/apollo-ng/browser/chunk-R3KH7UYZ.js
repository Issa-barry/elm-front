import {
  Card,
  CardModule
} from "./chunk-TMDGNBGN.js";
import {
  Divider,
  DividerModule
} from "./chunk-L7MB6DHN.js";
import {
  FactureLivraisonService
} from "./chunk-UC7NNZHT.js";
import {
  MODE_PAIEMENT_OPTIONS,
  STATUT_FACTURE_LABELS,
  STATUT_FACTURE_SEVERITY
} from "./chunk-VF5NWIYJ.js";
import {
  Skeleton,
  SkeletonModule
} from "./chunk-MKX7CTMT.js";
import {
  PhoneFormatPipe
} from "./chunk-F5DZ3BGT.js";
import {
  Dialog,
  DialogModule
} from "./chunk-DQ4T5ATO.js";
import {
  AuthService
} from "./chunk-A74EIJKM.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-JKQZ5BV4.js";
import "./chunk-DPFCOBAB.js";
import "./chunk-2BDEB7LG.js";
import {
  Toast,
  ToastModule
} from "./chunk-AYC4YOKB.js";
import "./chunk-5T35AX3S.js";
import {
  Tag,
  TagModule
} from "./chunk-24JO5SYM.js";
import {
  DatePicker,
  DatePickerModule
} from "./chunk-EZGYU3RQ.js";
import "./chunk-GHZLKCNE.js";
import "./chunk-IEELAHW7.js";
import "./chunk-EAAVSGUN.js";
import {
  InputNumber,
  InputNumberModule
} from "./chunk-XXM474KR.js";
import "./chunk-5ICIOC3M.js";
import "./chunk-7GQXFRTV.js";
import "./chunk-CSVYKJ4F.js";
import "./chunk-K7KGEHY2.js";
import {
  Select,
  SelectModule
} from "./chunk-HMZDW5SQ.js";
import "./chunk-VSFYXY5S.js";
import "./chunk-ADI47BO7.js";
import "./chunk-2ASVPUFF.js";
import "./chunk-GNGM6ZBM.js";
import {
  InputText,
  InputTextModule
} from "./chunk-VA6E3YEN.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-LK4MJDWN.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-STJD6333.js";
import "./chunk-OKTFETPA.js";
import "./chunk-HDOAYFIF.js";
import "./chunk-K2CZRXIH.js";
import {
  Button,
  ButtonModule
} from "./chunk-ZB6W2VB3.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-V6ACHPKV.js";
import "./chunk-IRKOPIT4.js";
import "./chunk-6MK22ZAB.js";
import "./chunk-37IESOSH.js";
import {
  MessageService
} from "./chunk-EC5CTPX4.js";
import {
  CommonModule,
  NgClass
} from "./chunk-TGBATRWC.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ZUORBSMF.js";
import "./chunk-4MWRP73S.js";

// src/app/pages/ventes/facture-vente-detail/facture-vente-detail.ts
var _c0 = () => ({ width: "24rem" });
var _c1 = (a0) => ({ "ng-invalid ng-dirty": a0 });
var _c2 = () => [1, 2, 3, 4];
var _forTrack0 = ($index, $item) => $item.id;
function FactureVenteDetail_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.facture.reference);
  }
}
function FactureVenteDetail_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 23);
    \u0275\u0275listener("onClick", function FactureVenteDetail_Conditional_8_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAnnulerDialog());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("text", true)("rounded", true);
  }
}
function FactureVenteDetail_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 9);
  }
}
function FactureVenteDetail_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.facture.reference);
  }
}
function FactureVenteDetail_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 24);
    \u0275\u0275listener("onClick", function FactureVenteDetail_Conditional_17_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAnnulerDialog());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("outlined", true);
  }
}
function FactureVenteDetail_Conditional_18_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span");
    \u0275\u0275text(2, "Restant \xE0 payer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 44);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatMontant(ctx_r1.facture.montant_restant));
  }
}
function FactureVenteDetail_Conditional_18_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 36);
    \u0275\u0275text(1, "Montant requis (> 0).");
    \u0275\u0275elementEnd();
  }
}
function FactureVenteDetail_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 25);
    \u0275\u0275listener("click", function FactureVenteDetail_Conditional_18_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.encaissementDialogVisible = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 26)(3, "div", 27)(4, "h2", 28);
    \u0275\u0275text(5, "Nouvel encaissement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p-button", 29);
    \u0275\u0275listener("onClick", function FactureVenteDetail_Conditional_18_Template_p_button_onClick_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.encaissementDialogVisible = false);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 30);
    \u0275\u0275conditionalCreate(8, FactureVenteDetail_Conditional_18_Conditional_8_Template, 5, 1, "div", 31);
    \u0275\u0275elementStart(9, "form", 32)(10, "div", 33)(11, "div", 34)(12, "label", 35);
    \u0275\u0275text(13, "Montant (GNF) ");
    \u0275\u0275elementStart(14, "span", 36);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(16, "p-inputNumber", 37);
    \u0275\u0275conditionalCreate(17, FactureVenteDetail_Conditional_18_Conditional_17_Template, 2, 0, "small", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 34)(19, "label", 35);
    \u0275\u0275text(20, "Mode de paiement ");
    \u0275\u0275elementStart(21, "span", 36);
    \u0275\u0275text(22, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(23, "p-select", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 34)(25, "label", 35);
    \u0275\u0275text(26, "Date d'encaissement ");
    \u0275\u0275elementStart(27, "span", 36);
    \u0275\u0275text(28, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(29, "p-datepicker", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 34)(31, "label", 35);
    \u0275\u0275text(32, "Note ");
    \u0275\u0275elementStart(33, "span", 40);
    \u0275\u0275text(34, "(optionnel)");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(35, "input", 41);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "div", 42)(37, "p-button", 43);
    \u0275\u0275listener("onClick", function FactureVenteDetail_Conditional_18_Template_p_button_onClick_37_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSaveEncaissement());
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("text", true)("rounded", true);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.facture ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.encaissementForm);
    \u0275\u0275advance(7);
    \u0275\u0275property("min", 1)("useGrouping", true)("ngClass", \u0275\u0275pureFunction1(11, _c1, ctx_r1.isEncaissementInvalid("montant")));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isEncaissementInvalid("montant") ? 17 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275property("options", ctx_r1.modePaiementOptions);
    \u0275\u0275advance(6);
    \u0275\u0275property("showIcon", true);
    \u0275\u0275advance(8);
    \u0275\u0275property("loading", ctx_r1.encaissementSaving);
  }
}
function FactureVenteDetail_Conditional_20_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-card");
    \u0275\u0275element(1, "p-skeleton", 45);
    \u0275\u0275elementEnd();
  }
}
function FactureVenteDetail_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275repeaterCreate(1, FactureVenteDetail_Conditional_20_For_2_Template, 2, 0, "p-card", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c2));
  }
}
function FactureVenteDetail_Conditional_21_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275element(1, "i", 96);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.facture.vehicule.nom_vehicule, " ");
  }
}
function FactureVenteDetail_Conditional_21_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275element(1, "i", 97);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Aucun encaissement enregistr\xE9");
    \u0275\u0275elementEnd()();
  }
}
function FactureVenteDetail_Conditional_21_Conditional_40_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const enc_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(enc_r6.note);
  }
}
function FactureVenteDetail_Conditional_21_Conditional_40_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98)(1, "div")(2, "div", 99);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, FactureVenteDetail_Conditional_21_Conditional_40_For_2_Conditional_4_Template, 2, 1, "div", 100);
    \u0275\u0275elementStart(5, "div", 101);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 102);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const enc_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatMontant(enc_r6.montant));
    \u0275\u0275advance();
    \u0275\u0275conditional(enc_r6.note ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(enc_r6.date_encaissement));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(enc_r6.mode_paiement);
  }
}
function FactureVenteDetail_Conditional_21_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275repeaterCreate(1, FactureVenteDetail_Conditional_21_Conditional_40_For_2_Template, 9, 4, "div", 98, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.facture.encaissements);
  }
}
function FactureVenteDetail_Conditional_21_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 103);
    \u0275\u0275listener("click", function FactureVenteDetail_Conditional_21_Conditional_41_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEncaissementDialog());
    });
    \u0275\u0275element(1, "i", 104);
    \u0275\u0275elementStart(2, "span", 105);
    \u0275\u0275text(3, "Encaisser");
    \u0275\u0275elementEnd()();
  }
}
function FactureVenteDetail_Conditional_21_ng_template_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106)(1, "div", 107);
    \u0275\u0275element(2, "i", 108);
    \u0275\u0275elementStart(3, "h2", 109);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "p-tag", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.facture.reference);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.getStatutLabel(ctx_r1.facture.statut_facture))("severity", ctx_r1.getStatutSeverity(ctx_r1.facture.statut_facture));
  }
}
function FactureVenteDetail_Conditional_21_Conditional_109_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 116);
    \u0275\u0275element(1, "i", 117);
    \u0275\u0275elementStart(2, "h2", 118);
    \u0275\u0275text(3, "V\xE9hicule associ\xE9");
    \u0275\u0275elementEnd()();
  }
}
function FactureVenteDetail_Conditional_21_Conditional_109_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 111);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.facture.vehicule.photo_url, \u0275\u0275sanitizeUrl)("alt", ctx_r1.facture.vehicule.nom_vehicule);
  }
}
function FactureVenteDetail_Conditional_21_Conditional_109_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 112);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.facture.vehicule.nom_vehicule == null ? null : ctx_r1.facture.vehicule.nom_vehicule.charAt(0), " ");
  }
}
function FactureVenteDetail_Conditional_21_Conditional_109_Conditional_11_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 122);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "phoneFormat");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r1.facture.vehicule.proprietaire.phone));
  }
}
function FactureVenteDetail_Conditional_21_Conditional_109_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 115)(1, "span", 119);
    \u0275\u0275element(2, "i", 120);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "p", 121);
    \u0275\u0275text(5, "Propri\xE9taire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 89);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, FactureVenteDetail_Conditional_21_Conditional_109_Conditional_11_Conditional_8_Template, 3, 3, "p", 122);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2(" ", ctx_r1.facture.vehicule.proprietaire.prenom, " ", ctx_r1.facture.vehicule.proprietaire.nom, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.facture.vehicule.proprietaire.phone ? 8 : -1);
  }
}
function FactureVenteDetail_Conditional_21_Conditional_109_Conditional_12_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 122);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "phoneFormat");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const livreur_r8 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, livreur_r8.phone));
  }
}
function FactureVenteDetail_Conditional_21_Conditional_109_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "div", 11)(2, "span", 123);
    \u0275\u0275element(3, "i", 124);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 121);
    \u0275\u0275text(6, "Livreur principal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 89);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, FactureVenteDetail_Conditional_21_Conditional_109_Conditional_12_Conditional_9_Template, 3, 3, "p", 122);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    const livreur_r9 = \u0275\u0275storeLet(ctx_r1.facture.vehicule.livreurPrincipal ?? ctx_r1.facture.vehicule.livreur_principal);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate2("", livreur_r9.prenom, " ", livreur_r9.nom);
    \u0275\u0275advance();
    \u0275\u0275conditional(livreur_r9.phone ? 9 : -1);
  }
}
function FactureVenteDetail_Conditional_21_Conditional_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-card");
    \u0275\u0275template(1, FactureVenteDetail_Conditional_21_Conditional_109_ng_template_1_Template, 4, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(3, "div", 110);
    \u0275\u0275conditionalCreate(4, FactureVenteDetail_Conditional_21_Conditional_109_Conditional_4_Template, 1, 2, "img", 111)(5, FactureVenteDetail_Conditional_21_Conditional_109_Conditional_5_Template, 2, 1, "span", 112);
    \u0275\u0275elementStart(6, "div")(7, "p", 113);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "code", 114);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(11, FactureVenteDetail_Conditional_21_Conditional_109_Conditional_11_Template, 9, 3, "div", 115);
    \u0275\u0275conditionalCreate(12, FactureVenteDetail_Conditional_21_Conditional_109_Conditional_12_Template, 10, 4, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.facture.vehicule.photo_url ? 4 : 5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.facture.vehicule.nom_vehicule);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.facture.vehicule.immatriculation);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.facture.vehicule.proprietaire ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.facture.vehicule.livreurPrincipal || ctx_r1.facture.vehicule.livreur_principal ? 12 : -1);
  }
}
function FactureVenteDetail_Conditional_21_ng_template_111_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 127);
    \u0275\u0275listener("onClick", function FactureVenteDetail_Conditional_21_ng_template_111_Conditional_5_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openEncaissementDialog());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("outlined", true)("text", true);
  }
}
function FactureVenteDetail_Conditional_21_ng_template_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106)(1, "div", 107);
    \u0275\u0275element(2, "i", 125);
    \u0275\u0275elementStart(3, "h2", 118);
    \u0275\u0275text(4, "Encaissements");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, FactureVenteDetail_Conditional_21_ng_template_111_Conditional_5_Template, 1, 2, "p-button", 126);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.canAddEncaissement ? 5 : -1);
  }
}
function FactureVenteDetail_Conditional_21_Conditional_113_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const enc_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(enc_r11.note);
  }
}
function FactureVenteDetail_Conditional_21_Conditional_113_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98)(1, "div")(2, "div", 99);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, FactureVenteDetail_Conditional_21_Conditional_113_For_2_Conditional_4_Template, 2, 1, "div", 100);
    \u0275\u0275elementStart(5, "div", 101);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 102);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const enc_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatMontant(enc_r11.montant));
    \u0275\u0275advance();
    \u0275\u0275conditional(enc_r11.note ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(enc_r11.date_encaissement));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(enc_r11.mode_paiement);
  }
}
function FactureVenteDetail_Conditional_21_Conditional_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275repeaterCreate(1, FactureVenteDetail_Conditional_21_Conditional_113_For_2_Template, 9, 4, "div", 98, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.facture.encaissements);
  }
}
function FactureVenteDetail_Conditional_21_Conditional_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 95);
    \u0275\u0275text(1, "Aucun encaissement.");
    \u0275\u0275elementEnd();
  }
}
function FactureVenteDetail_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "div", 48)(3, "code", 49);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "p-tag", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 51)(7, "div", 52);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 53);
    \u0275\u0275text(10, "Montant net");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 54)(12, "div", 55);
    \u0275\u0275element(13, "div", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 57);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 58)(17, "div", 59);
    \u0275\u0275element(18, "i", 60);
    \u0275\u0275elementStart(19, "div", 61);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 62);
    \u0275\u0275text(22, "Encaiss\xE9");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(23, "div", 63);
    \u0275\u0275elementStart(24, "div", 59);
    \u0275\u0275element(25, "i", 64);
    \u0275\u0275elementStart(26, "div", 65);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 62);
    \u0275\u0275text(29, "Restant");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 66)(31, "span", 67);
    \u0275\u0275element(32, "i", 68);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(34, FactureVenteDetail_Conditional_21_Conditional_34_Template, 3, 1, "span", 67);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 69)(36, "h2", 70);
    \u0275\u0275element(37, "i", 71);
    \u0275\u0275text(38, " Encaissements ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(39, FactureVenteDetail_Conditional_21_Conditional_39_Template, 4, 0, "div", 72)(40, FactureVenteDetail_Conditional_21_Conditional_40_Template, 3, 0, "div", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(41, FactureVenteDetail_Conditional_21_Conditional_41_Template, 4, 0, "button", 73);
    \u0275\u0275elementStart(42, "div", 74)(43, "div", 75)(44, "div", 76)(45, "div", 77);
    \u0275\u0275element(46, "i", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div")(48, "div", 78);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 79);
    \u0275\u0275text(51, "Montant net");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(52, "div", 80);
    \u0275\u0275elementStart(53, "div", 76)(54, "div", 77);
    \u0275\u0275element(55, "i", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div")(57, "div", 78);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 79);
    \u0275\u0275text(60, "Encaiss\xE9");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(61, "div", 80);
    \u0275\u0275elementStart(62, "div", 76)(63, "div", 77);
    \u0275\u0275element(64, "i", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div")(66, "div", 78);
    \u0275\u0275text(67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 79);
    \u0275\u0275text(69, "Restant");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(70, "div", 83)(71, "p-card");
    \u0275\u0275template(72, FactureVenteDetail_Conditional_21_ng_template_72_Template, 6, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(74, "div", 84)(75, "div")(76, "p", 85);
    \u0275\u0275text(77, "Montant brut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "p", 86);
    \u0275\u0275text(79);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div")(81, "p", 85);
    \u0275\u0275text(82, "Montant net");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "p", 13);
    \u0275\u0275text(84);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div")(86, "p", 85);
    \u0275\u0275text(87, "Encaiss\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "p", 87);
    \u0275\u0275text(89);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "div")(91, "p", 85);
    \u0275\u0275text(92, "Restant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "p", 88);
    \u0275\u0275text(94);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "div")(96, "p", 85);
    \u0275\u0275text(97, "Date de cr\xE9ation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "p", 89);
    \u0275\u0275text(99);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(100, "p-divider");
    \u0275\u0275elementStart(101, "div")(102, "div", 90)(103, "span", 40);
    \u0275\u0275text(104, "Progression encaissement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "span", 91);
    \u0275\u0275text(106);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(107, "div", 92);
    \u0275\u0275element(108, "div", 93);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(109, FactureVenteDetail_Conditional_21_Conditional_109_Template, 13, 5, "p-card");
    \u0275\u0275elementStart(110, "p-card", 94);
    \u0275\u0275template(111, FactureVenteDetail_Conditional_21_ng_template_111_Template, 6, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275conditionalCreate(113, FactureVenteDetail_Conditional_21_Conditional_113_Template, 3, 0, "div", 34)(114, FactureVenteDetail_Conditional_21_Conditional_114_Template, 2, 0, "p", 95);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.facture.reference);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.getStatutLabel(ctx_r1.facture.statut_facture))("severity", ctx_r1.getStatutSeverity(ctx_r1.facture.statut_facture));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatMontant(ctx_r1.facture.montant_net));
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", ctx_r1.progressPct + "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.progressPct, "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatMontant(ctx_r1.facture.montant_encaisse));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatMontant(ctx_r1.facture.montant_restant));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(ctx_r1.facture.created_at), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.facture.vehicule ? 34 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!(ctx_r1.facture.encaissements == null ? null : ctx_r1.facture.encaissements.length) ? 39 : 40);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.canAddEncaissement ? 41 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.formatMontant(ctx_r1.facture.montant_net));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.formatMontant(ctx_r1.facture.montant_encaisse));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.formatMontant(ctx_r1.facture.montant_restant));
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.formatMontant(ctx_r1.facture.montant_brut));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatMontant(ctx_r1.facture.montant_net));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatMontant(ctx_r1.facture.montant_encaisse));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatMontant(ctx_r1.facture.montant_restant));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.facture.created_at));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r1.progressPct, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.progressPct + "%");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.facture.vehicule ? 109 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.facture.encaissements && ctx_r1.facture.encaissements.length > 0 ? 113 : 114);
  }
}
function FactureVenteDetail_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 128);
    \u0275\u0275listener("onClick", function FactureVenteDetail_ng_template_30_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.annulerDialogVisible = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 129);
    \u0275\u0275listener("onClick", function FactureVenteDetail_ng_template_30_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmerAnnulation());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("outlined", true)("disabled", ctx_r1.annulerLoading);
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r1.annulerLoading);
  }
}
var FactureVenteDetail = class _FactureVenteDetail {
  fb;
  route;
  router;
  factureService;
  authService;
  messageService;
  facture = null;
  loading = false;
  encaissementSaving = false;
  annulerLoading = false;
  encaissementDialogVisible = false;
  encaissementForm;
  modePaiementOptions = MODE_PAIEMENT_OPTIONS;
  annulerDialogVisible = false;
  get canEncaissement() {
    return this.authService.hasPermission("encaissements.create");
  }
  get canUpdate() {
    return this.authService.hasPermission("factures-livraisons.update");
  }
  constructor(fb, route, router, factureService, authService, messageService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.factureService = factureService;
    this.authService = authService;
    this.messageService = messageService;
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    if (!id) {
      this.router.navigate(["/notfound"]);
      return;
    }
    this.initEncaissementForm();
    this.loadFacture(id);
  }
  initEncaissementForm() {
    this.encaissementForm = this.fb.group({
      montant: [null, [Validators.required, Validators.min(1)]],
      mode_paiement: ["especes", Validators.required],
      date_encaissement: [/* @__PURE__ */ new Date(), Validators.required],
      note: [""]
    });
  }
  loadFacture(id) {
    this.loading = true;
    this.factureService.getFacture(id).subscribe({
      next: (resp) => {
        this.facture = resp.data;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.messageService.add({
          severity: "error",
          summary: this.httpErrorSummary(err),
          detail: err.status === 404 ? "Cette facture n'existe pas ou a \xE9t\xE9 supprim\xE9e." : this.httpErrorDetail(err, "charger la facture"),
          life: 4e3
        });
        setTimeout(() => this.router.navigate(["/ventes/factures"]), 2500);
      }
    });
  }
  // ── Encaissement ──────────────────────────────────────────────────────
  openEncaissementDialog() {
    const restant = this.facture?.montant_restant ?? null;
    this.encaissementForm = this.fb.group({
      montant: [restant || null, [Validators.required, Validators.min(1)]],
      mode_paiement: ["especes", Validators.required],
      date_encaissement: [/* @__PURE__ */ new Date(), Validators.required],
      note: [""]
    });
    this.encaissementDialogVisible = true;
  }
  isEncaissementInvalid(name) {
    const c = this.encaissementForm.get(name);
    return c.invalid && (c.dirty || c.touched);
  }
  onSaveEncaissement() {
    this.encaissementForm.markAllAsTouched();
    if (this.encaissementForm.invalid || !this.facture || this.encaissementSaving)
      return;
    const v = this.encaissementForm.value;
    const dto = {
      facture_vente_id: this.facture.id,
      montant: v.montant,
      mode_paiement: v.mode_paiement,
      date_encaissement: this.formatDateIso(v.date_encaissement),
      note: v.note || void 0
    };
    this.encaissementSaving = true;
    this.factureService.createEncaissement(dto).subscribe({
      next: () => {
        this.encaissementSaving = false;
        this.encaissementDialogVisible = false;
        this.messageService.add({
          severity: "success",
          summary: "Succ\xE8s",
          detail: "Encaissement enregistr\xE9.",
          life: 3e3
        });
        this.loadFacture(this.facture.id);
      },
      error: (err) => {
        this.encaissementSaving = false;
        this.messageService.add({
          severity: "error",
          summary: this.httpErrorSummary(err),
          detail: this.httpErrorDetail(err, "enregistrer l'encaissement"),
          life: 5e3
        });
      }
    });
  }
  // ── Annulation ────────────────────────────────────────────────────────
  openAnnulerDialog() {
    this.annulerDialogVisible = true;
  }
  confirmerAnnulation() {
    if (!this.facture || this.annulerLoading)
      return;
    this.annulerLoading = true;
    this.factureService.annulerFacture(this.facture.id).subscribe({
      next: () => {
        this.annulerLoading = false;
        this.annulerDialogVisible = false;
        this.messageService.add({
          severity: "warn",
          summary: "Facture annul\xE9e",
          detail: "La facture a \xE9t\xE9 annul\xE9e avec succ\xE8s.",
          life: 4e3
        });
        this.loadFacture(this.facture.id);
      },
      error: (err) => {
        this.annulerLoading = false;
        this.annulerDialogVisible = false;
        this.messageService.add({
          severity: "error",
          summary: this.httpErrorSummary(err),
          detail: this.httpErrorDetail(err, "annuler la facture"),
          life: 5e3
        });
      }
    });
  }
  goBack() {
    this.router.navigate(["/ventes/factures"]);
  }
  // ── Règles métier ─────────────────────────────────────────────────────
  get canAnnuler() {
    return this.canUpdate && !!this.facture && this.facture.statut_facture === "impayee";
  }
  get canAddEncaissement() {
    return this.canEncaissement && !!this.facture && this.facture.statut_facture !== "payee" && this.facture.statut_facture !== "annulee";
  }
  // ── Helpers ───────────────────────────────────────────────────────────
  getStatutLabel(s) {
    return STATUT_FACTURE_LABELS[s] ?? s;
  }
  getStatutSeverity(s) {
    return STATUT_FACTURE_SEVERITY[s] ?? "info";
  }
  formatMontant(n) {
    if (n == null || n === "")
      return "\u2014";
    const num = typeof n === "string" ? parseFloat(n) : n;
    return new Intl.NumberFormat("fr-FR").format(num) + " GNF";
  }
  formatDate(d) {
    if (!d)
      return "\u2014";
    return new Date(d).toLocaleDateString("fr-FR");
  }
  formatDateIso(d) {
    if (!d)
      return "";
    const date = typeof d === "string" ? new Date(d) : d;
    return date.toISOString().split("T")[0];
  }
  get progressPct() {
    if (!this.facture)
      return 0;
    const net = parseFloat(this.facture.montant_net);
    if (!net)
      return 0;
    return Math.min(100, Math.round(this.facture.montant_encaisse / net * 100));
  }
  httpErrorSummary(err) {
    if (err.status === 401)
      return "Session expir\xE9e";
    if (err.status === 403)
      return "Acc\xE8s refus\xE9";
    if (err.status === 404)
      return "Introuvable";
    if (err.status === 409)
      return "Conflit";
    if (err.status === 0)
      return "Serveur inaccessible";
    return `Erreur ${err.status || ""}`.trim();
  }
  httpErrorDetail(err, action) {
    if (err.status === 401)
      return "Votre session a expir\xE9. Veuillez vous reconnecter.";
    if (err.status === 403)
      return `Vous n'avez pas la permission de ${action}.`;
    if (err.status === 404)
      return "La ressource demand\xE9e est introuvable.";
    if (err.status === 0)
      return "Impossible de joindre le serveur. V\xE9rifiez votre connexion r\xE9seau.";
    return err.error?.message || `Une erreur inattendue est survenue (${action}).`;
  }
  static \u0275fac = function FactureVenteDetail_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FactureVenteDetail)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FactureLivraisonService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FactureVenteDetail, selectors: [["app-facture-vente-detail"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 32, vars: 16, consts: [["footer", ""], ["header", ""], [1, "fv-detail-page-wrap"], [1, "fv-detail-mobile-header"], ["icon", "pi pi-arrow-left", "styleClass", "fv-detail-mobile-back", "aria-label", "Retour aux factures", 3, "onClick", "text", "rounded"], [1, "fv-detail-mobile-title-wrap"], [1, "fv-detail-mobile-title"], [1, "fv-detail-mobile-subtitle"], ["icon", "pi pi-ban", "severity", "danger", "pTooltip", "Annuler la facture", 3, "text", "rounded"], [2, "width", "2.15rem", "height", "2.15rem", "flex-shrink", "0"], [1, "fv-detail-header--desktop", "flex", "align-items-center", "justify-content-between", "gap-3", "mb-5", "px-4", "pt-4", "md:px-6"], [1, "flex", "align-items-center", "gap-3"], ["icon", "pi pi-arrow-left", "severity", "secondary", "pTooltip", "Retour aux factures", 3, "onClick", "text"], [1, "text-xl", "font-semibold", "m-0"], [1, "text-color-secondary", "text-sm", "font-mono"], ["label", "Annuler la facture", "icon", "pi pi-ban", "severity", "danger", "pTooltip", "Annuler d\xE9finitivement cette facture", 3, "outlined"], [1, "fixed", "inset-0", "z-50"], [1, "fv-detail-mobile-scroll"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4", "px-4", "md:px-6"], ["header", "Annuler la facture", 3, "visibleChange", "visible", "modal", "draggable"], [1, "flex", "align-items-center", "gap-3", "py-2"], [1, "pi", "pi-exclamation-triangle", "text-orange-500", "text-3xl"], [1, "m-0"], ["icon", "pi pi-ban", "severity", "danger", "pTooltip", "Annuler la facture", 3, "onClick", "text", "rounded"], ["label", "Annuler la facture", "icon", "pi pi-ban", "severity", "danger", "pTooltip", "Annuler d\xE9finitivement cette facture", 3, "onClick", "outlined"], [1, "absolute", "inset-0", "bg-black/50", "animate-fadein", 3, "click"], [1, "fv-enc-slideover", "bg-surface-0", "dark:bg-surface-900", "absolute", "top-0", "right-0", "shadow-xl", "w-full", "md:w-108", "h-full", "animate-fadeinright"], [1, "fv-enc-slideover-header"], [1, "fv-enc-slideover-title"], ["icon", "pi pi-times", "severity", "secondary", 3, "onClick", "text", "rounded"], [1, "fv-enc-slideover-body"], [1, "fv-enc-preview"], ["novalidate", "", 3, "formGroup"], [1, "flex", "flex-col", "gap-4"], [1, "flex", "flex-col", "gap-2"], [1, "font-medium", "text-sm"], [1, "text-red-500"], ["formControlName", "montant", "suffix", " GNF", "styleClass", "w-full", "inputStyleClass", "w-full", 3, "min", "useGrouping", "ngClass"], ["formControlName", "mode_paiement", "optionLabel", "label", "optionValue", "value", "styleClass", "w-full", 3, "options"], ["formControlName", "date_encaissement", "dateFormat", "dd/mm/yy", "styleClass", "w-full", "inputStyleClass", "w-full", 3, "showIcon"], [1, "text-color-secondary"], ["pInputText", "", "formControlName", "note", "placeholder", "Remarques\u2026", 1, "w-full"], [1, "fv-enc-slideover-footer"], ["label", "Enregistrer", "icon", "pi pi-save", "fluid", "", 3, "onClick", "loading"], [1, "font-bold", "text-red-500"], ["height", "6rem"], [1, "fv-mobile-only"], [1, "fv-hero"], [1, "fv-hero__top"], [1, "fv-hero__ref"], [3, "value", "severity"], [1, "fv-hero__center"], [1, "fv-hero__amount"], [1, "fv-hero__amount-label"], [1, "fv-hero__progress"], [1, "fv-hero__progress-track"], [1, "fv-hero__progress-fill"], [1, "fv-hero__progress-pct"], [1, "fv-hero__split"], [1, "fv-hero__split-col"], [1, "pi", "pi-check-circle", "fv-hero__split-icon", "fv-hero__split-icon--green"], [1, "fv-hero__split-val", "fv-hero__split-val--green"], [1, "fv-hero__split-lbl"], [1, "fv-hero__split-sep"], [1, "pi", "pi-clock", "fv-hero__split-icon", "fv-hero__split-icon--red"], [1, "fv-hero__split-val", "fv-hero__split-val--red"], [1, "fv-hero__meta"], [1, "fv-hero__meta-item"], [1, "pi", "pi-calendar"], [1, "fv-section"], [1, "fv-section__title"], [1, "pi", "pi-wallet"], [1, "fv-section__empty"], ["aria-label", "Ajouter un encaissement", 1, "fv-fab"], [1, "fv-desktop-only"], [1, "fv-stats-bar", "mx-4", "md:mx-6"], [1, "fv-stats-bar__item"], [1, "fv-stats-bar__icon"], [1, "fv-stats-bar__value"], [1, "fv-stats-bar__label"], [1, "fv-stats-bar__divider"], [1, "pi", "pi-check-circle"], [1, "pi", "pi-clock"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-4", "px-4", "md:px-6"], [1, "grid", "grid-cols-2", "gap-4"], [1, "text-color-secondary", "text-sm", "m-0", "mb-1"], [1, "text-2xl", "font-bold", "m-0", "text-primary"], [1, "font-semibold", "text-green-600", "m-0"], [1, "font-semibold", "text-red-500", "m-0"], [1, "font-semibold", "m-0"], [1, "flex", "justify-content-between", "mb-1", "text-sm"], [1, "font-semibold"], [1, "fv-progress-wrap"], [1, "fv-progress-fill"], [1, "lg:col-span-2"], [1, "text-color-secondary", "text-sm", "text-center", "py-2", "m-0"], [1, "pi", "pi-car"], [1, "pi", "pi-inbox"], [1, "fv-enc-card"], [1, "fv-enc-card__amount"], [1, "fv-enc-card__note"], [1, "fv-enc-card__date"], [1, "fv-enc-card__mode"], ["aria-label", "Ajouter un encaissement", 1, "fv-fab", 3, "click"], [1, "pi", "pi-plus"], [1, "fv-fab__label"], [1, "flex", "align-items-center", "justify-content-between", "px-5", "pt-4", "pb-2"], [1, "flex", "align-items-center", "gap-2"], [1, "pi", "pi-file-invoice", "text-primary", "text-xl"], [1, "text-base", "font-semibold", "m-0", "font-mono"], [1, "flex", "align-items-center", "gap-3", "mb-4"], [1, "border-circle", "flex-shrink-0", 2, "width", "4rem", "height", "4rem", "object-fit", "cover", 3, "src", "alt"], [1, "flex", "align-items-center", "justify-content-center", "bg-blue-100", "text-blue-700", "border-circle", "font-bold", "text-xl", "flex-shrink-0", 2, "width", "4rem", "height", "4rem"], [1, "font-bold", "text-lg", "m-0"], [1, "text-sm", "text-color-secondary"], [1, "flex", "align-items-center", "gap-3", "mb-3"], [1, "flex", "align-items-center", "gap-2", "px-5", "pt-4", "pb-2"], [1, "pi", "pi-car", "text-blue-500", "text-xl"], [1, "text-base", "font-semibold", "m-0"], [1, "border-circle", "flex-shrink-0", "bg-surface-100", "dark:bg-surface-700", 2, "width", "2.5rem", "height", "2.5rem", "display", "inline-flex", "align-items", "center", "justify-content", "center"], [1, "pi", "pi-user", "text-surface-500", 2, "font-size", "1rem"], [1, "text-sm", "text-color-secondary", "m-0", "mb-1"], [1, "text-sm", "text-color-secondary", "m-0"], [1, "border-circle", "flex-shrink-0", "bg-green-100", "dark:bg-green-900", 2, "width", "2.5rem", "height", "2.5rem", "display", "inline-flex", "align-items", "center", "justify-content", "center"], [1, "pi", "pi-truck", "text-green-600", 2, "font-size", "1rem"], [1, "pi", "pi-wallet", "text-green-500", "text-xl"], ["label", "Ajouter", "icon", "pi pi-plus", "severity", "success", "size", "small", 3, "outlined", "text"], ["label", "Ajouter", "icon", "pi pi-plus", "severity", "success", "size", "small", 3, "onClick", "outlined", "text"], ["label", "Non, garder", "severity", "secondary", 3, "onClick", "outlined", "disabled"], ["label", "Oui, annuler", "icon", "pi pi-ban", "severity", "danger", 3, "onClick", "loading"]], template: function FactureVenteDetail_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "div", 2)(2, "header", 3)(3, "p-button", 4);
      \u0275\u0275listener("onClick", function FactureVenteDetail_Template_p_button_onClick_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.goBack());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 5)(5, "h1", 6);
      \u0275\u0275text(6, "Facture de vente");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(7, FactureVenteDetail_Conditional_7_Template, 2, 1, "p", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(8, FactureVenteDetail_Conditional_8_Template, 1, 2, "p-button", 8)(9, FactureVenteDetail_Conditional_9_Template, 1, 0, "span", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 10)(11, "div", 11)(12, "p-button", 12);
      \u0275\u0275listener("onClick", function FactureVenteDetail_Template_p_button_onClick_12_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.goBack());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div")(14, "h1", 13);
      \u0275\u0275text(15, "D\xE9tail facture de vente");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(16, FactureVenteDetail_Conditional_16_Template, 2, 1, "span", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(17, FactureVenteDetail_Conditional_17_Template, 1, 1, "p-button", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(18, FactureVenteDetail_Conditional_18_Template, 38, 13, "div", 16);
      \u0275\u0275elementStart(19, "div", 17);
      \u0275\u0275conditionalCreate(20, FactureVenteDetail_Conditional_20_Template, 3, 1, "div", 18)(21, FactureVenteDetail_Conditional_21_Template, 115, 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "p-dialog", 19);
      \u0275\u0275twoWayListener("visibleChange", function FactureVenteDetail_Template_p_dialog_visibleChange_22_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.annulerDialogVisible, $event) || (ctx.annulerDialogVisible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(23, "div", 20);
      \u0275\u0275element(24, "i", 21);
      \u0275\u0275elementStart(25, "p", 22);
      \u0275\u0275text(26, " \xCAtes-vous s\xFBr de vouloir annuler la facture ");
      \u0275\u0275elementStart(27, "strong");
      \u0275\u0275text(28);
      \u0275\u0275elementEnd();
      \u0275\u0275text(29, " ? Cette action est irr\xE9versible. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(30, FactureVenteDetail_ng_template_30_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("text", true)("rounded", true);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.facture && !ctx.loading ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.facture && !ctx.loading && ctx.canAnnuler ? 8 : 9);
      \u0275\u0275advance(4);
      \u0275\u0275property("text", true);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.facture && !ctx.loading ? 16 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.facture && !ctx.loading && ctx.canAnnuler ? 17 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.encaissementDialogVisible ? 18 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading ? 20 : ctx.facture ? 21 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(15, _c0));
      \u0275\u0275twoWayProperty("visible", ctx.annulerDialogVisible);
      \u0275\u0275property("modal", true)("draggable", false);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.facture == null ? null : ctx.facture.reference);
    }
  }, dependencies: [CommonModule, NgClass, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, ButtonModule, Button, TagModule, Tag, ToastModule, Toast, DialogModule, Dialog, SelectModule, Select, CardModule, Card, SkeletonModule, Skeleton, DividerModule, Divider, TooltipModule, Tooltip, InputNumberModule, InputNumber, DatePickerModule, DatePicker, InputTextModule, InputText, PhoneFormatPipe], styles: ["\n\n[_nghost-%COMP%] {\n  --mob-primary: #5f6bff;\n  --mob-bg: #f0f2f8;\n  --mob-card: #ffffff;\n  --mob-border: #e2e8f0;\n  --mob-text: #1e293b;\n  --mob-muted: #7f8ca3;\n  --mob-green: #059669;\n  --mob-red: #e53e3e;\n}\n.fv-mobile-only[_ngcontent-%COMP%] {\n  display: none;\n}\n.fv-desktop-only[_ngcontent-%COMP%] {\n  display: block;\n}\n@media (max-width: 768px) {\n  .fv-mobile-only[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .fv-desktop-only[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media (max-width: 768px) {\n  .fv-detail-page-wrap[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    min-height: 100dvh;\n    height: 100dvh;\n    overflow: hidden;\n    background: var(--mob-bg);\n    margin: calc(-0.25rem - env(safe-area-inset-top)) -0.875rem 0;\n    margin-bottom: calc(-0.875rem - env(safe-area-inset-bottom));\n    padding: 0;\n  }\n}\n@media (max-width: 768px) {\n  .fv-detail-mobile-scroll[_ngcontent-%COMP%] {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    padding: 1rem 0.875rem calc(5rem + env(safe-area-inset-bottom));\n  }\n}\n.fv-detail-mobile-header[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 768px) {\n  .fv-detail-mobile-header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    padding: calc(0.6rem + env(safe-area-inset-top)) calc(0.75rem + env(safe-area-inset-right)) 0.6rem calc(0.75rem + env(safe-area-inset-left));\n    flex-shrink: 0;\n    background: var(--mob-card);\n    border-bottom: 1px solid var(--mob-border);\n    box-shadow: 0 1px 4px rgba(15, 23, 42, 0.06);\n    position: sticky;\n    top: 0;\n    z-index: 25;\n  }\n  .app-dark[_nghost-%COMP%]   .fv-detail-mobile-header[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fv-detail-mobile-header[_ngcontent-%COMP%] {\n    background: var(--p-surface-800);\n    border-bottom-color: var(--p-surface-700);\n  }\n  [_nghost-%COMP%]     .fv-detail-mobile-back.p-button {\n    color: var(--mob-primary) !important;\n    background: rgba(95, 107, 255, 0.08) !important;\n    border-radius: 999px !important;\n    width: 2.15rem !important;\n    height: 2.15rem !important;\n  }\n  .fv-detail-mobile-title-wrap[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n    text-align: center;\n  }\n  .fv-detail-mobile-title[_ngcontent-%COMP%] {\n    font-size: 1.05rem;\n    font-weight: 800;\n    margin: 0;\n    color: var(--mob-text);\n    line-height: 1.2;\n  }\n  .fv-detail-mobile-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.72rem;\n    color: var(--mob-muted);\n    margin: 0.1rem 0 0;\n    font-variant-numeric: tabular-nums;\n    font-weight: 600;\n  }\n  .fv-detail-header--desktop[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n.fv-hero[_ngcontent-%COMP%] {\n  background: var(--mob-card);\n  border-radius: 1.25rem;\n  padding: 1.25rem 1.25rem 1rem;\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.07);\n  margin-bottom: 1rem;\n}\n.fv-hero__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.25rem;\n}\n.fv-hero__ref[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  color: var(--mob-muted);\n  background: var(--mob-bg);\n  padding: 0.2rem 0.55rem;\n  border-radius: 0.4rem;\n}\n.fv-hero__center[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1.25rem;\n}\n.fv-hero__amount[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  color: var(--mob-text);\n  letter-spacing: -0.03em;\n  font-variant-numeric: tabular-nums;\n  line-height: 1.1;\n}\n.fv-hero__amount-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--mob-muted);\n  font-weight: 600;\n  margin-top: 0.2rem;\n}\n.fv-hero__progress[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1.25rem;\n}\n.fv-hero__progress-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 0.55rem;\n  background: var(--mob-bg);\n  border-radius: 999px;\n  overflow: hidden;\n}\n.fv-hero__progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--mob-primary);\n  border-radius: 999px;\n  transition: width 0.4s ease;\n}\n.fv-hero__progress-pct[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: var(--mob-primary);\n  min-width: 2.5rem;\n  text-align: right;\n}\n.fv-hero__split[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: var(--mob-bg);\n  border-radius: 0.875rem;\n  padding: 0.875rem 1rem;\n  margin-bottom: 1rem;\n}\n.fv-hero__split-col[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.2rem;\n}\n.fv-hero__split-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 0.1rem;\n}\n.fv-hero__split-icon--green[_ngcontent-%COMP%] {\n  color: var(--mob-green);\n}\n.fv-hero__split-icon--red[_ngcontent-%COMP%] {\n  color: var(--mob-red);\n}\n.fv-hero__split-val[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 800;\n  font-variant-numeric: tabular-nums;\n  letter-spacing: -0.01em;\n}\n.fv-hero__split-val--green[_ngcontent-%COMP%] {\n  color: var(--mob-green);\n}\n.fv-hero__split-val--red[_ngcontent-%COMP%] {\n  color: var(--mob-red);\n}\n.fv-hero__split-lbl[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--mob-muted);\n  font-weight: 600;\n}\n.fv-hero__split-sep[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 2.5rem;\n  background: var(--mob-border);\n  margin: 0 0.5rem;\n  flex-shrink: 0;\n}\n.fv-hero__meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid var(--mob-border);\n}\n.fv-hero__meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.78rem;\n  color: var(--mob-muted);\n  font-weight: 600;\n}\n.fv-hero__meta-item[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n}\n.fv-section[_ngcontent-%COMP%] {\n  background: var(--mob-card);\n  border-radius: 1.25rem;\n  padding: 1.25rem;\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.07);\n}\n.fv-section__title[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: var(--mob-text);\n  margin: 0 0 1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.fv-section__title[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n  color: var(--mob-primary);\n}\n.fv-section__empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1.5rem 0;\n  color: var(--mob-muted);\n  font-size: 0.875rem;\n}\n.fv-section__empty[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n.fv-fab[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 768px) {\n  .fv-fab[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.4rem;\n    position: fixed;\n    bottom: calc(1.25rem + env(safe-area-inset-bottom));\n    right: calc(1.25rem + env(safe-area-inset-right));\n    z-index: 20;\n    height: 3rem;\n    padding: 0 1.25rem;\n    border-radius: 999px;\n    border: none;\n    background: var(--mob-primary);\n    color: #fff;\n    font-weight: 700;\n    font-size: 0.92rem;\n    box-shadow: 0 4px 16px rgba(95, 107, 255, 0.45);\n    cursor: pointer;\n    -webkit-tap-highlight-color: transparent;\n    transition: transform 0.15s ease;\n  }\n  .fv-fab[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .fv-fab[_ngcontent-%COMP%]:active {\n    transform: scale(0.95);\n  }\n}\n.fv-enc-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.75rem;\n  background: var(--p-surface-50);\n  border: 1px solid var(--p-surface-200);\n  border-radius: 10px;\n  padding: 0.875rem 1rem;\n}\n.fv-enc-card__amount[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #059669;\n  font-variant-numeric: tabular-nums;\n}\n.fv-enc-card__mode[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.15rem 0.5rem;\n  background: var(--p-surface-200);\n  border-radius: 999px;\n  font-size: 0.72rem;\n  color: var(--p-surface-700);\n  flex-shrink: 0;\n}\n.fv-enc-card__date[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--p-surface-400);\n  margin-top: 0.25rem;\n}\n.fv-enc-card__note[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--p-surface-500);\n  font-style: italic;\n  margin-top: 0.15rem;\n}\n.fv-progress-wrap[_ngcontent-%COMP%] {\n  background: var(--p-surface-200);\n  border-radius: 999px;\n  overflow: hidden;\n  height: 0.5rem;\n}\n.fv-progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 999px;\n  background: var(--p-primary-500);\n  transition: width 0.4s ease;\n}\n.fv-stats-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: var(--p-surface-0);\n  border-radius: 14px;\n  padding: 1.25rem 2rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  margin-bottom: 1.5rem;\n}\n.fv-stats-bar__item[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n  padding: 0.5rem 1.25rem;\n}\n.fv-stats-bar__divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 36px;\n  background: var(--p-surface-200);\n  flex-shrink: 0;\n}\n.fv-stats-bar__icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 1rem;\n  background: var(--p-surface-100);\n  color: var(--p-surface-600);\n}\n.fv-stats-bar__value[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: var(--p-surface-900);\n  letter-spacing: -0.02em;\n  line-height: 1.2;\n  font-variant-numeric: tabular-nums;\n}\n.fv-stats-bar__label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--p-surface-400);\n  margin-top: 2px;\n}\n.fv-enc-slideover[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n@media (max-width: 768px) {\n  .fv-enc-slideover[_ngcontent-%COMP%] {\n    left: 0;\n    right: 0;\n    width: 100%;\n    min-height: 100dvh;\n    padding-top: env(safe-area-inset-top);\n    padding-bottom: env(safe-area-inset-bottom);\n    padding-left: env(safe-area-inset-left);\n    padding-right: env(safe-area-inset-right);\n    box-sizing: border-box;\n  }\n}\n.fv-enc-slideover-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.25rem 1.5rem 1rem;\n  border-bottom: 1px solid var(--p-surface-200);\n  flex-shrink: 0;\n}\n.fv-enc-slideover-title[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--p-surface-900);\n}\n.fv-enc-slideover-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  padding: 1.25rem 1.5rem;\n}\n.fv-enc-slideover-footer[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem calc(1rem + env(safe-area-inset-bottom));\n  border-top: 1px solid var(--p-surface-200);\n  flex-shrink: 0;\n}\n.fv-enc-preview[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.875rem 1rem;\n  background: var(--p-surface-50);\n  border-radius: 10px;\n  margin-bottom: 1.25rem;\n  font-size: 0.875rem;\n  color: var(--p-surface-600);\n}\n.app-dark[_nghost-%COMP%], .app-dark   [_nghost-%COMP%] {\n  --mob-bg: var(--p-surface-900);\n  --mob-card: var(--p-surface-800);\n  --mob-border: var(--p-surface-700);\n  --mob-text: var(--p-surface-0);\n  --mob-muted: var(--p-surface-400);\n}\n.app-dark[_nghost-%COMP%]   .fv-detail-mobile-title[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fv-detail-mobile-title[_ngcontent-%COMP%] {\n  color: var(--p-surface-0);\n}\n.app-dark[_nghost-%COMP%]   .fv-detail-mobile-subtitle[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fv-detail-mobile-subtitle[_ngcontent-%COMP%] {\n  color: var(--p-surface-400);\n}\n.app-dark[_nghost-%COMP%]   .fv-hero[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fv-hero[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);\n}\n.app-dark[_nghost-%COMP%]   .fv-hero__ref[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fv-hero__ref[_ngcontent-%COMP%] {\n  background: var(--p-surface-700);\n}\n.app-dark[_nghost-%COMP%]   .fv-hero__progress-track[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fv-hero__progress-track[_ngcontent-%COMP%] {\n  background: var(--p-surface-700);\n}\n.app-dark[_nghost-%COMP%]   .fv-section[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fv-section[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);\n}\n.app-dark[_nghost-%COMP%]   .fv-stats-bar[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fv-stats-bar[_ngcontent-%COMP%] {\n  background: var(--p-surface-800);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.app-dark[_nghost-%COMP%]   .fv-stats-bar__divider[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fv-stats-bar__divider[_ngcontent-%COMP%] {\n  background: var(--p-surface-600);\n}\n.app-dark[_nghost-%COMP%]   .fv-stats-bar__icon[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fv-stats-bar__icon[_ngcontent-%COMP%] {\n  background: var(--p-surface-700);\n  color: var(--p-surface-400);\n}\n.app-dark[_nghost-%COMP%]   .fv-stats-bar__value[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fv-stats-bar__value[_ngcontent-%COMP%] {\n  color: var(--p-surface-0);\n}\n.app-dark[_nghost-%COMP%]   .fv-enc-card[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fv-enc-card[_ngcontent-%COMP%] {\n  background: var(--p-surface-800);\n  border-color: var(--p-surface-600);\n}\n.app-dark[_nghost-%COMP%]   .fv-enc-card__amount[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fv-enc-card__amount[_ngcontent-%COMP%] {\n  color: #34d399;\n}\n.app-dark[_nghost-%COMP%]   .fv-enc-card__date[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fv-enc-card__date[_ngcontent-%COMP%] {\n  color: var(--p-surface-500);\n}\n.app-dark[_nghost-%COMP%]   .fv-enc-card__note[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fv-enc-card__note[_ngcontent-%COMP%] {\n  color: var(--p-surface-400);\n}\n.app-dark[_nghost-%COMP%]   .fv-enc-card__mode[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fv-enc-card__mode[_ngcontent-%COMP%] {\n  background: var(--p-surface-700);\n  color: var(--p-surface-300);\n}\n.app-dark[_nghost-%COMP%]   .fv-progress-wrap[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fv-progress-wrap[_ngcontent-%COMP%] {\n  background: var(--p-surface-600);\n}\n.app-dark[_nghost-%COMP%]   .fv-enc-slideover-header[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fv-enc-slideover-header[_ngcontent-%COMP%] {\n  border-bottom-color: var(--p-surface-700);\n}\n.app-dark[_nghost-%COMP%]   .fv-enc-slideover-title[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fv-enc-slideover-title[_ngcontent-%COMP%] {\n  color: var(--p-surface-0);\n}\n.app-dark[_nghost-%COMP%]   .fv-enc-slideover-footer[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fv-enc-slideover-footer[_ngcontent-%COMP%] {\n  border-top-color: var(--p-surface-700);\n}\n.app-dark[_nghost-%COMP%]   .fv-enc-preview[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fv-enc-preview[_ngcontent-%COMP%] {\n  background: var(--p-surface-700);\n  color: var(--p-surface-300);\n}\n/*# sourceMappingURL=facture-vente-detail.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FactureVenteDetail, [{
    type: Component,
    args: [{ selector: "app-facture-vente-detail", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      ButtonModule,
      TagModule,
      ToastModule,
      DialogModule,
      SelectModule,
      CardModule,
      SkeletonModule,
      DividerModule,
      TooltipModule,
      InputNumberModule,
      DatePickerModule,
      InputTextModule,
      PhoneFormatPipe
    ], providers: [MessageService], template: `<p-toast />

<div class="fv-detail-page-wrap">

  <!-- \u2500\u2500 Mobile sticky header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <header class="fv-detail-mobile-header">
    <p-button
      icon="pi pi-arrow-left"
      [text]="true"
      [rounded]="true"
      styleClass="fv-detail-mobile-back"
      aria-label="Retour aux factures"
      (onClick)="goBack()"
    />
    <div class="fv-detail-mobile-title-wrap">
      <h1 class="fv-detail-mobile-title">Facture de vente</h1>
      @if (facture && !loading) {
        <p class="fv-detail-mobile-subtitle">{{ facture.reference }}</p>
      }
    </div>
    @if (facture && !loading && canAnnuler) {
      <p-button
        icon="pi pi-ban"
        severity="danger"
        [text]="true"
        [rounded]="true"
        pTooltip="Annuler la facture"
        (onClick)="openAnnulerDialog()"
      />
    } @else {
      <!-- Spacer pour centrer le titre -->
      <span style="width:2.15rem;height:2.15rem;flex-shrink:0"></span>
    }
  </header>

  <!-- \u2500\u2500 Desktop header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="fv-detail-header--desktop flex align-items-center justify-content-between gap-3 mb-5 px-4 pt-4 md:px-6">
    <div class="flex align-items-center gap-3">
      <p-button
        icon="pi pi-arrow-left"
        severity="secondary"
        [text]="true"
        pTooltip="Retour aux factures"
        (onClick)="goBack()"
      />
      <div>
        <h1 class="text-xl font-semibold m-0">D\xE9tail facture de vente</h1>
        @if (facture && !loading) {
          <span class="text-color-secondary text-sm font-mono">{{ facture.reference }}</span>
        }
      </div>
    </div>
    @if (facture && !loading && canAnnuler) {
      <p-button
        label="Annuler la facture"
        icon="pi pi-ban"
        severity="danger"
        [outlined]="true"
        pTooltip="Annuler d\xE9finitivement cette facture"
        (onClick)="openAnnulerDialog()"
      />
    }
  </div>

  <!-- \u2500\u2500 Slideover encaissement \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @if (encaissementDialogVisible) {
    <div class="fixed inset-0 z-50">
      <div class="absolute inset-0 bg-black/50 animate-fadein" (click)="encaissementDialogVisible = false"></div>
      <div class="fv-enc-slideover bg-surface-0 dark:bg-surface-900 absolute top-0 right-0 shadow-xl w-full md:w-108 h-full animate-fadeinright">

        <div class="fv-enc-slideover-header">
          <h2 class="fv-enc-slideover-title">Nouvel encaissement</h2>
          <p-button
            icon="pi pi-times"
            severity="secondary"
            [text]="true"
            [rounded]="true"
            (onClick)="encaissementDialogVisible = false"
          />
        </div>

        <div class="fv-enc-slideover-body">
          @if (facture) {
            <div class="fv-enc-preview">
              <span>Restant \xE0 payer</span>
              <span class="font-bold text-red-500">{{ formatMontant(facture.montant_restant) }}</span>
            </div>
          }

          <form [formGroup]="encaissementForm" novalidate>
            <div class="flex flex-col gap-4">

              <div class="flex flex-col gap-2">
                <label class="font-medium text-sm">Montant (GNF) <span class="text-red-500">*</span></label>
                <p-inputNumber
                  formControlName="montant"
                  [min]="1"
                  suffix=" GNF"
                  [useGrouping]="true"
                  styleClass="w-full"
                  inputStyleClass="w-full"
                  [ngClass]="{'ng-invalid ng-dirty': isEncaissementInvalid('montant')}"
                />
                @if (isEncaissementInvalid('montant')) {
                  <small class="text-red-500">Montant requis (> 0).</small>
                }
              </div>

              <div class="flex flex-col gap-2">
                <label class="font-medium text-sm">Mode de paiement <span class="text-red-500">*</span></label>
                <p-select
                  formControlName="mode_paiement"
                  [options]="modePaiementOptions"
                  optionLabel="label"
                  optionValue="value"
                  styleClass="w-full"
                />
              </div>

              <div class="flex flex-col gap-2">
                <label class="font-medium text-sm">Date d'encaissement <span class="text-red-500">*</span></label>
                <p-datepicker
                  formControlName="date_encaissement"
                  dateFormat="dd/mm/yy"
                  [showIcon]="true"
                  styleClass="w-full"
                  inputStyleClass="w-full"
                />
              </div>

              <div class="flex flex-col gap-2">
                <label class="font-medium text-sm">Note <span class="text-color-secondary">(optionnel)</span></label>
                <input pInputText formControlName="note" placeholder="Remarques\u2026" class="w-full" />
              </div>

            </div>
          </form>
        </div>

        <div class="fv-enc-slideover-footer">
          <p-button
            label="Enregistrer"
            icon="pi pi-save"
            (onClick)="onSaveEncaissement()"
            [loading]="encaissementSaving"
            fluid
          />
        </div>

      </div>
    </div>
  }

  <!-- \u2500\u2500 Scrollable content \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="fv-detail-mobile-scroll">

    @if (loading) {
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-6">
        @for (_ of [1, 2, 3, 4]; track $index) {
          <p-card><p-skeleton height="6rem" /></p-card>
        }
      </div>

    } @else if (facture) {

      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 MOBILE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      <div class="fv-mobile-only">

        <!-- Hero card -->
        <div class="fv-hero">

          <div class="fv-hero__top">
            <code class="fv-hero__ref">{{ facture.reference }}</code>
            <p-tag
              [value]="getStatutLabel(facture.statut_facture)"
              [severity]="getStatutSeverity(facture.statut_facture)"
            />
          </div>

          <div class="fv-hero__center">
            <div class="fv-hero__amount">{{ formatMontant(facture.montant_net) }}</div>
            <div class="fv-hero__amount-label">Montant net</div>
          </div>

          <div class="fv-hero__progress">
            <div class="fv-hero__progress-track">
              <div class="fv-hero__progress-fill" [style.width]="progressPct + '%'"></div>
            </div>
            <span class="fv-hero__progress-pct">{{ progressPct }}%</span>
          </div>

          <div class="fv-hero__split">
            <div class="fv-hero__split-col">
              <i class="pi pi-check-circle fv-hero__split-icon fv-hero__split-icon--green"></i>
              <div class="fv-hero__split-val fv-hero__split-val--green">{{ formatMontant(facture.montant_encaisse) }}</div>
              <div class="fv-hero__split-lbl">Encaiss\xE9</div>
            </div>
            <div class="fv-hero__split-sep"></div>
            <div class="fv-hero__split-col">
              <i class="pi pi-clock fv-hero__split-icon fv-hero__split-icon--red"></i>
              <div class="fv-hero__split-val fv-hero__split-val--red">{{ formatMontant(facture.montant_restant) }}</div>
              <div class="fv-hero__split-lbl">Restant</div>
            </div>
          </div>

          <div class="fv-hero__meta">
            <span class="fv-hero__meta-item">
              <i class="pi pi-calendar"></i>
              {{ formatDate(facture.created_at) }}
            </span>
            @if (facture.vehicule) {
              <span class="fv-hero__meta-item">
                <i class="pi pi-car"></i>
                {{ facture.vehicule.nom_vehicule }}
              </span>
            }
          </div>

        </div>

        <!-- Section encaissements -->
        <div class="fv-section">
          <h2 class="fv-section__title">
            <i class="pi pi-wallet"></i>
            Encaissements
          </h2>

          @if (!facture.encaissements?.length) {
            <div class="fv-section__empty">
              <i class="pi pi-inbox"></i>
              <span>Aucun encaissement enregistr\xE9</span>
            </div>
          } @else {
            <div class="flex flex-col gap-2">
              @for (enc of facture.encaissements; track enc.id) {
                <div class="fv-enc-card">
                  <div>
                    <div class="fv-enc-card__amount">{{ formatMontant(enc.montant) }}</div>
                    @if (enc.note) {
                      <div class="fv-enc-card__note">{{ enc.note }}</div>
                    }
                    <div class="fv-enc-card__date">{{ formatDate(enc.date_encaissement) }}</div>
                  </div>
                  <span class="fv-enc-card__mode">{{ enc.mode_paiement }}</span>
                </div>
              }
            </div>
          }
        </div>

      </div>

      <!-- FAB Encaisser (mobile only) -->
      @if (canAddEncaissement) {
        <button class="fv-fab" (click)="openEncaissementDialog()" aria-label="Ajouter un encaissement">
          <i class="pi pi-plus"></i>
          <span class="fv-fab__label">Encaisser</span>
        </button>
      }

      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 DESKTOP \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      <div class="fv-desktop-only">

        <!-- Stats bar -->
        <div class="fv-stats-bar mx-4 md:mx-6">
          <div class="fv-stats-bar__item">
            <div class="fv-stats-bar__icon"><i class="pi pi-wallet"></i></div>
            <div>
              <div class="fv-stats-bar__value">{{ formatMontant(facture.montant_net) }}</div>
              <div class="fv-stats-bar__label">Montant net</div>
            </div>
          </div>
          <div class="fv-stats-bar__divider"></div>
          <div class="fv-stats-bar__item">
            <div class="fv-stats-bar__icon"><i class="pi pi-check-circle"></i></div>
            <div>
              <div class="fv-stats-bar__value">{{ formatMontant(facture.montant_encaisse) }}</div>
              <div class="fv-stats-bar__label">Encaiss\xE9</div>
            </div>
          </div>
          <div class="fv-stats-bar__divider"></div>
          <div class="fv-stats-bar__item">
            <div class="fv-stats-bar__icon"><i class="pi pi-clock"></i></div>
            <div>
              <div class="fv-stats-bar__value">{{ formatMontant(facture.montant_restant) }}</div>
              <div class="fv-stats-bar__label">Restant</div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 md:px-6">

          <!-- Infos facture -->
          <p-card>
            <ng-template #header>
              <div class="flex align-items-center justify-content-between px-5 pt-4 pb-2">
                <div class="flex align-items-center gap-2">
                  <i class="pi pi-file-invoice text-primary text-xl"></i>
                  <h2 class="text-base font-semibold m-0 font-mono">{{ facture.reference }}</h2>
                </div>
                <p-tag
                  [value]="getStatutLabel(facture.statut_facture)"
                  [severity]="getStatutSeverity(facture.statut_facture)"
                />
              </div>
            </ng-template>

            <div class="grid grid-cols-2 gap-4">
              <div>
                <p class="text-color-secondary text-sm m-0 mb-1">Montant brut</p>
                <p class="text-2xl font-bold m-0 text-primary">{{ formatMontant(facture.montant_brut) }}</p>
              </div>
              <div>
                <p class="text-color-secondary text-sm m-0 mb-1">Montant net</p>
                <p class="text-xl font-semibold m-0">{{ formatMontant(facture.montant_net) }}</p>
              </div>
              <div>
                <p class="text-color-secondary text-sm m-0 mb-1">Encaiss\xE9</p>
                <p class="font-semibold text-green-600 m-0">{{ formatMontant(facture.montant_encaisse) }}</p>
              </div>
              <div>
                <p class="text-color-secondary text-sm m-0 mb-1">Restant</p>
                <p class="font-semibold text-red-500 m-0">{{ formatMontant(facture.montant_restant) }}</p>
              </div>
              <div>
                <p class="text-color-secondary text-sm m-0 mb-1">Date de cr\xE9ation</p>
                <p class="font-semibold m-0">{{ formatDate(facture.created_at) }}</p>
              </div>
            </div>

            <p-divider />
            <div>
              <div class="flex justify-content-between mb-1 text-sm">
                <span class="text-color-secondary">Progression encaissement</span>
                <span class="font-semibold">{{ progressPct }}%</span>
              </div>
              <div class="fv-progress-wrap">
                <div class="fv-progress-fill" [style.width]="progressPct + '%'"></div>
              </div>
            </div>
          </p-card>

          <!-- V\xE9hicule associ\xE9 -->
          @if (facture.vehicule) {
            <p-card>
              <ng-template #header>
                <div class="flex align-items-center gap-2 px-5 pt-4 pb-2">
                  <i class="pi pi-car text-blue-500 text-xl"></i>
                  <h2 class="text-base font-semibold m-0">V\xE9hicule associ\xE9</h2>
                </div>
              </ng-template>

              <!-- Photo + nom + immat -->
              <div class="flex align-items-center gap-3 mb-4">
                @if (facture.vehicule.photo_url) {
                  <img
                    [src]="facture.vehicule.photo_url"
                    [alt]="facture.vehicule.nom_vehicule"
                    class="border-circle flex-shrink-0"
                    style="width:4rem;height:4rem;object-fit:cover"
                  />
                } @else {
                  <span
                    class="flex align-items-center justify-content-center bg-blue-100 text-blue-700 border-circle font-bold text-xl flex-shrink-0"
                    style="width:4rem;height:4rem"
                  >
                    {{ facture.vehicule.nom_vehicule?.charAt(0) }}
                  </span>
                }
                <div>
                  <p class="font-bold text-lg m-0">{{ facture.vehicule.nom_vehicule }}</p>
                  <code class="text-sm text-color-secondary">{{ facture.vehicule.immatriculation }}</code>
                </div>
              </div>

              <!-- Propri\xE9taire -->
              @if (facture.vehicule.proprietaire) {
                <div class="flex align-items-center gap-3 mb-3">
                  <span class="border-circle flex-shrink-0 bg-surface-100 dark:bg-surface-700"
                        style="width:2.5rem;height:2.5rem;display:inline-flex;align-items:center;justify-content:center">
                    <i class="pi pi-user text-surface-500" style="font-size:1rem"></i>
                  </span>
                  <div>
                    <p class="text-sm text-color-secondary m-0 mb-1">Propri\xE9taire</p>
                    <p class="font-semibold m-0">
                      {{ facture.vehicule.proprietaire.prenom }} {{ facture.vehicule.proprietaire.nom }}
                    </p>
                    @if (facture.vehicule.proprietaire.phone) {
                      <p class="text-sm text-color-secondary m-0">{{ facture.vehicule.proprietaire.phone | phoneFormat }}</p>
                    }
                  </div>
                </div>
              }

              <!-- Livreur principal -->
              @if (facture.vehicule.livreurPrincipal || facture.vehicule.livreur_principal) {
                @let livreur = facture.vehicule.livreurPrincipal ?? facture.vehicule.livreur_principal!;
                <div class="flex align-items-center gap-3">
                  <span class="border-circle flex-shrink-0 bg-green-100 dark:bg-green-900"
                        style="width:2.5rem;height:2.5rem;display:inline-flex;align-items:center;justify-content:center">
                    <i class="pi pi-truck text-green-600" style="font-size:1rem"></i>
                  </span>
                  <div>
                    <p class="text-sm text-color-secondary m-0 mb-1">Livreur principal</p>
                    <p class="font-semibold m-0">{{ livreur.prenom }} {{ livreur.nom }}</p>
                    @if (livreur.phone) {
                      <p class="text-sm text-color-secondary m-0">{{ livreur.phone | phoneFormat }}</p>
                    }
                  </div>
                </div>
              }

            </p-card>
          }

          <!-- Encaissements -->
          <p-card class="lg:col-span-2">
            <ng-template #header>
              <div class="flex align-items-center justify-content-between px-5 pt-4 pb-2">
                <div class="flex align-items-center gap-2">
                  <i class="pi pi-wallet text-green-500 text-xl"></i>
                  <h2 class="text-base font-semibold m-0">Encaissements</h2>
                </div>
                @if (canAddEncaissement) {
                  <p-button
                    label="Ajouter"
                    icon="pi pi-plus"
                    severity="success"
                    [outlined]="true"
                    [text]="true"
                    size="small"
                    (onClick)="openEncaissementDialog()"
                  />
                }
              </div>
            </ng-template>

            @if (facture.encaissements && facture.encaissements.length > 0) {
              <div class="flex flex-col gap-2">
                @for (enc of facture.encaissements; track enc.id) {
                  <div class="fv-enc-card">
                    <div>
                      <div class="fv-enc-card__amount">{{ formatMontant(enc.montant) }}</div>
                      @if (enc.note) {
                        <div class="fv-enc-card__note">{{ enc.note }}</div>
                      }
                      <div class="fv-enc-card__date">{{ formatDate(enc.date_encaissement) }}</div>
                    </div>
                    <span class="fv-enc-card__mode">{{ enc.mode_paiement }}</span>
                  </div>
                }
              </div>
            } @else {
              <p class="text-color-secondary text-sm text-center py-2 m-0">Aucun encaissement.</p>
            }
          </p-card>

        </div>

      </div><!-- /.fv-desktop-only -->

    }

  </div><!-- /.fv-detail-mobile-scroll -->

</div><!-- /.fv-detail-page-wrap -->


<!-- \u2500\u2500 Dialog : Confirmation annulation \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<p-dialog
  header="Annuler la facture"
  [(visible)]="annulerDialogVisible"
  [modal]="true"
  [style]="{ width: '24rem' }"
  [draggable]="false"
>
  <div class="flex align-items-center gap-3 py-2">
    <i class="pi pi-exclamation-triangle text-orange-500 text-3xl"></i>
    <p class="m-0">
      \xCAtes-vous s\xFBr de vouloir annuler la facture
      <strong>{{ facture?.reference }}</strong> ?
      Cette action est irr\xE9versible.
    </p>
  </div>
  <ng-template #footer>
    <p-button label="Non, garder" severity="secondary" [outlined]="true" (onClick)="annulerDialogVisible = false" [disabled]="annulerLoading" />
    <p-button label="Oui, annuler" icon="pi pi-ban" severity="danger" (onClick)="confirmerAnnulation()" [loading]="annulerLoading" />
  </ng-template>
</p-dialog>
`, styles: ["/* src/app/pages/ventes/facture-vente-detail/facture-vente-detail.scss */\n:host {\n  --mob-primary: #5f6bff;\n  --mob-bg: #f0f2f8;\n  --mob-card: #ffffff;\n  --mob-border: #e2e8f0;\n  --mob-text: #1e293b;\n  --mob-muted: #7f8ca3;\n  --mob-green: #059669;\n  --mob-red: #e53e3e;\n}\n.fv-mobile-only {\n  display: none;\n}\n.fv-desktop-only {\n  display: block;\n}\n@media (max-width: 768px) {\n  .fv-mobile-only {\n    display: block;\n  }\n  .fv-desktop-only {\n    display: none !important;\n  }\n}\n@media (max-width: 768px) {\n  .fv-detail-page-wrap {\n    display: flex;\n    flex-direction: column;\n    min-height: 100dvh;\n    height: 100dvh;\n    overflow: hidden;\n    background: var(--mob-bg);\n    margin: calc(-0.25rem - env(safe-area-inset-top)) -0.875rem 0;\n    margin-bottom: calc(-0.875rem - env(safe-area-inset-bottom));\n    padding: 0;\n  }\n}\n@media (max-width: 768px) {\n  .fv-detail-mobile-scroll {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    padding: 1rem 0.875rem calc(5rem + env(safe-area-inset-bottom));\n  }\n}\n.fv-detail-mobile-header {\n  display: none;\n}\n@media (max-width: 768px) {\n  .fv-detail-mobile-header {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    padding: calc(0.6rem + env(safe-area-inset-top)) calc(0.75rem + env(safe-area-inset-right)) 0.6rem calc(0.75rem + env(safe-area-inset-left));\n    flex-shrink: 0;\n    background: var(--mob-card);\n    border-bottom: 1px solid var(--mob-border);\n    box-shadow: 0 1px 4px rgba(15, 23, 42, 0.06);\n    position: sticky;\n    top: 0;\n    z-index: 25;\n  }\n  :host-context(.app-dark) .fv-detail-mobile-header {\n    background: var(--p-surface-800);\n    border-bottom-color: var(--p-surface-700);\n  }\n  :host ::ng-deep .fv-detail-mobile-back.p-button {\n    color: var(--mob-primary) !important;\n    background: rgba(95, 107, 255, 0.08) !important;\n    border-radius: 999px !important;\n    width: 2.15rem !important;\n    height: 2.15rem !important;\n  }\n  .fv-detail-mobile-title-wrap {\n    flex: 1;\n    min-width: 0;\n    text-align: center;\n  }\n  .fv-detail-mobile-title {\n    font-size: 1.05rem;\n    font-weight: 800;\n    margin: 0;\n    color: var(--mob-text);\n    line-height: 1.2;\n  }\n  .fv-detail-mobile-subtitle {\n    font-size: 0.72rem;\n    color: var(--mob-muted);\n    margin: 0.1rem 0 0;\n    font-variant-numeric: tabular-nums;\n    font-weight: 600;\n  }\n  .fv-detail-header--desktop {\n    display: none !important;\n  }\n}\n.fv-hero {\n  background: var(--mob-card);\n  border-radius: 1.25rem;\n  padding: 1.25rem 1.25rem 1rem;\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.07);\n  margin-bottom: 1rem;\n}\n.fv-hero__top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.25rem;\n}\n.fv-hero__ref {\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  color: var(--mob-muted);\n  background: var(--mob-bg);\n  padding: 0.2rem 0.55rem;\n  border-radius: 0.4rem;\n}\n.fv-hero__center {\n  text-align: center;\n  margin-bottom: 1.25rem;\n}\n.fv-hero__amount {\n  font-size: 2rem;\n  font-weight: 800;\n  color: var(--mob-text);\n  letter-spacing: -0.03em;\n  font-variant-numeric: tabular-nums;\n  line-height: 1.1;\n}\n.fv-hero__amount-label {\n  font-size: 0.78rem;\n  color: var(--mob-muted);\n  font-weight: 600;\n  margin-top: 0.2rem;\n}\n.fv-hero__progress {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1.25rem;\n}\n.fv-hero__progress-track {\n  flex: 1;\n  height: 0.55rem;\n  background: var(--mob-bg);\n  border-radius: 999px;\n  overflow: hidden;\n}\n.fv-hero__progress-fill {\n  height: 100%;\n  background: var(--mob-primary);\n  border-radius: 999px;\n  transition: width 0.4s ease;\n}\n.fv-hero__progress-pct {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: var(--mob-primary);\n  min-width: 2.5rem;\n  text-align: right;\n}\n.fv-hero__split {\n  display: flex;\n  align-items: center;\n  background: var(--mob-bg);\n  border-radius: 0.875rem;\n  padding: 0.875rem 1rem;\n  margin-bottom: 1rem;\n}\n.fv-hero__split-col {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.2rem;\n}\n.fv-hero__split-icon {\n  font-size: 1rem;\n  margin-bottom: 0.1rem;\n}\n.fv-hero__split-icon--green {\n  color: var(--mob-green);\n}\n.fv-hero__split-icon--red {\n  color: var(--mob-red);\n}\n.fv-hero__split-val {\n  font-size: 1.05rem;\n  font-weight: 800;\n  font-variant-numeric: tabular-nums;\n  letter-spacing: -0.01em;\n}\n.fv-hero__split-val--green {\n  color: var(--mob-green);\n}\n.fv-hero__split-val--red {\n  color: var(--mob-red);\n}\n.fv-hero__split-lbl {\n  font-size: 0.7rem;\n  color: var(--mob-muted);\n  font-weight: 600;\n}\n.fv-hero__split-sep {\n  width: 1px;\n  height: 2.5rem;\n  background: var(--mob-border);\n  margin: 0 0.5rem;\n  flex-shrink: 0;\n}\n.fv-hero__meta {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid var(--mob-border);\n}\n.fv-hero__meta-item {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.78rem;\n  color: var(--mob-muted);\n  font-weight: 600;\n}\n.fv-hero__meta-item .pi {\n  font-size: 0.82rem;\n}\n.fv-section {\n  background: var(--mob-card);\n  border-radius: 1.25rem;\n  padding: 1.25rem;\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.07);\n}\n.fv-section__title {\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: var(--mob-text);\n  margin: 0 0 1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.fv-section__title .pi {\n  color: var(--mob-primary);\n}\n.fv-section__empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1.5rem 0;\n  color: var(--mob-muted);\n  font-size: 0.875rem;\n}\n.fv-section__empty .pi {\n  font-size: 1.75rem;\n}\n.fv-fab {\n  display: none;\n}\n@media (max-width: 768px) {\n  .fv-fab {\n    display: flex;\n    align-items: center;\n    gap: 0.4rem;\n    position: fixed;\n    bottom: calc(1.25rem + env(safe-area-inset-bottom));\n    right: calc(1.25rem + env(safe-area-inset-right));\n    z-index: 20;\n    height: 3rem;\n    padding: 0 1.25rem;\n    border-radius: 999px;\n    border: none;\n    background: var(--mob-primary);\n    color: #fff;\n    font-weight: 700;\n    font-size: 0.92rem;\n    box-shadow: 0 4px 16px rgba(95, 107, 255, 0.45);\n    cursor: pointer;\n    -webkit-tap-highlight-color: transparent;\n    transition: transform 0.15s ease;\n  }\n  .fv-fab .pi {\n    font-size: 1.1rem;\n  }\n  .fv-fab:active {\n    transform: scale(0.95);\n  }\n}\n.fv-enc-card {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.75rem;\n  background: var(--p-surface-50);\n  border: 1px solid var(--p-surface-200);\n  border-radius: 10px;\n  padding: 0.875rem 1rem;\n}\n.fv-enc-card__amount {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #059669;\n  font-variant-numeric: tabular-nums;\n}\n.fv-enc-card__mode {\n  display: inline-block;\n  padding: 0.15rem 0.5rem;\n  background: var(--p-surface-200);\n  border-radius: 999px;\n  font-size: 0.72rem;\n  color: var(--p-surface-700);\n  flex-shrink: 0;\n}\n.fv-enc-card__date {\n  font-size: 0.8rem;\n  color: var(--p-surface-400);\n  margin-top: 0.25rem;\n}\n.fv-enc-card__note {\n  font-size: 0.82rem;\n  color: var(--p-surface-500);\n  font-style: italic;\n  margin-top: 0.15rem;\n}\n.fv-progress-wrap {\n  background: var(--p-surface-200);\n  border-radius: 999px;\n  overflow: hidden;\n  height: 0.5rem;\n}\n.fv-progress-fill {\n  height: 100%;\n  border-radius: 999px;\n  background: var(--p-primary-500);\n  transition: width 0.4s ease;\n}\n.fv-stats-bar {\n  display: flex;\n  align-items: center;\n  background: var(--p-surface-0);\n  border-radius: 14px;\n  padding: 1.25rem 2rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  margin-bottom: 1.5rem;\n}\n.fv-stats-bar__item {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n  padding: 0.5rem 1.25rem;\n}\n.fv-stats-bar__divider {\n  width: 1px;\n  height: 36px;\n  background: var(--p-surface-200);\n  flex-shrink: 0;\n}\n.fv-stats-bar__icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 1rem;\n  background: var(--p-surface-100);\n  color: var(--p-surface-600);\n}\n.fv-stats-bar__value {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: var(--p-surface-900);\n  letter-spacing: -0.02em;\n  line-height: 1.2;\n  font-variant-numeric: tabular-nums;\n}\n.fv-stats-bar__label {\n  font-size: 0.75rem;\n  color: var(--p-surface-400);\n  margin-top: 2px;\n}\n.fv-enc-slideover {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n@media (max-width: 768px) {\n  .fv-enc-slideover {\n    left: 0;\n    right: 0;\n    width: 100%;\n    min-height: 100dvh;\n    padding-top: env(safe-area-inset-top);\n    padding-bottom: env(safe-area-inset-bottom);\n    padding-left: env(safe-area-inset-left);\n    padding-right: env(safe-area-inset-right);\n    box-sizing: border-box;\n  }\n}\n.fv-enc-slideover-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.25rem 1.5rem 1rem;\n  border-bottom: 1px solid var(--p-surface-200);\n  flex-shrink: 0;\n}\n.fv-enc-slideover-title {\n  font-size: 1.05rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--p-surface-900);\n}\n.fv-enc-slideover-body {\n  flex: 1;\n  min-height: 0;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  padding: 1.25rem 1.5rem;\n}\n.fv-enc-slideover-footer {\n  padding: 1rem 1.5rem calc(1rem + env(safe-area-inset-bottom));\n  border-top: 1px solid var(--p-surface-200);\n  flex-shrink: 0;\n}\n.fv-enc-preview {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.875rem 1rem;\n  background: var(--p-surface-50);\n  border-radius: 10px;\n  margin-bottom: 1.25rem;\n  font-size: 0.875rem;\n  color: var(--p-surface-600);\n}\n:host-context(.app-dark) {\n  --mob-bg: var(--p-surface-900);\n  --mob-card: var(--p-surface-800);\n  --mob-border: var(--p-surface-700);\n  --mob-text: var(--p-surface-0);\n  --mob-muted: var(--p-surface-400);\n}\n:host-context(.app-dark) .fv-detail-mobile-title {\n  color: var(--p-surface-0);\n}\n:host-context(.app-dark) .fv-detail-mobile-subtitle {\n  color: var(--p-surface-400);\n}\n:host-context(.app-dark) .fv-hero {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);\n}\n:host-context(.app-dark) .fv-hero__ref {\n  background: var(--p-surface-700);\n}\n:host-context(.app-dark) .fv-hero__progress-track {\n  background: var(--p-surface-700);\n}\n:host-context(.app-dark) .fv-section {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);\n}\n:host-context(.app-dark) .fv-stats-bar {\n  background: var(--p-surface-800);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n:host-context(.app-dark) .fv-stats-bar__divider {\n  background: var(--p-surface-600);\n}\n:host-context(.app-dark) .fv-stats-bar__icon {\n  background: var(--p-surface-700);\n  color: var(--p-surface-400);\n}\n:host-context(.app-dark) .fv-stats-bar__value {\n  color: var(--p-surface-0);\n}\n:host-context(.app-dark) .fv-enc-card {\n  background: var(--p-surface-800);\n  border-color: var(--p-surface-600);\n}\n:host-context(.app-dark) .fv-enc-card__amount {\n  color: #34d399;\n}\n:host-context(.app-dark) .fv-enc-card__date {\n  color: var(--p-surface-500);\n}\n:host-context(.app-dark) .fv-enc-card__note {\n  color: var(--p-surface-400);\n}\n:host-context(.app-dark) .fv-enc-card__mode {\n  background: var(--p-surface-700);\n  color: var(--p-surface-300);\n}\n:host-context(.app-dark) .fv-progress-wrap {\n  background: var(--p-surface-600);\n}\n:host-context(.app-dark) .fv-enc-slideover-header {\n  border-bottom-color: var(--p-surface-700);\n}\n:host-context(.app-dark) .fv-enc-slideover-title {\n  color: var(--p-surface-0);\n}\n:host-context(.app-dark) .fv-enc-slideover-footer {\n  border-top-color: var(--p-surface-700);\n}\n:host-context(.app-dark) .fv-enc-preview {\n  background: var(--p-surface-700);\n  color: var(--p-surface-300);\n}\n/*# sourceMappingURL=facture-vente-detail.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: ActivatedRoute }, { type: Router }, { type: FactureLivraisonService }, { type: AuthService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FactureVenteDetail, { className: "FactureVenteDetail", filePath: "src/app/pages/ventes/facture-vente-detail/facture-vente-detail.ts", lineNumber: 56 });
})();
export {
  FactureVenteDetail
};
//# sourceMappingURL=chunk-R3KH7UYZ.js.map
