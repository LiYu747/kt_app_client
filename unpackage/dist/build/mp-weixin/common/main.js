(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["common/main"], {
    3220: function (e, t, n) {},
    "6c50": function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n("c9e7");
      for (var r in o) "default" !== r && function (e) {
        n.d(t, e, (function () {
          return o[e]
        }))
      }(r);
      n("b359");
      var c, u, a, f, i = n("f0c5"),
        l = Object(i["a"])(o["default"], c, u, !1, null, null, null, !1, a, f);
      t["default"] = l.exports
    },
    "6eaa": function (e, t, n) {
      "use strict";
      (function (e) {
        n("d774");
        var t = u(n("66fd")),
          o = u(n("6c50")),
          r = u(n("e56f")),
          c = u(n("69cf"));

        function u(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }

        function a(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter((function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, o)
          }
          return n
        }

        function f(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? a(Object(n), !0).forEach((function (t) {
              i(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
          }
          return e
        }

        function i(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n, e
        }
        t.default.use(r.default), t.default.config.productionTip = !1, t.default.prototype.$store = c.default, o.default.mpType = "app";
        var l = new t.default(f({}, o.default));
        e(l).$mount()
      }).call(this, n("543d")["createApp"])
    },
    "7c16": function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var o = {
        onLaunch: function () {
          console.log("App Launch")
        },
        onShow: function () {
          console.log("App Show")
        },
        onHide: function () {
          console.log("App Hide")
        }
      };
      t.default = o
    },
    b359: function (e, t, n) {
      "use strict";
      var o = n("3220"),
        r = n.n(o);
      r.a
    },
    c9e7: function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n("7c16"),
        r = n.n(o);
      for (var c in o) "default" !== c && function (e) {
        n.d(t, e, (function () {
          return o[e]
        }))
      }(c);
      t["default"] = r.a
    }
  },
  [
    ["6eaa", "common/runtime", "common/vendor"]
  ]
]);