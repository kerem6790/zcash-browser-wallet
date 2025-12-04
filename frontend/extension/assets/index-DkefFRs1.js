(function() {
  const f = document.createElement("link").relList;
  if (f && f.supports && f.supports("modulepreload")) return;
  for (const p of document.querySelectorAll('link[rel="modulepreload"]')) s(p);
  new MutationObserver((p) => {
    for (const B of p) if (B.type === "childList") for (const C of B.addedNodes) C.tagName === "LINK" && C.rel === "modulepreload" && s(C);
  }).observe(document, { childList: true, subtree: true });
  function m(p) {
    const B = {};
    return p.integrity && (B.integrity = p.integrity), p.referrerPolicy && (B.referrerPolicy = p.referrerPolicy), p.crossOrigin === "use-credentials" ? B.credentials = "include" : p.crossOrigin === "anonymous" ? B.credentials = "omit" : B.credentials = "same-origin", B;
  }
  function s(p) {
    if (p.ep) return;
    p.ep = true;
    const B = m(p);
    fetch(p.href, B);
  }
})();
var hf = { exports: {} }, Ou = {};
var xd;
function mm() {
  if (xd) return Ou;
  xd = 1;
  var o = Symbol.for("react.transitional.element"), f = Symbol.for("react.fragment");
  function m(s, p, B) {
    var C = null;
    if (B !== void 0 && (C = "" + B), p.key !== void 0 && (C = "" + p.key), "key" in p) {
      B = {};
      for (var P in p) P !== "key" && (B[P] = p[P]);
    } else B = p;
    return p = B.ref, { $$typeof: o, type: s, key: C, ref: p !== void 0 ? p : null, props: B };
  }
  return Ou.Fragment = f, Ou.jsx = m, Ou.jsxs = m, Ou;
}
var Hd;
function vm() {
  return Hd || (Hd = 1, hf.exports = mm()), hf.exports;
}
var N = vm(), bf = { exports: {} }, G = {};
var Rd;
function gm() {
  if (Rd) return G;
  Rd = 1;
  var o = Symbol.for("react.transitional.element"), f = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), B = Symbol.for("react.consumer"), C = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), O = Symbol.for("react.memo"), tt = Symbol.for("react.lazy"), w = Symbol.for("react.activity"), at = Symbol.iterator;
  function Nt(y) {
    return y === null || typeof y != "object" ? null : (y = at && y[at] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var zt = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, xt = Object.assign, Al = {};
  function Ht(y, A, U) {
    this.props = y, this.context = A, this.refs = Al, this.updater = U || zt;
  }
  Ht.prototype.isReactComponent = {}, Ht.prototype.setState = function(y, A) {
    if (typeof y != "object" && typeof y != "function" && y != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, y, A, "setState");
  }, Ht.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function pl() {
  }
  pl.prototype = Ht.prototype;
  function Mt(y, A, U) {
    this.props = y, this.context = A, this.refs = Al, this.updater = U || zt;
  }
  var Lt = Mt.prototype = new pl();
  Lt.constructor = Mt, xt(Lt, Ht.prototype), Lt.isPureReactComponent = true;
  var Pt = Array.isArray;
  function Yt() {
  }
  var L = { H: null, A: null, T: null, S: null }, wt = Object.prototype.hasOwnProperty;
  function tl(y, A, U) {
    var R = U.ref;
    return { $$typeof: o, type: y, key: A, ref: R !== void 0 ? R : null, props: U };
  }
  function le(y, A) {
    return tl(y.type, A, y.props);
  }
  function ll(y) {
    return typeof y == "object" && y !== null && y.$$typeof === o;
  }
  function Gt(y) {
    var A = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(U) {
      return A[U];
    });
  }
  var Nl = /\/+/g;
  function Ol(y, A) {
    return typeof y == "object" && y !== null && y.key != null ? Gt("" + y.key) : A.toString(36);
  }
  function el(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (typeof y.status == "string" ? y.then(Yt, Yt) : (y.status = "pending", y.then(function(A) {
          y.status === "pending" && (y.status = "fulfilled", y.value = A);
        }, function(A) {
          y.status === "pending" && (y.status = "rejected", y.reason = A);
        })), y.status) {
          case "fulfilled":
            return y.value;
          case "rejected":
            throw y.reason;
        }
    }
    throw y;
  }
  function z(y, A, U, R, X) {
    var K = typeof y;
    (K === "undefined" || K === "boolean") && (y = null);
    var nt = false;
    if (y === null) nt = true;
    else switch (K) {
      case "bigint":
      case "string":
      case "number":
        nt = true;
        break;
      case "object":
        switch (y.$$typeof) {
          case o:
          case f:
            nt = true;
            break;
          case tt:
            return nt = y._init, z(nt(y._payload), A, U, R, X);
        }
    }
    if (nt) return X = X(y), nt = R === "" ? "." + Ol(y, 0) : R, Pt(X) ? (U = "", nt != null && (U = nt.replace(Nl, "$&/") + "/"), z(X, A, U, "", function(Ra) {
      return Ra;
    })) : X != null && (ll(X) && (X = le(X, U + (X.key == null || y && y.key === X.key ? "" : ("" + X.key).replace(Nl, "$&/") + "/") + nt)), A.push(X)), 1;
    nt = 0;
    var Qt = R === "" ? "." : R + ":";
    if (Pt(y)) for (var ht = 0; ht < y.length; ht++) R = y[ht], K = Qt + Ol(R, ht), nt += z(R, A, U, K, X);
    else if (ht = Nt(y), typeof ht == "function") for (y = ht.call(y), ht = 0; !(R = y.next()).done; ) R = R.value, K = Qt + Ol(R, ht++), nt += z(R, A, U, K, X);
    else if (K === "object") {
      if (typeof y.then == "function") return z(el(y), A, U, R, X);
      throw A = String(y), Error("Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead.");
    }
    return nt;
  }
  function D(y, A, U) {
    if (y == null) return y;
    var R = [], X = 0;
    return z(y, R, "", "", function(K) {
      return A.call(U, K, X++);
    }), R;
  }
  function M(y) {
    if (y._status === -1) {
      var A = y._result;
      A = A(), A.then(function(U) {
        (y._status === 0 || y._status === -1) && (y._status = 1, y._result = U);
      }, function(U) {
        (y._status === 0 || y._status === -1) && (y._status = 2, y._result = U);
      }), y._status === -1 && (y._status = 0, y._result = A);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var k = typeof reportError == "function" ? reportError : function(y) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var A = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y), error: y });
      if (!window.dispatchEvent(A)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", y);
      return;
    }
    console.error(y);
  }, rt = { map: D, forEach: function(y, A, U) {
    D(y, function() {
      A.apply(this, arguments);
    }, U);
  }, count: function(y) {
    var A = 0;
    return D(y, function() {
      A++;
    }), A;
  }, toArray: function(y) {
    return D(y, function(A) {
      return A;
    }) || [];
  }, only: function(y) {
    if (!ll(y)) throw Error("React.Children.only expected to receive a single React element child.");
    return y;
  } };
  return G.Activity = w, G.Children = rt, G.Component = Ht, G.Fragment = m, G.Profiler = p, G.PureComponent = Mt, G.StrictMode = s, G.Suspense = x, G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = L, G.__COMPILER_RUNTIME = { __proto__: null, c: function(y) {
    return L.H.useMemoCache(y);
  } }, G.cache = function(y) {
    return function() {
      return y.apply(null, arguments);
    };
  }, G.cacheSignal = function() {
    return null;
  }, G.cloneElement = function(y, A, U) {
    if (y == null) throw Error("The argument must be a React element, but you passed " + y + ".");
    var R = xt({}, y.props), X = y.key;
    if (A != null) for (K in A.key !== void 0 && (X = "" + A.key), A) !wt.call(A, K) || K === "key" || K === "__self" || K === "__source" || K === "ref" && A.ref === void 0 || (R[K] = A[K]);
    var K = arguments.length - 2;
    if (K === 1) R.children = U;
    else if (1 < K) {
      for (var nt = Array(K), Qt = 0; Qt < K; Qt++) nt[Qt] = arguments[Qt + 2];
      R.children = nt;
    }
    return tl(y.type, X, R);
  }, G.createContext = function(y) {
    return y = { $$typeof: C, _currentValue: y, _currentValue2: y, _threadCount: 0, Provider: null, Consumer: null }, y.Provider = y, y.Consumer = { $$typeof: B, _context: y }, y;
  }, G.createElement = function(y, A, U) {
    var R, X = {}, K = null;
    if (A != null) for (R in A.key !== void 0 && (K = "" + A.key), A) wt.call(A, R) && R !== "key" && R !== "__self" && R !== "__source" && (X[R] = A[R]);
    var nt = arguments.length - 2;
    if (nt === 1) X.children = U;
    else if (1 < nt) {
      for (var Qt = Array(nt), ht = 0; ht < nt; ht++) Qt[ht] = arguments[ht + 2];
      X.children = Qt;
    }
    if (y && y.defaultProps) for (R in nt = y.defaultProps, nt) X[R] === void 0 && (X[R] = nt[R]);
    return tl(y, K, X);
  }, G.createRef = function() {
    return { current: null };
  }, G.forwardRef = function(y) {
    return { $$typeof: P, render: y };
  }, G.isValidElement = ll, G.lazy = function(y) {
    return { $$typeof: tt, _payload: { _status: -1, _result: y }, _init: M };
  }, G.memo = function(y, A) {
    return { $$typeof: O, type: y, compare: A === void 0 ? null : A };
  }, G.startTransition = function(y) {
    var A = L.T, U = {};
    L.T = U;
    try {
      var R = y(), X = L.S;
      X !== null && X(U, R), typeof R == "object" && R !== null && typeof R.then == "function" && R.then(Yt, k);
    } catch (K) {
      k(K);
    } finally {
      A !== null && U.types !== null && (A.types = U.types), L.T = A;
    }
  }, G.unstable_useCacheRefresh = function() {
    return L.H.useCacheRefresh();
  }, G.use = function(y) {
    return L.H.use(y);
  }, G.useActionState = function(y, A, U) {
    return L.H.useActionState(y, A, U);
  }, G.useCallback = function(y, A) {
    return L.H.useCallback(y, A);
  }, G.useContext = function(y) {
    return L.H.useContext(y);
  }, G.useDebugValue = function() {
  }, G.useDeferredValue = function(y, A) {
    return L.H.useDeferredValue(y, A);
  }, G.useEffect = function(y, A) {
    return L.H.useEffect(y, A);
  }, G.useEffectEvent = function(y) {
    return L.H.useEffectEvent(y);
  }, G.useId = function() {
    return L.H.useId();
  }, G.useImperativeHandle = function(y, A, U) {
    return L.H.useImperativeHandle(y, A, U);
  }, G.useInsertionEffect = function(y, A) {
    return L.H.useInsertionEffect(y, A);
  }, G.useLayoutEffect = function(y, A) {
    return L.H.useLayoutEffect(y, A);
  }, G.useMemo = function(y, A) {
    return L.H.useMemo(y, A);
  }, G.useOptimistic = function(y, A) {
    return L.H.useOptimistic(y, A);
  }, G.useReducer = function(y, A, U) {
    return L.H.useReducer(y, A, U);
  }, G.useRef = function(y) {
    return L.H.useRef(y);
  }, G.useState = function(y) {
    return L.H.useState(y);
  }, G.useSyncExternalStore = function(y, A, U) {
    return L.H.useSyncExternalStore(y, A, U);
  }, G.useTransition = function() {
    return L.H.useTransition();
  }, G.version = "19.2.1", G;
}
var jd;
function Df() {
  return jd || (jd = 1, bf.exports = gm()), bf.exports;
}
var Vt = Df(), Sf = { exports: {} }, Mu = {}, zf = { exports: {} }, Tf = {};
var Bd;
function _m() {
  return Bd || (Bd = 1, (function(o) {
    function f(z, D) {
      var M = z.length;
      z.push(D);
      t: for (; 0 < M; ) {
        var k = M - 1 >>> 1, rt = z[k];
        if (0 < p(rt, D)) z[k] = D, z[M] = rt, M = k;
        else break t;
      }
    }
    function m(z) {
      return z.length === 0 ? null : z[0];
    }
    function s(z) {
      if (z.length === 0) return null;
      var D = z[0], M = z.pop();
      if (M !== D) {
        z[0] = M;
        t: for (var k = 0, rt = z.length, y = rt >>> 1; k < y; ) {
          var A = 2 * (k + 1) - 1, U = z[A], R = A + 1, X = z[R];
          if (0 > p(U, M)) R < rt && 0 > p(X, U) ? (z[k] = X, z[R] = M, k = R) : (z[k] = U, z[A] = M, k = A);
          else if (R < rt && 0 > p(X, M)) z[k] = X, z[R] = M, k = R;
          else break t;
        }
      }
      return D;
    }
    function p(z, D) {
      var M = z.sortIndex - D.sortIndex;
      return M !== 0 ? M : z.id - D.id;
    }
    if (o.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var B = performance;
      o.unstable_now = function() {
        return B.now();
      };
    } else {
      var C = Date, P = C.now();
      o.unstable_now = function() {
        return C.now() - P;
      };
    }
    var x = [], O = [], tt = 1, w = null, at = 3, Nt = false, zt = false, xt = false, Al = false, Ht = typeof setTimeout == "function" ? setTimeout : null, pl = typeof clearTimeout == "function" ? clearTimeout : null, Mt = typeof setImmediate < "u" ? setImmediate : null;
    function Lt(z) {
      for (var D = m(O); D !== null; ) {
        if (D.callback === null) s(O);
        else if (D.startTime <= z) s(O), D.sortIndex = D.expirationTime, f(x, D);
        else break;
        D = m(O);
      }
    }
    function Pt(z) {
      if (xt = false, Lt(z), !zt) if (m(x) !== null) zt = true, Yt || (Yt = true, Gt());
      else {
        var D = m(O);
        D !== null && el(Pt, D.startTime - z);
      }
    }
    var Yt = false, L = -1, wt = 5, tl = -1;
    function le() {
      return Al ? true : !(o.unstable_now() - tl < wt);
    }
    function ll() {
      if (Al = false, Yt) {
        var z = o.unstable_now();
        tl = z;
        var D = true;
        try {
          t: {
            zt = false, xt && (xt = false, pl(L), L = -1), Nt = true;
            var M = at;
            try {
              l: {
                for (Lt(z), w = m(x); w !== null && !(w.expirationTime > z && le()); ) {
                  var k = w.callback;
                  if (typeof k == "function") {
                    w.callback = null, at = w.priorityLevel;
                    var rt = k(w.expirationTime <= z);
                    if (z = o.unstable_now(), typeof rt == "function") {
                      w.callback = rt, Lt(z), D = true;
                      break l;
                    }
                    w === m(x) && s(x), Lt(z);
                  } else s(x);
                  w = m(x);
                }
                if (w !== null) D = true;
                else {
                  var y = m(O);
                  y !== null && el(Pt, y.startTime - z), D = false;
                }
              }
              break t;
            } finally {
              w = null, at = M, Nt = false;
            }
            D = void 0;
          }
        } finally {
          D ? Gt() : Yt = false;
        }
      }
    }
    var Gt;
    if (typeof Mt == "function") Gt = function() {
      Mt(ll);
    };
    else if (typeof MessageChannel < "u") {
      var Nl = new MessageChannel(), Ol = Nl.port2;
      Nl.port1.onmessage = ll, Gt = function() {
        Ol.postMessage(null);
      };
    } else Gt = function() {
      Ht(ll, 0);
    };
    function el(z, D) {
      L = Ht(function() {
        z(o.unstable_now());
      }, D);
    }
    o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function(z) {
      z.callback = null;
    }, o.unstable_forceFrameRate = function(z) {
      0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : wt = 0 < z ? Math.floor(1e3 / z) : 5;
    }, o.unstable_getCurrentPriorityLevel = function() {
      return at;
    }, o.unstable_next = function(z) {
      switch (at) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = at;
      }
      var M = at;
      at = D;
      try {
        return z();
      } finally {
        at = M;
      }
    }, o.unstable_requestPaint = function() {
      Al = true;
    }, o.unstable_runWithPriority = function(z, D) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var M = at;
      at = z;
      try {
        return D();
      } finally {
        at = M;
      }
    }, o.unstable_scheduleCallback = function(z, D, M) {
      var k = o.unstable_now();
      switch (typeof M == "object" && M !== null ? (M = M.delay, M = typeof M == "number" && 0 < M ? k + M : k) : M = k, z) {
        case 1:
          var rt = -1;
          break;
        case 2:
          rt = 250;
          break;
        case 5:
          rt = 1073741823;
          break;
        case 4:
          rt = 1e4;
          break;
        default:
          rt = 5e3;
      }
      return rt = M + rt, z = { id: tt++, callback: D, priorityLevel: z, startTime: M, expirationTime: rt, sortIndex: -1 }, M > k ? (z.sortIndex = M, f(O, z), m(x) === null && z === m(O) && (xt ? (pl(L), L = -1) : xt = true, el(Pt, M - k))) : (z.sortIndex = rt, f(x, z), zt || Nt || (zt = true, Yt || (Yt = true, Gt()))), z;
    }, o.unstable_shouldYield = le, o.unstable_wrapCallback = function(z) {
      var D = at;
      return function() {
        var M = at;
        at = D;
        try {
          return z.apply(this, arguments);
        } finally {
          at = M;
        }
      };
    };
  })(Tf)), Tf;
}
var Cd;
function hm() {
  return Cd || (Cd = 1, zf.exports = _m()), zf.exports;
}
var Ef = { exports: {} }, Xt = {};
var qd;
function bm() {
  if (qd) return Xt;
  qd = 1;
  var o = Df();
  function f(x) {
    var O = "https://react.dev/errors/" + x;
    if (1 < arguments.length) {
      O += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var tt = 2; tt < arguments.length; tt++) O += "&args[]=" + encodeURIComponent(arguments[tt]);
    }
    return "Minified React error #" + x + "; visit " + O + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function m() {
  }
  var s = { d: { f: m, r: function() {
    throw Error(f(522));
  }, D: m, C: m, L: m, m, X: m, S: m, M: m }, p: 0, findDOMNode: null }, p = Symbol.for("react.portal");
  function B(x, O, tt) {
    var w = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: p, key: w == null ? null : "" + w, children: x, containerInfo: O, implementation: tt };
  }
  var C = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function P(x, O) {
    if (x === "font") return "";
    if (typeof O == "string") return O === "use-credentials" ? O : "";
  }
  return Xt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, Xt.createPortal = function(x, O) {
    var tt = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!O || O.nodeType !== 1 && O.nodeType !== 9 && O.nodeType !== 11) throw Error(f(299));
    return B(x, O, null, tt);
  }, Xt.flushSync = function(x) {
    var O = C.T, tt = s.p;
    try {
      if (C.T = null, s.p = 2, x) return x();
    } finally {
      C.T = O, s.p = tt, s.d.f();
    }
  }, Xt.preconnect = function(x, O) {
    typeof x == "string" && (O ? (O = O.crossOrigin, O = typeof O == "string" ? O === "use-credentials" ? O : "" : void 0) : O = null, s.d.C(x, O));
  }, Xt.prefetchDNS = function(x) {
    typeof x == "string" && s.d.D(x);
  }, Xt.preinit = function(x, O) {
    if (typeof x == "string" && O && typeof O.as == "string") {
      var tt = O.as, w = P(tt, O.crossOrigin), at = typeof O.integrity == "string" ? O.integrity : void 0, Nt = typeof O.fetchPriority == "string" ? O.fetchPriority : void 0;
      tt === "style" ? s.d.S(x, typeof O.precedence == "string" ? O.precedence : void 0, { crossOrigin: w, integrity: at, fetchPriority: Nt }) : tt === "script" && s.d.X(x, { crossOrigin: w, integrity: at, fetchPriority: Nt, nonce: typeof O.nonce == "string" ? O.nonce : void 0 });
    }
  }, Xt.preinitModule = function(x, O) {
    if (typeof x == "string") if (typeof O == "object" && O !== null) {
      if (O.as == null || O.as === "script") {
        var tt = P(O.as, O.crossOrigin);
        s.d.M(x, { crossOrigin: tt, integrity: typeof O.integrity == "string" ? O.integrity : void 0, nonce: typeof O.nonce == "string" ? O.nonce : void 0 });
      }
    } else O == null && s.d.M(x);
  }, Xt.preload = function(x, O) {
    if (typeof x == "string" && typeof O == "object" && O !== null && typeof O.as == "string") {
      var tt = O.as, w = P(tt, O.crossOrigin);
      s.d.L(x, tt, { crossOrigin: w, integrity: typeof O.integrity == "string" ? O.integrity : void 0, nonce: typeof O.nonce == "string" ? O.nonce : void 0, type: typeof O.type == "string" ? O.type : void 0, fetchPriority: typeof O.fetchPriority == "string" ? O.fetchPriority : void 0, referrerPolicy: typeof O.referrerPolicy == "string" ? O.referrerPolicy : void 0, imageSrcSet: typeof O.imageSrcSet == "string" ? O.imageSrcSet : void 0, imageSizes: typeof O.imageSizes == "string" ? O.imageSizes : void 0, media: typeof O.media == "string" ? O.media : void 0 });
    }
  }, Xt.preloadModule = function(x, O) {
    if (typeof x == "string") if (O) {
      var tt = P(O.as, O.crossOrigin);
      s.d.m(x, { as: typeof O.as == "string" && O.as !== "script" ? O.as : void 0, crossOrigin: tt, integrity: typeof O.integrity == "string" ? O.integrity : void 0 });
    } else s.d.m(x);
  }, Xt.requestFormReset = function(x) {
    s.d.r(x);
  }, Xt.unstable_batchedUpdates = function(x, O) {
    return x(O);
  }, Xt.useFormState = function(x, O, tt) {
    return C.H.useFormState(x, O, tt);
  }, Xt.useFormStatus = function() {
    return C.H.useHostTransitionStatus();
  }, Xt.version = "19.2.1", Xt;
}
var Yd;
function Sm() {
  if (Yd) return Ef.exports;
  Yd = 1;
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
    } catch (f) {
      console.error(f);
    }
  }
  return o(), Ef.exports = bm(), Ef.exports;
}
var wd;
function zm() {
  if (wd) return Mu;
  wd = 1;
  var o = hm(), f = Df(), m = Sm();
  function s(t) {
    var l = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++) l += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return "Minified React error #" + t + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function p(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function B(t) {
    var l = t, e = t;
    if (t.alternate) for (; l.return; ) l = l.return;
    else {
      t = l;
      do
        l = t, (l.flags & 4098) !== 0 && (e = l.return), t = l.return;
      while (t);
    }
    return l.tag === 3 ? e : null;
  }
  function C(t) {
    if (t.tag === 13) {
      var l = t.memoizedState;
      if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function P(t) {
    if (t.tag === 31) {
      var l = t.memoizedState;
      if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function x(t) {
    if (B(t) !== t) throw Error(s(188));
  }
  function O(t) {
    var l = t.alternate;
    if (!l) {
      if (l = B(t), l === null) throw Error(s(188));
      return l !== t ? null : t;
    }
    for (var e = t, a = l; ; ) {
      var u = e.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (a = u.return, a !== null) {
          e = a;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === e) return x(u), t;
          if (n === a) return x(u), l;
          n = n.sibling;
        }
        throw Error(s(188));
      }
      if (e.return !== a.return) e = u, a = n;
      else {
        for (var c = false, i = u.child; i; ) {
          if (i === e) {
            c = true, e = u, a = n;
            break;
          }
          if (i === a) {
            c = true, a = u, e = n;
            break;
          }
          i = i.sibling;
        }
        if (!c) {
          for (i = n.child; i; ) {
            if (i === e) {
              c = true, e = n, a = u;
              break;
            }
            if (i === a) {
              c = true, a = n, e = u;
              break;
            }
            i = i.sibling;
          }
          if (!c) throw Error(s(189));
        }
      }
      if (e.alternate !== a) throw Error(s(190));
    }
    if (e.tag !== 3) throw Error(s(188));
    return e.stateNode.current === e ? t : l;
  }
  function tt(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t;
    for (t = t.child; t !== null; ) {
      if (l = tt(t), l !== null) return l;
      t = t.sibling;
    }
    return null;
  }
  var w = Object.assign, at = Symbol.for("react.element"), Nt = Symbol.for("react.transitional.element"), zt = Symbol.for("react.portal"), xt = Symbol.for("react.fragment"), Al = Symbol.for("react.strict_mode"), Ht = Symbol.for("react.profiler"), pl = Symbol.for("react.consumer"), Mt = Symbol.for("react.context"), Lt = Symbol.for("react.forward_ref"), Pt = Symbol.for("react.suspense"), Yt = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), wt = Symbol.for("react.lazy"), tl = Symbol.for("react.activity"), le = Symbol.for("react.memo_cache_sentinel"), ll = Symbol.iterator;
  function Gt(t) {
    return t === null || typeof t != "object" ? null : (t = ll && t[ll] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var Nl = Symbol.for("react.client.reference");
  function Ol(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.$$typeof === Nl ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case xt:
        return "Fragment";
      case Ht:
        return "Profiler";
      case Al:
        return "StrictMode";
      case Pt:
        return "Suspense";
      case Yt:
        return "SuspenseList";
      case tl:
        return "Activity";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case zt:
        return "Portal";
      case Mt:
        return t.displayName || "Context";
      case pl:
        return (t._context.displayName || "Context") + ".Consumer";
      case Lt:
        var l = t.render;
        return t = t.displayName, t || (t = l.displayName || l.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case L:
        return l = t.displayName || null, l !== null ? l : Ol(t.type) || "Memo";
      case wt:
        l = t._payload, t = t._init;
        try {
          return Ol(t(l));
        } catch {
        }
    }
    return null;
  }
  var el = Array.isArray, z = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = m.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, M = { pending: false, data: null, method: null, action: null }, k = [], rt = -1;
  function y(t) {
    return { current: t };
  }
  function A(t) {
    0 > rt || (t.current = k[rt], k[rt] = null, rt--);
  }
  function U(t, l) {
    rt++, k[rt] = t.current, t.current = l;
  }
  var R = y(null), X = y(null), K = y(null), nt = y(null);
  function Qt(t, l) {
    switch (U(K, l), U(X, t), U(R, null), l.nodeType) {
      case 9:
      case 11:
        t = (t = l.documentElement) && (t = t.namespaceURI) ? td(t) : 0;
        break;
      default:
        if (t = l.tagName, l = l.namespaceURI) l = td(l), t = ld(l, t);
        else switch (t) {
          case "svg":
            t = 1;
            break;
          case "math":
            t = 2;
            break;
          default:
            t = 0;
        }
    }
    A(R), U(R, t);
  }
  function ht() {
    A(R), A(X), A(K);
  }
  function Ra(t) {
    t.memoizedState !== null && U(nt, t);
    var l = R.current, e = ld(l, t.type);
    l !== e && (U(X, t), U(R, e));
  }
  function Hu(t) {
    X.current === t && (A(R), A(X)), nt.current === t && (A(nt), Tu._currentValue = M);
  }
  var Pn, Uf;
  function De(t) {
    if (Pn === void 0) try {
      throw Error();
    } catch (e) {
      var l = e.stack.trim().match(/\n( *(at )?)/);
      Pn = l && l[1] || "", Uf = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + Pn + t + Uf;
  }
  var tc = false;
  function lc(t, l) {
    if (!t || tc) return "";
    tc = true;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = { DetermineComponentFrameRoot: function() {
        try {
          if (l) {
            var E = function() {
              throw Error();
            };
            if (Object.defineProperty(E.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(E, []);
              } catch (b) {
                var h = b;
              }
              Reflect.construct(t, [], E);
            } else {
              try {
                E.call();
              } catch (b) {
                h = b;
              }
              t.call(E.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (b) {
              h = b;
            }
            (E = t()) && typeof E.catch == "function" && E.catch(function() {
            });
          }
        } catch (b) {
          if (b && h && typeof b.stack == "string") return [b.stack, h.stack];
        }
        return [null, null];
      } };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
      u && u.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var n = a.DetermineComponentFrameRoot(), c = n[0], i = n[1];
      if (c && i) {
        var r = c.split(`
`), _ = i.split(`
`);
        for (u = a = 0; a < r.length && !r[a].includes("DetermineComponentFrameRoot"); ) a++;
        for (; u < _.length && !_[u].includes("DetermineComponentFrameRoot"); ) u++;
        if (a === r.length || u === _.length) for (a = r.length - 1, u = _.length - 1; 1 <= a && 0 <= u && r[a] !== _[u]; ) u--;
        for (; 1 <= a && 0 <= u; a--, u--) if (r[a] !== _[u]) {
          if (a !== 1 || u !== 1) do
            if (a--, u--, 0 > u || r[a] !== _[u]) {
              var S = `
` + r[a].replace(" at new ", " at ");
              return t.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", t.displayName)), S;
            }
          while (1 <= a && 0 <= u);
          break;
        }
      }
    } finally {
      tc = false, Error.prepareStackTrace = e;
    }
    return (e = t ? t.displayName || t.name : "") ? De(e) : "";
  }
  function Ld(t, l) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return De(t.type);
      case 16:
        return De("Lazy");
      case 13:
        return t.child !== l && l !== null ? De("Suspense Fallback") : De("Suspense");
      case 19:
        return De("SuspenseList");
      case 0:
      case 15:
        return lc(t.type, false);
      case 11:
        return lc(t.type.render, false);
      case 1:
        return lc(t.type, true);
      case 31:
        return De("Activity");
      default:
        return "";
    }
  }
  function Nf(t) {
    try {
      var l = "", e = null;
      do
        l += Ld(t, e), e = t, t = t.return;
      while (t);
      return l;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var ec = Object.prototype.hasOwnProperty, ac = o.unstable_scheduleCallback, uc = o.unstable_cancelCallback, Kd = o.unstable_shouldYield, Jd = o.unstable_requestPaint, al = o.unstable_now, Wd = o.unstable_getCurrentPriorityLevel, xf = o.unstable_ImmediatePriority, Hf = o.unstable_UserBlockingPriority, Ru = o.unstable_NormalPriority, $d = o.unstable_LowPriority, Rf = o.unstable_IdlePriority, Fd = o.log, kd = o.unstable_setDisableYieldValue, ja = null, ul = null;
  function ee(t) {
    if (typeof Fd == "function" && kd(t), ul && typeof ul.setStrictMode == "function") try {
      ul.setStrictMode(ja, t);
    } catch {
    }
  }
  var nl = Math.clz32 ? Math.clz32 : t0, Id = Math.log, Pd = Math.LN2;
  function t0(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Id(t) / Pd | 0) | 0;
  }
  var ju = 256, Bu = 262144, Cu = 4194304;
  function Ue(t) {
    var l = t & 42;
    if (l !== 0) return l;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function qu(t, l, e) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var u = 0, n = t.suspendedLanes, c = t.pingedLanes;
    t = t.warmLanes;
    var i = a & 134217727;
    return i !== 0 ? (a = i & ~n, a !== 0 ? u = Ue(a) : (c &= i, c !== 0 ? u = Ue(c) : e || (e = i & ~t, e !== 0 && (u = Ue(e))))) : (i = a & ~n, i !== 0 ? u = Ue(i) : c !== 0 ? u = Ue(c) : e || (e = a & ~t, e !== 0 && (u = Ue(e)))), u === 0 ? 0 : l !== 0 && l !== u && (l & n) === 0 && (n = u & -u, e = l & -l, n >= e || n === 32 && (e & 4194048) !== 0) ? l : u;
  }
  function Ba(t, l) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
  }
  function l0(t, l) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return l + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function jf() {
    var t = Cu;
    return Cu <<= 1, (Cu & 62914560) === 0 && (Cu = 4194304), t;
  }
  function nc(t) {
    for (var l = [], e = 0; 31 > e; e++) l.push(t);
    return l;
  }
  function Ca(t, l) {
    t.pendingLanes |= l, l !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function e0(t, l, e, a, u, n) {
    var c = t.pendingLanes;
    t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= e, t.entangledLanes &= e, t.errorRecoveryDisabledLanes &= e, t.shellSuspendCounter = 0;
    var i = t.entanglements, r = t.expirationTimes, _ = t.hiddenUpdates;
    for (e = c & ~e; 0 < e; ) {
      var S = 31 - nl(e), E = 1 << S;
      i[S] = 0, r[S] = -1;
      var h = _[S];
      if (h !== null) for (_[S] = null, S = 0; S < h.length; S++) {
        var b = h[S];
        b !== null && (b.lane &= -536870913);
      }
      e &= ~E;
    }
    a !== 0 && Bf(t, a, 0), n !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(c & ~l));
  }
  function Bf(t, l, e) {
    t.pendingLanes |= l, t.suspendedLanes &= ~l;
    var a = 31 - nl(l);
    t.entangledLanes |= l, t.entanglements[a] = t.entanglements[a] | 1073741824 | e & 261930;
  }
  function Cf(t, l) {
    var e = t.entangledLanes |= l;
    for (t = t.entanglements; e; ) {
      var a = 31 - nl(e), u = 1 << a;
      u & l | t[a] & l && (t[a] |= l), e &= ~u;
    }
  }
  function qf(t, l) {
    var e = l & -l;
    return e = (e & 42) !== 0 ? 1 : cc(e), (e & (t.suspendedLanes | l)) !== 0 ? 0 : e;
  }
  function cc(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function ic(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Yf() {
    var t = D.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Ad(t.type));
  }
  function wf(t, l) {
    var e = D.p;
    try {
      return D.p = t, l();
    } finally {
      D.p = e;
    }
  }
  var ae = Math.random().toString(36).slice(2), Rt = "__reactFiber$" + ae, Kt = "__reactProps$" + ae, We = "__reactContainer$" + ae, fc = "__reactEvents$" + ae, a0 = "__reactListeners$" + ae, u0 = "__reactHandles$" + ae, Gf = "__reactResources$" + ae, qa = "__reactMarker$" + ae;
  function sc(t) {
    delete t[Rt], delete t[Kt], delete t[fc], delete t[a0], delete t[u0];
  }
  function $e(t) {
    var l = t[Rt];
    if (l) return l;
    for (var e = t.parentNode; e; ) {
      if (l = e[We] || e[Rt]) {
        if (e = l.alternate, l.child !== null || e !== null && e.child !== null) for (t = fd(t); t !== null; ) {
          if (e = t[Rt]) return e;
          t = fd(t);
        }
        return l;
      }
      t = e, e = t.parentNode;
    }
    return null;
  }
  function Fe(t) {
    if (t = t[Rt] || t[We]) {
      var l = t.tag;
      if (l === 5 || l === 6 || l === 13 || l === 31 || l === 26 || l === 27 || l === 3) return t;
    }
    return null;
  }
  function Ya(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
    throw Error(s(33));
  }
  function ke(t) {
    var l = t[Gf];
    return l || (l = t[Gf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), l;
  }
  function Dt(t) {
    t[qa] = true;
  }
  var Xf = /* @__PURE__ */ new Set(), Qf = {};
  function Ne(t, l) {
    Ie(t, l), Ie(t + "Capture", l);
  }
  function Ie(t, l) {
    for (Qf[t] = l, t = 0; t < l.length; t++) Xf.add(l[t]);
  }
  var n0 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Zf = {}, Vf = {};
  function c0(t) {
    return ec.call(Vf, t) ? true : ec.call(Zf, t) ? false : n0.test(t) ? Vf[t] = true : (Zf[t] = true, false);
  }
  function Yu(t, l, e) {
    if (c0(l)) if (e === null) t.removeAttribute(l);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
          t.removeAttribute(l);
          return;
        case "boolean":
          var a = l.toLowerCase().slice(0, 5);
          if (a !== "data-" && a !== "aria-") {
            t.removeAttribute(l);
            return;
          }
      }
      t.setAttribute(l, "" + e);
    }
  }
  function wu(t, l, e) {
    if (e === null) t.removeAttribute(l);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttribute(l, "" + e);
    }
  }
  function ql(t, l, e, a) {
    if (a === null) t.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttributeNS(l, e, "" + a);
    }
  }
  function yl(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Lf(t) {
    var l = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (l === "checkbox" || l === "radio");
  }
  function i0(t, l, e) {
    var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, l);
    if (!t.hasOwnProperty(l) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var u = a.get, n = a.set;
      return Object.defineProperty(t, l, { configurable: true, get: function() {
        return u.call(this);
      }, set: function(c) {
        e = "" + c, n.call(this, c);
      } }), Object.defineProperty(t, l, { enumerable: a.enumerable }), { getValue: function() {
        return e;
      }, setValue: function(c) {
        e = "" + c;
      }, stopTracking: function() {
        t._valueTracker = null, delete t[l];
      } };
    }
  }
  function oc(t) {
    if (!t._valueTracker) {
      var l = Lf(t) ? "checked" : "value";
      t._valueTracker = i0(t, l, "" + t[l]);
    }
  }
  function Kf(t) {
    if (!t) return false;
    var l = t._valueTracker;
    if (!l) return true;
    var e = l.getValue(), a = "";
    return t && (a = Lf(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== e ? (l.setValue(t), true) : false;
  }
  function Gu(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var f0 = /[\n"\\]/g;
  function ml(t) {
    return t.replace(f0, function(l) {
      return "\\" + l.charCodeAt(0).toString(16) + " ";
    });
  }
  function rc(t, l, e, a, u, n, c, i) {
    t.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.type = c : t.removeAttribute("type"), l != null ? c === "number" ? (l === 0 && t.value === "" || t.value != l) && (t.value = "" + yl(l)) : t.value !== "" + yl(l) && (t.value = "" + yl(l)) : c !== "submit" && c !== "reset" || t.removeAttribute("value"), l != null ? dc(t, c, yl(l)) : e != null ? dc(t, c, yl(e)) : a != null && t.removeAttribute("value"), u == null && n != null && (t.defaultChecked = !!n), u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"), i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.name = "" + yl(i) : t.removeAttribute("name");
  }
  function Jf(t, l, e, a, u, n, c, i) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (t.type = n), l != null || e != null) {
      if (!(n !== "submit" && n !== "reset" || l != null)) {
        oc(t);
        return;
      }
      e = e != null ? "" + yl(e) : "", l = l != null ? "" + yl(l) : e, i || l === t.value || (t.value = l), t.defaultValue = l;
    }
    a = a ?? u, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = i ? t.checked : !!a, t.defaultChecked = !!a, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (t.name = c), oc(t);
  }
  function dc(t, l, e) {
    l === "number" && Gu(t.ownerDocument) === t || t.defaultValue === "" + e || (t.defaultValue = "" + e);
  }
  function Pe(t, l, e, a) {
    if (t = t.options, l) {
      l = {};
      for (var u = 0; u < e.length; u++) l["$" + e[u]] = true;
      for (e = 0; e < t.length; e++) u = l.hasOwnProperty("$" + t[e].value), t[e].selected !== u && (t[e].selected = u), u && a && (t[e].defaultSelected = true);
    } else {
      for (e = "" + yl(e), l = null, u = 0; u < t.length; u++) {
        if (t[u].value === e) {
          t[u].selected = true, a && (t[u].defaultSelected = true);
          return;
        }
        l !== null || t[u].disabled || (l = t[u]);
      }
      l !== null && (l.selected = true);
    }
  }
  function Wf(t, l, e) {
    if (l != null && (l = "" + yl(l), l !== t.value && (t.value = l), e == null)) {
      t.defaultValue !== l && (t.defaultValue = l);
      return;
    }
    t.defaultValue = e != null ? "" + yl(e) : "";
  }
  function $f(t, l, e, a) {
    if (l == null) {
      if (a != null) {
        if (e != null) throw Error(s(92));
        if (el(a)) {
          if (1 < a.length) throw Error(s(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ""), l = e;
    }
    e = yl(l), t.defaultValue = e, a = t.textContent, a === e && a !== "" && a !== null && (t.value = a), oc(t);
  }
  function ta(t, l) {
    if (l) {
      var e = t.firstChild;
      if (e && e === t.lastChild && e.nodeType === 3) {
        e.nodeValue = l;
        return;
      }
    }
    t.textContent = l;
  }
  var s0 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function Ff(t, l, e) {
    var a = l.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === "" ? a ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "" : a ? t.setProperty(l, e) : typeof e != "number" || e === 0 || s0.has(l) ? l === "float" ? t.cssFloat = e : t[l] = ("" + e).trim() : t[l] = e + "px";
  }
  function kf(t, l, e) {
    if (l != null && typeof l != "object") throw Error(s(62));
    if (t = t.style, e != null) {
      for (var a in e) !e.hasOwnProperty(a) || l != null && l.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
      for (var u in l) a = l[u], l.hasOwnProperty(u) && e[u] !== a && Ff(t, u, a);
    } else for (var n in l) l.hasOwnProperty(n) && Ff(t, n, l[n]);
  }
  function yc(t) {
    if (t.indexOf("-") === -1) return false;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var o0 = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), r0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Xu(t) {
    return r0.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Yl() {
  }
  var mc = null;
  function vc(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var la = null, ea = null;
  function If(t) {
    var l = Fe(t);
    if (l && (t = l.stateNode)) {
      var e = t[Kt] || null;
      t: switch (t = l.stateNode, l.type) {
        case "input":
          if (rc(t, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name), l = e.name, e.type === "radio" && l != null) {
            for (e = t; e.parentNode; ) e = e.parentNode;
            for (e = e.querySelectorAll('input[name="' + ml("" + l) + '"][type="radio"]'), l = 0; l < e.length; l++) {
              var a = e[l];
              if (a !== t && a.form === t.form) {
                var u = a[Kt] || null;
                if (!u) throw Error(s(90));
                rc(a, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name);
              }
            }
            for (l = 0; l < e.length; l++) a = e[l], a.form === t.form && Kf(a);
          }
          break t;
        case "textarea":
          Wf(t, e.value, e.defaultValue);
          break t;
        case "select":
          l = e.value, l != null && Pe(t, !!e.multiple, l, false);
      }
    }
  }
  var gc = false;
  function Pf(t, l, e) {
    if (gc) return t(l, e);
    gc = true;
    try {
      var a = t(l);
      return a;
    } finally {
      if (gc = false, (la !== null || ea !== null) && (Un(), la && (l = la, t = ea, ea = la = null, If(l), t))) for (l = 0; l < t.length; l++) If(t[l]);
    }
  }
  function wa(t, l) {
    var e = t.stateNode;
    if (e === null) return null;
    var a = e[Kt] || null;
    if (a === null) return null;
    e = a[l];
    t: switch (l) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
        break t;
      default:
        t = false;
    }
    if (t) return null;
    if (e && typeof e != "function") throw Error(s(231, l, typeof e));
    return e;
  }
  var wl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), _c = false;
  if (wl) try {
    var Ga = {};
    Object.defineProperty(Ga, "passive", { get: function() {
      _c = true;
    } }), window.addEventListener("test", Ga, Ga), window.removeEventListener("test", Ga, Ga);
  } catch {
    _c = false;
  }
  var ue = null, hc = null, Qu = null;
  function ts() {
    if (Qu) return Qu;
    var t, l = hc, e = l.length, a, u = "value" in ue ? ue.value : ue.textContent, n = u.length;
    for (t = 0; t < e && l[t] === u[t]; t++) ;
    var c = e - t;
    for (a = 1; a <= c && l[e - a] === u[n - a]; a++) ;
    return Qu = u.slice(t, 1 < a ? 1 - a : void 0);
  }
  function Zu(t) {
    var l = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && l === 13 && (t = 13)) : t = l, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Vu() {
    return true;
  }
  function ls() {
    return false;
  }
  function Jt(t) {
    function l(e, a, u, n, c) {
      this._reactName = e, this._targetInst = u, this.type = a, this.nativeEvent = n, this.target = c, this.currentTarget = null;
      for (var i in t) t.hasOwnProperty(i) && (e = t[i], this[i] = e ? e(n) : n[i]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === false) ? Vu : ls, this.isPropagationStopped = ls, this;
    }
    return w(l.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var e = this.nativeEvent;
      e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = false), this.isDefaultPrevented = Vu);
    }, stopPropagation: function() {
      var e = this.nativeEvent;
      e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = true), this.isPropagationStopped = Vu);
    }, persist: function() {
    }, isPersistent: Vu }), l;
  }
  var xe = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t) {
    return t.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Lu = Jt(xe), Xa = w({}, xe, { view: 0, detail: 0 }), d0 = Jt(Xa), bc, Sc, Qa, Ku = w({}, Xa, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Tc, button: 0, buttons: 0, relatedTarget: function(t) {
    return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
  }, movementX: function(t) {
    return "movementX" in t ? t.movementX : (t !== Qa && (Qa && t.type === "mousemove" ? (bc = t.screenX - Qa.screenX, Sc = t.screenY - Qa.screenY) : Sc = bc = 0, Qa = t), bc);
  }, movementY: function(t) {
    return "movementY" in t ? t.movementY : Sc;
  } }), es = Jt(Ku), y0 = w({}, Ku, { dataTransfer: 0 }), m0 = Jt(y0), v0 = w({}, Xa, { relatedTarget: 0 }), zc = Jt(v0), g0 = w({}, xe, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), _0 = Jt(g0), h0 = w({}, xe, { clipboardData: function(t) {
    return "clipboardData" in t ? t.clipboardData : window.clipboardData;
  } }), b0 = Jt(h0), S0 = w({}, xe, { data: 0 }), as = Jt(S0), z0 = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, T0 = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, E0 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function A0(t) {
    var l = this.nativeEvent;
    return l.getModifierState ? l.getModifierState(t) : (t = E0[t]) ? !!l[t] : false;
  }
  function Tc() {
    return A0;
  }
  var p0 = w({}, Xa, { key: function(t) {
    if (t.key) {
      var l = z0[t.key] || t.key;
      if (l !== "Unidentified") return l;
    }
    return t.type === "keypress" ? (t = Zu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? T0[t.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Tc, charCode: function(t) {
    return t.type === "keypress" ? Zu(t) : 0;
  }, keyCode: function(t) {
    return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  }, which: function(t) {
    return t.type === "keypress" ? Zu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  } }), O0 = Jt(p0), M0 = w({}, Ku, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), us = Jt(M0), D0 = w({}, Xa, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Tc }), U0 = Jt(D0), N0 = w({}, xe, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), x0 = Jt(N0), H0 = w({}, Ku, { deltaX: function(t) {
    return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
  }, deltaY: function(t) {
    return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), R0 = Jt(H0), j0 = w({}, xe, { newState: 0, oldState: 0 }), B0 = Jt(j0), C0 = [9, 13, 27, 32], Ec = wl && "CompositionEvent" in window, Za = null;
  wl && "documentMode" in document && (Za = document.documentMode);
  var q0 = wl && "TextEvent" in window && !Za, ns = wl && (!Ec || Za && 8 < Za && 11 >= Za), cs = " ", is = false;
  function fs(t, l) {
    switch (t) {
      case "keyup":
        return C0.indexOf(l.keyCode) !== -1;
      case "keydown":
        return l.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function ss(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var aa = false;
  function Y0(t, l) {
    switch (t) {
      case "compositionend":
        return ss(l);
      case "keypress":
        return l.which !== 32 ? null : (is = true, cs);
      case "textInput":
        return t = l.data, t === cs && is ? null : t;
      default:
        return null;
    }
  }
  function w0(t, l) {
    if (aa) return t === "compositionend" || !Ec && fs(t, l) ? (t = ts(), Qu = hc = ue = null, aa = false, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(l.ctrlKey || l.altKey || l.metaKey) || l.ctrlKey && l.altKey) {
          if (l.char && 1 < l.char.length) return l.char;
          if (l.which) return String.fromCharCode(l.which);
        }
        return null;
      case "compositionend":
        return ns && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var G0 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function os(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l === "input" ? !!G0[t.type] : l === "textarea";
  }
  function rs(t, l, e, a) {
    la ? ea ? ea.push(a) : ea = [a] : la = a, l = Cn(l, "onChange"), 0 < l.length && (e = new Lu("onChange", "change", null, e, a), t.push({ event: e, listeners: l }));
  }
  var Va = null, La = null;
  function X0(t) {
    Wr(t, 0);
  }
  function Ju(t) {
    var l = Ya(t);
    if (Kf(l)) return t;
  }
  function ds(t, l) {
    if (t === "change") return l;
  }
  var ys = false;
  if (wl) {
    var Ac;
    if (wl) {
      var pc = "oninput" in document;
      if (!pc) {
        var ms = document.createElement("div");
        ms.setAttribute("oninput", "return;"), pc = typeof ms.oninput == "function";
      }
      Ac = pc;
    } else Ac = false;
    ys = Ac && (!document.documentMode || 9 < document.documentMode);
  }
  function vs() {
    Va && (Va.detachEvent("onpropertychange", gs), La = Va = null);
  }
  function gs(t) {
    if (t.propertyName === "value" && Ju(La)) {
      var l = [];
      rs(l, La, t, vc(t)), Pf(X0, l);
    }
  }
  function Q0(t, l, e) {
    t === "focusin" ? (vs(), Va = l, La = e, Va.attachEvent("onpropertychange", gs)) : t === "focusout" && vs();
  }
  function Z0(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return Ju(La);
  }
  function V0(t, l) {
    if (t === "click") return Ju(l);
  }
  function L0(t, l) {
    if (t === "input" || t === "change") return Ju(l);
  }
  function K0(t, l) {
    return t === l && (t !== 0 || 1 / t === 1 / l) || t !== t && l !== l;
  }
  var cl = typeof Object.is == "function" ? Object.is : K0;
  function Ka(t, l) {
    if (cl(t, l)) return true;
    if (typeof t != "object" || t === null || typeof l != "object" || l === null) return false;
    var e = Object.keys(t), a = Object.keys(l);
    if (e.length !== a.length) return false;
    for (a = 0; a < e.length; a++) {
      var u = e[a];
      if (!ec.call(l, u) || !cl(t[u], l[u])) return false;
    }
    return true;
  }
  function _s(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function hs(t, l) {
    var e = _s(t);
    t = 0;
    for (var a; e; ) {
      if (e.nodeType === 3) {
        if (a = t + e.textContent.length, t <= l && a >= l) return { node: e, offset: l - t };
        t = a;
      }
      t: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break t;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = _s(e);
    }
  }
  function bs(t, l) {
    return t && l ? t === l ? true : t && t.nodeType === 3 ? false : l && l.nodeType === 3 ? bs(t, l.parentNode) : "contains" in t ? t.contains(l) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(l) & 16) : false : false;
  }
  function Ss(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var l = Gu(t.document); l instanceof t.HTMLIFrameElement; ) {
      try {
        var e = typeof l.contentWindow.location.href == "string";
      } catch {
        e = false;
      }
      if (e) t = l.contentWindow;
      else break;
      l = Gu(t.document);
    }
    return l;
  }
  function Oc(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l && (l === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || l === "textarea" || t.contentEditable === "true");
  }
  var J0 = wl && "documentMode" in document && 11 >= document.documentMode, ua = null, Mc = null, Ja = null, Dc = false;
  function zs(t, l, e) {
    var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Dc || ua == null || ua !== Gu(a) || (a = ua, "selectionStart" in a && Oc(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset }), Ja && Ka(Ja, a) || (Ja = a, a = Cn(Mc, "onSelect"), 0 < a.length && (l = new Lu("onSelect", "select", null, l, e), t.push({ event: l, listeners: a }), l.target = ua)));
  }
  function He(t, l) {
    var e = {};
    return e[t.toLowerCase()] = l.toLowerCase(), e["Webkit" + t] = "webkit" + l, e["Moz" + t] = "moz" + l, e;
  }
  var na = { animationend: He("Animation", "AnimationEnd"), animationiteration: He("Animation", "AnimationIteration"), animationstart: He("Animation", "AnimationStart"), transitionrun: He("Transition", "TransitionRun"), transitionstart: He("Transition", "TransitionStart"), transitioncancel: He("Transition", "TransitionCancel"), transitionend: He("Transition", "TransitionEnd") }, Uc = {}, Ts = {};
  wl && (Ts = document.createElement("div").style, "AnimationEvent" in window || (delete na.animationend.animation, delete na.animationiteration.animation, delete na.animationstart.animation), "TransitionEvent" in window || delete na.transitionend.transition);
  function Re(t) {
    if (Uc[t]) return Uc[t];
    if (!na[t]) return t;
    var l = na[t], e;
    for (e in l) if (l.hasOwnProperty(e) && e in Ts) return Uc[t] = l[e];
    return t;
  }
  var Es = Re("animationend"), As = Re("animationiteration"), ps = Re("animationstart"), W0 = Re("transitionrun"), $0 = Re("transitionstart"), F0 = Re("transitioncancel"), Os = Re("transitionend"), Ms = /* @__PURE__ */ new Map(), Nc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  Nc.push("scrollEnd");
  function Ml(t, l) {
    Ms.set(t, l), Ne(l, [t]);
  }
  var Wu = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var l = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t), error: t });
      if (!window.dispatchEvent(l)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, vl = [], ca = 0, xc = 0;
  function $u() {
    for (var t = ca, l = xc = ca = 0; l < t; ) {
      var e = vl[l];
      vl[l++] = null;
      var a = vl[l];
      vl[l++] = null;
      var u = vl[l];
      vl[l++] = null;
      var n = vl[l];
      if (vl[l++] = null, a !== null && u !== null) {
        var c = a.pending;
        c === null ? u.next = u : (u.next = c.next, c.next = u), a.pending = u;
      }
      n !== 0 && Ds(e, u, n);
    }
  }
  function Fu(t, l, e, a) {
    vl[ca++] = t, vl[ca++] = l, vl[ca++] = e, vl[ca++] = a, xc |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function Hc(t, l, e, a) {
    return Fu(t, l, e, a), ku(t);
  }
  function je(t, l) {
    return Fu(t, null, null, l), ku(t);
  }
  function Ds(t, l, e) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e);
    for (var u = false, n = t.return; n !== null; ) n.childLanes |= e, a = n.alternate, a !== null && (a.childLanes |= e), n.tag === 22 && (t = n.stateNode, t === null || t._visibility & 1 || (u = true)), t = n, n = n.return;
    return t.tag === 3 ? (n = t.stateNode, u && l !== null && (u = 31 - nl(e), t = n.hiddenUpdates, a = t[u], a === null ? t[u] = [l] : a.push(l), l.lane = e | 536870912), n) : null;
  }
  function ku(t) {
    if (50 < vu) throw vu = 0, Xi = null, Error(s(185));
    for (var l = t.return; l !== null; ) t = l, l = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var ia = {};
  function k0(t, l, e, a) {
    this.tag = t, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function il(t, l, e, a) {
    return new k0(t, l, e, a);
  }
  function Rc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Gl(t, l) {
    var e = t.alternate;
    return e === null ? (e = il(t.tag, l, t.key, t.mode), e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.alternate = t, t.alternate = e) : (e.pendingProps = l, e.type = t.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = t.flags & 65011712, e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, l = t.dependencies, e.dependencies = l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.refCleanup = t.refCleanup, e;
  }
  function Us(t, l) {
    t.flags &= 65011714;
    var e = t.alternate;
    return e === null ? (t.childLanes = 0, t.lanes = l, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, t.type = e.type, l = e.dependencies, t.dependencies = l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }), t;
  }
  function Iu(t, l, e, a, u, n) {
    var c = 0;
    if (a = t, typeof t == "function") Rc(t) && (c = 1);
    else if (typeof t == "string") c = em(t, e, R.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else t: switch (t) {
      case tl:
        return t = il(31, e, l, u), t.elementType = tl, t.lanes = n, t;
      case xt:
        return Be(e.children, u, n, l);
      case Al:
        c = 8, u |= 24;
        break;
      case Ht:
        return t = il(12, e, l, u | 2), t.elementType = Ht, t.lanes = n, t;
      case Pt:
        return t = il(13, e, l, u), t.elementType = Pt, t.lanes = n, t;
      case Yt:
        return t = il(19, e, l, u), t.elementType = Yt, t.lanes = n, t;
      default:
        if (typeof t == "object" && t !== null) switch (t.$$typeof) {
          case Mt:
            c = 10;
            break t;
          case pl:
            c = 9;
            break t;
          case Lt:
            c = 11;
            break t;
          case L:
            c = 14;
            break t;
          case wt:
            c = 16, a = null;
            break t;
        }
        c = 29, e = Error(s(130, t === null ? "null" : typeof t, "")), a = null;
    }
    return l = il(c, e, l, u), l.elementType = t, l.type = a, l.lanes = n, l;
  }
  function Be(t, l, e, a) {
    return t = il(7, t, a, l), t.lanes = e, t;
  }
  function jc(t, l, e) {
    return t = il(6, t, null, l), t.lanes = e, t;
  }
  function Ns(t) {
    var l = il(18, null, null, 0);
    return l.stateNode = t, l;
  }
  function Bc(t, l, e) {
    return l = il(4, t.children !== null ? t.children : [], t.key, l), l.lanes = e, l.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, l;
  }
  var xs = /* @__PURE__ */ new WeakMap();
  function gl(t, l) {
    if (typeof t == "object" && t !== null) {
      var e = xs.get(t);
      return e !== void 0 ? e : (l = { value: t, source: l, stack: Nf(l) }, xs.set(t, l), l);
    }
    return { value: t, source: l, stack: Nf(l) };
  }
  var fa = [], sa = 0, Pu = null, Wa = 0, _l = [], hl = 0, ne = null, xl = 1, Hl = "";
  function Xl(t, l) {
    fa[sa++] = Wa, fa[sa++] = Pu, Pu = t, Wa = l;
  }
  function Hs(t, l, e) {
    _l[hl++] = xl, _l[hl++] = Hl, _l[hl++] = ne, ne = t;
    var a = xl;
    t = Hl;
    var u = 32 - nl(a) - 1;
    a &= ~(1 << u), e += 1;
    var n = 32 - nl(l) + u;
    if (30 < n) {
      var c = u - u % 5;
      n = (a & (1 << c) - 1).toString(32), a >>= c, u -= c, xl = 1 << 32 - nl(l) + u | e << u | a, Hl = n + t;
    } else xl = 1 << n | e << u | a, Hl = t;
  }
  function Cc(t) {
    t.return !== null && (Xl(t, 1), Hs(t, 1, 0));
  }
  function qc(t) {
    for (; t === Pu; ) Pu = fa[--sa], fa[sa] = null, Wa = fa[--sa], fa[sa] = null;
    for (; t === ne; ) ne = _l[--hl], _l[hl] = null, Hl = _l[--hl], _l[hl] = null, xl = _l[--hl], _l[hl] = null;
  }
  function Rs(t, l) {
    _l[hl++] = xl, _l[hl++] = Hl, _l[hl++] = ne, xl = l.id, Hl = l.overflow, ne = t;
  }
  var jt = null, yt = null, I = false, ce = null, bl = false, Yc = Error(s(519));
  function ie(t) {
    var l = Error(s(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
    throw $a(gl(l, t)), Yc;
  }
  function js(t) {
    var l = t.stateNode, e = t.type, a = t.memoizedProps;
    switch (l[Rt] = t, l[Kt] = a, e) {
      case "dialog":
        W("cancel", l), W("close", l);
        break;
      case "iframe":
      case "object":
      case "embed":
        W("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < _u.length; e++) W(_u[e], l);
        break;
      case "source":
        W("error", l);
        break;
      case "img":
      case "image":
      case "link":
        W("error", l), W("load", l);
        break;
      case "details":
        W("toggle", l);
        break;
      case "input":
        W("invalid", l), Jf(l, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, true);
        break;
      case "select":
        W("invalid", l);
        break;
      case "textarea":
        W("invalid", l), $f(l, a.value, a.defaultValue, a.children);
    }
    e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || l.textContent === "" + e || a.suppressHydrationWarning === true || Ir(l.textContent, e) ? (a.popover != null && (W("beforetoggle", l), W("toggle", l)), a.onScroll != null && W("scroll", l), a.onScrollEnd != null && W("scrollend", l), a.onClick != null && (l.onclick = Yl), l = true) : l = false, l || ie(t, true);
  }
  function Bs(t) {
    for (jt = t.return; jt; ) switch (jt.tag) {
      case 5:
      case 31:
      case 13:
        bl = false;
        return;
      case 27:
      case 3:
        bl = true;
        return;
      default:
        jt = jt.return;
    }
  }
  function oa(t) {
    if (t !== jt) return false;
    if (!I) return Bs(t), I = true, false;
    var l = t.tag, e;
    if ((e = l !== 3 && l !== 27) && ((e = l === 5) && (e = t.type, e = !(e !== "form" && e !== "button") || ef(t.type, t.memoizedProps)), e = !e), e && yt && ie(t), Bs(t), l === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(s(317));
      yt = id(t);
    } else if (l === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(s(317));
      yt = id(t);
    } else l === 27 ? (l = yt, ze(t.type) ? (t = ff, ff = null, yt = t) : yt = l) : yt = jt ? zl(t.stateNode.nextSibling) : null;
    return true;
  }
  function Ce() {
    yt = jt = null, I = false;
  }
  function wc() {
    var t = ce;
    return t !== null && (kt === null ? kt = t : kt.push.apply(kt, t), ce = null), t;
  }
  function $a(t) {
    ce === null ? ce = [t] : ce.push(t);
  }
  var Gc = y(null), qe = null, Ql = null;
  function fe(t, l, e) {
    U(Gc, l._currentValue), l._currentValue = e;
  }
  function Zl(t) {
    t._currentValue = Gc.current, A(Gc);
  }
  function Xc(t, l, e) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & l) !== l ? (t.childLanes |= l, a !== null && (a.childLanes |= l)) : a !== null && (a.childLanes & l) !== l && (a.childLanes |= l), t === e) break;
      t = t.return;
    }
  }
  function Qc(t, l, e, a) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var c = u.child;
        n = n.firstContext;
        t: for (; n !== null; ) {
          var i = n;
          n = u;
          for (var r = 0; r < l.length; r++) if (i.context === l[r]) {
            n.lanes |= e, i = n.alternate, i !== null && (i.lanes |= e), Xc(n.return, e, t), a || (c = null);
            break t;
          }
          n = i.next;
        }
      } else if (u.tag === 18) {
        if (c = u.return, c === null) throw Error(s(341));
        c.lanes |= e, n = c.alternate, n !== null && (n.lanes |= e), Xc(c, e, t), c = null;
      } else c = u.child;
      if (c !== null) c.return = u;
      else for (c = u; c !== null; ) {
        if (c === t) {
          c = null;
          break;
        }
        if (u = c.sibling, u !== null) {
          u.return = c.return, c = u;
          break;
        }
        c = c.return;
      }
      u = c;
    }
  }
  function ra(t, l, e, a) {
    t = null;
    for (var u = l, n = false; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = true;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var c = u.alternate;
        if (c === null) throw Error(s(387));
        if (c = c.memoizedProps, c !== null) {
          var i = u.type;
          cl(u.pendingProps.value, c.value) || (t !== null ? t.push(i) : t = [i]);
        }
      } else if (u === nt.current) {
        if (c = u.alternate, c === null) throw Error(s(387));
        c.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(Tu) : t = [Tu]);
      }
      u = u.return;
    }
    t !== null && Qc(l, t, e, a), l.flags |= 262144;
  }
  function tn(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!cl(t.context._currentValue, t.memoizedValue)) return true;
      t = t.next;
    }
    return false;
  }
  function Ye(t) {
    qe = t, Ql = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Bt(t) {
    return Cs(qe, t);
  }
  function ln(t, l) {
    return qe === null && Ye(t), Cs(t, l);
  }
  function Cs(t, l) {
    var e = l._currentValue;
    if (l = { context: l, memoizedValue: e, next: null }, Ql === null) {
      if (t === null) throw Error(s(308));
      Ql = l, t.dependencies = { lanes: 0, firstContext: l }, t.flags |= 524288;
    } else Ql = Ql.next = l;
    return e;
  }
  var I0 = typeof AbortController < "u" ? AbortController : function() {
    var t = [], l = this.signal = { aborted: false, addEventListener: function(e, a) {
      t.push(a);
    } };
    this.abort = function() {
      l.aborted = true, t.forEach(function(e) {
        return e();
      });
    };
  }, P0 = o.unstable_scheduleCallback, ty = o.unstable_NormalPriority, Tt = { $$typeof: Mt, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function Zc() {
    return { controller: new I0(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function Fa(t) {
    t.refCount--, t.refCount === 0 && P0(ty, function() {
      t.controller.abort();
    });
  }
  var ka = null, Vc = 0, da = 0, ya = null;
  function ly(t, l) {
    if (ka === null) {
      var e = ka = [];
      Vc = 0, da = Ji(), ya = { status: "pending", value: void 0, then: function(a) {
        e.push(a);
      } };
    }
    return Vc++, l.then(qs, qs), l;
  }
  function qs() {
    if (--Vc === 0 && ka !== null) {
      ya !== null && (ya.status = "fulfilled");
      var t = ka;
      ka = null, da = 0, ya = null;
      for (var l = 0; l < t.length; l++) (0, t[l])();
    }
  }
  function ey(t, l) {
    var e = [], a = { status: "pending", value: null, reason: null, then: function(u) {
      e.push(u);
    } };
    return t.then(function() {
      a.status = "fulfilled", a.value = l;
      for (var u = 0; u < e.length; u++) (0, e[u])(l);
    }, function(u) {
      for (a.status = "rejected", a.reason = u, u = 0; u < e.length; u++) (0, e[u])(void 0);
    }), a;
  }
  var Ys = z.S;
  z.S = function(t, l) {
    Tr = al(), typeof l == "object" && l !== null && typeof l.then == "function" && ly(t, l), Ys !== null && Ys(t, l);
  };
  var we = y(null);
  function Lc() {
    var t = we.current;
    return t !== null ? t : dt.pooledCache;
  }
  function en(t, l) {
    l === null ? U(we, we.current) : U(we, l.pool);
  }
  function ws() {
    var t = Lc();
    return t === null ? null : { parent: Tt._currentValue, pool: t };
  }
  var ma = Error(s(460)), Kc = Error(s(474)), an = Error(s(542)), un = { then: function() {
  } };
  function Gs(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Xs(t, l, e) {
    switch (e = t[e], e === void 0 ? t.push(l) : e !== l && (l.then(Yl, Yl), l = e), l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw t = l.reason, Zs(t), t;
      default:
        if (typeof l.status == "string") l.then(Yl, Yl);
        else {
          if (t = dt, t !== null && 100 < t.shellSuspendCounter) throw Error(s(482));
          t = l, t.status = "pending", t.then(function(a) {
            if (l.status === "pending") {
              var u = l;
              u.status = "fulfilled", u.value = a;
            }
          }, function(a) {
            if (l.status === "pending") {
              var u = l;
              u.status = "rejected", u.reason = a;
            }
          });
        }
        switch (l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw t = l.reason, Zs(t), t;
        }
        throw Xe = l, ma;
    }
  }
  function Ge(t) {
    try {
      var l = t._init;
      return l(t._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function" ? (Xe = e, ma) : e;
    }
  }
  var Xe = null;
  function Qs() {
    if (Xe === null) throw Error(s(459));
    var t = Xe;
    return Xe = null, t;
  }
  function Zs(t) {
    if (t === ma || t === an) throw Error(s(483));
  }
  var va = null, Ia = 0;
  function nn(t) {
    var l = Ia;
    return Ia += 1, va === null && (va = []), Xs(va, t, l);
  }
  function Pa(t, l) {
    l = l.props.ref, t.ref = l !== void 0 ? l : null;
  }
  function cn(t, l) {
    throw l.$$typeof === at ? Error(s(525)) : (t = Object.prototype.toString.call(l), Error(s(31, t === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : t)));
  }
  function Vs(t) {
    function l(v, d) {
      if (t) {
        var g = v.deletions;
        g === null ? (v.deletions = [d], v.flags |= 16) : g.push(d);
      }
    }
    function e(v, d) {
      if (!t) return null;
      for (; d !== null; ) l(v, d), d = d.sibling;
      return null;
    }
    function a(v) {
      for (var d = /* @__PURE__ */ new Map(); v !== null; ) v.key !== null ? d.set(v.key, v) : d.set(v.index, v), v = v.sibling;
      return d;
    }
    function u(v, d) {
      return v = Gl(v, d), v.index = 0, v.sibling = null, v;
    }
    function n(v, d, g) {
      return v.index = g, t ? (g = v.alternate, g !== null ? (g = g.index, g < d ? (v.flags |= 67108866, d) : g) : (v.flags |= 67108866, d)) : (v.flags |= 1048576, d);
    }
    function c(v) {
      return t && v.alternate === null && (v.flags |= 67108866), v;
    }
    function i(v, d, g, T) {
      return d === null || d.tag !== 6 ? (d = jc(g, v.mode, T), d.return = v, d) : (d = u(d, g), d.return = v, d);
    }
    function r(v, d, g, T) {
      var q = g.type;
      return q === xt ? S(v, d, g.props.children, T, g.key) : d !== null && (d.elementType === q || typeof q == "object" && q !== null && q.$$typeof === wt && Ge(q) === d.type) ? (d = u(d, g.props), Pa(d, g), d.return = v, d) : (d = Iu(g.type, g.key, g.props, null, v.mode, T), Pa(d, g), d.return = v, d);
    }
    function _(v, d, g, T) {
      return d === null || d.tag !== 4 || d.stateNode.containerInfo !== g.containerInfo || d.stateNode.implementation !== g.implementation ? (d = Bc(g, v.mode, T), d.return = v, d) : (d = u(d, g.children || []), d.return = v, d);
    }
    function S(v, d, g, T, q) {
      return d === null || d.tag !== 7 ? (d = Be(g, v.mode, T, q), d.return = v, d) : (d = u(d, g), d.return = v, d);
    }
    function E(v, d, g) {
      if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint") return d = jc("" + d, v.mode, g), d.return = v, d;
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Nt:
            return g = Iu(d.type, d.key, d.props, null, v.mode, g), Pa(g, d), g.return = v, g;
          case zt:
            return d = Bc(d, v.mode, g), d.return = v, d;
          case wt:
            return d = Ge(d), E(v, d, g);
        }
        if (el(d) || Gt(d)) return d = Be(d, v.mode, g, null), d.return = v, d;
        if (typeof d.then == "function") return E(v, nn(d), g);
        if (d.$$typeof === Mt) return E(v, ln(v, d), g);
        cn(v, d);
      }
      return null;
    }
    function h(v, d, g, T) {
      var q = d !== null ? d.key : null;
      if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint") return q !== null ? null : i(v, d, "" + g, T);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case Nt:
            return g.key === q ? r(v, d, g, T) : null;
          case zt:
            return g.key === q ? _(v, d, g, T) : null;
          case wt:
            return g = Ge(g), h(v, d, g, T);
        }
        if (el(g) || Gt(g)) return q !== null ? null : S(v, d, g, T, null);
        if (typeof g.then == "function") return h(v, d, nn(g), T);
        if (g.$$typeof === Mt) return h(v, d, ln(v, g), T);
        cn(v, g);
      }
      return null;
    }
    function b(v, d, g, T, q) {
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint") return v = v.get(g) || null, i(d, v, "" + T, q);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case Nt:
            return v = v.get(T.key === null ? g : T.key) || null, r(d, v, T, q);
          case zt:
            return v = v.get(T.key === null ? g : T.key) || null, _(d, v, T, q);
          case wt:
            return T = Ge(T), b(v, d, g, T, q);
        }
        if (el(T) || Gt(T)) return v = v.get(g) || null, S(d, v, T, q, null);
        if (typeof T.then == "function") return b(v, d, g, nn(T), q);
        if (T.$$typeof === Mt) return b(v, d, g, ln(d, T), q);
        cn(d, T);
      }
      return null;
    }
    function H(v, d, g, T) {
      for (var q = null, lt = null, j = d, Z = d = 0, F = null; j !== null && Z < g.length; Z++) {
        j.index > Z ? (F = j, j = null) : F = j.sibling;
        var et = h(v, j, g[Z], T);
        if (et === null) {
          j === null && (j = F);
          break;
        }
        t && j && et.alternate === null && l(v, j), d = n(et, d, Z), lt === null ? q = et : lt.sibling = et, lt = et, j = F;
      }
      if (Z === g.length) return e(v, j), I && Xl(v, Z), q;
      if (j === null) {
        for (; Z < g.length; Z++) j = E(v, g[Z], T), j !== null && (d = n(j, d, Z), lt === null ? q = j : lt.sibling = j, lt = j);
        return I && Xl(v, Z), q;
      }
      for (j = a(j); Z < g.length; Z++) F = b(j, v, Z, g[Z], T), F !== null && (t && F.alternate !== null && j.delete(F.key === null ? Z : F.key), d = n(F, d, Z), lt === null ? q = F : lt.sibling = F, lt = F);
      return t && j.forEach(function(Oe) {
        return l(v, Oe);
      }), I && Xl(v, Z), q;
    }
    function Y(v, d, g, T) {
      if (g == null) throw Error(s(151));
      for (var q = null, lt = null, j = d, Z = d = 0, F = null, et = g.next(); j !== null && !et.done; Z++, et = g.next()) {
        j.index > Z ? (F = j, j = null) : F = j.sibling;
        var Oe = h(v, j, et.value, T);
        if (Oe === null) {
          j === null && (j = F);
          break;
        }
        t && j && Oe.alternate === null && l(v, j), d = n(Oe, d, Z), lt === null ? q = Oe : lt.sibling = Oe, lt = Oe, j = F;
      }
      if (et.done) return e(v, j), I && Xl(v, Z), q;
      if (j === null) {
        for (; !et.done; Z++, et = g.next()) et = E(v, et.value, T), et !== null && (d = n(et, d, Z), lt === null ? q = et : lt.sibling = et, lt = et);
        return I && Xl(v, Z), q;
      }
      for (j = a(j); !et.done; Z++, et = g.next()) et = b(j, v, Z, et.value, T), et !== null && (t && et.alternate !== null && j.delete(et.key === null ? Z : et.key), d = n(et, d, Z), lt === null ? q = et : lt.sibling = et, lt = et);
      return t && j.forEach(function(ym) {
        return l(v, ym);
      }), I && Xl(v, Z), q;
    }
    function ot(v, d, g, T) {
      if (typeof g == "object" && g !== null && g.type === xt && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case Nt:
            t: {
              for (var q = g.key; d !== null; ) {
                if (d.key === q) {
                  if (q = g.type, q === xt) {
                    if (d.tag === 7) {
                      e(v, d.sibling), T = u(d, g.props.children), T.return = v, v = T;
                      break t;
                    }
                  } else if (d.elementType === q || typeof q == "object" && q !== null && q.$$typeof === wt && Ge(q) === d.type) {
                    e(v, d.sibling), T = u(d, g.props), Pa(T, g), T.return = v, v = T;
                    break t;
                  }
                  e(v, d);
                  break;
                } else l(v, d);
                d = d.sibling;
              }
              g.type === xt ? (T = Be(g.props.children, v.mode, T, g.key), T.return = v, v = T) : (T = Iu(g.type, g.key, g.props, null, v.mode, T), Pa(T, g), T.return = v, v = T);
            }
            return c(v);
          case zt:
            t: {
              for (q = g.key; d !== null; ) {
                if (d.key === q) if (d.tag === 4 && d.stateNode.containerInfo === g.containerInfo && d.stateNode.implementation === g.implementation) {
                  e(v, d.sibling), T = u(d, g.children || []), T.return = v, v = T;
                  break t;
                } else {
                  e(v, d);
                  break;
                }
                else l(v, d);
                d = d.sibling;
              }
              T = Bc(g, v.mode, T), T.return = v, v = T;
            }
            return c(v);
          case wt:
            return g = Ge(g), ot(v, d, g, T);
        }
        if (el(g)) return H(v, d, g, T);
        if (Gt(g)) {
          if (q = Gt(g), typeof q != "function") throw Error(s(150));
          return g = q.call(g), Y(v, d, g, T);
        }
        if (typeof g.then == "function") return ot(v, d, nn(g), T);
        if (g.$$typeof === Mt) return ot(v, d, ln(v, g), T);
        cn(v, g);
      }
      return typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint" ? (g = "" + g, d !== null && d.tag === 6 ? (e(v, d.sibling), T = u(d, g), T.return = v, v = T) : (e(v, d), T = jc(g, v.mode, T), T.return = v, v = T), c(v)) : e(v, d);
    }
    return function(v, d, g, T) {
      try {
        Ia = 0;
        var q = ot(v, d, g, T);
        return va = null, q;
      } catch (j) {
        if (j === ma || j === an) throw j;
        var lt = il(29, j, null, v.mode);
        return lt.lanes = T, lt.return = v, lt;
      } finally {
      }
    };
  }
  var Qe = Vs(true), Ls = Vs(false), se = false;
  function Jc(t) {
    t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function Wc(t, l) {
    t = t.updateQueue, l.updateQueue === t && (l.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, callbacks: null });
  }
  function oe(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function re(t, l, e) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (ut & 2) !== 0) {
      var u = a.pending;
      return u === null ? l.next = l : (l.next = u.next, u.next = l), a.pending = l, l = ku(t), Ds(t, null, e), l;
    }
    return Fu(t, a, l, e), ku(t);
  }
  function tu(t, l, e) {
    if (l = l.updateQueue, l !== null && (l = l.shared, (e & 4194048) !== 0)) {
      var a = l.lanes;
      a &= t.pendingLanes, e |= a, l.lanes = e, Cf(t, e);
    }
  }
  function $c(t, l) {
    var e = t.updateQueue, a = t.alternate;
    if (a !== null && (a = a.updateQueue, e === a)) {
      var u = null, n = null;
      if (e = e.firstBaseUpdate, e !== null) {
        do {
          var c = { lane: e.lane, tag: e.tag, payload: e.payload, callback: null, next: null };
          n === null ? u = n = c : n = n.next = c, e = e.next;
        } while (e !== null);
        n === null ? u = n = l : n = n.next = l;
      } else u = n = l;
      e = { baseState: a.baseState, firstBaseUpdate: u, lastBaseUpdate: n, shared: a.shared, callbacks: a.callbacks }, t.updateQueue = e;
      return;
    }
    t = e.lastBaseUpdate, t === null ? e.firstBaseUpdate = l : t.next = l, e.lastBaseUpdate = l;
  }
  var Fc = false;
  function lu() {
    if (Fc) {
      var t = ya;
      if (t !== null) throw t;
    }
  }
  function eu(t, l, e, a) {
    Fc = false;
    var u = t.updateQueue;
    se = false;
    var n = u.firstBaseUpdate, c = u.lastBaseUpdate, i = u.shared.pending;
    if (i !== null) {
      u.shared.pending = null;
      var r = i, _ = r.next;
      r.next = null, c === null ? n = _ : c.next = _, c = r;
      var S = t.alternate;
      S !== null && (S = S.updateQueue, i = S.lastBaseUpdate, i !== c && (i === null ? S.firstBaseUpdate = _ : i.next = _, S.lastBaseUpdate = r));
    }
    if (n !== null) {
      var E = u.baseState;
      c = 0, S = _ = r = null, i = n;
      do {
        var h = i.lane & -536870913, b = h !== i.lane;
        if (b ? ($ & h) === h : (a & h) === h) {
          h !== 0 && h === da && (Fc = true), S !== null && (S = S.next = { lane: 0, tag: i.tag, payload: i.payload, callback: null, next: null });
          t: {
            var H = t, Y = i;
            h = l;
            var ot = e;
            switch (Y.tag) {
              case 1:
                if (H = Y.payload, typeof H == "function") {
                  E = H.call(ot, E, h);
                  break t;
                }
                E = H;
                break t;
              case 3:
                H.flags = H.flags & -65537 | 128;
              case 0:
                if (H = Y.payload, h = typeof H == "function" ? H.call(ot, E, h) : H, h == null) break t;
                E = w({}, E, h);
                break t;
              case 2:
                se = true;
            }
          }
          h = i.callback, h !== null && (t.flags |= 64, b && (t.flags |= 8192), b = u.callbacks, b === null ? u.callbacks = [h] : b.push(h));
        } else b = { lane: h, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, S === null ? (_ = S = b, r = E) : S = S.next = b, c |= h;
        if (i = i.next, i === null) {
          if (i = u.shared.pending, i === null) break;
          b = i, i = b.next, b.next = null, u.lastBaseUpdate = b, u.shared.pending = null;
        }
      } while (true);
      S === null && (r = E), u.baseState = r, u.firstBaseUpdate = _, u.lastBaseUpdate = S, n === null && (u.shared.lanes = 0), ge |= c, t.lanes = c, t.memoizedState = E;
    }
  }
  function Ks(t, l) {
    if (typeof t != "function") throw Error(s(191, t));
    t.call(l);
  }
  function Js(t, l) {
    var e = t.callbacks;
    if (e !== null) for (t.callbacks = null, t = 0; t < e.length; t++) Ks(e[t], l);
  }
  var ga = y(null), fn = y(0);
  function Ws(t, l) {
    t = Il, U(fn, t), U(ga, l), Il = t | l.baseLanes;
  }
  function kc() {
    U(fn, Il), U(ga, ga.current);
  }
  function Ic() {
    Il = fn.current, A(ga), A(fn);
  }
  var fl = y(null), Sl = null;
  function de(t) {
    var l = t.alternate;
    U(bt, bt.current & 1), U(fl, t), Sl === null && (l === null || ga.current !== null || l.memoizedState !== null) && (Sl = t);
  }
  function Pc(t) {
    U(bt, bt.current), U(fl, t), Sl === null && (Sl = t);
  }
  function $s(t) {
    t.tag === 22 ? (U(bt, bt.current), U(fl, t), Sl === null && (Sl = t)) : ye();
  }
  function ye() {
    U(bt, bt.current), U(fl, fl.current);
  }
  function sl(t) {
    A(fl), Sl === t && (Sl = null), A(bt);
  }
  var bt = y(0);
  function sn(t) {
    for (var l = t; l !== null; ) {
      if (l.tag === 13) {
        var e = l.memoizedState;
        if (e !== null && (e = e.dehydrated, e === null || nf(e) || cf(e))) return l;
      } else if (l.tag === 19 && (l.memoizedProps.revealOrder === "forwards" || l.memoizedProps.revealOrder === "backwards" || l.memoizedProps.revealOrder === "unstable_legacy-backwards" || l.memoizedProps.revealOrder === "together")) {
        if ((l.flags & 128) !== 0) return l;
      } else if (l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === t) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === t) return null;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
    return null;
  }
  var Vl = 0, Q = null, ft = null, Et = null, on = false, _a = false, Ze = false, rn = 0, au = 0, ha = null, ay = 0;
  function gt() {
    throw Error(s(321));
  }
  function ti(t, l) {
    if (l === null) return false;
    for (var e = 0; e < l.length && e < t.length; e++) if (!cl(t[e], l[e])) return false;
    return true;
  }
  function li(t, l, e, a, u, n) {
    return Vl = n, Q = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, z.H = t === null || t.memoizedState === null ? Ro : gi, Ze = false, n = e(a, u), Ze = false, _a && (n = ks(l, e, a, u)), Fs(t), n;
  }
  function Fs(t) {
    z.H = cu;
    var l = ft !== null && ft.next !== null;
    if (Vl = 0, Et = ft = Q = null, on = false, au = 0, ha = null, l) throw Error(s(300));
    t === null || At || (t = t.dependencies, t !== null && tn(t) && (At = true));
  }
  function ks(t, l, e, a) {
    Q = t;
    var u = 0;
    do {
      if (_a && (ha = null), au = 0, _a = false, 25 <= u) throw Error(s(301));
      if (u += 1, Et = ft = null, t.updateQueue != null) {
        var n = t.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      z.H = jo, n = l(e, a);
    } while (_a);
    return n;
  }
  function uy() {
    var t = z.H, l = t.useState()[0];
    return l = typeof l.then == "function" ? uu(l) : l, t = t.useState()[0], (ft !== null ? ft.memoizedState : null) !== t && (Q.flags |= 1024), l;
  }
  function ei() {
    var t = rn !== 0;
    return rn = 0, t;
  }
  function ai(t, l, e) {
    l.updateQueue = t.updateQueue, l.flags &= -2053, t.lanes &= ~e;
  }
  function ui(t) {
    if (on) {
      for (t = t.memoizedState; t !== null; ) {
        var l = t.queue;
        l !== null && (l.pending = null), t = t.next;
      }
      on = false;
    }
    Vl = 0, Et = ft = Q = null, _a = false, au = rn = 0, ha = null;
  }
  function Zt() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Et === null ? Q.memoizedState = Et = t : Et = Et.next = t, Et;
  }
  function St() {
    if (ft === null) {
      var t = Q.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = ft.next;
    var l = Et === null ? Q.memoizedState : Et.next;
    if (l !== null) Et = l, ft = t;
    else {
      if (t === null) throw Q.alternate === null ? Error(s(467)) : Error(s(310));
      ft = t, t = { memoizedState: ft.memoizedState, baseState: ft.baseState, baseQueue: ft.baseQueue, queue: ft.queue, next: null }, Et === null ? Q.memoizedState = Et = t : Et = Et.next = t;
    }
    return Et;
  }
  function dn() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function uu(t) {
    var l = au;
    return au += 1, ha === null && (ha = []), t = Xs(ha, t, l), l = Q, (Et === null ? l.memoizedState : Et.next) === null && (l = l.alternate, z.H = l === null || l.memoizedState === null ? Ro : gi), t;
  }
  function yn(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return uu(t);
      if (t.$$typeof === Mt) return Bt(t);
    }
    throw Error(s(438, String(t)));
  }
  function ni(t) {
    var l = null, e = Q.updateQueue;
    if (e !== null && (l = e.memoCache), l == null) {
      var a = Q.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (l = { data: a.data.map(function(u) {
        return u.slice();
      }), index: 0 })));
    }
    if (l == null && (l = { data: [], index: 0 }), e === null && (e = dn(), Q.updateQueue = e), e.memoCache = l, e = l.data[l.index], e === void 0) for (e = l.data[l.index] = Array(t), a = 0; a < t; a++) e[a] = le;
    return l.index++, e;
  }
  function Ll(t, l) {
    return typeof l == "function" ? l(t) : l;
  }
  function mn(t) {
    var l = St();
    return ci(l, ft, t);
  }
  function ci(t, l, e) {
    var a = t.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = e;
    var u = t.baseQueue, n = a.pending;
    if (n !== null) {
      if (u !== null) {
        var c = u.next;
        u.next = n.next, n.next = c;
      }
      l.baseQueue = u = n, a.pending = null;
    }
    if (n = t.baseState, u === null) t.memoizedState = n;
    else {
      l = u.next;
      var i = c = null, r = null, _ = l, S = false;
      do {
        var E = _.lane & -536870913;
        if (E !== _.lane ? ($ & E) === E : (Vl & E) === E) {
          var h = _.revertLane;
          if (h === 0) r !== null && (r = r.next = { lane: 0, revertLane: 0, gesture: null, action: _.action, hasEagerState: _.hasEagerState, eagerState: _.eagerState, next: null }), E === da && (S = true);
          else if ((Vl & h) === h) {
            _ = _.next, h === da && (S = true);
            continue;
          } else E = { lane: 0, revertLane: _.revertLane, gesture: null, action: _.action, hasEagerState: _.hasEagerState, eagerState: _.eagerState, next: null }, r === null ? (i = r = E, c = n) : r = r.next = E, Q.lanes |= h, ge |= h;
          E = _.action, Ze && e(n, E), n = _.hasEagerState ? _.eagerState : e(n, E);
        } else h = { lane: E, revertLane: _.revertLane, gesture: _.gesture, action: _.action, hasEagerState: _.hasEagerState, eagerState: _.eagerState, next: null }, r === null ? (i = r = h, c = n) : r = r.next = h, Q.lanes |= E, ge |= E;
        _ = _.next;
      } while (_ !== null && _ !== l);
      if (r === null ? c = n : r.next = i, !cl(n, t.memoizedState) && (At = true, S && (e = ya, e !== null))) throw e;
      t.memoizedState = n, t.baseState = c, t.baseQueue = r, a.lastRenderedState = n;
    }
    return u === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function ii(t) {
    var l = St(), e = l.queue;
    if (e === null) throw Error(s(311));
    e.lastRenderedReducer = t;
    var a = e.dispatch, u = e.pending, n = l.memoizedState;
    if (u !== null) {
      e.pending = null;
      var c = u = u.next;
      do
        n = t(n, c.action), c = c.next;
      while (c !== u);
      cl(n, l.memoizedState) || (At = true), l.memoizedState = n, l.baseQueue === null && (l.baseState = n), e.lastRenderedState = n;
    }
    return [n, a];
  }
  function Is(t, l, e) {
    var a = Q, u = St(), n = I;
    if (n) {
      if (e === void 0) throw Error(s(407));
      e = e();
    } else e = l();
    var c = !cl((ft || u).memoizedState, e);
    if (c && (u.memoizedState = e, At = true), u = u.queue, oi(lo.bind(null, a, u, t), [t]), u.getSnapshot !== l || c || Et !== null && Et.memoizedState.tag & 1) {
      if (a.flags |= 2048, ba(9, { destroy: void 0 }, to.bind(null, a, u, e, l), null), dt === null) throw Error(s(349));
      n || (Vl & 127) !== 0 || Ps(a, l, e);
    }
    return e;
  }
  function Ps(t, l, e) {
    t.flags |= 16384, t = { getSnapshot: l, value: e }, l = Q.updateQueue, l === null ? (l = dn(), Q.updateQueue = l, l.stores = [t]) : (e = l.stores, e === null ? l.stores = [t] : e.push(t));
  }
  function to(t, l, e, a) {
    l.value = e, l.getSnapshot = a, eo(l) && ao(t);
  }
  function lo(t, l, e) {
    return e(function() {
      eo(l) && ao(t);
    });
  }
  function eo(t) {
    var l = t.getSnapshot;
    t = t.value;
    try {
      var e = l();
      return !cl(t, e);
    } catch {
      return true;
    }
  }
  function ao(t) {
    var l = je(t, 2);
    l !== null && It(l, t, 2);
  }
  function fi(t) {
    var l = Zt();
    if (typeof t == "function") {
      var e = t;
      if (t = e(), Ze) {
        ee(true);
        try {
          e();
        } finally {
          ee(false);
        }
      }
    }
    return l.memoizedState = l.baseState = t, l.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Ll, lastRenderedState: t }, l;
  }
  function uo(t, l, e, a) {
    return t.baseState = e, ci(t, ft, typeof a == "function" ? a : Ll);
  }
  function ny(t, l, e, a, u) {
    if (_n(t)) throw Error(s(485));
    if (t = l.action, t !== null) {
      var n = { payload: u, action: t, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(c) {
        n.listeners.push(c);
      } };
      z.T !== null ? e(true) : n.isTransition = false, a(n), e = l.pending, e === null ? (n.next = l.pending = n, no(l, n)) : (n.next = e.next, l.pending = e.next = n);
    }
  }
  function no(t, l) {
    var e = l.action, a = l.payload, u = t.state;
    if (l.isTransition) {
      var n = z.T, c = {};
      z.T = c;
      try {
        var i = e(u, a), r = z.S;
        r !== null && r(c, i), co(t, l, i);
      } catch (_) {
        si(t, l, _);
      } finally {
        n !== null && c.types !== null && (n.types = c.types), z.T = n;
      }
    } else try {
      n = e(u, a), co(t, l, n);
    } catch (_) {
      si(t, l, _);
    }
  }
  function co(t, l, e) {
    e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(function(a) {
      io(t, l, a);
    }, function(a) {
      return si(t, l, a);
    }) : io(t, l, e);
  }
  function io(t, l, e) {
    l.status = "fulfilled", l.value = e, fo(l), t.state = e, l = t.pending, l !== null && (e = l.next, e === l ? t.pending = null : (e = e.next, l.next = e, no(t, e)));
  }
  function si(t, l, e) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        l.status = "rejected", l.reason = e, fo(l), l = l.next;
      while (l !== a);
    }
    t.action = null;
  }
  function fo(t) {
    t = t.listeners;
    for (var l = 0; l < t.length; l++) (0, t[l])();
  }
  function so(t, l) {
    return l;
  }
  function oo(t, l) {
    if (I) {
      var e = dt.formState;
      if (e !== null) {
        t: {
          var a = Q;
          if (I) {
            if (yt) {
              l: {
                for (var u = yt, n = bl; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break l;
                  }
                  if (u = zl(u.nextSibling), u === null) {
                    u = null;
                    break l;
                  }
                }
                n = u.data, u = n === "F!" || n === "F" ? u : null;
              }
              if (u) {
                yt = zl(u.nextSibling), a = u.data === "F!";
                break t;
              }
            }
            ie(a);
          }
          a = false;
        }
        a && (l = e[0]);
      }
    }
    return e = Zt(), e.memoizedState = e.baseState = l, a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: so, lastRenderedState: l }, e.queue = a, e = No.bind(null, Q, a), a.dispatch = e, a = fi(false), n = vi.bind(null, Q, false, a.queue), a = Zt(), u = { state: l, dispatch: null, action: t, pending: null }, a.queue = u, e = ny.bind(null, Q, u, n, e), u.dispatch = e, a.memoizedState = t, [l, e, false];
  }
  function ro(t) {
    var l = St();
    return yo(l, ft, t);
  }
  function yo(t, l, e) {
    if (l = ci(t, l, so)[0], t = mn(Ll)[0], typeof l == "object" && l !== null && typeof l.then == "function") try {
      var a = uu(l);
    } catch (c) {
      throw c === ma ? an : c;
    }
    else a = l;
    l = St();
    var u = l.queue, n = u.dispatch;
    return e !== l.memoizedState && (Q.flags |= 2048, ba(9, { destroy: void 0 }, cy.bind(null, u, e), null)), [a, n, t];
  }
  function cy(t, l) {
    t.action = l;
  }
  function mo(t) {
    var l = St(), e = ft;
    if (e !== null) return yo(l, e, t);
    St(), l = l.memoizedState, e = St();
    var a = e.queue.dispatch;
    return e.memoizedState = t, [l, a, false];
  }
  function ba(t, l, e, a) {
    return t = { tag: t, create: e, deps: a, inst: l, next: null }, l = Q.updateQueue, l === null && (l = dn(), Q.updateQueue = l), e = l.lastEffect, e === null ? l.lastEffect = t.next = t : (a = e.next, e.next = t, t.next = a, l.lastEffect = t), t;
  }
  function vo() {
    return St().memoizedState;
  }
  function vn(t, l, e, a) {
    var u = Zt();
    Q.flags |= t, u.memoizedState = ba(1 | l, { destroy: void 0 }, e, a === void 0 ? null : a);
  }
  function gn(t, l, e, a) {
    var u = St();
    a = a === void 0 ? null : a;
    var n = u.memoizedState.inst;
    ft !== null && a !== null && ti(a, ft.memoizedState.deps) ? u.memoizedState = ba(l, n, e, a) : (Q.flags |= t, u.memoizedState = ba(1 | l, n, e, a));
  }
  function go(t, l) {
    vn(8390656, 8, t, l);
  }
  function oi(t, l) {
    gn(2048, 8, t, l);
  }
  function iy(t) {
    Q.flags |= 4;
    var l = Q.updateQueue;
    if (l === null) l = dn(), Q.updateQueue = l, l.events = [t];
    else {
      var e = l.events;
      e === null ? l.events = [t] : e.push(t);
    }
  }
  function _o(t) {
    var l = St().memoizedState;
    return iy({ ref: l, nextImpl: t }), function() {
      if ((ut & 2) !== 0) throw Error(s(440));
      return l.impl.apply(void 0, arguments);
    };
  }
  function ho(t, l) {
    return gn(4, 2, t, l);
  }
  function bo(t, l) {
    return gn(4, 4, t, l);
  }
  function So(t, l) {
    if (typeof l == "function") {
      t = t();
      var e = l(t);
      return function() {
        typeof e == "function" ? e() : l(null);
      };
    }
    if (l != null) return t = t(), l.current = t, function() {
      l.current = null;
    };
  }
  function zo(t, l, e) {
    e = e != null ? e.concat([t]) : null, gn(4, 4, So.bind(null, l, t), e);
  }
  function ri() {
  }
  function To(t, l) {
    var e = St();
    l = l === void 0 ? null : l;
    var a = e.memoizedState;
    return l !== null && ti(l, a[1]) ? a[0] : (e.memoizedState = [t, l], t);
  }
  function Eo(t, l) {
    var e = St();
    l = l === void 0 ? null : l;
    var a = e.memoizedState;
    if (l !== null && ti(l, a[1])) return a[0];
    if (a = t(), Ze) {
      ee(true);
      try {
        t();
      } finally {
        ee(false);
      }
    }
    return e.memoizedState = [a, l], a;
  }
  function di(t, l, e) {
    return e === void 0 || (Vl & 1073741824) !== 0 && ($ & 261930) === 0 ? t.memoizedState = l : (t.memoizedState = e, t = Ar(), Q.lanes |= t, ge |= t, e);
  }
  function Ao(t, l, e, a) {
    return cl(e, l) ? e : ga.current !== null ? (t = di(t, e, a), cl(t, l) || (At = true), t) : (Vl & 42) === 0 || (Vl & 1073741824) !== 0 && ($ & 261930) === 0 ? (At = true, t.memoizedState = e) : (t = Ar(), Q.lanes |= t, ge |= t, l);
  }
  function po(t, l, e, a, u) {
    var n = D.p;
    D.p = n !== 0 && 8 > n ? n : 8;
    var c = z.T, i = {};
    z.T = i, vi(t, false, l, e);
    try {
      var r = u(), _ = z.S;
      if (_ !== null && _(i, r), r !== null && typeof r == "object" && typeof r.then == "function") {
        var S = ey(r, a);
        nu(t, l, S, dl(t));
      } else nu(t, l, a, dl(t));
    } catch (E) {
      nu(t, l, { then: function() {
      }, status: "rejected", reason: E }, dl());
    } finally {
      D.p = n, c !== null && i.types !== null && (c.types = i.types), z.T = c;
    }
  }
  function fy() {
  }
  function yi(t, l, e, a) {
    if (t.tag !== 5) throw Error(s(476));
    var u = Oo(t).queue;
    po(t, u, l, M, e === null ? fy : function() {
      return Mo(t), e(a);
    });
  }
  function Oo(t) {
    var l = t.memoizedState;
    if (l !== null) return l;
    l = { memoizedState: M, baseState: M, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Ll, lastRenderedState: M }, next: null };
    var e = {};
    return l.next = { memoizedState: e, baseState: e, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Ll, lastRenderedState: e }, next: null }, t.memoizedState = l, t = t.alternate, t !== null && (t.memoizedState = l), l;
  }
  function Mo(t) {
    var l = Oo(t);
    l.next === null && (l = t.alternate.memoizedState), nu(t, l.next.queue, {}, dl());
  }
  function mi() {
    return Bt(Tu);
  }
  function Do() {
    return St().memoizedState;
  }
  function Uo() {
    return St().memoizedState;
  }
  function sy(t) {
    for (var l = t.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var e = dl();
          t = oe(e);
          var a = re(l, t, e);
          a !== null && (It(a, l, e), tu(a, l, e)), l = { cache: Zc() }, t.payload = l;
          return;
      }
      l = l.return;
    }
  }
  function oy(t, l, e) {
    var a = dl();
    e = { lane: a, revertLane: 0, gesture: null, action: e, hasEagerState: false, eagerState: null, next: null }, _n(t) ? xo(l, e) : (e = Hc(t, l, e, a), e !== null && (It(e, t, a), Ho(e, l, a)));
  }
  function No(t, l, e) {
    var a = dl();
    nu(t, l, e, a);
  }
  function nu(t, l, e, a) {
    var u = { lane: a, revertLane: 0, gesture: null, action: e, hasEagerState: false, eagerState: null, next: null };
    if (_n(t)) xo(l, u);
    else {
      var n = t.alternate;
      if (t.lanes === 0 && (n === null || n.lanes === 0) && (n = l.lastRenderedReducer, n !== null)) try {
        var c = l.lastRenderedState, i = n(c, e);
        if (u.hasEagerState = true, u.eagerState = i, cl(i, c)) return Fu(t, l, u, 0), dt === null && $u(), false;
      } catch {
      } finally {
      }
      if (e = Hc(t, l, u, a), e !== null) return It(e, t, a), Ho(e, l, a), true;
    }
    return false;
  }
  function vi(t, l, e, a) {
    if (a = { lane: 2, revertLane: Ji(), gesture: null, action: a, hasEagerState: false, eagerState: null, next: null }, _n(t)) {
      if (l) throw Error(s(479));
    } else l = Hc(t, e, a, 2), l !== null && It(l, t, 2);
  }
  function _n(t) {
    var l = t.alternate;
    return t === Q || l !== null && l === Q;
  }
  function xo(t, l) {
    _a = on = true;
    var e = t.pending;
    e === null ? l.next = l : (l.next = e.next, e.next = l), t.pending = l;
  }
  function Ho(t, l, e) {
    if ((e & 4194048) !== 0) {
      var a = l.lanes;
      a &= t.pendingLanes, e |= a, l.lanes = e, Cf(t, e);
    }
  }
  var cu = { readContext: Bt, use: yn, useCallback: gt, useContext: gt, useEffect: gt, useImperativeHandle: gt, useLayoutEffect: gt, useInsertionEffect: gt, useMemo: gt, useReducer: gt, useRef: gt, useState: gt, useDebugValue: gt, useDeferredValue: gt, useTransition: gt, useSyncExternalStore: gt, useId: gt, useHostTransitionStatus: gt, useFormState: gt, useActionState: gt, useOptimistic: gt, useMemoCache: gt, useCacheRefresh: gt };
  cu.useEffectEvent = gt;
  var Ro = { readContext: Bt, use: yn, useCallback: function(t, l) {
    return Zt().memoizedState = [t, l === void 0 ? null : l], t;
  }, useContext: Bt, useEffect: go, useImperativeHandle: function(t, l, e) {
    e = e != null ? e.concat([t]) : null, vn(4194308, 4, So.bind(null, l, t), e);
  }, useLayoutEffect: function(t, l) {
    return vn(4194308, 4, t, l);
  }, useInsertionEffect: function(t, l) {
    vn(4, 2, t, l);
  }, useMemo: function(t, l) {
    var e = Zt();
    l = l === void 0 ? null : l;
    var a = t();
    if (Ze) {
      ee(true);
      try {
        t();
      } finally {
        ee(false);
      }
    }
    return e.memoizedState = [a, l], a;
  }, useReducer: function(t, l, e) {
    var a = Zt();
    if (e !== void 0) {
      var u = e(l);
      if (Ze) {
        ee(true);
        try {
          e(l);
        } finally {
          ee(false);
        }
      }
    } else u = l;
    return a.memoizedState = a.baseState = u, t = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: u }, a.queue = t, t = t.dispatch = oy.bind(null, Q, t), [a.memoizedState, t];
  }, useRef: function(t) {
    var l = Zt();
    return t = { current: t }, l.memoizedState = t;
  }, useState: function(t) {
    t = fi(t);
    var l = t.queue, e = No.bind(null, Q, l);
    return l.dispatch = e, [t.memoizedState, e];
  }, useDebugValue: ri, useDeferredValue: function(t, l) {
    var e = Zt();
    return di(e, t, l);
  }, useTransition: function() {
    var t = fi(false);
    return t = po.bind(null, Q, t.queue, true, false), Zt().memoizedState = t, [false, t];
  }, useSyncExternalStore: function(t, l, e) {
    var a = Q, u = Zt();
    if (I) {
      if (e === void 0) throw Error(s(407));
      e = e();
    } else {
      if (e = l(), dt === null) throw Error(s(349));
      ($ & 127) !== 0 || Ps(a, l, e);
    }
    u.memoizedState = e;
    var n = { value: e, getSnapshot: l };
    return u.queue = n, go(lo.bind(null, a, n, t), [t]), a.flags |= 2048, ba(9, { destroy: void 0 }, to.bind(null, a, n, e, l), null), e;
  }, useId: function() {
    var t = Zt(), l = dt.identifierPrefix;
    if (I) {
      var e = Hl, a = xl;
      e = (a & ~(1 << 32 - nl(a) - 1)).toString(32) + e, l = "_" + l + "R_" + e, e = rn++, 0 < e && (l += "H" + e.toString(32)), l += "_";
    } else e = ay++, l = "_" + l + "r_" + e.toString(32) + "_";
    return t.memoizedState = l;
  }, useHostTransitionStatus: mi, useFormState: oo, useActionState: oo, useOptimistic: function(t) {
    var l = Zt();
    l.memoizedState = l.baseState = t;
    var e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return l.queue = e, l = vi.bind(null, Q, true, e), e.dispatch = l, [t, l];
  }, useMemoCache: ni, useCacheRefresh: function() {
    return Zt().memoizedState = sy.bind(null, Q);
  }, useEffectEvent: function(t) {
    var l = Zt(), e = { impl: t };
    return l.memoizedState = e, function() {
      if ((ut & 2) !== 0) throw Error(s(440));
      return e.impl.apply(void 0, arguments);
    };
  } }, gi = { readContext: Bt, use: yn, useCallback: To, useContext: Bt, useEffect: oi, useImperativeHandle: zo, useInsertionEffect: ho, useLayoutEffect: bo, useMemo: Eo, useReducer: mn, useRef: vo, useState: function() {
    return mn(Ll);
  }, useDebugValue: ri, useDeferredValue: function(t, l) {
    var e = St();
    return Ao(e, ft.memoizedState, t, l);
  }, useTransition: function() {
    var t = mn(Ll)[0], l = St().memoizedState;
    return [typeof t == "boolean" ? t : uu(t), l];
  }, useSyncExternalStore: Is, useId: Do, useHostTransitionStatus: mi, useFormState: ro, useActionState: ro, useOptimistic: function(t, l) {
    var e = St();
    return uo(e, ft, t, l);
  }, useMemoCache: ni, useCacheRefresh: Uo };
  gi.useEffectEvent = _o;
  var jo = { readContext: Bt, use: yn, useCallback: To, useContext: Bt, useEffect: oi, useImperativeHandle: zo, useInsertionEffect: ho, useLayoutEffect: bo, useMemo: Eo, useReducer: ii, useRef: vo, useState: function() {
    return ii(Ll);
  }, useDebugValue: ri, useDeferredValue: function(t, l) {
    var e = St();
    return ft === null ? di(e, t, l) : Ao(e, ft.memoizedState, t, l);
  }, useTransition: function() {
    var t = ii(Ll)[0], l = St().memoizedState;
    return [typeof t == "boolean" ? t : uu(t), l];
  }, useSyncExternalStore: Is, useId: Do, useHostTransitionStatus: mi, useFormState: mo, useActionState: mo, useOptimistic: function(t, l) {
    var e = St();
    return ft !== null ? uo(e, ft, t, l) : (e.baseState = t, [t, e.queue.dispatch]);
  }, useMemoCache: ni, useCacheRefresh: Uo };
  jo.useEffectEvent = _o;
  function _i(t, l, e, a) {
    l = t.memoizedState, e = e(a, l), e = e == null ? l : w({}, l, e), t.memoizedState = e, t.lanes === 0 && (t.updateQueue.baseState = e);
  }
  var hi = { enqueueSetState: function(t, l, e) {
    t = t._reactInternals;
    var a = dl(), u = oe(a);
    u.payload = l, e != null && (u.callback = e), l = re(t, u, a), l !== null && (It(l, t, a), tu(l, t, a));
  }, enqueueReplaceState: function(t, l, e) {
    t = t._reactInternals;
    var a = dl(), u = oe(a);
    u.tag = 1, u.payload = l, e != null && (u.callback = e), l = re(t, u, a), l !== null && (It(l, t, a), tu(l, t, a));
  }, enqueueForceUpdate: function(t, l) {
    t = t._reactInternals;
    var e = dl(), a = oe(e);
    a.tag = 2, l != null && (a.callback = l), l = re(t, a, e), l !== null && (It(l, t, e), tu(l, t, e));
  } };
  function Bo(t, l, e, a, u, n, c) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, n, c) : l.prototype && l.prototype.isPureReactComponent ? !Ka(e, a) || !Ka(u, n) : true;
  }
  function Co(t, l, e, a) {
    t = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(e, a), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(e, a), l.state !== t && hi.enqueueReplaceState(l, l.state, null);
  }
  function Ve(t, l) {
    var e = l;
    if ("ref" in l) {
      e = {};
      for (var a in l) a !== "ref" && (e[a] = l[a]);
    }
    if (t = t.defaultProps) {
      e === l && (e = w({}, e));
      for (var u in t) e[u] === void 0 && (e[u] = t[u]);
    }
    return e;
  }
  function qo(t) {
    Wu(t);
  }
  function Yo(t) {
    console.error(t);
  }
  function wo(t) {
    Wu(t);
  }
  function hn(t, l) {
    try {
      var e = t.onUncaughtError;
      e(l.value, { componentStack: l.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Go(t, l, e) {
    try {
      var a = t.onCaughtError;
      a(e.value, { componentStack: e.stack, errorBoundary: l.tag === 1 ? l.stateNode : null });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function bi(t, l, e) {
    return e = oe(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
      hn(t, l);
    }, e;
  }
  function Xo(t) {
    return t = oe(t), t.tag = 3, t;
  }
  function Qo(t, l, e, a) {
    var u = e.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = a.value;
      t.payload = function() {
        return u(n);
      }, t.callback = function() {
        Go(l, e, a);
      };
    }
    var c = e.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (t.callback = function() {
      Go(l, e, a), typeof u != "function" && (_e === null ? _e = /* @__PURE__ */ new Set([this]) : _e.add(this));
      var i = a.stack;
      this.componentDidCatch(a.value, { componentStack: i !== null ? i : "" });
    });
  }
  function ry(t, l, e, a, u) {
    if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (l = e.alternate, l !== null && ra(l, e, u, true), e = fl.current, e !== null) {
        switch (e.tag) {
          case 31:
          case 13:
            return Sl === null ? Nn() : e.alternate === null && _t === 0 && (_t = 3), e.flags &= -257, e.flags |= 65536, e.lanes = u, a === un ? e.flags |= 16384 : (l = e.updateQueue, l === null ? e.updateQueue = /* @__PURE__ */ new Set([a]) : l.add(a), Vi(t, a, u)), false;
          case 22:
            return e.flags |= 65536, a === un ? e.flags |= 16384 : (l = e.updateQueue, l === null ? (l = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([a]) }, e.updateQueue = l) : (e = l.retryQueue, e === null ? l.retryQueue = /* @__PURE__ */ new Set([a]) : e.add(a)), Vi(t, a, u)), false;
        }
        throw Error(s(435, e.tag));
      }
      return Vi(t, a, u), Nn(), false;
    }
    if (I) return l = fl.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = u, a !== Yc && (t = Error(s(422), { cause: a }), $a(gl(t, e)))) : (a !== Yc && (l = Error(s(423), { cause: a }), $a(gl(l, e))), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, a = gl(a, e), u = bi(t.stateNode, a, u), $c(t, u), _t !== 4 && (_t = 2)), false;
    var n = Error(s(520), { cause: a });
    if (n = gl(n, e), mu === null ? mu = [n] : mu.push(n), _t !== 4 && (_t = 2), l === null) return true;
    a = gl(a, e), e = l;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, t = u & -u, e.lanes |= t, t = bi(e.stateNode, a, t), $c(e, t), false;
        case 1:
          if (l = e.type, n = e.stateNode, (e.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (_e === null || !_e.has(n)))) return e.flags |= 65536, u &= -u, e.lanes |= u, u = Xo(u), Qo(u, t, e, a), $c(e, u), false;
      }
      e = e.return;
    } while (e !== null);
    return false;
  }
  var Si = Error(s(461)), At = false;
  function Ct(t, l, e, a) {
    l.child = t === null ? Ls(l, null, e, a) : Qe(l, t.child, e, a);
  }
  function Zo(t, l, e, a, u) {
    e = e.render;
    var n = l.ref;
    if ("ref" in a) {
      var c = {};
      for (var i in a) i !== "ref" && (c[i] = a[i]);
    } else c = a;
    return Ye(l), a = li(t, l, e, c, n, u), i = ei(), t !== null && !At ? (ai(t, l, u), Kl(t, l, u)) : (I && i && Cc(l), l.flags |= 1, Ct(t, l, a, u), l.child);
  }
  function Vo(t, l, e, a, u) {
    if (t === null) {
      var n = e.type;
      return typeof n == "function" && !Rc(n) && n.defaultProps === void 0 && e.compare === null ? (l.tag = 15, l.type = n, Lo(t, l, n, a, u)) : (t = Iu(e.type, null, a, l, l.mode, u), t.ref = l.ref, t.return = l, l.child = t);
    }
    if (n = t.child, !Di(t, u)) {
      var c = n.memoizedProps;
      if (e = e.compare, e = e !== null ? e : Ka, e(c, a) && t.ref === l.ref) return Kl(t, l, u);
    }
    return l.flags |= 1, t = Gl(n, a), t.ref = l.ref, t.return = l, l.child = t;
  }
  function Lo(t, l, e, a, u) {
    if (t !== null) {
      var n = t.memoizedProps;
      if (Ka(n, a) && t.ref === l.ref) if (At = false, l.pendingProps = a = n, Di(t, u)) (t.flags & 131072) !== 0 && (At = true);
      else return l.lanes = t.lanes, Kl(t, l, u);
    }
    return zi(t, l, e, a, u);
  }
  function Ko(t, l, e, a) {
    var u = a.children, n = t !== null ? t.memoizedState : null;
    if (t === null && l.stateNode === null && (l.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), a.mode === "hidden") {
      if ((l.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | e : e, t !== null) {
          for (a = l.child = t.child, u = 0; a !== null; ) u = u | a.lanes | a.childLanes, a = a.sibling;
          a = u & ~n;
        } else a = 0, l.child = null;
        return Jo(t, l, n, e, a);
      }
      if ((e & 536870912) !== 0) l.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && en(l, n !== null ? n.cachePool : null), n !== null ? Ws(l, n) : kc(), $s(l);
      else return a = l.lanes = 536870912, Jo(t, l, n !== null ? n.baseLanes | e : e, e, a);
    } else n !== null ? (en(l, n.cachePool), Ws(l, n), ye(), l.memoizedState = null) : (t !== null && en(l, null), kc(), ye());
    return Ct(t, l, u, e), l.child;
  }
  function iu(t, l) {
    return t !== null && t.tag === 22 || l.stateNode !== null || (l.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), l.sibling;
  }
  function Jo(t, l, e, a, u) {
    var n = Lc();
    return n = n === null ? null : { parent: Tt._currentValue, pool: n }, l.memoizedState = { baseLanes: e, cachePool: n }, t !== null && en(l, null), kc(), $s(l), t !== null && ra(t, l, a, true), l.childLanes = u, null;
  }
  function bn(t, l) {
    return l = zn({ mode: l.mode, children: l.children }, t.mode), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function Wo(t, l, e) {
    return Qe(l, t.child, null, e), t = bn(l, l.pendingProps), t.flags |= 2, sl(l), l.memoizedState = null, t;
  }
  function dy(t, l, e) {
    var a = l.pendingProps, u = (l.flags & 128) !== 0;
    if (l.flags &= -129, t === null) {
      if (I) {
        if (a.mode === "hidden") return t = bn(l, a), l.lanes = 536870912, iu(null, t);
        if (Pc(l), (t = yt) ? (t = cd(t, bl), t = t !== null && t.data === "&" ? t : null, t !== null && (l.memoizedState = { dehydrated: t, treeContext: ne !== null ? { id: xl, overflow: Hl } : null, retryLane: 536870912, hydrationErrors: null }, e = Ns(t), e.return = l, l.child = e, jt = l, yt = null)) : t = null, t === null) throw ie(l);
        return l.lanes = 536870912, null;
      }
      return bn(l, a);
    }
    var n = t.memoizedState;
    if (n !== null) {
      var c = n.dehydrated;
      if (Pc(l), u) if (l.flags & 256) l.flags &= -257, l = Wo(t, l, e);
      else if (l.memoizedState !== null) l.child = t.child, l.flags |= 128, l = null;
      else throw Error(s(558));
      else if (At || ra(t, l, e, false), u = (e & t.childLanes) !== 0, At || u) {
        if (a = dt, a !== null && (c = qf(a, e), c !== 0 && c !== n.retryLane)) throw n.retryLane = c, je(t, c), It(a, t, c), Si;
        Nn(), l = Wo(t, l, e);
      } else t = n.treeContext, yt = zl(c.nextSibling), jt = l, I = true, ce = null, bl = false, t !== null && Rs(l, t), l = bn(l, a), l.flags |= 4096;
      return l;
    }
    return t = Gl(t.child, { mode: a.mode, children: a.children }), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function Sn(t, l) {
    var e = l.ref;
    if (e === null) t !== null && t.ref !== null && (l.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object") throw Error(s(284));
      (t === null || t.ref !== e) && (l.flags |= 4194816);
    }
  }
  function zi(t, l, e, a, u) {
    return Ye(l), e = li(t, l, e, a, void 0, u), a = ei(), t !== null && !At ? (ai(t, l, u), Kl(t, l, u)) : (I && a && Cc(l), l.flags |= 1, Ct(t, l, e, u), l.child);
  }
  function $o(t, l, e, a, u, n) {
    return Ye(l), l.updateQueue = null, e = ks(l, a, e, u), Fs(t), a = ei(), t !== null && !At ? (ai(t, l, n), Kl(t, l, n)) : (I && a && Cc(l), l.flags |= 1, Ct(t, l, e, n), l.child);
  }
  function Fo(t, l, e, a, u) {
    if (Ye(l), l.stateNode === null) {
      var n = ia, c = e.contextType;
      typeof c == "object" && c !== null && (n = Bt(c)), n = new e(a, n), l.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = hi, l.stateNode = n, n._reactInternals = l, n = l.stateNode, n.props = a, n.state = l.memoizedState, n.refs = {}, Jc(l), c = e.contextType, n.context = typeof c == "object" && c !== null ? Bt(c) : ia, n.state = l.memoizedState, c = e.getDerivedStateFromProps, typeof c == "function" && (_i(l, e, c, a), n.state = l.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (c = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), c !== n.state && hi.enqueueReplaceState(n, n.state, null), eu(l, a, n, u), lu(), n.state = l.memoizedState), typeof n.componentDidMount == "function" && (l.flags |= 4194308), a = true;
    } else if (t === null) {
      n = l.stateNode;
      var i = l.memoizedProps, r = Ve(e, i);
      n.props = r;
      var _ = n.context, S = e.contextType;
      c = ia, typeof S == "object" && S !== null && (c = Bt(S));
      var E = e.getDerivedStateFromProps;
      S = typeof E == "function" || typeof n.getSnapshotBeforeUpdate == "function", i = l.pendingProps !== i, S || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i || _ !== c) && Co(l, n, a, c), se = false;
      var h = l.memoizedState;
      n.state = h, eu(l, a, n, u), lu(), _ = l.memoizedState, i || h !== _ || se ? (typeof E == "function" && (_i(l, e, E, a), _ = l.memoizedState), (r = se || Bo(l, e, r, a, h, _, c)) ? (S || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = a, l.memoizedState = _), n.props = a, n.state = _, n.context = c, a = r) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), a = false);
    } else {
      n = l.stateNode, Wc(t, l), c = l.memoizedProps, S = Ve(e, c), n.props = S, E = l.pendingProps, h = n.context, _ = e.contextType, r = ia, typeof _ == "object" && _ !== null && (r = Bt(_)), i = e.getDerivedStateFromProps, (_ = typeof i == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c !== E || h !== r) && Co(l, n, a, r), se = false, h = l.memoizedState, n.state = h, eu(l, a, n, u), lu();
      var b = l.memoizedState;
      c !== E || h !== b || se || t !== null && t.dependencies !== null && tn(t.dependencies) ? (typeof i == "function" && (_i(l, e, i, a), b = l.memoizedState), (S = se || Bo(l, e, S, a, h, b, r) || t !== null && t.dependencies !== null && tn(t.dependencies)) ? (_ || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, b, r), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(a, b, r)), typeof n.componentDidUpdate == "function" && (l.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || c === t.memoizedProps && h === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && h === t.memoizedState || (l.flags |= 1024), l.memoizedProps = a, l.memoizedState = b), n.props = a, n.state = b, n.context = r, a = S) : (typeof n.componentDidUpdate != "function" || c === t.memoizedProps && h === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && h === t.memoizedState || (l.flags |= 1024), a = false);
    }
    return n = a, Sn(t, l), a = (l.flags & 128) !== 0, n || a ? (n = l.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : n.render(), l.flags |= 1, t !== null && a ? (l.child = Qe(l, t.child, null, u), l.child = Qe(l, null, e, u)) : Ct(t, l, e, u), l.memoizedState = n.state, t = l.child) : t = Kl(t, l, u), t;
  }
  function ko(t, l, e, a) {
    return Ce(), l.flags |= 256, Ct(t, l, e, a), l.child;
  }
  var Ti = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Ei(t) {
    return { baseLanes: t, cachePool: ws() };
  }
  function Ai(t, l, e) {
    return t = t !== null ? t.childLanes & ~e : 0, l && (t |= rl), t;
  }
  function Io(t, l, e) {
    var a = l.pendingProps, u = false, n = (l.flags & 128) !== 0, c;
    if ((c = n) || (c = t !== null && t.memoizedState === null ? false : (bt.current & 2) !== 0), c && (u = true, l.flags &= -129), c = (l.flags & 32) !== 0, l.flags &= -33, t === null) {
      if (I) {
        if (u ? de(l) : ye(), (t = yt) ? (t = cd(t, bl), t = t !== null && t.data !== "&" ? t : null, t !== null && (l.memoizedState = { dehydrated: t, treeContext: ne !== null ? { id: xl, overflow: Hl } : null, retryLane: 536870912, hydrationErrors: null }, e = Ns(t), e.return = l, l.child = e, jt = l, yt = null)) : t = null, t === null) throw ie(l);
        return cf(t) ? l.lanes = 32 : l.lanes = 536870912, null;
      }
      var i = a.children;
      return a = a.fallback, u ? (ye(), u = l.mode, i = zn({ mode: "hidden", children: i }, u), a = Be(a, u, e, null), i.return = l, a.return = l, i.sibling = a, l.child = i, a = l.child, a.memoizedState = Ei(e), a.childLanes = Ai(t, c, e), l.memoizedState = Ti, iu(null, a)) : (de(l), pi(l, i));
    }
    var r = t.memoizedState;
    if (r !== null && (i = r.dehydrated, i !== null)) {
      if (n) l.flags & 256 ? (de(l), l.flags &= -257, l = Oi(t, l, e)) : l.memoizedState !== null ? (ye(), l.child = t.child, l.flags |= 128, l = null) : (ye(), i = a.fallback, u = l.mode, a = zn({ mode: "visible", children: a.children }, u), i = Be(i, u, e, null), i.flags |= 2, a.return = l, i.return = l, a.sibling = i, l.child = a, Qe(l, t.child, null, e), a = l.child, a.memoizedState = Ei(e), a.childLanes = Ai(t, c, e), l.memoizedState = Ti, l = iu(null, a));
      else if (de(l), cf(i)) {
        if (c = i.nextSibling && i.nextSibling.dataset, c) var _ = c.dgst;
        c = _, a = Error(s(419)), a.stack = "", a.digest = c, $a({ value: a, source: null, stack: null }), l = Oi(t, l, e);
      } else if (At || ra(t, l, e, false), c = (e & t.childLanes) !== 0, At || c) {
        if (c = dt, c !== null && (a = qf(c, e), a !== 0 && a !== r.retryLane)) throw r.retryLane = a, je(t, a), It(c, t, a), Si;
        nf(i) || Nn(), l = Oi(t, l, e);
      } else nf(i) ? (l.flags |= 192, l.child = t.child, l = null) : (t = r.treeContext, yt = zl(i.nextSibling), jt = l, I = true, ce = null, bl = false, t !== null && Rs(l, t), l = pi(l, a.children), l.flags |= 4096);
      return l;
    }
    return u ? (ye(), i = a.fallback, u = l.mode, r = t.child, _ = r.sibling, a = Gl(r, { mode: "hidden", children: a.children }), a.subtreeFlags = r.subtreeFlags & 65011712, _ !== null ? i = Gl(_, i) : (i = Be(i, u, e, null), i.flags |= 2), i.return = l, a.return = l, a.sibling = i, l.child = a, iu(null, a), a = l.child, i = t.child.memoizedState, i === null ? i = Ei(e) : (u = i.cachePool, u !== null ? (r = Tt._currentValue, u = u.parent !== r ? { parent: r, pool: r } : u) : u = ws(), i = { baseLanes: i.baseLanes | e, cachePool: u }), a.memoizedState = i, a.childLanes = Ai(t, c, e), l.memoizedState = Ti, iu(t.child, a)) : (de(l), e = t.child, t = e.sibling, e = Gl(e, { mode: "visible", children: a.children }), e.return = l, e.sibling = null, t !== null && (c = l.deletions, c === null ? (l.deletions = [t], l.flags |= 16) : c.push(t)), l.child = e, l.memoizedState = null, e);
  }
  function pi(t, l) {
    return l = zn({ mode: "visible", children: l }, t.mode), l.return = t, t.child = l;
  }
  function zn(t, l) {
    return t = il(22, t, null, l), t.lanes = 0, t;
  }
  function Oi(t, l, e) {
    return Qe(l, t.child, null, e), t = pi(l, l.pendingProps.children), t.flags |= 2, l.memoizedState = null, t;
  }
  function Po(t, l, e) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l), Xc(t.return, l, e);
  }
  function Mi(t, l, e, a, u, n) {
    var c = t.memoizedState;
    c === null ? t.memoizedState = { isBackwards: l, rendering: null, renderingStartTime: 0, last: a, tail: e, tailMode: u, treeForkCount: n } : (c.isBackwards = l, c.rendering = null, c.renderingStartTime = 0, c.last = a, c.tail = e, c.tailMode = u, c.treeForkCount = n);
  }
  function tr(t, l, e) {
    var a = l.pendingProps, u = a.revealOrder, n = a.tail;
    a = a.children;
    var c = bt.current, i = (c & 2) !== 0;
    if (i ? (c = c & 1 | 2, l.flags |= 128) : c &= 1, U(bt, c), Ct(t, l, a, e), a = I ? Wa : 0, !i && t !== null && (t.flags & 128) !== 0) t: for (t = l.child; t !== null; ) {
      if (t.tag === 13) t.memoizedState !== null && Po(t, e, l);
      else if (t.tag === 19) Po(t, e, l);
      else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break t;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) break t;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    switch (u) {
      case "forwards":
        for (e = l.child, u = null; e !== null; ) t = e.alternate, t !== null && sn(t) === null && (u = e), e = e.sibling;
        e = u, e === null ? (u = l.child, l.child = null) : (u = e.sibling, e.sibling = null), Mi(l, false, u, e, n, a);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (e = null, u = l.child, l.child = null; u !== null; ) {
          if (t = u.alternate, t !== null && sn(t) === null) {
            l.child = u;
            break;
          }
          t = u.sibling, u.sibling = e, e = u, u = t;
        }
        Mi(l, true, e, null, n, a);
        break;
      case "together":
        Mi(l, false, null, null, void 0, a);
        break;
      default:
        l.memoizedState = null;
    }
    return l.child;
  }
  function Kl(t, l, e) {
    if (t !== null && (l.dependencies = t.dependencies), ge |= l.lanes, (e & l.childLanes) === 0) if (t !== null) {
      if (ra(t, l, e, false), (e & l.childLanes) === 0) return null;
    } else return null;
    if (t !== null && l.child !== t.child) throw Error(s(153));
    if (l.child !== null) {
      for (t = l.child, e = Gl(t, t.pendingProps), l.child = e, e.return = l; t.sibling !== null; ) t = t.sibling, e = e.sibling = Gl(t, t.pendingProps), e.return = l;
      e.sibling = null;
    }
    return l.child;
  }
  function Di(t, l) {
    return (t.lanes & l) !== 0 ? true : (t = t.dependencies, !!(t !== null && tn(t)));
  }
  function yy(t, l, e) {
    switch (l.tag) {
      case 3:
        Qt(l, l.stateNode.containerInfo), fe(l, Tt, t.memoizedState.cache), Ce();
        break;
      case 27:
      case 5:
        Ra(l);
        break;
      case 4:
        Qt(l, l.stateNode.containerInfo);
        break;
      case 10:
        fe(l, l.type, l.memoizedProps.value);
        break;
      case 31:
        if (l.memoizedState !== null) return l.flags |= 128, Pc(l), null;
        break;
      case 13:
        var a = l.memoizedState;
        if (a !== null) return a.dehydrated !== null ? (de(l), l.flags |= 128, null) : (e & l.child.childLanes) !== 0 ? Io(t, l, e) : (de(l), t = Kl(t, l, e), t !== null ? t.sibling : null);
        de(l);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (a = (e & l.childLanes) !== 0, a || (ra(t, l, e, false), a = (e & l.childLanes) !== 0), u) {
          if (a) return tr(t, l, e);
          l.flags |= 128;
        }
        if (u = l.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), U(bt, bt.current), a) break;
        return null;
      case 22:
        return l.lanes = 0, Ko(t, l, e, l.pendingProps);
      case 24:
        fe(l, Tt, t.memoizedState.cache);
    }
    return Kl(t, l, e);
  }
  function lr(t, l, e) {
    if (t !== null) if (t.memoizedProps !== l.pendingProps) At = true;
    else {
      if (!Di(t, e) && (l.flags & 128) === 0) return At = false, yy(t, l, e);
      At = (t.flags & 131072) !== 0;
    }
    else At = false, I && (l.flags & 1048576) !== 0 && Hs(l, Wa, l.index);
    switch (l.lanes = 0, l.tag) {
      case 16:
        t: {
          var a = l.pendingProps;
          if (t = Ge(l.elementType), l.type = t, typeof t == "function") Rc(t) ? (a = Ve(t, a), l.tag = 1, l = Fo(null, l, t, a, e)) : (l.tag = 0, l = zi(null, l, t, a, e));
          else {
            if (t != null) {
              var u = t.$$typeof;
              if (u === Lt) {
                l.tag = 11, l = Zo(null, l, t, a, e);
                break t;
              } else if (u === L) {
                l.tag = 14, l = Vo(null, l, t, a, e);
                break t;
              }
            }
            throw l = Ol(t) || t, Error(s(306, l, ""));
          }
        }
        return l;
      case 0:
        return zi(t, l, l.type, l.pendingProps, e);
      case 1:
        return a = l.type, u = Ve(a, l.pendingProps), Fo(t, l, a, u, e);
      case 3:
        t: {
          if (Qt(l, l.stateNode.containerInfo), t === null) throw Error(s(387));
          a = l.pendingProps;
          var n = l.memoizedState;
          u = n.element, Wc(t, l), eu(l, a, null, e);
          var c = l.memoizedState;
          if (a = c.cache, fe(l, Tt, a), a !== n.cache && Qc(l, [Tt], e, true), lu(), a = c.element, n.isDehydrated) if (n = { element: a, isDehydrated: false, cache: c.cache }, l.updateQueue.baseState = n, l.memoizedState = n, l.flags & 256) {
            l = ko(t, l, a, e);
            break t;
          } else if (a !== u) {
            u = gl(Error(s(424)), l), $a(u), l = ko(t, l, a, e);
            break t;
          } else {
            switch (t = l.stateNode.containerInfo, t.nodeType) {
              case 9:
                t = t.body;
                break;
              default:
                t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
            }
            for (yt = zl(t.firstChild), jt = l, I = true, ce = null, bl = true, e = Ls(l, null, a, e), l.child = e; e; ) e.flags = e.flags & -3 | 4096, e = e.sibling;
          }
          else {
            if (Ce(), a === u) {
              l = Kl(t, l, e);
              break t;
            }
            Ct(t, l, a, e);
          }
          l = l.child;
        }
        return l;
      case 26:
        return Sn(t, l), t === null ? (e = dd(l.type, null, l.pendingProps, null)) ? l.memoizedState = e : I || (e = l.type, t = l.pendingProps, a = qn(K.current).createElement(e), a[Rt] = l, a[Kt] = t, qt(a, e, t), Dt(a), l.stateNode = a) : l.memoizedState = dd(l.type, t.memoizedProps, l.pendingProps, t.memoizedState), null;
      case 27:
        return Ra(l), t === null && I && (a = l.stateNode = sd(l.type, l.pendingProps, K.current), jt = l, bl = true, u = yt, ze(l.type) ? (ff = u, yt = zl(a.firstChild)) : yt = u), Ct(t, l, l.pendingProps.children, e), Sn(t, l), t === null && (l.flags |= 4194304), l.child;
      case 5:
        return t === null && I && ((u = a = yt) && (a = Zy(a, l.type, l.pendingProps, bl), a !== null ? (l.stateNode = a, jt = l, yt = zl(a.firstChild), bl = false, u = true) : u = false), u || ie(l)), Ra(l), u = l.type, n = l.pendingProps, c = t !== null ? t.memoizedProps : null, a = n.children, ef(u, n) ? a = null : c !== null && ef(u, c) && (l.flags |= 32), l.memoizedState !== null && (u = li(t, l, uy, null, null, e), Tu._currentValue = u), Sn(t, l), Ct(t, l, a, e), l.child;
      case 6:
        return t === null && I && ((t = e = yt) && (e = Vy(e, l.pendingProps, bl), e !== null ? (l.stateNode = e, jt = l, yt = null, t = true) : t = false), t || ie(l)), null;
      case 13:
        return Io(t, l, e);
      case 4:
        return Qt(l, l.stateNode.containerInfo), a = l.pendingProps, t === null ? l.child = Qe(l, null, a, e) : Ct(t, l, a, e), l.child;
      case 11:
        return Zo(t, l, l.type, l.pendingProps, e);
      case 7:
        return Ct(t, l, l.pendingProps, e), l.child;
      case 8:
        return Ct(t, l, l.pendingProps.children, e), l.child;
      case 12:
        return Ct(t, l, l.pendingProps.children, e), l.child;
      case 10:
        return a = l.pendingProps, fe(l, l.type, a.value), Ct(t, l, a.children, e), l.child;
      case 9:
        return u = l.type._context, a = l.pendingProps.children, Ye(l), u = Bt(u), a = a(u), l.flags |= 1, Ct(t, l, a, e), l.child;
      case 14:
        return Vo(t, l, l.type, l.pendingProps, e);
      case 15:
        return Lo(t, l, l.type, l.pendingProps, e);
      case 19:
        return tr(t, l, e);
      case 31:
        return dy(t, l, e);
      case 22:
        return Ko(t, l, e, l.pendingProps);
      case 24:
        return Ye(l), a = Bt(Tt), t === null ? (u = Lc(), u === null && (u = dt, n = Zc(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= e), u = n), l.memoizedState = { parent: a, cache: u }, Jc(l), fe(l, Tt, u)) : ((t.lanes & e) !== 0 && (Wc(t, l), eu(l, null, null, e), lu()), u = t.memoizedState, n = l.memoizedState, u.parent !== a ? (u = { parent: a, cache: a }, l.memoizedState = u, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = u), fe(l, Tt, a)) : (a = n.cache, fe(l, Tt, a), a !== u.cache && Qc(l, [Tt], e, true))), Ct(t, l, l.pendingProps.children, e), l.child;
      case 29:
        throw l.pendingProps;
    }
    throw Error(s(156, l.tag));
  }
  function Jl(t) {
    t.flags |= 4;
  }
  function Ui(t, l, e, a, u) {
    if ((l = (t.mode & 32) !== 0) && (l = false), l) {
      if (t.flags |= 16777216, (u & 335544128) === u) if (t.stateNode.complete) t.flags |= 8192;
      else if (Dr()) t.flags |= 8192;
      else throw Xe = un, Kc;
    } else t.flags &= -16777217;
  }
  function er(t, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0) t.flags &= -16777217;
    else if (t.flags |= 16777216, !_d(l)) if (Dr()) t.flags |= 8192;
    else throw Xe = un, Kc;
  }
  function Tn(t, l) {
    l !== null && (t.flags |= 4), t.flags & 16384 && (l = t.tag !== 22 ? jf() : 536870912, t.lanes |= l, Ea |= l);
  }
  function fu(t, l) {
    if (!I) switch (t.tailMode) {
      case "hidden":
        l = t.tail;
        for (var e = null; l !== null; ) l.alternate !== null && (e = l), l = l.sibling;
        e === null ? t.tail = null : e.sibling = null;
        break;
      case "collapsed":
        e = t.tail;
        for (var a = null; e !== null; ) e.alternate !== null && (a = e), e = e.sibling;
        a === null ? l || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
    }
  }
  function mt(t) {
    var l = t.alternate !== null && t.alternate.child === t.child, e = 0, a = 0;
    if (l) for (var u = t.child; u !== null; ) e |= u.lanes | u.childLanes, a |= u.subtreeFlags & 65011712, a |= u.flags & 65011712, u.return = t, u = u.sibling;
    else for (u = t.child; u !== null; ) e |= u.lanes | u.childLanes, a |= u.subtreeFlags, a |= u.flags, u.return = t, u = u.sibling;
    return t.subtreeFlags |= a, t.childLanes = e, l;
  }
  function my(t, l, e) {
    var a = l.pendingProps;
    switch (qc(l), l.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return mt(l), null;
      case 1:
        return mt(l), null;
      case 3:
        return e = l.stateNode, a = null, t !== null && (a = t.memoizedState.cache), l.memoizedState.cache !== a && (l.flags |= 2048), Zl(Tt), ht(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (t === null || t.child === null) && (oa(l) ? Jl(l) : t === null || t.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, wc())), mt(l), null;
      case 26:
        var u = l.type, n = l.memoizedState;
        return t === null ? (Jl(l), n !== null ? (mt(l), er(l, n)) : (mt(l), Ui(l, u, null, a, e))) : n ? n !== t.memoizedState ? (Jl(l), mt(l), er(l, n)) : (mt(l), l.flags &= -16777217) : (t = t.memoizedProps, t !== a && Jl(l), mt(l), Ui(l, u, t, a, e)), null;
      case 27:
        if (Hu(l), e = K.current, u = l.type, t !== null && l.stateNode != null) t.memoizedProps !== a && Jl(l);
        else {
          if (!a) {
            if (l.stateNode === null) throw Error(s(166));
            return mt(l), null;
          }
          t = R.current, oa(l) ? js(l) : (t = sd(u, a, e), l.stateNode = t, Jl(l));
        }
        return mt(l), null;
      case 5:
        if (Hu(l), u = l.type, t !== null && l.stateNode != null) t.memoizedProps !== a && Jl(l);
        else {
          if (!a) {
            if (l.stateNode === null) throw Error(s(166));
            return mt(l), null;
          }
          if (n = R.current, oa(l)) js(l);
          else {
            var c = qn(K.current);
            switch (n) {
              case 1:
                n = c.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                n = c.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    n = c.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    n = c.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                    break;
                  case "script":
                    n = c.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild);
                    break;
                  case "select":
                    n = typeof a.is == "string" ? c.createElement("select", { is: a.is }) : c.createElement("select"), a.multiple ? n.multiple = true : a.size && (n.size = a.size);
                    break;
                  default:
                    n = typeof a.is == "string" ? c.createElement(u, { is: a.is }) : c.createElement(u);
                }
            }
            n[Rt] = l, n[Kt] = a;
            t: for (c = l.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6) n.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                c.child.return = c, c = c.child;
                continue;
              }
              if (c === l) break t;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === l) break t;
                c = c.return;
              }
              c.sibling.return = c.return, c = c.sibling;
            }
            l.stateNode = n;
            t: switch (qt(n, u, a), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = true;
                break t;
              default:
                a = false;
            }
            a && Jl(l);
          }
        }
        return mt(l), Ui(l, l.type, t === null ? null : t.memoizedProps, l.pendingProps, e), null;
      case 6:
        if (t && l.stateNode != null) t.memoizedProps !== a && Jl(l);
        else {
          if (typeof a != "string" && l.stateNode === null) throw Error(s(166));
          if (t = K.current, oa(l)) {
            if (t = l.stateNode, e = l.memoizedProps, a = null, u = jt, u !== null) switch (u.tag) {
              case 27:
              case 5:
                a = u.memoizedProps;
            }
            t[Rt] = l, t = !!(t.nodeValue === e || a !== null && a.suppressHydrationWarning === true || Ir(t.nodeValue, e)), t || ie(l, true);
          } else t = qn(t).createTextNode(a), t[Rt] = l, l.stateNode = t;
        }
        return mt(l), null;
      case 31:
        if (e = l.memoizedState, t === null || t.memoizedState !== null) {
          if (a = oa(l), e !== null) {
            if (t === null) {
              if (!a) throw Error(s(318));
              if (t = l.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(s(557));
              t[Rt] = l;
            } else Ce(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            mt(l), t = false;
          } else e = wc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = e), t = true;
          if (!t) return l.flags & 256 ? (sl(l), l) : (sl(l), null);
          if ((l.flags & 128) !== 0) throw Error(s(558));
        }
        return mt(l), null;
      case 13:
        if (a = l.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (u = oa(l), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!u) throw Error(s(318));
              if (u = l.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(s(317));
              u[Rt] = l;
            } else Ce(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            mt(l), u = false;
          } else u = wc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u), u = true;
          if (!u) return l.flags & 256 ? (sl(l), l) : (sl(l), null);
        }
        return sl(l), (l.flags & 128) !== 0 ? (l.lanes = e, l) : (e = a !== null, t = t !== null && t.memoizedState !== null, e && (a = l.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool), n = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== u && (a.flags |= 2048)), e !== t && e && (l.child.flags |= 8192), Tn(l, l.updateQueue), mt(l), null);
      case 4:
        return ht(), t === null && ki(l.stateNode.containerInfo), mt(l), null;
      case 10:
        return Zl(l.type), mt(l), null;
      case 19:
        if (A(bt), a = l.memoizedState, a === null) return mt(l), null;
        if (u = (l.flags & 128) !== 0, n = a.rendering, n === null) if (u) fu(a, false);
        else {
          if (_t !== 0 || t !== null && (t.flags & 128) !== 0) for (t = l.child; t !== null; ) {
            if (n = sn(t), n !== null) {
              for (l.flags |= 128, fu(a, false), t = n.updateQueue, l.updateQueue = t, Tn(l, t), l.subtreeFlags = 0, t = e, e = l.child; e !== null; ) Us(e, t), e = e.sibling;
              return U(bt, bt.current & 1 | 2), I && Xl(l, a.treeForkCount), l.child;
            }
            t = t.sibling;
          }
          a.tail !== null && al() > Mn && (l.flags |= 128, u = true, fu(a, false), l.lanes = 4194304);
        }
        else {
          if (!u) if (t = sn(n), t !== null) {
            if (l.flags |= 128, u = true, t = t.updateQueue, l.updateQueue = t, Tn(l, t), fu(a, true), a.tail === null && a.tailMode === "hidden" && !n.alternate && !I) return mt(l), null;
          } else 2 * al() - a.renderingStartTime > Mn && e !== 536870912 && (l.flags |= 128, u = true, fu(a, false), l.lanes = 4194304);
          a.isBackwards ? (n.sibling = l.child, l.child = n) : (t = a.last, t !== null ? t.sibling = n : l.child = n, a.last = n);
        }
        return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = al(), t.sibling = null, e = bt.current, U(bt, u ? e & 1 | 2 : e & 1), I && Xl(l, a.treeForkCount), t) : (mt(l), null);
      case 22:
      case 23:
        return sl(l), Ic(), a = l.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (l.flags |= 8192) : a && (l.flags |= 8192), a ? (e & 536870912) !== 0 && (l.flags & 128) === 0 && (mt(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : mt(l), e = l.updateQueue, e !== null && Tn(l, e.retryQueue), e = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), a = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), a !== e && (l.flags |= 2048), t !== null && A(we), null;
      case 24:
        return e = null, t !== null && (e = t.memoizedState.cache), l.memoizedState.cache !== e && (l.flags |= 2048), Zl(Tt), mt(l), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, l.tag));
  }
  function vy(t, l) {
    switch (qc(l), l.tag) {
      case 1:
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 3:
        return Zl(Tt), ht(), t = l.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (l.flags = t & -65537 | 128, l) : null;
      case 26:
      case 27:
      case 5:
        return Hu(l), null;
      case 31:
        if (l.memoizedState !== null) {
          if (sl(l), l.alternate === null) throw Error(s(340));
          Ce();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 13:
        if (sl(l), t = l.memoizedState, t !== null && t.dehydrated !== null) {
          if (l.alternate === null) throw Error(s(340));
          Ce();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 19:
        return A(bt), null;
      case 4:
        return ht(), null;
      case 10:
        return Zl(l.type), null;
      case 22:
      case 23:
        return sl(l), Ic(), t !== null && A(we), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 24:
        return Zl(Tt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ar(t, l) {
    switch (qc(l), l.tag) {
      case 3:
        Zl(Tt), ht();
        break;
      case 26:
      case 27:
      case 5:
        Hu(l);
        break;
      case 4:
        ht();
        break;
      case 31:
        l.memoizedState !== null && sl(l);
        break;
      case 13:
        sl(l);
        break;
      case 19:
        A(bt);
        break;
      case 10:
        Zl(l.type);
        break;
      case 22:
      case 23:
        sl(l), Ic(), t !== null && A(we);
        break;
      case 24:
        Zl(Tt);
    }
  }
  function su(t, l) {
    try {
      var e = l.updateQueue, a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        e = u;
        do {
          if ((e.tag & t) === t) {
            a = void 0;
            var n = e.create, c = e.inst;
            a = n(), c.destroy = a;
          }
          e = e.next;
        } while (e !== u);
      }
    } catch (i) {
      it(l, l.return, i);
    }
  }
  function me(t, l, e) {
    try {
      var a = l.updateQueue, u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        a = n;
        do {
          if ((a.tag & t) === t) {
            var c = a.inst, i = c.destroy;
            if (i !== void 0) {
              c.destroy = void 0, u = l;
              var r = e, _ = i;
              try {
                _();
              } catch (S) {
                it(u, r, S);
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (S) {
      it(l, l.return, S);
    }
  }
  function ur(t) {
    var l = t.updateQueue;
    if (l !== null) {
      var e = t.stateNode;
      try {
        Js(l, e);
      } catch (a) {
        it(t, t.return, a);
      }
    }
  }
  function nr(t, l, e) {
    e.props = Ve(t.type, t.memoizedProps), e.state = t.memoizedState;
    try {
      e.componentWillUnmount();
    } catch (a) {
      it(t, l, a);
    }
  }
  function ou(t, l) {
    try {
      var e = t.ref;
      if (e !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof e == "function" ? t.refCleanup = e(a) : e.current = a;
      }
    } catch (u) {
      it(t, l, u);
    }
  }
  function Rl(t, l) {
    var e = t.ref, a = t.refCleanup;
    if (e !== null) if (typeof a == "function") try {
      a();
    } catch (u) {
      it(t, l, u);
    } finally {
      t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
    }
    else if (typeof e == "function") try {
      e(null);
    } catch (u) {
      it(t, l, u);
    }
    else e.current = null;
  }
  function cr(t) {
    var l = t.type, e = t.memoizedProps, a = t.stateNode;
    try {
      t: switch (l) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && a.focus();
          break t;
        case "img":
          e.src ? a.src = e.src : e.srcSet && (a.srcset = e.srcSet);
      }
    } catch (u) {
      it(t, t.return, u);
    }
  }
  function Ni(t, l, e) {
    try {
      var a = t.stateNode;
      qy(a, t.type, e, l), a[Kt] = l;
    } catch (u) {
      it(t, t.return, u);
    }
  }
  function ir(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && ze(t.type) || t.tag === 4;
  }
  function xi(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || ir(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && ze(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Hi(t, l, e) {
    var a = t.tag;
    if (a === 5 || a === 6) t = t.stateNode, l ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(t, l) : (l = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.appendChild(t), e = e._reactRootContainer, e != null || l.onclick !== null || (l.onclick = Yl));
    else if (a !== 4 && (a === 27 && ze(t.type) && (e = t.stateNode, l = null), t = t.child, t !== null)) for (Hi(t, l, e), t = t.sibling; t !== null; ) Hi(t, l, e), t = t.sibling;
  }
  function En(t, l, e) {
    var a = t.tag;
    if (a === 5 || a === 6) t = t.stateNode, l ? e.insertBefore(t, l) : e.appendChild(t);
    else if (a !== 4 && (a === 27 && ze(t.type) && (e = t.stateNode), t = t.child, t !== null)) for (En(t, l, e), t = t.sibling; t !== null; ) En(t, l, e), t = t.sibling;
  }
  function fr(t) {
    var l = t.stateNode, e = t.memoizedProps;
    try {
      for (var a = t.type, u = l.attributes; u.length; ) l.removeAttributeNode(u[0]);
      qt(l, a, e), l[Rt] = t, l[Kt] = e;
    } catch (n) {
      it(t, t.return, n);
    }
  }
  var Wl = false, pt = false, Ri = false, sr = typeof WeakSet == "function" ? WeakSet : Set, Ut = null;
  function gy(t, l) {
    if (t = t.containerInfo, tf = Vn, t = Ss(t), Oc(t)) {
      if ("selectionStart" in t) var e = { start: t.selectionStart, end: t.selectionEnd };
      else t: {
        e = (e = t.ownerDocument) && e.defaultView || window;
        var a = e.getSelection && e.getSelection();
        if (a && a.rangeCount !== 0) {
          e = a.anchorNode;
          var u = a.anchorOffset, n = a.focusNode;
          a = a.focusOffset;
          try {
            e.nodeType, n.nodeType;
          } catch {
            e = null;
            break t;
          }
          var c = 0, i = -1, r = -1, _ = 0, S = 0, E = t, h = null;
          l: for (; ; ) {
            for (var b; E !== e || u !== 0 && E.nodeType !== 3 || (i = c + u), E !== n || a !== 0 && E.nodeType !== 3 || (r = c + a), E.nodeType === 3 && (c += E.nodeValue.length), (b = E.firstChild) !== null; ) h = E, E = b;
            for (; ; ) {
              if (E === t) break l;
              if (h === e && ++_ === u && (i = c), h === n && ++S === a && (r = c), (b = E.nextSibling) !== null) break;
              E = h, h = E.parentNode;
            }
            E = b;
          }
          e = i === -1 || r === -1 ? null : { start: i, end: r };
        } else e = null;
      }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (lf = { focusedElem: t, selectionRange: e }, Vn = false, Ut = l; Ut !== null; ) if (l = Ut, t = l.child, (l.subtreeFlags & 1028) !== 0 && t !== null) t.return = l, Ut = t;
    else for (; Ut !== null; ) {
      switch (l = Ut, n = l.alternate, t = l.flags, l.tag) {
        case 0:
          if ((t & 4) !== 0 && (t = l.updateQueue, t = t !== null ? t.events : null, t !== null)) for (e = 0; e < t.length; e++) u = t[e], u.ref.impl = u.nextImpl;
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((t & 1024) !== 0 && n !== null) {
            t = void 0, e = l, u = n.memoizedProps, n = n.memoizedState, a = e.stateNode;
            try {
              var H = Ve(e.type, u);
              t = a.getSnapshotBeforeUpdate(H, n), a.__reactInternalSnapshotBeforeUpdate = t;
            } catch (Y) {
              it(e, e.return, Y);
            }
          }
          break;
        case 3:
          if ((t & 1024) !== 0) {
            if (t = l.stateNode.containerInfo, e = t.nodeType, e === 9) uf(t);
            else if (e === 1) switch (t.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                uf(t);
                break;
              default:
                t.textContent = "";
            }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        default:
          if ((t & 1024) !== 0) throw Error(s(163));
      }
      if (t = l.sibling, t !== null) {
        t.return = l.return, Ut = t;
        break;
      }
      Ut = l.return;
    }
  }
  function or(t, l, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Fl(t, e), a & 4 && su(5, e);
        break;
      case 1:
        if (Fl(t, e), a & 4) if (t = e.stateNode, l === null) try {
          t.componentDidMount();
        } catch (c) {
          it(e, e.return, c);
        }
        else {
          var u = Ve(e.type, l.memoizedProps);
          l = l.memoizedState;
          try {
            t.componentDidUpdate(u, l, t.__reactInternalSnapshotBeforeUpdate);
          } catch (c) {
            it(e, e.return, c);
          }
        }
        a & 64 && ur(e), a & 512 && ou(e, e.return);
        break;
      case 3:
        if (Fl(t, e), a & 64 && (t = e.updateQueue, t !== null)) {
          if (l = null, e.child !== null) switch (e.child.tag) {
            case 27:
            case 5:
              l = e.child.stateNode;
              break;
            case 1:
              l = e.child.stateNode;
          }
          try {
            Js(t, l);
          } catch (c) {
            it(e, e.return, c);
          }
        }
        break;
      case 27:
        l === null && a & 4 && fr(e);
      case 26:
      case 5:
        Fl(t, e), l === null && a & 4 && cr(e), a & 512 && ou(e, e.return);
        break;
      case 12:
        Fl(t, e);
        break;
      case 31:
        Fl(t, e), a & 4 && yr(t, e);
        break;
      case 13:
        Fl(t, e), a & 4 && mr(t, e), a & 64 && (t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null && (e = py.bind(null, e), Ly(t, e))));
        break;
      case 22:
        if (a = e.memoizedState !== null || Wl, !a) {
          l = l !== null && l.memoizedState !== null || pt, u = Wl;
          var n = pt;
          Wl = a, (pt = l) && !n ? kl(t, e, (e.subtreeFlags & 8772) !== 0) : Fl(t, e), Wl = u, pt = n;
        }
        break;
      case 30:
        break;
      default:
        Fl(t, e);
    }
  }
  function rr(t) {
    var l = t.alternate;
    l !== null && (t.alternate = null, rr(l)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (l = t.stateNode, l !== null && sc(l)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var vt = null, Wt = false;
  function $l(t, l, e) {
    for (e = e.child; e !== null; ) dr(t, l, e), e = e.sibling;
  }
  function dr(t, l, e) {
    if (ul && typeof ul.onCommitFiberUnmount == "function") try {
      ul.onCommitFiberUnmount(ja, e);
    } catch {
    }
    switch (e.tag) {
      case 26:
        pt || Rl(e, l), $l(t, l, e), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        pt || Rl(e, l);
        var a = vt, u = Wt;
        ze(e.type) && (vt = e.stateNode, Wt = false), $l(t, l, e), bu(e.stateNode), vt = a, Wt = u;
        break;
      case 5:
        pt || Rl(e, l);
      case 6:
        if (a = vt, u = Wt, vt = null, $l(t, l, e), vt = a, Wt = u, vt !== null) if (Wt) try {
          (vt.nodeType === 9 ? vt.body : vt.nodeName === "HTML" ? vt.ownerDocument.body : vt).removeChild(e.stateNode);
        } catch (n) {
          it(e, l, n);
        }
        else try {
          vt.removeChild(e.stateNode);
        } catch (n) {
          it(e, l, n);
        }
        break;
      case 18:
        vt !== null && (Wt ? (t = vt, ud(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, e.stateNode), xa(t)) : ud(vt, e.stateNode));
        break;
      case 4:
        a = vt, u = Wt, vt = e.stateNode.containerInfo, Wt = true, $l(t, l, e), vt = a, Wt = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        me(2, e, l), pt || me(4, e, l), $l(t, l, e);
        break;
      case 1:
        pt || (Rl(e, l), a = e.stateNode, typeof a.componentWillUnmount == "function" && nr(e, l, a)), $l(t, l, e);
        break;
      case 21:
        $l(t, l, e);
        break;
      case 22:
        pt = (a = pt) || e.memoizedState !== null, $l(t, l, e), pt = a;
        break;
      default:
        $l(t, l, e);
    }
  }
  function yr(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        xa(t);
      } catch (e) {
        it(l, l.return, e);
      }
    }
  }
  function mr(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
      xa(t);
    } catch (e) {
      it(l, l.return, e);
    }
  }
  function _y(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var l = t.stateNode;
        return l === null && (l = t.stateNode = new sr()), l;
      case 22:
        return t = t.stateNode, l = t._retryCache, l === null && (l = t._retryCache = new sr()), l;
      default:
        throw Error(s(435, t.tag));
    }
  }
  function An(t, l) {
    var e = _y(t);
    l.forEach(function(a) {
      if (!e.has(a)) {
        e.add(a);
        var u = Oy.bind(null, t, a);
        a.then(u, u);
      }
    });
  }
  function $t(t, l) {
    var e = l.deletions;
    if (e !== null) for (var a = 0; a < e.length; a++) {
      var u = e[a], n = t, c = l, i = c;
      t: for (; i !== null; ) {
        switch (i.tag) {
          case 27:
            if (ze(i.type)) {
              vt = i.stateNode, Wt = false;
              break t;
            }
            break;
          case 5:
            vt = i.stateNode, Wt = false;
            break t;
          case 3:
          case 4:
            vt = i.stateNode.containerInfo, Wt = true;
            break t;
        }
        i = i.return;
      }
      if (vt === null) throw Error(s(160));
      dr(n, c, u), vt = null, Wt = false, n = u.alternate, n !== null && (n.return = null), u.return = null;
    }
    if (l.subtreeFlags & 13886) for (l = l.child; l !== null; ) vr(l, t), l = l.sibling;
  }
  var Dl = null;
  function vr(t, l) {
    var e = t.alternate, a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        $t(l, t), Ft(t), a & 4 && (me(3, t, t.return), su(3, t), me(5, t, t.return));
        break;
      case 1:
        $t(l, t), Ft(t), a & 512 && (pt || e === null || Rl(e, e.return)), a & 64 && Wl && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (e = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
        break;
      case 26:
        var u = Dl;
        if ($t(l, t), Ft(t), a & 512 && (pt || e === null || Rl(e, e.return)), a & 4) {
          var n = e !== null ? e.memoizedState : null;
          if (a = t.memoizedState, e === null) if (a === null) if (t.stateNode === null) {
            t: {
              a = t.type, e = t.memoizedProps, u = u.ownerDocument || u;
              l: switch (a) {
                case "title":
                  n = u.getElementsByTagName("title")[0], (!n || n[qa] || n[Rt] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = u.createElement(a), u.head.insertBefore(n, u.querySelector("head > title"))), qt(n, a, e), n[Rt] = t, Dt(n), a = n;
                  break t;
                case "link":
                  var c = vd("link", "href", u).get(a + (e.href || ""));
                  if (c) {
                    for (var i = 0; i < c.length; i++) if (n = c[i], n.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && n.getAttribute("rel") === (e.rel == null ? null : e.rel) && n.getAttribute("title") === (e.title == null ? null : e.title) && n.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                      c.splice(i, 1);
                      break l;
                    }
                  }
                  n = u.createElement(a), qt(n, a, e), u.head.appendChild(n);
                  break;
                case "meta":
                  if (c = vd("meta", "content", u).get(a + (e.content || ""))) {
                    for (i = 0; i < c.length; i++) if (n = c[i], n.getAttribute("content") === (e.content == null ? null : "" + e.content) && n.getAttribute("name") === (e.name == null ? null : e.name) && n.getAttribute("property") === (e.property == null ? null : e.property) && n.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && n.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                      c.splice(i, 1);
                      break l;
                    }
                  }
                  n = u.createElement(a), qt(n, a, e), u.head.appendChild(n);
                  break;
                default:
                  throw Error(s(468, a));
              }
              n[Rt] = t, Dt(n), a = n;
            }
            t.stateNode = a;
          } else gd(u, t.type, t.stateNode);
          else t.stateNode = md(u, a, t.memoizedProps);
          else n !== a ? (n === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : n.count--, a === null ? gd(u, t.type, t.stateNode) : md(u, a, t.memoizedProps)) : a === null && t.stateNode !== null && Ni(t, t.memoizedProps, e.memoizedProps);
        }
        break;
      case 27:
        $t(l, t), Ft(t), a & 512 && (pt || e === null || Rl(e, e.return)), e !== null && a & 4 && Ni(t, t.memoizedProps, e.memoizedProps);
        break;
      case 5:
        if ($t(l, t), Ft(t), a & 512 && (pt || e === null || Rl(e, e.return)), t.flags & 32) {
          u = t.stateNode;
          try {
            ta(u, "");
          } catch (H) {
            it(t, t.return, H);
          }
        }
        a & 4 && t.stateNode != null && (u = t.memoizedProps, Ni(t, u, e !== null ? e.memoizedProps : u)), a & 1024 && (Ri = true);
        break;
      case 6:
        if ($t(l, t), Ft(t), a & 4) {
          if (t.stateNode === null) throw Error(s(162));
          a = t.memoizedProps, e = t.stateNode;
          try {
            e.nodeValue = a;
          } catch (H) {
            it(t, t.return, H);
          }
        }
        break;
      case 3:
        if (Gn = null, u = Dl, Dl = Yn(l.containerInfo), $t(l, t), Dl = u, Ft(t), a & 4 && e !== null && e.memoizedState.isDehydrated) try {
          xa(l.containerInfo);
        } catch (H) {
          it(t, t.return, H);
        }
        Ri && (Ri = false, gr(t));
        break;
      case 4:
        a = Dl, Dl = Yn(t.stateNode.containerInfo), $t(l, t), Ft(t), Dl = a;
        break;
      case 12:
        $t(l, t), Ft(t);
        break;
      case 31:
        $t(l, t), Ft(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, An(t, a)));
        break;
      case 13:
        $t(l, t), Ft(t), t.child.flags & 8192 && t.memoizedState !== null != (e !== null && e.memoizedState !== null) && (On = al()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, An(t, a)));
        break;
      case 22:
        u = t.memoizedState !== null;
        var r = e !== null && e.memoizedState !== null, _ = Wl, S = pt;
        if (Wl = _ || u, pt = S || r, $t(l, t), pt = S, Wl = _, Ft(t), a & 8192) t: for (l = t.stateNode, l._visibility = u ? l._visibility & -2 : l._visibility | 1, u && (e === null || r || Wl || pt || Le(t)), e = null, l = t; ; ) {
          if (l.tag === 5 || l.tag === 26) {
            if (e === null) {
              r = e = l;
              try {
                if (n = r.stateNode, u) c = n.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                else {
                  i = r.stateNode;
                  var E = r.memoizedProps.style, h = E != null && E.hasOwnProperty("display") ? E.display : null;
                  i.style.display = h == null || typeof h == "boolean" ? "" : ("" + h).trim();
                }
              } catch (H) {
                it(r, r.return, H);
              }
            }
          } else if (l.tag === 6) {
            if (e === null) {
              r = l;
              try {
                r.stateNode.nodeValue = u ? "" : r.memoizedProps;
              } catch (H) {
                it(r, r.return, H);
              }
            }
          } else if (l.tag === 18) {
            if (e === null) {
              r = l;
              try {
                var b = r.stateNode;
                u ? nd(b, true) : nd(r.stateNode, false);
              } catch (H) {
                it(r, r.return, H);
              }
            }
          } else if ((l.tag !== 22 && l.tag !== 23 || l.memoizedState === null || l === t) && l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
          if (l === t) break t;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === t) break t;
            e === l && (e = null), l = l.return;
          }
          e === l && (e = null), l.sibling.return = l.return, l = l.sibling;
        }
        a & 4 && (a = t.updateQueue, a !== null && (e = a.retryQueue, e !== null && (a.retryQueue = null, An(t, e))));
        break;
      case 19:
        $t(l, t), Ft(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, An(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        $t(l, t), Ft(t);
    }
  }
  function Ft(t) {
    var l = t.flags;
    if (l & 2) {
      try {
        for (var e, a = t.return; a !== null; ) {
          if (ir(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        if (e == null) throw Error(s(160));
        switch (e.tag) {
          case 27:
            var u = e.stateNode, n = xi(t);
            En(t, n, u);
            break;
          case 5:
            var c = e.stateNode;
            e.flags & 32 && (ta(c, ""), e.flags &= -33);
            var i = xi(t);
            En(t, i, c);
            break;
          case 3:
          case 4:
            var r = e.stateNode.containerInfo, _ = xi(t);
            Hi(t, _, r);
            break;
          default:
            throw Error(s(161));
        }
      } catch (S) {
        it(t, t.return, S);
      }
      t.flags &= -3;
    }
    l & 4096 && (t.flags &= -4097);
  }
  function gr(t) {
    if (t.subtreeFlags & 1024) for (t = t.child; t !== null; ) {
      var l = t;
      gr(l), l.tag === 5 && l.flags & 1024 && l.stateNode.reset(), t = t.sibling;
    }
  }
  function Fl(t, l) {
    if (l.subtreeFlags & 8772) for (l = l.child; l !== null; ) or(t, l.alternate, l), l = l.sibling;
  }
  function Le(t) {
    for (t = t.child; t !== null; ) {
      var l = t;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          me(4, l, l.return), Le(l);
          break;
        case 1:
          Rl(l, l.return);
          var e = l.stateNode;
          typeof e.componentWillUnmount == "function" && nr(l, l.return, e), Le(l);
          break;
        case 27:
          bu(l.stateNode);
        case 26:
        case 5:
          Rl(l, l.return), Le(l);
          break;
        case 22:
          l.memoizedState === null && Le(l);
          break;
        case 30:
          Le(l);
          break;
        default:
          Le(l);
      }
      t = t.sibling;
    }
  }
  function kl(t, l, e) {
    for (e = e && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
      var a = l.alternate, u = t, n = l, c = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          kl(u, n, e), su(4, n);
          break;
        case 1:
          if (kl(u, n, e), a = n, u = a.stateNode, typeof u.componentDidMount == "function") try {
            u.componentDidMount();
          } catch (_) {
            it(a, a.return, _);
          }
          if (a = n, u = a.updateQueue, u !== null) {
            var i = a.stateNode;
            try {
              var r = u.shared.hiddenCallbacks;
              if (r !== null) for (u.shared.hiddenCallbacks = null, u = 0; u < r.length; u++) Ks(r[u], i);
            } catch (_) {
              it(a, a.return, _);
            }
          }
          e && c & 64 && ur(n), ou(n, n.return);
          break;
        case 27:
          fr(n);
        case 26:
        case 5:
          kl(u, n, e), e && a === null && c & 4 && cr(n), ou(n, n.return);
          break;
        case 12:
          kl(u, n, e);
          break;
        case 31:
          kl(u, n, e), e && c & 4 && yr(u, n);
          break;
        case 13:
          kl(u, n, e), e && c & 4 && mr(u, n);
          break;
        case 22:
          n.memoizedState === null && kl(u, n, e), ou(n, n.return);
          break;
        case 30:
          break;
        default:
          kl(u, n, e);
      }
      l = l.sibling;
    }
  }
  function ji(t, l) {
    var e = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), t = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), t !== e && (t != null && t.refCount++, e != null && Fa(e));
  }
  function Bi(t, l) {
    t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && Fa(t));
  }
  function Ul(t, l, e, a) {
    if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) _r(t, l, e, a), l = l.sibling;
  }
  function _r(t, l, e, a) {
    var u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Ul(t, l, e, a), u & 2048 && su(9, l);
        break;
      case 1:
        Ul(t, l, e, a);
        break;
      case 3:
        Ul(t, l, e, a), u & 2048 && (t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && Fa(t)));
        break;
      case 12:
        if (u & 2048) {
          Ul(t, l, e, a), t = l.stateNode;
          try {
            var n = l.memoizedProps, c = n.id, i = n.onPostCommit;
            typeof i == "function" && i(c, l.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
          } catch (r) {
            it(l, l.return, r);
          }
        } else Ul(t, l, e, a);
        break;
      case 31:
        Ul(t, l, e, a);
        break;
      case 13:
        Ul(t, l, e, a);
        break;
      case 23:
        break;
      case 22:
        n = l.stateNode, c = l.alternate, l.memoizedState !== null ? n._visibility & 2 ? Ul(t, l, e, a) : ru(t, l) : n._visibility & 2 ? Ul(t, l, e, a) : (n._visibility |= 2, Sa(t, l, e, a, (l.subtreeFlags & 10256) !== 0 || false)), u & 2048 && ji(c, l);
        break;
      case 24:
        Ul(t, l, e, a), u & 2048 && Bi(l.alternate, l);
        break;
      default:
        Ul(t, l, e, a);
    }
  }
  function Sa(t, l, e, a, u) {
    for (u = u && ((l.subtreeFlags & 10256) !== 0 || false), l = l.child; l !== null; ) {
      var n = t, c = l, i = e, r = a, _ = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Sa(n, c, i, r, u), su(8, c);
          break;
        case 23:
          break;
        case 22:
          var S = c.stateNode;
          c.memoizedState !== null ? S._visibility & 2 ? Sa(n, c, i, r, u) : ru(n, c) : (S._visibility |= 2, Sa(n, c, i, r, u)), u && _ & 2048 && ji(c.alternate, c);
          break;
        case 24:
          Sa(n, c, i, r, u), u && _ & 2048 && Bi(c.alternate, c);
          break;
        default:
          Sa(n, c, i, r, u);
      }
      l = l.sibling;
    }
  }
  function ru(t, l) {
    if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) {
      var e = t, a = l, u = a.flags;
      switch (a.tag) {
        case 22:
          ru(e, a), u & 2048 && ji(a.alternate, a);
          break;
        case 24:
          ru(e, a), u & 2048 && Bi(a.alternate, a);
          break;
        default:
          ru(e, a);
      }
      l = l.sibling;
    }
  }
  var du = 8192;
  function za(t, l, e) {
    if (t.subtreeFlags & du) for (t = t.child; t !== null; ) hr(t, l, e), t = t.sibling;
  }
  function hr(t, l, e) {
    switch (t.tag) {
      case 26:
        za(t, l, e), t.flags & du && t.memoizedState !== null && am(e, Dl, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        za(t, l, e);
        break;
      case 3:
      case 4:
        var a = Dl;
        Dl = Yn(t.stateNode.containerInfo), za(t, l, e), Dl = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = du, du = 16777216, za(t, l, e), du = a) : za(t, l, e));
        break;
      default:
        za(t, l, e);
    }
  }
  function br(t) {
    var l = t.alternate;
    if (l !== null && (t = l.child, t !== null)) {
      l.child = null;
      do
        l = t.sibling, t.sibling = null, t = l;
      while (t !== null);
    }
  }
  function yu(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null) for (var e = 0; e < l.length; e++) {
        var a = l[e];
        Ut = a, zr(a, t);
      }
      br(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) Sr(t), t = t.sibling;
  }
  function Sr(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        yu(t), t.flags & 2048 && me(9, t, t.return);
        break;
      case 3:
        yu(t);
        break;
      case 12:
        yu(t);
        break;
      case 22:
        var l = t.stateNode;
        t.memoizedState !== null && l._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (l._visibility &= -3, pn(t)) : yu(t);
        break;
      default:
        yu(t);
    }
  }
  function pn(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null) for (var e = 0; e < l.length; e++) {
        var a = l[e];
        Ut = a, zr(a, t);
      }
      br(t);
    }
    for (t = t.child; t !== null; ) {
      switch (l = t, l.tag) {
        case 0:
        case 11:
        case 15:
          me(8, l, l.return), pn(l);
          break;
        case 22:
          e = l.stateNode, e._visibility & 2 && (e._visibility &= -3, pn(l));
          break;
        default:
          pn(l);
      }
      t = t.sibling;
    }
  }
  function zr(t, l) {
    for (; Ut !== null; ) {
      var e = Ut;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          me(8, e, l);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Fa(e.memoizedState.cache);
      }
      if (a = e.child, a !== null) a.return = e, Ut = a;
      else t: for (e = t; Ut !== null; ) {
        a = Ut;
        var u = a.sibling, n = a.return;
        if (rr(a), a === e) {
          Ut = null;
          break t;
        }
        if (u !== null) {
          u.return = n, Ut = u;
          break t;
        }
        Ut = n;
      }
    }
  }
  var hy = { getCacheForType: function(t) {
    var l = Bt(Tt), e = l.data.get(t);
    return e === void 0 && (e = t(), l.data.set(t, e)), e;
  }, cacheSignal: function() {
    return Bt(Tt).controller.signal;
  } }, by = typeof WeakMap == "function" ? WeakMap : Map, ut = 0, dt = null, J = null, $ = 0, ct = 0, ol = null, ve = false, Ta = false, Ci = false, Il = 0, _t = 0, ge = 0, Ke = 0, qi = 0, rl = 0, Ea = 0, mu = null, kt = null, Yi = false, On = 0, Tr = 0, Mn = 1 / 0, Dn = null, _e = null, Ot = 0, he = null, Aa = null, Pl = 0, wi = 0, Gi = null, Er = null, vu = 0, Xi = null;
  function dl() {
    return (ut & 2) !== 0 && $ !== 0 ? $ & -$ : z.T !== null ? Ji() : Yf();
  }
  function Ar() {
    if (rl === 0) if (($ & 536870912) === 0 || I) {
      var t = Bu;
      Bu <<= 1, (Bu & 3932160) === 0 && (Bu = 262144), rl = t;
    } else rl = 536870912;
    return t = fl.current, t !== null && (t.flags |= 32), rl;
  }
  function It(t, l, e) {
    (t === dt && (ct === 2 || ct === 9) || t.cancelPendingCommit !== null) && (pa(t, 0), be(t, $, rl, false)), Ca(t, e), ((ut & 2) === 0 || t !== dt) && (t === dt && ((ut & 2) === 0 && (Ke |= e), _t === 4 && be(t, $, rl, false)), jl(t));
  }
  function pr(t, l, e) {
    if ((ut & 6) !== 0) throw Error(s(327));
    var a = !e && (l & 127) === 0 && (l & t.expiredLanes) === 0 || Ba(t, l), u = a ? Ty(t, l) : Zi(t, l, true), n = a;
    do {
      if (u === 0) {
        Ta && !a && be(t, l, 0, false);
        break;
      } else {
        if (e = t.current.alternate, n && !Sy(e)) {
          u = Zi(t, l, false), n = false;
          continue;
        }
        if (u === 2) {
          if (n = l, t.errorRecoveryDisabledLanes & n) var c = 0;
          else c = t.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
          if (c !== 0) {
            l = c;
            t: {
              var i = t;
              u = mu;
              var r = i.current.memoizedState.isDehydrated;
              if (r && (pa(i, c).flags |= 256), c = Zi(i, c, false), c !== 2) {
                if (Ci && !r) {
                  i.errorRecoveryDisabledLanes |= n, Ke |= n, u = 4;
                  break t;
                }
                n = kt, kt = u, n !== null && (kt === null ? kt = n : kt.push.apply(kt, n));
              }
              u = c;
            }
            if (n = false, u !== 2) continue;
          }
        }
        if (u === 1) {
          pa(t, 0), be(t, l, 0, true);
          break;
        }
        t: {
          switch (a = t, n = u, n) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((l & 4194048) !== l) break;
            case 6:
              be(a, l, rl, !ve);
              break t;
            case 2:
              kt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((l & 62914560) === l && (u = On + 300 - al(), 10 < u)) {
            if (be(a, l, rl, !ve), qu(a, 0, true) !== 0) break t;
            Pl = l, a.timeoutHandle = ed(Or.bind(null, a, e, kt, Dn, Yi, l, rl, Ke, Ea, ve, n, "Throttled", -0, 0), u);
            break t;
          }
          Or(a, e, kt, Dn, Yi, l, rl, Ke, Ea, ve, n, null, -0, 0);
        }
      }
      break;
    } while (true);
    jl(t);
  }
  function Or(t, l, e, a, u, n, c, i, r, _, S, E, h, b) {
    if (t.timeoutHandle = -1, E = l.subtreeFlags, E & 8192 || (E & 16785408) === 16785408) {
      E = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: Yl }, hr(l, n, E);
      var H = (n & 62914560) === n ? On - al() : (n & 4194048) === n ? Tr - al() : 0;
      if (H = um(E, H), H !== null) {
        Pl = n, t.cancelPendingCommit = H(jr.bind(null, t, l, n, e, a, u, c, i, r, S, E, null, h, b)), be(t, n, c, !_);
        return;
      }
    }
    jr(t, l, n, e, a, u, c, i, r);
  }
  function Sy(t) {
    for (var l = t; ; ) {
      var e = l.tag;
      if ((e === 0 || e === 11 || e === 15) && l.flags & 16384 && (e = l.updateQueue, e !== null && (e = e.stores, e !== null))) for (var a = 0; a < e.length; a++) {
        var u = e[a], n = u.getSnapshot;
        u = u.value;
        try {
          if (!cl(n(), u)) return false;
        } catch {
          return false;
        }
      }
      if (e = l.child, l.subtreeFlags & 16384 && e !== null) e.return = l, l = e;
      else {
        if (l === t) break;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) return true;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }
    return true;
  }
  function be(t, l, e, a) {
    l &= ~qi, l &= ~Ke, t.suspendedLanes |= l, t.pingedLanes &= ~l, a && (t.warmLanes |= l), a = t.expirationTimes;
    for (var u = l; 0 < u; ) {
      var n = 31 - nl(u), c = 1 << n;
      a[n] = -1, u &= ~c;
    }
    e !== 0 && Bf(t, e, l);
  }
  function Un() {
    return (ut & 6) === 0 ? (gu(0), false) : true;
  }
  function Qi() {
    if (J !== null) {
      if (ct === 0) var t = J.return;
      else t = J, Ql = qe = null, ui(t), va = null, Ia = 0, t = J;
      for (; t !== null; ) ar(t.alternate, t), t = t.return;
      J = null;
    }
  }
  function pa(t, l) {
    var e = t.timeoutHandle;
    e !== -1 && (t.timeoutHandle = -1, Gy(e)), e = t.cancelPendingCommit, e !== null && (t.cancelPendingCommit = null, e()), Pl = 0, Qi(), dt = t, J = e = Gl(t.current, null), $ = l, ct = 0, ol = null, ve = false, Ta = Ba(t, l), Ci = false, Ea = rl = qi = Ke = ge = _t = 0, kt = mu = null, Yi = false, (l & 8) !== 0 && (l |= l & 32);
    var a = t.entangledLanes;
    if (a !== 0) for (t = t.entanglements, a &= l; 0 < a; ) {
      var u = 31 - nl(a), n = 1 << u;
      l |= t[u], a &= ~n;
    }
    return Il = l, $u(), e;
  }
  function Mr(t, l) {
    Q = null, z.H = cu, l === ma || l === an ? (l = Qs(), ct = 3) : l === Kc ? (l = Qs(), ct = 4) : ct = l === Si ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, ol = l, J === null && (_t = 1, hn(t, gl(l, t.current)));
  }
  function Dr() {
    var t = fl.current;
    return t === null ? true : ($ & 4194048) === $ ? Sl === null : ($ & 62914560) === $ || ($ & 536870912) !== 0 ? t === Sl : false;
  }
  function Ur() {
    var t = z.H;
    return z.H = cu, t === null ? cu : t;
  }
  function Nr() {
    var t = z.A;
    return z.A = hy, t;
  }
  function Nn() {
    _t = 4, ve || ($ & 4194048) !== $ && fl.current !== null || (Ta = true), (ge & 134217727) === 0 && (Ke & 134217727) === 0 || dt === null || be(dt, $, rl, false);
  }
  function Zi(t, l, e) {
    var a = ut;
    ut |= 2;
    var u = Ur(), n = Nr();
    (dt !== t || $ !== l) && (Dn = null, pa(t, l)), l = false;
    var c = _t;
    t: do
      try {
        if (ct !== 0 && J !== null) {
          var i = J, r = ol;
          switch (ct) {
            case 8:
              Qi(), c = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              fl.current === null && (l = true);
              var _ = ct;
              if (ct = 0, ol = null, Oa(t, i, r, _), e && Ta) {
                c = 0;
                break t;
              }
              break;
            default:
              _ = ct, ct = 0, ol = null, Oa(t, i, r, _);
          }
        }
        zy(), c = _t;
        break;
      } catch (S) {
        Mr(t, S);
      }
    while (true);
    return l && t.shellSuspendCounter++, Ql = qe = null, ut = a, z.H = u, z.A = n, J === null && (dt = null, $ = 0, $u()), c;
  }
  function zy() {
    for (; J !== null; ) xr(J);
  }
  function Ty(t, l) {
    var e = ut;
    ut |= 2;
    var a = Ur(), u = Nr();
    dt !== t || $ !== l ? (Dn = null, Mn = al() + 500, pa(t, l)) : Ta = Ba(t, l);
    t: do
      try {
        if (ct !== 0 && J !== null) {
          l = J;
          var n = ol;
          l: switch (ct) {
            case 1:
              ct = 0, ol = null, Oa(t, l, n, 1);
              break;
            case 2:
            case 9:
              if (Gs(n)) {
                ct = 0, ol = null, Hr(l);
                break;
              }
              l = function() {
                ct !== 2 && ct !== 9 || dt !== t || (ct = 7), jl(t);
              }, n.then(l, l);
              break t;
            case 3:
              ct = 7;
              break t;
            case 4:
              ct = 5;
              break t;
            case 7:
              Gs(n) ? (ct = 0, ol = null, Hr(l)) : (ct = 0, ol = null, Oa(t, l, n, 7));
              break;
            case 5:
              var c = null;
              switch (J.tag) {
                case 26:
                  c = J.memoizedState;
                case 5:
                case 27:
                  var i = J;
                  if (c ? _d(c) : i.stateNode.complete) {
                    ct = 0, ol = null;
                    var r = i.sibling;
                    if (r !== null) J = r;
                    else {
                      var _ = i.return;
                      _ !== null ? (J = _, xn(_)) : J = null;
                    }
                    break l;
                  }
              }
              ct = 0, ol = null, Oa(t, l, n, 5);
              break;
            case 6:
              ct = 0, ol = null, Oa(t, l, n, 6);
              break;
            case 8:
              Qi(), _t = 6;
              break t;
            default:
              throw Error(s(462));
          }
        }
        Ey();
        break;
      } catch (S) {
        Mr(t, S);
      }
    while (true);
    return Ql = qe = null, z.H = a, z.A = u, ut = e, J !== null ? 0 : (dt = null, $ = 0, $u(), _t);
  }
  function Ey() {
    for (; J !== null && !Kd(); ) xr(J);
  }
  function xr(t) {
    var l = lr(t.alternate, t, Il);
    t.memoizedProps = t.pendingProps, l === null ? xn(t) : J = l;
  }
  function Hr(t) {
    var l = t, e = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = $o(e, l, l.pendingProps, l.type, void 0, $);
        break;
      case 11:
        l = $o(e, l, l.pendingProps, l.type.render, l.ref, $);
        break;
      case 5:
        ui(l);
      default:
        ar(e, l), l = J = Us(l, Il), l = lr(e, l, Il);
    }
    t.memoizedProps = t.pendingProps, l === null ? xn(t) : J = l;
  }
  function Oa(t, l, e, a) {
    Ql = qe = null, ui(l), va = null, Ia = 0;
    var u = l.return;
    try {
      if (ry(t, u, l, e, $)) {
        _t = 1, hn(t, gl(e, t.current)), J = null;
        return;
      }
    } catch (n) {
      if (u !== null) throw J = u, n;
      _t = 1, hn(t, gl(e, t.current)), J = null;
      return;
    }
    l.flags & 32768 ? (I || a === 1 ? t = true : Ta || ($ & 536870912) !== 0 ? t = false : (ve = t = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = fl.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Rr(l, t)) : xn(l);
  }
  function xn(t) {
    var l = t;
    do {
      if ((l.flags & 32768) !== 0) {
        Rr(l, ve);
        return;
      }
      t = l.return;
      var e = my(l.alternate, l, Il);
      if (e !== null) {
        J = e;
        return;
      }
      if (l = l.sibling, l !== null) {
        J = l;
        return;
      }
      J = l = t;
    } while (l !== null);
    _t === 0 && (_t = 5);
  }
  function Rr(t, l) {
    do {
      var e = vy(t.alternate, t);
      if (e !== null) {
        e.flags &= 32767, J = e;
        return;
      }
      if (e = t.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !l && (t = t.sibling, t !== null)) {
        J = t;
        return;
      }
      J = t = e;
    } while (t !== null);
    _t = 6, J = null;
  }
  function jr(t, l, e, a, u, n, c, i, r) {
    t.cancelPendingCommit = null;
    do
      Hn();
    while (Ot !== 0);
    if ((ut & 6) !== 0) throw Error(s(327));
    if (l !== null) {
      if (l === t.current) throw Error(s(177));
      if (n = l.lanes | l.childLanes, n |= xc, e0(t, e, n, c, i, r), t === dt && (J = dt = null, $ = 0), Aa = l, he = t, Pl = e, wi = n, Gi = u, Er = a, (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, My(Ru, function() {
        return wr(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), a = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || a) {
        a = z.T, z.T = null, u = D.p, D.p = 2, c = ut, ut |= 4;
        try {
          gy(t, l, e);
        } finally {
          ut = c, D.p = u, z.T = a;
        }
      }
      Ot = 1, Br(), Cr(), qr();
    }
  }
  function Br() {
    if (Ot === 1) {
      Ot = 0;
      var t = he, l = Aa, e = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || e) {
        e = z.T, z.T = null;
        var a = D.p;
        D.p = 2;
        var u = ut;
        ut |= 4;
        try {
          vr(l, t);
          var n = lf, c = Ss(t.containerInfo), i = n.focusedElem, r = n.selectionRange;
          if (c !== i && i && i.ownerDocument && bs(i.ownerDocument.documentElement, i)) {
            if (r !== null && Oc(i)) {
              var _ = r.start, S = r.end;
              if (S === void 0 && (S = _), "selectionStart" in i) i.selectionStart = _, i.selectionEnd = Math.min(S, i.value.length);
              else {
                var E = i.ownerDocument || document, h = E && E.defaultView || window;
                if (h.getSelection) {
                  var b = h.getSelection(), H = i.textContent.length, Y = Math.min(r.start, H), ot = r.end === void 0 ? Y : Math.min(r.end, H);
                  !b.extend && Y > ot && (c = ot, ot = Y, Y = c);
                  var v = hs(i, Y), d = hs(i, ot);
                  if (v && d && (b.rangeCount !== 1 || b.anchorNode !== v.node || b.anchorOffset !== v.offset || b.focusNode !== d.node || b.focusOffset !== d.offset)) {
                    var g = E.createRange();
                    g.setStart(v.node, v.offset), b.removeAllRanges(), Y > ot ? (b.addRange(g), b.extend(d.node, d.offset)) : (g.setEnd(d.node, d.offset), b.addRange(g));
                  }
                }
              }
            }
            for (E = [], b = i; b = b.parentNode; ) b.nodeType === 1 && E.push({ element: b, left: b.scrollLeft, top: b.scrollTop });
            for (typeof i.focus == "function" && i.focus(), i = 0; i < E.length; i++) {
              var T = E[i];
              T.element.scrollLeft = T.left, T.element.scrollTop = T.top;
            }
          }
          Vn = !!tf, lf = tf = null;
        } finally {
          ut = u, D.p = a, z.T = e;
        }
      }
      t.current = l, Ot = 2;
    }
  }
  function Cr() {
    if (Ot === 2) {
      Ot = 0;
      var t = he, l = Aa, e = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || e) {
        e = z.T, z.T = null;
        var a = D.p;
        D.p = 2;
        var u = ut;
        ut |= 4;
        try {
          or(t, l.alternate, l);
        } finally {
          ut = u, D.p = a, z.T = e;
        }
      }
      Ot = 3;
    }
  }
  function qr() {
    if (Ot === 4 || Ot === 3) {
      Ot = 0, Jd();
      var t = he, l = Aa, e = Pl, a = Er;
      (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? Ot = 5 : (Ot = 0, Aa = he = null, Yr(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (u === 0 && (_e = null), ic(e), l = l.stateNode, ul && typeof ul.onCommitFiberRoot == "function") try {
        ul.onCommitFiberRoot(ja, l, void 0, (l.current.flags & 128) === 128);
      } catch {
      }
      if (a !== null) {
        l = z.T, u = D.p, D.p = 2, z.T = null;
        try {
          for (var n = t.onRecoverableError, c = 0; c < a.length; c++) {
            var i = a[c];
            n(i.value, { componentStack: i.stack });
          }
        } finally {
          z.T = l, D.p = u;
        }
      }
      (Pl & 3) !== 0 && Hn(), jl(t), u = t.pendingLanes, (e & 261930) !== 0 && (u & 42) !== 0 ? t === Xi ? vu++ : (vu = 0, Xi = t) : vu = 0, gu(0);
    }
  }
  function Yr(t, l) {
    (t.pooledCacheLanes &= l) === 0 && (l = t.pooledCache, l != null && (t.pooledCache = null, Fa(l)));
  }
  function Hn() {
    return Br(), Cr(), qr(), wr();
  }
  function wr() {
    if (Ot !== 5) return false;
    var t = he, l = wi;
    wi = 0;
    var e = ic(Pl), a = z.T, u = D.p;
    try {
      D.p = 32 > e ? 32 : e, z.T = null, e = Gi, Gi = null;
      var n = he, c = Pl;
      if (Ot = 0, Aa = he = null, Pl = 0, (ut & 6) !== 0) throw Error(s(331));
      var i = ut;
      if (ut |= 4, Sr(n.current), _r(n, n.current, c, e), ut = i, gu(0, false), ul && typeof ul.onPostCommitFiberRoot == "function") try {
        ul.onPostCommitFiberRoot(ja, n);
      } catch {
      }
      return true;
    } finally {
      D.p = u, z.T = a, Yr(t, l);
    }
  }
  function Gr(t, l, e) {
    l = gl(e, l), l = bi(t.stateNode, l, 2), t = re(t, l, 2), t !== null && (Ca(t, 2), jl(t));
  }
  function it(t, l, e) {
    if (t.tag === 3) Gr(t, t, e);
    else for (; l !== null; ) {
      if (l.tag === 3) {
        Gr(l, t, e);
        break;
      } else if (l.tag === 1) {
        var a = l.stateNode;
        if (typeof l.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (_e === null || !_e.has(a))) {
          t = gl(e, t), e = Xo(2), a = re(l, e, 2), a !== null && (Qo(e, a, l, t), Ca(a, 2), jl(a));
          break;
        }
      }
      l = l.return;
    }
  }
  function Vi(t, l, e) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new by();
      var u = /* @__PURE__ */ new Set();
      a.set(l, u);
    } else u = a.get(l), u === void 0 && (u = /* @__PURE__ */ new Set(), a.set(l, u));
    u.has(e) || (Ci = true, u.add(e), t = Ay.bind(null, t, l, e), l.then(t, t));
  }
  function Ay(t, l, e) {
    var a = t.pingCache;
    a !== null && a.delete(l), t.pingedLanes |= t.suspendedLanes & e, t.warmLanes &= ~e, dt === t && ($ & e) === e && (_t === 4 || _t === 3 && ($ & 62914560) === $ && 300 > al() - On ? (ut & 2) === 0 && pa(t, 0) : qi |= e, Ea === $ && (Ea = 0)), jl(t);
  }
  function Xr(t, l) {
    l === 0 && (l = jf()), t = je(t, l), t !== null && (Ca(t, l), jl(t));
  }
  function py(t) {
    var l = t.memoizedState, e = 0;
    l !== null && (e = l.retryLane), Xr(t, e);
  }
  function Oy(t, l) {
    var e = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode, u = t.memoizedState;
        u !== null && (e = u.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    a !== null && a.delete(l), Xr(t, e);
  }
  function My(t, l) {
    return ac(t, l);
  }
  var Rn = null, Ma = null, Li = false, jn = false, Ki = false, Se = 0;
  function jl(t) {
    t !== Ma && t.next === null && (Ma === null ? Rn = Ma = t : Ma = Ma.next = t), jn = true, Li || (Li = true, Uy());
  }
  function gu(t, l) {
    if (!Ki && jn) {
      Ki = true;
      do
        for (var e = false, a = Rn; a !== null; ) {
          if (t !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var c = a.suspendedLanes, i = a.pingedLanes;
              n = (1 << 31 - nl(42 | t) + 1) - 1, n &= u & ~(c & ~i), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (e = true, Lr(a, n));
          } else n = $, n = qu(a, a === dt ? n : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (n & 3) === 0 || Ba(a, n) || (e = true, Lr(a, n));
          a = a.next;
        }
      while (e);
      Ki = false;
    }
  }
  function Dy() {
    Qr();
  }
  function Qr() {
    jn = Li = false;
    var t = 0;
    Se !== 0 && wy() && (t = Se);
    for (var l = al(), e = null, a = Rn; a !== null; ) {
      var u = a.next, n = Zr(a, l);
      n === 0 ? (a.next = null, e === null ? Rn = u : e.next = u, u === null && (Ma = e)) : (e = a, (t !== 0 || (n & 3) !== 0) && (jn = true)), a = u;
    }
    Ot !== 0 && Ot !== 5 || gu(t), Se !== 0 && (Se = 0);
  }
  function Zr(t, l) {
    for (var e = t.suspendedLanes, a = t.pingedLanes, u = t.expirationTimes, n = t.pendingLanes & -62914561; 0 < n; ) {
      var c = 31 - nl(n), i = 1 << c, r = u[c];
      r === -1 ? ((i & e) === 0 || (i & a) !== 0) && (u[c] = l0(i, l)) : r <= l && (t.expiredLanes |= i), n &= ~i;
    }
    if (l = dt, e = $, e = qu(t, t === l ? e : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a = t.callbackNode, e === 0 || t === l && (ct === 2 || ct === 9) || t.cancelPendingCommit !== null) return a !== null && a !== null && uc(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((e & 3) === 0 || Ba(t, e)) {
      if (l = e & -e, l === t.callbackPriority) return l;
      switch (a !== null && uc(a), ic(e)) {
        case 2:
        case 8:
          e = Hf;
          break;
        case 32:
          e = Ru;
          break;
        case 268435456:
          e = Rf;
          break;
        default:
          e = Ru;
      }
      return a = Vr.bind(null, t), e = ac(e, a), t.callbackPriority = l, t.callbackNode = e, l;
    }
    return a !== null && a !== null && uc(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Vr(t, l) {
    if (Ot !== 0 && Ot !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
    var e = t.callbackNode;
    if (Hn() && t.callbackNode !== e) return null;
    var a = $;
    return a = qu(t, t === dt ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a === 0 ? null : (pr(t, a, l), Zr(t, al()), t.callbackNode != null && t.callbackNode === e ? Vr.bind(null, t) : null);
  }
  function Lr(t, l) {
    if (Hn()) return null;
    pr(t, l, true);
  }
  function Uy() {
    Xy(function() {
      (ut & 6) !== 0 ? ac(xf, Dy) : Qr();
    });
  }
  function Ji() {
    if (Se === 0) {
      var t = da;
      t === 0 && (t = ju, ju <<= 1, (ju & 261888) === 0 && (ju = 256)), Se = t;
    }
    return Se;
  }
  function Kr(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Xu("" + t);
  }
  function Jr(t, l) {
    var e = l.ownerDocument.createElement("input");
    return e.name = l.name, e.value = l.value, t.id && e.setAttribute("form", t.id), l.parentNode.insertBefore(e, l), t = new FormData(t), e.parentNode.removeChild(e), t;
  }
  function Ny(t, l, e, a, u) {
    if (l === "submit" && e && e.stateNode === u) {
      var n = Kr((u[Kt] || null).action), c = a.submitter;
      c && (l = (l = c[Kt] || null) ? Kr(l.formAction) : c.getAttribute("formAction"), l !== null && (n = l, c = null));
      var i = new Lu("action", "action", null, a, u);
      t.push({ event: i, listeners: [{ instance: null, listener: function() {
        if (a.defaultPrevented) {
          if (Se !== 0) {
            var r = c ? Jr(u, c) : new FormData(u);
            yi(e, { pending: true, data: r, method: u.method, action: n }, null, r);
          }
        } else typeof n == "function" && (i.preventDefault(), r = c ? Jr(u, c) : new FormData(u), yi(e, { pending: true, data: r, method: u.method, action: n }, n, r));
      }, currentTarget: u }] });
    }
  }
  for (var Wi = 0; Wi < Nc.length; Wi++) {
    var $i = Nc[Wi], xy = $i.toLowerCase(), Hy = $i[0].toUpperCase() + $i.slice(1);
    Ml(xy, "on" + Hy);
  }
  Ml(Es, "onAnimationEnd"), Ml(As, "onAnimationIteration"), Ml(ps, "onAnimationStart"), Ml("dblclick", "onDoubleClick"), Ml("focusin", "onFocus"), Ml("focusout", "onBlur"), Ml(W0, "onTransitionRun"), Ml($0, "onTransitionStart"), Ml(F0, "onTransitionCancel"), Ml(Os, "onTransitionEnd"), Ie("onMouseEnter", ["mouseout", "mouseover"]), Ie("onMouseLeave", ["mouseout", "mouseover"]), Ie("onPointerEnter", ["pointerout", "pointerover"]), Ie("onPointerLeave", ["pointerout", "pointerover"]), Ne("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ne("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ne("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ne("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ne("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ne("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var _u = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ry = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_u));
  function Wr(t, l) {
    l = (l & 4) !== 0;
    for (var e = 0; e < t.length; e++) {
      var a = t[e], u = a.event;
      a = a.listeners;
      t: {
        var n = void 0;
        if (l) for (var c = a.length - 1; 0 <= c; c--) {
          var i = a[c], r = i.instance, _ = i.currentTarget;
          if (i = i.listener, r !== n && u.isPropagationStopped()) break t;
          n = i, u.currentTarget = _;
          try {
            n(u);
          } catch (S) {
            Wu(S);
          }
          u.currentTarget = null, n = r;
        }
        else for (c = 0; c < a.length; c++) {
          if (i = a[c], r = i.instance, _ = i.currentTarget, i = i.listener, r !== n && u.isPropagationStopped()) break t;
          n = i, u.currentTarget = _;
          try {
            n(u);
          } catch (S) {
            Wu(S);
          }
          u.currentTarget = null, n = r;
        }
      }
    }
  }
  function W(t, l) {
    var e = l[fc];
    e === void 0 && (e = l[fc] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    e.has(a) || ($r(l, t, 2, false), e.add(a));
  }
  function Fi(t, l, e) {
    var a = 0;
    l && (a |= 4), $r(e, t, a, l);
  }
  var Bn = "_reactListening" + Math.random().toString(36).slice(2);
  function ki(t) {
    if (!t[Bn]) {
      t[Bn] = true, Xf.forEach(function(e) {
        e !== "selectionchange" && (Ry.has(e) || Fi(e, false, t), Fi(e, true, t));
      });
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      l === null || l[Bn] || (l[Bn] = true, Fi("selectionchange", false, l));
    }
  }
  function $r(t, l, e, a) {
    switch (Ad(l)) {
      case 2:
        var u = im;
        break;
      case 8:
        u = fm;
        break;
      default:
        u = yf;
    }
    e = u.bind(null, l, e, t), u = void 0, !_c || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (u = true), a ? u !== void 0 ? t.addEventListener(l, e, { capture: true, passive: u }) : t.addEventListener(l, e, true) : u !== void 0 ? t.addEventListener(l, e, { passive: u }) : t.addEventListener(l, e, false);
  }
  function Ii(t, l, e, a, u) {
    var n = a;
    if ((l & 1) === 0 && (l & 2) === 0 && a !== null) t: for (; ; ) {
      if (a === null) return;
      var c = a.tag;
      if (c === 3 || c === 4) {
        var i = a.stateNode.containerInfo;
        if (i === u) break;
        if (c === 4) for (c = a.return; c !== null; ) {
          var r = c.tag;
          if ((r === 3 || r === 4) && c.stateNode.containerInfo === u) return;
          c = c.return;
        }
        for (; i !== null; ) {
          if (c = $e(i), c === null) return;
          if (r = c.tag, r === 5 || r === 6 || r === 26 || r === 27) {
            a = n = c;
            continue t;
          }
          i = i.parentNode;
        }
      }
      a = a.return;
    }
    Pf(function() {
      var _ = n, S = vc(e), E = [];
      t: {
        var h = Ms.get(t);
        if (h !== void 0) {
          var b = Lu, H = t;
          switch (t) {
            case "keypress":
              if (Zu(e) === 0) break t;
            case "keydown":
            case "keyup":
              b = O0;
              break;
            case "focusin":
              H = "focus", b = zc;
              break;
            case "focusout":
              H = "blur", b = zc;
              break;
            case "beforeblur":
            case "afterblur":
              b = zc;
              break;
            case "click":
              if (e.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              b = es;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              b = m0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              b = U0;
              break;
            case Es:
            case As:
            case ps:
              b = _0;
              break;
            case Os:
              b = x0;
              break;
            case "scroll":
            case "scrollend":
              b = d0;
              break;
            case "wheel":
              b = R0;
              break;
            case "copy":
            case "cut":
            case "paste":
              b = b0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              b = us;
              break;
            case "toggle":
            case "beforetoggle":
              b = B0;
          }
          var Y = (l & 4) !== 0, ot = !Y && (t === "scroll" || t === "scrollend"), v = Y ? h !== null ? h + "Capture" : null : h;
          Y = [];
          for (var d = _, g; d !== null; ) {
            var T = d;
            if (g = T.stateNode, T = T.tag, T !== 5 && T !== 26 && T !== 27 || g === null || v === null || (T = wa(d, v), T != null && Y.push(hu(d, T, g))), ot) break;
            d = d.return;
          }
          0 < Y.length && (h = new b(h, H, null, e, S), E.push({ event: h, listeners: Y }));
        }
      }
      if ((l & 7) === 0) {
        t: {
          if (h = t === "mouseover" || t === "pointerover", b = t === "mouseout" || t === "pointerout", h && e !== mc && (H = e.relatedTarget || e.fromElement) && ($e(H) || H[We])) break t;
          if ((b || h) && (h = S.window === S ? S : (h = S.ownerDocument) ? h.defaultView || h.parentWindow : window, b ? (H = e.relatedTarget || e.toElement, b = _, H = H ? $e(H) : null, H !== null && (ot = B(H), Y = H.tag, H !== ot || Y !== 5 && Y !== 27 && Y !== 6) && (H = null)) : (b = null, H = _), b !== H)) {
            if (Y = es, T = "onMouseLeave", v = "onMouseEnter", d = "mouse", (t === "pointerout" || t === "pointerover") && (Y = us, T = "onPointerLeave", v = "onPointerEnter", d = "pointer"), ot = b == null ? h : Ya(b), g = H == null ? h : Ya(H), h = new Y(T, d + "leave", b, e, S), h.target = ot, h.relatedTarget = g, T = null, $e(S) === _ && (Y = new Y(v, d + "enter", H, e, S), Y.target = g, Y.relatedTarget = ot, T = Y), ot = T, b && H) l: {
              for (Y = jy, v = b, d = H, g = 0, T = v; T; T = Y(T)) g++;
              T = 0;
              for (var q = d; q; q = Y(q)) T++;
              for (; 0 < g - T; ) v = Y(v), g--;
              for (; 0 < T - g; ) d = Y(d), T--;
              for (; g--; ) {
                if (v === d || d !== null && v === d.alternate) {
                  Y = v;
                  break l;
                }
                v = Y(v), d = Y(d);
              }
              Y = null;
            }
            else Y = null;
            b !== null && Fr(E, h, b, Y, false), H !== null && ot !== null && Fr(E, ot, H, Y, true);
          }
        }
        t: {
          if (h = _ ? Ya(_) : window, b = h.nodeName && h.nodeName.toLowerCase(), b === "select" || b === "input" && h.type === "file") var lt = ds;
          else if (os(h)) if (ys) lt = L0;
          else {
            lt = Z0;
            var j = Q0;
          }
          else b = h.nodeName, !b || b.toLowerCase() !== "input" || h.type !== "checkbox" && h.type !== "radio" ? _ && yc(_.elementType) && (lt = ds) : lt = V0;
          if (lt && (lt = lt(t, _))) {
            rs(E, lt, e, S);
            break t;
          }
          j && j(t, h, _), t === "focusout" && _ && h.type === "number" && _.memoizedProps.value != null && dc(h, "number", h.value);
        }
        switch (j = _ ? Ya(_) : window, t) {
          case "focusin":
            (os(j) || j.contentEditable === "true") && (ua = j, Mc = _, Ja = null);
            break;
          case "focusout":
            Ja = Mc = ua = null;
            break;
          case "mousedown":
            Dc = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Dc = false, zs(E, e, S);
            break;
          case "selectionchange":
            if (J0) break;
          case "keydown":
          case "keyup":
            zs(E, e, S);
        }
        var Z;
        if (Ec) t: {
          switch (t) {
            case "compositionstart":
              var F = "onCompositionStart";
              break t;
            case "compositionend":
              F = "onCompositionEnd";
              break t;
            case "compositionupdate":
              F = "onCompositionUpdate";
              break t;
          }
          F = void 0;
        }
        else aa ? fs(t, e) && (F = "onCompositionEnd") : t === "keydown" && e.keyCode === 229 && (F = "onCompositionStart");
        F && (ns && e.locale !== "ko" && (aa || F !== "onCompositionStart" ? F === "onCompositionEnd" && aa && (Z = ts()) : (ue = S, hc = "value" in ue ? ue.value : ue.textContent, aa = true)), j = Cn(_, F), 0 < j.length && (F = new as(F, t, null, e, S), E.push({ event: F, listeners: j }), Z ? F.data = Z : (Z = ss(e), Z !== null && (F.data = Z)))), (Z = q0 ? Y0(t, e) : w0(t, e)) && (F = Cn(_, "onBeforeInput"), 0 < F.length && (j = new as("onBeforeInput", "beforeinput", null, e, S), E.push({ event: j, listeners: F }), j.data = Z)), Ny(E, t, _, e, S);
      }
      Wr(E, l);
    });
  }
  function hu(t, l, e) {
    return { instance: t, listener: l, currentTarget: e };
  }
  function Cn(t, l) {
    for (var e = l + "Capture", a = []; t !== null; ) {
      var u = t, n = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || n === null || (u = wa(t, e), u != null && a.unshift(hu(t, u, n)), u = wa(t, l), u != null && a.push(hu(t, u, n))), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function jy(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Fr(t, l, e, a, u) {
    for (var n = l._reactName, c = []; e !== null && e !== a; ) {
      var i = e, r = i.alternate, _ = i.stateNode;
      if (i = i.tag, r !== null && r === a) break;
      i !== 5 && i !== 26 && i !== 27 || _ === null || (r = _, u ? (_ = wa(e, n), _ != null && c.unshift(hu(e, _, r))) : u || (_ = wa(e, n), _ != null && c.push(hu(e, _, r)))), e = e.return;
    }
    c.length !== 0 && t.push({ event: l, listeners: c });
  }
  var By = /\r\n?/g, Cy = /\u0000|\uFFFD/g;
  function kr(t) {
    return (typeof t == "string" ? t : "" + t).replace(By, `
`).replace(Cy, "");
  }
  function Ir(t, l) {
    return l = kr(l), kr(t) === l;
  }
  function st(t, l, e, a, u, n) {
    switch (e) {
      case "children":
        typeof a == "string" ? l === "body" || l === "textarea" && a === "" || ta(t, a) : (typeof a == "number" || typeof a == "bigint") && l !== "body" && ta(t, "" + a);
        break;
      case "className":
        wu(t, "class", a);
        break;
      case "tabIndex":
        wu(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        wu(t, e, a);
        break;
      case "style":
        kf(t, a, n);
        break;
      case "data":
        if (l !== "object") {
          wu(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (l !== "a" || e !== "href")) {
          t.removeAttribute(e);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(e);
          break;
        }
        a = Xu("" + a), t.setAttribute(e, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(e, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof n == "function" && (e === "formAction" ? (l !== "input" && st(t, l, "name", u.name, u, null), st(t, l, "formEncType", u.formEncType, u, null), st(t, l, "formMethod", u.formMethod, u, null), st(t, l, "formTarget", u.formTarget, u, null)) : (st(t, l, "encType", u.encType, u, null), st(t, l, "method", u.method, u, null), st(t, l, "target", u.target, u, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(e);
          break;
        }
        a = Xu("" + a), t.setAttribute(e, a);
        break;
      case "onClick":
        a != null && (t.onclick = Yl);
        break;
      case "onScroll":
        a != null && W("scroll", t);
        break;
      case "onScrollEnd":
        a != null && W("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
          if (e = a.__html, e != null) {
            if (u.children != null) throw Error(s(60));
            t.innerHTML = e;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        e = Xu("" + a), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, "" + a) : t.removeAttribute(e);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, "") : t.removeAttribute(e);
        break;
      case "capture":
      case "download":
        a === true ? t.setAttribute(e, "") : a !== false && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, a) : t.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(e, a) : t.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(e) : t.setAttribute(e, a);
        break;
      case "popover":
        W("beforetoggle", t), W("toggle", t), Yu(t, "popover", a);
        break;
      case "xlinkActuate":
        ql(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        ql(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        ql(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        ql(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        ql(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        ql(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        ql(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        ql(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        ql(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Yu(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = o0.get(e) || e, Yu(t, e, a));
    }
  }
  function Pi(t, l, e, a, u, n) {
    switch (e) {
      case "style":
        kf(t, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
          if (e = a.__html, e != null) {
            if (u.children != null) throw Error(s(60));
            t.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof a == "string" ? ta(t, a) : (typeof a == "number" || typeof a == "bigint") && ta(t, "" + a);
        break;
      case "onScroll":
        a != null && W("scroll", t);
        break;
      case "onScrollEnd":
        a != null && W("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = Yl);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Qf.hasOwnProperty(e)) t: {
          if (e[0] === "o" && e[1] === "n" && (u = e.endsWith("Capture"), l = e.slice(2, u ? e.length - 7 : void 0), n = t[Kt] || null, n = n != null ? n[e] : null, typeof n == "function" && t.removeEventListener(l, n, u), typeof a == "function")) {
            typeof n != "function" && n !== null && (e in t ? t[e] = null : t.hasAttribute(e) && t.removeAttribute(e)), t.addEventListener(l, a, u);
            break t;
          }
          e in t ? t[e] = a : a === true ? t.setAttribute(e, "") : Yu(t, e, a);
        }
    }
  }
  function qt(t, l, e) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        W("error", t), W("load", t);
        var a = false, u = false, n;
        for (n in e) if (e.hasOwnProperty(n)) {
          var c = e[n];
          if (c != null) switch (n) {
            case "src":
              a = true;
              break;
            case "srcSet":
              u = true;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(s(137, l));
            default:
              st(t, l, n, c, e, null);
          }
        }
        u && st(t, l, "srcSet", e.srcSet, e, null), a && st(t, l, "src", e.src, e, null);
        return;
      case "input":
        W("invalid", t);
        var i = n = c = u = null, r = null, _ = null;
        for (a in e) if (e.hasOwnProperty(a)) {
          var S = e[a];
          if (S != null) switch (a) {
            case "name":
              u = S;
              break;
            case "type":
              c = S;
              break;
            case "checked":
              r = S;
              break;
            case "defaultChecked":
              _ = S;
              break;
            case "value":
              n = S;
              break;
            case "defaultValue":
              i = S;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (S != null) throw Error(s(137, l));
              break;
            default:
              st(t, l, a, S, e, null);
          }
        }
        Jf(t, n, i, r, _, c, u, false);
        return;
      case "select":
        W("invalid", t), a = c = n = null;
        for (u in e) if (e.hasOwnProperty(u) && (i = e[u], i != null)) switch (u) {
          case "value":
            n = i;
            break;
          case "defaultValue":
            c = i;
            break;
          case "multiple":
            a = i;
          default:
            st(t, l, u, i, e, null);
        }
        l = n, e = c, t.multiple = !!a, l != null ? Pe(t, !!a, l, false) : e != null && Pe(t, !!a, e, true);
        return;
      case "textarea":
        W("invalid", t), n = u = a = null;
        for (c in e) if (e.hasOwnProperty(c) && (i = e[c], i != null)) switch (c) {
          case "value":
            a = i;
            break;
          case "defaultValue":
            u = i;
            break;
          case "children":
            n = i;
            break;
          case "dangerouslySetInnerHTML":
            if (i != null) throw Error(s(91));
            break;
          default:
            st(t, l, c, i, e, null);
        }
        $f(t, a, u, n);
        return;
      case "option":
        for (r in e) if (e.hasOwnProperty(r) && (a = e[r], a != null)) switch (r) {
          case "selected":
            t.selected = a && typeof a != "function" && typeof a != "symbol";
            break;
          default:
            st(t, l, r, a, e, null);
        }
        return;
      case "dialog":
        W("beforetoggle", t), W("toggle", t), W("cancel", t), W("close", t);
        break;
      case "iframe":
      case "object":
        W("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < _u.length; a++) W(_u[a], t);
        break;
      case "image":
        W("error", t), W("load", t);
        break;
      case "details":
        W("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        W("error", t), W("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (_ in e) if (e.hasOwnProperty(_) && (a = e[_], a != null)) switch (_) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(s(137, l));
          default:
            st(t, l, _, a, e, null);
        }
        return;
      default:
        if (yc(l)) {
          for (S in e) e.hasOwnProperty(S) && (a = e[S], a !== void 0 && Pi(t, l, S, a, e, void 0));
          return;
        }
    }
    for (i in e) e.hasOwnProperty(i) && (a = e[i], a != null && st(t, l, i, a, e, null));
  }
  function qy(t, l, e, a) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null, n = null, c = null, i = null, r = null, _ = null, S = null;
        for (b in e) {
          var E = e[b];
          if (e.hasOwnProperty(b) && E != null) switch (b) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              r = E;
            default:
              a.hasOwnProperty(b) || st(t, l, b, null, a, E);
          }
        }
        for (var h in a) {
          var b = a[h];
          if (E = e[h], a.hasOwnProperty(h) && (b != null || E != null)) switch (h) {
            case "type":
              n = b;
              break;
            case "name":
              u = b;
              break;
            case "checked":
              _ = b;
              break;
            case "defaultChecked":
              S = b;
              break;
            case "value":
              c = b;
              break;
            case "defaultValue":
              i = b;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (b != null) throw Error(s(137, l));
              break;
            default:
              b !== E && st(t, l, h, b, a, E);
          }
        }
        rc(t, c, i, r, _, S, n, u);
        return;
      case "select":
        b = c = i = h = null;
        for (n in e) if (r = e[n], e.hasOwnProperty(n) && r != null) switch (n) {
          case "value":
            break;
          case "multiple":
            b = r;
          default:
            a.hasOwnProperty(n) || st(t, l, n, null, a, r);
        }
        for (u in a) if (n = a[u], r = e[u], a.hasOwnProperty(u) && (n != null || r != null)) switch (u) {
          case "value":
            h = n;
            break;
          case "defaultValue":
            i = n;
            break;
          case "multiple":
            c = n;
          default:
            n !== r && st(t, l, u, n, a, r);
        }
        l = i, e = c, a = b, h != null ? Pe(t, !!e, h, false) : !!a != !!e && (l != null ? Pe(t, !!e, l, true) : Pe(t, !!e, e ? [] : "", false));
        return;
      case "textarea":
        b = h = null;
        for (i in e) if (u = e[i], e.hasOwnProperty(i) && u != null && !a.hasOwnProperty(i)) switch (i) {
          case "value":
            break;
          case "children":
            break;
          default:
            st(t, l, i, null, a, u);
        }
        for (c in a) if (u = a[c], n = e[c], a.hasOwnProperty(c) && (u != null || n != null)) switch (c) {
          case "value":
            h = u;
            break;
          case "defaultValue":
            b = u;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (u != null) throw Error(s(91));
            break;
          default:
            u !== n && st(t, l, c, u, a, n);
        }
        Wf(t, h, b);
        return;
      case "option":
        for (var H in e) if (h = e[H], e.hasOwnProperty(H) && h != null && !a.hasOwnProperty(H)) switch (H) {
          case "selected":
            t.selected = false;
            break;
          default:
            st(t, l, H, null, a, h);
        }
        for (r in a) if (h = a[r], b = e[r], a.hasOwnProperty(r) && h !== b && (h != null || b != null)) switch (r) {
          case "selected":
            t.selected = h && typeof h != "function" && typeof h != "symbol";
            break;
          default:
            st(t, l, r, h, a, b);
        }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Y in e) h = e[Y], e.hasOwnProperty(Y) && h != null && !a.hasOwnProperty(Y) && st(t, l, Y, null, a, h);
        for (_ in a) if (h = a[_], b = e[_], a.hasOwnProperty(_) && h !== b && (h != null || b != null)) switch (_) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (h != null) throw Error(s(137, l));
            break;
          default:
            st(t, l, _, h, a, b);
        }
        return;
      default:
        if (yc(l)) {
          for (var ot in e) h = e[ot], e.hasOwnProperty(ot) && h !== void 0 && !a.hasOwnProperty(ot) && Pi(t, l, ot, void 0, a, h);
          for (S in a) h = a[S], b = e[S], !a.hasOwnProperty(S) || h === b || h === void 0 && b === void 0 || Pi(t, l, S, h, a, b);
          return;
        }
    }
    for (var v in e) h = e[v], e.hasOwnProperty(v) && h != null && !a.hasOwnProperty(v) && st(t, l, v, null, a, h);
    for (E in a) h = a[E], b = e[E], !a.hasOwnProperty(E) || h === b || h == null && b == null || st(t, l, E, h, a, b);
  }
  function Pr(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return true;
      default:
        return false;
    }
  }
  function Yy() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, l = 0, e = performance.getEntriesByType("resource"), a = 0; a < e.length; a++) {
        var u = e[a], n = u.transferSize, c = u.initiatorType, i = u.duration;
        if (n && i && Pr(c)) {
          for (c = 0, i = u.responseEnd, a += 1; a < e.length; a++) {
            var r = e[a], _ = r.startTime;
            if (_ > i) break;
            var S = r.transferSize, E = r.initiatorType;
            S && Pr(E) && (r = r.responseEnd, c += S * (r < i ? 1 : (i - _) / (r - _)));
          }
          if (--a, l += 8 * (n + c) / (u.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return l / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var tf = null, lf = null;
  function qn(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function td(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function ld(t, l) {
    if (t === 0) switch (l) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return t === 1 && l === "foreignObject" ? 0 : t;
  }
  function ef(t, l) {
    return t === "textarea" || t === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.children == "bigint" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null;
  }
  var af = null;
  function wy() {
    var t = window.event;
    return t && t.type === "popstate" ? t === af ? false : (af = t, true) : (af = null, false);
  }
  var ed = typeof setTimeout == "function" ? setTimeout : void 0, Gy = typeof clearTimeout == "function" ? clearTimeout : void 0, ad = typeof Promise == "function" ? Promise : void 0, Xy = typeof queueMicrotask == "function" ? queueMicrotask : typeof ad < "u" ? function(t) {
    return ad.resolve(null).then(t).catch(Qy);
  } : ed;
  function Qy(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function ze(t) {
    return t === "head";
  }
  function ud(t, l) {
    var e = l, a = 0;
    do {
      var u = e.nextSibling;
      if (t.removeChild(e), u && u.nodeType === 8) if (e = u.data, e === "/$" || e === "/&") {
        if (a === 0) {
          t.removeChild(u), xa(l);
          return;
        }
        a--;
      } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&") a++;
      else if (e === "html") bu(t.ownerDocument.documentElement);
      else if (e === "head") {
        e = t.ownerDocument.head, bu(e);
        for (var n = e.firstChild; n; ) {
          var c = n.nextSibling, i = n.nodeName;
          n[qa] || i === "SCRIPT" || i === "STYLE" || i === "LINK" && n.rel.toLowerCase() === "stylesheet" || e.removeChild(n), n = c;
        }
      } else e === "body" && bu(t.ownerDocument.body);
      e = u;
    } while (e);
    xa(l);
  }
  function nd(t, l) {
    var e = t;
    t = 0;
    do {
      var a = e.nextSibling;
      if (e.nodeType === 1 ? l ? (e._stashedDisplay = e.style.display, e.style.display = "none") : (e.style.display = e._stashedDisplay || "", e.getAttribute("style") === "" && e.removeAttribute("style")) : e.nodeType === 3 && (l ? (e._stashedText = e.nodeValue, e.nodeValue = "") : e.nodeValue = e._stashedText || ""), a && a.nodeType === 8) if (e = a.data, e === "/$") {
        if (t === 0) break;
        t--;
      } else e !== "$" && e !== "$?" && e !== "$~" && e !== "$!" || t++;
      e = a;
    } while (e);
  }
  function uf(t) {
    var l = t.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var e = l;
      switch (l = l.nextSibling, e.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          uf(e), sc(e);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(e);
    }
  }
  function Zy(t, l, e, a) {
    for (; t.nodeType === 1; ) {
      var u = e;
      if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[qa]) switch (l) {
          case "meta":
            if (!t.hasAttribute("itemprop")) break;
            return t;
          case "link":
            if (n = t.getAttribute("rel"), n === "stylesheet" && t.hasAttribute("data-precedence")) break;
            if (n !== u.rel || t.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || t.getAttribute("title") !== (u.title == null ? null : u.title)) break;
            return t;
          case "style":
            if (t.hasAttribute("data-precedence")) break;
            return t;
          case "script":
            if (n = t.getAttribute("src"), (n !== (u.src == null ? null : u.src) || t.getAttribute("type") !== (u.type == null ? null : u.type) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && n && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
            return t;
          default:
            return t;
        }
      } else if (l === "input" && t.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === n) return t;
      } else return t;
      if (t = zl(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Vy(t, l, e) {
    if (l === "") return null;
    for (; t.nodeType !== 3; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = zl(t.nextSibling), t === null)) return null;
    return t;
  }
  function cd(t, l) {
    for (; t.nodeType !== 8; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = zl(t.nextSibling), t === null)) return null;
    return t;
  }
  function nf(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function cf(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function Ly(t, l) {
    var e = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = l;
    else if (t.data !== "$?" || e.readyState !== "loading") l();
    else {
      var a = function() {
        l(), e.removeEventListener("DOMContentLoaded", a);
      };
      e.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
    }
  }
  function zl(t) {
    for (; t != null; t = t.nextSibling) {
      var l = t.nodeType;
      if (l === 1 || l === 3) break;
      if (l === 8) {
        if (l = t.data, l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&" || l === "F!" || l === "F") break;
        if (l === "/$" || l === "/&") return null;
      }
    }
    return t;
  }
  var ff = null;
  function id(t) {
    t = t.nextSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var e = t.data;
        if (e === "/$" || e === "/&") {
          if (l === 0) return zl(t.nextSibling);
          l--;
        } else e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || l++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function fd(t) {
    t = t.previousSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var e = t.data;
        if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
          if (l === 0) return t;
          l--;
        } else e !== "/$" && e !== "/&" || l++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function sd(t, l, e) {
    switch (l = qn(e), t) {
      case "html":
        if (t = l.documentElement, !t) throw Error(s(452));
        return t;
      case "head":
        if (t = l.head, !t) throw Error(s(453));
        return t;
      case "body":
        if (t = l.body, !t) throw Error(s(454));
        return t;
      default:
        throw Error(s(451));
    }
  }
  function bu(t) {
    for (var l = t.attributes; l.length; ) t.removeAttributeNode(l[0]);
    sc(t);
  }
  var Tl = /* @__PURE__ */ new Map(), od = /* @__PURE__ */ new Set();
  function Yn(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var te = D.d;
  D.d = { f: Ky, r: Jy, D: Wy, C: $y, L: Fy, m: ky, X: Py, S: Iy, M: tm };
  function Ky() {
    var t = te.f(), l = Un();
    return t || l;
  }
  function Jy(t) {
    var l = Fe(t);
    l !== null && l.tag === 5 && l.type === "form" ? Mo(l) : te.r(t);
  }
  var Da = typeof document > "u" ? null : document;
  function rd(t, l, e) {
    var a = Da;
    if (a && typeof l == "string" && l) {
      var u = ml(l);
      u = 'link[rel="' + t + '"][href="' + u + '"]', typeof e == "string" && (u += '[crossorigin="' + e + '"]'), od.has(u) || (od.add(u), t = { rel: t, crossOrigin: e, href: l }, a.querySelector(u) === null && (l = a.createElement("link"), qt(l, "link", t), Dt(l), a.head.appendChild(l)));
    }
  }
  function Wy(t) {
    te.D(t), rd("dns-prefetch", t, null);
  }
  function $y(t, l) {
    te.C(t, l), rd("preconnect", t, l);
  }
  function Fy(t, l, e) {
    te.L(t, l, e);
    var a = Da;
    if (a && t && l) {
      var u = 'link[rel="preload"][as="' + ml(l) + '"]';
      l === "image" && e && e.imageSrcSet ? (u += '[imagesrcset="' + ml(e.imageSrcSet) + '"]', typeof e.imageSizes == "string" && (u += '[imagesizes="' + ml(e.imageSizes) + '"]')) : u += '[href="' + ml(t) + '"]';
      var n = u;
      switch (l) {
        case "style":
          n = Ua(t);
          break;
        case "script":
          n = Na(t);
      }
      Tl.has(n) || (t = w({ rel: "preload", href: l === "image" && e && e.imageSrcSet ? void 0 : t, as: l }, e), Tl.set(n, t), a.querySelector(u) !== null || l === "style" && a.querySelector(Su(n)) || l === "script" && a.querySelector(zu(n)) || (l = a.createElement("link"), qt(l, "link", t), Dt(l), a.head.appendChild(l)));
    }
  }
  function ky(t, l) {
    te.m(t, l);
    var e = Da;
    if (e && t) {
      var a = l && typeof l.as == "string" ? l.as : "script", u = 'link[rel="modulepreload"][as="' + ml(a) + '"][href="' + ml(t) + '"]', n = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Na(t);
      }
      if (!Tl.has(n) && (t = w({ rel: "modulepreload", href: t }, l), Tl.set(n, t), e.querySelector(u) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(zu(n))) return;
        }
        a = e.createElement("link"), qt(a, "link", t), Dt(a), e.head.appendChild(a);
      }
    }
  }
  function Iy(t, l, e) {
    te.S(t, l, e);
    var a = Da;
    if (a && t) {
      var u = ke(a).hoistableStyles, n = Ua(t);
      l = l || "default";
      var c = u.get(n);
      if (!c) {
        var i = { loading: 0, preload: null };
        if (c = a.querySelector(Su(n))) i.loading = 5;
        else {
          t = w({ rel: "stylesheet", href: t, "data-precedence": l }, e), (e = Tl.get(n)) && sf(t, e);
          var r = c = a.createElement("link");
          Dt(r), qt(r, "link", t), r._p = new Promise(function(_, S) {
            r.onload = _, r.onerror = S;
          }), r.addEventListener("load", function() {
            i.loading |= 1;
          }), r.addEventListener("error", function() {
            i.loading |= 2;
          }), i.loading |= 4, wn(c, l, a);
        }
        c = { type: "stylesheet", instance: c, count: 1, state: i }, u.set(n, c);
      }
    }
  }
  function Py(t, l) {
    te.X(t, l);
    var e = Da;
    if (e && t) {
      var a = ke(e).hoistableScripts, u = Na(t), n = a.get(u);
      n || (n = e.querySelector(zu(u)), n || (t = w({ src: t, async: true }, l), (l = Tl.get(u)) && of(t, l), n = e.createElement("script"), Dt(n), qt(n, "link", t), e.head.appendChild(n)), n = { type: "script", instance: n, count: 1, state: null }, a.set(u, n));
    }
  }
  function tm(t, l) {
    te.M(t, l);
    var e = Da;
    if (e && t) {
      var a = ke(e).hoistableScripts, u = Na(t), n = a.get(u);
      n || (n = e.querySelector(zu(u)), n || (t = w({ src: t, async: true, type: "module" }, l), (l = Tl.get(u)) && of(t, l), n = e.createElement("script"), Dt(n), qt(n, "link", t), e.head.appendChild(n)), n = { type: "script", instance: n, count: 1, state: null }, a.set(u, n));
    }
  }
  function dd(t, l, e, a) {
    var u = (u = K.current) ? Yn(u) : null;
    if (!u) throw Error(s(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string" ? (l = Ua(e.href), e = ke(u).hoistableStyles, a = e.get(l), a || (a = { type: "style", instance: null, count: 0, state: null }, e.set(l, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
          t = Ua(e.href);
          var n = ke(u).hoistableStyles, c = n.get(t);
          if (c || (u = u.ownerDocument || u, c = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, n.set(t, c), (n = u.querySelector(Su(t))) && !n._p && (c.instance = n, c.state.loading = 5), Tl.has(t) || (e = { rel: "preload", as: "style", href: e.href, crossOrigin: e.crossOrigin, integrity: e.integrity, media: e.media, hrefLang: e.hrefLang, referrerPolicy: e.referrerPolicy }, Tl.set(t, e), n || lm(u, t, e, c.state))), l && a === null) throw Error(s(528, ""));
          return c;
        }
        if (l && a !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return l = e.async, e = e.src, typeof e == "string" && l && typeof l != "function" && typeof l != "symbol" ? (l = Na(e), e = ke(u).hoistableScripts, a = e.get(l), a || (a = { type: "script", instance: null, count: 0, state: null }, e.set(l, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(s(444, t));
    }
  }
  function Ua(t) {
    return 'href="' + ml(t) + '"';
  }
  function Su(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function yd(t) {
    return w({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function lm(t, l, e, a) {
    t.querySelector('link[rel="preload"][as="style"][' + l + "]") ? a.loading = 1 : (l = t.createElement("link"), a.preload = l, l.addEventListener("load", function() {
      return a.loading |= 1;
    }), l.addEventListener("error", function() {
      return a.loading |= 2;
    }), qt(l, "link", e), Dt(l), t.head.appendChild(l));
  }
  function Na(t) {
    return '[src="' + ml(t) + '"]';
  }
  function zu(t) {
    return "script[async]" + t;
  }
  function md(t, l, e) {
    if (l.count++, l.instance === null) switch (l.type) {
      case "style":
        var a = t.querySelector('style[data-href~="' + ml(e.href) + '"]');
        if (a) return l.instance = a, Dt(a), a;
        var u = w({}, e, { "data-href": e.href, "data-precedence": e.precedence, href: null, precedence: null });
        return a = (t.ownerDocument || t).createElement("style"), Dt(a), qt(a, "style", u), wn(a, e.precedence, t), l.instance = a;
      case "stylesheet":
        u = Ua(e.href);
        var n = t.querySelector(Su(u));
        if (n) return l.state.loading |= 4, l.instance = n, Dt(n), n;
        a = yd(e), (u = Tl.get(u)) && sf(a, u), n = (t.ownerDocument || t).createElement("link"), Dt(n);
        var c = n;
        return c._p = new Promise(function(i, r) {
          c.onload = i, c.onerror = r;
        }), qt(n, "link", a), l.state.loading |= 4, wn(n, e.precedence, t), l.instance = n;
      case "script":
        return n = Na(e.src), (u = t.querySelector(zu(n))) ? (l.instance = u, Dt(u), u) : (a = e, (u = Tl.get(n)) && (a = w({}, e), of(a, u)), t = t.ownerDocument || t, u = t.createElement("script"), Dt(u), qt(u, "link", a), t.head.appendChild(u), l.instance = u);
      case "void":
        return null;
      default:
        throw Error(s(443, l.type));
    }
    else l.type === "stylesheet" && (l.state.loading & 4) === 0 && (a = l.instance, l.state.loading |= 4, wn(a, e.precedence, t));
    return l.instance;
  }
  function wn(t, l, e) {
    for (var a = e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = a.length ? a[a.length - 1] : null, n = u, c = 0; c < a.length; c++) {
      var i = a[c];
      if (i.dataset.precedence === l) n = i;
      else if (n !== u) break;
    }
    n ? n.parentNode.insertBefore(t, n.nextSibling) : (l = e.nodeType === 9 ? e.head : e, l.insertBefore(t, l.firstChild));
  }
  function sf(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.title == null && (t.title = l.title);
  }
  function of(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.integrity == null && (t.integrity = l.integrity);
  }
  var Gn = null;
  function vd(t, l, e) {
    if (Gn === null) {
      var a = /* @__PURE__ */ new Map(), u = Gn = /* @__PURE__ */ new Map();
      u.set(e, a);
    } else u = Gn, a = u.get(e), a || (a = /* @__PURE__ */ new Map(), u.set(e, a));
    if (a.has(t)) return a;
    for (a.set(t, null), e = e.getElementsByTagName(t), u = 0; u < e.length; u++) {
      var n = e[u];
      if (!(n[qa] || n[Rt] || t === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = n.getAttribute(l) || "";
        c = t + c;
        var i = a.get(c);
        i ? i.push(n) : a.set(c, [n]);
      }
    }
    return a;
  }
  function gd(t, l, e) {
    t = t.ownerDocument || t, t.head.insertBefore(e, l === "title" ? t.querySelector("head > title") : null);
  }
  function em(t, l, e) {
    if (e === 1 || l.itemProp != null) return false;
    switch (t) {
      case "meta":
      case "title":
        return true;
      case "style":
        if (typeof l.precedence != "string" || typeof l.href != "string" || l.href === "") break;
        return true;
      case "link":
        if (typeof l.rel != "string" || typeof l.href != "string" || l.href === "" || l.onLoad || l.onError) break;
        switch (l.rel) {
          case "stylesheet":
            return t = l.disabled, typeof l.precedence == "string" && t == null;
          default:
            return true;
        }
      case "script":
        if (l.async && typeof l.async != "function" && typeof l.async != "symbol" && !l.onLoad && !l.onError && l.src && typeof l.src == "string") return true;
    }
    return false;
  }
  function _d(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function am(t, l, e, a) {
    if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== false) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var u = Ua(a.href), n = l.querySelector(Su(u));
        if (n) {
          l = n._p, l !== null && typeof l == "object" && typeof l.then == "function" && (t.count++, t = Xn.bind(t), l.then(t, t)), e.state.loading |= 4, e.instance = n, Dt(n);
          return;
        }
        n = l.ownerDocument || l, a = yd(a), (u = Tl.get(u)) && sf(a, u), n = n.createElement("link"), Dt(n);
        var c = n;
        c._p = new Promise(function(i, r) {
          c.onload = i, c.onerror = r;
        }), qt(n, "link", a), e.instance = n;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(e, l), (l = e.state.preload) && (e.state.loading & 3) === 0 && (t.count++, e = Xn.bind(t), l.addEventListener("load", e), l.addEventListener("error", e));
    }
  }
  var rf = 0;
  function um(t, l) {
    return t.stylesheets && t.count === 0 && Zn(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(e) {
      var a = setTimeout(function() {
        if (t.stylesheets && Zn(t, t.stylesheets), t.unsuspend) {
          var n = t.unsuspend;
          t.unsuspend = null, n();
        }
      }, 6e4 + l);
      0 < t.imgBytes && rf === 0 && (rf = 62500 * Yy());
      var u = setTimeout(function() {
        if (t.waitingForImages = false, t.count === 0 && (t.stylesheets && Zn(t, t.stylesheets), t.unsuspend)) {
          var n = t.unsuspend;
          t.unsuspend = null, n();
        }
      }, (t.imgBytes > rf ? 50 : 800) + l);
      return t.unsuspend = e, function() {
        t.unsuspend = null, clearTimeout(a), clearTimeout(u);
      };
    } : null;
  }
  function Xn() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Zn(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var Qn = null;
  function Zn(t, l) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Qn = /* @__PURE__ */ new Map(), l.forEach(nm, t), Qn = null, Xn.call(t));
  }
  function nm(t, l) {
    if (!(l.state.loading & 4)) {
      var e = Qn.get(t);
      if (e) var a = e.get(null);
      else {
        e = /* @__PURE__ */ new Map(), Qn.set(t, e);
        for (var u = t.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0; n < u.length; n++) {
          var c = u[n];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (e.set(c.dataset.precedence, c), a = c);
        }
        a && e.set(null, a);
      }
      u = l.instance, c = u.getAttribute("data-precedence"), n = e.get(c) || a, n === a && e.set(null, u), e.set(c, u), this.count++, a = Xn.bind(this), u.addEventListener("load", a), u.addEventListener("error", a), n ? n.parentNode.insertBefore(u, n.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(u, t.firstChild)), l.state.loading |= 4;
    }
  }
  var Tu = { $$typeof: Mt, Provider: null, Consumer: null, _currentValue: M, _currentValue2: M, _threadCount: 0 };
  function cm(t, l, e, a, u, n, c, i, r) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = nc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = nc(0), this.hiddenUpdates = nc(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = r, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function hd(t, l, e, a, u, n, c, i, r, _, S, E) {
    return t = new cm(t, l, e, c, r, _, S, E, i), l = 1, n === true && (l |= 24), n = il(3, null, null, l), t.current = n, n.stateNode = t, l = Zc(), l.refCount++, t.pooledCache = l, l.refCount++, n.memoizedState = { element: a, isDehydrated: e, cache: l }, Jc(n), t;
  }
  function bd(t) {
    return t ? (t = ia, t) : ia;
  }
  function Sd(t, l, e, a, u, n) {
    u = bd(u), a.context === null ? a.context = u : a.pendingContext = u, a = oe(l), a.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (a.callback = n), e = re(t, a, l), e !== null && (It(e, t, l), tu(e, t, l));
  }
  function zd(t, l) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var e = t.retryLane;
      t.retryLane = e !== 0 && e < l ? e : l;
    }
  }
  function df(t, l) {
    zd(t, l), (t = t.alternate) && zd(t, l);
  }
  function Td(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = je(t, 67108864);
      l !== null && It(l, t, 67108864), df(t, 67108864);
    }
  }
  function Ed(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = dl();
      l = cc(l);
      var e = je(t, l);
      e !== null && It(e, t, l), df(t, l);
    }
  }
  var Vn = true;
  function im(t, l, e, a) {
    var u = z.T;
    z.T = null;
    var n = D.p;
    try {
      D.p = 2, yf(t, l, e, a);
    } finally {
      D.p = n, z.T = u;
    }
  }
  function fm(t, l, e, a) {
    var u = z.T;
    z.T = null;
    var n = D.p;
    try {
      D.p = 8, yf(t, l, e, a);
    } finally {
      D.p = n, z.T = u;
    }
  }
  function yf(t, l, e, a) {
    if (Vn) {
      var u = mf(a);
      if (u === null) Ii(t, l, a, Ln, e), pd(t, a);
      else if (om(u, t, l, e, a)) a.stopPropagation();
      else if (pd(t, a), l & 4 && -1 < sm.indexOf(t)) {
        for (; u !== null; ) {
          var n = Fe(u);
          if (n !== null) switch (n.tag) {
            case 3:
              if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                var c = Ue(n.pendingLanes);
                if (c !== 0) {
                  var i = n;
                  for (i.pendingLanes |= 2, i.entangledLanes |= 2; c; ) {
                    var r = 1 << 31 - nl(c);
                    i.entanglements[1] |= r, c &= ~r;
                  }
                  jl(n), (ut & 6) === 0 && (Mn = al() + 500, gu(0));
                }
              }
              break;
            case 31:
            case 13:
              i = je(n, 2), i !== null && It(i, n, 2), Un(), df(n, 2);
          }
          if (n = mf(a), n === null && Ii(t, l, a, Ln, e), n === u) break;
          u = n;
        }
        u !== null && a.stopPropagation();
      } else Ii(t, l, a, null, e);
    }
  }
  function mf(t) {
    return t = vc(t), vf(t);
  }
  var Ln = null;
  function vf(t) {
    if (Ln = null, t = $e(t), t !== null) {
      var l = B(t);
      if (l === null) t = null;
      else {
        var e = l.tag;
        if (e === 13) {
          if (t = C(l), t !== null) return t;
          t = null;
        } else if (e === 31) {
          if (t = P(l), t !== null) return t;
          t = null;
        } else if (e === 3) {
          if (l.stateNode.current.memoizedState.isDehydrated) return l.tag === 3 ? l.stateNode.containerInfo : null;
          t = null;
        } else l !== t && (t = null);
      }
    }
    return Ln = t, null;
  }
  function Ad(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Wd()) {
          case xf:
            return 2;
          case Hf:
            return 8;
          case Ru:
          case $d:
            return 32;
          case Rf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var gf = false, Te = null, Ee = null, Ae = null, Eu = /* @__PURE__ */ new Map(), Au = /* @__PURE__ */ new Map(), pe = [], sm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function pd(t, l) {
    switch (t) {
      case "focusin":
      case "focusout":
        Te = null;
        break;
      case "dragenter":
      case "dragleave":
        Ee = null;
        break;
      case "mouseover":
      case "mouseout":
        Ae = null;
        break;
      case "pointerover":
      case "pointerout":
        Eu.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Au.delete(l.pointerId);
    }
  }
  function pu(t, l, e, a, u, n) {
    return t === null || t.nativeEvent !== n ? (t = { blockedOn: l, domEventName: e, eventSystemFlags: a, nativeEvent: n, targetContainers: [u] }, l !== null && (l = Fe(l), l !== null && Td(l)), t) : (t.eventSystemFlags |= a, l = t.targetContainers, u !== null && l.indexOf(u) === -1 && l.push(u), t);
  }
  function om(t, l, e, a, u) {
    switch (l) {
      case "focusin":
        return Te = pu(Te, t, l, e, a, u), true;
      case "dragenter":
        return Ee = pu(Ee, t, l, e, a, u), true;
      case "mouseover":
        return Ae = pu(Ae, t, l, e, a, u), true;
      case "pointerover":
        var n = u.pointerId;
        return Eu.set(n, pu(Eu.get(n) || null, t, l, e, a, u)), true;
      case "gotpointercapture":
        return n = u.pointerId, Au.set(n, pu(Au.get(n) || null, t, l, e, a, u)), true;
    }
    return false;
  }
  function Od(t) {
    var l = $e(t.target);
    if (l !== null) {
      var e = B(l);
      if (e !== null) {
        if (l = e.tag, l === 13) {
          if (l = C(e), l !== null) {
            t.blockedOn = l, wf(t.priority, function() {
              Ed(e);
            });
            return;
          }
        } else if (l === 31) {
          if (l = P(e), l !== null) {
            t.blockedOn = l, wf(t.priority, function() {
              Ed(e);
            });
            return;
          }
        } else if (l === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Kn(t) {
    if (t.blockedOn !== null) return false;
    for (var l = t.targetContainers; 0 < l.length; ) {
      var e = mf(t.nativeEvent);
      if (e === null) {
        e = t.nativeEvent;
        var a = new e.constructor(e.type, e);
        mc = a, e.target.dispatchEvent(a), mc = null;
      } else return l = Fe(e), l !== null && Td(l), t.blockedOn = e, false;
      l.shift();
    }
    return true;
  }
  function Md(t, l, e) {
    Kn(t) && e.delete(l);
  }
  function rm() {
    gf = false, Te !== null && Kn(Te) && (Te = null), Ee !== null && Kn(Ee) && (Ee = null), Ae !== null && Kn(Ae) && (Ae = null), Eu.forEach(Md), Au.forEach(Md);
  }
  function Jn(t, l) {
    t.blockedOn === l && (t.blockedOn = null, gf || (gf = true, o.unstable_scheduleCallback(o.unstable_NormalPriority, rm)));
  }
  var Wn = null;
  function Dd(t) {
    Wn !== t && (Wn = t, o.unstable_scheduleCallback(o.unstable_NormalPriority, function() {
      Wn === t && (Wn = null);
      for (var l = 0; l < t.length; l += 3) {
        var e = t[l], a = t[l + 1], u = t[l + 2];
        if (typeof a != "function") {
          if (vf(a || e) === null) continue;
          break;
        }
        var n = Fe(e);
        n !== null && (t.splice(l, 3), l -= 3, yi(n, { pending: true, data: u, method: e.method, action: a }, a, u));
      }
    }));
  }
  function xa(t) {
    function l(r) {
      return Jn(r, t);
    }
    Te !== null && Jn(Te, t), Ee !== null && Jn(Ee, t), Ae !== null && Jn(Ae, t), Eu.forEach(l), Au.forEach(l);
    for (var e = 0; e < pe.length; e++) {
      var a = pe[e];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < pe.length && (e = pe[0], e.blockedOn === null); ) Od(e), e.blockedOn === null && pe.shift();
    if (e = (t.ownerDocument || t).$$reactFormReplay, e != null) for (a = 0; a < e.length; a += 3) {
      var u = e[a], n = e[a + 1], c = u[Kt] || null;
      if (typeof n == "function") c || Dd(e);
      else if (c) {
        var i = null;
        if (n && n.hasAttribute("formAction")) {
          if (u = n, c = n[Kt] || null) i = c.formAction;
          else if (vf(u) !== null) continue;
        } else i = c.action;
        typeof i == "function" ? e[a + 1] = i : (e.splice(a, 3), a -= 3), Dd(e);
      }
    }
  }
  function Ud() {
    function t(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({ handler: function() {
        return new Promise(function(c) {
          return u = c;
        });
      }, focusReset: "manual", scroll: "manual" });
    }
    function l() {
      u !== null && (u(), u = null), a || setTimeout(e, 20);
    }
    function e() {
      if (!a && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, { state: n.getState(), info: "react-transition", history: "replace" });
      }
    }
    if (typeof navigation == "object") {
      var a = false, u = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", l), navigation.addEventListener("navigateerror", l), setTimeout(e, 100), function() {
        a = true, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", l), navigation.removeEventListener("navigateerror", l), u !== null && (u(), u = null);
      };
    }
  }
  function _f(t) {
    this._internalRoot = t;
  }
  $n.prototype.render = _f.prototype.render = function(t) {
    var l = this._internalRoot;
    if (l === null) throw Error(s(409));
    var e = l.current, a = dl();
    Sd(e, a, t, l, null, null);
  }, $n.prototype.unmount = _f.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var l = t.containerInfo;
      Sd(t.current, 2, null, t, null, null), Un(), l[We] = null;
    }
  };
  function $n(t) {
    this._internalRoot = t;
  }
  $n.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var l = Yf();
      t = { blockedOn: null, target: t, priority: l };
      for (var e = 0; e < pe.length && l !== 0 && l < pe[e].priority; e++) ;
      pe.splice(e, 0, t), e === 0 && Od(t);
    }
  };
  var Nd = f.version;
  if (Nd !== "19.2.1") throw Error(s(527, Nd, "19.2.1"));
  D.findDOMNode = function(t) {
    var l = t._reactInternals;
    if (l === void 0) throw typeof t.render == "function" ? Error(s(188)) : (t = Object.keys(t).join(","), Error(s(268, t)));
    return t = O(l), t = t !== null ? tt(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var dm = { bundleType: 0, version: "19.2.1", rendererPackageName: "react-dom", currentDispatcherRef: z, reconcilerVersion: "19.2.1" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Fn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Fn.isDisabled && Fn.supportsFiber) try {
      ja = Fn.inject(dm), ul = Fn;
    } catch {
    }
  }
  return Mu.createRoot = function(t, l) {
    if (!p(t)) throw Error(s(299));
    var e = false, a = "", u = qo, n = Yo, c = wo;
    return l != null && (l.unstable_strictMode === true && (e = true), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (n = l.onCaughtError), l.onRecoverableError !== void 0 && (c = l.onRecoverableError)), l = hd(t, 1, false, null, null, e, a, null, u, n, c, Ud), t[We] = l.current, ki(t), new _f(l);
  }, Mu.hydrateRoot = function(t, l, e) {
    if (!p(t)) throw Error(s(299));
    var a = false, u = "", n = qo, c = Yo, i = wo, r = null;
    return e != null && (e.unstable_strictMode === true && (a = true), e.identifierPrefix !== void 0 && (u = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (c = e.onCaughtError), e.onRecoverableError !== void 0 && (i = e.onRecoverableError), e.formState !== void 0 && (r = e.formState)), l = hd(t, 1, true, l, e ?? null, a, u, r, n, c, i, Ud), l.context = bd(null), e = l.current, a = dl(), a = cc(a), u = oe(a), u.callback = null, re(e, u, a), e = a, l.current.lanes = e, Ca(l, e), jl(l), t[We] = l.current, ki(t), new $n(l);
  }, Mu.version = "19.2.1", Mu;
}
var Gd;
function Tm() {
  if (Gd) return Sf.exports;
  Gd = 1;
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
    } catch (f) {
      console.error(f);
    }
  }
  return o(), Sf.exports = zm(), Sf.exports;
}
var Em = Tm();
let V;
function Du(o) {
  const f = V.__externref_table_alloc();
  return V.__wbindgen_externrefs.set(f, o), f;
}
const Xd = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((o) => o.dtor(o.a, o.b));
function Of(o) {
  const f = typeof o;
  if (f == "number" || f == "boolean" || o == null) return `${o}`;
  if (f == "string") return `"${o}"`;
  if (f == "symbol") {
    const p = o.description;
    return p == null ? "Symbol" : `Symbol(${p})`;
  }
  if (f == "function") {
    const p = o.name;
    return typeof p == "string" && p.length > 0 ? `Function(${p})` : "Function";
  }
  if (Array.isArray(o)) {
    const p = o.length;
    let B = "[";
    p > 0 && (B += Of(o[0]));
    for (let C = 1; C < p; C++) B += ", " + Of(o[C]);
    return B += "]", B;
  }
  const m = /\[object ([^\]]+)\]/.exec(toString.call(o));
  let s;
  if (m && m.length > 1) s = m[1];
  else return toString.call(o);
  if (s == "Object") try {
    return "Object(" + JSON.stringify(o) + ")";
  } catch {
    return "Object";
  }
  return o instanceof Error ? `${o.name}: ${o.message}
${o.stack}` : s;
}
function Qd(o, f) {
  return o = o >>> 0, Nu().subarray(o / 1, o / 1 + f);
}
let Je = null;
function Me() {
  return (Je === null || Je.buffer.detached === true || Je.buffer.detached === void 0 && Je.buffer !== V.memory.buffer) && (Je = new DataView(V.memory.buffer)), Je;
}
function El(o, f) {
  return o = o >>> 0, Om(o, f);
}
let Uu = null;
function Nu() {
  return (Uu === null || Uu.byteLength === 0) && (Uu = new Uint8Array(V.memory.buffer)), Uu;
}
function Bl(o, f) {
  try {
    return o.apply(this, f);
  } catch (m) {
    const s = Du(m);
    V.__wbindgen_exn_store(s);
  }
}
function Cl(o) {
  return o == null;
}
function Am(o, f, m, s) {
  const p = { a: o, b: f, cnt: 1, dtor: m }, B = (...C) => {
    p.cnt++;
    const P = p.a;
    p.a = 0;
    try {
      return s(P, p.b, ...C);
    } finally {
      p.a = P, B._wbg_cb_unref();
    }
  };
  return B._wbg_cb_unref = () => {
    --p.cnt === 0 && (p.dtor(p.a, p.b), p.a = 0, Xd.unregister(p));
  }, Xd.register(B, p, p), B;
}
function In(o, f, m) {
  if (m === void 0) {
    const P = xu.encode(o), x = f(P.length, 1) >>> 0;
    return Nu().subarray(x, x + P.length).set(P), Ha = P.length, x;
  }
  let s = o.length, p = f(s, 1) >>> 0;
  const B = Nu();
  let C = 0;
  for (; C < s; C++) {
    const P = o.charCodeAt(C);
    if (P > 127) break;
    B[p + C] = P;
  }
  if (C !== s) {
    C !== 0 && (o = o.slice(C)), p = m(p, s, s = C + o.length * 3, 1) >>> 0;
    const P = Nu().subarray(p + C, p + s), x = xu.encodeInto(o, P);
    C += x.written, p = m(p, s, C, 1) >>> 0;
  }
  return Ha = C, p;
}
function Af(o) {
  const f = V.__wbindgen_externrefs.get(o);
  return V.__externref_table_dealloc(o), f;
}
let kn = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
kn.decode();
const pm = 2146435072;
let pf = 0;
function Om(o, f) {
  return pf += f, pf >= pm && (kn = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), kn.decode(), pf = f), kn.decode(Nu().subarray(o, o + f));
}
const xu = new TextEncoder();
"encodeInto" in xu || (xu.encodeInto = function(o, f) {
  const m = xu.encode(o);
  return f.set(m), { read: o.length, written: m.length };
});
let Ha = 0;
function Mm(o, f, m) {
  V.wasm_bindgen__convert__closures_____invoke__h52fd4b3e1f49d104(o, f, m);
}
function Dm(o, f, m, s) {
  V.wasm_bindgen__convert__closures_____invoke__hbcc8051a5a43ab84(o, f, m, s);
}
const Zd = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((o) => V.__wbg_jswallet_free(o >>> 0, 1));
class Mf {
  __destroy_into_raw() {
    const f = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Zd.unregister(this), f;
  }
  free() {
    const f = this.__destroy_into_raw();
    V.__wbg_jswallet_free(f, 0);
  }
  constructor(f) {
    const m = In(f, V.__wbindgen_malloc, V.__wbindgen_realloc), s = Ha, p = V.jswallet_new(m, s);
    if (p[2]) throw Af(p[1]);
    return this.__wbg_ptr = p[0] >>> 0, Zd.register(this, this.__wbg_ptr, this), this;
  }
  sync_until(f) {
    return V.jswallet_sync_until(this.__wbg_ptr, f);
  }
  get_address() {
    let f, m;
    try {
      const s = V.jswallet_get_address(this.__wbg_ptr);
      return f = s[0], m = s[1], El(s[0], s[1]);
    } finally {
      V.__wbindgen_free(f, m, 1);
    }
  }
  get_balance() {
    const f = V.jswallet_get_balance(this.__wbg_ptr);
    return BigInt.asUintN(64, f);
  }
  list_notes() {
    return V.jswallet_list_notes(this.__wbg_ptr);
  }
  export_mina_bridge(f) {
    let m, s;
    try {
      const C = V.jswallet_export_mina_bridge(this.__wbg_ptr, f);
      var p = C[0], B = C[1];
      if (C[3]) throw p = 0, B = 0, Af(C[2]);
      return m = p, s = B, El(p, B);
    } finally {
      V.__wbindgen_free(m, s, 1);
    }
  }
  send(f, m) {
    let s, p;
    try {
      const P = In(f, V.__wbindgen_malloc, V.__wbindgen_realloc), x = Ha, O = V.jswallet_send(this.__wbg_ptr, P, x, m);
      var B = O[0], C = O[1];
      if (O[3]) throw B = 0, C = 0, Af(O[2]);
      return s = B, p = C, El(B, C);
    } finally {
      V.__wbindgen_free(s, p, 1);
    }
  }
}
Symbol.dispose && (Mf.prototype[Symbol.dispose] = Mf.prototype.free);
function Um() {
  let o, f;
  try {
    const m = V.generate_wallet_seed();
    return o = m[0], f = m[1], El(m[0], m[1]);
  } finally {
    V.__wbindgen_free(o, f, 1);
  }
}
const Nm = /* @__PURE__ */ new Set(["basic", "cors", "default"]);
async function xm(o, f) {
  if (typeof Response == "function" && o instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(o, f);
    } catch (s) {
      if (o.ok && Nm.has(o.type) && o.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", s);
      else throw s;
    }
    const m = await o.arrayBuffer();
    return await WebAssembly.instantiate(m, f);
  } else {
    const m = await WebAssembly.instantiate(o, f);
    return m instanceof WebAssembly.Instance ? { instance: m, module: o } : m;
  }
}
function Hm() {
  const o = {};
  return o.wbg = {}, o.wbg.__wbg_Error_52673b7de5a0ca89 = function(f, m) {
    return Error(El(f, m));
  }, o.wbg.__wbg___wbindgen_bigint_get_as_i64_6e32f5e6aff02e1d = function(f, m) {
    const s = m, p = typeof s == "bigint" ? s : void 0;
    Me().setBigInt64(f + 8, Cl(p) ? BigInt(0) : p, true), Me().setInt32(f + 0, !Cl(p), true);
  }, o.wbg.__wbg___wbindgen_boolean_get_dea25b33882b895b = function(f) {
    const m = f, s = typeof m == "boolean" ? m : void 0;
    return Cl(s) ? 16777215 : s ? 1 : 0;
  }, o.wbg.__wbg___wbindgen_debug_string_adfb662ae34724b6 = function(f, m) {
    const s = Of(m), p = In(s, V.__wbindgen_malloc, V.__wbindgen_realloc), B = Ha;
    Me().setInt32(f + 4, B, true), Me().setInt32(f + 0, p, true);
  }, o.wbg.__wbg___wbindgen_in_0d3e1e8f0c669317 = function(f, m) {
    return f in m;
  }, o.wbg.__wbg___wbindgen_is_bigint_0e1a2e3f55cfae27 = function(f) {
    return typeof f == "bigint";
  }, o.wbg.__wbg___wbindgen_is_function_8d400b8b1af978cd = function(f) {
    return typeof f == "function";
  }, o.wbg.__wbg___wbindgen_is_object_ce774f3490692386 = function(f) {
    const m = f;
    return typeof m == "object" && m !== null;
  }, o.wbg.__wbg___wbindgen_is_string_704ef9c8fc131030 = function(f) {
    return typeof f == "string";
  }, o.wbg.__wbg___wbindgen_is_undefined_f6b95eab589e0269 = function(f) {
    return f === void 0;
  }, o.wbg.__wbg___wbindgen_jsval_eq_b6101cc9cef1fe36 = function(f, m) {
    return f === m;
  }, o.wbg.__wbg___wbindgen_jsval_loose_eq_766057600fdd1b0d = function(f, m) {
    return f == m;
  }, o.wbg.__wbg___wbindgen_number_get_9619185a74197f95 = function(f, m) {
    const s = m, p = typeof s == "number" ? s : void 0;
    Me().setFloat64(f + 8, Cl(p) ? 0 : p, true), Me().setInt32(f + 0, !Cl(p), true);
  }, o.wbg.__wbg___wbindgen_string_get_a2a31e16edf96e42 = function(f, m) {
    const s = m, p = typeof s == "string" ? s : void 0;
    var B = Cl(p) ? 0 : In(p, V.__wbindgen_malloc, V.__wbindgen_realloc), C = Ha;
    Me().setInt32(f + 4, C, true), Me().setInt32(f + 0, B, true);
  }, o.wbg.__wbg___wbindgen_throw_dd24417ed36fc46e = function(f, m) {
    throw new Error(El(f, m));
  }, o.wbg.__wbg__wbg_cb_unref_87dfb5aaa0cbcea7 = function(f) {
    f._wbg_cb_unref();
  }, o.wbg.__wbg_call_3020136f7a2d6e44 = function() {
    return Bl(function(f, m, s) {
      return f.call(m, s);
    }, arguments);
  }, o.wbg.__wbg_call_abb4ff46ce38be40 = function() {
    return Bl(function(f, m) {
      return f.call(m);
    }, arguments);
  }, o.wbg.__wbg_crypto_574e78ad8b13b65f = function(f) {
    return f.crypto;
  }, o.wbg.__wbg_done_62ea16af4ce34b24 = function(f) {
    return f.done;
  }, o.wbg.__wbg_fetch_8119fbf8d0e4f4d1 = function(f, m) {
    return f.fetch(m);
  }, o.wbg.__wbg_getRandomValues_b8f5dbd5f3995a9e = function() {
    return Bl(function(f, m) {
      f.getRandomValues(m);
    }, arguments);
  }, o.wbg.__wbg_get_6b7bd52aca3f9671 = function(f, m) {
    return f[m >>> 0];
  }, o.wbg.__wbg_get_af9dab7e9603ea93 = function() {
    return Bl(function(f, m) {
      return Reflect.get(f, m);
    }, arguments);
  }, o.wbg.__wbg_get_with_ref_key_bb8f74a92cb2e784 = function(f, m) {
    return f[m];
  }, o.wbg.__wbg_headers_850c3fb50632ae78 = function(f) {
    return f.headers;
  }, o.wbg.__wbg_instanceof_ArrayBuffer_f3320d2419cd0355 = function(f) {
    let m;
    try {
      m = f instanceof ArrayBuffer;
    } catch {
      m = false;
    }
    return m;
  }, o.wbg.__wbg_instanceof_Response_cd74d1c2ac92cb0b = function(f) {
    let m;
    try {
      m = f instanceof Response;
    } catch {
      m = false;
    }
    return m;
  }, o.wbg.__wbg_instanceof_Uint8Array_da54ccc9d3e09434 = function(f) {
    let m;
    try {
      m = f instanceof Uint8Array;
    } catch {
      m = false;
    }
    return m;
  }, o.wbg.__wbg_instanceof_Window_b5cf7783caa68180 = function(f) {
    let m;
    try {
      m = f instanceof Window;
    } catch {
      m = false;
    }
    return m;
  }, o.wbg.__wbg_isArray_51fd9e6422c0a395 = function(f) {
    return Array.isArray(f);
  }, o.wbg.__wbg_isSafeInteger_ae7d3f054d55fa16 = function(f) {
    return Number.isSafeInteger(f);
  }, o.wbg.__wbg_iterator_27b7c8b35ab3e86b = function() {
    return Symbol.iterator;
  }, o.wbg.__wbg_json_47d847e3a3f1cf40 = function() {
    return Bl(function(f) {
      return f.json();
    }, arguments);
  }, o.wbg.__wbg_length_22ac23eaec9d8053 = function(f) {
    return f.length;
  }, o.wbg.__wbg_length_d45040a40c570362 = function(f) {
    return f.length;
  }, o.wbg.__wbg_msCrypto_a61aeb35a24c1329 = function(f) {
    return f.msCrypto;
  }, o.wbg.__wbg_new_1ba21ce319a06297 = function() {
    return new Object();
  }, o.wbg.__wbg_new_25f239778d6112b9 = function() {
    return new Array();
  }, o.wbg.__wbg_new_6421f6084cc5bc5a = function(f) {
    return new Uint8Array(f);
  }, o.wbg.__wbg_new_ff12d2b041fb48f1 = function(f, m) {
    try {
      var s = { a: f, b: m }, p = (C, P) => {
        const x = s.a;
        s.a = 0;
        try {
          return Dm(x, s.b, C, P);
        } finally {
          s.a = x;
        }
      };
      return new Promise(p);
    } finally {
      s.a = s.b = 0;
    }
  }, o.wbg.__wbg_new_no_args_cb138f77cf6151ee = function(f, m) {
    return new Function(El(f, m));
  }, o.wbg.__wbg_new_with_length_aa5eaf41d35235e5 = function(f) {
    return new Uint8Array(f >>> 0);
  }, o.wbg.__wbg_new_with_str_and_init_c5748f76f5108934 = function() {
    return Bl(function(f, m, s) {
      return new Request(El(f, m), s);
    }, arguments);
  }, o.wbg.__wbg_next_138a17bbf04e926c = function(f) {
    return f.next;
  }, o.wbg.__wbg_next_3cfe5c0fe2a4cc53 = function() {
    return Bl(function(f) {
      return f.next();
    }, arguments);
  }, o.wbg.__wbg_node_905d3e251edff8a2 = function(f) {
    return f.node;
  }, o.wbg.__wbg_process_dc0fbacc7c1c06f7 = function(f) {
    return f.process;
  }, o.wbg.__wbg_prototypesetcall_dfe9b766cdc1f1fd = function(f, m, s) {
    Uint8Array.prototype.set.call(Qd(f, m), s);
  }, o.wbg.__wbg_queueMicrotask_9b549dfce8865860 = function(f) {
    return f.queueMicrotask;
  }, o.wbg.__wbg_queueMicrotask_fca69f5bfad613a5 = function(f) {
    queueMicrotask(f);
  }, o.wbg.__wbg_randomFillSync_ac0988aba3254290 = function() {
    return Bl(function(f, m) {
      f.randomFillSync(m);
    }, arguments);
  }, o.wbg.__wbg_require_60cc747a6bc5215a = function() {
    return Bl(function() {
      return module.require;
    }, arguments);
  }, o.wbg.__wbg_resolve_fd5bfbaa4ce36e1e = function(f) {
    return Promise.resolve(f);
  }, o.wbg.__wbg_set_3fda3bac07393de4 = function(f, m, s) {
    f[m] = s;
  }, o.wbg.__wbg_set_425eb8b710d5beee = function() {
    return Bl(function(f, m, s, p, B) {
      f.set(El(m, s), El(p, B));
    }, arguments);
  }, o.wbg.__wbg_set_7df433eea03a5c14 = function(f, m, s) {
    f[m >>> 0] = s;
  }, o.wbg.__wbg_set_body_8e743242d6076a4f = function(f, m) {
    f.body = m;
  }, o.wbg.__wbg_set_method_76c69e41b3570627 = function(f, m, s) {
    f.method = El(m, s);
  }, o.wbg.__wbg_static_accessor_GLOBAL_769e6b65d6557335 = function() {
    const f = typeof global > "u" ? null : global;
    return Cl(f) ? 0 : Du(f);
  }, o.wbg.__wbg_static_accessor_GLOBAL_THIS_60cf02db4de8e1c1 = function() {
    const f = typeof globalThis > "u" ? null : globalThis;
    return Cl(f) ? 0 : Du(f);
  }, o.wbg.__wbg_static_accessor_SELF_08f5a74c69739274 = function() {
    const f = typeof self > "u" ? null : self;
    return Cl(f) ? 0 : Du(f);
  }, o.wbg.__wbg_static_accessor_WINDOW_a8924b26aa92d024 = function() {
    const f = typeof window > "u" ? null : window;
    return Cl(f) ? 0 : Du(f);
  }, o.wbg.__wbg_subarray_845f2f5bce7d061a = function(f, m, s) {
    return f.subarray(m >>> 0, s >>> 0);
  }, o.wbg.__wbg_then_429f7caf1026411d = function(f, m, s) {
    return f.then(m, s);
  }, o.wbg.__wbg_then_4f95312d68691235 = function(f, m) {
    return f.then(m);
  }, o.wbg.__wbg_value_57b7b035e117f7ee = function(f) {
    return f.value;
  }, o.wbg.__wbg_versions_c01dfd4722a88165 = function(f) {
    return f.versions;
  }, o.wbg.__wbindgen_cast_2241b6af4c4b2941 = function(f, m) {
    return El(f, m);
  }, o.wbg.__wbindgen_cast_4625c577ab2ec9ee = function(f) {
    return BigInt.asUintN(64, f);
  }, o.wbg.__wbindgen_cast_72229396c1fcf55a = function(f, m) {
    return Am(f, m, V.wasm_bindgen__closure__destroy__hca20c5da22446301, Mm);
  }, o.wbg.__wbindgen_cast_cb9088102bce6b30 = function(f, m) {
    return Qd(f, m);
  }, o.wbg.__wbindgen_cast_d6cd19b81560fd6e = function(f) {
    return f;
  }, o.wbg.__wbindgen_init_externref_table = function() {
    const f = V.__wbindgen_externrefs, m = f.grow(4);
    f.set(0, void 0), f.set(m + 0, void 0), f.set(m + 1, null), f.set(m + 2, true), f.set(m + 3, false);
  }, o;
}
function Rm(o, f) {
  return V = o.exports, Vd.__wbindgen_wasm_module = f, Je = null, Uu = null, V.__wbindgen_start(), V;
}
async function Vd(o) {
  if (V !== void 0) return V;
  typeof o < "u" && (Object.getPrototypeOf(o) === Object.prototype ? { module_or_path: o } = o : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof o > "u" && (o = new URL("/assets/wasm_bg-D_at7Yx5.wasm", import.meta.url));
  const f = Hm();
  (typeof o == "string" || typeof Request == "function" && o instanceof Request || typeof URL == "function" && o instanceof URL) && (o = fetch(o));
  const { instance: m, module: s } = await xm(await o, f);
  return Rm(m, s);
}
const jm = ({ isOpen: o, onClose: f, title: m, children: s }) => o ? N.jsx("div", { style: { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.7)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1e3, backdropFilter: "blur(5px)" }, children: N.jsxs("div", { style: { background: "var(--card-bg)", padding: "24px", borderRadius: "16px", width: "90%", maxWidth: "400px", border: "1px solid var(--border-color)", boxShadow: "0 20px 50px rgba(0,0,0,0.3)", animation: "fadeIn 0.2s ease-out" }, children: [N.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }, children: [N.jsx("h3", { style: { margin: 0, fontSize: "18px", fontWeight: 600 }, children: m }), N.jsx("button", { onClick: f, style: { background: "none", border: "none", color: "var(--text-secondary)", fontSize: "24px", cursor: "pointer", padding: "0 4px", lineHeight: 1 }, children: "\xD7" })] }), N.jsx("div", { children: s })] }) }) : null;
function Bm() {
  const [o, f] = Vt.useState(null), [m, s] = Vt.useState(""), [p, B] = Vt.useState(0), [C, P] = Vt.useState(27e5), [x, O] = Vt.useState([]), [tt, w] = Vt.useState(""), [at, Nt] = Vt.useState("home"), [zt, xt] = Vt.useState(false), [Al, Ht] = Vt.useState(false), [pl, Mt] = Vt.useState("");
  Vt.useEffect(() => {
    Vd().then(() => {
      console.log("WASM initialized"), xt(true);
    }).catch((M) => {
      console.error("WASM init failed", M), alert("WASM init failed: " + M);
    });
  }, []);
  const Lt = () => {
    if (zt) try {
      const M = new Mf(m);
      f(M), Pt(M);
    } catch (M) {
      console.error(M), alert("Failed to init wallet: " + M);
    }
  }, Pt = (M) => {
    B(Number(M.get_balance()));
  }, Yt = async () => {
    if (o) try {
      await o.sync_until(BigInt(C)), Pt(o), alert("Synced!");
    } catch (M) {
      console.error(M), alert("Sync failed: " + M);
    }
  }, L = () => {
    if (!o) return;
    const M = o.list_notes();
    O(M);
  }, wt = (M) => {
    if (o) try {
      const k = o.export_mina_bridge(M);
      w(k);
    } catch (k) {
      alert("Export failed: " + k);
    }
  }, [tl, le] = Vt.useState(""), [ll, Gt] = Vt.useState(""), [Nl, Ol] = Vt.useState(""), el = () => {
    if (zt) try {
      const M = Um();
      Mt(M), s(M), Ht(true);
    } catch (M) {
      console.error(M), alert("Failed to generate seed: " + M);
    }
  }, z = (M) => {
    navigator.clipboard.writeText(M), alert("Copied to clipboard!");
  };
  if (!o) return N.jsxs("div", { className: "container", style: { justifyContent: "center" }, children: [N.jsx("div", { className: "header", children: N.jsx("h1", { children: "Zcash Wallet" }) }), N.jsxs("div", { className: "card", children: [N.jsx("h2", { style: { fontSize: "18px", marginBottom: "16px" }, children: "Welcome Back" }), N.jsx("p", { style: { marginBottom: "16px", color: "var(--text-secondary)", fontSize: "14px" }, children: "Enter your 32-byte hex seed to access your wallet." }), N.jsx("textarea", { className: "input-field", value: m, onChange: (M) => s(M.target.value), placeholder: "e.g. 000000...", rows: 3, style: { marginBottom: "16px", resize: "none" } }), N.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [N.jsx("button", { className: "primary-btn", onClick: Lt, disabled: !zt || !m, style: { flex: 1 }, children: zt ? "Unlock Wallet" : "Loading WASM..." }), N.jsx("button", { className: "secondary-btn", onClick: el, disabled: !zt, style: { flex: 1 }, children: "Create New Wallet" })] })] }), N.jsx(jm, { isOpen: Al, onClose: () => Ht(false), title: "New Wallet Created", children: N.jsxs("div", { style: { textAlign: "center" }, children: [N.jsx("p", { style: { color: "#ff4444", fontWeight: "bold", marginBottom: "12px" }, children: "\u26A0\uFE0F SAVE THIS SEED SECURELY! \u26A0\uFE0F" }), N.jsx("p", { style: { fontSize: "14px", color: "var(--text-secondary)", marginBottom: "16px" }, children: "This is the ONLY way to recover your funds. We have auto-filled it for you, but you must save it elsewhere." }), N.jsx("div", { style: { background: "rgba(0,0,0,0.2)", padding: "12px", borderRadius: "8px", fontFamily: "monospace", wordBreak: "break-all", marginBottom: "16px", fontSize: "12px", border: "1px solid var(--border-color)" }, children: pl }), N.jsx("button", { className: "primary-btn", onClick: () => {
    z(pl), Ht(false);
  }, children: "Copy & Close" })] }) })] });
  const D = () => {
    if (o) try {
      const M = o.send(tl, BigInt(ll));
      Ol(M), alert("Transaction Built!");
    } catch (M) {
      console.error(M), alert("Send failed: " + M);
    }
  };
  return N.jsxs("div", { className: "container", children: [N.jsx("div", { className: "header", children: N.jsx("h1", { children: "Zcash Wallet" }) }), N.jsxs("div", { className: "nav-bar", children: [N.jsx("button", { className: `nav-btn ${at === "home" ? "active" : ""}`, onClick: () => Nt("home"), children: "Home" }), N.jsx("button", { className: `nav-btn ${at === "notes" ? "active" : ""}`, onClick: () => {
    Nt("notes"), L();
  }, children: "Notes" }), N.jsx("button", { className: `nav-btn ${at === "send" ? "active" : ""}`, onClick: () => Nt("send"), children: "Send" })] }), at === "home" && N.jsxs("div", { children: [N.jsxs("div", { className: "card", children: [N.jsx("span", { className: "balance-label", children: "Total Balance" }), N.jsxs("span", { className: "balance-amount", children: [p, " ZAT"] }), N.jsxs("div", { style: { marginTop: "20px", textAlign: "left" }, children: [N.jsx("label", { className: "label", style: { display: "block", marginBottom: "8px" }, children: "Your Wallet Address" }), N.jsxs("div", { className: "address-box", style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", padding: "12px", background: "rgba(255,255,255,0.05)", borderRadius: "8px", border: "1px solid var(--border-color)" }, children: [N.jsx("span", { style: { fontSize: "12px", fontFamily: "monospace", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1 }, children: o.get_address() }), N.jsx("button", { onClick: () => z(o.get_address()), style: { background: "var(--primary-color)", border: "none", borderRadius: "4px", padding: "4px 8px", color: "white", fontSize: "10px", cursor: "pointer", fontWeight: 600 }, children: "COPY" })] })] })] }), N.jsxs("div", { className: "card", children: [N.jsx("h3", { style: { marginBottom: "12px", fontSize: "16px" }, children: "Sync Status" }), N.jsxs("div", { style: { display: "flex", gap: "8px", width: "100%" }, children: [N.jsx("input", { type: "number", className: "input-field", value: C, onChange: (M) => P(Number(M.target.value)), placeholder: "Target Height" }), N.jsx("button", { className: "primary-btn", style: { width: "auto" }, onClick: Yt, children: "Sync" })] })] })] }), at === "notes" && N.jsxs("div", { style: { overflowY: "auto", flex: 1 }, children: [N.jsx("h2", { style: { marginBottom: "16px", fontSize: "18px" }, children: "Your Notes" }), x.length === 0 ? N.jsx("p", { style: { color: "var(--text-secondary)", textAlign: "center" }, children: "No notes found." }) : N.jsx("div", { children: x.map((M, k) => N.jsxs("div", { className: "note-item", children: [N.jsxs("div", { className: "note-row", children: [N.jsx("span", { className: "label", children: "Value" }), N.jsxs("span", { className: "value", children: [M.value, " ZAT"] })] }), N.jsxs("div", { className: "note-row", style: { marginTop: "4px" }, children: [N.jsx("span", { className: "label", children: "TXID" }), N.jsxs("span", { className: "value", style: { fontSize: "12px" }, children: [M.txid.slice(0, 12), "..."] })] }), N.jsx("button", { className: "secondary-btn", onClick: () => wt(k), children: "Export Witness" })] }, k)) }), tt && N.jsxs("div", { style: { marginTop: "20px" }, children: [N.jsx("h3", { style: { marginBottom: "8px", fontSize: "14px" }, children: "Mina Bridge Export" }), N.jsx("textarea", { className: "export-area", value: tt, readOnly: true, rows: 8, style: { width: "100%" } })] })] }), at === "send" && N.jsxs("div", { className: "card", children: [N.jsx("h2", { style: { marginBottom: "16px" }, children: "Send Zcash" }), N.jsxs("div", { style: { width: "100%", marginBottom: "12px" }, children: [N.jsx("label", { className: "label", style: { display: "block", marginBottom: "8px", textAlign: "left" }, children: "Recipient Address" }), N.jsx("input", { type: "text", className: "input-field", value: tl, onChange: (M) => le(M.target.value), placeholder: "u1..." })] }), N.jsxs("div", { style: { width: "100%", marginBottom: "24px" }, children: [N.jsx("label", { className: "label", style: { display: "block", marginBottom: "8px", textAlign: "left" }, children: "Amount (ZAT)" }), N.jsx("input", { type: "number", className: "input-field", value: ll, onChange: (M) => Gt(M.target.value), placeholder: "0" })] }), N.jsx("p", { style: { color: "var(--text-secondary)", fontSize: "12px", marginBottom: "12px", textAlign: "center" }, children: "\u{1F6E1}\uFE0F Orchard (NU5) Protocol Active" }), N.jsx("button", { className: "primary-btn", onClick: D, children: "Send Transaction" }), Nl && N.jsxs("div", { style: { marginTop: "20px", width: "100%" }, children: [N.jsx("label", { className: "label", style: { display: "block", marginBottom: "8px", textAlign: "left" }, children: "Signed Transaction Hex" }), N.jsx("textarea", { className: "input-field", value: Nl, readOnly: true, rows: 4, style: { fontSize: "12px", fontFamily: "monospace" } })] })] })] });
}
Em.createRoot(document.getElementById("root")).render(N.jsx(Vt.StrictMode, { children: N.jsx(Bm, {}) }));
