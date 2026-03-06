import {
  StyleClass,
  StyleClassModule
} from "./chunk-KOFBRCUJ.js";
import {
  PhoneFormatPipe
} from "./chunk-F5DZ3BGT.js";
import {
  Select,
  SelectModule
} from "./chunk-HMZDW5SQ.js";
import "./chunk-VSFYXY5S.js";
import "./chunk-ADI47BO7.js";
import "./chunk-2ASVPUFF.js";
import {
  IconField,
  IconFieldModule,
  InputIcon,
  InputIconModule
} from "./chunk-GNGM6ZBM.js";
import {
  InputText,
  InputTextModule
} from "./chunk-VA6E3YEN.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-LK4MJDWN.js";
import "./chunk-STJD6333.js";
import "./chunk-OKTFETPA.js";
import "./chunk-HDOAYFIF.js";
import "./chunk-K2CZRXIH.js";
import {
  ButtonDirective,
  ButtonIcon,
  ButtonModule
} from "./chunk-ZB6W2VB3.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-V6ACHPKV.js";
import "./chunk-IRKOPIT4.js";
import "./chunk-6MK22ZAB.js";
import "./chunk-37IESOSH.js";
import {
  PrimeTemplate
} from "./chunk-EC5CTPX4.js";
import {
  CommonModule,
  NgClass
} from "./chunk-TGBATRWC.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ZUORBSMF.js";
import "./chunk-4MWRP73S.js";

// src/app/pages/ventes/facture-vente-liste2/facture-vente-liste2.ts
var _c0 = (a0, a1, a2) => ({ "px-2 py-1 rounded-md flex items-center gap-1": true, "bg-surface-100 dark:bg-surface-800": a0, "bg-orange-100 dark:bg-orange-900": a1, "bg-green-100 dark:bg-green-900": a2 });
var _c1 = (a0, a1, a2) => ({ "text-sm font-bold": true, "text-surface-600 dark:text-surface-300": a0, "text-orange-700 dark:text-orange-300": a1, "text-green-700 dark:text-green-300": a2 });
var _forTrack0 = ($index, $item) => $item.id;
function FactureVenteListe2_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 16);
  }
}
function FactureVenteListe2_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 17);
    \u0275\u0275listener("click", function FactureVenteListe2_For_17_Template_div_click_1_listener() {
      const order_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleChevron(order_r2.id));
    });
    \u0275\u0275elementStart(2, "div", 18);
    \u0275\u0275element(3, "img", 19);
    \u0275\u0275elementStart(4, "div", 20)(5, "div", 21);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 22);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 23)(10, "div", 24)(11, "div", 25);
    \u0275\u0275text(12, "Order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 26)(14, "span", 27);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 28)(17, "div", 25);
    \u0275\u0275text(18, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 29);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 24)(22, "div", 25);
    \u0275\u0275text(23, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 30);
    \u0275\u0275element(25, "i");
    \u0275\u0275elementStart(26, "span", 30);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 28)(29, "div", 25);
    \u0275\u0275text(30, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 31);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 32)(34, "button", 33);
    \u0275\u0275listener("click", function FactureVenteListe2_For_17_Template_button_click_34_listener($event) {
      const order_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.toggleChevron(order_r2.id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(35, "i", 34);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "div")(37, "div", 35)(38, "div", 36)(39, "div", 37)(40, "div", 38)(41, "h3", 39);
    \u0275\u0275text(42, "Billing Address");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 40)(44, "div", 41)(45, "span", 42);
    \u0275\u0275text(46, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span", 43);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 41)(50, "span", 42);
    \u0275\u0275text(51, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 43);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 41)(55, "span", 42);
    \u0275\u0275text(56, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span", 43);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 41)(60, "span", 42);
    \u0275\u0275text(61, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "span", 43);
    \u0275\u0275text(63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 41)(65, "span", 42);
    \u0275\u0275text(66, "Zip Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "span", 43);
    \u0275\u0275text(68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 41)(70, "span", 42);
    \u0275\u0275text(71, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "span", 43);
    \u0275\u0275text(73);
    \u0275\u0275pipe(74, "phoneFormat");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(75, "div", 37)(76, "div", 38)(77, "h3", 39);
    \u0275\u0275text(78, "Shipping Address");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "div", 40)(80, "div", 41)(81, "span", 42);
    \u0275\u0275text(82, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "span", 43);
    \u0275\u0275text(84);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div", 41)(86, "span", 42);
    \u0275\u0275text(87, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "span", 43);
    \u0275\u0275text(89);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "div", 41)(91, "span", 42);
    \u0275\u0275text(92, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "span", 43);
    \u0275\u0275text(94);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "div", 41)(96, "span", 42);
    \u0275\u0275text(97, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "span", 43);
    \u0275\u0275text(99);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(100, "div", 41)(101, "span", 42);
    \u0275\u0275text(102, "Zip Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "span", 43);
    \u0275\u0275text(104);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(105, "div", 41)(106, "span", 42);
    \u0275\u0275text(107, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "span", 43);
    \u0275\u0275text(109);
    \u0275\u0275pipe(110, "phoneFormat");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(111, "div", 37)(112, "div", 44)(113, "h3", 39);
    \u0275\u0275text(114, "Payment Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "div", 45);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(116, "svg", 46);
    \u0275\u0275element(117, "ellipse", 47)(118, "ellipse", 48)(119, "path", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(120, "span", 50);
    \u0275\u0275text(121);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(122, "div", 40)(123, "div", 51)(124, "div", 52)(125, "span", 29);
    \u0275\u0275text(126, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "span", 50);
    \u0275\u0275text(128);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(129, "div", 52)(130, "span", 29);
    \u0275\u0275text(131, "Shipping");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(132, "span", 50);
    \u0275\u0275text(133);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(134, "div", 52)(135, "span", 29);
    \u0275\u0275text(136, "Estimated Tax");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "span", 50);
    \u0275\u0275text(138);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(139, "div", 53);
    \u0275\u0275elementStart(140, "div", 52)(141, "span", 29);
    \u0275\u0275text(142, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(143, "span", 50);
    \u0275\u0275text(144);
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    const order_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("pStyleClass", \u0275\u0275interpolate1(".order-content-", order_r2.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", order_r2.image, \u0275\u0275sanitizeUrl)("alt", order_r2.product);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r2.product);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r2.variant);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(order_r2.orderNumber);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(order_r2.date);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(43, _c0, order_r2.statusColor === "surface", order_r2.statusColor === "orange", order_r2.statusColor === "green"));
    \u0275\u0275advance();
    \u0275\u0275classMap("text-xs pi " + order_r2.statusIcon + " " + (order_r2.statusColor === "surface" ? "text-surface-600 dark:text-surface-300" : order_r2.statusColor === "orange" ? "text-orange-700 dark:text-orange-300" : "text-green-700 dark:text-green-300"));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(47, _c1, order_r2.statusColor === "surface", order_r2.statusColor === "orange", order_r2.statusColor === "green"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(order_r2.statusLabel);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(order_r2.total);
    \u0275\u0275advance(2);
    \u0275\u0275property("pStyleClass", \u0275\u0275interpolate1(".order-content-", order_r2.id))("text", true)("rounded", true);
    \u0275\u0275advance();
    \u0275\u0275classMap("pi pi-chevron-down chevron-icon-" + order_r2.id + " transition-transform duration-300");
    \u0275\u0275advance();
    \u0275\u0275classMap("order-content-" + order_r2.id + " hidden overflow-hidden");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r2.getOrderCustomer(order_r2.id).name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.getOrderCustomer(order_r2.id).address);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.getOrderCustomer(order_r2.id).city);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.getOrderCustomer(order_r2.id).country);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.getOrderCustomer(order_r2.id).zipCode);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(74, 39, ctx_r2.getOrderCustomer(order_r2.id).phone));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r2.getOrderCustomer(order_r2.id).name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.getOrderCustomer(order_r2.id).address);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.getOrderCustomer(order_r2.id).city);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.getOrderCustomer(order_r2.id).country);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.getOrderCustomer(order_r2.id).zipCode);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(110, 41, ctx_r2.getOrderCustomer(order_r2.id).phone));
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r2.getOrderPayment(order_r2.id).cardNumber);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.getOrderPayment(order_r2.id).subtotal);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.getOrderPayment(order_r2.id).shipping);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.getOrderPayment(order_r2.id).tax);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(order_r2.total);
  }
}
function FactureVenteListe2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 54);
    \u0275\u0275text(2, "No orders found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 55);
    \u0275\u0275text(4, "Try adjusting your search or filter criteria");
    \u0275\u0275elementEnd()();
  }
}
var FactureVenteListe2 = class _FactureVenteListe2 {
  searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : []);
  selectedFilter = signal("all", ...ngDevMode ? [{ debugName: "selectedFilter" }] : []);
  filterOptions = [
    { label: "All Orders", value: "all" },
    { label: "Pending", value: "pending" },
    { label: "In Delivery", value: "delivery" },
    { label: "Delivered", value: "delivered" }
  ];
  orders = [
    {
      id: 1,
      orderNumber: "#72831",
      product: "Modern Brass Pendant Light",
      variant: "Matte Gold Finish",
      image: "https://fqjltiegiezfetthbags.supabase.co/storage/v1/object/public/block.images/blocks/ecommerce/orderhistory/row-expansion-1.jpg",
      date: "15 Feb, 2025",
      status: "pending",
      statusLabel: "Pending",
      statusIcon: "pi-clock",
      statusColor: "surface",
      total: "$109.08"
    },
    {
      id: 2,
      orderNumber: "#71293",
      product: "Scandinavian Dining Chair",
      variant: "Natural Oak",
      image: "https://fqjltiegiezfetthbags.supabase.co/storage/v1/object/public/block.images/blocks/ecommerce/orderhistory/row-expansion-2.jpg",
      date: "8 Feb, 2025",
      status: "delivery",
      statusLabel: "In Delivery",
      statusIcon: "pi-truck",
      statusColor: "orange",
      total: "$159.08"
    },
    {
      id: 3,
      orderNumber: "#69847",
      product: "Mid-Century Storage Cabinet",
      variant: "Walnut Wood",
      image: "https://fqjltiegiezfetthbags.supabase.co/storage/v1/object/public/block.images/blocks/ecommerce/orderhistory/row-expansion-3.jpg",
      date: "25 Jan, 2025",
      status: "delivered",
      statusLabel: "Delivered",
      statusIcon: "pi-check",
      statusColor: "green",
      total: "$449.00"
    }
  ];
  orderCustomers = {
    1: {
      name: "Sarah Johnson",
      address: "123 Pine Street, Seattle, WA, 98101",
      city: "Seattle",
      country: "United States",
      zipCode: "98101",
      phone: "+1 (206) 555-0173"
    },
    2: {
      name: "Michael Chen",
      address: "456 Oak Avenue, Portland, OR, 97201",
      city: "Portland",
      country: "United States",
      zipCode: "97201",
      phone: "+1 (503) 555-0142"
    },
    3: {
      name: "Emma Rodriguez",
      address: "789 Maple Drive, Austin, TX, 78701",
      city: "Austin",
      country: "United States",
      zipCode: "78701",
      phone: "+1 (512) 555-0198"
    }
  };
  orderPayments = {
    1: {
      cardNumber: "**** 4892",
      subtotal: "$89.00",
      shipping: "$12.00",
      tax: "$8.08"
    },
    2: {
      cardNumber: "**** 7321",
      subtotal: "$139.00",
      shipping: "$15.00",
      tax: "$5.08"
    },
    3: {
      cardNumber: "**** 9854",
      subtotal: "$399.00",
      shipping: "$20.00",
      tax: "$30.00"
    }
  };
  filteredOrders = computed(() => {
    let filtered = this.orders;
    if (this.selectedFilter() !== "all") {
      filtered = filtered.filter((order) => order.status === this.selectedFilter());
    }
    if (this.searchQuery().trim()) {
      const query = this.searchQuery().toLowerCase().trim();
      filtered = filtered.filter((order) => order.orderNumber.toLowerCase().includes(query) || order.product.toLowerCase().includes(query) || order.variant.toLowerCase().includes(query));
    }
    return filtered;
  }, ...ngDevMode ? [{ debugName: "filteredOrders" }] : []);
  toggleChevron(orderId) {
    const chevronClass = `.chevron-icon-${orderId}`;
    const chevronElement = document.querySelector(chevronClass);
    if (chevronElement) {
      chevronElement.classList.toggle("rotate-180");
    }
  }
  getOrderCustomer(orderId) {
    return this.orderCustomers[orderId] || this.orderCustomers[1];
  }
  getOrderPayment(orderId) {
    return this.orderPayments[orderId] || this.orderPayments[1];
  }
  static \u0275fac = function FactureVenteListe2_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FactureVenteListe2)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FactureVenteListe2, selectors: [["app-facture-vente-liste2"]], decls: 19, vars: 5, consts: [[1, "bg-surface-0", "dark:bg-surface-900", "p-12", "md:p-20"], [1, "flex", "flex-col", "lg:flex-row", "md:justify-between", "items-start", "lg:items-end", "gap-4", "mb-8"], [1, "flex", "flex-col", "gap-2", "flex-1"], [1, "text-surface-900", "dark:text-surface-0", "text-2xl", "font-semibold", "leading-tight"], [1, "text-surface-500", "dark:text-surface-400", "text-xl", "leading-tight"], [1, "flex", "flex-col", "md:flex-row", "items-start", "md:items-end", "gap-4"], [1, "w-full", "md:w-54"], ["iconPosition", "left"], [1, "pi", "pi-search", "text-surface-400"], ["pInputText", "", "placeholder", "Search", 1, "w-full", "px-3", "py-2", "bg-surface-0", "dark:bg-surface-900", "border", "border-surface-300", "dark:border-surface-600", "rounded-md", "text-surface-900", "dark:text-surface-0", 3, "ngModelChange", "ngModel"], [1, "w-full", "md:w-auto"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Filter", "styleClass", "w-full md:w-40 bg-surface-0 dark:bg-surface-900 border border-surface-300 dark:border-surface-600", 3, "ngModelChange", "ngModel", "options", "appendTo"], ["pTemplate", "dropdownicon"], [1, "flex", "flex-col", "gap-6"], [1, "bg-surface-0", "dark:bg-surface-900", "border", "border-surface-200", "dark:border-surface-700", "rounded-lg", "overflow-hidden", "transition-all", "duration-300"], [1, "text-center", "py-12"], [1, "pi", "pi-chevron-down", "text-surface-400"], ["enterFromClass", "hidden", "enterActiveClass", "animate-slidedown", "leaveToClass", "hidden", "leaveActiveClass", "animate-slideup", 1, "p-6", "flex", "flex-col", "lg:flex-row", "justify-start", "lg:items-center", "gap-6", "cursor-pointer", "hover:bg-surface-50", "dark:hover:bg-surface-800", "transition-colors", 3, "click", "pStyleClass"], [1, "flex", "items-center", "gap-4", "flex-1"], [1, "w-12", "h-12", "rounded", 3, "src", "alt"], [1, "flex", "flex-col", "gap-2"], [1, "text-surface-900", "dark:text-surface-0", "text-lg", "font-medium", "leading-tight"], [1, "text-surface-500", "dark:text-surface-400", "text-base", "leading-tight"], [1, "flex", "flex-col", "sm:flex-row", "items-start", "sm:items-center", "gap-3", "sm:gap-4", "flex-1"], [1, "flex", "flex-col", "items-start", "sm:items-center", "flex-1", "min-w-0"], [1, "text-surface-500", "dark:text-surface-400", "text-sm", "mb-1", "sm:hidden"], [1, "px-2", "py-1", "bg-surface-100", "dark:bg-surface-800", "rounded-md"], [1, "text-surface-600", "dark:text-surface-300", "text-sm", "font-bold"], [1, "flex", "flex-col", "items-start", "sm:items-center", "flex-1"], [1, "text-surface-700", "dark:text-surface-300", "text-base", "leading-tight"], [3, "ngClass"], [1, "text-surface-700", "dark:text-surface-300", "text-base", "font-semibold", "leading-tight"], [1, "flex", "items-center", "justify-start", "sm:justify-center", "flex-1"], ["pButton", "", "severity", "secondary", "enterFromClass", "hidden", "enterActiveClass", "animate-slidedown", "leaveToClass", "hidden", "leaveActiveClass", "animate-slideup", 1, "w-10", "h-10", 3, "click", "text", "rounded", "pStyleClass"], ["pButtonIcon", ""], [1, "flex", "flex-col", "gap-6", "p-6", "border-t", "border-surface-200", "dark:border-surface-700"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-6"], [1, "border", "border-surface-200", "dark:border-surface-700", "rounded-lg", "overflow-hidden"], [1, "p-4", "bg-surface-50", "dark:bg-surface-800", "border-b", "border-surface-200", "dark:border-surface-700"], [1, "text-surface-900", "dark:text-surface-0", "text-base", "font-semibold", "leading-tight"], [1, "p-6", "flex", "flex-col", "gap-5"], [1, "flex", "gap-2"], [1, "w-40", "text-surface-700", "dark:text-surface-300", "text-base", "leading-tight"], [1, "flex-1", "text-surface-900", "dark:text-surface-0", "text-base", "font-medium", "leading-tight"], [1, "p-4", "bg-surface-50", "dark:bg-surface-800", "border-b", "border-surface-200", "dark:border-surface-700", "flex", "justify-between", "items-center"], [1, "flex", "items-center", "gap-4"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "viewBox", "0 0 18 18", "fill", "none"], ["cx", "5.85", "cy", "9.00027", "rx", "4.725", "ry", "4.725", "fill", "#EF4444"], ["cx", "12.1508", "cy", "9.00027", "rx", "4.725", "ry", "4.725", "fill", "#F59E0B"], ["d", "M9.00078 12.5224C9.96747 11.6573 10.5758 10.4 10.5758 9.00059C10.5758 7.60119 9.96747 6.34393 9.00078 5.47876C8.03409 6.34393 7.42578 7.60119 7.42578 9.00059C7.42578 10.4 8.03409 11.6573 9.00078 12.5224Z", "fill", "#F97316"], [1, "text-surface-900", "dark:text-surface-0", "text-base", "font-medium", "leading-tight"], [1, "flex", "flex-col", "gap-4"], [1, "flex", "justify-between", "items-center"], [1, "h-px", "bg-surface-200", "dark:bg-surface-700"], [1, "text-surface-500", "dark:text-surface-400", "text-lg", "mb-2"], [1, "text-surface-400", "dark:text-surface-500", "text-base"]], template: function FactureVenteListe2_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4, "My Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6, "Manage, Track, and Review Your Purchases");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "p-iconfield", 7);
      \u0275\u0275element(10, "p-inputicon", 8);
      \u0275\u0275elementStart(11, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function FactureVenteListe2_Template_input_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 10)(13, "p-select", 11);
      \u0275\u0275twoWayListener("ngModelChange", function FactureVenteListe2_Template_p_select_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedFilter, $event) || (ctx.selectedFilter = $event);
        return $event;
      });
      \u0275\u0275template(14, FactureVenteListe2_ng_template_14_Template, 1, 0, "ng-template", 12);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "div", 13);
      \u0275\u0275repeaterCreate(16, FactureVenteListe2_For_17_Template, 145, 51, "div", 14, _forTrack0);
      \u0275\u0275conditionalCreate(18, FactureVenteListe2_Conditional_18_Template, 5, 0, "div", 15);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedFilter);
      \u0275\u0275property("options", ctx.filterOptions)("appendTo", "body");
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.filteredOrders());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.filteredOrders().length === 0 ? 18 : -1);
    }
  }, dependencies: [CommonModule, NgClass, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ButtonModule, ButtonDirective, ButtonIcon, PrimeTemplate, IconFieldModule, IconField, InputIconModule, InputIcon, InputTextModule, InputText, SelectModule, Select, StyleClassModule, StyleClass, PhoneFormatPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FactureVenteListe2, [{
    type: Component,
    args: [{ selector: "app-facture-vente-liste2", standalone: true, imports: [CommonModule, FormsModule, ButtonModule, IconFieldModule, InputIconModule, InputTextModule, SelectModule, StyleClassModule, PhoneFormatPipe], template: `<div class="bg-surface-0 dark:bg-surface-900 p-12 md:p-20">\r
    <div class="flex flex-col lg:flex-row md:justify-between items-start lg:items-end gap-4 mb-8">\r
        <div class="flex flex-col gap-2 flex-1">\r
            <h1 class="text-surface-900 dark:text-surface-0 text-2xl font-semibold leading-tight">My Orders</h1>\r
            <p class="text-surface-500 dark:text-surface-400 text-xl leading-tight">Manage, Track, and Review Your Purchases</p>\r
        </div>\r
\r
        <div class="flex flex-col md:flex-row items-start md:items-end gap-4">\r
            <div class="w-full md:w-54">\r
                <p-iconfield iconPosition="left">\r
                    <p-inputicon class="pi pi-search text-surface-400"></p-inputicon>\r
                    <input\r
                        pInputText\r
                        [(ngModel)]="searchQuery"\r
                        placeholder="Search"\r
                        class="w-full px-3 py-2 bg-surface-0 dark:bg-surface-900 border border-surface-300 dark:border-surface-600 rounded-md text-surface-900 dark:text-surface-0"\r
                    />\r
                </p-iconfield>\r
            </div>\r
\r
            <div class="w-full md:w-auto">\r
                <p-select\r
                    [(ngModel)]="selectedFilter"\r
                    [options]="filterOptions"\r
                    optionLabel="label"\r
                    optionValue="value"\r
                    placeholder="Filter"\r
                    styleClass="w-full md:w-40 bg-surface-0 dark:bg-surface-900 border border-surface-300 dark:border-surface-600"\r
                    [appendTo]="'body'"\r
                >\r
                    <ng-template pTemplate="dropdownicon">\r
                        <i class="pi pi-chevron-down text-surface-400"></i>\r
                    </ng-template>\r
                </p-select>\r
            </div>\r
        </div>\r
    </div>\r
\r
    <div class="flex flex-col gap-6">\r
        @for (order of filteredOrders(); track order.id; let index = $index) {\r
            <div class="bg-surface-0 dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden transition-all duration-300">\r
                <div\r
                    class="p-6 flex flex-col lg:flex-row justify-start lg:items-center gap-6 cursor-pointer hover:bg-surface-50 dark:hover:bg-surface-800 transition-colors"\r
                    pStyleClass=".order-content-{{ order.id }}"\r
                    enterFromClass="hidden"\r
                    enterActiveClass="animate-slidedown"\r
                    leaveToClass="hidden"\r
                    leaveActiveClass="animate-slideup"\r
                    (click)="toggleChevron(order.id)"\r
                >\r
                    <div class="flex items-center gap-4 flex-1">\r
                        <img class="w-12 h-12 rounded" [src]="order.image" [alt]="order.product" />\r
                        <div class="flex flex-col gap-2">\r
                            <div class="text-surface-900 dark:text-surface-0 text-lg font-medium leading-tight">{{ order.product }}</div>\r
                            <div class="text-surface-500 dark:text-surface-400 text-base leading-tight">{{ order.variant }}</div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 flex-1">\r
                        <div class="flex flex-col items-start sm:items-center flex-1 min-w-0">\r
                            <div class="text-surface-500 dark:text-surface-400 text-sm mb-1 sm:hidden">Order</div>\r
                            <div class="px-2 py-1 bg-surface-100 dark:bg-surface-800 rounded-md">\r
                                <span class="text-surface-600 dark:text-surface-300 text-sm font-bold">{{ order.orderNumber }}</span>\r
                            </div>\r
                        </div>\r
\r
                        <div class="flex flex-col items-start sm:items-center flex-1">\r
                            <div class="text-surface-500 dark:text-surface-400 text-sm mb-1 sm:hidden">Date</div>\r
                            <span class="text-surface-700 dark:text-surface-300 text-base leading-tight">{{ order.date }}</span>\r
                        </div>\r
\r
                        <div class="flex flex-col items-start sm:items-center flex-1 min-w-0">\r
                            <div class="text-surface-500 dark:text-surface-400 text-sm mb-1 sm:hidden">Status</div>\r
                            <div\r
                                [ngClass]="{\r
                                    'px-2 py-1 rounded-md flex items-center gap-1': true,\r
                                    'bg-surface-100 dark:bg-surface-800': order.statusColor === 'surface',\r
                                    'bg-orange-100 dark:bg-orange-900': order.statusColor === 'orange',\r
                                    'bg-green-100 dark:bg-green-900': order.statusColor === 'green'\r
                                }"\r
                            >\r
                                <i\r
                                    [class]="\r
                                        'text-xs pi ' +\r
                                        order.statusIcon +\r
                                        ' ' +\r
                                        (order.statusColor === 'surface'\r
                                            ? 'text-surface-600 dark:text-surface-300'\r
                                            : order.statusColor === 'orange'\r
                                              ? 'text-orange-700 dark:text-orange-300'\r
                                              : 'text-green-700 dark:text-green-300')\r
                                    "\r
                                ></i>\r
                                <span\r
                                    [ngClass]="{\r
                                        'text-sm font-bold': true,\r
                                        'text-surface-600 dark:text-surface-300': order.statusColor === 'surface',\r
                                        'text-orange-700 dark:text-orange-300': order.statusColor === 'orange',\r
                                        'text-green-700 dark:text-green-300': order.statusColor === 'green'\r
                                    }"\r
                                    >{{ order.statusLabel }}</span\r
                                >\r
                            </div>\r
                        </div>\r
\r
                        <div class="flex flex-col items-start sm:items-center flex-1">\r
                            <div class="text-surface-500 dark:text-surface-400 text-sm mb-1 sm:hidden">Total</div>\r
                            <span class="text-surface-700 dark:text-surface-300 text-base font-semibold leading-tight">{{ order.total }}</span>\r
                        </div>\r
\r
                        <div class="flex items-center justify-start sm:justify-center flex-1">\r
                            <button\r
                                pButton\r
                                severity="secondary"\r
                                [text]="true"\r
                                [rounded]="true"\r
                                class="w-10 h-10"\r
                                pStyleClass=".order-content-{{ order.id }}"\r
                                enterFromClass="hidden"\r
                                enterActiveClass="animate-slidedown"\r
                                leaveToClass="hidden"\r
                                leaveActiveClass="animate-slideup"\r
                                (click)="toggleChevron(order.id); $event.stopPropagation()"\r
                            >\r
                                <i [class]="'pi pi-chevron-down chevron-icon-' + order.id + ' transition-transform duration-300'" pButtonIcon></i>\r
                            </button>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <div [class]="'order-content-' + order.id + ' hidden overflow-hidden'">\r
                    <div class="flex flex-col gap-6 p-6 border-t border-surface-200 dark:border-surface-700">\r
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">\r
                            <div class="border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden">\r
                                <div class="p-4 bg-surface-50 dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700">\r
                                    <h3 class="text-surface-900 dark:text-surface-0 text-base font-semibold leading-tight">Billing Address</h3>\r
                                </div>\r
                                <div class="p-6 flex flex-col gap-5">\r
                                    <div class="flex gap-2">\r
                                        <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">Name</span>\r
                                        <span class="flex-1 text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ getOrderCustomer(order.id).name }}</span>\r
                                    </div>\r
                                    <div class="flex gap-2">\r
                                        <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">Address</span>\r
                                        <span class="flex-1 text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ getOrderCustomer(order.id).address }}</span>\r
                                    </div>\r
                                    <div class="flex gap-2">\r
                                        <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">City</span>\r
                                        <span class="flex-1 text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ getOrderCustomer(order.id).city }}</span>\r
                                    </div>\r
                                    <div class="flex gap-2">\r
                                        <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">Country</span>\r
                                        <span class="flex-1 text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ getOrderCustomer(order.id).country }}</span>\r
                                    </div>\r
                                    <div class="flex gap-2">\r
                                        <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">Zip Code</span>\r
                                        <span class="flex-1 text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ getOrderCustomer(order.id).zipCode }}</span>\r
                                    </div>\r
                                    <div class="flex gap-2">\r
                                        <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">Phone</span>\r
                                        <span class="flex-1 text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ getOrderCustomer(order.id).phone | phoneFormat }}</span>\r
                                    </div>\r
                                </div>\r
                            </div>\r
\r
                            <div class="border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden">\r
                                <div class="p-4 bg-surface-50 dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700">\r
                                    <h3 class="text-surface-900 dark:text-surface-0 text-base font-semibold leading-tight">Shipping Address</h3>\r
                                </div>\r
                                <div class="p-6 flex flex-col gap-5">\r
                                    <div class="flex gap-2">\r
                                        <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">Name</span>\r
                                        <span class="flex-1 text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ getOrderCustomer(order.id).name }}</span>\r
                                    </div>\r
                                    <div class="flex gap-2">\r
                                        <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">Address</span>\r
                                        <span class="flex-1 text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ getOrderCustomer(order.id).address }}</span>\r
                                    </div>\r
                                    <div class="flex gap-2">\r
                                        <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">City</span>\r
                                        <span class="flex-1 text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ getOrderCustomer(order.id).city }}</span>\r
                                    </div>\r
                                    <div class="flex gap-2">\r
                                        <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">Country</span>\r
                                        <span class="flex-1 text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ getOrderCustomer(order.id).country }}</span>\r
                                    </div>\r
                                    <div class="flex gap-2">\r
                                        <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">Zip Code</span>\r
                                        <span class="flex-1 text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ getOrderCustomer(order.id).zipCode }}</span>\r
                                    </div>\r
                                    <div class="flex gap-2">\r
                                        <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">Phone</span>\r
                                        <span class="flex-1 text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ getOrderCustomer(order.id).phone | phoneFormat }}</span>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
                        <div class="border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden">\r
                            <div class="p-4 bg-surface-50 dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700 flex justify-between items-center">\r
                                <h3 class="text-surface-900 dark:text-surface-0 text-base font-semibold leading-tight">Payment Information</h3>\r
                                <div class="flex items-center gap-4">\r
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">\r
                                        <ellipse cx="5.85" cy="9.00027" rx="4.725" ry="4.725" fill="#EF4444" />\r
                                        <ellipse cx="12.1508" cy="9.00027" rx="4.725" ry="4.725" fill="#F59E0B" />\r
                                        <path\r
                                            d="M9.00078 12.5224C9.96747 11.6573 10.5758 10.4 10.5758 9.00059C10.5758 7.60119 9.96747 6.34393 9.00078 5.47876C8.03409 6.34393 7.42578 7.60119 7.42578 9.00059C7.42578 10.4 8.03409 11.6573 9.00078 12.5224Z"\r
                                            fill="#F97316"\r
                                        />\r
                                    </svg>\r
                                    <span class="text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ getOrderPayment(order.id).cardNumber }}</span>\r
                                </div>\r
                            </div>\r
                            <div class="p-6 flex flex-col gap-5">\r
                                <div class="flex flex-col gap-4">\r
                                    <div class="flex justify-between items-center">\r
                                        <span class="text-surface-700 dark:text-surface-300 text-base leading-tight">Subtotal</span>\r
                                        <span class="text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ getOrderPayment(order.id).subtotal }}</span>\r
                                    </div>\r
                                    <div class="flex justify-between items-center">\r
                                        <span class="text-surface-700 dark:text-surface-300 text-base leading-tight">Shipping</span>\r
                                        <span class="text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ getOrderPayment(order.id).shipping }}</span>\r
                                    </div>\r
                                    <div class="flex justify-between items-center">\r
                                        <span class="text-surface-700 dark:text-surface-300 text-base leading-tight">Estimated Tax</span>\r
                                        <span class="text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ getOrderPayment(order.id).tax }}</span>\r
                                    </div>\r
                                    <div class="h-px bg-surface-200 dark:bg-surface-700"></div>\r
                                    <div class="flex justify-between items-center">\r
                                        <span class="text-surface-700 dark:text-surface-300 text-base leading-tight">Total</span>\r
                                        <span class="text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ order.total }}</span>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        }\r
\r
        @if (filteredOrders().length === 0) {\r
            <div class="text-center py-12">\r
                <div class="text-surface-500 dark:text-surface-400 text-lg mb-2">No orders found</div>\r
                <div class="text-surface-400 dark:text-surface-500 text-base">Try adjusting your search or filter criteria</div>\r
            </div>\r
        }\r
    </div>\r
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FactureVenteListe2, { className: "FactureVenteListe2", filePath: "src/app/pages/ventes/facture-vente-liste2/facture-vente-liste2.ts", lineNumber: 54 });
})();
export {
  FactureVenteListe2
};
//# sourceMappingURL=chunk-JH6BKVLP.js.map
