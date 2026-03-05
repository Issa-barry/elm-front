import {
  AppConfigurator,
  Qr
} from "./chunk-KSSIRR3U.js";
import {
  Drawer,
  DrawerModule
} from "./chunk-DF7SEUEM.js";
import "./chunk-QHAUGTLE.js";
import {
  LayoutService
} from "./chunk-GWE5GNKF.js";
import {
  StyleClass,
  StyleClassModule
} from "./chunk-KOFBRCUJ.js";
import {
  authorizationGuard
} from "./chunk-6UL5U7NG.js";
import {
  AuthService
} from "./chunk-A74EIJKM.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  provideRouter,
  withHashLocation,
  withInMemoryScrolling
} from "./chunk-JKQZ5BV4.js";
import {
  DomRendererFactory2,
  bootstrapApplication
} from "./chunk-DPFCOBAB.js";
import "./chunk-2BDEB7LG.js";
import {
  Toast,
  ToastModule
} from "./chunk-AYC4YOKB.js";
import "./chunk-5T35AX3S.js";
import "./chunk-EHW3ML5B.js";
import "./chunk-VG7UIPHA.js";
import {
  UsineContextService
} from "./chunk-7GQXFRTV.js";
import {
  environment
} from "./chunk-CSVYKJ4F.js";
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
  provideHttpClient,
  withFetch,
  withInterceptors
} from "./chunk-K7KGEHY2.js";
import {
  Select,
  SelectModule
} from "./chunk-MHHPFZ62.js";
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
  Tooltip,
  TooltipModule
} from "./chunk-STJD6333.js";
import "./chunk-OKTFETPA.js";
import {
  InputText,
  InputTextModule
} from "./chunk-VA6E3YEN.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-LK4MJDWN.js";
import "./chunk-HDOAYFIF.js";
import "./chunk-K2CZRXIH.js";
import {
  Button,
  ButtonDirective,
  ButtonModule
} from "./chunk-ZB6W2VB3.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-V6ACHPKV.js";
import {
  Badge,
  BadgeModule
} from "./chunk-IRKOPIT4.js";
import {
  DomHandler,
  Ripple,
  RippleModule
} from "./chunk-6MK22ZAB.js";
import "./chunk-37IESOSH.js";
import {
  MessageService,
  PrimeTemplate,
  providePrimeNG
} from "./chunk-EC5CTPX4.js";
import {
  AsyncPipe,
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-TGBATRWC.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-WWG27WRZ.js";
import {
  ANIMATION_MODULE_TYPE,
  ApplicationRef,
  BehaviorSubject,
  ChangeDetectionScheduler,
  Component,
  DOCUMENT,
  ElementRef,
  HostBinding,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NEVER,
  NgModule,
  NgZone,
  Observable,
  Renderer2,
  RendererFactory2,
  RuntimeError,
  Subject,
  ViewChild,
  ViewEncapsulation,
  catchError,
  computed,
  effect,
  filter,
  finalize,
  formatRuntimeError,
  inject,
  isDevMode,
  makeEnvironmentProviders,
  map,
  performanceMarkFeature,
  provideAppInitializer,
  setClassMetadata,
  switchMap,
  take,
  takeUntil,
  throwError,
  timer,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵinterpolate1,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-ZUORBSMF.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// node_modules/@angular/platform-browser/fesm2022/animations/async.mjs
var ANIMATION_PREFIX = "@";
var AsyncAnimationRendererFactory = class _AsyncAnimationRendererFactory {
  doc;
  delegate;
  zone;
  animationType;
  moduleImpl;
  _rendererFactoryPromise = null;
  scheduler = null;
  injector = inject(Injector);
  loadingSchedulerFn = inject(\u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN, {
    optional: true
  });
  _engine;
  /**
   *
   * @param moduleImpl allows to provide a mock implmentation (or will load the animation module)
   */
  constructor(doc, delegate, zone, animationType, moduleImpl) {
    this.doc = doc;
    this.delegate = delegate;
    this.zone = zone;
    this.animationType = animationType;
    this.moduleImpl = moduleImpl;
  }
  /** @docs-private */
  ngOnDestroy() {
    this._engine?.flush();
  }
  /**
   * @internal
   */
  loadImpl() {
    const loadFn = () => this.moduleImpl ?? import("./chunk-2YJKYTBV.js").then((m) => m);
    let moduleImplPromise;
    if (this.loadingSchedulerFn) {
      moduleImplPromise = this.loadingSchedulerFn(loadFn);
    } else {
      moduleImplPromise = loadFn();
    }
    return moduleImplPromise.catch((e) => {
      throw new RuntimeError(5300, (typeof ngDevMode === "undefined" || ngDevMode) && "Async loading for animations package was enabled, but loading failed. Angular falls back to using regular rendering. No animations will be displayed and their styles won't be applied.");
    }).then(({
      \u0275createEngine,
      \u0275AnimationRendererFactory
    }) => {
      this._engine = \u0275createEngine(this.animationType, this.doc);
      const rendererFactory = new \u0275AnimationRendererFactory(this.delegate, this._engine, this.zone);
      this.delegate = rendererFactory;
      return rendererFactory;
    });
  }
  /**
   * This method is delegating the renderer creation to the factories.
   * It uses default factory while the animation factory isn't loaded
   * and will rely on the animation factory once it is loaded.
   *
   * Calling this method will trigger as side effect the loading of the animation module
   * if the renderered component uses animations.
   */
  createRenderer(hostElement, rendererType) {
    const renderer = this.delegate.createRenderer(hostElement, rendererType);
    if (renderer.\u0275type === 0) {
      return renderer;
    }
    if (typeof renderer.throwOnSyntheticProps === "boolean") {
      renderer.throwOnSyntheticProps = false;
    }
    const dynamicRenderer = new DynamicDelegationRenderer(renderer);
    if (rendererType?.data?.["animation"] && !this._rendererFactoryPromise) {
      this._rendererFactoryPromise = this.loadImpl();
    }
    this._rendererFactoryPromise?.then((animationRendererFactory) => {
      const animationRenderer = animationRendererFactory.createRenderer(hostElement, rendererType);
      dynamicRenderer.use(animationRenderer);
      this.scheduler ??= this.injector.get(ChangeDetectionScheduler, null, {
        optional: true
      });
      this.scheduler?.notify(
        10
        /* NotificationSource.AsyncAnimationsLoaded */
      );
    }).catch((e) => {
      dynamicRenderer.use(renderer);
    });
    return dynamicRenderer;
  }
  begin() {
    this.delegate.begin?.();
  }
  end() {
    this.delegate.end?.();
  }
  whenRenderingDone() {
    return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
  }
  /**
   * Used during HMR to clear any cached data about a component.
   * @param componentId ID of the component that is being replaced.
   */
  componentReplaced(componentId) {
    this._engine?.flush();
    this.delegate.componentReplaced?.(componentId);
  }
  static \u0275fac = function AsyncAnimationRendererFactory_Factory(__ngFactoryType__) {
    \u0275\u0275invalidFactory();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AsyncAnimationRendererFactory,
    factory: _AsyncAnimationRendererFactory.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncAnimationRendererFactory, [{
    type: Injectable
  }], () => [{
    type: Document
  }, {
    type: RendererFactory2
  }, {
    type: NgZone
  }, {
    type: void 0
  }, {
    type: Promise
  }], null);
})();
var DynamicDelegationRenderer = class {
  delegate;
  // List of callbacks that need to be replayed on the animation renderer once its loaded
  replay = [];
  \u0275type = 1;
  constructor(delegate) {
    this.delegate = delegate;
  }
  use(impl) {
    this.delegate = impl;
    if (this.replay !== null) {
      for (const fn of this.replay) {
        fn(impl);
      }
      this.replay = null;
    }
  }
  get data() {
    return this.delegate.data;
  }
  destroy() {
    this.replay = null;
    this.delegate.destroy();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  get destroyNode() {
    return this.delegate.destroyNode;
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
  }
  insertBefore(parent, newChild, refChild, isMove) {
    this.delegate.insertBefore(parent, newChild, refChild, isMove);
  }
  removeChild(parent, oldChild, isHostElement, requireSynchronousElementRemoval) {
    this.delegate.removeChild(parent, oldChild, isHostElement, requireSynchronousElementRemoval);
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style2, value, flags) {
    this.delegate.setStyle(el, style2, value, flags);
  }
  removeStyle(el, style2, flags) {
    this.delegate.removeStyle(el, style2, flags);
  }
  setProperty(el, name, value) {
    if (this.shouldReplay(name)) {
      this.replay.push((renderer) => renderer.setProperty(el, name, value));
    }
    this.delegate.setProperty(el, name, value);
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback, options) {
    if (this.shouldReplay(eventName)) {
      this.replay.push((renderer) => renderer.listen(target, eventName, callback, options));
    }
    return this.delegate.listen(target, eventName, callback, options);
  }
  shouldReplay(propOrEventName) {
    return this.replay !== null && propOrEventName.startsWith(ANIMATION_PREFIX);
  }
};
var \u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN = new InjectionToken(ngDevMode ? "async_animation_loading_scheduler_fn" : "");
function provideAnimationsAsync(type = "animations") {
  performanceMarkFeature("NgAsyncAnimations");
  if (false) {
    type = "noop";
  }
  return makeEnvironmentProviders([{
    provide: RendererFactory2,
    useFactory: (doc, renderer, zone) => {
      return new AsyncAnimationRendererFactory(doc, renderer, zone, type);
    },
    deps: [DOCUMENT, DomRendererFactory2, NgZone]
  }, {
    provide: ANIMATION_MODULE_TYPE,
    useValue: type === "noop" ? "NoopAnimations" : "BrowserAnimations"
  }]);
}

// node_modules/@angular/service-worker/fesm2022/service-worker.mjs
var ERR_SW_NOT_SUPPORTED = "Service workers are disabled or not supported by this browser";
var NgswCommChannel = class {
  serviceWorker;
  worker;
  registration;
  events;
  constructor(serviceWorker, injector) {
    this.serviceWorker = serviceWorker;
    if (!serviceWorker) {
      this.worker = this.events = this.registration = new Observable((subscriber) => subscriber.error(new RuntimeError(5601, (typeof ngDevMode === "undefined" || ngDevMode) && ERR_SW_NOT_SUPPORTED)));
    } else {
      let currentWorker = null;
      const workerSubject = new Subject();
      this.worker = new Observable((subscriber) => {
        if (currentWorker !== null) {
          subscriber.next(currentWorker);
        }
        return workerSubject.subscribe((v) => subscriber.next(v));
      });
      const updateController = () => {
        const {
          controller
        } = serviceWorker;
        if (controller === null) {
          return;
        }
        currentWorker = controller;
        workerSubject.next(currentWorker);
      };
      serviceWorker.addEventListener("controllerchange", updateController);
      updateController();
      this.registration = this.worker.pipe(switchMap(() => serviceWorker.getRegistration().then((registration) => {
        if (!registration) {
          throw new RuntimeError(5601, (typeof ngDevMode === "undefined" || ngDevMode) && ERR_SW_NOT_SUPPORTED);
        }
        return registration;
      })));
      const _events = new Subject();
      this.events = _events.asObservable();
      const messageListener = (event) => {
        const {
          data
        } = event;
        if (data?.type) {
          _events.next(data);
        }
      };
      serviceWorker.addEventListener("message", messageListener);
      const appRef = injector?.get(ApplicationRef, null, {
        optional: true
      });
      appRef?.onDestroy(() => {
        serviceWorker.removeEventListener("controllerchange", updateController);
        serviceWorker.removeEventListener("message", messageListener);
      });
    }
  }
  postMessage(action, payload) {
    return new Promise((resolve) => {
      this.worker.pipe(take(1)).subscribe((sw) => {
        sw.postMessage(__spreadValues({
          action
        }, payload));
        resolve();
      });
    });
  }
  postMessageWithOperation(type, payload, operationNonce) {
    const waitForOperationCompleted = this.waitForOperationCompleted(operationNonce);
    const postMessage = this.postMessage(type, payload);
    return Promise.all([postMessage, waitForOperationCompleted]).then(([, result]) => result);
  }
  generateNonce() {
    return Math.round(Math.random() * 1e7);
  }
  eventsOfType(type) {
    let filterFn;
    if (typeof type === "string") {
      filterFn = (event) => event.type === type;
    } else {
      filterFn = (event) => type.includes(event.type);
    }
    return this.events.pipe(filter(filterFn));
  }
  nextEventOfType(type) {
    return this.eventsOfType(type).pipe(take(1));
  }
  waitForOperationCompleted(nonce) {
    return new Promise((resolve, reject) => {
      this.eventsOfType("OPERATION_COMPLETED").pipe(filter((event) => event.nonce === nonce), take(1), map((event) => {
        if (event.result !== void 0) {
          return event.result;
        }
        throw new Error(event.error);
      })).subscribe({
        next: resolve,
        error: reject
      });
    });
  }
  get isEnabled() {
    return !!this.serviceWorker;
  }
};
var SwPush = class _SwPush {
  sw;
  /**
   * Emits the payloads of the received push notification messages.
   */
  messages;
  /**
   * Emits the payloads of the received push notification messages as well as the action the user
   * interacted with. If no action was used the `action` property contains an empty string `''`.
   *
   * Note that the `notification` property does **not** contain a
   * [Notification][Mozilla Notification] object but rather a
   * [NotificationOptions](https://notifications.spec.whatwg.org/#dictdef-notificationoptions)
   * object that also includes the `title` of the [Notification][Mozilla Notification] object.
   *
   * [Mozilla Notification]: https://developer.mozilla.org/en-US/docs/Web/API/Notification
   *
   * @see [Notification click handling](ecosystem/service-workers/push-notifications#notification-click-handling)
   *
   */
  notificationClicks;
  /**
   * Emits the payloads of notifications that were closed, along with the action (if any)
   * associated with the close event. If no action was used, the `action` property contains
   * an empty string `''`.
   *
   * Note that the `notification` property does **not** contain a
   * [Notification][Mozilla Notification] object but rather a
   * [NotificationOptions](https://notifications.spec.whatwg.org/#dictdef-notificationoptions)
   * object that also includes the `title` of the [Notification][Mozilla Notification] object.
   *
   * [Mozilla Notification]: https://developer.mozilla.org/en-US/docs/Web/API/Notification
   */
  notificationCloses;
  /**
   * Emits updates to the push subscription, including both the previous (`oldSubscription`)
   * and current (`newSubscription`) values. Either subscription may be `null`, depending on
   * the context:
   *
   * - `oldSubscription` is `null` if no previous subscription existed.
   * - `newSubscription` is `null` if the subscription was invalidated and not replaced.
   *
   * This stream allows clients to react to automatic changes in push subscriptions,
   * such as those triggered by browser expiration or key rotation.
   *
   * [Push API]: https://w3c.github.io/push-api
   */
  pushSubscriptionChanges;
  /**
   * Emits the currently active
   * [PushSubscription](https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription)
   * associated to the Service Worker registration or `null` if there is no subscription.
   */
  subscription;
  /**
   * True if the Service Worker is enabled (supported by the browser and enabled via
   * `ServiceWorkerModule`).
   */
  get isEnabled() {
    return this.sw.isEnabled;
  }
  pushManager = null;
  subscriptionChanges = new Subject();
  constructor(sw) {
    this.sw = sw;
    if (!sw.isEnabled) {
      this.messages = NEVER;
      this.notificationClicks = NEVER;
      this.notificationCloses = NEVER;
      this.pushSubscriptionChanges = NEVER;
      this.subscription = NEVER;
      return;
    }
    this.messages = this.sw.eventsOfType("PUSH").pipe(map((message) => message.data));
    this.notificationClicks = this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(map((message) => message.data));
    this.notificationCloses = this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(map((message) => message.data));
    this.pushSubscriptionChanges = this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(map((message) => message.data));
    this.pushManager = this.sw.registration.pipe(map((registration) => registration.pushManager));
    const workerDrivenSubscriptions = this.pushManager.pipe(switchMap((pm) => pm.getSubscription()));
    this.subscription = new Observable((subscriber) => {
      const workerDrivenSubscription = workerDrivenSubscriptions.subscribe(subscriber);
      const subscriptionChanges = this.subscriptionChanges.subscribe(subscriber);
      return () => {
        workerDrivenSubscription.unsubscribe();
        subscriptionChanges.unsubscribe();
      };
    });
  }
  /**
   * Subscribes to Web Push Notifications,
   * after requesting and receiving user permission.
   *
   * @param options An object containing the `serverPublicKey` string.
   * @returns A Promise that resolves to the new subscription object.
   */
  requestSubscription(options) {
    if (!this.sw.isEnabled || this.pushManager === null) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    const pushOptions = {
      userVisibleOnly: true
    };
    let key = this.decodeBase64(options.serverPublicKey.replace(/_/g, "/").replace(/-/g, "+"));
    let applicationServerKey = new Uint8Array(new ArrayBuffer(key.length));
    for (let i = 0; i < key.length; i++) {
      applicationServerKey[i] = key.charCodeAt(i);
    }
    pushOptions.applicationServerKey = applicationServerKey;
    return new Promise((resolve, reject) => {
      this.pushManager.pipe(switchMap((pm) => pm.subscribe(pushOptions)), take(1)).subscribe({
        next: (sub) => {
          this.subscriptionChanges.next(sub);
          resolve(sub);
        },
        error: reject
      });
    });
  }
  /**
   * Unsubscribes from Service Worker push notifications.
   *
   * @returns A Promise that is resolved when the operation succeeds, or is rejected if there is no
   *          active subscription or the unsubscribe operation fails.
   */
  unsubscribe() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    const doUnsubscribe = (sub) => {
      if (sub === null) {
        throw new RuntimeError(5602, (typeof ngDevMode === "undefined" || ngDevMode) && "Not subscribed to push notifications.");
      }
      return sub.unsubscribe().then((success) => {
        if (!success) {
          throw new RuntimeError(5603, (typeof ngDevMode === "undefined" || ngDevMode) && "Unsubscribe failed!");
        }
        this.subscriptionChanges.next(null);
      });
    };
    return new Promise((resolve, reject) => {
      this.subscription.pipe(take(1), switchMap(doUnsubscribe)).subscribe({
        next: resolve,
        error: reject
      });
    });
  }
  decodeBase64(input) {
    return atob(input);
  }
  static \u0275fac = function SwPush_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SwPush)(\u0275\u0275inject(NgswCommChannel));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SwPush,
    factory: _SwPush.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwPush, [{
    type: Injectable
  }], () => [{
    type: NgswCommChannel
  }], null);
})();
var SwUpdate = class _SwUpdate {
  sw;
  /**
   * Emits a `VersionDetectedEvent` event whenever a new version is detected on the server.
   *
   * Emits a `VersionInstallationFailedEvent` event whenever checking for or downloading a new
   * version fails.
   *
   * Emits a `VersionReadyEvent` event whenever a new version has been downloaded and is ready for
   * activation.
   *
   * @see [Version updates](ecosystem/service-workers/communications#version-updates)
   *
   */
  versionUpdates;
  /**
   * Emits an `UnrecoverableStateEvent` event whenever the version of the app used by the service
   * worker to serve this client is in a broken state that cannot be recovered from without a full
   * page reload.
   */
  unrecoverable;
  /**
   * True if the Service Worker is enabled (supported by the browser and enabled via
   * `ServiceWorkerModule`).
   */
  get isEnabled() {
    return this.sw.isEnabled;
  }
  ongoingCheckForUpdate = null;
  constructor(sw) {
    this.sw = sw;
    if (!sw.isEnabled) {
      this.versionUpdates = NEVER;
      this.unrecoverable = NEVER;
      return;
    }
    this.versionUpdates = this.sw.eventsOfType(["VERSION_DETECTED", "VERSION_INSTALLATION_FAILED", "VERSION_READY", "NO_NEW_VERSION_DETECTED"]);
    this.unrecoverable = this.sw.eventsOfType("UNRECOVERABLE_STATE");
  }
  /**
   * Checks for an update and waits until the new version is downloaded from the server and ready
   * for activation.
   *
   * @returns a promise that
   * - resolves to `true` if a new version was found and is ready to be activated.
   * - resolves to `false` if no new version was found
   * - rejects if any error occurs
   */
  checkForUpdate() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    if (this.ongoingCheckForUpdate) {
      return this.ongoingCheckForUpdate;
    }
    const nonce = this.sw.generateNonce();
    this.ongoingCheckForUpdate = this.sw.postMessageWithOperation("CHECK_FOR_UPDATES", {
      nonce
    }, nonce).finally(() => {
      this.ongoingCheckForUpdate = null;
    });
    return this.ongoingCheckForUpdate;
  }
  /**
   * Updates the current client (i.e. browser tab) to the latest version that is ready for
   * activation.
   *
   * In most cases, you should not use this method and instead should update a client by reloading
   * the page.
   *
   * <div class="docs-alert docs-alert-important">
   *
   * Updating a client without reloading can easily result in a broken application due to a version
   * mismatch between the application shell and other page resources,
   * such as lazy-loaded chunks, whose filenames may change between
   * versions.
   *
   * Only use this method, if you are certain it is safe for your specific use case.
   *
   * </div>
   *
   * @returns a promise that
   *  - resolves to `true` if an update was activated successfully
   *  - resolves to `false` if no update was available (for example, the client was already on the
   *    latest version).
   *  - rejects if any error occurs
   */
  activateUpdate() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new RuntimeError(5601, (typeof ngDevMode === "undefined" || ngDevMode) && ERR_SW_NOT_SUPPORTED));
    }
    const nonce = this.sw.generateNonce();
    return this.sw.postMessageWithOperation("ACTIVATE_UPDATE", {
      nonce
    }, nonce);
  }
  static \u0275fac = function SwUpdate_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SwUpdate)(\u0275\u0275inject(NgswCommChannel));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SwUpdate,
    factory: _SwUpdate.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwUpdate, [{
    type: Injectable
  }], () => [{
    type: NgswCommChannel
  }], null);
})();
var SCRIPT = new InjectionToken(ngDevMode ? "NGSW_REGISTER_SCRIPT" : "");
function ngswAppInitializer() {
  if (false) {
    return;
  }
  const options = inject(SwRegistrationOptions);
  if (!("serviceWorker" in navigator && options.enabled !== false)) {
    return;
  }
  const script = inject(SCRIPT);
  const ngZone = inject(NgZone);
  const appRef = inject(ApplicationRef);
  ngZone.runOutsideAngular(() => {
    const sw = navigator.serviceWorker;
    const onControllerChange = () => sw.controller?.postMessage({
      action: "INITIALIZE"
    });
    sw.addEventListener("controllerchange", onControllerChange);
    appRef.onDestroy(() => {
      sw.removeEventListener("controllerchange", onControllerChange);
    });
  });
  ngZone.runOutsideAngular(() => {
    let readyToRegister;
    const {
      registrationStrategy
    } = options;
    if (typeof registrationStrategy === "function") {
      readyToRegister = new Promise((resolve) => registrationStrategy().subscribe(() => resolve()));
    } else {
      const [strategy, ...args] = (registrationStrategy || "registerWhenStable:30000").split(":");
      switch (strategy) {
        case "registerImmediately":
          readyToRegister = Promise.resolve();
          break;
        case "registerWithDelay":
          readyToRegister = delayWithTimeout(+args[0] || 0);
          break;
        case "registerWhenStable":
          readyToRegister = Promise.race([appRef.whenStable(), delayWithTimeout(+args[0])]);
          break;
        default:
          throw new RuntimeError(5600, (typeof ngDevMode === "undefined" || ngDevMode) && `Unknown ServiceWorker registration strategy: ${options.registrationStrategy}`);
      }
    }
    readyToRegister.then(() => {
      if (appRef.destroyed) {
        return;
      }
      navigator.serviceWorker.register(script, {
        scope: options.scope,
        updateViaCache: options.updateViaCache,
        type: options.type
      }).catch((err) => console.error(formatRuntimeError(5604, (typeof ngDevMode === "undefined" || ngDevMode) && "Service worker registration failed with: " + err)));
    });
  });
}
function delayWithTimeout(timeout) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}
function ngswCommChannelFactory(opts, injector) {
  const isBrowser = true;
  return new NgswCommChannel(isBrowser && opts.enabled !== false ? navigator.serviceWorker : void 0, injector);
}
var SwRegistrationOptions = class {
  /**
   * Whether the ServiceWorker will be registered and the related services (such as `SwPush` and
   * `SwUpdate`) will attempt to communicate and interact with it.
   *
   * Default: true
   */
  enabled;
  /**
   * The value of the setting used to determine the circumstances in which the browser
   * will consult the HTTP cache when it tries to update the service worker or any scripts that are imported via importScripts().
   * [ServiceWorkerRegistration.updateViaCache](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/updateViaCache)
   */
  updateViaCache;
  /**
   * The type of the ServiceWorker script to register.
   * [ServiceWorkerRegistration#type](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register#type)
   * - `classic`: Registers the script as a classic worker. ES module features such as `import` and `export` are NOT allowed in the script.
   * - `module`: Registers the script as an ES module. Allows use of `import`/`export` syntax and module features.
   *
   * @default 'classic'
   */
  type;
  /**
   * A URL that defines the ServiceWorker's registration scope; that is, what range of URLs it can
   * control. It will be used when calling
   * [ServiceWorkerContainer#register()](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register).
   */
  scope;
  /**
   * Defines the ServiceWorker registration strategy, which determines when it will be registered
   * with the browser.
   *
   * The default behavior of registering once the application stabilizes (i.e. as soon as there are
   * no pending micro- and macro-tasks) is designed to register the ServiceWorker as soon as
   * possible but without affecting the application's first time load.
   *
   * Still, there might be cases where you want more control over when the ServiceWorker is
   * registered (for example, there might be a long-running timeout or polling interval, preventing
   * the app from stabilizing). The available option are:
   *
   * - `registerWhenStable:<timeout>`: Register as soon as the application stabilizes (no pending
   *     micro-/macro-tasks) but no later than `<timeout>` milliseconds. If the app hasn't
   *     stabilized after `<timeout>` milliseconds (for example, due to a recurrent asynchronous
   *     task), the ServiceWorker will be registered anyway.
   *     If `<timeout>` is omitted, the ServiceWorker will only be registered once the app
   *     stabilizes.
   * - `registerImmediately`: Register immediately.
   * - `registerWithDelay:<timeout>`: Register with a delay of `<timeout>` milliseconds. For
   *     example, use `registerWithDelay:5000` to register the ServiceWorker after 5 seconds. If
   *     `<timeout>` is omitted, is defaults to `0`, which will register the ServiceWorker as soon
   *     as possible but still asynchronously, once all pending micro-tasks are completed.
   * - An Observable factory function: A function that returns an `Observable`.
   *     The function will be used at runtime to obtain and subscribe to the `Observable` and the
   *     ServiceWorker will be registered as soon as the first value is emitted.
   *
   * Default: 'registerWhenStable:30000'
   */
  registrationStrategy;
};
function provideServiceWorker(script, options = {}) {
  return makeEnvironmentProviders([SwPush, SwUpdate, {
    provide: SCRIPT,
    useValue: script
  }, {
    provide: SwRegistrationOptions,
    useValue: options
  }, {
    provide: NgswCommChannel,
    useFactory: ngswCommChannelFactory,
    deps: [SwRegistrationOptions, Injector]
  }, provideAppInitializer(ngswAppInitializer)]);
}
var ServiceWorkerModule = class _ServiceWorkerModule {
  /**
   * Register the given Angular Service Worker script.
   *
   * If `enabled` is set to `false` in the given options, the module will behave as if service
   * workers are not supported by the browser, and the service worker will not be registered.
   */
  static register(script, options = {}) {
    return {
      ngModule: _ServiceWorkerModule,
      providers: [provideServiceWorker(script, options)]
    };
  }
  static \u0275fac = function ServiceWorkerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServiceWorkerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ServiceWorkerModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [SwPush, SwUpdate]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceWorkerModule, [{
    type: NgModule,
    args: [{
      providers: [SwPush, SwUpdate]
    }]
  }], null, null);
})();

// src/app/guards/auth.guard.ts
var authGuard = (route, state2) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isAuthenticated()) {
    return true;
  }
  router.navigate(["/auth/login"], {
    queryParams: { returnUrl: state2.url },
    replaceUrl: true
  });
  return false;
};

// src/app/guards/guest.guard.ts
var guestGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (!authService.isAuthenticated()) {
    return true;
  }
  router.navigate(["/"]);
  return false;
};

// src/app/layout/components/app.breadcrumb.ts
var _c0 = ["app-breadcrumb", ""];
function AppBreadcrumb_ng_template_2_li_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 3);
    \u0275\u0275text(1, "/");
    \u0275\u0275elementEnd();
  }
}
function AppBreadcrumb_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, AppBreadcrumb_ng_template_2_li_2_Template, 2, 0, "li", 2);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const last_r2 = ctx.last;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r2);
  }
}
var AppBreadcrumb = class _AppBreadcrumb {
  router;
  _breadcrumbs$ = new BehaviorSubject([]);
  breadcrumbs$ = this._breadcrumbs$.asObservable();
  constructor(router) {
    this.router = router;
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      const root = this.router.routerState.snapshot.root;
      const breadcrumbs = [];
      this.addBreadcrumb(root, [], breadcrumbs);
      this._breadcrumbs$.next(breadcrumbs);
    });
  }
  addBreadcrumb(route, parentUrl, breadcrumbs) {
    const routeUrl = parentUrl.concat(route.url.map((url) => url.path));
    const breadcrumb = route.data["breadcrumb"];
    const parentBreadcrumb = route.parent && route.parent.data ? route.parent.data["breadcrumb"] : null;
    if (breadcrumb && breadcrumb !== parentBreadcrumb) {
      breadcrumbs.push({
        label: route.data["breadcrumb"],
        url: "/" + routeUrl.join("/")
      });
    }
    if (route.firstChild) {
      this.addBreadcrumb(route.firstChild, routeUrl, breadcrumbs);
    }
  }
  static \u0275fac = function AppBreadcrumb_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppBreadcrumb)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppBreadcrumb, selectors: [["", "app-breadcrumb", ""]], attrs: _c0, decls: 4, vars: 3, consts: [[1, "layout-breadcrumb"], ["ngFor", "", 3, "ngForOf"], ["class", "layout-breadcrumb-chevron", 4, "ngIf"], [1, "layout-breadcrumb-chevron"]], template: function AppBreadcrumb_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "ol");
      \u0275\u0275template(2, AppBreadcrumb_ng_template_2_Template, 3, 2, "ng-template", 1);
      \u0275\u0275pipe(3, "async");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(3, 1, ctx.breadcrumbs$));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, AsyncPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppBreadcrumb, [{
    type: Component,
    args: [{
      selector: "[app-breadcrumb]",
      standalone: true,
      imports: [CommonModule, RouterModule],
      template: `<nav class="layout-breadcrumb">
        <ol>
            <ng-template
                ngFor
                let-item
                let-last="last"
                [ngForOf]="breadcrumbs$ | async"
            >
                <li>{{ item.label }}</li>
                <li *ngIf="!last" class="layout-breadcrumb-chevron">/</li>
            </ng-template>
        </ol>
    </nav> `
    }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppBreadcrumb, { className: "AppBreadcrumb", filePath: "src/app/layout/components/app.breadcrumb.ts", lineNumber: 35 });
})();

// src/app/layout/components/app.usine-selector.ts
function AppUsineSelector_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 0);
    \u0275\u0275element(1, "i", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("pTooltip", "Site : " + ctx_r0.currentLabel());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.currentLabel(), " ");
  }
}
function AppUsineSelector_Conditional_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275element(1, "i");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap("pi " + ((opt_r3 == null ? null : opt_r3.icon) ?? "pi-building"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r3 == null ? null : opt_r3.label, " ");
  }
}
function AppUsineSelector_Conditional_1_ng_template_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background", ctx_r0.subscriptionColor(opt_r4.subscriptionStatus));
    \u0275\u0275property("title", ctx_r0.subscriptionLabel(opt_r4.subscriptionStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.subscriptionLabel(opt_r4.subscriptionStatus), " ");
  }
}
function AppUsineSelector_Conditional_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275element(1, "i");
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, AppUsineSelector_Conditional_1_ng_template_2_Conditional_3_Template, 2, 4, "span", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap("pi " + ((opt_r4 == null ? null : opt_r4.icon) ?? "pi-building"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r4 == null ? null : opt_r4.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((opt_r4 == null ? null : opt_r4.subscriptionStatus) ? 3 : -1);
  }
}
function AppUsineSelector_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-select", 3);
    \u0275\u0275listener("ngModelChange", function AppUsineSelector_Conditional_1_Template_p_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onUsineChange($event));
    });
    \u0275\u0275template(1, AppUsineSelector_Conditional_1_ng_template_1_Template, 3, 3, "ng-template", 4)(2, AppUsineSelector_Conditional_1_ng_template_2_Template, 4, 4, "ng-template", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("options", ctx_r0.options())("ngModel", ctx_r0.selectedValue());
  }
}
var AppUsineSelector = class _AppUsineSelector {
  usineCtx = inject(UsineContextService);
  subscriptionLabel(status) {
    const labels = {
      active: "Actif",
      trial: "Periode d'essai",
      suspended: "Suspendu",
      cancelled: "Annule"
    };
    return status ? labels[status] ?? String(status) : "";
  }
  subscriptionColor(status) {
    const colors = {
      active: "#22c55e",
      trial: "#3b82f6",
      suspended: "#f97316",
      cancelled: "#ef4444"
    };
    return status ? colors[status] ?? "#94a3b8" : "#94a3b8";
  }
  options = computed(() => {
    const usines = this.usineCtx.accessibleUsines();
    const opts = usines.map((u) => ({
      label: u.nom,
      value: u.id,
      icon: "pi-building",
      subscriptionStatus: u.subscription_status
    }));
    if (this.usineCtx.isSiegeUser()) {
      opts.unshift({ label: "Tous les sites", value: null, icon: "pi-globe" });
    }
    return opts;
  }, ...ngDevMode ? [{ debugName: "options" }] : []);
  selectedValue = computed(() => {
    if (this.usineCtx.isConsolidated())
      return null;
    return this.usineCtx.currentUsineId();
  }, ...ngDevMode ? [{ debugName: "selectedValue" }] : []);
  showSelector = computed(() => {
    const n = this.usineCtx.accessibleUsines().length;
    return this.usineCtx.isSiegeUser() || n > 1;
  }, ...ngDevMode ? [{ debugName: "showSelector" }] : []);
  showLabel = computed(() => {
    const n = this.usineCtx.accessibleUsines().length;
    return !this.usineCtx.isSiegeUser() && n === 1;
  }, ...ngDevMode ? [{ debugName: "showLabel" }] : []);
  currentLabel = computed(() => {
    if (this.usineCtx.isConsolidated())
      return "Tous les sites";
    return this.usineCtx.currentUsine()?.nom ?? "-";
  }, ...ngDevMode ? [{ debugName: "currentLabel" }] : []);
  onUsineChange(value) {
    if (value === null) {
      this.usineCtx.enableConsolidatedView();
      return;
    }
    this.usineCtx.switchUsine(value);
  }
  static \u0275fac = function AppUsineSelector_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppUsineSelector)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppUsineSelector, selectors: [["app-usine-selector"]], decls: 2, vars: 2, consts: [["tooltipPosition", "bottom", 1, "usine-badge", 3, "pTooltip"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Choisir un site", "styleClass", "usine-select", "appendTo", "body", 3, "options", "ngModel"], [1, "pi", "pi-building"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Choisir un site", "styleClass", "usine-select", "appendTo", "body", 3, "ngModelChange", "options", "ngModel"], ["pTemplate", "selectedItem"], ["pTemplate", "item"], [1, "usine-option"], [1, "usine-sub-badge", 3, "background", "title"], [1, "usine-sub-badge", 3, "title"]], template: function AppUsineSelector_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, AppUsineSelector_Conditional_0_Template, 3, 2, "span", 0);
      \u0275\u0275conditionalCreate(1, AppUsineSelector_Conditional_1_Template, 3, 2, "p-select", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.showLabel() ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showSelector() ? 1 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, NgControlStatus, NgModel, SelectModule, Select, PrimeTemplate, TooltipModule, Tooltip], styles: ["\n\n.usine-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.25rem 0.75rem;\n  border-radius: 1rem;\n  background: var(--surface-100);\n  color: var(--text-color);\n  font-size: 0.8rem;\n  font-weight: 600;\n  border: 1px solid var(--surface-border);\n  white-space: nowrap;\n}\n.usine-option[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n[_nghost-%COMP%]     .usine-select .p-select {\n  font-size: 0.85rem;\n  min-width: 150px;\n  max-width: 210px;\n}\n[_nghost-%COMP%]     .usine-select .p-select-label {\n  padding: 0.35rem 0.5rem;\n}\n.usine-sub-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.05rem 0.4rem;\n  border-radius: 0.75rem;\n  font-size: 0.65rem;\n  font-weight: 600;\n  color: #fff;\n  line-height: 1.4;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=app.usine-selector.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppUsineSelector, [{
    type: Component,
    args: [{ selector: "app-usine-selector", standalone: true, imports: [CommonModule, FormsModule, SelectModule, TooltipModule], template: `
    @if (showLabel()) {
      <span
        class="usine-badge"
        [pTooltip]="'Site : ' + currentLabel()"
        tooltipPosition="bottom">
        <i class="pi pi-building"></i>
        {{ currentLabel() }}
      </span>
    }

    @if (showSelector()) {
      <p-select
        [options]="options()"
        [ngModel]="selectedValue()"
        optionLabel="label"
        optionValue="value"
        placeholder="Choisir un site"
        styleClass="usine-select"
        appendTo="body"
        (ngModelChange)="onUsineChange($event)">

        <ng-template pTemplate="selectedItem" let-opt>
          <span class="usine-option">
            <i [class]="'pi ' + (opt?.icon ?? 'pi-building')"></i>
            {{ opt?.label }}
          </span>
        </ng-template>

        <ng-template pTemplate="item" let-opt>
          <span class="usine-option">
            <i [class]="'pi ' + (opt?.icon ?? 'pi-building')"></i>
            {{ opt?.label }}
            @if (opt?.subscriptionStatus) {
              <span
                class="usine-sub-badge"
                [style.background]="subscriptionColor(opt.subscriptionStatus)"
                [title]="subscriptionLabel(opt.subscriptionStatus)">
                {{ subscriptionLabel(opt.subscriptionStatus) }}
              </span>
            }
          </span>
        </ng-template>
      </p-select>
    }
  `, styles: ["/* angular:styles/component:scss;8a76d04ce32e5833bcffd55299b0308b8796f912e5d2442bbcaa8f91c77b82f3;C:/laragon/www/FRONT/elm-front/src/app/layout/components/app.usine-selector.ts */\n.usine-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.25rem 0.75rem;\n  border-radius: 1rem;\n  background: var(--surface-100);\n  color: var(--text-color);\n  font-size: 0.8rem;\n  font-weight: 600;\n  border: 1px solid var(--surface-border);\n  white-space: nowrap;\n}\n.usine-option {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n:host ::ng-deep .usine-select .p-select {\n  font-size: 0.85rem;\n  min-width: 150px;\n  max-width: 210px;\n}\n:host ::ng-deep .usine-select .p-select-label {\n  padding: 0.35rem 0.5rem;\n}\n.usine-sub-badge {\n  display: inline-block;\n  padding: 0.05rem 0.4rem;\n  border-radius: 0.75rem;\n  font-size: 0.65rem;\n  font-weight: 600;\n  color: #fff;\n  line-height: 1.4;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=app.usine-selector.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppUsineSelector, { className: "AppUsineSelector", filePath: "src/app/layout/components/app.usine-selector.ts", lineNumber: 119 });
})();

// src/app/services/notifications/notification.service.ts
var NotificationService = class _NotificationService {
  http;
  apiUrl = `${environment.apiUrl}/notifications`;
  constructor(http) {
    this.http = http;
  }
  /** GET /api/v1/notifications?unread_only=true */
  getNotifications(unreadOnly = true) {
    const params = new HttpParams().set("unread_only", unreadOnly);
    return this.http.get(this.apiUrl, { params }).pipe(map((r) => r.data), catchError((err) => throwError(() => err)));
  }
  /** POST /api/v1/notifications/{id}/read */
  markAsRead(id) {
    return this.http.post(`${this.apiUrl}/${id}/read`, {}).pipe(map((r) => r.data), catchError((err) => throwError(() => err)));
  }
  /** POST /api/v1/notifications/read-all */
  markAllAsRead() {
    return this.http.post(`${this.apiUrl}/read-all`, {}).pipe(map((r) => r.data), catchError((err) => throwError(() => err)));
  }
  static \u0275fac = function NotificationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationService, factory: _NotificationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/layout/components/app.topbar.ts
var _c02 = ["menubutton"];
var _c1 = ["app-topbar", ""];
function AppTopbar_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.unreadCount > 99 ? "99+" : ctx_r1.unreadCount, " ");
  }
}
var AppTopbar = class _AppTopbar {
  layoutService;
  notificationService;
  menuButton;
  unreadCount = 0;
  destroy$ = new Subject();
  constructor(layoutService, notificationService) {
    this.layoutService = layoutService;
    this.notificationService = notificationService;
  }
  ngOnInit() {
    timer(0, 6e4).pipe(switchMap(() => this.notificationService.getNotifications(true)), takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        this.unreadCount = res.unread_count;
      },
      error: () => {
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  onMenuButtonClick() {
    this.layoutService.onMenuToggle();
  }
  onConfigButtonClick() {
    this.layoutService.showConfigSidebar();
  }
  onProfileClick() {
    this.layoutService.showProfileSidebar();
  }
  static \u0275fac = function AppTopbar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppTopbar)(\u0275\u0275directiveInject(LayoutService), \u0275\u0275directiveInject(NotificationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppTopbar, selectors: [["", "app-topbar", ""]], viewQuery: function AppTopbar_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.menuButton = _t.first);
    }
  }, attrs: _c1, decls: 21, vars: 2, consts: [["menubutton", ""], [1, "layout-topbar"], [1, "topbar-start"], ["type", "button", 1, "topbar-menubutton", "p-link", "p-trigger", "hover:cursor-pointer", 3, "click"], [1, "pi", "pi-bars"], ["app-breadcrumb", "", 1, "topbar-breadcrumb"], [1, "topbar-end"], [1, "topbar-menu"], [1, "topbar-search"], [1, "pi", "pi-search"], ["type", "text", "pInputText", "", "placeholder", "Rechercher...", 1, "w-48", "sm:w-full"], [1, "topbar-usine", "hidden", "md:flex", "items-center"], [1, "ml-3"], ["icon", "pi pi-palette", "rounded", "", 3, "onClick"], [1, "topbar-profile"], ["type", "button", "tooltipPosition", "bottom", 1, "p-link", "hover:cursor-pointer", 3, "click", "pTooltip"], [1, "avatar-wrap"], ["src", "/layout/images/avatar.png", "alt", "Profil"], ["class", "avatar-badge", 4, "ngIf"], [1, "avatar-badge"]], template: function AppTopbar_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "button", 3, 0);
      \u0275\u0275listener("click", function AppTopbar_Template_button_click_2_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onMenuButtonClick());
      });
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275element(5, "nav", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 6)(7, "ul", 7)(8, "li", 8)(9, "p-iconfield");
      \u0275\u0275element(10, "p-inputicon", 9)(11, "input", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "li", 11);
      \u0275\u0275element(13, "app-usine-selector");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "li", 12)(15, "p-button", 13);
      \u0275\u0275listener("onClick", function AppTopbar_Template_p_button_onClick_15_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onConfigButtonClick());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "li", 14)(17, "button", 15);
      \u0275\u0275listener("click", function AppTopbar_Template_button_click_17_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onProfileClick());
      });
      \u0275\u0275elementStart(18, "div", 16);
      \u0275\u0275element(19, "img", 17);
      \u0275\u0275template(20, AppTopbar_span_20_Template, 2, 1, "span", 18);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(17);
      \u0275\u0275property("pTooltip", ctx.unreadCount > 0 ? ctx.unreadCount + " notification(s) non lue(s)" : "Mon profil");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.unreadCount > 0);
    }
  }, dependencies: [
    RouterModule,
    CommonModule,
    NgIf,
    StyleClassModule,
    AppBreadcrumb,
    AppUsineSelector,
    InputTextModule,
    InputText,
    ButtonModule,
    Button,
    IconFieldModule,
    IconField,
    InputIconModule,
    InputIcon,
    TooltipModule,
    Tooltip
  ], styles: ["/* angular:styles/component:scss;e89a991b7b0131c4499e3e14af5ba982aeb632f0bbec0f0534fd4ce5bb94d0f2;C:/laragon/www/FRONT/elm-front/src/app/layout/components/app.topbar.ts */\n.avatar-wrap {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.avatar-wrap img {\n  display: block;\n  border-radius: 50%;\n}\n.avatar-badge {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  background: var(--red-500, #ef4444);\n  color: #fff;\n  border-radius: 50%;\n  min-width: 18px;\n  height: 18px;\n  font-size: 10px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 3px;\n  pointer-events: none;\n  border: 2px solid var(--surface-card, #fff);\n  line-height: 1;\n}\n/*# sourceMappingURL=app.topbar.css.map */\n"], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppTopbar, [{
    type: Component,
    args: [{ selector: "[app-topbar]", standalone: true, encapsulation: ViewEncapsulation.None, imports: [
      RouterModule,
      CommonModule,
      StyleClassModule,
      AppBreadcrumb,
      AppUsineSelector,
      InputTextModule,
      ButtonModule,
      IconFieldModule,
      InputIconModule,
      TooltipModule
    ], template: `
        <div class="layout-topbar">
            <div class="topbar-start">
                <button
                    #menubutton
                    type="button"
                    class="topbar-menubutton p-link p-trigger hover:cursor-pointer"
                    (click)="onMenuButtonClick()"
                >
                    <i class="pi pi-bars"></i>
                </button>
                <nav app-breadcrumb class="topbar-breadcrumb"></nav>
            </div>

            <div class="topbar-end">
                <ul class="topbar-menu">
                    <li class="topbar-search">
                        <p-iconfield>
                            <p-inputicon class="pi pi-search" />
                            <input type="text" pInputText placeholder="Rechercher..." class="w-48 sm:w-full" />
                        </p-iconfield>
                    </li>

                    <li class="topbar-usine hidden md:flex items-center">
                        <app-usine-selector />
                    </li>

                    <li class="ml-3">
                        <p-button icon="pi pi-palette" rounded (onClick)="onConfigButtonClick()" />
                    </li>

                    <li class="topbar-profile">
                        <button
                            type="button"
                            class="p-link hover:cursor-pointer"
                            (click)="onProfileClick()"
                            [pTooltip]="unreadCount > 0 ? unreadCount + ' notification(s) non lue(s)' : 'Mon profil'"
                            tooltipPosition="bottom"
                        >
                            <div class="avatar-wrap">
                                <img src="/layout/images/avatar.png" alt="Profil" />
                                <span class="avatar-badge" *ngIf="unreadCount > 0">
                                    {{ unreadCount > 99 ? '99+' : unreadCount }}
                                </span>
                            </div>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    `, styles: ["/* angular:styles/component:scss;e89a991b7b0131c4499e3e14af5ba982aeb632f0bbec0f0534fd4ce5bb94d0f2;C:/laragon/www/FRONT/elm-front/src/app/layout/components/app.topbar.ts */\n.avatar-wrap {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.avatar-wrap img {\n  display: block;\n  border-radius: 50%;\n}\n.avatar-badge {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  background: var(--red-500, #ef4444);\n  color: #fff;\n  border-radius: 50%;\n  min-width: 18px;\n  height: 18px;\n  font-size: 10px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 3px;\n  pointer-events: none;\n  border: 2px solid var(--surface-card, #fff);\n  line-height: 1;\n}\n/*# sourceMappingURL=app.topbar.css.map */\n"] }]
  }], () => [{ type: LayoutService }, { type: NotificationService }], { menuButton: [{
    type: ViewChild,
    args: ["menubutton"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppTopbar, { className: "AppTopbar", filePath: "src/app/layout/components/app.topbar.ts", lineNumber: 119 });
})();

// src/app/layout/components/app.menuitem.ts
var _c03 = ["submenu"];
var _c12 = ["app-menuitem", ""];
var _c2 = () => ({ paths: "exact", queryParams: "ignored", matrixParams: "ignored", fragment: "ignored" });
function AppMenuitem_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.item.label, " ");
  }
}
function AppMenuitem_a_2_i_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 10);
  }
}
function AppMenuitem_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 6);
    \u0275\u0275listener("click", function AppMenuitem_a_2_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.itemClick($event));
    })("mouseenter", function AppMenuitem_a_2_Template_a_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onMouseEnter());
    });
    \u0275\u0275element(1, "i", 7);
    \u0275\u0275elementStart(2, "span", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AppMenuitem_a_2_i_4_Template, 1, 0, "i", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.item.class)("pTooltip", ctx_r0.item.label)("tooltipDisabled", !(ctx_r0.isSlim() && ctx_r0.root && !ctx_r0.active));
    \u0275\u0275attribute("href", ctx_r0.item.url, \u0275\u0275sanitizeUrl)("target", ctx_r0.item.target);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.item.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.item.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.item.items);
  }
}
function AppMenuitem_a_3_i_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 10);
  }
}
function AppMenuitem_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 11);
    \u0275\u0275listener("click", function AppMenuitem_a_3_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.itemClick($event));
    })("mouseenter", function AppMenuitem_a_3_Template_a_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onMouseEnter());
    });
    \u0275\u0275element(1, "i", 7);
    \u0275\u0275elementStart(2, "span", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AppMenuitem_a_3_i_4_Template, 1, 0, "i", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.item.class)("routerLink", ctx_r0.item.routerLink)("routerLinkActiveOptions", ctx_r0.item.routerLinkActiveOptions || \u0275\u0275pureFunction0(16, _c2))("fragment", ctx_r0.item.fragment)("queryParamsHandling", ctx_r0.item.queryParamsHandling)("preserveFragment", ctx_r0.item.preserveFragment)("skipLocationChange", ctx_r0.item.skipLocationChange)("replaceUrl", ctx_r0.item.replaceUrl)("state", ctx_r0.item.state)("queryParams", ctx_r0.item.queryParams)("pTooltip", ctx_r0.item.label)("tooltipDisabled", !(ctx_r0.isSlim() && ctx_r0.root));
    \u0275\u0275attribute("target", ctx_r0.item.target);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.item.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.item.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.item.items);
  }
}
function AppMenuitem_ul_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 13);
  }
  if (rf & 2) {
    const child_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(child_r5["badgeClass"]);
    \u0275\u0275property("item", child_r5)("index", i_r6)("parentKey", ctx_r0.key);
  }
}
function AppMenuitem_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ul", null, 0);
    \u0275\u0275listener("@children.done", function AppMenuitem_ul_4_Template_ul_animation_children_done_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSubmenuAnimated($event));
    });
    \u0275\u0275template(2, AppMenuitem_ul_4_ng_template_2_Template, 1, 5, "ng-template", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("@children", ctx_r0.submenuAnimation);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.item.items);
  }
}
var AppMenuitem = class _AppMenuitem {
  layoutService;
  router;
  item;
  index;
  root;
  parentKey;
  submenu;
  get activeClass() {
    return this.active;
  }
  active = false;
  menuSourceSubscription;
  menuResetSubscription;
  key = "";
  get submenuAnimation() {
    if (this.layoutService.isDesktop() && (this.layoutService.isHorizontal() || this.layoutService.isSlim() || this.layoutService.isSlimPlus())) {
      return this.active ? "visible" : "hidden";
    } else
      return this.root ? "expanded" : this.active ? "expanded" : "collapsed";
  }
  isSlim = computed(() => this.layoutService.isSlim(), ...ngDevMode ? [{ debugName: "isSlim" }] : []);
  isSlimPlus = computed(() => this.layoutService.isSlimPlus(), ...ngDevMode ? [{ debugName: "isSlimPlus" }] : []);
  isHorizontal = computed(() => this.layoutService.isHorizontal(), ...ngDevMode ? [{ debugName: "isHorizontal" }] : []);
  get isDesktop() {
    return this.layoutService.isDesktop();
  }
  get isMobile() {
    return this.layoutService.isMobile();
  }
  constructor(layoutService, router) {
    this.layoutService = layoutService;
    this.router = router;
    this.menuSourceSubscription = this.layoutService.menuSource$.subscribe((value) => {
      Promise.resolve(null).then(() => {
        if (value.routeEvent) {
          this.active = value.key === this.key || value.key.startsWith(this.key + "-") ? true : false;
        } else {
          if (value.key !== this.key && !value.key.startsWith(this.key + "-")) {
            this.active = false;
          }
        }
      });
    });
    this.menuResetSubscription = this.layoutService.resetSource$.subscribe(() => {
      this.active = false;
    });
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((params) => {
      if (this.isSlimPlus() || this.isSlim() || this.isHorizontal()) {
        this.active = false;
      } else {
        if (this.item.routerLink) {
          this.updateActiveStateFromRoute();
        }
      }
    });
  }
  ngOnInit() {
    this.key = this.parentKey ? this.parentKey + "-" + this.index : String(this.index);
    if (!(this.isSlimPlus() || this.isSlim() || this.isHorizontal()) && this.item.routerLink) {
      this.updateActiveStateFromRoute();
    }
  }
  ngAfterViewChecked() {
    if (this.root && this.active && this.isDesktop && (this.isHorizontal() || this.isSlim() || this.isSlimPlus())) {
      this.calculatePosition(this.submenu?.nativeElement, this.submenu?.nativeElement.parentElement);
    }
  }
  updateActiveStateFromRoute() {
    let activeRoute = this.router.isActive(this.item.routerLink[0], {
      paths: "exact",
      queryParams: "ignored",
      matrixParams: "ignored",
      fragment: "ignored"
    });
    if (activeRoute) {
      this.layoutService.onMenuStateChange({
        key: this.key,
        routeEvent: true
      });
    }
  }
  onSubmenuAnimated(event) {
    if (event.toState === "visible" && this.isDesktop && (this.isHorizontal() || this.isSlim() || this.isSlimPlus())) {
      const el = event.element;
      const elParent = el.parentElement;
      this.calculatePosition(el, elParent);
    }
  }
  calculatePosition(overlay, target) {
    if (overlay) {
      const { left, top } = target.getBoundingClientRect();
      const [vWidth, vHeight] = [window.innerWidth, window.innerHeight];
      const [oWidth, oHeight] = [overlay.offsetWidth, overlay.offsetHeight];
      const scrollbarWidth = DomHandler.calculateScrollbarWidth();
      overlay.style.top = "";
      overlay.style.left = "";
      if (this.layoutService.isHorizontal()) {
        const width = left + oWidth + scrollbarWidth;
        overlay.style.left = vWidth < width ? `${left - (width - vWidth)}px` : `${left}px`;
      } else if (this.layoutService.isSlim() || this.layoutService.isSlimPlus()) {
        const height = top + oHeight;
        overlay.style.top = vHeight < height ? `${top - (height - vHeight)}px` : `${top}px`;
      }
    }
  }
  itemClick(event) {
    if (this.item.disabled) {
      event.preventDefault();
      return;
    }
    if (this.root && this.isSlim() || this.isHorizontal() || this.isSlimPlus()) {
      this.layoutService.layoutState.update((val) => __spreadProps(__spreadValues({}, val), {
        menuHoverActive: !val.menuHoverActive
      }));
    }
    if (this.item.command) {
      this.item.command({ originalEvent: event, item: this.item });
    }
    if (this.item.items) {
      this.active = !this.active;
      if (this.root && this.active && (this.isSlim() || this.isHorizontal() || this.isSlimPlus())) {
        this.layoutService.onOverlaySubmenuOpen();
      }
    } else {
      if (this.layoutService.isMobile()) {
        this.layoutService.layoutState.update((val) => __spreadProps(__spreadValues({}, val), {
          staticMenuMobileActive: false
        }));
      }
      if (this.isSlim() || this.isHorizontal() || this.isSlimPlus()) {
        this.layoutService.reset();
        this.layoutService.layoutState.update((val) => __spreadProps(__spreadValues({}, val), {
          menuHoverActive: false
        }));
      }
    }
    this.layoutService.onMenuStateChange({ key: this.key });
  }
  onMouseEnter() {
    if (this.root && (this.isSlim() || this.isHorizontal() || this.isSlimPlus()) && this.layoutService.isDesktop()) {
      if (this.layoutService.layoutState().menuHoverActive) {
        this.active = true;
        this.layoutService.onMenuStateChange({ key: this.key });
      }
    }
  }
  ngOnDestroy() {
    if (this.menuSourceSubscription) {
      this.menuSourceSubscription.unsubscribe();
    }
    if (this.menuResetSubscription) {
      this.menuResetSubscription.unsubscribe();
    }
  }
  static \u0275fac = function AppMenuitem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppMenuitem)(\u0275\u0275directiveInject(LayoutService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppMenuitem, selectors: [["", "app-menuitem", ""]], viewQuery: function AppMenuitem_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c03, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.submenu = _t.first);
    }
  }, hostVars: 4, hostBindings: function AppMenuitem_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("layout-root-menuitem", ctx.root)("active-menuitem", ctx.activeClass);
    }
  }, inputs: { item: "item", index: "index", root: "root", parentKey: "parentKey" }, attrs: _c12, decls: 5, vars: 4, consts: [["submenu", ""], ["class", "layout-menuitem-root-text", 4, "ngIf"], ["tabindex", "0", "pRipple", "", 3, "ngClass", "pTooltip", "tooltipDisabled", "click", "mouseenter", 4, "ngIf"], ["routerLinkActive", "active-route", "tabindex", "0", "pRipple", "", 3, "ngClass", "routerLink", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "queryParams", "pTooltip", "tooltipDisabled", "click", "mouseenter", 4, "ngIf"], [4, "ngIf"], [1, "layout-menuitem-root-text"], ["tabindex", "0", "pRipple", "", 3, "click", "mouseenter", "ngClass", "pTooltip", "tooltipDisabled"], [1, "layout-menuitem-icon", 3, "ngClass"], [1, "layout-menuitem-text"], ["class", "pi pi-fw pi-angle-down layout-submenu-toggler", 4, "ngIf"], [1, "pi", "pi-fw", "pi-angle-down", "layout-submenu-toggler"], ["routerLinkActive", "active-route", "tabindex", "0", "pRipple", "", 3, "click", "mouseenter", "ngClass", "routerLink", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "queryParams", "pTooltip", "tooltipDisabled"], ["ngFor", "", 3, "ngForOf"], ["app-menuitem", "", 3, "item", "index", "parentKey"]], template: function AppMenuitem_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementContainerStart(0);
      \u0275\u0275template(1, AppMenuitem_div_1_Template, 2, 1, "div", 1)(2, AppMenuitem_a_2_Template, 5, 8, "a", 2)(3, AppMenuitem_a_3_Template, 5, 17, "a", 3)(4, AppMenuitem_ul_4_Template, 3, 2, "ul", 4);
      \u0275\u0275elementContainerEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.root && ctx.item.visible !== false);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (!ctx.item.routerLink || ctx.item.items) && ctx.item.visible !== false);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.item.routerLink && !ctx.item.items && ctx.item.visible !== false);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.item.items && ctx.item.visible !== false);
    }
  }, dependencies: [_AppMenuitem, CommonModule, NgClass, NgForOf, NgIf, RouterModule, RouterLink, RouterLinkActive, RippleModule, Ripple, TooltipModule, Tooltip], encapsulation: 2, data: { animation: [
    trigger("children", [
      state("collapsed", style({
        height: "0"
      })),
      state("expanded", style({
        height: "*"
      })),
      state("hidden", style({
        display: "none"
      })),
      state("visible", style({
        display: "block"
      })),
      transition("collapsed <=> expanded", animate("400ms cubic-bezier(0.86, 0, 0.07, 1)"))
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppMenuitem, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[app-menuitem]",
      imports: [CommonModule, RouterModule, RippleModule, TooltipModule],
      template: `
        <ng-container>
            <div *ngIf="root && item.visible !== false" class="layout-menuitem-root-text">
                {{ item.label }}
            </div>
            <a
                *ngIf="(!item.routerLink || item.items) && item.visible !== false"
                [attr.href]="item.url"
                (click)="itemClick($event)"
                (mouseenter)="onMouseEnter()"
                [ngClass]="item.class"
                [attr.target]="item.target"
                tabindex="0"
                pRipple
                [pTooltip]="item.label"
                [tooltipDisabled]="!(isSlim() && root && !active)"
            >
                <i [ngClass]="item.icon" class="layout-menuitem-icon"></i>
                <span class="layout-menuitem-text">{{ item.label }}</span>
                <i class="pi pi-fw pi-angle-down layout-submenu-toggler" *ngIf="item.items"></i>
            </a>
            <a
                *ngIf="item.routerLink && !item.items && item.visible !== false"
                (click)="itemClick($event)"
                (mouseenter)="onMouseEnter()"
                [ngClass]="item.class"
                [routerLink]="item.routerLink"
                routerLinkActive="active-route"
                [routerLinkActiveOptions]="
                    item.routerLinkActiveOptions || {
                        paths: 'exact',
                        queryParams: 'ignored',
                        matrixParams: 'ignored',
                        fragment: 'ignored'
                    }
                "
                [fragment]="item.fragment"
                [queryParamsHandling]="item.queryParamsHandling"
                [preserveFragment]="item.preserveFragment"
                [skipLocationChange]="item.skipLocationChange"
                [replaceUrl]="item.replaceUrl"
                [state]="item.state"
                [queryParams]="item.queryParams"
                [attr.target]="item.target"
                tabindex="0"
                pRipple
                [pTooltip]="item.label"
                [tooltipDisabled]="!(isSlim() && root)"
            >
                <i [ngClass]="item.icon" class="layout-menuitem-icon"></i>
                <span class="layout-menuitem-text">{{ item.label }}</span>
                <i class="pi pi-fw pi-angle-down layout-submenu-toggler" *ngIf="item.items"></i>
            </a>

            <ul #submenu *ngIf="item.items && item.visible !== false" [@children]="submenuAnimation" (@children.done)="onSubmenuAnimated($event)">
                <ng-template ngFor let-child let-i="index" [ngForOf]="item.items">
                    <li app-menuitem [item]="child" [index]="i" [parentKey]="key" [class]="child['badgeClass']"></li>
                </ng-template>
            </ul>
        </ng-container>
    `,
      animations: [
        trigger("children", [
          state("collapsed", style({
            height: "0"
          })),
          state("expanded", style({
            height: "*"
          })),
          state("hidden", style({
            display: "none"
          })),
          state("visible", style({
            display: "block"
          })),
          transition("collapsed <=> expanded", animate("400ms cubic-bezier(0.86, 0, 0.07, 1)"))
        ])
      ]
    }]
  }], () => [{ type: LayoutService }, { type: Router }], { item: [{
    type: Input
  }], index: [{
    type: Input
  }], root: [{
    type: Input
  }, {
    type: HostBinding,
    args: ["class.layout-root-menuitem"]
  }], parentKey: [{
    type: Input
  }], submenu: [{
    type: ViewChild,
    args: ["submenu"]
  }], activeClass: [{
    type: HostBinding,
    args: ["class.active-menuitem"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppMenuitem, { className: "AppMenuitem", filePath: "src/app/layout/components/app.menuitem.ts", lineNumber: 108 });
})();

// src/app/layout/components/app.menu.ts
function AppMenu_ng_container_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const item_r2 = ctx_r0.$implicit;
    const i_r3 = ctx_r0.index;
    \u0275\u0275property("item", item_r2)("index", i_r3)("root", true);
  }
}
function AppMenu_ng_container_1_li_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 5);
  }
}
function AppMenu_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AppMenu_ng_container_1_li_1_Template, 1, 3, "li", 2)(2, AppMenu_ng_container_1_li_2_Template, 1, 0, "li", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r2.separator);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.separator);
  }
}
var AppMenu = class _AppMenu {
  model = [];
  authService = inject(AuthService);
  constructor() {
    effect(() => {
      this.authService.currentUser();
      this.model = this.buildMenuModel();
    });
  }
  buildMenuModel() {
    return [
      {
        label: "Dashboards",
        icon: "pi pi-home",
        items: [
          {
            label: "Dashboard",
            icon: "pi pi-fw pi-chart-bar",
            routerLink: ["/dashboard"]
          }
        ]
      },
      // {
      //   label: 'Administration',
      //   icon: 'pi pi-shield',
      //   items: [
      //     {
      //       label: 'Organisations',
      //       icon: 'pi pi-fw pi-building',
      //       routerLink: ['/organisations'],
      //       visible: this.authService.hasAnyRole(['super_admin', 'super-admin']),
      //     },
      //     {
      //       label: 'Sites',
      //       icon: 'pi pi-fw pi-map-marker',
      //       routerLink: ['/sites'],
      //       visible: this.authService.hasAnyPermission(['sites.read']),
      //     },
      //     {
      //       label: 'Parametres',
      //       icon: 'pi pi-fw pi-cog',
      //       routerLink: ['/parametres'],
      //     },
      //   ],
      // },
      {
        label: "Modules",
        icon: "pi pi-th-large",
        items: [
          {
            label: "Packing",
            icon: "pi pi-fw pi-box",
            routerLink: ["/packings"],
            visible: this.authService.hasAnyPermission(["packings.read", "packing.read"])
          },
          {
            label: "Contacts",
            icon: "pi pi-fw pi-address-book",
            visible: this.authService.hasAnyPermission(["prestataires.read", "prestataire.read", "users.read", "user.read"]),
            items: [
              {
                label: "Prestataires externes",
                icon: "pi pi-fw pi-users",
                routerLink: ["/contacts/prestataires"],
                visible: this.authService.hasAnyPermission(["prestataires.read", "prestataire.read"])
              },
              {
                label: "Utilisateurs",
                icon: "pi pi-fw pi-user",
                routerLink: ["/contacts/utilisateurs"],
                visible: this.authService.hasAnyPermission(["users.read", "user.read", "utilisateurs.read", "utilisateur.read"])
              }
            ]
          },
          {
            label: "Produits",
            icon: "pi pi-fw pi-barcode",
            routerLink: ["/produits"],
            visible: this.authService.hasAnyPermission(["produits.read", "produit.read", "products.read", "product.read"])
          }
        ]
      }
      // {
      //   label: 'Compte',
      //   icon: 'pi pi-user',
      //   items: [
      //     {
      //       label: 'Mon profil',
      //       icon: 'pi pi-fw pi-id-card',
      //       routerLink: ['/profile'],
      //     },
      //   ],
      // },
    ];
  }
  static \u0275fac = function AppMenu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppMenu)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppMenu, selectors: [["app-menu"]], decls: 2, vars: 1, consts: [[1, "layout-menu"], [4, "ngFor", "ngForOf"], ["app-menuitem", "", 3, "item", "index", "root", 4, "ngIf"], ["class", "menu-separator", 4, "ngIf"], ["app-menuitem", "", 3, "item", "index", "root"], [1, "menu-separator"]], template: function AppMenu_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ul", 0);
      \u0275\u0275template(1, AppMenu_ng_container_1_Template, 3, 2, "ng-container", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.model);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, AppMenuitem, RouterModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppMenu, [{
    type: Component,
    args: [{
      selector: "app-menu",
      standalone: true,
      imports: [CommonModule, AppMenuitem, RouterModule],
      template: `<ul class="layout-menu">
    <ng-container *ngFor="let item of model; let i = index">
      <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
      <li *ngIf="item.separator" class="menu-separator"></li>
    </ng-container>
  </ul>`
    }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppMenu, { className: "AppMenu", filePath: "src/app/layout/components/app.menu.ts", lineNumber: 26 });
})();

// src/app/layout/components/app.sidebar.ts
var _c04 = ["menuContainer"];
var _c13 = ["app-sidebar", ""];
var _c22 = () => ["/"];
var AppSidebar = class _AppSidebar {
  layoutService;
  el;
  timeout = null;
  menuContainer;
  constructor(layoutService, el) {
    this.layoutService = layoutService;
    this.el = el;
  }
  onMouseEnter() {
    if (!this.layoutService.layoutState().anchored) {
      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = null;
      }
      this.layoutService.layoutState.update((state2) => {
        if (!state2.sidebarActive) {
          return __spreadProps(__spreadValues({}, state2), {
            sidebarActive: true
          });
        }
        return state2;
      });
    }
  }
  onMouseLeave() {
    if (!this.layoutService.layoutState().anchored) {
      if (!this.timeout) {
        this.timeout = setTimeout(() => {
          this.layoutService.layoutState.update((state2) => {
            if (state2.sidebarActive) {
              return __spreadProps(__spreadValues({}, state2), {
                sidebarActive: false
              });
            }
            return state2;
          });
        }, 300);
      }
    }
  }
  anchor() {
    this.layoutService.layoutState.update((state2) => __spreadProps(__spreadValues({}, state2), {
      anchored: !state2.anchored
    }));
  }
  static \u0275fac = function AppSidebar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppSidebar)(\u0275\u0275directiveInject(LayoutService), \u0275\u0275directiveInject(ElementRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppSidebar, selectors: [["", "app-sidebar", ""]], viewQuery: function AppSidebar_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c04, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.menuContainer = _t.first);
    }
  }, attrs: _c13, decls: 24, vars: 2, consts: [["menuContainer", ""], [1, "layout-sidebar", 3, "mouseenter", "mouseleave"], [1, "sidebar-header"], [1, "app-logo", 3, "routerLink"], ["viewBox", "0 0 125 28", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", "role", "img", "aria-label", "FELLO", 1, "app-logo-normal"], ["d", "M7.99963 25.0003L6.48368 21L4.99963 24.9997L7.99963 25.0003Z", "fill", "var(--logo-color)"], ["d", "M15.8667 21L18 25H14L15.8667 21Z", "fill", "var(--logo-color)"], ["d", "M11.4851 2L1 24.9465H4.53702L11.4856 10.0784L18.2944 24.9465H21.9715L11.4851 2Z", "fill", "var(--logo-color)"], ["d", "M27.598 21V6.45455H36.6179V8.34375H29.7926V12.7756H35.9716V14.6577H29.7926V21H27.598Z", "fill", "var(--logo-color)"], ["d", "M40.3168 21V6.45455H49.4361V8.34375H42.5114V12.7756H48.9602V14.6577H42.5114V19.1108H49.5213V21H40.3168Z", "fill", "var(--logo-color)"], ["d", "M54.3675 21V6.45455H56.5621V19.1108H63.1531V21H54.3675Z", "fill", "var(--logo-color)"], ["d", "M68.6566 21V6.45455H70.8512V19.1108H77.4421V21H68.6566Z", "fill", "var(--logo-color)"], ["transform", "translate(12 0)", "d", "M82.0142 13.7273C82.0142 15.2803 81.7301 16.6155 81.1619 17.733C80.5938 18.8456 79.8149 19.7027 78.8253 20.304C77.8404 20.9006 76.7206 21.1989 75.4659 21.1989C74.2064 21.1989 73.0819 20.9006 72.0923 20.304C71.1075 19.7027 70.331 18.8433 69.7628 17.7259C69.1946 16.6084 68.9105 15.2756 68.9105 13.7273C68.9105 12.1742 69.1946 10.8414 69.7628 9.72869C70.331 8.61127 71.1075 7.75426 72.0923 7.15767C73.0819 6.55634 74.2064 6.25568 75.4659 6.25568C76.7206 6.25568 77.8404 6.55634 78.8253 7.15767C79.8149 7.75426 80.5938 8.61127 81.1619 9.72869C81.7301 10.8414 82.0142 12.1742 82.0142 13.7273ZM79.8409 13.7273C79.8409 12.5436 79.6491 11.5469 79.2656 10.7372C78.8868 9.92282 78.366 9.30729 77.7031 8.89062C77.045 8.46922 76.2992 8.25852 75.4659 8.25852C74.6278 8.25852 73.8797 8.46922 73.2216 8.89062C72.5634 9.30729 72.0426 9.92282 71.6591 10.7372C71.2803 11.5469 71.0909 12.5436 71.0909 13.7273C71.0909 14.911 71.2803 15.91 71.6591 16.7244C72.0426 17.5341 72.5634 18.1496 73.2216 18.571C73.8797 18.9877 74.6278 19.196 75.4659 19.196C76.2992 19.196 77.045 18.9877 77.7031 18.571C78.366 18.1496 78.8868 17.5341 79.2656 16.7244C79.6491 15.91 79.8409 14.911 79.8409 13.7273Z", "fill", "var(--logo-color)"], ["viewBox", "0 0 22 28", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", "role", "img", "aria-label", "FELLO", 1, "app-logo-small"], ["type", "button", 1, "layout-sidebar-anchor", "p-link", "z-2", "hover:cursor-pointer", 3, "click"], [1, "layout-menu-container"]], template: function AppSidebar_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275listener("mouseenter", function AppSidebar_Template_div_mouseenter_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onMouseEnter());
      })("mouseleave", function AppSidebar_Template_div_mouseleave_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onMouseLeave());
      });
      \u0275\u0275elementStart(1, "div", 2)(2, "a", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 4)(4, "title");
      \u0275\u0275text(5, "FELLO");
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "path", 5)(7, "path", 6)(8, "path", 7)(9, "path", 8)(10, "path", 9)(11, "path", 10)(12, "path", 11)(13, "path", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "svg", 13)(15, "title");
      \u0275\u0275text(16, "FELLO");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "path", 5)(18, "path", 6)(19, "path", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(20, "button", 14);
      \u0275\u0275listener("click", function AppSidebar_Template_button_click_20_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.anchor());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 15, 0);
      \u0275\u0275element(23, "app-menu");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c22));
    }
  }, dependencies: [AppMenu, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppSidebar, [{
    type: Component,
    args: [{
      selector: "[app-sidebar]",
      standalone: true,
      imports: [AppMenu, RouterModule],
      template: ` <div
        class="layout-sidebar"
        (mouseenter)="onMouseEnter()"
        (mouseleave)="onMouseLeave()"
    >
        <div class="sidebar-header">
            <a [routerLink]="['/']" class="app-logo">
                <!-- Version normale (compl\xE8te) -->
<svg viewBox="0 0 125 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="app-logo-normal" role="img" aria-label="FELLO">
  <title>FELLO</title>

  <!-- Symbole A -->
  <path d="M7.99963 25.0003L6.48368 21L4.99963 24.9997L7.99963 25.0003Z" fill="var(--logo-color)"/>
  <path d="M15.8667 21L18 25H14L15.8667 21Z" fill="var(--logo-color)"/>
  <path d="M11.4851 2L1 24.9465H4.53702L11.4856 10.0784L18.2944 24.9465H21.9715L11.4851 2Z" fill="var(--logo-color)"/>

  <!-- Texte FELLO -->
  <path d="M27.598 21V6.45455H36.6179V8.34375H29.7926V12.7756H35.9716V14.6577H29.7926V21H27.598Z" fill="var(--logo-color)"/>
  <path d="M40.3168 21V6.45455H49.4361V8.34375H42.5114V12.7756H48.9602V14.6577H42.5114V19.1108H49.5213V21H40.3168Z" fill="var(--logo-color)"/>
  <path d="M54.3675 21V6.45455H56.5621V19.1108H63.1531V21H54.3675Z" fill="var(--logo-color)"/>
  <path d="M68.6566 21V6.45455H70.8512V19.1108H77.4421V21H68.6566Z" fill="var(--logo-color)"/>

  <!-- O (d\xE9cal\xE9 \xE0 droite pour cr\xE9er l'espace entre L et O) -->
  <path
    transform="translate(12 0)"
    d="M82.0142 13.7273C82.0142 15.2803 81.7301 16.6155 81.1619 17.733C80.5938 18.8456 79.8149 19.7027 78.8253 20.304C77.8404 20.9006 76.7206 21.1989 75.4659 21.1989C74.2064 21.1989 73.0819 20.9006 72.0923 20.304C71.1075 19.7027 70.331 18.8433 69.7628 17.7259C69.1946 16.6084 68.9105 15.2756 68.9105 13.7273C68.9105 12.1742 69.1946 10.8414 69.7628 9.72869C70.331 8.61127 71.1075 7.75426 72.0923 7.15767C73.0819 6.55634 74.2064 6.25568 75.4659 6.25568C76.7206 6.25568 77.8404 6.55634 78.8253 7.15767C79.8149 7.75426 80.5938 8.61127 81.1619 9.72869C81.7301 10.8414 82.0142 12.1742 82.0142 13.7273ZM79.8409 13.7273C79.8409 12.5436 79.6491 11.5469 79.2656 10.7372C78.8868 9.92282 78.366 9.30729 77.7031 8.89062C77.045 8.46922 76.2992 8.25852 75.4659 8.25852C74.6278 8.25852 73.8797 8.46922 73.2216 8.89062C72.5634 9.30729 72.0426 9.92282 71.6591 10.7372C71.2803 11.5469 71.0909 12.5436 71.0909 13.7273C71.0909 14.911 71.2803 15.91 71.6591 16.7244C72.0426 17.5341 72.5634 18.1496 73.2216 18.571C73.8797 18.9877 74.6278 19.196 75.4659 19.196C76.2992 19.196 77.045 18.9877 77.7031 18.571C78.366 18.1496 78.8868 17.5341 79.2656 16.7244C79.6491 15.91 79.8409 14.911 79.8409 13.7273Z"
    fill="var(--logo-color)"
  />
</svg>

<!-- Version petite (symbole uniquement) -->
<svg viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="app-logo-small" role="img" aria-label="FELLO">
  <title>FELLO</title>

  <path d="M7.99963 25.0003L6.48368 21L4.99963 24.9997L7.99963 25.0003Z" fill="var(--logo-color)"/>
  <path d="M15.8667 21L18 25H14L15.8667 21Z" fill="var(--logo-color)"/>
  <path d="M11.4851 2L1 24.9465H4.53702L11.4856 10.0784L18.2944 24.9465H21.9715L11.4851 2Z" fill="var(--logo-color)"/>
</svg>

            </a>
            <button
                class="layout-sidebar-anchor p-link z-2 hover:cursor-pointer"
                type="button"
                (click)="anchor()"
            ></button>
        </div>

        <div #menuContainer class="layout-menu-container">
            <app-menu></app-menu>
        </div>
    </div>`
    }]
  }], () => [{ type: LayoutService }, { type: ElementRef }], { menuContainer: [{
    type: ViewChild,
    args: ["menuContainer"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppSidebar, { className: "AppSidebar", filePath: "src/app/layout/components/app.sidebar.ts", lineNumber: 62 });
})();

// src/app/layout/components/app-profile-sidebar.ts
var _c05 = ["app-profilesidebar", ""];
var _c14 = () => ["/parametres"];
function AppProfileSidebar_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275element(1, "i", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.usineName(), " ");
  }
}
function AppProfileSidebar_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "i", 25);
    \u0275\u0275text(2, " Chargement... ");
    \u0275\u0275elementEnd();
  }
}
function AppProfileSidebar_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1, " Aucune notification ");
    \u0275\u0275elementEnd();
  }
}
function AppProfileSidebar_ul_43_li_1_p_badge_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-badge", 36);
  }
}
function AppProfileSidebar_ul_43_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 28);
    \u0275\u0275listener("click", function AppProfileSidebar_ul_43_li_1_Template_a_click_1_listener() {
      const notif_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onNotifClick(notif_r3));
    });
    \u0275\u0275elementStart(2, "span", 29);
    \u0275\u0275element(3, "i", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 31)(5, "span", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 33);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 34);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, AppProfileSidebar_ul_43_li_1_p_badge_11_Template, 1, 0, "p-badge", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const notif_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-surface-50", !notif_r3.read_at)("dark:bg-surface-900", !notif_r3.read_at);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(notif_r3.data.nom);
    \u0275\u0275advance();
    \u0275\u0275property("title", notif_r3.data.message);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", notif_r3.data.message || "Code: " + notif_r3.data.code, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.relativeTime(notif_r3.created_at));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !notif_r3.read_at);
  }
}
function AppProfileSidebar_ul_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 8);
    \u0275\u0275template(1, AppProfileSidebar_ul_43_li_1_Template, 12, 9, "li", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.notifications);
  }
}
var AppProfileSidebar = class _AppProfileSidebar {
  layoutService;
  authService;
  usineContext;
  notificationService;
  router;
  isLoggingOut = false;
  loadingNotifs = false;
  unreadCount = 0;
  notifications = [];
  previousVisible = false;
  constructor(layoutService, authService, usineContext, notificationService, router) {
    this.layoutService = layoutService;
    this.authService = authService;
    this.usineContext = usineContext;
    this.notificationService = notificationService;
    this.router = router;
    effect(() => {
      const isVisible = this.visible();
      if (isVisible && !this.previousVisible) {
        this.loadNotifications();
      }
      this.previousVisible = isVisible;
    });
  }
  visible = computed(() => this.layoutService.layoutState().profileSidebarVisible, ...ngDevMode ? [{ debugName: "visible" }] : []);
  userRole = computed(() => {
    const user = this.authService.currentUser();
    if (!user)
      return "";
    const roles = [...user.roles ?? [], ...user.role_names ?? []];
    const uniqueRoles = roles.filter((role, index) => role && roles.indexOf(role) === index);
    return uniqueRoles.join(", ");
  }, ...ngDevMode ? [{ debugName: "userRole" }] : []);
  userName = computed(() => {
    const user = this.authService.currentUser();
    if (user?.nom_complet)
      return user.nom_complet;
    if (user?.prenom || user?.nom)
      return `${user?.prenom ?? ""} ${user?.nom ?? ""}`.trim();
    return "";
  }, ...ngDevMode ? [{ debugName: "userName" }] : []);
  userReference = computed(() => this.authService.currentUser()?.reference ?? "", ...ngDevMode ? [{ debugName: "userReference" }] : []);
  usineName = computed(() => this.usineContext.currentUsine()?.nom ?? "", ...ngDevMode ? [{ debugName: "usineName" }] : []);
  onDrawerHide() {
    this.layoutService.layoutState.update((state2) => __spreadProps(__spreadValues({}, state2), {
      profileSidebarVisible: false
    }));
  }
  onLogout(event) {
    event.preventDefault();
    if (this.isLoggingOut)
      return;
    this.onDrawerHide();
    this.isLoggingOut = true;
    this.authService.logout().pipe(finalize(() => {
      this.isLoggingOut = false;
    })).subscribe({
      error: () => {
      }
    });
  }
  markAllAsRead() {
    if (this.loadingNotifs || this.unreadCount === 0)
      return;
    this.notificationService.markAllAsRead().subscribe({
      next: (res) => {
        this.unreadCount = res.unread_count;
        this.notifications = this.notifications.map((notif) => __spreadProps(__spreadValues({}, notif), {
          read_at: notif.read_at ?? (/* @__PURE__ */ new Date()).toISOString()
        }));
      },
      error: () => {
      }
    });
  }
  onNotifClick(notif) {
    const navigateToProduct = () => {
      this.onDrawerHide();
      this.router.navigate(["/produits/produits-edit", notif.data.produit_id]);
    };
    if (notif.read_at) {
      navigateToProduct();
      return;
    }
    this.notificationService.markAsRead(notif.id).subscribe({
      next: (res) => {
        notif.read_at = (/* @__PURE__ */ new Date()).toISOString();
        this.unreadCount = res.unread_count;
        navigateToProduct();
      },
      error: () => {
        navigateToProduct();
      }
    });
  }
  relativeTime(dateStr) {
    const diffMs = Date.now() - new Date(dateStr).getTime();
    const mins = Math.floor(diffMs / 6e4);
    if (mins < 1)
      return "A l'instant";
    if (mins < 60)
      return `il y a ${mins} min`;
    const hours = Math.floor(mins / 60);
    if (hours < 24)
      return `il y a ${hours}h`;
    return `il y a ${Math.floor(hours / 24)}j`;
  }
  loadNotifications() {
    this.loadingNotifs = true;
    this.notificationService.getNotifications(true).subscribe({
      next: (res) => {
        this.notifications = res.notifications;
        this.unreadCount = res.unread_count;
        this.loadingNotifs = false;
      },
      error: () => {
        this.loadingNotifs = false;
      }
    });
  }
  static \u0275fac = function AppProfileSidebar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppProfileSidebar)(\u0275\u0275directiveInject(LayoutService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(UsineContextService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppProfileSidebar, selectors: [["", "app-profilesidebar", ""]], attrs: _c05, decls: 44, vars: 27, consts: [["position", "right", "styleClass", "layout-profile-sidebar w-full sm:w-25rem", 3, "onHide", "visible", "closable", "transitionOptions"], [1, "flex", "flex-col", "mx-auto", "md:mx-0"], [1, "mb-2", "font-semibold"], [1, "text-surface-500", "dark:text-surface-400", "font-medium", "mb-2"], [1, "text-surface-500", "dark:text-surface-400", "font-medium", "mb-6", "flex", "items-center", "gap-1"], [1, "mb-6", "md:hidden"], [1, "text-xs", "font-semibold", "uppercase", "tracking-widest", "text-surface-400", "m-0", "mb-2"], [1, "pi", "pi-building", "mr-1"], [1, "list-none", "m-0", "p-0"], [1, "cursor-pointer", "flex", "mb-4", "p-4", "items-center", "border", "border-surface-200", "dark:border-surface-700", "rounded", "hover:bg-surface-100", "dark:hover:bg-surface-800", "transition-colors", "duration-150", 3, "click", "routerLink"], [1, "pi", "pi-cog", "text-xl", "text-primary"], [1, "ml-4"], [1, "text-surface-500", "dark:text-surface-400", "m-0"], [1, "cursor-pointer", "flex", "mb-4", "p-4", "items-center", "border", "border-surface-200", "dark:border-surface-700", "rounded", "hover:bg-surface-100", "dark:hover:bg-surface-800", "transition-colors", "duration-150", 3, "click"], [1, "text-xl", "text-primary", "pi"], [1, "flex", "flex-col", "mt-8", "mx-auto", "md:mx-0"], [1, "flex", "items-center", "justify-between", "mb-2"], [1, "font-semibold"], ["type", "button", 1, "text-primary", "text-xs", "bg-transparent", "border-none", "cursor-pointer", 3, "click", "disabled"], [1, "text-surface-500", "dark:text-surface-400", "font-medium", "mb-4"], ["class", "text-surface-500 dark:text-surface-400 text-sm py-4 text-center", 4, "ngIf"], ["class", "text-surface-500 dark:text-surface-400 text-sm py-4 text-center border border-surface-200 dark:border-surface-700 rounded", 4, "ngIf"], ["class", "list-none m-0 p-0", 4, "ngIf"], [1, "pi", "pi-building", "text-xs"], [1, "text-surface-500", "dark:text-surface-400", "text-sm", "py-4", "text-center"], [1, "pi", "pi-spin", "pi-spinner", "mr-2"], [1, "text-surface-500", "dark:text-surface-400", "text-sm", "py-4", "text-center", "border", "border-surface-200", "dark:border-surface-700", "rounded"], [4, "ngFor", "ngForOf"], [1, "cursor-pointer", "flex", "mb-3", "p-3", "items-start", "border", "border-surface-200", "dark:border-surface-700", "rounded", "hover:bg-surface-100", "dark:hover:bg-surface-800", "transition-colors", "duration-150", 3, "click"], [1, "mt-1"], [1, "pi", "pi-bell", "text-sm", "text-primary"], [1, "ml-3", "flex-1", "min-w-0"], [1, "mb-1", "font-semibold", "block", "truncate"], [1, "text-surface-500", "dark:text-surface-400", "m-0", "text-xs", "truncate", 3, "title"], [1, "text-surface-400", "m-0", "text-xs", "mt-1"], ["value", "Nouveau", "severity", "danger", 4, "ngIf"], ["value", "Nouveau", "severity", "danger"]], template: function AppProfileSidebar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p-drawer", 0);
      \u0275\u0275listener("onHide", function AppProfileSidebar_Template_p_drawer_onHide_0_listener() {
        return ctx.onDrawerHide();
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "span", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span", 3);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(8, AppProfileSidebar_Conditional_8_Template, 3, 1, "span", 4);
      \u0275\u0275elementStart(9, "div", 5)(10, "p", 6);
      \u0275\u0275element(11, "i", 7);
      \u0275\u0275text(12, " Site ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(13, "app-usine-selector");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "ul", 8)(15, "li")(16, "a", 9);
      \u0275\u0275listener("click", function AppProfileSidebar_Template_a_click_16_listener() {
        return ctx.onDrawerHide();
      });
      \u0275\u0275elementStart(17, "span");
      \u0275\u0275element(18, "i", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 11)(20, "span", 2);
      \u0275\u0275text(21, "Param\xE8tres");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "p", 12);
      \u0275\u0275text(23, "Gestion des param\xE8tres");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(24, "li")(25, "a", 13);
      \u0275\u0275listener("click", function AppProfileSidebar_Template_a_click_25_listener($event) {
        return ctx.onLogout($event);
      });
      \u0275\u0275elementStart(26, "span");
      \u0275\u0275element(27, "i", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 11)(29, "span", 2);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "p", 12);
      \u0275\u0275text(32);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(33, "div", 15)(34, "div", 16)(35, "span", 17);
      \u0275\u0275text(36, "Notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "button", 18);
      \u0275\u0275listener("click", function AppProfileSidebar_Template_button_click_37_listener() {
        return ctx.markAllAsRead();
      });
      \u0275\u0275text(38, " Tout marquer lu ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "span", 19);
      \u0275\u0275text(40);
      \u0275\u0275elementEnd();
      \u0275\u0275template(41, AppProfileSidebar_div_41_Template, 3, 0, "div", 20)(42, AppProfileSidebar_div_42_Template, 2, 0, "div", 21)(43, AppProfileSidebar_ul_43_Template, 2, 1, "ul", 22);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("visible", ctx.visible())("closable", !ctx.isLoggingOut)("transitionOptions", ".3s cubic-bezier(0, 0, 0.2, 1)");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("Role : ", ctx.userRole());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.userName());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.userReference());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.usineName() ? 8 : -1);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(26, _c14));
      \u0275\u0275advance(9);
      \u0275\u0275classProp("pointer-events-none", ctx.isLoggingOut)("opacity-60", ctx.isLoggingOut);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("pi-spin", ctx.isLoggingOut)("pi-spinner", ctx.isLoggingOut)("pi-power-off", !ctx.isLoggingOut);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isLoggingOut ? "D\xE9connexion..." : "D\xE9connexion");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.isLoggingOut ? "Veuillez patienter" : "Bouton de d\xE9connexion", " ");
      \u0275\u0275advance(5);
      \u0275\u0275property("disabled", ctx.loadingNotifs || ctx.unreadCount === 0);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2(" Vous avez ", ctx.unreadCount, " notification", ctx.unreadCount > 1 ? "s" : "", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loadingNotifs);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingNotifs && ctx.notifications.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingNotifs && ctx.notifications.length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ButtonModule, DrawerModule, Drawer, BadgeModule, Badge, RouterModule, RouterLink, AppUsineSelector], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppProfileSidebar, [{
    type: Component,
    args: [{
      selector: "[app-profilesidebar]",
      imports: [CommonModule, ButtonModule, DrawerModule, BadgeModule, RouterModule, AppUsineSelector],
      template: `
        <p-drawer
            [visible]="visible()"
            (onHide)="onDrawerHide()"
            position="right"
            [closable]="!isLoggingOut"
            [transitionOptions]="'.3s cubic-bezier(0, 0, 0.2, 1)'"
            styleClass="layout-profile-sidebar w-full sm:w-25rem"
        >
            <div class="flex flex-col mx-auto md:mx-0">
                <span class="mb-2 font-semibold">Role : {{ userRole() }}</span>
                <span class="text-surface-500 dark:text-surface-400 font-medium mb-2">{{ userName() }}</span>
                <span class="text-surface-500 dark:text-surface-400 font-medium mb-2">{{ userReference() }}</span>
                @if (usineName()) {
                    <span class="text-surface-500 dark:text-surface-400 font-medium mb-6 flex items-center gap-1">
                        <i class="pi pi-building text-xs"></i> {{ usineName() }}
                    </span>
                }

                <div class="mb-6 md:hidden">
                    <p class="text-xs font-semibold uppercase tracking-widest text-surface-400 m-0 mb-2">
                        <i class="pi pi-building mr-1"></i> Site
                    </p>
                    <app-usine-selector />
                </div>

                <ul class="list-none m-0 p-0">
                    <li>
                        <a
                            [routerLink]="['/parametres']"
                            (click)="onDrawerHide()"
                            class="cursor-pointer flex mb-4 p-4 items-center border border-surface-200 dark:border-surface-700 rounded hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-150"
                        >
                            <span>
                                <i class="pi pi-cog text-xl text-primary"></i>
                            </span>
                            <div class="ml-4">
                                <span class="mb-2 font-semibold">Param\xE8tres</span>
                                <p class="text-surface-500 dark:text-surface-400 m-0">Gestion des param\xE8tres</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a
                            (click)="onLogout($event)"
                            [class.pointer-events-none]="isLoggingOut"
                            [class.opacity-60]="isLoggingOut"
                            class="cursor-pointer flex mb-4 p-4 items-center border border-surface-200 dark:border-surface-700 rounded hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-150"
                        >
                            <span>
                                <i
                                    class="text-xl text-primary pi"
                                    [class.pi-spin]="isLoggingOut"
                                    [class.pi-spinner]="isLoggingOut"
                                    [class.pi-power-off]="!isLoggingOut"
                                ></i>
                            </span>
                            <div class="ml-4">
                                <span class="mb-2 font-semibold">{{ isLoggingOut ? 'D\xE9connexion...' : 'D\xE9connexion' }}</span>
                                <p class="text-surface-500 dark:text-surface-400 m-0">
                                    {{ isLoggingOut ? 'Veuillez patienter' : 'Bouton de d\xE9connexion' }}
                                </p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="flex flex-col mt-8 mx-auto md:mx-0">
                <div class="flex items-center justify-between mb-2">
                    <span class="font-semibold">Notifications</span>
                    <button
                        type="button"
                        class="text-primary text-xs bg-transparent border-none cursor-pointer"
                        (click)="markAllAsRead()"
                        [disabled]="loadingNotifs || unreadCount === 0"
                    >
                        Tout marquer lu
                    </button>
                </div>

                <span class="text-surface-500 dark:text-surface-400 font-medium mb-4">
                    Vous avez {{ unreadCount }} notification{{ unreadCount > 1 ? 's' : '' }}
                </span>

                <div
                    *ngIf="loadingNotifs"
                    class="text-surface-500 dark:text-surface-400 text-sm py-4 text-center"
                >
                    <i class="pi pi-spin pi-spinner mr-2"></i> Chargement...
                </div>

                <div
                    *ngIf="!loadingNotifs && notifications.length === 0"
                    class="text-surface-500 dark:text-surface-400 text-sm py-4 text-center border border-surface-200 dark:border-surface-700 rounded"
                >
                    Aucune notification
                </div>

                <ul class="list-none m-0 p-0" *ngIf="!loadingNotifs && notifications.length > 0">
                    <li *ngFor="let notif of notifications">
                        <a
                            (click)="onNotifClick(notif)"
                            class="cursor-pointer flex mb-3 p-3 items-start border border-surface-200 dark:border-surface-700 rounded hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-150"
                            [class.bg-surface-50]="!notif.read_at"
                            [class.dark:bg-surface-900]="!notif.read_at"
                        >
                            <span class="mt-1">
                                <i class="pi pi-bell text-sm text-primary"></i>
                            </span>
                            <div class="ml-3 flex-1 min-w-0">
                                <span class="mb-1 font-semibold block truncate">{{ notif.data.nom }}</span>
                                <p class="text-surface-500 dark:text-surface-400 m-0 text-xs truncate" [title]="notif.data.message">
                                    {{ notif.data.message || ('Code: ' + notif.data.code) }}
                                </p>
                                <p class="text-surface-400 m-0 text-xs mt-1">{{ relativeTime(notif.created_at) }}</p>
                            </div>
                            <p-badge *ngIf="!notif.read_at" value="Nouveau" severity="danger" />
                        </a>
                    </li>
                </ul>
            </div>
        </p-drawer>
    `
    }]
  }], () => [{ type: LayoutService }, { type: AuthService }, { type: UsineContextService }, { type: NotificationService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppProfileSidebar, { className: "AppProfileSidebar", filePath: "src/app/layout/components/app-profile-sidebar.ts", lineNumber: 145 });
})();

// src/app/layout/components/app.layout.ts
var _c06 = () => ({ width: "100%", right: "0", left: "0" });
var _c15 = (a0) => ({ "920px": a0 });
var BODY_CLASS_ACCUEIL = "layout-on-accueil";
var AppLayout = class _AppLayout {
  layoutService;
  renderer;
  router;
  overlayMenuOpenSubscription;
  menuOutsideClickListener;
  menuScrollListener;
  routerSubscription = null;
  appSidebar;
  appTopBar;
  constructor(layoutService, renderer, router) {
    this.layoutService = layoutService;
    this.renderer = renderer;
    this.router = router;
    this.updateAccueilBodyClass(this.router.url);
    this.routerSubscription = this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => this.updateAccueilBodyClass(event.urlAfterRedirects || event.url));
    this.overlayMenuOpenSubscription = this.layoutService.overlayOpen$.subscribe(() => {
      if (!this.menuOutsideClickListener) {
        this.menuOutsideClickListener = this.renderer.listen("document", "click", (event) => {
          if (this.isOutsideClicked(event)) {
            this.hideMenu();
          }
        });
      }
      if ((this.layoutService.isHorizontal() || this.layoutService.isSlim() || this.layoutService.isSlimPlus()) && !this.menuScrollListener) {
        this.menuScrollListener = this.renderer.listen(this.appSidebar.menuContainer.nativeElement, "scroll", (event) => {
          if (this.layoutService.isDesktop()) {
            this.hideMenu();
          }
        });
      }
      if (this.layoutService.layoutState().staticMenuMobileActive) {
        this.blockBodyScroll();
      }
    });
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.hideMenu();
    });
  }
  isOutsideClicked(event) {
    const sidebarEl = document.querySelector(".layout-sidebar");
    const topbarButtonEl = document.querySelector(".topbar-menubutton");
    return !(sidebarEl?.isSameNode(event.target) || sidebarEl?.contains(event.target) || topbarButtonEl?.isSameNode(event.target) || topbarButtonEl?.contains(event.target));
  }
  hideMenu() {
    this.layoutService.layoutState.update((prev) => __spreadProps(__spreadValues({}, prev), {
      overlayMenuActive: false,
      staticMenuMobileActive: false,
      menuHoverActive: false
    }));
    this.layoutService.reset();
    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
      this.menuOutsideClickListener = null;
    }
    if (this.menuScrollListener) {
      this.menuScrollListener();
      this.menuScrollListener = null;
    }
    this.unblockBodyScroll();
  }
  blockBodyScroll() {
    if (document.body.classList) {
      document.body.classList.add("blocked-scroll");
    } else {
      document.body.className += " blocked-scroll";
    }
  }
  unblockBodyScroll() {
    if (document.body.classList) {
      document.body.classList.remove("blocked-scroll");
    } else {
      document.body.className = document.body.className.replace(new RegExp("(^|\\b)" + "blocked-scroll".split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
  }
  get containerClass() {
    const layoutConfig = this.layoutService.layoutConfig();
    const layoutState = this.layoutService.layoutState();
    return {
      "layout-light": !layoutConfig.darkTheme,
      "layout-dark": layoutConfig.darkTheme,
      "layout-colorscheme-menu": layoutConfig.menuTheme === "colorScheme",
      "layout-primarycolor-menu": layoutConfig.menuTheme === "primaryColor",
      "layout-transparent-menu": layoutConfig.menuTheme === "transparent",
      "layout-overlay": layoutConfig.menuMode === "overlay",
      "layout-static": layoutConfig.menuMode === "static",
      "layout-slim": layoutConfig.menuMode === "slim",
      "layout-slim-plus": layoutConfig.menuMode === "slim-plus",
      "layout-horizontal": layoutConfig.menuMode === "horizontal",
      "layout-reveal": layoutConfig.menuMode === "reveal",
      "layout-drawer": layoutConfig.menuMode === "drawer",
      "layout-static-inactive": layoutState.staticMenuDesktopInactive && layoutConfig.menuMode === "static",
      "layout-overlay-active": layoutState.overlayMenuActive,
      "layout-mobile-active": layoutState.staticMenuMobileActive,
      "layout-sidebar-active": layoutState.sidebarActive,
      "layout-sidebar-anchored": layoutState.anchored
    };
  }
  updateAccueilBodyClass(url) {
    const path = url.split("?")[0].replace(/\/$/, "") || "/";
    const isAccueil = path === "/" || path === "";
    if (isAccueil) {
      document.body.classList.add(BODY_CLASS_ACCUEIL);
    } else {
      document.body.classList.remove(BODY_CLASS_ACCUEIL);
    }
  }
  ngOnDestroy() {
    this.routerSubscription?.unsubscribe();
    document.body.classList.remove(BODY_CLASS_ACCUEIL);
    if (this.overlayMenuOpenSubscription) {
      this.overlayMenuOpenSubscription.unsubscribe();
    }
    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
    }
  }
  static \u0275fac = function AppLayout_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppLayout)(\u0275\u0275directiveInject(LayoutService), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppLayout, selectors: [["app-layout"]], viewQuery: function AppLayout_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(AppSidebar, 5);
      \u0275\u0275viewQuery(AppTopbar, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.appSidebar = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.appTopBar = _t.first);
    }
  }, decls: 10, vars: 5, consts: [[1, "layout-container", 3, "ngClass"], ["app-sidebar", ""], [1, "layout-content-wrapper"], ["app-topbar", ""], [1, "layout-content"], ["app-profilesidebar", ""], [1, "layout-mask", "animate-fadein"], ["position", "top-right", 3, "breakpoints"]], template: function AppLayout_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "div", 1);
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275element(3, "div", 3);
      \u0275\u0275elementStart(4, "div", 4);
      \u0275\u0275element(5, "router-outlet");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(6, "div", 5)(7, "app-configurator")(8, "div", 6)(9, "p-toast", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.containerClass);
      \u0275\u0275advance(9);
      \u0275\u0275property("breakpoints", \u0275\u0275pureFunction1(3, _c15, \u0275\u0275pureFunction0(2, _c06)));
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    AppTopbar,
    AppSidebar,
    RouterModule,
    RouterOutlet,
    AppConfigurator,
    AppProfileSidebar,
    ToastModule,
    Toast
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppLayout, [{
    type: Component,
    args: [{
      selector: "app-layout",
      standalone: true,
      imports: [
        CommonModule,
        AppTopbar,
        AppSidebar,
        RouterModule,
        AppConfigurator,
        AppProfileSidebar,
        ToastModule
      ],
      template: `<div class="layout-container" [ngClass]="containerClass">
        <div app-sidebar></div>
        <div class="layout-content-wrapper">
            <div app-topbar></div>
            <div class="layout-content">
                <router-outlet></router-outlet>
            </div>
        </div>
        <div app-profilesidebar></div>
        <app-configurator></app-configurator>
        <div class="layout-mask animate-fadein"></div>
        <p-toast position="top-right" [breakpoints]="{ '920px': { width: '100%', right: '0', left: '0' } }" />
    </div> `
    }]
  }], () => [{ type: LayoutService }, { type: Renderer2 }, { type: Router }], { appSidebar: [{
    type: ViewChild,
    args: [AppSidebar]
  }], appTopBar: [{
    type: ViewChild,
    args: [AppTopbar]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppLayout, { className: "AppLayout", filePath: "src/app/layout/components/app.layout.ts", lineNumber: 40 });
})();

// src/app/pages/landing/components/topbarwidget.component.ts
var _c07 = () => ({ top: "80px", right: "0%" });
var TopbarWidget = class _TopbarWidget {
  router;
  constructor(router) {
    this.router = router;
  }
  navigate(id) {
    this.smoothScroll(id);
  }
  smoothScroll(id) {
    document.querySelector(id).scrollIntoView({
      behavior: "smooth"
    });
  }
  static \u0275fac = function TopbarWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TopbarWidget)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopbarWidget, selectors: [["topbar-widget"]], decls: 35, vars: 4, consts: [[1, "flex", "items-center", "justify-between", "relative", "lg:static", "py-12", "px-6", "mx-0", "md:px-16", "lg:px-20", "lg:py-12", "lg:mx-20"], [1, "cursor-pointer", 3, "click"], ["width", "124", "height", "22", "viewBox", "0 0 124 22", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10.4851 0L0 20.9465H3.53702L10.4856 6.07843L17.2944 20.9465H20.9715L10.4851 0Z", "fill", "var(--primary-color)"], ["d", "M13.84 15.7927L16.2077 21.0016H11.7682L13.84 15.7927Z", "fill", "var(--primary-color)"], ["d", "M9.04645 21.0016L6.67875 15.7927L4.60701 21.0016H9.04645Z", "fill", "var(--primary-color)"], ["d", "M40.9033 14.5217H34.771L33.1753 18.0007H30.8467L37.9346 2.77661L44.772 18.0007H42.4062L40.9033 14.5217ZM40.022 12.49L37.8975 7.61938L35.6709 12.49H40.022Z", "fill", "var(--primary-color)"], ["d", "M52.4927 12.1838V18.0007H50.3311V3.67651H52.7803C53.9802 3.67651 54.8862 3.76001 55.4985 3.927C56.117 4.09399 56.6613 4.40942 57.1314 4.87329C57.954 5.67733 58.3652 6.69165 58.3652 7.91626C58.3652 9.22746 57.9261 10.2665 57.0479 11.0334C56.1696 11.8004 54.9852 12.1838 53.4946 12.1838H52.4927ZM52.4927 10.1799H53.2998C55.2852 10.1799 56.2778 9.4161 56.2778 7.88843C56.2778 6.41024 55.2542 5.67114 53.207 5.67114H52.4927V10.1799Z", "fill", "var(--primary-color)"], ["d", "M63.6367 10.7737C63.6367 8.75741 64.3758 7.02563 65.854 5.57837C67.326 4.1311 69.0949 3.40747 71.1607 3.40747C73.2017 3.40747 74.952 4.13729 76.4116 5.59692C77.8775 7.05656 78.6104 8.80998 78.6104 10.8572C78.6104 12.9167 77.8744 14.664 76.4024 16.0989C74.9242 17.54 73.1398 18.2605 71.0493 18.2605C69.2001 18.2605 67.5394 17.6204 66.0674 16.3401C64.447 14.9237 63.6367 13.0683 63.6367 10.7737ZM65.8169 10.8015C65.8169 12.3848 66.3488 13.6868 67.4126 14.7073C68.4702 15.7278 69.6918 16.238 71.0772 16.238C72.5801 16.238 73.848 15.7185 74.8809 14.6794C75.9138 13.628 76.4302 12.3477 76.4302 10.8386C76.4302 9.31095 75.9199 8.03068 74.8994 6.9978C73.8851 5.95874 72.6296 5.43921 71.1328 5.43921C69.6423 5.43921 68.3836 5.95874 67.357 6.9978C66.3303 8.0245 65.8169 9.2924 65.8169 10.8015Z", "fill", "var(--primary-color)"], ["d", "M87.2495 3.67651V15.969H91.4615V18.0007H85.0879V3.67651H87.2495Z", "fill", "var(--primary-color)"], ["d", "M99.4327 3.67651V15.969H103.645V18.0007H97.271V3.67651H99.4327Z", "fill", "var(--primary-color)"], ["d", "M108.146 10.7737C108.146 8.75741 108.885 7.02563 110.363 5.57837C111.835 4.1311 113.604 3.40747 115.67 3.40747C117.711 3.40747 119.461 4.13729 120.921 5.59692C122.387 7.05656 123.12 8.80998 123.12 10.8572C123.12 12.9167 122.384 14.664 120.912 16.0989C119.433 17.54 117.649 18.2605 115.559 18.2605C113.709 18.2605 112.049 17.6204 110.577 16.3401C108.956 14.9237 108.146 13.0683 108.146 10.7737ZM110.326 10.8015C110.326 12.3848 110.858 13.6868 111.922 14.7073C112.98 15.7278 114.201 16.238 115.586 16.238C117.089 16.238 118.357 15.7185 119.39 14.6794C120.423 13.628 120.94 12.3477 120.94 10.8386C120.94 9.31095 120.429 8.03068 119.409 6.9978C118.394 5.95874 117.139 5.43921 115.642 5.43921C114.152 5.43921 112.893 5.95874 111.866 6.9978C110.84 8.0245 110.326 9.2924 110.326 10.8015Z", "fill", "var(--primary-color)"], ["pStyleClass", "@next", "enterFromClass", "hidden", "leaveToClass", "hidden", 1, "pi", "pi-bars", "text-4xl!", "cursor-pointer", "block", "md:!hidden", "text-surface-700", "dark:text-surface-100", 3, "hideOnOutsideClick"], ["id", "menu", 1, "list-wrapper", "items-center", "flex-grow-1", "hidden", "md:flex", "absolute", "md:static", "w-full", "md:px-0", "z-30", "shadow", "md:shadow-none", "animate-fadein", "bg-surface-100", "dark:bg-surface-700", "md:bg-transparent", "md:dark:bg-transparent"], [1, "list-none", "p-4", "md:p-0", "m-0", "ml-auto", "flex", "md:items-center", "select-none", "flex-col", "md:flex-row", "cursor-pointer"], ["pRipple", "", "pStyleClass", "@grandparent", "enterFromClass", "hidden", "leaveToClass", "hidden", 1, "cursor-pointer", "block", "md:hidden", "text-700", "text-primary", "absolute", "z-5", "ms-auto", 2, "top", "1.5rem"], [1, "pi", "pi-times", "text-3xl!"], ["pStyleClass", "#menu", "enterFromClass", "hidden", "leaveToClass", "hidden", "pRipple", "", 1, "flex", "m-0", "md:ml-8", "px-0", "py-4", "text-surface-900", "dark:text-surface-0", "font-medium", "leading-normal", 3, "click"], ["pRipple", "", "pStyleClass", "#menu", "enterFromClass", "hidden", "leaveToClass", "hidden", 1, "flex", "m-0", "md:ml-8", "px-0", "py-4", "text-surface-900", "dark:text-surface-0", "font-medium", "leading-normal", 3, "click"], [1, "flex", "align-items-center"], ["pButton", "", "pRipple", "", "type", "button", "label", "Buy Now", 1, "m-0", "mt-4", "md:mt-0", "md:ml-8"]], template: function TopbarWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
      \u0275\u0275listener("click", function TopbarWidget_Template_a_click_1_listener() {
        return ctx.router.navigate(["/landing"]);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(2, "svg", 2);
      \u0275\u0275element(3, "path", 3)(4, "path", 4)(5, "path", 5)(6, "path", 6)(7, "path", 7)(8, "path", 8)(9, "path", 9)(10, "path", 10)(11, "path", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(12, "i", 12);
      \u0275\u0275elementStart(13, "div", 13)(14, "ul", 14)(15, "a", 15);
      \u0275\u0275element(16, "i", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "li")(18, "a", 17);
      \u0275\u0275listener("click", function TopbarWidget_Template_a_click_18_listener() {
        return ctx.navigate("#home");
      });
      \u0275\u0275elementStart(19, "span");
      \u0275\u0275text(20, "Home");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "li")(22, "a", 18);
      \u0275\u0275listener("click", function TopbarWidget_Template_a_click_22_listener() {
        return ctx.navigate("#apps");
      });
      \u0275\u0275elementStart(23, "span");
      \u0275\u0275text(24, "Apps");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "li")(26, "a", 17);
      \u0275\u0275listener("click", function TopbarWidget_Template_a_click_26_listener() {
        return ctx.navigate("#pricing");
      });
      \u0275\u0275elementStart(27, "span");
      \u0275\u0275text(28, "Pricing");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "li")(30, "a", 17);
      \u0275\u0275listener("click", function TopbarWidget_Template_a_click_30_listener() {
        return ctx.navigate("#features");
      });
      \u0275\u0275elementStart(31, "span");
      \u0275\u0275text(32, "Features");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "li", 19);
      \u0275\u0275element(34, "button", 20);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("hideOnOutsideClick", true);
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(3, _c07));
    }
  }, dependencies: [CommonModule, RouterModule, StyleClassModule, StyleClass, ButtonModule, ButtonDirective, RippleModule, Ripple], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TopbarWidget, [{
    type: Component,
    args: [{
      selector: "topbar-widget",
      imports: [CommonModule, RouterModule, StyleClassModule, ButtonModule, RippleModule],
      template: `
        <div class="flex items-center justify-between relative lg:static py-12 px-6 mx-0 md:px-16 lg:px-20 lg:py-12 lg:mx-20">
            <a class="cursor-pointer" (click)="router.navigate(['/landing'])">
                <svg width="124" height="22" viewBox="0 0 124 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.4851 0L0 20.9465H3.53702L10.4856 6.07843L17.2944 20.9465H20.9715L10.4851 0Z" fill="var(--primary-color)" />
                    <path d="M13.84 15.7927L16.2077 21.0016H11.7682L13.84 15.7927Z" fill="var(--primary-color)" />
                    <path d="M9.04645 21.0016L6.67875 15.7927L4.60701 21.0016H9.04645Z" fill="var(--primary-color)" />
                    <path d="M40.9033 14.5217H34.771L33.1753 18.0007H30.8467L37.9346 2.77661L44.772 18.0007H42.4062L40.9033 14.5217ZM40.022 12.49L37.8975 7.61938L35.6709 12.49H40.022Z" fill="var(--primary-color)" />
                    <path
                        d="M52.4927 12.1838V18.0007H50.3311V3.67651H52.7803C53.9802 3.67651 54.8862 3.76001 55.4985 3.927C56.117 4.09399 56.6613 4.40942 57.1314 4.87329C57.954 5.67733 58.3652 6.69165 58.3652 7.91626C58.3652 9.22746 57.9261 10.2665 57.0479 11.0334C56.1696 11.8004 54.9852 12.1838 53.4946 12.1838H52.4927ZM52.4927 10.1799H53.2998C55.2852 10.1799 56.2778 9.4161 56.2778 7.88843C56.2778 6.41024 55.2542 5.67114 53.207 5.67114H52.4927V10.1799Z"
                        fill="var(--primary-color)"
                    />
                    <path
                        d="M63.6367 10.7737C63.6367 8.75741 64.3758 7.02563 65.854 5.57837C67.326 4.1311 69.0949 3.40747 71.1607 3.40747C73.2017 3.40747 74.952 4.13729 76.4116 5.59692C77.8775 7.05656 78.6104 8.80998 78.6104 10.8572C78.6104 12.9167 77.8744 14.664 76.4024 16.0989C74.9242 17.54 73.1398 18.2605 71.0493 18.2605C69.2001 18.2605 67.5394 17.6204 66.0674 16.3401C64.447 14.9237 63.6367 13.0683 63.6367 10.7737ZM65.8169 10.8015C65.8169 12.3848 66.3488 13.6868 67.4126 14.7073C68.4702 15.7278 69.6918 16.238 71.0772 16.238C72.5801 16.238 73.848 15.7185 74.8809 14.6794C75.9138 13.628 76.4302 12.3477 76.4302 10.8386C76.4302 9.31095 75.9199 8.03068 74.8994 6.9978C73.8851 5.95874 72.6296 5.43921 71.1328 5.43921C69.6423 5.43921 68.3836 5.95874 67.357 6.9978C66.3303 8.0245 65.8169 9.2924 65.8169 10.8015Z"
                        fill="var(--primary-color)"
                    />
                    <path d="M87.2495 3.67651V15.969H91.4615V18.0007H85.0879V3.67651H87.2495Z" fill="var(--primary-color)" />
                    <path d="M99.4327 3.67651V15.969H103.645V18.0007H97.271V3.67651H99.4327Z" fill="var(--primary-color)" />
                    <path
                        d="M108.146 10.7737C108.146 8.75741 108.885 7.02563 110.363 5.57837C111.835 4.1311 113.604 3.40747 115.67 3.40747C117.711 3.40747 119.461 4.13729 120.921 5.59692C122.387 7.05656 123.12 8.80998 123.12 10.8572C123.12 12.9167 122.384 14.664 120.912 16.0989C119.433 17.54 117.649 18.2605 115.559 18.2605C113.709 18.2605 112.049 17.6204 110.577 16.3401C108.956 14.9237 108.146 13.0683 108.146 10.7737ZM110.326 10.8015C110.326 12.3848 110.858 13.6868 111.922 14.7073C112.98 15.7278 114.201 16.238 115.586 16.238C117.089 16.238 118.357 15.7185 119.39 14.6794C120.423 13.628 120.94 12.3477 120.94 10.8386C120.94 9.31095 120.429 8.03068 119.409 6.9978C118.394 5.95874 117.139 5.43921 115.642 5.43921C114.152 5.43921 112.893 5.95874 111.866 6.9978C110.84 8.0245 110.326 9.2924 110.326 10.8015Z"
                        fill="var(--primary-color)"
                    />
                </svg>
            </a>

            <i pStyleClass="@next" enterFromClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true" class="pi pi-bars text-4xl! cursor-pointer block md:!hidden text-surface-700 dark:text-surface-100"></i>

            <div
                id="menu"
                class="list-wrapper items-center flex-grow-1 hidden md:flex absolute md:static w-full md:px-0 z-30 shadow md:shadow-none animate-fadein bg-surface-100 dark:bg-surface-700 md:bg-transparent md:dark:bg-transparent"
                [style]="{ top: '80px', right: '0%' }"
            >
                <ul class="list-none p-4 md:p-0 m-0 ml-auto flex md:items-center select-none flex-col md:flex-row cursor-pointer">
                    <a pRipple class="cursor-pointer block md:hidden text-700 text-primary absolute z-5 ms-auto" style="top:1.5rem" pStyleClass="@grandparent" enterFromClass="hidden" leaveToClass="hidden">
                        <i class="pi pi-times text-3xl!"></i>
                    </a>
                    <li>
                        <a (click)="navigate('#home')" pStyleClass="#menu" enterFromClass="hidden" leaveToClass="hidden" pRipple class="flex m-0 md:ml-8 px-0 py-4 text-surface-900 dark:text-surface-0 font-medium leading-normal">
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a (click)="navigate('#apps')" pRipple pStyleClass="#menu" enterFromClass="hidden" leaveToClass="hidden" class="flex m-0 md:ml-8 px-0 py-4 text-surface-900 dark:text-surface-0 font-medium leading-normal">
                            <span>Apps</span>
                        </a>
                    </li>
                    <li>
                        <a (click)="navigate('#pricing')" pStyleClass="#menu" enterFromClass="hidden" leaveToClass="hidden" pRipple class="flex m-0 md:ml-8 px-0 py-4 text-surface-900 dark:text-surface-0 font-medium leading-normal">
                            <span>Pricing</span>
                        </a>
                    </li>
                    <li>
                        <a (click)="navigate('#features')" pStyleClass="#menu" enterFromClass="hidden" leaveToClass="hidden" pRipple class="flex m-0 md:ml-8 px-0 py-4 text-surface-900 dark:text-surface-0 font-medium leading-normal">
                            <span>Features</span>
                        </a>
                    </li>

                    <li class="flex align-items-center">
                        <button pButton pRipple type="button" label="Buy Now" class="m-0 mt-4 md:mt-0 md:ml-8"></button>
                    </li>
                </ul>
            </div>
        </div>
    `
    }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopbarWidget, { className: "TopbarWidget", filePath: "src/app/pages/landing/components/topbarwidget.component.ts", lineNumber: 76 });
})();

// src/app/pages/landing/components/homewidget.ts
var HomeWidget = class _HomeWidget {
  router;
  layoutService;
  subscription;
  darkMode = false;
  constructor(router, layoutService) {
    this.router = router;
    this.layoutService = layoutService;
    this.subscription = this.layoutService.configUpdate$.subscribe((config) => {
      this.darkMode = config.colorScheme === "dark" || config.colorScheme === "dim" ? true : false;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static \u0275fac = function HomeWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeWidget)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(LayoutService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeWidget, selectors: [["home-widget"]], decls: 22, vars: 2, consts: [["id", "home", 1, "grid", "grid-cols-12", "gap-4", "grid-nogutter", "justify-between", "items-center", "mb-12", "py-12", "md:mb-20", "md:py-20"], [1, "col-span-12", "md:col-span-4", "flex", "flex-col", "gap-6", "order-1", "md:order-0", "items-center", "md:items-start", "text-center", "md:text-left"], [1, "block", "text-surface-900", "dark:text-surface-0", "font-bold", "text-4xl"], [1, "block", "text-surface-700", "dark:text-surface-100", "text-lg"], [1, "flex", "flex-wrap", "gap-8", "list-none", "p-0"], [1, "flex", "items-center"], [1, "p-1", "rounded-full", "bg-green-400", "inline-block", "mr-2"], [1, "text-surface-900", "dark:text-surface-0", "font-semibold"], ["pButton", "", "pRipple", "", "type", "button", "label", "Live Preview", "icon", "pi pi-arrow-right", "iconPos", "right", "outlined", "", 1, "w-48"], [1, "col-span-12", "md:col-span-7", "order-0", "md:order-1", "mb-12", "md:mb-0", "rounded"], ["animateEnter", "moveinright", "alt", "", 1, "w-full", "h-full", "rounded", "shadow", "animate-duration-1000", "animate-fadeinright", 3, "src"]], template: function HomeWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3, "Modern, stylish and clean");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "span", 3);
      \u0275\u0275text(5, "The ultimate collection of design-agnostic, flexible and accessible UI Components.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "ul", 4)(7, "li", 5);
      \u0275\u0275element(8, "div", 6);
      \u0275\u0275elementStart(9, "span", 7);
      \u0275\u0275text(10, "Javascript");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "li", 5);
      \u0275\u0275element(12, "div", 6);
      \u0275\u0275elementStart(13, "span", 7);
      \u0275\u0275text(14, "TypeScript");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "li", 5);
      \u0275\u0275element(16, "div", 6);
      \u0275\u0275elementStart(17, "span", 7);
      \u0275\u0275text(18, "Vue");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(19, "button", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 9);
      \u0275\u0275element(21, "img", 10);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(21);
      \u0275\u0275property("src", \u0275\u0275interpolate1("/demo/images/landing/", ctx.darkMode ? "dashboard-dark" : "dashboard-light", ".png"), \u0275\u0275sanitizeUrl);
    }
  }, dependencies: [ButtonModule, ButtonDirective, RippleModule, Ripple], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeWidget, [{
    type: Component,
    args: [{
      selector: "home-widget",
      standalone: true,
      imports: [ButtonModule, RippleModule, ButtonModule],
      template: `
        <div
            id="home"
            class="grid grid-cols-12 gap-4 grid-nogutter justify-between items-center mb-12 py-12 md:mb-20 md:py-20"
        >
            <div
                class="col-span-12 md:col-span-4 flex flex-col gap-6 order-1 md:order-0 items-center md:items-start text-center md:text-left"
            >
                <span
                    class="block text-surface-900 dark:text-surface-0 font-bold text-4xl"
                    >Modern, stylish and clean</span
                >
                <span
                    class="block text-surface-700 dark:text-surface-100 text-lg"
                    >The ultimate collection of design-agnostic, flexible and
                    accessible UI Components.</span
                >
                <ul class="flex flex-wrap gap-8 list-none p-0">
                    <li class="flex items-center">
                        <div
                            class="p-1 rounded-full bg-green-400 inline-block mr-2"
                        ></div>
                        <span
                            class="text-surface-900 dark:text-surface-0 font-semibold"
                            >Javascript</span
                        >
                    </li>
                    <li class="flex items-center">
                        <div
                            class="p-1 rounded-full bg-green-400 inline-block mr-2"
                        ></div>
                        <span
                            class="text-surface-900 dark:text-surface-0 font-semibold"
                            >TypeScript</span
                        >
                    </li>
                    <li class="flex items-center">
                        <div
                            class="p-1 rounded-full bg-green-400 inline-block mr-2"
                        ></div>
                        <span
                            class="text-surface-900 dark:text-surface-0 font-semibold"
                            >Vue</span
                        >
                    </li>
                </ul>
                <button
                    pButton
                    pRipple
                    type="button"
                    label="Live Preview"
                    icon="pi pi-arrow-right"
                    iconPos="right"
                    class="w-48"
                    outlined
                ></button>
            </div>

            <div
                class="col-span-12 md:col-span-7 order-0 md:order-1 mb-12 md:mb-0 rounded"
            >
                <img
                    animateEnter="moveinright"
                    src="/demo/images/landing/{{
                        darkMode ? 'dashboard-dark' : 'dashboard-light'
                    }}.png"
                    alt=""
                    class="w-full h-full rounded shadow animate-duration-1000 animate-fadeinright"
                />
            </div>
        </div>
    `
    }]
  }], () => [{ type: Router }, { type: LayoutService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeWidget, { className: "HomeWidget", filePath: "src/app/pages/landing/components/homewidget.ts", lineNumber: 85 });
})();

// src/app/pages/landing/components/appswidget.ts
var AppsWidget = class _AppsWidget {
  router;
  layoutService;
  subscription;
  darkMode = false;
  constructor(router, layoutService) {
    this.router = router;
    this.layoutService = layoutService;
    this.subscription = this.layoutService.configUpdate$.subscribe((config) => {
      this.darkMode = config.colorScheme === "dark" || config.colorScheme === "dim" ? true : false;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static \u0275fac = function AppsWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppsWidget)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(LayoutService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppsWidget, selectors: [["apps-widget"]], decls: 14, vars: 4, consts: [["id", "apps", 1, "my-12", "md:my-20"], [1, "text-surface-900", "dark:text-surface-0", "block", "font-bold", "text-5xl", "mb-6", "text-center"], [1, "text-surface-700", "dark:text-surface-100", "block", "text-xl", "mb-20", "text-center", "leading-normal"], [1, "flex", "flex-col", "lg:flex-row", "items-center", "justify-between", "mt-20", "gap-20"], [1, "flex", "flex-col", "items-center"], ["animateEnter", "scalein", "alt", "chat", 1, "w-full", "h-full", "rounded", "border-surface-200", "dark:border-surface-700", "shadow", "animate-duration-500", "animate-scalein", "origin-top", 3, "src"], [1, "block", "text-surface-900", "dark:text-surface-0", "text-lg", "font-semibold", "mt-6"]], template: function AppsWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "span", 1);
      \u0275\u0275text(2, "Apps");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "span", 2);
      \u0275\u0275text(4, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "div", 3)(6, "div", 4);
      \u0275\u0275domElement(7, "img", 5);
      \u0275\u0275domElementStart(8, "span", 6);
      \u0275\u0275text(9, "Chat");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(10, "div", 4);
      \u0275\u0275domElement(11, "img", 5);
      \u0275\u0275domElementStart(12, "span", 6);
      \u0275\u0275text(13, "Mail");
      \u0275\u0275domElementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275domProperty("src", \u0275\u0275interpolate1("/demo/images/landing/", ctx.darkMode ? "chat-dark" : "chat-light", ".png"), \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(4);
      \u0275\u0275domProperty("src", \u0275\u0275interpolate1("/demo/images/landing/", ctx.darkMode ? "mail-dark" : "mail-light", ".png"), \u0275\u0275sanitizeUrl);
    }
  }, dependencies: [ButtonModule, RippleModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppsWidget, [{
    type: Component,
    args: [{
      selector: "apps-widget",
      standalone: true,
      imports: [ButtonModule, RippleModule, ButtonModule],
      template: `
        <div id="apps" class="my-12 md:my-20">
        <span class="text-surface-900 dark:text-surface-0 block font-bold text-5xl mb-6 text-center">Apps</span>
        <span class="text-surface-700 dark:text-surface-100 block text-xl mb-20 text-center leading-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</span>

        <div class="flex flex-col lg:flex-row items-center justify-between mt-20 gap-20">
        <div class="flex flex-col items-center">
                    <img
                        animateEnter="scalein"
                        src="/demo/images/landing/{{
                            darkMode ? 'chat-dark' : 'chat-light'
                        }}.png"
                        alt="chat"
                       class="w-full h-full rounded border-surface-200 dark:border-surface-700 shadow animate-duration-500 animate-scalein origin-top"
                    />
                    <span class="block text-surface-900 dark:text-surface-0 text-lg font-semibold mt-6">Chat</span>
                </div>
                <div class="flex flex-col items-center">
                    <img
                        animateEnter="scalein"
                        src="/demo/images/landing/{{
                            darkMode ? 'mail-dark' : 'mail-light'
                        }}.png"
                        alt="chat"
                       class="w-full h-full rounded border-surface-200 dark:border-surface-700 shadow animate-duration-500 animate-scalein origin-top"
                    />
                    <span class="block text-surface-900 dark:text-surface-0 text-lg font-semibold mt-6">Mail</span>
                </div>
            </div>
        </div>
    `
    }]
  }], () => [{ type: Router }, { type: LayoutService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppsWidget, { className: "AppsWidget", filePath: "src/app/pages/landing/components/appswidget.ts", lineNumber: 44 });
})();

// src/app/pages/landing/components/pricingwidget.ts
var PricingWidget = class _PricingWidget {
  static \u0275fac = function PricingWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PricingWidget)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PricingWidget, selectors: [["pricing-widget"]], decls: 56, vars: 0, consts: [["id", "pricing", 1, "my-12", "py-12", "md:my-20", "md:py-20"], [1, "text-surface-900", "dark:text-surface-0", "font-bold", "text-5xl", "mb-6", "text-center"], [1, "text-surface-700", "dark:text-surface-100", "text-xl", "mb-20", "text-center", "leading-normal"], [1, "flex", "flex-col", "lg:flex-row", "gap-4", "grid-nogutter", "justify-center", "mt-20"], [1, "w-full", "lg:w-1/2", "xl:w-1/3"], [1, "p-4", "h-full"], [1, "shadow", "p-12", "h-full", "flex", "flex-col", "bg-surface-0", "dark:bg-surface-900", 2, "border-radius", "6px"], [1, "text-surface-900", "dark:text-surface-0", "block", "font-medium", "text-xl", "mb-2", "text-center"], [1, "font-bold", "block", "text-2xl", "text-surface-900", "dark:text-surface-0", "text-center"], [1, "list-none", "p-0", "m-0", "flex-grow-1", "mt-12"], [1, "flex", "items-center", "mb-4"], [1, "pi", "pi-check", "text-green-500", "mr-2"], [1, "pi", "pi-times", "text-red-500", "mr-2"], ["pButton", "", "pRipple", "", "label", "Choose Plan", "outlined", "", "icon", "pi pi-arrow-right", "iconPos", "right", 1, "px-8", "w-full", "mt-12"]], template: function PricingWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, " Pricing Plans ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2);
      \u0275\u0275text(4, " Choose a plan that works best for you and your team. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "span", 7);
      \u0275\u0275text(10, "Basic Licence");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "span", 8);
      \u0275\u0275text(12, "$29");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "ul", 9)(14, "li", 10);
      \u0275\u0275element(15, "i", 11);
      \u0275\u0275elementStart(16, "span");
      \u0275\u0275text(17, "Up to 10 Active Users");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "li", 10);
      \u0275\u0275element(19, "i", 11);
      \u0275\u0275elementStart(20, "span");
      \u0275\u0275text(21, "Up to 30 Project Integrations");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "li", 10);
      \u0275\u0275element(23, "i", 11);
      \u0275\u0275elementStart(24, "span");
      \u0275\u0275text(25, "Analytics Module");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "li", 10);
      \u0275\u0275element(27, "i", 12);
      \u0275\u0275elementStart(28, "span");
      \u0275\u0275text(29, "Finance Module");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(30, "button", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 4)(32, "div", 5)(33, "div", 6)(34, "span", 7);
      \u0275\u0275text(35, "Extended Licence");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "span", 8);
      \u0275\u0275text(37, "$49");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "ul", 9)(39, "li", 10);
      \u0275\u0275element(40, "i", 11);
      \u0275\u0275elementStart(41, "span");
      \u0275\u0275text(42, "Up to 10 Active Users");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "li", 10);
      \u0275\u0275element(44, "i", 11);
      \u0275\u0275elementStart(45, "span");
      \u0275\u0275text(46, "Up to 30 Project Integrations");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "li", 10);
      \u0275\u0275element(48, "i", 11);
      \u0275\u0275elementStart(49, "span");
      \u0275\u0275text(50, "Analytics Module");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "li", 10);
      \u0275\u0275element(52, "i", 12);
      \u0275\u0275elementStart(53, "span");
      \u0275\u0275text(54, "Finance Module");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(55, "button", 13);
      \u0275\u0275elementEnd()()()()();
    }
  }, dependencies: [ButtonModule, ButtonDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PricingWidget, [{
    type: Component,
    args: [{
      selector: "pricing-widget",
      imports: [ButtonModule],
      template: `
        <div id="pricing" class="my-12 py-12 md:my-20 md:py-20">
            <div
                class="text-surface-900 dark:text-surface-0 font-bold text-5xl mb-6 text-center"
            >
                Pricing Plans
            </div>
            <div
                class="text-surface-700 dark:text-surface-100 text-xl mb-20 text-center leading-normal"
            >
                Choose a plan that works best for you and your team.
            </div>
            <div
                class="flex flex-col lg:flex-row gap-4 grid-nogutter justify-center mt-20"
            >
                <div class="w-full lg:w-1/2 xl:w-1/3">
                    <div class="p-4 h-full">
                        <div
                            class="shadow p-12 h-full flex flex-col bg-surface-0 dark:bg-surface-900"
                            style="border-radius: 6px"
                        >
                            <span
                                class="text-surface-900 dark:text-surface-0 block font-medium text-xl mb-2 text-center"
                                >Basic Licence</span
                            >
                            <span
                                class="font-bold block text-2xl text-surface-900 dark:text-surface-0 text-center"
                                >$29</span
                            >

                            <ul class="list-none p-0 m-0 flex-grow-1 mt-12">
                                <li class="flex items-center mb-4">
                                    <i
                                        class="pi pi-check text-green-500 mr-2"
                                    ></i>
                                    <span>Up to 10 Active Users</span>
                                </li>
                                <li class="flex items-center mb-4">
                                    <i
                                        class="pi pi-check text-green-500 mr-2"
                                    ></i>
                                    <span>Up to 30 Project Integrations</span>
                                </li>
                                <li class="flex items-center mb-4">
                                    <i
                                        class="pi pi-check text-green-500 mr-2"
                                    ></i>
                                    <span>Analytics Module</span>
                                </li>
                                <li class="flex items-center mb-4">
                                    <i
                                        class="pi pi-times text-red-500 mr-2"
                                    ></i>
                                    <span>Finance Module</span>
                                </li>
                            </ul>

                            <button
                                pButton
                                pRipple
                                label="Choose Plan"
                                class="px-8 w-full mt-12"
                                outlined
                                icon="pi pi-arrow-right"
                                iconPos="right"
                            ></button>
                        </div>
                    </div>
                </div>

                <div class="w-full lg:w-1/2 xl:w-1/3">
                    <div class="p-4 h-full">
                        <div
                            class="shadow p-12 h-full flex flex-col bg-surface-0 dark:bg-surface-900"
                            style="border-radius: 6px"
                        >
                            <span
                                class="text-surface-900 dark:text-surface-0 block font-medium text-xl mb-2 text-center"
                                >Extended Licence</span
                            >
                            <span
                                class="font-bold block text-2xl text-surface-900 dark:text-surface-0 text-center"
                                >$49</span
                            >

                            <ul class="list-none p-0 m-0 flex-grow-1 mt-12">
                                <li class="flex items-center mb-4">
                                    <i
                                        class="pi pi-check text-green-500 mr-2"
                                    ></i>
                                    <span>Up to 10 Active Users</span>
                                </li>
                                <li class="flex items-center mb-4">
                                    <i
                                        class="pi pi-check text-green-500 mr-2"
                                    ></i>
                                    <span>Up to 30 Project Integrations</span>
                                </li>
                                <li class="flex items-center mb-4">
                                    <i
                                        class="pi pi-check text-green-500 mr-2"
                                    ></i>
                                    <span>Analytics Module</span>
                                </li>
                                <li class="flex items-center mb-4">
                                    <i
                                        class="pi pi-times text-red-500 mr-2"
                                    ></i>
                                    <span>Finance Module</span>
                                </li>
                            </ul>

                            <button
                                pButton
                                pRipple
                                label="Choose Plan"
                                class="px-8 w-full mt-12"
                                outlined
                                icon="pi pi-arrow-right"
                                iconPos="right"
                            ></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PricingWidget, { className: "PricingWidget", filePath: "src/app/pages/landing/components/pricingwidget.ts", lineNumber: 135 });
})();

// src/app/pages/landing/components/featureswidget.ts
var FeaturesWidget = class _FeaturesWidget {
  static \u0275fac = function FeaturesWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeaturesWidget)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeaturesWidget, selectors: [["features-widget"]], decls: 62, vars: 0, consts: [["id", "features", 1, "my-12", "py-12", "md:my-20", "md:py-20"], [1, "text-surface-900", "dark:text-surface-0", "block", "font-bold", "text-5xl", "mb-6", "text-center"], [1, "text-surface-700", "dark:text-surface-100", "block", "text-xl", "mb-20", "text-center", "leading-normal"], [1, "grid", "grid-cols-12", "gap-4", "mt-20"], [1, "col-span-12", "md:col-span-6", "xl:col-span-3", "flex", "justify-center", "p-4"], [1, "box", "p-6", "w-full", "bg-surface-0", "dark:bg-surface-900", "border-surface-200", "dark:border-surface-700", "border", "rounded"], ["src", "/demo/images/landing/icon-components.svg", "alt", "components icon", 1, "block", "mb-4"], [1, "text-surface-900", "dark:text-surface-0", "block", "font-semibold", "mb-4", "text-lg"], [1, "m-0", "text-secondary", "text-surface-700", "dark:text-surface-100"], ["src", "/demo/images/landing/icon-community.svg", "alt", "components icon", 1, "block", "mb-4"], ["src", "/demo/images/landing/icon-productivity.svg", "alt", "components icon", 1, "block", "mb-4"], ["src", "/demo/images/landing/icon-accessibility.svg", "alt", "components icon", 1, "block", "mb-4"], ["src", "/demo/images/landing/icon-support.svg", "alt", "components icon", 1, "block", "mb-4"], ["src", "/demo/images/landing/icon-mobile.svg", "alt", "components icon", 1, "block", "mb-4"], ["src", "/demo/images/landing/icon-theme.svg", "alt", "components icon", 1, "block", "mb-4"], ["src", "/demo/images/landing/icon-ts.svg", "alt", "components icon", 1, "block", "mb-4"]], template: function FeaturesWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "span", 1);
      \u0275\u0275text(2, "Features");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "span", 2);
      \u0275\u0275text(4, "PrimeTek Informatics is the author of PrimeVue, a UI Component vendor with well known vastly popular projects including PrimeFaces, PrimeNG and PrimeReact.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "div", 3)(6, "div", 4)(7, "div", 5);
      \u0275\u0275domElement(8, "img", 6);
      \u0275\u0275domElementStart(9, "span", 7);
      \u0275\u0275text(10, "90+ UI Components");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "p", 8);
      \u0275\u0275text(12, " The ultimate set of UI Components to assist you with 90+ impressive Vue Components. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(13, "div", 4)(14, "div", 5);
      \u0275\u0275domElement(15, "img", 9);
      \u0275\u0275domElementStart(16, "span", 7);
      \u0275\u0275text(17, "Community");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(18, "p", 8);
      \u0275\u0275text(19, " Connect with the other open source community members, collaborate and have a voice in the project roadmap. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(20, "div", 4)(21, "div", 5);
      \u0275\u0275domElement(22, "img", 10);
      \u0275\u0275domElementStart(23, "span", 7);
      \u0275\u0275text(24, "Productivity");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(25, "p", 8);
      \u0275\u0275text(26, " Boost your productivity by achieving more in less time and accomplish amazing results. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(27, "div", 4)(28, "div", 5);
      \u0275\u0275domElement(29, "img", 11);
      \u0275\u0275domElementStart(30, "span", 7);
      \u0275\u0275text(31, "Accessibility");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(32, "p", 8);
      \u0275\u0275text(33, " The ultimate set of UI Components to assist you with 90+ impressive Vue Components. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(34, "div", 4)(35, "div", 5);
      \u0275\u0275domElement(36, "img", 12);
      \u0275\u0275domElementStart(37, "span", 7);
      \u0275\u0275text(38, "Enterprise Support");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(39, "p", 8);
      \u0275\u0275text(40, " Exceptional support service featuring response within 1 business day and option to request enhancements and new features for the library. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(41, "div", 4)(42, "div", 5);
      \u0275\u0275domElement(43, "img", 13);
      \u0275\u0275domElementStart(44, "span", 7);
      \u0275\u0275text(45, "Mobile");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(46, "p", 8);
      \u0275\u0275text(47, " First class support for responsive design led by touch optimized elements. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(48, "div", 4)(49, "div", 5);
      \u0275\u0275domElement(50, "img", 14);
      \u0275\u0275domElementStart(51, "span", 7);
      \u0275\u0275text(52, "Themes");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(53, "p", 8);
      \u0275\u0275text(54, " Built on a design-agnostic api, choose from a vast amount of themes such as material, bootstrap, custom or develop your own. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(55, "div", 4)(56, "div", 5);
      \u0275\u0275domElement(57, "img", 15);
      \u0275\u0275domElementStart(58, "span", 7);
      \u0275\u0275text(59, "Typescript");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(60, "p", 8);
      \u0275\u0275text(61, " Top-notch support for Typescript with types and tooling assistance. ");
      \u0275\u0275domElementEnd()()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeaturesWidget, [{
    type: Component,
    args: [{
      selector: "features-widget",
      standalone: true,
      imports: [],
      template: `
        <div id="features" class="my-12 py-12 md:my-20 md:py-20">
            <span
                class="text-surface-900 dark:text-surface-0 block font-bold text-5xl mb-6 text-center"
                >Features</span
            >
            <span
                class="text-surface-700 dark:text-surface-100 block text-xl mb-20 text-center leading-normal"
                >PrimeTek Informatics is the author of PrimeVue, a UI Component
                vendor with well known vastly popular projects including
                PrimeFaces, PrimeNG and PrimeReact.</span
            >

            <div class="grid grid-cols-12 gap-4 mt-20">
                <div
                    class="col-span-12 md:col-span-6 xl:col-span-3 flex justify-center p-4"
                >
                    <div
                        class="box p-6 w-full bg-surface-0 dark:bg-surface-900 border-surface-200 dark:border-surface-700 border rounded"
                    >
                        <img
                            src="/demo/images/landing/icon-components.svg"
                            alt="components icon"
                            class="block mb-4"
                        />
                        <span
                            class="text-surface-900 dark:text-surface-0 block font-semibold mb-4 text-lg"
                            >90+ UI Components</span
                        >
                        <p
                            class="m-0 text-secondary text-surface-700 dark:text-surface-100"
                        >
                            The ultimate set of UI Components to assist you with
                            90+ impressive Vue Components.
                        </p>
                    </div>
                </div>
                <div
                    class="col-span-12 md:col-span-6 xl:col-span-3 flex justify-center p-4"
                >
                    <div
                        class="box p-6 w-full bg-surface-0 dark:bg-surface-900 border-surface-200 dark:border-surface-700 border rounded"
                    >
                        <img
                            src="/demo/images/landing/icon-community.svg"
                            alt="components icon"
                            class="block mb-4"
                        />
                        <span
                            class="text-surface-900 dark:text-surface-0 block font-semibold mb-4 text-lg"
                            >Community</span
                        >
                        <p
                            class="m-0 text-secondary text-surface-700 dark:text-surface-100"
                        >
                            Connect with the other open source community
                            members, collaborate and have a voice in the project
                            roadmap.
                        </p>
                    </div>
                </div>
                <div
                    class="col-span-12 md:col-span-6 xl:col-span-3 flex justify-center p-4"
                >
                    <div
                        class="box p-6 w-full bg-surface-0 dark:bg-surface-900 border-surface-200 dark:border-surface-700 border rounded"
                    >
                        <img
                            src="/demo/images/landing/icon-productivity.svg"
                            alt="components icon"
                            class="block mb-4"
                        />
                        <span
                            class="text-surface-900 dark:text-surface-0 block font-semibold mb-4 text-lg"
                            >Productivity</span
                        >
                        <p
                            class="m-0 text-secondary text-surface-700 dark:text-surface-100"
                        >
                            Boost your productivity by achieving more in less
                            time and accomplish amazing results.
                        </p>
                    </div>
                </div>
                <div
                    class="col-span-12 md:col-span-6 xl:col-span-3 flex justify-center p-4"
                >
                    <div
                        class="box p-6 w-full bg-surface-0 dark:bg-surface-900 border-surface-200 dark:border-surface-700 border rounded"
                    >
                        <img
                            src="/demo/images/landing/icon-accessibility.svg"
                            alt="components icon"
                            class="block mb-4"
                        />
                        <span
                            class="text-surface-900 dark:text-surface-0 block font-semibold mb-4 text-lg"
                            >Accessibility</span
                        >
                        <p
                            class="m-0 text-secondary text-surface-700 dark:text-surface-100"
                        >
                            The ultimate set of UI Components to assist you with
                            90+ impressive Vue Components.
                        </p>
                    </div>
                </div>
                <div
                    class="col-span-12 md:col-span-6 xl:col-span-3 flex justify-center p-4"
                >
                    <div
                        class="box p-6 w-full bg-surface-0 dark:bg-surface-900 border-surface-200 dark:border-surface-700 border rounded"
                    >
                        <img
                            src="/demo/images/landing/icon-support.svg"
                            alt="components icon"
                            class="block mb-4"
                        />
                        <span
                            class="text-surface-900 dark:text-surface-0 block font-semibold mb-4 text-lg"
                            >Enterprise Support</span
                        >
                        <p
                            class="m-0 text-secondary text-surface-700 dark:text-surface-100"
                        >
                            Exceptional support service featuring response
                            within 1 business day and option to request
                            enhancements and new features for the library.
                        </p>
                    </div>
                </div>
                <div
                    class="col-span-12 md:col-span-6 xl:col-span-3 flex justify-center p-4"
                >
                    <div
                        class="box p-6 w-full bg-surface-0 dark:bg-surface-900 border-surface-200 dark:border-surface-700 border rounded"
                    >
                        <img
                            src="/demo/images/landing/icon-mobile.svg"
                            alt="components icon"
                            class="block mb-4"
                        />
                        <span
                            class="text-surface-900 dark:text-surface-0 block font-semibold mb-4 text-lg"
                            >Mobile</span
                        >
                        <p
                            class="m-0 text-secondary text-surface-700 dark:text-surface-100"
                        >
                            First class support for responsive design led by
                            touch optimized elements.
                        </p>
                    </div>
                </div>
                <div
                    class="col-span-12 md:col-span-6 xl:col-span-3 flex justify-center p-4"
                >
                    <div
                        class="box p-6 w-full bg-surface-0 dark:bg-surface-900 border-surface-200 dark:border-surface-700 border rounded"
                    >
                        <img
                            src="/demo/images/landing/icon-theme.svg"
                            alt="components icon"
                            class="block mb-4"
                        />
                        <span
                            class="text-surface-900 dark:text-surface-0 block font-semibold mb-4 text-lg"
                            >Themes</span
                        >
                        <p
                            class="m-0 text-secondary text-surface-700 dark:text-surface-100"
                        >
                            Built on a design-agnostic api, choose from a vast
                            amount of themes such as material, bootstrap, custom
                            or develop your own.
                        </p>
                    </div>
                </div>
                <div
                    class="col-span-12 md:col-span-6 xl:col-span-3 flex justify-center p-4"
                >
                    <div
                        class="box p-6 w-full bg-surface-0 dark:bg-surface-900 border-surface-200 dark:border-surface-700 border rounded"
                    >
                        <img
                            src="/demo/images/landing/icon-ts.svg"
                            alt="components icon"
                            class="block mb-4"
                        />
                        <span
                            class="text-surface-900 dark:text-surface-0 block font-semibold mb-4 text-lg"
                            >Typescript</span
                        >
                        <p
                            class="m-0 text-secondary text-surface-700 dark:text-surface-100"
                        >
                            Top-notch support for Typescript with types and
                            tooling assistance.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeaturesWidget, { className: "FeaturesWidget", filePath: "src/app/pages/landing/components/featureswidget.ts", lineNumber: 212 });
})();

// src/app/pages/landing/components/footerwidget.ts
var FooterWidget = class _FooterWidget {
  static \u0275fac = function FooterWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterWidget)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterWidget, selectors: [["footer-widget"]], decls: 57, vars: 0, consts: [[1, "grid", "grid-cols-12", "gap-4", "justify-between", "my-12", "pt-6", "md:my-20"], [1, "col-span-12", "md:col-span-2", "text-center", "md:text-left"], ["href", "#", 1, "cursor-pointer"], ["width", "124", "height", "22", "viewBox", "0 0 124 22", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10.4851 0L0 20.9465H3.53702L10.4856 6.07843L17.2944 20.9465H20.9715L10.4851 0Z", "fill", "var(--primary-color)"], ["d", "M13.84 15.7927L16.2077 21.0016H11.7682L13.84 15.7927Z", "fill", "var(--primary-color)"], ["d", "M9.04645 21.0016L6.67875 15.7927L4.60701 21.0016H9.04645Z", "fill", "var(--primary-color)"], ["d", "M40.9033 14.5217H34.771L33.1753 18.0007H30.8467L37.9346 2.77661L44.772 18.0007H42.4062L40.9033 14.5217ZM40.022 12.49L37.8975 7.61938L35.6709 12.49H40.022Z", "fill", "var(--primary-color)"], ["d", "M52.4927 12.1838V18.0007H50.3311V3.67651H52.7803C53.9802 3.67651 54.8862 3.76001 55.4985 3.927C56.117 4.09399 56.6613 4.40942 57.1314 4.87329C57.954 5.67733 58.3652 6.69165 58.3652 7.91626C58.3652 9.22746 57.9261 10.2665 57.0479 11.0334C56.1696 11.8004 54.9852 12.1838 53.4946 12.1838H52.4927ZM52.4927 10.1799H53.2998C55.2852 10.1799 56.2778 9.4161 56.2778 7.88843C56.2778 6.41024 55.2542 5.67114 53.207 5.67114H52.4927V10.1799Z", "fill", "var(--primary-color)"], ["d", "M63.6367 10.7737C63.6367 8.75741 64.3758 7.02563 65.854 5.57837C67.326 4.1311 69.0949 3.40747 71.1607 3.40747C73.2017 3.40747 74.952 4.13729 76.4116 5.59692C77.8775 7.05656 78.6104 8.80998 78.6104 10.8572C78.6104 12.9167 77.8744 14.664 76.4024 16.0989C74.9242 17.54 73.1398 18.2605 71.0493 18.2605C69.2001 18.2605 67.5394 17.6204 66.0674 16.3401C64.447 14.9237 63.6367 13.0683 63.6367 10.7737ZM65.8169 10.8015C65.8169 12.3848 66.3488 13.6868 67.4126 14.7073C68.4702 15.7278 69.6918 16.238 71.0772 16.238C72.5801 16.238 73.848 15.7185 74.8809 14.6794C75.9138 13.628 76.4302 12.3477 76.4302 10.8386C76.4302 9.31095 75.9199 8.03068 74.8994 6.9978C73.8851 5.95874 72.6296 5.43921 71.1328 5.43921C69.6423 5.43921 68.3836 5.95874 67.357 6.9978C66.3303 8.0245 65.8169 9.2924 65.8169 10.8015Z", "fill", "var(--primary-color)"], ["d", "M87.2495 3.67651V15.969H91.4615V18.0007H85.0879V3.67651H87.2495Z", "fill", "var(--primary-color)"], ["d", "M99.4327 3.67651V15.969H103.645V18.0007H97.271V3.67651H99.4327Z", "fill", "var(--primary-color)"], ["d", "M108.146 10.7737C108.146 8.75741 108.885 7.02563 110.363 5.57837C111.835 4.1311 113.604 3.40747 115.67 3.40747C117.711 3.40747 119.461 4.13729 120.921 5.59692C122.387 7.05656 123.12 8.80998 123.12 10.8572C123.12 12.9167 122.384 14.664 120.912 16.0989C119.433 17.54 117.649 18.2605 115.559 18.2605C113.709 18.2605 112.049 17.6204 110.577 16.3401C108.956 14.9237 108.146 13.0683 108.146 10.7737ZM110.326 10.8015C110.326 12.3848 110.858 13.6868 111.922 14.7073C112.98 15.7278 114.201 16.238 115.586 16.238C117.089 16.238 118.357 15.7185 119.39 14.6794C120.423 13.628 120.94 12.3477 120.94 10.8386C120.94 9.31095 120.429 8.03068 119.409 6.9978C118.394 5.95874 117.139 5.43921 115.642 5.43921C114.152 5.43921 112.893 5.95874 111.866 6.9978C110.84 8.0245 110.326 9.2924 110.326 10.8015Z", "fill", "var(--primary-color)"], [1, "col-span-12", "md:col-span-10", "lg:col-span-7"], [1, "grid", "grid-cols-12", "gap-4", "text-center", "md:text-left"], [1, "col-span-12", "md:col-span-3"], [1, "font-medium", "text-xl", "leading-normal", "mb-4", "text-surface-900", "dark:text-surface-0"], [1, "leading-normal", "block", "cursor-pointer", "mb-2", "text-surface-700", "dark:text-surface-100"], [1, "leading-normal", "block", "cursor-pointer", "text-surface-700", "dark:text-surface-100"], [1, "col-span-12", "md:col-span-3", "mt-6", "md:mt-0"]], template: function FooterWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(3, "svg", 3);
      \u0275\u0275domElement(4, "path", 4)(5, "path", 5)(6, "path", 6)(7, "path", 7)(8, "path", 8)(9, "path", 9)(10, "path", 10)(11, "path", 11)(12, "path", 12);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(13, "div", 13)(14, "div", 14)(15, "div", 15)(16, "h4", 16);
      \u0275\u0275text(17, " Company ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(18, "a", 17);
      \u0275\u0275text(19, "About Us");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(20, "a", 17);
      \u0275\u0275text(21, "News");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(22, "a", 17);
      \u0275\u0275text(23, "Investor Relations");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(24, "a", 17);
      \u0275\u0275text(25, "Careers");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(26, "a", 18);
      \u0275\u0275text(27, "Media Kit");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(28, "div", 19)(29, "h4", 16);
      \u0275\u0275text(30, " Resources ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(31, "a", 17);
      \u0275\u0275text(32, "Get Started");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(33, "a", 17);
      \u0275\u0275text(34, "Learn");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(35, "a", 18);
      \u0275\u0275text(36, "Case Studies");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(37, "div", 19)(38, "h4", 16);
      \u0275\u0275text(39, " Community ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(40, "a", 17);
      \u0275\u0275text(41, "Discord");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(42, "a", 17);
      \u0275\u0275text(43, "Events");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(44, "a", 17);
      \u0275\u0275text(45, "FAQ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(46, "a", 18);
      \u0275\u0275text(47, "Blog");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(48, "div", 19)(49, "h4", 16);
      \u0275\u0275text(50, " Legal ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(51, "a", 17);
      \u0275\u0275text(52, "Brand Policy");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(53, "a", 17);
      \u0275\u0275text(54, "Privacy Policy");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(55, "a", 18);
      \u0275\u0275text(56, "Terms of Service");
      \u0275\u0275domElementEnd()()()()();
    }
  }, dependencies: [RouterModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterWidget, [{
    type: Component,
    args: [{
      selector: "footer-widget",
      standalone: true,
      imports: [RouterModule],
      template: `
        <div
            class="grid grid-cols-12 gap-4 justify-between my-12 pt-6 md:my-20"
        >
            <div class="col-span-12 md:col-span-2 text-center md:text-left">
                <a class="cursor-pointer" href="#">
                    <svg
                        width="124"
                        height="22"
                        viewBox="0 0 124 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.4851 0L0 20.9465H3.53702L10.4856 6.07843L17.2944 20.9465H20.9715L10.4851 0Z"
                            fill="var(--primary-color)"
                        />
                        <path
                            d="M13.84 15.7927L16.2077 21.0016H11.7682L13.84 15.7927Z"
                            fill="var(--primary-color)"
                        />
                        <path
                            d="M9.04645 21.0016L6.67875 15.7927L4.60701 21.0016H9.04645Z"
                            fill="var(--primary-color)"
                        />
                        <path
                            d="M40.9033 14.5217H34.771L33.1753 18.0007H30.8467L37.9346 2.77661L44.772 18.0007H42.4062L40.9033 14.5217ZM40.022 12.49L37.8975 7.61938L35.6709 12.49H40.022Z"
                            fill="var(--primary-color)"
                        />
                        <path
                            d="M52.4927 12.1838V18.0007H50.3311V3.67651H52.7803C53.9802 3.67651 54.8862 3.76001 55.4985 3.927C56.117 4.09399 56.6613 4.40942 57.1314 4.87329C57.954 5.67733 58.3652 6.69165 58.3652 7.91626C58.3652 9.22746 57.9261 10.2665 57.0479 11.0334C56.1696 11.8004 54.9852 12.1838 53.4946 12.1838H52.4927ZM52.4927 10.1799H53.2998C55.2852 10.1799 56.2778 9.4161 56.2778 7.88843C56.2778 6.41024 55.2542 5.67114 53.207 5.67114H52.4927V10.1799Z"
                            fill="var(--primary-color)"
                        />
                        <path
                            d="M63.6367 10.7737C63.6367 8.75741 64.3758 7.02563 65.854 5.57837C67.326 4.1311 69.0949 3.40747 71.1607 3.40747C73.2017 3.40747 74.952 4.13729 76.4116 5.59692C77.8775 7.05656 78.6104 8.80998 78.6104 10.8572C78.6104 12.9167 77.8744 14.664 76.4024 16.0989C74.9242 17.54 73.1398 18.2605 71.0493 18.2605C69.2001 18.2605 67.5394 17.6204 66.0674 16.3401C64.447 14.9237 63.6367 13.0683 63.6367 10.7737ZM65.8169 10.8015C65.8169 12.3848 66.3488 13.6868 67.4126 14.7073C68.4702 15.7278 69.6918 16.238 71.0772 16.238C72.5801 16.238 73.848 15.7185 74.8809 14.6794C75.9138 13.628 76.4302 12.3477 76.4302 10.8386C76.4302 9.31095 75.9199 8.03068 74.8994 6.9978C73.8851 5.95874 72.6296 5.43921 71.1328 5.43921C69.6423 5.43921 68.3836 5.95874 67.357 6.9978C66.3303 8.0245 65.8169 9.2924 65.8169 10.8015Z"
                            fill="var(--primary-color)"
                        />
                        <path
                            d="M87.2495 3.67651V15.969H91.4615V18.0007H85.0879V3.67651H87.2495Z"
                            fill="var(--primary-color)"
                        />
                        <path
                            d="M99.4327 3.67651V15.969H103.645V18.0007H97.271V3.67651H99.4327Z"
                            fill="var(--primary-color)"
                        />
                        <path
                            d="M108.146 10.7737C108.146 8.75741 108.885 7.02563 110.363 5.57837C111.835 4.1311 113.604 3.40747 115.67 3.40747C117.711 3.40747 119.461 4.13729 120.921 5.59692C122.387 7.05656 123.12 8.80998 123.12 10.8572C123.12 12.9167 122.384 14.664 120.912 16.0989C119.433 17.54 117.649 18.2605 115.559 18.2605C113.709 18.2605 112.049 17.6204 110.577 16.3401C108.956 14.9237 108.146 13.0683 108.146 10.7737ZM110.326 10.8015C110.326 12.3848 110.858 13.6868 111.922 14.7073C112.98 15.7278 114.201 16.238 115.586 16.238C117.089 16.238 118.357 15.7185 119.39 14.6794C120.423 13.628 120.94 12.3477 120.94 10.8386C120.94 9.31095 120.429 8.03068 119.409 6.9978C118.394 5.95874 117.139 5.43921 115.642 5.43921C114.152 5.43921 112.893 5.95874 111.866 6.9978C110.84 8.0245 110.326 9.2924 110.326 10.8015Z"
                            fill="var(--primary-color)"
                        />
                    </svg>
                </a>
            </div>

            <div class="col-span-12 md:col-span-10 lg:col-span-7">
                <div class="grid grid-cols-12 gap-4 text-center md:text-left">
                    <div class="col-span-12 md:col-span-3">
                        <h4
                            class="font-medium text-xl leading-normal mb-4 text-surface-900 dark:text-surface-0"
                        >
                            Company
                        </h4>
                        <a
                            class="leading-normal block cursor-pointer mb-2 text-surface-700 dark:text-surface-100"
                            >About Us</a
                        >
                        <a
                            class="leading-normal block cursor-pointer mb-2 text-surface-700 dark:text-surface-100"
                            >News</a
                        >
                        <a
                            class="leading-normal block cursor-pointer mb-2 text-surface-700 dark:text-surface-100"
                            >Investor Relations</a
                        >
                        <a
                            class="leading-normal block cursor-pointer mb-2 text-surface-700 dark:text-surface-100"
                            >Careers</a
                        >
                        <a
                            class="leading-normal block cursor-pointer text-surface-700 dark:text-surface-100"
                            >Media Kit</a
                        >
                    </div>

                    <div class="col-span-12 md:col-span-3 mt-6 md:mt-0">
                        <h4
                            class="font-medium text-xl leading-normal mb-4 text-surface-900 dark:text-surface-0"
                        >
                            Resources
                        </h4>
                        <a
                            class="leading-normal block cursor-pointer mb-2 text-surface-700 dark:text-surface-100"
                            >Get Started</a
                        >
                        <a
                            class="leading-normal block cursor-pointer mb-2 text-surface-700 dark:text-surface-100"
                            >Learn</a
                        >
                        <a
                            class="leading-normal block cursor-pointer text-surface-700 dark:text-surface-100"
                            >Case Studies</a
                        >
                    </div>

                    <div class="col-span-12 md:col-span-3 mt-6 md:mt-0">
                        <h4
                            class="font-medium text-xl leading-normal mb-4 text-surface-900 dark:text-surface-0"
                        >
                            Community
                        </h4>
                        <a
                            class="leading-normal block cursor-pointer mb-2 text-surface-700 dark:text-surface-100"
                            >Discord</a
                        >
                        <a
                            class="leading-normal block cursor-pointer mb-2 text-surface-700 dark:text-surface-100"
                            >Events</a
                        >
                        <a
                            class="leading-normal block cursor-pointer mb-2 text-surface-700 dark:text-surface-100"
                            >FAQ</a
                        >
                        <a
                            class="leading-normal block cursor-pointer text-surface-700 dark:text-surface-100"
                            >Blog</a
                        >
                    </div>

                    <div class="col-span-12 md:col-span-3 mt-6 md:mt-0">
                        <h4
                            class="font-medium text-xl leading-normal mb-4 text-surface-900 dark:text-surface-0"
                        >
                            Legal
                        </h4>
                        <a
                            class="leading-normal block cursor-pointer mb-2 text-surface-700 dark:text-surface-100"
                            >Brand Policy</a
                        >
                        <a
                            class="leading-normal block cursor-pointer mb-2 text-surface-700 dark:text-surface-100"
                            >Privacy Policy</a
                        >
                        <a
                            class="leading-normal block cursor-pointer text-surface-700 dark:text-surface-100"
                            >Terms of Service</a
                        >
                    </div>
                </div>
            </div>
        </div>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterWidget, { className: "FooterWidget", filePath: "src/app/pages/landing/components/footerwidget.ts", lineNumber: 159 });
})();

// src/app/pages/landing/landing.ts
var _c08 = () => ({ top: "-200px", left: "-700px" });
var _c16 = () => ({ top: "50px", right: "-800px", transform: "rotate(60deg)" });
var Landing = class _Landing {
  router;
  layoutService;
  subscription;
  darkMode = false;
  constructor(router, layoutService) {
    this.router = router;
    this.layoutService = layoutService;
    this.subscription = this.layoutService.configUpdate$.subscribe((config) => {
      this.darkMode = config.colorScheme === "dark" || config.colorScheme === "dim" ? true : false;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static \u0275fac = function Landing_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Landing)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(LayoutService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Landing, selectors: [["app-landing"]], decls: 12, vars: 7, consts: [[1, "relative", "overflow-hidden", "flex", "flex-col", "justify-center"], [1, "bg-circle", "opacity-50"], [1, "bg-circle", "hidden", "lg:flex"], [1, "landing-wrapper"], [1, "py-6", "px-6", "mx-0", "md:mx-12", "lg:mx-20", "lg:px-20", "z-20"], [3, "simple"]], template: function Landing_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "div", 1)(2, "div", 2);
      \u0275\u0275elementStart(3, "div", 3);
      \u0275\u0275element(4, "topbar-widget");
      \u0275\u0275elementStart(5, "div", 4);
      \u0275\u0275element(6, "home-widget")(7, "apps-widget")(8, "pricing-widget")(9, "features-widget")(10, "footer-widget");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(11, "app-configurator", 5);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(5, _c08));
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(6, _c16));
      \u0275\u0275advance(9);
      \u0275\u0275property("simple", true);
    }
  }, dependencies: [
    RouterModule,
    ButtonModule,
    AppConfigurator,
    TopbarWidget,
    HomeWidget,
    AppsWidget,
    PricingWidget,
    FeaturesWidget,
    FooterWidget
  ], styles: ["\n\n.bg-circle[_ngcontent-%COMP%] {\n  width: 1000px;\n  height: 1000px;\n  border-radius: 50%;\n  background-image:\n    linear-gradient(\n      140deg,\n      var(--primary-color),\n      var(--surface-ground) 80%);\n  position: absolute;\n  opacity: 0.25;\n  z-index: -1;\n}\n/*# sourceMappingURL=landing.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Landing, [{
    type: Component,
    args: [{ selector: "app-landing", standalone: true, imports: [
      RouterModule,
      ButtonModule,
      AppConfigurator,
      TopbarWidget,
      HomeWidget,
      AppsWidget,
      PricingWidget,
      FeaturesWidget,
      FooterWidget
    ], template: `
        <div class="relative overflow-hidden flex flex-col justify-center">
            <div
                class="bg-circle opacity-50"
                [style]="{ top: '-200px', left: '-700px' }"
            ></div>
            <div
                class="bg-circle hidden lg:flex"
                [style]="{
                    top: '50px',
                    right: '-800px',
                    transform: 'rotate(60deg)',
                }"
            ></div>
            <div class="landing-wrapper">
                <topbar-widget />
                <div class="py-6 px-6 mx-0 md:mx-12 lg:mx-20 lg:px-20 z-20">
                    <home-widget />
                    <apps-widget />
                    <pricing-widget />
                    <features-widget />
                    <footer-widget />
                </div>
            </div>
        </div>

        <app-configurator [simple]="true"/>
    `, styles: ["/* angular:styles/component:scss;d2ca9a150c75d52183f0af9bd1e4f590ccc41275d4df7e464395420363d6ab72;C:/laragon/www/FRONT/elm-front/src/app/pages/landing/landing.ts */\n.bg-circle {\n  width: 1000px;\n  height: 1000px;\n  border-radius: 50%;\n  background-image:\n    linear-gradient(\n      140deg,\n      var(--primary-color),\n      var(--surface-ground) 80%);\n  position: absolute;\n  opacity: 0.25;\n  z-index: -1;\n}\n/*# sourceMappingURL=landing.css.map */\n"] }]
  }], () => [{ type: Router }, { type: LayoutService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Landing, { className: "Landing", filePath: "src/app/pages/landing/landing.ts", lineNumber: 74 });
})();

// src/app/pages/notfound/notfound.ts
var _c09 = () => ["/"];
var Notfound = class _Notfound {
  static \u0275fac = function Notfound_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Notfound)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Notfound, selectors: [["app-notfound"]], decls: 12, vars: 3, consts: [["viewBox", "0 0 960 540", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "preserveAspectRatio", "none", 1, "min-h-screen", "min-w-screen", "fixed", "left-0", 2, "bottom", "-10rem"], ["x", "0", "y", "0", "width", "960", "height", "540", "fill", "var(--surface-ground)"], ["d", "M0 331L26.7 321C53.3 311 106.7 291 160 291C213.3 291 266.7 311 320 329.5C373.3 348 426.7 365 480 373.2C533.3 381.3 586.7 380.7 640 373.8C693.3 367 746.7 354 800 341.2C853.3 328.3 906.7 315.7 933.3 309.3L960 303L960 541L933.3 541C906.7 541 853.3 541 800 541C746.7 541 693.3 541 640 541C586.7 541 533.3 541 480 541C426.7 541 373.3 541 320 541C266.7 541 213.3 541 160 541C106.7 541 53.3 541 26.7 541L0 541Z", "fill", "var(--p-orange-500)", "stroke-linecap", "round", "stroke-linejoin", "miter"], [1, "px-8", "min-h-screen", "flex", "justify-center", "items-center"], [1, "z-10", "text-center"], [1, "text-surface-900", "dark:text-surface-0", "font-bold", "text-8xl", "mb-6"], [1, "leading-normal", "mt-0", "mb-8", "text-surface-700", "dark:text-surface-100", "text-xl", "font-medium"], ["severity", "warn", "raised", "", 3, "routerLink"], [3, "simple"]], template: function Notfound_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(0, "svg", 0);
      \u0275\u0275element(1, "rect", 1)(2, "path", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5);
      \u0275\u0275text(6, "Oops!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 6);
      \u0275\u0275text(8, "There is nothing here");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p-button", 7);
      \u0275\u0275text(10, "Go to Dashboard");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(11, "app-configurator", 8);
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c09));
      \u0275\u0275advance(2);
      \u0275\u0275property("simple", true);
    }
  }, dependencies: [RouterModule, RouterLink, ButtonModule, Button, AppConfigurator], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Notfound, [{
    type: Component,
    args: [{
      selector: "app-notfound",
      standalone: true,
      imports: [RouterModule, ButtonModule, AppConfigurator],
      template: `
        <svg viewBox="0 0 960 540" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="min-h-screen min-w-screen fixed left-0" style="bottom:-10rem" preserveAspectRatio="none">
            <rect x="0" y="0" width="960" height="540" fill="var(--surface-ground)"></rect>
            <path
                d="M0 331L26.7 321C53.3 311 106.7 291 160 291C213.3 291 266.7 311 320 329.5C373.3 348 426.7 365 480 373.2C533.3 381.3 586.7 380.7 640 373.8C693.3 367 746.7 354 800 341.2C853.3 328.3 906.7 315.7 933.3 309.3L960 303L960 541L933.3 541C906.7 541 853.3 541 800 541C746.7 541 693.3 541 640 541C586.7 541 533.3 541 480 541C426.7 541 373.3 541 320 541C266.7 541 213.3 541 160 541C106.7 541 53.3 541 26.7 541L0 541Z"
                fill="var(--p-orange-500)"
                stroke-linecap="round"
                stroke-linejoin="miter"
            ></path>
        </svg>
        <div class="px-8 min-h-screen flex justify-center items-center">
            <div class="z-10 text-center">
                <div class="text-surface-900 dark:text-surface-0 font-bold text-8xl mb-6">Oops!</div>
                <p class="leading-normal mt-0 mb-8 text-surface-700 dark:text-surface-100 text-xl font-medium">There is nothing here</p>
                <p-button [routerLink]="['/']" severity="warn" raised>Go to Dashboard</p-button>
            </div>
        </div>
        <app-configurator [simple]="true" />
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Notfound, { className: "Notfound", filePath: "src/app/pages/notfound/notfound.ts", lineNumber: 30 });
})();

// src/app.routes.ts
var appRoutes = [
  {
    path: "",
    component: AppLayout,
    canActivate: [authGuard],
    children: [
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
      },
      {
        path: "dashboard",
        loadComponent: () => import("./chunk-RNUERAHN.js").then((c) => c.EcommerceDashboard),
        data: { breadcrumb: "dashboard" }
      },
      {
        path: "comptabilite",
        loadChildren: () => import("./chunk-HIHNK2VZ.js"),
        data: { breadcrumb: "comptabilite" }
      },
      {
        path: "contacts",
        loadChildren: () => import("./chunk-ZBB2WTGI.js"),
        data: { breadcrumb: "contacts" }
      },
      {
        path: "packings",
        loadChildren: () => import("./chunk-PN23J5L5.js"),
        data: { breadcrumb: "packings" }
      },
      {
        path: "produits",
        loadChildren: () => import("./chunk-OBMNFZX7.js"),
        data: { breadcrumb: "produits" }
      },
      {
        path: "vehicules",
        loadChildren: () => import("./chunk-YMZCGHCM.js"),
        data: { breadcrumb: "vehicules" }
      },
      {
        path: "ventes",
        loadChildren: () => import("./chunk-QIWWSFCS.js"),
        data: { breadcrumb: "ventes" }
      },
      {
        path: "organisations",
        loadChildren: () => import("./chunk-Z45TUIHW.js"),
        canActivate: [authorizationGuard],
        data: { breadcrumb: "organisations", roles: ["super_admin", "super-admin"] }
      },
      {
        path: "sites",
        loadChildren: () => import("./chunk-OPNQ34AM.js"),
        canActivate: [authorizationGuard],
        data: { breadcrumb: "sites", permissions: ["sites.read"] }
      },
      {
        path: "parametres",
        loadChildren: () => import("./chunk-XVCNAQCU.js"),
        data: { breadcrumb: "parametres" }
      },
      {
        path: "roles",
        canActivate: [authorizationGuard],
        data: { breadcrumb: "roles", roles: ["admin_entreprise", "super_admin", "super-admin"] },
        loadChildren: () => import("./chunk-VZGQLT2I.js")
      },
      {
        path: "profile",
        loadComponent: () => import("./chunk-N3H7YU7L.js").then((c) => c.ProfileOverview),
        data: { breadcrumb: "profile" }
      },
      {
        path: "usermanagement",
        loadChildren: () => import("./chunk-IX2VCSXY.js"),
        data: { breadcrumb: "usermanagement" }
      },
      {
        path: "dashboard-banking",
        loadComponent: () => import("./chunk-5QFHENOS.js").then((c) => c.BankingDashboard),
        data: { breadcrumb: "dashboard-banking" }
      },
      {
        path: "uikit",
        loadChildren: () => import("./chunk-LV3HYBW5.js"),
        data: { breadcrumb: "uikit" }
      },
      {
        path: "documentation",
        loadComponent: () => import("./chunk-QNCYSNFI.js").then((c) => c.Documentation),
        data: { breadcrumb: "documentation" }
      },
      {
        path: "pages",
        loadChildren: () => import("./chunk-6EAPLSKE.js"),
        data: { breadcrumb: "pages" }
      },
      {
        path: "apps",
        loadChildren: () => import("./chunk-TGEQ6DCG.js"),
        data: { breadcrumb: "apps" }
      },
      {
        path: "blocks",
        loadChildren: () => import("./chunk-Z2B3ZVZT.js"),
        data: { breadcrumb: "blocks" }
      },
      {
        path: "ecommerce",
        loadChildren: () => import("./chunk-VVCNVD7S.js"),
        data: { breadcrumb: "ecommerce" }
      }
    ]
  },
  {
    path: "landing",
    component: Landing,
    data: { breadcrumb: "landing" }
  },
  {
    path: "notfound",
    component: Notfound,
    data: { breadcrumb: "notfound" }
  },
  {
    path: "login",
    redirectTo: "/auth/login",
    pathMatch: "full"
  },
  {
    path: "auth",
    canActivate: [guestGuard],
    loadChildren: () => import("./chunk-RZ7RJSWT.js"),
    data: { breadcrumb: "auth" }
  },
  {
    path: "**",
    redirectTo: "/notfound"
  }
];

// src/app/interceptors/auth.interceptor.ts
var TOKEN_KEY = "access_token";
var USER_KEY = "user";
var authInterceptor = (req, next) => {
  const token = sessionStorage.getItem(TOKEN_KEY);
  const isFormData = req.body instanceof FormData;
  const router = inject(Router);
  const headers = {
    Accept: "application/json"
  };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  if (!isFormData) {
    headers["Content-Type"] = "application/json";
  }
  const authReq = req.clone({ setHeaders: headers });
  return next(authReq).pipe(catchError((error) => {
    if (error instanceof HttpErrorResponse && error.status === 401 && !authReq.url.includes("/auth/login")) {
      sessionStorage.removeItem(TOKEN_KEY);
      sessionStorage.removeItem(USER_KEY);
      const currentUrl = router.url;
      if (!currentUrl.startsWith("/auth/login")) {
        router.navigate(["/auth/login"], {
          queryParams: { returnUrl: currentUrl },
          replaceUrl: true
        });
      }
    }
    return throwError(() => error);
  }));
};

// src/app/interceptors/usine.interceptor.ts
var EXCLUDED_PATHS = ["/auth/login", "/auth/register"];
var CONCRETE_SITE_ONLY_PATHS = ["/roles", "/permissions"];
function isExcluded(url) {
  return EXCLUDED_PATHS.some((path) => url.includes(path));
}
function requiresConcreteSite(url) {
  return CONCRETE_SITE_ONLY_PATHS.some((path) => url.includes(path)) || /\/users\/\d+\/roles(?:\?|$|\/)/.test(url);
}
function resolveConcreteSiteId(siteCtx) {
  return siteCtx.currentUsineId() ?? siteCtx.defaultUsineId() ?? siteCtx.accessibleUsines()[0]?.id ?? null;
}
var usineInterceptor = (req, next) => {
  const siteCtx = inject(UsineContextService);
  const messageService = inject(MessageService);
  let outReq = req;
  if (!isExcluded(req.url)) {
    let siteHeaderValue = siteCtx.headerUsineId();
    if (siteHeaderValue === "all" && requiresConcreteSite(req.url)) {
      siteHeaderValue = resolveConcreteSiteId(siteCtx);
    }
    if (siteHeaderValue !== null) {
      outReq = req.clone({
        setHeaders: { "X-Site-Id": String(siteHeaderValue) }
      });
    }
  }
  return next(outReq).pipe(catchError((error) => {
    if (error instanceof HttpErrorResponse && !isExcluded(req.url)) {
      const message = typeof error.error?.message === "string" ? error.error.message : "";
      if (error.status === 403 && (message.includes("site") || message.includes("Site") || message.includes("autorise"))) {
        messageService.add({
          severity: "error",
          summary: "Acces refuse",
          detail: "Vous n'etes pas autorise sur ce site. Retour au site par defaut.",
          life: 5e3
        });
        siteCtx.fallbackToDefault();
      } else if (error.status === 404 && (message.includes("site") || message.includes("Site") || message.includes("introuvable"))) {
        messageService.add({
          severity: "warn",
          summary: "Site introuvable",
          detail: "Le site selectionne est introuvable. Retour au site par defaut.",
          life: 5e3
        });
        siteCtx.fallbackToDefault();
      }
    }
    return throwError(() => error);
  }));
};

// src/app/interceptors/api-error.interceptor.ts
function firstValidationError(errors) {
  if (!errors || typeof errors !== "object")
    return null;
  const entries = Object.values(errors);
  for (const entry of entries) {
    if (Array.isArray(entry) && typeof entry[0] === "string" && entry[0].trim().length > 0) {
      return entry[0];
    }
  }
  return null;
}
function resolveMessage(error) {
  const payload = error.error;
  if (typeof payload?.message === "string" && payload.message.trim().length > 0) {
    return payload.message;
  }
  const validation = firstValidationError(payload?.errors);
  if (validation)
    return validation;
  switch (error.status) {
    case 403:
      return "Vous n'avez pas la permission pour cette action.";
    case 404:
      return "Ressource introuvable.";
    case 422:
      return "Donnees invalides. Verifiez le formulaire.";
    default:
      if (error.status >= 500) {
        return "Erreur serveur. Veuillez reessayer plus tard.";
      }
      return "Une erreur est survenue.";
  }
}
function shouldDisplay(error, url) {
  if (error.status === 0 || error.status === 401)
    return false;
  if (url.includes("/auth/login"))
    return false;
  return [403, 404, 422].includes(error.status) || error.status >= 500;
}
var apiErrorInterceptor = (req, next) => {
  const messageService = inject(MessageService);
  return next(req).pipe(catchError((error) => {
    if (error instanceof HttpErrorResponse && shouldDisplay(error, req.url)) {
      const summary = error.status === 422 ? "Validation" : error.status === 403 ? "Acces refuse" : error.status === 404 ? "Introuvable" : "Erreur";
      messageService.add({
        severity: error.status >= 500 ? "error" : error.status === 422 ? "warn" : "error",
        summary,
        detail: resolveMessage(error),
        life: 5e3
      });
    }
    return throwError(() => error);
  }));
};

// src/app.config.ts
var appConfig = {
  providers: [
    // Sans withEnabledBlockingInitialNavigation : l'app s'affiche tout de suite (évite page blanche sur mobile / réseau lent)
    provideRouter(
      appRoutes,
      withHashLocation(),
      // Évite la page blanche au déploiement : le serveur sert toujours index.html
      withInMemoryScrolling({ anchorScrolling: "enabled", scrollPositionRestoration: "enabled" })
    ),
    provideHttpClient(withFetch(), withInterceptors([authInterceptor, usineInterceptor, apiErrorInterceptor])),
    MessageService,
    provideAnimationsAsync(),
    providePrimeNG({
      theme: { preset: Qr, options: { darkModeSelector: ".app-dark" } },
      translation: {
        firstDayOfWeek: 1,
        dayNames: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
        dayNamesShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
        dayNamesMin: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"],
        monthNames: ["Janvier", "F\xE9vrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Ao\xFBt", "Septembre", "Octobre", "Novembre", "D\xE9cembre"],
        monthNamesShort: ["Jan", "F\xE9v", "Mar", "Avr", "Mai", "Jun", "Jul", "Ao\xFB", "Sep", "Oct", "Nov", "D\xE9c"],
        today: "Aujourd'hui",
        clear: "Effacer",
        dateFormat: "dd/mm/yy",
        weekHeader: "Sm"
      }
    }),
    provideServiceWorker("ngsw-worker.js", {
      enabled: !isDevMode(),
      registrationStrategy: "registerWhenStable:30000"
    })
  ]
};

// src/app/services/deploy-version.service.ts
var VERSION_URL = "version.json";
var STORAGE_KEY = "app_deploy_version";
var CHECK_INTERVAL_MS = 5 * 60 * 1e3;
var DeployVersionService = class _DeployVersionService {
  intervalId = null;
  constructor() {
    this.init();
  }
  init() {
    this.checkOnce().then((version) => {
      if (version != null) {
        try {
          sessionStorage.setItem(STORAGE_KEY, String(version.build));
        } catch {
        }
      }
    });
    this.intervalId = setInterval(() => this.checkAndReload(), CHECK_INTERVAL_MS);
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        this.checkAndReload();
      }
    });
  }
  getCachedVersion() {
    try {
      const v = sessionStorage.getItem(STORAGE_KEY);
      return v != null ? Number(v) : null;
    } catch {
      return null;
    }
  }
  checkOnce() {
    return __async(this, null, function* () {
      try {
        const res = yield fetch(`${VERSION_URL}?t=${Date.now()}`, {
          cache: "no-store",
          headers: { Pragma: "no-cache" }
        });
        if (!res.ok)
          return null;
        const data = yield res.json();
        return data && typeof data.build === "number" ? data : null;
      } catch {
        return null;
      }
    });
  }
  checkAndReload() {
    return __async(this, null, function* () {
      const current = this.getCachedVersion();
      const latest = yield this.checkOnce();
      if (latest == null)
        return;
      if (current != null && latest.build !== current) {
        clearInterval(this.intervalId);
        window.location.reload();
      }
    });
  }
  static \u0275fac = function DeployVersionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DeployVersionService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DeployVersionService, factory: _DeployVersionService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeployVersionService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app.component.ts
var AppComponent = class _AppComponent {
  deployVersion;
  constructor(deployVersion) {
    this.deployVersion = deployVersion;
  }
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)(\u0275\u0275directiveInject(DeployVersionService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterModule, RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{
      selector: "app-root",
      standalone: true,
      imports: [RouterModule],
      template: `<router-outlet></router-outlet>`
    }]
  }], () => [{ type: DeployVersionService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app.component.ts", lineNumber: 11 });
})();

// src/main.ts
function showBootstrapError(err) {
  console.error("Bootstrap Angular failed:", err);
  const root = document.querySelector("app-root");
  if (root) {
    root.innerHTML = `
      <div style="padding: 2rem; font-family: system-ui, sans-serif; text-align: center; max-width: 28rem; margin: 2rem auto;">
        <p style="font-size: 1.1rem; color: #374151;">L'application n'a pas pu d\xE9marrer.</p>
        <p style="font-size: 0.9rem; color: #6b7280; margin-top: 0.5rem;">Rechargez la page ou essayez avec un navigateur \xE0 jour.</p>
        <button onclick="location.reload()" style="margin-top: 1rem; padding: 0.5rem 1rem; font-size: 1rem; cursor: pointer;">R\xE9essayer</button>
      </div>
    `;
  }
}
bootstrapApplication(AppComponent, appConfig).catch(showBootstrapError);
/*! Bundled license information:

@angular/platform-browser/fesm2022/animations/async.mjs:
  (**
   * @license Angular v20.3.16
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)

@angular/service-worker/fesm2022/service-worker.mjs:
  (**
   * @license Angular v20.3.16
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
  (*!
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.dev/license
   *)
*/
//# sourceMappingURL=main.js.map
