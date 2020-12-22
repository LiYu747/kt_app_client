(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/communityForum/release/release"], {
    2223: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n("43ea"),
        a = n("72a3");
      for (var i in a) "default" !== i && function (t) {
        n.d(e, t, (function () {
          return a[t]
        }))
      }(i);
      n("b55b");
      var c, u = n("f0c5"),
        s = Object(u["a"])(a["default"], o["b"], o["c"], !1, null, "cfdcbcaa", null, !1, o["a"], c);
      e["default"] = s.exports
    },
    2951: function (t, e, n) {
      "use strict";
      (function (t) {
        n("d774");
        o(n("66fd"));
        var e = o(n("2223"));

        function o(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        t(e.default)
      }).call(this, n("543d")["createPage"])
    },
    "2a09": function (t, e, n) {},
    "43ea": function (t, e, n) {
      "use strict";
      n.d(e, "b", (function () {
        return a
      })), n.d(e, "c", (function () {
        return i
      })), n.d(e, "a", (function () {
        return o
      }));
      var o = {
          uPopup: function () {
            return n.e("uview-ui/components/u-popup/u-popup").then(n.bind(null, "71bb"))
          }
        },
        a = function () {
          var t = this,
            e = t.$createElement;
          t._self._c;
          t._isMounted || (t.e0 = function (e) {
            t.show = !0
          }, t.e1 = function (e) {
            t.show = !1
          })
        },
        i = []
    },
    "72a3": function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n("c23c"),
        a = n.n(o);
      for (var i in o) "default" !== i && function (t) {
        n.d(e, t, (function () {
          return o[t]
        }))
      }(i);
      e["default"] = a.a
    },
    b55b: function (t, e, n) {
      "use strict";
      var o = n("2a09"),
        a = n.n(o);
      a.a
    },
    c23c: function (t, e, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var o = i(n("db9d")),
          a = i(n("597d"));

        function i(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        var c = function () {
            n.e("components/sub-botn/subrelease").then(function () {
              return resolve(n("3916"))
            }.bind(null, n)).catch(n.oe)
          },
          u = function () {
            n.e("components/sub-unit/subunit").then(function () {
              return resolve(n("e864"))
            }.bind(null, n)).catch(n.oe)
          },
          s = {
            name: "",
            components: {
              subrelease: c,
              subunit: u
            },
            props: {},
            data: function () {
              return {
                id: "",
                image: [],
                show: !1,
                tagdata: [{
                  name: "推荐",
                  type: !0,
                  default: !0
                }, {
                  name: "热榜",
                  type: !0,
                  default: !0
                }],
                choiceData: [],
                title: "",
                content: "",
                isLoding: !1,
                choiceID: ""
              }
            },
            methods: {
              choice: function (t) {
                t.default || (t.type = !t.type)
              },
              ok: function () {
                var t = this;
                this.choiceData = this.tagdata.filter((function (t) {
                  return 1 == t.type
                })), this.choiceData.map((function (e) {
                  e.default || (t.choiceID += e.id + ",")
                })), this.choiceID = this.choiceID.slice(0, this.choiceID.length - 1), this.show = !1
              },
              add: function () {
                var e = this;
                t.chooseImage({
                  success: function (n) {
                    e.isLoding = !0;
                    var o = n.tempFilePaths,
                      i = o.length;
                    0 != o.length && o.forEach((function (n) {
                      t.uploadFile({
                        url: a.default.services.file.upload,
                        filePath: n,
                        name: "file",
                        success: function (n) {
                          200 == n.statusCode ? 200 == JSON.parse(n.data).code ? (e.image.push(JSON.parse(n.data).data.url), e.image.length == i && (e.isLoding = !1, t.showToast({
                            title: "上传成功"
                          }))) : t.showToast({
                            title: JSON.parse(n.data).msg,
                            icon: "none"
                          }) : t.showToast({
                            title: "网络请求出错",
                            icon: "none"
                          })
                        }
                      })
                    }))
                  }
                })
              },
              Submit: function () {
                var e = this;
                1 != this.isLoding && (t.showLoading({
                  title: "提交中..."
                }), o.default.releasePost({
                  data: {
                    village_id: this.id,
                    title: this.title,
                    content: this.content,
                    albums: this.image,
                    tribune_cat: this.choiceID
                  },
                  fail: function (e) {
                    t.hideLoading(), t.showToast({
                      title: "网络错误",
                      icon: "none"
                    })
                  },
                  success: function (n) {
                    t.hideLoading(), 200 == n.statusCode ? 200 == n.data.code ? (t.showToast({
                      title: n.data.msg,
                      duration: 2e3
                    }), e.image = [], e.title = "", e.content = "", e.choiceData = []) : t.showToast({
                      title: n.data.msg,
                      icon: "none"
                    }) : t.showToast({
                      title: "网络请求出错",
                      icon: "none"
                    })
                  }
                }))
              },
              grtColumn: function () {
                var e = this;
                o.default.DefaultColumnList({
                  data: {},
                  fail: function () {
                    t.showToast({
                      title: "网络错误",
                      icon: "none"
                    })
                  },
                  success: function (t) {
                    200 == t.statusCode && 200 == t.data.code && (t.data.data.map((function (t) {
                      t.type = !1
                    })), e.tagdata = e.tagdata.concat(t.data.data))
                  }
                })
              }
            },
            onShow: function () {
             
            },
            mounted: function () {
              this.grtColumn()
            },
            onLoad: function (t) {
              this.id = t.id
              // console.log(t)
            },
            filters: {},
            computed: {},
            watch: {},
            directives: {}
          };
        e.default = s
      }).call(this, n("543d")["default"])
    }
  },
  [
    ["2951", "common/runtime", "common/vendor"]
  ]
]);