System.register(["react", "molecules", "orgasms"], function (e, t) {
  var r = {},
    o = {},
    n = {};
  return {
    setters: [
      function (e) {
        r.default = e.default;
      },
      function (e) {
        (o.Header = e.Header), (o.ProHeader = e.ProHeader);
      },
      function (e) {
        n.Drawer = e.Drawer;
      },
    ],
    execute: function () {
      e(
        (() => {
          var e = {
              722: (e, t, r) => {
                const o = r(905).R;
                t.s = function (e) {
                  if ((e || (e = 1), !r.y.meta || !r.y.meta.url))
                    throw (
                      (console.error("__system_context__", r.y),
                      Error(
                        "systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided"
                      ))
                    );
                  r.p = o(r.y.meta.url, e);
                };
              },
              905: (e, t, r) => {
                function o(e, t) {
                  const r = document.createElement("a");
                  r.href = e;
                  const o =
                    "/" === r.pathname[0] ? r.pathname : "/" + r.pathname;
                  let n = 0,
                    a = o.length;
                  for (; n !== t && a >= 0; ) "/" === o[--a] && n++;
                  if (n !== t)
                    throw Error(
                      "systemjs-webpack-interop: rootDirectoryLevel (" +
                        t +
                        ") is greater than the number of directories (" +
                        n +
                        ") in the URL path " +
                        e
                    );
                  const l = o.slice(0, a + 1);
                  return r.protocol + "//" + r.host + l;
                }
                (t.m = function (e, t) {
                  if (
                    (t || (t = 1),
                    "string" != typeof e || 0 === e.trim().length)
                  )
                    throw Error(
                      "systemjs-webpack-interop: setPublicPath(systemjsModuleName) must be called with a non-empty string 'systemjsModuleName'"
                    );
                  if ("number" != typeof t || t <= 0 || isNaN(t) || !n(t))
                    throw Error(
                      "systemjs-webpack-interop: setPublicPath(systemjsModuleName, rootDirectoryLevel) must be called with a positive integer 'rootDirectoryLevel'"
                    );
                  let a;
                  try {
                    if (((a = window.System.resolve(e)), !a)) throw Error();
                  } catch (t) {
                    throw Error(
                      "systemjs-webpack-interop: There is no such module '" +
                        e +
                        "' in the SystemJS registry. Did you misspell the name of your module?"
                    );
                  }
                  r.p = o(a, t);
                }),
                  (t.R = o);
                const n =
                  Number.isInteger ||
                  function (e) {
                    return (
                      "number" == typeof e && isFinite(e) && Math.floor(e) === e
                    );
                  };
              },
              225: (e) => {
                "use strict";
                e.exports = o;
              },
              602: (e) => {
                "use strict";
                e.exports = n;
              },
              297: (e) => {
                "use strict";
                e.exports = r;
              },
            },
            a = {};
          function l(t) {
            if (a[t]) return a[t].exports;
            var r = (a[t] = { exports: {} });
            return e[t](r, r.exports, l), r.exports;
          }
          (l.y = t),
            (l.d = (e, t) => {
              for (var r in t)
                l.o(t, r) &&
                  !l.o(e, r) &&
                  Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
            (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
            (l.r = (e) => {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (l.p = "");
          var s = {};
          return (
            (0, l(722).s)(1),
            (() => {
              "use strict";
              l.r(s),
                l.d(s, { UserProTemplate: () => u, UserTemplate: () => i }),
                (0, l(905).m)("template");
              var e = l(297);
              function t(e) {
                var r,
                  o,
                  n = "";
                if ("string" == typeof e || "number" == typeof e) n += e;
                else if ("object" == typeof e)
                  if (Array.isArray(e))
                    for (r = 0; r < e.length; r++)
                      e[r] && (o = t(e[r])) && (n && (n += " "), (n += o));
                  else for (r in e) e[r] && (n && (n += " "), (n += r));
                return n;
              }
              function r() {
                for (var e, r, o = 0, n = ""; o < arguments.length; )
                  (e = arguments[o++]) &&
                    (r = t(e)) &&
                    (n && (n += " "), (n += r));
                return n;
              }
              var o = l(225),
                n = l(602);
              function a(t) {
                var a = t.open,
                  l = t.toggle,
                  s = t.user;
                return e.default.createElement(
                  "div",
                  { className: "w-full h-screen" },
                  e.default.createElement(o.Header, {
                    user: s,
                    open: a,
                    toggle: l,
                  }),
                  e.default.createElement(n.Drawer, {
                    open: a,
                    toggle: l,
                    location: t.location,
                    list: t.list,
                  }),
                  e.default.createElement(
                    "main",
                    {
                      className: r("bg-gray-150 px-10 h-full mainContainer", {
                        "ml-60": a,
                      }),
                    },
                    e.default.createElement("div", null, t.children)
                  )
                );
              }
              const i = e.default.memo(a),
                u = function (t) {
                  var a = t.Sidebar,
                    l = t.route,
                    s = t.history,
                    i = t.open,
                    u = t.toggle,
                    c = t.user;
                  return (
                    t.click,
                    e.default.createElement(
                      "div",
                      { className: "w-full h-screen" },
                      e.default.createElement(o.Header, {
                        user: c,
                        open: i,
                        toggle: u,
                      }),
                      e.default.createElement(
                        n.Drawer,
                        {
                          open: i,
                          toggle: u,
                          location: t.location,
                          isSidebar: !0,
                        },
                        e.default.createElement(
                          "div",
                          { className: "w-full px-5" },
                          e.default.createElement(a, null)
                        )
                      ),
                      e.default.createElement(
                        "main",
                        {
                          className: r(
                            "bg-gray-150 md:px-10 px-6 h-full mainContainer",
                            { "ml-60": i }
                          ),
                        },
                        e.default.createElement(o.ProHeader, {
                          route: l,
                          history: s,
                        }),
                        e.default.createElement(
                          "div",
                          { className: "pb-16 mt-0 -mb-20" },
                          t.children
                        )
                      )
                    )
                  );
                };
            })(),
            s
          );
        })()
      );
    },
  };
});
//# sourceMappingURL=ideeza-template.js.map
