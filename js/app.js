(() => {
  var e = {
      732: function (e) {
        e.exports = (function () {
          "use strict";
          function e() {
            return (
              (e =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var s = arguments[t];
                    for (var n in s)
                      Object.prototype.hasOwnProperty.call(s, n) &&
                        (e[n] = s[n]);
                  }
                  return e;
                }),
              e.apply(this, arguments)
            );
          }
          var t = "undefined" != typeof window,
            s =
              (t && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            n = t && "IntersectionObserver" in window,
            i = t && "classList" in document.createElement("p"),
            r = t && window.devicePixelRatio > 1,
            a = {
              elements_selector: ".lazy",
              container: s || t ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
            },
            l = function (t) {
              return e({}, a, t);
            },
            o = function (e, t) {
              var s,
                n = "LazyLoad::Initialized",
                i = new e(t);
              try {
                s = new CustomEvent(n, { detail: { instance: i } });
              } catch (e) {
                (s = document.createEvent("CustomEvent")).initCustomEvent(
                  n,
                  !1,
                  !1,
                  { instance: i }
                );
              }
              window.dispatchEvent(s);
            },
            d = "src",
            c = "srcset",
            u = "sizes",
            p = "poster",
            f = "llOriginalAttrs",
            h = "data",
            m = "loading",
            g = "loaded",
            v = "applied",
            w = "error",
            b = "native",
            C = "data-",
            E = "ll-status",
            T = function (e, t) {
              return e.getAttribute(C + t);
            },
            y = function (e) {
              return T(e, E);
            },
            S = function (e, t) {
              return (function (e, t, s) {
                var n = "data-ll-status";
                null !== s ? e.setAttribute(n, s) : e.removeAttribute(n);
              })(e, 0, t);
            },
            x = function (e) {
              return S(e, null);
            },
            k = function (e) {
              return null === y(e);
            },
            M = function (e) {
              return y(e) === b;
            },
            L = [m, g, v, w],
            $ = function (e, t, s, n) {
              e &&
                (void 0 === n ? (void 0 === s ? e(t) : e(t, s)) : e(t, s, n));
            },
            _ = function (e, t) {
              i
                ? e.classList.add(t)
                : (e.className += (e.className ? " " : "") + t);
            },
            P = function (e, t) {
              i
                ? e.classList.remove(t)
                : (e.className = e.className
                    .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            A = function (e) {
              return e.llTempImage;
            },
            O = function (e, t) {
              if (t) {
                var s = t._observer;
                s && s.unobserve(e);
              }
            },
            I = function (e, t) {
              e && (e.loadingCount += t);
            },
            z = function (e, t) {
              e && (e.toLoadCount = t);
            },
            N = function (e) {
              for (var t, s = [], n = 0; (t = e.children[n]); n += 1)
                "SOURCE" === t.tagName && s.push(t);
              return s;
            },
            G = function (e, t) {
              var s = e.parentNode;
              s && "PICTURE" === s.tagName && N(s).forEach(t);
            },
            B = function (e, t) {
              N(e).forEach(t);
            },
            D = [d],
            H = [d, p],
            q = [d, c, u],
            V = [h],
            F = function (e) {
              return !!e[f];
            },
            j = function (e) {
              return e[f];
            },
            R = function (e) {
              return delete e[f];
            },
            W = function (e, t) {
              if (!F(e)) {
                var s = {};
                t.forEach(function (t) {
                  s[t] = e.getAttribute(t);
                }),
                  (e[f] = s);
              }
            },
            X = function (e, t) {
              if (F(e)) {
                var s = j(e);
                t.forEach(function (t) {
                  !(function (e, t, s) {
                    s ? e.setAttribute(t, s) : e.removeAttribute(t);
                  })(e, t, s[t]);
                });
              }
            },
            Y = function (e, t, s) {
              _(e, t.class_loading),
                S(e, m),
                s && (I(s, 1), $(t.callback_loading, e, s));
            },
            U = function (e, t, s) {
              s && e.setAttribute(t, s);
            },
            K = function (e, t) {
              U(e, u, T(e, t.data_sizes)),
                U(e, c, T(e, t.data_srcset)),
                U(e, d, T(e, t.data_src));
            },
            J = {
              IMG: function (e, t) {
                G(e, function (e) {
                  W(e, q), K(e, t);
                }),
                  W(e, q),
                  K(e, t);
              },
              IFRAME: function (e, t) {
                W(e, D), U(e, d, T(e, t.data_src));
              },
              VIDEO: function (e, t) {
                B(e, function (e) {
                  W(e, D), U(e, d, T(e, t.data_src));
                }),
                  W(e, H),
                  U(e, p, T(e, t.data_poster)),
                  U(e, d, T(e, t.data_src)),
                  e.load();
              },
              OBJECT: function (e, t) {
                W(e, V), U(e, h, T(e, t.data_src));
              },
            },
            Q = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
            Z = function (e, t) {
              !t ||
                (function (e) {
                  return e.loadingCount > 0;
                })(t) ||
                (function (e) {
                  return e.toLoadCount > 0;
                })(t) ||
                $(e.callback_finish, t);
            },
            ee = function (e, t, s) {
              e.addEventListener(t, s), (e.llEvLisnrs[t] = s);
            },
            te = function (e, t, s) {
              e.removeEventListener(t, s);
            },
            se = function (e) {
              return !!e.llEvLisnrs;
            },
            ne = function (e) {
              if (se(e)) {
                var t = e.llEvLisnrs;
                for (var s in t) {
                  var n = t[s];
                  te(e, s, n);
                }
                delete e.llEvLisnrs;
              }
            },
            ie = function (e, t, s) {
              !(function (e) {
                delete e.llTempImage;
              })(e),
                I(s, -1),
                (function (e) {
                  e && (e.toLoadCount -= 1);
                })(s),
                P(e, t.class_loading),
                t.unobserve_completed && O(e, s);
            },
            re = function (e, t, s) {
              var n = A(e) || e;
              se(n) ||
                (function (e, t, s) {
                  se(e) || (e.llEvLisnrs = {});
                  var n = "VIDEO" === e.tagName ? "loadeddata" : "load";
                  ee(e, n, t), ee(e, "error", s);
                })(
                  n,
                  function (i) {
                    !(function (e, t, s, n) {
                      var i = M(t);
                      ie(t, s, n),
                        _(t, s.class_loaded),
                        S(t, g),
                        $(s.callback_loaded, t, n),
                        i || Z(s, n);
                    })(0, e, t, s),
                      ne(n);
                  },
                  function (i) {
                    !(function (e, t, s, n) {
                      var i = M(t);
                      ie(t, s, n),
                        _(t, s.class_error),
                        S(t, w),
                        $(s.callback_error, t, n),
                        i || Z(s, n);
                    })(0, e, t, s),
                      ne(n);
                  }
                );
            },
            ae = function (e, t, s) {
              !(function (e) {
                e.llTempImage = document.createElement("IMG");
              })(e),
                re(e, t, s),
                (function (e) {
                  F(e) || (e[f] = { backgroundImage: e.style.backgroundImage });
                })(e),
                (function (e, t, s) {
                  var n = T(e, t.data_bg),
                    i = T(e, t.data_bg_hidpi),
                    a = r && i ? i : n;
                  a &&
                    ((e.style.backgroundImage = 'url("'.concat(a, '")')),
                    A(e).setAttribute(d, a),
                    Y(e, t, s));
                })(e, t, s),
                (function (e, t, s) {
                  var n = T(e, t.data_bg_multi),
                    i = T(e, t.data_bg_multi_hidpi),
                    a = r && i ? i : n;
                  a &&
                    ((e.style.backgroundImage = a),
                    (function (e, t, s) {
                      _(e, t.class_applied),
                        S(e, v),
                        s &&
                          (t.unobserve_completed && O(e, t),
                          $(t.callback_applied, e, s));
                    })(e, t, s));
                })(e, t, s);
            },
            le = function (e, t, s) {
              !(function (e) {
                return Q.indexOf(e.tagName) > -1;
              })(e)
                ? ae(e, t, s)
                : (function (e, t, s) {
                    re(e, t, s),
                      (function (e, t, s) {
                        var n = J[e.tagName];
                        n && (n(e, t), Y(e, t, s));
                      })(e, t, s);
                  })(e, t, s);
            },
            oe = function (e) {
              e.removeAttribute(d), e.removeAttribute(c), e.removeAttribute(u);
            },
            de = function (e) {
              G(e, function (e) {
                X(e, q);
              }),
                X(e, q);
            },
            ce = {
              IMG: de,
              IFRAME: function (e) {
                X(e, D);
              },
              VIDEO: function (e) {
                B(e, function (e) {
                  X(e, D);
                }),
                  X(e, H),
                  e.load();
              },
              OBJECT: function (e) {
                X(e, V);
              },
            },
            ue = function (e, t) {
              (function (e) {
                var t = ce[e.tagName];
                t
                  ? t(e)
                  : (function (e) {
                      if (F(e)) {
                        var t = j(e);
                        e.style.backgroundImage = t.backgroundImage;
                      }
                    })(e);
              })(e),
                (function (e, t) {
                  k(e) ||
                    M(e) ||
                    (P(e, t.class_entered),
                    P(e, t.class_exited),
                    P(e, t.class_applied),
                    P(e, t.class_loading),
                    P(e, t.class_loaded),
                    P(e, t.class_error));
                })(e, t),
                x(e),
                R(e);
            },
            pe = ["IMG", "IFRAME", "VIDEO"],
            fe = function (e) {
              return e.use_native && "loading" in HTMLImageElement.prototype;
            },
            he = function (e, t, s) {
              e.forEach(function (e) {
                return (function (e) {
                  return e.isIntersecting || e.intersectionRatio > 0;
                })(e)
                  ? (function (e, t, s, n) {
                      var i = (function (e) {
                        return L.indexOf(y(e)) >= 0;
                      })(e);
                      S(e, "entered"),
                        _(e, s.class_entered),
                        P(e, s.class_exited),
                        (function (e, t, s) {
                          t.unobserve_entered && O(e, s);
                        })(e, s, n),
                        $(s.callback_enter, e, t, n),
                        i || le(e, s, n);
                    })(e.target, e, t, s)
                  : (function (e, t, s, n) {
                      k(e) ||
                        (_(e, s.class_exited),
                        (function (e, t, s, n) {
                          s.cancel_on_exit &&
                            (function (e) {
                              return y(e) === m;
                            })(e) &&
                            "IMG" === e.tagName &&
                            (ne(e),
                            (function (e) {
                              G(e, function (e) {
                                oe(e);
                              }),
                                oe(e);
                            })(e),
                            de(e),
                            P(e, s.class_loading),
                            I(n, -1),
                            x(e),
                            $(s.callback_cancel, e, t, n));
                        })(e, t, s, n),
                        $(s.callback_exit, e, t, n));
                    })(e.target, e, t, s);
              });
            },
            me = function (e) {
              return Array.prototype.slice.call(e);
            },
            ge = function (e) {
              return e.container.querySelectorAll(e.elements_selector);
            },
            ve = function (e) {
              return (function (e) {
                return y(e) === w;
              })(e);
            },
            we = function (e, t) {
              return (function (e) {
                return me(e).filter(k);
              })(e || ge(t));
            },
            be = function (e, s) {
              var i = l(e);
              (this._settings = i),
                (this.loadingCount = 0),
                (function (e, t) {
                  n &&
                    !fe(e) &&
                    (t._observer = new IntersectionObserver(
                      function (s) {
                        he(s, e, t);
                      },
                      (function (e) {
                        return {
                          root: e.container === document ? null : e.container,
                          rootMargin: e.thresholds || e.threshold + "px",
                        };
                      })(e)
                    ));
                })(i, this),
                (function (e, s) {
                  t &&
                    window.addEventListener("online", function () {
                      !(function (e, t) {
                        var s;
                        ((s = ge(e)), me(s).filter(ve)).forEach(function (t) {
                          P(t, e.class_error), x(t);
                        }),
                          t.update();
                      })(e, s);
                    });
                })(i, this),
                this.update(s);
            };
          return (
            (be.prototype = {
              update: function (e) {
                var t,
                  i,
                  r = this._settings,
                  a = we(e, r);
                z(this, a.length),
                  !s && n
                    ? fe(r)
                      ? (function (e, t, s) {
                          e.forEach(function (e) {
                            -1 !== pe.indexOf(e.tagName) &&
                              (function (e, t, s) {
                                e.setAttribute("loading", "lazy"),
                                  re(e, t, s),
                                  (function (e, t) {
                                    var s = J[e.tagName];
                                    s && s(e, t);
                                  })(e, t),
                                  S(e, b);
                              })(e, t, s);
                          }),
                            z(s, 0);
                        })(a, r, this)
                      : ((i = a),
                        (function (e) {
                          e.disconnect();
                        })((t = this._observer)),
                        (function (e, t) {
                          t.forEach(function (t) {
                            e.observe(t);
                          });
                        })(t, i))
                    : this.loadAll(a);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  ge(this._settings).forEach(function (e) {
                    R(e);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (e) {
                var t = this,
                  s = this._settings;
                we(e, s).forEach(function (e) {
                  O(e, t), le(e, s, t);
                });
              },
              restoreAll: function () {
                var e = this._settings;
                ge(e).forEach(function (t) {
                  ue(t, e);
                });
              },
            }),
            (be.load = function (e, t) {
              var s = l(t);
              le(e, s);
            }),
            (be.resetStatus = function (e) {
              x(e);
            }),
            t &&
              (function (e, t) {
                if (t)
                  if (t.length) for (var s, n = 0; (s = t[n]); n += 1) o(e, s);
                  else o(e, t);
              })(be, window.lazyLoadOptions),
            be
          );
        })();
      },
    },
    t = {};
  function s(n) {
    var i = t[n];
    if (void 0 !== i) return i.exports;
    var r = (t[n] = { exports: {} });
    return e[n].call(r.exports, r, r.exports, s), r.exports;
  }
  (() => {
    "use strict";
    let e = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return (
          e.Android() || e.BlackBerry() || e.iOS() || e.Opera() || e.Windows()
        );
      },
    };
    let t = !0,
      n = (e = 500) => {
        let s = document.querySelector("body");
        if (t) {
          let n = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < n.length; e++) {
              n[e].style.paddingRight = "0px";
            }
            (s.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (t = !1),
            setTimeout(function () {
              t = !0;
            }, e);
        }
      },
      i = (e = 500) => {
        let s = document.querySelector("body");
        if (t) {
          let n = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < n.length; e++) {
            n[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (s.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (t = !1),
            setTimeout(function () {
              t = !0;
            }, e);
        }
      };
    const r = { inputMaskModule: null, selectModule: null };
    let a = {
      getErrors(e) {
        let t = 0,
          s = e.querySelectorAll("*[data-required]");
        return (
          s.length &&
            s.forEach((e) => {
              (null === e.offsetParent && "SELECT" !== e.tagName) ||
                e.disabled ||
                (t += this.validateInput(e));
            }),
          t
        );
      },
      validateInput(e) {
        let t = 0;
        return (
          "email" === e.dataset.required
            ? ((e.value = e.value.replace(" ", "")),
              this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
            : ("checkbox" !== e.type || e.checked) && e.value
            ? this.removeError(e)
            : (this.addError(e), t++),
          t
        );
      },
      addError(e) {
        e.classList.add("_form-error"),
          e.parentElement.classList.add("_form-error");
        let t = e.parentElement.querySelector(".form__error");
        t && e.parentElement.removeChild(t),
          e.dataset.error &&
            e.parentElement.insertAdjacentHTML(
              "beforeend",
              `<div class="form__error">${e.dataset.error}</div>`
            );
      },
      removeError(e) {
        e.classList.remove("_form-error"),
          e.parentElement.classList.remove("_form-error"),
          e.parentElement.querySelector(".form__error") &&
            e.parentElement.removeChild(
              e.parentElement.querySelector(".form__error")
            );
      },
      formClean(e) {
        e.reset(),
          setTimeout(() => {
            let t = e.querySelectorAll("input,textarea");
            for (let e = 0; e < t.length; e++) {
              const s = t[e];
              s.parentElement.classList.remove("_form-focus"),
                s.classList.remove("_form-focus"),
                a.removeError(s),
                (s.value = s.dataset.placeholder);
            }
            let s = e.querySelectorAll(".checkbox__input");
            if (s.length > 0)
              for (let e = 0; e < s.length; e++) {
                s[e].checked = !1;
              }
            if (r.selectModule) {
              let t = e.querySelectorAll(".select");
              if (t.length)
                for (let e = 0; e < t.length; e++) {
                  const s = t[e].querySelector("select");
                  r.selectModule.selectBuild(s);
                }
            }
          }, 0);
      },
      emailTest: (e) =>
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
    };
    function l(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function o(e = {}, t = {}) {
      Object.keys(t).forEach((s) => {
        void 0 === e[s]
          ? (e[s] = t[s])
          : l(t[s]) && l(e[s]) && Object.keys(t[s]).length > 0 && o(e[s], t[s]);
      });
    }
    const d = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function c() {
      const e = "undefined" != typeof document ? document : {};
      return o(e, d), e;
    }
    const u = {
      document: d,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function p() {
      const e = "undefined" != typeof window ? window : {};
      return o(e, u), e;
    }
    class f extends Array {
      constructor(e) {
        "number" == typeof e
          ? super(e)
          : (super(...(e || [])),
            (function (e) {
              const t = e.__proto__;
              Object.defineProperty(e, "__proto__", {
                get: () => t,
                set(e) {
                  t.__proto__ = e;
                },
              });
            })(this));
      }
    }
    function h(e = []) {
      const t = [];
      return (
        e.forEach((e) => {
          Array.isArray(e) ? t.push(...h(e)) : t.push(e);
        }),
        t
      );
    }
    function m(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function g(e, t) {
      const s = p(),
        n = c();
      let i = [];
      if (!t && e instanceof f) return e;
      if (!e) return new f(i);
      if ("string" == typeof e) {
        const s = e.trim();
        if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
          let e = "div";
          0 === s.indexOf("<li") && (e = "ul"),
            0 === s.indexOf("<tr") && (e = "tbody"),
            (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) || (e = "tr"),
            0 === s.indexOf("<tbody") && (e = "table"),
            0 === s.indexOf("<option") && (e = "select");
          const t = n.createElement(e);
          t.innerHTML = s;
          for (let e = 0; e < t.childNodes.length; e += 1)
            i.push(t.childNodes[e]);
        } else
          i = (function (e, t) {
            if ("string" != typeof e) return [e];
            const s = [],
              n = t.querySelectorAll(e);
            for (let e = 0; e < n.length; e += 1) s.push(n[e]);
            return s;
          })(e.trim(), t || n);
      } else if (e.nodeType || e === s || e === n) i.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof f) return e;
        i = e;
      }
      return new f(
        (function (e) {
          const t = [];
          for (let s = 0; s < e.length; s += 1)
            -1 === t.indexOf(e[s]) && t.push(e[s]);
          return t;
        })(i)
      );
    }
    g.fn = f.prototype;
    const v = "resize scroll".split(" ");
    function w(e) {
      return function (...t) {
        if (void 0 === t[0]) {
          for (let t = 0; t < this.length; t += 1)
            v.indexOf(e) < 0 &&
              (e in this[t] ? this[t][e]() : g(this[t]).trigger(e));
          return this;
        }
        return this.on(e, ...t);
      };
    }
    w("click"),
      w("blur"),
      w("focus"),
      w("focusin"),
      w("focusout"),
      w("keyup"),
      w("keydown"),
      w("keypress"),
      w("submit"),
      w("change"),
      w("mousedown"),
      w("mousemove"),
      w("mouseup"),
      w("mouseenter"),
      w("mouseleave"),
      w("mouseout"),
      w("mouseover"),
      w("touchstart"),
      w("touchend"),
      w("touchmove"),
      w("resize"),
      w("scroll");
    const b = {
      addClass: function (...e) {
        const t = h(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...t);
          }),
          this
        );
      },
      removeClass: function (...e) {
        const t = h(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...t);
          }),
          this
        );
      },
      hasClass: function (...e) {
        const t = h(e.map((e) => e.split(" ")));
        return (
          m(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
            .length > 0
        );
      },
      toggleClass: function (...e) {
        const t = h(e.map((e) => e.split(" ")));
        this.forEach((e) => {
          t.forEach((t) => {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (let s = 0; s < this.length; s += 1)
          if (2 === arguments.length) this[s].setAttribute(e, t);
          else
            for (const t in e)
              (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
        return this;
      },
      removeAttr: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (let t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration =
            "string" != typeof e ? `${e}ms` : e;
        return this;
      },
      on: function (...e) {
        let [t, s, n, i] = e;
        function r(e) {
          const t = e.target;
          if (!t) return;
          const i = e.target.dom7EventData || [];
          if ((i.indexOf(e) < 0 && i.unshift(e), g(t).is(s))) n.apply(t, i);
          else {
            const e = g(t).parents();
            for (let t = 0; t < e.length; t += 1)
              g(e[t]).is(s) && n.apply(e[t], i);
          }
        }
        function a(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
        }
        "function" == typeof e[1] && (([t, n, i] = e), (s = void 0)),
          i || (i = !1);
        const l = t.split(" ");
        let o;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (s)
            for (o = 0; o < l.length; o += 1) {
              const e = l[o];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: n, proxyListener: r }),
                t.addEventListener(e, r, i);
            }
          else
            for (o = 0; o < l.length; o += 1) {
              const e = l[o];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: n, proxyListener: a }),
                t.addEventListener(e, a, i);
            }
        }
        return this;
      },
      off: function (...e) {
        let [t, s, n, i] = e;
        "function" == typeof e[1] && (([t, n, i] = e), (s = void 0)),
          i || (i = !1);
        const r = t.split(" ");
        for (let e = 0; e < r.length; e += 1) {
          const t = r[e];
          for (let e = 0; e < this.length; e += 1) {
            const r = this[e];
            let a;
            if (
              (!s && r.dom7Listeners
                ? (a = r.dom7Listeners[t])
                : s && r.dom7LiveListeners && (a = r.dom7LiveListeners[t]),
              a && a.length)
            )
              for (let e = a.length - 1; e >= 0; e -= 1) {
                const s = a[e];
                (n && s.listener === n) ||
                (n &&
                  s.listener &&
                  s.listener.dom7proxy &&
                  s.listener.dom7proxy === n)
                  ? (r.removeEventListener(t, s.proxyListener, i),
                    a.splice(e, 1))
                  : n ||
                    (r.removeEventListener(t, s.proxyListener, i),
                    a.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function (...e) {
        const t = p(),
          s = e[0].split(" "),
          n = e[1];
        for (let i = 0; i < s.length; i += 1) {
          const r = s[i];
          for (let s = 0; s < this.length; s += 1) {
            const i = this[s];
            if (t.CustomEvent) {
              const s = new t.CustomEvent(r, {
                detail: n,
                bubbles: !0,
                cancelable: !0,
              });
              (i.dom7EventData = e.filter((e, t) => t > 0)),
                i.dispatchEvent(s),
                (i.dom7EventData = []),
                delete i.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (e) {
        const t = this;
        return (
          e &&
            t.on("transitionend", function s(n) {
              n.target === this && (e.call(this, n), t.off("transitionend", s));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        const e = p();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const e = p(),
            t = c(),
            s = this[0],
            n = s.getBoundingClientRect(),
            i = t.body,
            r = s.clientTop || i.clientTop || 0,
            a = s.clientLeft || i.clientLeft || 0,
            l = s === e ? e.scrollY : s.scrollTop,
            o = s === e ? e.scrollX : s.scrollLeft;
          return { top: n.top + l - r, left: n.left + o - a };
        }
        return null;
      },
      css: function (e, t) {
        const s = p();
        let n;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (n = 0; n < this.length; n += 1)
              for (const t in e) this[n].style[t] = e[t];
            return this;
          }
          if (this[0])
            return s.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach((t, s) => {
              e.apply(t, [t, s]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        const t = p(),
          s = c(),
          n = this[0];
        let i, r;
        if (!n || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (n.matches) return n.matches(e);
          if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
          if (n.msMatchesSelector) return n.msMatchesSelector(e);
          for (i = g(e), r = 0; r < i.length; r += 1) if (i[r] === n) return !0;
          return !1;
        }
        if (e === s) return n === s;
        if (e === t) return n === t;
        if (e.nodeType || e instanceof f) {
          for (i = e.nodeType ? [e] : e, r = 0; r < i.length; r += 1)
            if (i[r] === n) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        let e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        const t = this.length;
        if (e > t - 1) return g([]);
        if (e < 0) {
          const s = t + e;
          return g(s < 0 ? [] : [this[s]]);
        }
        return g([this[e]]);
      },
      append: function (...e) {
        let t;
        const s = c();
        for (let n = 0; n < e.length; n += 1) {
          t = e[n];
          for (let e = 0; e < this.length; e += 1)
            if ("string" == typeof t) {
              const n = s.createElement("div");
              for (n.innerHTML = t; n.firstChild; )
                this[e].appendChild(n.firstChild);
            } else if (t instanceof f)
              for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
            else this[e].appendChild(t);
        }
        return this;
      },
      prepend: function (e) {
        const t = c();
        let s, n;
        for (s = 0; s < this.length; s += 1)
          if ("string" == typeof e) {
            const i = t.createElement("div");
            for (i.innerHTML = e, n = i.childNodes.length - 1; n >= 0; n -= 1)
              this[s].insertBefore(i.childNodes[n], this[s].childNodes[0]);
          } else if (e instanceof f)
            for (n = 0; n < e.length; n += 1)
              this[s].insertBefore(e[n], this[s].childNodes[0]);
          else this[s].insertBefore(e, this[s].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && g(this[0].nextElementSibling).is(e)
              ? g([this[0].nextElementSibling])
              : g([])
            : this[0].nextElementSibling
            ? g([this[0].nextElementSibling])
            : g([])
          : g([]);
      },
      nextAll: function (e) {
        const t = [];
        let s = this[0];
        if (!s) return g([]);
        for (; s.nextElementSibling; ) {
          const n = s.nextElementSibling;
          e ? g(n).is(e) && t.push(n) : t.push(n), (s = n);
        }
        return g(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && g(t.previousElementSibling).is(e)
              ? g([t.previousElementSibling])
              : g([])
            : t.previousElementSibling
            ? g([t.previousElementSibling])
            : g([]);
        }
        return g([]);
      },
      prevAll: function (e) {
        const t = [];
        let s = this[0];
        if (!s) return g([]);
        for (; s.previousElementSibling; ) {
          const n = s.previousElementSibling;
          e ? g(n).is(e) && t.push(n) : t.push(n), (s = n);
        }
        return g(t);
      },
      parent: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1)
          null !== this[s].parentNode &&
            (e
              ? g(this[s].parentNode).is(e) && t.push(this[s].parentNode)
              : t.push(this[s].parentNode));
        return g(t);
      },
      parents: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          let n = this[s].parentNode;
          for (; n; )
            e ? g(n).is(e) && t.push(n) : t.push(n), (n = n.parentNode);
        }
        return g(t);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? g([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          const n = this[s].querySelectorAll(e);
          for (let e = 0; e < n.length; e += 1) t.push(n[e]);
        }
        return g(t);
      },
      children: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          const n = this[s].children;
          for (let s = 0; s < n.length; s += 1)
            (e && !g(n[s]).is(e)) || t.push(n[s]);
        }
        return g(t);
      },
      filter: function (e) {
        return g(m(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    Object.keys(b).forEach((e) => {
      Object.defineProperty(g.fn, e, { value: b[e], writable: !0 });
    });
    const C = g;
    function E(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function T() {
      return Date.now();
    }
    function y(e, t) {
      void 0 === t && (t = "x");
      const s = p();
      let n, i, r;
      const a = (function (e) {
        const t = p();
        let s;
        return (
          t.getComputedStyle && (s = t.getComputedStyle(e, null)),
          !s && e.currentStyle && (s = e.currentStyle),
          s || (s = e.style),
          s
        );
      })(e);
      return (
        s.WebKitCSSMatrix
          ? ((i = a.transform || a.webkitTransform),
            i.split(",").length > 6 &&
              (i = i
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (r = new s.WebKitCSSMatrix("none" === i ? "" : i)))
          : ((r =
              a.MozTransform ||
              a.OTransform ||
              a.MsTransform ||
              a.msTransform ||
              a.transform ||
              a
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (n = r.toString().split(","))),
        "x" === t &&
          (i = s.WebKitCSSMatrix
            ? r.m41
            : 16 === n.length
            ? parseFloat(n[12])
            : parseFloat(n[4])),
        "y" === t &&
          (i = s.WebKitCSSMatrix
            ? r.m42
            : 16 === n.length
            ? parseFloat(n[13])
            : parseFloat(n[5])),
        i || 0
      );
    }
    function S(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function x(e) {
      return "undefined" != typeof window && void 0 !== window.HTMLElement
        ? e instanceof HTMLElement
        : e && (1 === e.nodeType || 11 === e.nodeType);
    }
    function k() {
      const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"];
      for (let s = 1; s < arguments.length; s += 1) {
        const n = s < 0 || arguments.length <= s ? void 0 : arguments[s];
        if (null != n && !x(n)) {
          const s = Object.keys(Object(n)).filter((e) => t.indexOf(e) < 0);
          for (let t = 0, i = s.length; t < i; t += 1) {
            const i = s[t],
              r = Object.getOwnPropertyDescriptor(n, i);
            void 0 !== r &&
              r.enumerable &&
              (S(e[i]) && S(n[i])
                ? n[i].__swiper__
                  ? (e[i] = n[i])
                  : k(e[i], n[i])
                : !S(e[i]) && S(n[i])
                ? ((e[i] = {}), n[i].__swiper__ ? (e[i] = n[i]) : k(e[i], n[i]))
                : (e[i] = n[i]));
          }
        }
      }
      return e;
    }
    function M(e, t, s) {
      e.style.setProperty(t, s);
    }
    function L(e) {
      let { swiper: t, targetPosition: s, side: n } = e;
      const i = p(),
        r = -t.translate;
      let a,
        l = null;
      const o = t.params.speed;
      (t.wrapperEl.style.scrollSnapType = "none"),
        i.cancelAnimationFrame(t.cssModeFrameID);
      const d = s > r ? "next" : "prev",
        c = (e, t) => ("next" === d && e >= t) || ("prev" === d && e <= t),
        u = () => {
          (a = new Date().getTime()), null === l && (l = a);
          const e = Math.max(Math.min((a - l) / o, 1), 0),
            d = 0.5 - Math.cos(e * Math.PI) / 2;
          let p = r + d * (s - r);
          if ((c(p, s) && (p = s), t.wrapperEl.scrollTo({ [n]: p }), c(p, s)))
            return (
              (t.wrapperEl.style.overflow = "hidden"),
              (t.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (t.wrapperEl.style.overflow = ""),
                  t.wrapperEl.scrollTo({ [n]: p });
              }),
              void i.cancelAnimationFrame(t.cssModeFrameID)
            );
          t.cssModeFrameID = i.requestAnimationFrame(u);
        };
      u();
    }
    let $, _, P;
    function A() {
      return (
        $ ||
          ($ = (function () {
            const e = p(),
              t = c();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
              passiveListener: (function () {
                let t = !1;
                try {
                  const s = Object.defineProperty({}, "passive", {
                    get() {
                      t = !0;
                    },
                  });
                  e.addEventListener("testPassiveListener", null, s);
                } catch (e) {}
                return t;
              })(),
              gestures: "ongesturestart" in e,
            };
          })()),
        $
      );
    }
    function O(e) {
      return (
        void 0 === e && (e = {}),
        _ ||
          (_ = (function (e) {
            let { userAgent: t } = void 0 === e ? {} : e;
            const s = A(),
              n = p(),
              i = n.navigator.platform,
              r = t || n.navigator.userAgent,
              a = { ios: !1, android: !1 },
              l = n.screen.width,
              o = n.screen.height,
              d = r.match(/(Android);?[\s\/]+([\d.]+)?/);
            let c = r.match(/(iPad).*OS\s([\d_]+)/);
            const u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
              f = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              h = "Win32" === i;
            let m = "MacIntel" === i;
            return (
              !c &&
                m &&
                s.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${l}x${o}`) >= 0 &&
                ((c = r.match(/(Version)\/([\d.]+)/)),
                c || (c = [0, 1, "13_0_0"]),
                (m = !1)),
              d && !h && ((a.os = "android"), (a.android = !0)),
              (c || f || u) && ((a.os = "ios"), (a.ios = !0)),
              a
            );
          })(e)),
        _
      );
    }
    function I() {
      return (
        P ||
          (P = (function () {
            const e = p();
            return {
              isSafari: (function () {
                const t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf("safari") >= 0 &&
                  t.indexOf("chrome") < 0 &&
                  t.indexOf("android") < 0
                );
              })(),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent
              ),
            };
          })()),
        P
      );
    }
    const z = {
      on(e, t, s) {
        const n = this;
        if ("function" != typeof t) return n;
        const i = s ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            n.eventsListeners[e] || (n.eventsListeners[e] = []),
              n.eventsListeners[e][i](t);
          }),
          n
        );
      },
      once(e, t, s) {
        const n = this;
        if ("function" != typeof t) return n;
        function i() {
          n.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
          for (var s = arguments.length, r = new Array(s), a = 0; a < s; a++)
            r[a] = arguments[a];
          t.apply(n, r);
        }
        return (i.__emitterProxy = t), n.on(e, i, s);
      },
      onAny(e, t) {
        const s = this;
        if ("function" != typeof e) return s;
        const n = t ? "unshift" : "push";
        return (
          s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[n](e), s
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsAnyListeners) return t;
        const s = t.eventsAnyListeners.indexOf(e);
        return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
      },
      off(e, t) {
        const s = this;
        return s.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (s.eventsListeners[e] = [])
                : s.eventsListeners[e] &&
                  s.eventsListeners[e].forEach((n, i) => {
                    (n === t || (n.__emitterProxy && n.__emitterProxy === t)) &&
                      s.eventsListeners[e].splice(i, 1);
                  });
            }),
            s)
          : s;
      },
      emit() {
        const e = this;
        if (!e.eventsListeners) return e;
        let t, s, n;
        for (var i = arguments.length, r = new Array(i), a = 0; a < i; a++)
          r[a] = arguments[a];
        "string" == typeof r[0] || Array.isArray(r[0])
          ? ((t = r[0]), (s = r.slice(1, r.length)), (n = e))
          : ((t = r[0].events), (s = r[0].data), (n = r[0].context || e)),
          s.unshift(n);
        return (
          (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
            e.eventsAnyListeners &&
              e.eventsAnyListeners.length &&
              e.eventsAnyListeners.forEach((e) => {
                e.apply(n, [t, ...s]);
              }),
              e.eventsListeners &&
                e.eventsListeners[t] &&
                e.eventsListeners[t].forEach((e) => {
                  e.apply(n, s);
                });
          }),
          e
        );
      },
    };
    const N = {
      updateSize: function () {
        const e = this;
        let t, s;
        const n = e.$el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : n[0].clientWidth),
          (s =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : n[0].clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === s && e.isVertical()) ||
            ((t =
              t -
              parseInt(n.css("padding-left") || 0, 10) -
              parseInt(n.css("padding-right") || 0, 10)),
            (s =
              s -
              parseInt(n.css("padding-top") || 0, 10) -
              parseInt(n.css("padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(s) && (s = 0),
            Object.assign(e, {
              width: t,
              height: s,
              size: e.isHorizontal() ? t : s,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[t];
        }
        function s(e, s) {
          return parseFloat(e.getPropertyValue(t(s)) || 0);
        }
        const n = e.params,
          { $wrapperEl: i, size: r, rtlTranslate: a, wrongRTL: l } = e,
          o = e.virtual && n.virtual.enabled,
          d = o ? e.virtual.slides.length : e.slides.length,
          c = i.children(`.${e.params.slideClass}`),
          u = o ? e.virtual.slides.length : c.length;
        let p = [];
        const f = [],
          h = [];
        let m = n.slidesOffsetBefore;
        "function" == typeof m && (m = n.slidesOffsetBefore.call(e));
        let g = n.slidesOffsetAfter;
        "function" == typeof g && (g = n.slidesOffsetAfter.call(e));
        const v = e.snapGrid.length,
          w = e.slidesGrid.length;
        let b = n.spaceBetween,
          C = -m,
          E = 0,
          T = 0;
        if (void 0 === r) return;
        "string" == typeof b &&
          b.indexOf("%") >= 0 &&
          (b = (parseFloat(b.replace("%", "")) / 100) * r),
          (e.virtualSize = -b),
          a
            ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
            : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
          n.centeredSlides &&
            n.cssMode &&
            (M(e.wrapperEl, "--swiper-centered-offset-before", ""),
            M(e.wrapperEl, "--swiper-centered-offset-after", ""));
        const y = n.grid && n.grid.rows > 1 && e.grid;
        let S;
        y && e.grid.initSlides(u);
        const x =
          "auto" === n.slidesPerView &&
          n.breakpoints &&
          Object.keys(n.breakpoints).filter(
            (e) => void 0 !== n.breakpoints[e].slidesPerView
          ).length > 0;
        for (let i = 0; i < u; i += 1) {
          S = 0;
          const a = c.eq(i);
          if (
            (y && e.grid.updateSlide(i, a, u, t), "none" !== a.css("display"))
          ) {
            if ("auto" === n.slidesPerView) {
              x && (c[i].style[t("width")] = "");
              const r = getComputedStyle(a[0]),
                l = a[0].style.transform,
                o = a[0].style.webkitTransform;
              if (
                (l && (a[0].style.transform = "none"),
                o && (a[0].style.webkitTransform = "none"),
                n.roundLengths)
              )
                S = e.isHorizontal() ? a.outerWidth(!0) : a.outerHeight(!0);
              else {
                const e = s(r, "width"),
                  t = s(r, "padding-left"),
                  n = s(r, "padding-right"),
                  i = s(r, "margin-left"),
                  l = s(r, "margin-right"),
                  o = r.getPropertyValue("box-sizing");
                if (o && "border-box" === o) S = e + i + l;
                else {
                  const { clientWidth: s, offsetWidth: r } = a[0];
                  S = e + t + n + i + l + (r - s);
                }
              }
              l && (a[0].style.transform = l),
                o && (a[0].style.webkitTransform = o),
                n.roundLengths && (S = Math.floor(S));
            } else
              (S = (r - (n.slidesPerView - 1) * b) / n.slidesPerView),
                n.roundLengths && (S = Math.floor(S)),
                c[i] && (c[i].style[t("width")] = `${S}px`);
            c[i] && (c[i].swiperSlideSize = S),
              h.push(S),
              n.centeredSlides
                ? ((C = C + S / 2 + E / 2 + b),
                  0 === E && 0 !== i && (C = C - r / 2 - b),
                  0 === i && (C = C - r / 2 - b),
                  Math.abs(C) < 0.001 && (C = 0),
                  n.roundLengths && (C = Math.floor(C)),
                  T % n.slidesPerGroup == 0 && p.push(C),
                  f.push(C))
                : (n.roundLengths && (C = Math.floor(C)),
                  (T - Math.min(e.params.slidesPerGroupSkip, T)) %
                    e.params.slidesPerGroup ==
                    0 && p.push(C),
                  f.push(C),
                  (C = C + S + b)),
              (e.virtualSize += S + b),
              (E = S),
              (T += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, r) + g),
          a &&
            l &&
            ("slide" === n.effect || "coverflow" === n.effect) &&
            i.css({ width: `${e.virtualSize + n.spaceBetween}px` }),
          n.setWrapperSize &&
            i.css({ [t("width")]: `${e.virtualSize + n.spaceBetween}px` }),
          y && e.grid.updateWrapperSize(S, p, t),
          !n.centeredSlides)
        ) {
          const t = [];
          for (let s = 0; s < p.length; s += 1) {
            let i = p[s];
            n.roundLengths && (i = Math.floor(i)),
              p[s] <= e.virtualSize - r && t.push(i);
          }
          (p = t),
            Math.floor(e.virtualSize - r) - Math.floor(p[p.length - 1]) > 1 &&
              p.push(e.virtualSize - r);
        }
        if ((0 === p.length && (p = [0]), 0 !== n.spaceBetween)) {
          const s = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
          c.filter((e, t) => !n.cssMode || t !== c.length - 1).css({
            [s]: `${b}px`,
          });
        }
        if (n.centeredSlides && n.centeredSlidesBounds) {
          let e = 0;
          h.forEach((t) => {
            e += t + (n.spaceBetween ? n.spaceBetween : 0);
          }),
            (e -= n.spaceBetween);
          const t = e - r;
          p = p.map((e) => (e < 0 ? -m : e > t ? t + g : e));
        }
        if (n.centerInsufficientSlides) {
          let e = 0;
          if (
            (h.forEach((t) => {
              e += t + (n.spaceBetween ? n.spaceBetween : 0);
            }),
            (e -= n.spaceBetween),
            e < r)
          ) {
            const t = (r - e) / 2;
            p.forEach((e, s) => {
              p[s] = e - t;
            }),
              f.forEach((e, s) => {
                f[s] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: c,
            snapGrid: p,
            slidesGrid: f,
            slidesSizesGrid: h,
          }),
          n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
        ) {
          M(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
            M(
              e.wrapperEl,
              "--swiper-centered-offset-after",
              e.size / 2 - h[h.length - 1] / 2 + "px"
            );
          const t = -e.snapGrid[0],
            s = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + s));
        }
        if (
          (u !== d && e.emit("slidesLengthChange"),
          p.length !== v &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          f.length !== w && e.emit("slidesGridLengthChange"),
          n.watchSlidesProgress && e.updateSlidesOffset(),
          !(o || n.cssMode || ("slide" !== n.effect && "fade" !== n.effect)))
        ) {
          const t = `${n.containerModifierClass}backface-hidden`,
            s = e.$el.hasClass(t);
          u <= n.maxBackfaceHiddenSlides
            ? s || e.$el.addClass(t)
            : s && e.$el.removeClass(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          s = [],
          n = t.virtual && t.params.virtual.enabled;
        let i,
          r = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const a = (e) =>
          n
            ? t.slides.filter(
                (t) =>
                  parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
              )[0]
            : t.slides.eq(e)[0];
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            t.visibleSlides.each((e) => {
              s.push(e);
            });
          else
            for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
              const e = t.activeIndex + i;
              if (e > t.slides.length && !n) break;
              s.push(a(e));
            }
        else s.push(a(t.activeIndex));
        for (i = 0; i < s.length; i += 1)
          if (void 0 !== s[i]) {
            const e = s[i].offsetHeight;
            r = e > r ? e : r;
          }
        (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides;
        for (let s = 0; s < t.length; s += 1)
          t[s].swiperSlideOffset = e.isHorizontal()
            ? t[s].offsetLeft
            : t[s].offsetTop;
      },
      updateSlidesProgress: function (e) {
        void 0 === e && (e = (this && this.translate) || 0);
        const t = this,
          s = t.params,
          { slides: n, rtlTranslate: i, snapGrid: r } = t;
        if (0 === n.length) return;
        void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
        let a = -e;
        i && (a = e),
          n.removeClass(s.slideVisibleClass),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (let e = 0; e < n.length; e += 1) {
          const l = n[e];
          let o = l.swiperSlideOffset;
          s.cssMode && s.centeredSlides && (o -= n[0].swiperSlideOffset);
          const d =
              (a + (s.centeredSlides ? t.minTranslate() : 0) - o) /
              (l.swiperSlideSize + s.spaceBetween),
            c =
              (a - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) /
              (l.swiperSlideSize + s.spaceBetween),
            u = -(a - o),
            p = u + t.slidesSizesGrid[e];
          ((u >= 0 && u < t.size - 1) ||
            (p > 1 && p <= t.size) ||
            (u <= 0 && p >= t.size)) &&
            (t.visibleSlides.push(l),
            t.visibleSlidesIndexes.push(e),
            n.eq(e).addClass(s.slideVisibleClass)),
            (l.progress = i ? -d : d),
            (l.originalProgress = i ? -c : c);
        }
        t.visibleSlides = C(t.visibleSlides);
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const s = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * s) || 0;
        }
        const s = t.params,
          n = t.maxTranslate() - t.minTranslate();
        let { progress: i, isBeginning: r, isEnd: a } = t;
        const l = r,
          o = a;
        0 === n
          ? ((i = 0), (r = !0), (a = !0))
          : ((i = (e - t.minTranslate()) / n), (r = i <= 0), (a = i >= 1)),
          Object.assign(t, { progress: i, isBeginning: r, isEnd: a }),
          (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
            t.updateSlidesProgress(e),
          r && !l && t.emit("reachBeginning toEdge"),
          a && !o && t.emit("reachEnd toEdge"),
          ((l && !r) || (o && !a)) && t.emit("fromEdge"),
          t.emit("progress", i);
      },
      updateSlidesClasses: function () {
        const e = this,
          {
            slides: t,
            params: s,
            $wrapperEl: n,
            activeIndex: i,
            realIndex: r,
          } = e,
          a = e.virtual && s.virtual.enabled;
        let l;
        t.removeClass(
          `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
        ),
          (l = a
            ? e.$wrapperEl.find(
                `.${s.slideClass}[data-swiper-slide-index="${i}"]`
              )
            : t.eq(i)),
          l.addClass(s.slideActiveClass),
          s.loop &&
            (l.hasClass(s.slideDuplicateClass)
              ? n
                  .children(
                    `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                  )
                  .addClass(s.slideDuplicateActiveClass)
              : n
                  .children(
                    `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                  )
                  .addClass(s.slideDuplicateActiveClass));
        let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
        s.loop &&
          0 === o.length &&
          ((o = t.eq(0)), o.addClass(s.slideNextClass));
        let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
        s.loop &&
          0 === d.length &&
          ((d = t.eq(-1)), d.addClass(s.slidePrevClass)),
          s.loop &&
            (o.hasClass(s.slideDuplicateClass)
              ? n
                  .children(
                    `.${s.slideClass}:not(.${
                      s.slideDuplicateClass
                    })[data-swiper-slide-index="${o.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicateNextClass)
              : n
                  .children(
                    `.${s.slideClass}.${
                      s.slideDuplicateClass
                    }[data-swiper-slide-index="${o.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicateNextClass),
            d.hasClass(s.slideDuplicateClass)
              ? n
                  .children(
                    `.${s.slideClass}:not(.${
                      s.slideDuplicateClass
                    })[data-swiper-slide-index="${d.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicatePrevClass)
              : n
                  .children(
                    `.${s.slideClass}.${
                      s.slideDuplicateClass
                    }[data-swiper-slide-index="${d.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicatePrevClass)),
          e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          s = t.rtlTranslate ? t.translate : -t.translate,
          {
            slidesGrid: n,
            snapGrid: i,
            params: r,
            activeIndex: a,
            realIndex: l,
            snapIndex: o,
          } = t;
        let d,
          c = e;
        if (void 0 === c) {
          for (let e = 0; e < n.length; e += 1)
            void 0 !== n[e + 1]
              ? s >= n[e] && s < n[e + 1] - (n[e + 1] - n[e]) / 2
                ? (c = e)
                : s >= n[e] && s < n[e + 1] && (c = e + 1)
              : s >= n[e] && (c = e);
          r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
        }
        if (i.indexOf(s) >= 0) d = i.indexOf(s);
        else {
          const e = Math.min(r.slidesPerGroupSkip, c);
          d = e + Math.floor((c - e) / r.slidesPerGroup);
        }
        if ((d >= i.length && (d = i.length - 1), c === a))
          return void (
            d !== o && ((t.snapIndex = d), t.emit("snapIndexChange"))
          );
        const u = parseInt(
          t.slides.eq(c).attr("data-swiper-slide-index") || c,
          10
        );
        Object.assign(t, {
          snapIndex: d,
          realIndex: u,
          previousIndex: a,
          activeIndex: c,
        }),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          l !== u && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          s = t.params,
          n = C(e).closest(`.${s.slideClass}`)[0];
        let i,
          r = !1;
        if (n)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === n) {
              (r = !0), (i = e);
              break;
            }
        if (!n || !r)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = n),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                C(n).attr("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = i),
          s.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    const G = {
      getTranslate: function (e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        const {
          params: t,
          rtlTranslate: s,
          translate: n,
          $wrapperEl: i,
        } = this;
        if (t.virtualTranslate) return s ? -n : n;
        if (t.cssMode) return n;
        let r = y(i[0], e);
        return s && (r = -r), r || 0;
      },
      setTranslate: function (e, t) {
        const s = this,
          {
            rtlTranslate: n,
            params: i,
            $wrapperEl: r,
            wrapperEl: a,
            progress: l,
          } = s;
        let o,
          d = 0,
          c = 0;
        s.isHorizontal() ? (d = n ? -e : e) : (c = e),
          i.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
          i.cssMode
            ? (a[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                s.isHorizontal() ? -d : -c)
            : i.virtualTranslate ||
              r.transform(`translate3d(${d}px, ${c}px, 0px)`),
          (s.previousTranslate = s.translate),
          (s.translate = s.isHorizontal() ? d : c);
        const u = s.maxTranslate() - s.minTranslate();
        (o = 0 === u ? 0 : (e - s.minTranslate()) / u),
          o !== l && s.updateProgress(e),
          s.emit("setTranslate", s.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e, t, s, n, i) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0),
          void 0 === n && (n = !0);
        const r = this,
          { params: a, wrapperEl: l } = r;
        if (r.animating && a.preventInteractionOnTransition) return !1;
        const o = r.minTranslate(),
          d = r.maxTranslate();
        let c;
        if (
          ((c = n && e > o ? o : n && e < d ? d : e),
          r.updateProgress(c),
          a.cssMode)
        ) {
          const e = r.isHorizontal();
          if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
          else {
            if (!r.support.smoothScroll)
              return (
                L({ swiper: r, targetPosition: -c, side: e ? "left" : "top" }),
                !0
              );
            l.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (r.setTransition(0),
              r.setTranslate(c),
              s &&
                (r.emit("beforeTransitionStart", t, i),
                r.emit("transitionEnd")))
            : (r.setTransition(t),
              r.setTranslate(c),
              s &&
                (r.emit("beforeTransitionStart", t, i),
                r.emit("transitionStart")),
              r.animating ||
                ((r.animating = !0),
                r.onTranslateToWrapperTransitionEnd ||
                  (r.onTranslateToWrapperTransitionEnd = function (e) {
                    r &&
                      !r.destroyed &&
                      e.target === this &&
                      (r.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      r.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      (r.onTranslateToWrapperTransitionEnd = null),
                      delete r.onTranslateToWrapperTransitionEnd,
                      s && r.emit("transitionEnd"));
                  }),
                r.$wrapperEl[0].addEventListener(
                  "transitionend",
                  r.onTranslateToWrapperTransitionEnd
                ),
                r.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  r.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    };
    function B(e) {
      let { swiper: t, runCallbacks: s, direction: n, step: i } = e;
      const { activeIndex: r, previousIndex: a } = t;
      let l = n;
      if (
        (l || (l = r > a ? "next" : r < a ? "prev" : "reset"),
        t.emit(`transition${i}`),
        s && r !== a)
      ) {
        if ("reset" === l) return void t.emit(`slideResetTransition${i}`);
        t.emit(`slideChangeTransition${i}`),
          "next" === l
            ? t.emit(`slideNextTransition${i}`)
            : t.emit(`slidePrevTransition${i}`);
      }
    }
    const D = {
      slideTo: function (e, t, s, n, i) {
        if (
          (void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0),
          "number" != typeof e && "string" != typeof e)
        )
          throw new Error(
            `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
          );
        if ("string" == typeof e) {
          const t = parseInt(e, 10);
          if (!isFinite(t))
            throw new Error(
              `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
            );
          e = t;
        }
        const r = this;
        let a = e;
        a < 0 && (a = 0);
        const {
          params: l,
          snapGrid: o,
          slidesGrid: d,
          previousIndex: c,
          activeIndex: u,
          rtlTranslate: p,
          wrapperEl: f,
          enabled: h,
        } = r;
        if (
          (r.animating && l.preventInteractionOnTransition) ||
          (!h && !n && !i)
        )
          return !1;
        const m = Math.min(r.params.slidesPerGroupSkip, a);
        let g = m + Math.floor((a - m) / r.params.slidesPerGroup);
        g >= o.length && (g = o.length - 1),
          (u || l.initialSlide || 0) === (c || 0) &&
            s &&
            r.emit("beforeSlideChangeStart");
        const v = -o[g];
        if ((r.updateProgress(v), l.normalizeSlideIndex))
          for (let e = 0; e < d.length; e += 1) {
            const t = -Math.floor(100 * v),
              s = Math.floor(100 * d[e]),
              n = Math.floor(100 * d[e + 1]);
            void 0 !== d[e + 1]
              ? t >= s && t < n - (n - s) / 2
                ? (a = e)
                : t >= s && t < n && (a = e + 1)
              : t >= s && (a = e);
          }
        if (r.initialized && a !== u) {
          if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
            return !1;
          if (
            !r.allowSlidePrev &&
            v > r.translate &&
            v > r.maxTranslate() &&
            (u || 0) !== a
          )
            return !1;
        }
        let w;
        if (
          ((w = a > u ? "next" : a < u ? "prev" : "reset"),
          (p && -v === r.translate) || (!p && v === r.translate))
        )
          return (
            r.updateActiveIndex(a),
            l.autoHeight && r.updateAutoHeight(),
            r.updateSlidesClasses(),
            "slide" !== l.effect && r.setTranslate(v),
            "reset" !== w && (r.transitionStart(s, w), r.transitionEnd(s, w)),
            !1
          );
        if (l.cssMode) {
          const e = r.isHorizontal(),
            s = p ? v : -v;
          if (0 === t) {
            const t = r.virtual && r.params.virtual.enabled;
            t &&
              ((r.wrapperEl.style.scrollSnapType = "none"),
              (r._immediateVirtual = !0)),
              (f[e ? "scrollLeft" : "scrollTop"] = s),
              t &&
                requestAnimationFrame(() => {
                  (r.wrapperEl.style.scrollSnapType = ""),
                    (r._swiperImmediateVirtual = !1);
                });
          } else {
            if (!r.support.smoothScroll)
              return (
                L({ swiper: r, targetPosition: s, side: e ? "left" : "top" }),
                !0
              );
            f.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
          }
          return !0;
        }
        return (
          r.setTransition(t),
          r.setTranslate(v),
          r.updateActiveIndex(a),
          r.updateSlidesClasses(),
          r.emit("beforeTransitionStart", t, n),
          r.transitionStart(s, w),
          0 === t
            ? r.transitionEnd(s, w)
            : r.animating ||
              ((r.animating = !0),
              r.onSlideToWrapperTransitionEnd ||
                (r.onSlideToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    r.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    (r.onSlideToWrapperTransitionEnd = null),
                    delete r.onSlideToWrapperTransitionEnd,
                    r.transitionEnd(s, w));
                }),
              r.$wrapperEl[0].addEventListener(
                "transitionend",
                r.onSlideToWrapperTransitionEnd
              ),
              r.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                r.onSlideToWrapperTransitionEnd
              )),
          !0
        );
      },
      slideToLoop: function (e, t, s, n) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0);
        const i = this;
        let r = e;
        return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, n);
      },
      slideNext: function (e, t, s) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const n = this,
          { animating: i, enabled: r, params: a } = n;
        if (!r) return n;
        let l = a.slidesPerGroup;
        "auto" === a.slidesPerView &&
          1 === a.slidesPerGroup &&
          a.slidesPerGroupAuto &&
          (l = Math.max(n.slidesPerViewDynamic("current", !0), 1));
        const o = n.activeIndex < a.slidesPerGroupSkip ? 1 : l;
        if (a.loop) {
          if (i && a.loopPreventsSlide) return !1;
          n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
        }
        return a.rewind && n.isEnd
          ? n.slideTo(0, e, t, s)
          : n.slideTo(n.activeIndex + o, e, t, s);
      },
      slidePrev: function (e, t, s) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const n = this,
          {
            params: i,
            animating: r,
            snapGrid: a,
            slidesGrid: l,
            rtlTranslate: o,
            enabled: d,
          } = n;
        if (!d) return n;
        if (i.loop) {
          if (r && i.loopPreventsSlide) return !1;
          n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
        }
        function c(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const u = c(o ? n.translate : -n.translate),
          p = a.map((e) => c(e));
        let f = a[p.indexOf(u) - 1];
        if (void 0 === f && i.cssMode) {
          let e;
          a.forEach((t, s) => {
            u >= t && (e = s);
          }),
            void 0 !== e && (f = a[e > 0 ? e - 1 : e]);
        }
        let h = 0;
        if (
          (void 0 !== f &&
            ((h = l.indexOf(f)),
            h < 0 && (h = n.activeIndex - 1),
            "auto" === i.slidesPerView &&
              1 === i.slidesPerGroup &&
              i.slidesPerGroupAuto &&
              ((h = h - n.slidesPerViewDynamic("previous", !0) + 1),
              (h = Math.max(h, 0)))),
          i.rewind && n.isBeginning)
        ) {
          const i =
            n.params.virtual && n.params.virtual.enabled && n.virtual
              ? n.virtual.slides.length - 1
              : n.slides.length - 1;
          return n.slideTo(i, e, t, s);
        }
        return n.slideTo(h, e, t, s);
      },
      slideReset: function (e, t, s) {
        return (
          void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          this.slideTo(this.activeIndex, e, t, s)
        );
      },
      slideToClosest: function (e, t, s, n) {
        void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          void 0 === n && (n = 0.5);
        const i = this;
        let r = i.activeIndex;
        const a = Math.min(i.params.slidesPerGroupSkip, r),
          l = a + Math.floor((r - a) / i.params.slidesPerGroup),
          o = i.rtlTranslate ? i.translate : -i.translate;
        if (o >= i.snapGrid[l]) {
          const e = i.snapGrid[l];
          o - e > (i.snapGrid[l + 1] - e) * n && (r += i.params.slidesPerGroup);
        } else {
          const e = i.snapGrid[l - 1];
          o - e <= (i.snapGrid[l] - e) * n && (r -= i.params.slidesPerGroup);
        }
        return (
          (r = Math.max(r, 0)),
          (r = Math.min(r, i.slidesGrid.length - 1)),
          i.slideTo(r, e, t, s)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, $wrapperEl: s } = e,
          n =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let i,
          r = e.clickedIndex;
        if (t.loop) {
          if (e.animating) return;
          (i = parseInt(C(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
            t.centeredSlides
              ? r < e.loopedSlides - n / 2 ||
                r > e.slides.length - e.loopedSlides + n / 2
                ? (e.loopFix(),
                  (r = s
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  E(() => {
                    e.slideTo(r);
                  }))
                : e.slideTo(r)
              : r > e.slides.length - n
              ? (e.loopFix(),
                (r = s
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                E(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r);
        } else e.slideTo(r);
      },
    };
    const H = {
      loopCreate: function () {
        const e = this,
          t = c(),
          { params: s, $wrapperEl: n } = e,
          i = n.children().length > 0 ? C(n.children()[0].parentNode) : n;
        i.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
        let r = i.children(`.${s.slideClass}`);
        if (s.loopFillGroupWithBlank) {
          const e = s.slidesPerGroup - (r.length % s.slidesPerGroup);
          if (e !== s.slidesPerGroup) {
            for (let n = 0; n < e; n += 1) {
              const e = C(t.createElement("div")).addClass(
                `${s.slideClass} ${s.slideBlankClass}`
              );
              i.append(e);
            }
            r = i.children(`.${s.slideClass}`);
          }
        }
        "auto" !== s.slidesPerView ||
          s.loopedSlides ||
          (s.loopedSlides = r.length),
          (e.loopedSlides = Math.ceil(
            parseFloat(s.loopedSlides || s.slidesPerView, 10)
          )),
          (e.loopedSlides += s.loopAdditionalSlides),
          e.loopedSlides > r.length && (e.loopedSlides = r.length);
        const a = [],
          l = [];
        r.each((t, s) => {
          const n = C(t);
          s < e.loopedSlides && l.push(t),
            s < r.length && s >= r.length - e.loopedSlides && a.push(t),
            n.attr("data-swiper-slide-index", s);
        });
        for (let e = 0; e < l.length; e += 1)
          i.append(C(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
        for (let e = a.length - 1; e >= 0; e -= 1)
          i.prepend(C(a[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
      },
      loopFix: function () {
        const e = this;
        e.emit("beforeLoopFix");
        const {
          activeIndex: t,
          slides: s,
          loopedSlides: n,
          allowSlidePrev: i,
          allowSlideNext: r,
          snapGrid: a,
          rtlTranslate: l,
        } = e;
        let o;
        (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
        const d = -a[t] - e.getTranslate();
        if (t < n) {
          (o = s.length - 3 * n + t), (o += n);
          e.slideTo(o, 0, !1, !0) &&
            0 !== d &&
            e.setTranslate((l ? -e.translate : e.translate) - d);
        } else if (t >= s.length - n) {
          (o = -s.length + t + n), (o += n);
          e.slideTo(o, 0, !1, !0) &&
            0 !== d &&
            e.setTranslate((l ? -e.translate : e.translate) - d);
        }
        (e.allowSlidePrev = i), (e.allowSlideNext = r), e.emit("loopFix");
      },
      loopDestroy: function () {
        const { $wrapperEl: e, params: t, slides: s } = this;
        e
          .children(
            `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
          )
          .remove(),
          s.removeAttr("data-swiper-slide-index");
      },
    };
    function q(e) {
      const t = this,
        s = c(),
        n = p(),
        i = t.touchEventsData,
        { params: r, touches: a, enabled: l } = t;
      if (!l) return;
      if (t.animating && r.preventInteractionOnTransition) return;
      !t.animating && r.cssMode && r.loop && t.loopFix();
      let o = e;
      o.originalEvent && (o = o.originalEvent);
      let d = C(o.target);
      if ("wrapper" === r.touchEventsTarget && !d.closest(t.wrapperEl).length)
        return;
      if (
        ((i.isTouchEvent = "touchstart" === o.type),
        !i.isTouchEvent && "which" in o && 3 === o.which)
      )
        return;
      if (!i.isTouchEvent && "button" in o && o.button > 0) return;
      if (i.isTouched && i.isMoved) return;
      !!r.noSwipingClass &&
        "" !== r.noSwipingClass &&
        o.target &&
        o.target.shadowRoot &&
        e.path &&
        e.path[0] &&
        (d = C(e.path[0]));
      const u = r.noSwipingSelector
          ? r.noSwipingSelector
          : `.${r.noSwipingClass}`,
        f = !(!o.target || !o.target.shadowRoot);
      if (
        r.noSwiping &&
        (f
          ? (function (e, t) {
              return (
                void 0 === t && (t = this),
                (function t(s) {
                  return s && s !== c() && s !== p()
                    ? (s.assignedSlot && (s = s.assignedSlot),
                      s.closest(e) || t(s.getRootNode().host))
                    : null;
                })(t)
              );
            })(u, o.target)
          : d.closest(u)[0])
      )
        return void (t.allowClick = !0);
      if (r.swipeHandler && !d.closest(r.swipeHandler)[0]) return;
      (a.currentX =
        "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX),
        (a.currentY =
          "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY);
      const h = a.currentX,
        m = a.currentY,
        g = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
        v = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
      if (g && (h <= v || h >= n.innerWidth - v)) {
        if ("prevent" !== g) return;
        e.preventDefault();
      }
      if (
        (Object.assign(i, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
        (a.startX = h),
        (a.startY = m),
        (i.touchStartTime = T()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        r.threshold > 0 && (i.allowThresholdMove = !1),
        "touchstart" !== o.type)
      ) {
        let e = !0;
        d.is(i.focusableElements) &&
          ((e = !1), "SELECT" === d[0].nodeName && (i.isTouched = !1)),
          s.activeElement &&
            C(s.activeElement).is(i.focusableElements) &&
            s.activeElement !== d[0] &&
            s.activeElement.blur();
        const n = e && t.allowTouchMove && r.touchStartPreventDefault;
        (!r.touchStartForcePreventDefault && !n) ||
          d[0].isContentEditable ||
          o.preventDefault();
      }
      t.params.freeMode &&
        t.params.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !r.cssMode &&
        t.freeMode.onTouchStart(),
        t.emit("touchStart", o);
    }
    function V(e) {
      const t = c(),
        s = this,
        n = s.touchEventsData,
        { params: i, touches: r, rtlTranslate: a, enabled: l } = s;
      if (!l) return;
      let o = e;
      if ((o.originalEvent && (o = o.originalEvent), !n.isTouched))
        return void (
          n.startMoving &&
          n.isScrolling &&
          s.emit("touchMoveOpposite", o)
        );
      if (n.isTouchEvent && "touchmove" !== o.type) return;
      const d =
          "touchmove" === o.type &&
          o.targetTouches &&
          (o.targetTouches[0] || o.changedTouches[0]),
        u = "touchmove" === o.type ? d.pageX : o.pageX,
        p = "touchmove" === o.type ? d.pageY : o.pageY;
      if (o.preventedByNestedSwiper) return (r.startX = u), void (r.startY = p);
      if (!s.allowTouchMove)
        return (
          C(o.target).is(n.focusableElements) || (s.allowClick = !1),
          void (
            n.isTouched &&
            (Object.assign(r, {
              startX: u,
              startY: p,
              currentX: u,
              currentY: p,
            }),
            (n.touchStartTime = T()))
          )
        );
      if (n.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
        if (s.isVertical()) {
          if (
            (p < r.startY && s.translate <= s.maxTranslate()) ||
            (p > r.startY && s.translate >= s.minTranslate())
          )
            return (n.isTouched = !1), void (n.isMoved = !1);
        } else if (
          (u < r.startX && s.translate <= s.maxTranslate()) ||
          (u > r.startX && s.translate >= s.minTranslate())
        )
          return;
      if (
        n.isTouchEvent &&
        t.activeElement &&
        o.target === t.activeElement &&
        C(o.target).is(n.focusableElements)
      )
        return (n.isMoved = !0), void (s.allowClick = !1);
      if (
        (n.allowTouchCallbacks && s.emit("touchMove", o),
        o.targetTouches && o.targetTouches.length > 1)
      )
        return;
      (r.currentX = u), (r.currentY = p);
      const f = r.currentX - r.startX,
        h = r.currentY - r.startY;
      if (s.params.threshold && Math.sqrt(f ** 2 + h ** 2) < s.params.threshold)
        return;
      if (void 0 === n.isScrolling) {
        let e;
        (s.isHorizontal() && r.currentY === r.startY) ||
        (s.isVertical() && r.currentX === r.startX)
          ? (n.isScrolling = !1)
          : f * f + h * h >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(h), Math.abs(f))) / Math.PI),
            (n.isScrolling = s.isHorizontal()
              ? e > i.touchAngle
              : 90 - e > i.touchAngle));
      }
      if (
        (n.isScrolling && s.emit("touchMoveOpposite", o),
        void 0 === n.startMoving &&
          ((r.currentX === r.startX && r.currentY === r.startY) ||
            (n.startMoving = !0)),
        n.isScrolling)
      )
        return void (n.isTouched = !1);
      if (!n.startMoving) return;
      (s.allowClick = !1),
        !i.cssMode && o.cancelable && o.preventDefault(),
        i.touchMoveStopPropagation && !i.nested && o.stopPropagation(),
        n.isMoved ||
          (i.loop && !i.cssMode && s.loopFix(),
          (n.startTranslate = s.getTranslate()),
          s.setTransition(0),
          s.animating &&
            s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (n.allowMomentumBounce = !1),
          !i.grabCursor ||
            (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
            s.setGrabCursor(!0),
          s.emit("sliderFirstMove", o)),
        s.emit("sliderMove", o),
        (n.isMoved = !0);
      let m = s.isHorizontal() ? f : h;
      (r.diff = m),
        (m *= i.touchRatio),
        a && (m = -m),
        (s.swipeDirection = m > 0 ? "prev" : "next"),
        (n.currentTranslate = m + n.startTranslate);
      let g = !0,
        v = i.resistanceRatio;
      if (
        (i.touchReleaseOnEdges && (v = 0),
        m > 0 && n.currentTranslate > s.minTranslate()
          ? ((g = !1),
            i.resistance &&
              (n.currentTranslate =
                s.minTranslate() -
                1 +
                (-s.minTranslate() + n.startTranslate + m) ** v))
          : m < 0 &&
            n.currentTranslate < s.maxTranslate() &&
            ((g = !1),
            i.resistance &&
              (n.currentTranslate =
                s.maxTranslate() +
                1 -
                (s.maxTranslate() - n.startTranslate - m) ** v)),
        g && (o.preventedByNestedSwiper = !0),
        !s.allowSlideNext &&
          "next" === s.swipeDirection &&
          n.currentTranslate < n.startTranslate &&
          (n.currentTranslate = n.startTranslate),
        !s.allowSlidePrev &&
          "prev" === s.swipeDirection &&
          n.currentTranslate > n.startTranslate &&
          (n.currentTranslate = n.startTranslate),
        s.allowSlidePrev ||
          s.allowSlideNext ||
          (n.currentTranslate = n.startTranslate),
        i.threshold > 0)
      ) {
        if (!(Math.abs(m) > i.threshold || n.allowThresholdMove))
          return void (n.currentTranslate = n.startTranslate);
        if (!n.allowThresholdMove)
          return (
            (n.allowThresholdMove = !0),
            (r.startX = r.currentX),
            (r.startY = r.currentY),
            (n.currentTranslate = n.startTranslate),
            void (r.diff = s.isHorizontal()
              ? r.currentX - r.startX
              : r.currentY - r.startY)
          );
      }
      i.followFinger &&
        !i.cssMode &&
        (((i.freeMode && i.freeMode.enabled && s.freeMode) ||
          i.watchSlidesProgress) &&
          (s.updateActiveIndex(), s.updateSlidesClasses()),
        s.params.freeMode &&
          i.freeMode.enabled &&
          s.freeMode &&
          s.freeMode.onTouchMove(),
        s.updateProgress(n.currentTranslate),
        s.setTranslate(n.currentTranslate));
    }
    function F(e) {
      const t = this,
        s = t.touchEventsData,
        {
          params: n,
          touches: i,
          rtlTranslate: r,
          slidesGrid: a,
          enabled: l,
        } = t;
      if (!l) return;
      let o = e;
      if (
        (o.originalEvent && (o = o.originalEvent),
        s.allowTouchCallbacks && t.emit("touchEnd", o),
        (s.allowTouchCallbacks = !1),
        !s.isTouched)
      )
        return (
          s.isMoved && n.grabCursor && t.setGrabCursor(!1),
          (s.isMoved = !1),
          void (s.startMoving = !1)
        );
      n.grabCursor &&
        s.isMoved &&
        s.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const d = T(),
        c = d - s.touchStartTime;
      if (t.allowClick) {
        const e = o.path || (o.composedPath && o.composedPath());
        t.updateClickedSlide((e && e[0]) || o.target),
          t.emit("tap click", o),
          c < 300 &&
            d - s.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", o);
      }
      if (
        ((s.lastClickTime = T()),
        E(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !s.isTouched ||
          !s.isMoved ||
          !t.swipeDirection ||
          0 === i.diff ||
          s.currentTranslate === s.startTranslate)
      )
        return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
      let u;
      if (
        ((s.isTouched = !1),
        (s.isMoved = !1),
        (s.startMoving = !1),
        (u = n.followFinger
          ? r
            ? t.translate
            : -t.translate
          : -s.currentTranslate),
        n.cssMode)
      )
        return;
      if (t.params.freeMode && n.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: u });
      let p = 0,
        f = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < a.length;
        e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
      ) {
        const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        void 0 !== a[e + t]
          ? u >= a[e] && u < a[e + t] && ((p = e), (f = a[e + t] - a[e]))
          : u >= a[e] && ((p = e), (f = a[a.length - 1] - a[a.length - 2]));
      }
      let h = null,
        m = null;
      n.rewind &&
        (t.isBeginning
          ? (m =
              t.params.virtual && t.params.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (h = 0));
      const g = (u - a[p]) / f,
        v = p < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
      if (c > n.longSwipesMs) {
        if (!n.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (g >= n.longSwipesRatio
            ? t.slideTo(n.rewind && t.isEnd ? h : p + v)
            : t.slideTo(p)),
          "prev" === t.swipeDirection &&
            (g > 1 - n.longSwipesRatio
              ? t.slideTo(p + v)
              : null !== m && g < 0 && Math.abs(g) > n.longSwipesRatio
              ? t.slideTo(m)
              : t.slideTo(p));
      } else {
        if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl)
          ? o.target === t.navigation.nextEl
            ? t.slideTo(p + v)
            : t.slideTo(p)
          : ("next" === t.swipeDirection && t.slideTo(null !== h ? h : p + v),
            "prev" === t.swipeDirection && t.slideTo(null !== m ? m : p));
      }
    }
    function j() {
      const e = this,
        { params: t, el: s } = e;
      if (s && 0 === s.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: n, allowSlidePrev: i, snapGrid: r } = e;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.isBeginning &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = i),
        (e.allowSlideNext = n),
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
    function R(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function W() {
      const e = this,
        { wrapperEl: t, rtlTranslate: s, enabled: n } = e;
      if (!n) return;
      let i;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        -0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const r = e.maxTranslate() - e.minTranslate();
      (i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
        i !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    let X = !1;
    function Y() {}
    const U = (e, t) => {
      const s = c(),
        {
          params: n,
          touchEvents: i,
          el: r,
          wrapperEl: a,
          device: l,
          support: o,
        } = e,
        d = !!n.nested,
        u = "on" === t ? "addEventListener" : "removeEventListener",
        p = t;
      if (o.touch) {
        const t = !(
          "touchstart" !== i.start ||
          !o.passiveListener ||
          !n.passiveListeners
        ) && { passive: !0, capture: !1 };
        r[u](i.start, e.onTouchStart, t),
          r[u](
            i.move,
            e.onTouchMove,
            o.passiveListener ? { passive: !1, capture: d } : d
          ),
          r[u](i.end, e.onTouchEnd, t),
          i.cancel && r[u](i.cancel, e.onTouchEnd, t);
      } else
        r[u](i.start, e.onTouchStart, !1),
          s[u](i.move, e.onTouchMove, d),
          s[u](i.end, e.onTouchEnd, !1);
      (n.preventClicks || n.preventClicksPropagation) &&
        r[u]("click", e.onClick, !0),
        n.cssMode && a[u]("scroll", e.onScroll),
        n.updateOnWindowResize
          ? e[p](
              l.ios || l.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              j,
              !0
            )
          : e[p]("observerUpdate", j, !0);
    };
    const K = {
        attachEvents: function () {
          const e = this,
            t = c(),
            { params: s, support: n } = e;
          (e.onTouchStart = q.bind(e)),
            (e.onTouchMove = V.bind(e)),
            (e.onTouchEnd = F.bind(e)),
            s.cssMode && (e.onScroll = W.bind(e)),
            (e.onClick = R.bind(e)),
            n.touch && !X && (t.addEventListener("touchstart", Y), (X = !0)),
            U(e, "on");
        },
        detachEvents: function () {
          U(this, "off");
        },
      },
      J = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    const Q = {
      setBreakpoint: function () {
        const e = this,
          {
            activeIndex: t,
            initialized: s,
            loopedSlides: n = 0,
            params: i,
            $el: r,
          } = e,
          a = i.breakpoints;
        if (!a || (a && 0 === Object.keys(a).length)) return;
        const l = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
        if (!l || e.currentBreakpoint === l) return;
        const o = (l in a ? a[l] : void 0) || e.originalParams,
          d = J(e, i),
          c = J(e, o),
          u = i.enabled;
        d && !c
          ? (r.removeClass(
              `${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`
            ),
            e.emitContainerClasses())
          : !d &&
            c &&
            (r.addClass(`${i.containerModifierClass}grid`),
            ((o.grid.fill && "column" === o.grid.fill) ||
              (!o.grid.fill && "column" === i.grid.fill)) &&
              r.addClass(`${i.containerModifierClass}grid-column`),
            e.emitContainerClasses());
        const p = o.direction && o.direction !== i.direction,
          f = i.loop && (o.slidesPerView !== i.slidesPerView || p);
        p && s && e.changeDirection(), k(e.params, o);
        const h = e.params.enabled;
        Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev,
        }),
          u && !h ? e.disable() : !u && h && e.enable(),
          (e.currentBreakpoint = l),
          e.emit("_beforeBreakpoint", o),
          f &&
            s &&
            (e.loopDestroy(),
            e.loopCreate(),
            e.updateSlides(),
            e.slideTo(t - n + e.loopedSlides, 0, !1)),
          e.emit("breakpoint", o);
      },
      getBreakpoint: function (e, t, s) {
        if ((void 0 === t && (t = "window"), !e || ("container" === t && !s)))
          return;
        let n = !1;
        const i = p(),
          r = "window" === t ? i.innerHeight : s.clientHeight,
          a = Object.keys(e).map((e) => {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              const t = parseFloat(e.substr(1));
              return { value: r * t, point: e };
            }
            return { value: e, point: e };
          });
        a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
        for (let e = 0; e < a.length; e += 1) {
          const { point: r, value: l } = a[e];
          "window" === t
            ? i.matchMedia(`(min-width: ${l}px)`).matches && (n = r)
            : l <= s.clientWidth && (n = r);
        }
        return n || "max";
      },
    };
    const Z = {
      addClasses: function () {
        const e = this,
          {
            classNames: t,
            params: s,
            rtl: n,
            $el: i,
            device: r,
            support: a,
          } = e,
          l = (function (e, t) {
            const s = [];
            return (
              e.forEach((e) => {
                "object" == typeof e
                  ? Object.keys(e).forEach((n) => {
                      e[n] && s.push(t + n);
                    })
                  : "string" == typeof e && s.push(t + e);
              }),
              s
            );
          })(
            [
              "initialized",
              s.direction,
              { "pointer-events": !a.touch },
              { "free-mode": e.params.freeMode && s.freeMode.enabled },
              { autoheight: s.autoHeight },
              { rtl: n },
              { grid: s.grid && s.grid.rows > 1 },
              {
                "grid-column":
                  s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
              },
              { android: r.android },
              { ios: r.ios },
              { "css-mode": s.cssMode },
              { centered: s.cssMode && s.centeredSlides },
            ],
            s.containerModifierClass
          );
        t.push(...l), i.addClass([...t].join(" ")), e.emitContainerClasses();
      },
      removeClasses: function () {
        const { $el: e, classNames: t } = this;
        e.removeClass(t.join(" ")), this.emitContainerClasses();
      },
    };
    const ee = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function te(e, t) {
      return function (s) {
        void 0 === s && (s = {});
        const n = Object.keys(s)[0],
          i = s[n];
        "object" == typeof i && null !== i
          ? (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 &&
              !0 === e[n] &&
              (e[n] = { auto: !0 }),
            n in e && "enabled" in i
              ? (!0 === e[n] && (e[n] = { enabled: !0 }),
                "object" != typeof e[n] ||
                  "enabled" in e[n] ||
                  (e[n].enabled = !0),
                e[n] || (e[n] = { enabled: !1 }),
                k(t, s))
              : k(t, s))
          : k(t, s);
      };
    }
    const se = {
        eventsEmitter: z,
        update: N,
        translate: G,
        transition: {
          setTransition: function (e, t) {
            const s = this;
            s.params.cssMode || s.$wrapperEl.transition(e),
              s.emit("setTransition", e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            const s = this,
              { params: n } = s;
            n.cssMode ||
              (n.autoHeight && s.updateAutoHeight(),
              B({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            const s = this,
              { params: n } = s;
            (s.animating = !1),
              n.cssMode ||
                (s.setTransition(0),
                B({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: D,
        loop: H,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const s =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            (s.style.cursor = "move"),
              (s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
              (s.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
              (s.style.cursor = e ? "grabbing" : "grab");
          },
          unsetGrabCursor: function () {
            const e = this;
            e.support.touch ||
              (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: K,
        breakpoints: Q,
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: s } = e,
              { slidesOffsetBefore: n } = s;
            if (n) {
              const t = e.slides.length - 1,
                s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * n;
              e.isLocked = e.size > s;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: Z,
        images: {
          loadImage: function (e, t, s, n, i, r) {
            const a = p();
            let l;
            function o() {
              r && r();
            }
            C(e).parent("picture")[0] || (e.complete && i)
              ? o()
              : t
              ? ((l = new a.Image()),
                (l.onload = o),
                (l.onerror = o),
                n && (l.sizes = n),
                s && (l.srcset = s),
                t && (l.src = t))
              : o();
          },
          preloadImages: function () {
            const e = this;
            function t() {
              null != e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")));
            }
            e.imagesToLoad = e.$el.find("img");
            for (let s = 0; s < e.imagesToLoad.length; s += 1) {
              const n = e.imagesToLoad[s];
              e.loadImage(
                n,
                n.currentSrc || n.getAttribute("src"),
                n.srcset || n.getAttribute("srcset"),
                n.sizes || n.getAttribute("sizes"),
                !0,
                t
              );
            }
          },
        },
      },
      ne = {};
    class ie {
      constructor() {
        let e, t;
        for (var s = arguments.length, n = new Array(s), i = 0; i < s; i++)
          n[i] = arguments[i];
        if (
          (1 === n.length &&
          n[0].constructor &&
          "Object" === Object.prototype.toString.call(n[0]).slice(8, -1)
            ? (t = n[0])
            : ([e, t] = n),
          t || (t = {}),
          (t = k({}, t)),
          e && !t.el && (t.el = e),
          t.el && C(t.el).length > 1)
        ) {
          const e = [];
          return (
            C(t.el).each((s) => {
              const n = k({}, t, { el: s });
              e.push(new ie(n));
            }),
            e
          );
        }
        const r = this;
        (r.__swiper__ = !0),
          (r.support = A()),
          (r.device = O({ userAgent: t.userAgent })),
          (r.browser = I()),
          (r.eventsListeners = {}),
          (r.eventsAnyListeners = []),
          (r.modules = [...r.__modules__]),
          t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
        const a = {};
        r.modules.forEach((e) => {
          e({
            swiper: r,
            extendParams: te(t, a),
            on: r.on.bind(r),
            once: r.once.bind(r),
            off: r.off.bind(r),
            emit: r.emit.bind(r),
          });
        });
        const l = k({}, ee, a);
        return (
          (r.params = k({}, l, ne, t)),
          (r.originalParams = k({}, r.params)),
          (r.passedParams = k({}, t)),
          r.params &&
            r.params.on &&
            Object.keys(r.params.on).forEach((e) => {
              r.on(e, r.params.on[e]);
            }),
          r.params && r.params.onAny && r.onAny(r.params.onAny),
          (r.$ = C),
          Object.assign(r, {
            enabled: r.params.enabled,
            el: e,
            classNames: [],
            slides: C(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === r.params.direction,
            isVertical: () => "vertical" === r.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: r.params.allowSlideNext,
            allowSlidePrev: r.params.allowSlidePrev,
            touchEvents: (function () {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
              return (
                (r.touchEventsTouch = {
                  start: e[0],
                  move: e[1],
                  end: e[2],
                  cancel: e[3],
                }),
                (r.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                r.support.touch || !r.params.simulateTouch
                  ? r.touchEventsTouch
                  : r.touchEventsDesktop
              );
            })(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: r.params.focusableElements,
              lastClickTime: T(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: r.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          r.emit("_swiper"),
          r.params.init && r.init(),
          r
        );
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const n = s.minTranslate(),
          i = (s.maxTranslate() - n) * e + n;
        s.translateTo(i, void 0 === t ? 0 : t),
          s.updateActiveIndex(),
          s.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return e.className
          .split(" ")
          .filter(
            (e) =>
              0 === e.indexOf("swiper-slide") ||
              0 === e.indexOf(t.params.slideClass)
          )
          .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.each((s) => {
          const n = e.getSlideClasses(s);
          t.push({ slideEl: s, classNames: n }), e.emit("_slideClass", s, n);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        const {
          params: s,
          slides: n,
          slidesGrid: i,
          slidesSizesGrid: r,
          size: a,
          activeIndex: l,
        } = this;
        let o = 1;
        if (s.centeredSlides) {
          let e,
            t = n[l].swiperSlideSize;
          for (let s = l + 1; s < n.length; s += 1)
            n[s] &&
              !e &&
              ((t += n[s].swiperSlideSize), (o += 1), t > a && (e = !0));
          for (let s = l - 1; s >= 0; s -= 1)
            n[s] &&
              !e &&
              ((t += n[s].swiperSlideSize), (o += 1), t > a && (e = !0));
        } else if ("current" === e)
          for (let e = l + 1; e < n.length; e += 1) {
            (t ? i[e] + r[e] - i[l] < a : i[e] - i[l] < a) && (o += 1);
          }
        else
          for (let e = l - 1; e >= 0; e -= 1) {
            i[l] - i[e] < a && (o += 1);
          }
        return o;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: s } = e;
        function n() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let i;
        s.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (n(), e.params.autoHeight && e.updateAutoHeight())
            : ((i =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              i || n()),
          s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t) {
        void 0 === t && (t = !0);
        const s = this,
          n = s.params.direction;
        return (
          e || (e = "horizontal" === n ? "vertical" : "horizontal"),
          e === n ||
            ("horizontal" !== e && "vertical" !== e) ||
            (s.$el
              .removeClass(`${s.params.containerModifierClass}${n}`)
              .addClass(`${s.params.containerModifierClass}${e}`),
            s.emitContainerClasses(),
            (s.params.direction = e),
            s.slides.each((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            s.emit("changeDirection"),
            t && s.update()),
          s
        );
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        const s = C(e || t.params.el);
        if (!(e = s[0])) return !1;
        e.swiper = t;
        const n = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let i = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            const t = C(e.shadowRoot.querySelector(n()));
            return (t.children = (e) => s.children(e)), t;
          }
          return s.children(n());
        })();
        if (0 === i.length && t.params.createElements) {
          const e = c().createElement("div");
          (i = C(e)),
            (e.className = t.params.wrapperClass),
            s.append(e),
            s.children(`.${t.params.slideClass}`).each((e) => {
              i.append(e);
            });
        }
        return (
          Object.assign(t, {
            $el: s,
            el: e,
            $wrapperEl: i,
            wrapperEl: i[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
            wrongRTL: "-webkit-box" === i.css("display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        return (
          !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop
              ? t.slideTo(
                  t.params.initialSlide + t.loopedSlides,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.attachEvents(),
            (t.initialized = !0),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        const s = this,
          { params: n, $el: i, $wrapperEl: r, slides: a } = s;
        return (
          void 0 === s.params ||
            s.destroyed ||
            (s.emit("beforeDestroy"),
            (s.initialized = !1),
            s.detachEvents(),
            n.loop && s.loopDestroy(),
            t &&
              (s.removeClasses(),
              i.removeAttr("style"),
              r.removeAttr("style"),
              a &&
                a.length &&
                a
                  .removeClass(
                    [
                      n.slideVisibleClass,
                      n.slideActiveClass,
                      n.slideNextClass,
                      n.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            s.emit("destroy"),
            Object.keys(s.eventsListeners).forEach((e) => {
              s.off(e);
            }),
            !1 !== e &&
              ((s.$el[0].swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(s)),
            (s.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        k(ne, e);
      }
      static get extendedDefaults() {
        return ne;
      }
      static get defaults() {
        return ee;
      }
      static installModule(e) {
        ie.prototype.__modules__ || (ie.prototype.__modules__ = []);
        const t = ie.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => ie.installModule(e)), ie)
          : (ie.installModule(e), ie);
      }
    }
    Object.keys(se).forEach((e) => {
      Object.keys(se[e]).forEach((t) => {
        ie.prototype[t] = se[e][t];
      });
    }),
      ie.use([
        function (e) {
          let { swiper: t, on: s, emit: n } = e;
          const i = p();
          let r = null,
            a = null;
          const l = () => {
              t &&
                !t.destroyed &&
                t.initialized &&
                (n("beforeResize"), n("resize"));
            },
            o = () => {
              t && !t.destroyed && t.initialized && n("orientationchange");
            };
          s("init", () => {
            t.params.resizeObserver && void 0 !== i.ResizeObserver
              ? t &&
                !t.destroyed &&
                t.initialized &&
                ((r = new ResizeObserver((e) => {
                  a = i.requestAnimationFrame(() => {
                    const { width: s, height: n } = t;
                    let i = s,
                      r = n;
                    e.forEach((e) => {
                      let { contentBoxSize: s, contentRect: n, target: a } = e;
                      (a && a !== t.el) ||
                        ((i = n ? n.width : (s[0] || s).inlineSize),
                        (r = n ? n.height : (s[0] || s).blockSize));
                    }),
                      (i === s && r === n) || l();
                  });
                })),
                r.observe(t.el))
              : (i.addEventListener("resize", l),
                i.addEventListener("orientationchange", o));
          }),
            s("destroy", () => {
              a && i.cancelAnimationFrame(a),
                r && r.unobserve && t.el && (r.unobserve(t.el), (r = null)),
                i.removeEventListener("resize", l),
                i.removeEventListener("orientationchange", o);
            });
        },
        function (e) {
          let { swiper: t, extendParams: s, on: n, emit: i } = e;
          const r = [],
            a = p(),
            l = function (e, t) {
              void 0 === t && (t = {});
              const s = new (a.MutationObserver || a.WebkitMutationObserver)(
                (e) => {
                  if (1 === e.length) return void i("observerUpdate", e[0]);
                  const t = function () {
                    i("observerUpdate", e[0]);
                  };
                  a.requestAnimationFrame
                    ? a.requestAnimationFrame(t)
                    : a.setTimeout(t, 0);
                }
              );
              s.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData,
              }),
                r.push(s);
            };
          s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            n("init", () => {
              if (t.params.observer) {
                if (t.params.observeParents) {
                  const e = t.$el.parents();
                  for (let t = 0; t < e.length; t += 1) l(e[t]);
                }
                l(t.$el[0], { childList: t.params.observeSlideChildren }),
                  l(t.$wrapperEl[0], { attributes: !1 });
              }
            }),
            n("destroy", () => {
              r.forEach((e) => {
                e.disconnect();
              }),
                r.splice(0, r.length);
            });
        },
      ]);
    const re = ie;
    function ae(e, t, s, n) {
      const i = c();
      return (
        e.params.createElements &&
          Object.keys(n).forEach((r) => {
            if (!s[r] && !0 === s.auto) {
              let a = e.$el.children(`.${n[r]}`)[0];
              a ||
                ((a = i.createElement("div")),
                (a.className = n[r]),
                e.$el.append(a)),
                (s[r] = a),
                (t[r] = a);
            }
          }),
        s
      );
    }
    function le(e) {
      let { swiper: t, extendParams: s, on: n, emit: i } = e;
      function r(e) {
        let s;
        return (
          e &&
            ((s = C(e)),
            t.params.uniqueNavElements &&
              "string" == typeof e &&
              s.length > 1 &&
              1 === t.$el.find(e).length &&
              (s = t.$el.find(e))),
          s
        );
      }
      function a(e, s) {
        const n = t.params.navigation;
        e &&
          e.length > 0 &&
          (e[s ? "addClass" : "removeClass"](n.disabledClass),
          e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = s),
          t.params.watchOverflow &&
            t.enabled &&
            e[t.isLocked ? "addClass" : "removeClass"](n.lockClass));
      }
      function l() {
        if (t.params.loop) return;
        const { $nextEl: e, $prevEl: s } = t.navigation;
        a(s, t.isBeginning && !t.params.rewind),
          a(e, t.isEnd && !t.params.rewind);
      }
      function o(e) {
        e.preventDefault(),
          (!t.isBeginning || t.params.loop || t.params.rewind) && t.slidePrev();
      }
      function d(e) {
        e.preventDefault(),
          (!t.isEnd || t.params.loop || t.params.rewind) && t.slideNext();
      }
      function c() {
        const e = t.params.navigation;
        if (
          ((t.params.navigation = ae(
            t,
            t.originalParams.navigation,
            t.params.navigation,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
          )),
          !e.nextEl && !e.prevEl)
        )
          return;
        const s = r(e.nextEl),
          n = r(e.prevEl);
        s && s.length > 0 && s.on("click", d),
          n && n.length > 0 && n.on("click", o),
          Object.assign(t.navigation, {
            $nextEl: s,
            nextEl: s && s[0],
            $prevEl: n,
            prevEl: n && n[0],
          }),
          t.enabled ||
            (s && s.addClass(e.lockClass), n && n.addClass(e.lockClass));
      }
      function u() {
        const { $nextEl: e, $prevEl: s } = t.navigation;
        e &&
          e.length &&
          (e.off("click", d), e.removeClass(t.params.navigation.disabledClass)),
          s &&
            s.length &&
            (s.off("click", o),
            s.removeClass(t.params.navigation.disabledClass));
      }
      s({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
        },
      }),
        (t.navigation = {
          nextEl: null,
          $nextEl: null,
          prevEl: null,
          $prevEl: null,
        }),
        n("init", () => {
          c(), l();
        }),
        n("toEdge fromEdge lock unlock", () => {
          l();
        }),
        n("destroy", () => {
          u();
        }),
        n("enable disable", () => {
          const { $nextEl: e, $prevEl: s } = t.navigation;
          e &&
            e[t.enabled ? "removeClass" : "addClass"](
              t.params.navigation.lockClass
            ),
            s &&
              s[t.enabled ? "removeClass" : "addClass"](
                t.params.navigation.lockClass
              );
        }),
        n("click", (e, s) => {
          const { $nextEl: n, $prevEl: r } = t.navigation,
            a = s.target;
          if (t.params.navigation.hideOnClick && !C(a).is(r) && !C(a).is(n)) {
            if (
              t.pagination &&
              t.params.pagination &&
              t.params.pagination.clickable &&
              (t.pagination.el === a || t.pagination.el.contains(a))
            )
              return;
            let e;
            n
              ? (e = n.hasClass(t.params.navigation.hiddenClass))
              : r && (e = r.hasClass(t.params.navigation.hiddenClass)),
              i(!0 === e ? "navigationShow" : "navigationHide"),
              n && n.toggleClass(t.params.navigation.hiddenClass),
              r && r.toggleClass(t.params.navigation.hiddenClass);
          }
        }),
        Object.assign(t.navigation, { update: l, init: c, destroy: u });
    }
    function oe(e) {
      return (
        void 0 === e && (e = ""),
        `.${e
          .trim()
          .replace(/([\.:!\/])/g, "\\$1")
          .replace(/ /g, ".")}`
      );
    }
    function de(e) {
      let { swiper: t, extendParams: s, on: n, emit: i } = e;
      const r = "swiper-pagination";
      let a;
      s({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${r}-bullet`,
          bulletActiveClass: `${r}-bullet-active`,
          modifierClass: `${r}-`,
          currentClass: `${r}-current`,
          totalClass: `${r}-total`,
          hiddenClass: `${r}-hidden`,
          progressbarFillClass: `${r}-progressbar-fill`,
          progressbarOppositeClass: `${r}-progressbar-opposite`,
          clickableClass: `${r}-clickable`,
          lockClass: `${r}-lock`,
          horizontalClass: `${r}-horizontal`,
          verticalClass: `${r}-vertical`,
        },
      }),
        (t.pagination = { el: null, $el: null, bullets: [] });
      let l = 0;
      function o() {
        return (
          !t.params.pagination.el ||
          !t.pagination.el ||
          !t.pagination.$el ||
          0 === t.pagination.$el.length
        );
      }
      function d(e, s) {
        const { bulletActiveClass: n } = t.params.pagination;
        e[s]().addClass(`${n}-${s}`)[s]().addClass(`${n}-${s}-${s}`);
      }
      function c() {
        const e = t.rtl,
          s = t.params.pagination;
        if (o()) return;
        const n =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          r = t.pagination.$el;
        let c;
        const u = t.params.loop
          ? Math.ceil((n - 2 * t.loopedSlides) / t.params.slidesPerGroup)
          : t.snapGrid.length;
        if (
          (t.params.loop
            ? ((c = Math.ceil(
                (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
              )),
              c > n - 1 - 2 * t.loopedSlides && (c -= n - 2 * t.loopedSlides),
              c > u - 1 && (c -= u),
              c < 0 && "bullets" !== t.params.paginationType && (c = u + c))
            : (c = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
          "bullets" === s.type &&
            t.pagination.bullets &&
            t.pagination.bullets.length > 0)
        ) {
          const n = t.pagination.bullets;
          let i, o, u;
          if (
            (s.dynamicBullets &&
              ((a = n
                .eq(0)
                [t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
              r.css(
                t.isHorizontal() ? "width" : "height",
                a * (s.dynamicMainBullets + 4) + "px"
              ),
              s.dynamicMainBullets > 1 &&
                void 0 !== t.previousIndex &&
                ((l += c - (t.previousIndex - t.loopedSlides || 0)),
                l > s.dynamicMainBullets - 1
                  ? (l = s.dynamicMainBullets - 1)
                  : l < 0 && (l = 0)),
              (i = Math.max(c - l, 0)),
              (o = i + (Math.min(n.length, s.dynamicMainBullets) - 1)),
              (u = (o + i) / 2)),
            n.removeClass(
              ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                .map((e) => `${s.bulletActiveClass}${e}`)
                .join(" ")
            ),
            r.length > 1)
          )
            n.each((e) => {
              const t = C(e),
                n = t.index();
              n === c && t.addClass(s.bulletActiveClass),
                s.dynamicBullets &&
                  (n >= i &&
                    n <= o &&
                    t.addClass(`${s.bulletActiveClass}-main`),
                  n === i && d(t, "prev"),
                  n === o && d(t, "next"));
            });
          else {
            const e = n.eq(c),
              r = e.index();
            if ((e.addClass(s.bulletActiveClass), s.dynamicBullets)) {
              const e = n.eq(i),
                a = n.eq(o);
              for (let e = i; e <= o; e += 1)
                n.eq(e).addClass(`${s.bulletActiveClass}-main`);
              if (t.params.loop)
                if (r >= n.length) {
                  for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                    n.eq(n.length - e).addClass(`${s.bulletActiveClass}-main`);
                  n.eq(n.length - s.dynamicMainBullets - 1).addClass(
                    `${s.bulletActiveClass}-prev`
                  );
                } else d(e, "prev"), d(a, "next");
              else d(e, "prev"), d(a, "next");
            }
          }
          if (s.dynamicBullets) {
            const i = Math.min(n.length, s.dynamicMainBullets + 4),
              r = (a * i - a) / 2 - u * a,
              l = e ? "right" : "left";
            n.css(t.isHorizontal() ? l : "top", `${r}px`);
          }
        }
        if (
          ("fraction" === s.type &&
            (r.find(oe(s.currentClass)).text(s.formatFractionCurrent(c + 1)),
            r.find(oe(s.totalClass)).text(s.formatFractionTotal(u))),
          "progressbar" === s.type)
        ) {
          let e;
          e = s.progressbarOpposite
            ? t.isHorizontal()
              ? "vertical"
              : "horizontal"
            : t.isHorizontal()
            ? "horizontal"
            : "vertical";
          const n = (c + 1) / u;
          let i = 1,
            a = 1;
          "horizontal" === e ? (i = n) : (a = n),
            r
              .find(oe(s.progressbarFillClass))
              .transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${a})`)
              .transition(t.params.speed);
        }
        "custom" === s.type && s.renderCustom
          ? (r.html(s.renderCustom(t, c + 1, u)), i("paginationRender", r[0]))
          : i("paginationUpdate", r[0]),
          t.params.watchOverflow &&
            t.enabled &&
            r[t.isLocked ? "addClass" : "removeClass"](s.lockClass);
      }
      function u() {
        const e = t.params.pagination;
        if (o()) return;
        const s =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          n = t.pagination.$el;
        let r = "";
        if ("bullets" === e.type) {
          let i = t.params.loop
            ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup)
            : t.snapGrid.length;
          t.params.freeMode &&
            t.params.freeMode.enabled &&
            !t.params.loop &&
            i > s &&
            (i = s);
          for (let s = 0; s < i; s += 1)
            e.renderBullet
              ? (r += e.renderBullet.call(t, s, e.bulletClass))
              : (r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
          n.html(r), (t.pagination.bullets = n.find(oe(e.bulletClass)));
        }
        "fraction" === e.type &&
          ((r = e.renderFraction
            ? e.renderFraction.call(t, e.currentClass, e.totalClass)
            : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
          n.html(r)),
          "progressbar" === e.type &&
            ((r = e.renderProgressbar
              ? e.renderProgressbar.call(t, e.progressbarFillClass)
              : `<span class="${e.progressbarFillClass}"></span>`),
            n.html(r)),
          "custom" !== e.type && i("paginationRender", t.pagination.$el[0]);
      }
      function p() {
        t.params.pagination = ae(
          t,
          t.originalParams.pagination,
          t.params.pagination,
          { el: "swiper-pagination" }
        );
        const e = t.params.pagination;
        if (!e.el) return;
        let s = C(e.el);
        0 !== s.length &&
          (t.params.uniqueNavElements &&
            "string" == typeof e.el &&
            s.length > 1 &&
            ((s = t.$el.find(e.el)),
            s.length > 1 &&
              (s = s.filter((e) => C(e).parents(".swiper")[0] === t.el))),
          "bullets" === e.type && e.clickable && s.addClass(e.clickableClass),
          s.addClass(e.modifierClass + e.type),
          s.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
          "bullets" === e.type &&
            e.dynamicBullets &&
            (s.addClass(`${e.modifierClass}${e.type}-dynamic`),
            (l = 0),
            e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
          "progressbar" === e.type &&
            e.progressbarOpposite &&
            s.addClass(e.progressbarOppositeClass),
          e.clickable &&
            s.on("click", oe(e.bulletClass), function (e) {
              e.preventDefault();
              let s = C(this).index() * t.params.slidesPerGroup;
              t.params.loop && (s += t.loopedSlides), t.slideTo(s);
            }),
          Object.assign(t.pagination, { $el: s, el: s[0] }),
          t.enabled || s.addClass(e.lockClass));
      }
      function f() {
        const e = t.params.pagination;
        if (o()) return;
        const s = t.pagination.$el;
        s.removeClass(e.hiddenClass),
          s.removeClass(e.modifierClass + e.type),
          s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
          t.pagination.bullets &&
            t.pagination.bullets.removeClass &&
            t.pagination.bullets.removeClass(e.bulletActiveClass),
          e.clickable && s.off("click", oe(e.bulletClass));
      }
      n("init", () => {
        p(), u(), c();
      }),
        n("activeIndexChange", () => {
          (t.params.loop || void 0 === t.snapIndex) && c();
        }),
        n("snapIndexChange", () => {
          t.params.loop || c();
        }),
        n("slidesLengthChange", () => {
          t.params.loop && (u(), c());
        }),
        n("snapGridLengthChange", () => {
          t.params.loop || (u(), c());
        }),
        n("destroy", () => {
          f();
        }),
        n("enable disable", () => {
          const { $el: e } = t.pagination;
          e &&
            e[t.enabled ? "removeClass" : "addClass"](
              t.params.pagination.lockClass
            );
        }),
        n("lock unlock", () => {
          c();
        }),
        n("click", (e, s) => {
          const n = s.target,
            { $el: r } = t.pagination;
          if (
            t.params.pagination.el &&
            t.params.pagination.hideOnClick &&
            r.length > 0 &&
            !C(n).hasClass(t.params.pagination.bulletClass)
          ) {
            if (
              t.navigation &&
              ((t.navigation.nextEl && n === t.navigation.nextEl) ||
                (t.navigation.prevEl && n === t.navigation.prevEl))
            )
              return;
            const e = r.hasClass(t.params.pagination.hiddenClass);
            i(!0 === e ? "paginationShow" : "paginationHide"),
              r.toggleClass(t.params.pagination.hiddenClass);
          }
        }),
        Object.assign(t.pagination, {
          render: u,
          update: c,
          init: p,
          destroy: f,
        });
    }
    function ce(e) {
      let { swiper: t, extendParams: s, on: n, emit: i } = e;
      s({
        lazy: {
          checkInView: !1,
          enabled: !1,
          loadPrevNext: !1,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: !1,
          scrollingElement: "",
          elementClass: "swiper-lazy",
          loadingClass: "swiper-lazy-loading",
          loadedClass: "swiper-lazy-loaded",
          preloaderClass: "swiper-lazy-preloader",
        },
      }),
        (t.lazy = {});
      let r = !1,
        a = !1;
      function l(e, s) {
        void 0 === s && (s = !0);
        const n = t.params.lazy;
        if (void 0 === e) return;
        if (0 === t.slides.length) return;
        const r =
            t.virtual && t.params.virtual.enabled
              ? t.$wrapperEl.children(
                  `.${t.params.slideClass}[data-swiper-slide-index="${e}"]`
                )
              : t.slides.eq(e),
          a = r.find(
            `.${n.elementClass}:not(.${n.loadedClass}):not(.${n.loadingClass})`
          );
        !r.hasClass(n.elementClass) ||
          r.hasClass(n.loadedClass) ||
          r.hasClass(n.loadingClass) ||
          a.push(r[0]),
          0 !== a.length &&
            a.each((e) => {
              const a = C(e);
              a.addClass(n.loadingClass);
              const o = a.attr("data-background"),
                d = a.attr("data-src"),
                c = a.attr("data-srcset"),
                u = a.attr("data-sizes"),
                p = a.parent("picture");
              t.loadImage(a[0], d || o, c, u, !1, () => {
                if (null != t && t && (!t || t.params) && !t.destroyed) {
                  if (
                    (o
                      ? (a.css("background-image", `url("${o}")`),
                        a.removeAttr("data-background"))
                      : (c &&
                          (a.attr("srcset", c), a.removeAttr("data-srcset")),
                        u && (a.attr("sizes", u), a.removeAttr("data-sizes")),
                        p.length &&
                          p.children("source").each((e) => {
                            const t = C(e);
                            t.attr("data-srcset") &&
                              (t.attr("srcset", t.attr("data-srcset")),
                              t.removeAttr("data-srcset"));
                          }),
                        d && (a.attr("src", d), a.removeAttr("data-src"))),
                    a.addClass(n.loadedClass).removeClass(n.loadingClass),
                    r.find(`.${n.preloaderClass}`).remove(),
                    t.params.loop && s)
                  ) {
                    const e = r.attr("data-swiper-slide-index");
                    if (r.hasClass(t.params.slideDuplicateClass)) {
                      l(
                        t.$wrapperEl
                          .children(
                            `[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`
                          )
                          .index(),
                        !1
                      );
                    } else {
                      l(
                        t.$wrapperEl
                          .children(
                            `.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`
                          )
                          .index(),
                        !1
                      );
                    }
                  }
                  i("lazyImageReady", r[0], a[0]),
                    t.params.autoHeight && t.updateAutoHeight();
                }
              }),
                i("lazyImageLoad", r[0], a[0]);
            });
      }
      function o() {
        const { $wrapperEl: e, params: s, slides: n, activeIndex: i } = t,
          r = t.virtual && s.virtual.enabled,
          o = s.lazy;
        let d = s.slidesPerView;
        function c(t) {
          if (r) {
            if (
              e.children(`.${s.slideClass}[data-swiper-slide-index="${t}"]`)
                .length
            )
              return !0;
          } else if (n[t]) return !0;
          return !1;
        }
        function u(e) {
          return r ? C(e).attr("data-swiper-slide-index") : C(e).index();
        }
        if (
          ("auto" === d && (d = 0), a || (a = !0), t.params.watchSlidesProgress)
        )
          e.children(`.${s.slideVisibleClass}`).each((e) => {
            l(r ? C(e).attr("data-swiper-slide-index") : C(e).index());
          });
        else if (d > 1) for (let e = i; e < i + d; e += 1) c(e) && l(e);
        else l(i);
        if (o.loadPrevNext)
          if (d > 1 || (o.loadPrevNextAmount && o.loadPrevNextAmount > 1)) {
            const e = o.loadPrevNextAmount,
              t = d,
              s = Math.min(i + t + Math.max(e, t), n.length),
              r = Math.max(i - Math.max(t, e), 0);
            for (let e = i + d; e < s; e += 1) c(e) && l(e);
            for (let e = r; e < i; e += 1) c(e) && l(e);
          } else {
            const t = e.children(`.${s.slideNextClass}`);
            t.length > 0 && l(u(t));
            const n = e.children(`.${s.slidePrevClass}`);
            n.length > 0 && l(u(n));
          }
      }
      function d() {
        const e = p();
        if (!t || t.destroyed) return;
        const s = t.params.lazy.scrollingElement
            ? C(t.params.lazy.scrollingElement)
            : C(e),
          n = s[0] === e,
          i = n ? e.innerWidth : s[0].offsetWidth,
          a = n ? e.innerHeight : s[0].offsetHeight,
          l = t.$el.offset(),
          { rtlTranslate: c } = t;
        let u = !1;
        c && (l.left -= t.$el[0].scrollLeft);
        const f = [
          [l.left, l.top],
          [l.left + t.width, l.top],
          [l.left, l.top + t.height],
          [l.left + t.width, l.top + t.height],
        ];
        for (let e = 0; e < f.length; e += 1) {
          const t = f[e];
          if (t[0] >= 0 && t[0] <= i && t[1] >= 0 && t[1] <= a) {
            if (0 === t[0] && 0 === t[1]) continue;
            u = !0;
          }
        }
        const h = !(
          "touchstart" !== t.touchEvents.start ||
          !t.support.passiveListener ||
          !t.params.passiveListeners
        ) && { passive: !0, capture: !1 };
        u
          ? (o(), s.off("scroll", d, h))
          : r || ((r = !0), s.on("scroll", d, h));
      }
      n("beforeInit", () => {
        t.params.lazy.enabled &&
          t.params.preloadImages &&
          (t.params.preloadImages = !1);
      }),
        n("init", () => {
          t.params.lazy.enabled && (t.params.lazy.checkInView ? d() : o());
        }),
        n("scroll", () => {
          t.params.freeMode &&
            t.params.freeMode.enabled &&
            !t.params.freeMode.sticky &&
            o();
        }),
        n("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
          t.params.lazy.enabled && (t.params.lazy.checkInView ? d() : o());
        }),
        n("transitionStart", () => {
          t.params.lazy.enabled &&
            (t.params.lazy.loadOnTransitionStart ||
              (!t.params.lazy.loadOnTransitionStart && !a)) &&
            (t.params.lazy.checkInView ? d() : o());
        }),
        n("transitionEnd", () => {
          t.params.lazy.enabled &&
            !t.params.lazy.loadOnTransitionStart &&
            (t.params.lazy.checkInView ? d() : o());
        }),
        n("slideChange", () => {
          const {
            lazy: e,
            cssMode: s,
            watchSlidesProgress: n,
            touchReleaseOnEdges: i,
            resistanceRatio: r,
          } = t.params;
          e.enabled && (s || (n && (i || 0 === r))) && o();
        }),
        Object.assign(t.lazy, { load: o, loadInSlide: l });
    }
    function ue() {
      let e = document.querySelectorAll(
        '[class*="__swiper"]:not(.swiper-wrapper)'
      );
      e &&
        e.forEach((e) => {
          e.parentElement.classList.add("swiper"),
            e.classList.add("swiper-wrapper");
          for (const t of e.children) t.classList.add("swiper-slide");
        });
    }
    window.addEventListener("load", function (e) {
      ue(),
        document.querySelector(".main-slider__slider") &&
          new re(".main-slider__slider", {
            modules: [le, de, ce],
            observer: !0,
            observeParents: !0,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: !0,
            speed: 800,
            loop: !0,
            lazy: !0,
            pagination: { el: ".main-slider__pagging", clickable: !0 },
            on: {},
          });
    });
    new (s(732))({
      elements_selector: "[data-src]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    let pe = !1;
    setTimeout(() => {
      if (pe) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0),
      window.addEventListener("load", function (e) {
        const t = document.querySelector(".style-your__items");
        let s = null;
        (t.onmouseover = function (e) {
          if (s) return;
          let n = e.target.closest(".goods__top");
          n && t.contains(n) && ((s = n), n.classList.add("_active-show"));
        }),
          (t.onmouseout = function (e) {
            if (!s) return;
            let t = e.relatedTarget;
            for (; t; ) {
              if (t == s) return;
              (t = t.parentNode),
                s.classList.remove("_active-show"),
                (s = null);
            }
          });
      }),
      (window.FLS = !0),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      e.any() && document.documentElement.classList.add("touch"),
      window.addEventListener("load", function () {
        setTimeout(function () {
          document.documentElement.classList.add("loaded");
        }, 0);
      }),
      (function () {
        let e = document.querySelector(".icon-menu");
        e &&
          e.addEventListener("click", function (e) {
            t &&
              (((e = 500) => {
                document.documentElement.classList.contains("lock")
                  ? n(e)
                  : i(e);
              })(),
              document.documentElement.classList.toggle("menu-open"));
          });
      })(),
      (function () {
        if (document.querySelectorAll("[data-fullscreen]").length && e.any()) {
          function t() {
            let e = 0.01 * window.innerHeight;
            document.documentElement.style.setProperty("--vh", `${e}px`);
          }
          window.addEventListener("resize", t), t();
        }
      })(),
      (function () {
        const e = document.querySelectorAll(
          "input[placeholder],textarea[placeholder]"
        );
        e.length &&
          e.forEach((e) => {
            e.dataset.placeholder = e.placeholder;
          }),
          document.body.addEventListener("focusin", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = ""),
              t.classList.add("_form-focus"),
              t.parentElement.classList.add("_form-focus"),
              a.removeError(t));
          }),
          document.body.addEventListener("focusout", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = t.dataset.placeholder),
              t.classList.remove("_form-focus"),
              t.parentElement.classList.remove("_form-focus"),
              t.hasAttribute("data-validate") && a.validateInput(t));
          });
      })();
  })();
})();
