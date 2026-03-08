import {
  CommandeVenteService
} from "./chunk-L5SNKCQB.js";
import {
  FactureLivraisonService
} from "./chunk-3HIBHJ7P.js";
import {
  MODE_PAIEMENT_OPTIONS,
  STATUT_FACTURE_LABELS
} from "./chunk-ZJQGPEDN.js";
import {
  MoneyPipe
} from "./chunk-EEHAP46F.js";
import {
  PhoneFormatPipe
} from "./chunk-JL62XEMH.js";
import {
  Dialog,
  DialogModule
} from "./chunk-Y2EGS7AG.js";
import "./chunk-WEV7CZZY.js";
import {
  Toast,
  ToastModule
} from "./chunk-SXI4YLKA.js";
import "./chunk-2W47BJ2H.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-6PLIE4IB.js";
import "./chunk-UK6LIBRF.js";
import "./chunk-CSVYKJ4F.js";
import {
  DatePicker,
  DatePickerModule
} from "./chunk-LFMBOSV6.js";
import "./chunk-WBWDQQZU.js";
import "./chunk-F3L5EVFN.js";
import "./chunk-6MLBYEBX.js";
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
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel
} from "./chunk-ZPTU3HTV.js";
import "./chunk-CZVP2Z6G.js";
import "./chunk-6FDWWH3U.js";
import "./chunk-3MAO4O33.js";
import "./chunk-U7PUKEXO.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-5YV6R2XG.js";
import {
  Button,
  ButtonModule
} from "./chunk-DU54A2AA.js";
import "./chunk-2LRC5QRK.js";
import "./chunk-GZRFJIKZ.js";
import "./chunk-4SQYV2UP.js";
import {
  MessageService
} from "./chunk-6E6G4HCZ.js";
import {
  CommonModule
} from "./chunk-SHRV3VYN.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
  computed,
  setClassMetadata,
  signal,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-DSAAE4AM.js";
import "./chunk-4MWRP73S.js";

// src/app/pages/ventes/commande-vente-detail2/commande-vente-detail2.ts
var _c0 = () => ({ width: "44rem", maxWidth: "100vw" });
var _c1 = () => ({ width: "32rem", maxWidth: "95vw" });
var _c2 = () => ({ "960px": "95vw" });
var _forTrack0 = ($index, $item) => $item.id;
function CommandeVenteDetail2_Conditional_11_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " par ");
    \u0275\u0275elementStart(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const info_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", info_r2.annulee_par.prenom, " ", info_r2.annulee_par.nom);
  }
}
function CommandeVenteDetail2_Conditional_11_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 53);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, CommandeVenteDetail2_Conditional_11_Conditional_5_Conditional_2_Template, 3, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const info_r2 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Le ", ctx_r2.formatDateTime(info_r2.annulee_at), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(info_r2.annulee_par ? 2 : -1);
  }
}
function CommandeVenteDetail2_Conditional_11_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const info_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Motif : ", info_r2.motif_annulation);
  }
}
function CommandeVenteDetail2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "i", 50);
    \u0275\u0275elementStart(2, "div", 51)(3, "p", 52);
    \u0275\u0275text(4, "Commande annulee");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, CommandeVenteDetail2_Conditional_11_Conditional_5_Template, 3, 2, "p", 53);
    \u0275\u0275conditionalCreate(6, CommandeVenteDetail2_Conditional_11_Conditional_6_Template, 2, 1, "p", 54);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const info_r2 = ctx;
    \u0275\u0275advance(5);
    \u0275\u0275conditional(info_r2.annulee_at ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(info_r2.motif_annulation ? 6 : -1);
  }
}
function CommandeVenteDetail2_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "p-button", 55);
    \u0275\u0275listener("onClick", function CommandeVenteDetail2_Conditional_23_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openEncaissementDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 56)(3, "p-button", 19);
    \u0275\u0275listener("onClick", function CommandeVenteDetail2_Conditional_23_Template_p_button_onClick_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goFacture());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 18)(5, "p-button", 57);
    \u0275\u0275listener("onClick", function CommandeVenteDetail2_Conditional_23_Template_p_button_onClick_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openAnnulationDialog());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.restantDu() === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("outlined", true)("disabled", !((tmp_5_0 = ctx_r2.commande()) == null ? null : tmp_5_0.facture == null ? null : tmp_5_0.facture.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("outlined", true)("disabled", !ctx_r2.canAnnuler());
  }
}
function CommandeVenteDetail2_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 58)(2, "div", 59);
    \u0275\u0275element(3, "i", 60);
    \u0275\u0275elementStart(4, "h3", 61);
    \u0275\u0275text(5, "Informations");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 62)(7, "div", 63)(8, "div", 64);
    \u0275\u0275text(9, "Resume");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 65)(11, "div")(12, "span", 66);
    \u0275\u0275text(13, "Date creation:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div")(16, "span", 66);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div")(20, "span", 66);
    \u0275\u0275text(21, "Phone:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "phoneFormat");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div")(25, "div", 64);
    \u0275\u0275text(26, "Vehicule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 65)(28, "div")(29, "span", 66);
    \u0275\u0275text(30, "Nom vehicule:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div")(33, "span", 66);
    \u0275\u0275text(34, "Immatriculation:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div")(37, "div", 64);
    \u0275\u0275text(38, "Livreur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 65)(40, "div");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div");
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "phoneFormat");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const info_r5 = ctx;
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate1(" ", info_r5.createdAtLabel);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r5.creatorLabel);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", info_r5.creatorNom, " ", info_r5.creatorPrenom);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 9, info_r5.creatorPhone));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", info_r5.vehiculeNom);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", info_r5.vehiculeImmatriculation);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(info_r5.livreurNom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 11, info_r5.livreurPhone));
  }
}
function CommandeVenteDetail2_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 23);
    \u0275\u0275element(1, "img", 67);
    \u0275\u0275elementStart(2, "div", 68)(3, "div", 69)(4, "div", 70)(5, "div", 35)(6, "h3", 71);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 72);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "money");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 73)(12, "span", 31);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a", 74);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 75);
    \u0275\u0275element(18, "p-select", 76);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const product_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", product_r6.imageUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(product_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Prix unitaire: ", \u0275\u0275pipeBind3(10, 7, product_r6.unitPrice, "GNF", true));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(14, 11, product_r6.totalLigne, "GNF", true));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", product_r6.quantity, " unite(s) ");
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r2.quantityOptionFor(product_r6.quantity))("ngModel", product_r6.quantity);
  }
}
function CommandeVenteDetail2_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "p-button", 77);
    \u0275\u0275listener("onClick", function CommandeVenteDetail2_Conditional_53_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openAnnulationDialog());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("outlined", true)("disabled", !ctx_r2.canAnnuler());
  }
}
function CommandeVenteDetail2_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "label", 40);
    \u0275\u0275text(2, "Date ");
    \u0275\u0275elementStart(3, "span", 37);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p-datepicker", 78);
    \u0275\u0275twoWayListener("ngModelChange", function CommandeVenteDetail2_Conditional_71_Template_p_datepicker_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.encaissementDate, $event) || (ctx_r2.encaissementDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.encaissementDate);
  }
}
function CommandeVenteDetail2_ng_template_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 79)(1, "p-button", 80);
    \u0275\u0275listener("onClick", function CommandeVenteDetail2_ng_template_72_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.encaissementDialogVisible = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-button", 81);
    \u0275\u0275listener("onClick", function CommandeVenteDetail2_ng_template_72_Template_p_button_onClick_2_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmerEncaissement());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("outlined", true)("disabled", ctx_r2.encaissementLoading);
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r2.encaissementLoading)("disabled", !ctx_r2.encaissementMontant || !ctx_r2.encaissementMode);
  }
}
function CommandeVenteDetail2_ng_template_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 82);
    \u0275\u0275listener("onClick", function CommandeVenteDetail2_ng_template_91_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.annulationDialogVisible = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 83);
    \u0275\u0275listener("onClick", function CommandeVenteDetail2_ng_template_91_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmerAnnulation());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("outlined", true)("disabled", ctx_r2.annulationLoading);
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r2.annulationLoading)("disabled", !ctx_r2.motifAnnulation.trim());
  }
}
var CommandeVenteDetail2 = class _CommandeVenteDetail2 {
  route;
  router;
  commandeService;
  factureService;
  messageService;
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  commande = signal(null, ...ngDevMode ? [{ debugName: "commande" }] : []);
  // Annulation dialog state
  annulationDialogVisible = false;
  annulationLoading = false;
  motifAnnulation = "";
  // Encaissement dialog state
  encaissementDialogVisible = false;
  encaissementLoading = false;
  encaissementMontant = null;
  encaissementMode = null;
  encaissementDate = null;
  encaissementNote = "";
  modePaiementOptions = MODE_PAIEMENT_OPTIONS;
  products = computed(() => (this.commande()?.lignes ?? []).map((ligne) => {
    const prixUnitaire = this.toNumber(ligne.prix_vente_snapshot);
    const totalFromApi = this.toNumber(ligne.total_ligne);
    const totalLigne = Number.isFinite(totalFromApi) ? totalFromApi : prixUnitaire * Math.max(1, ligne.qte ?? 1);
    const rawImage = ligne.produit?.image_url;
    const imageUrl = rawImage ? rawImage.startsWith("http://") || rawImage.startsWith("https://") ? rawImage : `assets/demo/images/produits/${rawImage}` : "assets/demo/images/no-product.png";
    return {
      id: ligne.id,
      name: ligne.produit?.nom ?? `Produit #${ligne.produit_id}`,
      unitPrice: Number.isFinite(prixUnitaire) ? prixUnitaire : 0,
      quantity: Math.max(1, ligne.qte ?? 1),
      totalLigne,
      imageUrl
    };
  }), ...ngDevMode ? [{ debugName: "products" }] : []);
  isAnnulee = computed(() => this.commande()?.statut === "annulee", ...ngDevMode ? [{ debugName: "isAnnulee" }] : []);
  statutLabel = computed(() => {
    const statut = this.commande()?.facture?.statut_facture;
    return statut ? this.getStatutLabel(statut) : "Impayee";
  }, ...ngDevMode ? [{ debugName: "statutLabel" }] : []);
  canAnnuler = computed(() => {
    if (this.isAnnulee())
      return false;
    const statut = this.commande()?.facture?.statut_facture;
    return !statut || statut === "impayee";
  }, ...ngDevMode ? [{ debugName: "canAnnuler" }] : []);
  statutBadgeClass = computed(() => {
    const statut = this.commande()?.facture?.statut_facture;
    switch (statut) {
      case "payee":
        return "border-green-200 bg-green-50 text-green-700 dark:border-green-500/40 dark:bg-green-500/15 dark:text-green-300";
      case "partiel":
        return "border-orange-200 bg-orange-50 text-orange-700 dark:border-orange-500/40 dark:bg-orange-500/15 dark:text-orange-300";
      case "annulee":
        return "border-surface-300 bg-surface-100 text-surface-700 dark:border-surface-500/40 dark:bg-surface-500/15 dark:text-surface-200";
      case "impayee":
      default:
        return "border-red-200 bg-red-50 text-red-700 dark:border-red-500/40 dark:bg-red-500/15 dark:text-red-300";
    }
  }, ...ngDevMode ? [{ debugName: "statutBadgeClass" }] : []);
  restantDu = computed(() => {
    const commande = this.commande();
    if (!commande)
      return 0;
    const restantFacture = commande.facture?.montant_restant;
    if (typeof restantFacture === "number" && Number.isFinite(restantFacture)) {
      return Math.max(0, restantFacture);
    }
    const total = this.toNumber(commande.total_commande);
    const encaisse = this.toNumber(commande.facture?.montant_encaisse ?? 0);
    if (!Number.isFinite(total))
      return 0;
    const safeEncaisse = Number.isFinite(encaisse) ? encaisse : 0;
    return Math.max(0, total - safeEncaisse);
  }, ...ngDevMode ? [{ debugName: "restantDu" }] : []);
  restantToneClass = computed(() => this.restantDu() > 0 ? "text-red-600 dark:text-red-300" : "text-green-600 dark:text-green-300", ...ngDevMode ? [{ debugName: "restantToneClass" }] : []);
  encaisseToneClass = computed(() => {
    const encaisse = this.toNumber(this.commande()?.facture?.montant_encaisse ?? 0);
    return Number.isFinite(encaisse) && encaisse > 0 ? "text-green-600 dark:text-green-300" : "text-surface-900 dark:text-surface-0";
  }, ...ngDevMode ? [{ debugName: "encaisseToneClass" }] : []);
  livreurNom = computed(() => {
    const livreur = this.commande()?.vehicule?.livreurPrincipal ?? this.commande()?.vehicule?.livreur_principal;
    if (!livreur)
      return "-";
    return `${livreur.prenom} ${livreur.nom}`.trim() || "-";
  }, ...ngDevMode ? [{ debugName: "livreurNom" }] : []);
  livreurPhone = computed(() => {
    const livreur = this.commande()?.vehicule?.livreurPrincipal ?? this.commande()?.vehicule?.livreur_principal;
    return livreur?.phone ?? "-";
  }, ...ngDevMode ? [{ debugName: "livreurPhone" }] : []);
  vehiculeNom = computed(() => this.commande()?.vehicule?.nom_vehicule ?? "-", ...ngDevMode ? [{ debugName: "vehiculeNom" }] : []);
  annulationInfo = computed(() => {
    const c = this.commande();
    if (!c || c.statut !== "annulee")
      return null;
    return {
      annulee_at: c.annulee_at,
      annulee_par: c.annulee_par,
      motif_annulation: c.motif_annulation
    };
  }, ...ngDevMode ? [{ debugName: "annulationInfo" }] : []);
  informationPanel = computed(() => {
    const commande = this.commande();
    if (!commande)
      return null;
    const creator = this.extractCreatorInfo(commande);
    const vehicule = commande.vehicule;
    return {
      createdAtLabel: this.formatDateTime(commande.created_at),
      creatorLabel: creator.label,
      creatorNom: creator.nom,
      creatorPrenom: creator.prenom,
      creatorPhone: creator.phone,
      vehiculeNom: vehicule?.nom_vehicule ?? "-",
      vehiculeImmatriculation: vehicule?.immatriculation ?? "-",
      livreurNom: this.livreurNom(),
      livreurPhone: this.livreurPhone()
    };
  }, ...ngDevMode ? [{ debugName: "informationPanel" }] : []);
  constructor(route, router, commandeService, factureService, messageService) {
    this.route = route;
    this.router = router;
    this.commandeService = commandeService;
    this.factureService = factureService;
    this.messageService = messageService;
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    if (!id) {
      this.router.navigate(["/ventes/commandes"]);
      return;
    }
    this.loadCommande(id);
  }
  goBack() {
    this.router.navigate(["/ventes/commandes"]);
  }
  openEncaissementDialog() {
    this.encaissementMontant = this.restantDu() > 0 ? this.restantDu() : null;
    this.encaissementMode = "especes";
    this.encaissementDate = /* @__PURE__ */ new Date();
    this.encaissementNote = "";
    this.encaissementDialogVisible = true;
  }
  confirmerEncaissement() {
    const factureId = this.commande()?.facture?.id;
    if (!factureId || !this.encaissementMontant || !this.encaissementMode)
      return;
    const selectedDate = this.encaissementDate ?? /* @__PURE__ */ new Date();
    this.encaissementDate = selectedDate;
    this.encaissementLoading = true;
    const dto = {
      facture_vente_id: factureId,
      montant: this.encaissementMontant,
      date_encaissement: selectedDate.toISOString().split("T")[0],
      mode_paiement: this.encaissementMode,
      note: this.encaissementNote.trim() || void 0
    };
    this.factureService.createEncaissement(dto).subscribe({
      next: () => {
        this.encaissementLoading = false;
        this.encaissementDialogVisible = false;
        this.messageService.add({ severity: "success", summary: "Encaissement enregistr\xE9", life: 3e3 });
        const id = this.commande()?.id;
        if (id)
          this.loadCommande(id);
      },
      error: (err) => {
        this.encaissementLoading = false;
        const msg = err?.error?.message ?? "Une erreur est survenue.";
        this.messageService.add({ severity: "error", summary: "Erreur", detail: msg, life: 5e3 });
      }
    });
  }
  openAnnulationDialog() {
    this.motifAnnulation = "";
    this.annulationDialogVisible = true;
  }
  confirmerAnnulation() {
    const id = this.commande()?.id;
    if (!id || this.annulationLoading || !this.motifAnnulation.trim())
      return;
    this.annulationLoading = true;
    this.commandeService.annulerCommande(id, { motif_annulation: this.motifAnnulation.trim() }).subscribe({
      next: (resp) => {
        this.annulationLoading = false;
        this.annulationDialogVisible = false;
        this.commande.set(resp.data ?? null);
        this.messageService.add({
          severity: "success",
          summary: "Commande annul\xE9e",
          detail: "La commande a \xE9t\xE9 annul\xE9e et les stocks ont \xE9t\xE9 restaur\xE9s.",
          life: 4e3
        });
      },
      error: (err) => {
        this.annulationLoading = false;
        const msg = err?.error?.message ?? "Une erreur est survenue lors de l'annulation.";
        this.messageService.add({ severity: "warn", summary: "Action impossible", detail: msg, life: 5e3 });
      }
    });
  }
  goFacture() {
    const factureId = this.commande()?.facture?.id;
    if (factureId) {
      this.router.navigate(["/ventes/factures-vente-detail3", factureId]);
    }
  }
  quantityOptionFor(quantity) {
    const safeValue = Math.max(1, quantity);
    return [{ label: String(safeValue), value: safeValue }];
  }
  getStatutLabel(s) {
    return STATUT_FACTURE_LABELS[s] ?? s;
  }
  shouldShowEncaissementDate() {
    if (!this.encaissementDate)
      return true;
    return !this.isToday(this.encaissementDate);
  }
  formatDateTime(d) {
    if (!d)
      return "-";
    return new Date(d).toLocaleString("fr-FR");
  }
  loadCommande(id) {
    this.loading.set(true);
    this.commandeService.getCommande(id).subscribe({
      next: (resp) => {
        this.commande.set(resp.data ?? null);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.router.navigate(["/ventes/commandes"]);
      }
    });
  }
  toNumber(value) {
    if (value == null || value === "")
      return Number.NaN;
    return typeof value === "string" ? Number.parseFloat(value) : value;
  }
  isToday(date) {
    const today = /* @__PURE__ */ new Date();
    return date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth() && date.getDate() === today.getDate();
  }
  extractCreatorInfo(commande) {
    const raw = commande;
    const updatedActor = this.toActor(commande.updated_by ?? commande.updated_by_user ?? raw?.updatedByUser ?? null);
    if (updatedActor) {
      return this.normalizeActorInfo(updatedActor, "Modifie par :");
    }
    const createdActor = this.toActor(commande.created_by ?? commande.created_by_user ?? commande.creator ?? raw?.createdByUser ?? raw?.creator ?? raw?.createur ?? raw?.user ?? null);
    if (createdActor) {
      return this.normalizeActorInfo(createdActor, "Cree par :");
    }
    return { label: "Cree par :", nom: "-", prenom: "-", phone: "-" };
  }
  toActor(source) {
    if (!source || typeof source !== "object")
      return null;
    return source;
  }
  normalizeActorInfo(source, label) {
    const raw = source;
    let nom = this.pickFirstString([source.nom, raw?.last_name, raw?.lastname]);
    let prenom = this.pickFirstString([source.prenom, raw?.first_name, raw?.firstname]);
    const fullName = this.pickFirstString([source.nom_complet, raw?.full_name, source.name]);
    const phone = this.pickFirstString([source.phone, raw?.telephone, raw?.tel]) ?? "-";
    if ((!nom || !prenom) && fullName) {
      const parts = fullName.split(/\s+/).filter(Boolean);
      if (!prenom && parts.length > 0)
        prenom = parts[0];
      if (!nom)
        nom = parts.length > 1 ? parts.slice(1).join(" ") : parts[0];
    }
    return {
      label,
      nom: nom ?? "-",
      prenom: prenom ?? "-",
      phone
    };
  }
  pickFirstString(values) {
    for (const value of values) {
      if (typeof value === "string") {
        const s = value.trim();
        if (s.length > 0)
          return s;
      }
    }
    return null;
  }
  static \u0275fac = function CommandeVenteDetail2_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CommandeVenteDetail2)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(CommandeVenteService), \u0275\u0275directiveInject(FactureLivraisonService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommandeVenteDetail2, selectors: [["app-commande-vente-detail2"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 93, vars: 60, consts: [["footer", ""], [1, "cv-detail2-page-wrap"], [1, "cv-detail2-mobile-header"], ["icon", "pi pi-arrow-left", "styleClass", "cv-detail2-mobile-back", 1, "cv-detail2-mobile-back-trigger", 3, "onClick", "text", "rounded"], [1, "cv-detail2-mobile-title-wrap"], [1, "cv-detail2-mobile-title"], [1, "cv-detail2-mobile-subtitle"], ["aria-hidden", "true", 1, "cv-detail2-mobile-spacer"], [1, "cv-detail2-content", "bg-surface-0", "dark:bg-surface-950", "px-4", "py-6", "sm:px-6", "sm:py-8", "md:px-12", "md:py-12", "lg:px-20", "xl:px-32"], [1, "flex", "items-start", "gap-4", "mb-6", "px-4", "py-4", "rounded-lg", "border", "border-red-200", "bg-red-50", "dark:border-red-500/40", "dark:bg-red-500/10"], [1, "flex", "flex-col", "items-start", "mb-8"], [1, "flex", "flex-col", "gap-3", "sm:flex-row", "sm:items-start", "sm:justify-between", "w-full", "mb-4"], [1, "cv-detail2-mobile-total", "md:hidden"], [1, "cv-detail2-mobile-total-amount"], [1, "cv-detail2-mobile-total-label"], [1, "hidden", "md:block", "text-surface-900", "dark:text-surface-0", "text-2xl", "md:text-3xl", "font-semibold", "leading-tight", "pr-0", "sm:pr-4"], [1, "flex", "gap-2", "shrink-0"], [1, "cv-detail2-reference-line", "hidden", "md:block", "text-surface-600", "dark:text-surface-200", "text-lg", "sm:text-xl", "leading-tight", "mb-6"], [1, "hidden", "md:block"], ["label", "Voir la facture", "icon", "pi pi-file", "severity", "secondary", 3, "onClick", "outlined", "disabled"], [1, "border", "border-surface-200", "dark:border-surface-700", "rounded-lg", "overflow-hidden", "mb-8"], [1, "border-t", "border-surface-200", "dark:border-surface-700", "mb-8"], [1, "list-none", "p-0", "m-0"], [1, "flex", "flex-col", "md:flex-row", "gap-5", "md:gap-6", "py-6", "sm:py-8"], [1, "border-t", "border-surface-200", "dark:border-surface-700", "mt-8", "mb-8"], [1, "flex", "flex-col", "gap-4", "mb-8"], [1, "flex", "justify-between", "items-center"], [1, "text-surface-900", "dark:text-surface-0", "leading-tight"], [1, "border-t", "border-surface-200", "dark:border-surface-700", "pt-6", "mb-4"], [1, "flex", "flex-col", "sm:flex-row", "sm:justify-between", "sm:items-center", "gap-2", "mb-4"], [1, "text-surface-900", "dark:text-surface-0", "text-lg", "sm:text-xl", "font-medium", "leading-tight"], [1, "text-surface-900", "dark:text-surface-0", "text-xl", "sm:text-2xl", "font-medium", "leading-tight"], [1, "cv-detail2-mobile-bottom-actions"], ["header", "Encaisser", "styleClass", "cv-encaissement-dialog", 3, "visibleChange", "visible", "modal", "draggable"], [1, "flex", "flex-col", "gap-6", "py-3"], [1, "flex", "flex-col", "gap-2"], [1, "font-bold", "text-xl"], [1, "text-red-500"], ["mode", "decimal", "suffix", " GNF", "styleClass", "w-full cv-encaissement-montant", "inputStyleClass", "cv-encaissement-montant-input text-4xl font-bold py-4", "placeholder", "Montant \xE0 encaisser", 3, "ngModelChange", "ngModel", "max", "min", "useGrouping"], [1, "text-sm", "text-surface-500", "font-semibold"], [1, "font-bold", "text-lg"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Choisir un mode", "styleClass", "w-full cv-encaissement-control", "appendTo", "body", 3, "ngModelChange", "ngModel", "options"], ["header", "Annuler la commande", 3, "visibleChange", "visible", "modal", "breakpoints", "draggable"], [1, "flex", "flex-col", "gap-4", "py-2"], [1, "flex", "items-start", "gap-3"], [1, "pi", "pi-ban", "text-red-500", "text-3xl", "flex-shrink-0", "mt-0.5"], [1, "m-0", "text-sm"], [1, "font-medium", "text-sm"], ["rows", "3", "maxlength", "500", "placeholder", "Indiquez le motif de l'annulation...", 1, "w-full", "text-sm", 2, "border", "1px solid var(--p-surface-300)", "border-radius", "6px", "padding", "0.5rem", "resize", "none", "outline", "none", "font-family", "inherit", "background", "var(--p-surface-0)", "color", "var(--p-surface-900)", 3, "ngModelChange", "ngModel"], [1, "text-surface-400"], [1, "pi", "pi-ban", "text-red-500", "text-2xl", "flex-shrink-0", "mt-0.5"], [1, "text-sm"], [1, "font-semibold", "text-red-700", "dark:text-red-300", "mb-1"], [1, "text-red-600", "dark:text-red-400", "mb-0.5"], [1, "text-red-600", "dark:text-red-400"], ["label", "Encaisser", "icon", "pi pi-wallet", 3, "onClick", "disabled"], [1, "md:hidden"], ["label", "Annuler", "icon", "pi pi-ban", "severity", "danger", 3, "onClick", "outlined", "disabled"], [1, "p-4", "bg-surface-50", "dark:bg-surface-800", "border-b", "border-surface-200", "dark:border-surface-700", "flex", "flex-col", "sm:flex-row", "sm:items-center", "sm:justify-between", "gap-3"], [1, "flex", "items-center", "gap-2"], [1, "pi", "pi-info-circle", "text-primary-500"], [1, "text-surface-900", "dark:text-surface-0", "text-base", "font-semibold", "leading-tight"], [1, "p-4", "sm:p-6", "grid", "grid-cols-1", "md:grid-cols-2", "xl:grid-cols-3", "gap-5", "sm:gap-6"], [1, "md:col-span-2", "xl:col-span-1"], [1, "text-surface-700", "dark:text-surface-300", "text-sm", "font-semibold", "mb-2"], [1, "text-surface-900", "dark:text-surface-0", "text-sm", "leading-6"], [1, "font-medium"], [1, "w-full", "sm:w-56", "md:w-50", "h-44", "sm:h-56", "md:h-50", "shrink-0", "rounded-lg", "object-cover", 3, "src"], [1, "flex-auto", "flex", "flex-col", "justify-between"], [1, "flex", "flex-col", "sm:flex-row", "gap-4"], [1, "flex-auto", "flex", "flex-col", "gap-4"], [1, "text-surface-900", "dark:text-surface-0", "text-xl", "font-medium", "leading-tight"], [1, "text-surface-600", "dark:text-surface-200", "leading-tight"], [1, "flex", "flex-col", "items-start", "sm:items-end", "gap-2", "sm:gap-4"], ["tabindex", "0", 1, "cursor-pointer", "text-surface-600", "dark:text-surface-200", "font-medium", "hover:text-primary", "transition-colors", "duration-300"], [1, "w-full", "md:w-56"], ["optionLabel", "label", "optionValue", "value", 1, "w-full", "sm:w-32", 3, "options", "ngModel"], ["label", "Annuler la commande", "icon", "pi pi-ban", "severity", "danger", "styleClass", "w-full justify-center", 3, "onClick", "outlined", "disabled"], ["dateFormat", "dd/mm/yy", "appendTo", "body", "styleClass", "w-full cv-encaissement-control", "inputStyleClass", "w-full cv-encaissement-control-input text-xl font-semibold py-3", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-between", "w-full"], ["label", "Annuler", "severity", "secondary", "size", "large", 3, "onClick", "outlined", "disabled"], ["label", "Confirmer", "icon", "pi pi-check", "size", "large", 3, "onClick", "loading", "disabled"], ["label", "Retour", "severity", "secondary", 3, "onClick", "outlined", "disabled"], ["label", "Confirmer l'annulation", "icon", "pi pi-ban", "severity", "danger", 3, "onClick", "loading", "disabled"]], template: function CommandeVenteDetail2_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "p-button", 3);
      \u0275\u0275listener("onClick", function CommandeVenteDetail2_Template_p_button_onClick_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.goBack());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "h1", 5);
      \u0275\u0275text(6, "Commande");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 6);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(9, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 8);
      \u0275\u0275conditionalCreate(11, CommandeVenteDetail2_Conditional_11_Template, 7, 2, "div", 9);
      \u0275\u0275elementStart(12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "div", 13);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "money");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 14);
      \u0275\u0275text(19, "Total de la commande");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "h1", 15);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "money");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(23, CommandeVenteDetail2_Conditional_23_Template, 6, 5, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "p", 17);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 18)(27, "p-button", 19);
      \u0275\u0275listener("onClick", function CommandeVenteDetail2_Template_p_button_onClick_27_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.goFacture());
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(28, CommandeVenteDetail2_Conditional_28_Template, 45, 13, "div", 20);
      \u0275\u0275element(29, "div", 21);
      \u0275\u0275elementStart(30, "ul", 22);
      \u0275\u0275repeaterCreate(31, CommandeVenteDetail2_For_32_Template, 19, 15, "li", 23, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275element(33, "div", 24);
      \u0275\u0275elementStart(34, "div", 25)(35, "div", 26)(36, "span", 27);
      \u0275\u0275text(37, "Statut");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "span", 27);
      \u0275\u0275text(39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 26)(41, "span", 27);
      \u0275\u0275text(42, "Deja encaisse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "span", 27);
      \u0275\u0275text(44);
      \u0275\u0275pipe(45, "money");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(46, "div", 28);
      \u0275\u0275elementStart(47, "div", 29)(48, "span", 30);
      \u0275\u0275text(49, "Restant a encaisser");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "span", 31);
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "money");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(53, CommandeVenteDetail2_Conditional_53_Template, 2, 2, "div", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "p-dialog", 33);
      \u0275\u0275twoWayListener("visibleChange", function CommandeVenteDetail2_Template_p_dialog_visibleChange_54_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.encaissementDialogVisible, $event) || (ctx.encaissementDialogVisible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(55, "div", 34)(56, "div", 35)(57, "label", 36);
      \u0275\u0275text(58, "Montant ");
      \u0275\u0275elementStart(59, "span", 37);
      \u0275\u0275text(60, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "p-inputnumber", 38);
      \u0275\u0275twoWayListener("ngModelChange", function CommandeVenteDetail2_Template_p_inputnumber_ngModelChange_61_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.encaissementMontant, $event) || (ctx.encaissementMontant = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "span", 39);
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "money");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div", 35)(66, "label", 40);
      \u0275\u0275text(67, "Mode de paiement ");
      \u0275\u0275elementStart(68, "span", 37);
      \u0275\u0275text(69, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "p-select", 41);
      \u0275\u0275twoWayListener("ngModelChange", function CommandeVenteDetail2_Template_p_select_ngModelChange_70_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.encaissementMode, $event) || (ctx.encaissementMode = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(71, CommandeVenteDetail2_Conditional_71_Template, 6, 1, "div", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275template(72, CommandeVenteDetail2_ng_template_72_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "p-dialog", 42);
      \u0275\u0275twoWayListener("visibleChange", function CommandeVenteDetail2_Template_p_dialog_visibleChange_74_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.annulationDialogVisible, $event) || (ctx.annulationDialogVisible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(75, "div", 43)(76, "div", 44);
      \u0275\u0275element(77, "i", 45);
      \u0275\u0275elementStart(78, "p", 46);
      \u0275\u0275text(79, " Annuler la commande ");
      \u0275\u0275elementStart(80, "strong");
      \u0275\u0275text(81);
      \u0275\u0275elementEnd();
      \u0275\u0275text(82, " ? Cette action est irreversible. Les stocks seront restaures et la facture sera annulee. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "div", 35)(84, "label", 47);
      \u0275\u0275text(85, "Motif d'annulation ");
      \u0275\u0275elementStart(86, "span", 37);
      \u0275\u0275text(87, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "textarea", 48);
      \u0275\u0275twoWayListener("ngModelChange", function CommandeVenteDetail2_Template_textarea_ngModelChange_88_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.motifAnnulation, $event) || (ctx.motifAnnulation = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "small", 49);
      \u0275\u0275text(90);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(91, CommandeVenteDetail2_ng_template_91_Template, 2, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_4_0;
      let tmp_5_0;
      let tmp_6_0;
      let tmp_7_0;
      let tmp_9_0;
      let tmp_11_0;
      let tmp_12_0;
      let tmp_15_0;
      let tmp_35_0;
      \u0275\u0275advance(3);
      \u0275\u0275property("text", true)("rounded", true);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(((tmp_4_0 = ctx.commande()) == null ? null : tmp_4_0.reference) ?? "Detail commande");
      \u0275\u0275advance(3);
      \u0275\u0275conditional((tmp_5_0 = ctx.annulationInfo()) ? 11 : -1, tmp_5_0);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(17, 37, (tmp_6_0 = ctx.commande()) == null ? null : tmp_6_0.total_commande, "GNF", true));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" Total de commande = ", \u0275\u0275pipeBind3(22, 41, (tmp_7_0 = ctx.commande()) == null ? null : tmp_7_0.total_commande, "GNF", true), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.isAnnulee() ? 23 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" N\xB0 ", ((tmp_9_0 = ctx.commande()) == null ? null : tmp_9_0.reference) ?? "-", ". ");
      \u0275\u0275advance(2);
      \u0275\u0275property("outlined", true)("disabled", !((tmp_11_0 = ctx.commande()) == null ? null : tmp_11_0.facture == null ? null : tmp_11_0.facture.id));
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_12_0 = ctx.informationPanel()) ? 28 : -1, tmp_12_0);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.products());
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.statutLabel());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(45, 45, ((tmp_15_0 = ctx.commande()) == null ? null : tmp_15_0.facture == null ? null : tmp_15_0.facture.montant_encaisse) ?? 0, "GNF", true));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(52, 49, ctx.restantDu(), "GNF", true));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.isAnnulee() ? 53 : -1);
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(57, _c0));
      \u0275\u0275twoWayProperty("visible", ctx.encaissementDialogVisible);
      \u0275\u0275property("modal", true)("draggable", false);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.encaissementMontant);
      \u0275\u0275property("max", ctx.restantDu())("min", 1)("useGrouping", true);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("Restant : ", \u0275\u0275pipeBind3(64, 53, ctx.restantDu(), "GNF", true));
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.encaissementMode);
      \u0275\u0275property("options", ctx.modePaiementOptions);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.shouldShowEncaissementDate() ? 71 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(58, _c1));
      \u0275\u0275twoWayProperty("visible", ctx.annulationDialogVisible);
      \u0275\u0275property("modal", true)("breakpoints", \u0275\u0275pureFunction0(59, _c2))("draggable", false);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate((tmp_35_0 = ctx.commande()) == null ? null : tmp_35_0.reference);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.motifAnnulation);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.motifAnnulation.length, "/500 caracteres");
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel, ButtonModule, Button, DialogModule, Dialog, SelectModule, Select, ToastModule, Toast, InputNumberModule, InputNumber, DatePickerModule, DatePicker, MoneyPipe, PhoneFormatPipe], styles: ["\n\n.cv-detail2-mobile-header[_ngcontent-%COMP%] {\n  display: none;\n}\n.cv-detail2-mobile-total[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n.cv-detail2-mobile-total-amount[_ngcontent-%COMP%] {\n  color: var(--p-surface-900);\n  font-size: 1.8rem;\n  font-weight: 800;\n  line-height: 1.05;\n  letter-spacing: 0.01em;\n}\n.cv-detail2-mobile-total-label[_ngcontent-%COMP%] {\n  margin-top: 0.35rem;\n  color: var(--p-surface-500);\n  font-size: 0.72rem;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n.app-dark[_nghost-%COMP%]   .cv-detail2-mobile-total-amount[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .cv-detail2-mobile-total-amount[_ngcontent-%COMP%] {\n  color: var(--p-surface-0);\n}\n.app-dark[_nghost-%COMP%]   .cv-detail2-mobile-total-label[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .cv-detail2-mobile-total-label[_ngcontent-%COMP%] {\n  color: var(--p-surface-400);\n}\n.cv-detail2-mobile-bottom-actions[_ngcontent-%COMP%] {\n  display: none;\n}\n[_nghost-%COMP%]     .cv-encaissement-dialog .p-dialog-content {\n  padding-top: 0.75rem;\n}\n[_nghost-%COMP%]     .cv-encaissement-dialog .cv-encaissement-montant .p-inputtext {\n  min-height: 4.2rem;\n  font-size: 2.25rem;\n  font-weight: 800;\n  line-height: 1.1;\n  padding-top: 0.85rem;\n  padding-bottom: 0.85rem;\n}\n[_nghost-%COMP%]     .cv-encaissement-dialog .cv-encaissement-control.p-select {\n  min-height: 3.4rem;\n  align-items: center;\n}\n[_nghost-%COMP%]     .cv-encaissement-dialog .cv-encaissement-control.p-select .p-select-label {\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n[_nghost-%COMP%]     .cv-encaissement-dialog .cv-encaissement-control .p-inputtext {\n  min-height: 3.4rem;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n@media (max-width: 768px) {\n  .cv-detail2-mobile-header[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr auto 1fr;\n    align-items: center;\n    column-gap: 0.55rem;\n    flex-shrink: 0;\n    padding: calc(0.5rem + env(safe-area-inset-top)) calc(0.875rem + env(safe-area-inset-right)) 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    margin: 0 -1rem;\n    margin-left: calc(-1rem - env(safe-area-inset-left));\n    margin-right: calc(-1rem - env(safe-area-inset-right));\n    background: var(--p-surface-0);\n    border-bottom: 1px solid var(--p-surface-200);\n    position: sticky;\n    top: 0;\n    z-index: 25;\n    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);\n  }\n  .cv-detail2-mobile-back-trigger[_ngcontent-%COMP%] {\n    justify-self: start;\n  }\n  .app-dark[_nghost-%COMP%]   .cv-detail2-mobile-header[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .cv-detail2-mobile-header[_ngcontent-%COMP%] {\n    background: var(--p-surface-900);\n    border-bottom-color: var(--p-surface-700);\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  }\n  [_nghost-%COMP%]     .cv-detail2-mobile-back.p-button {\n    width: 2.25rem;\n    height: 2.25rem;\n    border-radius: 50%;\n    flex-shrink: 0;\n    color: var(--p-primary-600) !important;\n    background: var(--p-primary-50) !important;\n  }\n  .cv-detail2-mobile-title-wrap[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n    text-align: center;\n  }\n  .cv-detail2-mobile-title[_ngcontent-%COMP%] {\n    margin: 0;\n    font-size: 1.25rem;\n    font-weight: 700;\n    color: var(--p-surface-800);\n    line-height: 1.1;\n  }\n  .cv-detail2-mobile-subtitle[_ngcontent-%COMP%] {\n    margin: 0.15rem 0 0;\n    font-size: 0.8rem;\n    font-weight: 500;\n    color: var(--p-surface-500);\n  }\n  .app-dark[_nghost-%COMP%]   .cv-detail2-mobile-title[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .cv-detail2-mobile-title[_ngcontent-%COMP%] {\n    color: var(--p-surface-0);\n  }\n  .app-dark[_nghost-%COMP%]   .cv-detail2-mobile-subtitle[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .cv-detail2-mobile-subtitle[_ngcontent-%COMP%] {\n    color: var(--p-surface-400);\n  }\n  .cv-detail2-mobile-spacer[_ngcontent-%COMP%] {\n    width: 2.25rem;\n    height: 2.25rem;\n    flex-shrink: 0;\n    justify-self: end;\n  }\n  .cv-detail2-reference-line[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .cv-detail2-content[_ngcontent-%COMP%] {\n    padding-top: 1rem !important;\n    padding-bottom: calc(1rem + env(safe-area-inset-bottom));\n  }\n  .cv-detail2-mobile-bottom-actions[_ngcontent-%COMP%] {\n    display: block;\n    position: sticky;\n    bottom: 0;\n    z-index: 8;\n    padding-top: 0.85rem;\n    padding-bottom: calc(0.85rem + env(safe-area-inset-bottom));\n    margin-top: 0.75rem;\n    background:\n      linear-gradient(\n        to top,\n        var(--p-surface-0) 75%,\n        rgba(255, 255, 255, 0));\n  }\n  .app-dark[_nghost-%COMP%]   .cv-detail2-mobile-bottom-actions[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .cv-detail2-mobile-bottom-actions[_ngcontent-%COMP%] {\n    background:\n      linear-gradient(\n        to top,\n        var(--p-surface-950) 75%,\n        rgba(15, 23, 42, 0));\n  }\n  [_nghost-%COMP%]     .cv-detail2-mobile-bottom-actions .p-button {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=commande-vente-detail2.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommandeVenteDetail2, [{
    type: Component,
    args: [{ selector: "app-commande-vente-detail2", standalone: true, imports: [CommonModule, FormsModule, ButtonModule, DialogModule, SelectModule, ToastModule, InputNumberModule, DatePickerModule, MoneyPipe, PhoneFormatPipe], providers: [MessageService], template: `<p-toast />

<div class="cv-detail2-page-wrap">
    <div class="cv-detail2-mobile-header">
        <p-button
            class="cv-detail2-mobile-back-trigger"
            [text]="true"
            [rounded]="true"
            icon="pi pi-arrow-left"
            styleClass="cv-detail2-mobile-back"
            (onClick)="goBack()"
        />
        <div class="cv-detail2-mobile-title-wrap">
            <h1 class="cv-detail2-mobile-title">Commande</h1>
            <p class="cv-detail2-mobile-subtitle">{{ commande()?.reference ?? 'Detail commande' }}</p>
        </div>
        <div class="cv-detail2-mobile-spacer" aria-hidden="true"></div>
    </div>

    <div class="cv-detail2-content bg-surface-0 dark:bg-surface-950 px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-12 lg:px-20 xl:px-32">
        @if (annulationInfo(); as info) {
            <div class="flex items-start gap-4 mb-6 px-4 py-4 rounded-lg border border-red-200 bg-red-50 dark:border-red-500/40 dark:bg-red-500/10">
                <i class="pi pi-ban text-red-500 text-2xl flex-shrink-0 mt-0.5"></i>
                <div class="text-sm">
                    <p class="font-semibold text-red-700 dark:text-red-300 mb-1">Commande annulee</p>
                    @if (info.annulee_at) {
                        <p class="text-red-600 dark:text-red-400 mb-0.5">
                            Le {{ formatDateTime(info.annulee_at) }}
                            @if (info.annulee_par) {
                                par <strong>{{ info.annulee_par.prenom }} {{ info.annulee_par.nom }}</strong>
                            }
                        </p>
                    }
                    @if (info.motif_annulation) {
                        <p class="text-red-600 dark:text-red-400">Motif : {{ info.motif_annulation }}</p>
                    }
                </div>
            </div>
        }

        <div class="flex flex-col items-start mb-8">
            <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between w-full mb-4">
                <div class="cv-detail2-mobile-total md:hidden">
                    <div class="cv-detail2-mobile-total-amount">{{ commande()?.total_commande | money:'GNF':true }}</div>
                    <div class="cv-detail2-mobile-total-label">Total de la commande</div>
                </div>
                <h1 class="hidden md:block text-surface-900 dark:text-surface-0 text-2xl md:text-3xl font-semibold leading-tight pr-0 sm:pr-4">
                    Total de commande = {{ commande()?.total_commande | money:'GNF':true }}
                </h1>
                @if (!isAnnulee()) {
                    <div class="flex gap-2 shrink-0">
                        <p-button
                            label="Encaisser"
                            icon="pi pi-wallet"
                            [disabled]="restantDu() === 0"
                            (onClick)="openEncaissementDialog()"
                        />
                        <div class="md:hidden">
                            <p-button
                                label="Voir la facture"
                                icon="pi pi-file"
                                severity="secondary"
                                [outlined]="true"
                                [disabled]="!commande()?.facture?.id"
                                (onClick)="goFacture()"
                            />
                        </div>
                        <div class="hidden md:block">
                            <p-button
                                label="Annuler"
                                icon="pi pi-ban"
                                severity="danger"
                                [outlined]="true"
                                [disabled]="!canAnnuler()"
                                (onClick)="openAnnulationDialog()"
                            />
                        </div>
                    </div>
                }
            </div>
            <p class="cv-detail2-reference-line hidden md:block text-surface-600 dark:text-surface-200 text-lg sm:text-xl leading-tight mb-6">
                N&deg; {{ commande()?.reference ?? '-' }}.
            </p>
            <div class="hidden md:block">
                <p-button
                    label="Voir la facture"
                    icon="pi pi-file"
                    severity="secondary"
                    [outlined]="true"
                    [disabled]="!commande()?.facture?.id"
                    (onClick)="goFacture()"
                />
            </div>
        </div>

    @if (informationPanel(); as info) {
        <div class="border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden mb-8">
            <div class="p-4 bg-surface-50 dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div class="flex items-center gap-2">
                    <i class="pi pi-info-circle text-primary-500"></i>
                    <h3 class="text-surface-900 dark:text-surface-0 text-base font-semibold leading-tight">Informations</h3>
                </div>
            </div>

            <div class="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
                <div class="md:col-span-2 xl:col-span-1">
                    <div class="text-surface-700 dark:text-surface-300 text-sm font-semibold mb-2">Resume</div>
                    <div class="text-surface-900 dark:text-surface-0 text-sm leading-6">
                        <div><span class="font-medium">Date creation:</span> {{ info.createdAtLabel }}</div>
                        <div><span class="font-medium">{{ info.creatorLabel }}</span> {{ info.creatorNom }} {{ info.creatorPrenom }}</div>
                        <div><span class="font-medium">Phone:</span> {{ info.creatorPhone | phoneFormat }}</div>
                    </div>
                </div>

                <div>
                    <div class="text-surface-700 dark:text-surface-300 text-sm font-semibold mb-2">Vehicule</div>
                    <div class="text-surface-900 dark:text-surface-0 text-sm leading-6">
                        <div><span class="font-medium">Nom vehicule:</span> {{ info.vehiculeNom }}</div>
                        <div><span class="font-medium">Immatriculation:</span> {{ info.vehiculeImmatriculation }}</div>
                    </div>
                </div>

                <div>
                    <div class="text-surface-700 dark:text-surface-300 text-sm font-semibold mb-2">Livreur</div>
                    <div class="text-surface-900 dark:text-surface-0 text-sm leading-6">
                        <div>{{ info.livreurNom }}</div>
                        <div>{{ info.livreurPhone | phoneFormat }}</div>
                    </div>
                </div>
            </div>
        </div>
    }

    <div class="border-t border-surface-200 dark:border-surface-700 mb-8"></div>

    <ul class="list-none p-0 m-0">
        @for (product of products(); track product.id) {
            <li class="flex flex-col md:flex-row gap-5 md:gap-6 py-6 sm:py-8">
                <img [src]="product.imageUrl" class="w-full sm:w-56 md:w-50 h-44 sm:h-56 md:h-50 shrink-0 rounded-lg object-cover" />
                <div class="flex-auto flex flex-col justify-between">
                    <div class="flex flex-col sm:flex-row gap-4">
                        <div class="flex-auto flex flex-col gap-4">
                            <div class="flex flex-col gap-2">
                                <h3 class="text-surface-900 dark:text-surface-0 text-xl font-medium leading-tight">{{ product.name }}</h3>
                                <p class="text-surface-600 dark:text-surface-200 leading-tight">Prix unitaire: {{ product.unitPrice | money:'GNF':true }}</p>
                            </div>
                        </div>
                        <div class="flex flex-col items-start sm:items-end gap-2 sm:gap-4">
                            <span class="text-surface-900 dark:text-surface-0 text-xl sm:text-2xl font-medium leading-tight">{{ product.totalLigne | money:'GNF':true }}</span>
                            <a class="cursor-pointer text-surface-600 dark:text-surface-200 font-medium hover:text-primary transition-colors duration-300" tabindex="0">
                                {{ product.quantity }} unite(s)
                            </a>
                        </div>
                    </div>

                    <div class="w-full md:w-56">
                        <p-select
                            [options]="quantityOptionFor(product.quantity)"
                            optionLabel="label"
                            optionValue="value"
                            [ngModel]="product.quantity"
                            class="w-full sm:w-32"
                        ></p-select>
                    </div>
                </div>
            </li>
        }
    </ul>

    <div class="border-t border-surface-200 dark:border-surface-700 mt-8 mb-8"></div>

    <div class="flex flex-col gap-4 mb-8">
        <div class="flex justify-between items-center">
            <span class="text-surface-900 dark:text-surface-0 leading-tight">Statut</span>
            <span class="text-surface-900 dark:text-surface-0 leading-tight">{{ statutLabel() }}</span>
        </div>
        <div class="flex justify-between items-center">
            <span class="text-surface-900 dark:text-surface-0 leading-tight">Deja encaisse</span>
            <span class="text-surface-900 dark:text-surface-0 leading-tight">{{ (commande()?.facture?.montant_encaisse ?? 0) | money:'GNF':true }}</span>
        </div>
    </div>

    <div class="border-t border-surface-200 dark:border-surface-700 pt-6 mb-4"></div>

    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
        <span class="text-surface-900 dark:text-surface-0 text-lg sm:text-xl font-medium leading-tight">Restant a encaisser</span>
        <span class="text-surface-900 dark:text-surface-0 text-xl sm:text-2xl font-medium leading-tight">{{ restantDu() | money:'GNF':true }}</span>
    </div>

    @if (!isAnnulee()) {
        <div class="cv-detail2-mobile-bottom-actions">
            <p-button
                label="Annuler la commande"
                icon="pi pi-ban"
                severity="danger"
                [outlined]="true"
                styleClass="w-full justify-center"
                [disabled]="!canAnnuler()"
                (onClick)="openAnnulationDialog()"
            />
        </div>
    }

    </div>
</div>

<p-dialog
  header="Encaisser"
  [(visible)]="encaissementDialogVisible"
  [modal]="true"
  [style]="{ width: '44rem', maxWidth: '100vw' }"
  styleClass="cv-encaissement-dialog"
  [draggable]="false"
>
  <div class="flex flex-col gap-6 py-3">
    <div class="flex flex-col gap-2">
      <label class="font-bold text-xl">Montant <span class="text-red-500">*</span></label>
      <p-inputnumber
        [(ngModel)]="encaissementMontant"
        [max]="restantDu()"
        [min]="1"
        mode="decimal"
        [useGrouping]="true"
        suffix=" GNF"
        styleClass="w-full cv-encaissement-montant"
        inputStyleClass="cv-encaissement-montant-input text-4xl font-bold py-4"
        placeholder="Montant \xE0 encaisser"
      />
      <span class="text-sm text-surface-500 font-semibold">Restant : {{ restantDu() | money:'GNF':true }}</span>
    </div>
    <div class="flex flex-col gap-2">
      <label class="font-bold text-lg">Mode de paiement <span class="text-red-500">*</span></label>
      <p-select
        [(ngModel)]="encaissementMode"
        [options]="modePaiementOptions"
        optionLabel="label"
        optionValue="value"
        placeholder="Choisir un mode"
        styleClass="w-full cv-encaissement-control"
        appendTo="body"
      />
    </div>
    @if (shouldShowEncaissementDate()) {
      <div class="flex flex-col gap-2">
        <label class="font-bold text-lg">Date <span class="text-red-500">*</span></label>
        <p-datepicker
          [(ngModel)]="encaissementDate"
          dateFormat="dd/mm/yy"
          appendTo="body"
          styleClass="w-full cv-encaissement-control"
          inputStyleClass="w-full cv-encaissement-control-input text-xl font-semibold py-3"
        />
      </div>
    }
    <!-- <div class="flex flex-col gap-1">
      <label class="font-medium text-sm">Note (optionnel)</label>
      <textarea
        rows="2"
        maxlength="255"
        placeholder="Note..."
        [(ngModel)]="encaissementNote"
        class="w-full text-sm"
        style="border: 1px solid var(--p-surface-300); border-radius: 6px; padding: 0.5rem; resize: none; outline: none; font-family: inherit; background: var(--p-surface-0); color: var(--p-surface-900);"
      ></textarea>
    </div> -->
  </div>
  <ng-template #footer>
    <div class="flex justify-between w-full">
      <p-button label="Annuler" severity="secondary" [outlined]="true" size="large"
                (onClick)="encaissementDialogVisible = false" [disabled]="encaissementLoading" />
      <p-button label="Confirmer" icon="pi pi-check" size="large"
                (onClick)="confirmerEncaissement()" [loading]="encaissementLoading"
                [disabled]="!encaissementMontant || !encaissementMode" />
    </div>
  </ng-template>
</p-dialog>

<p-dialog
  header="Annuler la commande"
  [(visible)]="annulationDialogVisible"
  [modal]="true"
  [style]="{ width: '32rem', maxWidth: '95vw' }"
  [breakpoints]="{ '960px': '95vw' }"
  [draggable]="false"
>
  <div class="flex flex-col gap-4 py-2">
    <div class="flex items-start gap-3">
      <i class="pi pi-ban text-red-500 text-3xl flex-shrink-0 mt-0.5"></i>
      <p class="m-0 text-sm">
        Annuler la commande <strong>{{ commande()?.reference }}</strong> ?
        Cette action est irreversible. Les stocks seront restaures et la facture sera annulee.
      </p>
    </div>
    <div class="flex flex-col gap-2">
      <label class="font-medium text-sm">Motif d'annulation <span class="text-red-500">*</span></label>
      <textarea
        rows="3"
        maxlength="500"
        placeholder="Indiquez le motif de l'annulation..."
        [(ngModel)]="motifAnnulation"
        class="w-full text-sm"
        style="border: 1px solid var(--p-surface-300); border-radius: 6px; padding: 0.5rem; resize: none; outline: none; font-family: inherit; background: var(--p-surface-0); color: var(--p-surface-900);"
      ></textarea>
      <small class="text-surface-400">{{ motifAnnulation.length }}/500 caracteres</small>
    </div>
  </div>
  <ng-template #footer>
    <p-button label="Retour" severity="secondary" [outlined]="true"
              (onClick)="annulationDialogVisible = false" [disabled]="annulationLoading" />
    <p-button label="Confirmer l'annulation" icon="pi pi-ban" severity="danger"
              (onClick)="confirmerAnnulation()" [loading]="annulationLoading"
              [disabled]="!motifAnnulation.trim()" />
  </ng-template>
</p-dialog>
`, styles: ["/* src/app/pages/ventes/commande-vente-detail2/commande-vente-detail2.scss */\n.cv-detail2-mobile-header {\n  display: none;\n}\n.cv-detail2-mobile-total {\n  width: 100%;\n  text-align: center;\n}\n.cv-detail2-mobile-total-amount {\n  color: var(--p-surface-900);\n  font-size: 1.8rem;\n  font-weight: 800;\n  line-height: 1.05;\n  letter-spacing: 0.01em;\n}\n.cv-detail2-mobile-total-label {\n  margin-top: 0.35rem;\n  color: var(--p-surface-500);\n  font-size: 0.72rem;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n:host-context(.app-dark) .cv-detail2-mobile-total-amount {\n  color: var(--p-surface-0);\n}\n:host-context(.app-dark) .cv-detail2-mobile-total-label {\n  color: var(--p-surface-400);\n}\n.cv-detail2-mobile-bottom-actions {\n  display: none;\n}\n:host ::ng-deep .cv-encaissement-dialog .p-dialog-content {\n  padding-top: 0.75rem;\n}\n:host ::ng-deep .cv-encaissement-dialog .cv-encaissement-montant .p-inputtext {\n  min-height: 4.2rem;\n  font-size: 2.25rem;\n  font-weight: 800;\n  line-height: 1.1;\n  padding-top: 0.85rem;\n  padding-bottom: 0.85rem;\n}\n:host ::ng-deep .cv-encaissement-dialog .cv-encaissement-control.p-select {\n  min-height: 3.4rem;\n  align-items: center;\n}\n:host ::ng-deep .cv-encaissement-dialog .cv-encaissement-control.p-select .p-select-label {\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n:host ::ng-deep .cv-encaissement-dialog .cv-encaissement-control .p-inputtext {\n  min-height: 3.4rem;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n@media (max-width: 768px) {\n  .cv-detail2-mobile-header {\n    display: grid;\n    grid-template-columns: 1fr auto 1fr;\n    align-items: center;\n    column-gap: 0.55rem;\n    flex-shrink: 0;\n    padding: calc(0.5rem + env(safe-area-inset-top)) calc(0.875rem + env(safe-area-inset-right)) 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    margin: 0 -1rem;\n    margin-left: calc(-1rem - env(safe-area-inset-left));\n    margin-right: calc(-1rem - env(safe-area-inset-right));\n    background: var(--p-surface-0);\n    border-bottom: 1px solid var(--p-surface-200);\n    position: sticky;\n    top: 0;\n    z-index: 25;\n    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);\n  }\n  .cv-detail2-mobile-back-trigger {\n    justify-self: start;\n  }\n  :host-context(.app-dark) .cv-detail2-mobile-header {\n    background: var(--p-surface-900);\n    border-bottom-color: var(--p-surface-700);\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  }\n  :host ::ng-deep .cv-detail2-mobile-back.p-button {\n    width: 2.25rem;\n    height: 2.25rem;\n    border-radius: 50%;\n    flex-shrink: 0;\n    color: var(--p-primary-600) !important;\n    background: var(--p-primary-50) !important;\n  }\n  .cv-detail2-mobile-title-wrap {\n    width: 100%;\n    min-width: 0;\n    text-align: center;\n  }\n  .cv-detail2-mobile-title {\n    margin: 0;\n    font-size: 1.25rem;\n    font-weight: 700;\n    color: var(--p-surface-800);\n    line-height: 1.1;\n  }\n  .cv-detail2-mobile-subtitle {\n    margin: 0.15rem 0 0;\n    font-size: 0.8rem;\n    font-weight: 500;\n    color: var(--p-surface-500);\n  }\n  :host-context(.app-dark) .cv-detail2-mobile-title {\n    color: var(--p-surface-0);\n  }\n  :host-context(.app-dark) .cv-detail2-mobile-subtitle {\n    color: var(--p-surface-400);\n  }\n  .cv-detail2-mobile-spacer {\n    width: 2.25rem;\n    height: 2.25rem;\n    flex-shrink: 0;\n    justify-self: end;\n  }\n  .cv-detail2-reference-line {\n    display: none;\n  }\n  .cv-detail2-content {\n    padding-top: 1rem !important;\n    padding-bottom: calc(1rem + env(safe-area-inset-bottom));\n  }\n  .cv-detail2-mobile-bottom-actions {\n    display: block;\n    position: sticky;\n    bottom: 0;\n    z-index: 8;\n    padding-top: 0.85rem;\n    padding-bottom: calc(0.85rem + env(safe-area-inset-bottom));\n    margin-top: 0.75rem;\n    background:\n      linear-gradient(\n        to top,\n        var(--p-surface-0) 75%,\n        rgba(255, 255, 255, 0));\n  }\n  :host-context(.app-dark) .cv-detail2-mobile-bottom-actions {\n    background:\n      linear-gradient(\n        to top,\n        var(--p-surface-950) 75%,\n        rgba(15, 23, 42, 0));\n  }\n  :host ::ng-deep .cv-detail2-mobile-bottom-actions .p-button {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=commande-vente-detail2.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: CommandeVenteService }, { type: FactureLivraisonService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommandeVenteDetail2, { className: "CommandeVenteDetail2", filePath: "src/app/pages/ventes/commande-vente-detail2/commande-vente-detail2.ts", lineNumber: 53 });
})();
export {
  CommandeVenteDetail2
};
//# sourceMappingURL=chunk-NUV3WCQN.js.map
