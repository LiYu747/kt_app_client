(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/qrcode/qrCode/qrCode"], {
    1374: function (t, n, e) {
      "use strict";
      (function (t) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var o = c(e("a6bb")),
          a = c(e("8031"));

        function c(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        var i = function () {
            e.e("components/sub-unit/subunit").then(function () {
              return resolve(e("e864"))
            }.bind(null, e)).catch(e.oe)
          },
          u = function () {
            Promise.all([e.e("common/vendor"), e.e("components/qrcode/tki-qrcode/tki-qrcode")]).then(function () {
              return resolve(e("c7ca"))
            }.bind(null, e)).catch(e.oe)
          },
          r = {
            name: "",
            components: {
              subunit: i,
              tkiQrcode: u
            },
            props: {},
            data: function () {
              return {
                val: "",
                size: 500,
                unit: "upx",
                background: "#ffffff",
                foreground: "#000000",
                pdground: "#000000",
                icon: "",
                iconsize: 40,
                lv: 3,
                onval: !0,
                loadMake: !0,
                text: "刷新成功",
                flag: 0,
                show: 0,
                time: 60,
                timetext: "有效时间:60s"
              }
            },
            methods: {
              goback: function () {
                t.navigateBack({
                  delta: 1
                })
              },
              add: function () {
                this.text = "刷新成功", this.flag = 0, this.show = 0, this.time = 60, this.loadUserData()
              },
              loadUserData: function () {
                var n = this;
                a.default.doOnlyTokenValid({
                  showModal: !0,
                  keepSuccess: !1,
                  success: function () {
                    n.data();
                    setTimeout((function () {
                      n.text = "手动刷新", n.flag = 1, n.countdown(), n.show = 1
                    }), 2e3)
                  },
                  fail: function () {
                    t.switchTab({
                      url: "/pages/index/index"
                    })
                  }
                })
              },
              countdown: function () {
                var t = this,
                  n = setInterval((function () {
                    t.time > 0 && (t.time--, t.timetext = "有效时间:" + t.time + "s", (t.time <= 0 || 0 === t.flag) && (t.time = 60, t.show = 0, clearInterval(n)))
                  }), 1e3)
              },
              data: function () {
                var n = this;
                o.default.obtaincode({
                  data: {},
                  fail: function (n) {
                    t.showToast({
                      title: "网络错误",
                      icon: "none"
                    })
                  },
                  success: function (t) {
                    200 == t.statusCode && 200 == t.data.code && (n.val = t.data.data.content)
                  }
                })
              }
            },
            onShow: function () {
              this.loadUserData()
            },
            mounted: function () {},
            onLoad: function () {},
            filters: {},
            computed: {},
            watch: {},
            directives: {}
          };
        n.default = r
      }).call(this, e("543d")["default"])
    },
    3153: function (t, n, e) {
      "use strict";
      var o;
      e.d(n, "b", (function () {
        return a
      })), e.d(n, "c", (function () {
        return c
      })), e.d(n, "a", (function () {
        return o
      }));
      var a = function () {
          var t = this,
            n = t.$createElement;
          t._self._c
        },
        c = []
    },
    "405a": function (t, n, e) {
      "use strict";
      e.r(n);
      var o = e("1374"),
        a = e.n(o);
      for (var c in o) "default" !== c && function (t) {
        e.d(n, t, (function () {
          return o[t]
        }))
      }(c);
      n["default"] = a.a
    },
    "542e": function (t, n, e) {
      "use strict";
      var o = e("fcc6"),
        a = e.n(o);
      a.a
    },
    bf8e: function (t, n, e) {
      "use strict";
      e.r(n);
      var o = e("3153"),
        a = e("405a");
      for (var c in a) "default" !== c && function (t) {
        e.d(n, t, (function () {
          return a[t]
        }))
      }(c);
      e("542e");
      var i, u = e("f0c5"),
        r = Object(u["a"])(a["default"], o["b"], o["c"], !1, null, "5fe6a42d", null, !1, o["a"], i);
      n["default"] = r.exports
    },
    e581: function (t, n, e) {
      "use strict";
      (function (t) {
        e("d774");
        o(e("66fd"));
        var n = o(e("bf8e"));

        function o(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        t(n.default)
      }).call(this, e("543d")["createPage"])
    },
    fcc6: function (t, n, e) {}
  },
  [
    ["e581", "common/runtime", "common/vendor"]
  ]
]);