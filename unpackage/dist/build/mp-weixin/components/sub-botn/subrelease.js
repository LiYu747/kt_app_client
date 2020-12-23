(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    ["components/sub-botn/subrelease"], {
        "1b4d": function (t, n, o) {
            "use strict";
            (function (t) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.default = void 0;
                var o = {
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
                                icon: "https://oss.kuaitongkeji.com/static/img/app/forum/photo2.png"
                            }, {
                                icon: "https://oss.kuaitongkeji.com/static/img/app/forum/my1.png",
                                titel: "我的",
                                url: "/pages/communityForum/myforum/forum"
                            }]
                        }
                    },
                    methods: {
                        add: function (n, o) {
                            n.url && t.redirectTo({
                                url: n.url + `?id=${this.ids}`
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
                n.default = o
            }).call(this, o("543d")["default"])
        },
        "213d": function (t, n, o) {},
        3916: function (t, n, o) {
            "use strict";
            o.r(n);
            var u = o("eb37"),
                i = o("b1e7");
            for (var e in i) "default" !== e && function (t) {
                o.d(n, t, (function () {
                    return i[t]
                }))
            }(e);
            o("66cb");
            var c, r = o("f0c5"),
                a = Object(r["a"])(i["default"], u["b"], u["c"], !1, null, "3f63c446", null, !1, u["a"], c);
            n["default"] = a.exports
        },
        "66cb": function (t, n, o) {
            "use strict";
            var u = o("213d"),
                i = o.n(u);
            i.a
        },
        b1e7: function (t, n, o) {
            "use strict";
            o.r(n);
            var u = o("1b4d"),
                i = o.n(u);
            for (var e in u) "default" !== e && function (t) {
                o.d(n, t, (function () {
                    return u[t]
                }))
            }(e);
            n["default"] = i.a
        },
        eb37: function (t, n, o) {
            "use strict";
            var u;
            o.d(n, "b", (function () {
                return i
            })), o.d(n, "c", (function () {
                return e
            })), o.d(n, "a", (function () {
                return u
            }));
            var i = function () {
                    var t = this,
                        n = t.$createElement;
                    t._self._c
                },
                e = []
        }
    }
]);;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/sub-botn/subrelease-create-component',
    {
        'components/sub-botn/subrelease-create-component': (function (module, exports, __webpack_require__) {
            __webpack_require__('543d')['createComponent'](__webpack_require__("3916"))
        })
    },
    [
        ['components/sub-botn/subrelease-create-component']
    ]
]);