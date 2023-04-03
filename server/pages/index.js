exports.ids = [7,6];
exports.modules = {

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FirstQCELL.vue?vue&type=template&id=0db1781e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticStyle: {
      "width": "100%",
      "height": "600px"
    },
    attrs: {
      "id": "sheetarea"
    }
  }, []);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/FirstQCELL.vue?vue&type=template&id=0db1781e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FirstQCELL.vue?vue&type=script&lang=js&
/* harmony default export */ var FirstQCELLvue_type_script_lang_js_ = ({
  mounted() {
    // var sampleData = [{"name":"Hello","message":"큐셀!","etc":"가장 간단한 큐셀 그리드입니다."}];  

    var QCELLProp = {
      id: 'qcell',
      parentid: 'sheetarea',
      data: {
        'input': [{
          "name": "Hello",
          "message": "큐셀!",
          "etc": "가장 간단한 첫번째 큐셀 그리드입니다."
        }]
      },
      columns: [{
        key: 'name',
        type: 'input',
        title: ['컬럼1'],
        width: "20%"
      }, {
        key: 'message',
        title: ['컬럼2'],
        width: "30%"
      }, {
        key: 'etc',
        title: ['컬럼3'],
        width: "50%"
      }]
    };
    setTimeout(function () {
      QCELL.create(QCELLProp);

      //qcell = QCELL.getInstance("qcell");  
    });
  }
});
// CONCATENATED MODULE: ./components/FirstQCELL.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FirstQCELLvue_type_script_lang_js_ = (FirstQCELLvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/FirstQCELL.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FirstQCELLvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d0df3c04"
  
)

/* harmony default export */ var FirstQCELL = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=23d8561c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content",
    attrs: {
      "role": "main"
    }
  }, [_vm._ssrNode("<div class=\"container-fluid\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<nav id=\"sidebarMenu\" class=\"col-md-3 col-lg-2 d-md-block bg-light sidebar collapse\"><div class=\"sidebar-sticky pt-3\"><ul class=\"nav flex-column\"><li class=\"nav-item\"><a id=\"a001\" href=\"/\" class=\"nav-link active\" style=\"cursor:pointer\"><span data-feather=\"home\"></span>\n\t\t\t\t\t\t\tFirst QCELL\n\t\t\t\t\t\t\t</a></li> <li class=\"nav-item\"><a id=\"a002\" href=\"/p01stringformat\" class=\"nav-link\" style=\"cursor:pointer\"><span data-feather=\"file\"></span>\n\t\t\t\t\t\t\tString Format\n\t\t\t\t\t\t\t</a></li> <li class=\"nav-item\"><a id=\"a003\" href=\"/p02numberformat\" class=\"nav-link\" style=\"cursor:pointer\"><span data-feather=\"shopping-cart\"></span>\n\t\t\t\t\t\t\tNumber Format\n\t\t\t\t\t\t\t</a></li> <li class=\"nav-item\"><a id=\"a004\" href=\"/p03dateformat\" class=\"nav-link\" style=\"cursor:pointer\"><span data-feather=\"users\"></span>\n\t\t\t\t\t\t\tDate Format\n\t\t\t\t\t\t\t</a></li> <li class=\"nav-item\"><a id=\"a005\" href=\"/p04columntype\" class=\"nav-link\" style=\"cursor:pointer\"><span data-feather=\"bar-chart-2\"></span>\n\t\t\t\t\t\t\tColumn Type\n\t\t\t\t\t\t\t</a></li> <li class=\"nav-item\"><a id=\"a006\" href=\"/p05masterdetail\" class=\"nav-link\" style=\"cursor:pointer\"><span data-feather=\"bar-chart-2\"></span>\n\t\t\t\t\t\t\tMaster Detail\n\t\t\t\t\t\t</a></li></ul></div></nav> "), _vm._ssrNode("<div role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-md-4\">", "</div>", [_vm._ssrNode("<br><br> "), _vm._ssrNode("<div id=\"div1\">", "</div>", [_vm._ssrNode("<p>1. QCELL 을 로딩하기 위한 qcell.js 를 nuxt.config.js 에서 링크 한다.<br>\n              2. QCELL 을 사용하기 위한 컴포넌트나 페이지에서 해당 QCELL API 를 사용한다.<br>\n              3. QCELL.create 와 같이 QCELL 에 정의 된 API 를 통해서 QCELL 을 생성 한다.\n\t\t\t\t\t\t</p> <br> "), _c('FirstQCELL')], 2)], 2)], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=23d8561c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: 'IndexPage'
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "141fdf4f"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {FirstQCELL: __webpack_require__(26).default})


/***/ })

};;
//# sourceMappingURL=index.js.map