(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/web/index/index"], {
    8033: function (n, t, e) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var u = {
        data: function () {
          return {
            url: ""
          }
        },
        onLoad: function (n) {
          this.url = n.url ? decodeURIComponent(n.url) : ""
        },
        methods: {}
      };
      t.default = u
    },
    "89fe": function (n, t, e) {
      "use strict";
      (function (n) {
        e("d774");
        u(e("66fd"));
        var t = u(e("f421"));

        function u(n) {
          return n && n.__esModule ? n : {
            default: n
          }
        }
        n(t.default)
      }).call(this, e("543d")["createPage"])
    },
    bc37: function (n, t, e) {
      "use strict";
      var u;
      e.d(t, "b", (function () {
        return r
      })), e.d(t, "c", (function () {
        return o
      })), e.d(t, "a", (function () {
        return u
      }));
      var r = function () {
          var n = this,
            t = n.$createElement;
          n._self._c
        },
        o = []
    },
    e254: function (n, t, e) {
      "use strict";
      e.r(t);
      var u = e("8033"),
        r = e.n(u);
      for (var o in u) "default" !== o && function (n) {
        e.d(t, n, (function () {
          return u[n]
        }))
      }(o);
      t["default"] = r.a
    },
    f421: function (n, t, e) {
      "use strict";
      e.r(t);
      var u = e("bc37"),
        r = e("e254");
      for (var o in r) "default" !== o && function (n) {
        e.d(t, n, (function () {
          return r[n]
        }))
      }(o);
      var c, a = e("f0c5"),
        f = Object(a["a"])(r["default"], u["b"], u["c"], !1, null, null, null, !1, u["a"], c);
      t["default"] = f.exports
    }
  },
  [
    ["89fe", "common/runtime", "common/vendor"]
  ]
]);