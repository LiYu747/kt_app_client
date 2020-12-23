(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/communityForum/forumlists/forumlists"], {
    "04cb": function (t, n, a) {
      "use strict";
      (function (t) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var e = i(a("db9d")),
          o = i(a("8031"));

        function i(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        var s = function () {
            a.e("components/sub-unit/subunit").then(function () {
              return resolve(a("e864"))
            }.bind(null, a)).catch(a.oe)
          },
          u = function () {
            a.e("components/sub-botn/subbotn").then(function () {
              return resolve(a("e15b"))
            }.bind(null, a)).catch(a.oe)
          },
          c = {
            name: "",
            components: {
              subunit: s,
              subbotn: u
            },
            props: {},
            data: function () {
              return {
                id: "",
                lists: [],
                page: 1,
                ps: 15,
                isLoding: !1,
                hasMore: !0,
                text: "",
                value: "",
                keyword: "",
                flag: !1,
                tagdata: [],
                idx: 0,
                selectID: ""
              }
            },
            methods: {
              select: function (t, n) {
                this.idx = n, this.selectID = t.id, this.text = "", this.page = 1, this.lists = [], this.loadPageData()
              },
              confirm: function () {
                this.keyword = this.value, this.page = 1, this.hasMore = !0, this.lists = [], this.loadPageData(), this.flag = !0
              },
              empty: function () {
                this.value = "", this.flag = !1
              },
              remove: function () {
                t.hideKeyboard()
              },
              custom: function () {
                t.navigateTo({
                  url: "/pages/communityForum/forumlists/customTarbar/customTarbar"
                })
              },
              loadPageData: function () {
                var n = this;
                this.isLoding = !0, o.default.doOnlyTokenValid({
                  keepSuccess: !1,
                  showModal: !0,
                  fail: function () {
                    n.isLoding = !1, t.navigateBack({
                      delta: 1
                    })
                  },
                  success: function () {
                    e.default.communityPost({
                      data: {
                        villageId: n.id,
                        tribune_cat: n.selectID,
                        kw: n.keyword,
                        page: n.page,
                        pageSize: n.ps
                      },
                      fail: function (a) {
                        n.isLoding = !1, t.showToast({
                          title: "网络错误",
                          icon: "none"
                        })
                      },
                      success: function (t) {
                        if (n.isLoding = !1, 200 == t.statusCode && 200 == t.data.code) {
                          var a = t.data.data;
                          n.page = a.current_page + 1, n.hasMore = !!a.next_page_url, n.lists = n.lists.concat(a.data)
                        }
                      }
                    })
                  }
                })
              },
              gotoD: function (n) {
                t.navigateTo({
                  url: "/components/forum/forumdils?id=".concat(n.id)
                })
              },
              grtColumn: function () {
                var n = this;
                e.default.DefaultColumnList({
                  data: {},
                  fail: function () {
                    t.showToast({
                      title: "网络错误",
                      icon: "none"
                    })
                  },
                  success: function (t) {
                    200 == t.statusCode && 200 == t.data.code && (n.tagdata = t.data.data)
                  }
                })
              }
            },
            mounted: function () {},
            onLoad: function (t) {
              this.id = t.id
            },
            onReachBottom: function () {
              this.text = "没有更多了~", 1 != this.isLoding && 0 != this.hasMore && this.loadPageData()
            },
            onShow: function () {
              this.loadPageData(), this.grtColumn()
            },
            filters: {},
            computed: {},
            watch: {},
            directives: {}
          };
        n.default = c
      }).call(this, a("543d")["default"])
    },
    "11f1": function (t, n, a) {},
    "523f": function (t, n, a) {
      "use strict";
      var e;
      a.d(n, "b", (function () {
        return o
      })), a.d(n, "c", (function () {
        return i
      })), a.d(n, "a", (function () {
        return e
      }));
      var o = function () {
          var t = this,
            n = t.$createElement,
            a = (t._self._c, t.lists.length > 0 ? t.__map(t.lists, (function (n, a) {
              var e = t.__get_orig(n),
                o = n.created_at.slice(0, 16),
                i = n.album.slice(0, 3);
              return {
                $orig: e,
                g0: o,
                l0: i
              }
            })) : null);
          t.$mp.data = Object.assign({}, {
            $root: {
              l1: a
            }
          })
        },
        i = []
    },
    "67b2": function (t, n, a) {
      "use strict";
      a.r(n);
      var e = a("04cb"),
        o = a.n(e);
      for (var i in e) "default" !== i && function (t) {
        a.d(n, t, (function () {
          return e[t]
        }))
      }(i);
      n["default"] = o.a
    },
    7511: function (t, n, a) {
      "use strict";
      var e = a("11f1"),
        o = a.n(e);
      o.a
    },
    b6ea: function (t, n, a) {
      "use strict";
      (function (t) {
        a("d774");
        e(a("66fd"));
        var n = e(a("dad3"));

        function e(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        t(n.default)
      }).call(this, a("543d")["createPage"])
    },
    dad3: function (t, n, a) {
      "use strict";
      a.r(n);
      var e = a("523f"),
        o = a("67b2");
      for (var i in o) "default" !== i && function (t) {
        a.d(n, t, (function () {
          return o[t]
        }))
      }(i);
      a("7511");
      var s, u = a("f0c5"),
        c = Object(u["a"])(o["default"], e["b"], e["c"], !1, null, "6ae53536", null, !1, e["a"], s);
      n["default"] = c.exports
    }
  },
  [
    ["b6ea", "common/runtime", "common/vendor"]
  ]
]);