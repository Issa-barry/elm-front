import {
  CommandeVenteService
} from "./chunk-YRX5SGBT.js";
import {
  STATUT_FACTURE_LABELS
} from "./chunk-6AQT3D7V.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-JKQZ5BV4.js";
import "./chunk-DPFCOBAB.js";
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
import "./chunk-VA6E3YEN.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-LK4MJDWN.js";
import "./chunk-STJD6333.js";
import "./chunk-OKTFETPA.js";
import "./chunk-HDOAYFIF.js";
import "./chunk-K2CZRXIH.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-V6ACHPKV.js";
import {
  ButtonDirective,
  ButtonLabel,
  ButtonModule
} from "./chunk-ZB6W2VB3.js";
import "./chunk-IRKOPIT4.js";
import "./chunk-6MK22ZAB.js";
import "./chunk-37IESOSH.js";
import "./chunk-EC5CTPX4.js";
import {
  CommonModule
} from "./chunk-TGBATRWC.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ZUORBSMF.js";
import "./chunk-4MWRP73S.js";

// src/app/pages/ventes/commande-vente-detail2/commande-vente-detail2.ts
var _forTrack0 = ($index, $item) => $item.id;
function CommandeVenteDetail2_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 10);
    \u0275\u0275element(1, "img", 19);
    \u0275\u0275elementStart(2, "div", 20)(3, "div", 21)(4, "div", 22)(5, "div", 23)(6, "h3", 17);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 24);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 25);
    \u0275\u0275element(11, "p-select", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 27)(13, "span", 18);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a", 28);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 29);
    \u0275\u0275element(18, "i", 30);
    \u0275\u0275elementStart(19, "span", 24);
    \u0275\u0275text(20, " Livree par ");
    \u0275\u0275elementStart(21, "span", 31);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 31);
    \u0275\u0275text(24, "(+224 666 17 70 06)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 29);
    \u0275\u0275element(26, "i", 32);
    \u0275\u0275elementStart(27, "span", 24);
    \u0275\u0275text(28, " Vehicule : ");
    \u0275\u0275elementStart(29, "span", 31);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", product_r1.imageUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(product_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r1.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r1.quantityOptionFor(product_r1.quantity))("ngModel", product_r1.quantity);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatMontant(product_r1.totalLigne));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", product_r1.quantity, " unite(s) ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.livreurNom(), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.vehiculeNom());
  }
}
var CommandeVenteDetail2 = class _CommandeVenteDetail2 {
  route;
  router;
  commandeService;
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  commande = signal(null, ...ngDevMode ? [{ debugName: "commande" }] : []);
  products = computed(() => (this.commande()?.lignes ?? []).map((ligne) => {
    const prixUnitaire = this.toNumber(ligne.prix_vente_snapshot);
    const totalFromApi = this.toNumber(ligne.total_ligne);
    const totalLigne = Number.isFinite(totalFromApi) ? totalFromApi : prixUnitaire * Math.max(1, ligne.qte ?? 1);
    const rawImage = ligne.produit?.image_url;
    const imageUrl = rawImage ? rawImage.startsWith("http://") || rawImage.startsWith("https://") ? rawImage : `assets/demo/images/produits/${rawImage}` : "assets/demo/images/no-product.png";
    return {
      id: ligne.id,
      name: ligne.produit?.nom ?? `Produit #${ligne.produit_id}`,
      description: `Prix unitaire: ${this.formatMontant(prixUnitaire)}`,
      quantity: Math.max(1, ligne.qte ?? 1),
      totalLigne,
      imageUrl
    };
  }), ...ngDevMode ? [{ debugName: "products" }] : []);
  statutLabel = computed(() => {
    const statut = this.commande()?.facture?.statut_facture;
    return statut ? this.getStatutLabel(statut) : "Impayee";
  }, ...ngDevMode ? [{ debugName: "statutLabel" }] : []);
  canAnnuler = computed(() => {
    const statut = this.commande()?.facture?.statut_facture;
    return !statut || statut === "impayee";
  }, ...ngDevMode ? [{ debugName: "canAnnuler" }] : []);
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
  livreurNom = computed(() => {
    const livreur = this.commande()?.vehicule?.livreurPrincipal ?? this.commande()?.vehicule?.livreur_principal;
    if (!livreur)
      return "-";
    return `${livreur.prenom} ${livreur.nom}`.trim() || "-";
  }, ...ngDevMode ? [{ debugName: "livreurNom" }] : []);
  vehiculeNom = computed(() => this.commande()?.vehicule?.nom_vehicule ?? "-", ...ngDevMode ? [{ debugName: "vehiculeNom" }] : []);
  constructor(route, router, commandeService) {
    this.route = route;
    this.router = router;
    this.commandeService = commandeService;
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    if (!id) {
      this.router.navigate(["/ventes/commandes"]);
      return;
    }
    this.loadCommande(id);
  }
  annulerCommande() {
    const id = this.commande()?.id;
    if (!id)
      return;
    if (!confirm("Confirmer l'annulation de cette commande ?"))
      return;
    this.commandeService.deleteCommande(id).subscribe({
      next: () => this.router.navigate(["/ventes/commandes"])
    });
  }
  goFacture() {
    const factureId = this.commande()?.facture?.id;
    if (factureId) {
      this.router.navigate(["/ventes/factures", factureId]);
    }
  }
  quantityOptionFor(quantity) {
    const safeValue = Math.max(1, quantity);
    return [{ label: String(safeValue), value: safeValue }];
  }
  getStatutLabel(s) {
    return STATUT_FACTURE_LABELS[s] ?? s;
  }
  formatMontant(value) {
    const numberValue = this.toNumber(value);
    if (!Number.isFinite(numberValue))
      return "-";
    return `${new Intl.NumberFormat("fr-FR").format(numberValue)} GNF`;
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
  static \u0275fac = function CommandeVenteDetail2_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CommandeVenteDetail2)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(CommandeVenteService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommandeVenteDetail2, selectors: [["app-commande-vente-detail2"]], decls: 35, vars: 7, consts: [[1, "bg-surface-0", "dark:bg-surface-950", "px-6", "py-20", "md:px-12", "lg:px-20", "xl:px-32"], [1, "flex", "flex-col", "items-start", "mb-8"], [1, "flex", "items-center", "justify-between", "w-full", "mb-4"], [1, "text-surface-900", "dark:text-surface-0", "text-2xl", "md:text-3xl", "font-semibold", "leading-tight"], ["pButton", "", "severity", "danger", 3, "click", "disabled"], ["pButtonLabel", ""], [1, "text-surface-600", "dark:text-surface-200", "text-xl", "leading-tight", "mb-6"], ["pButton", "", "severity", "contrast", 1, "w-40"], [1, "border-t", "border-surface-200", "dark:border-surface-700", "mb-8"], [1, "list-none", "p-0", "m-0"], [1, "flex", "flex-col", "md:flex-row", "gap-6", "py-8"], [1, "border-t", "border-surface-200", "dark:border-surface-700", "mt-8", "mb-8"], [1, "flex", "flex-col", "gap-4", "mb-8"], [1, "flex", "justify-between", "items-center"], [1, "text-surface-900", "dark:text-surface-0", "leading-tight"], [1, "border-t", "border-surface-200", "dark:border-surface-700", "pt-6", "mb-4"], [1, "flex", "justify-between", "items-center", "mb-4"], [1, "text-surface-900", "dark:text-surface-0", "text-xl", "font-medium", "leading-tight"], [1, "text-surface-900", "dark:text-surface-0", "text-2xl", "font-medium", "leading-tight"], [1, "w-50", "h-50", "shrink-0", "rounded-lg", "object-cover", 3, "src"], [1, "flex-auto", "flex", "flex-col", "justify-between"], [1, "flex", "flex-col", "md:flex-row", "gap-4"], [1, "flex-auto", "flex", "flex-col", "gap-4"], [1, "flex", "flex-col", "gap-2"], [1, "text-surface-600", "dark:text-surface-200", "leading-tight"], [1, "w-full", "md:w-56"], ["optionLabel", "label", "optionValue", "value", 1, "w-20", 3, "options", "ngModel"], [1, "flex", "flex-col", "items-end", "gap-4"], ["tabindex", "0", 1, "cursor-pointer", "text-surface-600", "dark:text-surface-200", "font-medium", "hover:text-primary", "transition-colors", "duration-300"], [1, "flex", "items-center", "gap-2", "mt-4"], [1, "pi", "pi-id-card", "text-surface-600", "dark:text-surface-200", "text-xl!", "leading-none!"], [1, "font-bold"], [1, "pi", "pi-truck", "text-surface-600", "dark:text-surface-200", "text-xl!", "leading-none!"]], template: function CommandeVenteDetail2_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 4);
      \u0275\u0275listener("click", function CommandeVenteDetail2_Template_button_click_5_listener() {
        return ctx.annulerCommande();
      });
      \u0275\u0275elementStart(6, "span", 5);
      \u0275\u0275text(7, "Annuler la commande");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "p", 6);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 7)(11, "span", 5);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(13, "div", 8);
      \u0275\u0275elementStart(14, "ul", 9);
      \u0275\u0275repeaterCreate(15, CommandeVenteDetail2_For_16_Template, 31, 9, "li", 10, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "div", 11);
      \u0275\u0275elementStart(18, "div", 12)(19, "div", 13)(20, "span", 14);
      \u0275\u0275text(21, "Statut");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "span", 14);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 13)(25, "span", 14);
      \u0275\u0275text(26, "Deja encaisse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "span", 14);
      \u0275\u0275text(28);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(29, "div", 15);
      \u0275\u0275elementStart(30, "div", 16)(31, "span", 17);
      \u0275\u0275text(32, "Restant d\xFB");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "span", 18);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_2_0;
      let tmp_6_0;
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" Total de commande = ", ctx.formatMontant((tmp_0_0 = ctx.commande()) == null ? null : tmp_0_0.total_commande), " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.canAnnuler());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" N\xB0 ", ((tmp_2_0 = ctx.commande()) == null ? null : tmp_2_0.reference) ?? "-", ". ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.statutLabel());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.products());
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.statutLabel());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.formatMontant(((tmp_6_0 = ctx.commande()) == null ? null : tmp_6_0.facture == null ? null : tmp_6_0.facture.montant_encaisse) ?? 0));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.formatMontant(ctx.restantDu()));
    }
  }, dependencies: [CommonModule, FormsModule, NgControlStatus, NgModel, ButtonModule, ButtonDirective, ButtonLabel, SelectModule, Select], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommandeVenteDetail2, [{
    type: Component,
    args: [{ selector: "app-commande-vente-detail2", standalone: true, imports: [CommonModule, FormsModule, ButtonModule, SelectModule], template: `<div class="bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20 xl:px-32">
    <div class="flex flex-col items-start mb-8">
        <div class="flex items-center justify-between w-full mb-4">
            <h1 class="text-surface-900 dark:text-surface-0 text-2xl md:text-3xl font-semibold leading-tight">
                Total de commande = {{ formatMontant(commande()?.total_commande) }}
            </h1>
            <button pButton severity="danger" [disabled]="!canAnnuler()" (click)="annulerCommande()">
                <span pButtonLabel>Annuler la commande</span>
            </button>
        </div>
        <p class="text-surface-600 dark:text-surface-200 text-xl leading-tight mb-6">
            N&deg; {{ commande()?.reference ?? '-' }}.
        </p>
        <button pButton severity="contrast" class="w-40">
            <span pButtonLabel>{{ statutLabel() }}</span>
        </button>
    </div>

    <div class="border-t border-surface-200 dark:border-surface-700 mb-8"></div>

    <ul class="list-none p-0 m-0">
        @for (product of products(); track product.id) {
            <li class="flex flex-col md:flex-row gap-6 py-8">
                <img [src]="product.imageUrl" class="w-50 h-50 shrink-0 rounded-lg object-cover" />
                <div class="flex-auto flex flex-col justify-between">
                    <div class="flex flex-col md:flex-row gap-4">
                        <div class="flex-auto flex flex-col gap-4">
                            <div class="flex flex-col gap-2">
                                <h3 class="text-surface-900 dark:text-surface-0 text-xl font-medium leading-tight">{{ product.name }}</h3>
                                <p class="text-surface-600 dark:text-surface-200 leading-tight">{{ product.description }}</p>
                            </div>
                            <div class="w-full md:w-56">
                                <p-select
                                    [options]="quantityOptionFor(product.quantity)"
                                    optionLabel="label"
                                    optionValue="value"
                                    [ngModel]="product.quantity"
                                    class="w-20"
                                ></p-select>
                            </div>
                        </div>
                        <div class="flex flex-col items-end gap-4">
                            <span class="text-surface-900 dark:text-surface-0 text-2xl font-medium leading-tight">{{ formatMontant(product.totalLigne) }}</span>
                            <a class="cursor-pointer text-surface-600 dark:text-surface-200 font-medium hover:text-primary transition-colors duration-300" tabindex="0">
                                {{ product.quantity }} unite(s)
                            </a>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 mt-4">
                        <i class="pi pi-id-card text-surface-600 dark:text-surface-200 text-xl! leading-none!"></i>
                        <span class="text-surface-600 dark:text-surface-200 leading-tight">
                            Livree par <span class="font-bold">{{ livreurNom() }} </span>
                            <span class="font-bold">(+224 666 17 70 06)</span>
                        </span>
                    </div>
                    <div class="flex items-center gap-2 mt-4">
                        <i class="pi pi-truck text-surface-600 dark:text-surface-200 text-xl! leading-none!"></i>
                        <span class="text-surface-600 dark:text-surface-200 leading-tight">
                            Vehicule : <span class="font-bold">{{ vehiculeNom() }}</span>
                        </span>
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
            <span class="text-surface-900 dark:text-surface-0 leading-tight">{{ formatMontant(commande()?.facture?.montant_encaisse ?? 0) }}</span>
        </div>
    </div>

    <div class="border-t border-surface-200 dark:border-surface-700 pt-6 mb-4"></div>

    <div class="flex justify-between items-center mb-4">
        <span class="text-surface-900 dark:text-surface-0 text-xl font-medium leading-tight">Restant d&ucirc;</span>
        <span class="text-surface-900 dark:text-surface-0 text-2xl font-medium leading-tight">{{ formatMontant(restantDu()) }}</span>
    </div>

    <!-- <div class="flex justify-end pt-4">
        <button pButton severity="contrast" class="w-40" [disabled]="!commande()?.facture?.id" (click)="goFacture()">
            <span pButtonLabel>Encaisser</span>
        </button>
    </div> -->
</div>
` }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: CommandeVenteService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommandeVenteDetail2, { className: "CommandeVenteDetail2", filePath: "src/app/pages/ventes/commande-vente-detail2/commande-vente-detail2.ts", lineNumber: 32 });
})();
export {
  CommandeVenteDetail2
};
//# sourceMappingURL=chunk-UTR5DPFC.js.map
