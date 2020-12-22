(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    ["components/userCenter/actionBar"], {
        "308a": function (t, e, i) {},
        4240: function (t, e, i) {
            "use strict";
            var a;
            i.d(e, "b", (function () {
                return o
            })), i.d(e, "c", (function () {
                return n
            })), i.d(e, "a", (function () {
                return a
            }));
            var o = function () {
                    var t = this,
                        e = t.$createElement;
                    t._self._c
                },
                n = []
        },
        "44ac": function (t, e, i) {
            "use strict";
            var a = i("308a"),
                o = i.n(a);
            o.a
        },
        "55fd": function (t, e, i) {
            "use strict";
            (function (t) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0;
                var i = {
                    name: "",
                    components: {},
                    props: {},
                    data: function () {
                        return {
                            locdata: [{
                                image: "https://oss.kuaitongkeji.com/static/img/app/user/Checkin.png",
                                titel: "入驻申请",
                                url: "/pages/residence/checkRecord/checkRecord"
                            }, {
                                image: "https://oss.kuaitongkeji.com/static/img/app/user/visit.png",
                                titel: "拜访申请",
                                url: "/pages/visitapplication/goRecord/goRecord"
                            }, {
                                image: "https://oss.kuaitongkeji.com/static/img/app/user/record.png",
                                titel: "来访记录",
                                url: "/pages/operation/visitRecord/visitRecord"
                            }, {
                                image: "https://oss.kuaitongkeji.com/static/img/app/user/scan.png",
                                titel: "回家二维码",
                                url: "/pages/qrcode/qrCode/qrCode"
                            }, {
                                image: "https://oss.kuaitongkeji.com/static/img/app/user/Trecords.png",
                                titel: "出行记录",
                                url: "/pages/user/travelRecords/travelRecords"
                            }, {
                                image: "https://oss.kuaitongkeji.com/static/img/app/user/about.png",
                                titel: "关于快通",
                                url: "/pages/user/versionNumber/versionNumber"
                            }, {
                                image: "https://oss.kuaitongkeji.com/static/img/app/user/Logout.png",
                                titel: "退出登录",
                                signout: "signout"
                            }]
                        }
                    },
                    methods: {
                        operation: function (e, i) {
                            this.$emit("add", e), e.url && t.navigateTo({
                                url: e.url
                            })
                        }
                    },
                    mounted: function () {},
                    onLoad: function () {},
                    filters: {},
                    computed: {},
                    watch: {},
                    directives: {}
                };
                e.default = i
            }).call(this, i("543d")["default"])
        },
        "85bf": function (t, e, i) {
            "use strict";
            i.r(e);
            var a = i("4240"),
                o = i("c853");
            for (var n in o) "default" !== n && function (t) {
                i.d(e, t, (function () {
                    return o[t]
                }))
            }(n);
            i("44ac");
            var r, s = i("f0c5"),
                c = Object(s["a"])(o["default"], a["b"], a["c"], !1, null, "d4ef947e", null, !1, a["a"], r);
            e["default"] = c.exports
        },
        c853: function (t, e, i) {
            "use strict";
            i.r(e);
            var a = i("55fd"),
                o = i.n(a);
            for (var n in a) "default" !== n && function (t) {
                i.d(e, t, (function () {
                    return a[t]
                }))
            }(n);
            e["default"] = o.a
        }
    }
]);;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/userCenter/actionBar-create-component',
    {
        'components/userCenter/actionBar-create-component': (function (module, exports, __webpack_require__) {
            __webpack_require__('543d')['createComponent'](__webpack_require__("85bf"))
        })
    },
    [
        ['components/userCenter/actionBar-create-component']
    ]
]);