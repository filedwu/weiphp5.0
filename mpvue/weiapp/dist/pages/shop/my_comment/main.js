require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([16],{

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(427);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_01f2cd77_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(430);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(428)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-01f2cd77"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_01f2cd77_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\shop\\my_comment\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-01f2cd77", Component.options)
  } else {
    hotAPI.reload("data-v-01f2cd77", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 428:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      comments: [],
      userInfo: wx.getStorageSync('userInfo')
    };
  },

  computed: {
    // 时间处理
    commentList: function commentList() {
      var arr = this.comments;
      arr.forEach(function (item, idx) {
        item.cTime = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* dateDiff */])(item.cTime);
      });
      return arr;
    }
  },

  methods: {},

  onLoad: function onLoad() {
    var _this = this;

    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["g" /* post */])('shop/api/my_comment', {
      PHPSESSID: wx.getStorageSync('PHPSESSID'),
      uid: 1
    }).then(function (res) {
      _this.comments = res.lists;
    });
  }
});

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "comment"
  }, _vm._l((_vm.commentList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "comment-item"
    }, [_c('div', {
      staticClass: "comment-item__hd"
    }, [_c('img', {
      staticClass: "u-head__img",
      attrs: {
        "src": _vm.userInfo.avatarUrl
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "comment-item__name"
    }, [_vm._v(_vm._s(_vm.userInfo.name))]), _vm._v(" "), _c('p', {
      staticClass: "comment-item__time"
    }, [_vm._v(_vm._s(item.cTime))])], 1), _vm._v(" "), _c('div', {
      staticClass: "comment-item__bd"
    }, [_vm._v("\n      " + _vm._s(item.content) + "\n    ")]), _vm._v(" "), _c('div', {
      staticClass: "comment-item__ft"
    }, [_c('a', {
      staticClass: "goods-line"
    }, [_c('img', {
      staticClass: "u-goods__img",
      attrs: {
        "src": item.goods_img
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "goods-line__right"
    }, [_c('p', {
      staticClass: "u-goods__tt overflow-dot_row"
    }, [_vm._v(_vm._s(item.goods_title))]), _vm._v(" "), _c('div', {
      staticClass: "goods-line__ft"
    }, [_c('div', {
      staticClass: "goods-line__price"
    }, [_c('span', [_vm._v("¥" + _vm._s(item.sale_price))])])])], 1)])])])
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-01f2cd77", esExports)
  }
}

/***/ })

},[426]);
//# sourceMappingURL=main.js.map