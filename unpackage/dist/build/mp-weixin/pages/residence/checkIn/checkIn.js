(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/residence/checkIn/checkIn"], {
    "1bfe": function (e, n, t) {
      "use strict";
      var i = t("8175"),
        a = t.n(i);
      a.a
    },
    5941: function (e, n, t) {
      "use strict";
      (function (e) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var i = c(t("db9d")),
          a = c(t("a6bb")),
          l = (c(t("9381")), c(t("78ac"))),
          o = c(t("8031"));

        function c(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        var s = function () {
            Promise.all([t.e("common/vendor"), t.e("components/lb-picker/index")]).then(function () {
              return resolve(t("3ee2"))
            }.bind(null, t)).catch(t.oe)
          },
          u = function () {
            t.e("components/sub-unit/subunit").then(function () {
              return resolve(t("e864"))
            }.bind(null, t)).catch(t.oe)
          },
          r = function () {
            t.e("components/checkIn/enclosure/enclosure").then(function () {
              return resolve(t("fcd5"))
            }.bind(null, t)).catch(t.oe)
          },
          d = function () {
            t.e("components/checkIn/remarks/remarks").then(function () {
              return resolve(t("5b4f"))
            }.bind(null, t)).catch(t.oe)
          },
          f = {
            name: "",
            components: {
              subunit: u,
              enclosure: r,
              remarks: d,
              LbPicker: s
            },
            props: {},
            data: function () {
              return {
                value: [],
                selecValue: "",
                options: [{
                  value: "1",
                  label: "户主"
                }, {
                  value: "2",
                  label: "家庭成员"
                }, {
                  value: "3",
                  label: "租户"
                }],
                record: [{
                  label: "姓名",
                  value: "",
                  required: !0,
                  disabled: !0
                }, {
                  label: "手机号",
                  value: "",
                  required: !0,
                  disabled: !0
                }, {
                  label: "身份证",
                  value: "",
                  required: !0,
                  disabled: !0
                }, {
                  label: "户型",
                  required: !0,
                  disabled: !0
                }, {
                  label: "地址",
                  value: "",
                  placeholder: "请选择",
                  required: !0,
                  disabled: !0
                }],
                show: !1,
                orgVillageLists: [],
                renderVillageLists: [],
                id: [],
                household: "",
                files: []
              }
            },
            methods: {
              Application: function () {
                e.navigateTo({
                  url: "/pages/residence/checkRecord/checkRecord"
                })
              },
              selectOne: function (e) {
                this.selecValue = e.label, this.household = e.value
              },
              goback: function () {
                e.navigateBack({
                  delta: 1
                })
              },
              Onshow: function (e) {
                e == this.record.length - 1 && (this.show = !0)
              },
              confirm: function (e) {
                var n = "",
                  t = [],
                  i = [];
                e.map((function (e) {
                  i.push(e.extra), null != e.label && (n += e.label), null == e.value && e.value, t.push(e.value)
                })), this.id = i, this.value = t, this.record.map((function (e, t) {
                  4 === t && (e.value = n)
                }))
              },
              add: function (e) {
                this.files = e
              },
              Submit: function () {
                if (1 != this.$refs.encl.isLoding)
                  if ("" != this.household)
                    if (0 != this.id.length) {
                      e.showLoading({
                        title: "提交中..."
                      });
                      var n = this.$refs.marks.value;
                      a.default.moveInApply({
                        data: {
                          type: this.household,
                          villageId: this.id[0],
                          buildingId: this.id[1],
                          apartmentId: this.id[2],
                          floorId: this.id[3],
                          roomId: this.id[4],
                          user_remark: n,
                          files: this.files
                        },
                        fail: function (n) {
                          e.hideLoading(), e.showToast({
                            title: "网络错误",
                            icon: "none"
                          })
                        },
                        success: function (n) {
                          if (e.hideLoading(), 200 == n.statusCode)
                            if (200 == n.data.code) {
                              e.showToast({
                                title: n.data.msg,
                                duration: 2e3
                              });
                              var t = setTimeout((function () {
                                e.redirectTo({
                                  url: "/pages/residence/checkRecord/checkRecord"
                                }), clearTimeout(t)
                              }), 2000)
                            } else e.showToast({
                              title: n.data.msg,
                              icon: "none"
                            });
                          else e.showToast({
                            title: "网络请求出错",
                            icon: "none"
                          })
                        }
                      })
                    } else e.showToast({
                      title: "请选择地址",
                      icon: "none"
                    });
                else e.showToast({
                  title: "请选择住户类型",
                  icon: "none"
                })
              },
              loadVillageLists: function () {
                var n = this;
                i.default.selectLists({
                  data: {},
                  fail: function (n) {
                    e.showToast({
                      title: "网络错误",
                      icon: "none"
                    })
                  },
                  success: function (e) {
                    200 == e.statusCode && 200 == e.data.code && (n.orgVillageLists = e.data.data, n.renderMSelect())
                  }
                })
              },
              renderMSelect: function () {
                if (this.orgVillageLists && 0 != this.orgVillageLists.length) {
                  var e = [];
                  this.orgVillageLists.forEach((function (n, t) {
                    var i = {
                      label: n.name,
                      value: t,
                      extra: n.id,
                      children: []
                    };
                    if (!n.buildings) return !0;
                    n.buildings.forEach((function (e, n) {
                      var t = {
                        label: e.name,
                        value: n,
                        extra: e.id,
                        children: []
                      };
                      if (!e.apartments) return !0;
                      e.apartments.forEach((function (e, n) {
                        var i = {
                          label: e.name,
                          value: n,
                          extra: e.id,
                          children: []
                        };
                        if (!e.floors) return !0;
                        e.floors.forEach((function (e, n) {
                          var t = {
                            label: e.name,
                            value: n,
                            extra: e.id,
                            children: []
                          };
                          if (!e.rooms) return !0;
                          e.rooms.forEach((function (e, n) {
                            t.children.push({
                              label: e.room_number,
                              value: n,
                              extra: e.id
                            })
                          })), i.children.push(t)
                        })), t.children.push(i)
                      })), i.children.push(t)
                    })), e.push(i)
                  })), this.renderVillageLists = e
                } else this.renderVillageLists = []
              },
              loadUserData: function () {
                var n = this;
                o.default.doOnlyTokenValid({
                  showModal: !0,
                  keepSuccess: !1,
                  success: function () {
                    l.default.userDeta({
                      data: {},
                      fail: function () {
                        e.showToast({
                          title: "网络错误",
                          icon: "none"
                        })
                      },
                      success: function (e) {
                        if (200 == e.statusCode && 200 == e.data.code) {
                          var t = e.data.data;
                          n.record[0].value = t.username, n.record[1].value = t.tel.slice(0, 3) + "****" + t.tel.slice(7, 11), n.record[2].value = t.id_card_no.slice(0, 3) + "**********" + t.id_card_no.slice(t.id_card_no.length - 4, t.id_card_no.length)
                        }
                      }
                    })
                  },
                  fail: function () {
                    e.switchTab({
                      url: "/pages/index/index"
                    })
                  }
                })
              }
            },
            mounted: function () {
              this.loadVillageLists()
            },
            onShow: function () {
              this.loadUserData()
            },
            onLoad: function () {},
            filters: {},
            computed: {},
            watch: {},
            directives: {}
          };
        n.default = f
      }).call(this, t("543d")["default"])
    },
    7704: function (e, n, t) {
      "use strict";
      (function (e) {
        t("d774");
        i(t("66fd"));
        var n = i(t("c2df"));

        function i(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        e(n.default)
      }).call(this, t("543d")["createPage"])
    },
    8175: function (e, n, t) {},
    a99d: function (e, n, t) {
      "use strict";
      t.r(n);
      var i = t("5941"),
        a = t.n(i);
      for (var l in i) "default" !== l && function (e) {
        t.d(n, e, (function () {
          return i[e]
        }))
      }(l);
      n["default"] = a.a
    },
    c2df: function (e, n, t) {
      "use strict";
      t.r(n);
      var i = t("ca09"),
        a = t("a99d");
      for (var l in a) "default" !== l && function (e) {
        t.d(n, e, (function () {
          return a[e]
        }))
      }(l);
      t("1bfe");
      var o, c = t("f0c5"),
        s = Object(c["a"])(a["default"], i["b"], i["c"], !1, null, "4769195c", null, !1, i["a"], o);
      n["default"] = s.exports
    },
    ca09: function (e, n, t) {
      "use strict";
      t.d(n, "b", (function () {
        return a
      })), t.d(n, "c", (function () {
        return l
      })), t.d(n, "a", (function () {
        return i
      }));
      var i = {
          uField: function () {
            return t.e("uview-ui/components/u-field/u-field").then(t.bind(null, "fb1c"))
          },
          easySelect: function () {
            return t.e("components/easy-select/easy-select").then(t.bind(null, "2b0c"))
          },
          uSelect: function () {
            return t.e("uview-ui/components/u-select/u-select").then(t.bind(null, "1ce0"))
          }
        },
        a = function () {
          var e = this,
            n = e.$createElement;
          e._self._c
        },
        l = []
    }
  },
  [
    ["7704", "common/runtime", "common/vendor"]
  ]
]);