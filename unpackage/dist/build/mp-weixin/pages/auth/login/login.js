(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/auth/login/login"], {
    2324: function (t, e, n) {},
    "29c5": function (t, e, n) {
      "use strict";
      var o = n("2324"),
        i = n.n(o);
      i.a
    },
    "6b7a": function (t, e, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var o = u(n("3dff")),
          i = u(n("bd56")),
          a = u(n("8031"));

        function u(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        var r = {
          name: "",
          components: {},
          props: {},
          data: function () {
            return {
              flag: !1,
              text: "获取验证码",
              code: !0,
              timer: 60,
              form: {
                phone: "",
                Verification: ""
              },
              rules: {
                phone: [{
                  pattern: /^1[3|4|5|7|8][0-9]{9}$/,
                  message: "手机号码格式不正确",
                  trigger: "blur"
                }, {
                  required: !0,
                  message: "请输入手机号码",
                  trigger: "blur"
                }]
              },
              isRegister: "false"
            }
          },
          methods: {
            addvercode: function () {
              var e = this;
              1 == this.code && ("" != this.form.phone ? (t.showLoading({
                title: "发送中..."
              }), o.default.userLoginCode({
                data: {
                  tel: this.form.phone
                },
                fail: function () {
                  t.hideLoading(), t.showToast({
                    title: "网络错误",
                    icon: "none"
                  })
                },
                success: function (n) {
                  if (t.hideLoading(), 200 == n.statusCode)
                    if (200 == n.data.code) {
                      t.showToast({
                        title: n.data.msg,
                        duration: 2e3
                      }), e.form.Verification = n.data.data.code;
                      var o = setInterval((function () {
                        e.code = !1, e.timer--, e.text = "验证码(" + e.timer + "s)", e.timer <= 0 && (e.timer = 60, e.text = "重新发送", e.code = !0, clearInterval(o))
                      }), 1e3)
                    } else t.showToast({
                      title: n.data.msg,
                      icon: "none"
                    });
                  else t.showToast({
                    title: "网络请求出错",
                    icon: "none"
                  })
                }
              })) : t.showToast({
                title: "请输入手机号",
                icon: "none"
              }))
            },
            goback: function () {
              t.navigateBack({
                delta: 1
              })
            },
            register: function () {
              t.navigateTo({
                url: "/pages/user/register/register"
              })
            },
            find: function () {
              t.showToast({
                title: "功能还未开发",
                duration: 2e3,
                icon: "none"
              })
            },
            Login: function () {
              var e = this;
              t.showLoading({
                title: "加载中..."
              }), i.default.Signin({
                data: {
                  tel: this.form.phone,
                  smsCode: this.form.Verification
                },
                fail: function () {
                  t.hideLoading(), t.showToast({
                    title: "网络错误",
                    icon: "none"
                  })
                },
                success: function (n) {
                  if (t.hideLoading(), 200 == n.statusCode)
                    if (200 == n.data.code) {
                      var o = a.default.parseToken(n.data.data.jwt_token);
                      if (o) {
                        a.default.setToken(n.data.data.jwt_token, 1e3 * o.exp - 1e4, (function () {
                          a.default.execTask()
                        })), e.$refs.uToast.show({
                          title: n.data.msg,
                          type: "success"
                        });
                        var i = setTimeout((function () {
                          "true" == e.isRegister ? t.navigateBack({
                            delta: 3
                          }) : t.navigateBack({
                            delta: 1
                          }), clearTimeout(i)
                        }), 2e3)
                      }
                    } else t.showToast({
                      title: n.data.msg,
                      icon: "none"
                    })
                }
              })
            }
          },
          mounted: function () {},
          onReady: function () {
            this.$refs.uForm.setRules(this.rules)
          },
          onLoad: function (t) {
            t.register && (this.isRegister = t.register)
          },
          filters: {},
          computed: {},
          watch: {},
          directives: {}
        };
        e.default = r
      }).call(this, n("543d")["default"])
    },
    bdcf: function (t, e, n) {
      "use strict";
      (function (t) {
        n("d774");
        o(n("66fd"));
        var e = o(n("c506"));

        function o(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        t(e.default)
      }).call(this, n("543d")["createPage"])
    },
    c506: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n("ef30"),
        i = n("dd45");
      for (var a in i) "default" !== a && function (t) {
        n.d(e, t, (function () {
          return i[t]
        }))
      }(a);
      n("29c5");
      var u, r = n("f0c5"),
        s = Object(r["a"])(i["default"], o["b"], o["c"], !1, null, "13cc7f0f", null, !1, o["a"], u);
      e["default"] = s.exports
    },
    dd45: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n("6b7a"),
        i = n.n(o);
      for (var a in o) "default" !== a && function (t) {
        n.d(e, t, (function () {
          return o[t]
        }))
      }(a);
      e["default"] = i.a
    },
    ef30: function (t, e, n) {
      "use strict";
      n.d(e, "b", (function () {
        return i
      })), n.d(e, "c", (function () {
        return a
      })), n.d(e, "a", (function () {
        return o
      }));
      var o = {
          uForm: function () {
            return n.e("uview-ui/components/u-form/u-form").then(n.bind(null, "a1be"))
          },
          uFormItem: function () {
            return Promise.all([n.e("common/vendor"), n.e("uview-ui/components/u-form-item/u-form-item")]).then(n.bind(null, "239a"))
          },
          uInput: function () {
            return Promise.all([n.e("common/vendor"), n.e("uview-ui/components/u-input/u-input")]).then(n.bind(null, "8af1"))
          },
          uToast: function () {
            return n.e("uview-ui/components/u-toast/u-toast").then(n.bind(null, "c048"))
          }
        },
        i = function () {
          var t = this,
            e = t.$createElement;
          t._self._c
        },
        a = []
    }
  },
  [
    ["bdcf", "common/runtime", "common/vendor"]
  ]
]);