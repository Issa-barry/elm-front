import {
  CommandeVenteService
} from "./chunk-L5SNKCQB.js";
import {
  LayoutService
} from "./chunk-R2FUZZXK.js";
import {
  FactureLivraisonService
} from "./chunk-3HIBHJ7P.js";
import {
  STATUT_FACTURE_LABELS
} from "./chunk-ZJQGPEDN.js";
import {
  Skeleton,
  SkeletonModule
} from "./chunk-LYQXVLW6.js";
import {
  UsineService
} from "./chunk-CUSVS23C.js";
import {
  PhoneFormatPipe
} from "./chunk-JL62XEMH.js";
import {
  Toast,
  ToastModule
} from "./chunk-SXI4YLKA.js";
import "./chunk-2W47BJ2H.js";
import {
  AuthService
} from "./chunk-FWYLTE3T.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-6PLIE4IB.js";
import "./chunk-UK6LIBRF.js";
import {
  UsineContextService
} from "./chunk-GEBWCDCC.js";
import "./chunk-CSVYKJ4F.js";
import {
  InputNumber,
  InputNumberModule
} from "./chunk-IQKSNOBA.js";
import "./chunk-YPIU6GBB.js";
import "./chunk-NGYBJXCA.js";
import {
  Select,
  SelectModule
} from "./chunk-7FPBHFED.js";
import "./chunk-WZGVHVRY.js";
import "./chunk-YZHJ5FSA.js";
import "./chunk-5OSG7M3V.js";
import "./chunk-YHSSX73X.js";
import "./chunk-52XP6VLB.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-ZPTU3HTV.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-CZVP2Z6G.js";
import "./chunk-6FDWWH3U.js";
import "./chunk-3MAO4O33.js";
import "./chunk-U7PUKEXO.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-5YV6R2XG.js";
import {
  ButtonDirective,
  ButtonLabel,
  ButtonModule
} from "./chunk-DU54A2AA.js";
import "./chunk-2LRC5QRK.js";
import "./chunk-GZRFJIKZ.js";
import "./chunk-4SQYV2UP.js";
import {
  MessageService
} from "./chunk-6E6G4HCZ.js";
import {
  CommonModule,
  NgClass
} from "./chunk-SHRV3VYN.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-DSAAE4AM.js";
import {
  __async
} from "./chunk-4MWRP73S.js";

// src/app/pages/ventes/facture-vente-detail3/facture-vente-detail3.ts
var _forTrack0 = ($index, $item) => $item.id;
function FactureVenteDetail3_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 14);
    \u0275\u0275element(2, "p-skeleton", 15)(3, "p-skeleton", 16)(4, "p-skeleton", 17);
    \u0275\u0275elementEnd()();
  }
}
function FactureVenteDetail3_Conditional_14_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.usineAdresse);
  }
}
function FactureVenteDetail3_Conditional_14_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "phoneFormat");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, ctx_r1.proprietairePhone, "INT"));
  }
}
function FactureVenteDetail3_Conditional_14_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "phoneFormat");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, ctx_r1.livreurPhone, "INT"));
  }
}
function FactureVenteDetail3_Conditional_14_Conditional_59_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 66);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 67);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 67);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 68);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ligne_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (ligne_r3.produit == null ? null : ligne_r3.produit.nom) || "Produit", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ligne_r3.qte, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatAmount(ctx_r1.getPrixUnitaire(ligne_r3)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatAmount(ligne_r3.total_ligne), " ");
  }
}
function FactureVenteDetail3_Conditional_14_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, FactureVenteDetail3_Conditional_14_Conditional_59_For_1_Template, 9, 4, "tr", null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.lignes);
  }
}
function FactureVenteDetail3_Conditional_14_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 69);
    \u0275\u0275text(2, " Aucune ligne de commande disponible. ");
    \u0275\u0275elementEnd()();
  }
}
function FactureVenteDetail3_Conditional_14_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.notes);
  }
}
function FactureVenteDetail3_Conditional_14_Conditional_96_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "span", 71);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 72);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const versement_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.formatDateDisplay(versement_r4.date_encaissement), " - ", ctx_r1.getModePaiementLabel(versement_r4.mode_paiement), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatAmount(versement_r4.montant), " ");
  }
}
function FactureVenteDetail3_Conditional_14_Conditional_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275repeaterCreate(1, FactureVenteDetail3_Conditional_14_Conditional_96_For_2_Template, 5, 3, "div", 70, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.versementsAffiches);
  }
}
function FactureVenteDetail3_Conditional_14_Conditional_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1, "Aucun versement");
    \u0275\u0275elementEnd();
  }
}
function FactureVenteDetail3_Conditional_14_Conditional_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 55);
    \u0275\u0275text(2, "Especes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 56);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatAmount(ctx_r1.totalEspeces));
  }
}
function FactureVenteDetail3_Conditional_14_Conditional_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 55);
    \u0275\u0275text(2, "Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 56);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatAmount(ctx_r1.totalMobile));
  }
}
function FactureVenteDetail3_Conditional_14_Conditional_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 55);
    \u0275\u0275text(2, "Banque");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 56);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatAmount(ctx_r1.totalBanque));
  }
}
function FactureVenteDetail3_Conditional_14_Conditional_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1, "Aucun versement");
    \u0275\u0275elementEnd();
  }
}
function FactureVenteDetail3_Conditional_14_Conditional_124_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Le montant ne doit pas depasser le reste a payer (", ctx_r1.formatAmount(ctx_r1.resteAPayer), ").");
  }
}
function FactureVenteDetail3_Conditional_14_Conditional_129_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 63);
    \u0275\u0275text(1, "Permission encaissements.create requise.");
    \u0275\u0275elementEnd();
  }
}
function FactureVenteDetail3_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 18)(2, "div", 19)(3, "div", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 21)(6, "div", 22);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 23);
    \u0275\u0275element(8, "path", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 25);
    \u0275\u0275text(10, " EAU-LA-MAMAN ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 26);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, FactureVenteDetail3_Conditional_14_Conditional_13_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 27)(15, "div", 28);
    \u0275\u0275text(16, " FACTURE VENTE ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 22)(18, "div", 29)(19, "span", 30);
    \u0275\u0275text(20, "DATE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 29)(24, "span", 30);
    \u0275\u0275text(25, "FACTURE #");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 31)(29, "span", 30);
    \u0275\u0275text(30, "N\xB0 COMMANDE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(33, "div", 32)(34, "div", 33);
    \u0275\u0275text(35, "Vehicule / Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 26);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 26);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span", 26);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(42, FactureVenteDetail3_Conditional_14_Conditional_42_Template, 3, 4, "span", 26);
    \u0275\u0275elementStart(43, "span", 26);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(45, FactureVenteDetail3_Conditional_14_Conditional_45_Template, 3, 4, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 34)(47, "table", 35)(48, "thead")(49, "tr")(50, "th", 36);
    \u0275\u0275text(51, " Description ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "th", 37);
    \u0275\u0275text(53, " Quantite ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "th", 37);
    \u0275\u0275text(55, " Prix unitaire ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "th", 38);
    \u0275\u0275text(57, " Total ligne ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "tbody");
    \u0275\u0275conditionalCreate(59, FactureVenteDetail3_Conditional_14_Conditional_59_Template, 2, 0)(60, FactureVenteDetail3_Conditional_14_Conditional_60_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(61, "div", 39)(62, "div", 40)(63, "div", 41);
    \u0275\u0275text(64, "NOTES");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(65, FactureVenteDetail3_Conditional_14_Conditional_65_Template, 2, 1, "span", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 22)(67, "div", 29)(68, "span", 30);
    \u0275\u0275text(69, "SUBTOTAL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "span");
    \u0275\u0275text(71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 29)(73, "span", 30);
    \u0275\u0275text(74, "TVA #");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "span");
    \u0275\u0275text(76, "0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "div", 31)(78, "span", 30);
    \u0275\u0275text(79, "TOTAL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "span");
    \u0275\u0275text(81);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(82, "div", 39)(83, "div", 43);
    \u0275\u0275text(84, "Paiements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "div", 22)(86, "div", 29)(87, "span", 30);
    \u0275\u0275text(88, "Montant paye");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "span");
    \u0275\u0275text(90);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(91, "div", 31)(92, "span", 30);
    \u0275\u0275text(93, "Reste a payer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "span");
    \u0275\u0275text(95);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(96, FactureVenteDetail3_Conditional_14_Conditional_96_Template, 3, 0, "div", 44)(97, FactureVenteDetail3_Conditional_14_Conditional_97_Template, 2, 0, "span", 45);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(98, "div", 46)(99, "div", 47)(100, "div", 48);
    \u0275\u0275text(101, "Payer la facture");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "div", 49);
    \u0275\u0275conditionalCreate(103, FactureVenteDetail3_Conditional_14_Conditional_103_Template, 5, 1, "div", 50);
    \u0275\u0275conditionalCreate(104, FactureVenteDetail3_Conditional_14_Conditional_104_Template, 5, 1, "div", 50);
    \u0275\u0275conditionalCreate(105, FactureVenteDetail3_Conditional_14_Conditional_105_Template, 5, 1, "div", 50);
    \u0275\u0275conditionalCreate(106, FactureVenteDetail3_Conditional_14_Conditional_106_Template, 2, 0, "div", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "div", 52)(108, "div", 53);
    \u0275\u0275element(109, "div", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(110, "div", 50)(111, "div", 55);
    \u0275\u0275text(112, "Payee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "div", 56);
    \u0275\u0275text(114);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(115, "div", 50)(116, "div", 55);
    \u0275\u0275text(117, "Reste");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "div", 57);
    \u0275\u0275text(119);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(120, "div", 58)(121, "label", 59);
    \u0275\u0275text(122, "Montant a encaisser");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "p-inputnumber", 60);
    \u0275\u0275twoWayListener("ngModelChange", function FactureVenteDetail3_Conditional_14_Template_p_inputnumber_ngModelChange_123_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.encaissementMontant, $event) || (ctx_r1.encaissementMontant = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(124, FactureVenteDetail3_Conditional_14_Conditional_124_Template, 2, 1, "small", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "div", 58)(126, "label", 59);
    \u0275\u0275text(127, "Mode de paiement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "p-select", 62);
    \u0275\u0275twoWayListener("ngModelChange", function FactureVenteDetail3_Conditional_14_Template_p_select_ngModelChange_128_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.encaissementMode, $event) || (ctx_r1.encaissementMode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(129, FactureVenteDetail3_Conditional_14_Conditional_129_Template, 2, 0, "small", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "button", 64);
    \u0275\u0275listener("click", function FactureVenteDetail3_Conditional_14_Template_button_click_130_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.payer());
    });
    \u0275\u0275elementStart(131, "span", 65);
    \u0275\u0275text(132, "Payer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.factureStatutClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.factureStatutLabel, " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.usineNom);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.usineAdresse ? 13 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.factureDate);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.factureNumero);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.commandeNumero);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.vehiculeNom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.vehiculeImmatriculation);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Proprietaire: ", ctx_r1.proprietaireNom);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.proprietairePhone ? 42 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Livreur: ", ctx_r1.livreurNom);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.livreurPhone ? 45 : -1);
    \u0275\u0275advance(14);
    \u0275\u0275conditional(ctx_r1.lignes.length > 0 ? 59 : 60);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.notes !== "-" ? 65 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.formatAmount(ctx_r1.sousTotal));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.formatAmount(ctx_r1.totalFacture));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.formatAmount(ctx_r1.montantPaye));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatAmount(ctx_r1.resteAPayer));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.versementsAffiches.length > 0 ? 96 : 97);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.totalEspeces > 0 ? 103 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.totalMobile > 0 ? 104 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.totalBanque > 0 ? 105 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.totalEncaisse === 0 ? 106 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.formatAmount(ctx_r1.montantPaye));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatAmount(ctx_r1.resteAPayer));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.encaissementMontant);
    \u0275\u0275property("min", 1)("max", ctx_r1.resteAPayer)("invalid", ctx_r1.isEncaissementMontantExceedsReste)("useGrouping", true);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isEncaissementMontantExceedsReste ? 124 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.encaissementMode);
    \u0275\u0275property("options", ctx_r1.modesPaiement);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.canCreateEncaissement ? 129 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.canPay)("loading", ctx_r1.encaissementSaving);
  }
}
function FactureVenteDetail3_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1, " Facture introuvable. ");
    \u0275\u0275elementEnd();
  }
}
var FactureVenteDetail3 = class _FactureVenteDetail3 {
  route;
  router;
  layoutService;
  factureService;
  commandeService;
  usineContext;
  usineService;
  authService;
  messageService;
  loading = false;
  encaissementSaving = false;
  backNavigating = false;
  printLoading = false;
  facture = null;
  commande = null;
  usineFacture = null;
  encaissementMontant = null;
  encaissementMode = "especes";
  modesPaiement = [
    { label: "Especes", value: "especes" },
    { label: "Mobile Money", value: "mobile_money" },
    { label: "Virement", value: "virement" },
    { label: "Cheque", value: "cheque" }
  ];
  get canCreateEncaissement() {
    return this.authService.hasPermission("encaissements.create");
  }
  constructor(route, router, layoutService, factureService, commandeService, usineContext, usineService, authService, messageService) {
    this.route = route;
    this.router = router;
    this.layoutService = layoutService;
    this.factureService = factureService;
    this.commandeService = commandeService;
    this.usineContext = usineContext;
    this.usineService = usineService;
    this.authService = authService;
    this.messageService = messageService;
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get("id");
      const id = idParam ? Number(idParam) : NaN;
      if (!id || Number.isNaN(id)) {
        this.router.navigate(["/ventes/factures"]);
        return;
      }
      this.loadFacture(id);
    });
  }
  get usineNom() {
    return this.getUsineFactureSource()?.nom || "Usine";
  }
  get usineAdresse() {
    const usine = this.getUsineFactureSource();
    if (!usine)
      return "";
    const localisation = [usine.quartier, usine.ville, usine.pays].map((item) => typeof item === "string" ? item.trim() : "").filter((item) => item.length > 0);
    if (localisation.length > 0) {
      return localisation.join(", ");
    }
    return (usine.adresse ?? "").trim();
  }
  get factureDate() {
    return this.formatDateDisplay(this.facture?.created_at);
  }
  get factureNumero() {
    return this.facture?.reference || "-";
  }
  get commandeNumero() {
    const reference = this.commande?.reference?.trim();
    if (reference)
      return reference;
    const commandeId = this.facture?.commande_vente_id;
    if (!commandeId)
      return "-";
    return `#${commandeId}`;
  }
  get factureStatut() {
    return this.facture?.statut_facture ?? "impayee";
  }
  get factureStatutLabel() {
    return STATUT_FACTURE_LABELS[this.factureStatut] ?? this.factureStatut;
  }
  get factureStatutClass() {
    switch (this.factureStatut) {
      case "payee":
        return "status-payee";
      case "partiel":
        return "status-partielle";
      case "annulee":
        return "status-annulee";
      case "impayee":
      default:
        return "status-impayee";
    }
  }
  get vehiculeSource() {
    return this.facture?.vehicule ?? this.commande?.vehicule ?? null;
  }
  get vehiculeNom() {
    return this.vehiculeSource?.nom_vehicule || "-";
  }
  get vehiculeImmatriculation() {
    return this.vehiculeSource?.immatriculation || "-";
  }
  get proprietaireNom() {
    const proprietaire = this.vehiculeSource?.proprietaire;
    if (!proprietaire)
      return "-";
    const fullName = `${proprietaire.prenom || ""} ${proprietaire.nom || ""}`.trim();
    return fullName || "-";
  }
  get proprietairePhone() {
    return this.vehiculeSource?.proprietaire?.phone ?? null;
  }
  get livreurNom() {
    const livreur = this.vehiculeSource?.livreurPrincipal ?? this.vehiculeSource?.livreur_principal;
    if (!livreur)
      return "-";
    const fullName = `${livreur.prenom || ""} ${livreur.nom || ""}`.trim();
    return fullName || "-";
  }
  get livreurPhone() {
    return (this.vehiculeSource?.livreurPrincipal ?? this.vehiculeSource?.livreur_principal)?.phone ?? null;
  }
  get lignes() {
    return this.commande?.lignes ?? [];
  }
  get sousTotal() {
    if (!this.lignes.length)
      return this.totalFacture;
    return this.lignes.reduce((sum, ligne) => {
      return sum + this.toNumber(ligne.total_ligne);
    }, 0);
  }
  get totalFacture() {
    if (!this.facture)
      return 0;
    return this.toNumber(this.facture.montant_brut || this.facture.montant_net);
  }
  get montantPaye() {
    return this.facture?.montant_encaisse ?? 0;
  }
  get resteAPayer() {
    return this.facture?.montant_restant ?? 0;
  }
  get encaissements() {
    return this.facture?.encaissements ?? [];
  }
  get versementsAffiches() {
    return [...this.encaissements].sort((a, b) => new Date(b.date_encaissement).getTime() - new Date(a.date_encaissement).getTime());
  }
  get notes() {
    const factureRaw = this.facture;
    const commandeRaw = this.commande;
    const fromFacture = this.pickString(factureRaw?.["notes"], factureRaw?.["note"]);
    const fromCommande = this.pickString(commandeRaw?.["notes"], commandeRaw?.["note"]);
    return fromFacture ?? fromCommande ?? "-";
  }
  get totalEspeces() {
    return this.sumEncaissementsByMode("especes");
  }
  get totalMobile() {
    return this.sumEncaissementsByMode("mobile_money");
  }
  get totalBanque() {
    return this.sumEncaissementsByMode("virement") + this.sumEncaissementsByMode("cheque");
  }
  get totalEncaisse() {
    return this.encaissements.reduce((sum, item) => sum + this.toNumber(item.montant), 0);
  }
  get isEncaissementMontantExceedsReste() {
    if (this.encaissementMontant == null)
      return false;
    if (this.resteAPayer <= 0)
      return false;
    return this.encaissementMontant > this.resteAPayer;
  }
  get canPay() {
    return this.canCreateEncaissement && !this.loading && !this.encaissementSaving && !!this.facture && this.resteAPayer > 0 && this.encaissementMontant != null && this.encaissementMontant > 0 && !this.isEncaissementMontantExceedsReste;
  }
  toggleSidebar() {
    this.layoutService.onMenuToggle();
  }
  goBack() {
    return __async(this, null, function* () {
      if (this.backNavigating)
        return;
      this.backNavigating = true;
      try {
        yield this.router.navigate(["/ventes/factures"]);
      } finally {
        this.backNavigating = false;
      }
    });
  }
  downloadInvoice() {
    return __async(this, null, function* () {
      const pdf = yield this.buildInvoicePdf();
      if (!pdf)
        return;
      const fileName = `${this.factureNumero || "facture-vente"}.pdf`;
      pdf.save(fileName);
    });
  }
  printInvoice() {
    return __async(this, null, function* () {
      if (this.printLoading)
        return;
      this.printLoading = true;
      const invoice = document.getElementById("vente-facture3-invoice");
      if (!invoice) {
        this.printLoading = false;
        return;
      }
      const exportNode = invoice.cloneNode(true);
      exportNode.classList.remove("card");
      exportNode.style.border = "0";
      exportNode.style.boxShadow = "none";
      exportNode.style.borderRadius = "0";
      exportNode.style.margin = "0";
      exportNode.style.background = "#ffffff";
      exportNode.style.overflow = "visible";
      const headStyles = Array.from(document.querySelectorAll('style, link[rel="stylesheet"]')).map((node) => node.outerHTML).join("\n");
      const iframe = document.createElement("iframe");
      iframe.style.position = "fixed";
      iframe.style.right = "0";
      iframe.style.bottom = "0";
      iframe.style.width = "0";
      iframe.style.height = "0";
      iframe.style.border = "0";
      iframe.style.opacity = "0";
      iframe.style.pointerEvents = "none";
      const cleanup = () => {
        setTimeout(() => {
          if (iframe.parentNode) {
            iframe.parentNode.removeChild(iframe);
          }
        }, 1500);
        this.printLoading = false;
      };
      document.body.appendChild(iframe);
      const frameDoc = iframe.contentDocument || iframe.contentWindow?.document;
      if (!frameDoc) {
        cleanup();
        return;
      }
      frameDoc.open();
      frameDoc.write(`
      <!doctype html>
      <html lang="fr">
        <head>
          <meta charset="utf-8" />
          ${headStyles}
          <style>
            @page { size: A4; margin: 8mm; }
            html, body {
              margin: 0;
              padding: 0;
              background: #ffffff;
            }
            body {
              font-family: inherit;
              color: inherit;
            }
            .vente-facture3-print-root {
              width: 100%;
              margin: 0;
              padding: 0;
              background: #ffffff;
            }
            #vente-facture3-invoice {
              position: relative !important;
              overflow: visible !important;
            }
            .vente-status-ribbon {
              top: 6mm !important;
              right: 6mm !important;
              left: auto !important;
              width: auto !important;
              min-width: 4.8rem;
              padding: 0.2rem 0.55rem !important;
              border-radius: 9999px !important;
              font-size: 0.62rem !important;
              line-height: 1.1;
              letter-spacing: 0.03em !important;
              transform: none !important;
              transform-origin: center !important;
              box-shadow: none !important;
              white-space: nowrap;
            }
          </style>
        </head>
        <body>
          <div class="vente-facture3-print-root">${exportNode.outerHTML}</div>
        </body>
      </html>
    `);
      frameDoc.close();
      const triggerPrint = () => {
        try {
          const frameWindow = iframe.contentWindow;
          if (!frameWindow) {
            cleanup();
            return;
          }
          frameWindow.focus();
          frameWindow.print();
        } finally {
          cleanup();
        }
      };
      setTimeout(triggerPrint, 250);
    });
  }
  payer() {
    if (!this.facture || !this.canPay)
      return;
    if (!this.encaissementMontant || this.encaissementMontant <= 0) {
      this.messageService.add({
        severity: "warn",
        summary: "Montant requis",
        detail: "Saisissez un montant valide.",
        life: 3e3
      });
      return;
    }
    if (this.encaissementMontant > this.resteAPayer) {
      this.messageService.add({
        severity: "warn",
        summary: "Montant invalide",
        detail: "Le montant depasse le reste a payer.",
        life: 3e3
      });
      return;
    }
    const dto = {
      facture_vente_id: this.facture.id,
      montant: this.encaissementMontant,
      date_encaissement: this.formatApiDate(/* @__PURE__ */ new Date()),
      mode_paiement: this.encaissementMode
    };
    this.encaissementSaving = true;
    this.factureService.createEncaissement(dto).subscribe({
      next: () => {
        this.messageService.add({
          severity: "success",
          summary: "Succes",
          detail: `Encaissement de ${this.formatAmount(dto.montant)} enregistre.`,
          life: 3e3
        });
        this.loadFacture(this.facture.id);
      },
      error: (error) => {
        this.encaissementSaving = false;
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: error?.error?.message || "Impossible d'enregistrer l'encaissement.",
          life: 4e3
        });
      }
    });
  }
  getPrixUnitaire(ligne) {
    return this.toNumber(ligne.prix_vente_snapshot || ligne.prix_usine_snapshot || 0);
  }
  getModePaiementLabel(mode) {
    const found = this.modesPaiement.find((item) => item.value === mode);
    return found?.label || mode;
  }
  formatAmount(value) {
    const num = this.toNumber(value);
    return `${new Intl.NumberFormat("fr-FR", {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(num)} FG`;
  }
  formatDateDisplay(dateValue) {
    if (!dateValue)
      return "-";
    if (typeof dateValue === "string" && /^\d{4}-\d{2}-\d{2}$/.test(dateValue)) {
      const [year, month, day] = dateValue.split("-");
      return `${day}/${month}/${year}`;
    }
    const date = typeof dateValue === "string" ? new Date(dateValue) : dateValue;
    if (Number.isNaN(date.getTime()))
      return "-";
    return date.toLocaleDateString("fr-FR");
  }
  loadFacture(id) {
    this.loading = true;
    this.encaissementSaving = false;
    this.factureService.getFacture(id).subscribe({
      next: (response) => {
        this.facture = response.data;
        this.syncEncaissementDefaults();
        this.loadCommandeLiee();
        this.loadUsineFacture();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.encaissementSaving = false;
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: "Impossible de charger la facture vente.",
          life: 4e3
        });
      }
    });
  }
  loadCommandeLiee() {
    const commandeId = this.facture?.commande_vente_id;
    if (!commandeId) {
      this.commande = null;
      return;
    }
    this.commandeService.getCommande(commandeId).subscribe({
      next: (response) => {
        this.commande = response.data;
      },
      error: () => {
        this.commande = null;
      }
    });
  }
  loadUsineFacture() {
    const usineId = this.resolveUsineIdForFacture();
    if (!usineId) {
      this.usineFacture = null;
      return;
    }
    this.usineService.getById(usineId).subscribe({
      next: (response) => {
        this.usineFacture = response?.data ?? null;
      },
      error: () => {
        this.usineFacture = null;
      }
    });
  }
  syncEncaissementDefaults() {
    const restant = this.resteAPayer;
    if (restant <= 0) {
      this.encaissementMontant = null;
      return;
    }
    if (this.encaissementMontant == null || this.encaissementMontant <= 0 || this.encaissementMontant > restant) {
      this.encaissementMontant = restant;
    }
  }
  sumEncaissementsByMode(mode) {
    return this.encaissements.filter((item) => item.mode_paiement === mode).reduce((sum, item) => sum + this.toNumber(item.montant), 0);
  }
  resolveUsineIdForFacture() {
    const raw = this.facture;
    const fromFacture = this.pickNumber(raw?.["usine_id"]) ?? this.pickNumber(raw?.["usineId"]) ?? this.pickNumber(raw?.["usine"]?.["id"]);
    if (fromFacture)
      return fromFacture;
    const fromCommande = this.commande?.usine_id;
    if (fromCommande)
      return fromCommande;
    return this.usineContext.currentUsineId();
  }
  getUsineFactureSource() {
    const factureUsine = this.extractUsineFromFacture();
    const apiUsine = this.usineFacture;
    const contextUsine = this.usineContext.currentUsine();
    if (!factureUsine && !apiUsine && !contextUsine)
      return null;
    return {
      nom: factureUsine?.nom ?? apiUsine?.nom ?? contextUsine?.nom,
      adresse: factureUsine?.adresse ?? apiUsine?.adresse ?? contextUsine?.adresse ?? null,
      quartier: factureUsine?.quartier ?? apiUsine?.quartier ?? contextUsine?.quartier ?? null,
      ville: factureUsine?.ville ?? apiUsine?.ville ?? contextUsine?.ville ?? null,
      pays: factureUsine?.pays ?? apiUsine?.pays ?? contextUsine?.pays ?? null
    };
  }
  extractUsineFromFacture() {
    const raw = this.facture;
    if (!raw)
      return null;
    const relation = raw["usine"];
    if (relation && typeof relation === "object") {
      const usine = relation;
      return {
        nom: this.pickString(usine["nom"]) || void 0,
        adresse: this.pickString(usine["adresse"]),
        quartier: this.pickString(usine["quartier"]),
        ville: this.pickString(usine["ville"]),
        pays: this.pickString(usine["pays"])
      };
    }
    const nom = this.pickString(raw["usine_nom"], raw["usineNom"]);
    const adresse = this.pickString(raw["usine_adresse"], raw["usineAdresse"]);
    const quartier = this.pickString(raw["usine_quartier"], raw["usineQuartier"]);
    const ville = this.pickString(raw["usine_ville"], raw["usineVille"]);
    const pays = this.pickString(raw["usine_pays"], raw["usinePays"]);
    if (nom || adresse || quartier || ville || pays) {
      return { nom: nom || void 0, adresse, quartier, ville, pays };
    }
    return null;
  }
  pickString(...values) {
    for (const value of values) {
      if (typeof value === "string" && value.trim().length > 0) {
        return value.trim();
      }
    }
    return null;
  }
  pickNumber(value) {
    if (typeof value === "number" && Number.isFinite(value))
      return value;
    if (typeof value === "string" && value.trim().length > 0) {
      const parsed = Number(value);
      if (Number.isFinite(parsed))
        return parsed;
    }
    return null;
  }
  toNumber(value) {
    if (typeof value === "number" && Number.isFinite(value))
      return value;
    if (typeof value === "string" && value.trim().length > 0) {
      const parsed = Number(value);
      if (Number.isFinite(parsed))
        return parsed;
    }
    return 0;
  }
  formatApiDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  buildInvoicePdf() {
    return __async(this, null, function* () {
      const invoice = document.getElementById("vente-facture3-invoice");
      if (!invoice)
        return null;
      let exportContainer = null;
      try {
        const [{ default: html2canvas }, { jsPDF }] = yield Promise.all([
          import("./chunk-L75NMXTT.js"),
          import("./chunk-IE4AIYVW.js")
        ]);
        const exportNode = invoice.cloneNode(true);
        exportNode.classList.remove("card");
        exportNode.style.border = "0";
        exportNode.style.boxShadow = "none";
        exportNode.style.borderRadius = "0";
        exportNode.style.background = "#ffffff";
        exportNode.style.margin = "0";
        exportNode.style.overflow = "visible";
        exportContainer = document.createElement("div");
        exportContainer.style.position = "fixed";
        exportContainer.style.left = "-100000px";
        exportContainer.style.top = "0";
        exportContainer.style.background = "#ffffff";
        exportContainer.style.padding = "0";
        exportContainer.style.margin = "0";
        exportContainer.style.width = `${invoice.scrollWidth}px`;
        exportContainer.style.zIndex = "-1";
        exportContainer.appendChild(exportNode);
        document.body.appendChild(exportContainer);
        yield new Promise((resolve) => requestAnimationFrame(() => resolve()));
        const canvas = yield html2canvas(exportNode, {
          scale: 2,
          useCORS: true,
          backgroundColor: "#ffffff",
          width: exportNode.scrollWidth,
          height: exportNode.scrollHeight,
          windowWidth: exportNode.scrollWidth,
          windowHeight: exportNode.scrollHeight
        });
        const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const margin = 8;
        const usableWidth = pageWidth - margin * 2;
        const usableHeight = pageHeight - margin * 2;
        const imageData = canvas.toDataURL("image/png", 1);
        const imageHeight = canvas.height * usableWidth / canvas.width;
        let heightLeft = imageHeight;
        let positionY = margin;
        pdf.addImage(imageData, "PNG", margin, positionY, usableWidth, imageHeight, void 0, "FAST");
        heightLeft -= usableHeight;
        while (heightLeft > 0) {
          pdf.addPage();
          positionY = margin - (imageHeight - heightLeft);
          pdf.addImage(imageData, "PNG", margin, positionY, usableWidth, imageHeight, void 0, "FAST");
          heightLeft -= usableHeight;
        }
        return pdf;
      } catch {
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: "Impossible de generer le PDF.",
          life: 4e3
        });
        return null;
      } finally {
        if (exportContainer?.parentNode) {
          exportContainer.parentNode.removeChild(exportContainer);
        }
      }
    });
  }
  static \u0275fac = function FactureVenteDetail3_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FactureVenteDetail3)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(LayoutService), \u0275\u0275directiveInject(FactureLivraisonService), \u0275\u0275directiveInject(CommandeVenteService), \u0275\u0275directiveInject(UsineContextService), \u0275\u0275directiveInject(UsineService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FactureVenteDetail3, selectors: [["app-facture-vente-detail3"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 16, vars: 15, consts: [["position", "top-right", "appendTo", "body", 3, "baseZIndex", "preventOpenDuplicates"], [1, "vente-facture3-topbar"], [1, "vente-facture3-mobile-header"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-arrow-left", "aria-label", "Retour aux factures", 1, "p-button-rounded", "p-button-text", "vente-facture3-mobile-back", 3, "click", "loading", "disabled"], [1, "vente-facture3-mobile-title-wrap"], [1, "vente-facture3-mobile-title"], [1, "vente-facture3-mobile-subtitle"], [1, "vente-facture3-actions"], ["pButton", "", "type", "button", "icon", "pi pi-arrows-h", "severity", "primary", "pTooltip", "Fermer/Ouvrir menu", "tooltipPosition", "top", 1, "vente-facture3-desktop-only", 3, "click", "outlined", "rounded"], ["pButton", "", "type", "button", "icon", "pi pi-download", "severity", "primary", "pTooltip", "Telecharger la facture", "tooltipPosition", "top", 3, "click", "outlined", "rounded"], ["pButton", "", "type", "button", "icon", "pi pi-print", "severity", "primary", "pTooltip", "Imprimer la facture", "tooltipPosition", "top", 3, "click", "rounded", "loading", "disabled"], [1, "card", "py-8", "px-6", "md:py-12", "md:px-10"], [1, "vente-facture3-layout", "w-full", "flex", "flex-col", "md:flex-row", "items-start", "gap-6"], [1, "card", "p-8", "text-center", "text-surface-500"], [1, "flex", "flex-col", "gap-4"], ["width", "16rem", "height", "2rem"], ["width", "10rem", "height", "1rem"], ["width", "100%", "height", "12rem"], [1, "vente-facture3-main", "w-full", "md:flex-1"], ["id", "vente-facture3-invoice", 1, "card", "py-20", "px-12", "md:px-20", "overflow-visible"], [1, "vente-status-ribbon", 3, "ngClass"], [1, "flex", "flex-col", "items-start", "md:flex-row", "md:items-center", "md:justify-between", "border-b", "border-surface-200", "dark:border-surface-700", "pb-8", "min-w-max"], [1, "flex", "flex-col"], ["width", "48", "height", "50", "viewBox", "0 0 48 50", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fillRule", "evenodd", "clipRule", "evenodd", "d", "M33.1548 9.65956L23.9913 4.86169L5.54723 14.5106L0.924465 12.0851L23.9913 0L37.801 7.23403L33.1548 9.65956ZM23.9931 19.3085L42.4255 9.65955L47.0717 12.0851L23.9931 24.1595L10.1952 16.9361L14.8297 14.5106L23.9931 19.3085ZM4.6345 25.8937L0 23.4681V37.9149L23.0669 50V45.1489L4.6345 35.4894V25.8937ZM18.4324 28.2658L0 18.6169V13.7658L23.0669 25.8403V40.2977L18.4324 37.8615V28.2658ZM38.7301 23.468V18.6169L24.9205 25.8403V49.9999L29.555 47.5743V28.2659L38.7301 23.468ZM43.3546 35.4892V16.1914L48.0008 13.7659V37.9148L34.1912 45.1488V40.2977L43.3546 35.4892Z", "fill", "var(--p-primary-color)"], [1, "my-4", "text-4xl", "font-bold", "text-surface-900", "dark:text-surface-0"], [1, "mb-2"], [1, "flex", "flex-col", "mt-8", "md:mt-0"], [1, "text-2xl", "font-semibold", "text-left", "md:text-right", "mb-4"], [1, "flex", "justify-between", "items-center", "mb-2"], [1, "font-semibold", "mr-12"], [1, "flex", "justify-between", "items-center"], [1, "mt-8", "mb-20", "flex", "flex-col"], [1, "mb-4", "text-2xl", "font-medium"], [1, "overflow-x-auto"], [1, "w-full", 2, "border-collapse", "collapse", "table-layout", "auto"], [1, "text-left", "font-semibold", "py-4", "border-b", "border-surface-200", "dark:border-surface-700", "whitespace-nowrap"], [1, "text-right", "font-semibold", "py-4", "border-b", "border-surface-200", "dark:border-surface-700", "whitespace-nowrap", "px-4"], [1, "text-right", "font-semibold", "py-4", "border-b", "border-surface-200", "dark:border-surface-700", "whitespace-nowrap"], [1, "flex", "flex-col", "md:flex-row", "md:items-start", "md:justify-between", "mt-20"], [1, "flex", "flex-col", "mb-4", "md:mb-0"], [1, "font-semibold", "mb-2"], [1, "text-surface-600", "dark:text-surface-300", "max-w-xs", "text-sm"], [1, "font-semibold", "mb-4", "md:mb-0"], [1, "flex", "flex-col", "gap-2", "mt-4", "pt-3", "border-t", "border-surface-200", "dark:border-surface-700"], [1, "mt-3", "text-sm", "text-surface-500", "dark:text-surface-400"], [1, "vente-facture3-sidepanel", "w-full", "md:w-80", "flex", "flex-col", "justify-start", "items-start", "gap-6"], [1, "w-full", "p-4", "md:p-6", "rounded-lg", "border", "border-surface-200", "dark:border-surface-700", "flex", "flex-col", "justify-start", "items-start", "gap-4", "md:gap-6", "overflow-hidden", "bg-surface-0", "dark:bg-surface-900"], [1, "text-surface-900", "dark:text-surface-0", "text-base", "font-semibold", "leading-tight"], [1, "w-full", "py-2", "flex", "flex-col", "justify-start", "items-start", "gap-3", "md:gap-4"], [1, "w-full", "flex", "justify-start", "items-start", "gap-2"], [1, "w-full", "text-surface-500", "dark:text-surface-400", "text-sm", "leading-tight"], [1, "w-full", "flex", "justify-start", "items-start"], [1, "flex-1", "flex", "flex-col", "justify-start", "items-start"], [1, "w-full", "h-px", "bg-surface-200", "dark:bg-surface-700"], [1, "flex-1", "text-surface-700", "dark:text-surface-200", "text-sm", "md:text-base", "font-normal", "leading-tight"], [1, "text-surface-900", "dark:text-surface-0", "text-sm", "md:text-base", "font-medium", "leading-tight"], [1, "text-orange-500", "text-sm", "md:text-base", "font-medium", "leading-tight"], [1, "w-full", "flex", "flex-col", "gap-2"], [1, "text-surface-900", "dark:text-surface-0", "text-sm", "font-medium"], ["inputStyleClass", "w-full", "styleClass", "w-full", "suffix", " FG", "placeholder", "0", 3, "ngModelChange", "ngModel", "min", "max", "invalid", "useGrouping"], [1, "text-red-500", "text-xs"], ["optionLabel", "label", "optionValue", "value", "styleClass", "w-full", "appendTo", "body", 3, "ngModelChange", "ngModel", "options"], [1, "text-orange-500", "text-xs"], ["pButton", "", "severity", "primary", 1, "w-full", 3, "click", "disabled", "loading"], ["pButtonLabel", ""], [1, "text-left", "py-4", "border-b", "border-surface-200", "dark:border-surface-700", "whitespace-nowrap"], [1, "text-right", "py-4", "border-b", "border-surface-200", "dark:border-surface-700", "px-4"], [1, "text-right", "py-4", "border-b", "border-surface-200", "dark:border-surface-700"], ["colspan", "4", 1, "text-left", "py-4", "border-b", "border-surface-200", "dark:border-surface-700"], [1, "flex", "justify-between", "items-center", "gap-4", "text-sm"], [1, "text-surface-600", "dark:text-surface-300"], [1, "font-medium", "text-surface-900", "dark:text-surface-0"]], template: function FactureVenteDetail3_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast", 0);
      \u0275\u0275elementStart(1, "div", 1)(2, "header", 2)(3, "button", 3);
      \u0275\u0275listener("click", function FactureVenteDetail3_Template_button_click_3_listener() {
        return ctx.goBack();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "h1", 5);
      \u0275\u0275text(6, "Facture vente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 6);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "div", 7)(10, "button", 8);
      \u0275\u0275listener("click", function FactureVenteDetail3_Template_button_click_10_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 9);
      \u0275\u0275listener("click", function FactureVenteDetail3_Template_button_click_11_listener() {
        return ctx.downloadInvoice();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 10);
      \u0275\u0275listener("click", function FactureVenteDetail3_Template_button_click_12_listener() {
        return ctx.printInvoice();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(13, FactureVenteDetail3_Conditional_13_Template, 5, 0, "div", 11);
      \u0275\u0275conditionalCreate(14, FactureVenteDetail3_Conditional_14_Template, 133, 37, "div", 12);
      \u0275\u0275conditionalCreate(15, FactureVenteDetail3_Conditional_15_Template, 2, 0, "div", 13);
    }
    if (rf & 2) {
      \u0275\u0275property("baseZIndex", 1100)("preventOpenDuplicates", true);
      \u0275\u0275advance(3);
      \u0275\u0275property("loading", ctx.backNavigating)("disabled", ctx.backNavigating);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.factureNumero);
      \u0275\u0275advance(2);
      \u0275\u0275property("outlined", true)("rounded", true);
      \u0275\u0275advance();
      \u0275\u0275property("outlined", true)("rounded", true);
      \u0275\u0275advance();
      \u0275\u0275property("rounded", true)("loading", ctx.printLoading)("disabled", ctx.printLoading);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading && ctx.facture ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading && !ctx.facture ? 15 : -1);
    }
  }, dependencies: [CommonModule, NgClass, FormsModule, NgControlStatus, NgModel, ToastModule, Toast, ButtonModule, ButtonDirective, ButtonLabel, InputNumberModule, InputNumber, SelectModule, Select, SkeletonModule, Skeleton, TooltipModule, Tooltip, PhoneFormatPipe], styles: ["\n\n.vente-facture3-topbar[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.vente-facture3-mobile-header[_ngcontent-%COMP%] {\n  display: none;\n}\n.vente-facture3-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n#vente-facture3-invoice[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.vente-status-ribbon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: -2.3rem;\n  z-index: 3;\n  width: 7.9rem;\n  padding: 0.22rem 0.45rem;\n  transform: rotate(40deg);\n  transform-origin: center;\n  text-align: center;\n  font-size: 0.65rem;\n  font-weight: 900;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #ffffff;\n  pointer-events: none;\n  box-shadow: 0 6px 14px rgba(15, 23, 42, 0.16);\n}\n.vente-status-ribbon.status-payee[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.vente-status-ribbon.status-partielle[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.vente-status-ribbon.status-impayee[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.vente-status-ribbon.status-annulee[_ngcontent-%COMP%] {\n  background: #6b7280;\n}\n@media (max-width: 768px) {\n  .vente-facture3-topbar[_ngcontent-%COMP%] {\n    justify-content: space-between;\n    margin-bottom: 0.75rem;\n    gap: 0.5rem;\n  }\n  .vente-facture3-mobile-header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.55rem;\n    flex: 1;\n    min-width: 0;\n  }\n  .vente-facture3-mobile-back[_ngcontent-%COMP%] {\n    width: 2.25rem;\n    height: 2.25rem;\n    border-radius: 50%;\n    flex-shrink: 0;\n    color: var(--p-primary-color) !important;\n    background: rgba(95, 107, 255, 0.1) !important;\n  }\n  .vente-facture3-mobile-title-wrap[_ngcontent-%COMP%] {\n    min-width: 0;\n    flex: 1;\n  }\n  .vente-facture3-mobile-title[_ngcontent-%COMP%] {\n    margin: 0;\n    font-size: 1.1rem;\n    line-height: 1.2;\n    font-weight: 700;\n    color: var(--p-surface-900);\n  }\n  .vente-facture3-mobile-subtitle[_ngcontent-%COMP%] {\n    margin: 0.1rem 0 0;\n    font-size: 0.78rem;\n    line-height: 1.2;\n    color: var(--p-surface-500);\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .app-dark[_nghost-%COMP%]   .vente-facture3-mobile-title[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .vente-facture3-mobile-title[_ngcontent-%COMP%] {\n    color: var(--p-surface-100);\n  }\n  .app-dark[_nghost-%COMP%]   .vente-facture3-mobile-subtitle[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .vente-facture3-mobile-subtitle[_ngcontent-%COMP%] {\n    color: var(--p-surface-400);\n  }\n  [_nghost-%COMP%]     .vente-facture3-desktop-only {\n    display: none !important;\n  }\n  .vente-facture3-actions[_ngcontent-%COMP%] {\n    gap: 0.5rem;\n    flex-shrink: 0;\n  }\n  .vente-status-ribbon[_ngcontent-%COMP%] {\n    top: 0.55rem;\n    right: -2.1rem;\n    width: 8.6rem;\n    font-size: 0.64rem;\n    padding: 0.24rem 0.45rem;\n    transform: rotate(36deg);\n  }\n}\n@media print {\n  .vente-facture3-actions[_ngcontent-%COMP%], \n   .vente-facture3-sidepanel[_ngcontent-%COMP%], \n   .vente-facture3-topbar[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .vente-facture3-layout[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .vente-facture3-main[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  #vente-facture3-invoice[_ngcontent-%COMP%] {\n    padding: 0 !important;\n    border: 0 !important;\n    box-shadow: none !important;\n  }\n}\n/*# sourceMappingURL=facture-vente-detail3.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FactureVenteDetail3, [{
    type: Component,
    args: [{ selector: "app-facture-vente-detail3", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ToastModule,
      ButtonModule,
      InputNumberModule,
      SelectModule,
      SkeletonModule,
      TooltipModule,
      PhoneFormatPipe
    ], providers: [MessageService], template: `<p-toast position="top-right" appendTo="body" [baseZIndex]="1100" [preventOpenDuplicates]="true" />

<div class="vente-facture3-topbar">
    <header class="vente-facture3-mobile-header">
        <button
            pButton
            pRipple
            type="button"
            icon="pi pi-arrow-left"
            class="p-button-rounded p-button-text vente-facture3-mobile-back"
            aria-label="Retour aux factures"
            [loading]="backNavigating"
            [disabled]="backNavigating"
            (click)="goBack()"
        ></button>
        <div class="vente-facture3-mobile-title-wrap">
            <h1 class="vente-facture3-mobile-title">Facture vente</h1>
            <p class="vente-facture3-mobile-subtitle">{{ factureNumero }}</p>
        </div>
    </header>

    <div class="vente-facture3-actions">
        <button
            pButton
            type="button"
            icon="pi pi-arrows-h"
            severity="primary"
            [outlined]="true"
            [rounded]="true"
            class="vente-facture3-desktop-only"
            pTooltip="Fermer/Ouvrir menu"
            tooltipPosition="top"
            (click)="toggleSidebar()"
        ></button>
        <button
            pButton
            type="button"
            icon="pi pi-download"
            severity="primary"
            [outlined]="true"
            [rounded]="true"
            pTooltip="Telecharger la facture"
            tooltipPosition="top"
            (click)="downloadInvoice()"
        ></button>
        <button
            pButton
            type="button"
            icon="pi pi-print"
            severity="primary"
            [rounded]="true"
            [loading]="printLoading"
            [disabled]="printLoading"
            pTooltip="Imprimer la facture"
            tooltipPosition="top"
            (click)="printInvoice()"
        ></button>
    </div>
</div>

@if (loading) {
    <div class="card py-8 px-6 md:py-12 md:px-10">
        <div class="flex flex-col gap-4">
            <p-skeleton width="16rem" height="2rem" />
            <p-skeleton width="10rem" height="1rem" />
            <p-skeleton width="100%" height="12rem" />
        </div>
    </div>
}

@if (!loading && facture) {
    <div class="vente-facture3-layout w-full flex flex-col md:flex-row items-start gap-6">
        <div class="vente-facture3-main w-full md:flex-1">
            <div id="vente-facture3-invoice" class="card py-20 px-12 md:px-20 overflow-visible">
                <div class="vente-status-ribbon" [ngClass]="factureStatutClass">
                    {{ factureStatutLabel }}
                </div>

                <div class="flex flex-col items-start md:flex-row md:items-center md:justify-between border-b border-surface-200 dark:border-surface-700 pb-8 min-w-max">
                    <div class="flex flex-col">
                        <svg
                            width="48"
                            height="50"
                            viewBox="0 0 48 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M33.1548 9.65956L23.9913 4.86169L5.54723 14.5106L0.924465 12.0851L23.9913 0L37.801 7.23403L33.1548 9.65956ZM23.9931 19.3085L42.4255 9.65955L47.0717 12.0851L23.9931 24.1595L10.1952 16.9361L14.8297 14.5106L23.9931 19.3085ZM4.6345 25.8937L0 23.4681V37.9149L23.0669 50V45.1489L4.6345 35.4894V25.8937ZM18.4324 28.2658L0 18.6169V13.7658L23.0669 25.8403V40.2977L18.4324 37.8615V28.2658ZM38.7301 23.468V18.6169L24.9205 25.8403V49.9999L29.555 47.5743V28.2659L38.7301 23.468ZM43.3546 35.4892V16.1914L48.0008 13.7659V37.9148L34.1912 45.1488V40.2977L43.3546 35.4892Z"
                                fill="var(--p-primary-color)"
                            />
                        </svg>
                        <div class="my-4 text-4xl font-bold text-surface-900 dark:text-surface-0">
                            EAU-LA-MAMAN
                        </div>
                        <span class="mb-2">{{ usineNom }}</span>
                        @if (usineAdresse) {
                            <span>{{ usineAdresse }}</span>
                        }
                    </div>

                    <div class="flex flex-col mt-8 md:mt-0">
                        <div class="text-2xl font-semibold text-left md:text-right mb-4">
                            FACTURE VENTE
                        </div>
                        <div class="flex flex-col">
                            <div class="flex justify-between items-center mb-2">
                                <span class="font-semibold mr-12">DATE</span>
                                <span>{{ factureDate }}</span>
                            </div>
                            <div class="flex justify-between items-center mb-2">
                                <span class="font-semibold mr-12">FACTURE #</span>
                                <span>{{ factureNumero }}</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="font-semibold mr-12">N&deg; COMMANDE</span>
                                <span>{{ commandeNumero }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-8 mb-20 flex flex-col">
                    <div class="mb-4 text-2xl font-medium">Vehicule / Client</div>
                    <span class="mb-2">{{ vehiculeNom }}</span>
                    <span class="mb-2">{{ vehiculeImmatriculation }}</span>
                    <span class="mb-2">Proprietaire: {{ proprietaireNom }}</span>
                    @if (proprietairePhone) {
                        <span class="mb-2">{{ proprietairePhone | phoneFormat:'INT' }}</span>
                    }
                    <span class="mb-2">Livreur: {{ livreurNom }}</span>
                    @if (livreurPhone) {
                        <span>{{ livreurPhone | phoneFormat:'INT' }}</span>
                    }
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full" style="border-collapse: collapse; table-layout: auto">
                        <thead>
                            <tr>
                                <th class="text-left font-semibold py-4 border-b border-surface-200 dark:border-surface-700 whitespace-nowrap">
                                    Description
                                </th>
                                <th class="text-right font-semibold py-4 border-b border-surface-200 dark:border-surface-700 whitespace-nowrap px-4">
                                    Quantite
                                </th>
                                <th class="text-right font-semibold py-4 border-b border-surface-200 dark:border-surface-700 whitespace-nowrap px-4">
                                    Prix unitaire
                                </th>
                                <th class="text-right font-semibold py-4 border-b border-surface-200 dark:border-surface-700 whitespace-nowrap">
                                    Total ligne
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            @if (lignes.length > 0) {
                                @for (ligne of lignes; track ligne.id) {
                                    <tr>
                                        <td class="text-left py-4 border-b border-surface-200 dark:border-surface-700 whitespace-nowrap">
                                            {{ ligne.produit?.nom || 'Produit' }}
                                        </td>
                                        <td class="text-right py-4 border-b border-surface-200 dark:border-surface-700 px-4">
                                            {{ ligne.qte }}
                                        </td>
                                        <td class="text-right py-4 border-b border-surface-200 dark:border-surface-700 px-4">
                                            {{ formatAmount(getPrixUnitaire(ligne)) }}
                                        </td>
                                        <td class="text-right py-4 border-b border-surface-200 dark:border-surface-700">
                                            {{ formatAmount(ligne.total_ligne) }}
                                        </td>
                                    </tr>
                                }
                            } @else {
                                <tr>
                                    <td class="text-left py-4 border-b border-surface-200 dark:border-surface-700" colspan="4">
                                        Aucune ligne de commande disponible.
                                    </td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>

                <div class="flex flex-col md:flex-row md:items-start md:justify-between mt-20">
                    <div class="flex flex-col mb-4 md:mb-0">
                        <div class="font-semibold mb-2">NOTES</div>
                        @if (notes !== '-') {
                            <span class="text-surface-600 dark:text-surface-300 max-w-xs text-sm">{{ notes }}</span>
                        }
                    </div>
                    <div class="flex flex-col">
                        <div class="flex justify-between items-center mb-2">
                            <span class="font-semibold mr-12">SUBTOTAL</span>
                            <span>{{ formatAmount(sousTotal) }}</span>
                        </div>
                        <div class="flex justify-between items-center mb-2">
                            <span class="font-semibold mr-12">TVA #</span>
                            <span>0</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="font-semibold mr-12">TOTAL</span>
                            <span>{{ formatAmount(totalFacture) }}</span>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row md:items-start md:justify-between mt-20">
                    <div class="font-semibold mb-4 md:mb-0">Paiements</div>
                    <div class="flex flex-col">
                        <div class="flex justify-between items-center mb-2">
                            <span class="font-semibold mr-12">Montant paye</span>
                            <span>{{ formatAmount(montantPaye) }}</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="font-semibold mr-12">Reste a payer</span>
                            <span>{{ formatAmount(resteAPayer) }}</span>
                        </div>

                        @if (versementsAffiches.length > 0) {
                            <div class="flex flex-col gap-2 mt-4 pt-3 border-t border-surface-200 dark:border-surface-700">
                                @for (versement of versementsAffiches; track versement.id) {
                                    <div class="flex justify-between items-center gap-4 text-sm">
                                        <span class="text-surface-600 dark:text-surface-300">
                                            {{ formatDateDisplay(versement.date_encaissement) }} - {{ getModePaiementLabel(versement.mode_paiement) }}
                                        </span>
                                        <span class="font-medium text-surface-900 dark:text-surface-0">
                                            {{ formatAmount(versement.montant) }}
                                        </span>
                                    </div>
                                }
                            </div>
                        } @else {
                            <span class="mt-3 text-sm text-surface-500 dark:text-surface-400">Aucun versement</span>
                        }
                    </div>
                </div>
            </div>
        </div>

        <div class="vente-facture3-sidepanel w-full md:w-80 flex flex-col justify-start items-start gap-6">
            <div class="w-full p-4 md:p-6 rounded-lg border border-surface-200 dark:border-surface-700 flex flex-col justify-start items-start gap-4 md:gap-6 overflow-hidden bg-surface-0 dark:bg-surface-900">
                <div class="text-surface-900 dark:text-surface-0 text-base font-semibold leading-tight">Payer la facture</div>

                <div class="w-full py-2 flex flex-col justify-start items-start gap-3 md:gap-4">
                    @if (totalEspeces > 0) {
                        <div class="w-full flex justify-start items-start gap-2">
                            <div class="flex-1 text-surface-700 dark:text-surface-200 text-sm md:text-base font-normal leading-tight">Especes</div>
                            <div class="text-surface-900 dark:text-surface-0 text-sm md:text-base font-medium leading-tight">{{ formatAmount(totalEspeces) }}</div>
                        </div>
                    }
                    @if (totalMobile > 0) {
                        <div class="w-full flex justify-start items-start gap-2">
                            <div class="flex-1 text-surface-700 dark:text-surface-200 text-sm md:text-base font-normal leading-tight">Mobile</div>
                            <div class="text-surface-900 dark:text-surface-0 text-sm md:text-base font-medium leading-tight">{{ formatAmount(totalMobile) }}</div>
                        </div>
                    }
                    @if (totalBanque > 0) {
                        <div class="w-full flex justify-start items-start gap-2">
                            <div class="flex-1 text-surface-700 dark:text-surface-200 text-sm md:text-base font-normal leading-tight">Banque</div>
                            <div class="text-surface-900 dark:text-surface-0 text-sm md:text-base font-medium leading-tight">{{ formatAmount(totalBanque) }}</div>
                        </div>
                    }
                    @if (totalEncaisse === 0) {
                        <div class="w-full text-surface-500 dark:text-surface-400 text-sm leading-tight">Aucun versement</div>
                    }
                </div>

                <div class="w-full flex justify-start items-start">
                    <div class="flex-1 flex flex-col justify-start items-start">
                        <div class="w-full h-px bg-surface-200 dark:bg-surface-700"></div>
                    </div>
                </div>

                <div class="w-full flex justify-start items-start gap-2">
                    <div class="flex-1 text-surface-700 dark:text-surface-200 text-sm md:text-base font-normal leading-tight">Payee</div>
                    <div class="text-surface-900 dark:text-surface-0 text-sm md:text-base font-medium leading-tight">{{ formatAmount(montantPaye) }}</div>
                </div>
                <div class="w-full flex justify-start items-start gap-2">
                    <div class="flex-1 text-surface-700 dark:text-surface-200 text-sm md:text-base font-normal leading-tight">Reste</div>
                    <div class="text-orange-500 text-sm md:text-base font-medium leading-tight">{{ formatAmount(resteAPayer) }}</div>
                </div>

                <div class="w-full flex flex-col gap-2">
                    <label class="text-surface-900 dark:text-surface-0 text-sm font-medium">Montant a encaisser</label>
                    <p-inputnumber
                        [(ngModel)]="encaissementMontant"
                        [min]="1"
                        [max]="resteAPayer"
                        [invalid]="isEncaissementMontantExceedsReste"
                        [useGrouping]="true"
                        inputStyleClass="w-full"
                        styleClass="w-full"
                        suffix=" FG"
                        placeholder="0"
                    />
                    @if (isEncaissementMontantExceedsReste) {
                        <small class="text-red-500 text-xs">Le montant ne doit pas depasser le reste a payer ({{ formatAmount(resteAPayer) }}).</small>
                    }
                </div>

                <div class="w-full flex flex-col gap-2">
                    <label class="text-surface-900 dark:text-surface-0 text-sm font-medium">Mode de paiement</label>
                    <p-select
                        [(ngModel)]="encaissementMode"
                        [options]="modesPaiement"
                        optionLabel="label"
                        optionValue="value"
                        styleClass="w-full"
                        appendTo="body"
                    />
                </div>

                @if (!canCreateEncaissement) {
                    <small class="text-orange-500 text-xs">Permission encaissements.create requise.</small>
                }
            </div>

            <button pButton class="w-full" severity="primary" [disabled]="!canPay" [loading]="encaissementSaving" (click)="payer()">
                <span pButtonLabel>Payer</span>
            </button>
        </div>
    </div>
}

@if (!loading && !facture) {
    <div class="card p-8 text-center text-surface-500">
        Facture introuvable.
    </div>
}`, styles: ["/* src/app/pages/ventes/facture-vente-detail3/facture-vente-detail3.scss */\n.vente-facture3-topbar {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.vente-facture3-mobile-header {\n  display: none;\n}\n.vente-facture3-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n#vente-facture3-invoice {\n  position: relative;\n  overflow: hidden;\n}\n.vente-status-ribbon {\n  position: absolute;\n  top: 1rem;\n  right: -2.3rem;\n  z-index: 3;\n  width: 7.9rem;\n  padding: 0.22rem 0.45rem;\n  transform: rotate(40deg);\n  transform-origin: center;\n  text-align: center;\n  font-size: 0.65rem;\n  font-weight: 900;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #ffffff;\n  pointer-events: none;\n  box-shadow: 0 6px 14px rgba(15, 23, 42, 0.16);\n}\n.vente-status-ribbon.status-payee {\n  background: #16a34a;\n}\n.vente-status-ribbon.status-partielle {\n  background: #f59e0b;\n}\n.vente-status-ribbon.status-impayee {\n  background: #ef4444;\n}\n.vente-status-ribbon.status-annulee {\n  background: #6b7280;\n}\n@media (max-width: 768px) {\n  .vente-facture3-topbar {\n    justify-content: space-between;\n    margin-bottom: 0.75rem;\n    gap: 0.5rem;\n  }\n  .vente-facture3-mobile-header {\n    display: flex;\n    align-items: center;\n    gap: 0.55rem;\n    flex: 1;\n    min-width: 0;\n  }\n  .vente-facture3-mobile-back {\n    width: 2.25rem;\n    height: 2.25rem;\n    border-radius: 50%;\n    flex-shrink: 0;\n    color: var(--p-primary-color) !important;\n    background: rgba(95, 107, 255, 0.1) !important;\n  }\n  .vente-facture3-mobile-title-wrap {\n    min-width: 0;\n    flex: 1;\n  }\n  .vente-facture3-mobile-title {\n    margin: 0;\n    font-size: 1.1rem;\n    line-height: 1.2;\n    font-weight: 700;\n    color: var(--p-surface-900);\n  }\n  .vente-facture3-mobile-subtitle {\n    margin: 0.1rem 0 0;\n    font-size: 0.78rem;\n    line-height: 1.2;\n    color: var(--p-surface-500);\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  :host-context(.app-dark) .vente-facture3-mobile-title {\n    color: var(--p-surface-100);\n  }\n  :host-context(.app-dark) .vente-facture3-mobile-subtitle {\n    color: var(--p-surface-400);\n  }\n  :host ::ng-deep .vente-facture3-desktop-only {\n    display: none !important;\n  }\n  .vente-facture3-actions {\n    gap: 0.5rem;\n    flex-shrink: 0;\n  }\n  .vente-status-ribbon {\n    top: 0.55rem;\n    right: -2.1rem;\n    width: 8.6rem;\n    font-size: 0.64rem;\n    padding: 0.24rem 0.45rem;\n    transform: rotate(36deg);\n  }\n}\n@media print {\n  .vente-facture3-actions,\n  .vente-facture3-sidepanel,\n  .vente-facture3-topbar {\n    display: none !important;\n  }\n  .vente-facture3-layout {\n    display: block !important;\n  }\n  .vente-facture3-main {\n    width: 100% !important;\n  }\n  #vente-facture3-invoice {\n    padding: 0 !important;\n    border: 0 !important;\n    box-shadow: none !important;\n  }\n}\n/*# sourceMappingURL=facture-vente-detail3.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: LayoutService }, { type: FactureLivraisonService }, { type: CommandeVenteService }, { type: UsineContextService }, { type: UsineService }, { type: AuthService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FactureVenteDetail3, { className: "FactureVenteDetail3", filePath: "src/app/pages/ventes/facture-vente-detail3/facture-vente-detail3.ts", lineNumber: 50 });
})();
export {
  FactureVenteDetail3
};
//# sourceMappingURL=chunk-T5PGWVI5.js.map
