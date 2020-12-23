(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    ["components/sub-botn/submy"], {
        "2ebf": function (t, n, e) {
            "use strict";
            (function (t) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.default = void 0;
                var e = {
                    name: "",
                    components: {},
                    props: {
                        ids: {
                            type: String
                        }
                    },
                    data: function () {
                        return {
                            icondata: [{
                                icon: "https://oss.kuaitongkeji.com/static/img/app/forum/home1.png",
                                titel: "论坛主页",
                                url: "/pages/communityForum/forumlists/forumlists"
                            }, {
                                icon: "https://oss.kuaitongkeji.com/static/img/app/forum/photo1.png",
                                url: "/pages/communityForum/release/release"
                            }, {
                                icon: "https://oss.kuaitongkeji.com/static/img/app/forum/my2.png",
                                titel: "我的"
                            }]
                        }
                    },
                    methods: {
                        add: function (n, e) {
                            n.url && t.redirectTo({
                                url: n.url + `?id=${this.ids}`
                            })
                        }
                    },
                    mounted: function () {
                    },
                    onLoad: function () {},
                    filters: {},
                    computed: {},
                    watch: {},
                    directives: {}
                };
                n.default = e
            }).call(this, e("543d")["default"])
        },
        "3b94": function (t, n, e) {
            "use strict";
            e.r(n);
            var o = e("2ebf"),
                i = e.n(o);
            for (var u in o) "default" !== u && function (t) {
                e.d(n, t, (function () {
                    return o[t]
                }))
            }(u);
            n["default"] = i.a
        },
        4525: function (t, n, e) {
            "use strict";
            e.r(n);
            var o = e("d5fa"),
                i = e("3b94");
            for (var u in i) "default" !== u && function (t) {
                e.d(n, t, (function () {
                    return i[t]
                }))
            }(u);
            e("ae57");
            var a, c = e("f0c5"),
                r = Object(c["a"])(i["default"], o["b"], o["c"], !1, null, "5151eef7", null, !1, o["a"], a);
            n["default"] = r.exports
        },
        "8e16": function (t, n, e) {},
        ae57: function (t, n, e) {
            "use strict";
            var o = e("8e16"),
                i = e.n(o);
            i.a
        },
        d5fa: function (t, n, e) {
            "use strict";
            var o;
            e.d(n, "b", (function () {
                return i
            })), e.d(n, "c", (function () {
                return u
            })), e.d(n, "a", (function () {
                return o
            }));
            var i = function () {
                    var t = this,
                        n = t.$createElement;
                    t._self._c
                },
                u = []
        }
    }
]);;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/sub-botn/submy-create-component',
    {
        'components/sub-botn/submy-create-component': (function (module, exports, __webpack_require__) {
            __webpack_require__('543d')['createComponent'](__webpack_require__("4525"))
        })
    },
    [
        ['components/sub-botn/submy-create-component']
    ]
]);