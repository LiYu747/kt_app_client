(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/classification/travel/travel"], {
    "49f1": function (t, o, n) {
      "use strict";
      var i;
      n.d(o, "b", (function () {
        return e
      })), n.d(o, "c", (function () {
        return a
      })), n.d(o, "a", (function () {
        return i
      }));
      var e = function () {
          var t = this,
            o = t.$createElement;
          t._self._c
        },
        a = []
    },
    "995e": function (t, o, n) {
      "use strict";
      n.r(o);
      var i = n("49f1"),
        e = n("c377");
      for (var a in e) "default" !== a && function (t) {
        n.d(o, t, (function () {
          return e[t]
        }))
      }(a);
      n("99ba");
      var c, u = n("f0c5"),
        s = Object(u["a"])(e["default"], i["b"], i["c"], !1, null, "47ebef51", null, !1, i["a"], c);
      o["default"] = s.exports
    },
    "99ba": function (t, o, n) {
      "use strict";
      var i = n("d18d"),
        e = n.n(i);
      e.a
    },
    b2de: function (t, o, n) {
      "use strict";
      (function (t) {
        n("d774");
        i(n("66fd"));
        var o = i(n("995e"));

        function i(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        t(o.default)
      }).call(this, n("543d")["createPage"])
    },
    c377: function (t, o, n) {
      "use strict";
      n.r(o);
      var i = n("fda5"),
        e = n.n(i);
      for (var a in i) "default" !== a && function (t) {
        n.d(o, t, (function () {
          return i[t]
        }))
      }(a);
      o["default"] = e.a
    },
    d18d: function (t, o, n) {},
    fda5: function (t, o, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(o, "__esModule", {
          value: !0
        }), o.default = void 0;
        i(n("78ac")), i(n("23ca"));

        function i(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        var e = function () {
            n.e("components/sub-class/subclass").then(function () {
              return resolve(n("ece8"))
            }.bind(null, n)).catch(n.oe)
          },
          a = {
            name: "",
            components: {
              subclass: e
            },
            props: {},
            data: function () {
              return {
                myholder: "我的位置",
                goholder: "请输入终点",
                myPosition: "",
                goPosition: "",
                latitude: "",
                longitude: "",
                covers: [{
                  id: 1,
                  width: 10,
                  height: 10,
                  title: "我的位置",
                  latitude: "",
                  longitude: "",
                  iconPath: "../../../static/pos.png"
                }],
                city: "",
                golat: "",
                golng: ""
              }
            },
            methods: {
              swap: function () {
                if ("" != this.goPosition)
                  if ("" != this.myPosition) {
                    var o = this.myPosition,
                      n = this.goPosition;
                    this.myPosition = n, this.goPosition = o
                  } else t.showToast({
                    title: "请输入开始的位置",
                    icon: "none"
                  })
              },
              location: function () {
                var o = this;
                t.showLoading({
                  title: "获取定位中"
                }), t.getLocation({
                  type: "gcj02",
                  altitude: !0,
                  geocode: !0,
                  success: function (n) {
                    t.hideLoading(), o.latitude = n.latitude, o.longitude = n.longitude, o.covers[0].latitude = n.latitude, o.covers[0].longitude = n.longitude
                    wx.chooseLocation({
                      latitude:n.latitude,
                      longitude:n.longitude,
                      success: function (v){
                      o.city = v.name
                      }
                    })
                  },
                  fail: function (o) {
                    t.hideLoading(), t.showToast({
                      title: "获取定位失败,请稍后再试",
                      icon: "none"
                    })
                  }
                })
              },
              start: function () {
                var o = this;
                if ("" != o.goPosition) {
                  var n = "http://api.map.baidu.com/direction";
                  "" == o.myPosition && (n += "?origin=latlng:".concat(o.latitude, ",").concat(o.longitude) + "|name:" + o.myPosition + "&destination=latlng:".concat(o.golat, ",").concat(o.golng) + "|name:" + o.goPosition + "&mode=driving&region=" + o.city + "&output=html&src=webapp.baidu.openAPIdemo&coord_type=gcj02"), "" != o.myPosition && (o.latitude = "", o.longitude = "", n += "?origin=latlng:".concat(o.latitude, ",").concat(o.longitude) + "|name:" + o.myPosition + "&destination=latlng:".concat(o.golat, ",").concat(o.golng) + "|name:" + o.goPosition + "&mode=driving&region=" + o.city + "&output=html&src=webapp.baidu.openAPIdemo&coord_type=gcj02"), t.navigateTo({
                    url: "/pages/web/index/index?url=" + encodeURIComponent(n)
                  })
                } else t.showToast({
                  title: "请输入终点",
                  icon: "none"
                })
              }
            },
            onShow: function () {},
            mounted: function () {
              this.location()
            },
            onLoad: function (t) {
              "" != t.null && (this.goPosition = t.addressName)
            },
            filters: {},
            computed: {},
            watch: {},
            directives: {}
          };
        o.default = a
      }).call(this, n("543d")["default"])
    }
  },
  [
    ["b2de", "common/runtime", "common/vendor"]
  ]
]);